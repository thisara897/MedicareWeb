import React from 'react'
import './ChannelDoctor.css'

function ChannelDoctor() {
  return (
    <div className='form-container'>  
      <form className="form">
        <div className="formTitle">
          <h1>Echanneling Form</h1>
        </div>
        
        <div className="box-container">
          <label for ="fname" >Full name </label>
          <input type="text" id ="fname" name='fname' /><br/>
        </div>
        <div className="box-container">
          <label For="phoneNum">Phone Number</label>
          <input type="text" id ="phoneNum" name= 'phoneNum'/>
        </div>
        <div className="box-container">
          <p>Gender</p>
          <input type="radio" name ="sex" value = "male"/>
          <label For="male">Male</label>
          <input type="radio" name ="sex" value = "female"/>
          <label For="female">Female</label><br/>
        </div>
        <div className="box-container">
          <label For="NIC">Patient NIC Number</label>
          <input type="text" id ="nicNumber" name= 'nicNumber'/><br/>
        </div>
        <div className="box-container">
          <label For="email">Gurdian's Email</label>
          <input type="email" id ="email" name= 'email'/><br/>
        </div>
        <div className="box-container">
          <label for="doctor">You are looking for?</label><br/>
            <select name ="doctor" id='doctor'>
              <option value="Dr. Nimal Perera">Dr. Nimal Perera - Cardiologist</option>
              <option value="Dr. Anjali Wijesinghe">Dr. Anjali Wijesinghe - Neurologist</option>
              <option value="Dr. Ruwanthi Fernando">Dr. Ruwanthi Fernando - Endocrinologist</option>
              <option value="Dr. Harsha Jayawardena - Orthopedic Surgeon">Dr. Harsha Jayawardena - Orthopedic Surgeon</option>
              <option value="Dr. Nishadi Gunasekara - Dermatologist">Dr. Nishadi Gunasekara - Dermatologist</option>
              <option value="Dr. Ashan Silva - Gastroenterologist">Dr. Ashan Silva - Gastroenterologist</option>
              <option value="Dr. Kamani Ratnayake">Dr. Kamani Ratnayake - Pediatrician</option>
              <option value="Dr. Mahesh Kumarasinghe">Dr. Mahesh Kumarasinghe - Oncologist</option>
              <option value="Dr. Sanduni Wickramasinghe - Pulmonologist">Dr. Sanduni Wickramasinghe - Pulmonologist</option>
              <option value="Dr. Tharindu Ekanayake - Psychiatrist">Dr. Tharindu Ekanayake - Psychiatrist</option>
            </select>
        </div>
        
      </form>     
    </div>
  )
}

export default ChannelDoctor
