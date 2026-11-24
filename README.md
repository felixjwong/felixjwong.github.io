# Felix Wong — static website

The site uses plain HTML, CSS, JavaScript, and publication PDFs. GitHub Pages publishes the root of the main branch; no build tools or paid services are required.

## Editing

Edit `index.html`, `about.html`, `manifesto.html`, or `publications.html` for content. The original layout utilities are in `styles.css`, interactions are in `main.js`, and the chosen type and spacing are in `typography.css`.

The main typography is Libre Baskerville, with Source Sans 3 for navigation and publication metadata. On the aging essay, `.essay-lede` preserves the original Instrument Serif italic opening statement. `.discovery-regimes` preserves Instrument Serif titles/taglines and Inter labels/descriptions for Aim, Sweep, and Saturate. These scoped exceptions also preserve their original type sizes, weights, leading, and tracking.

Fonts are served from `fonts/` through `font-faces.css`. The associated SIL Open Font License texts are included there. The website does not call Google Fonts at runtime.

Keep `.nojekyll` and `CNAME`. The custom domain is `www.felixjwong.com`, and GitHub enforces HTTPS.

## Publications and URLs

PDF URL case matters. The repository includes case-specific aliases to preserve the original publication links. When replacing a PDF, update its aliases too. A default Mac filesystem may collapse names differing only by case, so do not replace the entire repository from a Mac folder without preserving these entries.

The local review folder uses a symbolic link for `papers`; this is not a standalone deployment ZIP. The complete deployment backup is stored separately.

## Hosting

GitHub Pages is free for this public repository under its current plan and usage limits. Namecheap domain renewal remains separate. See [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits).
