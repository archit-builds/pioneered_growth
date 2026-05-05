# PioneeeredGrowth — Copilot Instructions

## WHO YOU ARE

You are a senior Next.js engineer building a premium lead-generation website
for PioneeeredGrowth, a bespoke web development agency. Every decision you make
should reflect premium quality — this website IS the product demo.

## FIGMA DESIGN

https://www.figma.com/design/yF4ATJaPT57X29PBLE4HL9
Always reference this before building any section.

---

## TECH STACK — NEVER DEVIATE FROM THIS

- Next.js 16, App Router, Server Components by default
- TypeScript (strict mode — no `any`)
- Tailwind CSS v4
- Shadcn UI → forms, inputs, buttons, sheet (mobile nav)
- Aceternity UI → hero bg, animations, card effects, testimonials
- Framer Motion → all scroll animations and transitions
- react-hook-form + zod → contact form validation
- next/font → Playfair Display, DM Sans, DM Mono
- lucide-react → icons
- sonner → toast on form submit
- clsx + tailwind-merge → className merging

---

## PROJECT STRUCTURE

Always create files in these exact locations:

app/
layout.tsx
page.tsx
globals.css
components/
layout/
Navbar.tsx
Footer.tsx
sections/
Hero.tsx
TrustBar.tsx
Services.tsx
About.tsx
Process.tsx
Testimonials.tsx
ContactForm.tsx
ui/
Badge.tsx
SectionHeader.tsx
ServiceCard.tsx
TestimonialCard.tsx
StatBlock.tsx
lib/
utils.ts
constants.ts

---

## DESIGN TOKENS

Always use these CSS variables — never hardcode hex values in components:

```css
/* globals.css */
:root {
  --bg-primary: #050a14;
  --bg-secondary: #0a1221;
  --bg-card: #0d1929;
  --blue-primary: #1a8cff;
  --blue-deep: #0a4099;
  --blue-glow: rgba(26, 140, 255, 0.15);
  --orange-primary: #ff7a00;
  --orange-light: #ff9e2e;
  --orange-glow: rgba(255, 122, 0, 0.12);
  --text-primary: #ffffff;
  --text-secondary: #e6eaff;
  --text-muted: #99a6bf;
  --text-faint: #4d5a73;
  --border-subtle: #1f3861;
  --border-card: rgba(31, 56, 97, 0.8);
}
```

In Tailwind config, extend theme with these as custom colors so you can
use classes like `bg-bg-primary`, `text-orange-primary`, etc.

---

## FONTS — SET UP IN layout.tsx

```typescript
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});
const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-mono",
  display: "swap",
});
```

In Tailwind config:
fontFamily: {
display: ['var(--font-playfair)'],
sans: ['var(--font-dm-sans)'],
mono: ['var(--font-dm-mono)'],
}

Use `font-display` for all headings, `font-sans` for body, `font-mono` for labels/badges.

---

## COMPONENT RULES — FOLLOW EVERY TIME

1. Server Component by default. Only add `"use client"` when the component uses:
   - useState / useEffect / useRef
   - framer-motion animations
   - event handlers (onClick, onChange)
   - Aceternity UI interactive components

2. Every component gets a TypeScript interface:

```typescript
interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  accent: "blue" | "orange";
  tag?: string;
}
```

3. Use `cn()` utility for all conditional classNames:

```typescript
import { cn } from "@/lib/utils";
// cn is clsx + tailwind-merge
```

4. No inline styles. Ever. Use Tailwind + CSS variables only.

5. All content/copy goes in `lib/constants.ts`, never hardcoded in JSX.

6. Mobile-first. Write base styles for mobile, then `md:` and `lg:` for desktop.

---

## ANIMATION PATTERN — USE THIS EVERY TIME

```typescript
// Standard variants — copy-paste these into every animated section
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
}

// Usage on a section wrapper:
<motion.div
  variants={stagger}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
>
  <motion.h2 variants={fadeUp}>...</motion.h2>
  <motion.p variants={fadeUp}>...</motion.p>
</motion.div>

// Card hover:
<motion.div whileHover={{ y: -4, transition: { duration: 0.2 } }}>
```

---

## SECTION SPECS

### NAVBAR

- `"use client"` — needs scroll state
- Transparent → `backdrop-blur + bg-bg-secondary/90` on scroll (useEffect + scrollY)
- Logo: `<span className="font-display text-white">pioneered</span><span className="font-display text-orange-primary">growth</span>`
- Desktop: flex row with nav links centered, CTA right
- Mobile: Shadcn `Sheet` for hamburger menu
- Active link: blue underline

