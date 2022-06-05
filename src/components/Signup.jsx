import React ,{useState} from 'react'



// state is just the data stored in the componenet

const Signup = () => {

  // state is a data of your component
  //setState is the method to modify the state --->
  //and the initial value of the state would be one you pass in useState()

  const [state,setState] =useState("Something");
  const [password,setPassword] =useState("");

  const handleChange=(event)=>{


    //console.log(event.target.value);
    setState(event.target.value)
  

  }

  const handlePasswordChange=(event)=>{
    setPassword(event.target.value);

  }


  const btnClick=()=>{
    //console.log();
    // please avoid it
  //const value=  document.getElementById("exampleInputEmail1").value // Not a react way   ---pls dnt use it
   // alert(value);
   console.log(state);
   console.log(password);

  }



///  ---->
  return (
    <form>
        <h1>Signup Here</h1>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control" onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input type="password" onChange={handlePasswordChange} className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" >Check me out</label>
  </div>
  <button type="button" className="btn btn-primary" onClick={btnClick}>Submit</button>
</form>
  )
}

export default Signup