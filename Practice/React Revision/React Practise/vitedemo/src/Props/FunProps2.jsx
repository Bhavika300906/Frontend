import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function FunProps2(props) {
    return (
        <div>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top"  style={{height:"400px", width:"400px"}} src={props.img} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            {/* <h1>Name : {props.name}</h1> */}

        </div>
    )
}

export default FunProps2
