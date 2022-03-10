---
title: "Handle Common Mendix SSO Errors"
url: /howto7/monitoring-troubleshooting/handle-common-mendix-sso-errors/
category: "Monitoring & Troubleshooting"
weight: 4
tags: ["monitoring", "troubleshooting", "sso", "single sign on", "error"]
---

## 1 Introduction

Below you will find solutions for some of the most common problems you may encounter when developing an AppCloud-enabled app.

**This how-to will teach you how to do the following:**

* Monitor and troubleshoot common Mendix SSO errors

## 2 "404 Not Found" Errors When Navigating to `/openid/login`

A frequent cause of "404 not found" errors when navigating to `/openid/login` is that the OpenID request handler is not enabled. It should be enabled on startup.

To fix this, make sure the **AppCloudServices.StartAppCloudServices** microflow is executed during the startup of your application. You can do this by setting it as the app's after-startup microflow or by having the application's existing after-startup microflow trigger it.

## 3 Realm Verification Errors

These are commonly caused by compatibility issues with JAR files in the `<projectpath>/userlib` directory of your project. For details on the most common compatibility issues, refer to [Troubleshooting](/refguide7/troubleshooting/) in the Mendix Reference Guide.

## 4 Read More

* [How to Find the Root Cause of Runtime Errors](/howto7/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
* [How to Clear Warning Messages in Mendix](/howto7/monitoring-troubleshooting/clear-warning-messages/)
* [How to Test Web Services Using SoapUI](/howto7/testing/testing-web-services-using-soapui/)
* [How to Monitor Mendix Using JMX](/howto7/monitoring-troubleshooting/monitoring-mendix-using-jmx/)
* [How to Debug Java Actions Remotely](/howto7/monitoring-troubleshooting/debug-java-actions-remotely/)
* [How to Configure Log Levels](/howto7/monitoring-troubleshooting/log-levels/)
* [How to Debug Microflows](/howto7/monitoring-troubleshooting/debug-microflows/)
* [How to Debug Java Actions](/howto7/monitoring-troubleshooting/debug-java-actions/)
* [How to Handle Common Mendix SSO Errors](/howto7/monitoring-troubleshooting/handle-common-mendix-sso-errors/)
* [How to Debug Microflows Remotely](/howto7/monitoring-troubleshooting/debug-microflows-remotely/)
