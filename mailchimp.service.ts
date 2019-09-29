import Axios from 'axios';

const endpoint = process.env.MAILCHIMP_API_ENDPOINT;
const key = process.env.MAILCHIMP_API_ENDPOINT;
const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;

const axios = Axios.create({
    baseURL: endpoint,
    headers: { Authorization: ``}
});


const addUser = async ( params ) => {
    let ret = {};

    try {
        
    } catch (error) {
        throw new Error(error.message);
    }
    
    return ret;
}

const deleteUser = async ( params ) => {
    let ret = {};
    
    try {
        
    } catch (error) {
        throw new Error(error.message);
    }
    
    return ret;
}

const updateUser = async ( params ) => {
    let ret = {};
    
    try {
        
    } catch (error) {
        throw new Error(error.message);
    }
    
    return ret;
}

const getUsers = async ( params ) => {
    let ret = {};
    
    try {
        
    } catch (error) {
        throw new Error(error.message);
    }
    
    return ret;
}

export {
    getUsers,
    deleteUser,
    updateUser,
    addUser
}