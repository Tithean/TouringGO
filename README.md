This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



# Destination Guide — drop-in patch

Copy these files into your TouringGO project, keeping the same paths:

```
src/services/attractionType.ts        -> replaces existing file
src/services/getAttraction.ts         -> replaces existing file
src/components/ui.tsx                 -> NEW file
src/pages/destination-guide/[id].tsx  -> NEW dynamic route
```

## Steps

1. Delete (or rename) the old `src/pages/DestinationGuide.tsx` — it's
   replaced by `src/pages/destination-guide/[id].tsx`, which is a proper
   dynamic route (e.g. `/destination-guide/3`).

2. Copy the 4 files above into your project at the same relative paths.

3. Link to it from a province card, e.g. in `ProvinceCard.tsx` /
   `HomeCard.tsx`:
   ```tsx
   <Link href={`/destination-guide/${province.id}`}>View Guide</Link>
   ```

4. Run:
   ```powershell
   cd C:\Users\User\Desktop\TouringGO
   npm install
   npm run dev
   ```
   Then visit `http://localhost:3000/destination-guide/1` (use a real
   province id from your database).

## Assumptions I made — please verify against your backend

- **`GET /api/attractions?provinceId=<id>`** — I assumed your backend
  supports filtering attractions by province via this query param. If
  the real param name is different (or attractions aren't filterable
  yet), tell me and I'll adjust `getAttraction.ts`.
- **`Attraction` now includes `id`, `imageUrls`, `provinceId`** — these
  weren't in your original `attractionType.ts`, but `HomeCard.tsx`
  already uses `attraction.id` and `attraction.imageUrls`, so your API
  almost certainly already returns them. I just added them to the type.
- **Weather widget removed** — the original file had a hardcoded
  "16°C, Partly cloudy" block with no real data source. I dropped it
  rather than ship fake data. Happy to wire up a real weather API
  (e.g. OpenWeatherMap) next if you want it back.
- **Tabs (Overview / Things to Do / etc.) are UI-only** — they render
  but don't switch content yet, since those sub-features aren't built.

## Files unchanged (kept for reference, not modified)

Your `src/config/api.ts`, `getProvince.ts`, `getprovinceByID.ts`, and
`provinceType.ts` didn't need changes.
