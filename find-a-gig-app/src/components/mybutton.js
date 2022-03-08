import React  from 'react';
import { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Modal from 'react-overlays/Modal';

function MyButton (props) {
    const { label } = props;
    const [show, setShow] = useState(false);
    //const { printInfoPopUp } = props;

    let rand = () => Math.floor(Math.random() * 20) - 10;
    const renderBackdrop = (props) => <Backdrop {...props} />;
    const Backdrop = this.styled("div")`
        position: fixed;
        z-index: 1040;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #000;
        opacity: 0.5;
        `;

    const RandomlyPositionedModal = this.styled(Modal)`
        position: fixed;
        width: 400px;
        z-index: 1040;
        top: ${() => 50 + rand()}%;
        left: ${() => 50 + rand()}%;
        border: 1px solid #e5e5e5;
        background-color: white;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
        padding: 20px;
        `;


    return (
        <div className="container my-3">
            <Button className="info-button" 
                    type="Button" 
                    onClick={() => setShow(true)}
            >
            <br />
            <strong>{label}  </strong>
            <br /><br />
            </Button>


            <RandomlyPositionedModal
                show={show}
                onHide={() => setShow(false)}
                renderBackdrop={renderBackdrop}
                aria-labelledby="modal-label"
            >
                <div>
                <h4 id="modal-label">Text in a modal</h4>
                <p>
                    Duis mollis, est non commodo luctus, nisi erat
                    porttitor ligula.
                </p>
                <MyButton  />
                </div>
            </RandomlyPositionedModal>            
        </div>
    );

}

export default MyButton;
