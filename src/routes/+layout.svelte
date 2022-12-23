<script>
	import AOS from 'aos';
	import { applyTheme } from '$lib/ColorGenerator';
	import Navigation from '@components/layout/Navigation.svelte';
	import { onMount } from 'svelte';

	import '../app.css';
	import 'aos/dist/aos.css';

	onMount(() => {
		applyTheme('#FED049');
		AOS.init({
			once: true,
		});
	})
</script>

<div class="bg-background text-on-background">
	<div class="container mx-auto min-h-screen flex">
		<Navigation />
		<div class="w-full flex-shrink">
			<slot />
		</div>
	</div>
</div>
