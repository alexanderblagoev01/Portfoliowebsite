---
name: bogota-design
description: Use this skill to generate well-branded interfaces and assets for Ресторант Богота (Restaurant Bogota, Sofia), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key files:
- `colors_and_type.css` — all CSS variables and utility classes (colors, fonts, spacing, radii, shadows, semantic typography)
- `assets/logo_bogota.svg` — primary dual-color wordmark
- `fonts/Bogota-3651.otf` — provided P22 Allyson Pro Italic display script (used for "Ресторант")
- `preview/*.html` — design-system specimen cards (colors, type, components)
- `ui_kits/website/` — interactive recreation of the marketing landing page (Header, Hero, About, MenuSection, ReservationModal, Footer)

Brand fundamentals to remember:
- Bulgarian (Cyrillic) is the primary language. Voice is neutral-warm, third-person, declarative — never promotional.
- Three-family type system: **Bahnschrift Condensed** (display caps, wordmark, UI labels), **P22 Allyson Pro** (script eyebrow, one-word only), **Montserrat** (body). Garogier is available as a secondary serif accent.
- Primary orange `#ff5c00` is the only loud color — used sparingly. Everything else is ink/neutral/cream.
- Flat material — minimal shadow, square or pill radii only, classical printerly feel.
- No emoji, no gradients, no decorative SVG illustration. Iconography defers to type; Lucide is the substitute when an icon is required.
