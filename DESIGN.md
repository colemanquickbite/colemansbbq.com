---
name: "Coleman's BBQ Company, LLC"
description: "A smoke-ring editorial system where real Southern food is the proof."
colors:
  smoke-black: "#17130f"
  smoke-soft: "#2c241d"
  butcher-paper: "#f3eadb"
  table-cream: "#fff8ea"
  ember-red: "#a62c1c"
  ember-dark: "#762116"
  pit-mustard: "#d9a21b"
  ink-on-dark: "#fff7e8"
  muted-on-dark: "#d7c8b5"
  focus-gold: "#f0ba34"
typography:
  display:
    fontFamily: "Alumni Sans, Arial Narrow, sans-serif"
    fontSize: "clamp(4.5rem, 7.2vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.76
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Alumni Sans, Arial Narrow, sans-serif"
    fontSize: "clamp(3.4rem, 7vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.84
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Alumni Sans, Arial Narrow, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.09em"
rounded:
  square: "0"
  circle: "50%"
spacing:
  gutter: "clamp(1.25rem, 4vw, 4.5rem)"
  section: "clamp(5.5rem, 11vw, 10rem)"
  grid-gap: "1.2rem"
components:
  button-primary:
    backgroundColor: "{colors.ember-red}"
    textColor: "{colors.table-cream}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0.75rem 1.35rem 0.65rem"
    height: "3.35rem"
  button-primary-hover:
    backgroundColor: "#c23a27"
    textColor: "{colors.table-cream}"
  button-light:
    backgroundColor: "{colors.table-cream}"
    textColor: "{colors.smoke-black}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0.75rem 1.35rem 0.65rem"
    height: "3.35rem"
  nav-cta:
    backgroundColor: "{colors.pit-mustard}"
    textColor: "{colors.smoke-black}"
    rounded: "{rounded.square}"
    padding: "0.72rem 1rem 0.63rem"
---

# Design System: Coleman's BBQ Company, LLC

## Overview

**Creative North Star: "The Smoke-Ring Cross-Section"**

Coleman's BBQ Company, LLC lives in the tension between smoke-black pit-room fields and tactile butcher paper. Oversized condensed foundry lettering carries the Coleman name and the directness of a hand-painted pit sign; Source Serif copy slows the rhythm into something warmer and more conversational. Real supplied food photography is never garnish. It is the evidence, often full-bleed, closely cropped, glossy, and allowed to dominate the composition.

The system is premium without becoming polished away from the food. Crisp rules, square controls, a restrained ember-and-mustard accent pair, and asymmetrical image-led layouts keep it professional and specific. It refuses cartoon smoke, rustic clip art, stock restaurant imagery, soft lifestyle-card templates, and decorative copy that competes with the food.

**Key Characteristics:**

- Smoke-dark stages against real, fibered butcher paper.
- Condensed uppercase display type paired with generous serif table copy.
- Full-bleed supplied photography with assertive crops and minimal chrome.
- Ember red for action, mustard for emphasis, and cream for high-contrast reading.
- Crisp rules, square controls, circular stamps, and strong split compositions.

## Colors

The palette reads like a working pit and a laid table: charred near-blacks, warm paper and cream, a controlled ember red, and one sharp mustard highlight.

### Primary

- **Ember Red:** The principal action color for high-intent controls and selected text moments; it should feel hot and concentrated rather than broadly decorative.
- **Deep Ember:** Grounds the catering field and supports large, warm color blocks where ordinary red would feel too bright.

### Secondary

- **Pit Mustard:** Marks decisive emphasis—the hero's serif turn, the navigation inquiry, the circular proof stamp, and selective brand accents.

### Neutral

- **Smoke Black:** The primary dark stage for the hero, food spread, footer, and modal surfaces.
- **Soft Smoke:** A fallback bed behind photographs and other dark nested surfaces.
- **Butcher Paper:** The main reading surface, always carrying the shipped raster fiber texture rather than appearing as a flat beige fill.
- **Table Cream:** The brightest warm surface and light-button color.
- **Ink on Dark:** The primary reading color on smoke fields.
- **Muted Smoke Ink:** Secondary copy and metadata on dark fields.

**The Fire Is Rare Rule.** Ember and mustard are accents, not ambient decoration. Preserve their force by reserving them for actions, emphasis, and structural counterfields.

**The Paper Is Material Rule.** Butcher Paper is incomplete without the repeating fiber raster; do not flatten it into a generic cream background.

## Typography

**Display Font:** Alumni Sans (with Arial Narrow and sans-serif fallbacks)  
**Body Font:** Source Serif 4 (with Georgia and serif fallbacks)

**Character:** Alumni Sans is the foundry voice: condensed, uppercase, direct, and spatially dramatic. Source Serif 4 is the table voice: warm, legible, and human, carrying body copy and the occasional italic counterpoint inside display compositions.

### Hierarchy

