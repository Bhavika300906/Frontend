import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class ClassProps2 extends Component {
  constructor(props) {
    super(props)
    this.data = props
  }


  render() {
    return (
      <div>
        <h1>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" style={{width:"300px", height:"500px" }} src= {this.props.img}/>
            <Card.Body>
              <Card.Title> {this.props.title} </Card.Title>
              <Card.Text>
                {this.props.text}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          {/* surname:{this.props.surname} */}
        </h1>
      </div>
    )
  }
}

export default ClassProps2
