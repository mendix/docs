---
title: "환경 설정"
url: /refguide10/preferences-dialog/
weight: 50
---

## 소개

메뉴의 **Preferences** 옵션은 Studio Pro 전체에 적용되는 사용자별 환경 설정을 지정할 수 있는 대화 상자를 엽니다:

{{< figure src="/attachments/refguide10/modeling/menus/edit-menu/preferences-dialog/preferences.png" alt="Preferences" width="600" class="no-border" >}}

## General 탭 {#general}

### 자동 저장 활성화 {#autosave}

이 옵션을 활성화하면 앱 실행 및 배포, 버전 관리 작업 실행(예: 커밋, 병합, 되돌리기), 파일 또는 앱 닫기, 모듈 내보내기, Studio Pro 종료 같은 다양한 작업 시 변경 사항이 자동으로 저장됩니다.

또한 저장되지 않은 변경 사항이 있을 때 이러한 작업에 대해 자동 저장을 활성화할 수 있는 옵션이 있습니다. 이 경우 변경 사항을 저장하거나 취소할 수 있는 대화 상자가 열립니다. **Do not ask me again** 체크박스를 선택하면 추가 프롬프트를 방지하고 자동 저장 기능을 활성화하여 이 프로세스를 빠르게 할 수 있습니다.

### 인터페이스 {#interface}

#### App Explorer에서 활성 문서 선택 유지

활성화하면 **App Explorer**가 현재 활성 문서를 자동으로 강조 표시합니다. 이 속성을 비활성화하면 활성 문서가 변경되어도 **App Explorer**에서의 선택이 변경되지 않습니다.

#### Show Styling For

**Show styling for** 설정은 App Explorer에 표시할 스타일링 파일을 구성합니다.

다음 옵션 중 하나를 선택할 수 있습니다:

* **App Only** – 가장 일반적인 경우를 다루며 앱별 스타일링을 사용자 정의할 수 있습니다. 이를 선택하면 App Explorer > **App** > **Styling**에서 **theme** 폴더의 모든 파일을 볼 수 있습니다.
* **App and UI resources modules** (*기본값*) – UI 리소스 모듈을 생성하거나 편집하려는 개발자를 대상으로 합니다(예: 디자인 시스템/테마를 구축하거나 확장). 이 옵션은 UI 리소스로 표시된 모듈에 해당 **themesource** 폴더의 파일을 포함하는 **Styling** 폴더도 추가합니다.
* **App and all modules** – 위 옵션에 추가로, UI 리소스로 표시되었는지 여부에 관계없이 모든 모듈에 **Styling** 폴더를 추가합니다.

