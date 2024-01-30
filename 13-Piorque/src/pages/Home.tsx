//import React from 'react'
import { Button, Card, Container, Form, InputGroup, Nav, Navbar } from 'react-bootstrap'
//import React, { useState } from 'react'
//import { Container } from 'react-bootstrap';
//import '../index.css';

export default function Home() {

  return (
    <div id='body-home'>
        <h1 className="h1-title">DIGITAL TRANSFORMATION</h1>
        
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"> Created by: </InputGroup.Text>
        <Form.Control
          placeholder="Full name"
          aria-label="Username"
          aria-describedby="basic-addon1"
          />
        </InputGroup><br></br>

        <div className="center-container">
          <div>
            <Button variant="outline-secondary" href="/calculator">Calculator Sample</Button>{' '}
            <Button variant="outline-secondary" href="/hobbies">JSON Sample</Button>{' '}
          </div>
        </div>
        
        <Card className="text-center">
        <Card.Body>
          <Card.Title>My Hobbies</Card.Title>
          <Card.Text>
            Hi! My name is Lester Piorque. By clicking the button below you will learn more about me.
          </Card.Text>
          <Button className='btn-learn-more' variant="outline-secondary">Learn More</Button>
        </Card.Body>
    </Card>
    </div>
  )
}
