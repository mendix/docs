---
title: "Best Practices for Cloud Foundry Deployments"
url: /developerportal/deploy/cloud-foundry-pad/
weight: 70
description: "Describes how to deploy to a Cloud Foundry environment by using Mendix Portable Runtime."
---

## Introduction

Cloud Foundry is a platform-as-a-service (PaaS) that automates the deployment, scaling, and management of applications, abstracting away the underlying infrastructure. On-premise deployment, conversely, involves hosting applications and their entire infrastructure within a company's own data centers, giving them full control. 

This documentation provides guidance on understanding Cloud Foundry on-premise deployments and serves as a helpful reference rather than official implementation support.

{{% alert color="info" %}}
Unlike the Cloud Foundry Buildpack deployment where Mendix provides full end-to-end tooling support, the Mendix Portable Runtime approach only requires Java to run, with Mendix's support strictly limited to the Mendix Portable Runtime package itself. All implementation, configuration, and deployment activities, including Cloud Foundry deployment, remain the sole responsibility of the customer.
For information about the scope of support, see [Support for Different Deployment Strategies](/support/deployment-strategy-support/).
{{% /alert %}}

## Prerequisites

To deploy your app to an on-premises Cloud Foundry configuration using [Mendix Portable Runtime](/developerportal/deploy/portable-app-distribution-deploy/), ensure that you fulfill the following prerequisites:

* You have access to the Cloud Foundry organization and space where the application is deployed.
* You have access to the database configuration from the database service.
* You have access to binding other required Cloud Foundry services.
* The Cloud Foundry CLI is installed.
* You have generated the [Mendix Portable Runtime .zip file](/developerportal/deploy/portable-app-distribution-deploy/).

## Deploying an App with Mendix Portable Runtime

To deploy your app to Cloud Foundry, perform the following steps:

1. Log in to Cloud Foundry, and then access the organization and space where the application is deployed.
2. Save the [Mendix Portable Runtime .zip file](/developerportal/deploy/portable-app-distribution-deploy/) to an accessible location.
3. Create a *manifest.yml* file in the root directory of your app.

    By default, the `cf push` command uses the *manifest.yml* file in the app directory. To specify a different location for the manifest, you must pass its local path to the `-f` flag when you run `cf push`.

4. Add the following content to the file:

    ```yaml
    applications:
    - name: <the name of your app>
      path: <the path where you saved your .zip file>
      memory: 
      buildpacks:
      services:
      env:
    ```

    An example manifest file can look like the following:

    ``` yaml
    applications:
    - name: mx-java-app
      path: <path-to-zip>
        memory: 1G
        buildpacks:
        - java_buildpack
        services:
        - <service instance_id to be bind>
        - <service instance_id to be bind>
        env:
          JBP_CONFIG_OPEN_JDK_JRE: '{ jre: { version: 21.+}}'
          JBP_LOG_LEVEL: INFO 
          JAVA_OPTS: >
            -Xmx512m
            -Xms512m
            -XX:MaxDirectMemorySize=20M
            -XX:MaxMetaspaceSize=128M
       ``` 

5. Run the `cf push` command.

6. Verify that the Mendix app has started successfully.
