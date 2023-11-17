import React from 'react'
import Typed from 'react-typed';

function Contacts() {
  return (
    <div id='contacts' className='text-white max-w-[1280px] mx-auto'>
        <h1 className="text-center md:text-start capitalize text-xl md:text-2xl m-4">contact me</h1>
        <div className="grid md:grid-cols-2 md:h-[300px]">
            <div className="capitalize text-2xl md:text-3xl lg:text-4xl text-center md:text-start m-4 flex flex-col justify-center pl-10 font-bold">
                <h1 className=''>
                    Let's talk about
                </h1>
                <Typed
                    className='text-[#00df9a] pt-4'
                    strings={['Projects !']}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                />
            </div>
            <div className="flex flex-col gap-5 m-5 mx-auto justify-center w-[60%] ">
                <input 
                    type="text" 
                    className="bg-black border-b-2 pb-3 outline-none" 
                    placeholder='Name'
                />
                <input 
                    type="text" 
                    className="bg-black border-b-2 pb-3 outline-none" 
                    placeholder='Email' 
                />
                <textarea 
                    name="message" 
                    className='bg-black border-b-2 pb-3 outline-none'
                    placeholder='Messages'
                    cols="30" 
                    rows="1"
                    maxLength={200}
                />
                <button className=' text-white bg-orange-600 w-[35%] mx-auto  py-1 font-medium'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Contacts