# BethanyKids Madagascar — Static Website

A sister site of [BethanyKids](https://bethanykids.org), built as a plain HTML/CSS/JS static site, deployable to GitHub Pages or any static host.

---

## 📁 File Structure

```
bethany-kids-madagascar/
├── index.html              ← Homepage
├── css/
│   └── style.css           ← All global styles
├── js/
│   ├── components.js       ← Shared nav + footer (injected into every page)
│   └── main.js             ← Language switcher, form handling, animations
├── images/                 ← Add your images here (see below)
│   ├── bk-logo-white.png   ← BethanyKids logo (white, for nav)
│   ├── hero-bg.jpg         ← Hero background photo
│   └── ...                 ← Additional photos from Dr. Heuric
└── pages/
    ├── about.html          ← About BethanyKids Madagascar
    ├── doctor.html         ← Dr. Heuric's full bio page
    ├── impact.html         ← Madagascar Impact page
    ├── donate.html         ← Donate page (links to BethanyKids donation system)
    └── contact.html        ← Contact / Appointment / Partnership forms
```

---

## 🚀 Deploying to GitHub Pages

1. Push this folder to a GitHub repository (e.g. `bethany-kids-madagascar`)
2. Go to **Settings → Pages**
3. Set source to **Deploy from a branch** → `main` → `/ (root)`
4. Your site will be live at `https://yourusername.github.io/bethany-kids-madagascar/`

> To use a custom domain (e.g. `bethanykidsmadagascar.org`), add a `CNAME` file with your domain name and configure DNS accordingly.

---

## 📝 Before Going Live — Checklist

### Images to add to `/images/`
- [ ] `bk-logo-white.png` — Download/export from BethanyKids (white version for dark nav)
- [ ] `hero-bg.jpg` — A compelling photo of Dr. Heuric or a child patient (for homepage hero)
- [ ] Photos of Dr. Heuric in scrubs / operating / with team at Manambaro
- [ ] Group photo at Manambaro with Dr. Roach, students & SALFA health leaders (referenced in PDFs)
- [ ] Patient photos (with signed permission/releases)

### Placeholders to fill in
Search the codebase for `[PLACEHOLDER]` to find all items needing real data:
- Impact statistics: number of surgeries, children helped, hospitals served
- Patient stories on the Impact page
- Partner hospital names on the Impact page

### Form backend
The contact forms use `action="https://formspree.io/f/YOUR_FORM_ID"`.  
Options:
- **Formspree** (recommended for static sites): Sign up at formspree.io, create a form, replace `YOUR_FORM_ID`
- **EmailJS**: Client-side email sending (no backend needed)
- **Netlify Forms**: If deploying to Netlify instead of GitHub Pages

### Donation links
All donate buttons currently link to BethanyKids' US/Canada/UK donation pages.  
When donors give, they should note **"Madagascar"** in the designation field.  
Confirm with BethanyKids that this designation route is set up correctly.

### Languages
The site has a 4-language toggle (EN / FR / MG / ZH).  
Currently, the homepage has key strings translated in `js/main.js`.  
Inner pages will need translations added — edit the `translations` object in `main.js` and add `data-i18n="key"` attributes to elements on each page.

---

## 🎨 Design Tokens

All colours and fonts are defined as CSS variables in `css/style.css`:

| Variable | Value | Usage |
|----------|-------|-------|
| `--navy` | `#1a2e4a` | Primary brand navy |
| `--teal` | `#2a7d6f` | Primary accent teal |
| `--teal-lt` | `#3aa08f` | Light teal |
| `--gold` | `#c8963e` | Gold accent / CTAs |
| `--off-white` | `#f7f5f1` | Section backgrounds |

Fonts: **Playfair Display** (headings) + **Lato** (body) — loaded from Google Fonts.

---

## ✉️ Contact Info Used on Site

- **Email:** rakotomalalajeanheuric@gmail.com
- **Phone / WhatsApp:** +261 34 612 5373

---

## 📄 License & Usage

This site is a sister initiative of BethanyKids and uses branding consistent with bethanykids.org with permission. All patient photos used must have appropriate consent/releases obtained from patients or guardians.
