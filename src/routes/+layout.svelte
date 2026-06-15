<script lang="ts">
  import Navbar from '@component/Navbar.svelte';
  import SplashScreen from '@component/SplashScreen.svelte';
  import { env } from '$env/dynamic/public';
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();

  const { PUBLIC_UMAMI_ID, PUBLIC_UMAMI_SOURCE } = env;

  const TRUSTED_UMAMI_DOMAINS = [
    'analytics.umami.is',
    'cloud.umami.is',
    'eu.umami.is',
    'us.umami.is',
    'umami.invasikode.com',
  ];

  function isValidUmamiSource(source: string | undefined): boolean {
    if (!source) return false;
    try {
      const url = new URL(source);
      return url.protocol === 'https:' && TRUSTED_UMAMI_DOMAINS.includes(url.hostname);
    } catch {
      return false;
    }
  }
</script>

<svelte:head>
  <title>Izzudd</title>
  {#if PUBLIC_UMAMI_ID && isValidUmamiSource(PUBLIC_UMAMI_SOURCE)}
    <script async defer data-website-id={PUBLIC_UMAMI_ID} src={PUBLIC_UMAMI_SOURCE}></script>
  {/if}
</svelte:head>

<SplashScreen />
<Navbar />
{@render children?.()}
