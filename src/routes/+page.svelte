<script lang="ts">
import type { PageData } from './$types';
import type { employee} from '$lib/types/types';

let { data }: { data: PageData } = $props();

let employeeData: employee = $derived(data?.employeeEntries[0]);

</script>

<h1>Welcome to SvelteKit</h1>
<p class="text-lg">
	Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
</p>
