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
      `,
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
