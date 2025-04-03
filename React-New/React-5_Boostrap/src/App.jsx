import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Corrected Image Imports
import bn1 from "./Image/b1.jpeg";
import bn2 from "./Image/b2.jpeg";
import bn3 from "./Image/b3.jpeg";
import img1 from "./Image/p1.jpeg";
import img2 from "./Image/p2.jpeg";
import img3 from "./Image/p3.jpeg";
import img4 from "./Image/p4.jpeg";

const App = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#wildlife">Wildlife</Nav.Link>
            <Nav.Link href="#booking">Online Booking</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={bn1} alt="First slide" />
          <Carousel.Caption>
            <h3>First Slide Label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bn2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second Slide Label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bn3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third Slide Label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <hr size="4" />
      <br />



      <center>
        <h1>This Is Image Code</h1>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
          <img src={img1} alt="Image 1" width="200" />
          <img src={img2} alt="Image 2" width="200" />
          <img src={img3} alt="Image 3" width="200" />
          <img src={img4} alt="Image 4" width="200" />
        </div>


        <hr size="4" />
        <br /><br /><br />

        <div id='div'>
        <Card style={{ width: '18rem' }}>
        <img src={img4} alt="Image 4" width="290" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
        <img src={img1} alt="Image 4" width="290" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
        <img src={img2} alt="Image 4" width="290" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
        <img src={img3} alt="Image 4" width="290" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </div>

      </center>
    </>
  );
};

export default App;
