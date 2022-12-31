<script>
  import Chilling from '@components/illustration/Chilling.svelte';
  import ChillingAlter from '@components/illustration/ChillingAlter.svelte';

  export let alter = false;
</script>

<div class="h-screen w-full py-24 flex flex-col items-center justify-center text-center">
  {#if !alter}
    <Chilling />
  {:else}
    <ChillingAlter />
  {/if}
  <h2 class="font-bold text-primary text-6xl mb-8">Ooppss..</h2>
  <p>Nothing here yet, this page still under construction</p>
</div>
