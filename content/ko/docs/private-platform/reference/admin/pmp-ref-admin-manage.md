---
title: "Private Mendix Platform 기능 - 회사 관리자"
linktitle: "회사 관리자"
url: /private-mendix-platform/reference-guide/admin/company/
description: "회사 관리자가 사용할 수 있는 Private Mendix Platform의 기능에 대한 세부 정보를 제공합니다."
weight: 10
---

## 소개

Private Mendix Platform에서 회사 관리자는 주로 일상적인 업무를 관리합니다. 예를 들어 새 사용자를 앱에 초대하거나 Marketplace 콘텐츠를 승인하는 것입니다. 회사 관리자와 관련된 설정은 관리자 탐색 메뉴의 [관리](#manage) 섹션에서 사용할 수 있습니다.

## 구성 설정 접근

회사 관리자 접근 권한이 있는 사용자로서 다음 단계를 수행하여 Private Mendix Platform 구성 설정에 접근할 수 있습니다:

1. 화면 오른쪽 상단의 프로필 사진을 클릭하고 **Switch to Admin Mode**를 선택하여 관리자 모드로 전환하십시오.
2. 왼쪽 탐색 메뉴에서 **Manage** 섹션을 여십시오.

## 관리 {#manage}

관리자 탐색 메뉴의 **Manage** 섹션에는 회사 관리자로서의 일상 업무와 관련된 설정이 포함되어 있습니다. 이를 사용하여 회사 앱, 사용자 및 그룹, Marketplace 콘텐츠 및 배포 클러스터를 관리할 수 있습니다.

### 앱

탐색 메뉴의 **Apps** 섹션에서 관리자가 앱을 관리할 수 있습니다.

#### 앱 관리

**App Management** 페이지에서 앱의 요약을 볼 수 있습니다.

{{< figure src="/attachments/private-platform/pmp-admin1.png" class="no-border" >}}

**Action** 열에서 **More Actions** ({{% icon name="three-dots-menu-horizontal" %}})를 클릭하면 다음과 같은 여러 작업을 빠르게 수행할 수 있습니다:

* [앱 세부 정보 편집](#app-details)
* [앱을 새 소유자에게 할당](#ownership)
* [그룹과 앱 공유](#share)
* [앱 보관](#archive)
* [앱 삭제](#delete)

##### 앱 세부 정보 편집 {#app-details}

회사 관리자는 앱 브랜딩 또는 소유권, 팀 멤버십 등과 같은 앱 세부 정보를 편집할 수 있습니다.

1. **App Management** 페이지의 **Action** 열에서 **More Actions** > **Edit**를 클릭하십시오.
2. 다음 설정 중 하나를 구성하십시오:

* **App Details** - 다음 기본 앱 세부 정보를 구성하십시오:
    * **App ID** - 자동으로 할당된 내부 ID입니다. 이 값은 조정할 수 없습니다.
    * **Name** - 앱의 이름입니다. 이 값은 사용자가 앱을 쉽게 식별할 수 있도록 의미 있어야 합니다.
    * **Description** - 애플리케이션에 대한 선택적 설명입니다.
    * **App Logo** - 앱의 브라우저 로고입니다. 이 값은 앱 소유자만 조정할 수 있습니다.
* **Team Membership** - 앱에 사용자를 초대하거나 앱에서 제거하십시오. 사용자를 초대하기 전에 먼저 [사용자 관리](#users) 페이지에서 계정을 구성해야 합니다.
* **Git Server** - 이 앱의 브랜치별 리비전을 확인하십시오.
* **Ownership and Sharing** - 이 앱을 소유하는 사용자와 선택적으로 그룹을 선택하십시오. 앱이 특정 그룹이 소유한 경우 소유자는 해당 그룹에 속하는 사용자여야 합니다.

##### 앱을 새 소유자에게 할당 {#ownership}

각 앱에는 애플리케이션 브랜딩(로고)과 같은 설정을 변경할 수 있는 특정 사용자가 소유합니다. 기본적으로 소유자는 앱을 만든 사용자입니다. 소유권을 다른 사용자에게 이전하려면 **App Management** 페이지의 **Action** 열에서 **More Actions** > **Transfer Ownership**을 클릭하십시오. 또는 [앱 세부 정보](#app-details) 페이지의 **Ownership and Sharing** 탭에서 동일한 옵션에 접근할 수 있습니다.

소유자를 지정하는 것 외에도 특정 그룹에 앱 소유권을 할당할 수도 있습니다. 앱이 그룹이 소유한 경우 소유자는 해당 그룹에 속하는 사용자여야 합니다.

##### 선택한 사용자 그룹과 앱 공유 {#share}

**App Management** 페이지에서 **More Actions** > **Share with Groups** 옵션을 선택하여 모든 사용자 그룹과 앱을 공유할 수 있습니다. 공유하면 그렇지 않으면 앱을 보거나 접근할 수 없는 그룹에 앱이 표시됩니다. 앱을 공유한 그룹의 멤버는 자동 접근 권한이 없습니다. 대신 앱 소유자에게 접근을 요청할 수 있습니다.

##### 앱 보관 {#archive}

일정 기간 동안 앱이 필요하지 않은 경우 보관할 수 있습니다. 보관된 앱은 더 이상 사용자에게 제공되지 않지만 데이터는 여전히 저장되어 있으며 필요한 경우 빠르게 보관 취소할 수 있습니다.

앱을 보관하려면 **App Management** 페이지의 **Action** 열에서 **More Actions** > **Archive App**을 클릭하십시오. 보관된 앱을 다시 활성화하려면 동일한 메뉴에서 **Unarchive App**을 선택하십시오. 또는 [앱 세부 정보](#app-details) 페이지에서 동일한 옵션에 접근할 수 있습니다. 앱은 즉시 보관되거나 보관 취소됩니다.

##### 앱 삭제 {#delete}

앱이 더 이상 필요하지 않고 데이터를 저장하고 싶지 않은 경우 삭제할 수 있습니다. 앱을 삭제하면 리포지토리가 제거되어 이후에 복원할 수 없습니다. 앱을 삭제하려면 [앱 세부 정보](#app-details) 페이지에서 **Delete App**을 클릭하십시오.

앱이 삭제되기 전에 결과에 대한 경고가 표시되고 확인이 요청됩니다.

#### 앱 가져오기

**Import Apps** 페이지에서 관리자는 버전 관리 호스트에 있지만 아직 Private Mendix Platform에 없는 기존 Mendix 앱을 가져올 수 있습니다. 가져오기는 현재 다음 호스트를 지원합니다:

* GitLab
* GitHub
* Bitbucket
* Azure DevOps

{{< figure src="/attachments/private-platform/pmp-admin6.png" class="no-border" >}}

페이지의 앱 목록은 자동으로 새로 고침되지 않습니다. 새로 고침하려면 **Scan for Apps** 버튼을 클릭하십시오.

### Marketplace

**Marketplace** 섹션에서 관리자는 Private Platform Marketplace에서 사용 가능한 콘텐츠와 관련된 다양한 설정을 관리할 수 있습니다. Private Platform Marketplace는 Private Platform 내에 완전히 포함된 [Mendix Marketplace](/appstore/overview/)의 로컬 버전입니다. 조직의 개발자는 자체 모듈, 커넥터 및 샘플 앱을 만들고 Private Platform Marketplace에서 공유하여 다른 사용자가 사용할 수 있도록 할 수 있습니다.

관리자로서 다음 작업을 수행할 수 있습니다:

#### 콘텐츠 관리 {#content}

**Content Management** 탭에서 사용자가 이미 게시한 Marketplace 콘텐츠와 승인 대기 중이거나 거부된 항목을 볼 수 있습니다.

{{< figure src="/attachments/private-platform/pmp-admin7.png" class="no-border" >}}

항목을 클릭하면 자세한 정보를 보거나, 다운로드, 승인 또는 삭제할 수 있습니다.

#### 분류 체계 관리

**Taxonomy Management** 탭에서 사용자가 Marketplace 콘텐츠를 만들 때 선택할 수 있는 지원되는 Studio Pro 버전 및 하위 카테고리를 구성할 수 있습니다. 사용 가능한 라이선스를 보고 편집할 수도 있습니다.

{{< figure src="/attachments/private-platform/pmp-admin8.png" class="no-border" >}}

##### 지원 버전

**Supported Versions** 페이지에 나열된 버전은 Marketplace 콘텐츠 항목이 호환되는 Mendix Studio Pro 버전을 나타냅니다. 사용자는 새 Marketplace 콘텐츠를 업로드할 때 목록에서 이러한 버전을 선택할 수 있습니다.

##### 라이선스

**Licenses** 탭에서 관리자가 앱에서 사용할 수 있는 라이선스를 지정할 수 있습니다. 새 라이선스를 추가하려면 **New License**를 클릭하고 다음 값을 지정하십시오:

* **Name** - 라이선스 이름
* **URL** - 라이선스에 접근할 수 있는 URL
* **Contents** - 라이선스에 대한 선택적 추가 정보.

##### 앱 카테고리

**App Categories** 탭에서 사용자가 Marketplace 콘텐츠 항목에 지정할 수 있는 사전 정의된 카테고리를 볼 수 있습니다. 특정 프로젝트와 관련된 Marketplace 콘텐츠용 맞춤 카테고리를 추가할 수도 있습니다.

사전 정의된 앱 카테고리는 편집하거나 삭제할 수 없습니다. 맞춤 카테고리를 편집하거나 삭제하려면 **Action** 메뉴를 클릭한 다음 사용 가능한 옵션 중 하나를 선택하십시오.

#### 콘텐츠 가져오기

콘텐츠 패키지와 *package.json* 파일이 포함된 zip 파일을 가져와 프라이빗 Marketplace를 채울 수 있습니다. Content Delivery Network에서 파일을 업로드하거나 로컬 머신에서 수동으로 업로드할 수 있습니다.

{{< figure src="/attachments/private-platform/pmp-admin9.png" class="no-border" >}}

#### Marketplace 번들 업로드 {#manual-upload}

자체 컴퓨터에서 콘텐츠 번들을 수동으로 업로드하려면 다음 단계를 수행하십시오:

1. zip 파일로 제공되는 콘텐츠가 포함된 Marketplace Bundle을 다운로드하십시오. 번들에 접근할 수 없는 경우 Mendix 담당자에게 문의하십시오.
2. **Import Content** > **Upload Marketplace Bundle** 탭에서 업로드할 파일을 끌어다 놓으십시오.

    * 파일은 *zip* 형식이어야 합니다.
    * 파일 크기는 2048 MB를 초과할 수 없습니다.
    * 인프라가 대용량 파일(최대 2048MB) 업로드를 지원해야 합니다.
    * 임시 파일을 감안하여 최소 40 GB의 사용 가능한 디스크 공간이 있어야 합니다.
    
3. **Import Marketplace Bundle components**를 클릭하십시오.

    {{< figure src="/attachments/private-platform/pmp-config1.png" class="no-border" >}}

4. 업로드 진행 상황을 보려면 **View Task Queue**를 클릭하십시오.

{{% alert color="info" %}}
수동 업로드 중 높은 지연 시간이 발생하는 경우 타임아웃을 늘릴 수 있습니다. 예를 들어, nginx의 경우 다음 명령을 수행할 수 있습니다:

```text
nginx.ingress.kubernetes.io/client-header-timeout: "300"
nginx.ingress.kubernetes.io/proxy-connect-timeout: "300"
nginx.ingress.kubernetes.io/proxy-read-timeout: "300"
nginx.ingress.kubernetes.io/proxy-send-timeout: "300"
```

{{% /alert %}}

#### CDN에서 가져오기

Content Delivery Network에서 콘텐츠를 가져오려면 다음 단계를 따르십시오:

1. 시스템 관리자가 [Marketplace 가져오기 번들 URL을 구성](/private-mendix-platform/reference-guide/admin/system/#configure-import)했는지 확인하십시오.
2. **Import Content** > **Import from CDN** 탭에서 사용 가능한 콘텐츠 항목을 보고 다운로드하십시오.

### 배포

**Deployment** 섹션에서 관리자는 기존 클러스터를 관리하고 새 클러스터를 등록할 수 있습니다.

#### 클러스터 관리자

**Cluster Manager** 페이지에서 관리자가 DevOps CI/CD 파이프라인에서 사용할 클러스터를 구성할 수 있습니다. 클러스터를 구성하려면 다음 단계를 수행하십시오:

1. **Switch to Admin Mode** > **Manage** > **Cluster Manager**에서 **Register New Cluster**를 클릭하십시오.
2. 다음 값을 구성하십시오:
    
    * **Cluster Name** - 클러스터 이름을 지정하십시오.
    * **Cluster type** - 클러스터 유형을 선택하십시오. **Kubernetes**가 권장됩니다.
    * **API Server** - API 서버를 지정하십시오.
    * **Token** - 먼저 클러스터에서 서비스 계정, 클러스터 역할 및 클러스터 역할 바인딩을 생성한 다음 서비스 계정의 토큰을 가져와야 합니다. 예시는 [빌드 클러스터 설정 구성](/private-mendix-platform/configure-k8s/#build-cluster)을 참조하십시오.
    * **Enable Logging and Monitoring** - 이 클러스터에 대해 Grafana 및 Prometheus 모니터링을 활성화할지 지정하십시오.
    * **Package Type** - Kubernetes 및 수동 프로덕션 배포의 경우 이 클러스터의 환경에 업로드될 패키지 유형을 선택하십시오.
    * **S3 Endpoint** - Kubernetes 및 수동 프로덕션 배포의 경우 S3 엔드포인트를 지정하십시오(예: `Cloud Object Storage - Amazon S3 - AWS`).
    * **S3 Bucket Name** - Kubernetes 및 수동 프로덕션 배포의 경우 S3 버킷 이름을 지정하십시오(예: `mybucket`).
    * **Region** - Kubernetes 및 수동 프로덕션 배포의 경우 리전을 지정하십시오(예: `ap-southeast-1`).
    * **Access Key ID** - Kubernetes 및 수동 프로덕션 배포의 경우 이 ID 값은 S3 버킷에 접근하는 데 사용됩니다.
    * **Secret Access Key** - Kubernetes 및 수동 프로덕션 배포의 경우 이 시크릿 키 값은 S3 버킷에 접근하는 데 사용됩니다.

3. **Save**를 클릭하십시오.
4. 새로 생성된 클러스터를 클릭하여 확장한 다음 **Retrieve Namespace(s)**를 클릭하여 모든 네임스페이스 및 스토리지 플랜을 검색하거나 **Manually Register Namespace**를 클릭하십시오.
    
    스토리지 플랜이 없는 네임스페이스는 건너뜁니다. 이 단계에는 Mendix Operator가 설치되고 구성되어 있어야 합니다. 추가 네임스페이스를 검색하기 위해 이 단계를 필요에 따라 반복할 수 있습니다.

5. 클러스터가 등록된 후 클러스터, 네임스페이스 및 플랜으로 환경을 생성하십시오.

##### 수동 승인이 포함된 CI/CD 파이프라인 구성 {#manual-deployment}

프로덕션 및 개발 환경이 완전히 에어갭되어 서로 분리되어야 하고 선택된 사용자 또는 수동 승인이 있는 자동화된 파이프라인으로 패키지 배포 기능을 제한하려는 경우 클러스터 유형을 **Manual Production Deployment**로 구성할 수 있습니다.

이 옵션을 선택하면 S3 버킷을 지정할 수 있습니다. 이 버킷은 프로덕션 환경에 배포하는 대신 파이프라인 끝에서 배포 패키지가 업로드되는 대상으로 사용됩니다. 지정된 승인자가 S3 버킷에서 패키지를 가져와 대상 환경에 수동으로 배포할 수 있습니다.

### 사용자 {#users}

**User Management** 섹션에서 관리자는 사용자 계정 및 사용자 그룹을 관리할 수 있습니다.

{{< figure src="/attachments/private-platform/pmp-admin3.png" class="no-border" >}}

관리자로서 다음 작업을 수행할 수 있습니다:

#### 사용자 관리

**User Management** 탭에서 로컬 사용자 및 API 사용자(즉, API 서비스가 Private Mendix Platform에 접근하는 데 사용하는 계정)의 계정을 만들고 편집할 수 있습니다. 계정 옆의 **More Actions** ({{% icon name="three-dots-menu-horizontal" %}})를 클릭하면 다음과 같은 여러 작업을 빠르게 수행할 수 있습니다:

    * 사용자의 이름 및 이메일 편집
    * 사용자 역할 할당 또는 제거(로컬 사용자만)
    * 사용자 차단
    * 사용자 비밀번호 변경
    * 사용자의 언어 및 시간대 설정 구성(로컬 사용자만)
    * 사용자 로그아웃(로컬 사용자만)
    * 사용자 계정 삭제

**Actions** 탭에서 현재 앱에 로그인한 모든 사용자를 로그아웃시킬 수도 있습니다.

#### 그룹 관리

**Group Management** 탭에서 사용자 그룹을 만들고 편집할 수 있습니다. 이러한 그룹은 일반적으로 조직의 구조를 반영합니다. **Automation Settings** 옵션을 사용하여 프로필 속성에 따라 사용자를 자동으로 그룹에 할당할 수도 있습니다.

Private Mendix Platform 버전 2.0 이상의 그룹 관리에 대한 자세한 내용은 [Private Mendix Platform의 동적 역할 관리](/private-mendix-platform/dynamic-role-management/)를 참조하십시오.

### 플랫폼

**Deployment** 섹션에서 관리자는 통계, 활동 로그, 웹훅 및 라이선스를 보고 관리할 수 있습니다.

관리자로서 다음 작업을 수행할 수 있습니다:

* **Webhooks** 탭에서 [웹훅](/developerportal/deploy/webhooks/)을 보고 관리할 수 있습니다.
* **Licensing** 탭에서 라이선스 상태를 확인하거나 새 Private Mendix Platform 라이선스 번들을 업로드할 수 있습니다.

#### 플랫폼 통계

**Platform Statistics** 섹션에서 사용자 및 앱 수, 일일 사용자 로그인 시간 및 횟수, 가장 활발한 사용자와 같은 통계에 접근할 수 있습니다.

#### 활동 로그

감사 목적으로 플랫폼 사용자가 수행한 가장 최근의 작업 로그를 볼 수 있습니다.

##### 최근 작업

이 탭에는 **Log Settings** 탭에 지정된 기간 동안 기록된 최근 작업 목록이 포함되어 있습니다. 다음 작업이 기록됩니다:

* 사용자 계정 생성 및 편집
* 앱 생성 및 삭제
* 앱 패키지 생성
* 플랫폼 설정 변경

**Search** 필드를 사용하여 이름으로 특정 작업을 검색할 수 있습니다.

##### 보관된 작업

이 탭에는 **Log Settings** 탭에 지정된 기간이 만료된 후 보관된 작업 목록이 포함되어 있습니다. 감사 목적으로 필요한 경우 보관 파일을 다운로드할 수 있습니다.

##### 로그 설정

작업이 로그에 보관되는 기간(일)을 선택할 수 있습니다. 최소 일수는 1이고 최대는 365입니다. 로깅하지 않음부터 전체 로깅까지 로깅 수준도 지정할 수 있습니다.

#### 웹훅

**Webhooks** 탭에서 웹훅을 보고 관리할 수 있습니다.

웹훅을 사용하면 Mendix Cloud 또는 Mendix on Kubernetes에 배포된 라이선스 Mendix 앱에 대한 정보를 외부 앱 또는 워크플로에 전송할 수 있습니다. Private Mendix Platform에서는 자동화된 [빌드](/private-mendix-platform/reference-guide/admin/system/#build-steps) 또는 [배포](/private-mendix-platform/reference-guide/admin/system/#deploy-steps) 파이프라인의 단계를 트리거하는 데 사용할 수 있습니다.

웹훅 구성에 대한 자세한 내용은 [웹훅 문서](/developerportal/deploy/webhooks/)를 참조하십시오.

#### 라이선스

이 페이지에서 Private Mendix Platform 라이선스의 상태를 볼 수 있으며, 필요한 경우 새 라이선스 번들을 업로드할 수 있습니다.

Private Mendix Platform 라이선스를 관리하려면 [Private Cloud License Manager](/developerportal/deploy/private-cloud/private-cloud-license-manager/)를 사용해야 합니다. 자체 앱 라이선스를 관리하고 프로비저닝하는 데에도 사용할 수 있습니다.

Private Mendix Platform 라이선스는 **유효** 또는 **미발견** 상태입니다. 미발견인 경우 플랫폼은 일부 기능 및 기능에 대한 접근이 제한되는 개발자 모드로 작동합니다.

{{< figure src="/attachments/private-platform/pmp-wizard2.png" class="no-border" >}}

유효한 경우 라이선스는 다음 상태를 가질 수 있습니다:

* 활성(녹색으로 표시)
* 만료 임박(노란색으로 표시)
* 만료됨(빨간색으로 표시)
