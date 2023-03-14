import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
//not in use 

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    return{
        statusCode: 200,
        headers: {"content-type": "application/json"},
        body: JSON.stringify(event),
    };
};