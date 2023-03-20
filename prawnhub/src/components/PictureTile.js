import React from 'react'
import Image from 'next/image'
import {AiFillEye} from 'react-icons/ai'

const PictureTile = (props) => {
    const {title, link, views, src} = props;
  return (
    <div className='overflow-hidden w-72 text-gray-400'>
    <div className='mx-auto h-48 overflow-hidden'>
    <Image width={300} height={150} src={link} alt={title} />
    </div>
    <div className='text-sm flex justify-between'>
        <span className='text-white'>{src}</span>
        <span className='flex'>
            <span className='my-auto'> <AiFillEye /> </span>
            {views}
        </span>
    </div>
    <h1 className='text-white'>{title.slice(0,30)}...</h1>
    </div>
  )
}

export default PictureTile