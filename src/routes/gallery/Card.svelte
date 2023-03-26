<Card>
  {#if name}
    <div class="flex gap-1 text-lg font-bold">
      {name}
      {#if official}
        <div title="This package is officially released by Anthe team" class="hover:text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M12 3c-1.2 0-2.4.6-3 1.7A3.6 3.6 0 0 0 4.6 9c-1
            .6-1.7 1.8-1.7 3s.7 2.4 1.7 3c-.3 1.2 0 2.5 1 3.4.8.8
            2.1 1.2 3.3 1 .6 1 1.8 1.6 3 1.6s2.4-.6 3-1.7c1.2.3
            2.5 0 3.4-1 .8-.8 1.2-2 1-3.3 1-.6 1.6-1.8
            1.6-3s-.6-2.4-1.7-3c.3-1.2 0-2.5-1-3.4a3.7
            3.7 0 0 0-3.3-1c-.6-1-1.8-1.6-3-1.6Z"
            />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>
      {/if}
    </div>
    <div class="mb-2 mt-1 h-[1px] w-full bg-gray-200" />
  {/if}

  <div class="grid grid-flow-col font-light">
    {#if lang}
      <ul><span class="font-bold">Lang:</span> {lang}</ul>
    {/if}
    {#if model}
      <ul><span class="font-bold">Model: </span>{model}</ul>
    {/if}
  </div>
  {#if desp}
    <div class="font-light">{@html desp}</div>
  {/if}
</Card>

<script lang="ts">
import Card from '$lib/BaseCard.svelte';
export let name = '';
export let desp = '';
export let lang = '';
export let model = '';
export let official = false;
</script>

<style lang="postcss">
* {
  @apply decoration-blue-500;
}
</style>
