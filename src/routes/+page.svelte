<script>
  import Card from '@component/Card.svelte';
  import Grid from '@component/Grid.svelte';
  import Groovy from '@component/Illustration/Groovy.svelte';
  import LinkButton from '@component/LinkButton.svelte';
  import SectionTitle from '@component/SectionTitle.svelte';
  import Typer from '@component/Typer.svelte';

  import { projects, writings } from '../portfolio.json';
</script>

<section id="hero" class="bg-stone-200">
  <Grid>
    <div class="h-screen container py-8 px-6 mx-auto flex items-center justify-center">
      <div class="flex-shrink-0">
        <p class="font-mono opacity-60 text-xl">
          // I <Typer texts={['develop website', 'write article', 'code for fun', 'love coffee']} />
        </p>
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

<section id="projects">
  <SectionTitle title="Projects" />
  <div class="bg-sky-400">
    <Grid>
      <div class="h-screen container mx-auto flex items-center justify-center p-8">
        <div class="grid gap-8 grid-cols-2 w-full">
          {#each projects as { title, tag, link, description } (title)}
            <a href={link}> <Card leading="# {tag.join(' | ')}" {title} {description} /></a>
          {/each}
        </div>
      </div>
    </Grid>
  </div>
</section>

<section id="writings">
  <SectionTitle title="Writings" reverse={true} />
  <div class="bg-lime-400">
    <Grid>
      <div class="h-screen container mx-auto flex flex-col items-center justify-center p-8">
        <div class="grid gap-8 grid-cols-2 w-full mb-8">
          {#each writings as { title, leading, link, description } (title)}
            <a href={link}> <Card {leading} {title} {description} /></a>
          {/each}
        </div>
        <LinkButton href="https://www.invasikode.com">More -></LinkButton>
      </div>
    </Grid>
  </div>
</section>

<section id="about" />
