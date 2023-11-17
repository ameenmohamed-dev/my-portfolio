import React, { useState } from 'react'
import { CiMenuKebab} from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import {Link} from 'react-scroll'

function Navbar() {
    const [nav,setNav] = useState(false)

    const handleNav = ()=>{
        setNav(!nav)
    }

    const handleDropDown = ()=>{
        setNav(!nav)
    }

  return (
    <div className='flex justify-between items-center mx-auto pl-2 pr-2 max-w-[1280px] h-16 text-white '>
        <h1 className={'text-[#00df9a] text-xl md:text-2xl font-bold uppercase'}>Mohamed Ameen</h1>
        <ul className='uppercase hidden md:flex gap-3 mr-2 text-lg font-medium cursor-pointer'>
            <li className='hover:border-b-2 pb-1'>
                <Link activeClass="active" to="home" spy={true} smooth={true}>
                    home
                </Link>
            </li>
            <li className='hover:border-b-2 pb-1'>
                <Link activeClass="active" to="about" spy={true} smooth={true}>
                    about
                </Link>
            </li>
            <li className='hover:border-b-2 pb-1'>
                <Link to="projects" spy={true} smooth={true}>
                    projects
                </Link>
            </li>
            <li className='hover:border-b-2 pb-1'>
                <Link to="contacts" spy={true} smooth={true}>
                    contacts
                </Link>
            </li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <CiMenuKebab size={20}/> : <IoMdClose  size={20}/> }
        </div>      
        <div className={nav ? 'fixed md:hidden top-0 left-0 w-60% border-r-2 border-gray-900 h-full ease-in-out duration-200 text-white' : 'fixed left-[-100%] ease-in-out duration-300'}>
            <h1 className='opacity-0 w-full m-2 mt-4 text-[#00df9a] text-xl md:text-2xl font-bold uppercase'>Mohamed Ameen</h1>
            <ul className='uppercase mr-2 text-lg font-medium cursor-pointer'>
                <li className='p-4  border-b border-gray-800'>
                    <Link onClick={handleDropDown} activeClass="active" to="home" spy={true} smooth={true}>
                        home
                    </Link>
                </li>
                <li className='p-3  border-b border-gray-800'>
                    <Link onClick={handleDropDown} to="about" spy={true} smooth={true}>
                        about
                    </Link>
                </li>
                <li className='p-3 border-b border-gray-800' >
                    <Link to="projects" spy={true} smooth={true}>
                        projects
                    </Link>
                </li>
                <li className='p-3 ' >
                    <Link onClick={handleDropDown}  to="contacts" spy={true} smooth={true}>
                        contacts
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar