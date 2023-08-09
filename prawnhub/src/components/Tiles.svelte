<script>
    import {prawnImages} from "../util/data";
    import Tile from "./Tile.svelte";
</script>

<div>

    <div class='flex justify-center flex-wrap'>
    {#each prawnImages as prawnImage }
        <div class='mx-3 my-2'>
            <Tile link={prawnImage.link} title={prawnImage.title} src={prawnImage.src} views={prawnImage.views} />
        </div>
    {/each}
    </div>

</div>