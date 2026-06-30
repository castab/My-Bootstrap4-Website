# AGENTS.md

## Project Intent

This is Brayan Castaneda's personal resume and portfolio website. It is a static Next.js site focused on professional presentation, authored content, and a distinctive but restrained visual identity.

## Architecture

- Use Next.js App Router.
- Keep the site static-export compatible.
- Use TypeScript and Tailwind CSS.
- Do not add server-side features unless explicitly requested.
- Do not reintroduce runtime JSON-driven page hydration.
- Project pages should be authored directly in TSX.
- Shared metadata may be used for project cards, navigation, and links.

## Design Direction

- Modern personal engineering portfolio.
- Preserve a small human intro flourish on the homepage.
- Avoid generic dashboard, SaaS, or component-library aesthetics.
- Prefer custom Tailwind-based components over UI libraries.
- Respect accessibility and `prefers-reduced-motion`.
- Keep the GitHub source link subtle in the UI.

## Content Guidelines

- Favor concrete professional impact over generic summaries.
- Project pages may have unique layouts.
- Do not force content into a rigid schema.
- Older content can be used as reference, but new content should be intentionally authored.
- Keep project metadata lightweight; do not turn it into a CMS.

## Development Notes

- Use `public/images` for static assets.
- Avoid dependencies unless they materially improve the site.
- Prefer small, readable React components.
- Keep changes static-hosting friendly.
