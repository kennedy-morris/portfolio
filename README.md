# Kennedy Morris — Portfolio

My personal site showcasing side projects in data analytics and product management. Built with React + Vite and deployed on Cloudflare.

## Run locally

```bash
npm install
npm run dev
```

## Update content

Everything on the site (bio, skills, projects, contact links) lives in **`src/data.js`**. Edit that file and push. Cloudflare redeploys automatically.

To add a résumé, put `resume.pdf` in the `public/` folder and set `hasResume: true` in `src/data.js`.

## Deploy on Cloudflare

Workers & Pages → Create → connect this repo, then use:

- **Framework preset:** Vite (or React (Vite))
- **Build command:** `npm run build`
- **Output directory:** `dist`
