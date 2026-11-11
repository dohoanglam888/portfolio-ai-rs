# AI Researcher Portfolio (Next.js + Vercel)

Edit all content in `lib/data.ts`. Styling is in `app/globals.css`.

## Run locally
Requires Node.js 18.18+ (https://nodejs.org).

```bash
npm install
npm run dev     # http://localhost:3000
```

## Deploy to Vercel

**Option A – CLI**
```bash
npm i -g vercel
vercel          # first deploy (preview)
vercel --prod   # production
```

**Option B – GitHub**
1. Push this folder to a GitHub repo.
2. Go to https://vercel.com/new, import the repo, and click Deploy (Next.js is auto-detected).

Optional: put your CV at `public/cv.pdf`.
