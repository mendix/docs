---
title: "Using Command Line to Deploy a Mendix App to a Private Cloud Cluster"
parent: "private-cloud"
description: "Describes the processes for using the Mendix Operator directly to deploy a Mendix app in the Private Cloud"
menu_order: 30
tags: ["Deploy", "Private Cloud", "Environment", "Operator", "CI/CD", "CLI"]
---

## Introduction

Once you have the Mendix Operator installed in your Kubernetes, AWS-EKS, or OpenShift cluster (see [Registering a Private Cloud Cluster](private-cloud-register), you can use it to control the deployment of your Mendix app using Mendix Custom Resources (CRs). The Mendix operator then creates the app container and builds the app inside the cluster, together with all the resources the app needs.

This document explains how to provide the CRs through the console or command line for a standalone cluster. This enables you to automate your deployment processes if required.

Alternatively, you can create a connected cluster and use the Mendix Developer Portal to deploy the app, as described in [Deploying a Mendix App to a Private Cloud Cluster](private-cloud-deploy).

## Prerequisites for Deploying a Mendix App

  - A Kubernetes, AWS-EKS, or OpenShift (version 3.11 or above) platform

  - Platform administration account

  - **OpenShift CLI** installation (see [Getting started with the CLI](https://docs.openshift.com/container-platform/4.1/cli_reference/getting-started-cli.html) on the RedHat OpenShift website for more information) if you are deploying on OpenShift

  - **Bash** (Bourne-again shell) for your machine. If you are running on Windows, you can use something like [**Windows Subsystem for Linux (WSL)**](https://docs.microsoft.com/en-us/windows/wsl/faq) or the **Git Bash emulator** that comes with [git for windows](https://gitforwindows.org/).

  - The **deployment package** of a Mendix app made with version 7.23.0 or above

## How to deploy a Mendix App with an Operator

You can deploy multiple Mendix apps to run in the same Kubernetes or OpenShift namespace. This means that they need to have unique and recognizable names; the name is required to identify the app when creating/modifying/deleting it.

Follow these instructions to deploy your app.

### Create a Deployment Package

Create a deployment package (.mda) file from your app. It is this which is picked up by the CR configuration and deployed in a container to your cluster.

You can obtain the deployment package in a number of ways:

  - within Studio, by choosing the menu option **Project > Create Deployment Package…**

  - from the **Environments** page of your app in the Developer Portal

  - through a CI/CD process, such as Jenkins.

The deployment package must be available over the internet without requiring authorization credentials, as these cannot be provided in the CR.

### Edit the CR

You need to configure the following CR:

<table>
<tbody>
<tr class="odd">
<td><p>apiVersion: privatecloud.mendix.com/v1alpha1</p>
<p>kind: MendixApp</p>
<p>metadata:</p>
<p>name: example-mendixapp</p>
<p>spec:</p>
<p>database: # Spec for Database CR</p>
<p>serviceClass: mendix-database</p>
<p>servicePlan: dev</p>
<p>storage: # Spec for Storage CR</p>
<p>serviceClass: mendix-storage</p>
<p>servicePlan: dev</p>
<p>mendixRuntimeVersion: 7.23.3.48173 # Mendix Runtime version to use for base image</p>
<p>sourceURL: https://example.com/example-app.mda # Source MDA or MPK URL for the Mendix App</p>
<p>appURL: example-mendixapp.k8s-cluster.example.com # URL where the app will be accessible</p>
<p>replicas: 1 # Number of replicas, set to 0 to stop all replicas</p>
<p>resources: # Optional: set container resources for Mendix Runtime, can be omitted</p>
<p>limits: # Upper limit - process will be stopped if it tries to use more</p>
<p>cpu: 500m # 500 millicores - half of a vCPU</p>
<p>memory: 512Mi # 512 megabytes - suitable for small-scale non-production apps</p>
<p>requests: # Lower limit - need at least this amount of resources</p>
<p>cpu: 250m</p>
<p>memory: 256Mi</p>
<p>runtime: # Configuration of the Mendix Runtime</p>
<p>logAutosubscribeLevel: INFO # Default logging level</p>
<p>mxAdminPassword: V2VsYzBtZSE= # base64 encoded password for MendixAdmin user, Welc0me! in this example; can be left empty keep password unchanged</p>
<p>dtapMode: P # Security &amp; runtime mode: P for production mode, D for development mode</p>
<p># Mendix Runtime Jetty options, in JSON format; validated and applied by the mx-m2ee-sidecar container</p>
<p>jettyOptions: |-</p>
<p>{</p>
<p>"max_form_content_size": 10485760,</p>
<p>"use_blocking_connector": false</p>
<p>}</p>
<p># All custom Mendix Runtime parameters go here, in JSON format; validated and applied by the mx-m2ee-sidecar container</p>
<p>customConfiguration: |-</p>
<p>{</p>
<p>"ScheduledEventExecution": "SPECIFIED",</p>
<p>"MyScheduledEvents": "MyFirstModule.MyScheduledEvent"</p>
<p>}</p></td>
</tr>
</tbody>
</table>

Make the following changes:

  - **name**: – You can deploy multiple apps in one project/namespace. the app name in the CR doesn't have to match the app name in the mda but must be unique in the project. See the Reserved Names for Mendix Apps section below for restrictions on naming your app

  - **database/storage**: – ensure that these have the correct **servicePlan.** They have to have the same names that you registered in the cluster.

  - **mendixRuntimeVersion**: – the full runtime version which matches the mda, including the build number

  - **sourceURL**: – the location of the deployment package, this must be accessible from your cluster without any authentication

  - **appURL**: – the endpoint where you can connect to your running app—this is optional, and if it is supplied it must be a URL which is supported by your platform.

  - **replicas**: – by default one replica will be started when you deploy your app

  - **resources**: – here you can change the minimum and maximum container resources your app requires

  - **logAutosubscribeLevel**: – change the default logging level for your app. The standard level is INFO. Possibilities are: TRACE, DEBUG, INFO, WARNING, ERROR, and CRITICAL

  - **mxAdminPassword**: – here you can change the password for the MxAdmin user

  - **dtapmode**: – For development of the app, for example acceptance testing, choose **D.** For production deployment, select **P**. If you select production, then you will need to provide a **Subscription Secret** to ensure that your app runs as a licensed app. See [Free Apps](mendix-cloud-deploy#free-app) in *Mendix Cloud* for the differences between free/test apps and licensed apps. The subscription secret needs to be supplied via the **customConfiguration** using the following values:
    
      - "License.SubscriptionSecret":"{subscription secret}"
    
      - "License.UseLicenseServer":"true"
    
      - "License.LicenseServerURL":<https://subscription-api.test.mendix.com/activate>
    
      - "License.EnvironmentName":"{environment name}"

> {{% alert type="warning" %}}Your app can only be deployed to a production environment if security is set on. {{% /alert %}}

  - **jettyOptions** and **customConfiguration**: – if you have any custom Mendix Runtime parameters, they need to be added to this section. Note that options for the Mendix runtime have to be provided in JSON format. See the examples in the CR for the correct format.

### Build and Deploy Your App

You now need to supply the CR you have just created to the platform so that the Mendix Operator can use it to build and deploy the app.

You can do this in one of two ways:

  - via the CLI

  - for OpenShift, you can use the OpenShift console

#### Process the CR in the CLI

##### OpenShift CLI

To build and deploy your app using the OpenShift CLI, do the following:

1.  > Paste the OpenShift login command into Bash as described in the first few steps of **Error! Reference source not found.**, **Error! Reference source not found.**.

2.  > Switch to the project where you've deployed the Mendix Operator:

|                       |
| --------------------- |
| oc project my-project |

where my-project is the name of the project where the Mendix Operator is deployed.

3.  > Paste the following command into Bash:

|                                                                            |
| -------------------------------------------------------------------------- |
| oc apply -f {*File containing* *the CR created in* *Edit the CR,* *above*} |

##### Other CLI

To build and deploy your app using AWS-EKS or other Kubernetes platform:

4.  > Create a file containing the instructions for the Mendix CR, as described above.

5.  > Execute the following command:

|                                                                                  |
| -------------------------------------------------------------------------------- |
| Kubectl apply -f { *File containing* *the CR created in* *Edit the CR,* *above*} |

6.  
#### Process the CR in the OpenShift Console

To build and deploy your app using the OpenShift Console, do the following:

1.  > Sign in to the OpenShift Console.

<!-- end list -->

1.  Go to your project.

2.  Click the + **Add** button, and select **Import YAML**.
    
    ![](attachments/private-cloud-operator/image1.png)

3.  In the **Import YAML** page, enter/paste the YML you prepared for the CR, above.

4.  Click the **Create** button.
    
    ![](attachments/private-cloud-operator/image2.png)

Mendix Operator will now pick up the YAML and deploy your app.

### Monitoring the Build Process.

The YAML window will report the status of the app build. Note that it can take up to ten minutes for all the statuses to reach ready.

The following statuses will be reported:

  - **appState** – The status of your app (Started or Stopped)
    
      - This will also return the **appURL** which you can use to reach your app.

  - **buildStatus** – Ready

  - **databaseStatus** – Ready

  - **mendixAppState** – Ready

  - **networkStatus** – Ready

  - **runtimeStatus** – Ready

  - **storageStatus** – Ready

### Starting and Stopping Your App

You can start and stop your app through the CR you supplied to deploy your app. See section Edit the CR, above for the full CR.

To stop your app when it is running, set the value of **replicas** to zero.

To start your app when it is stopped, set the value of **replicas** to be non-zero.

The value set in **replicas** will only be applied once the runtime status is **Ready**. If the runtime is waiting for another action to complete (for example, provisioning the database), then it will apply the replicas value once all other actions have been completed.

## Current Limitations

### Reserved Names for Mendix Apps

Names beginning **mendix-** cannot be used for your own apps as they are reserved for use by the Mendix Operator.

All names beginning **openshift-** are reserved for use by OpenShift if you are deploying to an OpenShift cluster.
