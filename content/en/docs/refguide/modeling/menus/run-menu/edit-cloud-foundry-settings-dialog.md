---
title: "Edit Cloud Foundry Settings"
url: /refguide/edit-cloud-foundry-settings-dialog/
tags: ["Cloud Foundry", "Deploy", "studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The **Edit Cloud Foundry Settings** menu option allows you to specify the information necessary for deploying your app to a Cloud Foundry instance.

{{% alert color="info" %}}
More information on deploying to Cloud Foundry can be found in [Cloud Foundry: Deploy](/developerportal/deploy/cloud-foundry-deploy/).
{{% /alert %}}

## 2 Entering Credentials

The first step in configuring your app for Cloud Foundry deployment is to enter the account information of the Cloud Foundry account you wish to use.

{{< figure src="/attachments/refguide/modeling/menus/run-menu/edit-cloud-foundry-settings-dialog/cloud-foundry-credentials.png" alt="Enter Cloud Foundry Credentials" >}}

Enter the details on the screen, as described below, then click **Next** to validate the specified credentials and show the next configuration step.

### 2.1 API Endpoint

The URL defining the **API endpoint** of the Cloud Foundry platform that will be used for deployment.

### 2.2 User Name

The **User name** of your Cloud Foundry account.

### 2.3 Password

The **Password** of your Cloud Foundry account.

## 3 Selecting the Cloud Foundry App

The second step allows you to select an existing app, or create a new app, in the Cloud Foundry organization. This is where your Mendix app will be deployed.

{{< figure src="/attachments/refguide/modeling/menus/run-menu/edit-cloud-foundry-settings-dialog/cloud-foundry-app-settings.png" alt="Enter Settings for Cloud Foundry App" >}}

### 3.1 Organization

Select the **Organization** you want to use. If no organizations are available, you will need to configure one in your Cloud Foundry account; it is not possible to create a new one from within Mendix Studio Pro.

### 3.2 Space

Select the **Space** you want to use. Note that the space you want to use must already be configured in your Cloud Foundry account; it is not possible to create a new one from within Mendix Studio Pro.

### 3.3 App

Either **Select existing app** if you want to use an existing app environment, or **Create new app** if you want to create a new app environment.

#### 3.3.1 Select Existing App

If you **Select existing app** you will be able to choose the correct app from a drop-down list.

#### 3.3.2 Create New App

If you **Create new app** you will need to do the following:

1. Select the **Domain** in which the app will run from the drop-down.
2. Enter the **App name** for the app.

The URL for your app will be {App name}.(Domain).

### 3.4 Buildpack

Here you can enter the URL of the **Buildpack** you want to use in your Cloud Foundry app. Only change this if you don't want to use the default Mendix buildpack.
