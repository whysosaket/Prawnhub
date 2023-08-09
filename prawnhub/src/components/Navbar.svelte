<script>
  // @ts-ignore
  import Icon from "svelte-icons-pack/Icon.svelte";
  import AiOutlineSearch from "svelte-icons-pack/ai/AiOutlineSearch";
  import AiFillStar from "svelte-icons-pack/ai/AiFillStar";
  import BsCameraVideoFill from "svelte-icons-pack/bs/BsCameraVideoFill";
  import BiSearchAlt2 from "svelte-icons-pack/bi/BiSearchAlt2";
</script>

<div>
  <div class="w-screen bg-dark text-gray-400 text-sm">
    <div class="flex md:justify-start justify-center py-1">
      <img
        src="/logo.webp"
        class="cursor-pointer"
        alt="logo"
        width={200}
        height={100}
      />
      <div class="w-2/5 flex h-8 my-auto ml-12">
        <input
          class="w-full hidden md:block bg-gray-800 text-gray-400 rounded-md my-auto p-2"
          type="text"
          placeholder={`Search Prawnhub`}
        />
        <button class="hidden md:block text-gray-300 -my-1 p-2"
          ><Icon color={"white"} src={BiSearchAlt2} size={"30"} /></button
        >
      </div>
      <div class="w-1/5 h-8 md:flex my-auto ml-8 font-semibold hidden">
        <button class="bg-gray-800 flex text-white rounded-md my-auto p-2">
          <span class="my-auto mx-1">
            <!-- <BsFillCameraVideoFill />  -->
            <Icon src={BsCameraVideoFill} size={"20"} />
          </span>
          Upload
        </button>
        <button class=" bg-primary flex text-black rounded-md my-auto p-2 ml-2">
          <span class="my-auto mx-1">
            <!-- <AiFillStar />  -->
            <Icon src={AiFillStar} size={"20"} />
          </span>
          Upgrade
        </button>
      </div>

      <div
        class="w-1/5 h-8 md:flex justify-end mr-4 my-auto ml-8 font-semibold hidden"
      >
        <button class="text-gray-300 my-auto p-2">Log In</button>
        <button class="text-gray-300 my-auto p-2 ml-2">Sign Up</button>
      </div>
      <div class="flex justify-end">
        <!-- <button class="md:hidden text-gray-300 my-auto p-2"><BiSearchAlt2 size={30} /></button> -->
      </div>
    </div>
    <div class={`w-full justify-between ${true ? "flex" : "hidden"}`}>
      <input
        class="w-5/6 md:hidden bg-gray-800 text-gray-400 rounded-md my-auto p-2 mx-2"
        type="text"
        placeholder={`Search Prawnhub`}
      />
      <!-- <button class="md:hidden text-gray-300 my-auto p-2"><BiSearchAlt2 size={30} /></button> -->
    </div>
  </div>
</div>
