---
title: "Insights Hub"
url: /partners/siemens/mindsphere/
category: "Siemens"
description: "Presents reference content for using apps deployed to Insights Hub."
weight: 10
tags: ["Siemens", "MindSphere", "Insights Hub"]
---

## 1 Introduction

Mendix offers powerful integration options to incorporate IIoT data provided by Siemens Insights Hub into your Mendix Applications. There are two ways to leverage these integrations.

1. If you would like to have a standalone Mendix application and want to incorporate IIoT Data coming from Insights Hub into your business logic, then [Insights Hub IIoT for Makers](#iiot-for-makers) is the right choice for you.

2. If you would like to have full integration within Insights Hub displaying your application on the Insights Hub Launchpad, manage the user access via the Insights Hub Settings app, achieve OEM based use cases via [subtenancy](https://developer.mindsphere.io/howto/howto-subtenant-management.html), or offer your Mendix application within the Insights Hub eco system to other Insights Hub customers (multitenancy), then **Mendix on Insights Hub** is the right choice.

## 2 Insights Hub IIoT for Makers{#iiot-for-makers}

**Insights Hub IIoT for Makers** is the ideal solution if you want to add IIoT data coming from Insights Hub to an app which runs in the Mendix Cloud or another platform, especially when you are combining Insights Hub data with information from other sources.

With Insights Hub IIoT for Makers, you can use either REST or OData via Data Hub for integration.  

Insights Hub IIoT for Makers uses the [IIoT Authenticator Module](https://marketplace.mendix.com/link/component/117578) to authenticate your REST and OData calls to Insights Hub.

The Insights Hub IIoT for Makers is easy to add to your app but has the following limitations:

* You cannot make your app multi-tenant – see [Multi-tenancy](/partners/siemens/mindsphere-development-considerations/#multitenancy) in *Insights Hub Development Considerations* for more information on multi-tenancy
* Your app cannot be deployed to the Insights Hub platform and cannot leverage the Insights Hub Application Lifecycle including the deployment to third parties
* End-users cannot use Insights Hub credentials to sign in to your app, you must handle app security within your app
* It is not possible to use Sub- / Cross Tenancy

For full information on using the Insights Hub IIoT for Makers see [Insights Hub IIoT for Makers](/partners/siemens/mindsphere-app-service/).

## 3 Mendix on Insights Hub {#mendix-on-mindsphere}

A Mendix app can be fully integrated into Siemens Insights Hub's application lifecycle. This includes the capability to provide your app to third parties in the Insights Hub eco system. To find out how to develop and deploy your app to Siemens Insights Hub, see [Siemens Insights Hub – Deployment](/developerportal/deploy/deploying-to-mindsphere/).

Once your app is registered in Insights Hub, there are a number of things you need to consider as you develop your Mendix app. For details see [Mendix on Insights Hub](/partners/siemens/mendix-on-mindsphere/).
