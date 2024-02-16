import React from 'react'
import profilepic from './images/pic_Profile.jpeg';
import Contact from './contactbtn';
import Projects from './projects';
import Skils from './skills';
import Skills from './skills';
function Container() {
  return (
    <div>
        <div className='ml-80 pt-20 bg-[#1c1b23] h-full rounded-md flex justify-between items-center'>
          
          <div className='p-8 flex justify-center items-center gap-6' >
            <img className='h-24 w-24 rounded-full  border-4 border-white' src={profilepic} alt="Loading" />
            
            <div className='flex flex-col justify-center items-start'>
                <span className='text-white text-2xl'>Vishal Sharma</span>
                <span className='text-white text-1xl'>@WebDev</span>
            </div>
          </div>
          <Contact title="Follow Me on Insta"></Contact>
          
        </div>
        <Projects></Projects>
        <Skills></Skills>
    </div>
)
}

export default Container;
