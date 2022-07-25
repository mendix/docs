---
title: "Licensing Apps"
url: /developerportal/deploy/licensing-apps-outside-mxcloud/
weight: 5
description: "How to apply licenses to apps which are outside Mendix Cloud"
tags: ["App", "Developer Portal", "License", "Subscription Secret", "Upgrade", "SAP", "IBM", "Siemens MindSphere"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#NB have left out AWS and Azure Marketplace offerings for now, pending further research.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/developerportal/licensing-apps-outside-mxcloud.pdf).
{{% /alert %}}

## 1 Introduction

On the Mendix Cloud, you can build [Free Apps](/developerportal/deploy/mendix-cloud-deploy/#free-app) which give you the opportunity to try things out and to build and test apps using all the functionality of Mendix.

You can also deploy apps without a license to another public or private cloud of your choice, for example SAP Business Technology Platform (SAP BTP). This gives you the opportunity to try things out and to build and test apps using both the functionality of Mendix and your target cloud.

Unlicensed apps, running outside the Mendix Cloud, have a number of restrictions which are listed in the table below:

| Feature | Unlicensed App | Licensed App |
| --- | --- | --- |
| **Number of Concurrent Users** | 6 | Depends on your pricing plan.¹ |
| **Time limitation** | Runtime stops after 2-4 hours (randomly chosen) regardless of user activity². | Does not have a time limitation. |
| **Number of Named Users** | No Limit | Depends on your pricing plan.¹ |
| **Data Hub** | 1000 objects per day | Depends on your pricing plan.¹ |

¹ More information on the capabilities of different license options is available on [Mendix Platform Pricing](http://www.mendix.com/pricing).

² Depending on the configuration of your chosen cloud, a container and runtime may be restarted if it appears unhealthy because the runtime has stopped.

For each environment for which you want to remove the restrictions placed on an unlicensed app, you need a license. The method for applying a license differs depending on where you are deploying your app.

The app will check for a license each time it is started. If the license expires while the app is running, it will continue to run until the next time it is started, when the license will be checked again.

## 2 Obtaining a Mendix License

You can obtain a Mendix license from Mendix support. 

If you need a *Subscription Secret* to deploy to IBM Cloud, you will need to create a ticket with [Mendix Support](https://support.mendix.com).

If you want to create a new licensed node in the Mendix Cloud and your contract does not allow for more licensed nodes, please contact your Customer Success Manager (CSM) first.

For all other license requests and *Subscription Secrets* to deploy to SAP BTP and Mendix for Private Cloud, do the following:

1. Open the [Request New App Node](https://newnode.mendix.com/) app.

2. Fill in the basic information, such as app name and hosting type.

3. Provide additional information about your app, if required by the type of hosting. For example, you will need to provide the server id if you are deploying the app locally on a Virtual Machine.

4. Save the app details.

Mendix Support will contact the technical contact via a ticket in the Support Portal.

If you are hosting your app somewhere else, for example on Cloud Foundry, Mendix support will provide you with two parts to your key:

* *LicenseId* – this is a unique identifier for your license, based on where it is being deployed. 
* *LicenseKey* – this is a base64 string.

An example LicenseId is aab8a0a1-1370-467e-918d-3a243b0ae160. LicenseKey is a very long base64 string.

## 3 Activating a Mendix License

### 3.1 Mendix Cloud

To run Mendix apps in production on the Mendix Cloud, they must be linked to a licensed node in the Mendix Cloud. This process is described in a separate document: [Licensing Mendix Cloud Apps](/developerportal/deploy/licensing-apps/).

### 3.2 SAP BTP & IBM Cloud

To license a Mendix app on SAP BTP or IBM Cloud, you need to supply a *Subscription Secret* which is linked to your app.

You can add this subscription secret as part of creating an environment on SAP BTP. You can also add, or change, the subscription secret on the *Environment Details* page of the environment you wish to license.

For more information, see [SAP Business Technology Platform - deploy](/developerportal/deploy/sap-cloud-platform/) or [IBM Cloud](/developerportal/deploy/ibm-cloud/).

### 3.3 Siemens MindSphere

To license a MindSphere app, you need to provide your *License ID* and *License Key* as Cloud Foundry environment variables. See [Cloud Foundry](#cloudfoundry), below, for instructions on how to do this.

### 3.4 Mendix for Private Cloud

To license a Mendix app on Mendix for Private Cloud, you need to supply a *Subscription Secret* which is linked to your app. See below for how it can be added to either a Connected or Standalone cluster.

In addition to the licenses for your apps, you will also need to license the Mendix Operator which helps deploy your app to a Private Cloud environment. For information on the Mendix Operator license, see [Licensing Mendix for Private Cloud](/developerportal/deploy/private-cloud/#licensing).

#### 3.4.1 Mendix for Private Cloud Connected

You can add the subscription secret as part of creating an environment on Mendix for Private Cloud. You can also add, or change, the subscription secret on the *Environment Details* page of the environment you wish to license. For more information see the [Change Subscription Secret](/developerportal/deploy/private-cloud-deploy/#change-subscription-secret) section of *Deploying a Mendix App to a Private Cloud Cluster*.

#### 3.4.2 Mendix for Private Cloud Standalone

You will need to add the subscription secret and configure the license in the Mendix Custom Resource (CR) for your Private Cloud environment. For more information see the [Editing the CR](/developerportal/deploy/private-cloud-operator/#edit-cr) section of *Using Command Line to Deploy a Mendix App to a Private Cloud Cluster*.

### 3.5 Cloud Foundry{#cloudfoundry}

To activate a license on your app running on Cloud Foundry you need the license credentials provided by Mendix Support.

The two environment variables `LICENSE_ID` and `LICENSE_KEY` need to be set to the values of the *LicenseId* and *LicenseKey* provided by Mendix Support. This is done through the following two commands.

```bash
cf set-env <YOUR_APP> LICENSE_ID <LicenseId>
cf set-env <YOUR_APP> LICENSE_KEY <LicenseKey>
```
Where `<YOUR_APP>` is the name of your app.

The app needs to be restarted for the environment variables to be read and the license to become effective.

### 3.6 Docker

To activate a license on your app running in a Docker container you need the license credentials provided by Mendix Support.

Two additional environment variables, `LICENSE_ID` and `LICENSE_KEY`, need to be set to the values of the *LicenseId* and *LicenseKey* provided by Mendix Support. This is done by adding them to the startup command for your container.

```bash
docker run -it \
  … \
  -e LICENSE_ID=<LicenseId> \
  -e LICENSE_KEY=<LICENSE_KEY> \
  mendix/mendix-buildpack:…
```

### 3.7 Kubernetes

To activate a license on your app running on Kubernetes you need the license credentials provided by Mendix Support.

Two additional environment variables, `LICENSE_ID` and `LICENSE_KEY`, need to be set to the values of the *LicenseId* and *LicenseKey* provided by Mendix Support. This is done by adding them to the deployment command for your app.

Full instructions on how to do this, and how to supply the keys using a *Secrets* file can be found in the [Deploying the Application](/developerportal/deploy/run-mendix-on-kubernetes/#deploy) section of *Run Mendix on Kubernetes*.

### 3.8 Windows Server

To license a Mendix app on Microsoft Windows you need to:

1. Obtain the server id of your server.
2. Request a license key from Mendix Support.
3. Insert the license key on the server.

Full instructions on how to do this can be found in [MS Windows: Activate a Mendix License on Microsoft Windows](/developerportal/deploy/activate-a-mendix-license-on-microsoft-windows/).

### 3.9 Unix-Like Server

To license a Mendix app on Linux, or another Unix-like operating system, you need to:

1. Open the interactive m2ee console.
2. Use the command `show_license_information` to obtain the server id of your server.
3. Request a license key from Mendix Support.
4. Activate your license on the server using the m2ee command `activate_license`.

More instructions on how to do this can be found in [Unix-Like Deployment](/developerportal/deploy/unix-like/).

## 4 Read More

* [Submit a Support Request](/developerportal/support/submit-support-request/)
