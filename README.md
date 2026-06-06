# ARIVELA — A5 Flyer Rebrand

A two-sided printed **A5 flyer** for **ARIVELA** — the marketplace connecting conscious-living
hosts (teachers, facilitators, retreat centers, training schools, studios) with the guests who
attend their **events, retreats and trainings**, across one community living in four countries.
ARIVELA is a clean-slate rebrand of the former *Lumaya* (briefly *Viluma*); the brand system
(palette, type, voice) carries over, the layouts are all new.

**FRONT = guests** (demand) · **BACK = hosts** (supply).

This deliverable is **four distinct creative concepts**, each rendered in **two visual
treatments** — so sixteen flyer pages in total:

- **photo** — a photography-led layout with **empty, styled photo frames** that print their own
  art direction + a Freepik shotlist inside them. No stand-in images ship; the client drops
  licensed Freepik photos in later.
- **duotone** — a fully self-contained **inline-SVG illustration** in a two-tone palette. No
  external images; on-brand secondary system.

Open **[`index.html`](index.html)** in a browser for the gallery (every concept, every page, with
its PNG render, caption and a link to the source HTML).

---

## The four concepts (one line each)

1. **The Worldwide Circle** — one community, lived across the world; the hero is the circle of
   five cities itself. *Guests: the experiences that matter, shared by a community. · Hosts: be
   found by the people already moving between these places.*
2. **People You Can Trust** — trust shown, not claimed; a fine-magazine-cover restraint where type
   leads. *Guests: the ones who teach this have actually lived it. · Hosts: be found by the people
   who'd love what you do.*
3. **Your Practice Has a Home** — ARIVELA as a home for a practice, the host toolkit made tangible
   through a calm stepped-card rhythm. *Guests: your practice has a home · Hosts: your profile,
   your places, your teachers — one home.*
4. **Off the Center** — the same brand hung off-center; a deliberately asymmetric layout where type
   ranges hard against one edge and the five areas drop diagonally down a margin rail (right on the
   front, left on the back), with big quiet negative space opposite. *Guests: find experiences that
   truly matter — wherever you are. · Hosts: be found — then left to teach.*

---

## File map

```
flyers-arivela-rebrand/
├── index.html              ← on-brand gallery of all 12 pages (start here)
├── README.md               ← this file
├── freepik-shotlist.md     ← consolidated photo art-direction + Freepik search phrases
├── BRAND.md                ← the brief / single source of truth (canvas, palette, voice, naming)
│
├── concepts/
│   ├── concept-1.md        ← "The Worldwide Circle" — positioning, copy, layout, art direction
│   ├── concept-2.md        ← "People You Can Trust"
│   ├── concept-3.md        ← "Your Practice Has a Home"
│   └── concept-4.md        ← "Off the Center" (asymmetric / off-center layout)
│
├── pages/                  ← the deliverable: 12 self-contained A5 HTML pages (1748×2480)
│   ├── c1-photo-guests.html      c1-photo-hosts.html
│   ├── c1-duotone-guests.html    c1-duotone-hosts.html
│   ├── c2-photo-guests.html      c2-photo-hosts.html
│   ├── c2-duotone-guests.html    c2-duotone-hosts.html
│   ├── c3-photo-guests.html      c3-photo-hosts.html
│   ├── c3-duotone-guests.html    c3-duotone-hosts.html
│   ├── c4-photo-guests.html      c4-photo-hosts.html
│   └── c4-duotone-guests.html    c4-duotone-hosts.html
│
├── renders/                ← PNG QA renders, one per page, same basenames as pages/
│   └── c{1,2,3,4}-{photo,duotone}-{guests,hosts}.png
│
├── assets/
│   ├── qr-arivela-dark.svg    ← dark modules, for light backgrounds
│   ├── qr-arivela-light.svg   ← white modules, for dark/accent backgrounds
│   └── qr-arivela-orange.svg  ← accent-tone option
│
├── render.mjs              ← Playwright renderer (HTML → PNG at 1748×2480)
└── gen-qr.mjs              ← regenerates the QR SVGs (encodes https://arivela.co)
```

Naming convention: `c{N}-{photo|duotone}-{guests|hosts}` where `N` is the concept number,
`guests` = front, `hosts` = back. Every page in `pages/` has a matching PNG in `renders/`.

---

## How to swap in Freepik photos

The photo-treatment pages ship with **empty styled frames** — soft-radius, hairline-bordered,
cream-tinted boxes that print their own art direction and a Freepik cue. They are placeholders by
design.

1. Open **[`freepik-shotlist.md`](freepik-shotlist.md)** — it consolidates every photo slot across
   all four concepts, organised by concept and by page/side, with the art-direction brief and the
   exact Freepik search phrases for each slot, as a checklist you can shop against.
2. Search [freepik.com](https://www.freepik.com) with the supplied phrases, honouring the
   photography rules (real people not models, diverse bodies/ages, calm focus, natural light, warm
   neutrals, lots of negative space, observed-not-staged; no altars / incense / mandalas /
   sacred-geometry / festival aesthetics, no guru-on-pedestal, no perfect-pose hero).
3. In the relevant `pages/c{N}-photo-{side}.html`, find the frame element (the box holding the
   art-direction text) and replace its inner placeholder text with an `<img>` pointing at your
   licensed file, or set the frame's `background-image`. Keep the frame's existing dimensions so
   the composition and safe margins stay intact.
4. Re-render to QA the result:
   ```
   cd /Users/maya/workspace/lumaya-agentic-core/output
   node flyers-arivela-rebrand/render.mjs \
     flyers-arivela-rebrand/pages/c1-photo-guests.html \
     flyers-arivela-rebrand/renders/c1-photo-guests.png
   ```

The **duotone** pages need no photos — their illustration is inline SVG and is print-final as-is.

---

## How to print

- **Trim size:** A5 portrait, **148 × 210 mm**.
- **Files:** each page is **1748 × 2480 px at 300 dpi** — the exact A5 pixel size.
- **Bleed:** the backgrounds already **bleed to all four edges**. Add **3 mm bleed + crop marks at
  the printer / in your export step** (the artwork is built so the background extends under that
  bleed; nothing important sits in the bleed region).
- **Safe margin:** all text, the QR and the ARIVELA wordmark sit inside a **~10 mm (≈118 px) safe
  margin** from every edge, so trim variance never clips content.
- **To produce print PDFs:** print each HTML page to PDF (Chrome → Print → A5, margins None,
  background graphics on) or place the high-res PNG renders into your layout tool and export
  CMYK with crop marks + 3 mm bleed. Colours are desaturated and intentionally avoid pure black
  and neon, so they convert cleanly to CMYK.
- A finished flyer pairs one **guests** page (front) with the matching **hosts** page (back) from
  the same concept and treatment.

---

## The QR note

Every page carries an inline, vector QR at the CTA, always paired with the text **arivela.co**.
All three QR variants in `assets/` **encode `https://arivela.co`** — they differ only in colour
(dark modules for light backgrounds, white modules for dark/accent backgrounds, an orange
accent-tone option). Because the QR is inline SVG it is resolution-independent and print-safe.
Regenerate with `node flyers-arivela-rebrand/gen-qr.mjs` if the destination URL ever changes.

---

## What the deliverable is

**Editable, self-contained HTML/CSS.** Each flyer page is a single `.html` file with its styles
inline; the only external dependency is Google Fonts (Lora + Inter), and the text remains legible
if fonts fall back. Open any page directly in a browser, edit the copy or swap the photos in plain
HTML, and re-render with `render.mjs`. Nothing is locked in a proprietary tool.
