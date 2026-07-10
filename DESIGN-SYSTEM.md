# Design System — Sri Gowri Ganesha Geleyara Balaga

## A Premium Visual Language for a 12-Year Cultural Institution

---

## 1. Typography

### 1.1 Font Stack

| Role | Font | Weight | Fallback |
|---|---|---|---|
| Display | Playfair Display | 400, 500, 600, 700 | Georgia, serif |
| Body | Inter | 300, 400, 500, 600 | system-ui, sans-serif |
| Numeric | Inter | 300, 400, 500, 600 | tabular-nums |

**Rationale:** Playfair Display for its timeless, editorial elegance — used by luxury publishing and heritage brands. Inter for its exceptional readability at every size, with warm proportions that pair naturally with Playfair.

### 1.2 Type Scale

A 1.25 ratio (Major Third) scale, but adjusted at larger sizes for visual harmony rather than rigid math.

| Level | Size (mobile) | Size (tablet) | Size (desktop) | Weight | Line Ht | Letter Spacing | Usage |
|---|---|---|---|---|---|---|---|
| **Hero Display** | 2.75rem / 44px | 4rem / 64px | 5.5rem / 88px | 600 | 1.05 | -0.03em | Primary hero headline |
| **Hero Subtitle** | 1.125rem / 18px | 1.25rem / 20px | 1.5rem / 24px | 400 | 1.4 | 0.01em | Hero subtitle / tagline |
| **H1** | 2.25rem / 36px | 2.75rem / 44px | 3.5rem / 56px | 600 | 1.1 | -0.02em | Section titles |
| **H2** | 1.75rem / 28px | 2.25rem / 36px | 2.75rem / 44px | 600 | 1.15 | -0.01em | Major section headings |
| **H3** | 1.375rem / 22px | 1.5rem / 24px | 1.75rem / 28px | 600 | 1.25 | 0 | Card titles, subheadings |
| **H4** | 1.125rem / 18px | 1.25rem / 20px | 1.25rem / 20px | 500 | 1.3 | 0.01em | Small section headings |
| **Body Large** | 1rem / 16px | 1.0625rem / 17px | 1.125rem / 18px | 400 | 1.65 | 0 | Primary body text |
| **Body** | 0.9375rem / 15px | 1rem / 16px | 1rem / 16px | 400 | 1.6 | 0 | General body text |
| **Body Small** | 0.875rem / 14px | 0.875rem / 14px | 0.875rem / 14px | 400 | 1.55 | 0 | Secondary text, captions |
| **Caption** | 0.75rem / 12px | 0.75rem / 12px | 0.8125rem / 13px | 400 | 1.4 | 0.02em | Image captions, footnotes |
| **Label** | 0.6875rem / 11px | 0.75rem / 12px | 0.75rem / 12px | 500 | 1.2 | 0.08em | Buttons, badges, tags |
| **Overline** | 0.65rem / 10.5px | 0.6875rem / 11px | 0.75rem / 12px | 600 | 1.1 | 0.15em | Section labels, eyebrow text |
| **Stat Number** | 2.5rem / 40px | 3rem / 48px | 3.5rem / 56px | 600 | 1 | -0.02em | Impact numbers, counters |

### 1.3 Guidelines

- Headlines should use display weight (600) for maximum impact. Avoid 700 — it appears heavy and inelegant.
- Body text should never go below 15px on mobile. Legibility is sacred.
- Overline text (eyebrow labels above section titles) is always uppercase with wide tracking.
- Never mix more than 2 font weights in a single component.
- Numeric values in statistics should use tabular-nums for consistent width alignment.
- On ultra-wide screens (>1600px), cap max-width of text blocks at 720px for readability.

---

## 2. Color System

### 2.1 Philosophy

The palette is inspired by a warm South Indian evening — deep, rich, and glowing with golden hour light. It avoids cold grays and sterile whites. Every color has warmth.

Gold is not the primary identity color. It is the accent — used sparingly for emphasis, celebration, and premium moments. The foundation is built on warm neutrals, deep earthy tones, and rich spiritual colors.

### 2.2 Semantic Palette

