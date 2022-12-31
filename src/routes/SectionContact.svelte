<script>
  import Swing from '@components/illustration/Swing.svelte';

  const delay = 1000;

  const contacts = [
    { icon: 'mdi:linkedin', link: 'https://www.linkedin.com/in/daffa-izzuddin/' },
    { icon: 'mdi:email', link: 'mailto:izzudd@invasikode.com' },
  ];
</script>

<section
  id="contact"
  class="min-h-screen relative z-20 w-full flex flex-col-reverse lg:flex-row lg:items-center justify-center"
>
  <div
    data-aos="zoom-in-right"
    data-aos-delay={delay + 200}
    data-aos-anchor="#contact"
    class="mt-16 lg:mt-0 w-full lg:w-auto lg:flex-grow"
  >
    <Swing />
  </div>
  <div>
    <h2
      data-aos="fade-in"
      data-aos-delay={delay}
      data-aos-anchor="#contact"
      class="font-bold text-4xl xl:text-6xl max-w-lg mb-12"
    >
      Have a Project in Mind?
    </h2>
    <div class="flex justify-between items-center gap-4">
      <div data-aos="fade-in" data-aos-delay={delay + 500} data-aos-anchor="#contact">
        <a
          href="/contact"
          class="lg:text-xl whitespace-nowrap font-bold no-underline bg-secondary-container hover:bg-secondary text-on-secondary-container hover:text-on-secondary rounded-full px-6 py-2"
          >Contact Me</a
        >
      </div>
      <div class="flex gap-2 w-fit">
        {#each contacts as { icon, link }}
          <a href={link}>
            <iconify-icon {icon} class="block text-3xl hover:text-tertiary" />
          </a>
        {/each}
      </div>
    </div>
  </div>
</section>
