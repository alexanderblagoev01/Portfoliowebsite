# Bogota Restaurant — Design System

A design system for **Ресторант Богота** (Restaurant Bogota), a restaurant based in Sofia, Bulgaria.

> Source site: <https://restorantbogota.bg/>
> Brand language: Bulgarian (Cyrillic primary)

---

## What is Bogota?

**Ресторант Богота** is a Sofia restaurant. The brand is named after the Colombian capital, but the venue itself is a Bulgarian table — the name evokes warmth, distance, and a hint of the exotic without abandoning local hospitality. The visual identity leans on:

- A **dual-script wordmark** that pairs a confident condensed sans (`БОГОТА` in caps) with a flowing italic script (`Ресторант`) above it.
- A warm orange (`#ff5c00`) as the primary brand voice — appetite, fire, sun.
- A near-black ink on white paper for the body, with cream / paper tones reserved for menus and hero compositions.
- A **flat material** treatment — minimal shadows, generous space, classical type rhythms.

Only one product surface exists publicly: the **marketing site** (single-page landing). There is no app, no loyalty platform, and no online ordering — reservations happen by phone. The design system therefore focuses on:

1. The marketing/landing site.
2. Print-derived assets: menus, table cards, signage.
3. Social posts (square / story).

## Sources used to build this system

| Source | Status | Path / URL |
|---|---|---|
| Logo (Cyrillic dual-color) | ✅ Provided | `assets/logo_bogota.svg` |
| Display font (3651) | ✅ Provided, applied as `Bogota Display` | `fonts/Bogota-3651.otf` |
| Live website | ⚠️ Read, but text content was extremely sparse on fetch | <https://restorantbogota.bg/> |
| Auto-extracted color & type tokens | ✅ Embedded in brief | see `colors_and_type.css` |

> **Fonts.** The brand owner has provided **Bahnschrift Condensed** (display, used for the БОГОТА wordmark, headlines, prices, UI labels) and **Garogier** (secondary serif for editorial moments). The cursive "Ресторант\" word in the logo is **P22 Allyson Pro Italic** (paid/commercial); the project uses the provided OTF as the script source. **Body** is Montserrat (Google Fonts).

---

## Index — what's in this folder

```
README.md                     ← you are here
SKILL.md                      ← agent skill manifest
colors_and_type.css           ← all color + type CSS variables and utility classes

assets/
  logo_bogota.svg             ← primary dual-color wordmark

fonts/
  Bogota-3651.otf             ← uploaded display face

preview/
  *.html                      ← design-system tab cards (colors, type, components)

ui_kits/
  website/
    README.md
    index.html                ← interactive landing page
    Hero.jsx, Menu.jsx, ...   ← cosmetic recreations of the marketing surface
```

---

## CONTENT FUNDAMENTALS

### Voice & tone

- **Bulgarian-first, Cyrillic-first.** All primary copy is in Bulgarian. English may appear secondarily on the menu (translations of dish names) and never as the lead voice.
- **Neutral-warm, third-person.** The brand speaks *about* the restaurant ("Ресторант Богота предлага…") rather than *to* the diner ("You'll love…"). It avoids the chummy second-person of US chain restaurants.
- **Declarative, not promotional.** Copy describes the place and the food. It does not exhort, exclaim, or hype. No "Don't miss!", no "Must-try!", no superlatives.
- **Hospitality framing.** The tone is that of an old-fashioned host: brief, gracious, confident in what the kitchen does. "Заповядайте." ("Welcome / Please come in.") is the default emotional register.

### Casing & typographic voice

- Display headings use **uppercase Cyrillic** in a condensed grotesk — the name `БОГОТА` is the master example. Uppercase carries authority and reads well at distance (a restaurant identity should work as signage).
- The italic script (`Ресторант`) pairs with the caps — it adds intimacy and softens the stoneness of the all-caps wordmark. Reserve script for **one or two words at a time**: "Ресторант", "меню", "запазете маса". Never set a paragraph in script.
- Body copy is set in a **classical serif** (`Cormorant Garamond` here, falling back to Times New Roman as on the source site). Restaurants that pick serif body type signal: traditional, table-clothed, occasion-worthy.

### Length and rhythm

