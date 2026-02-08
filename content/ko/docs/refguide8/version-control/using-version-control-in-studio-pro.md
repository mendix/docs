---
title: "Studio Pro에서 버전 관리 사용하기"
url: /refguide8/using-version-control-in-studio-pro/
weight: 10
description: "버전 관리를 사용하는 방법과 발생할 수 있는 문제를 해결하는 방법"
# Renamed from version-control-scenarios
---

## 소개

이 참조 가이드는 Mendix Studio Pro에서 버전 관리를 사용하는 방법을 설명합니다. Mendix에서 버전 관리가 작동하는 원리와 개념 정의는 [버전 관리(Version Control)](/refguide8/version-control/)에서 확인할 수 있습니다.

## 버전 관리로 프로젝트 시작하기

버전 관리로 새 프로젝트를 시작하려면 다음을 수행하세요:

1. Studio Pro에서 **New Project...**를 선택합니다.
2. **App Settings** 대화 상자에서 **Enable online services**를 *Yes*로 설정합니다. 이 옵션은 Team Server 리포지토리와 Mendix Portal 프로젝트를 생성합니다.
3. **Project directory**를 변경하거나 Studio Pro가 제안한 기본값을 그대로 둡니다.
4. **Create app**을 클릭합니다.

앱이 Team Server에 생성되고, **Project directory**에 작업 복사본이 생성됩니다. 이 복사본이 Studio Pro에서 열려 바로 작업을 시작할 수 있습니다.

{{< figure src="/attachments/refguide8/version-control/using-version-control-in-studio-pro/2018-03-02_11-11-18.png" class="no-border" >}}

## 프로젝트 참여하기

이미 Team Server가 활성화된 프로젝트가 있는 경우, 해당 프로젝트에 참여하도록 초대받을 수 있습니다([팀(Team)](/developerportal/general/team/) 참조).

팀원이 되면 충분한 권한이 있는 역할을 부여받은 경우, 다음을 수행하여 앱에서 작업할 수 있습니다:

1. Studio Pro에서 **Open project...**를 선택합니다.
2. **Where is your App stored?**에서 *Mendix Team Server*를 선택합니다.
3. **Team Server App** 드롭다운에서 앱을 선택합니다.
4. **Project directory**를 변경하거나 Studio Pro가 제안한 기본값을 그대로 둡니다.
5. **Create app**을 클릭합니다.

프로젝트가 Team Server에서 다운로드되어 Studio Pro에서 열립니다.

{{< figure src="/attachments/refguide8/version-control/using-version-control-in-studio-pro/open-new-team-server-app.png" class="no-border" >}}

## 일상적인 개발

디스크에 프로젝트의 작업 복사본이 있다고 가정해 봅시다. 앱을 변경하고 저장합니다. 저장된 변경 사항은 다른 사람에게 즉시 표시되지 않습니다. 변경된 문서, 폴더 및 모듈은 **status**를 통해 식별할 수 있습니다.

변경 사항에 만족하면 리포지토리에 **commit**합니다. 그러면 다른 사람들이 업데이트를 선택하여 해당 변경 사항을 가져올 수 있습니다.

다른 사람이 커밋한 변경 사항으로 작업 복사본을 **update**할 수 있습니다.

누가 커밋했는지에 관계없이 커밋된 모든 변경 사항의 **history**를 볼 수도 있습니다.

### 상태(Status)

프로젝트의 상태는 원본과 비교했을 때 작업 복사본의 모든 변경 사항에 대한 요약입니다. Studio Pro는 프로젝트 탐색기와 **Changes** 독 모두에서 상태를 표시합니다.

프로젝트 탐색기는 어떤 방식으로든 변경된 항목(문서, 폴더 및 모듈) 앞에 아이콘을 표시합니다. 다른 아이콘은 수행된 다양한 종류의 변경을 나타냅니다.

