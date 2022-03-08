import React, { useState } from 'react';
import { Form } from 'react-bootstrap';


// importing { useState } allows us to use Hooks!

const NewUserForm = (props) => {
    const { createUser } = props;
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [phone, setPhone] = useState('');
    const [instruments, setInstruments] = useState([]);


    const onSubmit = (e) => {
        // the default submit action WILL not occur!
        e.preventDefault();
        if (firstname && lastname && address && city && state && phone && instruments) {
            createUser({firstname, lastname, address, city, state, phone, instruments});
            setFirstName('');
            setLastName('');
            setAddress('');
            setCity('');
            setState('');
            setPhone('');
        } else {
            alert('Invalid input:  Please re-enter user!');
            console.log('Invalid User Input-- needs to be re-entered!');
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
        <div className="new-user">
            <div className="sm-col-4 p-2 border m-4">
                <h4><strong>Enter a New Musician</strong></h4>
                <Form className="new-form" onSubmit={onSubmit}>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <input
                        type='text'
                        placeholder='Musician First Name'
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstname}
                    />
                    <span>&nbsp;&nbsp;</span>
                    <input
                        type='text'
                        placeholder='Musician Last Name'
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastname}
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
                    <button 
                        className='btn-my-color rounded' 
                        type='submit' 
                        onClick={onSubmit}>Add Musician</button>
                    <br />
                </Form>
            </div>
        </div>
        ) // end of return
}; // end of newUserForm function

export default NewUserForm;