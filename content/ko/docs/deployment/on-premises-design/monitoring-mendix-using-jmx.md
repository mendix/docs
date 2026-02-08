---
title: "JMX를 사용한 Mendix 모니터링"
url: /developerportal/deploy/monitoring-mendix-using-jmx/
description: "JMX로 Mendix Runtime을 시작하고, MBean을 사용하여 관리 정보 및 앱별 통계를 노출하는 방법을 설명합니다."
aliases:
    - /howto/monitoring-troubleshooting/monitoring-mendix-using-jmx/
---

## 소개

이 사용 방법 문서는 Mendix를 온프레미스에서 실행하는 경우에 해당합니다. 이 경우 모든 애플리케이션을 모니터링하는 데 사용하는 표준 모니터링 도구가 있을 것입니다.

Java 애플리케이션의 경우 대부분의 모니터링 도구는 애플리케이션에 대한 정보를 얻기 위해 [JMX](https://www.oracle.com/technetwork/java/javase/tech/javamanagement-140525.html)에 연결하는 방법을 제공합니다. 이 사용 방법 문서에서는 JMX를 사용하여 Mendix 애플리케이션에 대한 정보를 얻는 방법을 설명합니다.

Mendix는 런타임이나 애플리케이션별 MBean을 제공하지 않으므로, 자체 MBean을 작성하지 않으면 일반적인 JVM 통계만 모니터링할 수 있습니다. 이 사용 방법 문서에서는 Mendix Runtime에서 JMX를 활성화하는 방법과 Mendix Runtime 정보 및 앱별 정보를 노출하는 커스텀 MBean을 작성하는 방법도 설명합니다.

이 사용 방법 문서에서는 다음을 학습합니다:

* JMX를 사용하여 Mendix Runtime 시작
* MBean으로 관리 정보 노출
* MBean으로 앱별 통계 노출

## 전제 조건

없음.

## JMX가 활성화된 상태로 Mendix Runtime 시작

Mendix Runtime에서 JMX를 활성화하려면 Mendix Runtime의 *m2ee.yaml*에서 다음 Java 옵션을 사용할 수 있습니다:

```yaml
javaopts: [

"-Dfile.encoding=UTF-8", "-Xmx128M", "-Xms128M",

"-Djava.io.tmpdir=/tmp",

"-Dcom.sun.management.jmxremote",

"-Dcom.sun.management.jmxremote.port=7845",

"-Dcom.sun.management.jmxremote.local.only=false",

"-Dcom.sun.management.jmxremote.authenticate=false",

"-Dcom.sun.management.jmxremote.ssl=false",

"-Djava.rmi.server.hostname=192.168.1.70",

]
```

## 일반 Mendix 통계를 노출하는 MBean

관리 정보를 노출하는 가장 간단한 방법은 MBean 인터페이스와 해당 인터페이스를 구현하는 Java 클래스를 작성하는 것입니다. getter와 setter를 정의할 수 있지만, 일반 관리 도구에서 호출할 수 있는 메서드도 정의할 수 있습니다. 예를 들어, 실행 중인 애플리케이션에 구성 파일을 다시 로드하도록 지시하는 데 사용할 수 있습니다.

다음은 일부 일반 Mendix 정보에 대한 getter가 포함된 인터페이스의 예시인 *MxStatsMBean.java*입니다:

```java

package jmx.actions;

public interface MxStatsMBean {

public int getMaximumNumberConcurrentUsers() throws Exception;

public int getActionQueueSize();

public int getActiveActionCount();

public int getScheduledActionCount();

public long getNumberConcurrentSessions();

public long getCurrentUserCount();

public long getCompletedActionCount();

public long getNamedUserCount();

}
```

다음은 구현인 `MxStats.java`입니다. 메서드는 [Mendix Core](https://apidocs.rnd.mendix.com/4/runtime/classcom_1_1mendix_1_1core_1_1_core.html) 클래스를 호출하고 값을 반환합니다:

```java
package jmx.actions;

import com.mendix.core.Core;

 public class MxStats implements MxStatsMBean {

 public int getMaximumNumberConcurrentUsers() throws Exception {

 return Core.getMaximumNumberConcurrentUsers();

 }

 public int getActionQueueSize(){

 return Core.getActionQueueSize();

 }

 public int getActiveActionCount(){

 return Core.getActiveActionCount();

 }

 public int getScheduledActionCount(){

 return Core.getScheduledActionCount();

 }

 public long getNumberConcurrentSessions(){

 return Core.getNumberConcurrentSessions();

 }

 public long getCurrentUserCount(){

 return Core.getConcurrentUserCount(true);

 }

 public long getCompletedActionCount(){

 return Core.getCompletedActionCount();

 }

 public long getNamedUserCount(){

 return Core.getNamedUserCount();

 }
}
```

이제 JConsole에서 이 MBean에 의해 노출된 값의 결과를 확인할 수 있습니다:

{{< figure src="/attachments/deployment/on-premises-design/monitoring-mendix-using-jmx/18580003.png" class="no-border" >}}

## 앱별 통계를 노출하는 MBean

인터페이스와 구현 클래스를 사용하는 동일한 접근 방식으로 앱별 정보를 노출할 수 있습니다. 여기에서는 동적 값 집합을 노출하는 다른 접근 방식을 소개합니다. 메서드에서도 동일하게 할 수 있지만, 이 예시에서는 값을 검색하는 속성만 보여줍니다.

아이디어는 임의의 키-값 쌍을 노출하는 마이크로플로우(Microflow)에서 호출할 수 있는 Java Action을 갖는 것입니다.

## 더 읽기

* [런타임 오류의 근본 원인 찾기](/howto/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
* [경고 메시지 지우기](/howto/monitoring-troubleshooting/clear-warning-messages/)
* [SoapUI를 사용한 웹 서비스 테스트](/howto/testing/testing-web-services-using-soapui/)
* [JMX를 사용한 Mendix 모니터링](/howto/monitoring-troubleshooting/monitoring-mendix-using-jmx/)
* [원격으로 Java Action 디버깅](/howto/monitoring-troubleshooting/debug-java-actions-remotely/)
* [로그 레벨](/howto/monitoring-troubleshooting/log-levels/)
* [Java Action 디버깅](/howto/monitoring-troubleshooting/debug-java-actions/)
* [마이크로플로우 및 나노플로우 디버깅](/refguide/debug-microflows-and-nanoflows/)
* [원격으로 마이크로플로우 디버깅](/refguide/debug-microflows-remotely/)
* [원격으로 Java Action 디버깅](/howto/monitoring-troubleshooting/debug-java-actions-remotely/)
