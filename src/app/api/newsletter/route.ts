export async function POST(request: Request) {
  try {
    const { email, language = "pt" } = await request.json();

    if (!email) {
      return new Response(
        JSON.stringify({ error: 'Email is required' }), 
        { status: 400 }
      );
    }

    const webhookURL = process.env.N8N_NEWSLETTER_WEBHOOK_URL;

    if (!webhookURL) {
      console.error('N8N_NEWSLETTER_WEBHOOK_URL environment variable is not set.');
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500 }
      );
    }

    const subscriberData = { email, language };

    const response = await fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subscriberData),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error(`Error calling n8n newsletter webhook: ${response.status} ${response.statusText}`, errorData);
      return new Response(
        JSON.stringify({ error: 'Failed to process newsletter subscription via webhook' }),
        { status: response.status || 500 }
      );
    }

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