import { User } from 'lucide-react';
import React from 'react'
import Contact from './contactbtn';

function TopNav() {
  return (
    <div className='h-20 w-full flex justify-between bg-black fixed'>         
          <div className='flex flex-row justify-center items-center ml-10 gap-2'>
            <span className='rounded-full bg-green-600 h-4 w-4'></span>
            <span className='rounded-full bg-green-600 h-4 w-4'></span>
            
          </div>
          <div className='flex justify-center items-center'>
            <Contact title='Contact Me'></Contact>
          </div>
        </div>
  );
}

export default TopNav;
