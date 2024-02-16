import React from 'react'

 function ProjectCard(props) {
  return (
    <div className='h-64 w-1/5 bg-white overflow-hidden  border-black border-1 rounded-md hover:cursor-pointer'>
      <img className='w-full h-40 object-cover' src={props.url} alt="Loading..." />
      <div className='flex flex-col  mt-2 text-black gap-2'>
        <span className='w-full ml-2 font-bold flex flex-wrap '>{props.name}</span>
        <span className='w-full ml-2 font-light text-xs flex flex-wrap'>{props.tech}</span>
      </div>
    </div>
  )
}

export default ProjectCard;