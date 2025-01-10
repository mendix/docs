---
title: "Private Cloud"
url: /developerportal/deploy/private-cloud/
description: "Describes how to deploy to a Private Cloud."
weight: 48
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## Introduction

**Mendix for Private Cloud** allows you to deploy and manage your Mendix apps in a Kubernetes private cloud cluster. It automates operations, such as database provisioning, that you would have to perform manually if you used the Mendix Docker buildpack. It also provides options for monitoring and logging through third-party tools. 

Your organization may have a requirement to use a private cloud, perhaps as part of a multi-cloud strategy. This could be because of legal requirements or a desire to have complete control over your data. Mendix for Private Cloud allows you to do this while keeping the familiar components of Docker and Kubernetes.

You can use Mendix for Private Cloud with the *connected* option to keep the simplicity of one-click deployments from the Mendix Portal, or utilize the *standalone* Mendix Operator to deploy Mendix apps through your own DevOps process, which is particularly useful for private clouds with an *air-gap* isolating them from the internet. See [Connected and Standalone Clusters](#connected-standalone), below, for more information.

Please see [Supported Providers](/developerportal/deploy/private-cloud-supported-environments/) for a list of platforms supported by Mendix for Private Cloud.

There are two steps required to achieve this, listed below.

{{% alert color="info" %}}
Mendix for Private Cloud is a premium offering from Mendix, and there are additional licensing and cost implications if you want to use it for applications in production. See [Licensing Mendix for Private Cloud](#licensing), below, for more information.
{{% /alert %}}

### Registering Your Cluster and Namespace

The first step is to register your private cloud cluster in the Mendix Portal. For more information see [Creating a Private Cloud Cluster](/developerportal/deploy/private-cloud-cluster/).

This activity needs to be done by a systems administrator who has administration rights to the platform where the cluster is being created.

### Deploying Your App

To deploy your app, you have two options:

1. You can deploy the app from within the Mendix Portal. For more information see [Deploying a Mendix App to a Private Cloud Cluster from Mendix Portal](/developerportal/deploy/private-cloud-deploy/).
2. You can create a CI/CD pipeline and deploy your app from within the cluster. For more information see [Using Command Line to Deploy a Mendix App to a Private Cloud Cluster](/developerportal/deploy/private-cloud-operator/).

When you deploy through the Mendix Portal, this can be done by any Mendix user who has been given the appropriate rights to the cluster which has been registered.

## Connected and Standalone Clusters{#connected-standalone}

To allow you to manage the deployment of your apps to Red Hat OpenShift and Kubernetes, you first need to register a cluster in the Mendix Portal. This will provide you with the information you need to deploy the **Mendix Operator** in your cluster.
If you have chosen a *connected* cluster, the **Mendix Gateway Agent** will also be deployed.
Once the Mendix Operator is deployed to your cluster, you can use it to configure the resources which will be used by your apps.

You then have two options, depending on whether you have chosen to create a *connected* cluster or a *standalone* cluster.

### Connected Architecture

If you have chosen to register a connected cluster, the Mendix Gateway Agent will create a link to the **Environments** pages of your Mendix app through the **Interactor**. This is a secure bi-directional communication channel which is initiated from the Mendix Gateway Agent running on the cluster.

Using this channel, any Mendix user who has been given the correct authority can pass instructions to the Mendix Operator and receive status information about the cluster. This includes instructions needed to deploy an app, or to configure the environment.

{{< figure src="/attachments/deployment/private-cloud/mx4pc-architecture.png" class="no-border" >}}

### Standalone Architecture

If you have chosen to register a standalone cluster, then all communication with the Mendix Operator will be through instructions which are made directly through the Kubernetes API. These can be made manually, but are generally performed by your CI/CD pipeline. In this case, you will also have to have local source control of the Mendix app deployment packages to ensure that the deployment process can discover them.

{{< figure src="/attachments/deployment/private-cloud/mx4pc-standalone-architecture.png" class="no-border" >}}

## Product Capability Comparison

The table below shows the differences between the capabilities for apps deployed to Mendix Cloud, Mendix for Private Cloud Connected, and Mendix for Private Cloud Standalone.

| Capability | Mendix Cloud | Mendix for Private Cloud Connected | Mendix for Private Cloud Standalone |
| --- | --- | --- | --- |
| Environment provisioning | Fully automated | Provisioned with database and blob storage provided by the customer | Provisioned with database and blob storage provided by the customer|
| Environment configuration<br/>*For example, constants and scheduled event* | Mendix Portal | Mendix Portal | Custom Resources via Mendix Operator |
| Mendix app/deployment package deployment | Mendix Portal and Studio Pro | Mendix Portal and Studio Pro | Custom Resources via Mendix Operator<br/>*normally combined in a CI/CD pipeline* |
| Backup and restore | Mendix Portal | Services supplied by the database server and file storage used¹ | Services supplied by the database server and file storage used¹ |
| Monitoring | Mendix Portal | App metrics sent to a Prometheus-compatible monitoring tool | App metrics sent to a Prometheus-compatible monitoring tool |
| App logs | Mendix Portal | Prints app logs to `stdout` | Prints app logs to `stdout` |
| Remote debugging | Mendix Portal + Studio Pro | Mendix Portal + Studio Pro | Not supported |

{{% alert color="info" %}}
¹ No backup or restore functionality is installed automatically with Mendix for Private Cloud. You will need to choose and deploy your own solution, dependent on your choice of database, file storage, and cloud platform.
{{% /alert %}}

## Memory Allocation

Each Mendix app or environment pod has the following containers:

* Mx Runtime and the Mendix app itself
* The m2ee sidecar container
* The metrics sidecar container (only used when compatibility mode metrics are enabled)

All of those containers, including the sidecar containers, have specific resource requests and limits, so each Mendix app pod will request a certain amount of CPU cores and memory.

The Mendix container is specified per app in the portal. You can update the resource allocation in the [Mendix App CR](/developerportal/deploy/private-cloud-operator/#edit-cr).
The m2ee-sidecar container's resources are specified in the [OperatorConfiguration CR](/developerportal/deploy/private-cloud-cluster/#resource-definition-ocm).

{{% alert color="info" %}}
If the app is running in Standalone mode and its MendixApp CR does not have any resources assigned in the MendixApp CR specification resources, the Mendix Operator will use the value of *OperatorConfiguration* CR's *spec.runtimeResources* instead.
{{% /alert %}}

If the customer decided to use a [Vertical Pod autoscaler](/developerportal/deploy/private-cloud-cluster/#vertical-pod-autoscaling), the autoscaler can override any pod or container resources.

When a user sets CPU and memory limits, the JVM (JRE 8u191+) will automatically detect the container requests and limits, and automatically set Java memory limits based on the container details.
However, by default, the JVM will limit the heap memory to 25% of the container's memory limit. Mx4PC just sets the container limits, but does not go further into configuring the JVM. 
This percentage can be adjusted by providing a custom value in Custom JVM Options in the [Runtime tab](/developerportal/deploy/private-cloud-deploy/#runtime-tab) in the Private Cloud Portal, for example: *-XX:MaxRAMPercentage=75.0*.

## Licensing Mendix for Private Cloud{#licensing}

### Operator License

Mendix for Private Cloud is a premium offering from Mendix, and you will need an additional license to use it for your applications. This **Operator license** allows you to manage Mendix apps in your cluster through the Mendix Operator and, optionally, the Mendix Gateway Agent.

You need one license for each namespace you want to manage.

You can request an Operator license by doing the following:

1. Open the [Request New App Node](https://newnode.mendix.com/) app.

2. Fill in the basic information, such as your company name and app name.

3. For **Hosting Type**, select *Mendix for Private Cloud* and click **Next**.

4. Fill in the required information:

    * The name of your company (if requesting on behalf of a client, enter the name of their company).
    * License Type: Operator
    * The Mendix for Private Cloud architecture type. See [Connected and Standalone Clusters](#connected-standalone), above, for more information — optionally, leave additional information in the **comment** field
    * The namespace (or namespaces) for which you want to request an Operator license

5. Save the request.

You will receive your Operator license (or licenses) from Mendix Support, together with instructions on how to configure it(them).

You can run the Mendix Operator in trial mode for evaluation purposes. When the Operator is running in trial mode, it will stop managing an environment ninety days (thirty days for Mendix Operator versions 1.12.0 and earlier) after the environment was created. In this case you will be unable to stop or start your app, or deploy an app to this environment. The only action you can take is to delete the environment. 

### Runtime License

A runtime license per environment is required. In addition to that, the Operator license is independent of a Mendix Runtime license. The Mendix Runtime license removes [trial restrictions](/developerportal/deploy/licensing-apps-outside-mxcloud/) from a Mendix App itself. You need both types of licenses to manage and run an application through Mendix for Private Cloud.

You can request a Runtime license by doing the following:

1. Open the [Request New App Node](https://newnode.mendix.com/) app.

2. Fill in the basic information, such as your company name and app name.

3. For **Hosting Type**, select *Mendix for Private Cloud* and click **Next**.

4. Provide the required information:

    * The name of your company (if requesting on behalf of a client, enter the name of their company).
    * License Type: Runtime
    * The Mendix for Private Cloud architecture type. See [Connected and Standalone Clusters](#connected-standalone), above, for more information — optionally, leave additional information in the **comment** field
    * If "Connected" please provide the namespace (or namespaces) for which you are requesting the runtime license (or licenses)

5. Save the request.

You will receive your Runtime license (or licenses) from Mendix Support. See [Online Private Cloud Apps](#activate-online) and [Offline Private Cloud Apps](#activate-offline), below, for instructions on how to configure them.

### Request Both Operator and Runtime License

You can also request for both the Operator and Runtime license within the same request following the steps below:

1. Open the [Request New App Node](https://newnode.mendix.com/) app.

2. Fill in the basic information, such as your company name and app name.

3. For **Hosting Type**, select *Mendix for Private Cloud* and click **Next**

4. Fill in the required information:

    * The name of your company (if requesting on behalf of a client, enter the name of their company).
    * License Type: Operator and Runtime
    * The Mendix for Private Cloud architecture type. See [Connected and Standalone Clusters](#connected-standalone), above, for more information — optionally, leave additional information in the **comment** field
    * The namespace (or namespaces) for which you want to request an Operator license

### Activating Your License (or Licenses)

#### Online Private Cloud Apps{#activate-online}

If your app is able to connect to the internet to contact the Mendix license server, you will receive a **Subscription Secret** from Mendix Support.

If your app is **Connected** to the Mendix Portal, you can enter the subscription secret [in the Mendix Portal](/developerportal/deploy/private-cloud-deploy/#license-mendix)

#### Standalone & Offline Private Cloud Apps{#activate-offline}

If your app is **Standalone** or unable to contact the Mendix license server, you will receive a **LicenseId** and a **LicenseKey**. You will have to apply these by [editing the CR](/developerportal/deploy/private-cloud-operator/#edit-cr) in the cluster.

#### Private Cloud Licensing Manager

With Mendix Operator version 2.11.0 and above, you can start using the Private Cloud Licensing Manager to import a license bundle consisting of Operator and Runtime licenses. Private Cloud Licensing Manager automatically retrieves the licenses from the license bundle, so that you do not need to apply the license per environment. For more information, see [Private Cloud License Manager](/developerportal/deploy/private-cloud/private-cloud-license-manager/).
