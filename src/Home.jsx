import React from 'react'
import myImage from "../Image/Manav.png"

function Home() {
  return (
    <>
    <div className='bg-gradient-to-br from-teal-300 to-white' >
      <div className='flex justify-around items-center  p-4'>
        <div className="text-center">
          <h3 className="text-lg">Hey There 👋 I am</h3>
          <h1 className="text-4xl font-bold">Manav Rastogi</h1>
          <h2 className="text-xl text-blue-600">Professional: Web Developer</h2>
          <div className="mt-4 space-x-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            <a href='https://www.linkedin.com/in/manavrastogi03/'>
              Contact Me</a>
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            <a href='mailto:manavrastogi2003@gmail.com'>
              Hire Me &#x2709;</a>
            </button>
          </div>
        </div>
        <div>
          <img src={myImage} alt="My Image" className="h-90 w-64 rounded-lg" />
        </div>
      </div>
      </div>
    </>
  )
}

export default Home
