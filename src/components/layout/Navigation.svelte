<div class="w-64 h-screen px-4 py-8 flex flex-col justify-between sticky top-0">
    <nav class="flex flex-col gap-2">
        <a href="/" class="current">Izzudd</a>
        <a href="/about">About Me</a>
        <a href="/contact">Contant</a>
        <a href="/blog">Blog</a>
    </nav>
    <a href="/alter" class="alter block relative py-2">
        <div class="absolute w-5/6 left-1/2 -translate-x-1/2 h-px bg-outline top-1/2"></div>
        <div class="text relative whitespace-nowrap w-fit px-4 bg-background left-0">Alter Ego</div>
        <div class="back-filter absolute bottom-0 w-0 h-full backdrop-invert"></div>
    </a>
</div>

<style lang="postcss">
    nav a {
        @apply hover:font-bold;

        &.current {
            @apply font-bold text-lg;

            &::after {
                @apply block w-8 h-px bg-outline;
                content: "";
            }
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