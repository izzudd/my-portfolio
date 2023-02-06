<script>
  import Grid from '@component/Grid.svelte';
</script>

<div class="bg-stone-300">
  <Grid>
    <div class="flex h-full bg-yellow-500">
      <a href="/" class="block text-2xl font-bold font-mono">Zuudd</a>
      <nav
        class="hidden md:flex w-fit border-l-4 border-black ml-auto text-lg font-bold bg-emerald-500"
      >
        <a class="hover:bg-sky-500" href="#projects">Projects</a>
        <a class="hover:bg-lime-500" href="#writings">Blog</a>
        <a class="hover:bg-orange-500" href="#about">About</a>
        <a class=" hover:bg-fuchsia-500" href="#contact">Contact</a>
      </nav>
    </div>
  </Grid>
</div>

<style lang="postcss">
  a {
    @apply px-6 flex items-center h-full;
  }
</style>
