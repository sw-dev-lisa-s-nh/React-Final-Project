import React  from 'react';
import { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import ModalWindow from './modal';
//import { ModalProvider } from 'styled-react-modal';

function MyButton (props) {

    const { label } = props;
    const [setShow] = useState(false);

    return (
        <div className="container my-3">
            <button className="info-button" 
                    onClick={function () {
                        return setShow(true);
                    }}
            >
            <br />
            <strong>{label}  </strong>
                <ModalWindow />
            <br /><br />
            </button>
        </div>
    );

}

export default MyButton;
