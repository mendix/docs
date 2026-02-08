---
title: "환경 설정"
url: /refguide9/preferences-dialog/
weight: 50
---

## 소개

메뉴의 **Preferences** 옵션은 Studio Pro 전체에 적용되는 사용자별 환경 설정을 지정할 수 있는 대화 상자를 엽니다:

{{< figure src="/attachments/refguide9/modeling/menus/edit-menu/preferences-dialog/preferences.png" alt="Preferences" width="600" class="no-border" >}}

## General 탭 {#general}

### 인터페이스 {#interface}

#### 활성 문서를 App Explorer에서 선택 유지

활성화하면 **App Explorer**가 현재 활성 문서를 자동으로 강조 표시합니다. 이 속성을 비활성화하면 활성 문서가 변경되어도 **App Explorer**의 선택이 변경되지 않습니다.

#### 스타일링 표시 대상

**Show styling for** 설정은 App Explorer에 표시되는 스타일링 파일을 구성합니다.

다음 옵션 중 하나를 선택할 수 있습니다:

* **App Only** – 가장 일반적인 경우를 다루며 앱별 스타일링을 사용자 정의할 수 있습니다. 이를 선택하면 App Explorer > **App** > **Styling**에서 **theme** 폴더의 모든 파일을 볼 수 있습니다.
* **App and UI resources modules** (*기본값*) – 이 옵션은 UI 리소스 모듈을 만들거나 편집하려는 개발자를 대상으로 합니다. 예를 들어 디자인 시스템/테마를 빌드하거나 확장할 수 있습니다. 이 옵션은 또한 UI 리소스로 표시된 모듈에 해당 **themesource** 폴더의 파일이 포함된 **Styling** 폴더를 추가합니다.
* **App and all modules** – 위 옵션에 추가하여 UI 리소스로 표시되었는지 여부에 관계없이 모든 모듈에 **Styling** 폴더를 추가합니다.

