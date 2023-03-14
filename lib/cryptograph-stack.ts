import * as cdk from 'aws-cdk-lib';
import { Lambda } from './cryptograph_lambda';
import { Construct } from 'constructs';
import { ApiGateway } from './cryptograph_ApiGateway'
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CryptographStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //API gateway setup
    const cryptoApi = new ApiGateway(this);

    //Lambda setup
    const getCryptoLambda = new Lambda(this, "get-crypto")
    cryptoApi.addIntegration("GET", "/get-crypto", getCryptoLambda)

    const postCryptoLambda = new Lambda(this, "post-crypto")
    cryptoApi.addIntegration("POST", "/post-crypto", postCryptoLambda)


  }
}
