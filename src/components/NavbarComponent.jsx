import {Navbar, Container, Nav} from 'react-bootstrap';

import {navLinks} from '../data/index';
import {NavLink} from 'react-router-dom'

const NavnbarComponent = () => {
  return (
    <div>
      {/* <Navbar expand="lg" className="bg-body-tertiary"> */}
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Course</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {navLinks.map((link) => {
              return( 
              <div key={link.id}>
                <NavLink to={link.path}>{link.text}</NavLink>
              </div>
              );
            })}
          </Nav>

          <div>
            <button>Join With Us</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavnbarComponent