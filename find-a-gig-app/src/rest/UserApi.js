const USER_ENDPOINT = 'https://crudcrud.com/api/467446f2b41f4ea58e1a553fd9faaf72/users';

class UserApi {
    get = async () => {
        try {
            console.log(`${USER_ENDPOINT}`)
            const resp = await fetch(`${USER_ENDPOINT}`);
            console.log(resp);
            const data = await resp.json();
            console.log(data);
            return data;
        } catch(e) {
            console.log('Error:  get users had an issue.', e);
        }
       
    }

    getOne = async (id) => {
        try {
            console.log(`${USER_ENDPOINT}`)
            const resp = await fetch(`${USER_ENDPOINT}/${id}`);
            console.log(resp);
            const data = await resp.json();
            console.log(data);
            return data;
        } catch(e) {
            console.log(`Error:  get user id: ${id} had an issue.`, e);
        }
       
    }


    post = async (user) => {
        try {
            const resp = await fetch(`${USER_ENDPOINT}`, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(user)
            });
            return await resp.json();
        } catch(e) {
            console.log('Error: post users had an issue.', e);
        }  
    }

    put = async (user) => {
        try {
            console.log(USER_ENDPOINT);
            const resp = await fetch(`${USER_ENDPOINT}/${user._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                "firstname" : user.firstname, 
                "lastname" : user.lastname, 
                "address" : user.address, 
                "city" : user.city, 
                "state" : user.state, 
                "phone" : user.phone, 
                "instruments": user.instruments }),
            });
            console.log(resp);
            //return resp.json();
            return resp;
        } catch(e) {
            console.log('Error:  update users had an issue.', e);
        }  
    }

    delete = async (userId) => {
        try {
            console.log(USER_ENDPOINT);
            const resp = await fetch(`${USER_ENDPOINT}/${userId}`, {
                method: 'DELETE'
            });
            console.log(resp);
        } catch(e) {
            console.log('Error:  delete user had an issue.',e);
        }
    }
}

// create an instance of this class, and we can import that instance.
export const userApi = new UserApi();
