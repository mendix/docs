---
title: "프록시를 사용하여 웹 서비스 호출"
url: /refguide8/using-a-proxy-to-call-a-webservice/
---

## 소개

경우에 따라 방화벽 뒤에 있어 웹 서비스를 직접 호출할 수 없는 상황이 있습니다. 이 문서에서는 이러한 서비스를 호출하기 위해 프록시를 사용하도록 JVM을 구성하는 방법을 보여줍니다.

## 프록시 호스트 및 프록시 포트

사용할 프록시 서버를 지정하는 두 가지 JVM 파라미터(시스템 속성)가 있습니다. http.proxyHost 및 http.proxyPort입니다.
.m2eerc의 JVM 파라미터에서 이를 지정할 수 있습니다:

```java
...
# custom java options, like -Xmx256m or -Djava.foo=bar
 javaopts: [ ..., "-Dhttp.proxyHost=myproxyserver.com", "-Dhttp.proxyPort=3128"]
...

```

또는 직접(예를 들어 Eclipse에서 호출할 때):

```java
-Dhttp.proxyHost=myproxyserver.com  -Dhttp.proxyPort=3128

```

## 프록시 사용자 및 비밀번호

일부 프록시는 인증이 필요합니다. 사용자와 비밀번호를 지정하려면 두 개의 JVM 파라미터를 전달하면 됩니다:

```java
-Dhttp.proxyUser=myusername -Dhttp.proxyPassword=mypassword
```

## SSL

SSL(보안 소켓 레이어, 즉 https)을 사용하면서 연결할 수도 있습니다. 프록시를 구성하려면 연결을 위한 **다른** 프록시 설정을 지정해야 합니다. 이러한 설정은 https.proxyHost 및 https.proxyPort입니다. 또한 프록시 서버의 SSL 인증서를 Java 키스토어에 가져와야 합니다. 자세한 정보는 [Oracle 웹사이트](https://download.oracle.com/javaee/1.4/tutorial/doc/Security6.html)에서 확인할 수 있습니다.

## 참고 자료

[프록시에 관한 Oracle 문서](https://download.oracle.com/javase/6/docs/technotes/guides/net/proxies.html)
