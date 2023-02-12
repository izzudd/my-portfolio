<script lang="ts">
  import { onMount } from 'svelte';
  import { inView, animate, stagger, type AnimationControls } from 'motion';
  import { splashFinished } from '@store/pageLoading';

  export let topBorder = true;
  export let bottomBorder = true;

  let ySides: HTMLDivElement[] = [];
  let wrapperWidth = 0;
  let idx = 0;

  let animation: AnimationControls;

  onMount(async () => {
    inView(ySides[0], () => {
      animation = animate(
        ySides,
        { width: [0, '100%'] },
        { easing: 'ease-out', duration: 1, delay: stagger(0.2, { start: 0.5 }) }
      );
      animation.pause();
    });
  });

  $: $splashFinished && animation?.play();
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
