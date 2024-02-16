import React from 'react'
import ProjectCard from './projectCard';
import memo_img from './images/aichatbot.jpeg';
import calculator from './images/calculator.jpeg';
import ecom from './images/ecommerce.jpeg';
import dopaint from './images/paint.jpeg';
function Projects() {
  return (
      <div className='ml-80 bg-black mt-5'>
        <h2 className='text-2xl font-semibold text-white flex justify-start ml-4'>Projects</h2>
        
        <div className='flex justify-evenly p-4 flex-wrap ml-4'>
            <ProjectCard url={memo_img} name="Memo AI" tech="Python, Vs Code, AI modules"></ProjectCard>
            <ProjectCard url={ecom} name="E_Comm_Kart" tech="Kotlin, Android Studio, Firebase, Admin panel"></ProjectCard>
            <ProjectCard url={calculator} name="Calculator" tech="Kotlin, Android Studio, Maths"></ProjectCard>
            <ProjectCard url={dopaint} name="Do Paint" tech="Kotlin, Android Studio"></ProjectCard>
        </div>
    </div>
  )
}



export default Projects;