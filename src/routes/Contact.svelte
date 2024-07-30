<script>
  import GridContainer from '@component/GridContainer.svelte';
  import SectionTitle from '@component/SectionTitle.svelte';
  import Icon from '@iconify/svelte';
  import { loadContent } from '@store/pageLoading';
</script>

<section id="contact">
  <SectionTitle title="Contact" reverse />
  <div class="bg-fuchsia-300">
    <GridContainer>
      <div
        class="container py-8 px-6 mx-auto min-h-screen flex flex-col-reverse lg:flex-row items-center gap-6"
      >
        <div class="flex-1 w-full">
          {#await loadContent(() => import('@component/Illustration/Swing.svelte')) then Swing}
            <Swing.default />
          {/await}
        </div>
        <div class="flex-1">
          <h3 class="text-4xl font-bold font-mono">Have Something in Mind?</h3>
          <p class="mb-6 text-lg">Feel free to contact me</p>
          <form data-netlify="true" name="Message" method="POST">
            <input type="hidden" name="form-name" value="Message" />
            <div class="mb-2 floating-fixed bg-black border-4 border-black flex">
              <label for="name"><Icon icon="material-symbols:person" /></label>
              <input
                type="name"
                name="name"
                placeholder="How should I call you? Leave your name here"
                required
              />
            </div>
            <div class="mb-2 floating-fixed bg-black border-4 border-black flex">
              <label for="email"><Icon icon="material-symbols:mail-sharp" /></label>
              <input
                type="email"
                name="email"
                placeholder="Leave your email here, I'll reach you back ASAP"
                required
              />
            </div>
            <div class="mb-4 floating-fixed bg-black border-4 border-black flex">
              <label for="message"><Icon icon="material-symbols:edit" /></label>
              <textarea name="message" rows="6" placeholder="Write your message" required />
            </div>
            <button
              type="submit"
              class="block ml-auto floating bg-white px-2 py-1 font-bold text-xl border-4 border-black hover:bg-fuchsia-500"
            >
              Send >>
            </button>
          </form>
        </div>
      </div>
    </GridContainer>
  </div>
</section>

<style lang="postcss">
  form {
    & label {
      @apply flex justify-center text-white text-4xl w-12 flex-shrink-0;
    }

    & textarea,
    & input {
      @apply text-lg px-2 block flex-grow outline-none;
    }
  }
</style>
