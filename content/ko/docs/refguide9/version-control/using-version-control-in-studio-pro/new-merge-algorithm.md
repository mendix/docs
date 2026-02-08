---
title: "세분화된 충돌 해결을 지원하는 새로운 병합 알고리즘"
linktitle: "병합 알고리즘 및 충돌 해결"
url: /refguide9/new-merge-algorithm/
weight: 10
description: "새로운 병합 알고리즘을 소개하고 충돌 해결을 위해 이를 활성화하는 방법을 설명합니다."
---

## 소개

앱을 업데이트하거나 변경 사항을 병합할 때 세분화된 충돌 해결을 지원하는 새로운 병합 알고리즘이 사용됩니다. 새로운 병합 알고리즘에는 다음과 같은 기능이 있습니다:

* **세분화된 충돌 해결** – 문서에 충돌하는 변경 사항이 있을 때 전체 문서 단위로 내 변경 사항 또는 상대방의 변경 사항 중 하나를 선택할 필요가 없습니다. 대신 Widget, Entity, Attribute 또는 Microflow Action과 같은 개별 요소 수준에서 충돌을 해결할 수 있습니다. 또한 양쪽의 충돌하지 않는 모든 변경 사항은 자동으로 수락됩니다.
* **Widget 목록의 병렬 변경 시 충돌 없음** – 두 개발자가 동일한 문서에서 Widget을 변경하더라도 충돌이 발생하지 않으며 변경 사항이 결합됩니다. 그러나 문서 내 너무 가까운 위치에서 변경이 이루어진 경우, 병합을 수행하는 개발자에게 Widget의 최종 순서를 결정하도록 알려주는 **목록 순서 충돌**이 보고됩니다.

## 세분화된 충돌 해결을 지원하는 새로운 알고리즘 활성화 {#enable-disable}

{{% alert color="info" %}}
리포지토리가 깨끗한 상태인지 확인하십시오: 모든 변경 사항이 커밋되었으며 미처리 변경 사항이나 충돌이 없어야 합니다.
{{% /alert %}}

새로운 알고리즘은 Studio Pro 9에서 기본적으로 활성화되어 있습니다. 문제가 발생하면 다음 단계에 따라 이전 알고리즘으로 되돌릴 수 있습니다:

1. Studio Pro 상단 바에서 **Edit** > **Preferences** > **New features**로 이동하십시오.
2. **New features** 섹션에서 **New merge algorithm with fine-grained conflict resolution** 옵션을 비활성화하십시오.
3. Studio Pro를 재시작하십시오.

자세한 내용은 [Preferences](/refguide9/preferences-dialog/)를 참조하십시오.

## 충돌 해결 예시

앱의 페이지 문서가 아래와 같이 디자인되어 있습니다:

{{< figure src="/attachments/refguide9/version-control/using-version-control-in-studio-pro/new-merge-algorithm/new-merge-algorithm-base-page.png" alt="Original page" class="no-border" >}}

동료가 메인 라인에서 다음과 같은 변경을 수행합니다:

* 텍스트 *Home*이 *Welcome!*으로 변경됩니다
* 텍스트 *Welcome!* 위에 Mendix 로고가 추가됩니다
* 부제목 *Welcome to your new app*이 삭제됩니다
* 하단 레이아웃 그리드에 텍스트 *Write some text here*가 추가됩니다

동료의 새로운 문서 레이아웃은 아래와 같습니다:

{{< figure src="/attachments/refguide9/version-control/using-version-control-in-studio-pro/new-merge-algorithm/new-merge-algorithm-main-page.png" alt="Main line page" class="no-border" >}}

브랜치 라인에서 다음과 같은 변경을 수행합니다:

* 텍스트 *Home*을 *My home page*로 변경합니다
* 하단 레이아웃 그리드 내에 Data Grid를 추가합니다

페이지가 아래와 같이 배치됩니다:

{{< figure src="/attachments/refguide9/version-control/using-version-control-in-studio-pro/new-merge-algorithm/new-merge-algorithm-branch-page.png" alt="Branch line page" class="no-border" >}}

## 충돌 해결

변경 사항을 병합하면 새로운 알고리즘이 다음과 같은 충돌을 표시합니다:

1. 양쪽에서 변경한 텍스트
2. **목록 순서 충돌** — 두 사람 모두 하단 레이아웃 그리드에 Widget을 추가했습니다. 병합 알고리즘이 두 개의 새 Widget에 대한 올바른 순서를 추측할 수 없으므로 목록 순서 충돌을 보고합니다. 이는 병합을 수행하는 개발자에게 목록에서 Widget의 최종 순서를 결정하도록 알려주는 것입니다.

    {{< figure src="/attachments/refguide9/version-control/using-version-control-in-studio-pro/new-merge-algorithm/new-merge-algorithm-conflicts.png" alt="New algorithm conflicts" class="no-border" >}}

