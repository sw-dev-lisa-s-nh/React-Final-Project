const INSTRUMENT_ENDPOINT = 'https://crudcrud.com/api/467446f2b41f4ea58e1a553fd9faaf72/instruments';

class InstrumentApi {
    get = async () => {
        try {
            console.log(INSTRUMENT_ENDPOINT)
            const resp = await fetch(INSTRUMENT_ENDPOINT);
            console.log(resp);
            const data = await resp.json();
            console.log(data);
            return data;
        } catch(e) {
            console.log('Error:  get instruments had an issue.', e);
        }
       
    }

    getOne = async (id) => {
        try {
            console.log(`${INSTRUMENT_ENDPOINT}/${id}`)
            const resp = await fetch(`${INSTRUMENT_ENDPOINT}/${id}`);
            console.log(resp);
            const data = await resp.json();
            console.log(data);
            return data;
        } catch(e) {
            console.log(`Error:  get one instrument id: ${id} had an issue.`, e);
        }
       
    }

    post = async (instrument) => {
        try {
            const resp = await fetch(`${INSTRUMENT_ENDPOINT}`, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(instrument)
            });
            return await resp.json();
        } catch(e) {
            console.log('Error:  post instruments had an issue.', e);
        }  
    }

    put = async (instrument) => {
        try {
            console.log(INSTRUMENT_ENDPOINT);
            const resp = await fetch(`${INSTRUMENT_ENDPOINT}/${instrument._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({"name" : instrument.name}),
            });
            console.log(resp);
            return await resp.json();
        } catch(e) {
            console.log('Error:  update instrument had an issue.', e);
        }  
    }

    delete = async (instrumentId) => {
        try {
            console.log(INSTRUMENT_ENDPOINT);
            const resp = await fetch(`${INSTRUMENT_ENDPOINT}/${instrumentId}`, {
                method: 'DELETE'
            });
            console.log(resp);
        } catch(e) {
            console.log('Error:  delete instrument had an issue.',e);
        }
    }
}

// create an instance of this class, and we can import that instance.
export const instrumentApi = new InstrumentApi();
