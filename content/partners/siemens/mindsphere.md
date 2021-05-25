---
title: "MindSphere"
category: "Siemens"
description: "Reference content for using apps deployed to MindSphere"
tags: ["Siemens", "MindSphere"]
---

## 1 Introduction

Mendix offers powerful integration options to incorporate IIoT data provided by Siemens MindSphere in your Mendix Applications. There are two different options, how these integrations can be leveraged. 

1. If you would like to have standalone Mendix Applications and are looking for an option to incorporate IIoT Data coming from MindSphere in your Business logic, then [MindSphere IIoT for Makers](#app-service) would be the right choice for you. 

2. If you would like to offer your Mendix Application within the MindSphere Eco System to other MindSphere Customers (Multitenancy) and optionally also use MindSpheres hosting offering, then [Mendix on MindSphere](#mendix-on-mindsphere) would be the right choice. 

## 2 MindSphere IIoT for Makers{#iiot-for-makers}

MindSphere IIoT for Makers is the ideal solution if you want to add IIoT Data coming from MindSphere to an existing app which runs in the Mendix Cloud or another platform, especially when you are combining MindSphere data with information from other sources. 

With MindSphere IIoT for Makers, you can use either REST or oData via Datahub for integration.  

MindSphere IIoT for Makers uses [IIoT Authenticator Module](https://example.com) to authenticate your REST & oData calls to MindSphere. 

The MindSphere IIoT for Makers is easy to add to your app but has the following limitations:

* You cannot make your app multi-tenant – see [Multi-tenancy](mindsphere-development-considerations#multitenancy) in *MindSphere Development Considerations* for more information on multi-tenancy
* Your app cannot be deployed to the MindSphere platform and cannot leverage the MindSphere Application Lifecycle including the deployment to third partys
* You cannot use MindSphere credentials to sign in to your app, you must handle app security yourself within your app

For full information on using the MindSphere IIoT for Makers see the [MindSphere IIoT for Makers](mindsphere-app-service) documentation.

## 3 Mendix on MindSphere {#mendix-on-mindsphere}

A Mendix App can be fully integrated into Siemens MindSpheres application lifecycle. This includes the capability to provide your app to third parties in the MindSphere Eco System. To find out how to develop and deploy your app to Siemens MindSphere, see [Siemens MindSphere – Deployment](/developerportal/deploy/deploying-to-mindsphere).

Once your app is registered in MindSphere, there are a number of things you need to consider as you develop your Mendix app. These are covered in the following four documents.

For details see [Mendix on Mindsphere](mendix-on-mindsphere) 