import React, { useState } from "react";

const Form = () => {
  const [inputArr, setInputArr] = useState([]);
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    address: "",
  });
  const inputChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log("name =", e.target.name);
  };
  let { name, email, address } = inputData;
  const submitData = (e) => {
    setInputArr([...inputArr, { name, email, address }]);
    setInputData({ name: "", email: "", address: "" });
    e.preventDefault();
  };
  return (
    <div>
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputName">Name:</label>
            <input
              type="text"
              name="name"
              value={inputData.name}
              className="form-control"
              id="exampleInputName"
              onChange={inputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputName">Email:</label>
            <input
              type="email"
              name="email"
              value={inputData.email}
              className="form-control"
              id="exampleInputName"
              onChange={inputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputName">Address:</label>
            <input
              type="text"
              name="address"
              value={inputData.address}
              className="form-control"
              id="exampleInputName"
              onChange={inputChange}
            />
          </div>
          <button
            onClick={submitData}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="container mt-5">
        <table border={1} width={1000} className="table table-striped">
          <tbody>
            <tr>
              <th>Sr. No</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>Address</th>
            </tr>
            {inputArr.map((info, ind) => {
              return (
                <tr>
                  <td>{ind + 1}</td>
                  <td>{info.name}</td>
                  <td>{info.email}</td>
                  <td>{info.address}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Form;
