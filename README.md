## Shaloz LP – Developer Guide

This project is a **Next.js 13+ (App Router) landing site** for Shaloz, with a reusable component library and shared design tokens.

### 1. Getting started

#### 1.1. Prerequisites
- **Node.js**: v18+ (LTS recommended)
- **Package manager**: `npm` (comes with Node)

#### 1.2. Install dependencies
From the project root (this folder):

```bash
npm install
```

#### 1.3. Run the dev server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser:
- `/` → Shaloz main landing page
- `/faq` → FAQ page

### 2. Project structure (high level)

- `app/`
  - `layout.tsx` – global HTML shell (imports global CSS).
  - `page.tsx` – main Shaloz landing page (LP).
  - `faq/page.tsx` – FAQ page, with category tabs and accordion.
  - `globals.css` – Tailwind base + imports Shaloz design tokens.
  - `shaloz.css` – **design tokens and shared custom CSS classes**.
- `components/`
  - `Header.tsx` / `Footer.tsx` – shared layout elements.
  - `Container.tsx` – centered, max-width wrapper.
  - `Section.tsx` – section wrapper with background variants.
- `components/sections/`
  - `Hero.tsx`, `Features.tsx`, `HowItWorks.tsx`, `Testimonials.tsx`,
    `Pricing.tsx`, `FAQ.tsx`, `FinalCta.tsx` – LP/FAQ sections.

### 3. Styling approach

We combine **Tailwind CSS** for layout & spacing with a **central style file** for brand system.

#### 3.1. Tailwind – when to use

Use Tailwind utility classes for:
- Layout: `flex`, `grid`, `gap-*`, `items-center`, `justify-between`, etc.
- Spacing: `px-*`, `py-*`, `mt-*`, `mb-*`, `space-y-*`, etc.
- Typography scale: `text-sm`, `text-lg`, `font-semibold`, etc.

Keep Tailwind classes **mostly for structure and generic utilities**, not for detailed brand rules.

#### 3.2. Shaloz design tokens – `app/shaloz.css`

This file defines:
- **CSS variables** (tokens):
  - Colors: `--shz-color-brand`, `--shz-color-brand-dark`, `--shz-color-footer-bg`, etc.
  - Radii: `--shz-radius-sm`, `--shz-radius-md`, etc.
  - Shadows: `--shz-shadow-soft`, etc.
- **Reusable classes** (examples):
  - `.shz-btn-primary` – primary gradient button (used for main CTAs).
  - `.shz-pill`, `.shz-pill--active` – pill-style chips (used in FAQ filters / tags).
  - `.shz-section-card`, `.shz-card-soft`, `.shz-faq-item` – common card / surface treatments.

You can change **brand colors, radii, and shadows** in `shaloz.css` and the whole site updates without touching components.

`app/globals.css` imports this file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Shaloz design tokens & shared styles */
@import "./shaloz.css";
```

#### 3.3. How components should use styles

Preferred pattern:
- Use Tailwind for **layout / spacing**.
- Use `shaloz.css` classes for **buttons, pills, and repeated card styles**.

Examples:
- Primary button:

```tsx
<button className="shz-btn-primary">
  Get started
</button>
```

- FAQ filter chip (active):

```tsx
<button className="shz-pill shz-pill--active">
  All
</button>
```

If you find yourself repeating a long Tailwind string across multiple components, consider:
1. Moving it into a class in `shaloz.css`.
2. Replacing the Tailwind string with that class.

### 4. Creating a new page

Use the **App Router** convention: each route is a folder in `app/` with its own `page.tsx`.

#### 4.1. Basic pattern

1. Create a new folder under `app/`, for example:
   - `app/about/page.tsx`
2. Use the shared layout components:
   - `Header`, `Footer`, `Section`, and any `components/sections/*` you need.

Minimal scaffold:

```tsx
// app/about/page.tsx
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Section } from "../components/Section";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Earn", href: "/#earn" },
  { label: "Industries", href: "/#industries" },
  { label: "Track", href: "/#track" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" }
];

export default function AboutPage() {
  return (
    <>
      <Header links={navLinks} />

      <main>
        <Section background="default">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
            About Shaloz
          </h1>
          <p className="mt-3 max-w-xl text-sm text-slate-600">
            {/* Page copy goes here */}
          </p>
        </Section>
      </main>

      <Footer />
    </>
  );
}
```

3. Update navigation (if needed):
   - For the landing page, the header nav is defined in `app/page.tsx`:

```tsx
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Earn", href: "/#earn" },
  { label: "Industries", href: "/#industries" },
  { label: "Track", href: "/#track" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" } // <-- new page
];
```

Use the same `navLinks` array on other pages (copy or centralize later) to keep the header consistent.

#### 4.2. Reusing existing sections

If the new page needs blocks similar to the LP:
- Import the relevant section component from `components/sections` and pass content via props.
  - Example: reuse `Features` or `HowItWorks` with different copy.
- Keep **page-specific text in the page file**, not inside section components.

### 5. Creating new reusable sections

When the design calls for a new type of section:

1. Create a new file in `components/sections/`, for example:
   - `components/sections/Stats.tsx`
2. Use `Section` and `Container` to ensure consistent spacing and width.
3. Accept props for all **variable content** (titles, text, images, list items).
4. Optionally, define any complex or repeated styles in `shaloz.css`.

This keeps:
- **Layout + brand** consistent.
- **Copy and data** configurable from each page.

### 6. FAQ page specifics

The FAQ page (`app/faq/page.tsx`) is a **client component** because it has interactive category tabs.

- Uses `useState` to track `activeCategory`.
- Renders pills from a categories array and filters `faqItems` by category.
- Passes filtered items into the shared `FAQ` section component.

To add / edit FAQs:
- Edit `faqItems` in `app/faq/page.tsx` (change questions, answers, or categories).
- To add a new category:
  - Add a new entry to `faqCategories`.
  - Assign that category ID to one or more FAQ items.

---

If you follow this structure (Tailwind for layout, `shaloz.css` for brand styles, sections under `components/sections`, new routes under `app/`), you can extend Shaloz with new pages quickly while keeping the design consistent with the Figma file.


