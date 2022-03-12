import React from "react";
import { Table } from "react-bootstrap";
import  NewUserForm  from './newUserForm';
import { useEffect, useState } from 'react';
import { userApi } from '../rest/UserApi.js';

function Users(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [user, setUser] = useState([])

    const createUser = async (newUser) => {
        await userApi.post(newUser);
        runThisEveryTime();
    };
    
    const deleteUser = async (userId) => {
        await userApi.delete(userId);
        runThisEveryTime();
    };

    const removeUserInstrument = async (userId, instrumentId)  => {    
        console.log("In removeUserInstrument", userId);
        let newUser = await userApi.getOne(userId);
        console.log("In removeUserInstrument, after getOne", newUser);
        const updatedUser =  {
            ...newUser,
            instruments: newUser.instruments.filter((x) => x._id !== instrumentId)
        };
        console.log("updatedUser: " + updatedUser);
        userApi.put(updatedUser);
        runThisEveryTime();
    }

    const runThisEveryTime  = (() => {
        fetch('https://crudcrud.com/api/467446f2b41f4ea58e1a553fd9faaf72/users')
            .then( res => res.json() )
            .then( 
                (result) => {
                    setIsLoaded(true);
                    setUser(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error)
                }
            )
    });

    useEffect( () => {
        //const controller = new AbortController();
        // const signal = controller.signal;
        runThisEveryTime();
        //return () => controller.abort();
    }, [])

    if (error) {
        return <div>An error was encountered: {error.message}</div>
    } else {
        return(
        <div className="container my-4">
            <h2 className="text-center mx-auto mb-4"> <strong>Available Musicians </strong></h2>
        <Table className="container my-4" striped bordered hover>
            <thead>
                <tr>
                <th>Id</th>   
                <th>First Name</th>
                <th> <strong>Last Name</strong></th> 
                <th>Address</th>
                <th>Phone</th>
                <th>Instruments</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {user.map( (u, i) => (
                    <tr key={i}>
                        <td>{u._id}</td>                       
                        <td>{u.firstname}</td>
                        <td>{u.lastname}</td>   
                        <td>{u.address}, {u.city}, {u.state}</td>
                        <td>{u.phone}</td>
                        
                        <td>
                          <ul>
                            {u.instruments.map( (inst, j) => (
                            <li key={inst._id}> &nbsp;
                                <strong>{inst.name}  </strong>
                            <br />
                            <button className="btn-my-color rounded" onClick={e =>
                                removeUserInstrument(u._id, inst._id)}>Remove </button>
                            </li>  
                            ))}
                          </ul>
                        </td>
                        <td>
                        <button className="btn-my-color rounded" onClick={e =>
                        deleteUser(u._id)}>Delete User</button>
                        </td> 
                        {/* <td>
                            <Link to="/modal" className="btn btn-primary">V-Card</Link>
                        </td> */}
                    </tr>
                ))}               
            </tbody>
            </Table>
            <NewUserForm createUser={createUser}/>
            </div>
    );
}
}
export default Users;