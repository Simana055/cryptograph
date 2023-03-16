import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";
import * as common from './common';

export const handler = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {

    const request = JSON.parse(event.body!);
    if (request.method == 'encrypt') {
        const result = common.encrypt(request.payload, request.key, request.ignoreList, request.encoding);
        const response = {
            statusCode: 200,
            headers: {"content-type": "application/json"},
            body: JSON.stringify(result),
        }
        console.log(response);
        return response
    }
    if (request.method == 'decrypt') {
        const result = common.decrypt(request.payload, request.key, request.ignoreList, request.encoding);
        const response = {
            statusCode: 200,
            headers: {"content-type": "application/json"},
            body: JSON.stringify(result),
        }
        return response;
    }
    return {
            statusCode: 500,
            headers: {"content-type": "application/json"},
            body: "error",
        }
};