# **Website Restyle Frontend \- Esercizio 3**

\[ \[ \[

Modernizzazione completa di un sito web datato (2010 → 2026 standards)  
Da layout table/float obsoleto a landing responsive dark theme con TailwindCSS, mesh gradients, glow effects e scroll-smooth. 

[Live Demo](http://localhost:5173/)

 | 

[Repo](https://github.com/granafilo/website-restyle-frontend)

## **📋 Panoramica Progetto**

Progetto scolastico per restyling sito obsoleto 

[consegna](https://www.perplexity.ai/search/attachments/Dartamento.docx)

.  
Obiettivi: HTML5 semantico, mobile-first, Lighthouse ≥90, accessibilità WCAG, performance Core Web Vitals.​

| Fase | Punteggio | Focus | Lighthouse Perf. |
| :---- | :---- | :---- | :---- |
| V0 (Originale) | \- | Table layout, jQuery slider ​ | \<50 stimato |
| V1 | 20/20 | HTML semantico responsive ​ | 90 ​ |
| V2 | 30/30 | UI/UX Figma \+ anim hover ​ | 87 ​ |
| V3 (Finale) | 50/50 | Dark theme, mesh-glow, scroll-smooth ​ | 91 ​ |

Figma Prototypes: 

[V1](https://www.figma.com/design/MmpR0q8JFtwcEK6LyHS7Zf/Esercizio-3-V1)

 | 

[V2](https://www.figma.com/design/SuVcHYQFU8FGxN2SmAKqS5/Esercizio_3-V2)

 | 

[V3](https://www.figma.com/design/XausdV5gdMplWiwRySSMvY/Esercizio_3-V3)

## **🚀 Caratteristiche V3 Finale**

* Design System: Manrope \+ Space Grotesk fonts, dark theme DaisyUI, custom CSS vars (20+).  
* Visual Polish: Mesh radial gradients (3 varianti), text-shadow-glow, hover:scale-110 \+ translate.  
* UX: Scroll-smooth, fixed navbar blur, anchor navigation (\#heroSection).  
* Performance: FCP 0.8s, CLS 0.002, no JS blocking.​  
* Responsive: Mobile → 2xl (max-w-400), drawer sidebar.

## **🛠 Tech Stack**

| Categoria | Tecnologie |
| :---- | :---- |
| HTML/CSS | HTML5 semantico, TailwindCSS \+ DaisyUI (dark theme) |
| Fonts | Manrope (body), Space Grotesk (headings) Variable ​ |
| Effects | Mesh-gradients, drop-shadow-glow filter, backdrop-blur |
| Tools | Figma (prototipi), Vite (dev server), Lighthouse |
| No JS | Anim pure CSS per performance nativa |

## **📁 Struttura Repo**

text

* `website-restyle-frontend/`  
* `├── index.html (V3 principale)`  
* `├── style.css (V1/V2)`  
* `├── style-3.css (V3 Tailwind custom)`  
* `├── assets/`  
* `│   ├── fonts/ (Variable TTF)`  
* `│   ├── img/ (webp thumbnails)`  
* `│   └── icons/ (SVG hamburger/cross)`  
* `├── docs/ (questa README + Lighthouse PDF)`  
* `└── V0-original/ (index.html + style-2.css)`

## **🔍 Evoluzione Dettagliata**

## **Da V0 → V1: Semantica \+ Responsive**

* Problemi V0: Float layout 960px fisso, jQuery 1.7.  
* Fix: Flex/Grid, viewport meta, drawer mobile.  
* Guadagno: Lighthouse 90 Perf., TBT 0ms.​

## **Da V1 → V2: UI/UX \+ Anim**

* Aggiunte: Backdrop-blur navbar, hover shadows, gradient btn.  
* Figma: Stati hover, spacing 25px system.  
* Lighthouse: 87 Perf. (CLS 0.01).​

## **Da V2 → V3: Pro Dark Theme**

* Polish: Mesh-gradients (radial cyan-pink), glow \#89CEFF, scroll-smooth.​  
* Contenuti: Sezioni corsi/news tematici coding (HTML/JS/Python).  
* Top: FCP 0.8s, Perf. 91.​

## **📊 Metriche Lighthouse Progressive**

| Versione | Perf. | Access. | Best Pr. | SEO | FCP/LCP |
| :---- | :---- | :---- | :---- | :---- | :---- |
| V1 ​ | 90 | 89 | 96 | 100 | 1.1s/1.7s |
| V2 ​ | 87 | 85 | 96 | 100 | 1.3s/1.9s |
| V3 ​ | 91 | 80 | 96 | 100 | 0.8s/1.8s |

Todo: Image width/height espliciti, contrast fixes.

## **⚠️ Problemi Risolti & Lezioni**

* Float → Modern CSS: Flex/Grid \+ Tailwind utility 10x più veloce.  
* Performance: Lazy img \+ no JS → Core Web Vitals green.  
* Dark Mode: Native DaisyUI → futuro-proof.  
  Tempo totale: \~30h (10h/fase).

## **🚀 Setup Locale**

bash

* `git clone https://github.com/granafilo/website-restyle-frontend.git`  
* `cd website-restyle-frontend`  
* *`# Apri index.html o usa Vite: npm create vite@latest . -- --template vanilla`*  
* `npm run dev  # localhost:5173`

## **📄 Documentazione Completa**

Vedi file allegati: Lighthouse PDF, codici sorgente \[file:37-47\].

## **🙏 Credits & Referenze**

* [TailwindCSS](https://tailwindcss.com/)  
*  |   
* [DaisyUI](https://daisyui.com/)  
*  ​  
* [Designers Italia Guidelines](https://designers.italia.it/)  
* ​  
* Consegna:   
* [Documento.docx](https://www.perplexity.ai/search/attachments/Dartamento.docx)  
* ​  
* 

