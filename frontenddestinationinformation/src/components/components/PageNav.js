import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PageNav = (props) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link to="/"><Navbar.Brand>Destination Information</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="navbarLinks"/>
                <Navbar.Collapse id="navbarLinks">
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

const styles = {

}

export default PageNav;