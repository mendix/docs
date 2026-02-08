---
title: "Private Mendix Platform의 버전 관리 시스템 구성"
url: /private-mendix-platform/version-control/
description: "Private Mendix Platform의 초기 구성에 대해 설명합니다."
weight: 30
aliases:
    - /private-mendix-platform-version-control/
---

## 소개

Private Mendix Platform은 Mendix 앱 코드 리포지토리로 다음 유형의 Git 리포지토리를 지원합니다:

* GitLab (SaaS 및 자체 관리형 모두)
* GitHub Enterprise Server
* GitHub Enterprise Cloud
* Bitbucket
* Azure DevOps

리포지토리 유형을 선택하려면 다음 단계를 수행하십시오:

1. 화면 오른쪽 상단의 프로필 사진을 클릭하고 **Switch to Admin Mode**를 선택하여 관리자 모드로 전환하십시오.
2. 왼쪽 탐색 메뉴에서 **Settings** 섹션을 여십시오.
3. **Version Control**을 클릭하십시오.

## GitLab

이 섹션에서는 GitLab 리포지토리의 구성을 설명합니다.

* **Host URL** - GitLab 서버의 호스트 URL입니다. 형식은 `https://<HOST>`여야 합니다. 끝에 슬래시가 없어야 합니다. 예를 들어 GitLab 서버 호스트 이름이 mygitlab.example.com인 경우 `https://mygitlab.example.com`을 입력하십시오.
* **Group ID** - Private Mendix Platform의 모든 앱은 GitLab 그룹 아래에 생성됩니다. GitLab에서 그룹을 만든 다음 이 필드에 *Group ID*를 입력하십시오.
* **Group owner PAT** - 위의 그룹 소유자의 PAT입니다. 그룹 소유자의 접근 토큰을 생성할 때 모든 범위를 선택하고 만료일을 절대 만료 안함으로 설정하십시오.
* **Automatic Access Provisioning** - 자체 관리형 GitLab 서버를 사용하는 경우 이 기능을 활성화하여 프라이빗 플랫폼 사용자에 대한 GitLab 사용자 및 PAT를 자동으로 생성할 수 있습니다. 플랫폼에 로그인할 때 사용자 이메일이 GitLab 서버에서 검색하는 고유 키로 사용됩니다. 이 이메일 이름이 GitLab에 등록되어 있지 않으면 Private Mendix Platform이 이 이메일로 GitLab 사용자를 생성합니다. 그런 다음 이 사용자에 대한 PAT가 생성됩니다.
* **Admin PAT** - GitLab 관리자의 PAT이며, 모든 범위가 선택된 root 사용자 접근 토큰입니다.

### 일반 사용자 자격 증명

**Automatic Access Provisioning**이 비활성화되면 프라이빗 플랫폼 사용자는 첫 로그인 시 GitLab 사용자 ID와 PAT를 수동으로 입력해야 합니다.

* **User ID** - 이 GitLab 사용자의 사용자 ID(정수)입니다. 사용자 이름이 아닙니다. 사용자 프로필 페이지에서 값을 확인할 수 있습니다.
* **Personal Access Token** - 이 GitLab 사용자의 접근 토큰입니다.

### 지원되는 사전 정의 Push 규칙

Private Mendix Platform은 다음과 같은 사전 정의된 GitLab Push 규칙만 지원합니다:

* 미인증 사용자 거부.
    커밋자 이메일이 자신의 인증된 이메일 중 하나인 경우에만 이 리포지토리에 커밋을 푸시할 수 있습니다.
* 일관성 없는 사용자 이름 거부.
    커밋 작성자 이름이 GitLab 계정 이름과 일치하는 경우에만 이 리포지토리에 커밋을 푸시할 수 있습니다.
* 커밋 작성자가 GitLab 사용자인지 확인.
    커밋은 기존 GitLab 사용자로 제한됩니다.

## GitHub

이 섹션에서는 GitHub 리포지토리의 구성을 설명합니다.

