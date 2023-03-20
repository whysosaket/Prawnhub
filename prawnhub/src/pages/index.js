import PictureTile from '@/components/PictureTile';
import Tile from '@/components/Tile';
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import { prawnImages, Categories } from '@/data';
import "@/styles/Home.module.css"


export default function Home() {  

  return (
    <>
      
      
      <h1 className='text-white font-bold text-xl md:mx-28 text-center md:text-start'>Hot Prawn Dishes in India 🇮🇳</h1>

      <div className='md:flex md:flex-wrap my-4 md:ml-28 hidden'>
      {
        Categories.map((item, index)=>{
          return (
          <div key={index} className='mx-3 my-auto'>
            <span className='text-white rounded-3xl hover:bg-gray-600 bg-gray-900 border-gray-600 border p-2'>{item.title}</span>
          </div>
          )
        })
      }
      </div>

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
