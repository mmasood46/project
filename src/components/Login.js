import React, { useState } from 'react'

const Login = () => {
  const [inputArr,setInputArr]=useState([]);
   const [inputData,setInputData]=useState({
    name:"",
    email:"",
    address:"",
   });
  
 


  
    const dataHandle=(e)=>{
      setInputData({...inputData,[e.target.name]:e.target.value})
    };
    let {name,email,address}=inputData;
    const submitData=(e)=>{
    setInputArr([...inputArr,{name,email,address}]);
    setInputData({name:"",email:"", address:""})

    }
  



  return (
    <div> 
    <div>        
<form style={{width: "300px", justifyContent:"center"}}>
  <h2> student registration form</h2>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="exampleName" />
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
    <input type="text" className="form-control" id="exampleInputAdress1" />
  </div>
  <button type="submit" className="btn btn-primary">Save Data</button>
</form>
<hr></hr>
<hr></hr>


    </div>
    <div>
 

    <table class="table">
  <thead>
    <tr>
      <th scope="col">Sr.no</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
    </tr>
  </thead>
  <tbody>

    <tr>
      <th scope="row"></th>
      <td></td>
      <td></td>
      <td></td>
    </tr>

  </tbody>
</table>
</div>
    </div>
  )
}

// export default Login