# Verification and remaining checks

## Completed
- The dependency-free production build succeeds.
- Six HTML documents and their local links, image/font references and anchor targets pass integrity checks.
- JavaScript modules pass Node syntax checks.
- Logo is byte-identical to the supplied original. All runtime media and fonts are local.
- Rebrand artwork stays on its own page and is labelled as proposed.
- Source review corrections: desktop hamburger visibility, iframe motion state, nested 404 paths, text sizing and colour contrast.

## Blocked — visual verification is incomplete
The managed preview server started, but automatic browser approval review denied access to http://terminal.local:4173. The denial was not a manual user rejection. No alternative browser route was used to bypass it.

SCREENSHOT.png and SCREENSHOT-MOBILE.png are absent. No generated concept is presented as a running-app capture. The folder evidence checker must remain incomplete until genuine screenshots can be taken.

Before client sign-off, inspect all pages at 360, 390, 768, 1024, 1440 and 1920 pixels. Check overflow, hero framing, navigation, forms, filters, lightbox, focus restoration, reduced motion and JavaScript fallback. Capture real evidence in the root and record route, viewport and date in DESIGN.md.

## Hosting
Source pushes to main trigger the included Pages workflow. First-time activation requires Settings → Pages → Source: GitHub Actions. A passing source build does not establish deployment success; inspect the resulting workflow and deployment URL.
