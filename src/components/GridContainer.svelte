<script lang="ts">
  import { run } from 'svelte/legacy';

  import { splashFinished } from '@store/pageLoading';
  import { animate, stagger, inView, type AnimationControls } from 'motion';
  import { onMount } from 'svelte';
  interface Props {
    left?: import('svelte').Snippet;
    children?: import('svelte').Snippet;
    right?: import('svelte').Snippet;
  }

  let { left, children, right }: Props = $props();

  let wrapper: HTMLElement | undefined = $state();
  let xSides: HTMLDivElement[] = $state([]);

  let animation: AnimationControls | undefined = $state();

  onMount(() => {
    inView(wrapper!, () => {
      animation = animate(
        xSides,
        { height: [0, wrapper!.clientHeight + 'px', ''] },
        { delay: stagger(0.5), duration: 2.5 }
      );
      animation.pause();
    });
  });

  run(() => {
    $splashFinished && animation?.play();
  });
</script>

<div class="flex max-w-[100vw]" bind:this={wrapper}>
  <div class="edge">{@render left?.()}</div>
  <div class="x-side" bind:this={xSides[0]}></div>
  <div class="flex-grow min-h-[4rem]">{@render children?.()}</div>
  <div class="x-side" bind:this={xSides[1]}></div>
  <div class="edge">{@render right?.()}</div>
</div>

<style>
  @reference "../app.css";
  .edge {
    @apply hidden md:block flex-shrink-0 w-[4rem] min-h-[4rem];
  }

  .x-side {
    @apply hidden md:block w-1 bg-black;
  }
</style>