### HERO

- Full viewport: `min-h-screen`
- Aceternity `BackgroundBeams` or `BackgroundDots` as absolute positioned bg layer
- Layout: left content col (55%) + right browser mockup (45%)
- Badge component: `<Badge>⚡ WEB TECH DEVELOPMENT</Badge>`
- H1: two lines, Playfair Display, 72px desktop / 42px mobile
  - Line 1: white
  - Line 2: `text-blue-primary`
- Stats row: map over STATS constant, vertical `|` divider between each
- Browser mockup: custom div with fake chrome bar (3 colored dots), URL bar,
  inner content with bar chart — all built with divs/Tailwind, no images
- Stagger animation: badge (0ms) → h1 line1 (100ms) → h1 line2 (200ms) →
  subtext (300ms) → CTAs (400ms) → stats (500ms) → mockup (600ms)

### TRUST BAR

- Aceternity `InfiniteMovingCards` direction="left" speed="slow"
- Or: CSS `@keyframes marquee` scroll with `animation: marquee 20s linear infinite`
- Brand names at 50% opacity

### SERVICES

- Section badge + two-line H2 (white + orange)
- Use Aceternity `HoverEffect` component wrapping your ServiceCard
- 3 columns desktop, 2 tablet, 1 mobile
- ServiceCard props: title, description, icon, accent ('blue'|'orange'), tag?
- Card structure:
  relative rounded-xl border border-border-card bg-bg-card overflow-hidden
  ├── top accent bar: h-[3px] w-full (blue or orange)
  ├── icon (28px, accent color)
  ├── optional "MOST POPULAR" badge (orange, top-right)
  ├── title (18px, bold, white)
  ├── description (13px, muted)
  └── "Learn more →" (12px, accent color)

### ABOUT

- Two-column layout: `grid grid-cols-1 lg:grid-cols-2 gap-16`
- Left: slides in from left on scroll (`x: -60 → 0`)
- Right: slides in from right on scroll (`x: 60 → 0`)
- Reasons list: map REASONS constant, each row has top border,
  icon + title + description, last row has bottom border too
- Signature: `<div className="w-20 h-[2px] bg-orange-primary mb-2" />` + italic text

### PROCESS

- 4 columns desktop (`grid-cols-4`), vertical stack mobile
- Each step:
  ├── large faded number (64px, color: var(--border-subtle))
  ├── horizontal line to next step (hidden on last) — border-t border-border-subtle
  ├── colored dot node (16px circle, alternates blue/orange)
  ├── title (18px bold white)
  └── description (13px muted)
- Steps animate in with `staggerChildren: 0.15`

### TESTIMONIALS

- Use Aceternity `AnimatedTestimonials` if available, else custom cards
- 3 cards: `grid grid-cols-1 md:grid-cols-3 gap-5`
- Each card: star rating → quote → divider → avatar + name/biz
- Quote mark: large `"` in blue at 40% opacity, Playfair Display, absolute positioned

### CONTACT FORM

- Two columns: left copy (40%) + right form card (60%)
- Form card: `bg-bg-card border border-border-card rounded-2xl`
  - Blue top accent: `h-1 w-full bg-blue-primary rounded-t-2xl`
- Shadcn Form with react-hook-form:

```typescript
const schema = z.object({
  fullName: z.string().min(2),
  businessName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(7),
  budget: z.enum(["under-1k", "1k-3k", "3k-5k", "5k-plus"]),
  message: z.string().min(20),
});
```

- On valid submit: show `sonner` toast with "We'll be in touch within 24 hours 🚀"
- Submit button: full width, `bg-orange-primary hover:bg-orange-light`
- First row: fullName + businessName side by side (`grid grid-cols-2 gap-4`)
- Remaining fields: full width, stacked

### FOOTER

- `bg-bg-secondary border-t border-border-subtle`
- Logo left, nav links right
- Bottom row: copyright

---

## CONSTANTS FILE STRUCTURE

