import { addContact } from '@/lib/notion/services/contact';
import { sendNotificationEmail } from '@/lib/email/services/notifications';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Name, email and message are required' }), 
        { status: 400 }
      );
    }

    // Add to Notion
    await addContact(name, email, message);

    // Send email notification
    await sendNotificationEmail({
      to: process.env.EMAIL_RECEIVER || 'ericszardo@gmail.com',
      subject: 'New Contact Form Submission',
      text: `
        New contact form submission received:

        Name: ${name}
        Email: ${email}
        Message: ${message}

        This contact has been added to your Notion database.
      `.trim(),
    });

    await sendNotificationEmail({
      to: email,
      subject: 'We received your message.',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <p>Thank you for contacting us.</p>
          <p>This email is a confirmation that we have received your message and we will respond to you shortly.</p>

          <p><strong>
            Note: Please do not reply to this email. This mailbox is not monitored.
          </strong></p>


          <p>Best regards,<br/>The Zardo Team</p>

          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;" />

          <p style="font-size: 0.9em;">
            <a href="https://zardo.dev/" style="margin-right: 20px; color: #007bff; text-decoration: none;">Visit our website</a>
            <a href="mailto:eric@zardo.dev" style="color: #007bff; text-decoration: none;">Contact us</a>
          </p>
          <p color: #3b3b3b; font-size: 0.8em;">
            &copy; 2025 Zardo. All rights reserved.
          </p>
        </div>
      `,
      noReply: true,
    });

    return new Response(
      JSON.stringify({ success: true }), 
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process contact form' }), 
      { status: 500 }
    );
  }
}
