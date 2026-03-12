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

