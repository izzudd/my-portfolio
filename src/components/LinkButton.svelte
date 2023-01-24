<script lang="ts">
  export let href: string;
</script>

<a
  {href}
  class="floating inline-block border-4 border-black bg-white hover:bg-yellow-400 px-8 py-4 font-mono text-xl font-bold whitespace-nowrap"
  ><slot /></a
>
