import {React,useState,useEffect}from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
// import Productc from "./Productc.css"
import {Switch} from "antd";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Pagination } from "antd";
import axios from 'axios';
import Navbaar from '../Component/Navbaar';
import Sidebaar from '../Component/Sidebar';

function Roles() {

  // const [ bankData, setBankData ] = useState([]);

  // async function getData(){
   
      
      
  //     const result = await axios.post(
  //       'http://localhost:3002/shopregistration',
  //       {},
        
  //     );
  //   if (result) {
  //     console.log("data", result.data);
  //     setBankData(result.data);
      
  //   }
  // }
  // useEffect(()=>{
  // getData()}, [])
  
  // const getToken = req.cookies
  //   console.log("getToken", getToken);
  //   const getUser =  jwt.verify(getToken, "jwttokensecreatkey");
   
   
  //   if (!getUser) {
  //       return res.status(200).json({ message: "user not logged in" });
  //     }
  //     let emailData = req.body.email;

  //   let sql = `select * from retailer_registration where email = '${getUser}'`;
   
  //   connection.query(sql, getUser, function(error,result){
      
  //       if(error){
  //           console.log(error.sqlMessage);
  //       }
  //       else{
  //           res.send(result)
  //       }
  //   })


  // }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [shows, setShows] = useState(false);
  const handleCloses = () => setShows(false);
  const handleShows = () => setShows(true);

  const [showss, setShowss] = useState(false);
  const handleClosess = () => setShowss(false);
  const handleShowss = () => setShowss(true);

  const [toggle,setToggle] =useState(false);
  const toggler=() =>{
    toggle ? setToggle(false): setToggle(true)
  }

  
  
return(
  <>
  <div>
      <Navbaar/>

      <div> 

       <Sidebaar/>
        
       </div> 
   </div>
  <div className="Banktab" style={{marginTop:"50px",marginLeft:'260px'}}>
  <Tabs
     defaultActiveKey="VIEW"
     id="uncontrolled-tab-example"
     className="mb-3"
     style={{width:'800px'}}
   >
  
     <Tab eventKey="VIEW" title="VIEW">
     <p style={{marginTop:'50px',width:'100%'}}>  
      <div className="btnnn22" style={{marginBottom:"20px"}}>
        <Button variant="primary" onClick={handleShow} style={{width:'10', height:'10'}}>Add</Button>
        <input className="inp" type="search" placeholder="Search" style={{marginLeft:'20px',height:'37px'}}/>
  </div>  
     
     <Table striped bordered hover>
      <thead>
        <tr >
          <th>Shop ID</th>
          <th> Shop Name</th>
          <th>City</th>
          <th>Contact</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          
          <td>< Switch onClick={toggler} style={{width:'10px', marginLeft:'15px'}}/></td>
          <td>
     <button className='btn btn-warning'onClick={ handleShows} style={{width:'55px'}}>View</button>{''}
        <button className='btn btn-danger' onClick={handleShowss} style={{marginLeft:'10px',width:'50px', paddingLeft:'10px',height:'35px'}} >Edit</button>

        </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    <Pagination defaultCurrent={1} total={50} style={{ marginLeft:'450px'}}/>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Enter Name" />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Employee</Form.Label>
        <Form.Control type="text" placeholder="Employee Id" />
      </Form.Group>
      
      {/* <Button variant="primary" type="submit">
        Submit
      </Button> */}
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={shows} onHide={handleCloses}>
        <Modal.Header closeButton>
          <Modal.Title>View</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Enter Name" />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Employeess</Form.Label>
        <Form.Control type="text" placeholder="Employee Id" />
      </Form.Group>
      
      {/* <Button variant="primary" type="submit">
        Submit
      </Button> */}
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloses}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloses}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal show={showss} onHide={handleClosess}>
        <Modal.Header closeButton>
          <Modal.Title>edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Enter Name" />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Employeess</Form.Label>
        <Form.Control type="text" placeholder="Employee Id" />
      </Form.Group>
{/*       
      <Button variant="primary" type="submit">
        Submit
      </Button> */}
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosess}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClosess}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </p>
     </Tab>
     <Tab eventKey="ADD" title="ADD">
     <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Enter Name" />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Employeess</Form.Label>
        <Form.Control type="text" placeholder="Employee Id" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
       </Tab>
  </Tabs>
  </div>
  </>
 
)
}
export default Roles