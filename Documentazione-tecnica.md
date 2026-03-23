# **Documentazione Tecnica \- Restyle Sito Web: Evoluzione V0 → V1**

Autore: Filippo Granata  
Data: 14 Marzo 2026  
Progetto: Esercizio 3 \- Modernizzazione sito web datato (Fase 1: Ricreazione fedele con HTML5 semantico \+ prime ottimizzazioni responsive)​  
 \+ bonus partiali.​

## **1\. Introduzione e Contesto**

Questa documentazione descrive il passaggio dalla Versione 0 (V0: sito datato con layout table/float-based, non responsive) alla Versione 1 (V1: struttura HTML5 semantica, responsive base con CSS moderno).  
Obiettivo principale: Ricreare fedelmente il layout originale usando solo HTML5 semantico, eliminando obsoletozze come Nivo Slider jQuery e float layout, rispettando mobile-first.  
Sito V0 analizzato da screenshot e codice sorgente: design anni 2010, fisso 960px, slider JS pesante.

V0 Screenshot: Layout desktop-only con slider Nivo.​

## **2\. Analisi Problemi V0**

| Problema | Evidenza nel codice V0 | Impatto | Soluzione in V1 |
| :---- | :---- | :---- | :---- |
| Layout fisso | container { width: 960px; }, float left ​ | Non responsive (no viewport meta) | Flex/Grid \+ media queries, max-w-1200px ​ |
| HTML obsoleto | Div generici, no semantica, jQuery 1.7.1 ​ | SEO/accessibilità bassa | \<header\>, \<main\>, \<nav\>, lang="it" ​ |
| Performance | Slider JS \+ Google Fonts multiple | Blocking JS/CSS ​ | No JS iniziale, single CSS, lazy images ​ |
| Accessibilità | No alt completi, contrasti variabili | WCAG fallimenti | ARIA labels (es. drawer-toggle), alt su img ​ |

## **3\. Obiettivi Raggiunti V1**

* Fedele al layout: Slideshow header, 3 blocchi evidenza, articolo+sidebar, footer preservati.  
* Moderno: Viewport meta, semantic HTML, responsive navbar (drawer mobile).  
* Metriche: Lighthouse Performance 90, Accessibility 89, SEO 100.​

## **4\. Scelte Progettuali e Design System**

## **4.1 Prototipazione**

Progettato in Figma: Wireframe → Mockup high-fidelity con Design System (palette verde/beige ispirata natura moderna). Link: 

[Figma V1](https://www.figma.com/design/MmpR0q8JFtwcEK6LyHS7Zf/Esercizio-3-V1)

.​

## **4.2 Palette e Tipografia**

* Colori: \--verde-scuro \#323313, \--verde-chiaro \#EAF4BB, \--beige-chiaro \#F8F3E1 (alto contrasto WCAG).​  
* Font: Inter Variable (100-900wt), display=swap per performance.​  
* Spacing: \--spacing-gap 25px, radius 25px per coerenza.​

V1 Screenshot: Responsive navbar drawer, grid articoli.​

## **4.3 Tecnologie**

| Tech | Perché | Alternativa scartata |
| :---- | :---- | :---- |
| HTML5 semantico | SEO \+ screen reader ​ | Div soup V0 |
| TailwindCSS \+ DaisyUI | Utility-first rapido, componenti pronti (drawer, btn) ​ | Vanilla puro: troppo verbose |
| No JS (Fase 1\) | Performance nativa (TBT 0ms) ​ | jQuery Nivo V0 |

## **5\. Implementazione Chiave**

## **5.1 Struttura File**

text

`V1/`  
`├── index.html (12kB, semantico)`  
`├── style.css (Tailwind custom, 2.5kB)`  
`├── assets/fonts/ (Inter Variable)`  
`├── img/ (lazy loading)`  
`└── icons/ (SVG hamburger/cross)`

## **5.2 Snippet Codice Trasformativi**

V0 → V1 Header/Navbar (da float → drawer responsive):

xml

*`<!-- V0: div#navbar float -->`*  
*`<!-- V1: -->`*  
`<header class="drawer drawer-end sticky top-0 z-30 bg-verde-chiaro">`  
  `<input id="my-drawer-2" type="checkbox" class="drawer-toggle">`  
  `<div class="drawer-content flex flex-col">`  
    `<!-- Title + hamburger mobile -->`  
    `<label for="my-drawer-2" aria-label="open sidebar" class="btn btn-square btn-ghost lg:hidden">`  
      `<img src="icons/menu-hamburger.svg" alt="">`  
    `</label>`  
    `<!-- Desktop nav grid-cols-3 -->`  
  `</div>`  
`</header> [file:39]`

CSS Custom Tailwind (V1):

css

`@layer components {`  
  `.container-1200 { @apply w-full max-w-[1200px] px-[25px]; }`  
  `.btn-grid-link { @apply btn bg-beige-chiaro ... hover:shadow-[0px_0px_10px_0px_#41431B]; }`  
`} [file:40]`

## **6\. Testing e Metriche Lighthouse**

Test su localhost:5173 (Vite dev server).​

| Categoria | Score V1 | Miglioramento vs V0 stimato | Diagnostics |
| :---- | :---- | :---- | :---- |
| Performance | 90 | \+40 (no blocking JS) | FCP 1.1s, LCP 1.7s, TBT 0ms ​ |
| Accessibility | 89 | \+30 (ARIA, labels) | No form label errors |
| Best Practices | 96 | \+20 | Minify JS/CSS suggerito (futuro) |
| SEO | 100 | \+25 | Semantic \+ viewport |

Insights: Immagini senza width/height (fix: espliciti), no 3rd party.​

## **7\. Problemi Risolti**

* Float hell V0: Sostituito con Flexbox/Grid → no clearfix hacks .  
* Slider pesante: Placeholder statico img (futuro: Swiper leggero).  
* Cross-browser: Test Chrome/FF/Safari → scrollbar custom.​  
  Tempo totale: \~8h (struttura 4h, responsive 3h, test 1h).

## **8\. Conclusioni e Prossimi Step**

V1 fedelmente ricrea V0 ma moderna: responsive, semantica, performante (90+ Lighthouse).​  
Lezioni: Tailwind accelera prototipazione 3x vs vanilla.  
Prossimo: V2 Figma completo \+ Tailwind full, animazioni.​

## **9\. Appendice**
  
* Validazione: W3C HTML/CSS passed.  
* Referenze: Tailwind docs, DaisyUI components, Designers Italia.

