---
title: "MindSphere"
category: "Siemens"
description: "Reference content for using apps deployed to MindSphere"
tags: ["Siemens", "MindSphere"]
---

## 1 Introduction

Mendix can be used to access Siemens MindSphere data and can also be deployed to Siemens MindSphere.

There are two ways that Mendix allows you to access MindSphere:

{{% todo %}}[Add link to authenticator module]{{% /todo %}}

1. You can purchase the MindSphere App Service and use the [IoT Authenticator Module](https://example.com) to authenticate your REST calls to MindSphere. See [MindSphere App Service](#app-service), below, for more information.
2. You can utilize the full power of MindSphere and deploy your apps to the MindSphere platform and have them appear in the  MindSphere Developer Cockpit. See [Full MindSphere Integration](#integration), below, for more information.

## 2 MindSphere App Service{#app-service}

The MindSphere App Service is the ideal solution if you want to add MindSphere information to an existing app which runs in the Mendix Cloud or another platform, especially when you are combining MindSphere data with information from other sources.

The MindSphere App Service is easy to add to your app but has the following limitations:

* You can only communicate with [MindSphere Services](https://developer.mindsphere.io/apis/index.html) using *REST APIs*
* You cannot make your app multi-tenant – see [Multi-tenancy](mindsphere-development-considerations#multitenancy) in *MindSphere Development Considerations* for more information on multi-tenancy
* Your app cannot be deployed to the MindSphere platform and cannot be added to the MindSphere Developer Cockpit
* You cannot use MindSphere credentials to sign in to your app, you must handle app security yourself within your app

For full information on using the MindSphere App Service see the [MindSphere App Service](mindsphere-app-service) documentation.

## 3 Full MindSphere Integration{#integration}

Mendix can also be deployed to Siemens MindSphere and integrated with the MindSphere Developer Cockpit. To find out how to deploy your app to Siemens MindSphere, see [Siemens MindSphere – Deployment](/developerportal/deploy/deploying-to-mindsphere).

Once your app is deployed to MindSphere, there are a number of things you need to consider as you develop your Mendix app. These are covered in the following four documents.


{{% alert type="warning" %}}
These documents do not apply to the MindSphere App Service and should not be used if this is how you are consuming MindSphere data.
{{% /alert %}}

* [MindSphere Development Considerations](mindsphere-development-considerations) – covers things which you should address when developing for MindSphere, including the following:

	* [Cloud Foundry environment variables](mindsphere-development-considerations#cfenvvars)
	* [Local testing](mindsphere-development-considerations#localtesting)
	* [Multi-tenancy](mindsphere-development-considerations#multitenancy)
	* [Validation<br style="margin-bottom: 10px;">](mindsphere-development-considerations#validation)

* [MindSphere Module Details](mindsphere-module-details) – describes more technical details about the MindSphere modules that you need to include in your Mendix app to enable it to run on MindSphere
* [MindSphere Asset Management Connector](mindsphere-asset-management-connector) – describes how to use the MindSphere Asset Management Connector to retrieve assets and asset types from MindSphere
* [How to Use the Siemens MindSphere Pump Asset Example App](mindsphere-example-app) – contains documentation and assistance in using the Pump Asset Example App available in the Marketplace
