<script lang="ts">
  // motion 14 dropped `timeline()`; the same choreography is expressed with
  // plain `animate()` calls plus `stagger(..., { startDelay })`.
  import { animate, stagger } from 'motion';
  import { loadContent, loading, splashFinished } from '#store/pageLoading.ts';
  import { onMount } from 'svelte';

  const duration = 1;

  function openingAnimation() {
    const horizontal = animate(
      '#splash .line.h',
      { width: [0, '100vw'] },
      { duration, delay: stagger(duration / 6) }
    );

    const vertical = animate(
      '#splash .line.v',
      { height: [0, '100vh'] },
      { duration, delay: stagger(duration / 6, { startDelay: duration / 3 }) }
    );

    return Promise.all([horizontal.finished, vertical.finished]);
  }

  onMount(() => {
    loadContent(() => openingAnimation());
  });

  async function openSplash() {
    const horizontal = animate(
      '#splash .line.h',
      { width: ['100vw', 0] },
      { duration, delay: stagger(duration / 6, { from: 'center' }) }
    );

    const vertical = animate(
      '#splash .line.v',
      { height: ['100vh', 0] },
      { duration, delay: stagger(duration / 6) }
    );

    const fade = animate('#splash', { opacity: [1, 0] }, { duration: duration / 2 });

    await Promise.all([horizontal.finished, vertical.finished, fade.finished]);
    splashFinished.set(true);
  }

  $effect(() => {
    !$loading && typeof document !== 'undefined' && openSplash();
  });
</script>

{#if !$splashFinished}
  <div
    class="z-50 fixed left-0 top-0 w-screen h-screen flex items-center justify-center bg-stone-200"
    id="splash"
  >
    <div class="font-mono text-center w-screen">
      <div class="line h"></div>
      <div class="inline-block py-2 px-4 relative">
        <div class="line v top-0 left-0"></div>
        <span class="text-6xl font-bold">Zuudd</span>
        <div class="line v right-0 bottom-0"></div>
      </div>
      <div class="line h ml-auto"></div>
      <span class="font-light">Web developer</span>
      <div class="line h mx-auto"></div>
    </div>
  </div>
{/if}

<style>
  @reference "../app.css";
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
