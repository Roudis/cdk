import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Define the S3 Bucket
    new s3.Bucket(this, 'AlkisBucketIdentifier', {
      bucketName: 'alkis-bucket-cdk', // The physical name you requested
      versioned: true,             // Good practice for testing
      removalPolicy: cdk.RemovalPolicy.DESTROY, // Deletes bucket when stack is deleted
      autoDeleteObjects: true,     // Required to delete a non-empty bucket
    });
  }
}