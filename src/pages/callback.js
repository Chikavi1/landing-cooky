import fetch from 'node-fetch';

export async function get({ url }) {
    const code = url.searchParams.get('code');

    if (!code) return new Response('No code', { status: 400 });

    const params = new URLSearchParams({
        client_key: import.meta.env.TIKTOK_CLIENT_KEY,
        client_secret: import.meta.env.TIKTOK_CLIENT_SECRET,
        code,
        grant_type: 'authorization_code'
    });

    const resp = await fetch('https://open-api.tiktok.com/oauth/access_token/', {
        method: 'POST',
        body: params
    });

    const data = await resp.json();

    // Aquí puedes devolver el token, guardarlo en DB, o redirigir a tu app
    return new Response(JSON.stringify(data), { status: 200 });
}