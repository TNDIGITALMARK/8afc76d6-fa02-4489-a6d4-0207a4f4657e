# 🤖 NeuraNova Landing Page

**Your Lovable AI Companion, Coach, and Storyteller**

A beautiful, mobile-first landing page for NeuraNova - an AI companion app designed with soft gradients, modern typography, and engaging interactions.

---

## ✨ Features Implemented

### 🎨 Design System
- **Pixel-perfect color palette** matching the design reference
- **Inter font family** imported from Google Fonts
- **Soft gradient backgrounds** (light blue to lavender)
- **Custom CSS variables** for consistent theming
- **Rounded, friendly UI components** with hover animations

### 📱 Responsive Sections

1. **Header/Navbar**
   - Sticky navigation with backdrop blur
   - Mobile hamburger menu
   - Smooth scroll anchor links
   - "Join Beta" CTA button

2. **Hero Section**
   - Eye-catching headline with pink highlights
   - AI-generated robot mascot illustration
   - Dual CTA buttons (Try NeuraNova / Learn More)
   - Gamification preview (Streak & XP badges)
   - Floating animation effect

3. **Features Section**
   - 4 feature cards with emoji icons
   - Gradient backgrounds for each card
   - Hover effects with lift animation
   - Multi-personality AI chat
   - Gamified streaks & XP system
   - Story generation & sharing
   - Daily planning & reminders

4. **Pricing Section**
   - 3 tier cards (Free, Pro, Ultimate)
   - "Most Popular" badge on Pro tier
   - Feature lists with checkmarks
   - Gradient CTA buttons
   - Money-back guarantee notice

5. **Testimonials & Stats**
   - 6 stat cards with key metrics
   - 3 user testimonials with 5-star ratings
   - Emoji avatars and role descriptions

6. **About/Team Section**
   - Mission statement card
   - 4 team member profiles with fun titles
   - Company values showcase
   - Gradient avatar backgrounds

7. **Contact Section**
   - Working contact form with validation
   - Contact information display
   - Success animation on submission
   - Email, phone, and availability details

8. **Footer**
   - Brand information
   - Social media links (Twitter, Instagram, YouTube)
   - Quick navigation links
   - Newsletter signup CTA
   - Legal links and copyright

### 🚀 Technical Features

- **Progressive Web App (PWA)** ready with manifest.json
- **SEO optimized** meta tags for social sharing
- **Smooth scroll** behavior for anchor navigation
- **Mobile-first responsive design** with breakpoints
- **TypeScript** for type safety
- **Next.js 15** App Router architecture
- **Tailwind CSS** utility classes
- **Custom global styles** with CSS variables

---

## 📂 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page assembly
│   └── globals.css         # Global styles and design system
├── components/
│   └── landing/
│       ├── Header.tsx      # Navigation bar
│       ├── Hero.tsx        # Hero section with robot
│       ├── Features.tsx    # Features showcase
│       ├── Pricing.tsx     # Pricing tiers
│       ├── Testimonials.tsx # Stats and testimonials
│       ├── About.tsx       # Team and mission
│       ├── Contact.tsx     # Contact form
│       └── Footer.tsx      # Footer with links
public/
├── manifest.json           # PWA manifest
├── icon-192.png           # App icon (192x192)
├── icon-512.png           # App icon (512x512)
├── favicon.ico            # Browser favicon
└── generated/
    ├── hero-robot.png     # AI-generated mascot
    └── icon-512.png       # Original logo file
```

---

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Pink | `#E994A5` | Headlines, CTAs, links |
| Primary Hover | `#E27B8E` | Button hover states |
| Background Start | `#D4E8F0` | Gradient start (light blue) |
| Background End | `#E8D4F0` | Gradient end (light lavender) |
| Card Background | `#FFFFFF` | White cards |
| Card Blue | `#E3F2FD` | Free tier background |
| Card Pink | `#FCE4EC` | Pro tier background |
| Footer | `#5B7C99` | Dark blue-gray footer |
| Text Primary | `#2D3748` | Main text color |
| Text Secondary | `#718096` | Body text, descriptions |

### Typography

- **Font Family**: Inter (Google Fonts)
- **Hero Heading**: 48px (desktop) / 32px (mobile)
- **Section Headings**: 32px (desktop) / 24px (mobile)
- **Body Text**: 16px
- **Line Heights**: 1.2 (headings) / 1.5-1.6 (body)

### Spacing

