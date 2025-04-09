import { addNewsletterSubscriber } from '@/lib/notion/services/newsletter';
import { sendNotificationEmail } from "@/lib/email/services/notifications"

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return new Response(
        JSON.stringify({ error: 'Email is required' }), 
        { status: 400 }
      );
    }

    await addNewsletterSubscriber(email);

    await sendNotificationEmail({
      to: email,
      subject: "You're officially on the list! 🎉",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <p>Hi there, You're officially on the list! 🎉</p>

          <p>Thanks for subscribing to Zardo News — you'll now receive updates, exclusive content, and important announcements right in your inbox.</p>

          <p style="color: #999; font-size: 0.9em;">
            If this wasn't you, feel free to ignore this message.
          </p>

          <p>Talk soon,<br/>— The Zardo Team</p>

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
    console.error('Error processing newsletter:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process newsletter' }), 
      { status: 500 }
    );
  }
} 