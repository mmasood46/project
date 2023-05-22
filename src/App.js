import React from 'react';
// import './App.css';
import AxiosApproach from './components/AxiosApproch';
import FetchAPI from './components/FetchAPI';
import Difference from './components/Difference';

// import Form from './components/Form';
// import Login from './components/Login';
// import Nav from './components/nav/Nav';
// import Navbar from './components/navbar/Navbar';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import { Home } from './components/Home';
// import { LoginTwo } from "./components/LoginTwo"

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>

<Navbar />
<Nav/>

{/* <Login/> */}
{/* <Form/> */}
{/* <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/login' element={<LoginTwo/>}/> */}
{/* <Route path='/contact' element={<Form/>}/>
<Route path='/products' element={<Products/>} />
<Route path='*' element={<h1>404 Error -Page not found</h1>}/> */}

{/* </Routes> */}

{/* </BrowserRouter> */} 

<AxiosApproach/>
<FetchAPI/>
<Difference/>
    </div>
  );
}

export default App;
