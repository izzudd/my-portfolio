<script lang="ts">
  import GridContainer from '@component/GridContainer.svelte';
  import HorizontalBorderContainer from './HorizontalBorderContainer.svelte';

  let showMobileNav = false;
</script>

<div class="bg-stone-300">
  <HorizontalBorderContainer topBorder={false}>
    <GridContainer>
      <div class="flex h-full bg-yellow-500">
        <a href="/" class="text-2xl font-bold font-mono px-6 flex items-center h-full">Zuudd</a>
        <div
          class="flex flex-col md:flex-row items-center w-fit border-l-4 border-black ml-auto text-lg font-bold bg-emerald-500"
        >
          <button
            class:bg-yellow-500={showMobileNav}
            class="md:hidden px-6 h-full"
            on:click={() => (showMobileNav = !showMobileNav)}
            >{showMobileNav ? 'Close' : 'Menu'}</button
          >
          <nav
            class="absolute md:static bg-emerald-500 w-screen md:w-auto left-0 top-full invisible md:visible flex md:h-full border-t-4 border-b-4 border-black md:border-none {showMobileNav
              ? '!visible'
              : ''}"
          >
            <a class="hover:bg-sky-500" href="#projects">Projects</a>
            <a class="hover:bg-lime-500" href="#writings">Writings</a>
            <a class="hover:bg-orange-500" href="#about">About</a>
            <a class=" hover:bg-fuchsia-500" href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </GridContainer>
  </HorizontalBorderContainer>
</div>

<style lang="postcss">
  nav a {
    @apply flex-1 w-full text-center px-0 py-4 md:py-0 md:px-6 md:flex items-center;
  }
</style>
