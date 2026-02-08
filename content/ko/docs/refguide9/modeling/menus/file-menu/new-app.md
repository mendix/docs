---
title: "새 앱"
url: /refguide9/new-app/
weight: 10
description: "이 문서는 새 앱 플로우와 앱 설정 대화 상자에 대해 설명합니다."
aliases:
    - /refguide9/app-settings-dialog.html
    - /refguide9/app-settings-dialog
    - /refguide9/new-project/
---

## 소개

Mendix Studio Pro에서 새 앱을 생성할 수 있습니다.

새 앱을 생성하려면 아래 단계를 따르십시오:

1. 다음 중 하나를 수행합니다:
    1. 상단 바의 **File** 메뉴 > **New App**을 엽니다.
    2. Studio Pro 랜딩 페이지에서 **Create New App**을 클릭합니다.

2. **My Apps** 탭에서 시작점(앱 템플릿)을 선택합니다.
3. **Use this app**을 클릭합니다.
4. **App Settings** 대화 상자에서 앱의 설정을 선택하고 **Create app**을 클릭합니다. 앱 설정에 대한 자세한 내용은 [App Settings](#app-settings) 섹션을 참조하십시오.

새 앱이 생성되고 열립니다.

## App Settings {#app-settings}

새 앱을 만들 때 앱 이름, Mendix 플랫폼에서 제공하는 온라인 서비스 활성화 여부, 기본 언어, 앱 파일이 저장되는 디스크 위치를 지정할 수 있는 **App Settings** 대화 상자가 열립니다:

{{< figure src="/attachments/refguide9/modeling/menus/file-menu/new-app/app-settings-dialog.png" alt="App Settings" class="no-border" >}}

### App Name

새 앱의 이름입니다. 이 이름은 디스크의 앱 디렉토리 및 파일 이름으로 사용됩니다. 이 앱에 대해 온라인 서비스를 활성화하면 Team Server 리포지토리와 **My Apps**의 해당 앱에도 이름이 사용됩니다.

### Enable Online Services

Mendix 플랫폼은 [버전 관리](/refguide9/version-control/) 및 [클라우드 배포](/deployment/)와 같은 온라인 서비스를 제공합니다. 활성화하면 [Apps](https://sprintr.home.mendix.com/)에 앱과 해당 버전 관리 리포지토리가 생성됩니다.

*No*를 선택하면 로컬 디스크에만 저장되는 앱이 생성됩니다. 나중에 이 로컬 앱을 버전 관리 서버에 업로드하여 버전 관리의 이점을 누릴 수 있습니다.

### Default Language

기본 언어는 앱의 사용자 인터페이스 언어입니다. 양식 및 기타 사용자 인터페이스 요소에서 처음 사용할 언어를 선택하십시오. 나중에 언제든지 앱에 추가 언어를 추가할 수 있습니다.

### App Directory

앱 파일이 저장되는 디렉토리를 지정합니다.

새 앱에 대해 온라인 서비스를 활성화하면 디렉토리 이름에 *-main* 접미사가 자동으로 추가됩니다. 이는 디렉토리에 앱의 메인 Branch Line이 포함되어 있음을 나타내는 데 사용됩니다. 앱에서 작업하는 동안 새 Branch를 만들고 다른 디렉토리로 다운로드할 수 있습니다. Branch Line 관리에 대한 자세한 내용은 [Branch Line Manager](/refguide9/branch-line-manager-dialog/)를 참조하십시오.

새 앱이 저장되는 기본 디렉토리는 [Preferences](/refguide9/preferences-dialog/#default-directory) 대화 상자에서 변경할 수 있습니다.

## 더 보기

* [Version Control](/refguide9/version-control/)
* [Open App](/refguide9/open-app-dialog/)
