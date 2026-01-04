# AminShop - E-Commerce Application

A modern, full-featured e-commerce web application built with Next.js, TypeScript, and Tailwind CSS.
This project demonstrates clean component architecture, state management, filtering, search functionality, and responsive design.

## Features

### Core Functionality
- **Product Catalog**: Browse 18 curated products across 6 categories
- **Advanced Filtering**: Filter products by category with URL persistence
- **Search**: Real-time search with 300ms debouncing across titles, descriptions, and categories
- **Product Details**: Dedicated page for each product with full information
- **Shopping Cart**: Add, remove, and manage quantities with localStorage persistence
- **Theme Support**: Light and dark mode with localStorage persistence

### User Experience
-Fully responsive design (mobile, tablet, desktop)
-Smooth transitions and hover effects
-Loading and empty states
-Accessible UI with semantic HTML and focus states
-URL-based filter persistence (shareable links)

## Tech Stack

### Framework & Language
- **Next.js 13.5** - React framework with App Router
- **TypeScript** - Type-safe development
- **React 18** - UI library

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Reusable component library
- **Lucide React** - Icon library

### State Management
- **React Context API** - Global state management for cart and theme
- **localStorage** - Client-side persistence for cart and theme preferences

**Why Context API?**
For this application's scope, React Context provides the perfect balance of simplicity and functionality. It handles:
- Global cart state across all pages
- Theme preferences
- No external dependencies required
- Easy to understand and maintain

For larger applications with complex state logic, Redux Toolkit or Zustand would be more appropriate.

### Data Loading
- **Mock API Route**: `/api/products` serves static product data
- **Client-side fetching**: Simple fetch API for data retrieval
- Products are defined in `lib/products.ts` for easy modification

### Testing
- **Vitest** - Fast unit testing framework
- **Testing Library** - Component testing utilities
- **jsdom** - DOM implementation for testing

## Project Structure

```
├── app/
│   ├── api/products/route.ts    # API endpoint for products
│   ├── cart/page.tsx             # Shopping cart page
│   ├── product/[id]/page.tsx    # Product detail page
│   ├── page.tsx                  # Home page with filters
│   ├── layout.tsx                # Root layout with providers
│   └── globals.css               # Global styles
├── components/
│   ├── FilterSection.tsx         # Category and price filters
│   ├── Header.tsx                # Navigation header
│   ├── ProductCard.tsx           # Product card component
│   ├── SearchBar.tsx             # Debounced search input
│   └── ui/                       # shadcn/ui components
├── contexts/
│   ├── CartContext.tsx           # Shopping cart state
│   └── ThemeContext.tsx          # Theme state
├── lib/
│   ├── products.ts               # Product data
│   └── utils.ts                  # Utility functions
├── types/
│   └── product.ts                # TypeScript types
└── tests/
    ├── setup.ts                  # Test configuration
    └── product.test.ts           # Product tests
```

## Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd shophub
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run test         # Run tests once
npm run test:watch   # Run tests in watch mode
```

## Key Implementation Details

### URL Parameter Persistence
Filters and search query are persisted in URL parameters, allowing users to:
- Share filtered product views
- Use browser back/forward buttons
- Bookmark specific searches

Example: `/?category=Shoes&price=under50&search=running`

### Debounced Search
Search input uses 300ms debouncing to reduce unnecessary re-renders and URL updates while typing.

### Cart Persistence
Cart state is automatically saved to localStorage and restored on page load, providing a seamless shopping experience across sessions.

### Theme Persistence
Dark/light mode preference is saved to localStorage and applied on initial load to prevent theme flashing.

### Image Optimization
Next.js Image component is used throughout for automatic image optimization, lazy loading, and responsive sizing.

## Testing

The project includes a basic test suite testing core functionality:

```bash
npm run test
```

Tests cover:
- Product data structure validation
- Price range validation
- Required fields verification

## Design Decisions

### Why Client-Side Rendering for Home Page?
The home page uses client-side rendering to support dynamic URL parameter updates without page reloads. This provides a smoother user experience for filtering and searching.

### Component Composition
Components are kept small and focused on single responsibilities:
- `ProductCard`: Display product information
- `FilterSection`: Handle filter UI and state
- `SearchBar`: Debounced search input
- Each component is reusable and testable

### Accessibility
- Semantic HTML elements (`header`, `main`, `aside`)
- Proper ARIA labels on interactive elements
- Keyboard navigation support
- Visible focus states
- Proper heading hierarchy

## Assumptions & Limitations

### Assumptions
- Product images use Pexels stock photos with assumed stable URLs
- No authentication or user accounts required
- No backend database (static product list)
- Checkout is not implemented (UI only)
- Single currency (USD) supported

### Known Limitations
- Product data is static (no admin panel to add products)
- No product inventory tracking
- No product reviews or ratings
- No product variants (sizes, colors)
- No order history
- Cart is per-device only (not synced across devices)

## Future Enhancements 

Potential features for future development:
- User authentication and accounts
- Backend database integration
- Product reviews and ratings
- Wishlist functionality
- Order history and tracking
- Product recommendations
- Multi-currency support
- Payment integration
- Admin dashboard
- Email notifications

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

MIT

## Contact

For questions or feedback, please open an issue in the repository.