* **Host URL** - GitHub 서버의 호스트 URL입니다. 형식은 `https://<HOST>`여야 합니다. 끝에 슬래시가 없어야 합니다. 예를 들어 GitHub 서버 호스트 이름이 mygithub.example.com인 경우 `https://mygithub.example.com`을 입력하십시오.
* **Organization Name** - Private Mendix Platform의 모든 앱은 조직 아래에 생성됩니다. 모든 Mendix 앱을 호스팅할 조직을 만들어야 합니다. 이 필드에 조직 이름을 입력하십시오.
* **Organization Owner PAT** - 이 필드에 이 조직 소유자의 클래식 PAT를 입력하십시오. 최소한 다음 범위를 선택해야 합니다: `repo admin:org user delete_repo`. 만료일은 **No Expiration**으로 설정하십시오.
* **Automatic Access Provisioning** - 자체 관리형 GitHub Enterprise 서버를 실행하는 경우 이 기능을 활성화하여 프라이빗 플랫폼 사용자에 대한 GitHub 사용자 및 PAT를 자동으로 생성할 수 있습니다. 플랫폼에 로그인할 때 사용자 이메일이 GitHub 서버에서 검색하는 고유 키로 사용됩니다. 이 이메일 이름이 GitHub에 등록되어 있지 않으면 Private Mendix Platform이 이 이메일로 GitHub 사용자를 생성합니다. 그런 다음 이 사용자에 대한 PAT가 생성됩니다.
* **AdminPAT** - GitHub Enterprise 인스턴스 관리자의 PAT입니다. 이 PAT를 생성할 때 모든 범위를 선택해야 합니다.

### 일반 사용자 자격 증명

**Automatic Access Provisioning**이 비활성화되면 Private Mendix Platform 사용자는 첫 로그인 시 GitHub 사용자 이름과 PAT를 수동으로 입력해야 합니다.

{{% alert color="info" %}}
이 사용자는 이 조직에 조직 멤버로 초대되어야 합니다.
{{% /alert %}}

* **User Name** - 이 GitHub 사용자의 사용자 이름(로그인 이름)입니다.
* **Personal Access Token** - 이 GitHub 사용자의 접근 토큰입니다. 간편하게 모든 범위를 선택할 수도 있습니다. 만료일은 No Expiration으로 설정하십시오.

## Bitbucket

이 섹션에서는 Bitbucket 리포지토리의 구성을 설명합니다.

* **Host URL** - Bitbucket Enterprise 서버의 호스트 URL입니다. 형식은 `https://<HOST>`여야 합니다. 끝에 슬래시가 없어야 합니다. 예를 들어 Bitbucket Enterprise 서버 호스트 이름이 mybitbucket.example.com인 경우 `https://mybitbucket.example.com`을 입력하십시오.
* **Project key** - 프라이빗 플랫폼의 모든 Mendix 앱은 프로젝트 아래에 생성됩니다. 모든 Mendix 앱을 호스팅할 프로젝트를 만들어야 합니다. 이 필드에 프로젝트 키를 입력하십시오. `https://mybitbucket.example.com/projects`에서 프로젝트 키를 확인할 수 있습니다.
* **Project Admin PAT** - 프로젝트 관리자 사용자의 접근 토큰을 입력하십시오.
* **Automatic Access Provisioning** - 자체 관리형 Bitbucket Enterprise 서버를 실행하는 경우 이 기능을 활성화하여 프라이빗 플랫폼 사용자에 대한 Bitbucket 사용자 및 PAT를 자동으로 생성할 수 있습니다. 플랫폼에 로그인할 때 사용자 이메일이 Bitbucket 서버에서 검색하는 고유 키로 사용됩니다. 이 이메일 이름이 Bitbucket에 등록되어 있지 않으면 Private Mendix Platform이 이 이메일을 사용자 이름으로 사용하여 Bitbucket 사용자를 생성합니다. 그런 다음 이 사용자에 대한 PAT가 생성됩니다.

    Bitbucket Enterprise 서버는 여러 사용자에 대해 동일한 이메일을 사용할 수 있습니다. 이메일로 Bitbucket 사용자를 고유하게 만들기 위해 자동 프로비저닝 시 이메일 이름이 Bitbucket 사용자 이름으로 사용됩니다.

