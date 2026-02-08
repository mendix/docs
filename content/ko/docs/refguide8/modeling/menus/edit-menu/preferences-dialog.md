---
title: "Preferences"
url: /refguide8/preferences-dialog/
weight: 50
---

## 소개

**Preferences** 옵션은 Studio Pro 전체에 적용되는 사용자별 환경설정을 지정할 수 있는 대화 상자를 엽니다.

## General 탭

### Interface

#### Keep Active Document Selected in Project Explorer

활성화하면 **Project Explorer**가 현재 활성 문서를 자동으로 강조 표시합니다. 이 속성이 비활성화되면 활성 문서가 변경되어도 **Project Explorer**의 선택 항목은 변경되지 않습니다.

### MxAssist Logic Bot

#### Enable MxAssist Logic Bot

**Enable MxAssist Logic Bot**이 선택되면, [MxAssist Logic Bot](/refguide8/mx-assist-studio-pro/)이 활성화되어 Microflow에서 Activity에 대한 제안을 제공할 수 있습니다.

#### Show Suggestions for System Variables

**Show suggestions for system variables**가 선택되면, MxAssist Logic Bot은 제안에 시스템 객체를 포함합니다(예: currentUser 또는 currentSession과 같은 시스템 객체 변경을 제안할 수 있습니다).

### Error List

#### Auto-Check Delay

**Auto-check delay**는 변경 후 일관성 검사를 시작하기 전에 Studio Pro가 대기하는 밀리초 단위의 시간입니다. 변경 후 Studio Pro 응답이 느린 대규모 프로젝트의 경우 이 설정을 늘리십시오.

#### Highlight Shown Errors and Warnings in the Editor

**Highlight shown errors and warnings in the editor**가 선택되면, Error List에 현재 표시된 오류와 경고(**Errors** 및 **Warnings** 토글 버튼 및 억제 규칙에 의해 결정됨)가 편집기의 해당 요소에 강조 표시됩니다.

### Deployment

#### JDK directory

애플리케이션을 배포하는 컴퓨터에서 Java Development Kit(JDK)이 위치한 디렉터리입니다. 일반적으로 올바른 디렉터리가 자동으로 찾아집니다.

Mendix Runtime은 Java로 작성되었으므로, Mendix 애플리케이션을 실행하려면 JDK가 필요합니다.

#### Enable Run Optimizations

이 설정을 활성화하면 Studio Pro에서 변경 사항을 적용한 후 실행 중인 애플리케이션이 업데이트되는 속도가 향상됩니다. 페이지, 레이아웃 또는 스니펫만 변경된 경우 배포 시간을 줄이기 위해 애플리케이션의 전체 재시작을 건너뜁니다. 또한 관련 파일이 변경되지 않은 경우 Java 컴파일이 수행되지 않습니다.

## Model 탭

### When Prompted by a Widget to Automatically Fill Its Contents, Select 'Yes' by Default

이 설정은 데이터 위젯의 내용을 자동으로 채울지에 대한 질문의 기본 응답을 정의합니다. 이 질문은 예를 들어 Entity를 Data View 위젯에 드래그할 때 표시됩니다. 활성화하면 미리 선택된 답변이 **yes**이고, 그렇지 않으면 **no**입니다.

## Version Control 탭

### File Comparison

#### Executable

[Commit 대화 상자](/refguide8/commit-dialog/)에서 파일 변경 사항의 세부 정보를 보는 데 사용되는 프로그램의 경로와 이름입니다.

#### Argument Pattern

파일 비교 프로그램에 전달되는 인수가 파생되는 패턴입니다. 이 패턴에서 다음 두 개의 자리 표시자를 사용할 수 있습니다:

* `{0}` – 인수가 파일 비교 프로그램에 전달되기 전에 원본 파일의 이름으로 대체됩니다
* `{1}` – 인수가 파일 비교 프로그램에 전달되기 전에 변경된 파일의 이름으로 대체됩니다

### Subversion

#### Enable Private Version Control {#enable}

[Mendix Team Server](/developerportal/repository/team-server/)에 저장되지 않고 접근 권한이 있는 다른 Subversion 서버에 저장된 앱에서 작업하려면 이 옵션을 선택하십시오. 이렇게 하면 앱을 열거나 다운로드하거나 업로드할 때 Subversion 서버에서 앱의 위치를 지정할 수 있습니다.

## Advanced 탭

### Proxy Server

Studio Pro를 실행하는 컴퓨터가 인터넷에 직접 접근할 수 없고 인증이 필요한 프록시 서버를 통해 연결해야 하는 경우가 있습니다. 이 경우 이 설정을 사용하여 프록시 서버에 연결하기 위한 사용자 이름과 비밀번호를 지정할 수 있습니다.

## New Features 탭 {#new-features}

**New features** 탭을 사용하면 새 기능을 켜거나 끌 수 있습니다. 이러한 기능은 아직 이전 버전을 제거할 만큼 충분히 개발되지 않았거나 현재 선택 사항인 기능입니다.

{{% alert color="info" %}}
이 설정에 대한 변경 사항을 적용하려면 Studio Pro를 재시작해야 합니다.
{{% /alert %}}

### New Version of the Changes Pane {#new-changes}

이 옵션을 사용하면 새 버전의 [Changes](/refguide8/changes-pane/) 창을 활성화할 수 있습니다. 새 버전에서 문제가 발견되면 이 확인란을 선택 해제하여 이전 버전으로 전환할 수 있습니다.

기본값: *활성화*

### New Version of the Connector {#new-connector}

이 옵션을 사용하면 새 버전의 [Connector](/refguide8/view-menu/#connector)를 활성화할 수 있습니다. 새 버전에서 문제가 발견되면 이 확인란을 선택 해제하여 이전 버전으로 전환할 수 있습니다.

기본값: *비활성화*

### New Version of the Project Explorer {#new-project-explorer}

이 옵션을 사용하면 새 버전의 [Project Explorer](/refguide8/project-explorer/)를 활성화할 수 있습니다. 새 버전에서 문제가 발견되면 이 확인란을 선택 해제하여 이전 버전으로 전환할 수 있습니다.

기본값: *활성화*

### New Version of the Toolbox {#new-toolbox}

이 옵션을 사용하면 새 버전의 [Toolbox](/refguide8/view-menu/#toolbox)를 활성화할 수 있습니다. 새 버전에서 문제가 발견되면 이 확인란을 선택 해제하여 이전 버전으로 전환할 수 있습니다.

기본값: *활성화*

## 더 보기

* [Upload to Version Control Server](/refguide8/upload-to-version-control-dialog/)
* [온프레미스 버전 관리 서버 사용 방법](/howto8/collaboration-requirements-management/on-premises-svn-howto/)
