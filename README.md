# Ahbab Ali K. - Professional Mechanical & MEP Engineering Portfolio

Modern, premium, fully responsive personal engineering portfolio website for **Ahbab Ali K.**, Mechanical Design Engineer specializing in MEP Plumbing Design, HVAC system drafting, AutoCAD 2D/3D modeling, quantity takeoff (QTO), and estimation.

Live GitHub Pages URL: [https://alikahbab-maker.github.io/Ahbab/](https://alikahbab-maker.github.io/Ahbab/)

---

## 📁 Website Architecture

The project is structured with dedicated, semantic multi-page routes:

| Page | File | Description |
|------|------|-------------|
| **Home** | `index.html` | Hero section with Ahbab's portrait above the fold, professional title, introduction, quick metrics, CTAs, and compact highlights. |
| **About Me** | `about.html` | Dedicated profile, career objective, mechanical engineering background, MEP plumbing & HVAC experience, technical interests. |
| **Experience** | `experience.html` | Vertical career timeline with exact dates and responsibilities for A-SQUARE MEP, AMS Electro Consultants, Four Square Engineers, CAD Point. |
| **Skills** | `skills.html` | Technical capability cards with qualitative proficiency levels (AutoCAD, Revit MEP, Plumbing, HVAC, QTO, Tendering). |
| **Projects** | `projects.html` | Filterable project gallery with CAD blueprint schematics (Lulu Mall Tirur, Lulu Mall Kottakkal, Perinthalmanna Nursing Home, AAK Hotel, MILMA, EV Charging Station). |
| **Education** | `education.html` | Diploma in Mechanical Engineering (Ma'din Polytechnic), AutoCAD & Revit Certifications (CAD Point Manjeri), Industrial Training, SSLC. |
| **Resume / CV** | `resume.html` | Dedicated printable CV layout, embedded live PDF viewer, and working "Download Resume PDF" button. |
| **Contact** | `contact.html` | Direct email, phone, WhatsApp links, and validated interactive contact form. |
| **404 Not Found**| `404.html` | Custom error fallback for GitHub Pages URL reloads. |

---

## 🎨 Theme & Typography

- **Primary Font**: `Palatino Linotype` with serif fallbacks (`Book Antiqua`, `Palatino`, `Georgia`, `serif`).
- **Accent Font**: `JetBrains Mono` for engineering annotations, dimensions, and badges.
- **Color Palette**:
  - Background: Deep Architectural Charcoal `#080b11` / `#0e131f`
  - Blueprint Cyan Accent: `#38bdf8` / `#0284c7`
  - Engineering Amber / Valve Accent: `#f59e0b` / `#d97706`
  - Surface Cards: `#131929` / `#182033` with subtle borders `rgba(255, 255, 255, 0.08)`
- **CAD Elements**: Grid overlays, corner brackets, and custom SVG technical schematics.

---

## 🚀 How to Deploy to GitHub Pages

To publish to `https://alikahbab-maker.github.io/Ahbab/`:

1. Open your terminal in this directory:
   ```bash
   cd "C:\Users\ASUS\.gemini\antigravity\scratch\ahbab-portfolio"
   ```

2. Initialize git (if not already done) and connect to your GitHub repository:
   ```bash
   git init
   git remote add origin https://github.com/alikahbab-maker/Ahbab.git
   ```

3. Add all files, commit, and push to the `main` (or `gh-pages`) branch:
   ```bash
   git add .
   git commit -m "Deploy modern multi-page MEP engineering portfolio with Palatino Linotype theme"
   git branch -M main
   git push -u origin main --force
   ```

4. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Branch**, select `main` and root `/`.
   - Click **Save**. Within 1–2 minutes, your website will be live at `https://alikahbab-maker.github.io/Ahbab/`!
