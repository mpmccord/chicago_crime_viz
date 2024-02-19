import { Table } from 'react-bootstrap';
export function USCensusDataDocumentation() {
  return (
/*
This is the documentation for the US Census API variables.

Downloaded from their website and reformatted according to my needs.
*/
    <>
     <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Columns in the Census Dataset</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
    <thead>
        <td>Name</td>
        <td>Label</td>
        <td>Concept</td>
        <td>Required</td>
        <td>Limit</td>
        <td>Predicate Type</td>
    </thead>
    <tfoot>
        <td>Name</td>
        <td>Label</td>
        <td>Concept</td>
        <td>Required</td>
        <td>Limit</td>
        <td>Predicate Type</td>
    </tfoot>
    <tbody>
    <tr>
        <td>BIRTHS</td>
        <td>Total Births</td>
        <td>Estimate Variables</td>
        <td>not required</td>
        
        <td>0</td>
        <td>int</td>
        
    </tr>
    <tr>
        <td>DATE_</td>
        <td>Estimate Date</td>
        <td>Estimate Variables</td>
        <td>required</td>
        
        <td>0</td>
        <td>int</td>
        
    </tr>
    <tr>
        <td>DEATHS</td>
        <td>Total Deaths</td>
        <td>Estimate Variables</td>
        <td>not required</td>
        
        <td>0</td>
        <td>int</td>
        
    </tr>
    <tr>
        <td>DENSITY</td>
        <td>Population Density</td>
        <td>Estimate Variables</td>
        <td>not required</td>
        
        <td>0</td>
        <td>int</td>
        
    </tr>
    <tr>
        <td>DIVISION</td>
        <td>Division name</td>
        <td>Estimate Variables</td>
        <td>not required</td>
        
        <td>0</td>
        <td>(not a predicate)</td>
        
    </tr>
    <tr>
        <td>DOM</td>
        <td>Net Domestic Migration of total Pop</td>
        <td>Estimate Variables</td>
        <td>not required</td>
        
        <td>0</td>
        <td>int</td>
        
    </tr>
    <tr>
        <td>for</td>
        <td>Census API FIPS &#39;for&#39; clause</td>
        <td>Census API Geography Specification</td>
        <td>predicate-only</td>
        
        <td>0</td>
        <td>fips-for</td>
        
    </tr>
    <tr>
        <td>in</td>
        <td>Census API FIPS &#39;in&#39; clause</td>
        <td>Census API Geography Specification</td>
        <td>predicate-only</td>
        
        <td>0</td>
        <td>fips-in</td>
        
    </tr>
    <tr>
        <td>NIM</td>
        <td>Net International Migration</td>
        <td>Estimate Variables</td>
        <td>not required</td>
        
        <td>0</td>
        <td>int</td>
        
    </tr>
    <tr>
        <td>POP</td>
        <td>Resident population total</td>
        <td>Estimate Variables</td>
        <td>not required</td>
        
        <td>0</td>
        <td>int</td>
        
    </tr>
    <tr>
        <td>REGION</td>
        <td>Region name</td>
        <td>Estimate Variables</td>
        <td>not required</td>
        
        <td>0</td>
        <td>(not a predicate)</td>
        
    </tr>
    <tr>
        <td>STATE</td>
        <td>State FIPS Code</td>
        <td>Selectable Geographies</td>
        <td>not required</td>
        
        <td>0</td>
        <td>(not a predicate)</td>
        
    </tr>
    <tr>
        <td>STNAME</td>
        <td>State name</td>
        <td>Selectable Geographies</td>
        <td>not required</td>
        
        <td>0</td>
        <td>(not a predicate)</td>
        
    </tr>
    <tr>
        <td>SUMLEV</td>
        <td>Geographic Summary Level</td>
        <td>Selectable Geographies</td>
        <td>not required</td>
        
        <td>0</td>
        <td>(not a predicate)</td>
        
    </tr>
    </tbody>

</table>
</div>
</div>
</div>
    </>
  );
}



