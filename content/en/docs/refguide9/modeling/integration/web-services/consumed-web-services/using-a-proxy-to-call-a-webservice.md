---
title: "Using a Proxy to Call a Web Service"
url: /refguide9/using-a-proxy-to-call-a-webservice/
---

## Introduction

In some cases, you're stuck behind a firewall, and thus unable to call a webservice directly. This document shows you how to configure the JVM to use a proxy to call such services.

## Proxy Host and Proxy Port

There are two JVM parameters (system properties) that specify which proxy server to use. These are http.proxyHost and http.proxyPort
You can specify these in your .m2eerc under JVM parameters:

```java
...
# custom java options, like -Xmx256m or -Djava.foo=bar
 javaopts: [ ..., "-Dhttp.proxyHost=myproxyserver.com", "-Dhttp.proxyPort=3128"]
...

```

or directly (when calling from, for instance, eclipse):

```java
-Dhttp.proxyHost=myproxyserver.com  -Dhttp.proxyPort=3128

```

## Proxy User and Password

Some proxies require authentication. To specify the user and password, simply pass two JVM parameters:

```java
-Dhttp.proxyUser=myusername -Dhttp.proxyPassword=mypassword
```

## SSL

You can also connect while using a secure sockets layer (ie https). To configure the proxy, you need to specify **different** proxy settings to connect. These settings are called https.proxyHost and https.proxyPort. In addition, you need to import the ssl certificate of the proxy server into your Java keystore. More info can be found on the [Oracle website](https://download.oracle.com/javaee/1.4/tutorial/doc/Security6.html)

For more information, see the [Oracle documentation on proxies](https://download.oracle.com/javase/6/docs/technotes/guides/net/proxies.html).
