---
title: "앱 패키지 가져오기"
url: /refguide9/import-app-package-dialog/
weight: 40
description: "앱 패키지 가져오기 프로세스와 앱 패키지 가져오기 대화 상자에 대해 설명합니다."
aliases:
    - /refguide9/import-project-package-dialog/
---
## 소개

Mendix 앱 패키지(*.mpk*) 파일에서 새 앱을 만들려면 앱 패키지를 가져와야 합니다. 새 앱은 버전 관리 서버 또는 로컬 디스크에 저장할 수 있습니다.

앱 패키지를 가져오려면 다음과 같이 하십시오:

1. 상단 바의 **File** 메뉴 > **Import App Package**를 선택합니다
2. 가져올 *.mpk* 파일을 찾습니다.
3. **Import App Package** 대화 상자에서 관련 옵션을 선택하고 **OK**를 클릭합니다. 선택할 수 있는 옵션에 대한 자세한 내용은 아래 섹션을 참조하십시오.

    {{< figure src="/attachments/refguide9/modeling/menus/file-menu/import-app-package-dialog/import-app-package.png" alt="Import App Package Dialog Window" class="no-border" >}}

앱 패키지는 [Export App Package](/refguide9/export-app-package-dialog/)를 사용하여 만들 수 있습니다.

## 앱 저장 위치

이 설정을 사용하여 앱을 저장할 위치를 선택합니다. [Team Server](#team-server), [프라이빗 서버](#private-server)(Team Server가 아닌 SVN 서버) 또는 [로컬 디스크](#local)를 선택할 수 있습니다.

### Mendix Team Server {#team-server}

앱을 Team Server에 업로드할 때 새 리포지토리를 만들거나 기존 리포지토리에 업로드할 수 있습니다.

#### 새 Mendix Team Server

새 Mendix Team Server에 앱을 저장하도록 선택하면 새 Team Server 앱이 생성됩니다. **App name** 필드에 새 Team Server 앱 및 리포지토리의 이름을 입력해야 합니다.

#### 기존 Mendix Team Server

기존 리포지토리를 사용하려면 **Team Server App** 옵션에서 앱을 선택하십시오. 이는 기존 리포지토리가 비어 있는 경우에만 작동합니다.

Mendix Team Server에 대한 자세한 내용은 [Team Server](/developerportal/repository/team-server/)를 참조하십시오.

### 프라이빗 서버 {#private-server}

{{% alert color="info" %}}
**Private server** 옵션은 다른 SVN 서버에 대한 지원이 활성화된 경우에만 사용할 수 있습니다: **Edit** >**Preferences** > **Version Control** > **Enable private version control**.
{{% /alert %}}

**App repository address** 필드에 앱을 업로드할 리포지토리의 주소를 입력하십시오.

### 로컬 디스크 {#local}

버전 관리 서버에 새 앱을 업로드할 필요가 없는 경우 이 옵션을 선택하십시오. 이 경우 Studio Pro를 실행하는 컴퓨터의 로컬 디스크에만 저장됩니다.

## App Directory

앱 파일이 저장될 디렉토리를 선택하는 데 이 필드를 사용하십시오. 버전 관리가 활성화된 경우 제안된 이름은 앱의 메인 개발 라인임을 나타내기 위해 *-main*으로 끝납니다.

## 더 보기

* [Team Server](/developerportal/repository/team-server/)
* [Export App Package](/refguide9/export-project-package-dialog/)
