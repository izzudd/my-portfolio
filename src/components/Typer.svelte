<script lang="ts">
  import { onMount } from 'svelte';

  export let texts: string[];

  let display = '';

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  async function writeText(text: string, delay: number) {
    for (const letter of text) {
      display += letter;
      await sleep(delay);
    }
  }

  async function deleteText(delay: number) {
    while (display) {
      display = display.slice(0, -1);
      await sleep(delay);
    }
  }

  async function loop() {
    let currentIndex = 0;
    while (true) {
      await writeText(texts[currentIndex], 100);
      await sleep(2000);
      await deleteText(50);
      currentIndex = (currentIndex + 1) % texts.length;
    }
  }

  onMount(loop);
</script>

{display}<span class="cursor">_</span>

<style lang="postcss">
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
