<script>
  import AOS from 'aos';
  import 'iconify-icon';
  import { applyTheme } from '$lib/ColorGenerator';
  import Navigation from '@components/layout/Navigation.svelte';
  import { onMount } from 'svelte';

  import '../app.css';
  import '../app.postcss';
  import 'aos/dist/aos.css';

  onMount(() => {
    applyTheme('#FED049');

    AOS.init({
      once: true,
    });
  });
</script>

<div class="bg-background text-on-background overflow-x-clip">
  <div class="z-50 fixed top-5 right-5 rotate-45 aspect-square">
    <span class="font-medium py-1 bg-error text-on-error w-full px-5"> Under Construction </span>
  </div>
  <div class="container mx-auto px-2 h-auto flex gap-2">
    <Navigation />
    <div class="flex-grow">
      <slot />
    </div>
  </div>
</div>
