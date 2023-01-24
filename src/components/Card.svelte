<script lang="ts">
  export let leading: string;
  export let title: string;
  export let description: string;
</script>

<div class="floating p-4 bg-white relative border-4 border-black">
  <span class="block font-mono text-sm opacity-60 mb-1">{leading}</span>
  <h3 class="font-mono font-bold text-3xl">{title}</h3>
  <p class="mt-3">
    {description}
  </p>
</div>
