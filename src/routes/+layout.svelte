<script>
	import '../app.css';
	import {applyTheme} from '$lib/ColorGenerator';
	import Navigation from '@components/layout/Navigation.svelte';
	import { onMount } from 'svelte';

	onMount(() => applyTheme('#835500'))
</script>

<div class="bg-background text-on-background transition-colors duration-500">
	<div class="container mx-auto min-h-screen flex">
		<Navigation />
		<div class="w-full">
			<slot />
		</div>
	</div>
</div>
