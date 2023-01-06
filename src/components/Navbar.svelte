<script>
  import Grid from '@component/Grid.svelte';
</script>

<div class="bg-stone-300">
  <Grid>
    <div class="flex h-full bg-yellow-500">
      <a href="/" class="block text-2xl font-bold font-mono">Zuudd</a>
      <nav class="flex w-fit border-l-4 border-black ml-auto text-lg font-bold bg-emerald-500">
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Blog</a>
      </nav>
    </div>
  </Grid>
</div>

<style lang="postcss">
  a {
    @apply px-6 flex items-center h-full hover:bg-yellow-400;
  }
</style>
