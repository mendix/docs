---
title: "Mendix on MindSphere"
parent: "mindsphere"
menu_order: 50
description: "A description of some extra considerations to be taken into account when developing for deployment to MindSphere"
tags: ["MindSphere", "Credentials", "Multi-Tenant", "Environment Variables", "Local", "Styling", "UI", "Icons", "Limitations", "Licensing", "Validation", "App Service"]
---

## 1 Introduction

If you would like to offer your Mendix application within the MindSphere eco system to other MindSphere customers (multitenant) and, optionally, use MindSphere's hosting offering, then **Mendix on MindSphere** would be the right choice.

## 2 Mendix on MindSphere {#mendix-on-mindsphere}

With Mendix on MindSphere, a Mendix app can be fully integrated into Siemens MindSphere's application lifecycle. This includes the capability to provide your app to third parties in the MindSphere eco system. To find out how to develop and deploy your app to Siemens MindSphere, see [Siemens MindSphere – Deployment](/developerportal/deploy/deploying-to-mindsphere).

Once your app is registered in MindSphere, there are a number of things you need to consider as you develop your Mendix app. These are covered in the following four documents.

* [MindSphere Development Considerations](mindsphere-development-considerations) – covers things which you should address when developing for MindSphere, including the following:

	* [Cloud Foundry environment variables](mindsphere-development-considerations#cfenvvars)
	* [Local testing](mindsphere-development-considerations#localtesting)
	* [Multi-tenancy](mindsphere-development-considerations#multitenancy)
	* [Validation<br style="margin-bottom: 10px;">](mindsphere-development-considerations#validation)

* [MindSphere Module Details](mindsphere-module-details) – describes more technical details about the MindSphere modules that you need to include in your Mendix app to enable it to run on MindSphere
* [MindSphere Asset Management Connector](mindsphere-asset-management-connector) – describes how to use the MindSphere Asset Management Connector to retrieve assets and asset types from MindSphere
* [How to Use the Siemens MindSphere Pump Asset Example App](mindsphere-example-app) – contains documentation and assistance in using the Pump Asset Example App available in the Marketplace
