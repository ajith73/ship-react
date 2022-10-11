import React from 'react'
import scenario1 from "../animations/scenario_1-1.mp4"
import "../css/shipimage.css"

function SimulationImage() {
  return (
    <div className="card shipimage-card" >
  <video className='videot' controls width="100%" height="280px" loop autoPlay style={{display:"block"}}>
    
<source src={scenario1}
        type="video/mp4"/>

Sorry, your browser doesn't support embedded videos.
  </video>




  
</div>
  )
}

export default SimulationImage