- Headings are **tight** — 1 to 4 words. ("МЕНЮ", "ЗАПАЗЕТЕ МАСА", "НАШАТА КУХНЯ".)
- Lead paragraphs run 1–3 sentences. Body paragraphs rarely exceed 4 lines.
- Menu items follow the classic three-line pattern: **name** (bold caps), **description** (italic body, 1 sentence of ingredients), **price** (right-aligned, display font).

### Pronouns & posture

- Third-person about the restaurant ("Ресторантът", "кухнята ни" — *our kitchen*).
- "Ние" (we) appears sparingly to signal team / hospitality.
- "Вие" (formal you) for any direct address — never the informal "ти".
- **No emoji** in primary copy. The brand is restrained; emoji would feel out of register. Emoji are acceptable on social posts but not on the website or menu.

### Sample copy patterns

```
Eyebrow (script):      Ресторант
Heading (caps):        БОГОТА
Lead (serif italic):   Кухня от сърцето на София.

Menu name:             ТЕЛЕШКИ БУЗИ
Menu description:      Бавно готвени с червено вино, корени и мащерка.
Menu price:            32 лв.

CTA:                   ЗАПАЗЕТЕ МАСА  →
```

---

## VISUAL FOUNDATIONS

### Colors

The palette is a tight five-color system. Primary orange does the loud work; everything else is neutral.

- **Primary `#ff5c00`** — CTAs, the period after `БОГОТА`, single-line accents under headings, "Open" indicators. Use sparingly: one-or-two orange spots per screen.
- **Soft orange `#faab64`** — the script-italic `Ресторант` color. Use only on dark backgrounds and only for the script word; do not paint big surfaces with it.
- **Secondary blue `#0080ff`** — text links inside running copy. Not a brand color in the marketing sense; it's a functional link color from the source site.
- **Accent green `#008124`** — confirmations, "open today", reservation success.
- **Neutrals** — `#000` ink, `#282828` secondary ink, `#6b6b6b` muted, `#eeeeee` hairlines, `#b1b1b1` strong rules, `#fafafa` alt panel, `#f5f1ea` warm cream paper.

The palette is **not** gradient-friendly. Avoid bluish-purple gradients, glassmorphism, neon. The brand is flat and printerly.

### Type

Three families work together:

1. **Display — Bahnschrift Condensed** (provided). Condensed grotesk caps. Used for the wordmark, headlines, prices, labels, navigation.
2. **Script — P22 Allyson Pro Italic** (provided OTF). Formal italic copperplate. Used for "Ресторант" eyebrows and one-word flourishes only.
3. **Body — Montserrat** (Google Fonts). Geometric humanist sans. Body copy, lead paragraphs, descriptions.
4. **Editorial accent — Garogier** (provided). Old-style serif. Reserved for occasional pull quotes / drop caps; not the default voice.

Pairing rule: every display heading deserves at most one script eyebrow above it. Body type is always serif. Sans is reserved for the display line.

### Spacing & layout

- Generous, breathing layouts. Hero sections often use **40–50% whitespace**.
- Centered axis is the default for restaurant pages — title, subtitle, separator rule, paragraph, CTA — stacked on a vertical centerline.
- A **thin orange hairline** (1px, `#ff5c00`) is a recurring divider between hero blocks and section starters. This is one of the brand's signature flourishes.
- 12-column grid at 1280px design width. Body content max-width ≈ 720px for legibility of serif copy.

### Backgrounds

- **White paper** is the default canvas. Plain, no texture.
- **Warm cream** (`#f5f1ea`) for menu pages, downloadable PDFs, and editorial sections.
- **Full-bleed photography** for hero — warm, candle-lit interior shots or close-up plated food. Imagery skews **warm, low-key, slightly grainy** — never cool, never high-key.
- No repeating patterns. No hand-drawn illustration. No SVG graphics beyond the logo and small icons.

### Animation

- **Restrained.** Fades and 200–300ms ease-outs only. No bounces, no spring physics.
- Hover transitions: 150ms ease.
- Page transitions: a soft 300ms cross-fade is acceptable.
- No parallax. No scroll-jacked sections.

### Hover & press states