```typescript
// lib/constants.ts

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Our Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: "150+", label: "Websites Launched" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "3×", label: "Avg. Lead Increase" },
  { value: "8yr", label: "In The Industry" },
];

export const SERVICES = [
  {
    icon: "◈",
    title: "Bespoke Website Design",
    description:
      "Pixel-perfect, completely custom designs built around your brand identity. No templates, no shortcuts — every pixel is intentional.",
    accent: "blue" as const,
    tag: "MOST POPULAR",
  },
  {
    icon: "⚡",
    title: "Conversion Optimisation",
    description:
      "We study how your visitors behave and engineer your site to turn browsers into buyers.",
    accent: "orange" as const,
  },
  {
    icon: "◉",
    title: "SEO & Performance",
    description:
      "Fast-loading, Google-friendly websites that get found. Optimised for speed, structure, and search visibility from day one.",
    accent: "blue" as const,
  },
  {
    icon: "▣",
    title: "Landing Pages & Funnels",
    description:
      "High-converting campaign pages designed specifically to capture leads and drive enquiries.",
    accent: "orange" as const,
  },
  {
    icon: "◎",
    title: "Website Revamps",
    description:
      "Have an existing site that's underperforming? We'll audit, redesign, and rebuild it into a lead machine.",
    accent: "blue" as const,
  },
  {
    icon: "⬡",
    title: "Ongoing Maintenance",
    description:
      "Your website is a living asset. Ongoing support, updates, and optimisation so it stays fast and effective.",
    accent: "orange" as const,
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We learn everything about your business, goals, and ideal customers. No generic questionnaires.",
    accent: "blue" as const,
  },
  {
    number: "02",
    title: "Strategy & Plan",
    description:
      "I map out the site architecture, user journey, and conversion strategy before a single pixel is drawn.",
    accent: "orange" as const,
  },
  {
    number: "03",
    title: "Design & Build",
    description:
      "Your custom website is crafted with meticulous care — design, code, and performance built in from the start.",
    accent: "blue" as const,
  },
  {
    number: "04",
    title: "Launch & Grow",
    description:
      "We launch, monitor, and refine. Your success is measured in leads — and we track every one.",
    accent: "orange" as const,
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Our enquiries tripled within 6 weeks of launch. The site doesn't just look incredible — it actually converts.",
    name: "James R.",
    business: "Founder, TechScale Ltd",
  },
  {
    quote:
      "I've worked with agencies before and been disappointed. PioneeeredGrowth is different — they treated it like their own business.",
    name: "Sarah M.",
    business: "Owner, Bloom Aesthetics",
  },
  {
    quote:
      "Worth every penny. The attention to detail is unmatched and the results speak for themselves.",
    name: "David K.",
    business: "Director, KapCo Services",
  },
];

export const REASONS = [
  {
    icon: "✦",
    title: "Personal Attention",
    description:
      "Every project gets my full focus. I know your website inside out.",
  },
  {
    icon: "✦",
    title: "Years of Real Experience",
    description:
      "Genuine years building for real businesses — not self-taught overnight.",
  },
  {
    icon: "✦",
    title: "Results-Driven",
    description:
      "I only succeed if your website generates results. That is the standard I hold myself to.",
  },
  {
    icon: "✦",
    title: "Premium Quality, No Compromise",
    description: "I will not ship work I am not proud of. Ever.",
  },
];

export const CONTACT_INFO = {
  phone: "+44 7700 000000", // ← REPLACE WITH REAL NUMBER
  email: "hello@pioneeredgrowth.com",
  responseTime: "Within 24 hours, guaranteed",
};
```

---

## SEO — layout.tsx metadata

```typescript
export const metadata: Metadata = {
  title: "PioneeeredGrowth | Premium Websites That Generate Leads",
  description:
    "Bespoke, conversion-focused websites built by a specialist with 8+ years experience. Not templates — websites that generate real business.",
  keywords: [
    "web design",
    "bespoke website",
    "lead generation website",
    "web development UK",
  ],
  openGraph: {
    title: "PioneeeredGrowth | Premium Websites That Generate Leads",
    description:
      "We build websites that generate real leads for real businesses.",
    type: "website",
  },
};
```

---

## HOW TO USE COPILOT WITH THIS FILE

When chatting with Copilot in VS Code, use these prompt patterns:

- "Build the Hero section following the copilot-instructions.md spec"
- "Create ServiceCard component using the design tokens defined in instructions"
- "Add scroll animation to the About section using the fadeUp variants from instructions"
- "Build the contact form with zod schema from the instructions"
- "Generate lib/constants.ts with all the data from instructions"

Step 3 — How to trigger it in VS Code
Once the file is saved, open Copilot Chat (Ctrl+Shift+I / Cmd+Shift+I) and use prompts like:
Build the Hero section following my project instructions
Create the ServiceCard component with TypeScript interface
Set up globals.css with the design tokens from my instructions
Build the full ContactForm with react-hook-form and zod validation
