<script>
    import Groovy from "@components/illustration/Groovy.svelte";
    import HeroBlob from "@components/pattern/HeroBlob.svelte";
</script>

<section id="hero" class="relative flex items-center justify-center h-screen">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <HeroBlob />
    </div>
    <div>
        <h1 class="font-bold text-8xl" data-aos="fade-in">Daffa <br> <span class="underline decoration-primary underline-offset-8">Izzudd</span>in</h1>
        <p class="text-2xl mt-12 mb-24" data-aos="fade-in" data-aos-delay="500">I build amazing things on the web.</p>
        <ol class="text-right">
            <li class="text-lg" data-aos="fade-right" data-aos-delay="900">Front end web developer</li>
            <li data-aos="fade-right" data-aos-delay="1000">— Full stack developer</li>
        </ol>
    </div>
    <div data-aos="zoom-in-left" data-aos-delay="200">
        <Groovy />
    </div>
</section>

<section id="portfolio">
    
</section>