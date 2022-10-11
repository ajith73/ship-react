import React from 'react'
import WaterFlow from './WaterFlow'
import engine from "../images/engine.png"
import sideview from "../images/side_view_Extra_large_2.png"
import "../css/simulation.ship.css"
import {useSelector} from "react-redux"

function SimulationShip() {
  const data = useSelector(state=> state.image.value )
  console.log(data.enginecount)
  return (
    <>
    <div className="card card-ship p-3" >
  <div className="" style={{width:"70%",display:"flex",flexDirection:"column"}}>
    <p className='fw-bold'>Ship name: {data.name}</p>
    <p className='fw-bold'>Ship length</p>
    
    <img src={data.sideview? data.sideview : sideview}  className="sideviewimage"/>
  <img src={engine} className="simulation-engine" /> 
  <p className='engine-count' style={{margin:"0px"}}>{data.enginecount}</p>
    <p style={{fontSize:"0.9rem"}}>Number of extra engines </p>
  
 
    </div>
    <div className='card simulation-waterflow' >
    <WaterFlow/>
    </div>
   
    </div>
   
    


    </>
  )
}

export default SimulationShip