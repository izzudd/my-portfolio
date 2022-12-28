<script lang="ts">
  import PortfolioCard from './PortfolioCard.svelte';

  const portfolios = [
    { title: 'Invasikode', desc: 'web design and development', target: '/' },
    { title: 'Sifana', desc: 'web design and development', target: '/' },
    { title: "D'Embung Park", desc: 'front end web development', target: '/' },
    { title: 'ERGEBE', desc: 'web design and development', target: '/' },
  ];
</script>

<section id="portfolio" class="relative z-10 w-full lg:flex mt-8 py-12">
  <div data-aos="title-anim" class="mb-12 lg:mb-0 lg:mr-12 sticky left-2 bottom-10 self-end">
    <h2
      class="font-bold text-3xl text-right lg:text-left lg:[writing-mode:vertical-rl] lg:rotate-180"
    >
      My Latest Works
    </h2>
  </div>
  <div data-aos="title-anim" class="aos-animate" />
  <div class="flex-grow flex flex-col gap-16 lg:gap-32 ">
    {#each portfolios as { title, desc, target }, i}
      <PortfolioCard {title} {desc} {target} alternate={i % 2 === 0} id={i} />
    {/each}
  </div>
</section>
