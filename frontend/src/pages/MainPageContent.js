//import Container from "react-bootstrap/Container";
//import { Row } from "react-bootstrap";
//import { LoremIpsum } from "react-lorem-ipsum";
import React from "react";
import {useRef, useState, useEffect} from "react";
import { FaEllipsisH } from "react-icons/fa";
import { TreeMap } from "./TreeMap";
import { LineChart } from "./LineChart";
export function MainPageContent() {
    const refContainer = useRef();
    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0,
    });
    useEffect(() => {
        if (refContainer.current) {
            setDimensions({
                width: refContainer.current.offsetWidth,
                height: refContainer.current.offsetHeight,
            });
        }
    }, []);
    return (
        <>
        <div className="container-fluid">


<div className="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
</div>


<div className="row">

    
    <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            Chicago Population (2023)</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">8,937,000</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
    <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                            Crimes Reported in Chicago (2023)</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">260,927</div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            Placeholder</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">Value</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            Placeholder</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">Value</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



<div className="row">

    
    <div className="col">
        <div className="card shadow mb-4">
            
            <div
                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">Crime Rate Over Time</h6>
                <div className="dropdown no-arrow">
                    <a className="dropdown-toggle" role="button" id="dropdownMenuLink"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <FaEllipsisH/>
                    </a>
                </div>
            </div>
            
            <div className="card-body">
                <div className="svg-container chart-tree pt-4 pb-2">
                    <LineChart width={/* dimensions.width*/400} height={/*dimensions.height*/300}/><LineChart width={/* dimensions.width*/275} height={/*dimensions.height*/300}/>
                </div>
            </div>
        </div>
    </div>

    
    <div className="col">
        <div className="card shadow mb-4">
            
            <div
                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">Crimes by Category</h6>
            </div>
            
            <div className="card-body">
                <div className="chart-tree svg-container pt-2 pb-2">
                    <TreeMap width={/* dimensions.width*/400} height={/*dimensions.height*/300}/>
                </div>
            </div>
        </div>
    </div>
</div>

</div>


</>
    );
}
