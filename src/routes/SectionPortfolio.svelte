<script lang="ts">
  import PortfolioCard from './PortfolioCard.svelte';

  const portfolios = [
    { title: 'Invasikode', desc: 'web design and development' },
    { title: 'Sifana', desc: 'web design and development' },
    { title: "D'Embung Park", desc: 'front end web development' },
    { title: 'ERGEBE', desc: 'web design and development' },
  ];
</script>

<section id="portfolio" class="relative z-10 w-full lg:flex mt-8">
  <div data-aos="title-anim" class="mb-12 lg:mb-0 lg:mr-12 sticky left-2 top-10 self-start">
    <h2
      class="font-bold text-3xl text-right lg:text-left lg:[writing-mode:vertical-rl] lg:rotate-180"
    >
      My Latest Works
    </h2>
  </div>
  <div data-aos="title-anim" class="aos-animate" />
  <div class="flex-grow flex flex-col gap-16 lg:gap-32 ">
    {#each portfolios as { title, desc }, i}
      <PortfolioCard {title} {desc} alternate={i % 2 === 0} id={i} />
    {/each}
  </div>
</section>
