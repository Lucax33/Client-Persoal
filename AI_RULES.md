# AI Development Rules for Farmácia do Shape

This document outlines the core technologies and best practices to be followed when developing and modifying this application.

## Tech Stack Overview

1.  **Framework:** Next.js (React) for server-side rendering and routing.
2.  **Language:** TypeScript for type safety and improved maintainability.
3.  **Styling:** Tailwind CSS for utility-first, responsive styling.
4.  **UI Components:** shadcn/ui (built on Radix UI) for accessible and customizable components.
5.  **Icons:** `lucide-react` for all visual icons.
6.  **State Management:** Local state using `useState` and `useReducer`. Global state management is not currently required but should be introduced using a simple library like Zustand if needed.
7.  **Forms:** `react-hook-form` combined with `zod` for schema validation.
8.  **Animations:** `tw-animate-css` for simple CSS animations.

## Library Usage Rules

| Library/Technology | Purpose | Usage Guidelines |
| :--- | :--- | :--- |
| **Next.js** | Routing, Server Components, API Routes. | Use the `app` directory structure. All pages must be defined in `app/`. |
| **TypeScript** | Language | All new files must be written in TypeScript (`.tsx` or `.ts`). Ensure strict typing is maintained. |
| **Tailwind CSS** | Styling | Use utility classes exclusively for styling. Avoid inline styles where possible. Ensure designs are responsive by default. |
| **shadcn/ui & Radix UI** | UI Components | Prioritize using existing components from `components/ui/`. If a component needs modification, create a new component file instead of editing the base `ui` files. |
| **`lucide-react`** | Icons | Use this package for all icons throughout the application. |
| **`react-hook-form` & `zod`** | Forms | Use `react-hook-form` for managing form state and `zod` for defining validation schemas. Use `@hookform/resolvers` to connect them. |
| **`next/image`** | Images | Always use the `next/image` component for optimized image loading, unless explicitly using a background CSS image. |
| **`sonner`** | Notifications | Use `sonner` for all toast notifications and user feedback. |