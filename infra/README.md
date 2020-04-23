## Prerequisites
* npm install -g aws

## set parameters in aws:
* aws secretsmanager create-secret --name ssifwc-github-token --secret-string YOUR_GITHUB_TOKEN --region us-east-1

## Setup AWS Infra Stack
* npm install -g aws-cdk
* cdk deploy webgis-stack --require-approval never -c s3.website.bucket.name=YOUR_BUCKET_NAME
* cdk deploy webgis-codepipeline-stack --require-approval never -c s3.website.bucket.name=YOUR_BUCKET_NAME

NOTES 
* the webapp s3 bucket is created in webgis-stack. If the stack script is not changed or if you want to modify the stack,
you may have to delete the bucket just before deploying that stack again.
* The webgis-codepipeline-stack deployment will create a codepipeline and run, so it will automatically deploy webapp code 
to the bucket created in webgis-stack

## Destroy AWS Infra Stack
* cdk destroy --force 
* S3 buckets don't get removed, so goto S3 and manually delete the pipeline and webgis webapp bucket
* To remove manually go into S3 CloudFormation, CodePipeline and delete related resources
    
~~~~


 