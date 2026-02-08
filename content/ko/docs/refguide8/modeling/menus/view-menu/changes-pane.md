---
title: "Changes 창"
url: /refguide8/changes-pane/
weight: 10
description: "Mendix Studio Pro의 Changes 창에 대해 설명합니다."
---

## 소개

버전 관리가 활성화된 프로젝트(Team Server 또는 기타 SVN 서버를 사용하는 프로젝트)의 경우, **Changes** 창은 마지막 커밋 이후의 앱 로컬 변경 사항을 표시합니다. 여기서 변경 사항을 커밋하고, 최신 리비전으로 업데이트하고, 히스토리를 볼 수 있습니다.

이 창은 다음으로 구성됩니다:

* [상단 바](#top-bar)에는 **Back**, **Go to**, **Tasks** 등 다양한 버튼이 있습니다.
* [최상위 수준](#top-level)은 변경된 문서 목록을 표시합니다. 예를 들어 위젯이 삭제된 페이지가 표시됩니다.
* [확대 수준](#zoomed-in-level)은 두 개의 그리드로 분할되며, 왼쪽 그리드에 요소가 있고 오른쪽 그리드에 선택한 요소의 변경되거나 충돌하는 속성이 있습니다.

## 상단 바 {#top-bar}

**Changes** 창 최상위 수준의 상단 바는 다양한 버튼으로 구성됩니다:

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/changes-pane/changes-top-bar.png" alt="Top Bar of the Changes Pane" class="no-border" >}}

버튼을 사용하여 다음 작업을 수행할 수 있습니다:

* **Back** – 한 수준 위로 돌아갑니다; 최상위 수준에서는 이 버튼이 비활성화됩니다
* **Go to** – 확대 수준을 열고 선택한 문서를 엽니다
* **Tasks** – 최신 커밋으로 변경 사항 되돌리기 또는 충돌 해결과 같은 특정 작업을 수행할 수 있습니다
* **Update** – 저장소에서 최신 변경 사항을 가져옵니다(*Version Control*의 [Update](/refguide8/version-control/#update) 섹션 참조)
* **Commit** – 저장소에 변경 사항을 커밋하고 새 리비전을 시작합니다(*Version Control*의 [Commit](/refguide8/version-control/#commit) 섹션 참조)
* **History** – 프로젝트의 현재 개발 라인에서 수행된 변경 사항을 표시하는 **History** 대화 상자를 엽니다(히스토리에 대한 자세한 내용은 [History](/refguide8/history-dialog/)를 참조하십시오)

**Back** 및 **Go to** 버튼은 모든 수준에서 공통이며, 다른 버튼은 특정 수준에만 적용됩니다.

## 최상위 수준 {#top-level}

**Changes** 창의 최상위 수준은 변경된 문서(예: 페이지 또는 Nanoflow)를 나열하는 그리드입니다:

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/changes-pane/changes-top-level.png" alt="Top Level of the Changes Pane" class="no-border" >}}

그리드에는 다음 항목에 대한 정보가 포함되어 있습니다:

* **Status** – 문서에 적용된 변경 유형을 표시합니다. 상태는 다음 중 하나일 수 있습니다:
    * **Added** – 새 문서가 생성되었습니다; 녹색 원으로 표시됩니다
    * **Modified** – 요소 추가 또는 삭제, 요소 속성 변경 등 기존 문서에 변경 사항이 적용되었습니다; 노란색 원으로 표시됩니다
    * **Deleted** – 문서가 삭제되었습니다; 마이너스가 있는 빨간색 원으로 표시됩니다
    * **Conflicted** – 문서에 충돌하는 변경 사항이 포함되어 있습니다; 느낌표가 있는 빨간색 원으로 표시됩니다
* **Item** – 변경된 문서의 이름을 나타냅니다
* **Module** – 변경된 문서가 있는 모듈
* **Details** – 상태에 대한 세부 정보를 포함할 수 있습니다. 예를 들어 충돌하는 변경 사항이 있는 경우

## 확대 수준 {#zoomed-in-level}

변경되거나 충돌하는 문서로 확대할 수 있으며, 다음 중 하나를 수행하십시오:

* 최상위 수준의 그리드에서 줄을 더블 클릭합니다
* **Go to** 버튼을 클릭합니다
* <kbd>Enter</kbd>를 누릅니다

확대 수준을 종료하려면 **Back** 버튼을 클릭하거나 <kbd>Backspace</kbd>를 누르십시오.

두 가지 유형의 확대 수준이 있습니다:

* [수정된 문서](#modified)
* [충돌하는 문서](#conflicts)

각각 고유한 버튼 세트가 포함되어 있습니다.

### 수정된 문서의 확대 수준 {#modified}

수정된 문서의 확대 수준은 두 개의 그리드로 분할되며, 왼쪽에 요소가 있고 오른쪽에 변경된 속성이 있습니다. 요소에 대해 변경된 속성이 없는 경우(예: 요소가 추가되거나 삭제된 경우) 오른쪽 그리드가 비어 있습니다:

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/changes-pane/element-added.png" alt="No Properties to Show" class="no-border" >}}

이 수준의 도구 모음에는 다음 버튼이 포함되어 있습니다:

* **Back** – 최상위 수준으로 돌아갑니다
* **Go to** – 변경된 요소로 직접 이동합니다
* **Show purely visual changes** – Domain Model에서 Entity를 새 위치로 드래그하는 것과 같은 시각적 변경 사항을 표시합니다

왼쪽 그리드에는 다음 열이 포함되어 있습니다:

* **Element** – 수정된 요소의 이름
* **Mine** – 현재 개발 라인에서의 변경 상태를 나타냅니다

오른쪽 그리드에는 다음 열이 포함되어 있습니다:

* **Property** – 수정된 속성
* **Original** – 원래 속성 값
* **Mine** – 현재 개발 라인에서 속성에 대한 변경 사항

### 충돌하는 문서의 확대 수준 {#conflicts}

충돌하는 문서의 확대 수준은 두 개의 그리드로 분할되며, 왼쪽에 요소가 있고 오른쪽에 충돌하는 속성이 있습니다.

이 수준의 도구 모음에는 다음 버튼이 포함되어 있습니다:

* **Back** – 최상위 수준으로 돌아갑니다
* **Go to** – 선택한 요소로 직접 이동합니다
* **Show purely visual changes** – Domain Model에서 Entity를 새 위치로 드래그하는 것과 같은 시각적 변경 사항을 표시합니다
* **Show Conflicts** – 충돌의 세부 정보를 표시합니다. 이 수준에 처음 확대할 때 기본적으로 선택됩니다.
* **Show Changes in mine** – 현재 개발 라인에서 문서의 변경 사항을 표시합니다(충돌 해결 방법에 대한 자세한 내용은 *Studio Pro에서 버전 관리 사용*의 [충돌 처리](/refguide8/using-version-control-in-studio-pro/#conflicts) 섹션 참조)
* **Show Changes in theirs** – 다른 개발 라인에서 문서의 수신 변경 사항을 표시합니다(충돌 해결 방법에 대한 자세한 내용은 *Studio Pro에서 버전 관리 사용*의 [충돌 처리](/refguide8/using-version-control-in-studio-pro/#conflicts) 섹션 참조)

    {{% alert color="info" %}}위에서 설명한 **Show Conflicts**, **Show Changes in mine**, **Show Changes in theirs**는 토글이며, 하나를 선택하면 다른 두 개가 선택 해제됩니다.{{% /alert %}}

왼쪽 그리드의 열은 도구 모음에서 어떤 토글 버튼을 누르느냐에 따라 달라집니다.

**Show Conflicts** 토글이 활성화된 경우 왼쪽 그리드에는 다음 열이 포함됩니다:

* **Element** – 수정된 요소의 이름
* **Theirs** – 다른 개발 라인에서 수신 변경 사항의 상태
* **Mine** – 현재 개발 라인에서의 변경 상태를 나타냅니다

    {{< figure src="/attachments/refguide8/modeling/menus/view-menu/changes-pane/conflict-grid.png" alt="Conflict Grid" class="no-border" >}}

**Show Changes in mine** 토글이 활성화된 경우 왼쪽 그리드에는 다음 열이 포함됩니다:

* **Element** – 수정된 요소의 이름
* **Mine** – 현재 개발 라인에서의 변경 상태를 나타냅니다

    {{< figure src="/attachments/refguide8/modeling/menus/view-menu/changes-pane/changes-in-mine-grid.png" alt="Conflict Grid" class="no-border" >}}

**Show Changes in theirs** 토글이 활성화된 경우 왼쪽 그리드에는 다음 열이 포함됩니다:

* **Element** – 수정된 요소의 이름
* **Theirs** – 다른 개발 라인에서의 변경 상태를 나타냅니다

    {{< figure src="/attachments/refguide8/modeling/menus/view-menu/changes-pane/changes-in-merge-end-grid.png" alt="Conflict Grid" class="no-border" >}}

오른쪽 그리드의 열은 왼쪽에서 어떤 종류의 충돌 요소가 선택되었는지에 따라 달라집니다.

왼쪽에서 선택한 항목이 양쪽 모두 동일한 요소를 변경한 충돌인 경우 오른쪽 그리드에 다음 열이 표시됩니다:

* **Property** – 수정된 속성
* **Original** – 원래 속성 값
* **Theirs** – 다른 개발 라인에서 속성에 대한 변경 사항
* **Mine** – 현재 개발 라인에서 속성에 대한 변경 사항

왼쪽에서 선택한 항목이 한쪽은 요소를 변경하고 다른 쪽은 요소를 삭제한 충돌인 경우 오른쪽 그리드에 다음 열이 표시됩니다:

* **Property** – 수정된 속성
* **Theirs** – 원래 속성 값
* **Mine** – 현재 개발 라인에서 속성에 대한 변경 사항

## 더 보기

* [Studio Pro 개요](/refguide8/studio-pro-overview/)
* [Version Control](/refguide8/version-control/)
