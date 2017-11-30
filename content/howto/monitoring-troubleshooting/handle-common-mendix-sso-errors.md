---
title: "Handle Common Mendix SSO Errors"
category: "Monitoring & Troubleshooting"
tags: []
---

## 1 Introduction

Below you will find solutions for some of the most common problems you may encounter when developing an AppCloud-enabled app.

**This how-to will teach you how to do the following:**

* Monitor and troubleshoot common Mendix SSO errors

## 2 Prerequisites

None.

## 3 "404 Not Found" Errors When Navigating to `/openid/login`

A frequent cause of "404 not found" errors when navigating to `/openid/login` is that the OpenID request handler is not enabled. It should be enabled on startup.

To fix this, make sure the **AppCloudServices.StartAppCloudServices** microflow is executed during the startup of your application. You can do this by setting it as the app's after-startup microflow or by having the application's existing after-startup microflow trigger it.

## 3 Realm Verification Errors

These are commonly caused by compatibility issues with JAR files in the `<projectpath>/userlib` directory of your project. For details on the most common compatibility issues, refer to [Troubleshooting](/refguide7/troubleshooting) in the Mendix Reference Guide.

## 4 Related Content

* [How to Find the Root Cause of Runtime Errors](finding-the-root-cause-of-runtime-errors)
* [How to Clear Warning Messages in Mendix](clear-warning-messages)
* [How to Test Web Services Using SoapUI](../testing/testing-web-services-using-soapui)
* [How to Monitor Mendix Using JMX](monitoring-mendix-using-jmx)
* [How to Debug Java Actions Remotely](debug-java-actions-remotely)
* [How to Configure Log Levels](log-levels)
* [How to Debug Microflows](debug-microflows)
* [How to Debug Java Actions](debug-java-actions)
* [How to Handle Common Mendix SSO Errors](handle-common-mendix-sso-errors)
* [How to Debug Microflows Remotely](debug-microflows-remotely)
