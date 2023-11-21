import React from 'react'
import Cards from './Components/Cards'
import lion from "./assets/lion.jpg"
import mypic from "./assets/whiteprofile.jpg"
import profile from "./assets/profile.jpg"
import Hero from './Components/Hero'


const App = () => {
  return (
    <>
      <div className='max-w-[1536px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-5'>
        <Cards name="JANISAR" Img={mypic} des="class in Tailwind can be applied conditionas, which makes it a piece of cake to build ."/>
        <Cards name="SAQLAIN" Img={mypic} des="Every utility class in Tailwind can be applied conditionas, which makes it a  cake to build ."/>
        <Cards name="SHUJAAT ALI" Img={mypic} des="Every utility class in Tailwind can be applied conditionas, whutility class in Tailwind can be applied conditionas, which makes it a piece of cake to build ."/>
        <Cards name="KARAMAT ALI" Img={mypic} des="Every utility class in Tailwind can be applied conditionasa piece of cake to build ."/>
        <Cards name="SIR ZIA KHAN" Img={mypic} des="Every utility class in Tailwind can be applied conditionas,  to build ."/>
        <Cards name="GHULAM QADIR" Img={mypic} des="Every utility class in Tailwind can be applied cond a piece of cake to build ."/>
        <Cards name="SHAHBAZ ALI" Img={mypic} des="Every utility class in Tailwind can be applied conditionas, wild ."/>
        <Cards name="MALLAH" Img={mypic} des="Every utility class in Tailwind can be applied conditionas, wild ."/>
      
      </div>

      <div className='max-w-[1536px] mx-auto py-10 '>
      <Hero img={profile} title="How to start youtube from zero to advance" />

      </div>
    </>
  )
}

export default App
