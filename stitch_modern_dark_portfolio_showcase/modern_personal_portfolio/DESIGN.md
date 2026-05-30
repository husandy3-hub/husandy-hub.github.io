---
name: Modern Personal Portfolio
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#ffb786'
  on-tertiary: '#502400'
  tertiary-container: '#df7412'
  on-tertiary-container: '#461f00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffdcc6'
  tertiary-fixed-dim: '#ffb786'
  on-tertiary-fixed: '#311400'
  on-tertiary-fixed-variant: '#723600'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 96px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style
The design system is engineered to project a persona of technical precision, professional maturity, and creative clarity. It targets a high-end audience—recruiters, collaborators, and clients—who value efficiency and a sophisticated aesthetic. 

The visual style is **Modern Minimalism** with a focus on high-contrast typography and subtle depth. It utilizes a "dark mode first" philosophy, where the depth is communicated through tonal layering and hair-line borders rather than heavy shadows. The result is a sleek, interface-driven experience that allows content to remain the primary focus while maintaining a distinct, high-tech edge.

## Colors
The palette is centered around a deep charcoal base (#121212) to ensure perfect black levels on OLED displays and reduce visual fatigue. 

- **Primary:** An electric "Digital Blue" used for interactive states, progress indicators, and primary calls to action.
- **Secondary:** An emerald green reserved for success states, "Available for work" indicators, or specific timeline milestones.
- **Neutral/Surface:** The system uses a tiered gray scale. The background is the darkest, while cards and floating elements use a slightly lighter #1E1E1E to create natural separation without needing shadows.
- **Typography:** Pure white (#FFFFFF) is reserved for headings to maximize impact. Secondary text uses a muted zinc gray (#A1A1AA) to establish a clear information hierarchy.

## Typography
This design system utilizes **Inter** exclusively to achieve a systematic, Swiss-inspired clarity. The type scale is aggressive, creating a stark contrast between massive hero statements and highly legible body copy.

Key typographic rules:
- **Tight Kerning:** Large headlines use negative letter-spacing (-0.04em) to create a "blocky," impactful feel.
- **Line Height:** Generous line-height (1.6) is applied to body text to ensure readability against the dark background.
- **Labels:** Small labels and tags should use medium weights with slight letter spacing to maintain legibility at small scales.

## Layout & Spacing
The layout follows a **12-column fixed grid** for desktop, maxing out at 1200px to prevent lines of text from becoming too long. 

- **Desktop:** 12 columns, 24px gutters, and 48px minimum side margins.
- **Tablet:** 8 columns, 24px gutters, 32px side margins.
- **Mobile:** 4 columns, 16px gutters, 24px side margins.

The spacing rhythm is strictly based on multiples of 8. We utilize "Section Vertical Spacing" (96px or 128px) to create the generous whitespace required for a premium, minimalist feel. Elements within a card or group should use 12px or 24px increments.

## Elevation & Depth
In this design system, depth is achieved through **Tonal Layering** and **Low-Contrast Outlines** rather than traditional shadows.

1.  **Level 0 (Background):** #121212. The canvas on which all elements sit.
2.  **Level 1 (Cards/Containers):** #1E1E1E. These surfaces feature a 1px solid border (#2D2D2D) to define the edge against the background.
3.  **Level 2 (Popovers/Nav):** #252525. For elements that sit above the scroll, like sticky navigation or tooltips. These may include a subtle background blur (8px to 12px) if transparency is used.

Interactions (hover) should be signaled by brightening the border color or shifting the surface color slightly, rather than increasing shadow spread.

## Shapes
The shape language is "Softly Geometric." A roundedness level of **2** (0.5rem / 8px) is applied to most standard components like project cards and input fields.

- **Standard Elements:** 8px radius.
- **Large Sections/Feature Cards:** 16px (rounded-lg) to 24px (rounded-xl) for a softer, more modern containers.
- **Interactive Tags/Pills:** Full radius (999px) to distinguish them from functional buttons.

## Components

### Sticky Navigation
The navigation bar should be slim, using a semi-transparent #1E1E1E with a `backdrop-filter: blur(12px)`. It features a bottom border of 1px (#2D2D2D). Links are Zinc Gray (#A1A1AA), turning White (#FFFFFF) on hover with a subtle 2px dot indicator below the active link.

### Project Cards
Cards are the primary container for work samples. Use the Level 1 surface color. Images should have a 0.5rem radius and occupy the top half of the card. Text padding should be a consistent 24px. On hover, the border color should transition from #2D2D2D to the Primary Blue (#3B82F6).

### Timeline Elements
For experience sections, use a vertical 2px line in #2D2D2D. Milestones are marked by 12px hollow circles. Active or "current" roles should use the Primary Blue for the circle marker and a subtle outer glow.

### Social Media Tags
Tags are rendered as small pills (Full Radius). They use a background of #2D2D2D and white text. On hover, they shift to a Primary Blue background with a 100ms transition.

### Input Fields & Buttons
- **Primary Button:** Solid Primary Blue background, White text, 8px radius. No shadow.
- **Secondary Button:** Ghost style with a 1px #2D2D2D border.
- **Inputs:** #1E1E1E background, 1px border. Focus state changes border to Primary Blue.