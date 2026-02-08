---
title: "App 메뉴"
url: /refguide9/app-menu/
description: "Studio Pro의 App 메뉴에 대해 설명합니다."
weight: 30
---

## 소개

**App** 메뉴에서는 앱 및 배포와 관련된 설정을 확인하거나 조작할 수 있습니다. 예를 들어 배포 패키지를 생성할 수 있습니다.

{{< figure src="/attachments/refguide9/modeling/menus/app-menu/app-menu.png" alt="App Menu" class="no-border" >}}

## 도구

**App** > **Tools**에서 Widget 업데이트, 버튼 아이콘, 레이아웃 관련 설정과 Widget 확인 및 클래스를 **Design** 속성으로 변환하는 기능을 찾을 수 있습니다.

### 버튼 아이콘 일괄 업데이트 {#batch-update-button-icons}

**Batch Update Button Icons** 옵션을 사용하면 여러 버튼 아이콘을 한 번에 업데이트할 수 있습니다.

### 레이아웃 일괄 업데이트

**Batch Update Layouts** 옵션을 사용하면 여러 페이지의 레이아웃을 한 번에 업데이트할 수 있습니다.

### Widget 업데이트 {#update-widgets}

**Update Widgets** 옵션은 앱에서 사용 중인 Widget의 현재 버전, 최신 버전 및 업데이트 옵션을 표시합니다.

### Widget 확인

**Check Widgets** 옵션은 앱에 구현된 Widget이 올바르게 빌드되었는지 확인합니다.

### 클래스를 Design 속성으로 변환

**Convert classes to design properties** 옵션을 사용하면 Widget의 클래스를 Design 속성으로 변환하여 Widget 스타일링 변경을 지원할 수 있습니다. 자세한 내용은 [Native Styling](/refguide9/mobile/designing-mobile-user-interfaces/native-styling/)을 참조하십시오.

## 앱 디렉토리 동기화 {#synchronize}

**Synchronize App Directory** 옵션은 앱 디렉토리 내에 필요한 폴더(resources, widgets, theme 등)를 생성합니다. 또한 현재 widgets 폴더 내에 있는 Widget 패키지를 읽습니다. 예를 들어 widgets 폴더에 Widget을 추가한 경우 **Toolbox**에 표시되려면 앱 디렉토리를 동기화해야 합니다.

단축키: <kbd>F4</kbd>

## 탐색기에서 앱 디렉토리 표시

**Show App Directory in Explorer** 옵션은 앱 파일(*.mpr*) 및 리소스, Java 작업 등의 기타 자산이 포함된 디렉토리를 Windows 탐색기에서 표시합니다. 기본적으로 디렉토리는 **MyDocuments** 섹션에 위치합니다.

앱 디렉토리 내의 다음 디렉토리는 앱 스타일 사용자 정의 및 사용자 정의 Widget과 Java 작업 추가에 유용합니다:

* **theme** – 앱의 스타일을 지정하는 데 사용할 수 있는 *.css* 파일을 저장합니다
* **javasource** – JavaScript 작업을 저장합니다
* **widgets** – Widget을 저장합니다

## Eclipse용 배포

**Deploy for Eclipse** 옵션은 앱을 배포 디렉토리에 배포합니다. Java 스텁이 생성되어 Eclipse에서 편집을 시작할 수 있습니다. 이 작업은 Java 작업을 컴파일하지 않습니다. Java 작업을 작성하고 Eclipse를 통해 컴파일 및 디버그하려면 이 옵션을 사용하십시오.

단축키: <kbd>F6</kbd>

## 배포 패키지 생성

**Create Deployment Package** 옵션은 앱을 실행하는 데 필요한 모든 파일이 포함된 Mendix 배포 아카이브 패키지(*.mda*)를 생성합니다. Windows 서버 또는 사용자 정의 Mendix Cloud에 앱을 배포하려는 경우 사용할 수 있습니다.

단축키: <kbd>F7</kbd>

배포 패키지 생성 대화 상자에 표시되는 설정에 대한 자세한 내용은 [Create Deployment Package](/refguide9/create-deployment-package-dialog/)를 참조하십시오.

## 배포 디렉토리 정리 {#clean-deployment-directory}

**Clean Deployment Directory** 옵션은 배포 디렉토리를 정리합니다.

## 라이선스 클라우드 노드에 배포 {#deploy}

**Deploy to Licensed Cloud Node** 옵션은 Team Server 앱의 최신 커밋된 리비전을 연결된 Mendix Cloud 노드에 배포합니다.

단축키: <kbd>Ctrl</kbd> + <kbd>F5</kbd>

{{% alert color="warning" %}}
[Mendix Studios Target](/developerportal/deploy/studio-deployment-settings/#target)이 설정되어 있어야 하며, 배포하는 사용자에게 설정된 대상에 대한 전송 권한이 있어야 합니다.
{{% /alert %}}

이 옵션 사용에 대한 자세한 내용은 [Deploy to the Cloud](/refguide9/deploy-to-the-cloud-dialog/)를 참조하십시오.

## 더 보기

* [Studio Pro Overview](/refguide9/studio-pro-overview/)
* [Deploying Apps](/deployment/)
