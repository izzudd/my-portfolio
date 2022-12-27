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
  });
</script>

<div class="bg-background text-on-background overflow-x-clip">
  <div class="container mx-auto px-2 h-auto flex gap-2">
    <Navigation />
    <div class="flex-grow">
      <slot />
    </div>
  </div>
</div>
