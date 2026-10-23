# Design metadata

This folder supports the source-derived root `DESIGN.md`; it does not contain the runtime UI. `design.json` uses schemaVersion 2: token primitives belong only in the root YAML, while extensions hold metadata, motion, shadows, breakpoints, evidence and ten scoped HTML/CSS component samples.

Read `../AGENTS.md`, `../PROJECT.md`, `../PRODUCT.md`, `../DIRECTION.md` and `../DESIGN.md` first. Treat final `../styles.css` and the consuming HTML/`../app.js` as implementation truth. Preserve the exact supplied logo artwork and retain concept/illustrative labels. Refresh the sidecar with root design documentation; do not copy primitive token arrays into it. Samples use inherited CSS variables with literal fallbacks, inline SVG and no framework runtime. Panel tonal ramps are synthesized exploration metadata, not shipped palette tokens. Interactive samples illustrate CSS/ARIA states; runtime menu, filter and modal handlers remain in `app.js`.

Verify JSON/YAML parsing, frontmatter token references, component references and scoped snippets. Run existing project checks for any runtime changes. No UI changed in this documentation pass.

Visual evidence remains incomplete as of 2026-10-23: root `SCREENSHOT.png` and `SCREENSHOT-MOBILE.png` are absent. Target route is `index.html`; target viewports are desktop and mobile with dimensions not recorded; capture dates are **not captured**. Automatic approval review denied the local preview origin. Do not fabricate screenshots or claim rendered approval. Open menu, gallery/lightbox, enquiry validation and reduced-motion states still need permitted real-browser inspection.
