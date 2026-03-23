# **Documentazione Tecnica \- Restyle Sito Web: Evoluzione V1 → V2**

Autore: Filippo Granata  
Data: 21 Marzo 2026  
Progetto: Esercizio 3 \- Modernizzazione sito web datato (Fase 2: Progettazione UI/UX completa con Figma \+ Tailwind avanzato, animazioni, Design System evoluto) \+ bonus.​

## **1\. Introduzione e Contesto**

Questa sezione documenta il passaggio dalla Versione 1 (V1: HTML semantico responsive base) alla Versione 2 (V2: UI/UX moderna full, micro-animazioni, gradienti, hover effects).  
Obiettivo: Implementare wireframe/mockup Figma con Design System completo, elevando usabilità e appeal visivo mantenendo fedeltà layout.  
Link Figma V2: 

[Figma V2](https://www.figma.com/design/SuVcHYQFU8FGxN2SmAKqS5/Esercizio_3-V2)

 – Include varianti responsive e componenti.


## **2\. Analisi Miglioramenti da V1**

| Problema V1 | Evidenza | Impatto | Soluzione V2 |
| :---- | :---- | :---- | :---- |
| Design flat | No shadows/gradients | Bassa gerarchia visiva | Custom shadows (0px 0px 20px), background-gradient ​ |
| Interazioni assenti | No hover/anim | UX statica | group-hover:scale-110, translate-y-2, duration-500 ​ |
| Navbar basic | Drawer semplice | No polish desktop | Fixed top-25, backdrop-blur-md, rounded-full ​ |
| Performance stabile | Lighthouse 90/89 | Room per polish | Mantenuto 87/85 con features extra ​ |

## **3\. Obiettivi Raggiunti V2**

* Design System: Palette espansa, Kaushan Script per titoli, spacing 5-25px scalato.​  
* Animazioni leggere: Hover cards (scale+shadow), gradient btn con translate.​  
* Metriche: Performance 87 (FCP 1.3s), CLS 0.01 – Aggiunte features senza regressioni.​

## **4\. Scelte Progettuali e Design System**

## **4.1 Prototipazione Figma**

Evoluto da V1: Aggiunti stati hover, gradienti (amber-emerald-teal), card con backdrop-blur. Responsive fino 2xl.​

## **4.2 Palette e Tipografia Evoluta**

* Nuovi colori: \--primary \#2563EB, gradient from \#1E40AF to \#1D4ED8, \--beige-chiaro \#F8F3E1.​  
* Font: Inter \+ Kaushan Script (display=swap per titoli scriptuali).​  
* Radius/Spacing: \--radius-25 25px, \--spacing-gap 25px, btn-rounded-full 9999px.​

## **4.3 Tecnologie Avanzate**

| Tech | Perché V2 | Evoluzione da V1 |
| :---- | :---- | :---- |
| Tailwind \+ DaisyUI (light theme) | Componenti pronti (navbar, cards), custom vars ​ | Più @layer components |
| Custom CSS vars (20+) | Tema personalizzato coerente ​ | Da 10 a 20 vars |
| Micro-anim (no JS) | group-hover:scale-110, duration-500 ​ | Zero in V1 |

## **5\. Implementazione Chiave**

## **5.1 Snippet Codice Trasformativi**

V1 → V2 Navbar (fixed blur \+ rounded):

xml

* *`<!-- V1: sticky bg-verde-chiaro -->`*  
* *`<!-- V2: -->`*  
* `<header class="fixed top-25 drawer drawer-end z-100">`  
*   `<div class="navbar section-wrapper w-full px-25 py-5 bg-white60 backdrop-blur-md rounded-full max-w-1600px">`  
*     `<!-- ... hamburger + desktop nav con navbar-btn -->`  
*   `</div>`  
* `</header> [file:43]`

V2 Card Hover Animata:

* `article { @apply hover:translate-y-2 group ... shadow-0px_0px_20px_-13px_#000 duration-300; }`  
* `img { @apply group-hover:scale-110 duration-500; }`  
* `.btn-grid-link { @apply ... hover:shadow-[0px_0px_10px_0px_#41431B]; } [file:42]`

## **6\. Testing e Metriche Lighthouse**

Test localhost:5173.​

| Categoria | Score V2 | Vs V1 | Diagnostics |
| :---- | :---- | :---- | :---- |
| Performance | 87 | \-3 (extra CSS/immagini) | FCP 1.3s, LCP 1.9s, TBT 0ms ​ |
| Accessibility | 85 | \-4 (heading order) | Form labels migliorati |
| Best Practices | 96 | \= | Minify CSS 21kB savings |
| SEO | 100 | \= | Perfetto |

Insights: Immagini senza dimensioni (futuro: width/height), long tasks da anim.​

## **7\. Problemi Risolti**

* Gerarchia visiva V1: Aggiunti shadows gradienti → \+impatto.​  
* Mobile polish: Navbar fixed top-25 evita overlap.​  
* CLS basso (0.01): Transizioni smooth.​  
  Tempo: \~10h (anim 4h, custom CSS 4h, test 2h).

## **8\. Conclusioni e Prossimi Step**

V2 eleva V1 a prodotto professionale: animazioni fluide, Design System maturo, UX engaging senza JS.​  
Lezioni: Custom Tailwind vars scalano bene per temi complessi.  
Prossimo: V3 full Tailwind/Bootstrap, micro-interazioni JS leggere.​

## **9\. Appendice**

* Validazione: W3C passed, no console errors.  
* Referenze: DaisyUI themes, Tailwind animations.​  