| Token | Hex | Usage |
|---|---|---|
| **--color-bg** | #0c0b09 | Page background. A warm black — not neutral, not cold. |
| **--color-bg-elevated** | #141210 | Surface cards, containers elevated above the background. |
| **--color-bg-raised** | #1c1916 | Highly elevated surfaces (modals, dropdowns, sheets). |
| **--color-surface** | rgba(255, 255, 255, 0.03) | Default surface overlay on bg. |
| **--color-surface-hover** | rgba(255, 255, 255, 0.06) | Surface hover state. |
| **--color-border** | rgba(255, 255, 255, 0.06) | Default border. Subtle, never harsh. |
| **--color-border-strong** | rgba(255, 255, 255, 0.1) | Stronger borders for active/selected states. |
| **--color-border-gold** | rgba(212, 148, 26, 0.2) | Gold-tinted borders for accent elements. |
| **--color-text-primary** | #f5efe4 | Primary text. Warm white, not pure white. |
| **--color-text-secondary** | rgba(245, 239, 228, 0.55) | Secondary text. Muted but readable. |
| **--color-text-tertiary** | rgba(245, 239, 228, 0.3) | Tertiary text. Placeholders, metadata. |
| **--color-text-inverse** | #0c0b09 | Text on light/gold backgrounds. |
| **--color-gold** | #c99a3b | Primary gold. Antique, aged, warm. Not bright yellow. |
| **--color-gold-light** | #e8c45a | Gold highlight, hover states on gold elements. |
| **--color-gold-dark** | #a67a28 | Deeper gold for borders, secondary gold accents. |
| **--color-gold-bg** | rgba(201, 154, 59, 0.1) | Gold background tint. Used for gold surface areas. |
| **--color-saffron** | #c9591e | Deep saffron. Secondary accent. Energy without being aggressive. |
| **--color-saffron-light** | #e07a3a | Lighter saffron for hover states. |
| **--color-ivory** | #ede4d3 | Warm light color. Used for subtle backgrounds, hover fills. |
| **--color-cream** | #e0d5c0 | Muted cream. Borders, decorative elements. |
| **--color-maroon** | #6b1b2b | Deep burgundy/ maroon. Used sparingly for depth and richness. |
| **--color-success** | #4a7a4a | Muted green. Success states. Not bright — it would clash. |
| **--color-warning** | #b8863a | Warm amber. Warning states. |
| **--color-error** | #8b2e2e | Deep red. Error states. |
| **--color-white-soft** | rgba(255, 255, 255, 0.04) | Soft overlay white. |
| **--color-white-medium** | rgba(255, 255, 255, 0.08) | Medium overlay white. |
| **--color-black-soft** | rgba(0, 0, 0, 0.3) | Soft overlay black. |

### 2.3 Usage Guidelines

