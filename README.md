# Crew Dashboard React — Phase 1

A deployment-ready React + TypeScript + Vite foundation based on the uploaded single-file Crew Dashboard.

## Included

- Local crew sign-in
- SIA-inspired dark navy and gold theme
- Responsive dashboard
- Flight log add/search/delete
- Local browser storage
- Overview statistics
- Map/HUD placeholder
- Profile page
- PWA manifest
- Vercel routing configuration

## Run locally

```bash
npm install
npm run dev
```

## Test the production build

```bash
npm run build
npm run preview
```

## Deploy on Vercel

1. Extract this ZIP.
2. Upload the extracted folder to a new GitHub repository.
3. Import that repository into Vercel.
4. Framework preset: **Vite**
5. Build command: `npm run build`
6. Output directory: `dist`

## Important

The PIN login in Phase 1 is a local prototype and is not secure authentication. Use Firebase or Supabase before storing real crew records or allowing multiple users.

The original 4,691-line HTML file has not been discarded. It should be used as the feature reference for later phases.
