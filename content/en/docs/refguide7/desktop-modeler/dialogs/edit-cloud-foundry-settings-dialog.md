---
title: "Edit Cloud Foundry Settings Dialog"
url: /refguide7/edit-cloud-foundry-settings-dialog/
tags: ["Cloud Foundry", "Deploy"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---
## 1 Introduction

Use this dialog to specify the information necessary for deploying your app to a Cloud Foundry instance.

{{% alert color="info" %}}

For more information on deploying to Cloud Foundry, see [Cloud Foundry: Deploy](/developerportal/deploy/cloud-foundry-deploy/) in *Developer Portal Guide*.

{{% /alert %}}

## 2 Entering credentials

The first step in configuring your app for Cloud Foundry deployment is to enter the account information of the Cloud Foundry instance you wish to use.

Enter the details on the screen, as described below, then click **Next** to validate the specified credentials and show the next configuration step.

### 2.1 API endpoint

This is the URL defining the **API endpoint** of the Cloud Foundry platform that will be used for deployment.

### 2.2 User Name

This is the **User name** of your Cloud Foundry account.

### 2.3 Password

This is the **Password** of your Cloud Foundry account.

Pressing the 'Next' button will validate the specified credentials and show the next configure step.

## 3 Selecting the Cloud Foundry app

The second step allows you to select an app in the Cloud Foundry instance to which your Mendix app will be deployed.

### 3.1 Organization

Select the **Organization** you want to use. If no organizations are available, you will need to configure one in your Cloud Foundry account; it is not possible to create a new one from within Desktop Modeler.

### 3.2 Space

Select the **Space** you want to use.  If no spaces are available, you will need to configure one in your Cloud Foundry account; it is not possible to create a new one from within Desktop Modeler.

### 3.3 App

Either **Select existing app** if you want to use an existing app environment, or **Create new app** if you want to create a new app environment.

#### 3.3.1 Select Existing App

If you **Select existing app** you will be able to choose the correct app in a drop-down list.

#### 3.3.2 Create New App

If you **Create new app**, you need to select the **Domain** in which the app will run in the drop-down list, and then enter the **App name** for the app.

The URL for your app will be {App name}.(Domain)

### 3.4 Buildpack

Here you can enter the URL of the **Buildpack** you want to use in your Cloud Foundry app. Only change this if you don't want to use the default Mendix buildpack.
