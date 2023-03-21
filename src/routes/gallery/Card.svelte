<script lang="ts">
  export let name = '';
  export let desp = '';
  export let lang = '';
  export let model = '';
</script>

<div
  class="rounded-md min-h-min border border-gray-200 dark:border-gray-600 p-3 hover:ring-1 ring-blue-100 dark:ring-blue-500"
>
  {#if name}
    <div class="text-lg font-bold">{name}</div>
    <div class="w-full h-[1px] bg-gray-200 mb-1" />
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
</div>

<style lang="postcss">
  * {
    @apply decoration-blue-500;
  }
</style>