| Icon | Meaning |
| --- | --- |
| {{< figure src="/attachments/refguide8/version-control/using-version-control-in-studio-pro/688173.png" class="no-border" >}} | 이 항목에 아무 일도 일어나지 않았습니다. 원본과 비교하여 변경되지 않았습니다. |
| {{< figure src="/attachments/refguide8/version-control/using-version-control-in-studio-pro/688172.png" class="no-border" >}} | 이 항목(문서, 폴더 또는 모듈)을 수정했습니다. |
| {{< figure src="/attachments/refguide8/version-control/using-version-control-in-studio-pro/688175.png" class="no-border" >}} | 이 항목을 추가했습니다. |
| {{< figure src="/attachments/refguide8/version-control/using-version-control-in-studio-pro/688174.png" class="no-border" >}} | 이 항목을 프로젝트 트리의 다른 위치로 이동했습니다. |
| {{< figure src="/attachments/refguide8/version-control/using-version-control-in-studio-pro/688164.png" class="no-border" >}} | 이 항목을 삭제했습니다. |
| {{< figure src="/attachments/refguide8/version-control/using-version-control-in-studio-pro/688165.png" class="no-border" >}} | 본인과 다른 사람이 이 항목에 충돌하는 변경을 했습니다. 자세한 내용은 아래의 [충돌 처리](#conflicts) 섹션을 참조하세요. |

{{% alert color="info" %}}
아이콘은 하나만 표시할 수 있으며, 문서가 수정되고 이동된 경우 수정으로 표시됩니다.
{{% /alert %}}

예를 들어, *ChangePassword* Microflow가 수정되었다고 가정합니다. 또한 'Flows'라는 새 폴더가 추가되었고 모든 Microflow가 이 폴더 안으로 이동되었습니다. 스크린샷에서 변경 사항이 포함된 폴더와 모듈은 노란색 아이콘으로, 이동된 Microflow는 파란색 아이콘으로 표시됩니다. 이를 통해 프로젝트에서 변경 사항이 어디에 있는지 빠르게 확인할 수 있습니다.

{{< figure src="/attachments/refguide8/version-control/using-version-control-in-studio-pro/project-explorer-documents.png" class="no-border" >}}

**Changes** 독에서도 동일한 정보를 볼 수 있습니다. 이 경우 항목에 대한 각 *변경*에 대해 하나의 항목이 있습니다. 문서가 수정되고 이동된 경우 해당 문서에 대해 *두* 줄이 있습니다. 독은 삭제된 항목도 표시하며, 이는 프로젝트 탐색기에서는 할 수 없는 기능입니다.

{{< figure src="/attachments/refguide8/version-control/using-version-control-in-studio-pro/changes-pane.png" class="no-border" >}}

{{% alert color="info" %}}
프로젝트를 성공적으로 커밋하면 이것이 새로운 원본이 되며, 프로젝트 탐색기와 Changes 독에서 모든 변경 정보가 제거됩니다.
{{% /alert %}}

### 커밋(Committing)

리포지토리에 변경 사항을 보내는 것을 *커밋*이라고 합니다. 작고 일관된 작업 단위를 리포지토리에 커밋하는 것이 좋습니다. Mendix는 변경 사항을 자주 커밋할 것을 권장합니다. 가능하면 리포지토리의 버전은 항상 오류가 없어야 하며, Studio Pro는 프로젝트에 오류가 있는 상태에서 커밋하려고 하면 경고합니다.

변경 사항을 커밋하려면 **Changes** 독에서 **Commit** 버튼을 클릭하거나 **Project** > **Commit...** 메뉴 항목을 선택하세요.

{{< figure src="/attachments/refguide8/version-control/using-version-control-in-studio-pro/commit-button.png" alt="Commit Button" class="no-border" >}}

일반적으로 하나의 기능을 구현하거나 하나의 버그를 수정한 후에 커밋하는 것이 좋습니다. 자주 커밋하면 다른 사람의 작업과 정기적으로 통합됩니다. 커밋의 이점은 다음과 같습니다:

* 충돌이 발생하면 변경 사항이 아직 기억에 생생합니다
* 리비전을 이해하기 쉬워집니다
* 무언가를 되돌려야 하는 경우 작은 작업 단위를 되돌릴 수 있습니다

커밋하면 리포지토리에 새 리비전이 생성됩니다. 커밋을 수행할 때 Studio Pro에서 다음 정보를 추가할 수 있으며, 이 정보는 새로 생성된 리비전에 첨부됩니다:

* 텍스트 메시지. 이것은 수행한 변경 사항의 요약이어야 합니다
* 커밋과 관련된 스토리 목록. 작은 커밋은 아마도 하나의 스토리와 관련될 것입니다. Studio Pro는 현재 Sprint에 있고 상태가 *Done*이 아닌 스토리를 표시합니다. 커밋에 스토리를 추가해도 Mendix Portal 스토리의 상태는 변경되지 않습니다. 상태를 'Done'으로 설정하는 것은 수동으로 수행해야 하며 *완료 정의(definition of done)*에 따라 달라집니다.

{{< figure src="/attachments/refguide8/version-control/using-version-control-in-studio-pro/2018-02-21_13-50-03.png" class="no-border" >}}

Studio Pro는 일부 정보를 자동으로 첨부합니다:

* 커밋한 사람(*작성자*)
* 커밋 날짜와 시간
* 변경된 문서, 폴더 및 모듈 목록과 변경 유형(예: *수정* 또는 *추가*)
* 커밋에 사용된 Studio Pro 버전

Java 소스 코드를 변경하거나 위젯을 추가하거나 프로젝트 파일 이외의 파일에 영향을 미치는 다른 변경을 한 경우, 커밋하려는 디스크 변경 사항을 보여주는 **Changes on disk** 탭 페이지가 표시됩니다.

커밋은 작업 복사본이 리포지토리와 최신 상태인 경우에만 허용됩니다. 마지막 업데이트 이후 다른 사람이 변경 사항을 커밋한 경우 먼저 업데이트해야 합니다. 이는 커밋으로 생성하는 리비전에 본인의 변경 사항과 다른 사람의 변경 사항이 모두 포함되어야 하기 때문입니다. 업데이트하면 리포지토리의 최신 변경 사항이 본인의 변경 사항과 결합됩니다. 결과를 검토하고 충돌을 해결한 후 다시 커밋할 수 있습니다.

### 업데이트(Updating)

업데이트는 리포지토리에서 최신 변경 사항을 가져옵니다. 리포지토리에 변경 사항을 커밋하기 전에 작업 복사본에 아직 포함되지 않은 다른 사람의 변경 사항을 포함하려면 이 작업을 수행해야 합니다. 가져오는 변경 사항 수를 줄이기 위해 자주 업데이트하는 것이 좋습니다.

앱의 작업 복사본을 업데이트하려면 **Changes** 독에서 **Update** 버튼을 클릭하거나 **Project > Update** 메뉴 항목을 선택하세요.

{{< figure src="/attachments/refguide8/version-control/using-version-control-in-studio-pro/update-button.png" alt="Update Button" class="no-border" >}}

업데이트 시 리포지토리에서 받은 변경 사항은 작업 복사본에 수행한 변경 사항(있는 경우)과 결합됩니다. 이후 작업 복사본에는 본인의 변경 사항과 받은 변경 사항이 모두 포함됩니다. 업데이트의 일부로 작업 복사본의 원본도 업데이트됩니다.

예를 들어, 마지막 업데이트 시 리비전 40까지의 모든 변경 사항을 받았다면, 작업 복사본의 원본은 리비전 40입니다. 작업 복사본에 변경을 시작한 이후 팀의 다른 사람들이 네 번의 커밋(41, 42, 43, 44)을 했습니다. 지금 업데이트하면 해당 변경 사항을 받게 되고 44가 본인의 변경 사항과 비교되는 새 *원본*이 됩니다.

일반적으로 본인의 변경 사항과 리포지토리의 최신 리비전을 결합하는 작업은 자동으로 수행됩니다. 예를 들어, 한 사람이 페이지를 추가하는 동안 본인은 Microflow를 변경하는 경우입니다. 그러나 변경 사항이 너무 가까우면 충돌이 발생할 수 있습니다. 예를 들어, 팀원 중 한 명이 본인도 변경한 동일한 데이터 뷰의 속성을 변경한 경우입니다. 커밋하기 전에 이러한 충돌을 해결해야 합니다. 이를 수행하는 방법에 대한 자세한 내용은 아래의 [충돌 처리](#conflicts) 섹션을 참조하세요.

팀이 자주 커밋하면 자주 업데이트해야 합니다. 자주 업데이트하면 각 업데이트마다 받는 변경 사항이 적어져 해당 변경 사항을 작업에 통합하기가 더 쉬워집니다.

### 이력(History) {#history}

프로젝트의 *이력*은 커밋된 모든 리비전의 목록입니다. 프로젝트의 이력을 보려면 **Changes** 독에서 **History** 버튼을 클릭하거나 **Version Control** > **History** 메뉴 항목을 선택하세요.

{{< figure src="/attachments/refguide8/version-control/using-version-control-in-studio-pro/history-button.png" alt="History Button" class="no-border" >}}

리비전은 역순으로 표시됩니다(최신 항목이 목록 맨 위에 표시). 이력 대화 상자는 각 리비전의 리비전 번호, 날짜, 시간, 작성자 및 메시지를 보여줍니다.

리비전을 선택하면 관련 스토리, 변경된 문서, Studio Pro 버전 및 디스크 변경 사항과 같은 추가 세부 정보를 볼 수 있습니다. 아이콘은 프로젝트에서 발생한 변경 종류를 요약합니다.

{{< figure src="/attachments/refguide8/version-control/using-version-control-in-studio-pro/2018-02-21_14-06-46.png" class="no-border" >}}

## 변경 사항 되돌리기

아직 커밋되지 않은 변경 사항은 되돌릴 수 있습니다. 예를 들어, 페이지에 많은 변경을 했지만 결과에 만족하지 않는다고 가정합니다. 페이지를 원본으로 되돌릴 수 있습니다. 즉, 변경을 시작하기 전의 페이지 상태로 돌아갑니다.

문서, 폴더 및 모듈의 삭제도 되돌릴 수 있습니다. 이렇게 하면 프로젝트로 다시 가져옵니다. *커밋한* 최신 버전을 돌려받게 됩니다. 예를 들어, 커밋하고, Microflow에 변경을 한 후, Microflow를 삭제하면, 삭제를 되돌리면 수행한 변경 없이 Microflow를 돌려받게 됩니다.

**Changes** 독에서 또는 되돌리려는 문서의 오른쪽 클릭 메뉴에서 변경 사항을 되돌릴 수 있습니다.

{{< figure src="/attachments/refguide8/version-control/using-version-control-in-studio-pro/revertx2.png" alt="Two ways of reverting" class="no-border" >}}

## 충돌 처리 {#conflicts}

앱을 업데이트하고 변경 사항을 자동으로 병합할 수 없는 경우 충돌이 있다는 메시지를 받게 됩니다. 두 변경 사항을 결합할 수 없을 때 충돌이 발생합니다.

{{< figure src="/attachments/refguide8/version-control/using-version-control-in-studio-pro/contains-conflicts.png" alt="Warning about conflicts" class="no-border" >}}

두 가지 종류의 충돌이 있습니다:

* 문서 충돌
* 프로젝트 충돌

### 문서 충돌 해결

동일한 *문서* 내에서 매우 가까운 두 변경 사항은 문서 충돌을 일으킬 수 있습니다. 예를 들어, 두 사람이 페이지의 동일한 요소 속성을 모두 변경한 경우입니다. 문서는 **Changes** 독에서 충돌로 표시됩니다. 다시 커밋하기 전에 충돌을 해결해야 합니다.

문서를 더블 클릭하여 어떤 요소에 충돌이 있는지 확인할 수 있습니다. 본인이 수행한 모든 변경 사항과 다른 사람이 수행한 모든 변경 사항도 볼 수 있습니다.

{{< figure src="/attachments/refguide8/version-control/using-version-control-in-studio-pro/document-changes.png" alt="Detailed document conflicts" class="no-border" >}}

각 *문서*에 대해 **mine**(본인)인 충돌 요소를 수락하고 다른 사람의 변경 사항을 폐기하거나, 다른 사람의 변경 사항이 더 관련이 있는 경우 **theirs**(상대방)인 충돌 요소를 수락할지 결정할 수 있습니다.

이 결정은 문서의 모든 충돌에 적용됩니다. 일부 충돌에는 본인의 버전을, 다른 충돌에는 상대방의 변경 사항을 선택할 수 없습니다. 충돌하지 않는 변경 사항은 정상적으로 병합됩니다.

**Changes** 독에서 전체 프로젝트에 대한 변경 사항을 보고 있는지 확인하고, 충돌 상태인 문서를 선택한 후 **Tasks** 드롭다운에서 필요한 옵션을 사용하세요.

{{< figure src="/attachments/refguide8/version-control/using-version-control-in-studio-pro/resolve-document-conflict.png" alt="Resolving a conflict using the changes dock" class="no-border" >}}

예를 들어, 페이지에서 데이터 뷰를 삭제했는데 다른 사람이 해당 데이터 뷰 안의 무언가를 변경한 경우, 'Use mine'을 클릭하여 다른 사람의 변경 사항을 폐기할 수 있습니다.

충돌을 해결하면 충돌은 사라지지만, 커밋할 변경 사항이 있는 경우 문서는 여전히 변경된 것으로 표시될 수 있습니다.

### 프로젝트 충돌 해결

프로젝트 충돌은 프로젝트 수준의 충돌입니다. 프로젝트 충돌의 원인은 두 가지입니다:

1. 한 사람이 문서를 삭제하고 다른 사람이 해당 문서 안에서 변경을 수행한 경우.
2. 두 사람 모두 문서를 이동했지만 프로젝트 트리의 다른 위치로 이동한 경우.

관련 문서는 충돌로 표시되며 **Changes** 독의 세부 정보 열에서 이유를 확인할 수 있습니다.

{{< figure src="/attachments/refguide8/version-control/using-version-control-in-studio-pro/project-conflicts.png" alt="Example of project conflicts" class="no-border" >}}

{{% alert color="info" %}}
전체 폴더(또는 모듈)가 *삭제*되었는데 다른 사람이 해당 폴더 안의 문서를 변경한 경우, 폴더/모듈이 복원되고 충돌로 표시됩니다. 이렇게 하면 해당 폴더를 삭제하려는 의도가 있었지만 변경된 문서의 컨텍스트를 보여주기 위해 복원되었다는 것을 알 수 있습니다.
{{% /alert %}}

**Tasks** > **Use mine**을 선택하거나 관련 문서 또는 폴더를 삭제하여 프로젝트 충돌을 해결할 수 있습니다.

## 브랜치 사용하기

리포지토리에는 여러 개발 라인이 포함될 수 있습니다. 각 개발 라인은 다른 개발 라인과 독립적인 개발을 제공합니다. 간단한 경우에는 메인 라인(Subversion에서는 'trunk'라고 함)이라는 하나의 개발 라인만 있습니다. 그러면 모든 개발이 해당 라인 내에서 이루어집니다.

{{< figure src="/attachments/refguide8/version-control/using-version-control-in-studio-pro/688156.png" class="no-border" >}}

둘 이상의 개발 라인을 갖는 것이 편리한 경우가 많습니다. 예를 들어, 현재 배포된 프로젝트 버전의 버그를 수정하는 개발 라인과 새 기능을 개발하는 다른 라인이 있습니다. 배포된 버전에서 버그를 발견하면 새 기능이 개발되는 개발 라인의 상태와 관계없이 해당 개발 라인에서 수정할 수 있습니다. 브랜치에 대한 자세한 내용은 [버전 관리(Version Control)](/refguide8/version-control/)를 참조하세요.

### 브랜치를 사용하는 경우

#### 배포된 애플리케이션 패치하기

배포된 애플리케이션에 기능을 추가하거나 버그를 수정하려는 경우 다른 개발에 간섭하지 않고 수행할 수 있습니다.

1. 배포된 애플리케이션의 버전을 확인합니다. 이 정보는 Mendix Portal에 있습니다. 또는 배포 패키지(mda) 아카이브의 **model** 하위 폴더에 있는 *metadata.json* 파일에서 버전을 찾을 수 있습니다. 예: `"ModelVersion": "1.0.0.16"`
2. **Version Control** > **Manage Branch Lines...**를 선택하고 해당 버전 번호를 이름으로 하는 태그를 기반으로 브랜치를 생성합니다.

    {{< figure src="/attachments/refguide8/version-control/using-version-control-in-studio-pro/create-from-tag.png" class="no-border" >}}

3. 이 새로 생성된 브랜치에서 기능을 추가하거나 버그를 수정합니다.
4. 의도한 대로 작동하는지 테스트합니다.
5. 더 높은 버전 번호로 새 배포 아카이브를 생성합니다(패치 또는 마이너 버전 증가).

{{% alert color="info" %}}
필요한 경우 수정된 유지보수 브랜치를 메인 라인에 빠르게 병합하는 것을 권장합니다. 메인 라인이 너무 많이 변경되어 자동으로 병합할 수 없는 경우에도 변경 사항이 아직 기억에 생생하므로 수동으로 메인 라인에 수정 사항을 적용하는 방법을 알게 됩니다.

물론 모든 유지보수 수정이 메인 라인에 병합될 필요는 없습니다. 때로는 메인 라인에서 완전히 재설계되거나 제거된 것의 수정일 수 있습니다. 이 경우 병합은 불필요합니다.
{{% /alert %}}

#### 새 기능 독립적으로 개발하기

브랜치를 만드는 또 다른 이유는 다른 개발에 간섭하지 않고 큰 새 기능을 개발하는 것입니다. 이렇게 하면 반쯤 구현된 기능을 오류가 있더라도 커밋할 수 있으며, 다른 사람들은 여전히 메인 라인에서 커밋하고 업데이트할 수 있습니다. 브랜치 라인을 사용하지 않으면 프로젝트가 항상 오류가 없고 시스템의 다른 부분을 손상시키지 않는지 지속적으로 확인해야 합니다.

먼저 **Version Control** > **Manage Branch Lines...**를 선택하고 메인 라인의 리비전에서 브랜치를 생성합니다.

{{< figure src="/attachments/refguide8/version-control/using-version-control-in-studio-pro/2018-02-28_13-50-39.png" class="no-border" >}}

기능이 완료될 때까지 브랜치에서 작업하고 완료된 작업을 커밋합니다.

전체 브랜치를 메인 라인에 다시 병합하여 기능을 통합하려면 다음을 수행하세요:

1. 메인 라인을 엽니다.
2. **Version Control** > **Merge changes here**를 선택합니다.
3. **Merge feature branch**를 선택합니다.

    {{< figure src="/attachments/refguide8/version-control/using-version-control-in-studio-pro/2018-02-28_14-05-23.png" class="no-border" >}}

4. 브랜치를 선택하고 **Merge**를 클릭합니다.
5. 충돌과 오류를 해결합니다.
6. 메인 라인에 새 기능을 커밋합니다.

원하는 경우 병합 후 브랜치를 삭제할 수 있습니다.

### Studio Pro에서 브랜치 작업하기

#### 브랜치 생성

메인 라인 이외의 개발 라인을 브랜치 라인이라고 합니다. *메인 라인*에서 새 기능을 개발하고 배포된 버전의 버그를 수정하기 위해 *브랜치 라인*을 사용하는 것을 권장합니다. 이것이 Studio Pro가 쉽게 만드는 시나리오이지만, 더 복잡한 프로젝트를 위한 다른 시나리오도 지원됩니다.

**Version Control** > **Manage Branch Lines...**에서 찾을 수 있는 Branch Line Manager에서 브랜치 라인을 생성할 수 있습니다.

{{< figure src="/attachments/refguide8/version-control/using-version-control-in-studio-pro/create-branch-line.png" class="no-border" >}}

#### 병합(Merging)

여러 개발 라인이 있는 경우 한 개발 라인에서 다른 개발 라인으로 변경 사항을 이식하려는 경우가 있습니다. 예를 들어, 프로덕션 버전의 브랜치 라인에서 수행한 수정이 메인 라인에서 개발 중인 새 2.0 버전에도 적용되어야 합니다. 물론 수동으로 할 수도 있지만, Studio Pro는 한 개발 라인에서 다른 개발 라인으로 변경 사항을 병합하여 도움을 줄 수 있습니다.

병합은 항상 작업 복사본이 열려 있는 상태에서 수행됩니다. 병합 결과는 해당 작업 복사본의 추가 로컬 변경 사항이 됩니다. 작업 복사본에 추가 변경 사항을 병합하기 전에 로컬 변경 사항을 먼저 커밋하는 것이 좋습니다. 그렇지 않으면 커밋되지 않은 로컬 변경 사항과 병합으로 인한 변경 사항이 결합되어 병합에 만족하지 않는 경우 분리하기 매우 어렵습니다. Studio Pro는 커밋되지 않은 변경 사항이 있으면 경고합니다.

**Version Control** > **Merge Changes Here**를 선택한 다음 적절한 병합 유형(예: **Port fix**)을 선택합니다.

{{< figure src="/attachments/refguide8/version-control/using-version-control-in-studio-pro/2018-02-21_14-19-47.png" class="no-border" >}}

한 개발 라인에서 다른 개발 라인으로 단일 리비전 또는 전체 리비전 범위를 병합할 수 있습니다. 브랜치 라인이 메인 라인에 완전히 통합하려는 큰 새 기능을 나타내는 경우, 브랜치의 모든 리비전을 병합할 수 있습니다.

#### 역방향 병합(Reverse Merging)

변경 사항 되돌리기는 아직 커밋되지 않은 변경 사항에 대해 작동합니다. 커밋된 변경 사항은 절대 삭제할 수 없습니다. 그러나 변경 사항을 '역방향으로' 적용하고 커밋할 수 있습니다. 이 기능을 Studio Pro에서 '역방향 병합(Reverse merging)'이라고 합니다.

**Version Control** > **Reverse Merge Changes...**를 선택합니다.

{{< figure src="/attachments/refguide8/version-control/using-version-control-in-studio-pro/revert-committed-changes.png" class="no-border" >}}

역방향 병합 후 프로젝트는 변경 사항이 발생하지 않은 것처럼 보입니다. 페이지 추가를 '역방향 병합'하면 해당 페이지가 로컬에서 삭제됩니다. 일반 병합을 수행할 때와 마찬가지로 충돌이 발생할 수 있습니다. 예시에서, 이후 커밋이 추가된 페이지를 변경하면 역방향 병합으로 인해 충돌이 발생합니다. 문제를 해결한 후 결과를 리포지토리에 커밋할 수 있습니다.

#### 메인 라인을 브랜치 라인으로 교체하기

메인 라인을 브랜치 라인으로 완전히 교체하는 방법은 두 가지입니다.

첫 번째 방법은 전체 브랜치 라인을 메인 라인에 병합하여 실질적으로 메인 라인의 내용을 브랜치 라인의 내용으로 교체하는 것입니다. 이 방법은 브랜치 라인이 메인 라인과 최신 상태인 경우에 작동합니다(충돌을 피하기 위해). 이를 수행하려면 다음 단계를 따르세요:

1. **Version Control** > **Merge Changes Here** > **Merge feature branch**를 선택합니다.
2. 메인 라인에 병합할 브랜치를 선택합니다.

두 번째 방법은 어떤 이유로 첫 번째 방법이 불가능하고 브랜치 라인으로 메인 라인을 "덮어쓰기"하려는 경우에 사용해야 합니다. 이 방법의 경우 다음 단계를 따라야 합니다:

1. 메인 라인과 브랜치 라인을 모두 로컬에 체크아웃합니다.
2. 메인 라인 프로젝트 디렉토리의 모든 파일을 브랜치 라인의 파일로 덮어씁니다(*.svn* 디렉토리 제외).
3. Studio Pro를 사용하여 변경 사항을 커밋합니다.
4. 파일을 덮어쓴 후에만 Studio Pro에서 메인 라인 프로젝트를 다시 엽니다.

## 클라우드에 배포된 프로젝트의 버전 관리 {#versioning-project}

### 로컬 배포

개발 중에는 **Run** > **Run Locally** 메뉴 항목을 사용하여 로컬 머신에서 앱을 배포하고 실행할 수 있습니다. 이를 통해 현재 로컬 머신에 저장된 앱을 테스트할 수 있습니다.

### 작업 복사본 배포

클라우드에 배포할 때 로컬 머신에 저장된 앱 버전인 *작업 복사본*을 사용하여 기본 환경에 배포하도록 선택할 수 있습니다. [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/) 또는 기타 파트너 클라우드(예: SAP BTP)를 사용하는 경우, **Run** > **Run** 메뉴 항목을 선택하여 로컬 머신에 저장된 앱 버전을 커밋하고 기본 환경에 배포합니다.

### 특정 개발 라인 및 리비전 선택

기본 환경에 배포하거나 패키지를 생성할 특정 개발 라인과 리비전을 선택하는 것도 가능합니다.

이 경우 Studio Pro는 선택한 리비전의 새로운 체크아웃을 생성합니다. 이는 모든 팀원이 항상 이 버전의 배포 패키지를 재생성할 수 있다는 것을 의미합니다. 즉, Studio Pro는 버전 관리 배포 패키지를 만들기 위해 로컬 파일에 의존하지 *않습니다*.

{{% alert color="warning" %}}
커밋된 변경 사항의 버전 관리 배포 패키지만 생성할 수 있습니다. 버전 관리 배포 패키지에 배포하려는 로컬 변경 사항이 있는 경우 먼저 커밋하세요.
{{% /alert %}}

패키지를 생성할 때 Studio Pro는 프로젝트의 이 버전을 나타내는 태그도 생성합니다. 나중에 다른 개발과 독립적으로 이 버전을 수정하려면 이 태그를 기반으로 브랜치를 생성할 수 있습니다. 태그의 이름은 사용자가 선택하는 버전 번호입니다.

#### 특정 버전을 Mendix 라이선스 클라우드 노드에 배포

Mendix Cloud를 사용하는 경우 **Project** > **Deploy to Licensed Cloud Node**를 선택하여 특정 버전을 배포할 수 있습니다.

{{< figure src="/attachments/refguide8/version-control/using-version-control-in-studio-pro/2018-02-21_17-05-05.png" class="no-border" >}}

#### 특정 버전에서 배포 패키지 생성

다른 호스팅 환경을 사용하는 경우 **Project** > **Create Deployment Package...** 메뉴 항목을 사용하여 배포 패키지를 생성합니다.

{{< figure src="/attachments/refguide8/version-control/using-version-control-in-studio-pro/2018-02-28_13-44-04.png" class="no-border" >}}

## Studio Pro 외부에서 작업하기

Studio Pro는 일부 파일 관리를 자동으로 처리합니다. 커스텀 위젯을 추가하거나 제거하면 버전 관리에서도 자동으로 추가 또는 제거됩니다. 일부 파일과 디렉토리(예: deployment 및 releases 디렉토리)는 자동으로 무시되므로 버전 관리에 커밋되지 않습니다.

유용한 메타데이터가 리비전에 추가되므로 항상 Studio Pro 내에서 커밋하고 업데이트하는 것을 권장합니다. Studio Pro에는 외부 업데이트나 병합에서 복구하는 방법이 있지만, 이에 의존하지 않는 것이 좋습니다.

### TortoiseSVN 및 Subclipse {#tortoisesvn-subclipse}

Java 액션이나 프로젝트에 리소스를 추가하는 것과 같은 고급 파일 변경을 수행하는 경우 컴퓨터에 TortoiseSVN을 설치하고 일부 작업을 직접 수행해야 합니다. [TortoiseSVN](https://tortoisesvn.net/)에서 무료로 다운로드할 수 있습니다.

{{% alert color="warning" %}}
Mendix Studio Pro는 Subversion 1.9 작업 복사본을 사용합니다. 이전 버전의 Mendix Desktop Modeler는 Subversion 1.7 작업 복사본을 사용했습니다. 이러한 작업 복사본 버전은 **호환되지 않습니다**.

항상 앱 모델과 일치하는 TortoiseSVN 버전을 사용하세요. Mendix 7.x의 로컬 모델을 최신 버전의 TortoiseSVN으로 열면 **더 이상 Mendix에서 열 수 없게 됩니다**.
{{% /alert %}}

또한 Eclipse를 사용하여 Java 액션을 개발하는 경우, Java 파일의 버전 관리를 위해 Subclipse를 설치하는 것을 권장합니다. Eclipse 내에서 또는 [Eclipse Marketplace](https://marketplace.eclipse.org/content/subclipse)에서 Subclipse를 다운로드할 수 있습니다.

### 파일 및 디렉토리 추가

Windows 탐색기를 사용하여 파일이나 디렉토리를 추가하거나 파일을 삭제하면 Studio Pro가 자동으로 버전 관리에서도 이를 추가 또는 삭제합니다.

이미 버전 관리 하에 있는 디렉토리를 프로젝트에 복사하는 경우 TortoiseSVN의 SVN 내보내기 기능을 사용하세요.

### 파일 및 디렉토리 삭제

프로젝트에서 파일을 삭제하면 Studio Pro가 자동으로 Team Server에서도 삭제합니다.

전체 디렉토리를 삭제하려면 TortoiseSVN의 삭제 명령을 사용해야 합니다. 디렉토리를 마우스 오른쪽 버튼으로 클릭하고 'TortoiseSVN > Delete'를 선택하여 이 명령을 실행할 수 있습니다.

### 브랜치 및 배포

Studio Pro 외부에서 브랜치를 수행하면 Mendix Cloud에 즉시 배포할 수 없습니다. 이는 Studio Pro가 커밋하거나 브랜치를 만들 때 각 리비전에 앱의 Mendix 버전에 대한 메타데이터를 추가하기 때문이며, 이는 Mendix Cloud 배포에 필요합니다. Studio Pro 외부에서 브랜치를 만들면 브랜치에서 메타데이터가 누락되어 앱을 성공적으로 배포할 수 없습니다.

이를 해결하려면 Studio Pro에서 브랜치에 작은 커밋을 수행하세요(예: 문서 필드 변경). 그러면 Studio Pro가 Mendix Cloud 배포에 필요한 메타데이터를 추가하고 앱을 배포할 수 있게 됩니다.

### 실수로 인한 Studio Pro 앱 모델 업그레이드 되돌리기

서로 다른 Studio Pro 버전의 앱에서 작업할 때, 앱 모델이 더 새로운 Studio Pro 버전으로 업그레이드되어 커밋된 반면 나머지 팀은 아직 업그레이드할 준비가 되지 않은 상황이 발생할 수 있습니다.

앱 모델의 이 버전 업그레이드를 되돌리려면 다음 단계를 따르세요:

1. 팀에 상황을 알리고 추가 커밋을 하지 못하게 합니다.
2. Studio Pro를 닫습니다.
3. Windows 탐색기에서 메인 앱 디렉토리로 이동합니다.
4. 디렉토리를 마우스 오른쪽 버튼으로 클릭하고 **TortoiseSVN** > **Show log**를 선택합니다.
5. SVN에서 원하는 Studio Pro 버전의 최신 리비전을 찾습니다.
6. 해당 리비전을 마우스 오른쪽 버튼으로 클릭하고 **Revert to this version**을 선택하고 확인한 후 **OK**를 클릭합니다.
7. Windows 탐색기로 돌아가 폴더를 다시 마우스 오른쪽 버튼으로 클릭하고 **TortoiseSVN** > **Commit**을 선택하고 커밋 메시지를 입력한 후 **OK**를 클릭합니다.
8. 원하는 Studio Pro 버전을 시작하고 Team Server에서 앱을 다운로드합니다.
9. 앱에서 모든 것이 정상인지 확인합니다.
10. 팀에 원하는 Studio Pro 버전에서 프로젝트를 다시 열기 전에 앱의 새로운 체크아웃을 수행하거나 프로젝트 폴더에서 **TortoiseSVN** > **Update**를 실행해야 한다고 알립니다.

## 추가 읽기

* [고급 브랜치 및 병합 전략](https://www.mendix.com/blog/advanced-branching-merging-strategies-part-1-2/)
