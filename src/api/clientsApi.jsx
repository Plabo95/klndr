import axios from "axios";

const clientsApi = axios.create({
    baseURL: process.env.REACT_APP_API_URL +'clients'
})

export const getAllClients = async(credentials) => {
    const response =  await clientsApi.get('/', credentials);
    return response.data
}

export const createClient = async(payload) => {
    const response =  await clientsApi.post('/',payload.data,
    {headers: {'Authorization': payload.token}}
    );
    return response.data
}

