import React, { useState, useContext, createContext} from 'react';
import {IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { GiPoliceOfficerHead } from "react-icons/gi";
import {FaFolder, FaCog, FaWrench, FaChartArea, FaTable, FaSmileWink, FaChartLine, FaChartBar, FaCity, FaCat, FaMoneyBill} from "react-icons/fa";
import { NavItem } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { IconContext } from 'react-icons';
function changeIcon(myIcon) {
    switch (myIcon) {
        case "dataset":
          myIcon = FaTable;
          return myIcon;
        case "example":
          myIcon = FaChartLine;
          return myIcon;
        default:
            return FaCat;
    }
}
export function MySideNav() {
    return (
        
        <>
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <LinkContainer to="/">
            <div className="sidebar-brand d-flex align-items-center justify-content-center">
            <div className="sidebar-brand-icon rotate-n-15">
                <FaCity/>
            </div>
            <div className="sidebar-brand-text mx-3">Crime in Chicago</div>
        </div>
            </LinkContainer >
            <hr className="sidebar-divider" />
            <div className="sidebar-heading">Overview</div>
            <LinkContainer  to="/">
                <Nav.Link> <GiPoliceOfficerHead/> {"Home"}</Nav.Link>
                </LinkContainer>
                <LinkContainer to="datasets">
                <Nav.Link> <FaTable/> {"Datasets"}</Nav.Link>
                </LinkContainer>
            <hr className="sidebar-divider"></hr>
            <div className="sidebar-heading">Pages</div>
                <LinkContainer to="placeholder">
                    <Nav.Link> <FaMoneyBill/> {"Placeholder"}</Nav.Link>
                </LinkContainer>
            <hr className="sidebar-divider d-none d-md-block" />
        </ul>
        </>

    );
}

