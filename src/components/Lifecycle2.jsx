import React from 'react'
import { useEffect,useState } from 'react'
import Unmounting from './Unmounting';

function Lifecycle2() {
    const [state,setState]=useState(1);
    const [input ,setInput]=useState(1);
    const [show,setShow]=useState(true);

  // Mounting phase  --
// this is the mounting phase because the callback inside this useeffect gets called only
// during first render 

// Why we need a mounting phase --
// so if you want to do something in your component when the user opens
//  the component for first time and only once 
// ex - you aree building an ecommerce app 
// an you want to show the products data only once when the user opens 
// up the page for first time 

// in that case  you need  to use mounting phase
  useEffect(()=>{

    console.log("From component mounting")

},[])  // the array here is a dependency array 







    // you can visualize the useEffect with two version of useEffect

    // update phase ---in your react component lifecycle
    useEffect(()=>{

        console.log("From first version of component did update")

    })


    // second version of updating phase
  useEffect(()=>{

    console.log("From component Update version 2")

},[input])  // the array here is a dependency array 

    
// component unmounting


    const changeState=()=>{
        setState(state*2);

    }

    const changeInput=()=>{
        setInput(3*input);
    }

    const showUnmount=()=>{
        setShow(false);

    }


  return (
    <div>

       <h1>State Value- {state}</h1> 

       <h1>Input  Value- {state}</h1> 

       {

        show ?       <Unmounting/> :""

       }




  <br/> <button onClick={changeState}>
    Change State
   </button>

   <br/> <button onClick={changeInput} style={{marginTop:"30px"}}>
    Change Input
   </button>



   <br/> <button onClick={showUnmount} style={{marginTop:"30px"}}>
    Show Unmounting
   </button>

    </div>
  )
}

export default Lifecycle2