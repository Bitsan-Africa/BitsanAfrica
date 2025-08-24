# Bitsan Landing Page

A modern, responsive landing page built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Designed for Bitsan's comfort, connectivity, and property solutions platform.

## 🚀 Quick Start

### Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the landing page in action.

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🏗️ Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and Tailwind imports
├── components/
│   ├── ui/
│   │   ├── Button.tsx      # Reusable button component
│   │   └── Input.tsx       # Form input component
│   ├── Header.tsx          # Navigation header with mobile menu
│   ├── Hero.tsx            # Hero section with CTA
│   ├── Services.tsx        # Services overview (4 cards)
│   ├── ServiceCard.tsx     # Individual service card
│   ├── HowItWorks.tsx      # 3-step process section
│   ├── FeaturedListings.tsx # Sample listings showcase
│   ├── ListingCard.tsx     # Individual listing card
│   ├── Testimonials.tsx    # Customer reviews
│   ├── FAQ.tsx             # Accordion FAQ section
│   └── Footer.tsx          # Footer with newsletter signup
├── styles/
│   └── vars.css            # Design system CSS variables
├── public/
│   └── images/             # Image assets directory
└── lib/
    └── utils.ts            # Utility functions
```

## 🎨 Design System

The project uses a comprehensive design system with:

- **Primary Color**: `#6B549C` (Purple)
- **Secondary Color**: `#17B6A8` (Teal)  
- **Accent Color**: `#FFB86B` (Orange)
- **Typography**: Poppins (headings) + Inter (body)
- **Components**: Consistent buttons, cards, inputs
- **Spacing**: 8px grid system
- **Animations**: Subtle Framer Motion micro-interactions

All design tokens are available in `design-tokens.json` and can be imported into Figma.

## 🖼️ Images & Assets

### Image Replacement Guide

The landing page uses placeholder gradients with suggested Unsplash queries. Replace with actual images:

1. **Hero Image** (`/public/images/hero-lifestyle.jpg`)
   - Query: `"comfortable living interior, lifestyle, home wifi"`
   - Recommended URL: `https://images.unsplash.com/photo-1556909114-f6e7ad7d3136`
   - Alt text: "Person relaxing in a modern living room with a laptop"

2. **Service Card Images**:
   - Accommodation: `"student hostel room interior, bunk beds"`
   - Hotels: `"luxury hotel room modern"`
   - WiFi: `"wifi router home setup, ethernet, modem"`
   - Real Estate: `"family house exterior modern"`

3. **Testimonial Avatars**:
   - Use portrait queries like `"portrait young woman smiling student"`

### Image Optimization

- Use `next/image` component for automatic optimization
- Compress images with tools like [Squoosh](https://squoosh.app/)
- Consider using Cloudinary or Imgix for production

## 🔧 Technology Stack

### Core Technologies
- **Next.js 13.5.1** - React framework with App Router
- **TypeScript 5.2.2** - Type safety
- **Tailwind CSS 3.3.3** - Utility-first styling
- **Framer Motion** - Smooth animations

### UI Components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **shadcn/ui** - Component system

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## ✨ Features

### Core Functionality
- ✅ Responsive design (mobile-first)
- ✅ Sticky navigation with scroll effects
- ✅ Smooth scrolling between sections
- ✅ Interactive FAQ accordion
- ✅ Mobile menu with animations
- ✅ Newsletter signup form
- ✅ SEO optimized with meta tags

### Animations & Interactions
- ✅ Hero content entrance animations
- ✅ Service card hover effects
- ✅ Button micro-interactions
- ✅ Scroll-triggered animations
- ✅ FAQ smooth expand/collapse

### Accessibility
- ✅ Semantic HTML structure
- ✅ ARIA labels and attributes
- ✅ Keyboard navigation support
- ✅ Focus ring indicators
- ✅ Screen reader compatibility
- ✅ Color contrast compliance

## 📝 Customization

### Colors
Update colors in `tailwind.config.ts` and `styles/vars.css`:

```css
:root {
  --color-primary-500: #6B549C; /* Your primary color */
  --color-secondary-500: #17B6A8; /* Your secondary color */
}
```

### Typography
Fonts are configured in `app/layout.tsx`. To change fonts:

1. Update Google Fonts import
2. Update CSS variables in `styles/vars.css`
3. Update Tailwind config font families

### Content
- Update hero text in `components/Hero.tsx`
- Modify services in `components/Services.tsx`
- Update testimonials in `components/Testimonials.tsx`
- Customize FAQ items in `components/FAQ.tsx`

## 🚀 Deployment

### Recommended Platforms
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Railway**
- **DigitalOcean App Platform**

### Build Configuration
The project is configured for static export (`output: 'export'` in `next.config.js`), making it deployable to any static hosting service.

## 📊 Performance Optimizations

- ✅ Image optimization with Next.js
- ✅ Font optimization and preloading
- ✅ CSS variables for consistent theming
- ✅ Framer Motion performance optimizations
- ✅ Code splitting with Next.js
- ✅ Static generation for fast loading

## 🧪 Testing & Quality

### Accessibility Testing
Run accessibility audits:
- Use browser dev tools Lighthouse
- Test with screen readers
- Verify keyboard navigation
- Check color contrast ratios

### Performance Testing
- Lighthouse performance score
- Core Web Vitals monitoring
- Image loading optimization
- Animation performance

## 🔮 Future Enhancements

### Content Management
- Integrate headless CMS (Sanity, Prismic, Contentful)
- Dynamic testimonials and listings
- Blog section for SEO

### Features
- Search functionality
- User authentication
- Booking system integration
- Live chat support
- Multi-language support

### Technical
- PWA capabilities
- Advanced analytics
- A/B testing setup
- API integration

## 📞 Support

For questions or issues:
- Check the component documentation in each file
- Review Tailwind CSS and Framer Motion docs
- Open an issue in the repository

## 📄 License

This project is designed for Bitsan and follows modern web development best practices.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**