# 🛡️ AttackNewz

**AttackNewz** is a real-time global crisis tracker that visualizes ongoing threats and emergencies across the world, including cyberattacks, natural disasters, geopolitical events, and more. It delivers up-to-date visual intelligence using an interactive 3D globe with contextual news cards and detailed incident breakdowns.

---

## 🌍 Vision & Design

AttackNewz was built with the belief that:

- Users should have an **instant understanding of where, when, and what** type of threats are occurring.
- Categorizing and displaying global incidents in a **clean, minimal interface** makes awareness more accessible.
- The app must be **privacy-first** — we do not use analytics scripts or third-party services that require sensitive data.

### ❌ Why not Maxbox?

We consciously avoided providers like **Maxbox**, which asked for unnecessary bank info during integration, favoring open tools that align with our open-source and transparency-first values.

---

## 🛠️ Tech Stack

| Layer        | Tech                          |
| ------------ | ----------------------------- |
| Framework    | Next.js (App Router)       |
| Styling      | Tailwind CSS                  |
| Language     | TypeScript                    |
| Globe Visual | react-globe.gl                |
| Hosting      | Vercel       |
| Data Source  | Static Mock Data (expandable) |

---

## 🚀 Features

### 🌐 Interactive Globe

- Globe rendering via `react-globe.gl`
- Plots incidents using coordinates, arcs, and pins
- Responsive and animated for smooth UX

### 📰 Categories

Each incident belongs to one of these:

- Cyberattacks
- Natural Disasters
- Pandemics
- Political Events
- Infrastructure Failures

### 🗺️ Dynamic Routes

- View full info on any event at `/incident/[id]`
- Dedicated routes for each category:
  - `/cyberattacks`
  - `/disasters`
  - `/politics`
  - `/infrastructure`
  - `/pandemics`

### 📊 Summary Dashboard

- Marquee-style latest events
- Summary analytics (e.g., "5 attacks today")
- News-style descriptions powered by mock data

### 📚 Legal Pages

- `/privacy` — Clear, user-first privacy policy
- `/terms` — Simple terms of use with no legalese

### ❓ FAQ Accordion

- Dynamic component styled with Flowbite & Tailwind
- Answers common questions about the platform and data

---

## 📁 Folder Structure

```
app/
├── page.tsx                # Home Page
├── layout.tsx                # Layout Page
├── incident/[id]/page.tsx # Dynamic Incident Page
├── cyberattacks/page.tsx  # Category Pages
├── disasters/page.tsx  # Category Pages
├── infrastructure/page.tsx  # Category Pages
├── pandemics/page.tsx  # Category Pages
├── politics/page.tsx  # Category Pages
├── topstories/page.tsx  # Category Pages
├── providers/page.tsx  # Theme Providers
├── privacy/page.tsx       # Privacy Policy
├── terms/page.tsx         # Terms & Conditions
components/
├── Accordian.tsx  
├── Header.tsx 
├── AnalyticsBanner.tsx
├── NotFound.tsx
├── MapGlobe.tsx
├── ThemeToggleButton.tsx
├── IncidentCard.tsx 
├── Globe.tsx
├── Footer.tsx
lib/
├── data/mockIncidents.ts
public/
├── images/
types/
├── incidents.d.ts
```

---

## 📦 Getting Started

```bash
git clone https://github.com/gitshahab/attacknewz.git
cd attacknewz
npm install
npm run dev
```

Open [`http://localhost:3000`](http://localhost:3000) in your browser.

---

## 🧩 Future Plans

- Live API integrations (e.g., WHO, GDACS, CERT)
- Time travel slider for event timelines
- Admin dashboard for verified user reports
- Globe heatmap overlay

---

## 📜 License

MIT License. Free for personal, academic, and commercial use.

---

## 🤝 Credits & Acknowledgements

- [react-globe.gl](https://github.com/vasturiano/react-globe.gl)
- [Tailwind CSS](https://tailwindcss.com/)
- [Flowbite](https://flowbite.com/) for UI inspiration
- [Unsplash](https://unsplash.com/) for public images

---

> AttackNewz — Building a safer, smarter, and more aware digital world.

