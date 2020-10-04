import React from 'react';
import {Navbar, Nav, NavDropdown, Button, Form, FormControl, } from 'react-bootstrap';

function PageNavbar(){
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#">Akses Sport</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#Home">Home</Nav.Link>
                <Nav.Link href="#Berita">Berita</Nav.Link>
                <Nav.Link href="#Live">Live Scores</Nav.Link>
                <NavDropdown title="Piala & Liga" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/4.1">Premiere League</NavDropdown.Item>
                    <NavDropdown.Item href="#action/4.2">Liga Calcio Serie A</NavDropdown.Item>
                    <NavDropdown.Item href="#action/4.3">Bundesliga</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/4.4">Champions League</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#Transfer">Transfer Pemain</Nav.Link>
                <Nav.Link href="#Tim">Tim</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    )
}
export default PageNavbar;
