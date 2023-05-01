---
title: "Using a Proxy to Call a REST Service"
url: /refguide7/using-a-proxy-to-call-a-rest-service/
---

In some cases you will be stuck behind a firewall and thus unable to call a REST service directly. This document shows you how to configure your app to use a proxy to call such services.

## Proxy Host and Proxy Port

There are two parameters that specify which proxy server to use when making REST calls: `http.proxyHost` and `http.proxyPort`. Some proxies require authentication, which you may specify as `http.proxyUser` and `http.proxyPassword`.

You can either specify these as custom settings or as JVM parameters (system properties).

## Custom Settings

For details on specifying REST proxy settings as custom server setting, see [Configuration](/refguide7/configuration/#custom). 

## JVM Parameters

Alternatively, you can specify JVM parameters in your `.m2eerc` under JVM parameters. This is useful if you want to use these settings to [consume web services](/refguide7/using-a-proxy-to-call-a-webservice/) too.

```java
...
# custom java options, like -Xmx256m or -Djava.foo=bar
 javaopts: [ ..., "-Dhttp.proxyHost=myproxyserver.com", "-Dhttp.proxyPort=3128", "-Dhttp.proxyUser=myusername" "-Dhttp.proxyPassword=mypassword" ]
...
```

Or directly (when running locally from the Modeler or calling from Eclipse):

```java
-Dhttp.proxyHost=myproxyserver.com  -Dhttp.proxyPort=3128 -Dhttp.proxyUser=myusername -Dhttp.proxyPassword=mypassword
```

If specify a setting both as a custom setting and as a JVM parameter, the custom setting will be used.
