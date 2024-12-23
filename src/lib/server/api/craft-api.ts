import { Craft_API, CRAFT_TOKEN } from '$env/static/private';

export async function fetchCraftApi(requestBody: any) {
	const apiHeaders = new Headers();
	apiHeaders.append('content-type', 'application/json');

	const apiRequest = new Request(Craft_API, {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			Authorization: `Bearer ${CRAFT_TOKEN}`
		},
		body: JSON.stringify(requestBody)
	});

	try {
		const response = await fetch(apiRequest);
		if (!response.ok) {
			throw new Error(`Response Error: ${response.status} ${response.statusText}`);
		}
		return response;
	} catch (error) {
		console.error(error);
	}
}
