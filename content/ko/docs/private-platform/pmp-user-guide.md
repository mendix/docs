---
title: "Private Mendix Platform 사용자 가이드"
url: /private-mendix-platform/user-guide/
description: "Private Mendix Platform의 일상적인 관리자 작업에 대해 설명합니다."
weight: 50
aliases:
    - /private-mendix-platform-user-guide/
---

## 소개

Private Mendix Platform에서 사용 가능한 일상적인 사용 사례에 대한 자세한 내용은 다음 문서를 참조하십시오.

## 사용자 프로필 및 설정 구성

사용자 계정은 Private Mendix Platform 관리자가 생성합니다. 처음 로그인한 후 화면 오른쪽 상단의 사용자 아이콘을 클릭한 다음 드롭다운에서 **Manage My Account**를 선택하여 일부 프로필 설정을 구성할 수 있습니다.

{{< figure src="/attachments/private-platform/pmp-ug1.png" class="no-border" >}}

### 프로필 {#profile}

**Profile** 탭에서 자신에 대한 일반 정보를 구성할 수 있습니다. 여기에는 다음 정보가 포함됩니다:

* 전체 이름(예: Jane Doe)
* 사용자 이름(예: jdoe)
* 표시 언어

{{% alert color="info" %}}
이메일, 사용자 역할 또는 사용자 그룹은 변경할 수 없습니다. 이 정보를 업데이트해야 하는 경우 Private Mendix Platform 관리자에게 문의하십시오.
{{% /alert %}}

### 비밀번호 변경

**Change Password** 탭에서 계정의 새 비밀번호를 설정할 수 있습니다. 비밀번호는 다음 기준을 충족해야 합니다:

* 최소 8자
* 대문자 포함
* 숫자 포함
* 최소 하나의 특수 문자

### 개인 접근 토큰(Personal Access Token)

개인 접근 토큰(PAT)은 비밀번호의 대안으로 사용됩니다. 클라이언트 애플리케이션이 특정 플랫폼 사용자를 대신하여 접근해야 하지만 접근 시 사용자가 "존재"하지 않아 브라우저를 통해 로그인할 수 없는 경우(웹 SSO) 사용하도록 설계되었습니다. 클라이언트 애플리케이션은 모든 애플리케이션(즉, Mendix로 빌드되지 않은 앱도 가능)이 될 수 있습니다.

