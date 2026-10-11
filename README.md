# HB Web Design

Static website for HB Web Design, built with **HTML, CSS and vanilla JavaScript**. No build system is required.

## Preview locally

Open `index.html` with VS Code Live Server, or run `python -m http.server 5500` from the project directory and visit http://localhost:5500.

## Pages

- `index.html` — home
- `services.html` — services
- `work.html` — project concepts (not client case studies)
- `pricing.html` — indicative pricing; confirm business terms before launch
- `about.html` — background
- `contact.html` — contact form **disabled until configured**
- `styles.css` — design system and responsive styles
- `main.js` — theme, navigation and form enhancements

## Before publishing

- [ ] Configure a working form endpoint, test submission and remove the disabled state/status text
- [ ] Add real business contact information and consider a privacy policy
- [ ] Verify pricing, ownership terms, revision limits, cancellation terms and response-time promises
- [ ] Add actual project previews and replace concept placeholders after building demos
- [ ] Supply and verify `assets/favicon.png` and `assets/mascot.png`, or remove those references
- [ ] Test keyboard/mobile navigation, performance and accessibility in browsers
- [ ] Review all external font and form-provider privacy implications

## Light graphite visual refresh

Shared branding and hover treatments live in `styles.css`. The hero watermark uses `assets/mascot.png`, which you must supply locally in the repository for it to appear in either theme. Keep existing contact placeholders until business details are finalized.

## V3 design updates

- CSS-only browser preview on the homepage (illustrative concept, not a client project).
- Graph-paper grid restricted to hero and selected process sections.
- Removed the decorative mascot watermark/target from hero pages.
- Clearer headline and service cards; no frameworks or new dependencies.
- Reduced-motion support retained.
- Keep existing `assets/` folder. Contact placeholders and work concepts remain intentionally unfinished.


## Logo image
The homepage displays the same `assets/mascot.png` artwork in both light and dark themes. Keep your original transparent logo file under that path (the assets directory is not included here). The previous CSS browser preview and radial/target watermark have been removed.


Version 5: Hero mascot is displayed at full opacity, without filters or entrance fading, with a calmer backdrop in both themes. Keep `assets/mascot.png` locally.