- **Display** (600, responsive oversized scale, 0.76 line-height): Hero statements and the largest Coleman brand moments; uppercase, tightly tracked, and deliberately compact.
- **Headline** (600, responsive section scale, 0.84 line-height): Section openings, usually uppercase and balanced across a short measure.
- **Feature Title** (600, responsive medium display scale, 1 line-height): Food names over photography.
- **Body** (400, base reading scale, 1.65 line-height): Descriptive copy; keep primary passages near 52–57 characters where the layout permits.
- **Label** (600–700, compact scale, 0.09–0.16em tracking): Buttons, navigation, captions, metadata, and food-image labels; uppercase.

**The Foundry and Table Rule.** Alumni Sans names, directs, and stamps; Source Serif explains, invites, and humanizes. Do not let the display face become paragraph copy or the serif become generic decorative titling.

## Layout

The system uses a wide fluid frame capped at 1320px, with a responsive gutter and generous section spacing. Desktop compositions favor unequal splits: the hero is 53/47 type-to-whole-pig, the story pairs a wider text field with a narrower portrait, and the spread uses a 1.25/.75 feature grid. The first viewport keeps navigation compact above the type-and-food collision, with the primary catering action directly beneath the message.

At 980px, navigation becomes a full-screen smoke overlay, the hero stacks image above copy, and multi-column content simplifies without losing scale. At 680px, content becomes primarily single-column, actions stack, gallery tiles retain a two-column rhythm, and catering puts its close food photograph before the inquiry. The repeated 1.2rem grid gap tightens to 0.75rem in the smallest gallery.

**The Food Owns the Frame Rule.** Photography may crop assertively and span rows or columns; interface chrome must not reduce it to interchangeable card thumbnails.

## Elevation & Depth

The system is flat by default and uses no surface box-shadow vocabulary. Depth comes from photographic contrast, dark-to-transparent image gradients, tonal counterfields, the physical butcher-paper texture, slight image scaling on interaction, and one mustard offset slab behind the story photograph. The header earns readability through a smoke gradient that extends below its content. The lightbox backdrop adds a five-pixel blur because it is a true modal layer, not a decorative card.

**The Material Before Shadow Rule.** Create separation with color fields, texture, crop, rules, and overlays. Do not introduce floating cards or soft ambient shadows.

## Shapes

The dominant language is square and crisp: buttons, image frames, sections, and the modal have no corner rounding. Hairline borders and rules provide precision. Circles are reserved for identity and proof—the serif “C” brand mark and the rotated “Real food / Real smoke” stamp—so their silhouette stays distinctive.

**The Two-Shape Rule.** Use uncompromising rectangles for structure and true circles for marks; avoid casual medium-radius containers.

## Components

### Buttons

Buttons are compact pit-room placards: square, uppercase, tightly tracked, and vertically centered at a minimum height of 3.35rem.

- **Primary:** Table Cream type on Ember Red with compact horizontal padding.
- **Light:** Smoke Black type on Table Cream for the dark red catering field; it turns Pit Mustard on hover.
- **Hover / Focus:** Hover lifts by two pixels over 200ms; the primary brightens to a hotter ember. Keyboard focus uses a three-pixel Focus Gold outline with a four-pixel offset.

### Cards / Containers

Food features are not conventional cards. They are edge-to-edge photographic fields with square clipping, lower-image smoke gradients, and overlaid display titles. Images scale subtly on hover; no borders, radii, or resting shadows are used. The story image gains a deliberately offset mustard backplate rather than elevation.

### Navigation

The header sits transparently over the hero with a strong smoke gradient underneath for legibility. The brand combines a circular serif initial with condensed uppercase name copy. Desktop links use tracked uppercase labels and a hairline underline on hover; the inquiry link is a solid mustard placard. Below 980px, the menu becomes a full-viewport Smoke Black field with oversized stacked links and a two-line icon that resolves into an X.

### Gallery Tiles

Gallery buttons are full-image, square-corner zoom targets with labels anchored near the lower edge. Hover and keyboard focus scale the photograph and reduce brightness so the label remains readable. Tall and wide spans create an irregular spread; the image opens in a native modal lightbox with a blurred smoke backdrop.

### Proof Stamp

The mustard circular stamp overlaps the hero seam, rotates slightly, and stacks two condensed uppercase lines. It is a singular signature device; reuse sparingly where a composition needs a physical proof mark.

## Do's and Don'ts

### Do:

- **Do** let real supplied food photography carry the proof and the largest areas of visual interest.
- **Do** render Butcher Paper with the shipped raster fiber texture.
- **Do** keep navigation readable over imagery with the smoke gradient and warm high-contrast type.
- **Do** use Alumni Sans for terse foundry language and Source Serif 4 for hospitable reading copy.
- **Do** preserve square frames, crisp rules, deliberate image crops, and the responsive 1320px fluid frame.

### Don't:

- **Don't** replace the close, glossy food photography with stock imagery, generated food, generic restaurant scenes, or distant catering tableaux.
- **Don't** introduce rounded card grids, pill buttons, cartoon smoke, barbecue clip art, or rustic-template ornaments.
- **Don't** use ember or mustard as broad decoration; their rarity creates hierarchy.
- **Don't** add floating surface shadows where tonal fields, texture, overlays, or rules already create depth.
- **Don't** add decorative kickers above headings; the oversized headline and food image already establish the entry point.
