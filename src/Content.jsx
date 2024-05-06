import React from 'react'
import Home from './Home'
import About from './About'
import Skill from './Skill'
import ContactUs from './ContactUs'
import Project from './Project'
import { useRef,useEffect } from 'react'

function Content({ selectedSection }) {
  const HomeSelectionRef = useRef(null);
  const AboutSelectionRef = useRef(null);
  const SkillSelectionRef = useRef(null);
  const ProjectsSectionRef=useRef(null)
  const ContactUsSectionRef=useRef(null)
  useEffect(() => {
    if (selectedSection === 'home') {
      HomeSelectionRef.current.scrollIntoView({ behavior: 'smooth' });
    } 
    else if (selectedSection === 'about') {
      AboutSelectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    else if (selectedSection === 'skills') {
      SkillSelectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    else if(selectedSection==='projects'){
      ProjectsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    else{
      ContactUsSectionRef.current.scrollIntoView({behavior:'smooth'});
    }
  }, [selectedSection]);
  return (
    <>
       <div ref={HomeSelectionRef}>
        <Home />
      </div>
      <div ref={AboutSelectionRef}>
        <About />
      </div>
      <div ref={SkillSelectionRef}>
        <Skill />
      </div>
      <div ref={ProjectsSectionRef}>
        <Project />
      </div>
      <div ref={ContactUsSectionRef}>
        <ContactUs />
      </div>
    </>
  )
}

export default Content