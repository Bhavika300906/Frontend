import React, { Component } from "react"

class ClassuseState extends Component {

    constructor(){
        super()
        this.state = {
            name:"Bhavika"
        }
    }

    render(){
        return(
            <div>
                <h1>
                    name : {this.state.name}
                </h1>
            <button onClick={()=>this.setState({name:"Niky"})}>change</button>
            </div>
        )
    }
        

}
export default ClassuseState