import React from 'react';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Navigation (props) {
        return (
            <div className="navbar-class container rounded mx-auto" >
                <Navbar>
                    <Container> 
                        <Navbar.Brand className="nav-bar-title" href="/"> <strong>Find-A-Gig</strong></Navbar.Brand>
                        <Nav className="me-auto">
                            <Link to="/" className="nav-link">Home </Link>
                            <Link to="/users" className="nav-link">Users </Link>
                            <Link to="/gigs" className="nav-link">Gigs </Link>
                            <Link to="/Instruments" className="nav-link">Instruments</Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )

}

export default Navigation;



