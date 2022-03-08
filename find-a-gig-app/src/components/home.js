import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Popover } from 'react-bootstrap';

import MyButton from './mybutton';

function printInfoPopUp () {
    return (
        <Popover id="popover">
            <Popover.Header as="h3">Find-A-Gig Information</Popover.Header>
            <Popover.Body>
            This site is used to connect <strong>amazing</strong> musicians, with open Gigs!
            </Popover.Body>
        </Popover>  
    );    
};


function HomePage (props) {
    return (
        <div className="container">            
            <div className="row mt-5">
                <div className="col-md-8 mx-auto">
                    <h1 className="text-center">Welcome to Find-A-Gig</h1>
                </div> 
            </div>
            <div className="col-md-2 flex mx-auto" >
                <MyButton className="info-button" label="Extra Information" onClick={printInfoPopUp} />
            </div>             
        </div>
    )
}

export default HomePage;
