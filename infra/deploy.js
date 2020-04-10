const CDK = require('@aws-cdk/core');
const CodeBuild = require('@aws-cdk/aws-codebuild');
const S3 = require('@aws-cdk/aws-s3');
const CodePipeline = require('@aws-cdk/aws-codepipeline');
const CodePipelineAction = require('@aws-cdk/aws-codepipeline-actions');

const props = { region: "us-east-1" }
const websiteBucketName = process.env.BUCKET_NAME

    app = new CDK.App()
    const stack = new CDK.Stack(app, app.node.tryGetContext("stack.name"), props);

    const bucketWebsite = new S3.Bucket(stack, 'webgis-website-bucket', {
        websiteIndexDocument: 'index.html',
        websiteErrorDocument: 'error.html',
        publicReadAccess: true,
        bucketName: websiteBucketName
    })

    const pipeline = new CodePipeline.Pipeline(stack, 'webgis-pipeline', {
        pipelineName: 'webgis-pipeline',
        restartExecutionOnUpdate: true
    })

    const outputSources = new CodePipeline.Artifact()
    const outputWebsite = new CodePipeline.Artifact()

    pipeline.addStage({
        stageName: 'checkout-project-source',
        actions: [
            new CodePipelineAction.GitHubSourceAction({
                actionName: 'Checkout',
                owner: app.node.tryGetContext("github.owner"),
                repo: app.node.tryGetContext("github.repo"),
                branch: app.node.tryGetContext("github.branch"),
                oauthToken: CDK.SecretValue.secretsManager(app.node.tryGetContext("github.token.secretsmanager.secret.id")),
                output: outputSources
            }),
        ],
    })

    pipeline.addStage({
        stageName: 'build-webgis-package',
        actions: [
            new CodePipelineAction.CodeBuildAction({
                actionName: 'Website',
                project: new CodeBuild.PipelineProject(stack, 'build-webgis-package', {
                    projectName: 'webgis',
                    environment: CodeBuild.LinuxBuildImage.STANDARD_2_0,
                    buildSpec: CodeBuild.BuildSpec.fromSourceFilename('infra/buildspec.yml'),
                }),
                input: outputSources,
                outputs: [outputWebsite],
            }),
        ],
    })

    pipeline.addStage({
        stageName: 'deploy-webgis-website-to-s3',
        actions: [
            new CodePipelineAction.S3DeployAction({
                actionName: 'Website',
                input: outputWebsite,
                bucket: bucketWebsite,
            }),
        ],
    })

    new CDK.CfnOutput(stack, 'WebsiteURL', {
        value: bucketWebsite.bucketWebsiteUrl,
        description: 'Website URL',
    })

    app.synth()

