const cdk = require('@aws-cdk/core');
const s3 = require('@aws-cdk/aws-s3');

exports.WebgisStack = class WebgisStack extends cdk.Stack {

    constructor(app, id, props = {}) {
        super(app, id, props);

        const bucketWebsite = new s3.Bucket(this, 'webgis-website-bucket', {
            websiteIndexDocument: 'index.html',
            websiteErrorDocument: 'error.html',
            publicReadAccess: true,
            bucketName: app.node.tryGetContext("s3.website.bucket.name")
        });

        new cdk.CfnOutput(this, 'WebsiteURL', {
            value: bucketWebsite.bucketWebsiteUrl,
            description: 'Website URL',
        });
    }
};

