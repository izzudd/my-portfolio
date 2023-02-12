<script lang="ts">
  import Navbar from '@component/Navbar.svelte';
  import SplashScreen from '@component/SplashScreen.svelte';
</script>

<svelte:head>
  <script
    async
    defer
    data-website-id="b2ba4629-e586-4bdb-b4db-315e41fb412e"
    src="https://umami.invasikode.com/umami.js"
    data-domains="izzudd.invasikode.com"
  ></script>
</svelte:head>

<SplashScreen />
<Navbar />
<slot />
