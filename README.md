# Felix Wong — static website

The site uses plain HTML, CSS, JavaScript, and publication PDFs. GitHub Pages publishes the root of the main branch; no build tools or paid services are required.

## Editing

Edit `index.html`, `about.html`, `manifesto.html`, or `publications.html` for content. The original layout utilities are in `styles.css`, interactions are in `main.js`, and the chosen type and spacing are in `typography.css`.

Libre Baskerville is used for every heading and title, including the header and footer wordmarks, mobile navigation, section headings, publication titles, profile article headlines, and cover-story titles. Inter remains the body and interface font. Instrument Serif is retained for the original italic passages, including the aging opening statement and the Aim, Sweep, and Saturate taglines. The Publications page keeps its compact label as its accessible heading; the “32 papers.” headline is removed. Existing spacing and accessibility refinements remain in `typography.css`.

Fonts are served from `fonts/` through `font-faces.css`. The associated SIL Open Font License texts are included there. The website does not call Google Fonts at runtime.

Keep `.nojekyll` and `CNAME`. The custom domain is `www.felixjwong.com`, and GitHub enforces HTTPS.

## Publications and URLs

PDF URL case matters. The repository includes case-specific aliases to preserve the original publication links. When replacing a PDF, update its aliases too. A default Mac filesystem may collapse names differing only by case, so do not replace the entire repository from a Mac folder without preserving these entries.

The local review folder uses a symbolic link for `papers`; this is not a standalone deployment ZIP. The complete deployment backup is stored separately.

## Hosting

GitHub Pages is free for this public repository under its current plan and usage limits. Namecheap domain renewal remains separate. See [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits).
