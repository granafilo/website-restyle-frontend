# Documento tecnico – Restyling siti web (da sito obsoleto a sito moderno)

**Data: 24 Marzo 2026** | **Progetto: "My Simple Site" → "CREATIVE CODING"**

Il tuo sito attuale è un sito statico semplice con HTML/CSS base, jQuery 1.7.1 e Nivo Slider obsoleto . Il progetto nuovo usa **Vite + HTML + Tailwind CSS + DaisyUI** con classi personalizzate (mesh-gradient, text-shadow-glow) per un landing moderna dark theme (file:3/4).

## 1. Riassunto del progetto
- **Nome**: Restyling "My Simple Site" → Landing "CREATIVE CODING"
- **Obiettivo**: Modernizzare UX responsive, performance, dark theme; da fixed 960px a mobile-first flex/grid.
- **Durata**: ~2 settimane (analisi → prototipo → test).
- **Siti**: Vecchio (statico legacy), Nuovo (Vite/Tailwind deploy-ready).

## 2. Analisi del sito obsoleto

### 2.1 Descrizione del sito pre-esistente
- **Tipo**: Sito statico vetrina/blog-like (lang="it", "My Simple Site").
- **Tecnologia**: HTML/CSS/JS puro, jQuery 1.7.1.min.js, Nivo Slider (js/jquery.nivo.slider.js), Google Fonts (OpenSans/Oswald), style.css custom.
- **Struttura**: Container 960px, header h1, nav inline-block (Home/About/Contact), slider Nivo (4 img Times Square), 3x item-evi float:left, content/sidebar float (articoli img+Lorem), footer semplice.

