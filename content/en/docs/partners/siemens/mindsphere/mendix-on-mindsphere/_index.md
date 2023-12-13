---
title: "Mendix on Insights Hub"
url: /partners/siemens/mendix-on-mindsphere/
weight: 50
description: "A description of some extra considerations to be taken into account when developing for deployment to Insights Hub"
tags: ["MindSphere", "Insights Hub", "Credentials", "Multi-Tenant", "Environment Variables", "Local", "Styling", "UI", "Icons", "Limitations", "Licensing", "Validation", "App Service"]
---

## 1 Introduction

If you want to have full integration with Insights Hub, incorporating your application into the Insights Hub Launchpad, managing the user access via the Insights Hub Settings app, supporting OEM based use cases via [subtenancy](https://developer.mindsphere.io/howto/howto-subtenant-management.html), or offering your Mendix application within the Insights Hub ecosystem to other Insights Hub customers (multitenancy), then **Mendix on Insights Hub** is the right choice.

## 2 Mendix on Insights Hub {#mendix-on-mindsphere}

With Mendix on Insights Hub, a Mendix app can be fully integrated into Siemens Insights Hub's application lifecycle. This includes the capability to provide your app to third parties in the Insights Hub eco system. To find out how to develop and deploy your app to Siemens Insights Hub, see [Siemens Insights Hub – Deployment](/developerportal/deploy/deploying-to-mindsphere/) or have a look at the Mendix Academy learning paths:

* [Build an Insights Hub app with Mendix](https://academy.mendix.com/link/path/80/Build-a-MindSphere-app-with-Mendix) - this learning path will teach you how to develop an app for Insights Hub with Mendix
* [Build an Insights Hub App - Continued](https://academy.mendix.com/link/path/93/Build-a-MindSphere-App---Continued) - this learning path is for everyone who wants to dive more deeply into how to build an Insights Hub App with the Mendix Platform

Once your app is registered in Insights Hub, there are a number of things you need to consider as you develop your Mendix app. These are covered in the following two documents:

* [Insights Hub Development Considerations](/partners/siemens/mindsphere-development-considerations/) – covers things which you should address when developing for Insights Hub, including the following:

    * [Cloud Foundry environment variables](/partners/siemens/mindsphere-development-considerations/#cfenvvars)
    * [Local testing](/partners/siemens/mindsphere-development-considerations/#localtesting)
    * [Multi-tenancy](/partners/siemens/mindsphere-development-considerations/#multitenancy)
    * [Validation<br style="margin-bottom: 10px;">](/partners/siemens/mindsphere-development-considerations/#validation)

* [Insights Hub Module Details](/partners/siemens/mindsphere-module-details/) – describes more technical details about the Insights Hub modules that you need to include in your Mendix app to enable it to run on Insights Hub

If you want to work with an example application, look at the following document:

* [How to Use the Siemens Insights Hub Monitor Example](/partners/siemens/mindsphere-example-app/) – this contains documentation and assistance in using the Siemens Insights Hub Monitor Example available in the Marketplace
