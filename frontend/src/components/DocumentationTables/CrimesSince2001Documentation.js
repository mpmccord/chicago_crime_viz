import { Table } from 'react-bootstrap';
export function CrimesSince2001Documentation() {
    return (
        <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Columns in the Crimes Dataset</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
    <thead>
        <tr>
            <td>
                Variable
            </td>
            <td>
                Description
            </td>
        </tr>
    </thead>
    <tfoot>
    <tr>
            <td>
                Variable
            </td>
            <td>
                Description
            </td>
        </tr>
    </tfoot>
    <tbody>
    <tr>
        <td>ID</td>
        <td>Unique identifier for the record.</td>
    </tr>
    <tr>
        <td>Case number</td>
        <td>Chicago id for the case number</td>
    </tr>
    <tr>
        <td>Date</td>
        <td>Date when the incident occurred, this is sometimes a best estimate.</td>
    </tr>
    <tr>
        <td>Block</td>
        <td>The partially redacted address where the incident occurred.</td>
    </tr>
    <tr>
        <td>IUCR</td>
        <td>The Illinois Uniform Crime Reporting Code.</td>
    </tr>
    <tr>
        <td>Primary Type</td>
        <td>The primary description of the IUCR code.</td>
    </tr>
    <tr>
        <td>Description</td>
        <td>The secondary description of the IUCR code.</td>
    </tr>
    <tr>
        <td>Location description</td>
        <td>The primary description of the location where the incident occurred.</td>
    </tr>
    <tr>
        <td>Arrest</td>
        <td>Whether or not the incident resulted in an arrest.</td>
    </tr>
    <tr>
        <td>Domestic</td>
        <td>Whether or not the incident was a domestic incident.</td>
    </tr>
    <tr>
        <td>Beat</td>
        <td>Indicates the beat where the incident occurred.</td>
    </tr>
    <tr>
        <td>District</td>
        <td>The police district where the incident occurred.</td>
    </tr>
    <tr>
        <td>Ward</td>
        <td>The city council district where the incident occurred.</td>
    </tr>
    <tr>
        <td>Community Area</td>
        <td>The community area where the incident occurred.</td>
    </tr>
    <tr>
        <td>FBI Code</td>
        <td>FBI Code crime classification.</td>
    </tr>
    <tr>
        <td>X Coordinate</td>
        <td>The X coordinate location where the incident occurred.</td>
    </tr>
    <tr>
        <td>Y coordinate</td>
        <td>The Y coordinate where the incident occurred.</td>
    </tr>
    <tr>
        <td>Year</td>
        <td>Year the incident occurred.</td>
    </tr>
    <tr>
        <td>Updated on</td>
        <td>Date and time the record was last updated.</td>
    </tr>
    <tr>
        <td>Latitude</td>
        <td>The latitude where the incident occurred.</td>
    </tr>
    <tr>
        <td>Longitude</td>
        <td>The longitude where the incident occurred.</td>
    </tr>
    <tr>
        <td>Location</td>
        <td>The location of the incident.</td>
    </tr>
    </tbody>
    </table>
    </div>
    </div>
    </div>
  );
}




