# 🎨 NeuraNova Website Customization Guide

Your NeuraNova landing page is ready! This guide will show you **what's next** and **how to customize** your website after publishing.

---

## 📊 Current Status

✅ **Your website includes:**
- Professional landing page with hero, features, pricing, testimonials, about, and contact sections
- NeuraNova branding integrated with your logo colors (gold/bronze on dark background)
- Mobile-responsive design that works on all devices
- **🆕 Real contact form backend** with Supabase database storage
- **🆕 Admin dashboard** to view and manage contact submissions
- SEO-optimized meta tags
- PWA (Progressive Web App) support

---

## 🚀 What's Next? (Step-by-Step)

### 1. **Set Up Contact Form Backend** 🆕

The contact form now stores submissions in a Supabase database!

**Quick setup (takes 2 minutes):**

1. Follow the instructions in **`CONTACT_FORM_BACKEND_SETUP.md`**
2. Execute the SQL migration in your Supabase Dashboard
3. Test the contact form - submissions will be saved to the database
4. View submissions at: `http://localhost:4006/admin/contacts`

**What you get:**
- Real database storage for contact form submissions
- Admin dashboard to view and manage submissions
- Email, IP tracking, and status management (new, read, replied, archived)

### 2. **Preview Your Website**

Your website is currently running at: `http://localhost:4006`

**To view it:**
- The development server is already running
- Open your browser and visit `http://localhost:4006`
- You'll see your full NeuraNova landing page
- Test the contact form and view submissions in `/admin/contacts`

### 3. **Test on Mobile Devices**

- Open the same URL on your phone/tablet while on the same network
- Check that all sections look good on small screens
- Test the mobile menu (hamburger icon)
- Verify contact form works on mobile

### 4. **Deploy to Production**

**Option A: Vercel (Recommended - Free & Easy)**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow the prompts - it takes ~2 minutes
```
Your site will be live at: `https://your-project-name.vercel.app`

**Option B: Netlify**
```bash
# Build your site
npm run build

# Upload the .next folder to Netlify
# Or connect your GitHub repo to Netlify for auto-deployment
```

**Option C: Custom Server**
```bash
# Build for production
npm run build

# Start production server
npm start

# Deploy the entire project folder to your server
```

### 4. **Connect a Custom Domain**

After deployment, connect your own domain (e.g., `neuranova.ai`):

- **Vercel**: Dashboard → Project → Domains → Add Domain
- **Netlify**: Site Settings → Domain Management → Add Custom Domain
- Update your domain's DNS settings (provided by the platform)

---

## ✏️ How to Customize Your Website

### **A. Update Your Logo**

**Current logo:** `/context/images/neuranova_logo.png` (gold NeuraNova on dark background)

**To replace it:**

1. Save your new logo to `/public/images/logo.png`
2. Update the header component:

```typescript
// File: src/components/landing/Header.tsx
// Find the logo image and update the src path

<Image
  src="/images/logo.png"  // Change this to your new logo path
  alt="NeuraNova"
  width={150}
  height={50}
/>
```

3. **Logo recommendations:**
   - Format: PNG with transparent background (or SVG)
   - Size: 150-200px wide, 40-60px tall
   - Should look good on both light and dark backgrounds

---

### **B. Change Colors & Branding**

**Your current color scheme:**
- Primary: `#E994A5` (coral pink)
- Background: Gradient from light blue (`#D4E8F0`) to lavender (`#E8D4F0`)
- Footer: `#5B7C99` (blue-gray)

**To extract colors from your logo and apply them:**

1. **Identify your brand colors** from the gold logo:
   - Gold/Bronze: `#C9A961` (approximate from your logo)
   - Dark Background: `#3D3D3D` or `#2D2D2D`
   - You can use these or any colors you prefer

2. **Update the global CSS:**

Edit: `src/app/globals.css` (lines 11-36)

