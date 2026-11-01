# Karishma - Portfolio Website

A modern, responsive, pastel-themed portfolio website built with **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons**, designed following the **Pastel Portfolio Website Showcase** aesthetic.

---

## 🎨 Design & Aesthetic
- **Color Palette**: Lavender (`#8B5CF6`), Soft Blue (`#38BDF8`), and crisp white with soft ambient glows.
- **Typography**: Google Font *Plus Jakarta Sans*.
- **Components**: Smooth rounded-3xl cards, subtle drop shadows, and responsive glassmorphism navigation.
- **Interactive Lightbox**: Click-to-enlarge modal with multi-image gallery support, PDF preview, and thumbnail navigation.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation
```bash
npm install
```

### Run Locally (Development Server)
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### Production Build
```bash
npm run build
```
The optimized static build will be generated in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deploying to Vercel

This repository is pre-configured for instant zero-configuration deployment on **Vercel**:
1. Push this directory to your GitHub repository.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **"Deploy"**.

*(A `vercel.json` file is already included with SPA rewrites).*

---

## 📁 Project Structure & Assets

```
portfolio/
├── public/
│   └── assets/                     # Portfolio media and documents
│       ├── profile.jpeg             # New profile photograph
│       ├── visualcapital.pdf        # Visual Capitalist tree coverage PDF
│       ├── visualcapital_preview.png # First-page preview of visualcapital PDF
│       ├── stars-photo.jpeg         # Stars classroom activity
│       ├── storyboard-img.jpeg      # Storyboard activity
│       ├── impair1.jpeg             # IoT impairment sensor 1
│       ├── impair2.jpeg             # IoT impairment sensor 2
│       ├── quiz-cls1.jpeg           # Class quiz group 1
│       ├── quiz-cls-2.jpeg          # Class quiz group 2
│       ├── quiz-leaderborad.jpeg    # 1st place quiz leaderboard
│       ├── padlit.jpeg              # LeetCode Padlet curation
│       ├── MatchHire_Candidate_Evaluation_ECCE_Presentation.pptx # PPT file
│       ├── ppt_slide1.png           # Slide 1 preview of PPT
│       ├── audio_preview.png        # Audio walkthrough thumbnail
│       ├── video_preview.png        # Demo video thumbnail
│       └── about-laptop.png         # About section laptop image
├── src/
│   ├── components/
│   │   ├── Navbar.jsx               # Fixed navigation bar
│   │   ├── Hero.jsx                 # Homepage hero with new profile.jpeg
│   │   ├── About.jsx                # Clean About Me section
│   │   ├── ClassActivities.jsx      # Combined activities & projects grid
│   │   ├── JobMatchHireSection.jsx  # JobMatchHire Video, Audio, and Slide 1 PPT
│   │   ├── ProjectWriteup.jsx       # Technical documentation preview & download
│   │   ├── MediumBlog.jsx           # Published Medium article card
│   │   ├── Contact.jsx              # Direct contact channels (Email, GitHub, Medium)
│   │   ├── Footer.jsx               # Navigation footer
│   │   └── ImageModal.jsx           # Lightbox preview modal
│   ├── data/
│   │   └── portfolioData.js         # Centralized data model & links
│   ├── App.jsx                      # App orchestrator
│   ├── index.css                    # Tailwind CSS & custom utilities
│   └── main.jsx                     # React entry point
├── index.html                       # HTML shell
├── tailwind.config.js               # Tailwind configuration
├── vite.config.js                   # Vite configuration
└── vercel.json                      # Vercel deployment configuration
```
