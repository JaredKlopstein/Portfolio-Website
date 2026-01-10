# 🎨 Customization Checklist

Use this checklist to track what you've customized in your portfolio website.

## ✅ Essential Updates

### [ ] 1. EmailJS Setup (Contact Form)
**File**: [src/components/Contact.jsx](src/components/Contact.jsx) (Line ~28)
- [X] Create EmailJS account at https://www.emailjs.com/
- [X] Set up email service (Gmail, Outlook, etc.)
- [X] Create email template with variables: `from_name`, `from_email`, `subject`, `message`
- [X] Get Service ID, Template ID, and Public Key
- [X] Update credentials in Contact.jsx:
  ```javascript
  const SERVICE_ID = 'your_service_id';
  const TEMPLATE_ID = 'your_template_id';
  const PUBLIC_KEY = 'your_public_key';
  ```

### [ ] 2. Personal Information
**File**: [src/components/Hero.jsx](src/components/Hero.jsx)
- [X] Verify name is correct
- [X] Update title/tagline if desired
- [X] Confirm social media links:
  - [X] GitHub: https://github.com/JaredKlopstein
  - [X] LinkedIn: https://www.linkedin.com/in/jaredklopstein/
  - [X] Twitter/X: https://x.com/JaredKlopstein

**File**: [src/components/Contact.jsx](src/components/Contact.jsx)
- [X] Update email address (currently: hello@jaredklopstein.dev)

### [ ] 3. Professional Photo
**File**: [src/components/About.jsx](src/components/About.jsx)
- [X] Replace image placeholder with your professional photo
- [X] Add image to `public` folder
- [X] Update the image placeholder div with an `<img>` tag

### [ ] 5. About Me Section
**File**: [src/components/About.jsx](src/components/About.jsx)
- [X] Personalize the about text
- [X] Update highlight cards if needed

### [ ] 6. Projects
**File**: [src/components/Projects.jsx](src/components/Projects.jsx)
- [ ] Replace placeholder projects with real projects
- [ ] Add project screenshots to `public` folder
- [ ] Update project links (GitHub, Demo)
- [ ] Change status from 'coming-soon' to 'live' when ready

### [ ] 7. Skills
**File**: [src/components/Skills.jsx](src/components/Skills.jsx)
- [X] Review and update skill categories
- [X] Add/remove skills as needed
- [X] Update "Always Learning" section

### [ ] 8. Blog Posts
**File**: [src/components/Blog.jsx](src/components/Blog.jsx)
- [] Add real blog posts when ready
- [ ] Update links to your blog
- [ ] Change status from 'coming-soon' to 'live'

### [ ] 9. Ascella Studios
**File**: [src/components/AscellaStudios.jsx](src/components/AscellaStudios.jsx)
- [ ] Update description and mission if desired
- [ ] Add Ascella Studios website link when ready (replace `#`)

## 🎨 Optional Customizations

### [ ] 10. Theme Colors
**File**: [src/index.css](src/index.css)
- [ ] Customize accent colors if desired
- [ ] Adjust light/dark theme colors

### [ ] 11. Favicon & SEO
**File**: [index.html](index.html)
- [X] Replace `/vite.svg` with your favicon in `public` folder
- [X] Update meta description
- [X] Update page title if needed

### [ ] 12. Footer Tagline
**File**: [src/components/Footer.jsx](src/components/Footer.jsx)
- [X] Customize the footer motto if desired

## 🚀 Deployment

### [ ] 13. Deploy Website
- [x] Choose deployment platform (Vercel, Netlify, GitHub Pages)
- [ ] Connect repository
- [ ] Deploy!
- [ ] Test all links and features
- [ ] Verify EmailJS is working

### [ ] 14. Domain Setup (Optional)
- [ ] Point jaredklopstein.dev to your deployed site
- [ ] Update DNS records
- [ ] Enable HTTPS/SSL

## 📝 Notes

**Placeholder Content to Replace:**
- All "Coming Soon" project cards
- All "Coming Soon" blog posts
- Professional photo (currently placeholder)
- Resume download link
- EmailJS credentials (critical!)
- Project screenshots
- Ascella Studios link

**Files with Placeholder Comments:**
- `src/components/Contact.jsx` - EmailJS setup
- `src/components/About.jsx` - Photo placeholder
- `src/components/Resume.jsx` - Resume link
- `src/components/Projects.jsx` - Project data
- `src/components/Blog.jsx` - Blog posts

---

💡 **Tip**: Search for "TODO", "Replace", "placeholder", or "coming-soon" in the codebase to find all areas that need updating.