스타일링 편집기에 대한 자세한 내용은 *How to Customize Styling*의 [Using the Styling Editor](/howto10/front-end/customize-styling-new/#styling-editor) 섹션을 참조하세요.

### Error List

#### Auto-Check Delay

**Auto-check delay**는 변경 후 일관성 검사를 시작하기 전에 Studio Pro가 대기하는 밀리초 수입니다. 대규모 앱에서 변경 후 Studio Pro가 느리게 응답하는 경우 이 설정을 늘리세요.

#### 편집기에서 표시된 오류 및 경고 강조 표시

**Highlight shown errors and warnings in the editor**가 선택되면 현재 Error List에 표시된 오류와 경고(**Errors** 및 **Warnings** 토글 버튼과 억제 규칙에 의해 결정됨)가 편집기에서 해당 요소에 강조 표시됩니다.

### 디스크 위치

#### 기본 앱 디렉토리 {#default-directory}

새 앱이 저장되는 디렉토리입니다. 새 앱을 생성할 때 [App Settings](/refguide10/new-app/#app-settings) 대화 상자에서 사용됩니다. **App Settings** 대화 상자에서 다른 디렉토리를 선택하면 해당 디렉토리가 새 기본 앱 디렉토리로 저장됩니다.

## Deployment 탭 {#deployment}

**Deployment** 탭에서는 애플리케이션 배포와 관련된 다양한 설정을 구성할 수 있습니다.

{{< figure src="/attachments/refguide10/modeling/menus/edit-menu/preferences-dialog/preferences-deployment-tab.png" alt="Preferences" width="600" class="no-border" >}}

### JDK {#jdk}

여기에서 지원되는 각 Java 버전에 대한 Java Development Kit(JDK) 디렉토리를 선택할 수 있습니다.
이러한 JDK는 애플리케이션을 로컬로 배포할 때 사용됩니다.
일반적으로 올바른 디렉토리가 자동으로 찾아집니다.

Mendix Runtime이 Java Virtual Machine(JVM)에서 실행되므로 Mendix 애플리케이션을 실행하려면 JDK가 필요합니다.

### Deployment

#### Run 최적화 활성화

이 설정을 활성화하면 Studio Pro에서 변경한 후 실행 중인 애플리케이션이 업데이트되는 속도가 향상됩니다. 페이지, 레이아웃 또는 스니펫만 변경된 경우 배포 시간을 줄이기 위해 애플리케이션의 전체 재시작을 건너뜁니다. 또한 관련 파일이 변경되지 않은 경우 Java 컴파일이 수행되지 않습니다.

#### 번들 최적화 {#bundle}

이 설정은 React 클라이언트가 활성화된 경우 표시되고 적용됩니다. 기본적으로 이미 활성화되어 있어 생성된 앱 번들의 크기를 줄이고 소스 맵 생성을 비활성화하여 번들링 프로세스를 빠르게 합니다. 소스 맵은 개발 중 번들된 코드를 디버깅하는 데 사용됩니다. 플러거블 위젯의 디버깅을 위해 소스 맵을 생성하려면 이 설정을 비활성화할 수 있습니다.

### Build

#### 전체 디버그 정보 생성 {#debug-info}

이 옵션을 활성화하면 Java 작업을 빌드할 때 로컬 변수에 대한 디버그 정보가 포함되어 Eclipse에서 디버깅을 지원합니다. 이 옵션 없이는 줄 번호와 소스 정보만 포함됩니다.

#### Gradle 동기화 {#gradle-synchronization}

{{% alert color="info" %}}
이 기능은 Mendix 버전 10.16.0, 10.12.7, 10.6.17에서 도입되었습니다.
{{% /alert %}}

이 옵션은 관리되는 종속성의 동기화를 제어합니다. 자세한 내용은 *Managed Dependencies*의 [Offline Usage](/refguide10/managed-dependencies/#disabling-synchronization) 섹션을 참조하세요.

#### Gradle 디렉토리

애플리케이션을 배포하는 데 사용하는 컴퓨터에서 Gradle이 위치한 디렉토리입니다. 일반적으로 올바른 디렉토리가 자동으로 찾아집니다.

#### Extra Arguments {#extra-arguments}

{{% alert color="info" %}}
이 옵션은 Studio Pro 10.23.0 이상에서 사용할 수 있습니다.
{{% /alert %}}

이 옵션은 Gradle 프로세스에 추가 인수를 추가하는 데 사용할 수 있습니다.

#### 사용자 정의 리포지토리 사용

이 옵션을 활성화하면 Gradle이 사용할 리포지토리를 지정할 수 있습니다. 자세한 내용은 *Managed Dependencies*의 [Custom Repositories](/refguide10/managed-dependencies/#custom-repos) 섹션을 참조하세요.

#### Repositories

이 옵션은 **Use custom repositories**가 **Yes**로 설정된 경우 사용할 수 있습니다.

Gradle에 사용할 리포지토리를 지정할 수 있습니다. 이 필드의 내용은 Groovy 구문을 사용하여 지정해야 하며, Gradle 빌드 파일의 `repositories { }` 섹션 내부에 해당합니다. 기본적으로 이 필드에는 `mavenCentral()`과 `gradlePluginPortal()`이 포함됩니다.

## Maia 탭

### In-Editor Recommender

**In-Editor Recommender** 섹션에는 다음 설정이 포함되어 있습니다:

* **Enable for microflow, nanoflow, and rule editors** – Microflow, Nanoflow, Rule 편집기에서 [Logic Recommender](/refguide10/logic-recommender/)를 활성화하거나 비활성화할 수 있습니다.
* **Enable for workflow editor** – Workflow 편집기에서 [Workflow Recommender](/refguide10/workflow-recommender/)를 활성화하거나 비활성화할 수 있습니다.
* **Enable for page editor** - 페이지 편집기에서 [UI Recommendor](/refguide10/ui-recommender/)를 활성화하거나 비활성화할 수 있습니다. 이 기능은 기본적으로 활성화되어 있습니다.

### Best Practice Recommender

**Best Practice Recommender** 섹션에는 다음 설정이 포함되어 있습니다:

* **Show recommendation in editors** – 활성화하면 [Best Practice Recommender](/refguide10/best-practice-recommender/)가 비주얼 편집기에서 안티 패턴이 포함된 요소를 강조 표시합니다.

* **Automatically run an inspection after opening an app** – 활성화하면 앱을 열 때 [Best Practice Recommender](/refguide10/best-practice-recommender/)가 자동으로 검사를 실행합니다. 앱에 오류가 포함된 경우 검사가 실행되지 않습니다.

## Model 탭

### 위젯에 의한 자동 콘텐츠 채우기 프롬프트 시 기본적으로 'Yes' 선택

이 설정은 데이터 위젯의 콘텐츠를 자동으로 채울지에 대한 질문의 기본 응답을 정의합니다. 이 질문은 예를 들어 Entity를 Data View 위젯에 드래그할 때 표시됩니다. 활성화하면 미리 선택된 답변은 **yes**이고, 그렇지 않으면 **no**입니다.

## Version Control 탭 {#version-control}

### General

#### Executable

[커밋 대화 상자](/refguide10/commit-dialog/)에서 파일 변경 세부 사항을 보는 데 사용되는 프로그램의 경로와 이름입니다.

예를 들어, Visual Studio Code에 대한 파일 비교를 설정하는 방법은 아래와 같습니다:

```text
{path to VS Code}/Code.exe --wait --diff "{0}" "{1}"
```

#### Argument Pattern

파일 비교 프로그램에 전달되는 인수가 도출되는 패턴입니다. 이 패턴에서 다음 두 가지 자리 표시자를 사용할 수 있습니다:

* `{0}` – 파일 비교 프로그램에 인수가 전달되기 전에 원본 파일 이름으로 대체됩니다
* `{1}` – 파일 비교 프로그램에 인수가 전달되기 전에 변경된 파일 이름으로 대체됩니다

#### Solution Warning

Marketplace 모듈을 업데이트할 때 경고 메시지를 표시하려면 **Show warning on updating marketplace modules**를 선택하세요.

### Git{#git}

#### Git 위치 {#git-location}

이 설정을 사용하면 시스템에서 Git 설치 경로를 지정할 수 있습니다. 기본적으로 Studio Pro는 설치된 Git을 자동으로 감지하여 대부분의 사용자에게 원활한 설정을 보장합니다. 그러나 여러 버전의 Git이 설치되어 있거나 기본 감지가 특정 프로젝트 요구 사항과 맞지 않는 경우 경로를 수동으로 구성하는 것이 유용할 수 있습니다.

#### Git을 사용한 프라이빗 버전 관리 활성화 {#enable-with-Git}

[Mendix Team Server](/developerportal/repository/team-server/)가 아닌 접근 권한이 있는 프라이빗 Git 서버에 저장된 앱에서 작업하려는 경우 이 옵션을 선택하세요. 이를 통해 앱을 열거나 다운로드하거나 업로드할 때 Git 서버에서의 앱 위치를 지정할 수 있습니다. 이 설정에서는 Git 커밋을 식별하는 데 사용할 [이름과 이메일](#name)도 지정해야 합니다.

#### 이름과 이메일 {#name}

Git이 커밋 메시지에서 사용할 이름과 이메일을 지정하여 더 많은 정보를 제공하세요. 이 값들은 전역 Git 구성에 저장되며, 다른 애플리케이션에서도 사용할 수 있습니다.

{{% alert color="warning" %}}

**Name**과 **Email** 설정은 버전 관리 서버 인증에 사용되지 않으며 사용자가 자유롭게 변경할 수 있습니다.

커밋은 사용자의 워크스테이션에서 이루어지므로 해당 단계에서는 인증이 필요하지 않습니다. 그러나 변경 사항을 버전 관리 서버에 푸시할 때는 사용자가 푸시하는 내용을 완전히 인지하고 있어야 합니다. 서버에 대한 푸시는 승인된 사용자만 허용됩니다.

{{% /alert %}}

{{% alert color="info" %}}

이 값을 다른 애플리케이션용으로 변경하면 Studio Pro에서 만든 커밋에도 영향을 미칩니다. 커밋 기록에서 의심스러운 값을 발견한 경우, 이는 전역 Git 구성에서 다른 도구를 통해 설정된 개인 이메일 주소일 가능성이 높습니다.

{{% /alert %}}

#### 현재 Windows 사용자 인증 활성화 {#enable-windows-authentication}

{{% alert color="info" %}}
이 설정은 Studio Pro 버전 10.6.x(10.6.21 이상), 10.12.x(10.12.14 이상), 10.18.3 이상에서 사용할 수 있습니다.
{{% /alert %}}

이 옵션을 선택하면 현재 로그인한 Windows 사용자의 자격 증명을 자동으로 사용하여 온프레미스 Git 서버에 인증하고 연결합니다. 이 기능은 사용자가 수동으로 자격 증명을 입력할 필요를 없애 인증 프로세스를 간소화하여 보안과 사용자 편의성을 모두 향상시킵니다. Windows 인증을 활용하여 조직은 기존 IT 인프라와 Git 서버 접근을 원활하게 통합하여 개발 팀에게 부드럽고 효율적인 워크플로를 제공할 수 있습니다.

#### Clone {#clone}

{{% alert color="info" %}}
다른 클론 유형은 Studio Pro 버전 10.12.0 이상에서 사용할 수 있습니다.
{{% /alert %}}

앱 다운로드 또는 이미 다운로드한 앱의 다른 브랜치 체크아웃 같은 향후 클론 작업에 사용할 [Clone type](/refguide10/clone-type/)을 선택하세요. 이 설정을 변경해도 이미 다운로드한 앱에는 영향을 미치지 않습니다.

#### 로컬 및 원격 변경 사항 결합

{{% alert color="info" %}}
이 설정은 Mendix 버전 10.5에서 도입되었습니다.
{{% /alert %}}

[변경 사항을 결합](/refguide10/merge-algorithm/)할 때(예: Git pull을 수행할 때) 사용자는 **Rebase**와 **Merge** 중 기본 작업을 선택할 수 있습니다. 이 기본 설정은 충돌이 포함된 각 병합에 대해 재정의할 수 있습니다.

#### Git 버전 경고

Studio Pro 시작 시 표시되는 Git 버전 관련 경고를 억제하려면 **Do not show warning about Git version**을 선택하세요.

### 백그라운드 작업

#### 원격 리포지토리에서 자동 가져오기 활성화 {#enable-auto-fetch}

[자동 Fetch 메커니즘](/refguide10/auto-fetch/)을 활성화하려면 **Enable automatic fetching from a remote repository**를 선택하세요.

#### Fetch 간격(분)

Fetch가 시작된 후 다른 Fetch를 수행하기 전에 대기하는 시간(분)입니다. 1분에서 120분 사이여야 합니다.

#### 자동 리포지토리 최적화 활성화 {#optimization}

Git 리포지토리 최적화를 자동으로 정기적으로 실행하려면 **Enable automatic repository optimization**을 선택하세요. 이를 통해 성능과 리포지토리 크기 관점에서 모두 이점을 제공하는 저장소 구조를 유지할 수 있습니다.

#### 커밋 수

이 옵션은 [자동 리포지토리 최적화 활성화](#optimization) 설정이 켜져 있을 때 사용할 수 있습니다. Studio Pro는 로컬 리포지토리에서 만든 커밋 수를 추적합니다. 백그라운드 최적화를 시작하는 데 필요한 최소 커밋 수를 수동으로 지정할 수 있습니다. 자세한 내용은 [Git Storage Optimization](/refguide10/git-storage-optimization-dialog/)을 참조하세요.

## Work Environment 탭

### Studio Pro 테마 {#studio-pro-theme}

이 옵션을 사용하면 Studio Pro 테마를 선택할 수 있습니다: **Auto (System theme)**, **Light**, **Dark**. 기본값은 **Auto (System theme)**이며, 운영 체제에 설정된 테마를 감지하여 Studio Pro에 적절한 테마(**Light** 또는 **Dark**)를 사용합니다. 이 옵션을 변경하면 Studio Pro를 다시 시작해야 적용됩니다.

### 기본 페이지 편집기 {#default-page-editor}

이 옵션은 페이지가 열리는 기본 페이지 편집기 모드를 설정합니다: **Structure mode**(기본값) 또는 **Design mode**. 페이지 편집기 모드에 대한 자세한 내용은 *Page*의 [Page Editor Modes](/refguide10/page/#page-editor-modes) 섹션을 참조하세요.

### 언어 {#language}

이 옵션을 사용하면 Studio Pro를 사용하는 동안 작업하는 사용자 인터페이스 언어를 변경할 수 있습니다. 현재 영어, 일본어, 중국어, 한국어, 브라질 포르투갈어(Beta)가 지원됩니다. 이 기능을 사용하려면 Studio Pro를 다시 시작해야 합니다.

| 언어                   | 도입 버전 | 일반 출시 버전 |
| ---------------------- | ---------- | -------------------- |
| 중국어                 | 10.17      | 10.24                |
| 일본어                 | 10.17      | 10.24                |
| 한국어                 | 10.17      | 10.24                |
| 포르투갈어 (브라질)    | 10.23      | TBD                  |

### 편집기 탭 닫기 정책 {#closing-policy}

Studio Pro의 성능을 개선하기 위해 열린 탭(열린 문서) 수를 제한하는 것이 좋습니다. 이 옵션은 기본적으로 활성화되어 있으며 15개 탭으로 제한됩니다. 그러나 이 동작을 완전히 비활성화하거나 제한 값을 변경할 수 있습니다.

{{% alert color="info" %}}
닫기 정책은 저장되지 않은 변경 사항이 있는 탭에는 적용되지 않습니다.
{{% /alert %}}

### 탐색

이 설정을 사용하면 편집 기록을 앞뒤로 이동하여 최근에 작업한 문서를 표시할 수 있습니다. 이 기능은 기본적으로 활성화되어 있습니다.

## Advanced 탭

### 렌더링 {#rendering}

하드웨어 및 드라이버 문제로 인해 Studio Pro 실행 시 성능 문제가 발생할 수 있습니다. 이러한 문제는 대화 상자가 예상보다 훨씬 느리게 열리고 닫히거나 UI 전반적인 느림으로 나타날 수 있습니다. 하드웨어 문제를 해결할 수 없는 경우 **Enable software rendering mode** 설정을 켜서 이러한 문제를 완화할 수 있습니다. 이 옵션은 Native UI 및 Web Content에 사용할 수 있습니다. Web Content의 경우 Parallels 또는 다른 가상 머신에서 실행할 때 자동으로 소프트웨어 렌더링 모드를 활성화하는 **Auto**를 선택할 수 있습니다.

이 설정을 활성화하면 Studio Pro를 다시 시작해야 적용됩니다. 이 설정을 켜고 애플리케이션을 실행하면 CPU 사용량이 증가할 수 있습니다.

### 프록시 서버

Studio Pro를 실행하는 컴퓨터가 인터넷에 직접 접근할 수 없고 인증이 필요한 프록시 서버를 통해 연결해야 하는 경우, 이 설정을 사용하여 프록시 서버에 연결하기 위한 사용자 이름과 암호를 지정할 수 있습니다.

### 사용 데이터 {#usage-data}

**Send Studio Pro usage data to Mendix** 설정이 활성화되면 Studio Pro는 Mendix가 문제를 식별하고 사용자 경험을 개선할 수 있도록 사용 데이터를 Mendix에 전송합니다. 사용 데이터에는 민감한 정보가 포함되지 않습니다. 이 기능을 비활성화할 수 있지만, 일부 기능의 동작에 영향을 미치거나, Mendix가 사용자가 보고한 문제를 식별하지 못하거나, 아직 보고되지 않은 추적 문제에 영향을 미칠 수 있습니다. 이 설정은 머신별이며 이 기능을 변경해도 기존 설치된 버전에는 영향을 미치지 않습니다.

### XPath 제약 조건용 비주얼 빌더{#visual-builder}

Studio Pro 버전 10.5에서 XPath 제약 조건을 구성하는 새로운 시각적 방법이 도입되었습니다. 이를 **visual Builder for XPath constraints** (Builder)라고 합니다.

Mendix 버전 10.10부터 Builder가 XPath 제약 조건을 구성하는 기본 방법이지만, **Enable the XPath Builder as the default XPath constraint editor**를 선택 해제하여 기본값을 변경할 수 있습니다.

{{% alert color="info" %}}
Mendix 버전 10.5.0~10.9.0에서는 이 옵션이 **New Features** 탭에 있습니다.
{{% /alert %}}

### 피드백 설문조사

**Show feedback survey periodically** 설정이 활성화되면 Studio Pro가 경험에 대한 의견을 수집하기 위해 주기적으로 피드백 설문조사를 표시합니다. 이를 통해 Mendix는 사용자 피드백을 기반으로 제품을 개선할 수 있습니다. 자세한 내용은 [Feedback Survey](/refguide10/feedback-survey/)를 참조하세요.

### 바이러스 백신 예외

**Do not show antivirus exclusion notifications** 설정이 활성화되면 Studio Pro가 바이러스 백신 예외와 관련된 알림을 표시하지 않습니다. 자세한 내용은 [Antivirus Exclusion](/refguide10/antivirus-exclusion/)을 참조하세요.

## New Features 탭 {#new-features}

### Access Rules Editor

Studio Pro 버전 10.21에서 현대화된 접근 규칙 편집기가 일반 출시되어 기본적으로 활성화되었습니다. Studio Pro 버전 10.6에서 Beta 옵션으로 도입되었습니다. 이전 편집기는 더 이상 사용되지 않으며 11.0에서 제거될 예정입니다.

이 옵션을 사용하면 Entity 속성 대화 상자의 *Access rules* 탭에서 새 편집기를 활성화하거나 비활성화할 수 있습니다.

자세한 내용은 *Access Rules*의 [Defining Access Rules Using the New Editor](/refguide10/access-rules/#new-editor) 섹션을 참조하세요.

### App Explorer

현대화된 버전의 App Explorer를 사용하려면 이 옵션을 선택하세요. 이 기능을 사용하려면 Studio Pro를 다시 시작해야 합니다.

### Errors Pane

현대화된 버전의 Errors Pane을 사용하려면 이 옵션을 선택하세요. 이 기능을 사용하려면 Studio Pro를 다시 시작해야 합니다.

### Expression Editor

Expression 편집기는 Studio Pro 10.6부터 현대화되었습니다. 이 설정은 기본적으로 활성화되어 있습니다. 편집기를 사용하면 리치 텍스트 문장을 작성하고 유효성에 대한 즉각적인 피드백을 받을 수 있습니다. Studio Pro에서는 의사 결정의 표현식을 작성하거나 데이터 필터링을 위한 XPath 표현식을 작성하는 데 자주 사용됩니다.

### GraphQL {#graphql}

데이터를 GraphQL 서비스로 게시하는 기능은 Studio Pro 10.14부터 사용할 수 있습니다. 이 기능을 활성화하면 게시된 OData 서비스가 [GraphQL도 지원](/refguide10/published-odata-services/#supports-graphql)함을 나타낼 수 있습니다.

### Maia

### Enable Maia Explain

Maia Explain은 Studio Pro 10.21.0에서 도입되었습니다. Maia가 로직 편집기에서 Microflow 또는 Nanoflow를 설명하도록 하려면 이 옵션을 활성화하세요. 이 기능 사용 방법에 대한 자세한 내용은 [Maia Explain](/refguide10/maia-explain/)을 참조하세요. 기본적으로 활성화되어 있습니다.

#### Enable Maia for Domain Model

Maia for Domain Model은 Studio Pro 10.13.0에서 도입되었습니다. Domain Model에 대한 Entity와 Association을 생성하는 데 도움이 되도록 이 옵션을 활성화하세요. 이 기능 사용 방법에 대한 자세한 내용은 [Maia for Domain Model](/refguide10/maia-for-domain-model/)을 참조하세요.

#### Enable Maia for Pages

Maia for Pages는 Studio Pro 10.21.0에서 도입되었습니다. 텍스트 입력과 선택적 이미지를 기반으로 위젯을 추가하고 구성하여 페이지를 생성하는 데 도움이 되도록 이 옵션을 활성화하세요. 이 기능 사용 방법에 대한 자세한 내용은 [Maia for Pages](/refguide10/maia-for-pages/)를 참조하세요.

#### Enable Translation Generator

Maia Translation Generator는 Studio Pro 10.12.0에서 도입되었습니다. **Language** 메뉴의 **Batch translate**를 통해 모델을 다른 언어로 번역하는 데 도움이 되도록 이 옵션을 활성화하세요. 자세한 내용은 [Translation Generator](/refguide10/translation-generator/)를 참조하세요.

### Mapping Editor

이 설정을 사용하면 베타 버전을 기본 편집기로 설정할 수 있습니다.

### Online Synchronization Mode

이 설정은 10.19에서 도입되었으며 현재 베타 상태입니다. 데이터 동기화 없이 오프라인 내비게이션 프로필에서 Entity를 사용할 수 있습니다. 이를 통해 앱 개발자는 해당 Entity의 데이터를 오프라인 데이터베이스에 동기화하지 않고도 페이지에서 Entity 데이터를 사용할 수 있습니다. 이 모드는 서버에 대한 사용 가능한 연결이 필요합니다. 자세한 내용은 [Online Synchronization Mode](/refguide10/mobile/building-efficient-mobile-apps/offlinefirst-data/online-sync-mode/)를 참조하세요.

### System Texts Editor

이 설정은 Studio Pro 10.14.0에서 실험적 기능으로 도입되었습니다. Studio Pro 10.17.0 이상에서는 기본적으로 활성화되어 있습니다.

Translation Generator도 활성화된 경우 이 편집기에서도 사용할 수 있습니다. 자세한 내용은 *Translation Generator*의 [Generating Translation for System Texts](/refguide10/translation-generator/#translate-system-text) 섹션을 참조하세요.

### Toolbox

현대화된 도구 상자를 사용하려면 이 설정을 활성화하세요. Studio Pro를 다시 시작해야 합니다.

### Workflow Editor

인터럽팅 타이머 바운더리 이벤트는 Studio Pro 10.20.0에서 베타 기능으로 출시되었습니다. Workflow 편집기에서 인터럽팅 타이머 바운더리 이벤트를 사용하려면 이 옵션을 활성화하세요. 자세한 내용은 [Boundary Events](/refguide10/workflow-boundary-events/)를 참조하세요.

## 더 읽기

* [Upload to Version Control Server](/refguide10/upload-to-version-control-dialog/)
