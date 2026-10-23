---
name: Expo Freight
description: Original identity, clear information and directional momentum.
colors:
  teal: "#007f89"
  turquoise: "#13c1c5"
  ink: "#082c32"
  deep: "#05252b"
  red: "#d52c34"
  paper: "#f4f6f4"
  line: "#d5dfdd"
  muted: "#526a6d"
  white: "#fff"
  teal-hover: "#005d65"
  red-hover: "#af1f26"
  light-hover: "#d9f1ed"
  link-teal: "#006a73"
  field-border: "#a8bcb8"
  filter-border: "#9aafac"
  filter-hover: "#e1ece8"
typography:
  display:
    fontFamily: "Barlow, 'Arial Narrow', sans-serif"
    fontSize: "clamp(76px, 7.8vw, 112px)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.018em"
  headline:
    fontFamily: "Barlow, 'Arial Narrow', sans-serif"
    fontSize: "clamp(64px, 6.8vw, 96px)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.015em"
  section:
    fontFamily: "Barlow, 'Arial Narrow', sans-serif"
    fontSize: "clamp(46px, 4.9vw, 76px)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(20px, 2vw, 27px)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 800
    lineHeight: 1.5
    letterSpacing: "0.015em"
rounded:
  square: "0"
  marker: "50%"
spacing:
  gutter: "clamp(22px, 5vw, 96px)"
  section: "112px"
  section-compact: "85px"
  section-mobile: "70px"
  gap-small: "12px"
  gap-medium: "24px"
  gap-large: "28px"
components:
  button-primary:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "14px 22px"
  button-primary-hover:
    backgroundColor: "{colors.teal-hover}"
  button-red:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "14px 22px"
  button-red-hover:
    backgroundColor: "{colors.red-hover}"
  button-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "14px 22px"
  button-light-hover:
    backgroundColor: "{colors.light-hover}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "inherit"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "14px 22px"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "13px 14px"
  navigation:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    padding: "14px 0"
  filter:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "10px 18px"
  filter-selected:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.white}"
  service-row:
    textColor: "{colors.ink}"
    padding: "27px 0"
  proposal-label:
    backgroundColor: "transparent"
    textColor: "#e5f4f3"
    padding: "5px 10px"
---

# Design System: Expo Freight

## Overview

**Creative North Star: "Moving Business Forward"**

The supplied identity anchors a confident, directional system: large freight photography, compressed heavy headlines, clear humanist copy and precise horizontal rules. White and paper surfaces give way to teal calls to action and deep teal editorial sections; turquoise carries emphasis and movement.

Preserve the exact supplied logo artwork, corrected arrow, lettering, proportions and slogan. This is a source-derived record of the implemented proposal, grounded in `PRODUCT.md`, `DIRECTION.md`, `styles.css`, `index.html`, `contact.html`, `rebrand.html` and `app.js`; it does not claim rendered approval.

**Key Characteristics:**

- Intact supplied identity on white logo stages.
- Oversized Barlow headings paired with Manrope information.
- Flat rectangular surfaces, fine rules and generous section spacing.
- Directional arrows, route traces and optional restrained motion.

**Visual evidence incomplete — reviewed 2026-10-23.** Real root `SCREENSHOT.png` and `SCREENSHOT-MOBILE.png` are absent. Browser capture was blocked by automatic approval review for the local preview origin; no screenshot was fabricated and no visual QA approval is implied.

| Required evidence | Target route | Target viewport | Capture date |
| --- | --- | --- | --- |
| `SCREENSHOT.png` | `index.html` | Desktop; dimensions not recorded | Not captured |
| `SCREENSHOT-MOBILE.png` | `index.html` | Mobile; dimensions not recorded | Not captured |

Other routes and open navigation, gallery/lightbox, enquiry validation and reduced-motion states also remain unverified in a rendered browser.

## Colors

The frontmatter owns exact values; these names describe their observed roles.

### Primary

- **Expo teal (`teal`):** primary actions, service icons, active filters and major CTA surfaces.
- **Momentum turquoise (`turquoise`):** emphasis on dark backgrounds, route markers, selection and scroll progress.
- **Deep hover teal (`teal-hover`) / readable link teal (`link-teal`):** action hover and the final shared link/feedback overrides respectively.

### Secondary

- **Signal red (`red`):** hero enquiry action, invalid field borders and default keyboard focus. `red-hover` deepens the action state.

### Neutral

- **Deep teal (`deep`) / teal ink (`ink`):** dark editorial backgrounds and primary text respectively.
- **Clean white (`white`) / soft paper (`paper`):** primary and alternating light surfaces; `light-hover` is the light action hover.
- **Muted teal-grey (`muted`) / divider (`line`):** supporting text and structural rules.
- **Field border (`field-border`) / filter border (`filter-border`) / filter hover (`filter-hover`):** local control states.

**The Identity Rule.** Preserve the supplied logo as an image; do not reconstruct or recolour its lettering, arrow or slogan.

## Typography

**Display Font:** local Barlow alias, with Arial Narrow and sans-serif fallbacks (`assets/barlow-extrabold.ttf`, weight 800). The presentation calls this Barlow Condensed; CSS registers it as Barlow. **Body Font:** local Manrope variable font (200–800), then Arial and sans-serif (`assets/manrope-variable.ttf`).

