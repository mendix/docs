---
title: "CORS settings"
parent: "published-rest-services"
---

{{% alert type="info" %}}

The **CORS settings** feature was introduced in version 7.18.0.

{{% /alert %}}

## 1 Introduction

When you enable CORS in a [published REST service](published-rest-service), by default all websites on all servers are allowed to access your service. The CORS settings dialog allows you to configure this type of access on a more detailed level.

## 2 Allowed Origins

Here you can specify which websites are allowed to access your service. You can either select **All**, or specify a constant that contains a comma-separated list of host names.

## 3 Max Age

Here you can choose how long a browser is allowed to remember these settings before checking whether there are new CORS settings. A longer time is good for performance, because the browser will perform fewer requests. However, if you change the CORS settings, these changes will not take effect in all browsers until this time has passed.

## 4 Allow Credentials

Check this box to indicate that the browser is allowed to send cookies, authorization headers and/or client certificates to this service.