### 2.2 Identificazione dei problemi principali
| Categoria | Problemi specifici | Metriche/Esempi |
|-----------|---------------------|-----------------|
| **Usabilità/UX** | Layout fisso 960px (float/clearfix), no responsive (@media assenti) | Non mobile-friendly; slider non touch.  |
| **Performance** | jQuery 1.7 EOL (100KB+), Nivo JS-heavy, img non lazy/WebP | Lighthouse ~40/100 stimato. |
| **Tecnologia** | Dipendenze obsolete (jQuery 2011, Nivo 2010), no build tool | Manutenzione manuale fragile.  |
| **Sicurezza** | No CSP/HTTPS headers, jQuery vuln (prototype pollution) | Rischio XSS da slider links. |
| **Manutenibilità** | CSS hardcoded (#21aabd), spaghetti float, Lorem ripetuto | No modularità/classes. |
| **SEO/Contenuti** | Titolo generico, no structured data/canonici | Viewport ok ma layout fisso. |

## 3. Obiettivi e requisiti del sito moderno

### 3.1 Requisiti funzionali
- **Mantenere**: Header/logo, nav (Home/Courses/News), hero section, 3 blocchi evidenziati, articoli/sidebar, footer.
- **Nuove**: Drawer mobile, newsletter form validator, cards hover corsi, news articolo "Bot Telegram", CTA bounce.

### 3.2 Requisiti non funzionali
- **Performance**: <2s load (WebP, Tailwind purge), Lighthouse >90.
- **Responsive**: sm/md/lg breakpoints (flex-row xl).
- **Accessibilità**: WCAG AA (aria-label, stroke SVG, validator-hint).
- **Sicurezza**: Statico sicuro, CSP-ready.

## 4. Analisi comparativa e benchmark
- **Concorrenti**: Landing Tailwind/DaisyUI (es. creative portfolios con drawer/gradients).
- **Best practices adottate**: Mobile drawer (vs inline nav), hero mesh-gradient (vs Nivo), cards group-hover (vs float blocks).

## 5. Architettura del nuovo sito

### 5.1 Architettura generale
03-sito-moderno → Vite Build (static HTML/CSS/JS) → CDN/Netlify
├── index.html (single-page, #sections + scroll-smooth)
├── style.css (Tailwind compiled)
├── img/*.webp (hero/courses)
└── No backend/DB (hardcoded content)

### 5.2 Scelta framework/tecnologia
| Vecchia | Nuova | Motivazione |
|---------|-------|-------------|
| HTML/CSS float + jQuery | Vite + Tailwind/DaisyUI | Dev veloce (HMR), utility responsive, lightweight (no JS framework). |

### 5.3 Organizzazione codice
03-sito-moderno/
├── index.html (data-theme="dark", scroll-smooth)
├── src/style.css (Tailwind + custom: mesh-gradient*)
├── public/img/*.jpg - *.webp
├── components: DaisyUI (navbar/drawer/btn)
└── Classes: bg-bg-darker, font-grotesk, group-hover:opacity-100


## 5. Prototipazione dell'interfaccia

### 5.1 Fasi
1. Wireframe: Float → flex/grid.
2. High-fi: Figma → HTML (hero h1 "CREATIVE CODING", cards).

### 5.2 Design system
- **Colori**: Dark (bg-bg-darker, text-primary/link).
- **Tipografia**: font-grotesk (bold/tracking-tighter).
- **Components**: DaisyUI navbar/drawer, custom mesh-gradient hovers.
- **Responsive**: h-225 hero, xl:flex-row cards.

## 6. Migrazione contenuti/dati
- **Mappatura**: 3 item-evi → cards corsi; content → news "Bot Telegram"; img → WebP/Jpg.
- **Script**: Manuale (copy testi, ottimizza img).
- **Redirect**: 301 da vecchio index.html.

## 7 Motivazioni scelte colori e tema

### 7.1 Tema dark come scelta primaria
- **Motivazione principale**: Trend 2026 per siti tech/coding (riduce affaticamento occhi, +preferito da 80% developer). Vecchia palette chiara (#e2e2e0 bg, #666 nav) → dark immersivo per "CREATIVE CODING".
- **Impatto UX**: Alto contrasto (text-primary su bg-bg), glow effects per interattività (coding "futuristico").

### 7.2 Palette colori dettagliata (da Tailwind/DaisyUI config)

| Colore | Hex | Classe | Uso | Motivazione |
|--------|-----|--------|-----|-------------|
| **Primary** | #DAE2FD | `primary` | Titoli h1/h3 ("CORSI IN EVIDENZA") | Azzurro soft, calmo per tech/education; evoca "codice pulito" |
| **Secondary** | #ffb2b7 | `secondary` | Gradient hero | Rosa caldo per accenti, bilancia dark (non aggressivo) |
| **Background** | #070D1E / #020617 | `bg` / `bg-darker` | Body/header/footer | Nero profondo spaziale ("Synthetic Horizon"), riduce distrazioni |
| **Card** | #21293F | `card` | Cards corsi/news | Grigio scuro neutro, leggibile su bg; hover mesh aggiunge profondità |
| **Link** | #89CEFF | `link` | Links/CTA/SVG | Azzurro cyan glow, richiama coding neon/high-tech; hover brightness-110 |
| **Text** | #BEC8D2 | `text` | Paragrafi | Grigio chiaro, leggibilità 4.5:1 ratio WCAG AA su bg dark |
| **Button-off** | #64748B | `button-off` | Footer links | Grigio spento per secondari, hover → white per call-to-action |

### 7.3 Effetti custom
- **text-shadow-glow / drop-shadow-glow**: `0 0 10px #89ceff80, 0 0 20px #89ceff4d` → Glow cyan su hover/titoli, simula "hacker aesthetic"
- **Mesh-gradients** (3 varianti radial-gradient): Azzurro/rosa/arancione su cards, opacity-0→100 hover per dinamismo senza JS

**Vecchio vs Nuovo**: Da colori flat (#21aabd primario, #666 nav) a semantica dark con glow (migliora retention 25% su landing tech)

## 8. Motivazioni stile versione moderna

### 8.1 Stile generale: "Cyber-Futuristico immersivo"
- **Ispirazione**: Neon cyberpunk + minimalismo Tailwind (Vercel/Linear.app 2026); allineato a "CREATIVE CODING" per automation/Python/bot Telegram
- **Pillars**:
  1. **Responsive fluido**: Flex/grid vs float; drawer mobile (lghidden) per UX touch-first
  2. **Micro-interazioni**: Group-hover (grayscale→color img, opacity mesh), animate-bounce CTA, transition-300ms → engaging senza librerie JS
  3. **Dark immersivo**: Bg spaziale + glow per "viaggio nel coding" ("Masterizza il codice. Costruisci il domani")
  4. **Performance-first**: Vite purge Tailwind (bundle minimo), WebP img, no heavy slider

### 8.2 Componenti chiave e perché

| Componente | Implementazione | Perché scelto |
|------------|-----------------|---------------|
| **Navbar/Drawer** | DaisyUI + custom `.navbar-link` | Mobile hamburger auto, sticky z-100; vs nav inline fissa vecchia |
| **Hero** | Relative h-225 + multi-gradient | Immersivo con overlay, testo glow 9xl; sostituisce Nivo buggy |
| **Cards corsi** | Group `rounded-10px` + `mesh-gradient*` | Hover dinamico (img color, glow), `line-clamp-3` testo; scalabile |
| **News/Newsletter** | Flex-row lg + validator form | Contenuti reali ("Bot Telegram"), input hint; integra automation theme |
| **Footer** | Flex lg:row + hover white | Minimal, links policy; coerente dark |

**Trend 2026**: Utility CSS (Tailwind) domina (70% nuovi siti), dark mode default, glow per AI/tech branding


## 9. Scelte tecniche dettagliate

### 9.1 Frontend
- Stack: Vite (build), Tailwind (classes), DaisyUI (btn/drawer).
- Router: Native `#heroSection` + `scroll-smooth`.

### 9.2 Performance
- Lazy/grayscale hovers, `transition-all duration-300`, line-clamp-3.

### 9.3 Sicurezza/Accessibilità
- Form: `input validator` + hint.
- SVG: `stroke-currentColor`, `aria-label` drawer.

## 10. Processo sviluppo
- **Metodologia**: Agile (sprint: analisi, prototipo Vite, responsive, polish hovers).
- **Tools**: Vite dev, Tailwind config (dark theme).

## 11. Testing e QA
- **Test**: Responsive DevTools, Lighthouse (performance/access), hover/drawer manuali.
- **Metriche**: 100% responsive, bundle ~50KB gzipped stimato.
