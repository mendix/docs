---
title: "앱 열기"
url: /refguide9/open-app-dialog/
weight: 20
description: "앱 열기 플로우와 앱 열기 대화 상자에 대해 설명합니다."
aliases:
    - /refguide9/open-project-dialog.html
    - /refguide9/open-project-dialog
---

## 소개

Mendix Studio Pro에서 앱을 열려면 다음 중 하나를 수행하십시오:

* **File** > **Open App**을 선택합니다
* Studio Pro 랜딩 페이지에서 **Open App**을 클릭합니다

**Open App** 대화 상자가 열리며 앱 목록에서 [앱을 선택](#select-app)하거나, [로컬에서 앱을 열거나](#open-locally), [앱 패키지를 가져올](#import-app) 수 있습니다:

{{< figure src="/attachments/refguide9/modeling/menus/file-menu/open-app-dialog/open-app.png" alt="Open App" class="no-border" >}}

앱은 Team Server, 다른 SVN 서버 또는 로컬 디스크에 위치할 수 있습니다. Team Server 또는 다른 SVN 서버에서 앱을 열 때 Studio Pro는 이미 이 앱을 다운로드했는지 확인합니다. 다운로드한 경우 단순히 엽니다. 아직 다운로드하지 않은 경우 버전 관리 서버에서 먼저 앱을 다운로드합니다.

## 앱 열기

### 앱 선택 {#select-app}

앱 목록에서 앱을 선택할 수 있습니다. 앱을 선택하면 열고자 하는 Branch Line을 선택하거나 **Open in Studio Pro**를 클릭하면 **Current Branch** 열에 표시된 Branch가 열립니다:

{{< figure src="/attachments/refguide9/modeling/menus/file-menu/open-app-dialog/select-app.png" class="no-border" >}}

### 로컬에서 앱 열기 {#open-locally}

디스크에 이미 있는 앱을 열려면 좌측 사이드바에서 **Open App Locally**를 클릭하고 앱 파일을 지정하십시오.

### 앱 패키지 가져오기 {#import-app}

앱 패키지를 가져와서 열 수도 있습니다. 좌측 사이드바에서 **Import App Package**를 클릭하십시오. 앱 패키지 가져오기에 대한 자세한 내용은 [Import App Package](/refguide9/import-app-package-dialog/)를 참조하십시오.

## 더 보기

* [Import App Package](/refguide9/import-app-package-dialog/)
