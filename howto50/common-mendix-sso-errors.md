---
title: "Common Mendix SSO Errors"
category: 'Monitoring & Troubleshooting'
space: "Mendix 5 How-to's"
---

Below you will find solutions for some of the most common problems you may encounter when developing an AppCloud-enabled app.

## 1. 404 Not Found errors when navigating to /openid/login

A frequent cause of this issue is that the OpenID request handler is not enabled. It should be enabled on startup. To fix this, make sure that the `AppCloudServices.StartAppCloudServices` microflow is executed during the startup of your application. You can do this by setting it as the app's after-startup microflow, or by having the application's existing after-startup microflow trigger it.

## 2\. Realm verification errors

These are commonly caused by compatibility issues with JAR files in the `<projectpath>/userlib` directory of your project. You can refer to [this article](/refguide5/troubleshooting) for the most common compatibility issues.

## 3\. Related content

*   [Finding the Root Cause of Runtime Errors](/howto50/finding-the-root-cause-of-runtime-errors)
*   [Clearing Warning Messages in Mendix](/howto50/clearing-warning-messages-in-mendix)
*   [Testing web services using SoapUI](/howto50/testing-web-services-using-soapui)
*   [Debugging Microflows](/howto50/debugging-microflows)
*   [Common Mendix SSO Errors](/howto50/common-mendix-sso-errors)
*   [Monitoring Mendix using JMX](/howto50/monitoring-mendix-using-jmx)
*   [Debugging Java Actions](/howto50/debugging-java-actions)
