# Flux Browser — Official Website

Official landing page and documentation site for Flux Browser, a Windows desktop browser built for speed and simplicity.

Version: v1.0.0-beta.1 | Platform: Windows 10 / 11

---

## Project Structure

```
Oficial_flux_web/
├── index.html              # Landing page
├── assets/
│   ├── css/
│   │   └── flux.css        # Global styles
│   └── js/
│       └── main.js         # Shared JavaScript
└── docs/
    ├── index.html          # Documentation home
    ├── getting-started.html # Installation guide
    ├── features.html       # Features overview
    ├── architecture.html   # Technical architecture
    └── changelog.html      # Version history
```

---

## Pages

### Landing page (`index.html`)
Main entry point of the site. Includes the hero section, feature highlights, and download call to action.

### Documentation (`docs/`)
Full documentation for the browser, organized into four sections:

- **Getting Started** — Download and install Flux Browser in under 60 seconds. No complex installers or external dependencies required.
- **Features** — Overview of built-in capabilities and differentiators.
- **Architecture** — Technical details about the browser's internal design.
- **Changelog** — Version history and upcoming roadmap.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| Tailwind CSS (CDN) | Utility-first styling |
| Vanilla JavaScript | UI interactions |
| Inter (Google Fonts) | Typography |
| CSS custom properties | Animations and theming |

---

## JavaScript Modules (`assets/js/main.js`)

| Function | Description |
|---|---|
| `initScrollSpy()` | Highlights the active nav link based on the visible section |
| `initFadeUp()` | Triggers fade-in animation on elements with `.fade-up` as they enter the viewport |
| `initSidebarSpy()` | Highlights the active sidebar link in documentation pages |
| `initMobileMenu()` | Toggles the mobile navigation menu open and closed |
| `initDownloadBtn()` | Tracks download button clicks locally via `localStorage` |
| `initCodeCopy()` | Adds a copy button to elements with `.code-block` |
| `initTypewriter(selector, texts, speed, pause)` | Animates a typewriter effect cycling through an array of strings |

All functions are initialized on `DOMContentLoaded`.

---

## Local Development

No build step required. Open any `.html` file directly in a browser, or serve with a local server:

```bash
npx serve .
```

---

## System Requirements

- Windows 10 or Windows 11
- Modern browser for viewing the site (Chrome, Edge, Firefox)

---

## Repository

[https://github.com/angeldevmobile/Web_Oficinal_Flux_Browser](https://github.com/angeldevmobile/Web_Oficinal_Flux_Browser)
