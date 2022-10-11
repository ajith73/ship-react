import React from 'react'
import "../css/simulation.table.css"

function SimulationTable() {
  return (
    <table className="table table-bordered simulation-table" >
  <thead className='table-info' style={{borderBottom:"1px solid blue"}}>
    <tr>
      <th scope="col" >Design Parameter</th>
      <th scope="col">Calculated value</th>
      <th scope="col">Design Criteria</th>
      
    </tr>
  </thead>
  <tbody className='table-light' >
    <tr>
      
      <td>Number of carge containers</td>
      <td></td>
      <td>4,000</td>
    </tr>
    <tr>
      
      <td>Fuel used (tonnes)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      
      <td >Travel used (days)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      
      <td>co2 emitted (tonnes)</td>
      <td></td>
      <td>20,000</td>
    </tr>
    <tr>
      
      <td>Cost/container ($)</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
  )
}

export default SimulationTable