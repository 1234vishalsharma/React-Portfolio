import React from 'react'
import {Home,Instagram,User2Icon,Youtube,Code2,Github,Linkedin} from 'lucide-react';

function LeftNav() {
  return (
    <div className='h-4/5 w-64 bg-[#1c1b23] fixed top-16 left-6 flex flex-wrap justify-center pt-6 gap-6 flex-col text-white font-thin rounded-md'>
        <h2 className='text-2xl font-serif flex ps-9 items-start text-gray-600 italic'>Navigations</h2>
      <span className='hover:-translate-y-1 cursor-pointer ease-in-out duration-200 w-full flex items-center justify-center gap-4'>
        <Home color='Blue' size={18}></Home>
        Home</span>
      <span className='hover:-translate-y-1 cursor-pointer ease-in-out duration-200 w-full flex items-center justify-center gap-4'>
        <User2Icon color='white' size={18}></User2Icon>
        Profile</span>
      <span className='hover:-translate-y-1 cursor-pointer ease-in-out duration-200 w-full flex items-center justify-center gap-4'>
        <Code2 color='green' size={18}></Code2>
        Snippets</span>
      <span className='hover:-translate-y-1 cursor-pointer ease-in-out duration-200 w-full flex items-center justify-center gap-4'>
        <Youtube color='red' size={18}></Youtube>
        Youtube</span>

        <h2 className='text-2xl font-serif flex ps-9 items-start text-gray-600 italic'>Socials</h2>
      <span className=' cursor-pointer hover:-translate-y-1 hover:ease-in-out duration-200 w-full flex items-center justify-center gap-4'>
        <Github color='white' size={20}></Github>
        Github</span>
      <span className='hover:-translate-y-1 cursor-pointer ease-in-out duration-200 w-full flex items-center justify-center gap-4'>
        <Instagram className='flex items-start' color='pink' size={20}></Instagram>
        Instagram</span>
      <span className='hover:-translate-y-1 cursor-pointer ease-in-out duration-200 w-full flex items-center justify-center gap-4'>
        <Linkedin className='flex items-start' color='blue' size={20}></Linkedin>
        Linkedin</span>
      <span className='hover:-translate-y-1 cursor-pointer ease-in-out duration-200 w-full flex items-center justify-center gap-4'>
        <User2Icon className='flex items-start' color='white' size={20}></User2Icon>
        Portfolio</span>
    </div>
  );
}
export default LeftNav;