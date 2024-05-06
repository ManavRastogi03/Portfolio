import React from 'react'

function About() {
  return (
    <>
            <div className='bg-gradient-to-br from-white to-teal-300' >
            <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-4xl  pt-5">About</h1>
            <div className='flex justify-around'>
              <div className='p-10'>
                <img alt="Coder GIF" className='h-80 w-50 rounded-lg' src="https://physicsgurukul.files.wordpress.com/2019/02/character-1.gif" />
              </div>
              <div>
                <p class="max-w-2xl mx-auto mt-4 text-center text-gray-500 text-align left-2">
                👋 Hello community! I'm Manav_Rastogi, a passionate and results-driven Full Stack Developer with a diverse skill set that spans front-end to back-end technologies. My journey in the tech world has equipped me with proficiency in HTML, CSS, and JavaScript, along with a keen understanding of modern frameworks such as Tailwind and React.js.
                <br/>
                💻 On the front-end, I specialize in creating responsive and engaging user interfaces. Whether it's crafting a seamless user experience with HTML and CSS or bringing interactivity to life with JavaScript and React.js, I'm dedicated to delivering high-quality and visually appealing web applications.
                <br/>
                🚀 In the realm of version control and collaborative development, you'll find me on GitHub. I believe in the power of community-driven development and the continuous learning it fosters.
                <br/>
                🔗 My technical expertise extends beyond the front-end. I've delved into the world of back-end development, gaining proficiency in Express.js and Node.js. Leveraging the power of MongoDB with Mongoose, I've honed my skills in building robust server-side applications.
                <br/>
                🔐 Security is at the forefront of my development philosophy, and I implement secure authentication and authorization practices using JSON Web Tokens (JWT). This ensures a solid foundation for safeguarding data and maintaining user privacy.
                <br/>
                🌐 As technology continues to evolve, I've expanded my horizons to explore blockchain development and the Solidity programming language. This newfound knowledge allows me to contribute to decentralized applications and smart contract development, harnessing the potential of blockchain technology.
                <br/>
                🎨 Outside the coding realm, I'm also proficient in using tools like Canva to bring a creative touch to design elements, ensuring a holistic approach to web development that combines functionality with aesthetics.
                <br/>
                🤝 I'm always open to exciting opportunities, collaboration, and continuous learning. Let's connect and explore how we can create innovative solutions together!
                <br/>
                </p>
              </div>
            </div>
            </div>
    </>
  )
}

export default About