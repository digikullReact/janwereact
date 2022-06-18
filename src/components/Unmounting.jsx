import React ,{useEffect} from 'react'

const Unmounting = () => {

    useEffect(()=>{

            // whenver your component is unmounted then this function gets called

        return function(){

            console.log("hey I am getting unmounted  !!!")

        }
    },[])



  return (
    <div>

        <h1 style={{color:"brown"}}>I am unmounting component</h1>



    </div>
  )
}

export default Unmounting