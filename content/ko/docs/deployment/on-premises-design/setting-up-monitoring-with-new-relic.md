---
title: "New Relic을 사용한 모니터링"
url: /developerportal/deploy/setting-up-monitoring-with-new-relic/
description: "고가용성을 위해 로드 밸런서 뒤에 Mendix를 설치하는 방법"
weight: 30
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 소개

온프레미스에서 Mendix 애플리케이션을 설정할 때 New Relic을 사용하여 고급 모니터링을 설정할 수 있습니다. 이는 Windows와 Linux 배포 모두에서 작동합니다. Mendix Cloud에서는 지원되지 않습니다.

## 전제 조건

이 사용 방법 문서를 시작하기 전에 다음 전제 조건을 완료하십시오:

1. [New Relic](https://newrelic.com/)에서 체험 계정을 설정하십시오.
2. [Java 에이전트 설치](https://docs.newrelic.com/docs/agents/java-agent/installation/java-agent-manual-installation)의 단계를 따르십시오.
3. 2단계에서 언급한 대로, Mendix 프로세스의 사용자가 접근할 수 있는 디렉토리(즉, 사용자 홈 디렉토리)에 *newrelic.zip* 파일의 압축을 해제하십시오.
4. 압축 해제된 디렉토리의 *newrelic.yml* 파일을 확인하고, 설정을 읽고 보안 영향을 이해하십시오.
5. 설치를 완료하기 위해 아래의 [Linux](#linux) 또는 [Windows](#windows) 관련 단계를 따르십시오.

## Linux 관련 단계 {#linux}

*m2ee.yaml* 파일의 Java 옵션에 `-javaagent:/PATH/TO/NEWRELIC.JAR`를 추가하십시오. 경로를 *newrelic.jar*의 실제 경로로 교체하십시오.

*m2ee.yaml*의 구성 섹션은 다음과 같아야 합니다:

```yaml
 javaopts: [
 "-Dfile.encoding=UTF-8", "-Xmx256M", "-Xms256M",
 "-Djava.io.tmpdir=/path/to/project/data/tmp",
 "-javaagent:/home/mendix-user/newrelic/newrelic.jar",
 ]
```

## Windows 관련 단계 {#windows}

Windows Service Console에서 Java 인수에 `-javaagent:/PATH/TO/NEWRELIC.JAR`를 추가하십시오:

{{< figure src="/attachments/deployment/on-premises-design/setting-up-monitoring-with-new-relic/18580677.png" class="no-border" >}}

{{% alert color="info" %}}
애플리케이션을 재시작한 후 데이터가 New Relic에 표시되어야 합니다. 이를 위해 애플리케이션이 New Relic 서버에 데이터를 전송해야 하므로 방화벽이 이 트래픽을 허용하도록 구성되어야 합니다.
{{% /alert %}}

## 더 읽기

* [런타임 오류의 근본 원인 찾기](/howto/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
* [Mendix에서 경고 메시지 지우기](/howto/monitoring-troubleshooting/clear-warning-messages/)
* [SoapUI를 사용한 웹 서비스 테스트](/howto/testing/testing-web-services-using-soapui/)
* GitHub의 *cf-mendix-buildpack* 저장소에서 [New Relic](https://github.com/mendix/cf-mendix-buildpack#new-relic)