- Pure white (#FFFFFF) and pure black (#000000) should never appear. They feel digital, not organic.
- Gold should cover no more than 5-8% of any screen. It is an accent, not a theme.
- Saffron should be used sparingly — for CTAs, highlights, and moments of energy.
- Backgrounds should always have warmth. Even "black" sections should lean slightly brown.
- Text always has a warm tint. Pure white text on pure black backgrounds feels cold and modern. Warm text on warm black feels organic and premium.
- Error states use deep red, not bright red. Bright red feels alarming. Deep red feels serious but composed.

### 2.4 Section Gradients

Each section of the page should have a subtle gradient transition to create visual flow:

- **Default section gradient:** `bg-gradient-to-b from-[#0c0b09] via-[#0f0d0a] to-[#0c0b09]`
- **Gold-accent section gradient:** `bg-gradient-to-b from-[#0c0b09] via-[rgba(201,154,59,0.04)] to-[#0c0b09]`
- **Maroon-accent section gradient:** `bg-gradient-to-b from-[#0c0b09] via-[rgba(107,27,43,0.04)] to-[#0c0b09]`

The via color should never be opaque. It should be 3-5% opacity — felt but not seen.

---

## 3. Spacing System

### 3.1 Scale

A 4px base with 8px increments. Every spacing value is intentional — no arbitrary distances.

| Token | Value | Example Usage |
|---|---|---|
| --space-1 | 0.25rem / 4px | Micro spacing, icon gaps |
| --space-2 | 0.5rem / 8px | Tight spacing, label margins |
| --space-3 | 0.75rem / 12px | Button padding vertical, tag gaps |
| --space-4 | 1rem / 16px | Body text spacing, card padding inner |
| --space-5 | 1.25rem / 20px | Section heading bottom margin |
| --space-6 | 1.5rem / 24px | Card padding standard, form spacing |
| --space-8 | 2rem / 32px | Section padding mobile, card gap |
| --space-10 | 2.5rem / 40px | CTA button padding horizontal |
| --space-12 | 3rem / 48px | Section padding tablet, large gaps |
| --space-16 | 4rem / 64px | Section padding desktop |
| --space-20 | 5rem / 80px | Hero section top padding mobile |
| --space-24 | 6rem / 96px | Hero section top padding desktop |

### 3.2 Section Spacing

| Breakpoint | Section Padding (Top & Bottom) |
|---|---|
| Mobile (< 640px) | 4rem / 64px |
| Tablet (640-1024px) | 5rem / 80px |
| Desktop (> 1024px) | 6rem / 96px |

**First section after hero:** No top padding (hero flows into it).
**Last section before footer:** Extra bottom padding (+2rem).

### 3.3 Grid

- **Max content width:** 1280px
- **Page padding:** 1.5rem (mobile), 2rem (tablet), 2rem (desktop)
- **Column gap:** 1.5rem (mobile), 2rem (desktop)
- **Grid columns:** 4 (mobile), 8 (tablet), 12 (desktop)

---

## 4. Border Radius

| Token | Value | Usage |
|---|---|---|
| --radius-sm | 0.375rem / 6px | Tags, badges, small indicators |
| --radius-md | 0.75rem / 12px | Buttons, small cards, inputs |
| --radius-lg | 1rem / 16px | Standard cards, modals, dropdowns |
| --radius-xl | 1.5rem / 24px | Feature cards, large containers |
| --radius-2xl | 2rem / 32px | Hero container, major sections |
| --radius-full | 9999px | Pills, avatars, circular elements |

**Guidelines:** 
- Never use different radii on elements within the same component.
- Cards within the same section should share the same radius.
- Buttons should always be --radius-md. Pill-shaped buttons only for tags/badges.

---

## 5. Elevation & Shadows

### 5.1 Shadow Tokens

All shadows use warm, ambient colors — never neutral gray or pure black shadows.

| Token | Value | Usage |
|---|---|---|
| --shadow-sm | `0 1px 2px rgba(0,0,0,0.3)` | Subtle separation, card hover default |
| --shadow-md | `0 4px 12px rgba(0,0,0,0.25), 0 1px 3px rgba(0,0,0,0.15)` | Standard cards, elevated surfaces |
| --shadow-lg | `0 8px 24px rgba(0,0,0,0.3), 0 2px 6px rgba(0,0,0,0.2)` | Modals, dropdowns, floating elements |
| --shadow-xl | `0 16px 48px rgba(0,0,0,0.35), 0 4px 12px rgba(0,0,0,0.25)` | Hero overlays, fullscreen modals |
| --shadow-gold-sm | `0 1px 3px rgba(201,154,59,0.15)` | Gold-accented elements, subtle glow |
| --shadow-gold-md | `0 4px 12px rgba(201,154,59,0.2)` | Gold accent on hover, elevated gold elements |
| --shadow-inner | `inset 0 1px 0 rgba(255,255,255,0.04)` | Inner highlight for glass surfaces |

### 5.2 Elevation Layers

| Layer | z-index | Shadow | Usage |
|---|---|---|---|
| Base | 0 | None | Page background |
| Surface | 1 | --shadow-sm | Standard cards |
| Elevated | 10 | --shadow-md | Hovered cards, raised sections |
| Floating | 50 | --shadow-lg | Navbar, sticky elements |
| Overlay | 100 | --shadow-lg + bg blur | Dropdowns, sheets |
| Modal | 200 | --shadow-xl | Modals, lightboxes |
| Toast | 300 | --shadow-lg | Notifications, toasts |

---

## 6. Glass & Surface Treatment

### 6.1 Glass Variants

Glass should feel like thick, hand-crafted glass — not a CSS demo.

| Variant | Background | Blur | Border | Usage |
|---|---|---|---|---|
| **Glass subtle** | `rgba(255,255,255,0.02)` | `blur(12px)` | `rgba(255,255,255,0.04)` | Navbar, subtle overlays |
| **Glass standard** | `rgba(255,255,255,0.03)` | `blur(20px)` | `rgba(255,255,255,0.06)` | Cards, containers |
| **Glass gold** | `rgba(201,154,59,0.06)` | `blur(20px)` | `rgba(201,154,59,0.12)` | Premium accent cards, countdown |
| **Glass raised** | `rgba(255,255,255,0.04)` | `blur(24px)` | `rgba(255,255,255,0.08)` | Modals, elevated containers |

**Guidelines:**
- Glass should always have a warm tint. Pure white glass on dark backgrounds looks cheap.
- The border should be barely visible — 4-6% opacity. If you notice the border first, it's too strong.
- Glass should only appear on top of visually busy backgrounds. On solid backgrounds, use solid surfaces instead.

### 6.2 Surface Patterns

For variety, surfaces can use these subtle background treatments:

- **Dot pattern:** `radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)` at 32px spacing
- **Line pattern:** `repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.02) 1px, rgba(255,255,255,0.02) 2px)`
- **Gradient overlay:** `linear-gradient(180deg, rgba(201,154,59,0.03) 0%, transparent 100%)`

---

## 7. Iconography

### 7.1 Icon Set

Use lucide-react as the primary icon library. For Indian/spiritual icons, use inline SVG or unicode characters. Never mix icon libraries in the same component.

### 7.2 Icon Sizing

| Context | Size | Stroke |
|---|---|---|
| Inline with text | 1em (matching font size) | 2px |
| Small UI icons | 1rem / 16px | 2px |
| Standard UI icons | 1.25rem / 20px | 2px |
| Medium icons | 1.5rem / 24px | 1.5px |
| Large icons | 2rem / 32px | 1.5px |
| Feature icons | 2.5rem / 40px | 1.5px |
| Section header icons | 3rem / 48px | 1.5px |

### 7.3 Rules

- All icons must be outline style. Never use filled icons — they feel heavy and dated.
- Icons should always align to the baseline of adjacent text.
- An icon without a label should have an aria-label for accessibility.
- Never stretch or distort icons.
- Decorative icons (Om symbol, diya, lotus) should be rendered as text/unicode for accessibility, not as images.

---

## 8. Button System

### 8.1 Button Variants

| Variant | Background | Text | Border | Hover | Active |
|---|---|---|---|---|---|
| **Primary** | `--color-gold` | `--color-text-inverse` | None | `--color-gold-light` | Slight scale down |
| **Secondary** | `rgba(255,255,255,0.04)` | `--color-text-primary` | `--color-border` | `rgba(255,255,255,0.08)` | Darker bg |
| **Ghost** | Transparent | `--color-text-primary` | None | `rgba(255,255,255,0.04)` | Darker bg |
| **Text** | Transparent | `--color-gold` | None | `rgba(201,154,59,0.08)` | Darker bg |
| **Danger** | `--color-error` | `--color-text-primary` | None | Darken by 10% | Darken by 15% |
| **Outline Gold** | Transparent | `--color-gold` | `rgba(201,154,59,0.3)` | `rgba(201,154,59,0.08)` bg | Darker bg |

### 8.2 Button Sizing

| Size | Height | Horizontal Padding | Font Size | Radius |
|---|---|---|---|---|
| **xs** | 1.75rem / 28px | 0.75rem / 12px | 0.75rem | --radius-md |
| **sm** | 2.25rem / 36px | 1rem / 16px | 0.8125rem | --radius-md |
| **md** | 2.75rem / 44px | 1.5rem / 24px | 0.875rem | --radius-md |
| **lg** | 3.25rem / 52px | 2rem / 32px | 0.9375rem | --radius-md |
| **xl** | 3.75rem / 60px | 2.5rem / 40px | 1rem | --radius-md |

### 8.3 Button States

- **Rest:** Standard variant styling.
- **Hover:** Background lightens by 1 step. Cursor changes to pointer.
- **Pressed:** Transform scale(0.97) for tactile feedback. Duration 100ms.
- **Focus:** 2px solid ring in --color-gold at 30% opacity. Offset 2px.
- **Disabled:** Opacity 0.4. No hover effects. No cursor pointer.
- **Loading:** Show a spinner icon. Disable interaction. Content hidden behind spinner.
- **Icon:** Square button matching height. Icon centered. Same radius as standard buttons.

### 8.4 Button Guidelines

- Buttons should feel tactile. The press animation (scale 0.97) is essential.
- Button text is always sentence case, not uppercase.
- Never use all-caps button labels — they feel like banners, not actions.
- Icons in buttons should be on the left for action icons, on the right for directional icons (arrows).

---

## 9. Card System

### 9.1 Card Variants

| Variant | Background | Border | Padding | Radius | Shadow |
|---|---|---|---|---|---|
| **Surface** | `--color-bg-elevated` | `--color-border` | `1.5rem` | `--radius-lg` | None |
| **Glass** | Glass standard | Glass border | `1.5rem` | `--radius-lg` | None |
| **Glass Gold** | Glass gold | Gold border | `1.5rem` | `--radius-lg` | --shadow-gold-sm |
| **Raised** | `--color-bg-raised` | `--color-border-strong` | `1.5rem` | `--radius-lg` | --shadow-md |
| **Stat** | `--color-bg-elevated` | `--color-border` | `2rem` | `--radius-xl` | None |
| **Feature** | Gradient accent | None | `2rem` | `--radius-xl` | None |
| **Timeline** | Surface | Left gold accent | `1.5rem` | `--radius-lg` | None |

### 9.2 Card Hover

All interactive cards share the same hover language:

- Background lightens by 1 step
- Border transitions to gold at 20% opacity
- Elevation increases by 1 step (adds shadow)
- Duration: 400ms ease-out
- No scale transformation on hover — it feels gimmicky

### 9.3 Card Typography

- Card title: H3 (1.25rem mobile / 1.75rem desktop)
- Card description: Body Small (0.875rem)
- Card metadata: Caption (0.75rem)

---

## 10. Form System

### 10.1 Input Styling

| Property | Value |
|---|---|
| Background | `rgba(255,255,255,0.03)` |
| Border | `rgba(255,255,255,0.08)` |
| Border radius | `--radius-md` |
| Text color | `--color-text-primary` |
| Placeholder | `--color-text-tertiary` |
| Padding Y | 0.875rem / 14px |
| Padding X | 1.25rem / 20px |
| Font size | 0.9375rem / 15px |
| Focus border | `rgba(201,154,59,0.35)` |
| Focus ring | `0 0 0 3px rgba(201,154,59,0.1)` |
| Transition | 300ms ease-out |

### 10.2 States

- **Default:** Subtle border, transparent background.
- **Hover:** Border lightens slightly. Background becomes `rgba(255,255,255,0.05)`.
- **Focus:** Gold border at 35% opacity. Soft gold ring. No scale change.
- **Error:** Border becomes `rgba(139,46,46,0.5)`. Error message below in --color-error at 13px, 8px top margin.
- **Success:** Border becomes `rgba(74,122,74,0.4)`.
- **Disabled:** Opacity 0.4. No interaction.

### 10.3 Textarea

Same as input, but with:
- Minimum height: 6rem / 96px
- Resize: vertical only
- Padding Y: 1rem / 16px

### 10.4 Select/Dropdown

Same as input, with a custom chevron icon on the right. No native browser styling.

### 10.5 Labels

- Font size: 0.8125rem / 13px
- Weight: 500
- Color: `--color-text-secondary`
- Margin bottom: 0.375rem / 6px
- Space between label groups: 1.5rem / 24px

---

## 11. Motion Language

### 11.1 Philosophy

Animations should feel like a natural property of the material — not an effect applied on top. Every animation serves a purpose: orienting the user, providing feedback, or enhancing storytelling.

No animation should ever feel decorative. If removing it doesn't change comprehension, it shouldn't exist.

### 11.2 Easing

| Token | Cubic Bezier | Usage |
|---|---|---|
| --ease-out | `cubic-bezier(0.16, 1, 0.3, 1)` | Entrances, reveals, hero animations |
| --ease-in-out | `cubic-bezier(0.65, 0, 0.35, 1)` | Transitions between states |
| --ease-spring | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Micro-interactions, button press |
| --ease-linear | `cubic-bezier(0, 0, 1, 1)` | Progress bars, loading indicators |

### 11.3 Duration

| Token | Value | Usage |
|---|---|---|
| --duration-instant | 0ms | No animation |
| --duration-fast | 150ms | Hover states, micro-interactions |
| --duration-normal | 300ms | Button transitions, card hovers |
| --duration-slow | 500ms | Section reveals, meaningful transitions |
| --duration-narrative | 800ms | Hero entrances, major reveals |
| --duration-cinematic | 1200ms | Large hero elements, atmospheric reveals |

### 11.4 Animation Types

**Entrance Animation (Sections)**
- Elements slide up 24px and fade in
- Duration: 500ms
- Easing: --ease-out
- Stagger: 80ms between child elements
- Trigger: When element enters viewport (Intersection Observer with -80px margin)

**Hover Animation (Interactive Elements)**
- Scale: none (except buttons at 0.97 press)
- Background: transitions over 300ms
- Border: transitions over 400ms
- Shadow: transitions over 300ms

**Page Animation**
- Page content fades in over 600ms after navigation
- No slide transitions between pages — they feel disjointed

**Scroll Animation**
- Elements reveal as they enter the viewport
- Never animate something already in the viewport on load — it feels overwhelming
- Reduced motion: Respect `prefers-reduced-motion`. Replace all animations with instant reveals.

### 11.5 Guidelines

- No element should animate for longer than 1.5 seconds.
- No element should animate more than once (unless repeating for atmospheric effect).
- Staggered reveals should not exceed 6 items. Beyond that, batch them in groups.
- Text reveals should slide up. Scale reveals feel overly dramatic.
- Images should fade in (never slide) to avoid disorientation.

---

## 12. Background System

### 12.1 Default Background

The default background is a warm black-to-very-dark-brown gradient:

```css
background: linear-gradient(
  180deg,
  #0c0b09 0%,
  #100d0a 50%,
  #0c0b09 100%
);
```

### 12.2 Section Alternation

To create visual rhythm, alternate section backgrounds:

| Section Pattern | Style |
|---|---|
| **Odd sections** | Default background |
| **Even sections** | Default + gold overlay via color at 3% opacity |
| **Hero** | Cinematic (darkest, with particle overlay) |
| **Impact/Legacy sections** | Gold accent overlay (5% opacity, centered) |
| **Footer** | Deepest shade (#090806) |

### 12.3 Atmospheric Overlays

For special sections, use soft radial gradients to create "lighting":

```css
/* Warm top-left lighting */
background-image: 
  radial-gradient(ellipse at 20% 0%, rgba(201,154,59,0.04) 0%, transparent 50%),
  radial-gradient(ellipse at 80% 100%, rgba(201,154,59,0.03) 0%, transparent 50%);
```

### 12.4 Noise Texture

A subtle noise texture should overlay the entire page at 2-3% opacity:

```css
background-image: url("data:image/svg+xml,...noise pattern...");
background-repeat: repeat;
background-size: 200px 200px;
opacity: 0.025;
pointer-events: none;
```

This should be applied as a fixed overlay, not per-section.

---

## 13. Responsive Breakpoints

| Name | Min Width | Container | Usage |
|---|---|---|---|
| Mobile | 0 | 100% | Base styles |
| Tablet | 640px | 640px | Typography scale up, 2-column grids |
| Desktop | 1024px | 1024px | Full layout, 3-4 column grids |
| Wide | 1280px | 1280px | Max content width, additional whitespace |

All values are defined mobile-first. Every `min-width` breakpoint enhances the mobile experience.

---

## 14. Accessibility Requirements

- All text must meet WCAG AA contrast ratio (4.5:1 for normal text, 3:1 for large text).
- Interactive elements must have visible focus states.
- All images must have descriptive alt text.
- Decorative icons must use `aria-hidden="true"`.
- All form inputs must have associated labels.
- Touch targets must be at least 44x44px.
- Motion respects `prefers-reduced-motion`.
- Semantic HTML structure (h1-h6 hierarchy, landmark elements).
- Tab order must follow visual order.
- Error messages must be announced by screen readers.

---

## 15. Spacing & Alignment Rules

- Every component's internal spacing must use the spacing scale. No exceptions.
- Text should never touch the edge of a card. Minimum internal padding is 1.5rem.
- Between unrelated sections, use section spacing (4-6rem).
- Between related elements within a section, use 1.5-2rem.
- Between paragraphs, use 1.25rem.
- Lists should use 0.5rem between items.
- Icons should be centered in their containers. No manual offset adjustments.

---

## 16. Typography Hierarchy Rules

1. Every page has exactly one H1 — the hero headline.
2. Each section has an H2 — the section title.
3. Cards within sections use H3 or H4.
4. Body text is always paragraph text, never header text styled to look smaller.
5. Overline text (section labels) should be smaller than the smallest body text.
6. No two adjacent elements should differ by less than 2px in font size — either they're the same size or meaningfully different.

---

## 17. Visual Rhythm Principles

1. **Alternation:** Consecutive sections should alternate visual density. A text-heavy section should be followed by a visual-heavy section.
2. **Rest:** Every third section should be visually quieter — less content, more whitespace, softer colors.
3. **Progression:** The further down the page, the warmer and brighter the accents become. This mirrors the emotional journey — building toward warmth and invitation.
4. **Consistency:** The same element type always looks the same. A button on the hero looks like a button in the footer. A card in the gallery looks like a card in the schedule.
5. **One system:** No section should invent its own visual language. Everything belongs to the same family.