개인 접근 토큰에 대한 자세한 내용 및 생성과 사용 방법은 [개인 접근 토큰](/portal/user-settings/#pat)을 참조하십시오.

### 서비스 자격 증명 {#service-credentials}

**Service Credentials** 탭에서 Private Mendix Platform이 연결할 수 있는 다양한 외부 시스템의 자격 증명을 보고 관리할 수 있습니다. 이러한 서비스에는 앱 프로젝트 관리에 사용되는 GitHub, GitLab, Bitbucket 및 AzureDevOps가 포함됩니다.

Private Mendix Platform에서 앱 프로젝트를 생성하거나 작업하려면 GitHub, GitLab, AzureDevOps 또는 Bitbucket에서 접근 토큰을 만든 다음 **Service Credentials** 탭에 추가해야 합니다. 토큰에는 앱 프로젝트가 저장된 리포지토리에 대한 읽기 및 쓰기 접근 권한이 있어야 합니다.

## Mendix Studio Pro 설치

첫 번째 앱을 만들기 전에 다음 단계를 수행하여 먼저 Mendix Studio Pro를 설치해야 합니다:

1. Private Mendix Platform에 로그인하십시오.
2. 홈 페이지에서 **Download Studio Pro** 및 **Download Studio Pro Patch file**을 클릭하십시오.

    {{< figure src="/attachments/private-platform/pmp-ug2.png" class="no-border" >}}

3. Studio Pro를 설치하십시오. 자세한 내용은 [Studio Pro 설치](/refguide/install/#install)를 참조하십시오.
4. Studio Pro 설치 디렉터리에 있는 *modeler* 디렉터리에 Studio Pro 패치 파일을 추출하고 내부 파일을 패치하십시오.
5. Studio Pro를 실행하고 Private Mendix Platform과 동일한 자격 증명으로 로그인하십시오.

## 새 앱 만들기 {#create-app}

새 앱을 만들려면 다음 단계를 수행하십시오:

1. Private Mendix Platform에 로그인하십시오.
2. GitLab, GitHub, AzureDevOps 또는 Bitbucket 리포지토리에 대한 접근 토큰을 아직 구성하지 않은 경우 화면 오른쪽 상단의 사용자 아이콘을 클릭한 다음 **Manage My Account** > **Service Credentials**를 클릭하십시오.

    자세한 내용은 [서비스 자격 증명](#service-credentials)을 참조하십시오.

3. 홈 페이지에서 **Create App Project**를 클릭하십시오.

    {{< figure src="/attachments/private-platform/pmp-ug3.png" class="no-border" >}}

4. 템플릿을 선택하여 앱 생성을 시작하십시오.

    새 Mendix 개발자를 위한 단계별 예시 및 가이드는 다음 페이지를 참조하십시오:

    * [빠른 시작](/quickstarts/)
    * [학습 경로: Rapid Developer 되기](https://academy.mendix.com/link/paths/31/Become-a-Rapid-Developer)

## 앱 관리 {#manage-app}

Private Mendix Platform 사용자로서 Private Mendix Platform 홈 페이지에서 소유한 앱을 직접 볼 수 있습니다.

{{< figure src="/attachments/private-platform/pmp-ug4.png" class="no-border" >}}

여기에는 직접 만든 앱과 사용자 그룹과 공유된 앱이 포함됩니다. 앱에 대한 자세한 내용을 보려면 해당 타일을 클릭하십시오.

{{< figure src="/attachments/private-platform/pmp-ug5.png" class="no-border" >}}

**General** 섹션에서 다음과 같은 여러 작업을 빠르게 수행할 수 있습니다:

* 앱 이름 및 설명과 같은 세부 정보 편집
* 앱에서 작업할 사용자 초대
* 앱의 브랜치별 Git 리비전 보기
* 앱을 새 소유자 또는 그룹에 할당
* 유일한 팀 멤버인 경우 앱 보관. 앱이 보관되기 전에 결과에 대한 경고가 표시되고 확인이 요청됩니다.
* 유일한 팀 멤버인 경우 앱 삭제. 앱이 삭제되기 전에 결과에 대한 경고가 표시되고 확인이 요청됩니다.

## 앱 배포 {#deploy}

**Deploy** 섹션에서 앱이 배포될 환경을 구성할 수 있습니다.

1. 선택 사항: **Environments** 탭에서 새 배포 패키지를 만드십시오.
2. **Create Environment**를 클릭하십시오.
3. 이 환경에 배포할 배포 패키지를 선택한 다음 **Next**를 클릭하십시오.
4. 환경에 대한 다음 세부 정보를 지정하십시오:

    * **Internal Name** - 환경의 자동 생성된 내부 이름. 환경 이름에는 소문자와 숫자만 포함할 수 있습니다.
    * **Display Name** - UI에 표시될 이름. 앱에 대해 여러 환경을 가질 수 있습니다(예: *test*, *acceptance*, *production*).
    * **Cluster** 및 **Namespace** - 기존 클러스터 및 해당 네임스페이스.

5. **Next**를 클릭하십시오.
6. 환경이 생성된 후 **Details** 메뉴를 사용하여 환경 삭제, 앱 시작 및 중지와 같은 추가 작업을 수행할 수 있습니다.

## Marketplace 콘텐츠 관리

조직에서 Private Mendix Platform에 대해 Marketplace를 활성화한 경우 자체 커넥터 및 모듈을 빌드한 다음 Marketplace에서 공유하여 조직의 다른 팀이 자체 앱에서 커넥터를 사용할 수 있도록 할 수 있습니다.

### Marketplace 콘텐츠 만들기

Mendix 앱용 커넥터 빌드에 대한 자세한 내용은 다음 주제를 참조하십시오:

* [커넥터 빌드](/appstore/creating-content/connector-guide-build/)
* [커넥터 빌드 모범 사례](/appstore/creating-content/connector-guide-best-practices/)

### Marketplace 콘텐츠 공유 {#sharing}

빌드한 커넥터를 공유하려면 다음 단계를 수행하십시오:

1. Private Mendix Platform에서 **My Content**를 클릭하십시오.

    {{< figure src="/attachments/private-platform/pmp-ug7.png" class="no-border" >}}

2. 컴포넌트의 **Content type**을 선택하십시오.
3. **General** 페이지에서 컴포넌트의 **Name**을 입력하십시오.
4. 컴포넌트의 **Description**을 입력하십시오.
5. 컴포넌트가 빌드된 **Studio Pro Version**을 선택하십시오.
6. 앱에 적용할 **License** 유형을 선택하십시오.
7. 커넥터에 표시될 **Cover Image**를 선택하십시오.
8. **Continue**를 클릭하십시오.
9. **Package** 페이지에서 **Upload MPK** 필드에서 **Browse**를 클릭하고 컴포넌트용으로 만든 [.mpk 파일](/appstore/creating-content/connector-guide-build/#export-as-mpk)을 선택하십시오.
10. **Upload**를 클릭하십시오.
11. 컴포넌트의 **Version**을 지정하십시오.
12. 업로드하는 버전의 내용을 설명하는 **Release Note**를 제공하십시오.

    {{< figure src="/attachments/private-platform/pmp-ug8.png" class="no-border" >}}

13. **Save & Continue**를 클릭하십시오.
14. **Additional Info** 페이지에서 컴포넌트 사용자를 위한 지침을 제공하십시오.

    {{< figure src="/attachments/private-platform/pmp-ug9.png" class="no-border" >}}

15. **Save & Continue**를 클릭하십시오.
16. 변경 사항을 검토하고 게시하십시오.

Private Mendix Platform 관리자가 설정한 프로세스에 따라 컴포넌트가 다른 사용자와 공유되기 전에 승인 프로세스를 거칠 수 있습니다.

### 그룹과 콘텐츠 공유

**Manage Group Content** 페이지에서 자신이 속한 사용자 그룹과 컴포넌트를 공유할 수 있습니다.

1. Private Mendix Platform에서 **Group Content**를 클릭하십시오.

    {{< figure src="/attachments/private-platform/pmp-ug10.png" class="no-border" >}}

2. 컴포넌트의 Content type을 선택하십시오.
3. App Visibility 섹션에서 컴포넌트를 공유할 그룹을 선택하십시오.

    {{< figure src="/attachments/private-platform/pmp-ug11.png" class="no-border" >}}

    콘텐츠를 공유하려는 그룹이 목록에 없는 경우 해당 특정 그룹의 멤버가 아님을 의미합니다. Private Mendix Platform 관리자에게 문의하십시오.

4. [Marketplace 콘텐츠 공유](#sharing)의 지침을 따르십시오.
