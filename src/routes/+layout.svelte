<script lang="ts">
  import Navbar from '#component/Navbar.svelte';
  import SplashScreen from '#component/SplashScreen.svelte';
  import { PUBLIC_UMAMI_ID, PUBLIC_UMAMI_SOURCE } from '$app/env/public';
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<svelte:head>
  <title>Izzudd</title>
  {#if PUBLIC_UMAMI_ID && PUBLIC_UMAMI_SOURCE}
    <script async defer data-website-id={PUBLIC_UMAMI_ID} src={PUBLIC_UMAMI_SOURCE}></script>
  {/if}
</svelte:head>

<SplashScreen />
<Navbar />
{@render children?.()}
