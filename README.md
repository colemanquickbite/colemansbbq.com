# Coleman's BBQ Company, LLC

Static website for `colemansbbq.com`, built with plain HTML, CSS, and JavaScript for GitHub Pages.

## Preview locally

From the repository root, run:

```powershell
npx serve .
```

Open the local URL printed in the terminal (usually `http://localhost:3000`). Stop the server with `Ctrl+C`.

## Main files

- `index.html` — page structure and content
- `styles.css` — responsive design system
- `script.js` — mobile navigation and gallery viewer
- `CNAME` — GitHub Pages custom domain
- `images/` — supplied food photography and the paper texture
- `PRODUCT.md` and `DESIGN.md` — product and visual-system guidance

## Quote form setup

The quote form uses Formspree so it can receive submissions from this static GitHub Pages site without a server.

1. Create an account at [formspree.io](https://formspree.io/) using the Coleman BBQ email address that should receive quote requests.
2. Create a new form in the Formspree dashboard and set the notification email to `colemanbarbecuebrothers2024@gmail.com`.
3. Copy the form endpoint. It will look like `https://formspree.io/f/xyzabcd`.
4. In `index.html`, replace `https://formspree.io/f/YOUR_FORM_ID` in the quote form's `action` attribute with that endpoint.
5. Submit a test request from the live site and confirm the notification email arrives. Formspree may require email confirmation before forwarding submissions.
6. Publish the updated `index.html` after replacing the placeholder. Never put an API key or password in the website files.
