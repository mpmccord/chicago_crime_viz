import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import { MySideNav } from './MySideNav'
import { TemplateTopbar } from './TemplateTopbar'
import { Outlet } from 'react-router-dom'
import {Container, Col, Row} from "react-bootstrap";
export function LayoutTemplate() {
  return (
    <>
    <Container fluid="xxl">
      <Row className='g0'>
        <Col className='g0'>
        <TemplateTopbar />
        </Col>
      </Row>
    <Row className='g0'>
      <Col className='g0'><MySideNav /></Col>
      <Col><Outlet /></Col>
    </Row>
    
        
    </Container>


  </>
  );
}