import React, { useState, useContext, createContext} from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import {FaFolder, FaCog, FaWrench, FaChartArea, FaTable, FaSmileWink, FaChartLine, FaChartBar, FaCity, FaCat} from "react-icons/fa";
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
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div class="sidebar-brand-icon rotate-n-15">
                <FaCity/>
            </div>
            <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
        </a>
            <hr className="sidebar-divider" />
            <div className="sidebar-heading">Overview</div>
            <LinkContainer to="/">
                    <Nav.Link> <FaCat/> {"Home"}</Nav.Link>
                </LinkContainer>
                <LinkContainer to="dataset">
                    <Nav.Link> <FaTable/> {"Datasets"}</Nav.Link>
                </LinkContainer>
            <hr className="sidebar-divider" />
            <LinkContainer to="example-page">
                    <Nav.Link> <FaCat/> {"Cat Example"}</Nav.Link>
                </LinkContainer>
            <div className="sidebar-heading">Addons</div>
            <hr className="sidebar-divider d-none d-md-block" />
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>
        </ul>
    );
}

