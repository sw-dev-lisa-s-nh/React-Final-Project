import React, { useState } from 'react';
import { Form } from 'react-bootstrap';


// importing { useState } allows us to use Hooks!

const NewGigInstrumentForm = (props) => {
    const { addGigInstrument } = props;
    const { instId } = props;
    const [id, setId] = useState('');

    const onSubmit = (e) => {
        // the default submit action WILL not occur!
        e.preventDefault();
        console.log("Gig Id: " + id + " Instrument: " + instId);
        if (id && instId) {
            addGigInstrument(id, instId);
            setId('');
            // setInstrument('');
        } else {
            alert('Invalid input:  Please re-enter user&instrument!');
            console.log('Invalid UserInstrument Input-- needs to be re-entered!');
        }
    }; // end of onSubmit


    // create the JSX for this element -- create the return statement

    // "field-name":  everytime the text changes... this name value in the state is also being updated

    // the last part of tying the state variable back to the actual value of these inputs 
    //              is "value={field-name}" etc.   
    //              the onChange always updates the state value, 
    //              and the state value updates the value in this input.
    //              So they stay tied together both ways!!!
    return  (
        <div className="new-user-instrument">
            <div className="sm-col-4" />
                <div className="sm-col-4 p-2 border m-4">
                    {/* <h4><strong>Enter a Gig Id</strong></h4> */}
                    <Form className="new-form" onSubmit={onSubmit}>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <input
                            type='text'
                            placeholder='Gig Id'
                            onChange={(e) => setId(e.target.value)}
                            value={id}
                        />                       
                        <br /><br />
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <button 
                            className='btn-my-color rounded' 
                            type='submit' 
                            onClick={onSubmit}>Add Gig Instrument</button>
                        <br />
                    </Form>
                </div>
            <div className="sm-col-4" />
        </div>
        ) // end of return
}; // end of newGigInstrumentForm function

export default NewGigInstrumentForm;