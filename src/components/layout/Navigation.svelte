<div class="navigation w-64 h-screen px-4 py-8 flex flex-col justify-between sticky top-0 overflow-y-hidden">
    <nav class="flex flex-col gap-2">
        <a data-aos="fade-right" data-aos-delay="1500" href="/" class="current">Izzudd</a>
        <a data-aos="fade-right" data-aos-delay="1550" href="/about">About Me</a>
        <a data-aos="fade-right" data-aos-delay="1600" href="/contact">Contant</a>
        <a data-aos="fade-right" data-aos-delay="1650" href="/blog">Blog</a>
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