import React, {useEffect, useState} from "react";
import {VizNavigation} from "./VizNavigation";
import {Home} from "../pages";
import {Outlet} from "react-router-dom";

export function Root() {
    return (
        <>
            <VizNavigation></VizNavigation>
            <Outlet></Outlet>
            {/* Testing purposes only*/}
        </>

    );
};
