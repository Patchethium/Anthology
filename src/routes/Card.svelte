<BaseCard class="flex flex-col justify-center py-6 px-8">
  <slot />
  <button on:click={gotoUrl}>Learn More</button>
</BaseCard>

<script lang="ts">
import { goto } from '$app/navigation';
import BaseCard from '$lib/BaseCard.svelte';
export let url = '';

function gotoUrl() {
  if (url != '') {
    goto(url);
  }
}
</script>

<style lang="postcss">
button {
  @apply m-5 mr-auto h-auto w-auto rounded-full bg-blue-500 p-2 px-4 font-sans text-sm font-bold text-white;
}
button:hover {
  @apply shadow-md brightness-110;
}
</style>
