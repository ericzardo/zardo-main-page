import nodemailer from 'nodemailer';


let transporterConfig = {};

if (process.env.NODE_ENV === 'production') {  
  transporterConfig = {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT || 587,
    secure: process.env.SMTP_SECURE === 'true' || true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  };
} else {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error('Email credentials not configured for development (.env.local)');
  }
  transporterConfig = {
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  };
}

export const transporter = nodemailer.createTransport(transporterConfig);