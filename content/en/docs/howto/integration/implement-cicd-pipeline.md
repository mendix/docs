---
title: "Implement a Simple CI/CD Pipeline with Mendix APIs"
linktitle: "CI/CD Pipeline for Mendix Cloud"
url: /howto/integration/implement-cicd-pipeline/
description: "Describes how you can use the available Mendix APIs with any mainline orchestrators to build a simple CI/CD pipeline."
---

## Introduction

This how-to describes how to use the available Mendix APIs with any mainline orchestrators (Jenkins, Visual Studio Team Services, etc.) to build a simple CI/CD pipeline.

This is not meant to be a step-by-step guide. Its purpose is to indicate which APIs to use and to provide some examples of how to use them. The tool used in the examples is [Postman](https://www.getpostman.com/).

## Prerequisites

Before starting this how-to, make sure you are familiar with the following:

* CI/CD
* Using REST services
* [Unit Testing](/appstore/modules/unit-testing/) (if used in your application)
* [Application Test Suite](/appstore/partner-solutions/ats/) (if used in your application)

## Building The Pipeline

The basic process for building a CI/CD pipeline is described below. The process involves setting up API keys and rights, building the deployment package, and deploying to the next environment. In most cases, it also involves running tests once the package is deployed and the environment is restarted.

### Setting Up API Keys and Rights

#### User API Key{#user-API-key}

For access to Mendix Cloud environments, an authorized user is needed when executing the APIs. With Mendix APIs, this is achieved via API keys. To create a Mendix API key and set the required authentication headers, follow the steps in [Authentication](/apidocs-mxsdk/apidocs/authentication/).

#### Mendix API Rights

To be able to use the Mendix APIs to access your environment, the user who is going to access the APIs needs API rights.

To grant API rights, open your app in [Apps](https://sprintr.home.mendix.com/), then go to the **Permissions** tab of the app's **Environments** page and select the **API Rights** option for the user for whom you created an API key in the [User API Key](#user-API-key) step, above. For more details on how to configure permissions, see [Node Permissions](/developerportal/deploy/node-permissions/).

### Building the Deployment Package

To build the deployment package, use the [Team Server API](/apidocs-mxsdk/apidocs/team-server-api/) and the [Build API](/apidocs-mxsdk/apidocs/build-api/). In this example, a package will be built for the latest revision, but you can use whatever version you wish.

#### Getting the Latest Revision

To get the latest revision, use the [Retrieve Branch](/apidocs-mxsdk/apidocs/team-server-api/#retrieve-branch) API call to get the `LatestRevisionNumber` from the output.

An example of how to do this call is below. Be aware that `<AppId>` is not a GUID, but the actual name of the cloud node. In the example below, the `<AppId>` is `ukservices`.

{{< figure src="/attachments/howto/integration/implement-cicd-pipeline/02GetLatestRevision.png" class="no-border" >}}

#### Building the Package{#BuildPackage}

After getting the version you want to build the package for, you need to build the package. To do this, use the [Start Building a Deployment Package](/apidocs-mxsdk/apidocs/build-api/#start-building-deployment-package) API call.

This is a `POST` call, so you will need to pass the relevant fields in the body (as described in *Start Building a Deployment Package*).

{{< figure src="/attachments/howto/integration/implement-cicd-pipeline/03StartBuildingPackage.png" class="no-border" >}}

Before proceeding to the next step, you need to wait for the build of the deployment package to be successful. To do this, use the [Retrieve Package](/apidocs-mxsdk/apidocs/build-api/#retrieve-package) API call. This scenario needs to use the `PackageId` (output from the previous call) and check if the status is `Succeeded` (the other possible statuses are Queued, Building, Uploading, and Failed).

{{< figure src="/attachments/howto/integration/implement-cicd-pipeline/04RetrievePackageStatus.png" class="no-border" >}}

### Deploying to the Next Environment {#deploying-to-the-next-environment}

After building the deployment package, you can deploy the new package to the next environment (such as Test or Acceptance). To do this, use the [Deploy API](/apidocs-mxsdk/apidocs/deploy-api/).

#### Getting the Environment Status

First, check if the environment to which you want to deploy is running. To do this, use the [Retrieve Environment](/apidocs-mxsdk/apidocs/deploy-api/#retrieve-environment) API call and check the status.

{{< figure src="/attachments/howto/integration/implement-cicd-pipeline/05GetEnvironment.png" class="no-border" >}}

#### Stopping the Environment

If the environment is running, you need to stop it before deploying the new deployment package to it. To do this, use the [Stop Environment](/apidocs-mxsdk/apidocs/deploy-api/#stop-environment) API call.

#### Deploying/Transporting the Package

To deploy/transport a package to the environment, use the [Transport a Deployment Package to an Environment](/apidocs-mxsdk/apidocs/deploy-api/#transport-deployment-package) API call.

For this action, you need the `PackageId` from the [Building the Package](#BuildPackage) section.

{{< figure src="/attachments/howto/integration/implement-cicd-pipeline/06TransportDeploymentPackageToEnvironment.png" class="no-border" >}}

#### Starting the Environment

After a successful deployment, the next step is starting the environment. Use the [Start Environment](/apidocs-mxsdk/apidocs/deploy-api/#start-environment) API call to do this.

{{< figure src="/attachments/howto/integration/implement-cicd-pipeline/07StartEnvironment.png" class="no-border" >}}

Before proceeding to any next steps, confirm that the environment has started. To do that, use the [Get Environment Status](/apidocs-mxsdk/apidocs/deploy-api/#get-start-environment-status) API call with the `JobId` (output of the previous call). The environment is ready when the status is **Started**.

{{< figure src="/attachments/howto/integration/implement-cicd-pipeline/08StartEnvironmentStatusStarting.png" class="no-border" >}}

### Running Tests

After deploying the package to the environment and starting it, you are ready to run tests. This is not a mandatory step in a CI/CD pipeline, but it is usually part of it.

The sections below show you how to execute unit and ATS (UI) tests remotely. There can also be other tests (for example, load tests), but these are not covered in this how-to.

#### Unit Tests

One way of doing unit tests in a Mendix app is by using the [Unit Testing](/appstore/modules/unit-testing/) module available from the Mendix Marketplace. This module already exposes an API to execute remote calls.

First, start the tests.

{{< figure src="/attachments/howto/integration/implement-cicd-pipeline/10StartUnitTests.png" class="no-border" >}}

When the tests are completed (check the status for when completed is `true`), you can see how many tests ran, how long they took to run, how many failed, which ones failed, and what the reasons for failure were.

{{< figure src="/attachments/howto/integration/implement-cicd-pipeline/11UnitTestsStatus.png" class="no-border" >}}

{{% alert color="info" %}}
You can also (manually) create a web service that exposes the standard unit structure from the data available in the Unit Testing module.
{{% /alert %}}

#### Mendix Application Test Suite (ATS) Tests

ATS has its own [API for CI/CD](/appstore/partner-solutions/ats/rg-two-cicd-api/#api). To use this ATS API, follow the steps in the [ATS and CI/CD](/appstore/partner-solutions/ats/ht-two-ats-and-ci-cd/#ats-and-ci-cd) section of *How to Use ATS in Combination with CI/CD*.

### Next Steps

If you need to promote to another environment, repeat the steps in the [Deploying to the Next Environment](#deploying-to-the-next-environment) section.

## Jenkins/VSTS Examples

The sections below present examples of how to call a Mendix API with Jenkins (using a Groovy script) and Visual Studio Team Services (VSTS).

### Jenkins

To call a REST service with Jenkins (using a Groovy script), install the [HTTP Request Plugin](https://wiki.jenkins.io/display/JENKINS/HTTP+Request+Plugin). If you also want to bind credentials to variables (see `withCredentials` in the code snippet below), install the [Credentials Binding Plugin](https://jenkins.io/doc/pipeline/steps/credentials-binding/). The `Mendix-Username` and `Mendix-ApiKey` will be set in a `customHeaders` array.

This code snippet example gets the latest revision number so it can be used when building the deployment package:

{{< figure src="/attachments/howto/integration/implement-cicd-pipeline/12Jenkins.png" class="no-border" >}}

### VSTS

To call a REST service with VSTS, use the [Invoke REST API task](https://docs.microsoft.com/en-us/vsts/build-release/tasks/utility/http-rest-api). Use it in an agentless phase, and set up a **Generic endpoint** first. The `Mendix-Username` and `Mendix-ApiKey` go in the **Headers** section. You can set **Success criteria** (under the **Advanced** section) to define what makes the task successful.

The example below checks the status of the acceptance environment. The task will succeed if the environment is running.

{{< figure src="/attachments/howto/integration/implement-cicd-pipeline/13RestExampleVSTS_cut.png" class="no-border" >}}
