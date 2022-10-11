
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import  {clickcontent} from "../store/senario.store"
import {senario} from "../utils/data"
import "../css/senario.css"


function Senario() {
 
  const dispatch = useDispatch()

  const data = useSelector(state => state.senario.value)
  //console.log(data.heading)
 // console.log(data.content)
const changeData =(e)=>{
  if(e.target.value === "senario 1"){
    dispatch(clickcontent(senario[0]))
    //console.log(e.target.value)
  }else if(e.target.value === "senario 2"){
    dispatch(clickcontent(senario[1]))
    
  }else if(e.target.value === "senario 3"){
    dispatch(clickcontent(senario[2]))
    
  }else if(e.target.value === "senario 4"){
    dispatch(clickcontent(senario[3]))
    
  }else if(e.target.value === "senario 5"){
    dispatch(clickcontent(senario[4]))
    
  }
}



  return (

<div className="card senario-card " >
  <div className="card-body">
  <h5 className="card-title mb-3">Choose Scenario</h5>
  
  <select className='mb-3 senario-p' onChange={changeData} name="senario" >
  <option  >Select any one</option>
    <option  value="senario 1" >Scenario 1-Volume </option>
    <option value="senario 2">Scenario 2-environment impact</option>
    <option value="senario 3">Scenario 3-environment impact</option>
    <option   value="senario 4">Scenario 4-environment impact</option>
    <option  value="senario 5">Scenario 5-environment impact</option>
  </select>

  <h5> {data.heading}
</h5>
<p className='fw-normal'>{data.content}</p>
  </div>
</div>





   
  )
}

export default Senario