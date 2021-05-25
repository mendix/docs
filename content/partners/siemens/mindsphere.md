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

1. You can purchase the MindSphere IIoT for Makers and use the [IIoT Authenticator Module](https://example.com) to authenticate your REST calls to MindSphere. See [MindSphere IIoT for Makers](#app-service), below, for more information.
2. You can utilize the full power of MindSphere and deploy your apps to the MindSphere platform and have them appear in the  MindSphere Developer Cockpit. See [Mendix on MindSphere](#mendix-on-mindsphere), below, for more information.

## 2 MindSphere IIoT for Makers{#iiot-for-makers}
<!-- In addition to REST - oData via Datahub is possible. -->
The MindSphere IIoT for Makers is the ideal solution if you want to add MindSphere information to an existing app which runs in the Mendix Cloud or another platform, especially when you are combining MindSphere data with information from other sources.

The MindSphere IIoT for Makers is easy to add to your app but has the following limitations:

* You can only communicate with [MindSphere Services](https://developer.mindsphere.io/apis/index.html) using *REST APIs*
* You cannot make your app multi-tenant – see [Multi-tenancy](mindsphere-development-considerations#multitenancy) in *MindSphere Development Considerations* for more information on multi-tenancy
* Your app cannot be deployed to the MindSphere platform and cannot be added to the MindSphere Developer Cockpit
* You cannot use MindSphere credentials to sign in to your app, you must handle app security yourself within your app

For full information on using the MindSphere IIoT for Makers see the [MindSphere IIoT for Makers](mindsphere-app-service) documentation.

## 3 Mendix on MindSphere {#mendix-on-mindsphere}

Mendix can also be deployed to Siemens MindSphere and integrated with the MindSphere Developer Cockpit. To find out how to deploy your app to Siemens MindSphere, see [Siemens MindSphere – Deployment](/developerportal/deploy/deploying-to-mindsphere).

Once your app is deployed to MindSphere, there are a number of things you need to consider as you develop your Mendix app. These are covered in the following four documents.

For details see [Mendix on Mindsphere](mendix-on-mindsphere) 