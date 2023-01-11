<script>
  import Grid from '@component/Grid.svelte';
  import Groovy from '@component/Illustration/Groovy.svelte';
  import LinkButton from '@component/LinkButton.svelte';

  const portfolios = [
    {
      title: 'Invasikode',
      tag: ['Design', 'Development', 'Writing'],
      link: '/',
      image: '',
      color: '#009EFF',
    },
    { title: 'Sifana', tag: ['Design', 'Development'], link: '/', image: '', color: '#62B6B7' },
    { title: 'ERGEBE', tag: ['Design', 'Development'], link: '/', image: '', color: '#FED049' },
    { title: "D'Embung Park", tag: ['Web Development'], link: '/', image: '', color: '#439A97' },
  ];
</script>

<section id="hero" class="bg-stone-200">
  <Grid>
    <div class="container py-8 px-6 mx-auto flex items-center justify-center">
      <div class="flex-shrink-0">
        <p class="font-mono opacity-60 text-xl"># Web developer</p>
        <h1 class="text-8xl font-bold font-mono">
          Daffa <br /> <span class="underline decoration-amber-700">Izzud</span>din
        </h1>
        <p class="text-2xl mt-12">I build amazing things on the web.</p>
        <div class="pt-12">
          <LinkButton href="/">Get in touch</LinkButton>
        </div>
      </div>
      <div class="w-1/2 flex-shrink">
        <Groovy />
      </div>
    </div>
  </Grid>
</section>

<section id="portfolio">
  {#each portfolios as { title, tag, link, image, color }, i}
    <div style="background-color: {color};">
      <Grid>
        <div class="h-screen mx-auto py-12 px-6 flex flex-col justify-center">
          <div class="w-full aspect-video bg-gray-100/20 mb-8" />
          <div class="flex flex-shrink-0 items-end justify-between">
            <div>
              <span class="font-mono opacity-60 text-xl">{tag.join(' | ')}</span>
              <h2 lang="en" class="font-mono text-9xl font-bold">{title}</h2>
            </div>
            <div class="font-bold text-6xl opacity-40">#{i + 1}</div>
          </div>
        </div>
      </Grid>
    </div>
  {/each}
</section>

<section id="glance">
  <Grid>
    <div class="container bg-white" />
  </Grid>
</section>
