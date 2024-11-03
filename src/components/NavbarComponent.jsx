import {Navbar, Container, Nav} from 'react-bootstrap';

import {navLinks} from '../data/index';
import {NavLink} from 'react-router-dom'

const NavnbarComponent = () => {
  return (
    <div>
      {/* <Navbar expand="lg" className="bg-body-tertiary"> */}
      <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='fs-3 fw-bold'>Course</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {navLinks.map((link) => {
              return( 
              <div className='nav-link' key={link.id}>
                <NavLink to={link.path}  className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""} end>
                  {link.text}
                </NavLink>
              </div>
              );
            })}
          </Nav>

          <div>
            <button className='btn btn-outline-danger rounded-1'>Join With Us</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavnbarComponent