---
title: "Iframes and Running Apps"
url: /developerportal/deploy/running-in-iframe/
weight: 40
description: "Issues to take into consideration when running apps in an iframe"
tags: ["iframe", "samesite", "cookies", "x-frame-options"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/developerportal/running-in-iframe.pdf).
{{% /alert %}}

## 1 Introduction

By default, a Mendix app is blocked from running inside an iframe. This is to protect the end-user from attacks using *clickjacking*. There is more information on this in the [Adding HTTP Headers](/howto/security/best-practices-security/#adding-http-header) section of *How To Implement Best Practices for App Security*.

You can enable your app to run inside an iframe by setting the X-Frame-Options HTTP header for your node’s environment. For the Mendix Cloud, this can be done within the Mendix Developer Portal, as described in the [HTTP Headers](/developerportal/deploy/environments-details/#http-headers) section of *Environment Details*.

## 2 Resolving Browser Issues

Most browsers have additional security to ensure that iframes are only allowed when they are from the same domain as the main page. If your app does not have the same domain as the main page containing the iframe, it will only run if the *SameSite* cookie is set to allow this. You can find a good explanation of SameSite cookies in [SameSite cookies explained](https://web.dev/samesite-cookies-explained/) on the *web.dev* website.

When running your app in the Mendix Cloud, you can set the SameSite cookie through a custom runtime setting as explained in the [Running Your App in an Iframe](/developerportal/deploy/environments-details/#iframe) section of *Environment Details*.

If your app is deployed outside the Mendix Cloud (on premises, for example), then you will need to configure your webserver to set the SameSite cookie to the correct value.
