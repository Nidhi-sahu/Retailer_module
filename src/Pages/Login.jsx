import {React,useState} from 'react';
import loginc from "./loginc.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
// import { useRouter } from 'next/router';


const Login = () =>
{
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  

  const userData = {
    email : email,
    password : password
  }
 
 const emailData = email;
 console.log("emailData", emailData);

  async function submitDetails(e) {
    e.preventDefault()
   console.log("line1");
    const config = {
      "Content-Type": "application/json"
    }
    let result = await axios.post(`http://localhost:3002/shopregistration`, userData, config)
    // console.log("result", result);
    // console.log("ownername", result.data.data[0].ownername);
   
    } 
    return(
        <>
        <div className="wrapper1">
    <form className="form-signin" 
    // onSubmit={handlesubmit}
    >       
      <h2 className="form-signin-heading">LOGIN</h2>
      {/* <input typeName="password" class="form-control" name="name" placeholder="Name" required=""/> <br/>     
      <input typeName="text" class="form-control" name="phone" placeholder="phone" required="" autofocus="" /><br/> */}
      <input typeName="text" class="form-control" name="email" placeholder="Email Address" required="" autofocus="" 
      onChange={(e) => setEmail(e.target.value)}
       /><br/>
      <input typeName="password" class="form-control" name="password" placeholder="Password" required=""  
      onChange={(e) => setPassword(e.target.value)}
      /> <br/>     
      <button className="btn  btn-lg btn-primary btn-block1" type="submit" onClick={submitDetails} >submit</button>   
     
    </form>
  </div>
        </>
    )
}
export default Login;
