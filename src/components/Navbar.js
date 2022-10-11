import React from 'react'

import {  useDispatch } from "react-redux"
import {openPage} from "../store/store"
import Overview from '../pages/Overview';
import Home from '../pages/home';
import Notes from '../pages/Notes';
import Support from '../pages/Support';
import Edit from '../pages/edit';

import List from '../pages/list';
import {BiEdit} from "react-icons/bi"
import {BsThreeDots} from "react-icons/bs"
import "../css/navbar.css"
import { clickoverview } from "../store/overview.store"

function Navigation() {

  const dispatch = useDispatch()

  

  return (
<>   
      <nav className="navbar navbar-expand-xl  navbar-dark bg-dark text-white-50" style={{justifyContent:"space-around"}}>
  <div className="container navbar-container" >
    <a className="navbar-brand "> How Can You Design a Ship to Carry Cargo?</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse   justify-content-end" id="navbarNav" style={{marginRight:"0"}}>
      <ul className="navbar-nav  ">
        <li className="nav-item px-3  nav-link "  type="button"  onClick={()=>{
            dispatch(clickoverview(true));
          dispatch(openPage({heading:<Overview/>}))
          }}>
           Overview
        </li>
        <li className="nav-item px-3 nav-link active" type="button"  onClick={()=>dispatch(openPage({heading:<Home/>}))}>
          Home
        </li>
        <li className="nav-item px-3 nav-link "  type="button"  onClick={()=>dispatch(openPage({heading:<Notes/>}))}>
         Notes & Report
        </li>
        <li className="nav-item px-3 nav-link" type="button"  onClick={()=>dispatch(openPage({heading:<Support/>}))}>
          Support
        </li>
        <li className="nav-item px-4 nav-link " type="button"  onClick={()=>dispatch(openPage({heading:<Edit/>}))}>
          <BiEdit/>
        </li>
        <li className="nav-item pe-0 nav-link" type="button" style={{borderRight:"none"}} onClick={()=>dispatch(openPage({heading:<List/>}))}>
          <BsThreeDots/>
        </li>
      </ul>
    </div>
  </div>
</nav>
     

</>




 
 
  );
}


export default Navigation;