* **Admin Username** - Bitbucket 시스템 관리자 사용자 이름.
* **Admin Password** - Bitbucket 시스템 관리자 사용자 비밀번호.

### 일반 사용자 자격 증명

Automatic Access Provisioning이 비활성화되면 Private Mendix Platform 사용자는 첫 로그인 시 Bitbucket 사용자 이름과 PAT를 수동으로 입력해야 합니다.

이 사용자는 **Create repository** 권한이 있는 프로젝트에 초대되어야 합니다. `https://mybitbucket.example.com/projects/<PROJECT KEY>/permissions`에서 사용자를 추가하고 권한을 부여할 수 있습니다.

* **User Name** - 이 Bitbucket 사용자의 사용자 이름(로그인 이름)입니다.
* **Personal Access Token** - 이 Bitbucket 사용자의 접근 토큰입니다. 권한은 최소한 `Project Admin`이어야 합니다. 만료일은 **No Expiration**으로 설정하십시오.

## AzureDevOps

이 섹션에서는 AzureDevOps 리포지토리의 구성을 설명합니다.

### Microsoft Entra ID 구성

AzureDevOps를 리포지토리로 사용하려면 먼저 [Microsoft Entra ID](https://learn.microsoft.com/en-us/azure/healthcare-apis/register-application)에 앱을 등록하고 다음 정보를 기록하십시오:

* Application ID (client ID)
* Directory ID (tenant ID)
* Client Secret

API 권한의 경우 **user_impersonation**을 선택하십시오.

웹 콜백 URL의 경우 다음 형식의 URL을 입력하십시오: `YOUR_APP_ROOT/oauth-callback/`.

### Azure DevOps 구성

Azure DevOps에서 조직과 관리자 사용자에 대한 PAT를 만들어야 합니다. 또한 Private Mendix Platform과 함께 Azure DevOps를 사용할 사용자를 만들고 Basic 접근 수준을 할당해야 합니다.

### Private Mendix Platform 구성

* **Host URL** - Azure DevOps Enterprise 서버의 호스트 URL입니다. 형식은 `https://<HOST>`여야 합니다. 끝에 슬래시가 없어야 합니다. 예를 들어 Azure DevOps Enterprise 서버 호스트 이름이 myazure.example.com인 경우 `https://myazure.example.com`을 입력하십시오.
* **Org** - Azure DevOps에서 만든 조직 이름을 입력하십시오.
* **Project Admin PAT** - Azure DevOps에서 만든 관리자 사용자 PAT를 입력하십시오.
* **Azure OAuth Config** - **New**를 클릭한 다음 다음 정보를 입력하십시오:

    * **Name** - 의미 있는 이름을 입력하십시오.
    * **Client ID** - Microsoft Entra ID에서 얻은 Application ID를 입력하십시오.
    * **Tenant ID** - Microsoft Entra ID에서 얻은 Directory ID를 입력하십시오.
    * **Client Secret** - Microsoft Entra ID에서 얻은 Client Secret을 입력하십시오.
    * **Resource** - `499b84ac-1321-427f-aa17-267ca6975798/.default`
    * **Single O auth account** - **No**
    * **Default config** - **Yes**
    * **Active** - **Yes**

#### 일반 사용자 자격 증명

사용자는 다음 단계를 수행하여 Azure DevOps와 함께 사용할 자체 PAT를 생성해야 합니다:

1. Private Mendix Platform에 로그인하십시오.
2. **Manage My Account** > **Service Credentials**를 클릭하십시오.
3. **Register New Credentials** > **Azure DevOps**를 클릭한 다음 **Get My Azure PAT**를 클릭하십시오.
4. Microsoft 로그인 화면에서 Azure 사용자 자격 증명을 입력하여 앱을 확인하고 권한을 부여하십시오.
5. Private Mendix Platform의 **Service Credentials** 페이지에 PAT와 Azure 사용자 이메일이 표시될 때까지 기다리십시오.
