<script lang="ts">
  export let title: string;
  export let reverse: boolean = false;
  let customClass = '';
  export { customClass as class };

  let titleElem: Element;
  let windowWidth: number;
  let windowHeight: number;
  let scrollPos: number;

  const mapNumber = (x: number, a: number, b: number, c: number, d: number) => {
    x = x < a ? a : x;
    x = x > b ? b : x;
    return ((x - a) / (b - a)) * (d - c) + c;
  };

  $: titleWidth = +titleElem?.clientWidth;
  $: titlePos = scrollPos + +titleElem?.getBoundingClientRect().top;
  $: repCount = Math.ceil(windowWidth / titleWidth) + 1 || 10;
  $: overflowWidth = titleWidth * repCount - windowWidth;
  $: titleScroll = mapNumber(
    scrollPos,
    titlePos - windowHeight,
    titlePos,
    0,
    overflowWidth - titleWidth / 2
  );
</script>

<svelte:window
  bind:innerWidth={windowWidth}
  bind:innerHeight={windowHeight}
  bind:scrollY={scrollPos}
/>

<div
  class="title relative text-5xl font-mono font-bold pr-24 pl-4 py-4 border-b-4 border-black overflow-x-hidden {customClass}"
>
  <h2 class="w-min invisible px-8" bind:this={titleElem}>
    {title}
  </h2>
  <div
    class="absolute top-0 py-4 {reverse ? 'right-0' : 'left-0'}"
    style="transform: translate({reverse ? '' : '-'}{overflowWidth / 10 + titleScroll}px);"
  >
    {#each Array(repCount) as _, idx (idx)}
      <span class="px-8">{title}</span>
    {/each}
  </div>
</div>
