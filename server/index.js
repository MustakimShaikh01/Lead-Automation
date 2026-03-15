const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./db');
require('dotenv').config();

const { sendEmail } = require('./emailService');

const compression = require('compression');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const xss = require('xss');

const app = express();
const PORT = process.env.PORT || 3000;

// === SECURITY STACK ===
app.use(
  helmet({
    contentSecurityPolicy: false
  })
);

app.use(hpp());
app.disable('x-powered-by');

// === RATE LIMIT ===
const leadLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: 'Too many requests. Please try again later.' }
});

app.use('/api/lead', leadLimiter);

// === PERFORMANCE ===
app.use(compression());
app.use(cors());
app.use(express.json());

// === XSS SANITIZER ===
app.use((req, res, next) => {
  const sanitize = (obj) => {
    if (!obj) return;
    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] === 'string') {
        obj[key] = xss(obj[key]);
      }
    });
  };

  sanitize(req.body);
  sanitize(req.query);
  sanitize(req.params);

  next();
});

// === STATIC FILES ===
const cacheTime = 31536000000;

app.use(
  '/assets',
  express.static(path.join(__dirname, '../client/assets'), {
    maxAge: cacheTime
  })
);

app.use(
  express.static(path.join(__dirname, '../client'), {
    maxAge: 86400000
  })
);



// =====================================
// EMAIL TEMPLATE
// =====================================
function generateWelcomeEmail(name, plan) {
  return `
  <div style="font-family:Arial,Helvetica,sans-serif;background:#f4f6fb;padding:40px 20px;">
  
    <div style="max-width:600px;margin:auto;background:#ffffff;border-radius:10px;
    overflow:hidden;box-shadow:0 8px 25px rgba(0,0,0,0.05);">

      <div style="background:#0d1117;padding:25px;text-align:center;">
        <h1 style="color:#ffffff;margin:0;font-size:22px;">⚡ Autoify</h1>
      </div>

      <div style="padding:35px 30px;">

        <h2 style="margin-top:0;color:#111;font-size:22px;">
          Welcome aboard, ${name} 🎉
        </h2>

        <p style="color:#555;font-size:15px;line-height:1.6;">
          Your request for the <strong>${plan}</strong> plan has been successfully received.
        </p>

        <p style="color:#555;font-size:15px;line-height:1.6;">
          Your automation templates are now ready inside your dashboard.
        </p>

        <div style="text-align:center;margin:35px 0;">
          <a href="https://yourdomain.com/dashboard"
          style="background:#6c63ff;color:#ffffff;padding:14px 28px;border-radius:6px;
          text-decoration:none;font-weight:bold;font-size:15px;">
          Open Dashboard
          </a>
        </div>

        <p style="color:#555;font-size:14px;">
          If you need help, simply reply to this email.
        </p>

        <p style="color:#111;font-size:15px;margin-top:25px;">
          — The Autoify Team
        </p>

      </div>

      <div style="background:#f7f7f7;padding:20px;text-align:center;">
        <p style="margin:0;color:#888;font-size:12px;">
          © ${new Date().getFullYear()} Autoify. All rights reserved.
        </p>

        <p style="margin-top:6px;color:#aaa;font-size:12px;">
          This is an automated system email.
        </p>
      </div>

    </div>

  </div>
  `;
}



// === LEAD API ===
app.post('/api/lead', (req, res) => {

  const { name, email, phone, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  const selectedPlan = phone;

  console.log(`\n--- 🚀 New Subscription Request ---`);
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Plan: ${selectedPlan}`);
  console.log(`Message: ${message}`);

  db.run(
    'INSERT INTO leads (name, email, phone, message) VALUES (?, ?, ?, ?)',
    [name, email, selectedPlan, message],

    function (err) {

      if (err) {
        console.error('Database error:', err.message);
        return res.status(500).json({ error: 'Failed to process lead correctly.' });
      }

      console.log(`✅ User saved securely to DB. (${selectedPlan})`);

      triggerAutomationFlow(name, email, selectedPlan, message).catch(console.error);

      res.json({
        success: true,
        message: 'Automation loop successfully triggered!'
      });

    }
  );

});



// === AUTOMATION FLOW ===
async function triggerAutomationFlow(name, customerEmail, plan, message) {

  // CUSTOMER EMAIL
  await sendEmail({

    to: customerEmail,

    subject: `Welcome to Autoify! Your access to ${plan} is confirmed.`,

    text: `Hi ${name},

Your purchase of ${plan} is confirmed.
Login to your dashboard to access your automation templates.`,

    html: generateWelcomeEmail(name, plan)

  });


  // ADMIN EMAIL
  const adminEmail = process.env.ADMIN_EMAIL || 'owner@business.com';

  await sendEmail({

    to: adminEmail,

    subject: `💰 SALE: New Subscription (${plan})`,

    text: `A new client has subscribed to Autoify.

--- LEAD DETAILS ---
Name: ${name}
Email: ${customerEmail}
Plan: ${plan}
Message: ${message || 'N/A'}

Log in to the dashboard to respond.`

  });

  console.log(`✅ All automated sequences complete!`);

}



// === SERVER START ===
app.listen(PORT, () => {

  console.log(`\n================================`);
  console.log(`🎯 Server actively listening!`);
  console.log(`🌍 http://localhost:${PORT}`);
  console.log(`================================`);

}).on('error', (err) => {

  console.error('SERVER ERROR:', err.message);

});