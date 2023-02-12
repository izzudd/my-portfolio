<script lang="ts">
  import { splashFinished } from '@store/pageLoading';
  import { animate, stagger, inView, type AnimationControls } from 'motion';
  import { onMount } from 'svelte';

  let wrapper: HTMLElement;
  let xSides: HTMLDivElement[] = [];

  let animation: AnimationControls;

  onMount(() => {
    inView(wrapper, () => {
      animation = animate(
        xSides,
        { height: [0, wrapper.clientHeight + 'px', ''] },
        { delay: stagger(0.5), duration: 2.5 }
      );
      animation.pause();
    });
  });

  $: $splashFinished && animation?.play();
</script>

<div class="flex max-w-[100vw]" bind:this={wrapper}>
  <div class="edge"><slot name="left" /></div>
  <div class="x-side" bind:this={xSides[0]} />
  <div class="flex-grow min-h-[4rem]"><slot /></div>
  <div class="x-side" bind:this={xSides[1]} />
  <div class="edge"><slot name="right" /></div>
</div>

<style lang="postcss">
  .edge {
    @apply hidden md:block flex-shrink-0 w-[4rem] min-h-[4rem];
  }

  .x-side {
    @apply hidden md:block w-1 bg-black;
  }
</style>
