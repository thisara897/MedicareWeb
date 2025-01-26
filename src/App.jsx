import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './style.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Emergency from './Pages/Emergency'
import ChannelDoctor from './Pages/ChannelDoctor'
import MedicalInsuarance from './Pages/MedicalInsuarance'
import Diagnostic from './Pages/Diagnostic'
import Pharmacy from './Pages/Pharmacy'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/emergency" element={<Emergency/>}/>
        <Route path="/pharmacy" element={<Pharmacy/>}/> 
        <Route path="/channeldoctor" element={<ChannelDoctor/>}/>
        <Route path="/medicalinsuarance" element={<MedicalInsuarance/>}/>
        <Route path="/diognostic" element={<Diagnostic/>}/>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter> 
  )
}

export default App
