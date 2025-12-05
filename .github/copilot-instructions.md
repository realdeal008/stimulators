# Manegasm Codebase Guide for AI Agents

## Project Overview

**Manegasm** is a Next.js 16 + React 19 SPA for a hair salon/product business with e-commerce capabilities. The site showcases services, products, testimonials, and booking. All animations use **Framer Motion** and styling uses **Tailwind CSS v4**.

### Architecture

- **App Router**: Uses Next.js app directory (`app/layout.tsx`, `app/page.tsx`)
- **Client Components**: All interactive features marked with `"use client"`
- **Sections**: Content organized in `src/section/` (Hero, Navbar, Products, Booking, Testimonials, Footer, Portfolio, Service)
- **Components**: Reusable UI in `src/component/` (CartModal, useCart hook)
- **Static Assets**: Images in `public/image/`

## Key Patterns

### Client-Side State Management

**Cart System** (`src/component/useCart.tsx`):
- React Context-based cart using `createContext` + `useContext`
- Export `CartProvider` wrapper and `useCart` hook
- Wraps components that need cart access (example in `src/section/product.tsx`)
- Operations: `addToCart()`, `removeFromCart(index)`, `clearCart()`

**Example usage**:
```tsx
const { addToCart, cart } = useCart();
addToCart({ name: "Shampoo", price: 35, image: "...", description: "..." });
```

### Animation Patterns

**Framer Motion** is the standard for all motion:
- Define variants outside components for reusability (e.g., `overlayVariants`, `menuItemVariants` in Navbar)
- Use `whileInView` for scroll-triggered animations with `viewport={{ once: true }}`
- Stagger child animations with `custom` index and computed `delay`
- Use `AnimatePresence` for mount/unmount transitions

**Example**:
```tsx
const variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.08 * i } })
};
<motion.div custom={index} variants={variants} initial="hidden" animate="visible" />
```

### Styling Approach

- **Tailwind CSS v4**: Primary styling via utility classes in JSX
- **Global CSS** (`app/globals.css`): Component-scoped classes for complex layouts (`.hero-container`, `.cart-overlay`, `.products-grid`, etc.)
- **CSS Classes**: Follow kebab-case naming; components reference custom classes alongside Tailwind
- **Fonts**: Google Fonts imported in `layout.tsx` (Geist, Butterfly Kids); applied via CSS custom properties

### Mobile & Accessibility

**Mobile Menu** (Navbar):
- Escape key closes menu (`onKey` listener in `useEffect`)
- Body scroll locked when menu open: `document.body.style.overflow = "hidden"`
- Touch action disabled: `document.documentElement.style.touchAction = "none"`

## Build & Development

### Commands

```bash
npm run dev      # Start dev server (port 3000)
npm run build    # Production build
npm run start    # Serve production build
npm lint         # Run ESLint
```

### Configuration

- **TypeScript**: Strict mode enabled, path alias `@/*` points to root
- **ESLint**: Uses Next.js recommended config (eslint-config-next)
- **PostCSS**: Configured for Tailwind v4 processing

## Component Structure

### Page Entry (`app/page.tsx`)

Root component orchestrates page layout:
- `"use client"` directive (client-side)
- Local `cartCount` state and `toggleCart` callback (passed to Navbar)
- Renders `Navbar` → `Hero` → `Products` → `Booking` → `Testimonials` → `Footer`
- Import sections from `src/section/` and components from `src/component/`

### Section Components

All section components:
- Marked `"use client"` for interactivity
- Contain inline data arrays (e.g., `products` in `product.tsx`, `navLinks` in Navbar)
- Use Framer Motion variants for animations
- Access global CSS classes for styling

### Custom Hooks

**`useCart()`** (`src/component/useCart.tsx`):
- Must be called within `CartProvider`
- Returns `{ cart, addToCart, removeFromCart, clearCart }`
- Throws error if used outside provider context

## Common Development Tasks

### Adding a New Product

1. Add object to `products` array in `src/section/product.tsx`:
```tsx
{ name: "...", price: 00, image: "...", description: "..." }
```
2. Component auto-renders via `.map()`; no template changes needed

### Adding a Modal/Overlay

1. Use `CartModal` (`src/component/cartModal.tsx`) as pattern
2. Import `{ motion, AnimatePresence }` from framer-motion
3. Wrap content in `<AnimatePresence>` to manage mount/unmount transitions
4. Reference CSS classes from `globals.css` (`.cart-overlay`, `.cart-modal`)

### Styling New Features

1. Add section-specific styles to `app/globals.css` with kebab-case class names
2. Mix global classes with inline Tailwind utilities in JSX
3. Use Tailwind for spacing, colors, responsive behavior; custom CSS for complex layouts

## Integration Points

- **Google Fonts**: Configured in `app/layout.tsx` via `next/font/google`
- **External Images**: Products currently load from Google Cloud Storage URLs; update in section data arrays
- **Next.js Image**: Used in Hero section; remember `priority` prop and `alt` text for performance

## Important Notes

- **No API/Backend**: Currently client-side only; cart persists only in React state
- **Metadata**: Update site metadata in `app/layout.tsx` (title, description)
- **Path Imports**: Use `@/` alias for imports from root (e.g., `@/src/section/Navbar`)
