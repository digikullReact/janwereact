import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  let  [value, setValue] = useState(0) // hook -->
  let  [name, setName] = useState("vijay") // hook -->
  console.log(value);

  function increment(){
    value++;
    setValue(value);

  }

  function decrement(){
    value--;
    setValue(value);

  }

  function makeUpper(){
    name=name.toUpperCase();

    setName(name) ;// this is ver important

  }


  return (
    <div className="App">
      <h1>{value}</h1>
      <h1>{name}</h1>

    
     <button onClick={increment}>Increment</button>

     <button onClick={decrement}>Decrement</button>

     <button onClick={makeUpper}>Make Upper Case</button>
      
    </div>


      

  )
}

export default App
