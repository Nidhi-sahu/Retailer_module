import {React,useState} from "react"
// import Rolesc from "./Rolesc.css"
import Table from 'react-bootstrap/Table'
import { Pagination } from "antd";
import Navbaar from '../Component/Navbaar';
import Sidebaar from '../Component/Sidebar';

const Rating = () => {
  
  return (
    <>
   <div>
      <Navbaar/>

      <div> 

       <Sidebaar/>
        
       </div>
       </div>
    <div className="user2" style={{marginLeft:'160px', width:'60%', marginTop:'200px'}}> 
       <Table striped bordered hover >
    
      <thead>
        <tr>
         
          <th>Product ID</th>
          <th>Product Name</th>
          <th >Rating</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>
     
        </td>
         
        
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
         </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
       
      </tbody>
    </Table>
    <Pagination defaultCurrent={1} total={50} style={{ marginLeft:'630px'}}/>
    </div>
   
    </>
   
  )
}
  

export default Rating;