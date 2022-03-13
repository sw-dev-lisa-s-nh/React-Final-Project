import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { Popover } from 'react-bootstrap';

import MyButton from './mybutton';


function HomePage (props) {
    return (
        <div className="container">            
            <div className="row mt-5">
                <div className="col-md-8 mx-auto">
                    <h1 className="text-center">Welcome to Find-A-Gig</h1>
                </div> 
            </div>
            <div className="col-md-2 flex mx-auto" >
                <MyButton className="info-button" />
            </div>             
        </div>
    )
}

export default HomePage;
