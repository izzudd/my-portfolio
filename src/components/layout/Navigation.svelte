<script lang="ts">
    import {page} from '$app/stores';
    const navs = [
        {link: '/', text: 'Izzudd'},
        {link: '/about', text: 'About Me'},
        {link: '/contact', text: 'Contact'},
        {link: '/blog', text: 'Blog'},
    ];
</script>

<div class="text-sm lg:text-base z-50 navigation sticky top-0 left-0 lg:w-64 h-screen py-4 lg:py-8 flex flex-col items-center lg:items-start lg:justify-between">
    <nav class="flex flex-col items-baseline gap-4 lg:gap-2">
        {#each navs as {link, text}, i (link)}
        <div class="[writing-mode:vertical-rl] lg:[writing-mode:initial] rotate-180 lg:rotate-0">
            <a 
                data-aos="fade-right"
                data-aos-delay="{i * 50 + 1500}"
                href="{link}"
                class:active={$page.url.pathname === link}
                class="block whitespace-nowrap"
            >
                {text}
            </a>
        </div>
        {/each}
    </nav>

    <!-- desktop alter -->
    <div data-aos="fade-up" data-aos-delay="2000" data-aos-anchor=".navigation" class="hidden lg:block w-full">
        <a href="/alter" class="alter block relative py-2">
            <div class="absolute w-5/6 left-1/2 -translate-x-1/2 h-px bg-outline top-1/2"></div>
            <div class="text relative whitespace-nowrap w-fit px-4 bg-background left-0">Alter Ego</div>
            <div class="back-filter absolute bottom-0 w-0 h-full backdrop-invert"></div>
        </a>
    </div>

    <!-- mobile alter -->
    <div data-aos="fade-up" 
        data-aos-delay="2000" 
        data-aos-anchor=".navigation" 
        class="lg:hidden h-full w-px my-6 bg-outline flex-grow">
    </div>
    <a href="/alter" 
        data-aos="fade-up" 
        data-aos-delay="2500" 
        data-aos-anchor=".navigation" 
        class="lg:hidden whitespace-nowrap [writing-mode:vertical-rl] lg:[writing-mode:unset] !rotate-180"
    >
        Alter Ego
    </a>
</div>

<style lang="postcss">
    nav a {
        @apply hover:font-bold;

        &.active {
            @apply font-bold text-lg;

            &::after {
                @apply h-8 w-px lg:w-8 lg:h-px;
                content: "";
            }
        }

        &::after {
            @apply block w-px h-0 lg:h-px lg:w-0 bg-outline transition-all duration-500;
            content: "";
        }
    }

    .alter {
        & > * {
            @apply transition-all duration-200;
        }
    }

    .alter:hover {
        & .text {
            @apply left-full -translate-x-full;
        }

        & .back-filter {
            @apply w-full;
        }
    }   
</style>