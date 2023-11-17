import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <div className='w-full p-5 bg-gray-950  mx-auto text-center text-white'>
        <h1 className='p-3'>Mohamed Ameen</h1>
        <LinkedInIcon className='mr-3 cursor-pointer hover:scale-105 shadow-md shadow-slate-600'/>
        <GitHubIcon className='mr-3 cursor-pointer hover:scale-105 shadow-md shadow-slate-600'/>
    </div>
  )
}

export default Footer