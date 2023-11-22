import React from 'react'

function Skills() {
  return (
    <div id='about' className='flex flex-col items-center md:items-start md:pl-5 max-w-[1280px] h-max text-white mx-auto '>
        <h1 className='capitalize text-xl md:text-2xl m-4'>What i know</h1>
        <div className="rounded-lg bg-gray-900 w-fit uppercase p-4 grid grid-cols-2 md:flex">
          <h1 className='rounded-lg p-2 bg-black w-fit m-3  hover:scale-105'>html</h1>
          <h1 className='rounded-lg p-2 bg-black w-fit m-3  hover:scale-105'>css</h1>
          <h1 className='rounded-lg p-2 bg-black w-fit m-3  hover:scale-105'>javascript</h1>
          <h1 className='rounded-lg p-2 bg-black w-fit m-3  hover:scale-105'>react</h1>
          <h1 className='rounded-lg p-2 bg-black w-fit m-3  hover:scale-105'>bootstrap</h1>
          <h1 className='rounded-lg p-2 bg-black w-fit m-3  hover:scale-105'>tailwindcss</h1>
          <h1 className='rounded-lg p-2 bg-black w-fit m-3  hover:scale-105'>git&github</h1>
        </div>
    </div>
  )
}

export default Skills