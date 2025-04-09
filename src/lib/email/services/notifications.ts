import { transporter, transporterNoReply } from '../config';

interface NotificationEmailOptions {
  to: string;
  subject: string;
  text?: string;
  html?: string;
  noReply?: boolean;
}

export async function sendNotificationEmail({ to, subject, text, html, noReply = false }: NotificationEmailOptions) {
  const mailOptions = {
    from: noReply ? process.env.EMAIL_NO_REPLY : process.env.EMAIL_USER,
    to,
    subject,
    ...(text && { text }), // só adiciona se tiver `text`
    ...(html && { html }), // só adiciona se tiver `html`
  };
  
  const transport = noReply ? transporterNoReply : transporter;
  await transport.sendMail(mailOptions);
} 