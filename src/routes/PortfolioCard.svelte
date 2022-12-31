<script lang="ts">
  export let title: string;
  export let desc: String;
  export let target: string;
  export let image: string;
  export let alternate = false;
  export let id = 0;
</script>

<div
  class="flex flex-col lg:flex-row items-stretch lg:items-center gap-4 lg:gap-8 text-left pc-{id}"
  class:alternate
>
  <div class="flex-grow">
    <h3
      data-aos={alternate ? 'fade-left' : 'fade-right'}
      class="text-2xl lg:text-4xl font-bold lg:mb-2"
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
    <div
      data-aos={alternate ? 'fade-left' : 'fade-right'}
      data-aos-delay="1000"
      data-aos-anchor=".pc-{id}"
    >
      <a
        href={target}
        class="hidden lg:inline-block mt-12 font-bold no-underline bg-tertiary-container hover:bg-tertiary text-on-tertiary-container hover:text-on-tertiary rounded-full px-6 py-2"
        >Learn More</a
      >
    </div>
  </div>
  <a
    href={target}
    class="block xl:max-w-[50%] lg:max-w-lg lg:px-0"
    data-aos={alternate ? 'fade-left' : 'fade-right'}
    data-aos-delay="200"
    data-aos-anchor=".pc-{id}"
  >
    <img
      src={image}
      alt={title}
      class="glance transition-all duration-500 w-full aspect-video bg-tertiary rounded-xl lg:rotate-3 hover:!rotate-0"
    />
  </a>
</div>

<style lang="postcss">
  .alternate {
    @apply lg:flex-row-reverse lg:text-right;

    & .glance {
      @apply lg:-rotate-3;
    }
  }
</style>
