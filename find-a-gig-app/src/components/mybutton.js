import React  from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function MyButton (props) {
    const { label } = props;
    const { printInfoPopUp } = props;

return (
    <div className="container my-3">
        <Button className="info-button" component={Link} to="./NewInstrumentForm"
          variant="contained"
          onClick={printInfoPopUp}
          >
        <br />
        <strong>{label}  </strong>
        <br /><br />
        </Button>
    </div>
);

}

export default MyButton;
