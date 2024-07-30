<script lang="ts">
  import { stagger, timeline } from 'motion';
  import { loadContent, loading, splashFinished } from '@store/pageLoading';
  import { onMount } from 'svelte';

  const duration = 1;

  onMount(() => {
    const openingAnim = timeline([
      ['#splash .line.h', { width: [0, '100vw'] }, { duration: duration, delay: stagger(duration/6) }],
      ['#splash .line.v', { height: [0, '100vh'] }, { at: duration/3, duration: duration, delay: stagger(duration/6) }],
    ]);

    loadContent(() => openingAnim.finished);
  });

  async function openSplash() {
    await timeline([
      [
        '#splash .line.h',
        { width: [null, 0] },
        { duration: duration, delay: stagger(duration/6, { from: 'center' }) },
      ],
      ['#splash .line.v', { height: [null, 0] }, { at: 0, duration: duration, delay: stagger(duration/6) }],
      ['#splash', { opacity: [1, 0] }, { duration: duration/2 }],
    ]).finished;
    splashFinished.set(true);
  }

  $: !$loading && openSplash();
</script>

{#if !$splashFinished}
  <div
    class="z-50 fixed left-0 top-0 w-screen h-screen flex items-center justify-center bg-stone-200"
    id="splash"
  >
    <div class="font-mono text-center w-screen">
      <div class="line h" />
      <div class="inline-block py-2 px-4 relative">
        <div class="line v top-0 left-0" />
        <span class="text-6xl font-bold">Zuudd</span>
        <div class="line v right-0 bottom-0" />
      </div>
      <div class="line h ml-auto" />
      <span class="font-light">Web developer</span>
      <div class="line h mx-auto" />
    </div>
  </div>
{/if}

<style lang="postcss">
  .line {
    @apply bg-black;

    &.h {
      @apply relative w-0 h-1 left-0;
    }

    &.v {
      @apply absolute h-0 w-1;
    }
  }
</style>
