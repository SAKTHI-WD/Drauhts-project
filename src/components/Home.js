import React from 'react'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain, faDraftingCompass, faMobilePhone } from '@fortawesome/free-solid-svg-icons'
import Footer from './Footer'

export default function Home() {
    return (
        <div className='home-container'>
            <div className='home'>
                <div className='home-div'>
                    <h1 className='home-h1'>
                        We Are A Creative Architecture Studio
                    </h1>
                    <button className='buildbtn'>
                        View Project
                    </button>
                </div>

            </div>

            <div className='div2'>
                <h1>Process Team Work</h1>
                <p> We Are Working on a team for You</p>
            </div>

            <div className='row'>
                <div className='col'>
                <FontAwesomeIcon className='icon' icon={faBrain} />
                <h1><u>Perfect Design</u></h1>
                <p>Great! I'm glad you found the guidance helpful.<br/>
                    If you have any more questions or if there's<br/>
                    anything specific you'd like assistance with<br/>
                     regarding the design or any other aspect of<br/>
                     your project, feel free to let me know.<br/>
                      I'm here to help!</p>
                </div>
                <div className='col'>
                <FontAwesomeIcon className='icon' icon={faDraftingCompass} />
                <h1><u>Carefully Planned</u></h1>
                <p>Carefully planning a project is a crucial step<br/>
                     for its success. From defining requirements <br/>
                     to outlining milestones and considering<br/>
                      potential challenges, thorough planning<br/>
                       sets a solid foundation. If you have specific<br/>
                        aspects of your project you'd like to discuss<br/>
                         or if you need guidance on any particular<br/>
                          stage of planning. I'm here to assist you<br/>
                           in making your project a well-executed <br/>
                           and successful endeavor!</p>
                </div>
                <div className='col'>
                <FontAwesomeIcon className='icon' icon={faMobilePhone} />
                <h1><u>Smartly Execute</u></h1>
                <p>Executing a project with a smart architecture<br/>
                     involves making informed decisions and <br/>
                     efficiently implementing your design.Here<br/>
                      are some tips for smartly executing a<br/>
                     project with a focus on architecture:</p>
                </div>
            </div>

            <div className='start'>
                <p className='buildp'>Are you ready to create awsome Architecture with TheBuild ?</p>
                <button  className='buildbtn'>Lets Start</button>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
