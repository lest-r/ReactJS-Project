<h1 className='h1-title-hobbies'>HOBBIES</h1>
    <Row className="g-4 hobbies-page flex-row justify-content-center">
    <div id='body-home' className='col-xs-5 col-lg-12'>
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card className='hobbies-card'>
            <Card.Img variant="top" src="./img/hobby-1.jpg" className='hobby-images'/>
            <Card.Body>
              <Card.Title>1 Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='hobbies-card'>
            <Card.Img variant="top" src="./img/hobby-1.jpg" />
            <Card.Body>
              <Card.Title>2 Card titleee</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="./pages/hobbies/hobby-1.jpg" />
            <Card.Body>
              <Card.Title>3 Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="./pages/hobbies/hobby-1.jpg" />
            <Card.Body>
              <Card.Title>4 Card title</Card.Title>
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