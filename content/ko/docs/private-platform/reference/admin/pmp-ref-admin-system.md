---
title: "Private Mendix Platform 기능 - 시스템 관리자"
linktitle: "시스템 관리자"
url: /private-mendix-platform/reference-guide/admin/system/
description: "시스템 관리자가 사용할 수 있는 Private Mendix Platform의 기능에 대한 세부 정보를 제공합니다."
weight: 20
---

## 소개

Private Mendix Platform에서 시스템 관리자는 주로 초기 구현 시 구성해야 하는 핵심 설정을 관리하며, 정상 운영 중에는 거의 수정되지 않습니다. 시스템 관리자와 관련된 설정은 관리자 탐색 메뉴의 [설정](#settings) 섹션에서 사용할 수 있습니다.

## 구성 설정 접근

시스템 관리자 접근 권한이 있는 사용자로서 다음 단계를 수행하여 Private Mendix Platform 구성 설정에 접근할 수 있습니다:

1. 화면 오른쪽 상단의 프로필 사진을 클릭하고 **Switch to Admin Mode**를 선택하여 관리자 모드로 전환하십시오.
2. 왼쪽 탐색 메뉴에서 **Settings** 섹션을 여십시오.

## 설정 {#settings}

관리자 탐색 메뉴의 **Settings** 섹션에는 시스템 관리자로서의 일상 업무와 관련된 설정이 포함되어 있습니다. 이를 사용하여 브랜딩, 라이선스, Marketplace 설정 및 버전 관리 설정을 관리할 수 있습니다.

여기에서 구성하는 일부 설정은 [Private Platform 구성 마법사](/private-mendix-platform/quickstart/#wizard)에 의해 초기에 설정됩니다. 시스템 관리자는 초기 구성 이후 언제든지 이를 업데이트할 수 있습니다.

### 기본 설정

일반 구성 설정을 통해 플랫폼 이름 및 브랜딩, 특정 기능 켜기/끄기, 버전 지원 설정 등 Private Mendix Platform의 기본적인 측면을 관리할 수 있습니다. 이 섹션의 설정은 초기 구성 마법사를 실행할 때 대부분 구성되지만, 구현 과정에서 나중에 검토하고 조정할 수 있습니다.

#### 일반

**General** 탭에서 조직에 대한 정보를 구성하고, 선택적으로 Private Mendix Platform 구현에 함께 작업하는 인증된 Mendix 파트너에 대한 정보도 구성할 수 있습니다. 로캘 설정도 구성할 수 있습니다.

{{% alert color="info" %}}
로캘을 변경하면 선택한 로캘의 기본 형식으로 날짜 및 시간과 같은 로캘 종속 형식이 설정됩니다. 이 설정은 Platform을 통해 생성된 앱이 아닌 Private Mendix Platform(예: Marketplace 또는 Mendix Portal)에 적용됩니다.
{{% /alert %}}

##### 브랜딩

이 섹션의 설정을 통해 Private Mendix Platform의 맞춤 브랜딩을 구성할 수 있습니다. 상단 바에 표시되는 플랫폼 제목을 맞춤 설정하거나, 로고를 업로드하거나, 로그인 페이지의 이미지를 변경할 수 있습니다. 또한 사용자에게 개인정보 또는 보안에 대한 정보를 전달하기 위해 앱의 로그인 페이지 전, 중 또는 후에 표시되는 접근 배너를 구성할 수 있습니다.

##### 지원

이 섹션에서 Private Mendix Platform 사용자를 위한 자체 도움말 및 지원 지침을 제공할 수 있습니다.

{{< figure src="/attachments/private-platform/pmp-wizard1.png" class="no-border" >}}

사용자는 앱의 **Logs and Events** 페이지에서 이 지침을 확인할 수 있습니다.

##### 설정 내보내기

Private Mendix Platform 설정을 JSON 구성 파일로 내보내 백업하거나 새 Private Mendix Platform 인스턴스의 구현을 가속화할 수 있습니다.

설정은 플랫폼의 초기 구성 중에만 가져올 수 있습니다. 데이터 무결성과 플랫폼 안정성을 보장하기 위해 이미 구성되어 실행 중인 인스턴스로 가져올 수 없습니다.

#### 알림

알림 설정을 통해 Private Mendix Platform에서 생성하는 알림을 관리할 수 있습니다. 이 설정은 시스템이 알림을 발송할 수 있도록 하는 데 필요합니다.

##### 일반

현재 릴리스의 Private Mendix Platform에서는 알림이 플랫폼 자체에 표시됩니다. 향후 버전에서는 이메일 및 푸시 알림도 활성화할 수 있습니다.

##### 관리 작업

이 탭에서 예약된 이벤트 큐 정리를 트리거할 수 있습니다.

#### Marketplace

Private Mendix Platform의 경우 Marketplace도 프라이빗이며 플랫폼 자체 내에서 완전히 호스팅됩니다. 이 섹션의 설정을 통해 프라이빗 Marketplace에 콘텐츠를 게시하고 다운로드하기 위한 관리 설정을 구성할 수 있습니다.

##### 콘텐츠 승인

이 탭에서 사용자가 프라이빗 Marketplace에 게시하는 콘텐츠에 게시 전 관리자 승인이 필요한지 여부를 구성할 수 있습니다. 모든 [대기 중, 게시됨 및 거부된 콘텐츠 항목](/private-mendix-platform/reference-guide/admin/company/#content)을 보려면 **Go to Marketplace Management**를 클릭하십시오.

##### 콘텐츠 가져오기 {#import}

콘텐츠 패키지와 *package.json* 파일이 포함된 zip 파일을 가져와 프라이빗 Marketplace를 채울 수 있습니다. Content Delivery Network에서 파일을 업로드하거나 로컬 머신에서 수동으로 업로드할 수 있습니다.

{{< figure src="/attachments/private-platform/pmp-admin9.png" class="no-border" >}}

###### Marketplace 콘텐츠 수동 가져오기

자체 컴퓨터에서 콘텐츠 번들을 수동으로 업로드하려면 다음 단계를 수행하십시오:

1. zip 파일로 제공되는 콘텐츠가 포함된 Marketplace Bundle을 다운로드하십시오. 번들에 접근할 수 없는 경우 Mendix 담당자에게 문의하십시오.
2. **Upload Marketplace Bundle**을 클릭하여 **Import Content** > **Upload Marketplace Bundle** 탭으로 이동하십시오.
3. [회사 관리자](/private-mendix-platform/reference-guide/admin/company/#manual-upload)에 설명된 단계를 따르십시오.

###### CDN에서 Marketplace 콘텐츠 가져오기 {#configure-import}

Content Delivery Network에서 콘텐츠 가져오기를 활성화하려면 다음 단계를 따르십시오:

1. zip 파일로 제공되는 콘텐츠가 포함된 Marketplace Bundle을 다운로드하십시오. 번들에 접근할 수 없는 경우 Mendix 담당자에게 문의하십시오.
2. Private Mendix Platform이 HTTP 또는 HTTPS를 통해 접근할 수 있는 내부 위치에 파일의 압축을 해제하십시오. 디렉터리 구조를 변경하지 마십시오.
3. 내부 위치에 자체 서명 인증서를 사용하는 경우 Mendix Operator가 프라이빗 인증 기관을 신뢰하도록 구성하십시오. 자세한 내용은 [Mendix on Kubernetes 클러스터 생성](/developerportal/deploy/standard-operator/#custom-tls)을 참조하십시오.
4. **Content Import** 탭의 **Marketplace import bundle URL** 필드에 Marketplace 다운로드에 포함된 *package.json* 파일의 루트 URL을 입력하십시오.

    예를 들어 *package.json*이 URL `https://<your domain>/release/marketplace/Marketplace-1.0/package.json`에서 접근할 수 있는 경우 다음 URL을 입력하십시오: `https://<your domain>/release/marketplace/Marketplace-1.0/`.

    {{< figure src="/attachments/private-platform/pmp-config3.png" class="no-border" >}}

5. **Authentication** 토글을 **ON**으로 설정한 다음 번들을 다운로드하는 데 필요한 사용자 이름과 비밀번호를 지정하십시오.
6. **Save**를 클릭하여 이 번들에서 콘텐츠 가져오기를 활성화하십시오.
7. **Go to Marketplace Import**를 클릭하여 **Import Content** > **Import from CDN** 탭에서 사용 가능한 다운로드를 확인하십시오.

#### 버전 지원

이 섹션에서 사용자가 다운로드할 수 있는 Mendix Studio Pro 버전을 보거나 비활성화할 수 있습니다.

### 통합

관리자 메뉴의 **Integrations** 섹션에서 ID 및 접근, 버전 관리, CI/CD 등과 관련된 설정을 구성할 수 있습니다.

#### ID 및 접근

이 섹션에서 Private Mendix Platform에 로그인하는 사용자에 대한 SSO 인증을 구성할 수 있습니다. OIDC 및 SAML이 프로토콜로 지원됩니다.

##### IdP 통합 (OIDC)

OIDC 프로토콜로 SSO 인증을 구성할 수 있습니다. 자세한 내용은 [앱에서 IdP의 런타임 구성](/appstore/modules/oidc/#runtime-idp-app)을 참조하십시오.

##### IdP 통합 (SAML)

[SAML 프로토콜로 SSO 인증을 구성](/appstore/modules/saml/)하려면 먼저 **SP Configuration** 탭에서 서비스 공급자를 구성한 다음 **IdP Configuration** 탭에서 IdP 관련 설정을 만드십시오.

구성을 디버그하려면 **Log** 탭에서 로그 파일을 볼 수 있습니다.

##### OIDC 공급자

이 탭의 설정은 Studio Pro와 플랫폼 간의 연결을 제어합니다. 플랫폼에 대한 고급 지식 없이는 변경해서는 안 됩니다. Studio Pro로 로그인하는 데 문제가 있는 경우 Private Platform 포털을 중지하고 재시작하십시오.

##### SCIM 프로비저닝

SCIM(System for Cross-Domain Identity Management)은 애플리케이션에 대한 사용자 접근 관리를 간소화하는 프로토콜입니다. Private Mendix Platform은 SCIM 표준을 사용하여 사용자가 먼저 SSO를 통해 수동으로 로그인하지 않고도 플랫폼에 선택된 사용자를 사전 프로비저닝합니다.

SCIM 프로비저닝을 활성화하려면 다음 단계를 수행하십시오:

1. Private Mendix Platform에 관리자로 로그인하십시오.
2. **Authentication** 섹션에서 **IdP Integration (OIDC)** 또는 **IdP Integration (SAML)** 탭을 클릭하십시오.
3. IdP 구성을 편집한 다음 **Provisioning** 탭을 클릭하십시오.
4. **Just in time provisioning** 섹션에서 IdP 속성을 일치하는 Mendix 개체 속성에 매핑하십시오.
5. **Authentication** 섹션에서 **SCIM Provisioning** 탭을 클릭한 다음 **New**를 클릭하십시오.
6. **IDP Configuration Page** 대화 상자에서 연결 이름을 입력하고 **Copy**를 클릭하여 ID 공급자용 토큰을 얻으십시오.
7. ID 공급자의 구성 패널에 토큰을 입력하고 연결이 작동하는지 확인하십시오.

##### MxAdmin 설정

기본적으로 플랫폼에는 MxAdmin이라는 기본 시스템 관리자 계정이 있습니다. **Disable MxAdmin** 토글을 **Yes**로 설정하여 계정을 비활성화할 수 있습니다.

{{% alert color="info" %}}
MxAdmin을 비활성화하기 전에 시스템 관리자 역할이 할당된 다른 사용자가 하나 이상 있는지 확인하십시오.
{{% /alert %}}

##### 기본 설정

Private Mendix Platform의 로그인 세션에 대해 다음 기본 설정을 구성할 수 있습니다:

* **Inactivity Period for Automatic Account Disabling (Hours)** - 미사용 계정이 비활성화되는 시간. 0으로 설정하면 계정이 자동으로 비활성화되지 않습니다.
* **Maximum Concurrent Sessions Per User Account** - 사용자가 가질 수 있는 최대 동시 로그인 세션 수. 0으로 설정하면 다른 세션이 실행 중일 때(예: 다른 브라우저 또는 머신에서) 로그인하면 이전 세션이 종료되고 사용자가 로그아웃됩니다.
* **Failed Login Attempts to Lockout** - 사용자 계정이 아래 지정된 기간 동안 잠기는 실패한 로그인 시도 횟수. 0으로 설정하면 계정이 자동으로 잠기지 않습니다.
* **Account Lockout Duration (Minutes)** - 잠긴 계정이 다시 활성화되는 시간(분). 0으로 설정하면 관리자가 잠긴 계정을 다시 활성화해야 합니다.

기본적으로 이러한 옵션은 모두 비활성화되어 있습니다(즉, *0* 값으로 설정). 활성화하려면 해당 필드에 0보다 큰 숫자를 입력하십시오.

#### 프로젝트 관리

스프린트 및 로드맵을 관리하기 위해 Private Mendix Platform을 [Jira by Atlassian](https://www.atlassian.com/software/jira)과 통합할 수 있습니다. 통합을 활성화하면 Mendix Studio Pro에서의 커밋이 Jira의 사용자 스토리에 직접 연결됩니다. 통합에는 활성 Jira 라이선스와 관리자 권한이 있는 사용자가 필요합니다.

연결을 활성화하려면 **Connect Jira**를 클릭한 다음 다음 정보를 제공하십시오:

* Jira 환경의 URL
* [Jira 프로젝트 키](https://support.atlassian.com/jira-software-cloud/docs/what-is-an-issue/#Project-keys)
* Jira 관리자 사용자의 사용자 이름
* [Jira 관리자 사용자의 API 토큰](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/)

#### 버전 관리

애플리케이션을 만들고 협업하려면 버전 관리 리포지토리에 대한 연결을 구성하십시오. GitHub, GitLab, Azure DevOps 및 Bitbucket이 버전 관리 시스템으로 지원됩니다. 자세한 내용은 [Private Mendix Platform의 버전 관리 시스템 구성](/private-mendix-platform-version-control/)을 참조하십시오.

#### 빌드

이 섹션의 설정을 통해 CI/CD 기능 및 빌드 파이프라인을 구성할 수 있습니다.

##### 빌드 방법

앱에 대한 CI/CD 기능을 구성하십시오. 이 옵션을 활성화하면 CI 시스템을 지정하고, 필요한 설정을 구성하고, Kubernetes 클러스터를 등록해야 합니다. Jenkins, [AzureDevops](/private-mendix-platform/configure-azure/) 및 [Kubernetes](/private-mendix-platform-configure-k8s/)가 지원됩니다. CI/CD 기능에 대한 [맞춤 템플릿](/private-mendix-platform/reference-guide/admin/company/#manual-deployment)을 구성할 수도 있습니다.

##### 빌드 단계 {#build-steps}

기본적으로 빌드 파이프라인은 다음 단계로 구성됩니다:

**Trigger Pipeline** > **Prepare Build** > **Start Build** > **Save Build Artifact** > **Complete Build**

Kubernetes CI의 경우 파이프라인이 트리거된 후 빌드가 완료되기 전에 추가 단계를 포함하도록 파이프라인을 구성할 수 있습니다. 이러한 추가 단계에는 웹훅 및 REST 호출 또는 빌드에 대한 수동 승인이 포함될 수 있습니다.

#### 배포 {#deployment}

이 섹션의 설정을 통해 배포 파이프라인을 구성할 수 있습니다.

##### 배포 방법

Private Mendix Platform은 Mendix on Kubernetes 배포 옵션을 사용합니다. 자세한 내용은 [Mendix on Kubernetes 클러스터에 Mendix 앱 배포](/developerportal/deploy/private-cloud-deploy/)를 참조하십시오.

##### 배포 단계 {#deploy-steps}

기본적으로 배포 파이프라인은 다음 단계로 구성됩니다:

**Trigger Pipeline** > **Get Deployment Artifact** > **Deploy App** > **Complete Pipeline**

각 기본 단계 후에 추가 단계를 포함하도록 파이프라인을 구성할 수 있습니다. 이러한 추가 단계에는 웹훅 및 REST 호출 또는 빌드에 대한 수동 승인이 포함될 수 있습니다.

변경 유형을 고려하도록 파이프라인을 구성할 수도 있습니다. **Changes/updates to an app environment** 확인란을 선택하면 앱 환경에 대한 변경 사항(예: 앱 상수 또는 복제본 수)이 있는 경우 배포 단계를 우회하고 대신 앱을 재시작할 수 있습니다.

##### 보안

계정 제어와 관련된 규정 준수 요구사항을 충족하기 위해 Private Mendix Platform은 이제 배포 시 앱의 기본 MxAdmin 계정을 비활성화하는 것을 지원합니다. 이 설정은 기본 시스템 관리자 계정을 사용하여 앱에 접근하는 기능을 효과적으로 제거하며, 잠금을 방지하기 위해 SSO 모듈의 기본 사용과 결합하는 경우에만 권장됩니다.

### 고급

이 섹션에서 Private Mendix Platform의 고급 구성 설정을 조정할 수 있습니다.

#### 기능

이 섹션의 설정을 통해 Private Mendix Platform의 기본적인 측면을 구성할 수 있습니다:

* **Enable App Projects?** - 권장. 앱 프로젝트를 만들고 관리할 수 있습니다. CI/CD 기능에 필수입니다.
* **Enable Marketplace?** - 권장. Private Platform의 Marketplace 기능을 사용할 수 있습니다. 여기서 활성화된 Marketplace는 Private Mendix Platform 내에서 완전히 호스팅됩니다.
* **Enable Build and Deploy** - 권장. Private Platform의 CI/CD 기능을 사용하여 앱을 빌드하고 배포할 수 있습니다.
* **Enable Identity & Access Integration?** - 선택 사항. IdP 통합을 구성하여 SSO를 사용한 로그인을 활성화합니다.
* **Allow sign up?** - 선택 사항. SSO 대신 또는 추가로 로컬 사용자 계정으로 로그인할 수 있도록 활성화합니다.
* **Enable Webhooks?** - 선택 사항. 웹훅을 통해 플랫폼과 외부 시스템 간에 정보를 전송할 수 있습니다.
* **Enable License Management?** - 권장. 라이선스 번들을 업로드하여 Private Cloud License Manager를 통해 앱 라이선스를 자동으로 프로비저닝합니다.

#### 운영

이 섹션에서 예약된 이벤트 목록 및 Mx Model Reflection 도구에 접근할 수 있습니다.

##### 예약된 이벤트

이 탭에는 시작 시간, 종료 시간 및 상태와 함께 시스템의 모든 예약된 작업 및 동작 목록이 표시됩니다.

{{< figure src="/attachments/private-platform/pmp-wizard6.png" class="no-border" >}}

##### Mx Model Reflection

이 플랫폼 지원 모듈에 대한 자세한 내용은 [Mx Model Reflection](/appstore/modules/model-reflection/)을 참조하십시오.
