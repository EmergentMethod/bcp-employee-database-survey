/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
	watchSchema: {
		url: 'env:PUBLIC_CRAFT_API',
		headers: {
			Authorization(env) {
				return `Bearer ${env.PUBLIC_CRAFT_TOKEN}`;
			}
		}
	},
	plugins: {
		'houdini-svelte': {
			forceRunesMode: true
		}
	}
};

export default config;
