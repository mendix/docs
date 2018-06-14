---
title: "Use the SAP XSUAA Connector"
category: "SAP"
description: "Describes how to set up the SAP XSUAA Connector."
tags: ["SAP", "integration", "OData", "SSO"]
---

## 1 Introduction

When you deploy an application to SAP Cloud Platform using the SAP deployment features of the Mendix Developer Portal it is bound automatically to the XSUAA service. This service allows you to use an external identity provider (IDP) for a Mendix application. This means that the user can sign on to their app using this IDP instead of having their user credentials stored separately in the Mendix app. This means that they can have a single sign-on (SSO) experience with their application.

A Mendix application is role-based. Using the SAP Cloud Platform Cockpit, you can assign the roles within the app to roles within your SAP subaccount. The roles in the SAP subaccount can then be assigned to individual users via the selected IDP (Trust Configuration).

In this document, you will see how to use the SAP XSUAA Connector to provide SSO in an app which has two roles: Supervisor and Inspector. 

**This how-to will teach you how to do the following:**

* Add the XSUAA Connector to your project
* Configure the XSUAA connector within your app
* Configure security in your SAP subaccount and space to allow users to access the app using SSO

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Create an SAP app using an SAP starter app.
* Select and deploy the app to a SAP account and subaccount where you have authority to configure security
* Setup the app with the following two **User roles** in **Project ... > Security**: Supervisor and Inspector
* Give each role a different starting page so that the effect of the SSO can be seen

## 3 Getting the SAP XSUAA Connector Module

The SAP app may already have the SAP XSUAA Connector installed. Look in **Project... > App Store modules** for the module **SapAuthentication**. This is the XSUAA connector.

