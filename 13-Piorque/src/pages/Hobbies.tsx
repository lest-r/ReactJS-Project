import { Card, Button } from 'react-bootstrap'

function Hobbies() {
  return (
    <div id="body-home">
      <h1 className='h1-title-hobbies'>HOBBIES</h1>
      <div className="d-flex flex-wrap justify-content-around" id="hobby-card">
        <Card className="mb-3 hobbies-card" style={{ width: '18rem' }}>
          <Card.Img className="hobby-pic" variant="top" src="./img/hobby-1.jpg" />
          <Card.Body>
            <Card.Title>Watching Movies</Card.Title>
            <Card.Text>
            The pleasure of watching movies lies in captivating narratives, mesmerizing visuals, and the escape they provide.
            </Card.Text>
            
          </Card.Body>
        </Card>
        <Card className="mb-3 hobbies-card" style={{ width: '18rem' }}>
          <Card.Img className="hobby-pic" variant="top" src="./img/hobby-2.jpg" />
          <Card.Body>
            <Card.Title>Traveling</Card.Title>
            <Card.Text>
            Traveling offers a transformative experience, explore diverse cultures, broaden perspectives, and create lasting memories.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="mb-3 hobbies-card" style={{ width: '18rem' }}>
          <Card.Img className="hobby-pic" variant="top" src="./img/hobby-3.jpg" />
          <Card.Body>
            <Card.Title>Cooking</Card.Title>
            <Card.Text>
            Cooking is a creative and rewarding activity that involves crafting delicious meals and experimenting with flavors and techniques.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="mb-3 hobbies-card" style={{ width: '18rem' }}>
          <Card.Img className="hobby-pic" variant="top" src="./img/hobby-4.jpg" />
          <Card.Body>
            <Card.Title>Listening to music</Card.Title>
            <Card.Text>
            Listening to music is a delightful experience, providing relaxation, and a deep emotional connection through diverse melodies and rhythms.
            </Card.Text>
          </Card.Body>
        </Card>

      
    </div>
    </div>

  
  );
}

export default Hobbies;