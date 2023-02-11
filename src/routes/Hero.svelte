<script>
  import GridContainer from '@component/GridContainer.svelte';
  import Groovy from '@component/Illustration/Groovy.svelte';
  import LinkButton from '@component/LinkButton.svelte';
  import Icon from '@iconify/svelte';
  import { stagger, timeline } from 'motion';
  import { onMount } from 'svelte';

  onMount(() => {
    timeline([
      [
        '#hero h1 span:not(.wrapper)',
        { transform: ['translate(0, 16rem)', 'translate(0, 0)'] },
        { duration: 0.5, easing: 'ease-in-out', delay: stagger(0.07) },
      ],
      [
        '#hero a',
        { transform: ['translate(4rem, -4rem)', 'translate(4px, -4px)', ''], opacity: [0, 1] },
        {
          at: '+0.5',
          duration: 0.8,
          delay: stagger(0.2),
          transform: {
            offset: [0, 0.99, 1],
            easing: [0.51, -0.3, 1, 0.08],
          },
          opacity: {
            offset: [0, 0.01],
          },
        },
      ],
      ['#hero p', { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.2) }],
    ]);
  });
</script>

<section id="hero" class="bg-stone-200 overflow-x-hidden">
  <GridContainer>
    <div
      class="max-w-full min-h-screen container py-8 px-6 mx-auto flex items-center justify-center"
    >
      <div class="flex-shrink-0">
        <p class="font-mono opacity-60 text-xl">// Web Developer</p>
        <h1 class="text-6xl md:text-8xl font-bold font-mono overflow-hidden">
          <span class="wrapper overflow-hidden inline-block"
            >{#each 'Daffa' as letter}<span class="inline-block">{letter}</span>{/each}</span
          >
          <br />
          <span class="wrapper overflow-hidden"
            >{#each 'Izzud' as letter}<span class="inline-block">{letter}</span>{/each}</span
          >{#each 'din' as letter}<span class="inline-block">{letter}</span>{/each}
        </h1>
        <p class="text-xl md:text-2xl mt-12">I build amazing things on the web.</p>
        <div class="mt-12 flex flex-col md:flex-row justify-between gap-4">
          <LinkButton href="#contact">Get in touch</LinkButton>
          <div class="social w-fit ml-auto flex flex-row-reverse text-4xl text-white">
            <a
              class="floating bg-blue-600 hover:!border-blue-600"
              href="https://www.linkedin.com/in/daffa-izzuddin/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="carbon:logo-linkedin" />
            </a>
            <a
              class="floating bg-gray-800 hover:!border-gray-800"
              href="https://github.com/izzudd"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="carbon:logo-github" />
            </a>
            <a
              class="floating bg-amber-600 hover:!border-amber-600"
              href="mailto:izzudd@invasikode.com"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="material-symbols:alternate-email" />
            </a>
          </div>
        </div>
      </div>
      <div class="hidden lg:block w-1/2 flex-shrink">
        <Groovy />
      </div>
    </div>
  </GridContainer>
</section>

<style lang="postcss">
  .social a {
    @apply flex items-center p-2 border-4 border-black;
  }
</style>
