import { useState,useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

// What is react ?

//React is a js library used to build ui appplications
// React is used to create single page applications

// it enhances the user experience /utility and the efficiency of the fronetend app

import Home from "./components/Home";   // i am importing a component --->

import Footer from "./components/Footer"

import Header from './components/Header';
import Signup from './components/Signup';
import { Login } from './components/Login';

function App() {
  const [state,setState]=useState("");

  

  return (

    <div className='container-fluid'>

     <Header/>

     <div className='row'  style={{marginTop:"120px"}}>

       <div className='col-md-4 offset-2'>
         <Signup/>

       </div>

       <div className='col-md-4 offset-1'>
      
      <Login/>

       </div>

     </div>



      <Footer/>

    </div>
  )


      

  
}

export default App
