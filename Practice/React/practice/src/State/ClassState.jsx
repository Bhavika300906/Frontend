// state : it;s a varibles 
// we can change a data in same file without refresh
// this.state : object use only , single ya array
// this.setstate() : inbuilt function
import React from 'react'
import { Component } from 'react'
import Image from './Image';

class ClassState extends Component {
    constructor() {
        super();
        this.state = {
            name: "Bhavika Sonule",
            count: 0,
            isImage: true
        }
    }
    render() {
        // const data = "helloo"
        // console.log(this.state)
        return (
            <div>
                <div>
                    <h1 >hello name : {this.state.name}</h1>

                    <button onClick={() => { this.setState({ name: "Niky" }) }}>Change name</button>
                    <button onClick={() => this.setState({ name: "Aanchal" })}>Change name 2</button>

                    <h1>count : {this.state.count}</h1>

                    <button onClick={() => this.setState({ count: this.state.count + 1 })}>increment</button>
                    <button onClick={() => this.setState({ count: this.state.count - 1 })}>Decrement</button>
                    <button onClick={() => this.setState({ count: 0 })}>Zero</button>

                    <br /><br />
                    <button onClick={() => this.setState({ isImage: false })}>Hide</button>
                    <button onClick={() => this.setState({ isImage: true })}>Show</button>
                    <button onClick={() => this.setState({ isImage: !this.state.isImage })}>Toggle</button>
                    {
                        (this.state.isImage) ? <Image /> : false
                    }

                </div>
            </div>
        )
    }
}

export default ClassState
