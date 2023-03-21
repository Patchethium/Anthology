<script>
  import { goto } from '$app/navigation';
</script>

<svelte:head>
  <title>Anthe</title>
</svelte:head>

<div
  class="flex h-screen w-full -translate-y-12 flex-col items-center justify-center gap-4 bg-gradient-to-bl
         from-indigo-300 to-pink-300 dark:from-indigo-900 dark:to-slate-800"
>
  <img
    width="256"
    height="256"
    src="src/assets/icon.png"
    alt="logo"
    class="h-40 w-auto drop-shadow-lg"
  />
  <div class="relative top-0 block font-sans text-5xl font-bold text-white drop-shadow-md">
    Anthe<span class="pl-1 text-lg font-normal">alpha-1</span>
  </div>
  <div class="font-serif text-2xl italic text-white drop-shadow-md">
    <span class="underline">that</span> TTS you're looking for, fully controllable, free and open source
  </div>
  <div class="flex flex-row gap-0">
    <button
      class="rounded-full rounded-r-sm bg-gradient-to-tl from-indigo-600 to-blue-500 
      py-2 pl-6 pr-4 text-xl font-bold text-white"
      on:click={() => goto('/download')}
    >
      Download
    </button>
    <button
      class="rounded-full rounded-l-sm bg-white py-2 pl-4 pr-6 text-xl font-bold text-slate-600"
      on:click={() => goto('/gallery')}
    >
      Browse models
    </button>
  </div>
</div>

<div class="flex gap-4 px-12 pb-8">
  <div class="card">
    <div class="title">Out-of-box</div>
    <div>Anthe only needs minium configuration to work</div>
    <button>Learn More</button>
  </div>
  <div class="card">
    <div class="title">Cross Platform</div>
    <div>Get Anthe on Windows, Linux and OS X</div>
    <button>Learn More</button>
  </div>
  <div class="card">
    <div class="title">Free</div>
    <div>Make model with your own voice!</div>
    <button>Learn More</button>
  </div>
</div>

<style lang="postcss">
  .card {
    @apply flex h-auto w-1/3 flex-col items-center rounded-xl border border-gray-100 px-8 py-6 dark:border-gray-500;
  }
  .card:hover {
    @apply shadow-md dark:shadow-gray-700;
  }
  .card > .title {
    @apply text-lg font-bold;
  }
  .card > button {
    @apply m-5 mr-auto h-auto w-auto rounded-full bg-blue-500 p-2 px-4 font-sans text-sm font-bold text-white;
  }
  button:hover {
    @apply shadow-md brightness-110;
  }
</style>
