import React from 'react'
import Image from 'next/image'
import {AiFillEye} from 'react-icons/ai'

const PictureTile = (props) => {
    const {title, link, views, src} = props;
  return (
    <div className='overflow-hidden w-72 text-gray-400'>
    <div className='mx-auto'>
    <Image width={300} height={150} src={link} />
    </div>
    <div className='text-sm flex justify-between'>
        {src}
        <span className='flex'>
            <span className='my-auto'> <AiFillEye /> </span>
            {views}
        </span>
    </div>
    <h1>{title.slice(0,30)}...</h1>
    </div>
  )
}

export default PictureTile