import React from 'react'

import {NavLink} from 'react-router-dom'
import { BsFillCloudArrowUpFill ,BsPersonPlusFill,BsSlack} from "react-icons/bs";
import { AiFillAppstore,AiFillGold } from "react-icons/ai";
import {AiOutlineAppstore} from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { BiStore,BiUserPlus,BiMale} from "react-icons/bi";
import {MdLocalOffer} from "react-icons/md";

 import Sidebaarc from "./Sidebaarc.css"

 export const Sidebaar = () => {
    return (
      <div style={{width:'200px',marginTop:'40px'}}>
        
          <div className="sidebaar"> 
          
         
            <ul >
            <h2 style={{fontSize:'35', color:'white',marginTop:'5px',marginLeft:'10px'}} >Retailer</h2>  
             <h3 ><NavLink to='/'></NavLink></h3>
             <h3 style={{marginTop:'30px'}}><NavLink to='/dashboard' style={{color:'white',fontSize:'23px'}}><AiFillAppstore style={{color:"white",height:"18px", marginBottom:'10px'}}/>Dashboard</NavLink></h3>
             <h3 style={{marginTop:'30px'}}><NavLink to='/product'  style={{color:'white',fontSize:'23px'}}><FaUserFriends style={{color:"white",height:"18px",marginBottom:'10px'}}/>Product</NavLink> </h3>
           <h3 style={{marginTop:'30px'}}> <NavLink to='/banking'  style={{color:'white',fontSize:'23px'}}><BsPersonPlusFill style={{color:"white",height:"20px",marginBottom:'10px'}}/>Banking</NavLink> </h3>
               <h3 style={{marginTop:'30px'}}><NavLink to='/rating' style={{color:'white',fontSize:'25px'}}><BsSlack style={{color:"white",height:"20px",marginBottom:'10px'}}/> Rating </NavLink></h3>
               <h3 style={{marginTop:'30px'}}><NavLink to='/bankingdetail' style={{color:'white',fontSize:'23px'}}><AiFillGold style={{color:"white",height:"20px",marginBottom:'10px'}}/>Detail</NavLink></h3>
                        </ul>
   </div>
      
      
      </div>  
    )

 
}


export default Sidebaar;