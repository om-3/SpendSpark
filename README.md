<div align="center">

# 💸 SpendSpark

### Smart Expense & Subscription Tracker Desktop App  
**Track. Analyze. Save Smarter.**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Electron](https://img.shields.io/badge/Electron-Desktop_App-47848F?style=for-the-badge&logo=electron&logoColor=white)](https://www.electronjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-Backend-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Styling-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

</div>

---

# 📌 About

**SpendSpark** is a modern desktop expense and subscription tracking application designed to help students and individuals manage their finances more effectively.

The application allows users to:

- Track daily expenses
- Manage recurring subscriptions
- Analyze spending habits
- View financial insights
- Monitor monthly expenses visually

SpendSpark is built using **Next.js + Electron**, allowing it to run as a real Windows desktop application.

---

# ✨ Features

| Feature | Description |
|---|---|
| 📊 Expense Tracking | Add and manage daily expenses |
| 🔁 Subscription Tracking | Monitor monthly and yearly subscriptions |
| 📈 Analytics Dashboard | Interactive spending charts and reports |
| 🌙 Modern UI | Dark-mode responsive interface |
| 🖥 Desktop Application | Runs as Windows EXE application |
| ⚡ Fast Performance | Powered by Next.js + React |
| 🔥 Firebase Integration | Cloud-based backend support |
| 📱 Responsive Layout | Optimized UI design |

---

# 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 15 | Frontend framework |
| React 19 | UI library |
| Electron | Desktop application wrapper |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| shadcn/ui | UI components |
| Firebase | Backend/database |
| Recharts | Charts & analytics |

---

# 📁 Project Structure

```bash
SpendSpark/
├── electron/              # Electron desktop configuration
├── src/
│   ├── app/               # Next.js app router
│   ├── components/        # Reusable UI components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility/helper functions
│   └── ai/                # AI-related modules
├── public/
├── package.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

---

# ⚙️ Installation

## Prerequisites

Install the following tools:

- Node.js (v18 or later)
- Git
- VS Code (recommended)

---

# 🚀 Run Locally

```bash
# Clone repository
git clone https://github.com/om-3/SpendSpark.git

# Open project folder
cd SpendSpark-main

# Install dependencies
npm install

# Start development server
npm run dev
```

---

# 🖥 Run as Desktop App

Electron integration allows SpendSpark to run as a real desktop application.

## Start Electron App

```bash
npm run dev
```

This launches:

- Next.js development server
- Electron desktop window

---

# 📦 Build Windows EXE

Generate installable Windows application:

```bash
npm run dist
```

After successful build:

```bash
dist/
 └── SpendSpark Setup 0.1.0.exe
```

---

# 🎨 UI Features

- Smooth dashboard layout
- Modern sidebar navigation
- Responsive cards
- Interactive charts
- Dark mode support
- Clean fintech-inspired design

---

# 🚀 Roadmap

- [ ] Offline local database support
- [ ] SQLite integration
- [ ] Budget planning system
- [ ] AI financial suggestions
- [ ] Export reports as PDF
- [ ] Mobile version
- [ ] Cloud sync
- [ ] Multi-user authentication
- [ ] Portable EXE build
- [ ] Custom desktop app icon

---

# ⚠️ Known Limitations

Currently, the Electron app runs using a local Next.js server during development.

Future updates will include:

- Fully standalone offline mode
- Optimized production Electron build
- Local file loading support

---

## 👨‍💻 Author

**OM YERPUDE**

[![GitHub](https://img.shields.io/badge/GitHub-om--3-181717?style=for-the-badge&logo=github)](https://github.com/om-3)
[![Instagram](https://img.shields.io/badge/Instagram-@_om__3.y-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/_om_3.y?igsh=MTA1aWYyYzRpczJueA==)
---

# ⭐ Support

If you like this project:

⭐ Star the repository  
🍴 Fork the project  
🛠 Contribute improvements

---

<div align="center">

Made with ☕, React, Electron, and late-night debugging sessions.

</div>




