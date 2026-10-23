# Expo Freight

## Purpose
A client presentation website for Expo Freight, with a distinct proposed rebrand gallery at rebrand.html. Preserve the supplied logo and teal/red identity.

## Architecture
Five static HTML pages, shared CSS and progressive JavaScript. Local assets only. No runtime framework, backend, API key or build dependency. scripts/ owns a Node static build, local server and integrity checks; assets/ owns supplied images, optimised derivatives and fonts.

## Run / test / deploy
npm install; npm run dev; npm run build; npm test. GitHub Actions publishes dist to Pages. All internal paths are relative to support /EXPOFREIGHT/.

## Current state
Implementation complete at source level. Production build, six-page/182-reference integrity checks, Node syntax checks and byte-identical logo verification pass. Source review scored seven reported fixes resolved. Browser/rendered QA and screenshot evidence remain incomplete due to automatic approval denial. GitHub Pages activation/deployment is tracked separately.

## Decisions and constraints
Primary audience: prospective logistics customers and company management. Separate Brand vision route clearly identifies concepts. Form generates a local enquiry brief and only opens mail when a verified recipient is configured. No tracking or message-delivery simulation.

## Next action
Enable GitHub Pages with Source: GitHub Actions if required, run the workflow, then obtain approval for the blocked local preview and finish genuine desktop/mobile evidence. See QA.md.
