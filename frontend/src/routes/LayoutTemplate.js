import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import { MySideNav } from './MySideNav'
import { TemplateTopbar } from './TemplateTopbar'
import { Outlet } from 'react-router-dom'
import {Container, Col, Row} from "react-bootstrap";
export function LayoutTemplate() {
  return (
    <>
    <div id="wrapper">
    <MySideNav />
    <div id="content-wrapper" className="d-flex flex-column">

    <TemplateTopbar/>
            <div id="content">
            <Outlet />
            </div>
    </div>
    </div>

  </>
  );
}