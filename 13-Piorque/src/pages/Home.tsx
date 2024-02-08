import { Button, Card, Container, Form, InputGroup, Row, Col } from 'react-bootstrap';

// Home.tsx
// This page represents the homepage of the application.
// It displays information and navigational buttons for various sections of the application.

export default function Home() {
  return (

    // Container to hold the content
    <Container fluid>

      {/* Row for centering content */}
      <Row className="d-flex justify-content-center">
        
        {/* Column for responsiveness */}
        <Col xs={12} md={10} lg={7}>

          {/* Main content wrapper */}
          <div id='body-home'>

            {/* Title */}
            <h1 className="h1-title">DIGITAL TRANSFORMATION</h1>

            {/* Form to input creator's name */}
            <InputGroup className="created-form mb-3 container-fluid">
              <InputGroup.Text id="basic-addon1"> Created by: </InputGroup.Text>
              <Form.Control
                placeholder="Full name"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            {/* Container for calculator and JSON buttons */}
            <div className="calc-json-btn center-container container-fluid d-flex">
              {/* Button to navigate to Calculator */}
              <Button className='col-6' variant="outline-secondary" href="/calculator">Calculator Sample</Button>
              {/* Button to navigate to JSON page */}
              <Button className='col-6' variant="outline-secondary" href="/JSON">JSON Sample</Button>
            </div>

            {/* Card section for displaying hobbies */}
            <Card className="hobbies-box text-center container-fluid">
              <Card.Body>
                <Card.Title>My Hobbies</Card.Title>
                <Card.Text>
                  Hi! My name is Lester Piorque. By clicking the button below you will learn more about me.
                </Card.Text>
                {/* Button to navigate to Hobbies page */}
                <Button className='btn-learn-more' variant="outline-secondary" href="/hobbies">Learn More</Button>
              </Card.Body>
            </Card>

          </div> {/* End of main content wrapper */}
        </Col>
      </Row> 
    </Container> 
  )
}
