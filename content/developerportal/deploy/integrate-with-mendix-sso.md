---
title: "Mendix Single Sign On"
parent: "mendix-cloud-deploy"
menu_order: 70
description: "Use the AppCloudServices module to add Single Sign-on to your app using the user's Mendix credentials"
tags: ["AppCloudServices", "SSO", "Single Sign On", "Mendix credentials"]
#Needs to be rewritten to remove AppCloud references and just concentrate on SSO. Also needs to be tested.
---

## 1 Introduction

The **AppCloudServices** module allows you to integrate your app with the Mendix Cloud, including the Single Sign-on (SSO) feature. You can add these services to your existing app with the AppCloudServices module, available here: [https://appstore.home.mendix.com/link/app/934/](https://appstore.home.mendix.com/link/app/934/).

Want to know more about all the possibilities this opens up? Take a look at the [New Mendix AppCloud Ignites Application Innovation by Connecting All Custom Apps, Developers, Data, and Users in One Enterprise Cloud Ecosystem](http://www.mendix.com/press/new-mendix-appcloud/) blog post.

This how-to explains how you can incorporate the AppCloudServices module into your existing app.

## 2 Steps & Example

This how-to uses the [Company Expenses](https://appstore.home.mendix.com/link/app/240/) (CE) app.

1. Open your app project in the Desktop Modeler.
2. Open the **App Store** inside the Mendix Modeler.
3. Search for "AppCloudServices," then open and download the Mendix **AppCloudServices** module.
4.  Select **Add as a new module** and click **Import**. The module should now be visible in the **Project Explorer**:

	![](attachments/integrate-with-mendix-sso/18581209.png)

	Once the module has been imported, you can make use of the Mendix AppCloud Navigation widget. In order to do this, make sure all the starting pages in your app use **AppCloudMasterLayout** as their master layout. If necessary, you can manually add the Mendix AppCloud Navigation widget to the starting pages:

	![](attachments/integrate-with-mendix-sso/18581216.png)

	In the CE app, you need to apply the master layout to **Sidebar_Right**. Also, do not forget pages that can be opened through microflows and deeplinks.

5.  Move and rename the (excluded) microflow **Example_OnFirstLoginAppCloudUser** (which is located in **AppCloudServices** > **Single Sign On** > **API**) to an appropriate module and include it. In the CE app, moving it to the **Expenses** module and renaming it to *OnFirstLoginAppCloudUser* is a logical choice.

	![](attachments/integrate-with-mendix-sso/18581211.png)

	Any changes made to the AppCloudServices module in your app will be overwritten when you upgrade to a newer version of the AppCloudServices module.

6.  Open the **InvokeOnFirstLoginAppCloudUser** microflow from the **Single Sign On** > **Implementation** folder. There you will find an action called **Call OnFirstLoginAppCloudUser** . You need to change this action so it will call the microflow created in the previous step.

	![](attachments/integrate-with-mendix-sso/18581215.png)

7.  Add the Boolean attribute **IsLocalUser** (with default **true** ) to your app user entity. This is the entity that represents your user accounts and extends the **System.User** entity. The Boolean attribute allows you to differentiate between Mendix accounts and local accounts. For the CE app, this entity is called **Expenses.Employee**.

	![](attachments/integrate-with-mendix-sso/18581214.png)

	It is a good idea to give the administrator role(s) (or equivalent) read access to the **IsLocalUser** attribute with an access rule.

8. Open the microflow you copied in step 5.
9.  Open the **Create** action and select your app user entity as the object type to be created (instead of the preselected **UserManagement.Account**). You will need to reset the two members in this action afterwards. In the CE app, you want to change the **Entity** to **Expenses.Employee**, and then change the first member to **FullName** and the second to **IsLocalUser**.

	![](attachments/integrate-with-mendix-sso/18581213.png)

10. Now you want to make sure the **StartAppCloudServices** microflow is called during startup, so open the project **Settings**.
11. Go to the **Runtime** tab and set **AppCloudServices.StartAppCloudServices** as the **After startup** microflow:

	![](attachments/integrate-with-mendix-sso/18581212.png)

	{{% alert type="info" %}}If this microflow is not called during startup, your users will encounter **404 Not Found** errors when trying to navigate to your app.{{% /alert %}}

Congratulations! Your app now makes use of the AppCloud services. When you deploy your upgraded app in the AppCloud, it will now be automatically added to your [Launchpad](https://home.mendix.com/home/). Opening the app from your Launchpad will automatically log you in with your Mendix account, and you can easily invite other Mendix accounts through app user management.

## 3 Related Content

*   [Different user logins when integrated with Mendix SSO](managing-mendix-sso)
*   [Trends in Mendix Cloud v3](/developerportal/operate/trends)
*   [Mendix Cloud: Deploy](mendix-cloud-deploy)
*   [Azure: Deploy](azure-deploy)
*   [Sending Email](sending-email)

After completing this how-to on configuring AppCloud services, check out [how to improve logging in with different types of user accounts](managing-mendix-sso).
