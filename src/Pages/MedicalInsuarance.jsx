import React from 'react'
import Navbar from '../Components/Navbar'
import './MedicalInsuarance.css'
import Footer from '../Components/Footer'
const MedicalInsuarance = () => {
  return (
    <div>
      <Navbar />
      <div className="body">
         
        <form action="#" className="form">
        <div className="header"><h1>Apply For Medical Insuarance</h1></div>
          <div className="form-left">
              <div className="box-container">
                <label For="Full name">Enter your full name</label><br/>
                <input type="text" placeholder='Name '/>
              </div>
              <div className="box-container">
                <label For="NIC">Enter Patient NIC Number</label><br/>
                <input type="text" placeholder='Patient NIC Number '/>
              </div>
              <div className="box-container">
                <label For="PhoneNumber">Patient's Or Gurdian's phone number</label><br/>
                <input type="text" placeholder='name '/>
              </div>
            </div>
            <div className="form-right">
                <div className="box-container">
                  <label For="Address">Address Line 1</label><br/>
                  <input type="text" placeholder='Address line 1 '/><br/>
                  <label For="Address">Address Line 2</label><br/>
                  <input type="text" placeholder='Address line 2 '/>
                </div>
                <input type="submit" value="Submit" className="submit"/>
            </div>
          
        </form>
      </div>
        <Footer/>
    </div>
  )
}

export default MedicalInsuarance
