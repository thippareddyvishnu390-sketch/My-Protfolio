# Developer Portfolio

A modern, responsive developer portfolio built with React, Vite, Tailwind CSS, Framer Motion, and Lucide React.

## Stack

- React 19 + Vite 8
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- Framer Motion
- Lucide React Icons

## Features

- Dark modern UI with glassmorphism effects
- Smooth section and card animations
- Reusable component architecture
- Fully responsive for mobile, tablet, and desktop
- Production-ready static build deployable to Vercel

## Project Structure

```text
src/
	components/
		About.jsx
		Contact.jsx
		Footer.jsx
		GlassCard.jsx
		Hero.jsx
		Navbar.jsx
		Projects.jsx
		SectionTitle.jsx
		Skills.jsx
	data/
		portfolio.js
	App.jsx
	index.css
	main.jsx
```

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Use default Vite settings:
	 - Build command: `npm run build`
	 - Output directory: `dist`
4. Deploy.

No additional server configuration is required for this static portfolio.
