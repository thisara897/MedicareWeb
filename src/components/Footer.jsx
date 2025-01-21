import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp,faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <div className='footer-container'>
      <div className="first-sectionn">
      <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: '#FFFFFF' }} className='icons'/>
      <FontAwesomeIcon icon={faWhatsapp } size="2x" style={{ color: '#FFFFFF' }} className='icons'/>
      <FontAwesomeIcon icon={faInstagram } size="2x" style={{ color: '#FFFFFF' }} className='icons'/>
      <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: '#FFFFFF' }} className='icons'/>
      </div>
    </div>
  )
}

export default Footer
