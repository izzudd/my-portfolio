<script lang="ts">
  import Card from '@component/Card.svelte';
  import GridContainer from '@component/GridContainer.svelte';
  import SectionTitle from '@component/SectionTitle.svelte';
  import projects from '@content/projects.yaml';
</script>

<section id="projects">
  <SectionTitle title="Projects" />
  <div class="bg-sky-400">
    <GridContainer>
      <div class="min-h-screen container mx-auto flex items-center justify-center py-8 px-6">
        <div class="grid gap-8 grid-cols-1 md:grid-cols-2 w-full">
          {#each projects as { title, tag, link, description, wip, stack } (title)}
            <a href={link} target="_blank">
              <Card leading="# {tag.join(' | ')}" {title} {description} mark="{wip && "WIP"}" icons="{stack}" />
            </a>
          {/each}
        </div>
      </div>
    </GridContainer>
  </div>
</section>
