---
title: "Common Mendix SSO Errors"
category: 'Monitoring & Troubleshooting'
space: "Mendix 5 How-to's"
---

Below you will find solutions for some of the most common problems you may encounter when developing an AppCloud-enabled app.

## 1. 404 Not Found errors when navigating to /openid/login

A frequent cause of this issue is that the OpenID request handler is not enabled. It should be enabled on startup. To fix this, make sure that the `AppCloudServices.StartAppCloudServices` microflow is executed during the startup of your application. You can do this by setting it as the app's after-startup microflow, or by having the application's existing after-startup microflow trigger it.

## 2\. Realm verification errors

These are commonly caused by compatibility issues with JAR files in the `<projectpath>/userlib` directory of your project. You can refer to [this article](/refguide5/Troubleshooting) for the most common compatibility issues.

## 3\. Related content

*   [Finding the Root Cause of Runtime Errors](Finding+the+Root+Cause+of+Runtime+Errors)
*   [Clearing Warning Messages in Mendix](Clearing+Warning+Messages+in+Mendix)
*   [Testing web services using SoapUI](Testing+web+services+using+SoapUI)
*   [Debugging Microflows](Debugging+Microflows)
*   [Common Mendix SSO Errors](Common+Mendix+SSO+Errors)
*   [Monitoring Mendix using JMX](Monitoring+Mendix+using+JMX)
*   [Debugging Java Actions](Debugging+Java+Actions)
