import Image from 'next/image'
import React from 'react'
import {AiOutlineSearch, AiFillStar} from 'react-icons/ai'
import {BsFillCameraVideoFill} from 'react-icons/bs'

const Navbar = () => {
  return (
    <>
    <div className="w-screen bg-dark text-gray-400 text-sm">
        <div className='flex justify-start py-1'>
            <Image src="/logo.webp" width={200} height={100} />
            <div className="w-2/5 h-8 my-auto ml-12">
            {/* <span className="absolute"><AiOutlineSearch /></span> */}
            <input className="w-full bg-gray-800 text-gray-400 rounded-md my-auto p-2" type="text" placeholder={`Search Prawnhub`} />
            </div>
            <div className="w-1/5 h-8 flex my-auto ml-8 font-semibold">
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

            <div className="w-1/5 h-8 flex justify-end mr-4 my-auto ml-8 font-semibold">
                <button className="text-gray-300 my-auto p-2">Log In</button>
                <button className="text-gray-300 my-auto p-2 ml-2">Sign Up</button>
            </div>
        </div>
       
        
    </div>
    </>
  )
}

export default Navbar