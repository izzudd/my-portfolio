<script lang="ts">
  import Card from '@component/Card.svelte';
  import GridContainer from '@component/GridContainer.svelte';
  import SectionTitle from '@component/SectionTitle.svelte';
  import projects from '@content/projects.yaml';

  const joinedTags = projects.map((p) => p.tag.join(' | '));
</script>

<section id="projects">
  <SectionTitle title="Projects" />
  <div class="bg-sky-400">
    <GridContainer>
      <div class="min-h-screen container mx-auto flex items-center justify-center py-8 px-6">
        <div class="grid gap-8 grid-cols-1 md:grid-cols-2 w-full">
          {#each projects as { title, link, description, wip, stack }, i (title)}
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Card
                leading="# {joinedTags[i]}"
                {title}
                {description}
                mark={wip ? 'WIP' : undefined}
                icons={stack}
              />
            </a>
          {/each}
        </div>
      </div>
    </GridContainer>
  </div>
</section>
