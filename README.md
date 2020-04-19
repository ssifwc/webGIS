# SSIFWC - WebGIS

This is a WebGIS for the SSIFWC designed to allow users to visualise the data gathered (via Epicollect 5) for the project, along with contextual information including geological maps and hydrological information.

## Infra

The infrastructure for this app is deployed on the AWS cloud using the following services:

1.  CloudFormation (with CDK) - [Infra/Stack Deployment](./infra/README.md) 
1.  S3 - public website where application is hosted
1.  CodePipeline - one click build and deploy of webapp 

If you wish to deploy your own AWS environment, use [Infra/Stack Deployment](./infra/README.md) to build it with one call  

## Prerequisites:

Before this app will work deployed, do this:

* github repo ssifwc/api should be deployed to AWS first
* AWS RDS postgres database stocked with ssifwc data and maps

## Deployment

One click release and deploy:

* logon to the prod AWS account and got to Services->CodePipelines
* navigate to webgis-pipeline
* click: "Release Change"
