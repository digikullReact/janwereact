import React, { Component } from 'react'

 class Classlifecycle extends Component {

    constructor(){
        super();  // as child object cannot be created without the parent object we need to call super which creates the 
        // object of parent class (Component class in here)  by calling its constructor

        this.state={
            name:""
        }

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
        // is used to visualize unmounting phase of a component
    }

    updateMethod=()=>{

        this.setState({
            name:"Something else"
        })

    }



  render() {
    return (
      <div>Classlifecycle

     <button onClick={this.updateMethod}>

        See Component Did Update
     </button>

      </div>
    )
  }
}

export default Classlifecycle
