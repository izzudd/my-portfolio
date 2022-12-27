<script lang="ts">
  import { applyTheme } from '$lib/ColorGenerator';

  const colors = ['#FED049', '#227C70', '#CB1C8D', '#009EFF'];
  let currentColor = colors[0];

  function setTheme(color: string) {
    currentColor = color;
    applyTheme(color)
  }
</script>

{#each colors as color, i}
  <button
    style="background-color: {color};"
    on:click={() => setTheme(color)}
    on:mouseenter={() => applyTheme(color)}
    on:mouseleave={() => applyTheme(currentColor)}
    data-aos="fade-down"
    data-aos-delay={i * 200 + 1200}
    data-aos-anchor="#hero"
    class="w-8 h-8 rounded-full"
    class:active={currentColor === color}
  />
{/each}

<style lang="postcss">
  button.active {
    @apply border-secondary-container border-4;
  }
</style>
