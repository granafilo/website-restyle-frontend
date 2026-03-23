# **Website Restyle Frontend \- Esercizio 3 (Vite \+ Multi-Branch)**

\[\]\[lighthouse\] \[\!\[Accessibility-80-orange.svg)\]\[lighthouse\] \[\!\[SEO-100-brightgreen.svg)\]\[lighthouse\]

Restyle evolutivo: V0 obsoleto → V3 dark/mesh 2026\.

[Repo](https://github.com/granafilo/website-restyle-frontend)

## **🚀 Setup Vite (Ogni Branch)**


* `git clone https://github.com/granafilo/website-restyle-frontend.git`  
* `cd 03-sito-moderno`
* `npm install`  
* `npm run dev  # Versione del branch corrente`

## **📂 Distribuzione Versioni (Branch \+ Cartelle 01/02/03)**

Branch Git mantengono struttura Vite completa per fase:

| Versione | Branch/Tag | Lighthouse | Accesso |
| :---- | :---- | :---- | :---- |
| V0 | \- | \<50 | ​ |
| V1 | fix-v1 / v1 |  90 ​ | git checkout fix-v1 |
| V2 | fix-v2 / v2 |  87 ​ | git checkout fix-v2 |
| V3 | master | 91 ​ | git checkout master |

## **🎮 Testa Versioni Passo-Passo**


* *`# 1. V3 (main - raccomandato)`*  
* `git checkout master`  
* `cd 03-sito-moderno`
* `npm run dev  # localhost:5173 → Dark theme mesh-glow`  
*   
* *`# 2. V2`*  
* `git checkout fix-v2` 
* `cd 03-sito-moderno` 
* `npm run dev  # UI Figma + hover animation`  
*   
* *`# 3. V1`*  
* `git checkout fix-v1`  
* `cd 03-sito-moderno`
* `npm run dev  # HTML semantico responsive`

## **🌳 Git Flow Attuale (Corretto\!)**



* `main ── 03-moderno/ ── V3 FINAL (Tailwind dark)`  
*  `│`  
*  `├─ fix-v2  ── V2 (UI/anim)`  
*  `│`  
*  `└─ fix-v1  ── V1 (HTML5)`

Comandi:


* `git branch -a              # Lista branch`  
* `git log --oneline --graph  # Evoluzione`  
* `git diff v1..main          # Cambiamenti totali`

## **📊 Metriche Evolutive**

| Versione | Perf. | FCP | Note Cartella |
| :---- | :---- | :---- | :---- |
| V1 (01/) | 90 | 1.1s | Semantico puro |
| V2 (02/) | 87 | 1.3s | Figma \+ CSS |
| V3 (03/) | 91 | 0.8s | Mesh \+ dark |

## **🛠 Stack per Fase (03-moderno/main)**



* `Vite + Tailwind + DaisyUI dark`  
* `Manrope/Space Grotesk fonts`  
* `CSS: mesh-gradients, glow-shadows`  
* `No JS: Pure anim performance`

## **🚀 Deploy (main/03-moderno)**



* `npm run build → dist/`  
* `GitHub Pages: main branch`  
* `Netlify: Drag dist/ → live V3`

## **📈 Versionamento Spiegato**

* master: V3 live   
* fix-v1: V1 completa   
* fix-v2: V2 intermedia  
* Tags v1/v2: Release precise per fase

Pro della tua distribuzione: Ogni branch \= snapshot completo (Vite \+ cartelle consegna). Perfetto per demo fasi\!

## **🙌 Credits**

Filippo Granata – Coding & Automation



