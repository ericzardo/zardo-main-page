import { transporter } from '../config';

interface NotificationEmailOptions {
  to: string;
  subject: string;
  text: string;
}

export async function sendNotificationEmail({ to, subject, text }: NotificationEmailOptions) {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  });
} 