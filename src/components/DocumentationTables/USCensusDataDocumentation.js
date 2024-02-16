import { Table } from 'react-bootstrap';
export function USCensusDataDocumentation() {
  return (
/*
This is the documentation for the US Census API variables.

Downloaded from their website and reformatted according to my needs.
*/
    <>
    <Table>
    <tr>
        <td>Name</td>
        <td>Label</td>
        <td>Concept</td>
        <td>Required</td>
        <td>Attributes</td>
        <td>Limit</td>
        <td>Predicate Type</td>
        <td>Group</td>
    </tr>
    <tr>
        <td>15 variables</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>BIRTHS</td>
        <td>Total Births</td>
        <td>Estimate Variables</td>
        <td>not required</td>
        <td></td>
        <td>0</td>
        <td>int</td>
        <td></td>
    </tr>
    <tr>
        <td>N/A</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>DATE_</td>
        <td>Estimate Date</td>
        <td>Estimate Variables</td>
        <td>required</td>
        <td></td>
        <td>0</td>
        <td>int</td>
        <td></td>
    </tr>
    <tr>
        <td>N/A</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>DEATHS</td>
        <td>Total Deaths</td>
        <td>Estimate Variables</td>
        <td>not required</td>
        <td></td>
        <td>0</td>
        <td>int</td>
        <td></td>
    </tr>
    <tr>
        <td>N/A</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>DENSITY</td>
        <td>Population Density</td>
        <td>Estimate Variables</td>
        <td>not required</td>
        <td></td>
        <td>0</td>
        <td>int</td>
        <td></td>
    </tr>
    <tr>
        <td>N/A</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>DIVISION</td>
        <td>Division name</td>
        <td>Estimate Variables</td>
        <td>not required</td>
        <td></td>
        <td>0</td>
        <td>(not a predicate)</td>
        <td></td>
    </tr>
    <tr>
        <td>N/A</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>DOM</td>
        <td>Net Domestic Migration of total Pop</td>
        <td>Estimate Variables</td>
        <td>not required</td>
        <td></td>
        <td>0</td>
        <td>int</td>
        <td></td>
    </tr>
    <tr>
        <td>N/A</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>for</td>
        <td>Census API FIPS &#39;for&#39; clause</td>
        <td>Census API Geography Specification</td>
        <td>predicate-only</td>
        <td></td>
        <td>0</td>
        <td>fips-for</td>
        <td></td>
    </tr>
    <tr>
        <td>N/A</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>in</td>
        <td>Census API FIPS &#39;in&#39; clause</td>
        <td>Census API Geography Specification</td>
        <td>predicate-only</td>
        <td></td>
        <td>0</td>
        <td>fips-in</td>
        <td></td>
    </tr>
    <tr>
        <td>N/A</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>NIM</td>
        <td>Net International Migration</td>
        <td>Estimate Variables</td>
        <td>not required</td>
        <td></td>
        <td>0</td>
        <td>int</td>
        <td></td>
    </tr>
    <tr>
        <td>N/A</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>POP</td>
        <td>Resident population total</td>
        <td>Estimate Variables</td>
        <td>not required</td>
        <td></td>
        <td>0</td>
        <td>int</td>
        <td></td>
    </tr>
    <tr>
        <td>N/A</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>REGION</td>
        <td>Region name</td>
        <td>Estimate Variables</td>
        <td>not required</td>
        <td></td>
        <td>0</td>
        <td>(not a predicate)</td>
        <td></td>
    </tr>
    <tr>
        <td>N/A</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>RESIDUAL</td>
        <td>Final residual for total pop</td>
        <td>Estimate Variables</td>
        <td>not required</td>
        <td></td>
        <td>0</td>
        <td>int</td>
        <td></td>
    </tr>
    <tr>
        <td>N/A</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>STATE</td>
        <td>State FIPS Code</td>
        <td>Selectable Geographies</td>
        <td>not required</td>
        <td></td>
        <td>0</td>
        <td>(not a predicate)</td>
        <td></td>
    </tr>
    <tr>
        <td>N/A</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>STNAME</td>
        <td>State name</td>
        <td>Selectable Geographies</td>
        <td>not required</td>
        <td></td>
        <td>0</td>
        <td>(not a predicate)</td>
        <td></td>
    </tr>
    <tr>
        <td>N/A</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>SUMLEV</td>
        <td>Geographic Summary Level</td>
        <td>Selectable Geographies</td>
        <td>not required</td>
        <td></td>
        <td>0</td>
        <td>(not a predicate)</td>
        <td></td>
    </tr>
    <tr>
        <td>N/A</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</Table>
    </>
  );
}



