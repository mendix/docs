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

These are commonly caused by compatibility issues with JAR files in the `<projectpath>/userlib` directory of your project. For details on the most common compatibility issues, refer to the [Troubleshooting chapter of the Mendix Reference Guide](/refguide6/troubleshooting).

## 4 Related Content

* [Finding the Root Cause of Runtime Errors](/howto6/finding-the-root-cause-of-runtime-errors)
* [Clearing Warning Messages in Mendix](/howto6/clear-warning-messages)
* [Testing Web Services Using SoapUI](/howto6/testing-web-services-using-soapui)
* [Monitoring Mendix Using JMX](/howto6/monitoring-mendix-using-jmx)
* [Debugging Java Actions Remotely](/howto6/debug-java-actions-remotely)
* [Log Levels](/howto6/log-levels)
* [Debugging Microflows](/howto6/debug-microflows)
* [Debugging Java Actions](/howto6/debug-java-actions)
* [Common Mendix SSO Errors](/howto6/handle-common-mendix-sso-errors)
* [Debugging Microflows Remotely](/howto6/debug-microflows-remotely)
