import Container from "react-bootstrap/Container";
import React from "react";
import {useState} from "react";
import {getDate} from "../components/js_functions";
import {CrimesSince2001Documentation} from "../components/DocumentationTables/CrimesSince2001Documentation";
import {Button} from "react-bootstrap";
export function DatasetOverview() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [dataRef, setDataRef] = useState("https://data.cityofchicago.org/Public-Safety/Crimes-2001-to-Present/ijzp-q8t2/about_data")

    return (
      <Container className="justify-content-md-center">
          <p>
              The original dataset as of {currentDate.toDateString()} has roughly 8 million cases.
              Each case represents an individual crime that was reported to the Chicago police.
              The table below shows the variables that were collected for each crime for reference.
          </p>
        <CrimesSince2001Documentation></CrimesSince2001Documentation>
      </Container>
  );
};