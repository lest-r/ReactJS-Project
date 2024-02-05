import { Button, Card, Container, Form, InputGroup, Row, Col } from 'react-bootstrap'

export default function Home() {

  return (
    <Container fluid className='vw-100'>
      <Row className="d-flex justify-content-center">
        <Col xs={12} md={10} lg={6}>

          <div id='body-home'>
              <h1 className="h1-title">DIGITAL TRANSFORMATION</h1>

              <InputGroup className="created-form mb-3 container-fluid">
                <InputGroup.Text id="basic-addon1"> Created by: </InputGroup.Text>
                <Form.Control
                  placeholder="Full name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup><br></br>

          <div className="calc-json-btn center-container container-fluid d-flex">
            
              <Button className='col-6' variant="outline-secondary" href="/calculator">Calculator Sample</Button>
              <Button className='col-6' variant="outline-secondary" href="/JSON">JSON Sample</Button>
            
          </div>
        
          <Card className="hobbies-box text-center container-fluid">
            <Card.Body>
              <Card.Title>My Hobbies</Card.Title>
                <Card.Text>
                  Hi! My name is Lester Piorque. By clicking the button below you will learn more about me.
                </Card.Text>
            <Button className='btn-learn-more' variant="outline-secondary" href="/hobbies">Learn More</Button>
            </Card.Body>
          </Card>

          </div>
        </Col>
      </Row>
    </Container>
  )
}
