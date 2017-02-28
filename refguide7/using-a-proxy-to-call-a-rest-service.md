---
title: "Using a proxy to call a REST service"
space: "Mendix 7 Reference Guide"
parent: "consumed-rest-services"
---

In some cases, you're stuck behind a firewall, and thus unable to call a REST service directly. 
This document shows you how to configure your app to use a proxy to call such services.

## Proxy host and proxy port

There are two parameters that specify which proxy server to use when making REST calls: 
http.proxyHost and http.proxyPort. Some proxies require authentication, which you may 
specify as http.proxyUser and http.proxyPassword.

You can either specify these as custom settings, or as JVM parameters (system properties).

### Custom settings

You can specify REST proxy settings as [custom server settings](configuration#custom). 

### JVM parameters

Alternatively, you can specify JVM parameters in your .m2eerc under JVM parameters. This is
useful if you want to use these settings to [consume webservices](using-a-proxy-to-call-a-webservice) 
too.

```java
...
# custom java options, like -Xmx256m or -Djava.foo=bar
 javaopts: [ ..., "-Dhttp.proxyHost=myproxyserver.com", "-Dhttp.proxyPort=3128", "-Dhttp.proxyUser=myusername" "-Dhttp.proxyPassword=mypassword" ]
...
```

or directly (when running locally from the Modeler or calling from Eclipse):

```java
-Dhttp.proxyHost=myproxyserver.com  -Dhttp.proxyPort=3128 -Dhttp.proxyUser=myusername -Dhttp.proxyPassword=mypassword
```

If specify a setting both as a custom setting and as a JVM parameter, the custom setting will be used.
