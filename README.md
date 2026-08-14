<div align="center">

<img src="https://files.catbox.moe/0w1hu5.jpg" width="100%" alt="ARSLAN MD PRO Banner"/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=200&section=header&text=ARSLAN-MD-PRO&fontSize=55&fontColor=ffffff&animation=twinkling&fontAlignY=35&desc=Light%2C%20Fast%20%26%20Smooth%20WhatsApp%20Bot&descAlignY=55&descAlign=50" width="100%"/>

<img src="https://readme-typing-svg.demolab.com/?lines=%F0%9F%A4%96+Welcome+to+ARSLAN-MD-PRO;%E2%9A%A1+Light+%7C+Fast+%7C+Smooth;%F0%9F%94%A5+Powered+by+ARSLAN+TECH'S;%F0%9F%9A%80+Deploy+in+Seconds%21;%F0%9F%92%AC+Type+.menu+to+get+started!&font=Fira%20Code&center=true&width=750&height=50&color=25D366&vCenter=true&size=24&pause=1200"/>

<br/>

![Made with Love](https://img.shields.io/badge/Made%20With-%E2%9D%A4%EF%B8%8F-red?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-Powered-339933?style=for-the-badge&logo=node.js&logoColor=white)
![WhatsApp](https://img.shields.io/badge/WhatsApp-Multi--Device-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Lightweight](https://img.shields.io/badge/Lightweight-%E2%9A%A1-yellow?style=for-the-badge)

![Stars](https://img.shields.io/github/stars/ArslanTech-dev/ARSLAN-MD-Pro?style=for-the-badge&color=yellow&logo=github)
![Forks](https://img.shields.io/github/forks/ArslanTech-dev/ARSLAN-MD-Pro?style=for-the-badge&color=orange&logo=github)
![Issues](https://img.shields.io/github/issues/ArslanTech-dev/ARSLAN-MD-Pro?style=for-the-badge&color=red&logo=github)
![Last Commit](https://img.shields.io/github/last-commit/ArslanTech-dev/ARSLAN-MD-Pro?style=for-the-badge&color=brightgreen&logo=github)
![Repo Size](https://img.shields.io/github/repo-size/ArslanTech-dev/ARSLAN-MD-Pro?style=for-the-badge&color=blueviolet)

<img src="https://raw.githubusercontent.com/Platane/snk/output/github-contribution-grid-snake.svg" width="600"/>

<img src="https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif" width="260"/>

</div>

---

## 📖 About The Project

**ARSLAN-MD-PRO** ⚡ is a **unique, light, and buttery-smooth WhatsApp Multi-Device Bot** built with Node.js. Unlike heavier bots packed with bloat, MD-Pro is trimmed down for speed and stability — perfect for low-resource hosting while still delivering a solid plugin-based command experience. 🪶

If you want something quick to deploy, easy to maintain, and that just **runs smoothly** — this is it. 💨

<div align="center">
<img src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" width="430"/>
</div>

---

## ✨ Features

<div align="center">

| 🎯 Feature | 📋 Description |
|---|---|
| 🪶 **Lightweight Core** | Minimal footprint, low RAM/CPU usage — runs smoothly even on small servers |
| ⚡ **Multi-Device Support** | Fully compatible with WhatsApp's latest multi-device system |
| 🔌 **Plugin System** | Drop-in `plugins/` folder — extend the bot without touching core files |
| 🔐 **Pairing Code Login** | Connect instantly via `pair.js` — no repeated QR scans |
| 🧠 **Simple Config** | One-file setup through `config.js` — beginner friendly |
| 🆓 **Free & Open Source** | MIT licensed — use, modify, and share freely |
| 🚀 **Fast Boot Time** | Minimal dependencies mean the bot starts up in seconds |

</div>

<div align="center">
<img src="https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif" width="380"/>
</div>

---

## 🗂️ Project Structure

```bash
ARSLAN-MD-Pro/
├── 📁 plugins/       # All bot commands & modules
├── 📄 config.js      # Bot configuration file
├── 📄 index.js       # Main entry point
├── 📄 pair.js        # Pairing code authentication
├── 📄 package.json   # Project dependencies
├── 📄 gitignore      # Git ignore rules
└── 📄 LICENSE         # MIT License
```

---

## 🚀 Installation & Setup

### ✅ Prerequisites
- 🟢 [Node.js](https://nodejs.org/) v18 or higher
- 🟢 Git installed on your system
- 🟢 A WhatsApp account 📱

### 📦 Steps to Deploy

```bash
# 1️⃣ Clone the Repository
git clone https://github.com/ArslanTech-dev/ARSLAN-MD-Pro.git

# 2️⃣ Navigate into the folder
cd ARSLAN-MD-Pro

# 3️⃣ Install Dependencies
npm install

# 4️⃣ Configure your bot
# Edit config.js with your preferred settings

# 5️⃣ Start the Bot
npm start
```

### 🔗 Pairing Your WhatsApp

1. Run the bot using `npm start` 🖥️
2. Enter your WhatsApp number when prompted ☎️
3. Copy the **pairing code** shown in the terminal 🔢
4. Open WhatsApp → **Linked Devices** → **Link with phone number** 📲
5. Enter the code and you're connected! ✅🎉

<div align="center">
<img src="https://media.giphy.com/media/WoWm8YzFQJg5i/giphy.gif" width="360"/>
</div>

---

## 🧩 Adding Custom Plugins

Want to build your own commands? Super simple! 🛠️

1. Go to the `plugins/` folder 📁
2. Create a new `.js` file (e.g., `myplugin.js`)
3. Follow the existing plugin structure
4. Restart the bot — and boom 💥, your new command is live!

---

## ☁️ Hosting Recommendations

Since ARSLAN-MD-PRO is designed to be light, it runs great on:

- 🖥️ **VPS** (even 512MB–1GB RAM instances)
- ☁️ **Heroku / Render / Railway** (free-tier friendly)
- 🐳 **Docker containers**
- 📟 **Termux** (Android) for on-the-go hosting

```bash
# Keep it alive with PM2 on a VPS
npm install -g pm2
pm2 start index.js --name arslan-md-pro
pm2 save
pm2 startup
```

---

## 🖼️ Preview

<div align="center">
<img src="https://media.giphy.com/media/3o7TKzB2gG2Rp2f4kk/giphy.gif" width="480"/>
</div>

---

## 📊 Repo Activity

<div align="center">

![Activity Graph](https://repobeats.axiom.co/api/embed/placeholder-repobeats-svg.svg)

<img src="https://media.giphy.com/media/artj92V8o75VPL7AeQ/giphy.gif" width="220"/>

</div>

---

## 🤝 Contributing

Contributions, issues, and feature requests are always welcome! 🙌

1. 🍴 Fork the repository
2. 🌿 Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push to the branch (`git push origin feature/AmazingFeature`)
5. 🔃 Open a Pull Request

---

## ⚠️ Disclaimer

This project is **not affiliated with, endorsed by, or connected to WhatsApp Inc. or Meta.** Use responsibly and at your own risk. Automating WhatsApp may violate their Terms of Service.

---

## 📜 License

This project is licensed under the **MIT License** — feel free to use, modify, and distribute with proper credit. 📄✅

---

## 👤 Author & Contact

<div align="center">

<img src="https://files.catbox.moe/0w1hu5.jpg" width="150" style="border-radius:50%"/>

### 💻 Developed & Maintained by **ARSLAN** 🇵🇰

📧 **Email:** [arslanchkpt@gmail.com](mailto:arslanchkpt@gmail.com)
📱 **Number:** +92 308 4991001
🔗 **GitHub:** [@ArslanTech-dev](https://github.com/ArslanTech-dev)

<img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="140"/>

</div>

---

<div align="center">

## ⭐ Support the Project

If you like this project, don't forget to **give it a star** ⭐ — it motivates me to keep improving it!

<img src="https://media.giphy.com/media/g9582DNuQppxC/giphy.gif" width="190"/>

<img src="https://readme-typing-svg.demolab.com/?lines=Thanks+for+visiting+%F0%9F%92%9A;Star+%E2%AD%90+if+you+like+it!;See+you+in+the+next+update+%F0%9F%9A%80&font=Fira%20Code&center=true&width=500&height=40&color=FFD700&vCenter=true&size=20&pause=1000"/>

### 🔥 Powered by **ARSLAN TECH'S** 🔥

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=150&section=footer&animation=twinkling" width="100%"/>

</div>
