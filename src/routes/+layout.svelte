<script lang="ts">
  import Navbar from '@component/Navbar.svelte';
  // import SectionTitle from '@component/SectionTitle.svelte';
  import '../app.postcss';
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

<Navbar />
<!-- <SectionTitle title="⚠️ under construction" reverse={true} class="warn text-white" /> -->
<slot />
