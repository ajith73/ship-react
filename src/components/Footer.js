import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'
import "../css/footer.css"

function Footer() {
  return (
    <div className=" my-3 footercontainer" style={{height:"120px"}}>
 
    <div className="card footer-card " style={{height:"70px",backgroundColor:"#f5f5f2"}}>
  <div className="card-body footer-body " style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
 <p className='footer-p' >Choose a scenario, make your upadates,open the simulation tab, and run the simulation.</p>
 <FontAwesomeIcon icon={faRotateRight} className="bg-secondary" type='button' style={{color:"white",fontSize:"1.5rem",padding:"10px"}} />

  </div>
</div></div>
  )
    
   
}

export default Footer