#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CryptographStack } from '../lib/cryptograph-stack';

const app = new cdk.App();
new CryptographStack(app, 'CryptographStack', {});