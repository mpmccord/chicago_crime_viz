import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from "react-router-bootstrap";
export function TopNavbar() {
    return (
    <Navbar expand="lg" className="navbar-expand navbar-dark bg-dark">
        <Container>

            <Nav variant="tabs" defaultActiveKey="/home">
                    <Navbar.Brand>Chicago Crimes</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

                <LinkContainer to="/">
                    <Nav.Link >Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="example-page">
                    <Nav.Link >Example</Nav.Link>
                </LinkContainer>
                <LinkContainer to="dataset">
                    <Nav.Link >About The Data</Nav.Link>
                </LinkContainer>
            </Navbar.Collapse>
                </Nav>
        </Container>
    </Navbar>
);
}