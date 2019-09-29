import * as MC from './mailchimp.service';

const doAddUser = async ( params ) : Promise<any> => {
    let ret = {};

    try {
       ret =  await MC.addUser( params );
    } catch (error) {
        throw new Error(error.message);
    }

    return ret;
} 

const doUpdateUser = async ( params ) : Promise<any> => {
    let ret = {};

    try {
       ret =  await MC.updateUser( params );
    } catch (error) {
        throw new Error(error.message);
    }

    return ret;
} 

const doDeleteUser = async ( params ) : Promise<any> => {
    let ret = {};

    try {
       ret =  await MC.deleteUser( params );
    } catch (error) {
        throw new Error(error.message);
    }

    return ret;
} 

const doGetUsers = async ( params ) : Promise<any> => {
    let ret = {};

    try {
       ret =  await MC.getUsers( params );
    } catch (error) {
        throw new Error(error.message);
    }

    return ret;
} 

export {
    doAddUser,
    doDeleteUser,
    doUpdateUser,
    doGetUsers
}