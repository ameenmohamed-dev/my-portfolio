import React, { useRef} from 'react'
import Typed from 'react-typed';
import emailjs from '@emailjs/browser';
import { useAlert } from 'react-alert';

function Contacts() {
    
    const form = useRef()
    const alert = useAlert()

    const handleSubmit = (e)=>{
        e.preventDefault()
        emailjs.sendForm('service_2pjcysd', 'template_qo7y0ey', form.current, 'VSMxO0U_hSjOCJT-w')
        .then((result) => {
            console.log(result.text);
            alert.show("Message sent successfully")
        }, (error) => {
            console.log(error.text);
            alert.show("There is an error")
        });
        
    }
    
  return (
    <div id='contacts' className='text-white max-w-[1280px] mx-auto'>
        <h1 className="text-center md:text-start capitalize text-xl md:text-2xl m-4">contact me</h1>
        <div className="grid md:grid-cols-2 md:h-[300px]">
            <div className="capitalize text-2xl md:text-3xl lg:text-4xl text-center md:text-start m-4 flex flex-col justify-center md:pl-10 font-bold">
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
            <form 
                className="flex flex-col gap-5 m-5 mx-auto justify-center w-[60%]"
                ref={form}
                onSubmit={handleSubmit}
            >
                <input 
                    type="text" 
                    className="bg-black border-b-2 pb-3 outline-none" 
                    placeholder='Name'
                    name='name'                  
                    required
                />
                <input 
                    type="tel" 
                    className="bg-black border-b-2 pb-3 outline-none"
                    placeholder='Mobile No'
                    name='mobile'                   
                    required
                />
                <input 
                    type="text" 
                    className="bg-black border-b-2 pb-3 outline-none" 
                    placeholder='Email'
                    name='email'
                    required
                />
                <textarea 
                    name="message" 
                    className='bg-black border-b-2 pb-3 outline-none'
                    placeholder='Messages'
                    cols="30" 
                    rows="1"
                    maxLength={200}
                    required
                />
                <button type='submit' className=' text-white bg-orange-600 w-[35%] mx-auto  py-1 font-medium'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contacts