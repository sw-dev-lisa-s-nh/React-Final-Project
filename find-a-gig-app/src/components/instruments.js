import React from 'react';
import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap'
import NewInstrumentForm  from './newInstrumentForm';
import NewUserInstrumentForm from './newUserInstrumentForm';
import NewGigInstrumentForm from './newGigInstrumentForm';
import { instrumentApi } from '../rest/InstrumentApi.js';
import { userApi } from '../rest/UserApi';
import { gigApi } from '../rest/GigApi';



function Instruments (props) {
    const[error, setError] = useState(null);
    const[isLoaded, setIsLoaded] = useState(false);
    const[instrument, setInstruments] = useState([])

    const createInstrument = async (newInstrument) => {
        console.log(newInstrument);
        let newresponse = await instrumentApi.post(newInstrument);
        console.log(instrument);
        console.log(newresponse);
        runThisEveryTime();
    };

    const deleteInstrument = async (instId) => {
        await instrumentApi.delete(instId);
        runThisEveryTime();
    };

    const addUserInstrument = async (id, instId) => {
        console.log("id: " + id + " instId: " + instId);
        let instrument = await instrumentApi.getOne(instId);
        console.log(instrument);
        let user = await userApi.getOne(id);
        console.log(user);
        user.instruments.push(instrument);
        console.log(user);
        userApi.put(user);
        runThisEveryTime();
    };

    const addGigInstrument = async (id, instId) => {
        console.log("id: " + id + " instrument: " + instId);
        let instrument = await instrumentApi.getOne(instId);
        console.log(instrument);
        let gig = await gigApi.getOne(id);
        console.log(gig);
        gig.instruments.push(instrument);
        console.log(gig);
        gigApi.put(gig);
        runThisEveryTime();
    };


    const runThisEveryTime  = (() => {
        fetch('https://crudcrud.com/api/467446f2b41f4ea58e1a553fd9faaf72/instruments')
        .then( res => res.json() )
        .then(
            (result) => {
                console.log(result);
                setIsLoaded(true);
                setInstruments(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error)
            }
        ) 
    });

  useEffect( () => {
        runThisEveryTime();
    }, [])

    if (error) {
        return <div>An error was encountered: {error.message}</div>
    } else {
        return(
            <div className="container">
                <div className="row my-3">
                    <div className="col-md-8 mx-auto">
                        <h2 className="text-center"><strong>Available Instruments</strong></h2>                    
                    </div>
                </div>
                <div className="instrument-list row">
                    {/* {console.log(instrument)} */}
                    {instrument.map( (i, ind) => (
                        <div className="col-4 my-3" key={ind}>
                            <Card key={i._id}>
                                <Card.Body className="new-card"> {ind+1}. &nbsp;
                                    <strong>{i.name},  {i.section} </strong>
                                    <br /><br /> 
                                    <NewUserInstrumentForm instId={i._id} addUserInstrument={addUserInstrument}/>
                                    {/* addUserInstrument(i._id)}>Select for User</button> */}
                                     <br /><br />  
                                     <NewGigInstrumentForm instId={i._id} addGigInstrument={addGigInstrument} />
                                    {/* <button className="btn-my-color rounded" onClick={e =>
                                    addGigInstrument(i._id)}>Select for Gig</button> */}
                                    <br /><br />  
                                    <button className="btn-my-color rounded" onClick={e =>
                                    deleteInstrument(i._id)}>Delete Instrument</button>
                                </Card.Body>                                 
                            </Card>       
                        </div>
                    ))}
                </div>
                <div className="new-button-instrument flex">
                    <div className="sm-col-2" />
                    <div className="sm-col-2 ">
                    <NewInstrumentForm createInstrument={createInstrument}/>
                    </div>
                    <div className="sm-col-2" />
                </div>
            </div>
        );
    }
}

export default Instruments;
