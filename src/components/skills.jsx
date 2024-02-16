import React from 'react'
import Dbcard from './dbcard';
import SkillsCard from './skillsCard';

function Skills() {
  return (
    <div className='ml-80 bg-black flex flex-col'>
      <h2 className='text-2xl font-bold text-white flex ml-4 mb-4 justify-start'>What i Know</h2>
      <div className='flex overflow-hidden gap-4 ml-16'>
        <SkillsCard title="Frontend" one="Html" two="React" three="JavaScript" four="Xml"></SkillsCard>
        <SkillsCard title="Backend" one="NodeJs" two="Kotlin" three="Python" four="Express Js"></SkillsCard>
        <Dbcard title="Database" one="Firebase" two="My Sql"></Dbcard>
      </div>


      
    </div>
  )
}

export default Skills
