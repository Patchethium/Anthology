<article
  class="prose prose-slate flex h-full w-full max-w-none flex-col p-6 dark:prose-invert md:prose-base
  lg:prose-xl prose-headings:font-sans prose-headings:font-bold prose-headings:text-gray-800
  prose-h1:mb-3 prose-h1:text-xl prose-p:my-2 prose-p:indent-6 prose-p:text-base prose-p:font-light
   prose-p:text-gray-800 hover:prose-a:decoration-blue-500 prose-strong:text-gray-700
  prose-em:font-serif prose-code:rounded-md prose-code:bg-slate-100 prose-code:font-mono prose-code:font-normal
  prose-img:max-h-[800px] prose-hr:m-3 dark:prose-headings:text-gray-200 dark:prose-p:text-gray-200
  dark:hover:prose-a:decoration-blue-300 dark:prose-strong:text-slate-300 dark:prose-code:bg-slate-800
  sm:prose-h1:text-xl sm:prose-p:text-base md:prose-h1:text-2xl md:prose-p:text-xl lg:prose-h1:text-3xl"
>
  <!-- <a class="mb-4 text-lg" href="/blog">Back To Top</a> -->
  {@html data.post}
</article>

<script lang="ts">
export let data: {
  slug: string;
  post: string;
};
</script>
