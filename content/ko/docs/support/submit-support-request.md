---
title: "지원 요청 제출"
url: /support/submit-support-request/
weight: 20
description: "Mendix 지원팀이 요청을 처리하는 데 필요한 세부 정보를 설명합니다."
aliases:
    - /developerportal/support/submit-support-request/
    - /community-tools/support/submit-support-request/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#The anchor request-priority below is mapped, so it should not be removed or changed.
---

## 소개

Mendix 지원팀이 지원 요청을 접수하고 처리하려면 올바른 정보를 제공하는 것이 중요합니다. 이렇게 하면 요청 처리 속도가 빨라지고 Mendix 지원팀과의 불필요한 소통을 최소화할 수 있습니다. 아래의 세부 정보는 Mendix 지원팀이 인시던트 티켓을 처리하는 데 필요하고 사용하는 정보입니다.

{{% alert color="warning" %}}
긴급 프로덕션 인시던트의 경우 [전화](https://support.mendix.com)로 Mendix 지원팀에 문의하십시오.
{{% /alert %}}

## 요청 제출 전 유용한 링크 확인

새 Mendix 지원 요청을 제출하기 전에, 다음 리소스를 확인하여 질문에 이미 답변이 있는지 확인하십시오:

* [Mendix 커뮤니티](https://community.mendix.com/)
* [Mendix 문서](/)
* [Mendix 플랫폼 상태](https://status.mendix.com)

Mendix 커뮤니티 또는 Mendix 문서에서 질문에 대한 답변을 찾을 수 없는 경우, 지원 요청을 제출할 수 있습니다. Mendix 지원 포털은 요청 유형에 따라 관련 정보를 요청하여 티켓 생성을 안내합니다.

## 새 요청 제출 {#submitting}

Mendix 지원팀에 요청을 제출하려면 다음 단계를 따르십시오:

1. 티켓에 필요한 다음 정보를 준비하십시오:

    * 정확한 오류에 대한 상세 설명
    * 오류가 발생했을 때 수행한 작업에 대한 상세 설명
    * 원하는 목표에 대한 설명(선택 사항)
    * 영향을 받는 앱(자세한 내용은 [지원을 위한 앱 준비 방법](/support/prepare-your-app/)을 참조하십시오)

2. [Mendix 지원 포털](https://support.mendix.com)에 로그인합니다.
3. **Submit request**를 클릭합니다.
4. 드롭다운 메뉴에서 이슈를 선택합니다. 다음 이슈 중에서 선택할 수 있습니다:

    * **Request for Information** – Mendix에 대한 일반적인 질문
    * **Incident** – 앱이 다운되었거나 다른 플랫폼 문제가 발생한 경우
    * **Standard Change: Request New Licensed Node** – SAP Subscription Secret을 요청하는 경우가 아니라면 [새 앱 노드 요청](https://newnode.mendix.com) 앱을 사용하십시오
    * **Standard Change: Change On-Prem Licensed Node** – *기존* 앱에 대한 새 라이선스 키 요청(예: 새 하드웨어 구성이 있는 경우)
    * **Standard Change: Off-Board Licensed Node** – 더 이상 필요하지 않은 라이선스 노드 또는 앱 제거(모든 플랫폼에 적용), [여기](https://offboard.mendix.com/index.html)에서 요청을 생성하십시오
    * **Standard Change: Change Mendix Cloud Container Size** – 다운타임이 필요한 컨테이너의 모든 수직 확장 변경(예: 메모리 또는 데이터베이스 크기 변경)은 [여기](https://resize.mendix.com/index.html)에서 요청할 수 있습니다
    * **Standard Change: Change Mendix Cloud File Storage** – 파일 스토리지 크기 증가 또는 감소
    * **Standard Change: Change Mendix Cloud URL** – *사용자 정의가 아닌* Mendix URL 변경(예: *something.mendixcloud.com*)

        {{% alert color="info" %}}이 URL 변경은 이 앱의 *모든* 환경에 적용됩니다. 예를 들어, 프로덕션 환경은 *something.mendixcloud.com*이 되고 수락 환경은 *something-accp.mendixcloud.com*이 됩니다.{{% /alert %}}

    * **Standard Change: Assign Mendix Admin** – 기존 Mendix 사용자를 [Mendix 관리자](/control-center/company-settings/)로 지정
    * **Standard Change: Request ATS License** – ATS 사용 라이선스 획득(이 제품에 대한 자세한 내용은 [ATS](/appstore/partner-solutions/ats/)를 참조하십시오)
    * **Standard Change: Request APD License** – APD 사용 라이선스 획득(이 제품에 대한 자세한 내용은 [APD](/appstore/partner-solutions/apd/)를 참조하십시오)
    * **Standard Change: Reset Google authenticator** – [2FA](/developerportal/deploy/two-factor-authentication/)에 Google authenticator를 사용하는 경우 재설정(예: 새 전화기를 받은 경우)
    * **Standard Change** – 플랫폼에서 수행할 수 있지만 접근 권한이 없는 기타 변경 사항
    * **Non-Standard Change** – 위의 다른 이슈에 해당되지 않는 기타 모든 변경 사항

5. **Requests for Information** 또는 **Incidents**의 경우, 이슈에 대한 **Related Component**를 선택해야 합니다. 올바른 구성 요소를 선택하면 Mendix 지원팀이 더 효과적으로 도움을 드릴 수 있습니다. 경우에 따라 이슈에 대한 **Related Sub-Component**도 선택할 수 있습니다. 관련 하위 구성 요소를 선택하는 것은 필수가 아니지만, 더 빠르고 정확한 지원을 받을 수 있습니다. 관련 구성 요소에는 두 가지 주요 옵션이 있습니다:
    * **App** – Mendix 플랫폼에서 구축한 자체 앱의 설계, 개발, 빌드, 배포 또는 운영에 문제가 있는 경우 다음 구성 요소 중 하나를 선택하십시오:
        * **App - Development** – 앱 개발 관련 이슈/질문(예: [Domain Model](/refguide/domain-model/), [Widget](/refguide/data-widgets/) 또는 [로직](/refguide/application-logic/) 관련)
        * **App - Deployment** – 앱 배포 관련 이슈/질문(예: 앱을 [배포](/deployment/)할 수 없거나 시작되지 않는 경우)
        * **App - Operations** – 배포된 앱 실행 관련 이슈/질문(예: 앱이 충돌하거나 [로그](/developerportal/operate/logs/)에 오류가 표시되는 경우)
        * **App - Add-on** – Mendix 애드온 관련 이슈/질문([ATS](/appstore/partner-solutions/ats/), [APD](/appstore/partner-solutions/apd/) 또는 [AQM](/addons/aqm-addon/) 등)
        * **App - Security** - Mendix 앱의 보안 관련 이슈/질문
            앱 보안 티켓을 제기하기 전에 [보안 지원 티켓 요구 사항](#security-tickets) 섹션을 읽어 주십시오. 이 가이드라인을 따르면 티켓이 가능한 한 효율적으로 처리될 수 있습니다.
        * **App - Other** – Mendix 플랫폼에서 개발 중인 자체 앱에 관한 기타 모든 이슈/질문
    * **Developer Platform** – Mendix 플랫폼 자체에 문제가 있는 경우 다음 구성 요소 중 하나를 선택하십시오:
        * **Developer Platform - Account** – Mendix 계정 관련 이슈/질문(예: 계정 생성 또는 로그인에 어려움이 있는 경우)
        * **Developer Platform - Marketplace** - [Mendix Marketplace](/appstore/) 관련 이슈/질문(예: Marketplace에 새 모듈을 업로드하는 데 어려움이 있는 경우)
        * **Developer Platform - Apps** – [Apps](/developerportal/) 관련 이슈/질문(예: [스토리](/developerportal/project-management/epics/)를 생성하거나 스프린트를 시작할 수 없는 경우)
        * **Developer Platform - Academy** – [Mendix Academy](https://academy.mendix.com/) 관련 이슈/질문(예: 학습 경로를 열 수 없거나 모듈에 필요한 첨부 파일을 찾을 수 없는 경우)
        * **Developer Platform - Forum** – [Mendix 커뮤니티](https://community.mendix.com/) 관련 이슈/질문(예: 새 질문을 만들거나 답변을 추가할 수 없는 경우)
        * **Developer Platform - Cloud Portal** – [Mendix 포털에서의 배포](/developerportal/deploy/) 관련 이슈/질문(예: [로그](/developerportal/operate/logs/) 파일을 볼 수 없거나 환경을 [확장](/developerportal/deploy/scale-environment/)할 수 없는 경우)
        * **Developer Platform - Catalog** – [Catalog](/catalog/) 관련 이슈/질문(예: Catalog에 접근하는 데 어려움이 있는 경우)
        * **Developer Platform - Control Center** - [Control Center](/control-center/) 관련 이슈/질문(예: Control Center에서 애플리케이션을 비활성화하는 데 어려움이 있는 경우)
        * **Developer Platform - Support Portal** - [지원 포털](https://support.mendix.com/) 관련 이슈/질문(예: 지원 티켓을 생성하는 데 어려움이 있는 경우)
        * **Developer Platform - Other** – Mendix 플랫폼 자체에 관한 기타 모든 이슈/질문
    * **Licensing** – Mendix 라이선스 관련 이슈/질문이 있는 경우 이 구성 요소를 선택하십시오

6. [우선순위](#request-priority)를 포함하여 선택한 이슈 유형에 대한 다른 필드를 입력합니다.
7. 선택적으로, 문제를 진단하고 트러블슈팅하기 위해 Mendix 지원팀이 로그에 접근할 수 있도록 허용하는 체크박스를 활성화합니다.

    {{% alert color="info" %}}필수는 아니지만, 이 권한을 부여하는 것을 강력히 권장합니다. Mendix 지원팀이 효과적으로 도움을 드리는 능력을 크게 향상시키기 때문입니다. 이 권한이 없으면 발생한 문제를 진단하고 해결하기 어려울 수 있으며, Mendix 지원팀이 제공할 수 있는 지원 수준에 영향을 미칠 수 있습니다. 수집된 모든 로그는 티켓에 대한 도움을 제공하는 데만 엄격하게 사용되며 최대한 신중하게 처리됩니다.
    {{% /alert %}}

8. **Next**를 클릭하기 전에 모든 첨부 파일의 업로드가 완료되었는지 확인하십시오.

## 요청 우선순위 {#request-priority}

요청에 적합하다고 생각하는 우선순위를 선택할 수 있습니다. 이 우선순위에 대한 [SLA 규정](/support/#sla)을 참고하십시오.

우선순위는 영향도와 긴급도의 조합을 기반으로 합니다:

| 영향도 | 설명 |
| ------- | ------- |
| 높음   | 고객의 비즈니스에 높은 영향을 미치는 고우선순위 프로덕션 이슈로, (거의) 모든 사용자에게 영향을 미칩니다. |
| 중간   | 고객의 비즈니스에 중간 정도의 영향을 미치는 프로덕션 이슈로, 일부 사용자 그룹에 영향을 미칩니다. |
| 낮음   | 고객의 비즈니스에 영향을 미치지 않는 사소한 프로덕션 이슈입니다. |

| 긴급도 | 설명 |
| ------- | ------- |
| 높음   | 운영 기능이 심각하게 중단되었습니다. |
| 중간   | 운영 기능이 상당히 중단되었습니다. |
| 낮음   | 운영 기능이 거의 중단되지 않았습니다. |

다음 수준으로 우선순위를 설정할 수 있습니다:

* **Critical**
* **High**
* **Medium**
* **Low**

Mendix 지원팀이 검증하는 [티켓 우선순위](/support/ticket-priority/)는 이 매트릭스를 기반으로 합니다:

{{< figure src="/attachments/support/submit-support-request/204371729-pic5.png" class="no-border" >}}

## 첨부 파일, 로그 및 추가 정보 제공

첨부 파일, 로그 및 추가 정보를 제공하면 지원 프로세스를 간소화하는 데 도움이 됩니다. 다음 시나리오에서는 어떤 추가 정보를 제공해야 하는지 나열합니다.

### 첨부 파일

요청에 앱 파일과 같은 대용량 첨부 파일을 추가할 수 있습니다. 개인 식별 데이터, 신용 카드 정보 또는 기타 민감한 데이터가 포함된 파일은 첨부하지 않는 것을 권장합니다.

{{% alert color="info" %}}
Mendix 지원 요청에 추가된 첨부 파일은 365일 후에 자동으로 삭제됩니다.
{{% /alert %}}

첨부 파일은 보안 파일 전송 서비스인 SendSafely를 통해 업로드됩니다. 네트워크에서 SendSafely가 차단될 수 있으며, 이 경우 위젯이 표시되지 않습니다. 이 경우 페이지에 `Could not render widget 'SupportPortal.SendSafely.sendSafelyDropzone1'` 오류가 표시됩니다.

이 오류를 해결하려면 네트워크 보안 설정에서 다음 URL이 허용 목록에 포함되어 있는지 확인하십시오:

* `https://mendix.sendsafely.eu`
* `https://static-mendix.sendsafely.eu`
* `https://sendsafely-dual-region-eu.s3-accelerate.amazonaws.com`

### 로그

지원 요청을 제출할 때 앱 로그를 제공하는 것이 중요합니다. 이를 통해 지원팀이 문제를 더 잘 평가하고 수정할 수 있습니다. 다음 섹션에는 배포 모델별 로그 검색 정보가 포함되어 있습니다.

#### Mendix Cloud에 배포된 앱의 로그 검색

Mendix Cloud에 배포된 앱의 로그를 검색하려면 [로그](/developerportal/operate/logs/) 페이지의 단계를 따르십시오.

#### Windows에 배포된 앱의 로그 검색

Windows에 배포된 앱의 로그를 검색하려면 다음 단계를 따르십시오:

1. Mendix Service Console에서 로그를 검색할 앱을 선택한 후 **Preferences**를 클릭합니다.
    **Preferences** 대화 상자가 표시됩니다.
2. **Preferences** 대화 상자에서 **Location of apps and server files** 필드를 확인합니다. 이것이 로그가 위치한 경로입니다.
3. 해당 경로로 이동하여 **Apps** > **{AppName}** > **Log** 폴더에 접근합니다. **{AppName}**은 로그를 검색할 앱의 이름을 나타냅니다.
    앱 로그 및 M2EE 로그는 *.txt* 형식으로 제공됩니다.

#### SAP에 배포된 앱의 로그 검색

SAP에 배포된 앱의 로그를 검색하려면 다음 단계를 따르십시오:

1. Mendix 포털에서 [Apps](https://sprintr.home.mendix.com)의 SAP에 배포된 앱으로 이동하고 **Environments**를 클릭합니다.
2. 세부 정보를 보려는 환경 옆의 **Details** ({{% icon name="notes-paper-edit" %}})를 클릭합니다.
3. **View Recent Log**를 클릭합니다.

**Debug**, **Info**, **Trace** 및 **Warning** 로그를 검색하려면 앱에 [SAP Logging Connector](/appstore/modules/sap/sap-logger/)가 구성되어 있어야 합니다.

또는 SAP BTP에서 로그를 검색할 수 있습니다. 자세한 내용은 *SAP BTP의 Mendix 앱 환경 모니터링*의 [로그 보기](/developerportal/deploy/sap-cloud-platform/sap-monitoring/#viewing-the-logs) 섹션을 참조하십시오.

#### Kubernetes에 배포된 앱의 로그 검색

Mendix on Kubernetes에 배포된 앱의 로그를 검색하려면 *Mendix on Kubernetes 클러스터에 Mendix 앱 배포*의 [지원 티켓을 위한 진단 데이터 수집](/developerportal/deploy/private-cloud-deploy/#collecting-diagnostic-data-for-a-support-ticket) 섹션의 단계를 따르십시오.

### 보안 지원 티켓 요구 사항{#security-tickets}

보안 발견 사항이나 기타 보안 관련 이슈(예: 검사 도구에서 발행한 경고)를 보고하는 경우, 티켓이 가능한 한 효율적으로 처리될 수 있도록 다음 단계를 따르십시오.

1. 다음 중 하나를 사용하고 있는지 확인하십시오:
    * Mendix의 현재 주요 버전, 보안 업데이트가 계속 제공되는 [MTS](/releasenotes/studio-pro/lts-mts/#mts) 마이너 버전을 권장합니다.
    * 지원 종료에 도달하지 않은 이전 주요 버전의 [LTS](/releasenotes/studio-pro/lts-mts/#lts) 버전.
1. 보안 발견 사항이 Marketplace 구성 요소에 있는 경우:
    1. 플랫폼에서 지원하는 구성 요소인지 확인하십시오 — 커뮤니티 지원 구성 요소는 Mendix 지원팀에서 지원하지 않습니다.
    1. 구성 요소가 최신 상태인지 확인하십시오.
1. [자주 묻는 질문 - 보안](/support/security-findings-faq/) 문서를 검토하여 발견 사항이 설명되어 있는지 확인하십시오. Java 라이브러리 업데이트 및 정리를 포함하여 발견 사항을 완화하기 위한 지침을 따르십시오. 발견 사항이 앱에 보안 영향이 없는 것으로 설명되어 있다면 티켓을 제기해도 추가 정보를 얻을 가능성이 낮습니다.
1. 이슈가 검사 도구에 의해 보고된 경우, 결과가 Mendix 앱 외부의 요인(예: 도구 설정 또는 네트워크 트래픽 라우팅 문제)에 의해 발생하지 않았는지 확인하십시오.
1. 다음 정보를 포함하십시오:
    * 발견된 이슈에 대한 설명 — 지원 티켓당 하나의 발견 사항만 제출하십시오.
    * 이슈가 발견된 위치 — 예: 어떤 URL, 어떤 Mendix 버전, App/project ID?
    * 이슈가 발견된 방법 — 예: 앱을 검사하여 발견한 것인지, 그렇다면 어떤 도구를 사용했는지?
    * 보고된 이슈를 포함하는 앱의 사본 — 앱 패키지 생성 방법은 [Mendix 앱 패키지 내보내기 방법](/refguide/export-app-package-dialog/)을 참조하십시오.
    * 가능한 경우, 취약점을 재현하고 악용하는 방법을 보여주는 단계를 포함한 실제 악용 시나리오.

{{% alert color="info" %}}
Mendix 지원팀은 Mendix 플랫폼에 대한 보안 발견 사항만 수용합니다. 여기에는 Mendix 런타임, 모든 플랫폼 지원 구성 요소, 앱 설계, 개발, 배포 및 모니터링을 지원하기 위해 제공되는 Mendix 애플리케이션, 사용자 및 리소스 관리에 사용되는 Mendix 애플리케이션이 포함됩니다. Mendix 지원팀은 마케팅 웹사이트와 관련된 보안 발견 사항은 조사하지 않습니다.
{{% /alert %}}

### 클라우드 문제 및 배포 이슈

* 로그 파일(*.txt*)
* 인시던트 발생 날짜 및 시간

### Team Server 문제 및 앱 이슈

* [프로젝트 ID](/developerportal/settings/general-settings/)

### Studio Pro 문제

* Mendix 버전
* 테스트 앱(자세한 내용은 [Mendix 앱 패키지 내보내기 방법](/refguide/export-app-package-dialog/)을 참조하십시오)
* 재현 가능한 단계

### Marketplace 콘텐츠 문제 및 모듈, Widget, 테마 이슈

* Marketplace 구성 요소 이름
* Mendix 버전
* 테스트 앱(자세한 내용은 [Mendix 앱 패키지 내보내기 방법](/refguide/export-app-package-dialog/)을 참조하십시오)
* 재현 가능한 단계

{{% alert color="info" %}}
모든 Marketplace 콘텐츠가 모든 버전의 Studio Pro와 호환되는 것은 아니며, 모든 Marketplace 콘텐츠가 Mendix에서 지원되는 것도 아닙니다. 자세한 내용은 *Marketplace 개요*의 [Marketplace 콘텐츠 지원](/appstore/marketplace-content-support/) 섹션을 참조하십시오.
{{% /alert %}}

### 모바일 문제

* 운영 체제 및 버전(Android x.x 또는 iOS x.x, 예: Android 6.1)

### 브라우저 문제

* 운영 체제(Windows x 또는 iOS x, 예: Windows 10)
* 브라우저 이름 및 버전(Chrome x.x, Firefox x.x, IE x.x 또는 Safari x.x, 예: Chrome 54.0.2840.99)

## 요청 개요

화면 오른쪽 상단의 이름을 클릭하면 **My activities**를 선택하여 제출한 모든 요청(**My requests**)과 접근 권한이 있는 앱에 제출된 모든 요청을 볼 수 있습니다.

{{< figure src="/attachments/support/submit-support-request/activities.png" class="no-border" >}}

**All requests** 탭에서 앱에 대해 **Follow**를 클릭하면 해당 특정 앱의 요청에 대한 모든 변경 사항을 알림 받을 수 있습니다.

{{< figure src="/attachments/support/submit-support-request/follow.png" class="no-border" >}}

## 티켓 조회 및 업데이트

개요에서 특정 요청을 쉽게 열거나 **Search** 옵션을 사용하여 요청을 검색할 수 있습니다. 티켓을 열면 티켓 담당자에게 댓글을 추가하거나 새 첨부 파일을 추가할 수 있습니다.

티켓은 다음 상태를 가질 수 있습니다:

* **Open** – 티켓이 Mendix 지원 부서에 있습니다
* **Pending** – 티켓이 여러분의 답변을 기다리고 있습니다
    * Mendix 지원 포털이 자동으로 티켓을 닫기 전에 알림 이메일을 한 번 받게 됩니다
    * 답변하면 티켓이 자동으로 다시 **Open** 상태가 됩니다
* **On-hold** – 티켓이 Mendix 2차 지원으로 전달되었습니다
    * 2차 지원에서 응답을 받으면 R&D 상태와 계획된 버전에 대해 알림을 받게 됩니다
* **Solved** – 티켓이 해결되었습니다
    * 답변하면 티켓이 자동으로 다시 열립니다
    * **Please consider this request solved** 체크박스를 체크하여 직접 티켓을 닫을 수 있습니다
    * 설정된 일수가 지나면 댓글에 대해 티켓이 자동으로 닫히며, 이후 후속 티켓을 생성할 수 있습니다

{{< figure src="/attachments/support/submit-support-request/request.png" class="no-border" >}}

## 기능 요청 제출

[Mendix 커뮤니티](https://community.mendix.com/p/ideas)에서 Mendix는 Mendix 커뮤니티의 고객과 개발자의 아이디어와 요청을 수집합니다. 매 분기마다 Mendix 커뮤니티는 가장 많은 추천을 받은 주제로 지원되는 상위 기능의 후보 목록으로 취급됩니다.

## 추가 읽기

* [티켓 우선순위](/support/ticket-priority/)
* [에스컬레이션 관리 프로세스](/support/escalation-management-process/)