If the SAP XSUAA Connector is not already in your project, download it from the App Store. It can be found here: [SAP Cloud Platform XSUAA Connector](https://appstore.home.mendix.com/link/app/78091/).

For more information, see [How to Use App Store Content in the Modeler](/community/app-store/use-app-store-content-in-the-modeler).

## 4 Using the Connector

In this section, you will learn how to implement the XSUAA connector in your Mendix app.

{{% alert type="warning" %}}
SAP Authentication will not work if the Project Security is off.

Set the security level for the project to at least Prototype/demo to use SAP Authentication. For more information see [Project Security](/refguide/project-security).
For instructions on setting security levels, see [How To Create a Secure App](../security/create-a-secure-app).
{{% /alert %}}

### 4.1 Adding the OnStartup Microflow to the Application Settings

The app needs to be bound to the SAP XSUAA service. This is achieved by executing a microflow when the app starts. This may have been set up already if XSUAA was included in your starter app.

To add the After Startup microflow to your application, follow these steps:

1. In the **Project Explorer**, select **Project ... > Settings** and open the **Runtime** tab.
2. For the **After Startup** microflow, select the microflow **App Store Modules > SapAuthentication > USE_ME > AfterStartup**.

![](attachments/use-sap-xsuaa-connector/runtime-settings.png)

### 4.2 Changing the Login Page to Allow XSUAA SSO

By default, the Mendix login page will not allow the user to enter their SSO credentials. There are two ways of changing the login page:

* Add the SSO login button so the user can choose whether to use SSO or native Mendix credentials
* Bypass the Mendix login page altogether and just display the XSUAA login page

#### 4.2.1 Adding the SSO Login Button to the Login Page<a name="adding"></a>

{{% alert type="info" %}}
If your app already had XSUAA included, your login.html file may have been modified already.
{{% /alert %}}

If login.html does not support XSUAA then you need to add the SSO login button to the landing page. Do this by following these steps:

1. In the top menu of the Desktop Modeler, select **Project** > **Show Project Directory in Explorer**.
2. Open the **theme** folder.
3. Open **login.html** for editing.
4. Locate this line:

	```html
	<div class="login-logo"></div>
	```
5. Below the line above, add this line:

	```html
	<a id="ssoButton" href="/xsauaalogin/" class="login-sso-button btn btn-primary">Sign in with your XSUAA account</a>
	```
The XSUAA login button will look like this:

![](attachments/use-sap-xsuaa-connector/sso-login-screen.png)

#### 4.2.2 Redirecting Your Application to XSUAA Without Showing the Login Page

An alternative to adding the SSO login button to the landing page of your app is to redirect your app to XSUAA automatically without showing the login page.

{{% alert type="info" %}}
Note that this will only work if you are running your app on the SAP Cloud.
{{% /alert %}}

To accomplish this, follow these steps:

1. Open the project directory of your project and then open the **theme** folder.
2. Change the contents of **login.html** to the following:

	```html
	<!doctype html>
	<html>
		<head>
			<script>
				window.location.assign("/xsauaalogin/")
			</script>
		</head>
	</html>
	```

## 5 Configuring the SAP Cloud Platform Subaccount

Your app is configured to use an IDP. Now you need to configure the IDP and allocate users to roles. This is performed in the [SAP Cloud Platform Cockpit](https://account.hana.ondemand.com/cockpit#/home/allaccounts).

{{% alert type="info" %}}

Before configuring the IDP, you must first deploy your app to the SAP Cloud Portal. This will expose the user roles in the app to the security configuration tools in the SAP Cloud Platform Cockpit.
{{% /alert %}}


{{% alert type="warning" %}}

This section describes actions which are carried out using the SAP Cloud Platform Cockpit. This document uses the current navigation through the SAP Cloud Platform Cockpit but this is outside the Mendix environment and may be changed. Documentation on the SAP Cloud Platform is in the [SAP Help Portal](https://help.sap.com/viewer/p/CP).

{{% /alert %}}

The diagram below shows the relationship between the security structures in your Mendix app (blue), the SAP Cloud Platform app environment (yellow), SAP User Account and Authentication (orange) and the IDP (green).

![](attachments/use-sap-xsuaa-connector/xsuaa-diagram-labeled.png)

### 5.1 Scope

When your app is deployed to the SAP Cloud Platform, each **User Role** (A) in the Mendix app is exposed as a **Scope** (B) in the SAP environment. You can see this mapping by going to your app in the SAP Cloud Platform Cockpit. Under **Security** you can view the **Scopes**. You will see that the four **User Roles** in the Mendix app are exposed as scopes in the application space:

![](attachments/use-sap-xsuaa-connector/app-scopes.png)

### 5.2 Role Template

Each Scope is mapped to a single **Role Template** (C) during deployment. You can see the Role Templates in the Application details of the SAP Cloud Platform Cockpit. These are also defined during the deployment of the app.

![](attachments/use-sap-xsuaa-connector/app-role-templates.png)

### 5.3 Role

In the SAP Cloud Platform Cockpit, you can view and add additional **Roles** (D) to the Role Template, or you can stay with the generated default role. Note that new roles added here do not have different roles in your Mendix app. However, adding new roles may allow you to obtain additional analytics through the SAP or IDP logs. Here a new *Inspector* role (Inspector 2) has been added to the Inspector Role Template.

![](attachments/use-sap-xsuaa-connector/app-roles.png)

### 5.4 Role Collection

The **Role Collection** (E) is defined not for the app deployed to the SAP Cloud Platform, but in your SAP **Subaccount**. It is this Role Collection which will be linked to the IDP.

There may be other Role Collections which are being used by other apps deployed in this subaccount and you may, or may not, wish to share authentication between apps. You could, for example, use the same authentication for several related apps running in the same subaccount which have the same app User Roles. Or you may wish to use different authentication for development and production environments.

Here, we add a new Role Collection for the Inspector 2 role in the SAP Cloud Platform space roles.

1. Give the new Role Collection a name and, optionally, a description.

	![](attachments/use-sap-xsuaa-connector/new-role-collection.png)

2. Click on the **Name** of the Role Collection to allocate roles to the Role Collection

	![](attachments/use-sap-xsuaa-connector/select-role-collection.png)

3. Add the Role(s) which you want to include in this Role Collection

	![](attachments/use-sap-xsuaa-connector/add-role.png)

The new role collection can now be seen in the SAP Cloud Platform Cockpit for this Subaccount, with the Role(s) which it includes.

![](attachments/use-sap-xsuaa-connector/show-role-collection.png)

### 5.5 Trust Configuration

Your Subaccount will have one or more **Trust Configurations**. These are the IDPs which you can use to authenticate your users. The default is the **SAP ID Service** but you may add other IPDs.

![](attachments/use-sap-xsuaa-connector/trust-configurations.png)

Depending on the IDP, you can either map **Users** (G) directly to a Role Collection, or map a **User Group** (F) to a Role Collection. Users are mapped by the IDPs own configuration to the User Group.

#### 5.5.1 Map User Directly to a Role Collection

This is the method used by the **SAP ID Service**, amongst others.

1. Click on the SAP ID Service in the Trust Configurations.

2. Enter the username (email) of an SAP user that you want to give access to.

3. Click **Show Assignments** to show existing assignments.

4. Click **Add Assignment** and choose the Role Collection (in this case *Inspector 2*) to which you want to grant access.

The selected user now has access to the selected Role Collection and, through that, to the correct User Role in your app.

![](attachments/use-sap-xsuaa-connector/role-collection-assignment-direct.png)

You can picture the authentication as shown below:

![](attachments/use-sap-xsuaa-connector/xsuaa-diagram-config-direct.png)

#### 5.5.2 Map User Group to a Role Collection

Some IDPs (for example SAML 2.0 IDPs) have the concept of a User Group. In this case there will be two options in the Trust Configuration for the IDP: **Role Collection Mappings** and **Role Collection Assignment**.

You can link an individual username to the Role Collection in the same way as described above using the **Role Collection Assignment** option.

Alternatively, you can link a Role Collection to an existing Group within the IDP. In this case, you need to do the following.

1. Open **Role Collection Mappings** for the IDP.

2. Create a new Role Collection Mapping and map the Role Collection (for example, *Inspector 2 Role Collection*) to an existing Group (for example, *Inspector 2 Group*) in the IDP.

![](attachments/use-sap-xsuaa-connector/role-collection-mapping.png)

Now any user within the IDP which is part of the *Inspector 2 Group* will have access to the correct role in your Mendix app.

You can picture the authentication as shown below:

![](attachments/use-sap-xsuaa-connector/xsuaa-diagram-config-via-group.png)

## 6 Related Content

* [How To Create a Secure App](../security/create-a-secure-app)
* [How To Use App Store Content in the Modeler](/community/app-store/use-app-store-content-in-the-modeler)
* [Project Security](/refguide/project-security)
* [SAP Cloud Platform XSUAA Connector](https://appstore.home.mendix.com/link/app/78091/)
* [SAP XSUAA Connector](/refguide/sap/sap-xsuaa-connector)
* [SAP Cloud Platform Cockpit](https://account.hana.ondemand.com/cockpit#/home/allaccounts)
