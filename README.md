# ROOD Manufacturing — roodtexas.com

Marketing site for ROOD Manufacturing (Lubbock, TX): AR-15 parts, custom firearm
finishes, limited drops, and complete flagship builds.

Built as a production Next.js app: App Router, TypeScript, Tailwind v4, a real
lead-capture backend (Resend + Postgres/Prisma), and a live inventory embed of
the Gearfire storefront.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Prisma 6** + Postgres (Supabase or Vercel Postgres) for storing leads
- **Resend** for lead email notifications
- Deploy target: **Vercel**

## Local development

```bash
npm install
cp .env.example .env.local   # fill in keys (optional for UI work)
npm run dev                  # http://localhost:3000
```

The site renders and the form works with no env set — leads are validated and
logged server-side, and DB/email steps are skipped until configured.

## Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `RESEND_API_KEY` | for email | Sends each lead to your inbox. Key from resend.com. |
| `LEAD_NOTIFY_TO` | optional | Where leads are emailed. Defaults to `happyvwdude@gmail.com`. |
| `LEAD_NOTIFY_FROM` | optional | Verified Resend sender. Defaults to `onboarding@resend.dev`. |
| `DATABASE_URL` | for DB | Pooled Postgres URL. Leads are inserted into the `Lead` table. |
| `DIRECT_URL` | for migrations | Direct (non-pooled) Postgres URL for `prisma migrate`. |
| `NEXT_PUBLIC_STORE_URL` | optional | Live storefront embedded for inventory. Defaults to ar15rifleshop.com. |

## Backend

- `POST /api/lead` — validates (zod), stores to Postgres if `DATABASE_URL` is set,
  emails via Resend if `RESEND_API_KEY` is set, always returns `{ ok: true }`.
  Includes a honeypot field for spam.
- `GET /api/inventory` — returns the storefront URL, embed tabs, and a
  reachability check for the live-inventory status dot.

### Why inventory is an embed, not an API proxy

The storefront runs on **Gearfire**. Its product APIs
(`consumer-product.gearfire.com/...`) are gated behind **Cloudflare Turnstile** —
every request needs a token minted by solving a browser bot-challenge. A server
can't mint that token, so a server-side product proxy is impossible without a
Gearfire partner key. Embedding the storefront lets it solve its own Turnstile
in-frame and serve genuinely live, real-time stock and pricing.

## Database setup (when ready)

```bash
# after setting DATABASE_URL + DIRECT_URL
npx prisma migrate deploy   # or: npx prisma db push
```

## Deploy to Vercel

1. Import the GitHub repo (`iamjoejack/roodtexas`) into Vercel.
2. Framework preset: **Next.js** (do not leave it on "Other").
3. Add the env vars above in Project Settings → Environment Variables.
4. Deploy. `prisma generate` runs automatically on install/build.

## Images

Brand logos are ROOD's own. Photography is a mix of recovered ROOD/AR15 Rifle
Shop product shots (`public/assets/oldsite/`) and Creative Commons photos
credited at `/credits`. Replace placeholders with ROOD studio shots over time.
