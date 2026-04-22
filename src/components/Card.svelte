<script lang="ts">
  import Icon from '@iconify/svelte';

  interface Props {
    leading: string;
    title: string;
    description: string;
    mark?: string | undefined;
    icons?: string[] | undefined;
  }

  let { leading, title, description, mark, icons }: Props = $props();
</script>

<div class="floating p-4 bg-white relative border-4 border-black">
  <span class="block font-mono text-sm opacity-60 mb-1">{leading}</span>
  {#if mark}
    <span class="absolute top-0 right-0 bg-black text-white text-xs px-2 py-1 m-1 font-mono"
      >{mark}</span
    >
  {/if}
  <h3 class="font-mono font-bold text-3xl">{title}</h3>
  <p class="mt-3">
    {description}
  </p>
  {#if icons}
    <div class="ml-auto flex gap-2 w-min pt-4 text-2xl">
      {#each icons as icon}
        <Icon class="block" {icon} />
      {/each}
    </div>
  {/if}
</div>
