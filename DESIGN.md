# maximtop.dev — design spec

Chosen concept (2026-07-19): **editorial typography + extension-style project cards** (hybrid, option 4 of 4 mockups).

## Direction

- Editorial base: large serif display headline, warm paper background, generous whitespace.
- Signature element: project cards styled like browser extensions — icon, name, one-line description, and an on/off toggle. Toggling a card off dims it (CSS only, playful).
- Theme switch styled as the same extension toggle. Respects `prefers-color-scheme`, persists in `localStorage`, no flash on load.
- Performance first: zero JS except the tiny theme script; fonts self-hosted via Fontsource.

## Palette

| Token     | Light     | Dark      |
| --------- | --------- | --------- |
| bg        | `#faf8f4` | `#14161a` |
| card      | `#ffffff` | `#1d2025` |
| ink       | `#1c1b18` | `#eef0f3` |
| secondary | `#5c594f` | `#a8adb6` |
| muted     | `#8a8578` | `#8b919b` |
| line      | `#e0dcd2` | `#32363d` |
| accent    | `#0d7a5f` | `#34d399` |

## Typography

- Display: Fraunces Variable (self-hosted), used for the name and section headings.
- Body: system sans stack.

## Sections

1. Header: wordmark `MAXIMTOP.DEV` + theme toggle.
2. Hero: name, accent tagline, bio (2 paragraphs).
3. Day job: AdGuard Browser Extension highlight card.
4. My extensions: 2×2 grid of extension-style cards linking to Chrome Web Store.
5. Footer: GitHub · LinkedIn · Email.
