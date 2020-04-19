## Prerequisites
* npm install -g aws

## set parameters in aws:
* aws ssm put-parameter --type "SecureString" --name "DATABASE_CONNECTION_URI" --value "host='ssifwc-dev.cfm8cse59vi9.us-east-1.rds.amazonaws.com' dbname='postgres' user='postgres' password='YOUR_PASSWORD'"
* aws secretsmanager create-secret --name aws-ssifwc-github-token --secret-string YOUR_GITHUB_TOKEN --region us-east-1

## Setup AWS Infra Stack
* npm install -g aws-cdk
* deploy-stack.sh YOUR_BUCKET_NAME 

## Destroy AWS Infra Stack
* cdk destroy --force 
* S3 buckets don't get removed, so goto S3 and manually delete the pipeline and webgis webapp bucket
* To remove manually go into S3 CloudFormation, CodePipeline and delete related resources
    
~~~~


 