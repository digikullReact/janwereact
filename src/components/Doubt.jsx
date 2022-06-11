import React,{useState} from 'react'

 const Doubt = () => {
    const [input,setInput]=useState("");

    const [display ,setDisplay] =useState(false);

const handleChange=(event)=>{

    setInput(event.target.value);

}

const handleClick=()=>{
    setDisplay(true);

}
  return (
    <div>
<input type="text" onChange={handleChange}/>

<button onClick={handleClick}>
    Click 
</button>

{display ? <h1>{input}</h1>:"" }


    </div>
  )
}
export default Doubt;