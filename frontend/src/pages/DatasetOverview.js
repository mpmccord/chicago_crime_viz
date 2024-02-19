import Container from "react-bootstrap/Container";
import React from "react";
import {useState} from "react";
import {getDate} from "../components/js_functions";
import {CrimesSince2001Documentation} from "../components/DocumentationTables/CrimesSince2001Documentation";
import {Button, DropdownButton} from "react-bootstrap";
import { CensusDataVariables } from "../components";
import { Dropdown } from "react-bootstrap";
export function DatasetOverview() {
  const [value,setValue]=useState('1');
  const handleSelect=(e)=>{
    console.log(e);
    setValue(e)
  }
  

  return (
    <div className="app-container">
      <Dropdown className="p-2">
      <DropdownButton title="Select Dataset" variant="primary" onSelect={handleSelect}>

        <Dropdown.Item eventKey="1">Crimes</Dropdown.Item>
        <Dropdown.Item eventKey="2">US Census</Dropdown.Item>
        </DropdownButton>
      </Dropdown>
      <Tab value={value} />
    </div>
  );
};
function Tab({value}) {
  
  if (value.toString() == '1') {
    return <CrimesSince2001Documentation />;
  }else {
    return <CensusDataVariables />;
  };
}