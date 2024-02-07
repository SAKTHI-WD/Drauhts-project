import {faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
        <div>
            <p>All Rights Reserved &copy; 2024</p>
        </div>
        <div className='social'>
            <a href='' >
            <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href='' >
            <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href='' >
            <FontAwesomeIcon icon={faYoutube} />
            </a>
        </div>
        <div>
            <span>Designed by <a className='git' target='blank' href='https://github.com/SAKTHI-WD'>SM</a>  </span>
        </div>
    </div>
  )
}
