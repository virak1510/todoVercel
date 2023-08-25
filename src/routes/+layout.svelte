<script>
  import Nav from "$lib/components/Nav.svelte";
  import "../app.postcss";
</script>
<div class="min-h-screen" data-theme="wireframe">
  <Nav></Nav>
  <slot />
</div>
