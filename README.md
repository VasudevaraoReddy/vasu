# Vasu Deva Rao Reddy - Personal Portfolio

A professional, responsive, and modern personal portfolio website built with React, Vite, and Tailwind CSS.

## Features

- **Modern Design**: Clean, minimal, and professional aesthetic.
- **Responsive**: Fully optimized for desktop, tablet, and mobile devices.
- **Dark Mode**: Toggle between light and dark themes.
- **Animations**: Smooth entry animations using Framer Motion.
- **Dynamic Content**: Easy to update content via `src/data/cv.js`.

## Tech Stack

- **Framework**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run locally**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## Customization

To update the content (Name, Skills, Experience, etc.), simply edit the file:
`src/data/cv.js`

This file contains structured data objects that populate the website sections.

## Deployment to GitHub Pages

### Option 1: Manual Deployment

1. Update `vite.config.js` with your repository name:
   ```js
   export default defineConfig({
     base: '/repository-name/', // e.g., '/vasu-portfolio/'
     plugins: [react()],
   })
   ```
   *Note: If you are deploying to `username.github.io` (user site), set base to `'/'`.*

2. Build the project:
   ```bash
   npm run build
   ```

3. Upload the contents of the `dist` folder to your GitHub repository (or use a tool like `gh-pages`).

### Option 2: Using `gh-pages` package (Recommended)

1. Install `gh-pages`:
   ```bash
   npm install gh-pages --save-dev
   ```

2. Add these scripts to `package.json`:
   ```json
   "scripts": {
     // ...
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

---
Created by Antigravity
