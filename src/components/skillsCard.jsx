import React from 'react'

function SkillsCard(props) {
   
  return (
    <div className='bg-[#1c1b23] border border-blue-900 p-4 flex gap-4 flex-col w-1/4 h-40 rounded-md'>
      <h3 className='flex  text-2xl text-white'>{props.title}</h3>
        <div className='flex gap-2 flex-wrap'>
            <span className='border rounded-md hover:bg-slate-500 border-white text-green-400 p-2 font-medium'>{props.one}</span>
            <span className='border rounded-md border-red-400 hover:bg-slate-500 text-green-400 p-2 font-medium'>{props.two}</span>
            <span className='border rounded-md border-purple-500 text-green-400 hover:bg-slate-500 p-2 font-medium'>{props.three}</span>
            <span className='border rounded-md hover:bg-slate-500 border-pink-300 text-green-400 p-2 font-medium'>{props.four}</span>
        </div>
    </div>
  )
}

export default SkillsCard;