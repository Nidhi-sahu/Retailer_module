import {React,useState} from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Bankingc from './Bankingc.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Pagination } from "antd";
import Navbaar from '../Component/Navbaar';
import Sidebaar from '../Component/Sidebar';


function Banking() {
const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [shows, setShows] = useState(false);
  const handleCloses = () => setShows(false);
  const handleShows = () => setShows(true);
  return (
    <>
    <div>
      <Navbaar/>

      <div> 

       <Sidebaar/>
        
       </div>
       </div>
      <div className="btnnn" style={{marginLeft:'60px',marginTop:'60px',height:'30px'}}>
      <Button variant="primary" onClick={handleShow} style={{width:'20', height:'20',marginBottom:'200px',marginleft:'20px'}}>PAY</Button>
      </div>
    <div className="user2" style={{ width:'80%', marginTop:'150px',marginRight:'60px'}}> 
       <Table striped bordered hover >
    
      <thead>
        <tr>
         
          <th>Role ID</th>
          <th>Role Name</th>
          <th >Rating</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>
      <button className='btn btn-danger' onClick={handleShows} sytle={{width:'20',height:'5'}} >Edit</button>
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
   
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>PAYMENT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
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
        <tr>
          <td>3</td>
          <td >Larry the Bird</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <td>3</td>
          <td >Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
        
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
          <Modal.Title>update</Modal.Title>
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
      </div>

    </>
   
  )
}

export default Banking;