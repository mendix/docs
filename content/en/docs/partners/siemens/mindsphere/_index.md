---
title: "Insights Hub"
url: /partners/siemens/mindsphere/
description: "Presents reference content for using apps deployed to Insights Hub."
weight: 10
---

## Introduction

Mendix offers powerful integration options to incorporate IIoT data provided by Siemens Insights Hub into your Mendix Applications. There are two ways to leverage these integrations.

1. If you would like to have a standalone Mendix application and just want to incorporate IIoT Data coming from Insights Hub into your business logic, please see [Siemens Insights Hub – API calls only](/partners/siemens/mindsphere-api-only/).

1. If you would like to have full integration within Insights Hub displaying your application on the Insights Hub Launchpad, manage the user access via the Insights Hub Settings app, achieve OEM based use cases via [subtenancy](https://developer.mindsphere.io/howto/howto-subtenant-management.html), or offer your Mendix application within the Insights Hub eco system to other Insights Hub customers (multitenancy), then see the documentation described below.

Within the Mendix Academy two learning paths are provided to show how to develop a full integrated Insights Hub application:

* [Build an Insights Hub app with Mendix](https://academy.mendix.com/link/path/80/Build-a-MindSphere-app-with-Mendix) - this learning path teaches you how to develop an app for Insights Hub with Mendix
* [Build an Insights Hub App - Continued](https://academy.mendix.com/link/path/93/Build-a-MindSphere-App---Continued) - this learning path is for everyone who wants to dive more deeply into how to build an Insights Hub App with the Mendix Platform

Once your app is registered in Insights Hub, there are a number of things you need to consider as you develop your Mendix app. These are covered in the following two documents:

* [Insights Hub Development Considerations](/partners/siemens/mindsphere-development-considerations/) – covers things which you should address when developing for Insights Hub, including the following:

    * [Cloud Foundry environment variables](/partners/siemens/mindsphere-development-considerations/#cfenvvars)
    * [Local testing](/partners/siemens/mindsphere-development-considerations/#localtesting)
    * [Multi-tenancy](/partners/siemens/mindsphere-development-considerations/#multitenancy)
    * [Validation<br style="margin-bottom: 10px;">](/partners/siemens/mindsphere-development-considerations/#validation)

* [Insights Hub Module Details](/partners/siemens/mindsphere-module-details/) – contains more technical details about the Insights Hub modules that you need to include in your Mendix app to enable it to run on Insights Hub

If you want to work with an example application, look at the following document:

* [How to Use the Siemens Insights Hub Monitor Example](/partners/siemens/mindsphere-example-app/) – this contains documentation and assistance in using the [Siemens Insights Hub Monitor Example](https://marketplace.mendix.com/link/component/117954) available in the Marketplace