해결 프로세스를 시작하려면 **Merge** 버튼을 클릭하십시오. 페이지가 상단에 주황색 막대가 있는 특수 모드로 열립니다:

{{< figure src="/attachments/refguide9/version-control/using-version-control-in-studio-pro/new-merge-algorithm/new-merge-algorithm-orange-tab.png" alt="Document with orange bar" class="no-border" >}}

다음과 같은 충돌하지 않는 변경 사항이 이미 페이지에 적용되어 있습니다:

* 텍스트 *Home* 위에 Mendix 로고가 추가되었습니다 (메인 라인)
* 부제목이 삭제되었습니다 (메인 라인)
* 하단 레이아웃 그리드에 텍스트 Widget이 추가되었습니다 (메인 라인)
* 하단 레이아웃 그리드에 Data Grid가 추가되었습니다 (브랜치 라인)

### 첫 번째 충돌 해결

첫 번째 충돌에 대해 변경 사항을 검토하고 어떤 버전을 적용할지 결정할 수 있습니다. 충돌을 나타내는 세 줄 중 하나를 선택하고 **Resolve using Mine** 또는 **Resolve using Theirs**를 선택하십시오.

{{< figure src="/attachments/refguide9/version-control/using-version-control-in-studio-pro/new-merge-algorithm/new-merge-algorithm-resolve-mode.png" alt="Conflict resolution mode" class="no-border" >}}

버튼을 클릭하면 문서가 즉시 업데이트되는 것을 확인할 수 있습니다. 선택에 만족하지 않는 경우 실행 취소를 사용하여 돌아가서 다른 옵션을 시도할 수 있습니다.

{{% alert color="info" %}}
키보드 단축키 <kbd>Ctrl</kbd> + <kbd>Z</kbd> 및 <kbd>Ctrl</kbd> + <kbd>Y</kbd>를 사용하여 선택을 취소하려면 먼저 문서를 클릭하여 포커스를 맞추십시오.
{{% /alert %}}

충돌을 처리하는 세 번째 옵션인 **Mark as Resolved**가 있습니다. 이는 충돌을 해결하기 위해 어느 쪽도 선택하지 않고 원본 상태를 그대로 유지하는 것을 의미합니다. 새로운 텍스트 변경 사항 중 어느 것도 적용되지 않습니다.

세 가지 옵션 중 하나를 선택하여 충돌을 해결하면 이 충돌이 처리되었음을 나타내는 녹색 체크 표시가 나타납니다.

### 두 번째 충돌 해결

두 번째 충돌은 목록 순서 충돌입니다. 레이아웃 그리드에서 Widget의 순서를 확인하도록 알려주는 것입니다. 페이지 편집기에서 Widget을 원하는 순서로 배치한 다음 목록 순서 충돌에 대해 **Mark as Resolved**를 선택할 수 있습니다.

Widget 중 하나를 삭제하거나 새 Widget을 추가할 수도 있습니다. 충돌을 해결하는 동안 문서를 완전히 편집할 수 있습니다.

두 번째 충돌을 해결한 후 상단의 막대가 녹색으로 변하여 모든 충돌이 해결되었음을 나타냅니다:

{{< figure src="/attachments/refguide9/version-control/using-version-control-in-studio-pro/new-merge-algorithm/new-merge-algorithm-all-conflicts-resolved.PNG" alt="All conflicts resolved" class="no-border" >}}

일부 변경 사항으로 인해 **mine** 또는 **theirs**를 사용하여 충돌을 해결할 수 없게 될 수 있습니다. 예를 들어, 첫 번째 충돌을 아직 해결하지 않은 상태에서 *Home* 텍스트 Widget을 삭제하면 해당 Widget이 더 이상 존재하지 않으므로 첫 번째 충돌을 해결할 수 없게 됩니다. 이 경우 충돌을 해결됨으로 표시하는 것만 가능합니다:

{{< figure src="/attachments/refguide9/version-control/using-version-control-in-studio-pro/new-merge-algorithm/new-merge-algorithm-cannot-resolve.PNG" alt="Conflict cannot be resolved" class="no-border" >}}

### 충돌 해결 완료

모든 충돌이 해결되면 **Accept and Exit** 버튼을 클릭하여 결과를 확정하십시오. 문서가 병합된 형태로 저장되고 해당 문서에 대한 충돌이 사라집니다. 결과는 양쪽의 변경 사항과 경우에 따라 일부 수동 편집이 포함된 문서입니다.

언제든지 **Cancel** 버튼을 클릭하여 충돌 해결을 중단할 수도 있습니다. 충돌은 그대로 남아 있으며 나중에 해결할 수 있습니다.
