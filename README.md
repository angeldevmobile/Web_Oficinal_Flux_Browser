# Flux Browser — Sitio Oficial

Página de inicio y documentación oficial de Flux Browser, un navegador para Windows con motor propio escrito en **Rust**, interfaz **React** y cero telemetría.

Versión: v1.0.0-beta | Plataforma: Windows 10 / 11

---

## Estructura del proyecto

```
Oficial_flux_web/
├── index.html                   # Página de inicio
├── assets/
│   ├── css/
│   │   └── flux.css             # Estilos globales
│   ├── images/
│   │   ├── flux_logo.png        # Logo de la app
│   │   └── logo_flux.ico        # Favicon
│   └── js/
│       └── main.js              # JavaScript compartido
├── docs/
│   ├── index.html               # Inicio de la documentación
│   ├── getting-started.html     # Guía de instalación
│   ├── features.html            # Características
│   ├── architecture.html        # Arquitectura técnica
│   └── changelog.html           # Historial de versiones
├── .env                         # Variables de entorno (no se sube)
├── .gitignore
├── package.json
└── vite.config.js
```

---

## Páginas

### Página de inicio (`index.html`)
Punto de entrada principal. Incluye la sección hero, características, botón de descarga y sección de comentarios de la comunidad conectada a Supabase.

### Documentación (`docs/`)
Documentación completa organizada en cuatro secciones:

- **Primeros pasos** — Descarga y ejecuta Flux Browser en segundos. Sin instalador.
- **Características** — Funcionalidades integradas y diferenciadores.
- **Arquitectura** — Detalles técnicos del diseño interno del navegador.
- **Changelog** — Historial de versiones y próximas mejoras.

---

## Tecnologías

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura de páginas |
| Tailwind CSS (CDN) | Estilos utilitarios |
| JavaScript (ESM) | Interacciones de UI |
| Vite | Servidor de desarrollo y build de producción |
| Supabase | Backend de comentarios de la comunidad |
| Inter (Google Fonts) | Tipografía |

---

## Variables de entorno

Crea un archivo `.env` en la raíz con las siguientes variables (nunca lo subas al repositorio):

```env
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_KEY=tu-anon-key-publica
```

En Render u otro proveedor de hosting, configura estas mismas variables desde el panel de variables de entorno.

---

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
```

La salida se genera en la carpeta `dist/`.

---

## Despliegue en Render

| Configuración | Valor |
|---|---|
| Build command | `npm run build` |
| Publish directory | `dist` |
| Variables de entorno | `VITE_SUPABASE_URL`, `VITE_SUPABASE_KEY` |

---

## Módulos JavaScript (`assets/js/main.js`)

| Función | Descripción |
|---|---|
| `initScrollSpy()` | Resalta el enlace activo del menú según la sección visible |
| `initFadeUp()` | Activa la animación de entrada en elementos con `.fade-up` |
| `initSidebarSpy()` | Resalta el enlace activo del sidebar en las páginas de documentación |
| `initMobileMenu()` | Abre y cierra el menú de navegación móvil |
| `initDownloadBtn()` | Registra clics en el botón de descarga vía `localStorage` |
| `initCodeCopy()` | Agrega un botón de copiar a elementos con `.code-block` |
| `initTypewriter(selector, texts, speed, pause)` | Anima un efecto de escritura rotando por un array de textos |

---

## Requisitos del sistema

- Windows 10 o Windows 11
- Navegador moderno para visualizar el sitio (Chrome, Edge, Firefox)

---

## Repositorio

[https://github.com/angeldevmobile/Web_Oficinal_Flux_Browser](https://github.com/angeldevmobile/Web_Oficinal_Flux_Browser)
