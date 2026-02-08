---
title: "Studio Pro 개요"
url: /refguide/studio-pro-overview/
weight: 10
description: "탭, 메뉴 등 Studio Pro의 전반적인 내용을 설명합니다."
aliases:
    - /refguide/desktop-modeler-overview.html
    - /refguide/desktop-modeler-overview
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#This document is mapped to the landing page, update the link there if renaming or moving the doc file.
---

## 소개

Mendix Studio Pro는 Mendix 애플리케이션을 생성, 확인 및 편집하기 위한 도구입니다.

하나의 Studio Pro 인스턴스에서는 한 번에 하나의 앱만 열 수 있지만, 필요한 경우 두 개의 Studio Pro 인스턴스를 열 수 있습니다.

{{% alert color="info" %}}
Studio Pro가 열려 있을 때 <kbd>F1</kbd>을 누르면 관련 문서가 열립니다.
{{% /alert %}}

이 문서에서는 Mendix Studio Pro의 사용자 인터페이스를 설명합니다:

{{< figure src="/attachments/refguide/studio-pro-overview/studio-pro-diagram.png" alt="Diagram of the home page of Studio Pro, which labels each section of the home page layout." class="no-border" >}}

## 상단 바 {#top-bar}

Studio Pro 상단 바에는 다음 항목이 포함되어 있습니다:

* [메뉴](#menus) 
* [앱 실행 및 보기 버튼](#run-and-view)
* [Mendix Portal 및 Marketplace 링크](#links) 

### 메뉴 {#menus}

Studio Pro 상단 바에는 [Edit](/refguide/edit-menu/), [View](/refguide/view-menu/), [Version Control](/refguide/version-control-menu/) 등 여러 메뉴가 있습니다. 각 메뉴에는 [배포 패키지 생성](/refguide/create-deployment-package-dialog/), [환경 설정](/refguide/preferences-dialog/) 지정, [**오류**](/refguide/errors-pane/) 패널 확인 등 다양한 작업을 수행할 수 있는 항목이 포함되어 있습니다.

자세한 내용은 [메뉴](/refguide/menus/)를 참조하세요.

### 앱 실행 및 보기 {#run-and-view}

**Publish** 또는 **Run Locally** ({{% icon name="controls-play" %}}) 버튼을 클릭하여 앱을 배포하세요. 배포된 앱을 보려면 **View App**을 클릭하세요.

{{< figure src="/attachments/refguide/studio-pro-overview/view-and-publish.png" alt="View and Publish buttons" class="no-border" >}}

Mendix에서의 배포에 대한 자세한 내용은 [앱 배포](/deployment/)를 참조하세요.

앱 배포 및 버전 관리에 대한 자세한 내용은 *Studio Pro에서 Version Control 사용하기*의 [클라우드에 배포된 앱 버전 관리](/refguide/using-version-control-in-studio-pro/#versioning-app) 섹션을 참조하세요.

### 링크 및 사용자 프로필 메뉴 {#links}

Studio Pro 오른쪽 상단에서 [Mendix Portal](/developerportal/) 및 [Marketplace](/appstore/) 링크를 찾을 수 있습니다.

로그인한 경우 이 링크 옆에 프로필 사진이 표시됩니다. 프로필 사진을 클릭하면 전체 이름과 이메일, 사용자 프로필 링크, **Sign Out** 옵션이 포함된 드롭다운 메뉴가 표시됩니다.

## App Explorer

앱은 폴더와 [모듈](/refguide/modules/)로 그룹화된 개별 파일(문서라고도 함)과 설정으로 구성됩니다. 앱의 전체 구조는 [App Explorer](/refguide/app-explorer/)에서 확인할 수 있습니다.

## 작업 영역 {#working-area}

작업 영역은 현재 작업 중인 문서 탭입니다. 작업 영역과 그 설정은 에디터(예: 페이지, Microflow, Domain Model 에디터)와 문서 유형에 따라 다릅니다.

### 문서 탭 {#documents}

{{% alert color="info" %}}
이 섹션에서는 작업 영역의 문서에 대해 설명하며, 작업 영역 주변에 열고 배치할 수 있는 패널은 다루지 않습니다. 패널 동작에 대한 자세한 내용은 *View Menu*의 [패널 레이아웃](/refguide/view-menu/#layout-of-panes) 섹션을 참조하세요.
{{% /alert %}}

확인하고 편집하는 문서는 탭에 표시됩니다.

최신 웹 브라우저와 마찬가지로 여러 탭을 열 수 있습니다. 이 탭은 닫거나, 재정렬하거나, 나란히 표시할 수 있습니다.

각 문서는 자체 저장 상태, 기록 및 미래를 가지므로 실행 취소 및 다시 실행 작업은 무제한입니다.

## 도킹 가능 패널 {#panes}

도킹 가능 패널은 작업 영역 주변에 배치할 수 있으며 다양한 요소와 설정을 포함합니다.

{{< figure src="/attachments/refguide/studio-pro-overview/pane-example.png" alt="Properties Pane Example" width="300" class="no-border" >}}

예를 들어 [오류 목록](/refguide/errors-pane/)을 확인하거나, [Best Practice Recommender](/refguide/best-practice-recommender/)를 실행하거나, 특정 문서나 요소의 속성을 구성하거나, 도구 상자를 볼 수 있습니다. 패널과 그 레이아웃에 대한 자세한 내용은 [View Menu](/refguide/view-menu/)를 참조하세요.

## 상태 표시줄 {#status-bar}

Studio Pro 메인 창 패널 하단에 상태 표시줄이 있습니다:

{{< figure src="/attachments/refguide/studio-pro-overview/status-bar.png" class="no-border" >}}

왼쪽에는 앱의 현재 상태가 표시됩니다.

오른쪽에는 Version Control 버튼(브랜치 상태, 수신 커밋, 발신 커밋)이 있습니다. 이 버튼을 사용하여 **Branch Line Manager**와 커밋 기록을 열 수 있습니다. 자세한 내용은 [Version Control](/refguide/version-control/)을 참조하세요.

Version Control 옆에는 현재 선택된 언어가 표시됩니다. 앱에 여러 언어를 설정한 경우, 드롭다운을 사용하여 현재 사용 중인 언어를 변경할 수 있습니다. 자세한 내용은 [Language Menu](/refguide/translatable-texts/)를 참조하세요.

## 더 읽어보기

* [키보드 단축키](/refguide/keyboard-shortcuts/)
* [App Explorer](/refguide/app-explorer/)
* [메뉴](/refguide/menus/)
* [개발 모범 사례](/refguide/dev-best-practices/)
* [앱 성능 모범 사례](/refguide/community-best-practices-for-app-performance/)
