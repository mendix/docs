---
title: "Using a proxy to call a webservice"
url: /refguide7/using-a-proxy-to-call-a-webservice/
---


In some cases, you're stuck behind a firewall, and thus unable to call a webservice directly. This document shows you how to configure the JVM to use a proxy to call such services.

## Proxy host and proxy port

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

## Proxy user and password

Some proxies require authentication. To specify the user and password, simply pass two JVM parameters:

```java
-Dhttp.proxyUser=myusername -Dhttp.proxyPassword=mypassword
```

## SSL

You can also connect while using a secure sockets layer (ie https). To configure the proxy, you need to specify **different** proxy settings to connect. These settings are called https.proxyHost and https.proxyPort. In addition, you need to import the ssl certificate of the proxy server into your java keystore. More info can be found on the [Oracle website](http://download.oracle.com/javaee/1.4/tutorial/doc/Security6.html)

## References

[Oracle documentation on proxies](http://download.oracle.com/javase/6/docs/technotes/guides/net/proxies.html)
