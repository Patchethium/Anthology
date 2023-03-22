<svelte:head>
  <title>Anthe{sub_title}</title>
  <meta
    name="description"
    content="Anthe is an out-of-box TTS software, 
             fully controllable, free and open source"
  />
</svelte:head>

<div class="h-screen w-full bg-white pt-12 text-gray-700 dark:bg-slate-900 dark:text-gray-200">
  <Header />
  <div class="bg-white shadow-slate-900 dark:bg-slate-900 dark:shadow-gray-100 ">
    <slot />
  </div>
  <Footer />
</div>

<script lang="ts">
import Footer from '$lib/Footer.svelte';
import Header from '$lib/Header.svelte';
import { page } from '$app/stores';
let sub_title = '';
$: {
  let path = $page.url.pathname.slice(1);
  if (path.length == 0) {
    sub_title = '';
  } else {
    sub_title = ` - ${path.charAt(0).toUpperCase() + path.slice(1)}`;
  }
}
import '../tailwind.css';
</script>
