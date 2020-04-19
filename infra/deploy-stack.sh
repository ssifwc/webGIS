
if [ -z "$1" ]
  then echo usage: "deploy-stack.sh BUCKET_NAME". BUCKET_NAME S3 bucket to deploy webgis website
  exit 0
fi
BUCKET_NAME=$1

cdk bootstrap
cdk deploy --require-approval never -c bucket.name="$BUCKET_NAME"
