const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./db');
require('dotenv').config();

// Now using our universal sender that switches between test/prod automatically
const { sendEmail } = require('./emailService');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static frontend files from 'client' folder
app.use(express.static(path.join(__dirname, '../client')));

// POST endpoint for new leads
app.post('/api/lead', (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  const selectedPlan = phone;

  console.log(`\n--- 🚀 New Subscription Request ---`);
  console.log(`Name:    ${name}\nEmail:   ${email}\nPlan:    ${selectedPlan}\nMessage: ${message}`);

  // 1. Database Operations - Save the Lead
  db.run(
    'INSERT INTO leads (name, email, phone, message) VALUES (?, ?, ?, ?)',
    [name, email, selectedPlan, message],
    function(err) {
      if (err) {
        console.error('Database error:', err.message);
        return res.status(500).json({ error: 'Failed to process lead correctly.' });
      }
      
      console.log(`✅ User saved securely to DB. (${selectedPlan})`);

      // 2. Trigger Emails (Fire & Forget, let the background take care of it)
      triggerAutomationFlow(name, email, selectedPlan, message).catch(console.error);

      // 3. Immediately respond to UI
      res.json({ success: true, message: 'Automation loop successfully triggered!' });
    }
  );
});

// The meat of the automation
async function triggerAutomationFlow(name, customerEmail, plan, message) {
  // A. Auto-respond to the customer directly (Dynamic based on selected plan)
  await sendEmail({
    to: customerEmail,
    subject: `Welcome to Autoify! Your access to ${plan} is confirmed.`,
    text: `Hi ${name},\n\nYour purchase of ${plan} is complete. You can log into your dashboard using this email to download your templates instantly.`,
    html: `
      <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; padding: 30px; border-radius: 8px; border-top: 5px solid #58a6ff;">
          <h2 style="color: #0d1117;">Welcome to Autoify! ⚡</h2>
          <p style="font-size: 16px; color: #333;">Hi <strong>${name}</strong>,</p>
          <p style="font-size: 16px; color: #333;">We successfully received your request for the <strong>${plan}</strong>.</p>
          <p style="font-size: 16px; color: #333;">Your automation templates are ready to be installed into your workspace.</p>
          <a href="#" style="background: #bc8cff; color: #fff; padding: 12px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin-top: 15px; font-weight: bold;">Access Your Dashboard</a>
          <hr style="margin-top: 30px; border: none; border-top: 1px solid #eee;" />
          <p style="color: #888; font-size: 12px;">This is an automated message from your Autoify system.</p>
        </div>
      </div>
    `
  });

  // B. Notify the business owner simultaneously
  const adminEmail = process.env.ADMIN_EMAIL || 'owner@business.com';
  await sendEmail({
    to: adminEmail, 
    subject: `💰 SALE: New Subscription (${plan})`,
    text: `A new client has subscribed to Autoify.\n\n--- LEAD DETAILS ---\nName: ${name}\nEmail: ${customerEmail}\nPlan: ${plan}\nMessage: ${message || 'N/A'}\n\nLog in to the dashboard to respond.`,
  });
  
  console.log(`✅ All automated sequences complete!`);
}

// Global hook
app.listen(PORT, () => {
  console.log(`\n================================`);
  console.log(`🎯 Server actively listening!`);
  console.log(`🌍 http://localhost:${PORT}`);
  console.log(`================================`);
}).on('error', (err) => {
  console.error('SERVER ERROR:', err.message);
});
