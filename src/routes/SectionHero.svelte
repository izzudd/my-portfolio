<script>
	import Groovy from "@components/illustration/Groovy.svelte";
	import HeroBlob from "@components/pattern/HeroBlob.svelte";
	import ColorSwatch from "./ColorSwatch.svelte";
</script>

<section id="hero" class="relative flex flex-col lg:flex-row items-center justify-center min-h-screen">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <HeroBlob />
    </div>
    <div class="flex-shrink-0 mt-12 lg:mt-0">
        <h1 class="font-bold text-6xl xl:text-8xl" data-aos="fade-in" data-aos-duration="500">Daffa <br> <span class="underline decoration-primary underline-offset-8">Izzudd</span>in</h1>
        <p class="text-xl xl:text-2xl mt-12 mb-12 lg:mb-24" data-aos="fade-in" data-aos-delay="500">I build amazing things on the web.</p>
        <ol class="text-right">
            <li class="text-lg" data-aos="fade-right" data-aos-delay="900">Front end web developer</li>
            <li data-aos="fade-right" data-aos-delay="1000">— Full stack developer</li>
        </ol>
    </div>
    <div class="mt-6 w-full max-w-lg lg:max-w-none lg:mt-0 bottom-0 lg:flex-grow" data-aos="zoom-in-left" data-aos-delay="200">
        <Groovy />
    </div>
    <div class="absolute bottom-8 right-0 flex flex-col gap-4">
        <ColorSwatch />
    </div>
</section>