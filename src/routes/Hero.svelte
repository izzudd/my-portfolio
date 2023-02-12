<script lang="ts">
  import GridContainer from '@component/GridContainer.svelte';
  import Groovy from '@component/Illustration/Groovy.svelte';
  import LinkButton from '@component/LinkButton.svelte';
  import Icon from '@iconify/svelte';
</script>

<section id="hero" class="bg-stone-200 overflow-x-hidden">
  <GridContainer>
    <div
      class="max-w-full min-h-screen container py-8 px-6 mx-auto flex items-center justify-center"
    >
      <div class="flex-shrink-0">
        <p class="font-mono opacity-60 text-xl">// Web Developer</p>
        <h1 class="text-6xl md:text-8xl font-bold font-mono">
          Daffa<br /><span class="underline decoration-amber-700">Izzudd</span>in
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
