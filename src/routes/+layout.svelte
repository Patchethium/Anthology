<svelte:head>
  <title>Anthe{sub_title}</title>
  <meta
    name="description"
    content="Anthe is an out-of-box TTS app, 
             fully controllable, free and open source"
  />
</svelte:head>

<div
  class="flex h-screen w-full flex-col bg-white pt-12 text-gray-700 dark:bg-slate-900 dark:text-slate-200"
>
  <Header />
  <div class="bg-white shadow-slate-900 dark:bg-slate-900 dark:shadow-gray-100">
    <slot />
  </div>
  <div class="flex-1" />
  <Footer />
</div>

<script lang="ts">
import Footer from '$lib/Footer.svelte';
import Header from '$lib/Header.svelte';
import { page } from '$app/stores';
import '../tailwind.css';
let sub_title = '';
$: {
  let path = $page.url.pathname.slice(1);
  if (path.length == 0) {
    sub_title = '';
  } else {
    sub_title = '';
    let paths = path.split('/');
    paths.forEach((p) => {
      sub_title = sub_title + ' / ' + p.charAt(0).toUpperCase() + p.slice(1);
    });
  }
}
</script>
