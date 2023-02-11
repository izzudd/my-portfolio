<div class="flex max-w-[100vw]">
  <div class="edge"><slot name="left" /></div>
  <div class="x-side" />
  <div class="flex-grow min-h-[4rem]"><slot /></div>
  <div class="x-side" />
  <div class="edge"><slot name="right" /></div>
</div>
<div class="y-side" />

<style lang="postcss">
  .edge {
    @apply hidden md:block flex-shrink-0 w-[4rem] min-h-[4rem];
  }

  .y-side {
    @apply min-w-full h-1 bg-black;
  }

  .x-side {
    @apply hidden md:block min-h-full w-1 bg-black;
  }
</style>
