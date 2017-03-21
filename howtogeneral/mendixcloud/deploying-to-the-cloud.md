---
title: "How to Deploy Your Licensed App to the Cloud"
space: "General How-To's"
category: "Mendix Cloud"
---
# 1 Introduction

It has never been easier to deploy a Mendix application to the cloud. This How-to will explain the options a developer has to deploy applications to a connected cloud node.

# 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

*   Your App is linked to a licensed Cloud Node
*   You have deployment permissions
*   Your Google Authenticator is enabled

# 3 Deploying the App to the Mendix Cloud

There are two methods to deploy the App to the Mendix Cloud. The first option is directly via the **Mendix Modeler** and the second option is to do it in the **Developer Portal**.

## 3.1 Deploy via Mendix Modeler

1.  Open the **Mendix Modeler**.
2.  Open the licensed App and click **'Deploy to licensed cloud node'**, or press Ctrl+F5!.

[](attachments/18448697/18581233.png)

3.  Click **'Deploy'**

![](attachments/18448697/18581232.png)

4.  The deployment is now in progress. Click **'Show online, to see the uploaded package'**

![](attachments/18448697/18581231.png)

## 2.2 Create a package from Team Server in the Developer Portal

An App can also be deployed without using the **Mendix Modeler**. Take the following steps to do this:

1.  Go to the [Developer Portal](http://home.mendix.com).
2.  Click on **'Apps'** in the top navigation panel.
3.  Select your app.
4.  Go to **'Environments'** in the left navigation panel.
5.  Click **'Create package from teamserver'**.
6.  Select the preferred branch and revision, click **'Next'**.
7.  Give the build a version number as preferred and click **'Build this revision'**.

The package is now being deployed to the cloud.

# 3 Deploy the App to an Environment

Previous steps explained how to deploy a Deployment Package to the Mendix Cloud. The actual App is not running yet. This chapter will explain how to deploy the App to a node environment.

The following steps will explain how to deploy a Deployment Package to a node environment:

1.  At the [Developer Portal](http://home.mendix.com).
2.  Go to **'Environments'** in the left navigation panel.
3.  In the **'Deployment Package Repository'**, choose the preferred Deployment Package and click **'Deploy'**.
4.  Select the preferred Environment to deploy, click **'Continue'**.
5.  Click **'Transport'**. If asked for, clean the environment.
6.  Configure the Constants if needed, by clicking on the tab **'Constants'** and **'Edit constants value'**. This can also be done in a later stage in the settings. 
7. Click **'Continue'** and in the next screen click **'Start application'**. If asked for, click **'Synchronize database'**.

The App is now deployed and the administrative account can be configured.

# 4 Related content
*   [How to Link Your Free App to a Licensed Cloud Node](how-to-link-app-to-node)
*   [How to Set Up Two-Factor Authentication With Google Authenticator](/howtogeneral/support/how-to-set-up-two-factor-authentication-with-google-authenticator)
*   [How to Upgrade Your Free App to a Licensed App](how-to-upgrade-free-app)
