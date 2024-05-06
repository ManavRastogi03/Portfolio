import React from 'react'

function Project() {
  return (
    <>
        <div className=" bg-gradient-to-br from-white to-teal-300" >
        <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl pt-5">Projects</h1>
          <div className="max-w-2xl mx-auto mt-4 text-center text-gray-500">
          <h2 className='font-bold'>Password Generator</h2>
          <ul className="list-disc pl-6 text-left">
            <li><span className='font-extrabold'>Frontend:</span> Use HTML for the structure,TailwindCSS for styling, and JavaScript for the functionality in React.</li>
            <li>Create an input field for the user to specify the password length.</li>
            <li>Add checkboxes or dropdowns for the user to select character types (uppercase, lowercase, numbers, symbols).</li>
            <li>Display the generated password to the user.</li>
            <li><span className='font-extrabold'>Backend: </span>Since this is a client-side application, there's no need for a backend. Everything can be done in the browser using JavaScript.</li>
            <li className='font-extrabold m-2'>Project-On-GitHub-:<a href="https://github.com/ManavRastogi03/Password-Generator" target="blank"><span className='text-red-700'>Check-ItOUT</span></a></li>
          </ul>
            <h2 className='font-bold'>Food Delivery System</h2>
          <ul className="list-disc pl-6 text-left" >
            <li><span className='font-extrabold'>Frontend:</span> Use HTML, CSS, and JavaScript for the user interface</li>
            <li>Design a user-friendly interface for browsing food items, adding them to a cart, and placing an order.</li>
            <li>Implement features like user authentication and order tracking.</li>
            <li><span className='font-extrabold'>Backend:</span> Use a server-side language  Node.js and a framework Express.js to handle server-side logic and data management.</li>
            <li>Set up a database MongoDB to store food items, user information, and orders.</li>
            <li>Implement RESTful APIs for communication between the frontend and backend.</li>
            <li>Handle user authentication and authorization for secure access to the system.</li>
            <li className='font-extrabold p-2'>Project-On-GitHub-:<a href="https://github.com/ManavRastogi03/Major-Project-Food_Delivery" target="blank"><span className='text-red-700'>Check-ItOUT</span></a></li>
          </ul>
        </div>
        </div>
    </>
  )
}

export default Project