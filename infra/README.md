## Prerequisites
* npm install -g aws
* setup amazon with aws configure, ie) your access key and your secret access key 
aws secretsmanager create-secret --name aws-webgis-github-token --secret-string 860479065cc4d9095d95e67578b6d3285c92c9dd --region us-east-1

## Setup AWS Infra Stack
* npm install -g aws-cdk
* cdk bootstrap 
* deploy-stack.sh YOUR_BUCKET_NAME 

## Destroy AWS Infra Stack
* cdk destroy --force 
* S3 buckets don't get removed, so goto S3 and manually remove the pipeline and webgis webapp bucket
* To remove manually go into S3 CloudFormation, CodePipeline and delete related resources
    



 