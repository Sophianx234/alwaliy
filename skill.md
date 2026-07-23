Next.js 16 & Tailwind v4 Project Guidelines
1. Next.js 16 & React 19 Core Rules
Async Request APIs: You MUST await params, searchParams, cookies(), headers(), and draftMode(). Accessing them synchronously is banned and will throw errors.

Caching & Pre-rendering: Use the "use cache" directive explicitly for caching pages or components. Do not rely on outdated static generation workarounds.

Routing: The App Router (app/ directory) is strictly enforced. Parallel routes must include a default.tsx file.

Interception & Middleware: Use proxy.ts exclusively; middleware.ts is deprecated.

View Transitions: Utilize the transitionTypes prop on <Link> components from next/link for routing animations where appropriate.

2. Component & Data Architecture
Default to Server: Components are Server Components by default. Keep them that way unless interactivity (e.g., onClick, useState) is explicitly required, in which case add "use client".

Data Fetching: Fetch data directly inside Server Components. Do not prop-drill data down from layouts if a nested component can fetch it directly.

Mutations: Use Server Actions ("use server") for all form submissions and data mutations.

3. File Naming & Organization
Use strict kebab-case for all files and directories (e.g., featured-media.tsx, get-courses.ts).

Maintain a clean separation of concerns: place UI components in @/components/ and utility functions in @/lib/ or @/utils/. Always use absolute imports.

4. Tailwind CSS v4 Rules
CSS-First: This project uses Tailwind v4. Do NOT attempt to create or modify a tailwind.config.ts or tailwind.config.js file.

Theme Variables: All custom colors, fonts, and theme extensions must be defined inside the @theme block in app/globals.css.

Component Extraction: Extract repeated UI patterns into functional React components, not via @apply in CSS.

5. Built-in Optimizations
Images: Always use next/image. Be aware of Next.js 16 defaults (e.g., qualities: [75]).

Fonts: Always use next/font/google via variables established in app/layout.tsx.

Metadata: Use the built-in Metadata API (export const metadata = {}) for SEO inside page.tsx and layout.tsx files. Avoid third-party helmet libraries.
