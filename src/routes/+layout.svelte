<script lang="ts">
  import Footer from '../lib/Footer.svelte';
  import Header from '../lib/Header.svelte';
  import '../tailwind.css';
</script>

<svelte:head>
  <title>Anthe</title>
  <meta
    name="description"
    content="Anthe is an out-of-box TTS software, 
             fully controllable, free and open source"
  />
</svelte:head>
<Header />
<div class="w-full h-full">
  <slot />
</div>
<Footer />
