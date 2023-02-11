<script lang="ts">
  import { animate, stagger, inView } from 'motion';
  import { onMount } from 'svelte';

  let wrapper: HTMLElement;
  let xSides: HTMLDivElement[] = [];

  onMount(() => {
    inView(wrapper, () => {
      animate(
        xSides,
        { height: [0, wrapper.clientHeight + 'px'] },
        { delay: stagger(0.5, { start: 0.7 }), duration: 2 }
      );
    });
  });
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
