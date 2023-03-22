<div class="p-6">
  <div class="text-3xl font-bold">Error</div>
  <div class="text-lg font-light">
    An error occured when navigating to <code>{$page.url.pathname}</code>.<br />
    <div class="font-bold">Error: <code>{$page.status} - {$page.error?.message}</code></div>
    <a href="/" class="group underline decoration-blue-500">
      <span class="group-hover:text-blue-500">Back to Top</span>
    </a>
  </div>
</div>

<script lang="ts">
import { page } from '$app/stores';
</script>

<style lang="postcss">
code {
  @apply rounded-full border border-gray-300 bg-gray-100 px-2 font-light;
}
</style>
