<script>
  import { goto } from '$app/navigation';
</script>

<div
  class="bg-gradient-to-br from-indigo-300 to-pink-300 w-full h-screen justify-center items-center flex flex-col gap-4"
>
  <img
    width="512"
    height="512"
    src="src/assets/icon.png"
    alt="logo"
    class="w-auto h-40 drop-shadow-lg"
  />
  <div class="font-sans text-white text-6xl relative block top-0 font-bold drop-shadow-sm">
    Anthe<span class="pl-1 text-lg font-normal">alpha-1</span>
  </div>
  <div class="text-white italic font-serif text-2xl">
    <span class="underline">that</span> TTS you're looking for, fully controllable, free and open source
  </div>
  <div class="flex-row gap-0 flex">
    <button
      class="rounded-full bg-gradient-to-br from-purple-400 to-indigo-400 text-white font-bold px-4 py-2 rounded-r-sm text-xl"
      on:click={() => goto('/about')}
    >
      Get Anthe
    </button>
    <button class="rounded-full bg-white text-slate-600 font-bold px-4 py-2 rounded-l-sm text-xl">
      Browse the models
    </button>
  </div>
</div>

<div class="py-8 px-12 gap-4 flex">
  <div class="card">
    <div class="title">Out-of-box</div>
    <div>Anthe can be used by minium configuration</div>
    <div class="flex-1" />
    <button>Learn More</button>
  </div>
  <div class="card">
    <div class="title">Cross Platform</div>
    <div>Get Anthe on Windows, Linux and OS X</div>
    <div class="flex-1" />
    <button>Learn More</button>
  </div>
  <div class="card">
    <div class="title">Free</div>
    <div>Make model with your own voice!</div>
    <div class="flex-1" />
    <button>Learn More</button>
  </div>
</div>

<style lang="postcss">
  .card {
    @apply w-1/3 h-auto rounded-md border border-gray-100 flex flex-col items-center px-8 py-6 text-gray-600;
  }
  .card:hover {
    @apply shadow-md;
  }
  .card > .title {
    @apply font-bold text-lg;
  }
  .card > button {
    @apply rounded-full bg-blue-500 w-auto p-2 px-4 h-auto text-white font-bold font-sans mr-auto m-5;
  }
  button:hover {
    @apply shadow-md;
  }
</style>
