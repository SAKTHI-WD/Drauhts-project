import React from 'react'
import Aboutimg from '../photos/pexels-athena-2962053.jpg'
import './About.css'
import Footer from './Footer'

export default function About() {
  return (
    <div className='about'>
        <h1>About Us</h1>
        <div className='aboutdiv'>
            <img src={Aboutimg} alt='company' />
            <div className='aboutcont'>
                <h3>  Professional Team</h3>
                <p>A professional team is a group of individuals who come together in a work or organizational 
                setting to collaborate, share expertise, and collectively achieve common goals. The term 
                 "professional" implies that the team members possess specialized skills, knowledge, and experience  
                 relevant to their respective roles. These teams are typically formed within businesses, institutions, 
                  or organizations to address specific tasks, projects, or ongoing responsibilities.</p>
            </div>
        </div>
        <Footer />
    </div>
  )
}
