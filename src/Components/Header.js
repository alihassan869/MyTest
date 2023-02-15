import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assests/images/alex-suprun-A53o1drQS2k-unsplash.jpg';
import img2 from '../assests/images/campbell-3ZUsNJhi_Ik-unsplash.jpg';
import img3 from '../assests/images/joshua-koblin-eqW1MPinEV4-unsplash.jpg';
function Header() {
  return (
    <>
      <div className="container-fluid px-0">
        <Navbar className="bg-red-800">
          <Container>
            <Navbar.Brand href="#home" className="text-white">
              CAR CENTER
            </Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#features" className="text-white">
                Login
              </Nav.Link>
              <Nav.Link href="#pricing" className="text-white">
                Register
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <Carousel variant="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h5>BEST CARS COLLECTION</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />
          <Carousel.Caption>
            <h5>BLACK SUPER CAR</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5 className="text-red-900">RED CAR SUPER</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Header;
