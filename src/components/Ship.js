import React, { useState } from 'react'
import "../css/ship.css"
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import engine from "../images/engine.png"

import { imageData } from "../utils/imagedata"
import { useDispatch } from "react-redux"
import { changeimage } from "../store/image.store";
import {textLocalize} from "../localize/strings"

function Ship() {
  const dispatch = useDispatch()
  const [shipname, setShipname] = useState("")
  const [sideview, setSideview] = useState();
  const [enginevalue, setEnginevalue] = useState(0);
  const [container, setContainer] = useState(1);
  const [containerImage, setContainerImage] = useState(imageData[0].container[1]);
  const [sideviewImage, setSideviewImage] = useState(imageData[0].sideview[1][1]);
  const [frontviewImage, setFronteviewImage] = useState([]);

  
  const slider1Props = {
    min: 0,
    max: 4,
    step: 1,
    // marks: {0.1: 10, 0.2: 20, 0.3: 30, 0.4: 40, 0.5: 50,  }
  }
  const slider2Props = {
    min: 0,
    max: 3,
    step: 1,
    marks: { 0: 0, 1: 1, 2: 2, 3: 3 }
  }
  const slider3Props = {
    min: 1,
    max: 3,
    step: 1,
    // marks: {0.1: 10, 0.2: 20, 0.3: 30, 0.4: 40, 0.5: 50,  }
  }
  const containerChange = (val) => {
    setContainerImage(imageData[0].container[val])
  }

  const shipLengthChange = (val) => {

    setSideviewImage(imageData[0].sideview[container][val]);
    setFronteviewImage(imageData[0].frontview[container][val]);
    dispatch(changeimage({ sideview: sideviewImage, frontview: frontviewImage }))

  }


  
  return (
    <div className="card ship-card " >
      <div className="card-body">

        <label className='label' >Ship name</label>
        <input onChange={(e) => {
          setShipname(e.target.value)
          dispatch(changeimage({ name: e.target.value }))
        }} style={{ paddingLeft: "5px", marginBottom: "30px"  ,border:"2px solid rgba(98, 222, 238, 0.842)"}} placeholder='Enter Ship Name' />


        <p>Carge containers  14,000</p>
        <div className='card' style={{ border: "none" }}>
          <img src={sideviewImage} className="sideview-img" />
        </div>
<div style={{ display: "flex", justifyContent: "space-between" }}>
<p >{textLocalize.shoplength} </p>
        <Slider className="rc-slider slider-shiplength " 
         dots={true}
          value={sideview}
          onChange={val => {
            console.log(val)
            setSideview(val);
            shipLengthChange(val)

          }}
          {...slider1Props}
        />
</div>
        <div className='extra-engines'>
        <p >Number of <br /> extra engines</p>
          <img src={engine} className="engine-img" style={{ width: "40px", height: "20px" }} />
          <Slider className='engine-slider  rc-slider' style={{ width: "200px", marginLeft: "30px" }}

            value={enginevalue}
            onChange={val => {
              setEnginevalue(val)
              dispatch(changeimage({ enginecount: val }))
            }}
            {...slider2Props} />
        </div>
      
        
        <div className='stack-height'>
          <p >Container stack height

          </p>
          <Slider
           style={{marginRight:"20px", marginTop: "30px" }}
            value={container}
             draggableTrack
             dots={true}
             vertical={true}
          
            onChange={val => {
              setContainer(val)
              containerChange(val)
            }}
            {...slider3Props}
          />
         
          <img src={containerImage} style={{ width: "30px", marginTop: "25px" }} />
        </div>

      </div>
    </div>
  )
}

export default Ship

/* 
  <Slider className="rc-slider slider-shiplength " 
         dots={true}
          value={sideview}
          onChange={val => {
            console.log(val)
            setSideview(val);
            shipLengthChange(val)

          }}
          {...slider1Props}
        />


<Slider activeDotStyle={{backgroundColor:"#f16400", border: "1px solid #f16400"}}  vertical={true}  value={state.containerNumber} draggableTrack
                        min={1} max={3} dots={true} steps={1}
                        onChange={(e) => { console.log(e); dispatch(containerImage(e)) }} /> */
 