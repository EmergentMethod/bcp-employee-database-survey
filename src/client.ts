import { HoudiniClient } from '$houdini';
import { PUBLIC_API_PROXY } from '$env/static/public';

export default new HoudiniClient({
	url: PUBLIC_API_PROXY,

	fetchParams() {
		return {
		};
	}
});
