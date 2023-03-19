import PictureTile from '@/components/PictureTile';
import Tile from '@/components/Tile';
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import { prawnImages } from '@/data';


export default function Home() {  

  return (
    <>
      <div className='flex justify-center flex-wrap'>
      {
        prawnImages.map((item, index)=>{
          return (
          <div key={index} className='mx-3 my-2'>
            <PictureTile title={item.title} link={item.link} src={item.src} views={item.views} />
          </div>
          )
        })
      }
      
      </div>
    </>
  )
}
