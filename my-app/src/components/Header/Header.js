import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" className="row">
                <Navbar.Brand className="col-3">
                    <h1>Logo</h1>
                </Navbar.Brand>
                <Nav className="col-3">slider</Nav>
                <Nav className="col-3">algorithms</Nav>
                <Nav className="col-3">generate</Nav>
            </Navbar>
        )
    }
}

export default Header;
