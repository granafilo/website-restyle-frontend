# **Documentazione Tecnica: Analisi Critica del Sito Esistente**

## **Introduzione**

Questo documento analizza le criticità del codice sorgente (HTML e CSS) del sito web originale. Il progetto di partenza è stato sviluppato seguendo standard e metodologie in uso nei primi anni 2000/2010. L'obiettivo di questa analisi è evidenziare le pratiche obsolete per pianificare un refactoring completo basato sui moderni standard web (HTML5, CSS3, approccio Mobile-First e accessibilità).

---

## **1\. Struttura HTML e Semantica (La "Div Soup")**

Il codice originale presenta gravi carenze a livello di semantica e di dichiarazioni fondamentali:

* **DOCTYPE Obsoleto:** Il file inizia con \<\!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"...\>. Questa è la dichiarazione per HTML 4.01 Strict. Lo standard attuale richiede la dichiarazione semplificata \<\!DOCTYPE html\> per indicare l'uso di HTML5.  
* **Assenza del Viewport Meta Tag:** Nel \<head\> manca totalmente il tag \<meta name="viewport" content="width=device-width, initial-scale=1.0"\>. Questa assenza rende il sito **completamente non responsive**, impedendo ai dispositivi mobili di scalare e adattare i contenuti alla larghezza dello schermo.  
* **Dichiarazione Charset Datata:** Il meta tag \<meta http-equiv="content-type" content="text/html; charset=utf-8"\> è inutilmente prolisso. In HTML5 basta \<meta charset="UTF-8"\>.  
* **Mancanza di Tag Semantici:** Il layout è costruito interamente con elementi generici \<div\> associati a ID o classi (\#header, \#nav, \#content, \#sidebar). Questo approccio è noto come "Div Soup". Impedisce ai motori di ricerca e agli screen reader per non vedenti di comprendere la struttura della pagina.  
  * *Soluzione:* Andranno sostituiti con i tag semantici introdotti da HTML5 come \<header\>, \<nav\>, \<main\>, \<section\>, \<article\> e \<aside\>.

---

## **2\. CSS e Gestione del Layout (L'era dei Float)**

Il foglio di stile (style.css) riflette metodologie di impaginazione ormai superate e problematiche:

* **Layout a Larghezza Fissa:** Il contenitore principale ha una larghezza rigida: \#container { width: 960px; }. Questo approccio era standard quando i monitor avevano risoluzioni fisse (es. 1024x768), ma oggi causa la comparsa della barra di scorrimento orizzontale su qualsiasi dispositivo mobile.  
* **Box Model "Matematico":** Le larghezze e i padding sono calcolati manualmente (es. un elemento di 960px con padding di 20px per lato viene forzato a width: 920px;). Oggi si utilizza la proprietà box-sizing: border-box; per far sì che il padding non aumenti la larghezza totale dell'elemento.  
* **Uso Improprio dei Float:** L'intero sistema di colonne (sidebar, contenuti in evidenza) è gestito tramite la proprietà float: left;. Questa proprietà era nata per far scorrere il testo attorno alle immagini, non per creare griglie di layout.  
* **Hack del "Clearfix":** A causa dell'uso intensivo dei float, il layout collassa. Per rimediare, il codice originale abusa di div vuoti come \<div class="clear"\>\</div\> o applica clear: both; ad altri elementi (\#mes-full, \#footer) per ripristinare il flusso della pagina.  
  * *Soluzione:* I float andranno completamente eliminati in favore di **CSS Flexbox** o **CSS Grid**, che permettono di creare griglie fluide e responsive in modo nativo e pulito.

---

## **3\. Accessibilità (A11y) e Usabilità**

Il sito non rispetta le direttive WCAG per l'accessibilità:

* **Immagini prive di testo alternativo:** Quasi tutte le immagini, incluse quelle dello slider, hanno l'attributo alt="" vuoto (es. \<img src="img/times-square-traffic.jpg" alt="" /\>). Questo le rende invisibili agli screen reader.  
* **Link non descrittivi:** Nella navigazione e nella sidebar sono presenti numerosi link fittizi o non descrittivi (es. \<a href="\#"\>My Link\</a\>).  
* **Assenza di Focus visibile:** Non sono definite pseudo-classi :focus nel CSS per la navigazione da tastiera.

---

## **4\. Performance e Sicurezza**

* **Script bloccanti (Render-Blocking):** Le librerie JavaScript (jquery-1.7.1.min.js e Nivo Slider) sono caricate nel \<head\>. Questo blocca il rendering della pagina finché gli script non sono stati scaricati ed eseguiti. Andrebbero spostati prima della chiusura del \</body\> o caricati con l'attributo defer.  
* **Librerie Obsolete:** jQuery 1.7.1 è una versione estremamente vecchia e potenzialmente vulnerabile. Lo stesso vale per il plugin Nivo Slider.  
* **Risorse HTTP Miste:** I font di Google sono richiamati in HTTP (http://fonts.googleapis.com/...). In un sito moderno servito in HTTPS, questo causerebbe un errore di "Mixed Content" bloccando il caricamento dei font.

# **Documentazione Tecnica: Progettazione e Sviluppo del Nuovo Layout**

## **Introduzione**

A seguito dell'analisi delle criticità del sito legacy, si è optato per una riscrittura totale (refactoring) dell'architettura front-end. L'obiettivo è stato tradurre un mockup visivo moderno in un codice robusto, scalabile e manutenibile, adottando un rigoroso approccio **Mobile-First** e rispettando i moderni standard di accessibilità e performance.

---

## **1\. Progettazione Visiva (Figma) e Design System**

Il processo è iniziato con la definizione visiva in Figma, focalizzandosi sulla coerenza tipografica e spaziale.

* **Palette Cromatica:** È stata definita una palette custom (con variabili come `verde-chiaro`, `verde-scuro`, `beige-chiaro`, `nocciola`) per garantire consistenza in tutto il progetto.  
* **Geometria e Spaziature:** Il design ha stabilito una metrica base ricorrente (es. 25px per padding e gap, 1200px per la larghezza massima del layout). Questo ha posto le basi per l'astrazione delle variabili nel codice.  
* **Comportamento Adattivo:** Fin dalla fase di design si è previsto il comportamento degli elementi al variare del viewport: la sidebar desktop si converte in un menu off-canvas (Drawer) su mobile, e le card degli articoli cambiano l'ordine degli elementi interni per ottimizzare lo spazio verticale.

---

## **2\. Stack Tecnologico Moderno**

Le vecchie tecnologie (HTML 4, CSS manuale, jQuery) sono state sostituite con uno stack all'avanguardia:

* **HTML5 Semantico:** Utilizzo rigoroso di `<header>`, `<main>`, `<section>`, `<nav>` e `<footer>` per strutturare il DOM, migliorando la SEO e la leggibilità per gli screen reader.  
* **Tailwind CSS v4:** Scelto come framework utility-first per sviluppare rapidamente il layout mantenendo il file CSS compilato estremamente leggero.  
* **DaisyUI:** Integrato come plugin di Tailwind per gestire componenti complessi (come il Drawer mobile e il Carousel) in puro CSS, eliminando la necessità di caricare librerie JavaScript pesanti e render-blocking.

---

## **3\. Architettura CSS e Principio D.R.Y. (Don't Repeat Yourself)**

Per evitare la "zuppa di classi" (class soup) e garantire un codice altamente manutenibile, il progetto sfrutta le funzionalità avanzate di Tailwind v4 (`@theme` e `@layer components`):

* **Centralizzazione delle Variabili:** Nel blocco `@theme` sono state configurate variabili globali come `--spacing-25`, permettendo di sostituire valori arbitrari (es. `px-[25px]`) con classi standardizzate (`px-25`). Questo garantisce che una futura modifica al design system richieda l'aggiornamento di una sola riga di codice CSS.  
* **Gestione Strutturale degli Sfondi:** È stato implementato un pattern architetturale basato su due classi:  
  * `.section-wrapper`: applicata al tag `<section>` per gestire lo sfondo full-width e il centramento primario.  
  * `.container-1200`: applicata al `<div>` interno per ingabbiare i contenuti a una larghezza massima prestabilita (max-width) fornendo i padding di sicurezza.  
* **Componentizzazione degli Stili:** Gli stili ripetitivi sono stati astratti in classi semantiche nel livello components. Ad esempio, la classe `.heading-primary` gestisce tutta la tipografia dei titoli, mentre `.highlighted-card` e `.btn-grid-link` standardizzano l'aspetto dei blocchi e dei bottoni.

---

## **4\. Strategie di Layout Avanzate (Grid e Flexbox)**

L'abbandono totale della proprietà `float` ha richiesto un ripensamento geometrico delle interfacce:

* **Micro-Layout con Flexbox:** Utilizzato per l'allineamento monodimensionale, come la Navbar, il raggruppamento di Titolo e Testo, e la centratura dei contenuti all'interno delle sezioni.  
* **Macro-Layout e Asimmetria con CSS Grid:** Il corpo centrale della pagina (Articoli \+ Sidebar) è gestito tramite CSS Grid.  
* **Reflow Intelligente (Proprietà Order):** Nelle card degli articoli, la sfida era avere il titolo *sopra* l'immagine su mobile, ma *a lato* su desktop. Questo è stato risolto mantenendo un'unica struttura HTML (Single Source of Truth) e manipolando la proprietà CSS `order` insieme a `grid-cols-[350px_1fr]`.  
* **Standardizzazione delle Immagini:** Per prevenire la rottura del layout a causa di immagini con proporzioni diverse, è stata utilizzata la proprietà `aspect-ratio` (es. `aspect-[4/3]`) combinata con `object-cover`, garantendo crop fotografici sempre perfetti e uniformi.

---

## **5\. Accessibilità (A11y) e Usabilità**

I difetti della versione legacy sono stati corretti seguendo le best practice attuali:

* **Attributi Alt Descrittivi:** Tutte le immagini strutturali e le icone di navigazione (es. l'hamburger menu) sono state dotate di attributi `alt` esplicativi o, dove necessario per la pura decorazione visiva, gestite tramite `aria-label` sui pulsanti interattivi.  
* **Controllo della Lunghezza del Testo:** Per evitare che testi troppo lunghi distorcessero la geometria della Grid, è stata implementata la classe `line-clamp` (es. `line-clamp-10`), che tronca elegantemente il testo in eccesso garantendo altezze uniformi per i moduli informativi.

