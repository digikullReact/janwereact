import React,{useState,useEffect} from 'react'

const LoadData = () => {
    const [state,setState]=useState([]);

    const apiCall=()=>{
        //  Calling an external api in to get  data -------->
      fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data =>{
         
          setState(data);  // Whenever your state is modified the component gets rerendered or reloaded automatically by react
      });
    
  
  
    }

    useEffect(()=>{
        apiCall();
    },[])
  


  return (
    <div className='row'>
        {
            state.map(ele=>(
                <div className='col-md-3'>
                    <div className="card" >
  <img src={ele.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{ele.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

                </div>
        

            ))
        }




    </div>
  )
}

export default LoadData