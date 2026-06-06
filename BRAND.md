# ARIVELA — A5 Flyer Brief (single source of truth)

> You are building a **printed A5 flyer** for **ARIVELA** — a marketplace connecting
> conscious-living / yoga / wellness **hosts** (teachers, facilitators, retreat centers,
> training schools, studios) with **guests** who attend their **events, retreats and
> trainings** across an international community. ARIVELA is a **rebrand** of the former
> *Lumaya* (briefly *Viluma*). The brand *system* below is the foundation; the *name on the
> page is **ARIVELA***.

## THE MISSION
A **2-sided A5 flyer**. **FRONT = guests** (demand). **BACK = hosts** (supply). We are
producing **3 distinct creative concepts**, each in **2 visual treatments**:
- **photo** treatment — a photography-led layout with **empty styled photo frames** that
  contain printed art-direction + a Freepik shotlist (no stand-in images; the client drops
  licensed Freepik photos in later).
- **duotone** treatment — fully self-contained **illustration in a duotone palette**
  (inline SVG, no external images). On-brand secondary system.

So per concept there are **4 HTML files**: `{photo,duotone} × {guests,hosts}`.

## ⛔ FRESH REBRAND — DO NOT COPY PRIOR ART
This is a clean-slate rebrand. **Do not** reference, echo, or reuse any prior Lumaya flyer
or its tropes (e.g. the old dark-olive masthead band + Lumaya SVG logo). Invent original,
contemporary, editorial compositions. Brand *tokens* (color/type/voice/photo rules) carry
over; *layouts* are new.

## CANVAS & PRINT SPEC
- **A5 portrait @ 300 DPI = `1748 × 2480 px`.** The page root MUST be exactly this size.
- Backgrounds should **bleed to all four edges** (so 3mm bleed can be added later).
- Keep all text + the QR + the wordmark inside a **safe margin of ~118px (10mm)** from every edge.
- Min body text ~28px (≈ 9.5pt) for print legibility; captions no smaller than ~22px.
- One clear focal moment per side. Generous negative space. A5 is small — do not overcrowd.

