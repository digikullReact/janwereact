import React,{useState,useEffect} from 'react'

const Lifecycle = () => {
  const [state,setState]=useState([]);

  const [input ,setInput]=useState("");



  // This will call the api onlu once/
  /*
  useEffect(function(){
   apiCall();

  },[])
  */


  const apiCall=()=>{
      //  Calling an external api in to get  data -------->
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${input}`)
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        setState(data.items);  // Whenever your state is modified the component gets rerendered or reloaded automatically by react
    });
  


  }

  const handleChange=(event)=>{
      setInput(event.target.value);

  }

 /// apiCall()

  return (
    <div className='col-md-4 offset-3'>
      <h1>Book Search </h1> 

      <input type="text" onChange={handleChange}  name="name" className="form-control"/>

      <button  className='btn btn-success' onClick={apiCall}>

          Fetch Book

      </button>

    <table className='table'>

        <thead>
            <th>Id</th>
        </thead>

        <tbody>
            {
                state.map(ele=>(
                    <tr>
  <td>{ele.id}</td>
                    </tr>
                  
                ))
            }


        </tbody>

    </table>



    </div>
  )
}

export default Lifecycle