<script>
  import Grid from '@component/Grid.svelte';
  import Coffee from '@component/Illustration/Coffee.svelte';
  import SectionTitle from '@component/SectionTitle.svelte';
  import Icon from '@iconify/svelte';

  import { about } from '../portfolio.json';
</script>

<section id="about">
  <SectionTitle title="Spill the coffee" />
  <div class="bg-orange-200">
    <Grid>
      <div class="container mx-auto min-h-screen flex items-center gap-4 p-8">
        <!-- Left pane: description -->
        <div class="flex-1">
          <h3 class="text-3xl font-mono font-bold mb-6">Learn More About Me</h3>
          {#each about.description as paragraph}
            <p class="mb-2 opacity-80 xl:text-lg">{paragraph}</p>
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
        <!-- Right pane: rating and decoration -->
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
      @apply font-mono text-sm xl:text-base mb-2;
    }
    & div {
      @apply flex gap-2 text-3xl xl:text-5xl;
    }
  }
</style>
