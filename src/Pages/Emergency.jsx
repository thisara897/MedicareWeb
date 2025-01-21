import React from 'react'
import HospitalBed from '../assets/HospitalBed.jpg'
import './Emergency.css'
const Emergency = () => {
  return (
    <div className='EMG_page'>
      <div className="TextSection">

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus pariatur esse amet dolorum ipsam 
          autem labore corporis,
           provident quis beatae, delectus ratione, recusandae qui tenetur a laborum perspiciatis iure voluptas.
        </p>
        <button>Call 911</button>

      </div>
      <div className="imageSection">
        <img src={HospitalBed} alt = "Hospital Bed"/>
      </div>
    </div>
  )
}

export default Emergency

