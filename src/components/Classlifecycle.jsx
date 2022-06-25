import React, { Component } from 'react'

 class Classlifecycle extends Component {

    constructor(){
        super();  // as child object cannot be created without the parent object we need to call super which creates the 
        // object of parent class (Component class in here)  by calling its constructor

        this.state={
            name:""
        }

        console.log("constructor");

       // this.updateMethod=this.updateMethod.bind(this);
    }


    componentDidMount(){
        console.log("mounting ocuured")
        // which is used to visualize/user the mounting phase
    }


    componentDidUpdate(){

        console.log("Component did update got callledd");
    

        // which is used to visualize the updating phase of component

    }

    componentWillUnmount(){
        console.log("Class component unmounted");
        // is used to visualize unmounting phase of a component
    }

    updateMethod=()=>{
       // console.log("In arrow",this);

        this.setState({
            name:"Something else"
        })

    }



  render() {
    return (
      <div style={{backgroundColor:"green"}}>
        <h1>Class Component</h1>

     <button onClick={this.updateMethod}>

        See Component Did Update
     </button>

      </div>
    )
  }
}

export default Classlifecycle
