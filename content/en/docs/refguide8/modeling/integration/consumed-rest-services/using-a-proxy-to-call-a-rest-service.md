---
title: "Using a Proxy to Call a REST Service"
url: /refguide8/using-a-proxy-to-call-a-rest-service/
tags: ["studio pro"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/using-a-proxy-to-call-a-rest-service.pdf).
{{% /alert %}}

## 1 Introduction

In some cases, you will be stuck behind a firewall and thus unable to call a REST service directly. This page shows you how to configure your app to use a proxy to call such services.

## 2 Proxy Host & Proxy Port

There are two parameters that specify which proxy server to use when making REST calls: `http.proxyHost` and `http.proxyPort`. Some proxies require authentication, which you may specify as `http.proxyUser` and `http.proxyPassword`.

You can either specify these as custom settings or as JVM parameters, which are described in the sections below.

{{% alert color="info" %}}
If you specify a setting both as a custom setting and as a JVM parameter, the custom setting will be used.
{{% /alert %}}

### 2.1 Custom Settings

REST proxy settings can be configured as custom settings on the **Project** > **Settings** > **Configurations** > **Custom** tab. For more information, see the [Custom](/refguide8/configuration/#custom) section of *Configurations*.

### 2.2 JVM Parameters

REST proxy settings can be configured in the **Project** > **Settings** > **Configurations** > **Server** tab > **Extra JVM parameters** field. For more information, see the [Server](/refguide8/configuration/#server) section of *Configurations*.

They can also be specified as JVM parameters in your *.m2eerc*. This is useful if you want to use these settings to also [consume web services](/refguide8/using-a-proxy-to-call-a-webservice/).

```java
...
# custom java options, like -Xmx256m or -Djava.foo=bar
 javaopts: [ ..., "-Dhttp.proxyHost=myproxyserver.com", "-Dhttp.proxyPort=3128", "-Dhttp.proxyUser=myusername" "-Dhttp.proxyPassword=mypassword" ]
...
```

They can also be specified directly when running locally from Studio Pro or calling from Eclipse:

```java
-Dhttp.proxyHost=myproxyserver.com  -Dhttp.proxyPort=3128 -Dhttp.proxyUser=myusername -Dhttp.proxyPassword=mypassword
```
