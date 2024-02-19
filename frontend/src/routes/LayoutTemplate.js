import React from 'react'
import { MyFooter } from '../components/MyFooter';
import { MySideNav } from './MySideNav'
import { TemplateTopbar } from './TemplateTopbar'
import { Outlet } from 'react-router-dom'
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
            <MyFooter/>
    </div>
    </div>

  </>
  );
}