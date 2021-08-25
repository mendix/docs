---
title: "MindSphere"
category: "Siemens"
description: "Reference content for using apps deployed to MindSphere"
tags: ["Siemens", "MindSphere"]
---

## 1 Introduction

Mendix offers powerful integration options to incorporate IIoT data provided by Siemens MindSphere into your Mendix Applications. There are two ways to leverage these integrations.

1. If you would like to have a standalone Mendix application and want to incorporate IIoT Data coming from MindSphere into your business logic, then [MindSphere IIoT for Makers](#iiot-for-makers) is the right choice for you.

2. If you would like to have full integration within MindSphere displaying your application on the MindSphere Launchpad, manage the user access via the MindSphere Settings app, achieve OEM based use cases via [subtenancy](https://developer.mindsphere.io/howto/howto-subtenant-management.html), or offer your Mendix application within the MindSphere eco system to other MindSphere customers (multitenancy), then **Mendix on MindSphere** is the right choice.

## 2 MindSphere IIoT for Makers{#iiot-for-makers}

**MindSphere IIoT for Makers** is the ideal solution if you want to add IIoT data coming from MindSphere to an app which runs in the Mendix Cloud or another platform, especially when you are combining MindSphere data with information from other sources.

With MindSphere IIoT for Makers, you can use either REST or OData via Data Hub for integration.  

MindSphere IIoT for Makers uses the [IIoT Authenticator Module](https://marketplace.mendix.com/link/component/117578) to authenticate your REST and OData calls to MindSphere.

The MindSphere IIoT for Makers is easy to add to your app but has the following limitations:

* You cannot make your app multi-tenant – see [Multi-tenancy](mindsphere-development-considerations#multitenancy) in *MindSphere Development Considerations* for more information on multi-tenancy
* Your app cannot be deployed to the MindSphere platform and cannot leverage the MindSphere Application Lifecycle including the deployment to third parties
* End users cannot use MindSphere credentials to sign in to your app, you must handle app security within your app
* It is not possible to use Sub- / Cross Tenancy

For full information on using the MindSphere IIoT for Makers see [MindSphere IIoT for Makers](mindsphere-app-service).

## 3 Mendix on MindSphere {#mendix-on-mindsphere}

A Mendix app can be fully integrated into Siemens MindSphere's application lifecycle. This includes the capability to provide your app to third parties in the MindSphere eco system. To find out how to develop and deploy your app to Siemens MindSphere, see [Siemens MindSphere – Deployment](/developerportal/deploy/deploying-to-mindsphere).

Once your app is registered in MindSphere, there are a number of things you need to consider as you develop your Mendix app. For details see [Mendix on MindSphere](mendix-on-mindsphere).
