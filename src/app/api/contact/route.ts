export async function POST(request: Request) {
  try {
    const { name, email, message, language = "pt" } = await request.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Name, email and message are required' }), 
        { status: 400 }
      );
    }

    const webhookURL = process.env.N8N_CONTACT_WEBHOOK_URL;

    if (!webhookURL) {
      console.error('N8N_CONTACT_WEBHOOK_URL environment variable is not set.');
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500 }
      );
    }

    const formData = { name, email, message, language };

    const response = await fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error(`Error calling n8n webhook: ${response.status} ${response.statusText}`, errorData);
      return new Response(
        JSON.stringify({ error: 'Failed to process contact form via webhook' }),
        { status: response.status || 500 }
      );
    }

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
