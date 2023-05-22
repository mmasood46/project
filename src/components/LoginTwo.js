import React, { useState } from "react";

const LoginTwo = () => {
  

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    address: "",
    age: ''
  });

  

  const inputHandler = (event) => {
    
    // const { value } = event.target
    // console.log("value : ", value)
    
    // const { name } = event.target
    // console.log(name)
    // console.log("name : ", name)

    setUserInfo({...userInfo, [event.target.name]: event.target.value})


    // setUserInfo({...userInfo, [event.target.name]: event.target.value})
    // setUserInfo(
    //   {...userInfo, [event.target.name]: event.target.value}
    // )
    // console.log(userInfo)

  };

  const[newRecord, setNewRecord] = useState([])


  const saveRecord = () =>{
    let copyData = {...userInfo}
    setNewRecord([...newRecord, copyData])    
    setUserInfo({name: '', email: '', address: '', age: ''})
    console.log(userInfo)

  }



  return (
    <div>
    <div>
      <h1>Form Two in React JS</h1>
      Name:
      <input
        type="text"
        value={userInfo.name}
        name="name"
        onChange={inputHandler}
      />
      <br />
      Email:
      <input
        type="text"
        value={userInfo.email}
        name="email"
        onChange={inputHandler}
      />
      <br />      
      Address:
      <input
        type="text"
        value={userInfo.address}
        name="address"
        onChange={inputHandler}
      />
      <br />
      Age:<input
        type="text"
        value={userInfo.age}
        name="age"
        onChange={inputHandler}
      />
      <br />
      <br />
      <button onClick={saveRecord}>Save Data</button>
    </div>
    <hr></hr>
    <div>
    <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    {
      userInfo.map((info,i)=>{
    return(
        <tr>
        <th scope="row">{i+1}</th>
        <td> {info.name} </td>
        <td> {info.email} </td>
        <td> {info.address} </td>
      </tr>
      
     
   );
   })
   };
   </tbody>
   </table>
  </div>
      </div>
  );
};

export default LoginTwo;
