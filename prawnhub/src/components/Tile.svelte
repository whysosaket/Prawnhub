<script lang="ts">
    // @ts-ignore
    import Icon from "svelte-icons-pack/Icon.svelte";
    import AiFillEye from "svelte-icons-pack/ai/AiFillEye";
    export let link = "";
    export let title = "";
    export let src = "";
    export let views = "";
</script>


<div class="overflow-hidden w-72 text-gray-400">
  <div class="mx-auto h-48 relative overflow-hidden">
    <div
      class="text-white opacity-50 text-xs absolute bottom-2 right-1 rounded-md p-1 border border-gray-400 bg-gray-400 z-10"
    >
      <p>02:12</p>
    </div>
    <img
      class="cursor-pointer"
      width={300}
      height={150}
      src={link}
      alt={title}
    />
  </div>
  <div class="text-sm flex justify-between">
    <span class="text-gray-400">{src}</span>
    <span class="flex">
      <span class="my-auto"> 
        <Icon src={AiFillEye} size={"20"} />
      </span>
      {views}
    </span>
  </div>
  <h1 class="text-white">{title.slice(0, 30)}...</h1>
</div>
