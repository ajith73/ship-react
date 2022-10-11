import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'
import "../css/simulation.footer.css"


function Simulationfooter() {
  return (
    <div className=" my-3 simulation-footer" >
    <div className="row">
      <div className="col">
      <div className="card" style={{backgroundColor:"#f5f5f2",width:"100%",height:"70px"}}>
    <div className="card-body " style={{display:"flex",justifyContent:"flex-end"}}>
  <button className='btn btn-1 ' style={{height:"40px",color:"white",backgroundColor:"#c15610",fontWeight:"bold",borderRadius:"none",marginRight:"20px"}}>Run Simulation</button>
  <button className='btn btn-1' style={{height:"40px",color:"#808080",border:"2px solid gray",borderRadius:"none",marginRight:"20px"}}>Save To Notes</button>
   <FontAwesomeIcon icon={faRotateRight} type="button" className="bg-secondary" style={{color:"white",fontSize:"1.5rem",padding:"8px",marginTop:"0px"}} />
  
    </div>
  </div></div></div></div>
  )
}

export default Simulationfooter