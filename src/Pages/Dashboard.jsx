import Dashboardc from './Dashboardc.css'
 import Card from "react-bootstrap/Card";
import React from 'react'
import Graph from "./Graph";
import Table from "react-bootstrap/Table";
import Navbaar from '../Component/Navbaar';
import Sidebaar from '../Component/Sidebar';

function Dashboard() {
 
  return (
    <>

     <div>
      <Navbaar/>

      <div> 

       <Sidebaar/>
        
       </div> 
       </div>
        
          
<div className="dass">


         <div className="card-container"> 
         

         <div className="card1">
        <h3 className="card-heading"> Card<br/></h3>
        <p className="card-body"></p>
        <span className="count"></span>
    </div>

    <div className="card1">
        <h3 className="card-heading"> Card<br/><br/></h3>
        <p className="card-body"></p>
        <span className="count"></span>
    </div>

     <div className="card2">
        <h3 className="card-heading">Card<br/><br/></h3>
        <p className="card-body"></p>
        <span className="count"></span>
    </div> 
    </div>

   <div className="Dashg" style={{display:'flex',marginLeft:'100px'}}>
    <Graph/>
   {/* <div className="Dashg2" style={{width:'50%',height:'200px'}}> */}
     <span style={{marginLeft:'50px',width:'100%',marginTop:'30px',height:'200px',position:'flex',marginRight:'200px'}}>
    <Table striped bordered hover >
      <thead>
        <tr style={{color:'black',width:"100px"}}>
          <th>First Name</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          
        
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td >Larry the Bird</td>
          <td>@twitter</td>
        </tr>
        
      </tbody>
    </Table>
    </span>
    </div>
   </div>
   
    </>
   
  )
}

export default Dashboard;