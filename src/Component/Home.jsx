import React from 'react'

function Home() {
  return (
    <div id='home' className='text-white max-w-[1280px] grid gap-4 mx-auto md:grid-cols-2 h-[350px] md:h-[400px] '>
        <div className="flex flex-col items-center md:items-start  justify-center p-4 mx-auto w-full h-full">
            <h1 className='text-[#00df9a] text-xl md:text-3xl lg:text-4xl font-bold'>Hello.</h1>
            <p className='p-4 font-medium md:text-xl lg:text-2xl'>I'm Mohamed Ameen</p>
            <h1 className='font-bold text-xl md:text-3xl lg:text-4xl'>Front-End Developer</h1>
        </div>
        
    </div>
  )
}

export default Home