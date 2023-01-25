<script>
  import Card from '@component/Card.svelte';
  import Grid from '@component/Grid.svelte';
  import LinkButton from '@component/LinkButton.svelte';
  import SectionTitle from '@component/SectionTitle.svelte';
  import { writings } from '../portfolio.json';
</script>

<section id="writings">
  <SectionTitle title="Writings" reverse={true} />
  <div class="bg-lime-400">
    <Grid>
      <div class="min-h-screen container mx-auto flex flex-col items-center justify-center p-8">
        <div class="grid gap-8 grid-cols-2 w-full mb-8">
          {#each writings as { title, leading, link, description } (title)}
            <a href={link}> <Card {leading} {title} {description} /></a>
          {/each}
        </div>
        <LinkButton blank href="https://www.invasikode.com">More -></LinkButton>
      </div>
    </Grid>
  </div>
</section>
