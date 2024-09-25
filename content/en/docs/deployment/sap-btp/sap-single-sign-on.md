---
title: "SAP Single Sign-On"
url: /developerportal/deploy/sap-cloud-platform/sap-single-sign-on/
weight: 50
description: "Reference information on SAP Single Sign-On"
aliases:
    - /partners/sap/sap-single-sign-on/
---

## Introduction

Mendix has single sign-on for SAP users (for some SAP regions). This means that you are authenticated to Mendix using SAP credentials.

One implication of this is that you must use the same login email address for both SAP and Mendix.

## Signing in to Mendix Using SSO

When you sign in to Mendix Studio Pro, you have the option to use SAP authentication or Mendix authentication.

{{< figure src="/attachments/deployment/sap-btp/sap-single-sign-on/mendix-login-page.png"  max-width=50%  >}}

{{% alert color="warning" %}}

For SAP authentication, your SAP and Mendix email address must be the same.

Your password can be different in your Mendix credentials and your SAP credentials.

{{% /alert %}}

### Signing in Using Mendix Credentials

Enter your **Email Address** and Mendix **Password**. Click **Log in**. This will authenticate you with the credentials held by Mendix.

### Signing in Using SAP Credentials

Click **SAP** to use your SAP credentials. These credentials are region-specific, so you need to choose a region first.

{{< figure src="/attachments/deployment/sap-btp/sap-single-sign-on/select-sap-region.png" class="no-border" >}}

Click **Select region** and you will be asked for your SAP credentials.

{{< figure src="/attachments/deployment/sap-btp/sap-single-sign-on/sap-login-screen.png" class="no-border" >}}

Enter the correct credentials and you will be signed in to Studio Pro.

## Creating and Deploying Apps Using SSO

When you create an SAP app or a new SAP Business Technology Platform (SAP BTP) environment, you may be asked to sign in to SAP. For more information, see the [Create a New Environment](/developerportal/deploy/sap-cloud-platform/) section in *SAP BTP*.

SAP SSO is triggered if you do not already have an active session in the SAP region you have selected.

First, select a region and click **Next**

{{< figure src="/attachments/deployment/sap-btp/sap-single-sign-on/app-select-sap-region.png" class="no-border" >}}

If needed, you will be asked for credentials:

{{< figure src="/attachments/deployment/sap-btp/sap-single-sign-on/sap-login-screen.png" class="no-border" >}}

Enter the correct credentials and click **SIGN IN** to continue the creation of your SAP BTP environment.

## Resolving "Go back to where you originally came from" Error

{{< figure src="/attachments/deployment/sap-btp/sap-single-sign-on/go-back.png" class="no-border" >}}

This error occurs when you work with SAP environments from within the Mendix Portal. As described on the error page, it occurs when you use different email addresses for signing in to Mendix platform and SAP region which you are working on.

Click **Go back to where you originally came from**, and you will see another error message. Click **OK** to clear it.

{{< figure src="/attachments/deployment/sap-btp/sap-single-sign-on/server-error.png" class="no-border" >}}

There are three possible solutions, depending on why the email addresses are different. Some of these can be changed within Mendix itself, but you may also need to make changes directly on the SAP site.

### Mendix Email Address Is Correct But SAP Email Address Is Incorrect

In this case you cannot resolve the issue from within Mendix. You will continue to get the error each time you try to link your accounts.

To resolve this problem, you must sign out of the SAP region so that you can then enter the correct credentials. The sign out page is based on the region you are using and has the format `https://login.cf.{region}.hana.ondemand.com/`. 

For example:

* https://login.cf.eu10.hana.ondemand.com/ for Europe (Frankfurt)
* https://login.cf.us10.hana.ondemand.com/ for US-East (VA)

Choose the URL for the correct region.

Select the down arrow next to your email address, and this will give the option to **Sign Out**.

{{< figure src="/attachments/deployment/sap-btp/sap-single-sign-on/where-to.png" class="no-border" >}}

Click **Sign Out** and you can then return to Mendix and sign in again with an account which has the same email address as the email address you use for Mendix.

### You Are Using the Wrong Region

You may get this error if you have chosen the wrong region to deploy your app. Check that you have selected the right region. You can be signed in to several SAP regions and if you use different email addresses for these then this error can occur.

### You Are Using the Wrong Mendix Account

If you have more than one account with Mendix, check that you have created your app using the correct Mendix account.

If you are using the wrong Mendix account, you will have to sign out of Mendix and sign in again with the correct account. You will then have to create the app again. Alternatively, you can be invited to join the app as another team member.

## Read More

* [SAP Business Technology Platform](/developerportal/deploy/sap-cloud-platform/)