- **Links:** color shifts from `#0080ff` to `#0066cc`; underline thickens slightly via `text-underline-offset`.
- **Primary buttons:** background goes from `#ff5c00` to `#e25200` on hover; on press, drop 2% opacity (don't shrink — that reads "app-y", not "restaurant-y").
- **Menu items:** the entire row gets a `#fafafa` background on hover, with a single `#ff5c00` 2px left border slid in from the inside.
- **Image cards:** a 200ms zoom on the image (scale 1.03), inside an `overflow: hidden` parent. The card itself does not scale.

### Borders, rules, separators

- **Hairlines** at `#eeeeee` 1px for low-emphasis dividers.
- **Strong rules** at `#b1b1b1` 1px for menu category separators.
- **Orange accent rule** — a 1px or 2px short line in `#ff5c00`, ~48px wide, centered under section titles. Signature flourish.
- No double rules, no decorative borders.

### Shadows

- **Mostly flat.** Source site has zero discrete shadow tokens.
- Three subtle shadows are defined in tokens for the rare card or floating element:
  - `shadow-1` — 1px hairline-soft (e.g., sticky header)
  - `shadow-2` — 4/14px ambient (e.g., a floating reservation widget)
  - `shadow-3` — 12/40px modal lift
- Avoid colored shadows, hard offsets, or anything brutalist.

### Corner radii

- **Mostly square.** The brand is classical.
- Buttons are pill-shaped (`radius-pill: 999px`) — this is the one place radius shines.
- Cards: 4–8px max.
- Inputs: 4px.
- Images: 0 (square edges; serif type wants square photography).

### Cards

A "card" in this system is a **bordered rectangle** with optional warm cream fill — not a floating shadow island.

```
border: 1px solid #eeeeee
background: #ffffff or #f5f1ea
padding: 32px
radius: 4–8px
shadow: none, OR shadow-1
```

### Transparency & blur

- **Used sparingly.** Reserved for an overlay on hero photography (a 40% black scrim under hero text). No frosted-glass nav, no translucent cards.

### Layout fixed elements

- **Sticky top nav** with white background, `shadow-1`, full width, 72px tall on desktop, 56px on mobile.
- **Footer** is full-width with a `#282828` background and warm cream text — the only dark section on the site.
- A **floating reservation CTA** can persist on mobile at bottom-right; pill button, primary orange, drops `shadow-2`.

---

## ICONOGRAPHY

The Bogota brand barely uses iconography — by design. The website uses essentially no icon system; the only graphical mark is the logo itself.

**Approach:**
- **Default to no icon.** Where most modern sites would prefix a label with an icon, Bogota uses just type.
- For unavoidable icons (phone, location, hours, social, arrow), use **Lucide** as a CDN-linked stroke icon set: `https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/<name>.svg`. Lucide's stroke weight (1.5px, default) and rounded joins read as classical and quiet — a good fit.
- **Stroke weight: 1.5px**, **stroke-linecap: round**, **stroke-linejoin: round**, monochrome only — `currentColor`. Never fill icons with brand orange; let them inherit ink color.
- **Size**: 16px in body, 20px in nav, 24px in hero. Always paired with type at matching height.

**FLAG: substitution.** Bogota has no proprietary icon set. Lucide is a stand-in chosen for stroke-quality match. If the user wants a different icon family (Phosphor Light is another acceptable match), say the word.

**Emoji:** Not used in any branded surface. Allowed only in casual social copy if absolutely necessary.

**Unicode glyphs as icons:** A few are part of the system —
- `→` and `←` for CTAs and navigation.
- `·` (middle dot) and `—` (em dash) as separators.
- `№` (numero) is acceptable for menu numbering.

**Copy of icon set:** none copied locally — Lucide is CDN-linked from each card / page that needs it.

---

## Caveats & open questions

1. **Fonts** — Bahnschrift, Garogier, and the P22 Allyson Pro OTF have all been provided by the user and are wired into `fonts/`. Body type uses Montserrat (Google Fonts). No substitutions remain.
2. **Photography** — none provided. The UI kit uses image placeholders; real food + interior photography would dramatically improve fidelity.
3. **Site content** — the public site is sparse and this system was inferred largely from the logo, the extracted tokens, and restaurant-design conventions. If the user has a richer brand book or menu PDFs, please attach.
4. **Iconography** — no proprietary icon library exists; Lucide is a substitute.
