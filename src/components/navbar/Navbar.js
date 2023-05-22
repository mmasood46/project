import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="./pics\amazon-logo-on-transparent-background-free-vector.webp"
              width={100}
              height={80}
             ></img>
          </a>
          

            <ul className="navbar-nav ms-90 mb-2 mb-lg-0">
             <li><a className="nav-link" href="#" id="deliver">Deliver to Pakistan <i class="fa-sharp fa-solid fa-location-dot"></i></a></li>
          </ul>
          <div class="input-group mb-3">
          <li className="nav-item dropdown">
          
        
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
         <button class="btn btn-warning" id="leftbtn" type="button" >All</button>
               <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Arts and Crafts
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Automotive
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Baby
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Beauty and personal care
                    </a>
                  </li>
                
                  </ul>
                  
                  </a></li> 
  
  <input type="text" class="form-control" placeholder="" aria-label="Search Amazon"/>
  <button class="btn btn-warning" type="button"><i class="fa-sharp fa-solid fa-magnifying-glass"></i> </button>

             {/* <div className="input-group mb-3">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                
                  
                    <button class="btn btn-warning" type="button">All</button> </a></li>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Arts and Crafts
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Automotive
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Baby
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Beauty and personal care
                    </a>
                  </li>
                
                 </ul>
                 <input type="text" class="form-control" placeholder="" aria-label="Example text with two button addons"/>
  
  <button className="btn btn-warning" type="submit">
   Search
</button>

                 
            </div>            */}
             {/* <div> */}
            <ul class="nav justify-content-end">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  EN<i class="fa-solid fa-flag-usa"></i>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      All departments
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Arts and Crafts
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Automotive
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Baby
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Beauty and personal care
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Active
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
          {/* </div> */}
        </div>
        </div>
      </nav>
    </div>
   
  );
};

export default Navbar;
