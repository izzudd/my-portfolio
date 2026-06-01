<script lang="ts">
  import Card from '@component/Card.svelte';
  import GridContainer from '@component/GridContainer.svelte';
  import SectionTitle from '@component/SectionTitle.svelte';
  import projects from '@content/projects.yaml';

  const processedProjects = projects.map((p) => ({
    ...p,
    joinedTags: p.tag.join(' | '),
  }));
</script>

<section id="projects">
  <SectionTitle title="Projects" />
  <div class="bg-sky-400">
    <GridContainer>
      <div class="min-h-screen container mx-auto flex items-center justify-center py-8 px-6">
        <div class="grid gap-8 grid-cols-1 md:grid-cols-2 w-full">
          {#each processedProjects as { title, joinedTags, link, description, wip, stack } (title)}
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Card
                leading="# {joinedTags}"
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
