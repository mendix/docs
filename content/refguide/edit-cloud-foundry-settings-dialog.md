---
title: "Edit Cloud Foundry Settings Dialog"
parent: "dialogs"
tags: ["Cloud Foundry", "Deploy"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---
Use this dialog to specify the information necessary for deploying your app to a Cloud Foundry instance.

**Note**: More information on deploying to Cloud Foundry can be found here: [Deploy a Mendix App to Cloud Foundry](/deployment/cloud-foundry/index).

## Step 1: Entering credentials

The first step in configuring your app for Cloud Foundry deployment is to enter the account information of the Cloud Foundry instance you wish to use.

### API endpoint

The URL of the Cloud Foundry instance that will be used for deployment.

### User name

The user name of your Cloud Foundry account.

### Password

The password of your Cloud Foundry account.

Pressing the 'Next' button will validate the specified credentials and show the next configure step.

## Step 2: Selecting the Cloud Foundry app

The second (and final) configure step will allow you to select an app in the Cloud Foundry instance to which your Mendix app will be deployed.

### Organization

Select the organization you want to use. Note that at least one organization must already be configured in the Cloud Foundry instance; it is not possible to create a new one from within the Mendix Modeler.

### Space

Select the space you want to use. Note that at least one space must already be configured in the Cloud Foundry instance; it is not possible to create a new one from within the Mendix Modeler.

### App

Select the Cloud Foundry app you want to use. You can choose to either use an existing one, or to create a new one. When creating a new app, first choose the domain in which the app will run and then enter a name for the app.

### Buildpack

Here you can enter the URL of the buildpack you want to use in your Cloud Foundry app. Only change this if you don't want to use the default Mendix buildpack.
