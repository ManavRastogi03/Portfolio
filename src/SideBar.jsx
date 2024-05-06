import React from 'react'
import Content from './Content'


function Sidebar({ onSectionSelect }) {
    return (
        <>
        <div className="flex">
        <aside class="flex flex-col w-64 h-80 overflow-y-hidden px-5 py-8  bg-white border-r rtl:border-r-0 rtl:border-l ">
    <div class="flex flex-col justify-between flex-1 mt-6">
        <nav class="-mx-3 space-y-3 ">
            <a onClick={() => onSectionSelect('home')} class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-green-100 dark:hover:bg-text-teal-300 dark:hover:text-gray-900 hover:text-gray-900" href="#">
            <svg class="flex-shrink-0 w-5 h-5 text-orange-400 transition duration-75 dark:text-orange-400 group-hover:text-orange-400 dark:group-hover:text-orange-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 20">
                  <path d="M7.958 19.393a7.7 7.7 0 0 1-6.715-3.439c-2.868-4.832 0-9.376.944-10.654l.091-.122a3.286 3.286 0 0 0 .765-3.288A1 1 0 0 1 4.6.8c.133.1.313.212.525.347A10.451 10.451 0 0 1 10.6 9.3c.5-1.06.772-2.213.8-3.385a1 1 0 0 1 1.592-.758c1.636 1.205 4.638 6.081 2.019 10.441a8.177 8.177 0 0 1-7.053 3.795Z"/>
               </svg>
                <span class="mx-2 text-sm font-medium">Home</span>
            </a>

            <a onClick={() => onSectionSelect('about')}class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-green-100 dark:hover:bg-text-teal-300 dark:hover:text-gray-900 hover:text-gray-900" href="#">
            <svg class="flex-shrink-0 w-5 h-5 text-orange-500  transition duration-75 dark:text-orange-400 group-hover:text-orange-500 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 20">
                  <path d="M7.958 19.393a7.7 7.7 0 0 1-6.715-3.439c-2.868-4.832 0-9.376.944-10.654l.091-.122a3.286 3.286 0 0 0 .765-3.288A1 1 0 0 1 4.6.8c.133.1.313.212.525.347A10.451 10.451 0 0 1 10.6 9.3c.5-1.06.772-2.213.8-3.385a1 1 0 0 1 1.592-.758c1.636 1.205 4.638 6.081 2.019 10.441a8.177 8.177 0 0 1-7.053 3.795Z"/>
               </svg>
                <span class="mx-2 text-sm font-medium">About</span>
            </a>

            <a onClick={() => onSectionSelect('skills')} class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-green-100 dark:hover:bg-text-teal-300 dark:hover:text-gray-900 hover:text-gray-900" href="#">
            <svg class="flex-shrink-0 w-5 h-5 text-orange-400 transition duration-75 dark:text-orange-400 group-hover:text-orange-400 dark:group-hover:text-orange-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 20">
                  <path d="M7.958 19.393a7.7 7.7 0 0 1-6.715-3.439c-2.868-4.832 0-9.376.944-10.654l.091-.122a3.286 3.286 0 0 0 .765-3.288A1 1 0 0 1 4.6.8c.133.1.313.212.525.347A10.451 10.451 0 0 1 10.6 9.3c.5-1.06.772-2.213.8-3.385a1 1 0 0 1 1.592-.758c1.636 1.205 4.638 6.081 2.019 10.441a8.177 8.177 0 0 1-7.053 3.795Z"/>
               </svg>
                <span class="mx-2 text-sm font-medium">Skills</span>
            </a>

            <a onClick={() => onSectionSelect('projects')} class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-green-100 dark:hover:bg-text-teal-300 dark:hover:text-gray-900 hover:text-gray-900" href="#">
            <svg class="flex-shrink-0 w-5 h-5 text-orange-400 transition duration-75 dark:text-orange-400 group-hover:text-orange-400 dark:group-hover:text-orange-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 20">
                  <path d="M7.958 19.393a7.7 7.7 0 0 1-6.715-3.439c-2.868-4.832 0-9.376.944-10.654l.091-.122a3.286 3.286 0 0 0 .765-3.288A1 1 0 0 1 4.6.8c.133.1.313.212.525.347A10.451 10.451 0 0 1 10.6 9.3c.5-1.06.772-2.213.8-3.385a1 1 0 0 1 1.592-.758c1.636 1.205 4.638 6.081 2.019 10.441a8.177 8.177 0 0 1-7.053 3.795Z"/>
               </svg>
                <span class="mx-2 text-sm font-medium">Projects</span>
            </a>

            <a onClick={() => onSectionSelect('contactus')} class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-green-100 dark:hover:bg-text-teal-300 dark:hover:text-gray-900 hover:text-gray-900" href="#">
            <svg class="flex-shrink-0 w-5 h-5 text-orange-400 transition duration-75 dark:text-orange-400 group-hover:text-orange-400 dark:group-hover:text-orange-400 first-letter:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 20">
                  <path d="M7.958 19.393a7.7 7.7 0 0 1-6.715-3.439c-2.868-4.832 0-9.376.944-10.654l.091-.122a3.286 3.286 0 0 0 .765-3.288A1 1 0 0 1 4.6.8c.133.1.313.212.525.347A10.451 10.451 0 0 1 10.6 9.3c.5-1.06.772-2.213.8-3.385a1 1 0 0 1 1.592-.758c1.636 1.205 4.638 6.081 2.019 10.441a8.177 8.177 0 0 1-7.053 3.795Z"/>
               </svg>
                <span class="mx-2 text-sm font-medium">Contact Us</span>
            </a> 
        </nav>
    </div>
    </aside>
    <div class="flex max-h-screen w-full items-center justify-center bg-gradient-to-tr bg-slate-100 p-10">
    <div class=" flex justify-around">
        <h1 className='sticky top-0 bg-gradient-to-r p-2 text-4xl text-center font-bold'>Hiii, I&apos;m </h1>
        <span className="relative">
        <h1 class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-teal-300 font-bold"> <span className='text-orange-800'>Full Stack</span> Web Developer<span className="text-3xl md:text-5xl">👋</span></h1>
        </span>    
    </div>
    </div>
        </div>
        <Content/>
        

  
        
    </>
  )
}

export default Sidebar