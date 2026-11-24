# Felix Wong — recovered website

This is the original static website recovered from Netlify: HTML, CSS,
JavaScript, images, and publication PDFs. It needs no build step or server.

The design, content, styles, scripts, and PDF bytes are preserved. Changes are
limited to fixing relative links in the custom 404 page, adding directory
redirects for `/about/`, `/publications/`, and `/manifesto/`, and adding
`.nojekyll` so GitHub Pages serves the files directly.

## Deploy the complete package

**The ZIP is the complete deployment package.** The adjacent Mac folder contains
the canonical filenames. The ZIP also contains 33 case-specific PDF
aliases so the original publication links continue to work on case-sensitive
hosts. Do not publish or re-ZIP the Mac folder alone without adding those aliases.

Extract the ZIP on a case-sensitive filesystem, such as Linux, and deploy its
contents at the website root. A Git repository prepared with the alias paths in
its index also preserves them. Extracting and repacking on a default macOS
filesystem can collapse filenames that differ only in case.

For GitHub Pages, use a public repository, select its publishing branch and root
folder, and retain `.nojekyll`. Keep `index.html` at the root. Configure the custom
domain and HTTPS after the replacement deployment is verified. The 404 page and
directory redirects assume the website is served at the domain root.

## Preview and edit

From this directory, run `python3 -m http.server 8000`, then open
`http://localhost:8000/`. The default Python server does not apply the custom
404 page, and the Mac folder alone cannot verify case-specific PDF aliases.

Edit `index.html`, `about.html`, `publications.html`, or `manifesto.html` for
content; `styles.css` for styling; and `main.js` for behavior. When replacing a
PDF, update its case-specific aliases too. Google Fonts supplies Instrument
Serif and Inter; offline viewing uses the existing fallback fonts.

## Costs and limits

[GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
is available with GitHub Free for public repositories. Standard GitHub Actions
runners are free for public repositories. Use ordinary Pages publishing without
paid add-ons. [Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)
include a 1 GB published-site limit and a soft 100 GB monthly bandwidth limit.
Free hosting is subject to those limits and the provider's future policies.

Keeping `felixjwong.com` still requires domain registration renewal. The hosting
plan does not cover that fee. The provider's supplied `github.io` address avoids
the need for a paid custom domain.
