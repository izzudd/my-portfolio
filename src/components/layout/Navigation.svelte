<script lang="ts">
    import {page} from '$app/stores';
    const navs = [
        {link: '/', text: 'Izzudd'},
        {link: '/about', text: 'About Me'},
        {link: '/contact', text: 'Contact'},
        {link: '/blog', text: 'Blog'},
    ];
</script>

<div class="navigation w-64 h-screen px-4 py-8 flex flex-col justify-between sticky top-0 overflow-y-hidden">
    <nav class="flex flex-col gap-2">
        {#each navs as {link, text}, i (link)}
            <a 
                data-aos="fade-right"
                data-aos-delay="{i * 50 + 1500}"
                href="{link}"
                class:active={$page.url.pathname === link}
            >
                {text}
            </a>
        {/each}
    </nav>
    <div data-aos="fade-up" data-aos-delay="2000" data-aos-anchor=".navigation">
        <a href="/alter" class="alter block relative py-2">
            <div class="absolute w-5/6 left-1/2 -translate-x-1/2 h-px bg-outline top-1/2"></div>
            <div class="text relative whitespace-nowrap w-fit px-4 bg-background left-0">Alter Ego</div>
            <div class="back-filter absolute bottom-0 w-0 h-full backdrop-invert"></div>
        </a>
    </div>
</div>

<style lang="postcss">
    nav a {
        @apply hover:font-bold;

        &.active {
            @apply font-bold text-lg;

            &::after {
                @apply w-8;
                content: "";
            }
        }

        &::after {
            @apply block w-0 h-px bg-outline transition-all duration-500;
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