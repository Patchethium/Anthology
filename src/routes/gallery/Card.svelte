<Card>
  {#if name}
    <div class="text-lg font-bold">{name}</div>
    <div class="mb-1 h-[1px] w-full bg-gray-200" />
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
</script>

<style lang="postcss">
* {
  @apply decoration-blue-500;
}
</style>