Display and section headings are heavy, tightly tracked and balanced; body information remains calm and legible. Use the frontmatter hierarchy. Most editorial paragraphs override the base body size to (14px), including the final mobile overrides; paragraphs have a global maximum measure (68ch). Small captions, navigation and labels remain (12px).

At the phone breakpoint, the home display uses `clamp(72px,17vw,96px)`; standard page headings use (64px). At the wide breakpoint the home display reaches (128px). Phone input text is (16px). Follow component-specific overrides rather than assuming a mathematical type scale.

## Layout

The centered wrapper caps at (1920px) with the fluid gutter in frontmatter. Major sections use the documented spacing steps; paired editorial grids use uneven columns and broad gaps, commonly (8vw). Gallery items use two columns with a (55px × 26px) gap; the service strip begins at four columns.

| CSS condition | Implemented change |
| --- | --- |
| Width ≥1700px | Taller home hero and larger display. |
| Width ≤1150px | Tighter header/gaps; compact section spacing. |
| Width ≤900px | JS menu replaces desktop navigation; service strip becomes two columns; brand-vision intro stacks. |
| Width ≤620px | Fixed gutter (24px); most content/form/gallery grids stack; footer retains two link columns; mobile section spacing. |

The sticky header is (92px), then (78px) below the menu breakpoint and (74px) on phones. Home photography uses cover cropping: centered on desktop, shifted toward the truck (62%, then 67%) at smaller widths. The phone hero is at least (705px) tall. Preserve those subject-aware crops.

## Elevation & Depth

Most surfaces are flat: background changes, photography, rules and spacing establish depth. Shadows are confined to the open mobile navigation, modal lightbox and rotated parcel/folder concept studies. Exact shadows and backdrop treatments live in the sidecar; these are contextual treatments, not a generic card elevation scale.

**The Flat Surface Rule.** Keep ordinary editorial rows and form containers flat; retain shadows in their implemented overlay or artwork-study contexts.

## Shapes

Controls, image windows and panels use square corners. Circular geometry is reserved for route/proposal markers. Structural borders are fine (1px); arrow and service icons use inline SVG with rounded stroke caps and joins. Parcel/folder rotations belong to concept artwork, not the general container language.

## Components

- **Buttons:** compact, square and decisive. Teal, red, white and outlined variants share the frontmatter padding, a minimum height (54px), (28px) content gap and inline arrow. Hover lifts the control (2px) and moves the arrow (4px); disabled buttons dim to half opacity. The outlined variant inherits its surrounding text colour and uses a current-colour border.
- **Text links:** bold labels with a minimum height (44px), an arrow gap (18px) and horizontal arrow movement (7px) on hover.
- **Inputs / fields:** visible bold labels, white controls with field-border strokes and a minimum height (48px); textarea minimum (120px). Focus uses a teal outline (2px, offset 1px); user-invalid text inputs/textarea use red borders. Phone padding becomes (11px 12px). Retain native select behaviour and validation.
- **Navigation:** white sticky header with intact image logo, compact bold links and a teal underline for hover/current page. At the menu breakpoint, a white shadowed panel opens below the header; current-page text becomes teal. `aria-expanded`, Escape, outside click and focus return are implemented in `app.js`; navigation remains available without JS.
- **Filters / proposal label:** square outlined filters use `aria-pressed` for teal selected state. The proposal label is a small outlined status with a turquoise dot on deep teal; retain its concept wording.
- **Rows / containers:** service rows use top/bottom rules and teal title hover, rather than filled card chrome. Enquiry content sits in a flat paper panel (40px padding, then 28px, then 25px 20px).
- **Gallery / lightbox:** responsive editorial figures retain proposal captions. Gallery images enlarge slightly on hover; a square expand control sits at the lower right. A native modal dialog has a deep surface, blurred dark backdrop, close/previous/next controls, keyboard arrow navigation and focus return. Direct image links work without the dialog enhancement.
- **Motion:** route traces, a (2px) scroll-progress line, masked image entrances and short directional transitions extend the identity. Content is visible before enhancement. Both reduced-motion preference and the footer pause control disable optional animation/transition; exact timing and easing live in the sidecar.

Global keyboard focus is red (3px, offset 5px); CTA-band focus changes to white. Keep the visible skip link on focus. Preserve the state attributes and native semantics alongside appearance.

## Do's and Don'ts

### Do:

- **Do** use the supplied logo artwork intact on its white stage.
- **Do** pair heavy Barlow headings with clear Manrope copy and square controls.
- **Do** preserve fine rules, flat containers and subject-aware image crops.
- **Do** keep keyboard focus, native validation and reduced-motion behaviour visible and functional.
- **Do** retain illustrative/proposed labels around imagery and concept applications.

### Don't:

- **Don't** turn concept mockups into evidence of actual vehicles, premises or uniforms.
- **Don't** introduce rounded floating cards as the default editorial treatment.
- **Don't** replace the supplied logo with live text, a traced mark or a different arrow.
- **Don't** treat source inspection or an absent screenshot as rendered visual approval.
