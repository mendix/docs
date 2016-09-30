---
title: "Handle Common Mendix SSO Errors"
space: "Mendix 6 How-to's"
category: "Monitoring & Troubleshooting"
tags: []
---

## 1 Introduction

Below you will find solutions for some of the most common problems you may encounter when developing an AppCloud-enabled app.

**After using this how-to, you will know how to do the following:**

* Monitor and troubleshoot common Mendix SSO errors

## 2 "404 Not Found" Errors When Navigating to /openid/login

A frequent cause of "404 not found" errors when navigating to */openid/login* is that the OpenID request handler is not enabled. It should be enabled on startup.

To fix this, make sure the **AppCloudServices.StartAppCloudServices** microflow is executed during the startup of your application. You can do this by setting it as the app's after-startup microflow or by having the application's existing after-startup microflow trigger it.

## 3 Realm Verification Errors

These are commonly caused by compatibility issues with JAR files in the `<projectpath>/userlib` directory of your project. For details on the most common compatibility issues, refer to the [Troubleshooting chapter of the Mendix Reference Guide](/refguide6/Troubleshooting).

## 4 Related Content

* [Finding the Root Cause of Runtime Errors](Finding+the+Root+Cause+of+Runtime+Errors)
* [Clearing Warning Messages in Mendix](Clear+Warning+Messages)
* [Testing Web Services Using SoapUI](Testing+web+services+using+SoapUI)
* [Monitoring Mendix Using JMX](Monitoring+Mendix+using+JMX)
* [Debugging Java Actions Remotely](Debug+Java+Actions+Remotely)
* [Log Levels](Log+Levels)
* [Debugging Microflows](Debug+Microflows)
* [Debugging Java Actions](Debug+Java+Actions)
* [Common Mendix SSO Errors](Handle+Common+Mendix+SSO+Errors)
* [Debugging Microflows Remotely](Debug+Microflows+Remotely)
