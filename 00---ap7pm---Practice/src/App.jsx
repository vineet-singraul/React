// Required Bootstrap Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

// Logo Import
import Logo from './Images/lo.svg';
import ban1 from './Images/bb1.jpg';
import ban2 from './Images/bb2.jpg';
import ban3 from './Images/bb3.jpg';

// Import CsS HAI YE
import './design.css';

const App = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home" id='nav'>
            <img src={Logo} alt="Logo" style={{ height: '40px' }} />
          </Navbar.Brand>

          {/* Toggle Button for Mobile */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Men's</Nav.Link>
              <Nav.Link href="#pricing">Women's</Nav.Link>
              <Nav.Link href="#pricing">Electronics</Nav.Link>
              <Nav.Link href="#pricing">Kid's</Nav.Link>
              <Nav.Link href="#pricing">Mobiles</Nav.Link>
            </Nav>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>



      {/* Scroll Behaviour Hai Ye */}
      <Carousel p-10>
        <Carousel.Item interval={1000}>
          <img src={ban1} alt="First slide" className="d-block w-100" />
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <img src={ban2} alt="First slide" className="d-block w-100" />
        </Carousel.Item>

        <Carousel.Item>
          <img src={ban3} alt="First slide" className="d-block w-100" />
        </Carousel.Item>
      </Carousel>


      {/* Sare Card Yaha Align Honge */}
      <div id='CardsDiv'>

        <Card style={{ width: '18rem' }} id='card'>
          <Card.Img variant="top" src="./public/image/OIP.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} id='card'>
          <Card.Img variant="top" src="./public/image/op.png" />
          <Card.Body>
            <Card.Title>Card Title One</Card.Title>
            <Card.Text>
              This is the first card with updated static data.
            </Card.Text>
            <Button variant="primary">Click Here</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} id='card'>
          <Card.Img variant="top" src="./public/image/op1.jpg" />
          <Card.Body>
            <Card.Title>Card Title Two</Card.Title>
            <Card.Text>
              This is the second card with updated static data.
            </Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} id='card'>
          <Card.Img variant="top" src="./public/image/op2.jpg" />
          <Card.Body>
            <Card.Title>Card Title Three</Card.Title>
            <Card.Text>
              This is the third card with updated static data.
            </Card.Text>
            <Button variant="primary">Explore</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} id='card'>
          <Card.Img variant="top" src="./public/image/op3.png" />
          <Card.Body>
            <Card.Title>Card Title Four</Card.Title>
            <Card.Text>
              This is the fourth card with updated static data.
            </Card.Text>
            <Button variant="primary">View Details</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} id='card'>
          <Card.Img variant="top" src="./public/image/op4.png" />
          <Card.Body>
            <Card.Title>Card Title Five</Card.Title>
            <Card.Text>
              This is the fifth card with updated static data.
            </Card.Text>
            <Button variant="primary">See More</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} id='card'>
          <Card.Img variant="top" src="./public/image/op5.png" />
          <Card.Body>
            <Card.Title>Card Title Six</Card.Title>
            <Card.Text>
              This is the sixth card with updated static data.
            </Card.Text>
            <Button variant="primary">Discover</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} id='card'>
          <Card.Img variant="top" src="./public/image/op6.png" />
          <Card.Body>
            <Card.Title>Card Title Six</Card.Title>
            <Card.Text>
              This is the sixth card with updated static data.
            </Card.Text>
            <Button variant="primary">Discover</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} id='card'>
          <Card.Img variant="top" src="./public/image/op7.png" />
          <Card.Body>
            <Card.Title>Card Title Six</Card.Title>
            <Card.Text>
              This is the sixth card with updated static data.
            </Card.Text>
            <Button variant="primary">Discover</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} id='card'>
          <Card.Img variant="top" src="./public/image/op8.png" />
          <Card.Body>
            <Card.Title>Card Title Six</Card.Title>
            <Card.Text>
              This is the sixth card with updated static data.
            </Card.Text>
            <Button variant="primary">Discover</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} id='card'>
          <Card.Img variant="top" src="./public/image/op4.png" />
          <Card.Body>
            <Card.Title>Card Title Six</Card.Title>
            <Card.Text>
              This is the sixth card with updated static data.
            </Card.Text>
            <Button variant="primary">Discover</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} id='card'>
          <Card.Img variant="top" src="./public/image/op3.png" />
          <Card.Body>
            <Card.Title>Card Title Six</Card.Title>
            <Card.Text>
              This is the sixth card with updated static data.
            </Card.Text>
            <Button variant="primary">Discover</Button>
          </Card.Body>
        </Card>

      </div>




      {/* Footer Section */}
      <footer className="bg-dark text-white text-center p-3 mt-4">
        <Container>
          <p>© {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
          <Nav className="justify-content-center">
            <Nav.Link href="#privacy" className="text-white">Privacy Policy</Nav.Link>
            <Nav.Link href="#terms" className="text-white">Terms of Service</Nav.Link>
            <Nav.Link href="#contact" className="text-white">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </footer>
    </>
  );
}

export default App;
