interface Response {
    statusCode: number,
    body: string
}
const success_handler = async ( data: JSON, successStatusCode:number = 200 ): Promise<Response> =>{
    return {
        statusCode: successStatusCode,
        body: JSON.stringify(data)
    };
} 

const error_handler = async ( errorMessage: string, errorStatusCode:number = 400 ): Promise<Response> => {
    return {
        statusCode: errorStatusCode,
        body: errorMessage
    }
}

export {
    success_handler,
    error_handler
}