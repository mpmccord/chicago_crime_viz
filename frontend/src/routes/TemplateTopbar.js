import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from "react-router-bootstrap";
import { Button, Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import {SearchHeart} from "react-bootstrap-icons";
import { FaBars, FaSearch } from "react-icons/fa";
import React from 'react';
export function TemplateTopbar() {
        
    return (
            <Navbar className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            {/* Sidebar Toggle (Topbar) */}
            <Button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <FaBars/>
            </Button>

            {/* Topbar Search */}
            <Form className="d-none d-sm-inline-block form-inline ms-auto p-2 ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div className="input-group">
                            <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                                aria-label="Search" aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <Button className="btn btn-primary" type="button">
                                    <FaSearch></FaSearch>
                                </Button>
                            </div>
                        </div>
                    </Form>
                </Navbar>

    );
}