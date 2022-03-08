import React, { useState } from 'react';
import { Form } from 'react-bootstrap';


// importing { useState } allows us to use Hooks!

const NewGigForm = (props) => {
    const { createGig } = props;
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [duration, setDuration] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');
    const [instruments, setInstruments] = useState([]);


    const onSubmit = (e) => {
        // the default submit action WILL not occur!
        e.preventDefault();
        if (name && date && duration && address && city && state && phone && description) {
            createGig({name, date, duration, address, city, state, phone, description, instruments});
            setName('');
            setDate('');
            setDuration('');
            setAddress('');
            setCity('');
            setState('');
            setPhone('');
            setDescription('');
        } else {
            alert('Invalid input:  Please re-enter gig!');
            console.log('Invalid Gig Input-- needs to be re-entered!');
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
        <div className="new-user ">
            <div className="sm-col-4 p-2 border m-4">
                <h4><strong>Enter a New Gig</strong></h4>
                <Form className="new-form" >
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <input
                        type='text'
                        placeholder='Name of Gig'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <span>&nbsp;&nbsp;</span>
                    <input
                        type='date'
                        placeholder='Date'
                        onChange={(e) => setDate(e.target.value)}
                        value={date}
                    />
                    <span>&nbsp;&nbsp;</span>
                    <input
                        type='text'
                        placeholder='Duration'
                        onChange={(e) => setDuration(e.target.value)}
                        value={duration}
                    />
                    <br /><br />
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <input
                        type='text'
                        placeholder='Address'
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                    />
                    <span>&nbsp;&nbsp;</span>
                    <input
                        type='text'
                        placeholder='City'
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                    />
                    <span>&nbsp;&nbsp;</span>
                    <input
                        type='text'
                        placeholder='State'
                        onChange={(e) => setState(e.target.value)}
                        value={state}
                    />
                    <br /><br />
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <input
                        type='text'
                        placeholder='Phone'
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                    />
                    <br /><br />
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <input
                        type='text'
                        placeholder='Description'
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                    <br /><br />
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <button 
                        className='btn-my-color rounded' 
                        type='submit' 
                        onClick={onSubmit}>Add Gig</button>
                    <br />
                </Form>
            </div>
        </div>
        ) // end of return
}; // end of newGigForm function

export default NewGigForm;