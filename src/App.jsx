import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  let  [value, setValue] = useState(0) // hook -->

  console.log(value);

  function increment(){
    value++;
    setValue(value);

  }

  function decrement(){
    value--;
    setValue(value);

  }


  return (
    <div className="App">
      <h1>{value}</h1>

    
     <button onClick={increment}>Increment</button>

     <button onClick={decrement}>Decrement</button>
      
    </div>


      

  )
}

export default App
