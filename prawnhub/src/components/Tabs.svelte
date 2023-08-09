<script>
    const tabCSS = "border-b-4 border-b-dark hover:border-b-primary cursor-pointer text-center py-2 px-4 select-none";
</script>

<div class='bg-dark text-white mx-4 my-4 md:flex hidden justify-center'>
    <table class='w-full font-bold'>
      <thead>
        <tr>
        <td class={`${tabCSS} border-b-primary`}>Home</td>
        <td class={tabCSS}>Prawn Videos</td>
        <td class={tabCSS}>Category</td>
        <td class={tabCSS}>Live Prawns</td>
        <td class={tabCSS}>Prawnstars</td>
        <td class={tabCSS}>Local Prawns</td>
        <td class={tabCSS}>Community</td>
        <td class={tabCSS}>Photo & GIFs</td>
        </tr>
      </thead>
    </table>
    <div class='md:hidden visible w-3/5 border-b-primary border-b-2'>
      <select class='w-full bg-dark text-white'>
        <option value="Home">Home</option>
        <option value="Prawn Videos">Prawn Videos</option>
        <option value="Category">Category</option>
        <option value="Live Prawns">Live Prawns</option>
        <option value="Prawnstars">Prawnstars</option>
        <option value="Local Prawns">Local Prawns</option>
        <option value="Community">Community</option>
        <option value="Photo & GIFs">Photo & GIFs</option>
      </select>
      </div>
    </div>