import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

// importing { useState } allows us to use Hooks!

const NewUserInstrumentForm = (props) => {
    const { addUserInstrument } = props;
    const { instId } = props;
    const [id, setId] = useState('');

    const onSubmit = (e) => {
        // the default submit action WILL not occur!
        e.preventDefault();
        console.log("User Id: " + id + " Instrument Id: " + instId);
        if (id && instId) {
            // getUserRecord with the ID, and then push the instrument to the array, and resubmit!
            //  Look at houses and rooms... :) 
            addUserInstrument(id, instId);
            setId('');
            // setInstId('');
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
                    {/* <h4><strong>Enter a User Id</strong></h4> */}
                    <Form className="new-form" onSubmit={onSubmit}>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <input
                            type="text"
                            placeholder='User Id'
                            onChange={(e) => setId(e.target.value)}
                            value={id}
                        />                       
                        {/* <br /><br />
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <input
                            type="number"
                            placeholder='Instrument Id'
                            onChange={(e) => setInstId(e.target.value)}
                            value={instId}
                        />                        */}
                        <br /><br />
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <button 
                            className='btn-my-color rounded' 
                            type='submit' 
                            onClick={onSubmit}>Add User Instrument</button>
                        <br />
                    </Form>
                </div>
            <div className="sm-col-4" />
        </div>
        ) // end of return
}; // end of newUserInstrumentForm function

export default NewUserInstrumentForm;