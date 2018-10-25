---
title: "CORS Settings"
parent: "published-rest-services"
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="info" %}}

The CORS settings feature was introduced in Mendix version 7.18.0.

{{% /alert %}}

## 1 Introduction

When you enable CORS in a [published REST service](published-rest-service), by default all websites on all servers are allowed to access your service. The **CORS Settings** dialog box allows you to configure this type of access on a more detailed level.

## 2 Allowed Origins

Here you can specify which websites are allowed to access your service. You can either select **All**, or specify a constant that contains a comma-separated list of host names.

## 3 Max Age

Here you can choose how long a browser is allowed to remember these settings before checking whether there are new CORS settings. A longer time is good for performance, because the browser will perform fewer requests. However, if you change the CORS settings, these changes will not take effect in all browsers until this time has passed.

## 4 Allow Credentials

Check this box to indicate that the browser is allowed to send cookies, authorization headers, and/or client certificates to this service.
