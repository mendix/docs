---
title: "프록시를 사용하여 REST 서비스 호출"
url: /refguide8/using-a-proxy-to-call-a-rest-service/
---

## 소개

경우에 따라 방화벽 뒤에 있어 REST 서비스를 직접 호출할 수 없는 상황이 있습니다. 이 페이지에서는 이러한 서비스를 호출하기 위해 프록시를 사용하도록 앱을 구성하는 방법을 보여줍니다.

## 프록시 호스트 및 프록시 포트

REST 호출 시 사용할 프록시 서버를 지정하는 두 가지 파라미터가 있습니다: `http.proxyHost` 및 `http.proxyPort`. 일부 프록시는 인증이 필요하며 `http.proxyUser` 및 `http.proxyPassword`로 지정할 수 있습니다.

아래 섹션에 설명된 대로 사용자 정의 설정 또는 JVM 파라미터로 지정할 수 있습니다.

{{% alert color="info" %}}
사용자 정의 설정과 JVM 파라미터 모두에 설정을 지정하면 사용자 정의 설정이 사용됩니다.
{{% /alert %}}

### 사용자 정의 설정

REST 프록시 설정은 **Project** > **Settings** > **Configurations** > **Custom** 탭에서 사용자 정의 설정으로 구성할 수 있습니다. 자세한 정보는 *Configurations*의 [Custom](/refguide8/configuration/#custom) 섹션을 참조하십시오.

### JVM 파라미터

REST 프록시 설정은 **Project** > **Settings** > **Configurations** > **Server** 탭 > **Extra JVM parameters** 필드에서 구성할 수 있습니다. 자세한 정보는 *Configurations*의 [Server](/refguide8/configuration/#server) 섹션을 참조하십시오.

*.m2eerc*에서 JVM 파라미터로도 지정할 수 있습니다. 이는 이러한 설정을 사용하여 [웹 서비스를 소비](/refguide8/using-a-proxy-to-call-a-webservice/)하려는 경우에 유용합니다.

```java
...
# custom java options, like -Xmx256m or -Djava.foo=bar
 javaopts: [ ..., "-Dhttp.proxyHost=myproxyserver.com", "-Dhttp.proxyPort=3128", "-Dhttp.proxyUser=myusername" "-Dhttp.proxyPassword=mypassword" ]
...
```

Studio Pro에서 로컬로 실행하거나 Eclipse에서 호출할 때 직접 지정할 수도 있습니다:

```java
-Dhttp.proxyHost=myproxyserver.com  -Dhttp.proxyPort=3128 -Dhttp.proxyUser=myusername -Dhttp.proxyPassword=mypassword
```
