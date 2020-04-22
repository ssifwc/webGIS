const cdk = require('@aws-cdk/core');
const CodeBuild = require('@aws-cdk/aws-codebuild');
const CodePipeline = require('@aws-cdk/aws-codepipeline');
const CodePipelineAction = require('@aws-cdk/aws-codepipeline-actions');
const s3 = require('@aws-cdk/aws-s3');

exports.WebgisCodepipelineStack = class WebgisCodepipelineStack extends cdk.Stack {

    constructor(app, id, props = {}) {
        super(app, id, props);

        const pipeline = new CodePipeline.Pipeline(this, 'webgis-codepipeline', {
            pipelineName: 'webgis-codepipeline',
            restartExecutionOnUpdate: true
        });

        const outputSources = new CodePipeline.Artifact();
        const outputWebsite = new CodePipeline.Artifact();

        pipeline.addStage({
            stageName: 'checkout-webgis-source',
            actions: [
                new CodePipelineAction.GitHubSourceAction({
                    actionName: 'Checkout',
                    owner: app.node.tryGetContext("github.owner"),
                    repo: app.node.tryGetContext("github.repo"),
                    branch: app.node.tryGetContext("github.branch"),
                    oauthToken: cdk.SecretValue.secretsManager(app.node.tryGetContext("secretsmanager.github.token.secret.id")),
                    output: outputSources
                }),
            ],
        });

        pipeline.addStage({
            stageName: 'build-webgis-package',
            actions: [
                new CodePipelineAction.CodeBuildAction({
                    actionName: 'Website',
                    project: new CodeBuild.PipelineProject(this, 'build-webgis-package', {
                        projectName: 'webgis',
                        environment: CodeBuild.LinuxBuildImage.AMAZON_LINUX_2_3,
                        buildSpec: CodeBuild.BuildSpec.fromSourceFilename('infra/buildspec.yml'),
                    }),
                    input: outputSources,
                    outputs: [outputWebsite],
                }),
            ],
        });

        const webgisBucket = s3.Bucket.fromBucketName(this, "getBucket", app.node.tryGetContext("s3.website.bucket.name"));

        pipeline.addStage({
            stageName: 'deploy-webgis-to-s3',
            actions: [
                new CodePipelineAction.S3DeployAction({
                    actionName: 'Website',
                    input: outputWebsite,
                    bucket: webgisBucket
                }),
            ],
        });

        new cdk.CfnOutput(this, 'WebsiteURL', {
            value: webgisBucket.bucketWebsiteUrl,
            description: 'Website URL',
        });
    };
};
