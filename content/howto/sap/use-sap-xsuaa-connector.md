---
title: "Use the SAP XSUAA Connector"
category: "SAP"
description: "Describes how to set up the SAP XSUAA Connector."
tags: ["SAP", "integration", "OData", "SSO"]
---

## 1 Introduction

The SAP XSUAA Connector enables the use of an external identity provider (IDP) on a Mendix application so that a user can have a single sign-on (SSO) experience on their application.

**This how-to will teach you how to do the following:**

* Add the XSUAA Connector to your project
* Configure the XSUAA connector

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Create the app in the Mendix Desktop Modeler 7.5.1 or higher
* Get the SAP OData Connector module

### 2.1 Getting the SAP XSUAA Connector Module

To be able to use the SAP XSUAA Connector, after creating your project, navigate to the Mendix App Store to download the [SAP Cloud Platform XSUAA Connector](https://appstore.home.mendix.com/link/app/78091/) module.
You will then find this module in your app project's App Store modules.

For more information, see [How to Use App Store Content in the Modeler](/community/app-store/use-app-store-content-in-the-modeler).

## 3 Using the Connector

In this section, you will learn how to implement the data connector in your Mendix app.

{{% alert type="warning" %}}
SAP Authentication will not work if the Project Security is off.

Set the security level for the project to at least Prototype/demo to use SAP Authentication. For more information see [Project Security](/refguide/project-security).
For instructions on setting security levels, see [How To Create a Secure App](howto/security/create-a-secure-app)
{{% /alert %}}

### 3.1 Adding the OnStartup Microflow to the Application Settings

To add the OnStartup microflow to your application settings, follow these steps:

1. In the **Project Explorer**, select **Project** > **Settings** and open the **Runtime** tab.
2. For the **AfterStartup** microflow, select the OnStartup microflow:

![](attachments/use-sap-xsuaa-connector/runtime-settings.png)

### 3.2 Adding the SSO Login Button to the Landing Page<a name="adding"></a>

To add the SSO login button to the landing page, follow these steps:

1. In the top menu of the Desktop Modeler, select **Project** > **Show Project Directory in Explorer**.
2. Open the **theme** folder.
3. Open **login.html**:
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

### 3.3 Redirecting Your Application to XSUAA Without Showing the Login Page (Alternative Method)

An alternative to adding the SSO login button to the landing page of your app is to redirect your app to XSUAA automatically without showing the login page.

{{% alert type="info" %}}
Note that this will only work if you are running your app on the SAP Cloud.
{{% /alert %}}

To accomplish this, follow these steps:

1. Open the project directory of your project and then open the **theme** folder.
2. Change the contents of **login.html** into the following:

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

## 4 Related Content

* [SAP XSUAA Connector](/refguide/sap/sap-xsuaa-connector)
