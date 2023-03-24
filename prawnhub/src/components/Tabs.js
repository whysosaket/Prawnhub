import React, {useState} from 'react'



const Tabs = () => {

  const tabCSS = "border-b-4 border-b-dark hover:border-b-primary cursor-pointer text-center py-2 px-4 select-none";
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabClick = (event) => {
    // console.log(event.currentTarget.innerText);
    setActiveTab(event.currentTarget.innerText);
  }

  return (
    <div className='bg-dark text-white mx-4 my-4 md:flex hidden justify-center'>
    <table className='w-full font-bold'>
      <thead>
        <tr>
        <td className={`${tabCSS} border-b-primary`}>Home</td>
        <td className={tabCSS}>Prawn Videos</td>
        <td className={tabCSS}>Category</td>
        <td className={tabCSS}>Live Prawns</td>
        <td className={tabCSS}>Prawnstars</td>
        <td className={tabCSS}>Local Prawns</td>
        <td className={tabCSS}>Community</td>
        <td className={tabCSS}>Photo & GIFs</td>
        </tr>
      </thead>
    </table>
    <div className='md:hidden visible w-3/5 border-b-primary border-b-2'>
      <select className='w-full bg-dark text-white'>
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
  )
}

export default Tabs