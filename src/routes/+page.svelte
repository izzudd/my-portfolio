<script>
  import Grid from '@component/Grid.svelte';
  import Groovy from '@component/Illustration/Groovy.svelte';
  import LinkButton from '@component/LinkButton.svelte';
</script>

<section class="bg-stone-200">
  <Grid>
    <div class="container py-8 px-6 mx-auto flex items-center justify-center">
      <div class="flex-shrink-0">
        <p class="font-mono opacity-60 text-xl"># Web developer</p>
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
