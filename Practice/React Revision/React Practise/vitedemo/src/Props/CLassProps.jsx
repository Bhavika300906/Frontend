import React, { Component } from "react"

class ClassProps extends Component {

    constructor(props) {
        super(props)
        this.data = props
    }

    render() {
        return (
            <div>
                <h1>
                    Username:{this.data.username}
                </h1>
            </div>
        )
    }
}

export default ClassProps