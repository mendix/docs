---
title: "New Relic으로 앱 성능 관리하기"
url: /howto9/monitoring-troubleshooting/manage-app-performance-with-new-relic/
weight: 2
---

## 소개

애플리케이션이 원활하게 실행되도록 하려면, 다음을 수행할 수 있도록 정보가 제공되도록 적극적으로 모니터링해야 합니다:

* 성능 문제 방지
* 성능 문제 발생 시 진단

New Relic은 위의 목표를 달성하는 데 도움이 되는 정보를 제공하는 유연한 애플리케이션 성능 관리 도구입니다.

이 사용 방법 문서에서는 다음을 배울 수 있습니다:

* Mendix 애플리케이션을 위한 New Relic 애플리케이션 성능 관리 설정하기

## 전제 조건

이 사용 방법을 시작하기 전에 다음 전제 조건을 완료했는지 확인하십시오:

* 여기에서 가입하여 New Relic 계정을 생성하십시오: [https://newrelic.com/signup](https://newrelic.com/signup)

## 설정하기

이 섹션에서는 Mendix 애플리케이션의 [애플리케이션 성능 진단](/appstore/partner-solutions/apd/)에 사용할 수 있도록 New Relic을 구성하는 모든 단계를 안내합니다.

## New Relic 설정하기 (온프레미스 전용)

다음 단계는 온프레미스 배포에만 해당됩니다(Mendix 애플리케이션을 Cloud Foundry에 배포하는 경우 아래 [Cloud Foundry](#cloud-foundry) 섹션으로 건너뛰십시오).

1. New Relic에 로그인하고 새 애플리케이션을 생성하십시오:

    {{< figure src="/attachments/howto9/monitoring-troubleshooting/manage-app-performance/manage-app-performance-with-new-relic/19398929.png" class="no-border" >}}
2. Java를 선택하십시오:

    {{< figure src="/attachments/howto9/monitoring-troubleshooting/manage-app-performance/manage-app-performance-with-new-relic/19398930.png" class="no-border" >}}

3. Java 에이전트 아카이브를 다운로드하고 라이선스 키를 저장하십시오:

    {{< figure src="/attachments/howto9/monitoring-troubleshooting/manage-app-performance/manage-app-performance-with-new-relic/19398932.png" class="no-border" >}}

4. 다운로드한 아카이브의 *newrelic.yml* 파일에 라이선스 키를 추가하십시오. 자세한 내용은 [https://docs.newrelic.com/docs/agents/java-agent/installation/java-agent-manual-installation#h2-download-files](https://docs.newrelic.com/docs/agents/java-agent/installation/java-agent-manual-installation#h2-download-files)를 참조하십시오.

## Mendix 배포 설정하기

### Cloud Foundry {#cloud-foundry}

Cloud Foundry 배포를 위한 New Relic 설정은 이 빌드팩 지침을 따르십시오: [https://github.com/mendix/cf-mendix-buildpack#new-relic](https://github.com/mendix/cf-mendix-buildpack#new-relic).

### 온프레미스 Linux 및 Windows 서비스 콘솔

*m2ee.yaml* 파일의 `javaopts` 목록에 "-javaagent:<path-to-javaagent>javaagent.jar"를 추가하십시오. 예:

```java
 javaopts: [
   "-Dfile.encoding=UTF-8", "-Xmx512M", "-Xms512M",
   "-Djava.io.tmpdir=/srv/mendix/data/tmp",
   "-javaagent:/opt/newrelic/javaagent.jar"
 ]
```

### Mendix Studio Pro (개발 모드 전용)

1. Mendix 애플리케이션을 열고 **App Explorer**에서 **Settings**를 클릭하십시오.
2. 구성을 여십시오:

    {{< figure src="/attachments/howto9/monitoring-troubleshooting/manage-app-performance/manage-app-performance-with-new-relic/19398903.png" class="no-border" >}}

3. **Server** 탭의 **Extra JVM parameters** 필드에 `-javaagent:<path-to-javaagent>javaagent.jar`를 추가하십시오:

    {{< figure src="/attachments/howto9/monitoring-troubleshooting/manage-app-performance/manage-app-performance-with-new-relic/19398904.png" class="no-border" >}}

## 트랜잭션

위에서 설명한 단계를 완료한 후, Mendix 애플리케이션에서 처리하는 모든 요청이 다양한 그래프 및 통계와 함께 표시됩니다:

{{< figure src="/attachments/howto9/monitoring-troubleshooting/manage-app-performance/manage-app-performance-with-new-relic/19398943.png" class="no-border" >}}

## 데이터베이스

데이터베이스 호출과 쿼리가 이제 데이터베이스 페이지에 표시됩니다:
{{< figure src="/attachments/howto9/monitoring-troubleshooting/manage-app-performance/manage-app-performance-with-new-relic/19398944.png" class="no-border" >}}

## 추가 문서

New Relic에 대한 자세한 내용은 [New Relic 문서](https://docs.newrelic.com/)를 참조하십시오.

## 더 읽기

* [런타임 오류의 근본 원인 찾기](/howto9/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
* [Mendix에서 경고 메시지 지우기](/howto9/monitoring-troubleshooting/clear-warning-messages/)
* [JMX를 사용한 Mendix 모니터링](/howto9/monitoring-troubleshooting/monitoring-mendix-using-jmx/)
* [Java 액션 원격 디버깅](/howto9/monitoring-troubleshooting/debug-java-actions-remotely/)
* GitHub *cf-mendix-buildpack* 저장소의 [Telemetry Configuration](https://github.com/mendix/cf-mendix-buildpack#telemetry-configuration)
