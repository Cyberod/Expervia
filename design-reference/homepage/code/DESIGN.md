---
name: Expervia Modern Pro
colors:
  surface: '#101415'
  surface-dim: '#101415'
  surface-bright: '#363a3b'
  surface-container-lowest: '#0b0f10'
  surface-container-low: '#191c1e'
  surface-container: '#1d2022'
  surface-container-high: '#272a2c'
  surface-container-highest: '#323537'
  on-surface: '#e0e3e5'
  on-surface-variant: '#cbc3d7'
  inverse-surface: '#e0e3e5'
  inverse-on-surface: '#2d3133'
  outline: '#958ea0'
  outline-variant: '#494454'
  surface-tint: '#d0bcff'
  primary: '#d0bcff'
  on-primary: '#3b0091'
  primary-container: '#9f78ff'
  on-primary-container: '#330080'
  inverse-primary: '#6d3bd6'
  secondary: '#d3bbff'
  on-secondary: '#3c1b73'
  secondary-container: '#56378d'
  on-secondary-container: '#c7aaff'
  tertiary: '#bec6e0'
  on-tertiary: '#283044'
  tertiary-container: '#8990a8'
  on-tertiary-container: '#22293d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#d0bcff'
  on-primary-fixed: '#23005c'
  on-primary-fixed-variant: '#5417be'
  secondary-fixed: '#ebdcff'
  secondary-fixed-dim: '#d3bbff'
  on-secondary-fixed: '#260059'
  on-secondary-fixed-variant: '#53358b'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#101415'
  on-background: '#e0e3e5'
  surface-variant: '#323537'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 20px
  section-padding: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
---

## Brand & Style

The design system evolves the brand into a high-end, Enterprise SaaS-inspired identity. It transitions from a generic corporate look to a "Modern Corporate" aesthetic that balances technical precision with premium accessibility. 

The personality is **authoritative, innovative, and sleek**. We achieve this by moving away from cluttered layouts and muddy gradients toward a "Clean Tech" style. This involves:
- **Corporate / Modern Foundation:** Reliable and systematic, using a dark-themed foundation to evoke a sense of security and cutting-edge intelligence.
- **Glassmorphism Lite:** Subtle use of backdrop blurs on navigation elements and card overlays to add depth without sacrificing performance.
- **High-Contrast Accents:** Using the legacy deep purple and indigo tones as surgical accents against a dark slate background, ensuring primary actions are unmistakable.
- **Visual Sophistication:** High-quality, monochromatic or subtly tinted imagery integrated into the grid to break up technical content.

## Colors

This design system utilizes a **Deep Dark Mode** as its default state to emphasize the "Technologies" aspect of the brand.

- **Primary (#8A5CF5):** A modernized, more vibrant "Electric Purple" used for primary CTAs, active states, and focus indicators.
- **Secondary (#4B2C82):** A deep "Midnight Indigo" derived from the original brand, used for secondary buttons and subtle background layering.
- **Background/Tertiary (#0F172A):** A sophisticated Slate Black that provides better readability and less eye strain than pure black.
- **Surface:** A slightly lighter charcoal (#1E293B) used for cards and container elements to create depth.
- **Functional:** Success (Emerald), Error (Rose), and Warning (Amber) are used sparingly in low-chroma variants to maintain the dark aesthetic.

## Typography

The typography strategy focuses on a clear hierarchy between technical data and marketing messaging.

1.  **Manrope (Headlines):** Used for its geometric yet approachable nature. It feels "engineered" but maintains a human touch. Use tighter letter spacing for large display text.
2.  **Inter (Body):** Chosen for its exceptional legibility on digital screens. It is used for all long-form content and UI labels.
3.  **JetBrains Mono (Labels/Metadata):** Introduced as a secondary utility font for "Technical Accents" such as tags, timestamps, and small category labels. This reinforces the "Technologies" brand identity.

Ensure a minimum of 1.5x line height for body text to maintain the "generous whitespace" requirement.

## Layout & Spacing

This design system employs a **Structured 12-Column Fluid Grid** with specific constraints to ensure high-end editorial feel.

- **Desktop:** 12 columns with a 32px gutter. Content is centered in a 1280px max-width container.
- **Whitespace:** We use a "Breathable Scale." Section vertical padding is set to 120px to separate core service offerings, preventing the "wall of text" feel of the legacy site.
- **Asymmetry:** High-quality imagery should occasionally "break" the grid or span 50% of the viewport width while text content remains constrained to the grid, creating a modern, dynamic flow.
- **Mobile:** Single column with 20px side margins. Elements transition from horizontal stacks to vertical lists.

## Elevation & Depth

To achieve a "Sleek & Professional" look, the system moves away from heavy, dark shadows.

- **Tonal Elevation:** Instead of shadows, we use background color steps. The base background is `#0F172A`. Elevated cards use `#1E293B`. This creates a sense of "physical layers" without visual noise.
- **Luminous Borders:** Use 1px subtle borders (e.g., `rgba(255,255,255,0.08)`) on cards to define edges against the dark background.
- **Ambient Glow:** For primary hover states, use an extremely diffused purple glow (`shadow-spread: 20px, opacity: 0.15`) rather than a traditional black shadow.
- **Glassmorphism:** Navigation bars and sticky headers use a `backdrop-filter: blur(12px)` with a 60% opaque background to maintain context as the user scrolls through imagery.

## Shapes

The shape language is **Refined & Systematic**. 

- **Primary Corners:** A consistent 8px (`0.5rem`) radius is used for buttons, input fields, and small cards. This is soft enough to be approachable but sharp enough to feel professional.
- **Container Corners:** Larger containers or "Hero" cards may use 16px (`1rem`) to emphasize their role as structural sections.
- **Pill Tags:** Use fully rounded corners (999px) for status indicators (e.g., "AI-Driven," "New") to distinguish them from interactive buttons.

## Components

- **Buttons:** 
    - *Primary:* Solid #8A5CF5 with white text. No border. On hover, a slight brightness increase and 2px lift.
    - *Secondary:* Ghost style with a 1px border of #8A5CF5.
- **Cards:** 
    - Feature cards should have a subtle top-border accent in Primary Purple (2px). 
    - Imagery inside cards should have a `zoom-on-hover` transition (1.05x scale) to provide a tactile, interactive feel.
- **Inputs:** 
    - Dark backgrounds (#0F172A) with a 1px border. Focus state changes border to Primary Purple with a subtle outer glow.
- **Chips/Tags:** 
    - Small, uppercase text using JetBrains Mono. Used for technical categorization (e.g., "SECURITY," "CLUSTERING").
- **Lists:** 
    - Use custom SVG icons in Primary Purple rather than standard bullets. Increase vertical padding between list items to `16px`.
- **Imagery Placement:**
    - Images should use `object-fit: cover` and have a subtle dark overlay (10-20%) to ensure text overlays remain readable.