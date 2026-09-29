# SHABY | Architecture • Interior • Construction

Official high-performance web platform for **SHABY Architecture • Construction • Interior**, Islamabad, Pakistan.

## 🚀 Quick Vercel Deployment

This project is fully configured for **instant zero-config deployment on Vercel**.

### Method 1: Push to GitHub & Import in Vercel (Recommended)
1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - SHABY official web platform"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset will automatically be detected as **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**!

### Method 2: Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🏗️ Tech Stack
- **Framework**: React 19 (TypeScript)
- **Bundler**: Vite 8
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Animations**: CSS Keyframe / Typewriter Engine
- **Deployment Target**: Vercel (SPA rewrites enabled in `vercel.json`)
