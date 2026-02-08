---
title: "구성"
url: /appstore/partner-solutions/apd/rg-one-configuration/
---

## 소개

이 장에서는 전역 구성과 **Start/Stop** 대화 상자를 설명합니다. 둘 다 헤더에서 선택할 수 있습니다. 헤더에는 문서를 여는 버튼과 APM 도구가 추가된 앱의 홈 페이지로 돌아가는 버튼도 있습니다.

## After Startup 구성

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-configuration/Configuration_After_Startup.png" class="no-border" >}}

이 탭에서는 **After startup** 후 실행할 도구를 결정합니다. Mendix Modeler에는 이러한 After startup 설정을 무시하고 관리자가 이러한 설정을 제어할 수 있게 하는 안전 상수가 포함되어 있습니다.

보호 기능으로, 시작 후 Log Tool이 실행되는 경우 **Maximum log level**을 설정할 수 있습니다. 이를 통해 시작 후 예기치 않게 높은 수준에서 Log Tool이 실행되는 것을 방지할 수 있습니다.

일부 경우 도구는 고정된 기간 동안 실행됩니다. 그러나 시작 후 실행은 보통 특정 도구를 항상 실행하고 싶다는 의미입니다. **Clear fixed period of time** After startup 옵션을 사용하면 시작 후에도 도구가 계속 실행되도록 할 수 있습니다.

## 라이선스 {#license}

APM은 구성 대화 상자의 버튼을 사용하여 이메일로 요청할 수 있는 애플리케이션 라이선스가 필요합니다. 이메일 클라이언트가 구성되지 않은 경우 **Manual license request** 버튼을 사용하고 텍스트를 [apmtool@clevr.com](mailto:apmtool@clevr.com)으로 보낼 이메일에 복사-붙여넣기할 수 있습니다.

라이선스는 앱별로 필요합니다. 모든 라이선스에는 만료 날짜가 있습니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-configuration/Configuration_License.png" class="no-border" >}}

라이선스 코드는 **License key** 필드에 입력합니다. **Expiry date** 필드는 자동으로 채워집니다. APM 주문 시 라이선스 요청 코드가 제공된 경우, 이 일회성 **License request code**를 입력하면 라이선스 요청 메일 발송 시 자동으로 라이선스를 획득할 수 있습니다.

## JDBC

JDBC 설정은 Query Tool에서 쿼리를 실행하고 Performance Tool에서 Explain Plan 쿼리를 사용하기 위한 것입니다. 보통 이러한 설정은 설치 중에 올바르게 결정되며 변경할 필요가 없습니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-configuration/Configuration_JDBC.png" class="no-border" >}}                       

**JDBC URL**은 설치 중에 자동으로 설정됩니다. 특수한 경우에 이 URL을 변경할 수 있습니다. URL에는 JDBC 문 실행 시 대체되는 변수를 포함할 수 있습니다. `$HostName`, `$PortNumber`, `$DatabaseName`, `$UserName` 및 `$Password`를 사용할 수 있습니다. 실행 시 현재 값으로 대체됩니다. 이를 통해 운영 데이터베이스 덤프를 로드한 후 테스트 환경에서 운영 데이터베이스에 연결하는 위험 없이 사용할 수 있습니다.

**Explain plan query**도 설치 중에 자동으로 설정됩니다. 이 쿼리는 Performance Tool의 Explain Plan 옵션과 함께 사용됩니다.

나머지 네 가지 옵션은 Query Tool에서 출력을 결정하고 타임아웃을 설정하는 데 사용됩니다.

## 데이터 정리

APM 도구에 의해 수집되고 저장된 모든 데이터를 빠르게 제거하려면 **Clean data** 탭의 버튼을 사용할 수 있습니다:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-configuration/Configuration_CleanData.png" class="no-border" >}}                       

## 기타 {#more}

일부 다른 기능 및 설정은 **More** 탭에서 확인할 수 있습니다:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-configuration/Configuration_More.png" class="no-border" >}}                       

### 대시보드

대시보드에 기본 측정 그래프를 선택할 수 있습니다.

### 트리거된 이벤트

Measurements Tool에서 트리거된 이벤트 데이터의 자동 정리가 여기서 구성됩니다.

또한 기본 **Triggers notify to**를 여기서 구성할 수 있습니다.

### 설정

다음을 수행할 수 있습니다:

* 설정 가져오기/내보내기
* 모든 설정을 전역적으로 운영, 비운영 또는 사용자 정의로 설정
* 샘플 데이터 재생성

## Start/Stop

도구를 수동으로 시작/중지하는 대화 상자가 추가되었습니다:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-configuration/StartStop.png" class="no-border" >}}                       

리라우팅 버튼은 다른 소스의 로그 메시지를 Mendix 로깅에 추가하여 모든 로그 정보가 결합되어 Log Tool과 Trap Tool에서 사용할 수 있게 합니다. 예를 들어: `javax.mail`은 디버그 출력을 `console(system.out)`으로 보냅니다. **Java console** 옵션을 활성화하면 디버그 출력이 캡처되어 Mendix 로깅에 제공됩니다.
