import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  let  [value, setValue] = useState(0) // hook -->
  let  [name, setName] = useState("vijay") // hook -->
  let [input,setInput]=useState("");
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

  function getInputValue(event){

    setInput(event.target.value);

  }


  return (
    <div className="App">
      <h1>{value}</h1>
      <h1>{input}</h1>

    
     <button onClick={increment}>Increment</button>

     <button onClick={decrement}>Decrement</button>

     <input type="text"  onChange={getInputValue}/>

     <button onClick={makeUpper}>Make Upper Case</button>
      
    </div>


      

  )
}

export default App
