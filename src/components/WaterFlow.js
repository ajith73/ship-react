import React from 'react'

import water from "../images/water.png"
import { useSelector } from 'react-redux'
import "../css/waterflow.css"
import frontsmall1 from "../images/front_view_small_1.png";

function WaterFlow() {
  const data = useSelector(state => state.image.value)

  return (
    <div className="card waterflow-card" style={{ border: "none" }} >
      <div >
        <img src={data.frontview? data.frontview : frontsmall1 } className="frontview-image" />


        <img src={water} className="water-image" alt="image" />
        <p className='bg-secondary text-white waterflow-p ' >Draft=9 m</p>
      </div>
    </div>


    /* <div className="card  " >
   <div className="card-body" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
     <img src={frontview} style={{height:"100px",width:"50px"}}/>
     <img src={water} style={{height:"100px"}}/>
     <p className='bg-secondary text-white ' style={{width:"100%",padding:"5px 50px"}}>draft=9 m</p>
   </div>
 </div>*/
  )
}

export default WaterFlow