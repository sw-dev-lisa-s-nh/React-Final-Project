import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap'
import  NewGigForm  from './newGigForm';
import { gigApi } from '../rest/GigApi.js';


function Gigs (props) {
    const[error] = useState(null);
    const[setIsLoaded] = useState(false);
    const[gig, setGig] = useState([])
   // const[gigInstruments, setGigInstruments] = useState([]);

    const createGig = async (newGig) => {
        await gigApi.post(newGig);
        runThisEveryTime();
    };

    const deleteGig = async (gigId) => {
        await gigApi.delete(gigId);
        runThisEveryTime();
    };

    const removeGigInstrument = async (gigId, instrumentId)  => {    
        console.log("In removeGigInstrument", gigId);
        let newGig = await gigApi.getOne(gigId);
        console.log("In removeGigInstrument, after getOne", newGig);
        const updatedGig =  {
            ...newGig,
            instruments: newGig.instruments.filter((x) => x._id !== instrumentId)
        };
        console.log("updatedGig: " + updatedGig);
        gigApi.put(updatedGig);
        runThisEveryTime();
    }
    const runThisEveryTime  = (() => {
        fetch('https://crudcrud.com/api/467446f2b41f4ea58e1a553fd9faaf72/gigs')
       .then( res => res.json() )
        .then(
            (result) => {
                setIsLoaded(true);
                setGig(result);
                console.log(result);
            },
            (error) => {
                setIsLoaded(true);
                setGig(error);
                console.log(error);
            }
        )
    });

    useEffect( () => {
        // const controller = new AbortController();
        // const signal = controller.signal;
        runThisEveryTime();
        // This prevents a re-render!
        // return () => controller.abort();
    }, []);      

    if (error) {
        return <div>An error was encountered: {error.message}</div>
    } else {
        return(
            <div className="container">
                <div className="row my-4">
                    <div className="col-md-8 mx-auto">
                        <h2 className="text-center"><strong>Available Gigs</strong></h2>
                    </div>
                </div>
                <div className="row">
                    {gig.map( (g, ind) => (
                        <div className="gig-card col-4 my-3" key={g._id}>
                            <Card className="info-gig-card m-2 p-2">
                                <Card.Body>
                                <Card.Title>{ind+1}. &nbsp; <strong>{g.name}</strong></Card.Title>
                                <Card.Text>
                                    Id: {g._id} <br />
                                    <strong>On: </strong> {g.date} <br />
                                    <strong>Located at:</strong> <br/> 
                                    {g.address}, {g.city}, {g.state}.<br /><br /> 
                                    <strong>Description:</strong><span>&nbsp;</span>{g.description}<br /><br /> 
                                    <strong>Contact Info: </strong> <span>&nbsp;</span>{g.phone}
                                    <br /><strong>Instruments Requested:</strong> 
                                    <br />
                                    <ul>
                                    {g.instruments.map( (inst, j) => (
                                        
                                        <li className="border" key={inst._id}>  &nbsp;
                                             <strong>{inst.name} </strong>
                                        <br />
                                        <button className="btn-my-color rounded" onClick={e =>
                                            removeGigInstrument(g._id, inst._id)}>Remove </button> 
                                        </li>
                                    ))}
                                    </ul>
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <button className="btn-my-color rounded" onClick={e =>
                                    deleteGig(g._id)}>Delete Gig</button>
                                </Card.Footer>
                            </Card>       
                        </div>
                    ))}
                </div>
                <NewGigForm createGig={createGig} />
            </div>
        );
    }
}

export default Gigs;


  