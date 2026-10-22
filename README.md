# HB | Web Design

**Small Business Web Design, Built To Make An Impact.**

A custom-built website for **HB Web Design**, an independent web design studio based in Durham, North Carolina, working with small businesses nationwide.

The goal is simple: help small businesses establish a professional online presence with clear messaging, mobile-friendly layouts, and an easy way for customers to get in touch.

> **Project status:** In development. The V18 homepage serves as the design foundation, with V19 styling carried across the remaining pages. Content and integrations are being refined before launch.

## About the project

This website is designed and developed with **HTML, CSS, and vanilla JavaScript**—no React, page builders, or CSS frameworks.

Its visual direction combines a minimal, modern agency layout with subtle retro-tech details:

- Near-black and charcoal surfaces with white and light-gray text
- Deep-red (`#6e0505`) highlight boxes and stronger red (`#ac0404`) accents
- Bold typography, numbered sections, and understated grid details
- Responsive layouts, accessible navigation, and restrained hover effects
- A consistent **HB | Web Design** text identity, with the **B** and divider in red

## Pages

| Page                           | Purpose                                                                                                     |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| **Home** (`index.html`)        | Studio introduction, key benefits, services, featured concepts, pricing overview, and project inquiry links |
| **Services** (`services.html`) | Custom website builds, redesigns, care plans, and the development process                                   |
| **Work** (`work.html`)         | Portfolio concept showcases; these are labeled as concepts, **not completed client projects**               |
| **Pricing** (`pricing.html`)   | One-time projects, monthly plans, and frequently asked questions                                            |
| **About** (`about.html`)       | Introduction to Hector Barahona, his approach, and his portrait                                             |
| **Contact** (`contact.html`)   | Project inquiry form and an outline of what happens next                                                    |

## Built with

- **HTML5** — semantic page structure and content
- **CSS3** — layout, responsive design, theming, and interactions
- **Vanilla JavaScript** — theme switching, mobile navigation, and small UI enhancements
- **Google Fonts** — typography loaded by the stylesheet

No package manager, build tool, or JavaScript dependencies are required to preview the site.

## Project structure

```text
hb-web-design/
├── index.html
├── services.html
├── work.html
├── pricing.html
├── about.html
├── contact.html
├── styles.css
├── main.js
├── README.md
└── assets/
    ├── portrait.jpg       # Photo used on Home and About
    └── ...                # Other local assets, such as the site favicon
```

The actual contents of `assets/` may differ; keep any images or icons referenced by the pages.

## Run locally

1. Clone the repository:

   ```bash
   git clone https://github.com/HB-WebDesign/hb-web-design.git
   cd hb-web-design
   ```

2. Open the folder in **Visual Studio Code**.
3. Open `index.html` using the **Live Server** extension.

Alternatively, if you have Python installed, run a local static server from the project folder:

```bash
python -m http.server 5500
```

Then visit **http://localhost:5500** in your browser.

There is no `npm install` or build step.

## Design and functionality

### Theme system

The website supports dark and light modes. Dark mode is the default for new visitors; the selected theme is remembered using the browser's `localStorage` under the key `hb-theme`.

### Responsive design

Layouts adapt to desktop and mobile screen sizes, including a collapsible mobile navigation menu. CSS accounts for users who prefer reduced motion.

### Shared styling

All pages load `styles.css`. The homepage is the reference for the site's typography, red buttons and accents, spacing, and overall visual language.

### Branding

The primary identity is **HB | Web Design**. The **B** and vertical divider are red. The decorative mascot watermark is no longer part of the homepage design.

## Before launching

The project is still being prepared for public use. Check the following before deploying:

- [ ] **Contact form:** Replace `YOUR_FORM_ID` in `contact.html` with a real Formspree form ID (or connect another form service), then test submissions.
- [ ] **Contact details:** Replace the sample email address and phone number in `contact.html` with approved business contact information.
- [ ] **Portfolio:** Replace concept placeholders with finished projects and screenshots when available; keep concept work accurately labeled.
- [ ] **Images:** Confirm `assets/portrait.jpg` and any favicon or other referenced assets exist and load correctly.
- [ ] **Content and pricing:** Review service details, package terms, and calls to action for accuracy.
- [ ] **Quality checks:** Test navigation, forms, mobile layouts, keyboard accessibility, contrast, and both color themes.
- [ ] **Deployment:** Configure the hosting platform and domain when ready.

## Current development focus

The current work is a site-wide design pass followed by individual refinement of **Services, Work, Pricing, About, and Contact**. The completed V18 homepage is being preserved as the visual reference.

## Repository

[HB-WebDesign / hb-web-design](https://github.com/HB-WebDesign/hb-web-design)

---

**Designed and developed by Hector Barahona · HB | Web Design**
