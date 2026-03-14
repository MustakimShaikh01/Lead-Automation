const nodemailer = require('nodemailer');
require('dotenv').config();

// ==========================================
// REAL EMAIL CONFIGURATION
// Configure these in your Render Environment Variables!
// ==========================================
// If this is running in production (Render) and the variables exist, use them.
// Otherwise, fall back to the test Ethereal credentials for local development.

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

let transporter;

if (IS_PRODUCTION) {
  // Use real credentials in production
  /**
   * IMPORTANT: If using Gmail, you MUST use an "App Password" here.
   * Do NOT use your standard login password. 
   * Go to Google Account -> Security -> 2-Step Verification -> App passwords.
   */
  transporter = nodemailer.createTransport({
    service: 'gmail', // You can change this to 'sendgrid' or other services later
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
  console.log('[EMAIL] Configured for PRODUCTION using real credentials.');
} else {
  // Use Ethereal test account in local development
  // We initialize this asynchronously when the app starts
  transporter = null; 
}


/**
 * Initializes the Ethereal test account purely for local testing.
 * This function will completely ignore if NODE_ENV=production.
 */
async function initTestTransporter() {
  if (IS_PRODUCTION) return; // Prevent creating test accounts in prod
  
  const testAccount = await nodemailer.createTestAccount();
  transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, 
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });
  console.log('\n[TEST EMAIL ACCOUNT INITIATED]');
  console.log(`To see all sent emails throughout the demo, visit: https://ethereal.email/login`);
  console.log(`User: ${testAccount.user} | Pass: ${testAccount.pass}\n`);
}

/**
 * Universal Send Email function
 * This handles BOTH local Ethereal testing and Production Gmail sending seamlessly.
 */
async function sendEmail({ to, subject, text, html }) {
  // If local development, ensure the test transporter is ready
  if (!IS_PRODUCTION && !transporter) {
    await initTestTransporter();
  }
  
  try {
    const mailOptions = {
      from: IS_PRODUCTION 
        ? `"Autoify" <${process.env.EMAIL_USER}>` 
        : '"Autoify Local Bot" <automation@demo.com>',
      to,
      subject,
      text,
      html // We can accept HTML now for prettier emails!
    };

    const info = await transporter.sendMail(mailOptions);
    
    // If we sent this via Ethereal (Local), print the URL to preview the email
    if (!IS_PRODUCTION) {
      console.log(`\n📨 Email successfully sent to: ${to}`);
      console.log(`Subject: ${subject}`);
      console.log(`👀 PREVIEW INBOX LINK: ${nodemailer.getTestMessageUrl(info)}\n`);
      return nodemailer.getTestMessageUrl(info);
    } 
    
    // If Production (Render), just log the success
    console.log(`✅ Production Email successfully sent to: ${to}`);
    return true;

  } catch (error) {
    console.error('❌ Error sending email:', error);
    return false;
  }
}

module.exports = { sendEmail, initTestTransporter };
