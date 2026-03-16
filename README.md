# Modern Responsive Landing Page

Una landing page ad alta fedeltà sviluppata per dimostrare la padronanza delle architetture CSS moderne, dei layout asimmetrici e del framework Tailwind CSS v4. 

Il progetto nasce dal refactoring di un layout legacy (basato su float e larghezze fisse) ed è stato interamente riscritto seguendo l'approccio **Mobile-First**, garantendo performance, accessibilità e un codice altamente manutenibile (D.R.Y.).

## Tecnologie Utilizzate

* **HTML5 Semantico**
* **Tailwind CSS v4** (Utility-first framework)
* **DaisyUI** (Componenti UI in puro CSS)
* **Vite** (Build tool e dev server)

## Funzionalità Principali

* **100% Responsive:** Layout fluido che si adatta a qualsiasi dispositivo (Mobile, Tablet, Desktop).
* **Zero JavaScript per l'UI:** Elementi interattivi complessi come il Drawer (menu laterale off-canvas) e il Carousel (slider) sono gestiti esclusivamente tramite HTML e CSS grazie a DaisyUI, garantendo zero render-blocking e massima velocità.
* **Layout Asimmetrico Avanzato:** Utilizzo combinato di CSS Grid e Flexbox per gestire il reflow dei contenuti (es. inversione dell'ordine tra immagine e titolo su dispositivi mobili rispetto al desktop) senza duplicare l'HTML.
* **Design System Custom:** Implementazione di un tema personalizzato tramite la direttiva `@theme` di Tailwind v4, estraendo spaziature, colori e border-radius in variabili globali.
* **Componenti D.R.Y.:** Isolamento degli stili ricorrenti (card, bottoni, tipografia) nel `@layer components` del CSS, mantenendo il DOM pulito e scalabile.

* **Performance & SEO Ottimizzate:** Punteggi Lighthouse massimizzati prestando attenzione ai Core Web Vitals. Compressione asset in formato WebP, prevenzione del CLS (tramite dimensioni esplicite), priorità di caricamento strategica (`fetchpriority` e `lazy loading`), file `robots.txt` per il crawling e minificazione spinta di CSS/JS tramite build di produzione.

## Installazione e Utilizzo (Local Development)

Per far girare questo progetto in locale sul tuo computer, assicurati di avere [Node.js](https://nodejs.org/) installato.

1. **Clona il repository:**
   `git clone https://github.com/granafilo/website-restyle-fronted.git`

2. **Entra nella directory del progetto:**
   `cd NOME-REPO`

3. **Installa le dipendenze:**
   `npm install`

4. **Avvia il server di sviluppo (Vite):**
   `npm run dev`

*Il progetto sarà visibile all'indirizzo `http://localhost:5173` (o la porta indicata nel terminale).*

## Scelte Architetturali

Questo progetto è stato costruito per essere scalabile. Invece di abusare delle utility class direttamente nell'HTML, il CSS è stato strutturato in modo intelligente:

* **Sfondi vs Contenitori:** È stato creato un sistema a doppia classe (`.section-wrapper` per gli sfondi full-width e `.container-1200` per ingabbiare i contenuti), risolvendo i classici problemi di overflow sugli schermi ultrawide.
* **Single Source of Truth:** La tipografia principale è gestita da classi come `.heading-primary`, permettendo di aggiornare il design system da un unico file CSS.
* **Gestione Immagini:** Utilizzo di `aspect-ratio` e `object-cover` per garantire crop uniformi indipendentemente dal formato originale della foto.

## Autore

Sviluppato da **Filippo Granata** come progetto scolastico.
* **LinkedIn:** www.linkedin.com/in/filippo-granata04
