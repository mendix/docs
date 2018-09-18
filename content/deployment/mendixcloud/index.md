---
title: "Mendix Cloud"
---

## 1 Introduction

The Mendix Cloud is a public cloud service for Mendix applications.

This is the default deployment option for Mendix applications: either a limited **Free App** or an app running on a licensed cloud node.

## 2 Free App

If you are new to the Mendix community and would like to deploy and share your own app, you can do so for free on our public cloud offering. The Free App environment (sometimes referred to as the Sandbox) allows any Mendix developer to create and share their applications with their users. Note that a Free App does not support complex or large applications.

<!-- Add a link here to something that shows the difference between a Free App and a Licensed App -->

{{% alert type="info" %}}

Free apps are part of our community edition and require Mendix 5.18 or higher.

If you are not currently a customer but would prefer to use a licensed cloud node you can find more information on our pricing page: [Mendix Platform Pricing](http://www.mendix.com/pricing).

If you are an existing customer, you should deploy into your licensed cloud node.

{{% /alert %}}

A Free App will go to sleep after an hour or so of inactivity. If you access it while it is inactive, you will see the image below. If, after a couple of minutes, your app does not wake up, please contact our support team at [support.mendix.com](http://support.mendix.com).

![](attachments/index/appresumed.png)

## 3 Licensed App

A Free App can be upgraded to a licensed app with a *node* in the Mendix Cloud.

A *node* has a minimum of two environments: **production** and **acceptance**. A third environment, **test**, can be added, if required. Your licensed app is linked to a node and can be deployed to any of these environments.

By default, apps are deployed to the Mendix Cloud **v4**. Features which are covered in the default documentation are for **v4**. Some customers with special requirements may use Mendix Cloud **v3**, and will have to refer to the **v3** documentation where the features differ from **v4**.

<!-- Line here to documentation for v3, and perhaps a list of differences -->

If you are upgrading a Free App to a licensed node you may find the following documents useful:

* [How To Unlink Your Free App from a Sandbox Environment](https://docs.mendix.com/developerportal/howto/how-to-unlink-sandbox)
* [How To Upgrade Your Free App to a Licensed App](https://docs.mendix.com/developerportal/howto/how-to-upgrade-free-app)
* [How To Link a Different App to a Cloud Node](https://docs.mendix.com/developerportal/howto/how-to-link-a-different-app-to-a-node)

## 4 Documents in This Category

* [Restrict Access for Incoming Requests](access-restrictions)
* [Certificates](certificates)
* [Create Custom Error Pages](custom-error-page)
* [Different User Logins when Integrated with Mendix SSO](different-user-logins-when-integrated-with-mendix-sso)
* [Integrate Your App with Mendix SSO](integrate-your-app-with-mendix-sso)
* [Java in Mendix Cloud v3](java-in-the-cloud)
* [Migrate to Mendix Cloud v4](migrating-to-v4)
* [Mendix Cloud v4 - FAQ](mxcloudv4)
* [Secure Outgoing Connections from Your Application](securing-outgoing-connections-from-your-application)
* [Sending Email](sending-email)
* [Troubleshooting](troubleshoot-mendixcloud)
    * [Troubleshoot Your Application in the Mendix Cloud: Cache](troubleshooting-mxcloud-cache)
    * [Troubleshoot Your Application in the Mendix Cloud: Running Now](troubleshooting-mxcloud-runningnow)
* [Version Downgrade Prevention](version-downgrade-prevention)

## 5 Related Content

The **AppCloudServices** module allows your app to integrate with services on the Mendix Cloud. It is available in the **App Store** here: [AppCloudServices](https://appstore.home.mendix.com/link/app/934/).
