<script lang="ts">
  import { run } from 'svelte/legacy';

  import { onMount } from 'svelte';
  import { inView, animate, stagger, type AnimationControls } from 'motion';
  import { splashFinished } from '@store/pageLoading';

  interface Props {
    topBorder?: boolean;
    bottomBorder?: boolean;
    children?: import('svelte').Snippet;
  }

  let { topBorder = true, bottomBorder = true, children }: Props = $props();

  let ySides: HTMLDivElement[] = $state([]);
  let wrapperWidth = $state(0);
  let idx = $state(0);

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

  run(() => {
    $splashFinished && animation?.play();
  });
</script>

{#if topBorder}<div class="y-side" bind:this={ySides[idx++]}></div>{/if}
<div bind:clientWidth={wrapperWidth}>
  {@render children?.()}
</div>
{#if bottomBorder}<div class="y-side" bind:this={ySides[idx++]}></div>{/if}

<style>
  @reference "../app.css";
  .y-side {
    @apply h-1 bg-black;
  }
</style>
