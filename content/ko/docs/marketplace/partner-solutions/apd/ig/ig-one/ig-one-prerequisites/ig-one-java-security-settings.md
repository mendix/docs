---
title: "Java 보안 설정"
url: /appstore/partner-solutions/apd/ig-one-java-security-settings/
---

## 소개

이 부록에서는 Mendix Modeler에서 보안을 시뮬레이션하는 방법과 필요한 Java 권한에 대해 설명합니다.

## Mendix Modeler에서 클라우드 보안 시뮬레이션

에뮬레이트된 클라우드 보안이 적용된 Mendix Modeler에서 애플리케이션을 실행하면 Log Tool, Trap Tool, Statistics Tool 및 Performance Tool을 사용할 수 있습니다. 추가 도구를 사용하려면 Java에서 추가 권한이 필요합니다. 다음 절차에서는 에뮬레이트된 클라우드 보안과 APMAgent에 필요한 보안 규칙을 더한 것과 동일한 보안을 시뮬레이션하도록 Mendix Modeler를 구성하는 방법을 설명합니다.

클라우드 보안과 APMAgent 권한을 시뮬레이션하는 절차:

1. 프로젝트 설정, 활성 구성, 서버 탭에서 에뮬레이트 클라우드 보안 옵션을 끕니다.

    {{< figure src="/attachments/appstore/partner-solutions/apd/ig/ig-one/ig-one-prerequisites/ig-one-java-security-settings/Java_Command_Line_Options.png" class="no-border" >}}

2. =<project-folder>\resources\apmtool\mx5\apm_cloud_template_mx5.policy 파일을 **<새 파일>**로 복사합니다. <project-folder>를 실제 프로젝트 폴더 경로로 바꿔서 파일을 변경합니다.
3. 프로젝트 설정, 활성 구성, 서버 탭의 추가 JVM 매개변수에 다음 스위치를 추가합니다:

    * `Djava.security.policy=="<project-folder>\resources\apmtool\mx5\apm_cloud_security_all.policy"`
    * `Dorg.osgi.framework.security=osgi`
    * `Dcom.mendix.policy.file="**<2단계의 새 파일>**"`

**참고.** 경로에 공백이 있는 경우 파일 이름 주위에 큰따옴표가 필요합니다!

## 필요한 Java 권한

온프레미스 설치의 경우 일반적으로 추가 Java 보안이 설정되지 않으므로 아무것도 할 필요가 없습니다. 그러나 내부 IT에서 Mendix Runtime을 실행하는 JVM에 보안을 설정한 경우 아래에 설명된 대로 내부 IT와 함께 Java에서 추가 권한을 준비해야 합니다.
다음은 Java에서 필요한 권한과 사용 용도입니다:

JVM Browser 및 JMX 기반 측정에는 다음 권한이 필요합니다:

* `permission javax.management.MBeanServerPermission "*";`
* `permission javax.management.MBeanPermission "**", "**";`
* `permission javax.management.MBeanTrustPermission "*";`
* `permission java.lang.management.ManagementPermission "monitor";`

Java 콘솔 출력 및 오류를 리라우팅하려면 다음 권한이 필요합니다:

* `permission java.lang.RuntimePermission "setIO"; // for java console`

Java util 로깅을 리라우팅하려면 다음 권한이 필요합니다:

* `permission java.util.logging.LoggingPermission "control"; // for java util`

Explain Plan을 사용하고 JDBC 쿼리를 실행하며 JDBC 쿼리 기반 측정을 사용하려면 다음 권한이 필요합니다:

* `permission java.net.SocketPermission "<server>:<port>", "connect"; // for JDBC`

라이선스 확인에서 호스트명을 사용하려면:

* `permission java.net.SocketPermission "<mx server>", "resolve"; // for license by hostname`

Measurements Tool을 사용하고 측정을 시작 및 중지하려면 다음 권한이 필요합니다:

* `permission java.lang.RuntimePermission "modifyThread"; // for dynamic scheduled events`
