---
title: "Portable App Distribution"
url: /developerportal/deploy/portable-app-distribution-deploy/
weight: 15
description: "Describes the Portable App Distribution deployment method for Mendix apps."
no_list: false 
description_list: true
beta: true
---

{{% alert color="warning" %}} This feature is in beta. For more information, see [Release Status](/releasenotes/release-status/). {{% /alert %}}

## Introduction

Portable App Distribution provides a flexible and straightforward method for isolated server-based deployments. By enabling customers to generate a bundled artifact packaged as a .zip file and run it directly, Portable App Distribution simplifies the deployment process.

## Benefits

Portable App Distribution offers the following benefits:

* Simplified deployment - Portable apps eliminate complex installation procedures, making it easier and faster to get software up and running across different machines. This reduces setup time and potential configuration errors.
* Enhanced consistency - By bundling all dependencies, portable apps ensure a consistent operating environment for the application, regardless of the underlying system configuration.
* Improved mobility and flexibility - Teams can easily move applications between workstations, virtual machines, or even cloud instances without the need for reinstallation, fostering greater agility in project work.
* Reduced system impact - Portable apps often run in isolated environments, which can help prevent conflicts with other installed software and maintain system stability.
* Streamlined updates - Managing updates can be more straightforward, as new versions of a portable application can often be deployed by simply replacing the package.
* Layered configuration - Portable App Distribution supports defining base configurations that can be extended with environment-specific or deployment-type-specific entries (for example, distinct configurations for development, testing, or production environments).

## Licensing

You can test Portable App Distribution on a [Free App](/developerportal/deploy/mendix-cloud-deploy/#free-app). For more information about Free Apps and their limitations, as well as licensing apps outside of the Mendix Cloud, see [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

To license a Mendix app on the Portable App Distribution, add it to your configuration. For more information, see [Obtaining a Mendix License](/developerportal/deploy/licensing-apps-outside-mxcloud/#get-license).

## Prerequisites

The Portable App Distribution functionality is available for Mendix Studio Pro version 11.9, 11.6.5 MTS, or above. The functionality will be enabled for more Studio Pro versions in future releases.

You must also ensure that you have the supported version of [Java Runtime Environment](/refguide/system-requirements/#java).

## Creating a Portable App Distribution File

In most production environments, deployment packages are created by using the [Mx-Build](/refguide/mxbuild/) command-line tool. However, you can also [manually create a deployment package](/refguide/create-deployment-package-dialog/) if required, for example, for a local test deployment.

## Deploying Your App

After you create the Portable App Distribution file, deploy it to your environment.

### Deploying Locally

To run your app locally, perform the following steps:

1. Extract `..\releases\YourApp_portable_YYYYMMDD_hhmm.zip` to a local folder.
2. Set the **M2EE_ADMIN_PASS** admin port password by performing one of the following actions:

    * For Windows, run the command `set M2EE_ADMIN_PASS=<your password>`
    * For Linux, run the command `export M2EE_ADMIN_PASS=<your password>`

{{% alert color="info" %}}
The Mendix admin port can be used to fetch metrics and other runtime data from an app. It requires a password for security reasons.
{{% /alert %}}

3. Run the app by using one of the following commands:

    * For Windows, run the command `<your folder location>\bin\start.bat`
    * For Windows Powershell, run the command `<your folder location>\bin\start.ps1`
    * For Linux, run the command `<your folder location>\bin\start`

{{% alert color="info" %}}
On Linux, if the ZIP was extracted on Windows, the +x flag is not preserved. Windows does not have the executability bit. You need to run the command `chmod +x ./bin/start` first.
{{% /alert %}}


### Deploying to a Self-Hosted Environment

For more information about deploying to a self-hosted environment, refer to the following topics:

* [Portable App Distribution for Docker](/developerportal/deploy/docker-deploy-pad/)
* [Portable App Distribution for Linux](/developerportal/deploy/linux-pad/)
* [Portable App Distribution for Cloud Foundry](/developerportal/deploy/cloud-foundry-pad/)

## Read More
