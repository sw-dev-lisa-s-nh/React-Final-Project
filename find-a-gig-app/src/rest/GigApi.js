const GIG_ENDPOINT = 'https://crudcrud.com/api/467446f2b41f4ea58e1a553fd9faaf72/gigs';

class GigApi {
    get = async () => {
        try {
            console.log(GIG_ENDPOINT)
            const resp = await fetch(`${GIG_ENDPOINT}`);
            console.log(resp);
            const data = await resp.json();
            console.log(data);
            return data;
        } catch(e) {
            console.log('Error:  get gigs had an issue.', e);
        }
       
    }

    getOne = async (id) => {
        try {
            console.log(GIG_ENDPOINT)
            const resp = await fetch(`${GIG_ENDPOINT}/${id}`);
            console.log(resp);
            const data = await resp.json();
            console.log(data);
            return data;
        } catch(e) {
            console.log(`Error:  get gig id: ${id} had an issue.`, e);
        }
       
    }

    post = async (gig) => {
        try {
            const resp = await fetch(`${GIG_ENDPOINT}`, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(gig)
            });
            return await resp.json();
        } catch(e) {
            console.log('Error:  post gig had an issue.', e);
        }  
    }

    put = async (gig) => {
        try {
            console.log(GIG_ENDPOINT);
            const resp = await fetch(`${GIG_ENDPOINT}/${gig._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({"name" : gig.name, "date" : gig.date, "address": gig.address, "phone" : gig.phone, "description" : gig.description, "instruments" : gig.instruments}),
            });
            console.log(resp);
            return await resp;
        } catch(e) {
            console.log('Error:  update gig had an issue.', e);
        }  
    }

    delete = async (gigId) => {
        try {
            console.log(GIG_ENDPOINT);
            const resp = await fetch(`${GIG_ENDPOINT}/${gigId}`, {
                method: 'DELETE'
            });
            console.log(resp);
        } catch(e) {
            console.log('Error:  delete gig had an issue.',e);
        }
    }
}

// create an instance of this class, and we can import that instance.
export const gigApi = new GigApi();
