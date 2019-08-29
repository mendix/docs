---
title: "Mendix Single Sign-On"
parent: "mendix-cloud-deploy"
menu_order: 70
description: "Use the AppCloudServices module to add Single Sign-on to your app using the user's Mendix credentials"
tags: ["AppCloudServices", "SSO", "Single Sign On", "Mendix credentials"]
#Ownership claimed by Identity Services Team.
#Needs to be rewritten to remove AppCloud references and just concentrate on SSO. Also needs to be tested.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [AppCloudServices module](https://appstore.home.mendix.com/link/app/934/) module allows you to integrate your app with the Mendix Cloud, including the single sign-on (SSO) feature.

Want to know more about all the possibilities this opens up? Take a look at the blog post titled [New Mendix AppCloud Ignites Application Innovation by Connecting All Custom Apps, Developers, Data, and Users in One Enterprise Cloud Ecosystem](http://www.mendix.com/press/new-mendix-appcloud/).

## 2 Steps & Example

These steps use the [Company Expenses](https://appstore.home.mendix.com/link/app/240/) (CE) app as an example. To incorporate the AppCloudServices module into an existing app, follow these steps:

1. Open your app project in Mendix Studio Pro.
2. Open the **App Store** inside Studio Pro.
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

Congratulations! Your app now makes use of the AppCloud services.

## 3 Read More

* [Manage User Logins with Mendix SSO](managing-mendix-sso).
* [Trends in Mendix Cloud v3](/developerportal/operate/trends)
* [Mendix Cloud: Deploy](mendix-cloud-deploy)
