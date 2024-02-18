import React from "react";
import {Outlet} from "react-router-dom";
import { MySideNav } from "./MySideNav";
import { TemplateTopbar } from "./TemplateTopbar";
import { LayoutTemplate } from "./LayoutTemplate";
export function Root() {
    return (
        <>
       <LayoutTemplate/>           
        </>

    );
};
