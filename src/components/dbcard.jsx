import React from 'react'

function Dbcard(props) {
  return (
    <div className='bg-[#1c1b23] border border-blue-900 p-4 flex gap-4 flex-col w-1/4 h-40 rounded-md'>
      <h3 className='flex  text-2xl text-white'>{props.title}</h3>
        <div className='flex gap-2 flex-wrap'>
            <span className='border rounded-md hover:bg-slate-500 border-blue-500 text-green-400 p-2 font-medium'>{props.one}</span>
            <span className='border rounded-md border-sky-900 hover:bg-slate-500 text-green-400 p-2 font-medium'>{props.two}</span>
            
        </div>
    </div>
  )
}

export default Dbcard;
