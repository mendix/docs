---
title: "Mendix on MindSphere"
parent: "mindsphere"
menu_order: 50
description: "A description of some extra considerations to be taken into account when developing for deployment to MindSphere"
tags: ["MindSphere", "Credentials", "Multi-Tenant", "Environment Variables", "Local", "Styling", "UI", "Icons", "Limitations", "Licensing", "Validation", "App Service"]
---

## 1 Introduction

If you would like to offer your Mendix application within the MindSphere eco system to other MindSphere customers (multi-tenant) and, optionally, use MindSphere's hosting offering, then **Mendix on MindSphere** would be the right choice.

## 2 Mendix on MindSphere {#mendix-on-mindsphere}

With Mendix on MindSphere, a Mendix app can be fully integrated into Siemens MindSphere's application lifecycle. This includes the capability to provide your app to third parties in the MindSphere eco system. To find out how to develop and deploy your app to Siemens MindSphere, see [Siemens MindSphere – Deployment](/developerportal/deploy/deploying-to-mindsphere) or have a look into the Mendix Academy Learning paths:

* [Build a MindSphere app with Mendix](https://academy.mendix.com/link/path/80/Build-a-MindSphere-app-with-Mendix) - This Learning Path will teach you how to develop an app for MindSphere with Mendix
* [Build a MindSphere App - Continued](https://academy.mendix.com/link/path/93/Build-a-MindSphere-App---Continued) - This Learning Path is for everyone who wants to have some deep dives in how to build a MindSphere App with the Mendix Platform


Once your app is registered in MindSphere, there are a number of things you need to consider as you develop your Mendix app. These are covered in the following two documents.

* [MindSphere Development Considerations](mindsphere-development-considerations) – covers things which you should address when developing for MindSphere, including the following:

	* [Cloud Foundry environment variables](mindsphere-development-considerations#cfenvvars)
	* [Local testing](mindsphere-development-considerations#localtesting)
	* [Multi-tenancy](mindsphere-development-considerations#multitenancy)
	* [Validation<br style="margin-bottom: 10px;">](mindsphere-development-considerations#validation)

* [MindSphere Module Details](mindsphere-module-details) – describes more technical details about the MindSphere modules that you need to include in your Mendix app to enable it to run on MindSphere

An example application can be found here:

* [How to  Use the Siemens MindSphere Operations Insight Example App](mindsphere-example-app) - contains documentation and assistance in using the Operations Insight Example App available in the Marketplace
