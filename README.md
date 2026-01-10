# Jared Klopstein | Portfolio Website

A modern, professional portfolio website built with React and Vite. Features a stunning design with light/dark theme toggle, smooth animations, and a fully responsive layout.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready to deploy.

## 📝 Customization Guide

### 1. Personal Information

Update your personal details throughout the site:

**Hero Section** ([src/components/Hero.jsx](src/components/Hero.jsx)):
- Update name, title, and tagline
- Modify social media links (GitHub, LinkedIn, Twitter/X)

**About Section** ([src/components/About.jsx](src/components/About.jsx)):
- Replace the about text with your own story
- Add your professional photo (replace the placeholder)

**Contact Section** ([src/components/Contact.jsx](src/components/Contact.jsx)):
- Update email address (`hello@jaredklopstein.dev`)

### 2. Projects

Update the projects array in [src/components/Projects.jsx](src/components/Projects.jsx):

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Project description...',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: '/path/to/image.jpg', // or null for placeholder
    github: 'https://github.com/yourusername/project',
    demo: 'https://your-project-demo.com',
    status: 'live' // or 'coming-soon'
  },
  // Add more projects...
];
```

### 3. Skills

Update the skills in [src/components/Skills.jsx](src/components/Skills.jsx):

```javascript
const skillCategories = [
  {
    icon: <Code2 size={32} />,
    title: 'Languages',
    skills: ['JavaScript', 'Python', 'TypeScript'] // Update with your skills
  },
  // Modify other categories...
];
```

### 4. Blog Posts

Update blog posts in [src/components/Blog.jsx](src/components/Blog.jsx):

```javascript
const blogPosts = [
  {
    id: 1,
    title: 'Your Blog Post Title',
    date: '2025-01-08',
    excerpt: 'Post excerpt...',
    readTime: '5 min read',
    link: '/blog/your-post-slug',
    status: 'live' // or 'coming-soon'
  },
  // Add more posts...
];
```

### 5. Resume

Update the resume download link in [src/components/Resume.jsx](src/components/Resume.jsx):

```javascript
<a
  href="/path/to/your-resume.pdf" // Replace with your resume file
  className="btn btn-primary download-btn"
  download
>
  Download Resume
</a>
```

Place your resume PDF file in the `public` folder, then update the link to `/your-resume.pdf`.

### 6. EmailJS Setup (Contact Form)

The contact form uses EmailJS to send emails. Follow these steps:

1. **Create an EmailJS account**:
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for a free account

2. **Set up your email service**:
   - Add an email service (Gmail, Outlook, etc.)
   - Note your **Service ID**

3. **Create an email template**:
   - Create a new template
   - Use these variables in your template:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{subject}}` - Email subject
     - `{{message}}` - Email message
   - Note your **Template ID**

4. **Get your Public Key**:
   - Go to Account > API Keys
   - Copy your **Public Key**

5. **Update the code** in [src/components/Contact.jsx](src/components/Contact.jsx) (around line 28):

```javascript
// Replace these with your actual EmailJS credentials
const SERVICE_ID = 'your_service_id_here';
const TEMPLATE_ID = 'your_template_id_here';
const PUBLIC_KEY = 'your_public_key_here';
```

### 7. Ascella Studios

Update Ascella Studios content in [src/components/AscellaStudios.jsx](src/components/AscellaStudios.jsx):
- Update the description and mission statement
- Add the website link when ready (replace `#` with actual URL)

### 8. Theme Colors

Customize the color scheme in [src/index.css](src/index.css):

```css
/* Light Theme */
:root[data-theme="light"] {
  --accent: #6366f1; /* Change to your brand color */
  --accent-gradient: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  /* Modify other colors... */
}

/* Dark Theme */
:root[data-theme="dark"] {
  --accent: #818cf8; /* Change to your brand color */
  /* Modify other colors... */
}
```

### 9. Favicon and Meta Tags

- Replace `/vite.svg` in the `public` folder with your own favicon
- Update meta tags in [index.html](index.html) for SEO

## 📁 Project Structure

```
portfolio-website/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── AscellaStudios.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Blog.jsx
│   │   ├── Resume.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Main app component
│   ├── App.css          # Global styles
│   ├── index.css        # Theme variables
│   └── main.jsx         # Entry point
├── index.html
└── package.json
```

## 🎨 Features

- ✅ Light/Dark theme with system preference detection
- ✅ Smooth scrolling navigation
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Animated transitions and micro-interactions
- ✅ Contact form with EmailJS integration
- ✅ SEO-friendly with semantic HTML
- ✅ Accessible with ARIA labels
- ✅ Fast performance with Vite

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite settings
5. Deploy!

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy!

### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## 📦 Dependencies

- **React** - UI framework
- **Vite** - Build tool and dev server
- **lucide-react** - Icon library
- **@emailjs/browser** - Contact form email service

## 🤝 Support

For questions or issues:
- Check the comments in the code files
- Review this README
- Search for similar issues online

## 📄 License

This project is open source and available for personal use.

---

Built with ☕ and curiosity by Jared Klopstein
