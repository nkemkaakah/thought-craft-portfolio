require('dotenv').config();    // Load variables from server/.env
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const allowedOrigins = [
  'http://localhost:8080',
  'https://d2wyznm3b2paqi.cloudfront.net',
  'https://nkemka.dev',
  "https://nkemka-dev.onrender.com/",
];

// Allow CORS from your Vite dev server (http://localhost:8080)
// app.use(
//   cors({
//     origin: 'http://localhost:8080'
//   })
// );
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  })
);

// Parse incoming JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message, projectType } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: 'Please provide name, email, and message.' });
  }

  // Create Nodemailer transporter using Gmail SMTP
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,           // smtp.gmail.com
    port: Number(process.env.EMAIL_PORT),   // 465
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,         // your Gmail address
      pass: process.env.EMAIL_PASS          // your App Password
    }
  });

  // Compose email details
  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.RECIPIENT_EMAIL,        // usually same as EMAIL_USER
    subject: `New message from ${name}`,
    text: `
You have a new message from your portfolio contact form:

Name: ${name}
Email: ${email}
Project Type: ${projectType}

Message:
${message}
    `,
    html: `
      <div style="font-family: Arial, sans-serif; background-color: #F5F5F5; padding: 20px;">
        <div style="max-width:600px; margin:0 auto; background-color:#1C0F3F; border-radius:8px; overflow:hidden; color:#fff;">
          <div style="background: linear-gradient(135deg, #9400FF 0%, #FE53BB 100%); padding: 20px; text-align: center;">
            <h2 style="margin:0; font-size: 24px;">✉️ You've Got a New Message</h2>
          </div>
          <div style="padding: 30px;">
            <p style="margin-top:0; font-size: 16px; color: #E0E0E0;">Hello <strong style="color:#FFFFFF;">Nkemka Akah</strong>,</p>
            <hr style="border:none; height:1px; background-color:#333; margin-bottom:24px;" />
            <table style="width:100%; color:#E0E0E0; margin-bottom:16px; font-size:14px;">
              <tr>
                <td style="width:120px; color:#9400FF; font-weight:bold;">Name:</td>
                <td>${name}</td>
              </tr>
              <tr>
                <td style="color:#9400FF; font-weight:bold;">Email:</td>
                <td><a href="mailto:${email}" style="color:#FE53BB; text-decoration:none;">${email}</a></td>
              </tr>
              <tr>
                <td style="color:#9400FF; font-weight:bold;">Project Type:</td>
                <td style="text-transform: capitalize;">${projectType}</td>
              </tr>
            </table>
            <div style="margin-top:24px;">
              <strong style="color:#9400FF; font-size:14px;">Message:</strong>
              <p style="margin-top:8px; font-size:14px; line-height:1.6; color:#E0E0E0;">${message.replace(
                /\n/g,
                '<br/>'
              )}</p>
            </div>
          </div>
          <div style="background-color:#0c111b; text-align:center; padding: 20px;">
            <p style="font-size:12px; color:#888;">Connect with me:</p>
            <a href="https://www.linkedin.com/in/nkemka-akah-861408253/" style="margin-right:16px; text-decoration:none;">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" alt="LinkedIn" width="20" height="20" style="vertical-align:middle; filter: invert(85%) sepia(41%) saturate(552%) hue-rotate(258deg) brightness(93%) contrast(91%);" />
              <span style="margin-left:6px; font-size:12px; color:#FE53BB;">LinkedIn</span>
            </a>
            <a href="https://github.com/nkemkaakah" style="text-decoration:none;">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" alt="GitHub" width="20" height="20" style="vertical-align:middle; filter: invert(85%) sepia(41%) saturate(552%) hue-rotate(258deg) brightness(93%) contrast(91%);" />
              <span style="margin-left:6px; font-size:12px; color:#9400FF;">GitHub</span>
            </a>
            <p style="font-size:11px; color:#555; margin-top:16px;">© 2025 Nkemka Akah. All rights reserved.</p>
          </div>
        </div>
      </div>
    `
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Error sending email' });
  }
});

// Start the server on port 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Express backend running at http://localhost:${PORT}`);
});
