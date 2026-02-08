---
title: "New Project"
url: /refguide8/new-project/
weight: 10
description: "이 문서에서는 New Project(새 앱) 흐름과 App Settings 대화 상자를 설명합니다."
aliases:
    - /refguide8/app-settings-dialog.html
    - /refguide8/app-settings-dialog
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Mendix Studio Pro에서 새 프로젝트를 생성할 수 있습니다.

새 프로젝트를 생성하려면 아래 단계를 따르십시오:

1. 다음 중 하나를 수행하십시오:
    1. 상단 바에서 **File** 메뉴 > **New Project**를 여십시오.
    2. Studio Pro 랜딩 페이지에서 **New App**을 클릭하십시오.

2. **My Apps** 탭에서 시작점이 되는 앱 템플릿을 선택하십시오.
3. **Use this app**을 클릭하십시오.
4. **App Settings** 대화 상자에서 프로젝트 설정을 선택한 후 **Create app**을 클릭하십시오. 앱 설정에 대한 자세한 내용은 [App Settings](#app-settings) 섹션을 참조하십시오.

새 프로젝트가 생성되어 열립니다.

## App Settings {#app-settings}

새 앱을 생성할 때 **App Settings** 대화 상자가 열리며, 여기서 앱 이름, Mendix Platform에서 제공하는 온라인 서비스의 활성화 여부, 기본 언어, 앱의 프로젝트 파일이 저장될 디스크 위치를 지정할 수 있습니다:

{{< figure src="/attachments/refguide8/modeling/menus/file-menu/new-project/app-settings-dialog.png" alt="App Settings" class="no-border" >}}

### Name

새 앱의 이름입니다. 이 이름은 디스크의 프로젝트 디렉터리 및 파일 이름으로 사용됩니다. 이 앱에 대해 온라인 서비스를 활성화하면, 이 이름은 Team Server 저장소 및 **My Apps**의 해당 앱에도 사용됩니다.

### Enable Online Services

Mendix Platform은 [버전 관리](/refguide8/version-control/) 및 [클라우드 배포](/deployment/)와 같은 온라인 서비스를 제공합니다. 활성화하면 Mendix Portal에 프로젝트와 해당 버전 관리 저장소가 생성됩니다.

*No*를 선택하면 로컬 디스크에만 저장되는 앱을 생성합니다. 나중에 이 로컬 앱을 버전 관리 서버에 업로드하여 버전 관리의 이점을 누릴 수 있습니다.

### Default Language

기본 언어는 프로젝트의 사용자 인터페이스 언어입니다. 폼 및 기타 사용자 인터페이스 요소에서 처음 사용할 언어를 선택하십시오. 나중에 언제든지 프로젝트에 추가 언어를 추가할 수 있습니다.

### Project Directory

앱의 파일이 저장될 프로젝트 디렉터리를 지정하십시오. 새 앱에 대해 온라인 서비스를 활성화하면, 디렉터리 이름에 *-main* 접미사가 자동으로 추가됩니다. 이는 해당 디렉터리가 프로젝트의 메인 브랜치 라인을 포함하고 있음을 나타냅니다. 앱 작업 중에 새 브랜치를 만들고 다른 디렉터리에 다운로드할 수 있습니다. 브랜치 라인 관리에 대한 자세한 내용은 [Branch Line Manager](/refguide8/branch-line-manager-dialog/)를 참조하십시오.

## 더 보기

* [Version Control](/refguide8/version-control/)
* [Open Project](/refguide8/open-app-dialog/)
