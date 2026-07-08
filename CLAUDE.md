# CLAUDE.md — Website Design & Build Guidelines

This file governs how Claude should design and build this website. It applies to every
page, component, and iteration — not just the first draft. Read it before writing any
UI code, and re-check it before marking any task done.

## Prime directive: this must never look "vibe coded"

"Vibe coded" is shorthand for the generic, templated look that AI tools default to when
no one is enforcing taste. If a page could be mistaken for a random AI-generated SaaS
landing page, it has failed, regardless of how functional the code is.

**Explicitly banned, no exceptions:**
- Purple or violet as a primary or accent color, in flat or gradient form
  (`#7C3AED`, `#8B5CF6`, `#A78BFA`, `indigo-to-purple`, `purple-to-pink`, etc.)
- Any diagonal or radial "hero gradient" used as a background filler
- Generic 3-card feature grids with an icon-in-a-circle, a bold title, and a gray
  sentence, repeated three or four times with no relationship to the actual content
- Glassmorphism / frosted-blur cards used as decoration rather than function
- Default system font stacks (Inter, Roboto, Arial, "system-ui") used untouched, with
  no pairing, no scale, no personality
- Stock hero copy patterns ("Supercharge your workflow," "The future of X," "Unlock
  the power of Y")
- Rounded-corner-everything at the same radius with no variation or intent
- Emoji used as substitute icons
- Numbered markers (01 / 02 / 03) applied to content that isn't actually sequential

If any of these show up in a draft, treat it as a bug and remove it before presenting
the work — don't wait to be asked.

## Design examples the user provides

If the user attaches screenshots, links, or references to websites/designs they like:
- Actually look at them (view the images / fetch the pages) before designing anything.
- Extract concrete, specific signals: palette, type pairing, spacing rhythm, motion
  style, tone of copy, layout structure. Don't just skim for a vibe.
- Treat these references as the strongest signal in the brief — they override the
  default aesthetic instincts below wherever they conflict.
- If no examples are given for a particular axis (e.g. they show color direction but
  not typography), make a deliberate choice for that axis rather than defaulting to
  the banned list above.

## Typography

- Never ship with unstyled default fonts. Every project needs an intentional pairing:
  a display/headline face with real character, and a complementary body face chosen
  for readability at small sizes.
- Load real font files (Google Fonts, Fontshare, or self-hosted) — don't rely on
  whatever the OS happens to have installed.
- Set an actual type scale (distinct sizes/weights for h1, h2, h3, body, caption) —
  don't let every heading be "bold + slightly bigger."
- Check that line-height, letter-spacing, and measure (line length) are tuned per
  size, not copy-pasted defaults.

## Color

- Build a real 4–6 color token system (background, surface, primary text, secondary
  text, one or two accents) with named hex values — not ad hoc classes sprinkled
  through the code.
- Pick an accent color deliberately, grounded in the subject of the site, and steer
  clear of purple/violet per the ban above.
- Check contrast: body text should be comfortably legible (aim for WCAG AA) in both
  light and dark contexts if both exist.

## Layout & structure

- The hero should say something specific about this product/subject, not a
  generic template ("big headline, subhead, two buttons, gradient blob").
- Structural devices (dividers, labels, numbering, eyebrows) should encode something
  true about the content — only use them where they add real meaning.
- Vary the rhythm of sections. Avoid every section being "centered heading + 3-column
  grid" repeated down the page.

## Motion

- Use animation deliberately and sparingly: a page-load sequence, a scroll reveal, a
  hover micro-interaction — not scattered effects on everything.
- Respect `prefers-reduced-motion`.
- If in doubt, cut the animation rather than add another one.

## Responsiveness — required, every time

- Every page/component must be built and verified for **both desktop and mobile**
  before it's considered done. This isn't optional polish, it's part of "finished."
- Check real breakpoints, not just "does it technically not break": at minimum verify
  a mobile width (~375–430px), a tablet width (~768px), and a desktop width
  (~1280px+).
- Watch specifically for: text that overflows or wraps awkwardly, tap targets that are
  too small on mobile, nav that doesn't collapse, hero sections that get crushed or
  leave huge gaps, and horizontal scroll that shouldn't be there.
- Font sizes and spacing should scale sensibly across breakpoints, not just shrink
  uniformly.

## Mandatory self-check before calling anything done

After building or editing a page, Claude must check its own work before presenting it
to the user — this is not optional and not skippable under time pressure:

1. **Scan against the banned list above.** Purple/gradient hero? Default font stack?
   Generic 3-card grid? Stock copy? If yes, fix it now.
2. **Take a screenshot (or render/preview) at both a mobile width and a desktop
   width.** Actually look at both. Don't assume responsive CSS worked — verify it.
3. **Check typography is actually applied** — the custom fonts are loading, not
   falling back to system defaults, and the type scale is visibly intentional.
4. **Check the signature element.** Every good design has one specific thing it's
   memorable for. If nothing about this page would help someone recognize it later,
   that's a sign it's still generic — go back and add a point of view.
5. **Re-read whatever example designs the user gave** and confirm the output actually
   reflects them, not just the general aesthetic direction Claude would default to.
6. Only after all five checks pass, present the work.

## Process

1. Confirm the subject, audience, and the page's job before designing.
2. If the user gave reference designs, study them first and pull concrete signals.
3. Draft a short design plan: color tokens, type pairing, layout concept, one
   signature element. Sanity-check it against the banned list above.
4. Build.
5. Run the mandatory self-check above.
6. Only then present the result — and be ready to say specifically what choices were
   made and why, especially anywhere the design deviates from an AI-generic default.
