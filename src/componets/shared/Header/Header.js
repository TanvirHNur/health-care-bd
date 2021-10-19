import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/Health .png';
import './Header.css'

const Header = () => {
  const {user, logOut} = useAuth();
    return (
        <div>
             <Navbar collapseOnSelect sticky="top" expand="lg" className="my-nav-bg">
  <Container>
  <Navbar.Brand href="/home">
      <img
        src={logo}
        width="100"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link className="my-nav-link" as={Link} to="/home">Home</Nav.Link>
        <Nav.Link className="my-nav-link" as={HashLink} to="/home#services">Services</Nav.Link>
        <Nav.Link className="my-nav-link" as={Link} to="/find-doctor">Find a Doctor</Nav.Link>
        <Nav.Link className="my-nav-link" as={Link} to="/blog">Blog</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        {/* Signed in as: <a href="#login">Mark Otto</a>
        <Link className="my-nav-link" to="/login">Login</Link> */}
      { user?.email ? 
        <div>
        <Link className="my-nav-link me-2" to="/register">{user?.displayName}</Link>
        <Link onClick={logOut} className="my-nav-link" to="/home">Log out</Link>
        </div>
        :
        <div>
        <Link className="my-nav-link me-2" to="/register">Register</Link>
        <Link className="my-nav-link" to="/login">Login</Link>
        </div>
          }
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;