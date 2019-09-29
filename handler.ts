import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import * as Helpers from './helpers';
import * as Controller from './controller';


const hello: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
    }, null, 2),
  };
}

const getUsers: APIGatewayProxyHandler = async ( event ) => {

  try {
    const data = await Controller.doGetUsers(event);
    return Helpers.success_handler(data);
  } catch (error) {
    return await Helpers.error_handler(error.message);
  }
}

const createUser: APIGatewayProxyHandler = async ( event ) => {

  try {
    const data = await Controller.doGetUsers(event);
    return Helpers.success_handler(data);
  } catch (error) {
    return await Helpers.error_handler(error.message);
  }
}

const updateUser: APIGatewayProxyHandler = async ( event ) => {

  try {
    const data = await Controller.doGetUsers(event);
    return Helpers.success_handler(data);
  } catch (error) {
    return await Helpers.error_handler(error.message);
  }
}

const deleteUser: APIGatewayProxyHandler = async ( event ) => {

  try {
    const data = await Controller.doGetUsers(event);
    return Helpers.success_handler(data);
  } catch (error) {
    return await Helpers.error_handler(error.message);
  }
}

export {
  createUser,
  deleteUser,
  getUsers,
  updateUser
}