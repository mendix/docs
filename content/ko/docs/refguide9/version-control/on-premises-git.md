---
title: "Git 온프레미스 버전 관리 서버 사용하기"
linktitle: "Git 온프레미스 버전 관리 서버"
url: /refguide9/on-premises-git/
weight: 60
description: "Git 온프레미스 버전 관리 서버에서 작업하는 방법을 소개합니다."
aliases:
    - /howto9/collaboration-requirements-management/on-premises-git-howto/
---

## 소개

Mendix 애플리케이션을 개발할 때, 이러한 애플리케이션의 변경 사항은 버전 관리 시스템에 저장됩니다. 이 시스템은 [Team Server](/developerportal/repository/team-server/)라고 하며 Mendix Platform의 일부입니다. 즉, 애플리케이션의 파일이 Mendix 온라인 환경에 저장됩니다. 자세한 내용은 [버전 관리 참조 가이드](/refguide9/version-control/)를 참조하십시오.

Team Server 사용이 대부분의 Mendix 개발자에게 권장되지만, 자체 조직이 관리하는 시스템에 애플리케이션 파일을 저장하는 것을 선호할 수 있습니다. 버전 관리를 위해 Mendix는 [Subversion](https://subversion.apache.org) 시스템(SVN이라고도 함)과 [Git](/refguide9/on-premises-git/)을 사용합니다. 이 문서에서는 Git 버전 관리 시스템에서 작업하는 방법을 설명합니다.

{{% alert color="info" %}}
이 문서에서는 Git 서버를 처음부터 설정하는 방법을 설명하지 않습니다. 일반적으로 이는 조직의 IT 부서에서 처리합니다.
{{% /alert %}}

## 전제 조건

다음 전제 조건을 완료했는지 확인하십시오:

* 올바른 서버 제공자가 있는지 확인합니다. 현재 Git Private Server만 지원합니다. 자세한 내용은 [리포지토리 준비](#preparing-your-repo) 섹션을 참조하십시오.
* 버전 관리되지 않은 Mendix 앱이 있습니다. 자세한 내용은 [앱 만들기](#create-app) 섹션을 참조하십시오.

## 지원되는 인증 메커니즘

현재 Git 서비스 제공자에 대한 HTTP Basic 인증만 지원합니다. 대부분의 제공자에서 이는 개인용 액세스 토큰(PAT) 사용의 형태를 취합니다.

PAT(또는 이에 상응하는 것)를 사용하려면 Studio Pro가 버전 관리 서버에 대한 자격 증명을 요청할 때 **Password** 필드에 이를 지정해야 합니다:

{{< figure src="/attachments/refguide9/version-control/on-premises-git/sign-in-dialog.png" alt="Sign In dialog" class="no-border" >}}

## 환경 설정

이 섹션에서는 Studio Pro에서 Git 버전 관리 앱을 구성하는 방법을 설명합니다. Git 서버와 초기에 버전 관리되지 않은 Mendix 앱이 필요합니다.

### 리포지토리 준비 {#preparing-your-repo}

Mendix는 아래에 나열된 여러 Git 서비스 제공자를 지원합니다. 특정 제공자 및 요구 사항에 대한 자세한 내용은 [시스템 요구 사항](/refguide9/system-requirements/)을 참조하십시오.

Studio Pro는 다음 Git 서버 제공자를 사용할 수 있습니다:

* Azure DevOps Server
* Azure Repos
* GitHub.com
* GitHub Enterprise Edition
* GitLab.com
* GitLab EE
* GitLab CE
* Bitbucket.org
* Bitbucket Server
* Bitbucket Data Center

{{% alert color="info" %}} 일부 Git 서버 제공자는 개별 파일 크기 제한과 같이 Git 제공에 추가 제한을 가하고 있습니다. 경우에 따라 Mendix .MPR 파일이 100MB보다 커질 수 있습니다. 제공자를 선택할 때 이를 고려하십시오. {{% /alert %}}

선택한 제공자에서 프라이빗 리포지토리를 만들고 접근을 제공하기 위해 개인용 액세스 토큰(PAT)을 만들어야 합니다. PAT는 비밀번호로 사용됩니다.

Studio Pro에서 이 프라이빗 리포지토리와 상호 작용하려면 리포지토리에 대한 링크와 PAT가 필요합니다.

### Git을 위한 Studio Pro 준비 {#preparing-git-support}

온프레미스 Git을 사용하려면 Studio Pro에서 **Edit** > **Preferences** > **Version Control**로 이동하여 커밋을 식별하는 데 사용할 이름과 이메일 값을 구성해야 합니다:

{{< figure src="/attachments/refguide9/version-control/on-premises-git/preferences-git.png" alt="Preferences dialog" class="no-border" >}}

이제 Studio Pro가 Git을 지원하도록 설정되었습니다.

### 앱 만들기 {#create-app}

Studio Pro에서 버전 관리되지 않은 앱을 만듭니다:

{{< figure src="/attachments/refguide9/version-control/on-premises-git/app-settings.png" alt="App Settings dialog" class="no-border" >}}

앱이 생성되면 프라이빗 Git 리포지토리에 업로드할 수 있습니다. 업로드 방법에 대한 자세한 내용은 아래의 [프라이빗 Git 서버에 업로드](#upload-to-private-git-server) 섹션을 참조하십시오.

### 프라이빗 리포지토리에서 다운로드

이제 서버에 Git 앱이 있으므로 다른 디렉터리에 다운로드하거나 팀원이 자신의 컴퓨터에 다운로드할 수 있습니다. 아래 단계를 따르십시오:

1. **Version Control > Download from Version Control Server**에서 **Private server** 옵션을 선택하고 다운로드하려는 앱이 포함된 리포지토리의 URL을 입력합니다. 어떤 URL을 사용해야 할지 모르는 경우 Git 서버에서 이 정보를 찾을 수 있습니다.
2. Studio Pro의 환경 설정에서 프라이빗 버전 관리에 대해 Subversion과 Git 모두 활성화된 경우, 리포지토리가 사용하는 버전 관리 시스템을 지정합니다. 이 경우 **Git** 라디오 버튼을 활성화합니다:

    {{< figure src="/attachments/refguide9/version-control/on-premises-git/download-from-version-control-server.png" alt="Download from Version Control Server dialog" class="no-border" >}}

3. **App repository address**에 리포지토리 링크를 입력하고 **Connect**를 클릭합니다. 이제 앱이 다운로드되는 디렉터리를 변경할 수 있는 옵션이 표시됩니다:

    {{< figure src="/attachments/refguide9/version-control/on-premises-git/download-from-version-control-server-extended.png" alt="Download from Version Control Server Extended dialog" class="no-border" >}}

4. **OK**를 클릭합니다.
5. **Sign In** 대화 상자에서 자격 증명을 입력합니다:

    {{< figure src="/attachments/refguide9/version-control/on-premises-git/sign-in-dialog.png" alt="Sign In dialog" class="no-border" >}}

6. 사용자 이름(비어 있지 않으면 무엇이든 가능)을 입력하고 이전에 저장한 PAT를 비밀번호로 사용합니다.

앱이 다운로드되어 버전 관리와 함께 사용할 준비가 되었습니다.

### 기존 Git 앱 열기

[Git 지원이 활성화](#preparing-git-support)된 상태로 Git Mendix 앱을 여는 몇 가지 방법이 있습니다.

#### 최근 앱 목록

**Recent Apps** 목록에서 앱 이름을 클릭하면 앱이 열립니다.

#### 최근 앱 메뉴

**File** > **Recent Apps**에서 앱을 선택하여 열 수 있습니다.

#### 앱 열기 양식

**Open App** 양식은 두 곳에서 접근할 수 있습니다:

* **My Apps** 탭의 **Open App** 버튼
* **File > Open App** 메뉴

양식에서 Git 앱을 여는 두 가지 방법이 있습니다: 이전 체크아웃에서 열기 또는 디스크에서 로컬로 열기:

이전 체크아웃 방법의 경우 다음을 수행합니다:

1. 이전 체크아웃에서 엽니다.
2. **Private server** 라디오 버튼을 활성화하고 리포지토리 링크를 입력합니다.
3. **Connect**를 클릭합니다.
4. 앱을 최소 한 번 체크아웃한 경우, 디스크의 기존 위치 중 하나를 선택할 수 있으며 앱이 열립니다(여기서 두 개의 이전 체크아웃 표시):

    {{< figure src="/attachments/refguide9/version-control/on-premises-git/open-app-dialog.png" alt="Open App dialog" class="no-border" >}}

로컬 디스크 방법의 경우 다음을 수행합니다:

1. **Locally on disk** 옵션을 선택합니다.
2. 파일 브라우저 대화 상자에서 앱이 포함된 디렉터리를 찾아 *.mpr* 파일을 더블클릭합니다(또는 선택하고 **Open** 클릭):

    {{< figure src="/attachments/refguide9/version-control/on-premises-git/open-app-select-file.png" alt="Open App Select File" class="no-border" >}}

### 프라이빗 Git 서버에 업로드 {#upload-to-private-git-server}

버전 관리되지 않은 앱이 있으면 프라이빗 팀 서버에 업로드할 수 있습니다.

{{% alert color="warning" %}}
리포지토리는 완전히 비어 있어야 합니다(README.md 및 .gitignore 파일 포함). 그렇지 않으면 업로드가 실패합니다.
{{% /alert %}}

앱을 업로드하려면 다음을 수행합니다:

1. Studio Pro에서 앱을 열고 **Version Control > Upload to Version Control Server**로 이동합니다:

    {{< figure src="/attachments/refguide9/version-control/on-premises-git/upload-to-vc-menu.png" alt="Upload to Version Control Server Menu" class="no-border" >}}

2. **Upload to Version Control Server** 대화 상자에서 **Private server**를 선택합니다.
3. 프라이빗 서버 유형으로 **Git**을 선택합니다(**Preferences Form**에서 **Subversion**과 **Git** 모두 활성화된 경우).
4. 이 앱을 업로드할 리포지토리 링크를 입력하고 **OK**를 클릭합니다:

    {{< figure src="/attachments/refguide9/version-control/on-premises-git/upload-to-vc-server.png" alt="Upload to Version Control Server dialog" class="no-border" >}}
    이전에 로그인하여 로그인 상태를 유지하도록 선택했는지에 따라 서버에 로그인하라는 메시지가 표시될 수 있습니다.
5. **Upload Project to Team Server** 팝업 창에서 업로드 프로세스를 확인할 수 있습니다.

앱이 성공적으로 업로드되었습니다. 프라이빗 서버에서 확인하면 선택한 리포지토리에 앱이 있는 것을 볼 수 있습니다:

{{< figure src="/attachments/refguide9/version-control/on-premises-git/project-uploaded-confirmation.png" alt="App Uploaded confirmation window" class="no-border" >}}

### Subversion 앱을 Git으로 이동

이미 Subversion으로 버전 관리되는 기존 앱이 있고 이를 Git 프라이빗 서버에 업로드하려는 경우, 내보내기하여 다시 가져온 다음 서버에 업로드할 수 있습니다.

{{% alert color="info" %}}
이렇게 하면 Studio Pro에서 작업 중인 브랜치를 기반으로 버전 관리되지 않은 앱이 생성됩니다. 즉, Git 리포지토리에서 버전 기록이나 다른 브랜치를 가져올 수 없습니다.

[Git으로 마이그레이션](/developerportal/general/migrate-to-git/)의 지침에 따라 브랜치와 기록을 포함한 전체 앱을 Mendix Git 리포지토리로 이동할 수 있습니다.
{{% /alert %}}

아래 단계를 따르십시오:

1. 앱이 열리면 **File > Export App Package**로 이동합니다.
2. **Export App Package** 대화 상자에서 *.mpk* (Mendix Package) 파일을 저장할 위치를 찾거나, 기본 위치인 애플리케이션 폴더 루트의 새 **packages** 폴더를 수락합니다. 나중에 필요하므로 이 위치를 기록해 두십시오. *.mpk* 파일의 이름을 변경할 수도 있으며(예: *MyGitApp.mpk*), 가져와서 Git 서버에 업로드하면 앱이 해당 이름으로 지정됩니다:

    {{< figure src="/attachments/refguide9/version-control/on-premises-git/export-project-package-dialog.png" alt="Export App Package dialog" class="no-border" >}}

3. **Progress** 팝업 창이 나타나고, 완료되면 **Studio Pro**에서 앱을 닫을 수 있습니다:

    {{< figure src="/attachments/refguide9/version-control/on-premises-git/progress-dialog.png" alt="Progress dialog" class="no-border" >}}

4. 이제 패키지를 다시 가져올 수 있으며, 여기서 Git 프라이빗 서버에 업로드하도록 선택할 수 있습니다. **File** > **Import App Package**로 이동합니다:

    {{< figure src="/attachments/refguide9/version-control/on-premises-git/import-project-package-menu.png" alt="Import App Package menu"   width="250"  class="no-border" >}}

5. 파일 브라우저 대화 상자가 열리면 내보내기 프로세스 중에 *.mpk* 파일을 저장한 위치로 이동합니다.
6. **Import App Package** 대화 상자의 **Where should we store your App?** 섹션에서 **Private server** 옵션을 선택합니다.
7. **Private Server Type** 옵션에서 **Git**을 선택합니다(**Preferences** 양식에서 **Subversion**과 **Git** 모두 활성화된 경우).
8. 주소 텍스트 상자에 프라이빗 리포지토리 링크를 입력하고 **OK**를 클릭합니다. 리포지토리는 **완전히 비어 있어야** 하며, 그렇지 않으면 **Studio Pro**가 앱을 업로드할 수 없습니다:

    {{< figure src="/attachments/refguide9/version-control/on-premises-git/import-project-package-git-dialog.png" alt="Import Git Package menu" class="no-border" >}}

9. **OK**를 클릭합니다.

가져오기 프로세스가 완료되면 이전 Subversion 앱이 이제 Git을 사용하여 버전 관리됩니다.

이전 앱은 여전히 존재합니다. **Studio Pro**는 단순히 버전 관리되지 않은 사본을 만들어 프라이빗 Git 서버에 업로드합니다. 따라서 **Recent Apps** 목록에서 두 앱 모두 볼 수 있습니다:

{{< figure src="/attachments/refguide9/version-control/on-premises-git/recent-apps.png" alt="Recent Apps form" class="no-border" >}}

## 더 읽기

* [버전 관리 참조 가이드](/refguide9/version-control/)
* [Team Server](/developerportal/repository/team-server/)
* [Upload to Version Control Server 참조 가이드](/refguide9/upload-to-version-control-dialog/)
