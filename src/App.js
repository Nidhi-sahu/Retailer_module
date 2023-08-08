
import './App.css';
import{Routes,Route} from 'react-router-dom'
//import { BrowserRouter } from 'react-router-dom';
import Sidebar, { Sidebaar } from './Component/Sidebar';
import Dashboard from './Pages/Dashboard';
import Product from './Pages/Product';
import Banking from './Pages/Banking';
import Rating from './Pages/Rating';
import BookingDetail from './Pages/BookingDetail';
import { BrowserRouter as Router } from 'react-router-dom';
// import Login from './Pages/Login.jsx';
import Navbaar from './Component/Navbaar';


function App() {
  return (
    <>
     <div> 
          {/* <div>
      <Navbaar/>
      </div>   
      
      
        <div> 
    <Sidebaar/>
    
   </div>   */}
    

    <Routes> 
      {/* <Route path="/" element={<Login/>}/>  */}
        <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/banking" element={<Banking/>}/>
      <Route path="/rating" element={<Rating/>} />
      <Route path="/bankingdetail" element={<BookingDetail/>}/>
    </Routes>
    
   </div>   
    
    
      
    
   </> 
   
  );
}

export default App;
