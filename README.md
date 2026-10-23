# Expo Freight — client website concept

A static company website with a **separate proposed rebrand presentation**. The exact supplied Expo Freight PNG logo is preserved.

## Pages

| File | Purpose |
| --- | --- |
| index.html | Cinematic company homepage and service overview |
| services.html | Cross-border courier, customs clearing, overnight express and road freight |
| about.html | Introduction and service philosophy |
| rebrand.html | Separate proposed brand vision and mockup gallery |
| contact.html | Enquiry brief builder |
| 404.html | Missing-page recovery |

## Run

Requires Node 22+. No external runtime or build dependencies.

```sh
npm install
npm run dev
```

Open http://localhost:4173 . Restart the dev command after source edits. Build with `npm run build`; output is `dist/`. Check source with `npm test`.

## GitHub Pages

1. Open repository **Settings → Pages**.
2. Set **Build and deployment → Source** to **GitHub Actions**.
3. Open **Actions → Build and deploy Expo Freight → Run workflow** on main.
4. Wait for build and deploy to succeed. Use the deployment job's reported URL.

The workflow is `.github/workflows/pages.yml`. Relative URLs support the /EXPOFREIGHT/ project prefix; 404.html has an explicit project base for nested missing paths. First-time Pages activation needs repository administration access, separate from the workflow token. Pages was not enabled at initial inspection.

## Features

Responsive navigation; service enquiry preselection; gallery filters; keyboard lightbox with focus restoration; enquiry validation, preview, text download and copy fallback; image and directional motion; native page transitions where supported; reduced-motion and pause controls. Fonts and images are served locally.

## Demo limits

The enquiry builder **does not send messages, book freight or provide confirmed quotes**. Details stay on the visitor's device and are not stored by the site. Add only a company-verified recipient to `config.js` to enable email composition. Company phone, email and office details were not verified, and mockup contact text is illustrative.

No invented fleet/staff counts, testimonials, certifications, company dates or transit guarantees. Hero photography is AI-generated illustration; proposed brand applications stay on rebrand.html. Provenance and font licences are in `assets/ASSETS.md`.

This is a review demo. robots.txt and noindex metadata discourage indexing. Verify company content and deliberately change those before a real business launch.

## Verification

Production build and static source checks pass. The six documents and local references/anchors are checked, with proposal separation and form/motion guardrails. JavaScript syntax checks pass; the logo is byte-identical to the supplied PNG.

Browser visual and interaction checks remain **incomplete**: automatic approval review rejected access to the managed local preview. No SCREENSHOT.png is fabricated or claimed. See QA.md.
