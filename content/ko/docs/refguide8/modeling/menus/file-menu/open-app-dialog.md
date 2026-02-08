---
title: "Open Project"
url: /refguide8/open-app-dialog/
weight: 20
description: "Open Project(앱) 흐름과 Open App 대화 상자를 설명합니다."
aliases:
    - /refguide8/open-project-dialog.html
    - /refguide8/open-project-dialog
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Mendix Studio Pro에서 프로젝트를 열려면 다음 중 하나를 수행하십시오:

* 상단 바에서 **File** 메뉴 > **Open Project**를 여십시오
* Studio Pro 랜딩 페이지에서 **Open App**을 클릭하십시오

**Open App** 대화 상자가 열리며, 앱 위치를 선택할 수 있습니다:

{{< figure src="/attachments/refguide8/modeling/menus/file-menu/open-app-dialog/open-app.png" alt="Open App" class="no-border" >}}

앱 위치에 대한 자세한 내용은 [앱이 어디에 저장되어 있습니까?](#location) 섹션을 참조하십시오.

앱은 Team Server, 다른 SVN 서버 또는 로컬 디스크에 위치할 수 있습니다. Team Server 또는 다른 SVN 서버에서 앱을 열 때, Studio Pro는 이미 해당 앱을 다운로드했는지 확인합니다. 다운로드한 경우 단순히 열고, 그렇지 않은 경우 먼저 버전 관리 서버에서 앱을 다운로드합니다.

## 앱이 어디에 저장되어 있습니까? {#location}

이 설정을 사용하여 앱이 저장된 위치를 선택하십시오. [Team Server](#team-server), [프라이빗 서버](#private-server)(Team Server 이외의 SVN 서버) 또는 [로컬 디스크](#local)가 될 수 있습니다. 디스크에 있는 앱이 Team Server 또는 다른 SVN 서버에도 저장되어 있을 수 있으며, 이 경우 **Team Server**/**Private server** 옵션으로 여는 것과 **Locally on disk** 옵션으로 여는 것에 차이가 없습니다.

### Mendix Team Server {#team-server}

열고 싶은 Team Server 앱을 선택한 다음 개발 라인을 선택하십시오.

Mendix Team Server에 대한 자세한 내용은 [Team Server](/developerportal/repository/team-server/)를 참조하십시오.

개발 라인에 대한 자세한 내용은 [Version Control](/refguide8/version-control/)을 참조하십시오.

### Private Server {#private-server}

{{% alert color="info" %}}
**Private server** 옵션은 다른 SVN 서버 지원이 활성화된 경우에만 사용할 수 있습니다: **Edit** > **Preferences** > **Advanced** > **Enable private version control**.
{{% /alert %}}

**App repository address** 필드에 열고 싶은 앱의 주소를 입력하고 **Connect** 버튼을 눌러 저장소에서 개발 라인을 로드하십시오. 그런 다음 개발을 시작할 개발 라인을 선택하십시오.

### Locally on Disk {#local}

이미 디스크에 있는 앱을 열려면 프로젝트 파일을 지정하면 됩니다.

## 더 보기

* [Import Project Package](/refguide8/import-project-package-dialog/)
