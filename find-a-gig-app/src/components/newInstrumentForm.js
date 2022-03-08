import React, { useState } from 'react';
import { Form } from 'react-bootstrap';


// importing { useState } allows us to use Hooks!

const NewInstrumentForm = (props) => {
    const { createInstrument } = props;
    const [name, setName] = useState('');
    const [section, setSection] = useState('');

    const onSubmit = (e) => {
        // the default submit action WILL not occur!
        e.preventDefault();
        if (name && section) {
            createInstrument({name, section});
            setName('');
            setSection('');
        } else {
            alert('Invalid input:  Please re-enter instrument!');
            console.log('Invalid Instrument Input-- needs to be re-entered!');
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
        <div className="new-instrument">
            <div className="sm-col-4" />
                <div className="sm-col-4 p-2 border m-4">
                    <h4><strong>Enter a New Instrument</strong></h4>
                    <Form className="new-form" onSubmit={onSubmit}>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <input
                            type='text'
                            placeholder='Instrument Name'
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                        <span>&nbsp;&nbsp;</span>
                        <input
                            type='text'
                            placeholder='Instrument Section'
                            onChange={(e) => setSection(e.target.value)}
                            value={section}
                        />
                        <br /><br />
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <button 
                            className='btn-my-color rounded' 
                            type='submit' 
                            onClick={onSubmit}>Add Instrument</button>
                        <br />
                    </Form>
                </div>
            <div className="sm-col-4" />
        </div>
        ) // end of return
}; // end of newInstrumentForm function

export default NewInstrumentForm;