<script lang="ts">
  import { onMount } from 'svelte';
  import { inView, animate, stagger } from 'motion';

  export let topBorder = true;
  export let bottomBorder = true;

  let ySides: HTMLDivElement[] = [];
  let wrapperWidth = 0;
  let idx = 0;

  let animFinished = false;

  onMount(async () => {
    inView(ySides[0], () => {
      animate(
        ySides,
        { width: [0, wrapperWidth + 'px'] },
        { easing: 'ease-out', duration: 1, delay: stagger(0.2, { start: 0.5 }) }
      ).finished.then(() => (animFinished = true));
    });
  });

  $: animFinished && ySides.forEach((side) => (side.style.width = wrapperWidth + 'px'));
</script>

{#if topBorder}<div class="y-side" bind:this={ySides[idx++]} />{/if}
<div bind:clientWidth={wrapperWidth}>
  <slot />
</div>
{#if bottomBorder}<div class="y-side" bind:this={ySides[idx++]} />{/if}

<style lang="postcss">
  .y-side {
    @apply h-1 bg-black;
  }
</style>
