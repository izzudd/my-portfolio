<script lang="ts">
  import { onMount } from 'svelte';
  import { inView, animate, stagger, type AnimationControls } from 'motion';
  import { splashFinished } from '@store/pageLoading';

  interface Props {
    topBorder?: boolean;
    bottomBorder?: boolean;
    children?: import('svelte').Snippet;
  }

  let { topBorder = true, bottomBorder = true, children }: Props = $props();

  let topEl: HTMLDivElement | undefined = $state();
  let bottomEl: HTMLDivElement | undefined = $state();

  let ySides = $derived([topEl, bottomEl].filter(Boolean) as HTMLDivElement[]);
  let wrapperWidth = $state(0);

  let animation: AnimationControls | undefined = $state();

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

  $effect(() => {
    $splashFinished && animation?.play();
  });
</script>

{#if topBorder}<div class="y-side" bind:this={topEl}></div>{/if}
<div bind:clientWidth={wrapperWidth}>
  {@render children?.()}
</div>
{#if bottomBorder}<div class="y-side" bind:this={bottomEl}></div>{/if}

<style>
  @reference "../app.css";
  .y-side {
    @apply h-1 bg-black;
  }
</style>
