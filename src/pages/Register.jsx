import React, { useState } from 'react'
import { Col , Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Register() {

  const [username,setUsername]=useState('')
  const [emailaddress,setEmailaddress]=useState('')
  const [password,setPassword]=useState('')
  console.log(username,emailaddress,password);
  
  const handleRegister=()=>{
    if(username=="" || password=="" || email==""){
    alert("please fill the form")
    }
  }
  return (
    <div>
      <h1>Register</h1>
       <Row>
        <Col></Col>
        <Col>
         <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>UserName</Form.Label>
        <Form.Control onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Enter UserName"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={(e)=>setEmailaddress(e.target.value)} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e)=>setPassword(e.target,value)}  type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </Col>
        <Col></Col>
       </Row>
    </div>
  )
}

export default Register