스타일링 편집기에 대한 자세한 내용은 *How to Customize Styling*의 [Using the Styling Editor](/howto9/front-end/customize-styling-new/#styling-editor) 섹션을 참조하십시오.

### Error List

#### 자동 확인 지연

**Auto-check delay**는 변경 후 일관성 검사를 시작하기 전에 Studio Pro가 대기하는 밀리초 수입니다. 변경 후 Studio Pro가 느리게 응답하는 경우 대규모 앱에서 이 설정을 늘리십시오.

#### 편집기에서 표시된 오류 및 경고 강조

**Highlight shown errors and warnings in the editor**를 선택하면 Error List에 현재 표시된 오류와 경고(**Errors** 및 **Warnings** 토글 버튼과 억제 규칙에 의해 결정됨)가 편집기의 해당 요소에 강조 표시됩니다.

### 배포

#### JDK 디렉토리 {#jdk}

여기서 지원되는 각 Java 버전에 대한 Java Development Kit (JDK)의 디렉토리를 선택할 수 있습니다. 이러한 JDK는 앱을 로컬로 배포할 때 사용됩니다. 일반적으로 올바른 디렉토리가 자동으로 찾아집니다.

Mendix 앱을 실행하려면 JDK가 필요합니다. Mendix Runtime이 Java Virtual Machine (JVM)에서 실행되기 때문입니다.

#### Run 최적화 활성화

이 설정을 활성화하면 Studio Pro에서 변경한 후 실행 중인 앱이 업데이트되는 속도가 향상됩니다. 페이지, 레이아웃 또는 스니펫만 변경된 경우 배포 시간을 줄이기 위해 앱의 전체 재시작이 건너뜁니다. 또한 관련 파일이 변경되지 않은 경우 Java 컴파일이 수행되지 않습니다.

#### Gradle을 사용하여 빌드 {#gradle}

이 설정을 활성화하면 Gradle을 사용하여 앱을 빌드합니다. 이 설정이 비활성화되면 대신 Ant가 사용됩니다.

#### Gradle 디렉토리

앱을 배포하는 데 사용하는 컴퓨터에서 Gradle이 위치한 디렉토리입니다. 일반적으로 올바른 디렉토리가 자동으로 찾아집니다.

**Build using Gradle** 설정이 활성화된 경우 Mendix 앱을 배포하려면 Gradle이 필요합니다.

### 디스크 위치

#### 기본 앱 디렉토리 {#default-directory}

새 앱이 저장되는 디렉토리입니다. 새 앱을 만들 때 [App Settings](/refguide9/new-app/#app-settings) 대화 상자에서 사용됩니다. **App Settings** 대화 상자에서 다른 디렉토리를 선택하면 해당 디렉토리가 새 기본 앱 디렉토리로 저장됩니다.

### Mendix Assist 탭

#### Logic Bot

**Logic Bot** 탭에는 다음 설정이 포함되어 있습니다:

* **Enable MxAssist Logic Bot** – 활성화하면 [MxAssist Logic Bot](/refguide9/mx-assist-logic-bot/)이 활성화되어 Microflow Activity에 대한 제안을 제공할 수 있습니다. Microflow 편집기의 우측 상단에서도 MxAssist Logic Bot을 켜고 끌 수 있습니다.
* **Show Suggestions for System Variables** – 활성화하면 MxAssist Logic Bot이 제안에 시스템 객체를 포함합니다(예: currentUser 또는 currentSession과 같은 시스템 객체 변경을 제안할 수 있습니다).

#### Performance Bot

**Performance Bot** 탭에는 다음 설정이 포함되어 있습니다:

* **Show recommendation in editors** – 활성화하면 [MxAssist Performance Bot](/refguide9/mx-assist-performance-bot/)이 시각적 편집기에서 성능 문제가 포함된 요소를 강조 표시합니다.

* **Automatically run an inspection after opening an app** – 활성화하면 [MxAssist Performance Bot](/refguide9/mx-assist-performance-bot/)이 앱을 열 때 자동으로 검사를 실행합니다. 앱에 오류가 포함된 경우 검사가 실행되지 않습니다.

## Model 탭

### Widget이 자동으로 내용을 채우라는 메시지를 표시할 때 기본적으로 '예'를 선택

이 설정은 데이터 Widget의 내용을 자동으로 채울지 여부에 대한 질문의 기본 응답을 정의합니다. 이 질문은 예를 들어 Entity를 Data View Widget으로 드래그할 때 표시됩니다. 활성화하면 사전 선택된 답변이 **예**이고, 그렇지 않으면 **아니오**입니다.

## Version Control 탭

### 파일 비교

#### 실행 파일

[commit dialog box](/refguide9/commit-dialog/)에서 파일 변경 내용의 세부 사항을 보는 데 사용되는 프로그램의 경로와 이름입니다.

예를 들어 Visual Studio Code에서 파일 비교를 설정하는 방법은 아래와 같습니다:

```text
{path to VS Code}/Code.exe --wait --diff "{0}" "{1}"
```

#### 인수 패턴

파일 비교 프로그램에 전달되는 인수가 파생되는 패턴입니다. 이 패턴에서 다음 두 가지 자리 표시자를 사용할 수 있습니다:

* `{0}` – 인수가 파일 비교 프로그램에 전달되기 전에 원본 파일의 이름으로 대체됩니다
* `{1}` – 인수가 파일 비교 프로그램에 전달되기 전에 변경된 파일의 이름으로 대체됩니다

### Subversion

#### 프라이빗 버전 관리(Subversion) 활성화 {#enable}

[Mendix Team Server](/developerportal/repository/team-server/)가 아닌 액세스 가능한 다른 Subversion 서버에 저장된 앱에서 작업하려면 이 옵션을 선택하십시오. 이렇게 하면 앱을 열거나, 다운로드하거나, 업로드할 때 Subversion 서버에서 앱의 위치를 지정할 수 있습니다.

### Git

#### 이름

Git이 커밋 메시지에 사용할 이름을 지정하여 더 유익한 메시지를 만드십시오.

#### 이메일

Git이 커밋 메시지에 사용할 이메일을 지정하여 더 유익한 메시지를 만드십시오.

#### Clone {#clone}

{{% alert color="info" %}}
다른 클론 유형은 Studio Pro 버전 9.24.28 이상에서 Git을 사용할 때 사용할 수 있습니다.
{{% /alert %}}

앱 다운로드 또는 이미 다운로드한 앱의 다른 Branch 체크아웃과 같은 향후 클론 작업에 사용할 [Clone type](/refguide9/clone-type/)을 선택하십시오. 이 설정을 변경해도 이미 다운로드한 앱에는 영향을 미치지 않습니다.

#### 자동 리포지토리 최적화 활성화 {#optimization}

**Enable automatic repository optimization**을 선택하면 Git 리포지토리 최적화가 정기적으로 자동 실행됩니다. 이를 통해 성능과 리포지토리 크기 측면에서 이점을 제공하는 스토리지 구조를 유지할 수 있습니다.

#### 커밋 수

이 옵션은 [Enable automatic repository optimization](#optimization)이 켜져 있을 때 사용할 수 있습니다. Studio Pro는 로컬 리포지토리에서 수행된 커밋 수를 추적합니다. 배경 최적화를 시작할 시점을 알리는 최소 커밋 수를 수동으로 지정할 수 있습니다. 자세한 내용은 [Git Storage Optimization](/refguide9/git-storage-optimization-dialog/)을 참조하십시오.

#### 프라이빗 버전 관리(Git) 활성화

[Mendix Team Server](/developerportal/repository/team-server/)가 아닌 액세스 가능한 프라이빗 Git 서버에 저장된 앱에서 작업하려면 이 옵션을 선택하십시오. 이렇게 하면 앱을 열거나, 다운로드하거나, 업로드할 때 Git 서버에서 앱의 위치를 지정할 수 있습니다. 이 섹션에서는 Git으로 커밋을 식별하는 데 사용될 이름 및 이메일 값도 지정해야 합니다.

## Advanced 탭

### 프록시 서버

Studio Pro를 실행하는 컴퓨터가 인터넷에 직접 접근할 수 없고 인증이 필요한 프록시 서버에 연결해야 하는 경우가 있습니다. 이 경우 이러한 설정을 사용하여 프록시 서버에 연결하기 위한 사용자 이름과 비밀번호를 지정할 수 있습니다.

### 사용 데이터 {#usage-data}

**Send Studio Pro usage data to Mendix** 설정이 활성화되면 Studio Pro가 Mendix에 사용 데이터를 전송하여 Mendix가 문제를 식별하고 사용자 경험을 개선할 수 있게 합니다. 사용 데이터에는 민감한 정보가 포함되지 않습니다. 이 기능을 비활성화할 수 있지만 일부 기능의 동작에 영향을 미치거나 사용자가 보고한 문제를 식별하지 못하게 하거나 아직 보고되지 않은 문제 추적에 영향을 줄 수 있습니다. 이 설정은 머신별이며 이 기능을 변경해도 기존 설치된 버전에는 영향을 미치지 않습니다.

{{% alert color="info" %}}
이 기능은 현재 Studio Pro 9.22 이상에서 사용할 수 있습니다.
{{% /alert %}}

### 렌더링 {#rendering}

하드웨어 및 드라이버 문제로 인해 Studio Pro를 실행할 때 성능 문제가 발생할 수 있습니다. 이러한 문제는 대화 상자가 예상보다 훨씬 느리게 열리고 닫히며 UI가 전반적으로 느려지는 형태로 나타날 수 있습니다. 하드웨어 문제를 해결할 수 없는 경우 **Enable software rendering mode** 설정을 켜서 이러한 문제를 완화할 수 있습니다. 이 설정을 활성화하면 Studio Pro를 재시작해야 적용됩니다. 이 설정을 켜고 앱을 실행하면 CPU 사용량이 증가할 수 있습니다.

{{% alert color="info" %}}
이 기능은 현재 Studio Pro 9.24에서 사용할 수 있습니다.
{{% /alert %}}

### 피드백 설문

**Show feedback survey periodically** 설정이 활성화되면 Studio Pro가 주기적으로 피드백 설문을 표시하여 사용 경험에 대한 피드백을 수집합니다. 이를 통해 Mendix가 사용자 피드백을 기반으로 제품을 개선할 수 있습니다. 자세한 내용은 [Feedback Survey](/refguide9/feedback-survey/)를 참조하십시오.

## Work Environment 탭

### 기본 페이지 편집기 {#default-page-editor}

이 옵션은 페이지가 열리는 기본 페이지 편집기 모드를 설정합니다: **Structure mode** 또는 **Design mode**. 페이지 편집기 모드에 대한 자세한 내용은 *Page*의 [Page Editor Modes](/refguide9/page/#page-editor-modes) 섹션을 참조하십시오.

## New Features 탭 {#new-features}

**New features** 탭에서 새 기능을 켜거나 끌 수 있습니다. 이러한 기능은 아직 이전 버전을 제거할 만큼 충분히 개발되지 않았거나 현재 선택 사항인 기능입니다.

{{% alert color="info" %}}
이러한 설정의 변경 사항을 적용하려면 Studio Pro를 재시작해야 합니다.
{{% /alert %}}

### 브라우저 로그인

**Use your default browser to sign in** 옵션을 사용하면 기본 브라우저를 사용하여 Studio Pro에 로그인할 수 있습니다. 브라우저에 활성 Mendix 세션이 있는 경우 해당 세션으로 로그인됩니다.

기본값: *활성화됨*

### 다크 모드 미리보기 {#dark-mode}

{{% alert color="info" %}}
이 기능은 현재 [베타](/releasenotes/release-status/) 상태입니다.
{{% /alert %}}

**Dark mode** 옵션을 사용하면 Studio Pro 사용자 인터페이스의 다크 모드를 미리 볼 수 있습니다.

{{% alert color="info" %}}
Studio Pro의 모든 화면이 아직 다크 모드를 지원하지는 않습니다.
{{% /alert %}}

기본값: *비활성화됨*

### 세밀한 충돌 해결이 포함된 새로운 병합 알고리즘

이 옵션을 사용하면 앱을 업데이트하거나 변경 사항을 병합할 때 사용되는 새로운 병합 알고리즘을 활성화할 수 있습니다. 알고리즘에 대한 자세한 내용은 [New Merge Algorithm with Fine-Grained Conflict Resolution](/refguide9/new-merge-algorithm/)을 참조하십시오.

기본값: *활성화됨*

### Properties 창 {#properties}

{{% alert color="info" %}}
이 기능은 현재 [베타](/releasenotes/release-status/) 상태입니다.
{{% /alert %}}

**New Properties pane preview** 옵션을 사용하면 Studio Pro에서 속성을 보고 변경하기 위한 개선된 UI를 활성화할 수 있습니다.

기본값: *비활성화됨*

## 더 보기

* [Upload to Version Control Server](/refguide9/upload-to-version-control-dialog/)
* [Working with an On-Premises Version Control Server](/refguide9/on-premises-svn/)
