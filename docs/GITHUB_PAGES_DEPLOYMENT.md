# GitHub Pages Deployment Guide for Vite + React SPA

This document covers the complete process of deploying a Vite + React Single Page Application (SPA) to GitHub Pages, including all issues encountered and their solutions.

## Table of Contents

1. [Initial Setup](#initial-setup)
2. [Configuration](#configuration)
3. [Deployment](#deployment)
4. [Issues & Solutions](#issues--solutions)
5. [Troubleshooting](#troubleshooting)

---

## Initial Setup

### Prerequisites

- Node.js and npm installed
- Git repository hosted on GitHub
- GitHub account (free tier works for public repos)

### Install gh-pages

```bash
npm install gh-pages --save-dev
```

---

## Configuration

### 1. Update `package.json`

Add the homepage URL and deploy scripts:

```json
{
  "name": "your-repo-name",
  "version": "1.0.0",
  "homepage": "https://yourusername.github.io/your-repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist --dotfiles"
  }
}
```

> **Important:** The `--dotfiles` flag ensures hidden files like `.nojekyll` are included.

### 2. Update `vite.config.ts`

Add the base path for your repository:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/your-repo-name/",
  // ... rest of config
});
```

### 3. Update React Router (if using BrowserRouter)

Add the basename to match your repository name:

```tsx
// src/App.tsx
<BrowserRouter basename="/your-repo-name">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>
```

### 4. Add `.nojekyll` file

Create an empty file at `public/.nojekyll` to bypass Jekyll processing:

```bash
touch public/.nojekyll
```

> **Why?** GitHub Pages runs Jekyll by default, which ignores files starting with `_` and can cause issues with Vite's output.

### 5. Add SPA Routing Support (404.html)

GitHub Pages doesn't natively support SPA routing. Create `public/404.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <script type="text/javascript">
      // SPA redirect for GitHub Pages
      // Converts /path to /?/path
      var pathSegmentsToKeep = 1; // Keep 1 segment for repo name

      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
  </body>
</html>
```

### 6. Add redirect handler to `index.html`

Add this script to the `<head>` of your `index.html`:

```html
<script type="text/javascript">
  (function(l) {
    if (l.search[1] === '/' ) {
      var decoded = l.search.slice(1).split('&').map(function(s) {
        return s.replace(/~and~/g, '&')
      }).join('?');
      window.history.replaceState(null, null,
          l.pathname.slice(0, -1) + decoded + l.hash
      );
    }
  }(window.location))
</script>
```

---

## Deployment

### First-time deployment

```bash
npm run deploy
```

This will:
1. Run `npm run build` (predeploy script)
2. Push the `dist` folder to the `gh-pages` branch

### Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings → Pages**
3. Under "Source", select:
   - **Deploy from a branch**
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

### Subsequent deployments

```bash
npm run deploy
```

### Force rebuild (if needed)

Using GitHub CLI:
```bash
gh api repos/USERNAME/REPO/pages/builds -X POST
```

---

## Issues & Solutions

### Issue 1: Blank page after deployment

**Symptoms:**
- Page loads but shows nothing
- Browser console shows 404 errors for JS/CSS files

**Cause:**
Asset paths are incorrect because the `base` path wasn't configured.

**Solution:**
Add `base: "/your-repo-name/"` to `vite.config.ts`

---

### Issue 2: GitHub Pages status shows "errored"

**Symptoms:**
- `gh api repos/USER/REPO/pages` returns `"status": "errored"`
- Assets return 404 even though they exist in the branch

**Cause:**
Jekyll processing is interfering with the build.

**Solution:**
Add `.nojekyll` file to the `public/` folder:
```bash
touch public/.nojekyll
```

Ensure deploy script includes `--dotfiles`:
```json
"deploy": "gh-pages -d dist --dotfiles"
```

---

### Issue 3: Direct URL access returns 404

**Symptoms:**
- Home page (`/repo/`) works
- Direct navigation to `/repo/privacy` returns 404
- Routes work when navigating from within the app

**Cause:**
GitHub Pages looks for actual files. When you visit `/privacy`, it looks for `privacy.html` or `privacy/index.html`, which don't exist in an SPA.

**Solution:**
Implement the SPA redirect pattern:
1. Create `public/404.html` with redirect script
2. Add redirect handler to `index.html`

See [Configuration](#5-add-spa-routing-support-404html) section for code.

---

### Issue 4: Assets not updating after deployment

**Symptoms:**
- Old version of site still showing
- New assets return 404
- `gh-pages` branch shows correct files

**Cause:**
GitHub Pages has caching and may take time to propagate changes.

**Solution:**
1. Wait 1-2 minutes for propagation
2. Force a rebuild:
   ```bash
   gh api repos/USERNAME/REPO/pages/builds -X POST
   ```
3. Clear browser cache or use incognito mode

---

### Issue 5: Private repository - Pages not available

**Symptoms:**
- Error: "Your current plan does not support GitHub Pages for this repository"

**Cause:**
GitHub Pages for private repos requires a paid plan (Pro/Team/Enterprise).

**Solution:**
Either:
- Make the repository public:
  ```bash
  gh repo edit USERNAME/REPO --visibility public
  ```
- Upgrade to GitHub Pro

---

## Troubleshooting

### Check deployment status

```bash
# Check Pages status
gh api repos/USERNAME/REPO/pages --jq '{status, html_url}'

# Check latest build
gh api repos/USERNAME/REPO/pages/builds --jq '.[0] | {status, error}'
```

### Verify deployed files

```bash
# Fetch latest gh-pages branch
git fetch origin gh-pages

# List all files
git ls-tree -r origin/gh-pages --name-only

# Check specific file content
git show origin/gh-pages:index.html
```

### Check HTTP status of assets

```bash
# Check if assets are accessible
curl -s -o /dev/null -w "%{http_code}" "https://USERNAME.github.io/REPO/assets/index-HASH.js"
```

### Force clean deployment

```bash
npx gh-pages -d dist --dotfiles --remove '*'
```

### Common checklist

- [ ] `base` path set in `vite.config.ts`
- [ ] `basename` set in BrowserRouter
- [ ] `.nojekyll` file in `public/` folder
- [ ] `--dotfiles` flag in deploy script
- [ ] `404.html` for SPA routing
- [ ] Redirect handler in `index.html`
- [ ] Repository is public (or have GitHub Pro)
- [ ] GitHub Pages enabled in repo settings
- [ ] Using `gh-pages` branch as source

---

## File Structure

After setup, your project should have:

```
your-project/
├── public/
│   ├── .nojekyll          # Bypass Jekyll
│   ├── 404.html           # SPA redirect handler
│   └── ...
├── src/
│   └── ...
├── index.html             # Contains redirect script
├── vite.config.ts         # Contains base path
├── package.json           # Contains homepage & deploy scripts
└── ...
```

---

## References

- [Vite Static Deploy Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [SPA GitHub Pages](https://github.com/rafgraph/spa-github-pages)
- [gh-pages npm package](https://www.npmjs.com/package/gh-pages)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
