import type { RequestHandler } from './$types';
import { fetchCraftApi } from '$lib/server/api/craft-api';
import { PUBLIC_APP_URL } from '$env/static/public';

export const POST: RequestHandler = async ({ request }) => {
	const requestContentType: string | null = request.headers.get('content-type');

	const requestOrigin = request.headers.get('origin');

	if (requestOrigin !== PUBLIC_APP_URL) {
		return new Response(JSON.stringify({ error: 'Forbidden: Invalid Origin' }), { status: 403 });
	}

	if (requestContentType !== 'application/json') {
		return new Response(JSON.stringify({ error: 'Unsupported Content-Type' }), { status: 415 });
	}

	const requestBody = await request.json();

	const response: Response | undefined = await fetchCraftApi(requestBody);

	const data = await response?.json();

	return new Response(JSON.stringify(data), {
		status: response?.status,
		headers: {
			'Content-Type': 'application/json'
		}
	});
};
