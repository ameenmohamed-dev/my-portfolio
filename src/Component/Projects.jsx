import React from 'react'
import Weather from '../assets/weather-app.jpg'
import TaskManager from '../assets/task-manager.png'
import Registration from '../assets/registration.jpg'

function Projects() {
  return (
    <div id='projects' className='text-white mx-auto max-w-[1280px] p-3'>
        <h1 className='text-center md:text-start capitalize text-xl md:text-2xl m-4'>My Works</h1>
        <div className="grid md:grid-cols-3 xl:grid-cols-3">
            <div className="md:w-[240px] lg:w-[300px] xl:w-[400px] p-4 box-border ">
                <a href="https://myweatherrepo.netlify.app/" rel="noreferrer" target='_blank'>
                    <img className='w-[400px] h-[200px] rounded-xl cursor-pointer shadow-lg shadow-gray-400 hover:scale-105' src={Weather} alt="" />
                    <h1 className='text-center capitalize lg:text-xl m-2'>Weather App</h1>    
                </a>
            </div>
            <div className="md:w-[240px] lg:w-[300px] xl:w-[400px] p-4 box-border ">
                <a href="https://remindmetask.netlify.app/" rel="noreferrer" target='_blank'>
                    <img className='w-[400px] h-[200px] rounded-xl cursor-pointer shadow-lg shadow-gray-400 hover:scale-105' src={TaskManager} alt="" />
                    <h1 className='text-center capitalize lg:text-xl m-2'>Task Manager</h1>    
                </a>
            </div>
            <div className="md:w-[240px] lg:w-[300px] xl:w-[400px] p-4 box-border ">
                <img className='w-[400px] h-[200px] rounded-xl cursor-pointer shadow-lg shadow-gray-400 hover:scale-105' src={Registration} alt="" />
                <h1 className='text-center capitalize lg:text-xl m-2'>3D Registration</h1>    
            </div>
        </div>
    </div>
  )
}

export default Projects