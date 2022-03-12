import React from 'react';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';

function ModalWindow() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <button variant="primary" onClick={handleShow}>
                Find-A-Gig-App
            </button>

            <Modal show={show} onHIde={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>Find-A-Gig is a way for Musicians connect to Gigs!</Modal.Body>
                <Modal.Footer>
                    <button variant="secondary" onClick={handleClose}>
                        Close
                    </button>

                </Modal.Footer>
            </Modal>

        </>        
    );
}


export default ModalWindow;