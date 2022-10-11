import React from 'react'
import { useSelector } from 'react-redux'
import "../css/shipdata.css"

function ShipData() {
  const data = useSelector(state => state.senario.value)
  return (
    <div className="card shipdata-card " >
  <div className="card-body shiptable">
    <table className='shipdata-table' >
      <thead>
      <tr >
        <th>Ports</th>
        <th style={{paddingLeft:"30px"}}>Depth(m)</th>
      </tr>
      </thead>
      <tbody>

    
      <tr>
      <td> {data.ports[0]}</td>
      <td className='shipdata-td'style={{paddingLeft:"40px"}}>{data.depth[0]}</td>
      </tr>
      <tr>
      <td> {data.ports[1]}</td>
      <td className='shipdata-td' style={{paddingLeft:"40px"}} >{data.depth[1]}</td>
      </tr>
      <tr>
      <td> {data.ports[2]}</td>
      <td className='shipdata-td' style={{paddingLeft:"40px"}}>{data.depth[2]}</td>
      </tr>
      <tr>
      <td> {data.ports[3]}</td>
      <td className='shipdata-td' style={{paddingLeft:"40px"}}>{data.depth[3]}</td>
      </tr>
      <tr>
      <td> {data.ports[4]}</td>
      <td className='shipdata-td' style={{paddingLeft:"40px"}}>{data.depth[4]}</td>
      </tr>
      <tr>
      <td> {data.ports[5]}</td>
      <td className='shipdata-td' style={{paddingLeft:"40px"}}>{data.depth[5]}</td>
      </tr>
      <tr>
      <td> {data.ports[6]}</td>
      <td className='shipdata-td' style={{paddingLeft:"40px"}}>{data.depth[6]}</td>
      </tr>
      <tr>
      <td> {data.ports[7]}</td>
      <td className='shipdata-td' style={{paddingLeft:"40px"}} >{data.depth[7]}</td>
      </tr>
      <tr>
      <td> {data.ports[8]}</td>
      <td className='shipdata-td' style={{paddingLeft:"40px"}}>{data.depth[8]}</td>
      </tr>
      </tbody>
      
    </table>
  </div>
</div>
  )
}

export default ShipData