```css
:root {
  /* Replace with YOUR brand colors */
  --color-neuranova-primary: 42 45% 58%; /* #C9A961 gold from logo */
  --color-neuranova-primary-hover: 42 45% 50%; /* Darker gold on hover */

  /* Background colors - choose your gradient */
  --color-neuranova-bg-start: 0 0% 95%; /* Light gray start */
  --color-neuranova-bg-end: 42 30% 85%; /* Warm beige end */

  /* Footer color */
  --color-neuranova-footer: 0 0% 20%; /* Dark gray/black */

  /* Text colors */
  --color-neuranova-text-primary: 0 0% 15%; /* Dark text */
  --color-neuranova-text-secondary: 0 0% 40%; /* Medium gray */
}
```

**HSL Color Format Explanation:**
- Format: `HUE SATURATION% LIGHTNESS%`
- Example: `42 45% 58%` = gold color
- Use a color picker tool (like [HSL Color Picker](https://hslpicker.com/)) to convert your colors

3. **Save the file** - changes will apply immediately in development mode

---

### **C. Update Content & Text**

#### **Hero Section (Main Headline)**

Edit: `src/components/landing/Hero.tsx`

```typescript
<h1 className="text-5xl md:text-6xl font-bold mb-6">
  Your <span className="text-primary">Lovable</span> AI Companion
  {/* Change this text to your preferred headline */}
</h1>

<p className="text-xl text-secondary-foreground mb-8">
  Simple, fast, and emotionally rich AI...
  {/* Update your value proposition */}
</p>
```

#### **Features Section**

Edit: `src/components/landing/Features.tsx`

Find the `features` array and modify:

```typescript
const features = [
  {
    emoji: "💬",
    title: "Multi-Personality Chat",  // Change title
    description: "Your custom description here"  // Change description
  },
  // ... add or remove features
];
```

#### **Pricing Plans**

Edit: `src/components/landing/Pricing.tsx`

```typescript
const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    description: "Your description",
    features: [
      "Feature 1",
      "Feature 2",
      // Add/remove features
    ]
  },
  // ... update Pro and Ultimate tiers
];
```

#### **About/Team Section**

Edit: `src/components/landing/About.tsx`

Update team member information:

```typescript
const team = [
  {
    name: "Your Name",
    role: "Your Role",
    emoji: "👤",
    bio: "Your bio"
  },
  // ... update all team members
];
```

#### **Contact Information**

Edit: `src/components/landing/Contact.tsx`

```typescript
<div className="space-y-4">
  <p><strong>Email:</strong> hello@neuranova.ai</p>
  <p><strong>Phone:</strong> +1-555-NEURANOVA</p>
  {/* Update with your real contact info */}
</div>
```

#### **Footer**

Edit: `src/components/landing/Footer.tsx`

Update social links, copyright, and footer text.

---

### **D. Add/Remove Sections**

#### **To remove a section:**

Edit: `src/app/page.tsx`

```typescript
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      {/* <Pricing /> */}  {/* Comment out to hide pricing */}
      <Testimonials />
      {/* ... */}
    </>
  );
}
```

#### **To add a new section:**

1. Create a new component: `src/components/landing/YourSection.tsx`
2. Copy the structure from existing sections (e.g., Features.tsx)
3. Import and add it to `page.tsx`:

```typescript
import { YourSection } from "@/components/landing/YourSection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <YourSection />  {/* Add your new section */}
      <Features />
      {/* ... */}
    </>
  );
}
```

---

### **E. Update Images**

#### **Replace the Hero Robot Image**

Current: `/public/generated/hero-robot.png` (AI-generated purple robot)

**To replace:**

1. Save your new image to `/public/images/hero-image.png`
2. Edit: `src/components/landing/Hero.tsx`

```typescript
<Image
  src="/images/hero-image.png"  // Change this path
  alt="NeuraNova AI"
  width={400}
  height={400}
/>
```

#### **Add Images to Other Sections**

Example: Adding images to feature cards

```typescript
// In Features.tsx
<div className="feature-card">
  <Image
    src="/images/feature-1.png"
    alt="Feature"
    width={100}
    height={100}
  />
  <h3>{feature.title}</h3>
</div>
```

**Image Recommendations:**
- Use PNG for logos/icons (transparent backgrounds)
- Use JPG/WebP for photos (better compression)
- Optimize images before uploading (use tools like TinyPNG)
- Aim for < 200KB per image for fast loading

---

### **F. Change Fonts**

**Current font:** Inter (Google Fonts)

**To use a different font:**

1. Find your font on [Google Fonts](https://fonts.google.com/)
2. Edit: `src/app/globals.css` (line 4)

```css
/* Replace Inter with your chosen font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

/* Then update line 206 */
body {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

**Popular font combinations:**
- Modern: Poppins + Poppins
- Professional: Roboto + Roboto
- Elegant: Playfair Display + Source Sans Pro
- Friendly: Quicksand + Open Sans

---

### **G. Setup Contact Form Backend**

**Currently:** The contact form is frontend-only (shows success but doesn't send emails)

**To make it actually send emails:**

#### **Option 1: Use Formspree (Easiest)**

1. Sign up at [Formspree.io](https://formspree.io/) (free)
2. Get your form endpoint (e.g., `https://formspree.io/f/YOUR_ID`)
3. Edit: `src/components/landing/Contact.tsx`

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Send to Formspree
  const response = await fetch('https://formspree.io/f/YOUR_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });

  if (response.ok) {
    setIsSubmitted(true);
  }
};
```

#### **Option 2: Use Resend (Better for custom emails)**

1. Sign up at [Resend.com](https://resend.com/)
2. Create API route: `src/app/api/contact/route.ts`

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  await resend.emails.send({
    from: 'noreply@neuranova.ai',
    to: 'hello@neuranova.ai',
    subject: `Contact form: ${name}`,
    text: `From: ${name} (${email})\n\n${message}`
  });

  return Response.json({ success: true });
}
```

3. Update `Contact.tsx` to call your API:

```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

---

### **H. Add Google Analytics**

Track visitors to your website:

1. Create a Google Analytics account
2. Get your Measurement ID (e.g., `G-XXXXXXXXXX`)
3. Add to: `src/app/layout.tsx` (in the `<head>` section)

```typescript
<head>
  {/* Google Analytics */}
  <script
    async
    src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  />
  <script
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');
      `,
    }}
  />
</head>
```

---

### **I. Optimize for SEO**

#### **Update Meta Tags**

Edit: `src/app/layout.tsx` (lines 21-49)

```typescript
export const metadata: Metadata = {
  title: "NeuraNova - Your Custom Title",
  description: "Your custom description (150-160 characters)",
  keywords: "your, relevant, keywords",

  openGraph: {
    title: "Your OG Title",
    description: "Your OG Description",
    images: [{ url: "https://yoursite.com/og-image.png" }],
  },
};
```

#### **Add an OG Image**

Create a 1200x630px image for social sharing:
- Save it as `/public/og-image.png`
- Add the URL to your metadata (see above)

#### **Add Structured Data**

Help Google understand your content:

```typescript
// In layout.tsx <head>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "NeuraNova",
      "url": "https://neuranova.ai",
      "logo": "https://neuranova.ai/logo.png",
      "description": "Your AI companion"
    })
  }}
/>
```

---

## 🔧 Advanced Customizations

### **Add a Blog Section**

1. Create: `src/app/blog/page.tsx`
2. Create blog post components
3. Add blog link to header navigation

### **Add User Authentication**

Using Supabase (already installed):

1. Set up Supabase project
2. Configure authentication in `.env`
3. Create login/signup pages (already exists at `/login` and `/signup`)
4. Add protected routes

### **Add Database Integration**

The project has Supabase pre-configured:

1. Create database tables (see `NEURANOVA_README.md` for schema info)
2. Use Supabase client to query data
3. Build dynamic features (user profiles, saved content, etc.)

### **Add Animations**

Use Framer Motion for smooth animations:

```bash
npm install framer-motion
```

```typescript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Your content
</motion.div>
```

---

## 🎯 Common Customization Tasks (Quick Reference)

| What to Change | File to Edit | Line Numbers |
|---------------|-------------|--------------|
| **Logo** | `src/components/landing/Header.tsx` | ~20-30 |
| **Colors** | `src/app/globals.css` | 11-36 |
| **Hero headline** | `src/components/landing/Hero.tsx` | 15-25 |
| **Features** | `src/components/landing/Features.tsx` | 10-50 |
| **Pricing plans** | `src/components/landing/Pricing.tsx` | 10-80 |
| **Contact info** | `src/components/landing/Contact.tsx` | 50-70 |
| **Footer links** | `src/components/landing/Footer.tsx` | 20-60 |
| **SEO meta tags** | `src/app/layout.tsx` | 21-49 |
| **Fonts** | `src/app/globals.css` | 4, 206 |

---

## 🐛 Troubleshooting

### **Changes not showing up?**

1. **Hard refresh**: Press `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. **Clear cache**: Open DevTools → Application → Clear Storage
3. **Restart dev server**: Stop with `Ctrl+C`, then run `npm run dev` again

### **CSS changes not applying?**

- Make sure you saved the file
- Check for syntax errors in your CSS
- Ensure CSS variables are defined in `:root`
- Try rebuilding: `npm run build`

### **Images not loading?**

- Verify the file is in `/public/` folder
- Check the file path is correct (case-sensitive)
- Make sure the image format is supported (PNG, JPG, SVG, WebP)
- Try using absolute paths: `/images/your-image.png`

### **Contact form not submitting?**

- Check browser console for errors (F12)
- Verify form validation is working
- Test with valid email format
- Implement backend integration (see section G above)

---

## 📚 Learning Resources

### **Next.js Documentation**
- [Next.js Docs](https://nextjs.org/docs) - Official documentation
- [Next.js Examples](https://github.com/vercel/next.js/tree/canary/examples) - Code examples

### **React Documentation**
- [React Docs](https://react.dev/) - Learn React fundamentals
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/) - TypeScript help

### **CSS & Styling**
- [Tailwind CSS Docs](https://tailwindcss.com/docs) - Utility classes
- [CSS Tricks](https://css-tricks.com/) - CSS tutorials
- [Can I Use](https://caniuse.com/) - Browser compatibility

### **Deployment Platforms**
- [Vercel Documentation](https://vercel.com/docs) - Deployment guide
- [Netlify Documentation](https://docs.netlify.com/) - Alternative platform

---

## 💡 Tips for Success

1. **Start Small**: Make one change at a time and test it
2. **Use Version Control**: Commit changes with Git before major edits
3. **Test on Mobile**: Always check how changes look on small screens
4. **Optimize Images**: Compress images before uploading
5. **Keep Backups**: Save original files before replacing them
6. **Ask for Help**: Use developer communities (Stack Overflow, Reddit)
7. **Monitor Analytics**: Track what users do on your site
8. **Iterate Often**: Continuously improve based on user feedback

---

## 🚀 Next Steps Summary

1. ✅ **Preview** - View your site at `localhost:4006`
2. 🎨 **Customize** - Update colors, text, images (see sections above)
3. 📧 **Setup Forms** - Connect contact form to email service
4. 🌐 **Deploy** - Push to Vercel/Netlify for live site
5. 🔗 **Domain** - Connect your custom domain
6. 📊 **Analytics** - Add Google Analytics tracking
7. 🔍 **SEO** - Optimize meta tags and content
8. 📱 **Share** - Launch and promote your site!

---

## 📞 Need Help?

If you get stuck or have questions:

1. **Check the README**: See `NEURANOVA_README.md` for technical details
2. **Search online**: Most issues have solutions on Stack Overflow
3. **Ask in communities**: Reddit's r/webdev, r/nextjs, r/reactjs
4. **Hire a developer**: For complex customizations, consider hiring help

---

**Remember**: Your website is a living project. You can always make changes, test new ideas, and improve over time. Start with the basics and gradually add more features as you learn!

Happy customizing! 🎉
