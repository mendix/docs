---
title: "Licensing Apps"
parent: "general"
menu_order: 5
description: "How to apply licenses to apps which are outside Mendix Cloud"
tags: ["App", "Developer Portal", "License", "Subscription Secret", "Upgrade", "SAP", "IBM", "Siemens MindSphere"]
# NB have left out AWS and Azure Marketplace offerings for now, pending further research.
---

## 1 Introduction

Mendix allows you to build **Free Apps** which give you the opportunity to try things out and to build and test apps using all the functionality of Mendix. You can deploy these to the Mendix Cloud, or to another public or private cloud of your choice, for example SAP Cloud Platform.

However, Free Apps are restricted in how long they run; they will stop running after around 2 hours. If they are run outside the Mendix Cloud, they cannot have more than ten users. There are also restrictions on how they can be configured. A full list of restrictions is available in [Mendix Cloud](mendix-cloud-deploy) – note that some of these restrictions are specific to Free Apps running on Mendix Cloud.

To use your app in a production environment, you need to license it. The method for doing this differs depending on the environment to which you are deploying your app.

{{% alert type="info" %}}
The app will check for a license each time it is started.
{{% /alert %}}

## 2 Obtaining a Mendix License

You can obtain a Mendix license from Mendix support. 

If you need a *Subscription Secret* to deploy to SAP Cloud Platform, Mendix for Private Cloud, or IBM Cloud, you will need to create a ticket with [Mendix Support](https://support.mendix.com).

If you want to create a new licensed node in the Mendix Cloud and your contract does not allow for more licensed nodes, please contact your Customer Success Manager (CSM) first.

For all other license requests, do the following:

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

To run Mendix apps in production on the Mendix Cloud, they must be linked to a licensed node in the Mendix Cloud. This process is described in a separate document: [Licensing Mendix Cloud Apps](licensing-apps).

### 3.2 SAP Cloud Platform & IBM Cloud

To license a Mendix app on SAP Cloud Platform or IBM Cloud, you need to supply a *Subscription Secret* which is linked to your app.

You can add this subscription secret as part of creating an environment on SAP Cloud Platform. You can also add, or change, the subscription secret on the *Environment Details* page of the environment you wish to license.

For more information, see [SAP Cloud Platform - deploy](sap-cloud-platform) or [IBM Cloud](ibm-cloud).

### 3.3 Siemens MindSphere

To license a MindSphere app, you need to provide your *License ID* and *License Key* as Cloud Foundry environment variables. See [Cloud Foundry](#cloudfoundry), below, for instructions on how to do this.

### 3.4 Mendix for Private Cloud

To license a Mendix app on Mendix for Private Cloud, you need to supply a *Subscription Secret* which is linked to your app. See below for how it can be added to either a Connected or Standalone cluster.

In addition to the licenses for your apps, you will also need to license the Mendix Operator which helps deploy your app to a Private Cloud environment. For information on the Mendix Operator license, see [Licensing Mendix for Private Cloud](private-cloud#licensing).

#### 3.4.1 Mendix for Private Cloud Connected

You can add the subscription secret as part of creating an environment on Mendix for Private Cloud. You can also add, or change, the subscription secret on the *Environment Details* page of the environment you wish to license. For more information see the [Change Subscription Secret](private-cloud-deploy#change-subscription-secret) section of *Deploying a Mendix App to a Private Cloud Cluster*.

#### 3.4.2 Mendix for Private Cloud Standalone

You will need to add the subscription secret and configure the license in the Mendix Custom Resource (CR) for your Private Cloud environment. For more information see the [Editing the CR](private-cloud-operator#edit-cr) section of *Using Command Line to Deploy a Mendix App to a Private Cloud Cluster*.

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

Full instructions on how to do this, and how to supply the keys using a *Secrets* file can be found in the [Deploying the Application](run-mendix-on-kubernetes#deploy) section of *Run Mendix on Kubernetes*.

### 3.8 Windows Server

To license a Mendix app on Microsoft Windows you need to:

1. Obtain the server id of your server.
2. Request a license key from Mendix Support.
3. Insert the license key on the server.

Full instructions on how to do this can be found in [MS Windows: Activate a Mendix License on Microsoft Windows](activate-a-mendix-license-on-microsoft-windows).

### 3.9 Unix-like Server

To license a Mendix app on Linux, or another Unix-like operating system, you need to:

1. Open the interactive m2ee console.
2. Use the command `show_license_information` to obtain the server id of your server.
3. Request a license key from Mendix Support.
4. Activate your license on the server using the m2ee command `activate_license`.

More instructions on how to do this can be found in [Unix Deployment](unix-like).

## 4 Read More

* [Submit a Support Request](/developerportal/support/submit-support-request)
