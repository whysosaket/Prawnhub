<script>
  import { Categories } from "../util/data";
  import SubheadItem from "./SubheadItem.svelte";
</script>

<h1 class="text-white font-bold text-xl md:mx-28 text-center md:text-start">
  Hot Prawn Dishes in India 🇮🇳
</h1>

<div class="md:flex md:flex-wrap my-4 md:ml-28 hidden select-none">
  {#each Categories as Category}
    <SubheadItem title={Category.title} />
  {/each}
</div>
