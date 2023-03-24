import Image from 'next/image'
import React, {useState} from 'react'
import {AiOutlineSearch, AiFillStar} from 'react-icons/ai'
import {BsFillCameraVideoFill} from 'react-icons/bs'
import {BiSearchAlt2} from 'react-icons/bi'

const Navbar = () => {

  const [search, setSearch] = useState(false);

  const showSearchBar = (event)=>{
    event.preventDefault();
    setSearch(!search);
  }

  return (
    <>
    <div className="w-screen bg-dark text-gray-400 text-sm">
        <div className='flex md:justify-start justify-center py-1'>
            <Image src="/logo.webp" className='cursor-pointer' alt='logo' width={200} height={100} />
            <div className="w-2/5 flex h-8 my-auto ml-12">
            {/* <span className="absolute"><AiOutlineSearch /></span> */}
            <input className="w-full hidden md:block bg-gray-800 text-gray-400 rounded-md my-auto p-2" type="text" placeholder={`Search Prawnhub`} />
            <button className="hidden md:block text-gray-300 -my-1 p-2"><BiSearchAlt2 size={30} /></button>
            </div>
            <div className="w-1/5 h-8 md:flex my-auto ml-8 font-semibold hidden">
                <button className="bg-gray-800 flex text-white rounded-md my-auto p-2"> 
                <span className='my-auto mx-1'>
                <BsFillCameraVideoFill /> 
                </span>
                Upload
                </button>
                <button className=" bg-primary flex text-black rounded-md my-auto p-2 ml-2"> 
                <span className='my-auto mx-1'>
                <AiFillStar /> 
                </span>
                Upgrade
                </button>
            </div>

            <div className="w-1/5 h-8 md:flex justify-end mr-4 my-auto ml-8 font-semibold hidden">
                <button className="text-gray-300 my-auto p-2">Log In</button>
                <button className="text-gray-300 my-auto p-2 ml-2">Sign Up</button>
            </div>
            <div className='flex justify-end'>
            <button className="md:hidden text-gray-300 my-auto p-2" onClick={showSearchBar}><BiSearchAlt2 size={30} /></button>
            </div>
        </div>
        <div className={`w-full justify-between ${search?'flex':'hidden'}`}>
              <input className="w-5/6 md:hidden bg-gray-800 text-gray-400 rounded-md my-auto p-2 mx-2" type="text" placeholder={`Search Prawnhub`} />
              <button className="md:hidden text-gray-300 my-auto p-2"><BiSearchAlt2 size={30} /></button>
        </div>
    </div>
    </>
  )
}

export default Navbar