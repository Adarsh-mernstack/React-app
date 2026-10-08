import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function ProductCard({products,sendData}) {
 console.log(products);
 


  return (
    <div>
        <button onClick={()=>sendData("welcome to react")}>sendData</button>
        <Row>
      {products.length>0?
        products.map(item=>(
         <Col>
         <Link >
         <Card style={{ width: '18rem' , height:'550px', margin:'20px',padding:'10px'}}>
      <Card.Img variant="top" src={item.image} height={'350px'} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.price}
        </Card.Text>
        <Button variant="primary">View Product</Button>
      </Card.Body>
    </Card>

         </Link>
          
         </Col>
        ) )
     :"No data" }
    </Row>

    </div>
  )
}

export default ProductCard
