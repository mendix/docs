---
title: "App 메뉴"
url: /refguide10/app-menu/
description: "Studio Pro의 App 메뉴에 대해 설명합니다."
weight: 30
---

## 소개

**App** 메뉴에서는 앱 및 배포와 관련된 설정을 보거나 조작할 수 있습니다. 예를 들어, 배포 패키지를 생성할 수 있습니다.

{{< figure src="/attachments/refguide10/modeling/menus/app-menu/app-menu.png" alt="App Menu" class="no-border" >}}

## 도구

**App** > **Tools** 아래에서 위젯 업데이트, 버튼 아이콘, 레이아웃 설정, 위젯 검사, 클래스를 **Design** 속성으로 변환하는 설정을 찾을 수 있습니다.

### 버튼 아이콘 일괄 업데이트 {#batch-update-button-icons}

**Batch Update Button Icons** 옵션을 사용하면 단일 일괄 처리로 여러 버튼 아이콘을 업데이트할 수 있습니다.

### 레이아웃 일괄 업데이트

**Batch Update Layouts** 옵션을 사용하면 단일 일괄 처리로 여러 페이지의 레이아웃을 업데이트할 수 있습니다.

### 위젯 검사

**Check Widgets** 옵션은 앱에 구현한 위젯이 올바르게 빌드되었는지 검사합니다.

### 위젯 업데이트 {#update-widgets}

**Update Widgets** 옵션은 앱에서 사용 중인 위젯의 현재 버전, 최신 버전, 업데이트 옵션을 표시합니다.

### 클래스를 Design 속성으로 변환

**Convert classes to design properties** 옵션을 사용하면 위젯의 클래스를 디자인 속성으로 변환하여 위젯 스타일링 변경을 지원합니다. 자세한 내용은 [Native Styling](/refguide10/mobile/designing-mobile-user-interfaces/native-styling/)을 참조하세요.

### Bill of Materials 생성 {#generate-bill-of-materials}

**Generate Bill of Materials** 옵션을 사용하면 현재 프로젝트에 대한 Bill of Materials를 생성할 수 있습니다. 자세한 내용은 [SBOM Generation](/refguide10/sbom-generation/)을 참조하세요.

## 앱 디렉토리 동기화 {#synchronize}

**Synchronize App Directory** 옵션은 앱 디렉토리 내에 필요한 폴더(resources, widgets, theme 등)를 생성합니다. 또한 현재 widgets 폴더 내에 있는 위젯 패키지를 읽습니다. 예를 들어, widgets 폴더에 위젯을 추가한 경우 **Toolbox**에 표시되도록 앱 디렉토리를 동기화해야 합니다.

단축키: <kbd>F4</kbd>

## Explorer에서 앱 디렉토리 표시

**Show App Directory in Explorer** 옵션은 앱 파일(*.mpr*)과 리소스, Java 작업 등의 기타 자산이 포함된 디렉토리를 Windows Explorer에 표시합니다. 기본적으로 디렉토리는 **MyDocuments** 섹션에 위치합니다.

앱 디렉토리 내의 다음 디렉토리는 앱 스타일 사용자 정의 및 사용자 정의 위젯과 Java 작업 추가에 유용합니다:

* **theme** – 애플리케이션 스타일링에 사용할 수 있는 *.css* 파일을 저장합니다
* **javasource** – JavaScript 작업을 저장합니다
* **widgets** – 위젯을 저장합니다

## Eclipse용 배포{#eclipse}

**Deploy for Eclipse** 옵션은 앱을 배포 디렉토리에 배포합니다. Java 스텁이 생성되어 Eclipse에서 편집을 시작할 수 있습니다. 이 작업은 Java 작업을 컴파일하지 않습니다. Java 작업을 작성하고 Eclipse를 통해 컴파일 및 디버그하려는 경우 이 옵션을 사용하세요.

단축키: <kbd>F6</kbd>

Eclipse에서 Java 작업을 작성하는 방법에 대한 자세한 내용은 [Using Eclipse](/refguide10/using-eclipse/)를 참조하세요.

## 배포 패키지 생성{#create-package}

**Create Deployment Package** 옵션은 앱을 실행하는 데 필요한 모든 파일이 포함된 Mendix Deployment Archive 패키지(*.mda*)를 생성합니다. Windows 서버 또는 사용자 정의 Mendix Cloud에 앱을 배포하려는 경우 사용할 수 있습니다.

단축키: <kbd>F7</kbd>

Create Deployment Package 대화 상자에 표시되는 설정에 대한 자세한 내용은 [Create Deployment Package](/refguide10/create-deployment-package-dialog/)를 참조하세요.

## 배포 디렉토리 정리 {#clean-deployment-directory}

**Clean Deployment Directory** 옵션은 배포 디렉토리를 정리합니다.

## 라이선스가 부여된 Cloud 노드에 배포 {#deploy}

**Deploy to Licensed Cloud Node** 옵션은 Team Server 앱의 최신 커밋 리비전을 연결된 Mendix Cloud 노드에 배포합니다.

단축키: <kbd>Ctrl</kbd> + <kbd>F5</kbd>

{{% alert color="warning" %}}
[Mendix Studios Target](/developerportal/deploy/studio-deployment-settings/#target)이 설정되어야 하며, 배포하는 사용자가 설정된 대상에 대한 전송 권한이 있어야 합니다.
{{% /alert %}}

이 옵션 사용에 대한 자세한 내용은 [Deploy to the Cloud](/refguide10/deploy-to-the-cloud-dialog/)를 참조하세요.

## 네이티브 모바일 앱 빌드

[네이티브 프로필](/refguide10/navigation/#native-phone)이 있는 앱의 경우, 이 옵션은 [Mendix Native Mobile Builder](/releasenotes/mobile/mendix-native-mobile-builder/)를 실행합니다. 이 마법사는 앱 구성 및 게시에 필요한 단계를 안내합니다.

네이티브 모바일 여정의 첫 번째 단계는 [Build a Mendix Native App Locally](/refguide10/mobile/distributing-mobile-apps/building-native-apps/native-build-locally/)를 참조하세요.

## 종속성 동기화

종속성 동기화는 특정 종속성에 변경 사항이 있을 때마다 백그라운드에서 자동으로 트리거됩니다. Studio Pro에서 앱을 열 때도 발생합니다.

**App** 메뉴를 열고 **Synchronize Dependencies**를 선택하여 수동 동기화를 트리거할 수 있습니다.

자세한 내용은 *Managed Dependencies*의 [Dependency Sychronization](/refguide10/managed-dependencies/#dependency-synchronization) 섹션을 참조하세요.

## 보안 개요 표시

**Show Security Overview** 옵션은 앱의 보안에 대한 통합 개요를 볼 수 있는 [Security Overview](/refguide10/security-overview/)를 엽니다.

## 더 읽기

* [Studio Pro 개요](/refguide10/studio-pro-overview/)
* [앱 배포](/deployment/)
