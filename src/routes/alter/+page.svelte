<script>
  import { applyTheme } from '$lib/ColorGenerator';
  import UnderConstruction from '@components/layout/UnderConstruction.svelte';
  import { currentColor } from '@store/ThemeColor';
  import { onMount, onDestroy } from 'svelte';

  onMount(() => applyTheme($currentColor, true));
  onDestroy(() => applyTheme($currentColor));
</script>

<UnderConstruction alter={true} />
