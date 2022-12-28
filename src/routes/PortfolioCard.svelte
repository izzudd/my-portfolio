<script lang="ts">
  export let title: string;
  export let desc: String;
  export let alternate = false;
  export let id = 0;
</script>

<div
  class="flex flex-col lg:flex-row items-stretch lg:items-center gap-4 lg:gap-8 text-left pc-{id}"
  class:alternate
>
  <div class="flex-1">
    <h3
      data-aos={alternate ? 'fade-left' : 'fade-right'}
      class="text-xl lg:text-4xl font-bold lg:mb-2"
      data-aos-anchor=".pc-{id}"
    >
      {title}
    </h3>
    <p
      data-aos={alternate ? 'fade-left' : 'fade-right'}
      data-aos-delay="500"
      data-aos-anchor=".pc-{id}"
    >
      {desc}
    </p>
    <a href="/" class="mt-8 inline-block">
      <span class="underline decoration-tertiary text-secondary">Read More</span>
    </a>
  </div>
  <div
    class="flex-1 lg:px-0"
    data-aos={alternate ? 'fade-left' : 'fade-right'}
    data-aos-delay="200"
    data-aos-anchor=".pc-{id}"
  >
    <div
      class="glance border-8 border-secondary-container transition-transform duration-500 w-full aspect-video bg-primary rounded-xl lg:rotate-3 hover:!rotate-0"
    />
  </div>
</div>

<style lang="postcss">
  .alternate {
    @apply lg:flex-row-reverse lg:text-right;

    & .glance {
      @apply lg:-rotate-3;
    }
  }
</style>
