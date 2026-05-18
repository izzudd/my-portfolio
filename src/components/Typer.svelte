<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  interface Props {
    texts: string[];
  }

  let { texts }: Props = $props();

  let display = $state('');
  let isMounted = true;

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  async function writeText(text: string, delay: number) {
    for (const letter of text) {
      if (!isMounted) return;
      display += letter;
      await sleep(delay);
    }
  }

  async function deleteText(delay: number) {
    while (display && isMounted) {
      display = display.slice(0, -1);
      await sleep(delay);
    }
  }

  async function loop() {
    let currentIndex = 0;
    while (isMounted) {
      await writeText(texts[currentIndex], 100);
      if (!isMounted) return;
      await sleep(2000);
      if (!isMounted) return;
      await deleteText(50);
      if (!isMounted) return;
      currentIndex = (currentIndex + 1) % texts.length;
    }
  }

  onMount(loop);

  onDestroy(() => {
    isMounted = false;
  });
</script>

{display}<span class="cursor">_</span>

<style>
  @reference "../app.css";
  .cursor {
    animation-name: blink;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;
  }

  @keyframes blink {
    0% {
      @apply opacity-0;
    }
    100% {
      @apply opacity-100;
    }
  }
</style>