## PALETTE (use 2–3 colors beyond neutrals; desaturated; never pure black/neon)
Neutrals / foundation:
- `#F9F6EF` page cream (primary bg) · `#FFF6E9` warm cream (accent bg) · `#FFFFFF` white
- `#1D1D21` main text (use instead of #000) · `#5C5C5C` secondary text · `#8C8C8C` muted/meta
- `#E8E4DC` hairline dividers/borders
Orange (warmth / invitation — primary accent, CTAs):
- `#C8702A` primary accent · `#A85A1E` deeper · `#FAF3EA` light tint · `#3F290E` deep brown
Olive (grounding / depth — secondary accent):
- `#6B6E45` olive · `#F5F6F0` olive light tint · `#12130C` deep olive
**Guests side** leans warm/inviting (orange-forward). **Hosts side** leans grounded/credible
(olive-forward). Keep them a clearly related pair (same system, two moods).

## TYPOGRAPHY
Load once at top of each file:
```html
<style>@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Inter:wght@300;400;500;600;700&display=swap');</style>
```
- **Lora** (serif) — headlines/editorial. *Italic is the signature voice — use Lora italic for the hero line.*
- **Inter** (sans) — body, eyebrows, labels, buttons, wordmark.
- Never justify text. Tight, confident letter-spacing on the wordmark; normal elsewhere.

## WORDMARK — "ARIVELA"
Text-only wordmark (no logo image exists yet). Render as styled text:
- Letters `ARIVELA`, **Inter 600**, **uppercase**, letter-spacing **~0.4em**.
- Color `#1D1D21` on light backgrounds; `#FFFFFF` on dark/accent backgrounds.
- Optional 2px `#C8702A` accent rule (≈36–48px wide) centered below it.
- Place it as a calm masthead — top or bottom, your call per composition. It is a young brand;
  let the wordmark feel quietly confident, not loud.

## VOICE (tone-of-voice — strict)
"A quiet invitation into presence." Speak like a calm, trustworthy friend sharing something
real — **never** salesy. Rules:
- Inviting, not convincing. Naturally positive, emotionally restrained. No hype, no urgency,
  no promises of transformation/healing/outcomes.
- Lowercase-friendly CTAs ("discover what's near you", "create your host profile"). No
  ALL-CAPS CTAs, no "CLICK HERE / BUY NOW", at most one exclamation mark anywhere.
- Soft conscious vocabulary (presence, connection, practice, community) only where natural.
  No guru/mystical/insider jargon. Inclusive of beginners and elders alike.

## THE CONTENT (use these props — paraphrase warmly, don't pad)
### GUESTS (front)
- Core line territory: **"Find experiences that truly matter."**
- The proof: real **events, retreats and trainings**, held by people you can trust.
- The reach / the spine of the whole flyer: **one community, lived across the world** —
  **Rishikesh · Ubud · London · Berlin · Tulum** (an international community living in four
  countries, and growing). This worldwide-circle idea should feel present on both sides.
- CTA: discover what's near you → **arivela.co** (+ QR).

### HOSTS (back)
- **More guests for your events, retreats & trainings** — reach an international community
  living across four countries, and growing.
- **Create your profile** — with your education, training and lineage.
- **Add your places** — and link them with the teachers who hold space there.
- **Coming soon: list your online offerings.** (style as a quiet "coming soon" note, not hype.)
- CTA: create your host profile → **arivela.co** (+ QR).

## QR CODE (already generated — inline the SVG, it's vector/print-safe)
- `assets/qr-arivela-dark.svg`  — dark modules (#1D1D21), transparent bg → for LIGHT backgrounds
- `assets/qr-arivela-light.svg` — white modules → for DARK/accent backgrounds
- `assets/qr-arivela-orange.svg` — accent-tone option
Read the matching file and **paste its `<svg>…</svg>` inline** at the CTA. Render it ~150–190px
on the page with a small quiet zone. Always pair with the text "arivela.co".

## PHOTO TREATMENT — empty frames + art direction (NO stand-in images)
Each photo slot is a **styled frame** (soft 6–8px radius, hairline `#E8E4DC` border or a
subtle cream-tinted fill) containing, in small Inter text, the printed art direction and a
Freepik cue, e.g.:
> ◳ PHOTO — warm editorial, natural window light. Two people in quiet conversation after a
> session, a Lisbon/Berlin studio. Real, unposed, diverse. Leaves room for the headline.
> *Freepik:* "yoga studio candid natural light", "cacao ceremony warm tones", "meditation
> retreat real people".
Photography rules to encode in your directions: real people (not models), diverse bodies/ages,
calm focus & quiet joy (no ecstatic clichés, no guru-on-pedestal, no perfect-pose hero), natural
light & warm neutrals matching the palette, plenty of negative space, observed-not-staged. Avoid
altars/incense/mandalas/sacred-geometry/festival aesthetics.

## DUOTONE TREATMENT — self-contained illustration
Hand-author **inline SVG** illustration in a **two-tone** palette (e.g. cream `#F9F6EF` base +
one of olive `#6B6E45` or orange `#C8702A`; an optional third light tint). Style: abstract /
semi-abstract human figures, **organic flowing lines**, rounded soft geometry, **no facial
features**, gender-neutral silhouettes, lots of breathing room. Motif language by theme: yoga →
breath curves / flowing body; meditation → centered stillness shapes; retreats → horizon /
landscape-human blend; community → overlapping circles / a constellation of places. Optional
subtle grain via an SVG `feTurbulence` filter at very low opacity. No drop shadows, no faux-3D,
no glossy effects, no mandalas/chakras.

## RENDER (for QA — do this after writing each file)
From the **output/** dir (resolves playwright):
```
cd /Users/maya/workspace/lumaya-agentic-core/output && \
node flyers-arivela-rebrand/render.mjs \
  flyers-arivela-rebrand/pages/<file>.html \
  flyers-arivela-rebrand/renders/<file>.png
```
If it prints `CONSOLE_ERRORS:` or fails, note it. Self-contained HTML only depends on Google
Fonts (network) — text must remain readable even if fonts fall back.

## FILE NAMING (write exactly here)
- Concept docs:  `flyers-arivela-rebrand/concepts/concept-{1,2,3}.md`
- Pages:         `flyers-arivela-rebrand/pages/c{N}-{photo|duotone}-{guests|hosts}.html`
- Renders:       `flyers-arivela-rebrand/renders/c{N}-{photo|duotone}-{guests|hosts}.png`
(N = concept number. guests = FRONT, hosts = BACK.)

## QUALITY BAR (6 pillars the critics will score)
1. **Brand fidelity** — palette/type/voice exactly; ARIVELA wordmark correct; feels like a
   premium contemporary editorial piece, not a clip-art flyer.
2. **Message clarity** — guest value + host value land in <5 seconds each; content props present.
3. **Print readiness** — exact 1748×2480, full-bleed bg, text within safe margin, legible sizes,
   QR present + paired with arivela.co.
4. **Persona resonance** — guest side reassures the credibility-seeking guest (Anna/Daniel/Lea);
   host side speaks "be findable, not a marketer; reach a real worldwide community"
   (Lina/Maya/Sebastian/Rainer/Tomás&Inês).
5. **Composition** — one focal moment, hierarchy, negative space, the worldwide-circle spine felt.
6. **Distinctiveness** — the 3 concepts are genuinely different territories; photo & duotone of a
   concept read as a coherent pair.
