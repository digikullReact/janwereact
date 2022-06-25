import { useState,useEffect } from 'react'
import logo from './logo.svg'
import './App.css';
import {

  Routes,
  Route,
} from "react-router-dom";

// What is react ?

//React is a js library used to build ui appplications
// React is used to create single page applications

// it enhances the user experience /utility and the efficiency of the fronetend app

import Home from "./components/Home";   // i am importing a component --->

import Footer from "./components/Footer"

import Header from './components/Header';
import Signup from './components/Signup';
import { Login } from './components/Login';
import PropsDemo from './components/PropsDemo';

import { Moduleuse } from './components/Moduleuse';
import Lifecycle from './components/Lifecycle';
import LoadData from './components/LoadData';
import Doubt from "./components/Doubt";
import Lifecycle2 from './components/Lifecycle2';
import Classlifecycle from './components/Classlifecycle';
import Protectedroute from './components/Protectedroute';

function App() {
  const [state,setState]=useState("Something from appp");
  const [array,setArray]=useState([1,2,3,4]);
//Any data you are passing from parent to child is termed as props---->

const data=[
  {
    "_id": "6293848795dedf6e1a1dce75",
    "picture": "http://placehold.it/32x32",
    "name": "Lindsey Bridges",
    "gender": "female",
    "company": "ZOGAK"
  },
  {
    "_id": "629384876bbbebcde45b956d",
    "picture": "http://placehold.it/32x32",
    "name": "Alberta Cline",
    "gender": "female",
    "company": "EXTRO"
  },
  {
    "_id": "62938487cce8d5c0ea5f11af",
    "picture": "http://placehold.it/32x32",
    "name": "Latasha Leach",
    "gender": "female",
    "company": "GEOFORMA"
  },
  {
    "_id": "62938487fc7766c6f45efcc9",
    "picture": "http://placehold.it/32x32",
    "name": "Velez Bailey",
    "gender": "male",
    "company": "PHARMEX"
  },
  {
    "_id": "629384874fbf62a5d442077e",
    "picture": "http://placehold.it/32x32",
    "name": "Gaines Massey",
    "gender": "male",
    "company": "FROLIX"
  },
  {
    "_id": "6293848765025215e26586a5",
    "picture": "http://placehold.it/32x32",
    "name": "Weaver Zimmerman",
    "gender": "male",
    "company": "ACLIMA"
  },
  {
    "_id": "62938487a47a5a34f5f7aedc",
    "picture": "http://placehold.it/32x32",
    "name": "Nadia Brennan",
    "gender": "female",
    "company": "GEEKOLA"
  }
]

const fn=(value)=>{
  
  //alert("hey parent")
 
}
  

  return (

    <div className='container-fluid'>

     
      {
        /**
         * 
         *  <Header/>
         *  <PropsDemo fn={fn} array={array}  value={state}/>

     <div className='row'  style={{marginTop:"120px"}}>

       <div className='col-md-4 offset-2'>
         <Signup/>

       </div>

       <div className='col-md-4 offset-1'>
      
      <Login/>

       </div>

     </div>

   <Moduleuse/>
   <Lifecycle/>

   <LoadData/>
      <Footer/>
 <Doubt/>
         */
      }
  <Header/>
<Routes>

<Route path="/" element={ <Home/>}/>
     {/**<Route path="/data" element={ <LoadData/>}/> */} 

      <Route
            exact
            path="/data"
            element={
              <Protectedroute>
              <Home/>
              </Protectedroute>
            }
          />
      <Route path="/login" element={ <Login/>}/>
      <Route
            exact
            path="/lifecycle2"
            element={
              <Protectedroute>
               <Lifecycle2/>
              </Protectedroute>
            }
          />
    {/**   <Route path="/lifecycle2" element={   <Lifecycle2/>}/>*/} 
      <Route path="/class" element={<Classlifecycle/>}/>
     
    </Routes>

  

    
    </div>
  )


      

  
}

export default App
