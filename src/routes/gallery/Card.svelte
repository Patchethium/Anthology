<script lang="ts">
  export let name = '';
  export let desp = '';
  export let lang = '';
  export let model = '';
</script>

<div
  class="min-h-min rounded-md border border-gray-200 p-3 ring-blue-100 hover:ring-1 dark:border-gray-600 dark:ring-blue-500"
>
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
</div>

<style lang="postcss">
  * {
    @apply decoration-blue-500;
  }
</style>
