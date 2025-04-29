import { transporter, transporterNoReply } from '../config';

interface NotificationEmailOptions {
  to: string;
  subject: string;
  text?: string;
  html?: string;
  noReply?: boolean;
}

export async function sendNotificationEmail({ to, subject, text, html, noReply = false }: NotificationEmailOptions) {
  try {
    console.log('🟡 Iniciando envio de e-mail');
    console.log('📨 Destinatário:', to);
    console.log('✉️ Assunto:', subject);
    console.log('📤 Usando remetente:', noReply ? process.env.EMAIL_NO_REPLY : process.env.EMAIL_USER);

    const mailOptions = {
      from: noReply ? process.env.EMAIL_NO_REPLY : process.env.EMAIL_USER,
      to,
      subject,
      ...(text && { text }),
      ...(html && { html }),
    };

    const transport = noReply ? transporterNoReply : transporter;

    console.log('⚙️ Configurações SMTP:', transport.options);

    const result = await transport.sendMail(mailOptions);
    console.log('✅ Email enviado com sucesso:', result);
  } catch (err) {
    console.error('❌ Erro ao enviar e-mail:');
    console.error(err);
  }
}
