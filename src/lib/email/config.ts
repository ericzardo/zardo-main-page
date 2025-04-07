import nodemailer from 'nodemailer';


let transporterConfig = {};

if (process.env.NODE_ENV === 'production') {
  if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || process.env.SMTP_USER || process.env.SMTP_PASS) {
    throw new Error('Missing SMTP credentials.');
  }
  
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
  // Configuração para desenvolvimento (usando Gmail)
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

// O destinatário será sempre contact@zardo.dev em produção
// e o valor de CONTACT_EMAIL em desenvolvimento (se você quiser testar para outro lugar)
export const contactEmail = process.env.NODE_ENV === 'production' ? 'contact@zardo.dev' : process.env.EMAIL_RECEIVER;