---
title: "IBM Cloud"
parent: "environments"
description: "Describes how to deploy a Mendix app to the IBM Cloud"
tags: ["Deployment", "IBM", "IBM Cloud", "Environment"]
---

## 1    Introduction

As a Mendix user with an IBM Cloud account you have access to many IBM resources which you want to use in a Mendix app. This how-to shows you how to create a Mendix app on the Mendix platform and then deploy it to IBM Cloud.

**This how-to will teach you how to do the following:**

* Select an IBM app template and ask Mendix to create the app
* Create a deployment package on IBM Cloud
* Deploy and test your app to IBM Cloud

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Have an [IBM Cloud account](https://console.bluemix.net/registration/)
* Download the [Mendix Desktop Modeler](https://appstore.home.mendix.com/link/modelers/) – you will need 7.11.0 or higher
* Be familiar with the basic concepts of editing and deploying a Mendix app. If you are new to Mendix, the [Starter App Tutorial](/howto/tutorials/starter-apps) will introduce you to these concepts

## 3 Creating the New App and Setting Up IBM Cloud

You have decided to create a new Mendix app using an IBM template which you will ask Mendix to deploy to your account on IBM Cloud.

### 3.1 Creating a New App

Firstly, you will create your Mendix app which you wish to deploy.

To start creating a new app, follow these steps:

1.  Log in to your Mendix Account.

2.  Click **Create App** to create a new app.

    ![](attachments/ibm-cloud/createapp.png)

3.  Click an IBM app to choose it as the starting point for your app.

    ![](attachments/ibm-cloud/choosestartingpoint.png)

4.  Click **Use this app**.

5.  Choose a name for your app and click **Create App**.

6.  Wait while Mendix creates a copy of the starter app you have chosen and takes you to IBM Cloud.

### 3.2 Setting Up the Project on IBM Cloud

You are now on IBM Cloud and need to tell it more about your project, so that IBM Cloud can add the resources you need.

To set up IBM Cloud, follow these steps:

1.  Click **Setup Cloud**.

    ![](attachments/ibm-cloud/landing.png)

2.  Log in to IBM Cloud if you are not already logged in.

    The **App name** name of your project is already filled in.

3. Ensure that the correct account is shown at the top right of the screen (next to your avatar) if you have access to more than one account on IBM Cloud.

4. Choose the appropriate **Resource Group**

5.  Click **Create**.

    ![](attachments/ibm-cloud/createnewproject.png)

6.  Click **Link Account**.

    ![](attachments/ibm-cloud/linkaccount.png)

    This is only required for new projects. It links this project to the project on Mendix.

    If you have not linked an IBM Cloud project to Mendix before, you will be asked to confirm that IBM Cloud can have access to some of your Mendix data. Please **Authorize** this.

    You will now be returned to the project page.

7.  Click **Choose Deployment**.

    ![Choose Deployment](attachments/ibm-cloud/choosedeployment_1.png)

    You can choose to deploy to Cloud Foundry or Kubernetes.

#### 3.2.1 Deploying to Cloud Foundry

1.  Check that **Number of instances** is _1_.

2.  Set **Memory allocation per instance** to _512_.

3. Choose the **Region**, **Organization**, **Space**, and **Domain** to deploy to.

4. Change the **Host** if required; the default is the name of your app.

5.  Click **Create**.

    ![](attachments/ibm-cloud/choosedeployment-cf.png)

6. Wait until the **Deployment Details** indicate that the toolchain is configured.

    ![](attachments/ibm-cloud/deploymentconfigured.png)

    Your IBM Cloud Foundry environment is now configured. Go to section 3.3 [Creating a Package for IBM Cloud](#create-package) to learn how to create a package which will deploy to IBM Cloud.

#### 3.2.2 Deploying to Kubernetes

{{% alert type="warning" %}}Please note that deploying to Kubernetes currently has a number of issues which mean that it is not suitable for production environments. Please contact [Mendix support](https://support.mendix.com) if you want to use Kubernetes for a production environment on IBM Cloud.
{{% /alert %}}

1. Choose the **Region**, **Organization**, **Space**, and **Cluster name** to deploy to.

2.  Click **Create**.

    ![](attachments/ibm-cloud/choosedeployment-k8.png)

3. Wait until the **Deployment Details** indicate that the toolchain is configured.

    ![](attachments/ibm-cloud/deploymentconfigured.png)

Your IBM Kubernetes environment is now configured. Go to section 3.3 [Creating a Package for IBM Cloud](#create-package) to learn how to create a package which will deploy to IBM Cloud.

### 3.3 Creating a Package for IBM Cloud {#create-package}

Before you can deploy a package to IBM Cloud you have to create it.

To create a package for IBM Cloud, follow these steps:

1.  Click **Edit on Mendix** to return to Mendix.

2.  Open the **Environments** page.

    You are now ready to create a deployment package which you will then push to IBM Cloud. It is only after the deployment package has been created and pushed to IBM Cloud that you can deploy your app.
 
3.  Click **Create package from teamserver**.

    ![](attachments/ibm-cloud/createpackage.png)

4.  Select the branch on which to base the build and click **Next**.

    ![](attachments/ibm-cloud/selectbranch.png)

    {{% alert type="info" %}}Initially, you will only have the Main line. However, when you create deployment packages in the future, there may be other branches available.
    {{% /alert %}}

5.  Select the revision of this branch and click **Next**.

    ![](attachments/ibm-cloud/selectrevision.png)

    {{% alert type="info" %}}You will see a number if revisions. Note that a package cannot be created from the first revision as this contains no application template.
    {{% /alert %}}

    {{% alert type="warning" %}}Please do not choose to create a package from revision number 1.
    {{% /alert %}}

6.  Type a **Tag description** (optional) and set the version number for this build.

7.  Click **Build this revision**.

    ![](attachments/ibm-cloud/entertag.png)

8.  Click **OK** to confirm the information message.

    ![](attachments/ibm-cloud/projectbeingbuilt.png)

9.  Click **Details** next to the deployment package to see details of the deployment package.

    ![](attachments/ibm-cloud/packagedetailsbutton.png)

    You can now see and manipulate the package details.

10. Click **Environments** to return to the previous page.

    ![](attachments/ibm-cloud/packagedetails.png)

### 3.4 Deploying a Package to IBM Cloud

When the project is built it will appear in the list of deployment packages. While it is being built, there will be a 'spinner' showing that the package is not yet complete. Once the package is ready for deployment this will be replaced by a tick.

![](attachments/ibm-cloud/packagelist.png)

The package is still within the Mendix environment and needs to be pushed to IBM Cloud. From there it can be deployed.

To push and deploy the package to IBM Cloud, follow these steps:

1. Click **Push** next to the package you want to deploy. This will push this deployment package to IBM Cloud.

    {{% alert type="info" %}}A package is sent to IBM Cloud to be deployed. Currently you have to do this deployment manually.
    {{% /alert %}}
    
2.  Click the **here** link or the **Open IBM Cloud** button to go to your IBM Cloud project page.

    ![](attachments/ibm-cloud/pushrequest.png)

    You may need to configure your browser to allow the IBM Cloud page to open.

    You will now be back on your IBM Cloud project page.

3.  Click **Deploy Application**.

    ![](attachments/ibm-cloud/readytodeploy.png)

    You will see a confirmation message in the top right of the screen.

    ![Mendix app being deployed](attachments/ibm-cloud/being-deployed.png)

4.  Wait until the app is deployed. This can take several minutes.

    If you want to see the progress then do the following:

    * Click **View toolchain**
    * Click the **DELIVER > Delivery Pipeline** tool in the toolchain
    * The **Deploy Stage** will indicate *STAGE PASSED* when your app has been deployed (you can also click to see the build log here, if you are encountering issues)

    {{% alert type="info" %}}Although there is a button here marked **View app**, it is not currently possible to see your app this way. You will need to view it from the Mendix site.
    {{% /alert %}}

    
    {{% alert type="info" %}}Under some circumstances, the toolchain for Kubernetes cannot be built.

    Go to the toolchain and look at the log from the **Build Stage**. If the log includes the following message, then you will need to remove any images by going to **Containers > Registry > Images** and deleting them.

    `You have exceeded your storage quota. Delete one or more images, or review your storage quota and pricing plan.`
    {{% /alert %}}

    You can also see when your deployment is complete from the Mendix app's *Environments* page.

5.  Click **Edit on Mendix** to return to Mendix.

6.  Click **Environments** to see the Mendix environments page.

    When the deployment is complete you will see your deployed app under **Managed by IBM Cloud**. You will also see activities related to the deployment under **Activity**.

7.  Click **View App** to run and view your app.

    ![](attachments/ibm-cloud/viewapp.png)

    You can also view your app directly using the url which is given to you:

    ![](attachments/ibm-cloud/deployurl.png)

## 4 Related Content

* [IBM Cloud account](https://console.bluemix.net/registration/)
* [Mendix Desktop Modeler](https://appstore.home.mendix.com/link/modelers/)
* [Starter App Tutorial](/howto/tutorials/starter-apps)
