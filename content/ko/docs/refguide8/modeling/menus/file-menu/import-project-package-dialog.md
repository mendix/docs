---
title: "Import Project Package"
url: /refguide8/import-project-package-dialog/
weight: 40
description: "Import Project Package 프로세스와 Import Project Package 대화 상자를 설명합니다."
---

## 소개

Mendix 프로젝트 패키지(*.mpk*) 파일에서 새 앱을 생성하려면 프로젝트 패키지를 가져와야 합니다. 새 앱은 버전 관리 서버 또는 로컬 디스크에 저장할 수 있습니다.

프로젝트 패키지를 가져오려면 다음을 수행하십시오:

1. 상단 바에서 **File** 메뉴 > **Import Project Package**를 선택하십시오.
2. 가져오려는 *.mpk* 파일을 찾으십시오.
3. **Import Project Package** 대화 상자에서 관련 옵션을 선택하고 **OK**를 클릭하십시오. 선택할 수 있는 옵션에 대한 자세한 내용은 아래 섹션을 참조하십시오.

    {{< figure src="/attachments/refguide8/modeling/menus/file-menu/import-project-package-dialog/import-project-package.png" alt="Import Project Package Dialog Window" class="no-border" >}}

프로젝트 패키지는 [Export Project Package](/refguide8/export-project-package-dialog/)를 사용하여 생성할 수 있습니다.

## 앱을 어디에 저장하시겠습니까?

이 설정을 사용하여 앱을 저장할 위치를 선택하십시오. [Team Server](#team-server), [프라이빗 서버](#private-server)(Team Server 이외의 SVN 서버) 또는 [로컬 디스크](#local)가 될 수 있습니다.

### Mendix Team Server {#team-server}

앱을 Team Server에 업로드할 때, 새 저장소를 생성하거나 기존 저장소에 업로드할 수 있습니다.

#### New Mendix Team Server

새 Mendix Team Server에 앱을 저장하도록 선택하면, 새 Team Server 프로젝트가 생성됩니다. **App name** 필드에 새 Team Server 프로젝트 및 저장소의 이름을 입력해야 합니다.

#### Existing Mendix Team Server

기존 저장소를 사용하려면 **Team Server App** 옵션에서 앱을 선택하십시오. 이 방법은 기존 저장소가 비어 있는 경우에만 작동합니다.

Mendix Team Server에 대한 자세한 내용은 [Team Server](/developerportal/repository/team-server/)를 참조하십시오.

### Private Server {#private-server}

{{% alert color="info" %}}
**Private server** 옵션은 다른 SVN 서버 지원이 활성화된 경우에만 사용할 수 있습니다: **Edit** > **Preferences** > **Advanced** > **Enable private version control**.
{{% /alert %}}

**App repository address** 필드에 앱을 업로드할 저장소 주소를 입력하십시오.

### Locally on Disk {#local}

새 앱을 버전 관리 서버에 업로드할 필요가 없는 경우 이 옵션을 선택하십시오. 이 경우 Studio Pro가 실행 중인 컴퓨터의 로컬 디스크에만 저장됩니다.

## Project Directory

이 필드를 사용하여 앱의 프로젝트 파일이 저장될 디렉터리를 선택하십시오. 버전 관리가 활성화된 경우, 제안된 이름이 *-main*으로 끝나며 이 앱의 메인 개발 라인임을 나타냅니다.

## 더 보기

* [Team Server](/developerportal/repository/team-server/)
* [Export Project Package](/refguide8/export-project-package-dialog/)
