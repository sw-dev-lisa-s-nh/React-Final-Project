import React from 'react';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';

function ModalWindow() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <button onClick={handleShow}>
                Find-A-Gig-App
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Find-A-Gig-App Description</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <strong>Find-A-Gig-App</strong> has a two-fold purpose. <br /> <br />  It is a way for <strong>Musicians</strong> to register, listing the instruments that they play; and to request a booking to play at Open Gigs. <br />  <br /> It also allows <strong>Event Planners</strong> to register gigs, listing instruments needed; and to connect and hire musicians!
                </Modal.Body>
                <Modal.Footer>
                    <button  onClick={handleClose}>
                        Close
                    </button>
                </Modal.Footer>
            </Modal>

        </>        
    );
}


export default ModalWindow;