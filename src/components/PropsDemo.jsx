import React, { useState } from 'react'

// Props are the data which you pass from your parent to child component 

const PropsDemo = (props) => {
  console.log("Props",props);
  const [state,setState]=useState(0);
  const hello=9999;

  const clickMe=()=>{
    //props.fn();
    setState(state+1);

  }
  return (
    <div>
      <div>Someother things</div>
      {state}
       <div>Props {props.value}</div>

<button onClick={clickMe}>Click Me</button>

{
props.array.map(function(ele){
  return <li>{ele}</li>;
   
 })

}

    </div>

   
  )
}

export default PropsDemo