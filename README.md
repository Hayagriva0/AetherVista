<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://capsule-render.vercel.app/api?type=waving&color=0:6DD5FA,100:2980B9&height=200&section=header&text=Weather%20Pro&fontSize=60&fontColor=ffffff&animation=fadeIn&fontAlignY=35&desc=Your%20Weather,%20Supercharged%20🌦️&descAlignY=55&descSize=20">
  <img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:6DD5FA,100:2980B9&height=200&section=header&text=Weather%20Pro&fontSize=60&fontColor=ffffff&animation=fadeIn&fontAlignY=35&desc=Your%20Weather,%20Supercharged%20🌦️&descAlignY=55&descSize=20"/>
</picture>

<div align="center">
  
  ![PWA](https://img.shields.io/badge/PWA-Ready-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)
  ![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![Open-Meteo](https://img.shields.io/badge/Open--Meteo_API-00796B?style=for-the-badge&logo=cloud&logoColor=white)
  
  <br/>
  
  *A sophisticated, immersive weather experience that brings your forecast to life* ✨
  
  <br/>
  
  [**🌐 Live Demo**](https://hayagriva0.github.io/AetherVista/) • [**🎯 Features**](#-the-magic-inside) • [**📸 Screenshots**](#-eye-candy) • [**🛠️ Installation**](#%EF%B8%8F-installation)

</div>

<br/>

---

## 🐸 Meet Your Weather Companion

**Weather Pro** isn't just another weather app—it's a *vibe*. 

Imagine checking the weather and finding an adorable **animated frog** doing activities based on actual conditions. Raining? He's got an umbrella. Sunny? He's fishing. Snowy? Bundled up in a scarf. And on a **full moon**? 🐺 Let's just say... things get *spooky*.

<div align="center">
  
| ☀️ Sunny Day | 🌧️ Rainy Day | 🌙 Full Moon |
|:---:|:---:|:---:|
| 🎣 Fishing happily | 🌂 Umbrella ready | 🐺 *Werewolf mode!* |

</div>

---

## 🎯 The Magic Inside

<table>
<tr>
<td width="50%" valign="top">

### 🌡️ **Core Weather**
- Real-time temperature & conditions
- Hourly forecasts (next 24 hours)
- 7-day weather predictions
- "Feels like" temperature
- Wind speed & direction
- Humidity & precipitation

### 🌍 **India-Specific Features**
- 🌧️ **Monsoon Tracker** - Rainfall surplus/deficit
- 🔥 **Heat Wave Alerts** (≥40°C IMD standard)
- ❄️ **Cold Wave Alerts** (≤10°C)
- 📊 **Indian AQI Scale** - PM2.5 & PM10
- 🎪 **Festival Easter Eggs** - Diwali, Holi & more!

</td>
<td width="50%" valign="top">

### 🎨 **Visual Delights**
- 🐸 **Animated Weather Frog** - 15+ states!
- 🌅 **Dynamic backgrounds** - Weather-reactive
- 🌙 **Accurate moon phases** - Real lunar cycle
- 🐺 **Werewolf Mode** - Full moon surprise!
- ✨ **Glassmorphism UI** - Premium feel

### 📊 **Climate Intelligence**
- Year-over-year temperature comparison
- Multi-year trend analysis
- Extreme weather day tracking
- Historical data visualization
- Smart seasonal insights

</td>
</tr>
</table>

---

## ✨ Feature Highlights

### 📸 **Golden Hour Timer**
Perfect for photographers! Know exactly when the magic lighting happens:
- ☀️ Morning Golden Hour countdown
- 🌅 Evening Golden Hour alerts  
- 🌙 Blue Hour tracking
- 📷 Real-time "NOW ACTIVE" notifications

### 🌌 **Stargazing Conditions**
Night owl? Amateur astronomer? We got you:
- Visibility rating (0-100%)
- Moon interference calculation
- Cloud cover analysis
- Best viewing windows

### 👕 **AI Outfit Suggestions**
Never overdress (or underdress) again:
- Temperature-based recommendations
- Rain-ready alerts
- UV protection reminders
- Activity-specific suggestions

### ⏰ **Time Machine**
Curious about yesterday? Last week? We remember:
- Historical weather data
- Compare any two dates
- Seasonal pattern analysis

---

## 🔔 Smart Notifications

<div align="center">

| Feature | What It Does |
|:---|:---|
| 🌅 **Daily Summary** | Morning briefing at 6 AM |
| ⚠️ **Severe Weather** | Storms, heavy rain, extreme temps |
| 🔥 **Heat Alerts** | When it's dangerously hot |
| 💨 **AQI Warnings** | Air quality above 200 |
| ☀️ **UV Alerts** | High UV index warnings |

</div>

---

## 🎪 Festival Easter Eggs

Weather Pro celebrates with you! Special effects appear during:

<div align="center">

| Festival | Effect |
|:---:|:---|
| 🎄 **Christmas** | Snowflakes & ornaments falling |
| 🎉 **New Year** | Confetti celebration |
| 🎨 **Holi** | Colorful powder splashes |
| 🪩 **Diwali** | Diyas & sparkles |
| 🪷 **Saraswati Puja** | Lotuses & books |

</div>

---

## 🛠️ Installation

Getting started is *ridiculously* easy:

```bash
# That's it. Just open the file.
open index.html

# Or if you're fancy:
python -m http.server 8000
# Then visit: http://localhost:8000
```

**It's a single HTML file.** No build steps. No npm install. No configuration. Just pure weather magic. 🪄

### 📱 Install as PWA

1. Open in Chrome/Safari
2. Click "Add to Home Screen"
3. Enjoy native-app vibes!

---

## 🔌 Powered By

| Service | Purpose |
|:---|:---|
| [Open-Meteo](https://open-meteo.com) | Weather & Air Quality APIs |
| [Lucide Icons](https://lucide.dev) | Beautiful icons |
| [React 18](https://react.dev) | UI magic |
| [Tailwind CSS](https://tailwindcss.com) | Styling |
| [Windy.com](https://www.windy.com) | Radar maps |

---

## 📂 Project Structure

```
weather pro/
├── 📄 index.html        # The entire app (yes, really!)
├── 📄 manifest.json     # PWA manifest
├── 📄 sw.js             # Service worker for offline
├── 🎨 icon-192.svg      # App icon (small)
├── 🎨 icon-512.svg      # App icon (large)
└── 🎨 icon-maskable.svg # Adaptive icon
```

---

## 🌈 Theme Colors

<div align="center">

| Element | Color |
|:---:|:---:|
| Background | ![#0f172a](https://via.placeholder.com/15/0f172a/0f172a.png) `#0f172a` |
| Accent Blue | ![#6DD5FA](https://via.placeholder.com/15/6DD5FA/6DD5FA.png) `#6DD5FA` |
| Frog Green | ![#22c55e](https://via.placeholder.com/15/22c55e/22c55e.png) `#22c55e` |
| Sunny Gold | ![#FDB813](https://via.placeholder.com/15/FDB813/FDB813.png) `#FDB813` |
| Alert Red | ![#EF4444](https://via.placeholder.com/15/EF4444/EF4444.png) `#EF4444` |

</div>

---

## 🤝 Contributing

Found a bug? Have an idea? PRs are welcome! 

Just remember:
- 🐸 Don't hurt the frog
- 🐺 Werewolf mode is non-negotiable
- ✨ Keep it beautiful

---

## 📜 License

MIT License - Do whatever you want, just keep the frog happy! 🐸💚

---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://capsule-render.vercel.app/api?type=waving&color=0:2980B9,100:6DD5FA&height=100&section=footer">
  <img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:2980B9,100:6DD5FA&height=100&section=footer"/>
</picture>

<div align="center">
  
  Made with 💙 and a lot of ☕
  
  *"Because checking the weather should make you smile"* 🐸
  
</div>
