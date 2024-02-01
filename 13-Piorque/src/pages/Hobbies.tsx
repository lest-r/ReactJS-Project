import { Card, Row, Col, Container } from 'react-bootstrap'

function GridExample() {
  return (
    <Container fluid className='vw-100'>
    <h1 className='h1-title-hobbies'>Hobbies</h1>
    <Row xs={1} md={2} lg={1} className="g-4 hobbies-page d-flex justify-content-center">
    <div id='body-home'>
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="./pages/hobbies/hobby-1.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}

      </div>
    </Row>
    </Container>
  );
}

export default GridExample;