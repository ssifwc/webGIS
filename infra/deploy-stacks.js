const cdk = require('@aws-cdk/core');
const webgisModule = require('./webgis-stack.js');
const webgisCodePipelineModule = require('./webgis-codepipeline-stack.js');

const app = new cdk.App();

new webgisModule.WebgisStack(app, "webgis-stack", {});
new webgisCodePipelineModule.WebgisCodepipelineStack(app, "webgis-codepipeline-stack", {});

app.synth();
