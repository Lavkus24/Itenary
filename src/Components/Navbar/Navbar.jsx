import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar1.css'; // Import custom CSS file for styling
// import  { Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate()
    
    const handleClick = event => {
        
         
        console.log("kg")
         navigate('/SignIn')
    };

    return (
        <nav className="navbar navbar-light bg-primary justify-content-between">
            <div className="container-fluid"> {/* Use container-fluid to ensure full width */}
                <div className="row w-150"> {/* Use row class to create a row */}
                    <div className="col-sm-3"> {/* Use col-sm-3 to align the navbar to the left */}
                        <h2 className="navbar-text">Iternary</h2>
                    </div>
                    <div className="col-sm-6 d-flex justify-content-center"> {/* Use col-sm-6 to center align the search bar */}
                        <form className="form-inline">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                    <div>
                        <button className='signin' onClick={handleClick} >sign in</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
