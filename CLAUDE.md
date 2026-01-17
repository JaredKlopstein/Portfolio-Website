# Portfolio Website - Project Documentation

## Project Overview
This is a personal portfolio website for Jared Klopstein, built with React + Vite. It showcases professional work, skills, and provides contact functionality with a modern, responsive design.

**Owner**: Jared Klopstein
**Tech Stack**: React 19, Vite 7, EmailJS, reCAPTCHA v2
**Theme**: Dark/Light mode with emerald green accent color
**Status**: Ready for deployment

---

## Table of Contents
1. [Project Structure](#project-structure)
2. [Design System](#design-system)
3. [Key Components](#key-components)
4. [Integrations](#integrations)
5. [Deployment](#deployment)
6. [Important Notes](#important-notes)

---

## Project Structure

```
Portfolio Website/
├── public/
│   ├── favicon.png          # Site favicon
│   ├── me.jpg               # Profile photo (280x280 circular)
│   ├── robots.txt           # SEO - allows all crawlers
│   ├── 404.html             # Static fallback 404 page
│   └── _redirects           # Netlify redirect config
├── src/
│   ├── components/
│   │   ├── Header.jsx/css   # Fixed navigation with theme toggle
│   │   ├── Hero.jsx/css     # Landing section
│   │   ├── About.jsx/css    # About me with profile photo
│   │   ├── AscellaStudios.jsx/css  # Company showcase (emerald gradient bg)
│   │   ├── Projects.jsx/css # Project cards (3 placeholders)
│   │   ├── Skills.jsx/css   # Tech stack display
│   │   ├── Blog.jsx/css     # Blog posts (1 centered placeholder)
│   │   ├── Contact.jsx/css  # Contact form with EmailJS + reCAPTCHA
│   │   ├── Footer.jsx/css   # Footer with social links
│   │   └── NotFound.jsx/css # 404 error page component
│   ├── App.jsx/css          # Main app with routing
│   ├── index.css            # Global styles + theme variables
│   └── main.jsx             # App entry point
├── index.html               # HTML entry with meta tags
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── vercel.json              # Vercel deployment config
└── CUSTOMIZATION_CHECKLIST.md  # User's customization tracking
```

---

## Design System

### Color Scheme
**Primary Accent**: Emerald Green (changed from default purple)

#### Light Theme
```css
--bg-primary: #ffffff
--bg-secondary: #f8f9fa
--bg-tertiary: #f1f3f5
--text-primary: #1a1a1a
--text-secondary: #6c757d
--border-color: #dee2e6
--accent: #10b981
--accent-light: #34d399
--accent-gradient: linear-gradient(135deg, #10b981 0%, #059669 100%)
--header-bg-scrolled: rgba(255, 255, 255, 0.85)
```

#### Dark Theme
```css
--bg-primary: #0f0f0f
--bg-secondary: #1a1a1a
--bg-tertiary: #242424
--text-primary: #f8f9fa
--text-secondary: #adb5bd
--border-color: #343a40
--accent: #34d399
--accent-light: #6ee7b7
--accent-gradient: linear-gradient(135deg, #34d399 0%, #10b981 100%)
--header-bg-scrolled: rgba(15, 15, 15, 0.85)
```

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

### Responsive Breakpoints
- Desktop: > 968px
- Tablet: 768px - 968px
- Mobile: < 768px

---

## Key Components

### Header (Fixed Navigation)
- **Location**: `src/components/Header.jsx`
- **Features**:
  - Fixed position with scroll-based backdrop blur
  - Theme toggle (sun/moon icon)
  - Smooth scroll navigation
  - Enhanced visibility with `backdrop-filter: blur(12px) saturate(180%)`
  - Mobile hamburger menu
- **Important**: Uses `--header-bg-scrolled` variable for theme-aware background

### Hero Section
- **Location**: `src/components/Hero.jsx`
- **Content**:
  - Name: Jared Klopstein
  - Title: "Builder of Things"
  - Tagline: Founder of Ascella Studios
  - Social links: GitHub, LinkedIn, Twitter/X
  - CTA buttons scroll to Projects and Contact

### About Section
- **Location**: `src/components/About.jsx`
- **Features**:
  - Circular profile photo (me.jpg) with emerald border
  - 4 highlight cards:
    1. Problem Solver
    2. Lifelong Learner
    3. Avid Reader
    4. Great Dane Lover (mentions two Great Danes)
- **Styling**: `border-radius: 50%`, `object-fit: cover`, hover effect

### Ascella Studios Section
- **Location**: `src/components/AscellaStudios.jsx`
- **Background**: Full emerald gradient (`var(--accent-gradient)`)
- **Link**: https://ascellastudios.com (not yet deployed)
- **Note**: This bright section was causing header visibility issues (now fixed)

### Projects Section
- **Location**: `src/components/Projects.jsx`
- **Status**: 3 placeholder "Coming Soon" cards
- **Grid**: `repeat(auto-fit, minmax(320px, 1fr))`
- **Each card has**:
  - Title, description
  - Tech stack tags
  - GitHub & Demo links (currently `#`)
  - "Coming Soon" badge

### Skills Section
- **Location**: `src/components/Skills.jsx`
- **Categories**:
  1. Languages: JavaScript, Python, HTML, CSS, TypeScript, SQL
  2. Frameworks: React, Node.js, Express, Next.js, FastAPI, TailwindCSS
  3. Tools: Git, VS Code, Firebase, MongoDB
  4. Always Learning: AI/ML, Cloud Services, Mobile Dev, DevOps, Web3, UI/UX

### Blog Section
- **Location**: `src/components/Blog.jsx`
- **Status**: 1 centered placeholder post
- **CSS Trick**: Uses `max-width: 400px` + `margin: auto` to center single card
- **Note**: Grid will expand when more posts added

### Contact Section
- **Location**: `src/components/Contact.jsx`
- **Features**:
  - EmailJS integration (form submission)
  - Google reCAPTCHA v2 (spam protection)
  - Form fields: Name, Email, Subject, Message
  - Success/error status messages
  - Social links sidebar
- **Styling**: Focus shadow uses emerald: `rgba(16, 185, 129, 0.1)`

### Footer
- **Location**: `src/components/Footer.jsx`
- **Content**:
  - Name and tagline
  - Social links (GitHub, LinkedIn, Twitter/X)
  - "Back to Top" button
  - Copyright with dynamic year
  - Motto: "Built with ☕ and curiosity"

---

## Integrations

### EmailJS Configuration
**File**: `src/components/Contact.jsx` (lines 37-39)

```javascript
const SERVICE_ID = 'service_2em29tg';
const TEMPLATE_ID = 'template_9uumvxq';
const PUBLIC_KEY = 'bAUtINrrPb6oEmrac';
```

**Template Variables Required**:
- `from_name`: Sender's name
- `from_email`: Sender's email
- `subject`: Message subject
- `message`: Message content
- `g-recaptcha-response`: reCAPTCHA token

**Email Destination**: hello@jaredklopstein.dev

### Google reCAPTCHA v2
**File**: `src/components/Contact.jsx` (line 137)

```javascript
sitekey="6LdGV0YsAAAAAHkc3npEKFzMYVFJpwDGbuE0pJ55"
```

**Features**:
- Theme-aware (switches with site theme via `key={theme}` prop)
- Validates before form submission
- Resets after successful send
- Centered in form layout

### Social Media Links
All links verified and consistent across Hero, Contact, Footer:
- **GitHub**: https://github.com/JaredKlopstein
- **LinkedIn**: https://www.linkedin.com/in/jaredklopstein/
- **Twitter/X**: https://x.com/JaredKlopstein

---

## Deployment

### Build Command
```bash
npm run build
```
- Output: `dist/` folder
- Build time: ~950ms
- Bundle size: 73.28 KB gzipped
- No errors or warnings

### Deployment Platforms

#### Vercel (Recommended)
- Config file: `vercel.json`
- Auto-deploy on git push
- Handles SPA routing automatically

#### Netlify
- Config file: `public/_redirects`
- Drag & drop `dist/` folder or connect GitHub
- Handles SPA routing with `/* /index.html 200`

### Post-Deployment Checklist
1. ✅ Test contact form with reCAPTCHA
2. ✅ Send test email to verify EmailJS
3. ✅ Verify images load (me.jpg, favicon.png)
4. ✅ Test on mobile devices
5. ✅ Test 404 page (visit non-existent URL)
6. ✅ Test theme toggle in both modes
7. ✅ Verify header visibility over Ascella Studios section
8. ⏳ Update robots.txt with actual sitemap URL (future)
9. ⏳ Add analytics (future)

### Domain Setup
- **Primary domain**: jaredklopstein.dev
- **Ascella Studios**: ascellastudios.com (deployment pending)

---

## Important Notes

### Known Placeholder Content
These are intentionally placeholder and user is okay with launching:
1. **Projects**: All 3 cards are "Coming Soon" placeholders
2. **Blog**: Single "Coming Soon" post
3. **Ascella Studios link**: Domain exists but site not yet deployed

### Design Decisions

#### Header Visibility Fix
**Issue**: Header was hard to see over bright emerald Ascella Studios section
**Solution**: Enhanced backdrop blur + theme-aware semi-transparent background
- `backdrop-filter: blur(12px) saturate(180%)`
- Uses `--header-bg-scrolled` variable (85% opacity)
- Works in both light and dark themes

#### Blog Centering
**Issue**: Single blog post was left-aligned in grid
**Solution**:
```css
.blog-grid {
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  justify-items: center;
}
```

#### Theme Switching
- Saved to `localStorage`
- Defaults to system preference on first visit
- Theme state passed to Contact component for reCAPTCHA theme sync
- Uses `key={theme}` on reCAPTCHA to force remount on theme change

### Files Created During Development
1. `robots.txt` - SEO configuration
2. `404.html` - Static fallback error page
3. `vercel.json` - Vercel SPA routing config
4. `_redirects` - Netlify SPA routing config
5. `NotFound.jsx/css` - React 404 component (for future use with React Router)

### Dependencies
**Production**:
- `react`: ^19.2.0
- `react-dom`: ^19.2.0
- `@emailjs/browser`: ^4.4.1
- `lucide-react`: ^0.562.0 (icon library)
- `react-google-recaptcha`: ^3.1.0

**Dev**:
- `vite`: ^7.2.4
- `@vitejs/plugin-react`: ^5.1.1
- `eslint`: ^9.39.1

### CSS Architecture
- Component-scoped CSS files
- Global variables in `index.css`
- No CSS-in-JS or styled-components
- Uses CSS custom properties for theming
- Mobile-first responsive design

### Accessibility Features
- Semantic HTML
- ARIA labels on all icon buttons
- Focus states with visible outlines
- Keyboard navigation support
- Alt text on images
- Color contrast meets WCAG standards

---

## Common Tasks

### Adding a New Project
1. Edit `src/components/Projects.jsx`
2. Add new object to `projects` array:
```javascript
{
  id: 4,
  title: 'Project Name',
  description: 'Description here',
  tags: ['Tech1', 'Tech2'],
  image: '/project-image.jpg', // Add to public/
  github: 'https://github.com/...',
  demo: 'https://...',
  status: 'live' // or 'coming-soon'
}
```
3. Add project image to `public/` folder

### Adding a Blog Post
1. Edit `src/components/Blog.jsx`
2. Add new object to `blogPosts` array:
```javascript
{
  id: 2,
  title: 'Post Title',
  date: 'Jan 10, 2026',
  excerpt: 'Short description...',
  readTime: '5 min read',
  link: 'https://blog.example.com/post-slug',
  status: 'live'
}
```
3. If adding 2+ posts, consider removing `max-width: 400px` from `.blog-grid`

### Changing Accent Color
1. Edit `src/index.css`
2. Update these variables in both themes:
   - `--accent`
   - `--accent-light`
   - `--accent-gradient`
3. Update button shadows in `src/App.css` (line 75, 80)
4. Update form focus shadow in `src/components/Contact.css` (line 55)

### Updating Skills
1. Edit `src/components/Skills.jsx`
2. Modify `skillCategories` array
3. Add/remove skills from any category

### Changing Profile Photo
1. Replace `public/me.jpg` with new image
2. Recommended: 280x280px or larger, square aspect ratio
3. CSS handles circular cropping automatically

---

## Troubleshooting

### Build Fails
- Run `npm install` to ensure all dependencies are installed
- Check for ESLint errors: `npm run lint`
- Clear dist folder: `rm -rf dist && npm run build`

### EmailJS Not Working
- Verify credentials in `Contact.jsx`
- Check EmailJS dashboard for service status
- Ensure template variables match (`from_name`, `from_email`, `subject`, `message`)
- Test with browser console open to see errors

### reCAPTCHA Not Appearing
- Verify site key in `Contact.jsx` line 137
- Check browser console for errors
- Ensure domain is registered in Google reCAPTCHA console
- For localhost testing, add `localhost` to allowed domains

### Theme Not Switching
- Check `localStorage` is enabled in browser
- Verify theme prop is passed to Contact component in `App.jsx`
- Check browser console for React errors

### Header Not Visible Over Ascella Section
- Verify `--header-bg-scrolled` exists in both theme definitions (`index.css`)
- Check `backdrop-filter` is supported in browser
- Ensure `.header.scrolled` class is applied when scrolling

---

## Future Enhancements
- Add React Router for true client-side routing
- Create sitemap.xml for better SEO
- Add Google Analytics or similar
- Implement blog with MDX or CMS
- Add project filtering/categories
- Add animations with Framer Motion
- Implement progressive web app (PWA) features
- Add more accessibility features (skip links, etc.)

---

## Contact Information
**Developer**: Jared Klopstein
**Email**: hello@jaredklopstein.dev
**GitHub**: https://github.com/JaredKlopstein
**LinkedIn**: https://www.linkedin.com/in/jaredklopstein/

---

*Last Updated: January 10, 2026*
*Project Status: Ready for Deployment*
