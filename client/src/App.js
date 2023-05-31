import React from 'react'
import Update from './Update'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './component/Navbar'
import Home from './component/Home'
import Form from './component/Form'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/update/:id' element={<Update/>}/>

      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App