<div align="center">
  <img src="https://img.shields.io/badge/Open_Source-Playground-58a6ff?style=for-the-badge&logo=opensourcehardware&logoColor=white" alt="Open Source" />
  <img src="https://img.shields.io/badge/Make_&_Zapier-Alternative-bc8cff?style=for-the-badge&logo=zapier&logoColor=white" alt="Zapier Alternative" />
  <img src="https://img.shields.io/badge/Status-Production_Ready-3fb950?style=for-the-badge&logo=rocket&logoColor=white" alt="Production Ready" />
  
  <br />
  <br />

  <h1 align="center">⚡ Autoify: The AI Automation Marketplace & Playground</h1>

  <p align="center">
    <strong>An open-source, deployable B2B playground designed to replace expensive Zapier/Make subscriptions. Discover premium templates, connect services, and architect your own enterprise automations at the absolute lowest cost.</strong>
  </p>
</div>

<hr />

## 🚀 Overview

**Autoify** is not just a landing page; it is a fully-functional, lowest-cost **Open Source Automation Architecture**. It acts as your autonomous backend hub to intercept webhooks, sync data accurately across platforms (CRM/Databases/LLMs), and dispatch custom logic—completely bypassing the monthly subscription fees of traditional automation builders.

The platform is engineered to be **instantly deployed on Render.com** so you can scale a fully operational Automation Business, instantly granting users access to customized AI environments, Voice outreach bots, and Lead data pipelines.

---

## 🔥 Platform Features

*   **🌌 High-Convert Marketplace UI:** Built on pure HTML5 + Three.js + GSAP, providing an interactive, glassmorphic marketplace designed to convert prospects searching for automation integrations.
*   **🛒 Trending AI Templates:** Pre-configured architecture for Lead Capture pipelines, Autonomous AI Voice Agents, and Zendesk/Support RAG integrations. Built directly into the platform logic.
*   **⚙️ "Make/Zapier" Open Source Alternative:** An API playground built on Node.js + Express. Accepts payloads, mutates data, and connects systems securely without volume limits.
*   **📈 Built-In Subscription Scalability:**
    *   *Starter Playground:* Get 1 Template / Create 1 custom flow. 
    *   *Pro Creator:* Get 2 Templates / Create 3 custom flows.
    *   *Enterprise Hub:* Get 5 Templates / Create 5 custom flows + access fully Private LLMs.
*   **📧 Universal Email Engine:** Dynamically switches between an `Ethereal.email` local testing sandbox and robust `Google SMTP` in production. 

---

## 🛠️ Technology Stack

| Ecosystem Sector | Core Technology |
| :--- | :--- |
| **Frontend Playground** | Vanta.js (Three.js), GSAP, Vanilla CSS3 |
| **Automation Engine** | Node.js, Express.js |
| **Email Subsystem** | Nodemailer (Ethereal + Google SMTP) |
| **Data Persistence** | Zero-config SQLite3 |
| **Environment** | Dotenv logic |

---

## 📦 Local Workspace Setup

You can run the entire Autoify Playground locally on your machine exactly as it would function in the real world:

### 1. Clone the Architecture
```bash
git clone https://github.com/MustakimShaikh01/Lead-Automation.git
cd Lead-Automation
```

### 2. Install Native Dependencies
```bash
npm install
```

### 3. Initialize `.env` Keys (For Production)
The app runs safely testing logic locally out-of-the-box. To actually connect out integrations securely, map a `.env`:

```env
NODE_ENV=development
EMAIL_USER=your_business_address@gmail.com
EMAIL_PASS=your_16_digit_app_password
ADMIN_EMAIL=your_admin_dashboard@example.com
```

### 4. Ignite the Playground
```bash
npm start
```
*The Autoify server logic is now actively listening on `http://localhost:3000`.* 

---

## ☁️ Deploying to Render (For Free Demos & Business Setup)

This marketplace is explicitly structured to act as your core Business Engine hosted on Render.com:

1. Push this repository to your GitHub account (this codebase comes pre-configured with a `.gitignore`).
2. Navigate to **Render.com** > Connect GitHub > Select **New Web Service**.
3. Set Build Command: `npm install` | Start Command: `npm start`.
4. Inject the `.env` Variables under "Environment":
   *   `NODE_ENV` = `production`
   *   `EMAIL_USER` 
   *   `EMAIL_PASS`
   *   `ADMIN_EMAIL`

Once Render completes the build, the engine recognizes the `production` state and transitions from sandbox email routing to pure SMTP execution. Your Autoify Marketplace is officially live.

---

## 🤝 Community & Support

> **Founder & Architectural Lead: Mustakim Shaikh**
> 
> "I built Autoify to bridge the gap between expensive enterprise automation tools and the developer's need for control. This is the playground where AI meets pure efficiency."

<div align="center">
  <a href="https://github.com/MustakimShaikh01">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://linkedin.com/in/mustakim-sh">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
</div>

---

<p align="center"><i>If this marketplace helped you scale your agency, please leave a ⭐️ on the repository!</i></p>