- **8px grid system** for consistent spacing
- **64px vertical spacing** between sections
- **16px border radius** for cards
- **24px border radius** for buttons (fully rounded)

---

## 🖼️ Generated Assets

### Hero Robot
- **Location**: `/public/generated/hero-robot.png`
- **Style**: 3D illustration, cute purple robot with pink accents
- **Size**: 800x800px (displayed at 400x400px for retina)
- **Purpose**: Main hero section mascot

### App Icons
- **Location**: `/public/icon-512.png`, `/public/icon-192.png`
- **Style**: Gradient (purple to pink) with AI brain circuit design
- **Format**: PNG with rounded corners
- **Purpose**: PWA app icons and favicon

---

## 🚦 Getting Started

1. **Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

2. **Build for Production**
   ```bash
   npm run build
   ```

3. **Start Production Server**
   ```bash
   npm start
   ```

---

## 📱 Mobile Responsiveness

- **Mobile-first design** approach
- **Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1200px
  - Desktop: > 1200px
- **Touch-friendly** 44px minimum button heights
- **Hamburger menu** for mobile navigation
- **Stacked layouts** for cards on small screens

---

## 🎭 Animations & Interactions

- **Smooth scroll** to section anchors
- **Hover effects** on all interactive elements
- **Scale transforms** on buttons and cards
- **Floating animation** on hero robot
- **Fade-in effects** on form submission
- **Loading spinners** for async actions

---

## ♿ Accessibility

- **Semantic HTML** structure
- **ARIA labels** for interactive elements
- **Focus states** with visible outlines
- **Sufficient color contrast** ratios
- **Keyboard navigation** support
- **Alt text** for all images

---

## 🔧 Customization

### Update Colors
Edit `/src/app/globals.css` and modify CSS variables:
```css
--color-neuranova-primary: 351 78% 75%;
--color-neuranova-bg-start: 198 55% 88%;
```

### Update Content
Edit component files in `/src/components/landing/`:
- Change text directly in JSX
- Modify feature/pricing data arrays
- Update testimonials and team member info

### Replace Images
- Place new images in `/public/`
- Update image paths in components
- Maintain same aspect ratios for best results

---

## 📦 PWA Configuration

The site is PWA-ready with:
- **Service Worker** support (via Next.js)
- **Web App Manifest** with icons
- **Theme color** (`#E994A5`)
- **Install prompts** on supported browsers
- **Offline fallback** capabilities

---

## 🌐 SEO Optimization

- **Meta tags** for social sharing (Open Graph, Twitter)
- **Structured data** ready for enhancement
- **Semantic HTML** for better crawlability
- **Mobile-friendly** design (Google ranking factor)
- **Fast loading** with Next.js optimization
- **Descriptive titles** and descriptions

---

## 📊 Performance

- **Lazy loading** for images
- **Code splitting** via Next.js
- **Optimized fonts** with Google Fonts display=swap
- **Minimal CSS** with Tailwind purging
- **Static generation** where possible

---

## 🎯 Call-to-Actions

Primary CTAs throughout the page:
1. **Header**: Join Beta button
2. **Hero**: Try NeuraNova / Learn More buttons
3. **Pricing**: Get Started Free / Go Pro / Go Ultimate
4. **Contact**: Send Message form
5. **Footer**: Join Beta button

All CTAs link to the contact form (`#contact`) for lead capture.

---

## 🐛 Known Limitations

- **Form submission** is simulated (no backend integration yet)
- **Social links** point to placeholder URLs
- **No actual chat** functionality (landing page only)
- **Images** are AI-generated placeholders

---

## 🚀 Future Enhancements

- **Backend integration** for contact form
- **Email newsletter** signup with API
- **A/B testing** for conversion optimization
- **Analytics tracking** (Google Analytics, etc.)
- **Chat widget** integration
- **Blog section** for content marketing
- **Case studies** page
- **Pricing calculator** for enterprise plans

---

## 📝 License

This is a custom landing page built for NeuraNova. All design assets and branding are property of the NeuraNova team.

---

## 🤝 Credits

- **Design**: Based on provided design reference with pixel-perfect replication
- **Development**: Built with Next.js, React, TypeScript, and Tailwind CSS
- **Fonts**: Inter by Google Fonts
- **Icons**: Emoji and custom SVG icons
- **Images**: AI-generated via Banana Nano MCP

---

## 📧 Contact

For questions or support:
- **Email**: hello@neuranova.ai
- **Phone**: +1-555-NEURANOVA

---

Built with ❤️ for emotional AI companionship.
