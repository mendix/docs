---
title: "Common Mendix SSO Errors"
category: 'Monitoring & Troubleshooting'
---

Below you will find solutions for some of the most common problems you may encounter when developing an AppCloud-enabled app.

## 1. 404 Not Found errors when navigating to /openid/login

A frequent cause of this issue is that the OpenID request handler is not enabled. It should be enabled on startup. To fix this, make sure that the `AppCloudServices.StartAppCloudServices` microflow is executed during the startup of your application. You can do this by setting it as the app's after-startup microflow, or by having the application's existing after-startup microflow trigger it.

## 2\. Realm verification errors

These are commonly caused by compatibility issues with JAR files in the `<projectpath>/userlib` directory of your project. You can refer to [this article](/refguide5/troubleshooting) for the most common compatibility issues.

## 3\. Related content

*   [Finding the Root Cause of Runtime Errors](finding-the-root-cause-of-runtime-errors)
*   [Clearing Warning Messages in Mendix](clearing-warning-messages-in-mendix)
*   [Testing web services using SoapUI](testing-web-services-using-soapui)
*   [Debugging Microflows](debugging-microflows)
*   [Common Mendix SSO Errors](common-mendix-sso-errors)
*   [Monitoring Mendix using JMX](monitoring-mendix-using-jmx)
*   [Debugging Java Actions](debugging-java-actions)
