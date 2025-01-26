import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp,faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <div className='footer-container'>
      <div className="Left-section">
        <p>Medicare Hospital colombo Road,<br/> Negombo </p>
      </div>
      <div className="Right-section">
        <div className="icon-container">
          <FontAwesomeIcon icon={faFacebook} size="2x"  className='icons facebook'/><span className='icon-name facebook'>Facebook</span>
        </div>
        <div className="icon-container">
          <FontAwesomeIcon icon={faWhatsapp } size="2x"  className='icons  whatsapp'/><span className='icon-name whatsapp'>Whats app</span>
        </div>
        <div className="icon-container">
          <FontAwesomeIcon icon={faInstagram } size="2x"  className='icons instagram'/><span className='icon-name instagram'>Instergram</span>
        </div>
        <div className="icon-container">
          <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: '#FFFFFF' }} className='icons'/><span className='icon-name github'>Github</span>
        </div>        
      </div>
    </div>
  )
}

export default Footer
