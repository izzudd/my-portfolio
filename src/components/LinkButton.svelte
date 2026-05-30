<script lang="ts">
  interface Props {
    href: string;
    blank?: boolean;
    children?: import('svelte').Snippet;
  }

  let { href, blank = false, children }: Props = $props();
</script>

<a
  {href}
  target={blank ? '_blank' : undefined}
  rel={blank ? 'noopener noreferrer' : undefined}
  class="floating w-fit inline-block border-4 border-black bg-white hover:bg-yellow-400 px-8 py-4 font-mono text-xl font-bold whitespace-nowrap"
  >{@render children?.()}</a
>
