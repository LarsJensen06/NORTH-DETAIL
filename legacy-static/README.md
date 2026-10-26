# NORTH DETAIL

A responsive portfolio website concept for a fictional automotive detailing studio in Riga. This archived version uses plain HTML, CSS and JavaScript, with no external runtime dependencies.

## Run locally

Requires Node.js 18 or newer.

    node server.mjs

If npm is installed, npm start runs the same server.

Then open http://localhost:4173. You can also open index.html directly in a browser.

## Booking form

The form validates a name, phone number and requested service in the browser. It is a demo only: no information is transmitted or stored, and the success state says that no booking was made. Connect an authenticated booking API or a form provider before using it to receive enquiries.

## Deploy

This is a static site. Deploy the project directory to a static host such as Netlify, Cloudflare Pages or GitHub Pages. For Netlify or Cloudflare Pages, use the project root as the publish directory and leave the build command empty. On GitHub Pages, publish the root directory from the selected branch.

## Images

Photos are included locally in assets/ so the page does not depend on third-party image delivery at runtime. They are sourced from Unsplash and used under the Unsplash License. The before-and-after section is explicitly an illustrative visual study, not a real client result. The source image IDs are 1503376780353-7e6692767b70, 1761934658038-d0e6792378b1, 1605437241278-c1806d14a4d9 and 1503736334956-4c8f8e92946d.

## Project files

- index.html — page content and semantic structure
- styles.css — responsive layout, typography and motion preferences
- app.js — mobile navigation, gallery control and demo form validation
- server.mjs — dependency-free local static server
- assets/ — local photographs and favicon
