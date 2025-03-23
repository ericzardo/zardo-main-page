import { addNewsletterSubscriber } from '@/lib/notion/services/newsletter';

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