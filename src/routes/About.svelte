<script lang="ts">
  import GridContainer from '@component/GridContainer.svelte';
  import SectionTitle from '@component/SectionTitle.svelte';
  import Icon from '@iconify/svelte';

  import about from '@content/about.yaml';
  import { loadContent } from '@store/pageLoading';

  const techEntries = Object.entries(about.techs);
</script>

<section id="about">
  <SectionTitle title="Spill the coffee" />
  <div class="bg-orange-200">
    <GridContainer>
      <div
        class="container mx-auto min-h-screen flex flex-col lg:flex-row items-center justify-center gap-4 py-8 px-6"
      >
        <!-- Left pane: description -->
        <div class="lg:flex-1">
          <h3 class="text-3xl font-mono font-bold mb-6">Learn More About Me</h3>
          {#each about.description as paragraph}
            <p class="mb-2 opacity-80 xl:text-lg">{paragraph}</p>
          {/each}
          <h3 class="text-2xl font-mono font-bold mb-4 mt-8">My Tech Stack</h3>
          <div class="flex flex-wrap gap-6">
            {#each techEntries as [tech, icons]}
              <div class="tech">
                <h4>{tech}</h4>
                <div>
                  {#each icons as icon}
                    <Icon {icon} />
                  {/each}
                </div>
              </div>
            {/each}
          </div>
        </div>
        <!-- Right pane: rating and decoration -->
        <div class="lg:flex-1 w-full mt-8 lg:mt-0">
          <div class="hidden lg:block">
            {#await loadContent(() => import('@component/Illustration/Coffee.svelte')) then Coffee}
              <Coffee.default />
            {/await}
          </div>
        </div>
      </div>
    </GridContainer>
  </div>
</section>

<style>
  @reference "../app.css";
  .tech {
    & h4 {
      @apply font-mono text-sm xl:text-base mb-2;
    }
    & div {
      @apply flex gap-2 text-3xl xl:text-5xl;
    }
  }
</style>
