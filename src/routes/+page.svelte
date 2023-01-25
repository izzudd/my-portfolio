<script>
  import Card from '@component/Card.svelte';
  import Grid from '@component/Grid.svelte';
  import Coffee from '@component/Illustration/Coffee.svelte';
  import Groovy from '@component/Illustration/Groovy.svelte';
  import LinkButton from '@component/LinkButton.svelte';
  import SectionTitle from '@component/SectionTitle.svelte';
  import Typer from '@component/Typer.svelte';
  import Icon from '@iconify/svelte';

  import { projects, writings, about } from '../portfolio.json';
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

<section id="about">
  <SectionTitle title="Spill the coffee" />
  <div>
    <Grid>
      <div class="h-screen flex items-center gap-4 p-8">
        <div class="flex-1">
          <h3 class="text-3xl font-mono font-bold mb-6">Learn More About Me</h3>
          {#each about.description as paragraph}
            <p class="mb-2 opacity-80">{paragraph}</p>
          {/each}
          <h3 class="text-2xl font-mono font-bold mb-4 mt-8">My Tech</h3>
          <div class="flex flex-wrap gap-6">
            <div class="tech">
              <h4>Language</h4>
              <div>
                <Icon icon="logos:typescript-icon" />
                <Icon icon="logos:go" />
              </div>
            </div>
            <div class="tech">
              <h4>Framework</h4>
              <div>
                <Icon icon="logos:nuxt-icon" />
                <Icon icon="logos:vue" />
                <Icon icon="logos:svelte-icon" />
              </div>
            </div>
            <div class="tech">
              <h4>Styling</h4>
              <div>
                <Icon icon="logos:tailwindcss-icon" />
                <Icon icon="logos:postcss" />
              </div>
            </div>
            <div class="tech">
              <h4>Database</h4>
              <div>
                <Icon icon="logos:postgresql" />
              </div>
            </div>
            <div class="tech">
              <h4>Operational</h4>
              <div>
                <Icon icon="logos:github-icon" />
                <Icon icon="logos:netlify" />
                <Icon icon="logos:linux-tux" />
                <Icon icon="logos:figma" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex-1">
          <Coffee />
          {#each about.skills as { skill, rating }}
            <div class="mt-4 flex items-center">
              <span class="w-36 font-mono font-bold">{skill}</span>
              <div class="rounded-full w-full h-3 bg-black p-1">
                <div
                  class="relative rounded-full h-full bg-orange-400 flex items-center"
                  style="width: {rating * 100}%;"
                >
                  <div
                    class="ml-auto first-letter: w-5 h-5 rounded-full bg-orange-400 border-4 border-black"
                  />
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </Grid>
  </div>
</section>

<style lang="postcss">
  .tech {
    & h4 {
      @apply font-mono text-sm mb-2;
    }
    & div {
      @apply flex gap-2 text-3xl;
    }
  }
</style>
