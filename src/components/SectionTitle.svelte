<script lang="ts">
  import HorizontalBorderContainer from './HorizontalBorderContainer.svelte';

  interface Props {
    title: string;
    reverse?: boolean;
    class?: string;
  }

  let { title, reverse = false, class: customClass = '' }: Props = $props();

  let titleElem: Element | undefined = $state();
  let windowWidth: number = $state(0);
  let windowHeight: number = $state(0);
  let scrollPos: number = $state(0);

  const mapNumber = (x: number, a: number, b: number, c: number, d: number) => {
    x = x < a ? a : x;
    x = x > b ? b : x;
    return ((x - a) / (b - a)) * (d - c) + c;
  };

  let titleWidth = $derived(titleElem?.clientWidth ?? 0);
  let titlePos = $derived(scrollPos + (titleElem?.getBoundingClientRect().top ?? 0));
  let repCount = $derived(Math.ceil(windowWidth / titleWidth) + 1 || 10);
  let overflowWidth = $derived(titleWidth * repCount - windowWidth);
  let titleScroll = $derived(
    mapNumber(scrollPos, titlePos - windowHeight, titlePos, 0, overflowWidth - titleWidth / 2) || 0
  );
</script>

<svelte:window
  bind:innerWidth={windowWidth}
  bind:innerHeight={windowHeight}
  bind:scrollY={scrollPos}
/>

<HorizontalBorderContainer>
  <div
    class="title relative text-3xl md:text-5xl font-mono font-bold pr-4 pl-4 py-2 md:py-4 overflow-x-hidden {customClass}"
  >
    <h2 class="w-min invisible px-6 md:px-8 whitespace-nowrap" bind:this={titleElem}>
      {title}
    </h2>
    <div
      class="absolute top-0 py-2 md:py-4 {reverse ? 'right-0' : 'left-0'}"
      style="transform: translate({reverse ? '' : '-'}{overflowWidth / 10 + titleScroll}px);"
    >
      {#each Array(repCount) as _, idx (idx)}
        <span class="px-6 md:px-8 whitespace-nowrap">{title}</span>
      {/each}
    </div>
  </div>
</HorizontalBorderContainer>
