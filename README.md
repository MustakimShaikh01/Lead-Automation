<div align="center">
  <img src="https://img.shields.io/badge/Private_LLM-Ready-58a6ff?style=for-the-badge&logo=openai&logoColor=white" alt="Private LLM" />
  <img src="https://img.shields.io/badge/React_&_GSAP-Interactive-bc8cff?style=for-the-badge&logo=react&logoColor=white" alt="Interactive Frontend" />
  <img src="https://img.shields.io/badge/Status-Production_Ready-3fb950?style=for-the-badge&logo=rocket&logoColor=white" alt="Production Ready" />
  
  <br />
  <br />

  <h1 align="center">⚡ Autoify: The Autonomous AI Agency & Lead Automation Infrastructure</h1>

  <p align="center">
    <strong>A high-ticket SaaS marketplace & portfolio built for Generative AI Engineers to license templates, automate workflows, and deploy private LLMs.</strong>
  </p>

  <p align="center">
    Built & Maintained with ❤️ by <strong>Mustakim Shaikh</strong>
  </p>
</div>

<hr />

## 🚀 Overview

**Autoify** is an enterprise-grade Lead Automation and AI Services platform. It completely replaces the need for tools like Zapier or Make by acting as an autonomous backend hub that instantly intercepts leads, syncs them to databases, and dispatches automated, personalized HTML emails. 

Simultaneously, it serves as a **highly interactive Generative AI Engineer portfolio** designed with **Three.js** and **GSAP**. The dark-matter glassmorphic aesthetic is engineered specifically to convert enterprise clients searching for Private LLMs, RAG Architectures, and Multi-Agent Orchestration.

---

## 🔥 Key Features

*   **🌌 Premium 3D Interactive Design:** A breathtaking glassmorphic UI overlaying a living Three.js oceanic background, brought to life via GSAP scroll-triggers. It feels extremely expensive.
*   **📧 Universal Email Engine:** Dynamically switches between an `Ethereal.email` test environment (saving links to the terminal natively so you never spam your personal inbox during dev) and an actual `Google SMTP` server when deployed to production.
*   **🗄️ Zero-Config Database:** Built-in `SQLite3` engine generates and manages your `leads.db` automatically on startup.
*   **🤖 "Trending Automation" Visualizers:** Custom CSS flowchart diagrams demonstrating the architectural logic of AI Voice Bots, Tier-1 AI Ticket Support, and Secure LLM integrations.
*   **💰 Automated Monetization:** Includes a multi-tier subscription engine (Basic, Pro, Elite LLM) tied natively to the backend interception engine.
*   **🚀 Render-Ready Launch:** Seamlessly switch between testing to production. Full `.env` and `.gitignore` integration to protect your security keys inherently.

---

## 🛠️ Technology Stack

| Architecture / Component | Technology Executed |
| :--- | :--- |
| **Frontend UI/UX** | Pure HTML5, Vanilla CSS3, Vanta.js (Three.js), GSAP |
| **Backend API** | Node.js, Express.js |
| **Email Subsystem** | Nodemailer (Ethereal for Dev / Gmail SMTP for Prod) |
| **Database** | SQLite3 |
| **Environment** | Dotenv, cross-env logic |
| **Security** | Process.env architecture |

---

## 📦 Getting Started & Installation

You can get this massive AI infrastructure running locally on your machine in under 60 seconds. 

### 1. Clone the Repository
```bash
git clone https://github.com/MustakimShaikh01/Lead-Automation.git
cd Lead-Automation
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Development Environment
By default, the application runs entirely locally utilizing Ethereal for testing. However, to deploy it into the real world, create a `.env` file in the root directory:

```env
NODE_ENV=development
EMAIL_USER=your_gmail_address@gmail.com
EMAIL_PASS=your_16_digit_app_password
ADMIN_EMAIL=your_admin_inbox@example.com
```

### 4. Ignite the Server
```bash
npm start
```
*The server will boot up at `http://localhost:3000`. Navigate there to interact with the Three.js ecosystem and test the lead automation form at the bottom of the page!*

---

## 📡 Testing the Ethereal Email System Locally

If you submit a lead through the frontend while `NODE_ENV` is set to `development` (or missing), the system intercepts it and prevents you from being charged or flagged by Gmail. 

Open your terminal. You will see a magical hyperlink generated:
```
--- 🚀 New Subscription Request ---
Name:    Elon
Email:   elon@tesla.com
Plan:    Enterprise LLM Build

✅ User saved securely to DB.
[TEST EMAIL ACCOUNT INITIATED]

📨 Email successfully sent to: elon@tesla.com
👀 PREVIEW INBOX LINK: https://ethereal.email/message/xxxxx
```
**Click the Ethereal link directly in your terminal** to view the dynamically generated, heavy HTML welcome-emails exactly as the client would receive them.

---

## ☁️ Deploying to Render.com

This project is explicitly engineered to be pushed to Render for free hosting.

1. Connect your GitHub repository to **Render.com** (Select *New Web Service*).
2. Set the Build Command to `npm install` and the Start Command to `npm start`.
3. Under **Environment Variables**, you must add:
   *   `NODE_ENV` (Set strictly to: `production`)
   *   `EMAIL_USER` 
   *   `EMAIL_PASS` (MUST be a Google App Password, not your standard login)
   *   `ADMIN_EMAIL`

As soon as Render boots, the server detects the `production` flag and permanently overrides the Ethereal test engine, replacing it with the real SMTP server. You are now live.

---

## 👨‍💻 About Minimum Viable Architecture 

> **Designed by Mustakim Shaikh | Generative AI Engineer**
> *MCA Graduate (8.02 CGPA) | RAG Architect | Multi-Agent Specialist*
> 
> "I built this open-source template to give Generative AI engineers a production-grade UI to sell high-ticket enterprise services. The combination of Three.js GSAP interactions with a brutally efficient Express/SQLite backend creates an asset that converts."

<div align="center">
  <a href="https://github.com/MustakimShaikh01">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://linkedin.com/in/mustakim-sh">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="mailto:mustakim.shaikh.prof@gmail.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
</div>

---

<p align="center"><i>If this architecture helped you scale your agency or secure your next enterprise AI role, <b>please leave a ⭐️ on the repository!</b></i></p>
