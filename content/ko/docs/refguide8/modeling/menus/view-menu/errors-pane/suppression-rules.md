---
title: "Suppression Rules"
url: /refguide8/suppression-rules/
weight: 10
description: "Studio Pro의 경고 억제 규칙에 대해 설명합니다."
---

## 소개  {#intro}

프로젝트 작업 시, Studio Pro는 일관성 검사를 수행하며 이로 인해 경고가 발생할 수 있습니다. 경고는 치명적이지 않지만 문제가 될 수 있는 사항을 식별합니다. 이러한 경고는 **Errors** 창에 표시됩니다.

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/suppression-rules/errors-pane-with-warnings.png" alt="Warnings in the Errors pane" class="no-border" >}}

경고는 유용할 수 있지만, 다음과 같은 상황에서 비활성화하고 싶을 수 있습니다:

* 경고를 유발하는 의도적인 선택을 했으며, 이것이 문제를 일으키지 않을 것임을 알고 있는 경우.
* 경고를 포함하는 Marketplace 모듈을 사용하고 있으며 Marketplace 모듈을 변경하고 싶지 않은 경우.
* 경고 수가 너무 많아 **Warnings** 탭을 더 이상 사용할 수 없으며, 일부를 일시적으로 비활성화하려는 경우.

**Suppression rules**를 사용하면 경고를 비활성화할 수 있습니다. **Errors** 창에서 [경고를 억제](#suppress-warning)하고 **Suppression rules** 옵션을 통해 [관리](#managing-rules)할 수 있습니다. 또한 [모든 Marketplace 모듈의 경고를 억제](#suppress-appstore-warnings)할 수도 있습니다.

## 억제 규칙 로직 {#suppression-rules-logic}

억제 규칙은 한 명의 사용자와 하나의 프로젝트 인스턴스에 대한 것입니다. 억제한 경고는 사용자 또는 프로젝트 간에 공유되지 않으므로, 동일한 프로젝트에서 작업하는 팀원에게는 경고가 억제되지 않습니다.

억제 규칙은 프로젝트 디렉터리에 *project-settings.user.json*이라는 파일에 로컬로 저장됩니다. Team Server에 변경 사항을 커밋할 때, Studio Pro는 이 파일을 무시합니다.

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/suppression-rules/windows-explorer-showing-settings-files.png" alt="The settings file shown in Windows Explorer" class="no-border" >}}

그러나 억제 규칙을 수동으로 내보내고 가져올 수 있습니다. 경고를 내보내고 가져오는 방법에 대한 자세한 내용은 [억제 규칙 내보내기](#export) 및 [억제 규칙 가져오기](#import) 섹션을 참조하십시오.

## Errors 창에서 경고 억제 {#suppress-warning}

**Errors** 창에서 문서, 모듈 또는 전체 프로젝트에 대해 경고를 억제할 수 있습니다:
{{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/suppression-rules/suppressing-warning.png" alt="Suppressing a Warning" class="no-border" >}}

### 특정 문서에 대한 경고 억제

특정 문서에 대해서만 경고를 억제하려면 다음을 수행하십시오:

1. 억제하려는 경고를 마우스 오른쪽 버튼으로 클릭하십시오.
2. **Suppress this warning** > **For the document {문서 이름}**을 선택하십시오.

경고는 특정 문서에 대해서만 억제됩니다. 동일한 경고가 다른 문서(예: 다른 페이지)에 나타나면 해당 문서에 대해서는 여전히 표시됩니다.

### 특정 모듈에 대한 경고 억제

특정 모듈에 대해 경고를 억제하려면 다음을 수행하십시오:

1. 억제하려는 경고를 마우스 오른쪽 버튼으로 클릭하십시오.
2. **Suppress this warning** > **For the module {모듈 이름}**을 선택하십시오.

경고는 전체 모듈에 대해 억제됩니다. 동일한 경고가 다른 모듈에 나타나면 해당 모듈에 대해서는 여전히 표시됩니다.

### 전체 프로젝트에 대한 경고 억제

전체 프로젝트에 대해 경고를 억제하려면 다음을 수행하십시오:

1. 억제하려는 경고를 마우스 오른쪽 버튼으로 클릭하십시오.
2. **Suppress this warning** > **For the entire project**를 선택하십시오.

경고는 전체 프로젝트에 대해 억제되고 **Errors** 창의 경고 목록이 업데이트됩니다.

억제 규칙을 편집하거나 삭제하는 방법에 대한 자세한 내용은 [억제 규칙 관리](#managing-rules) 섹션을 참조하십시오.

## 억제 규칙 관리 {#managing-rules}

억제 규칙을 추가, 편집, 삭제, 내보내기 또는 가져올 수 있습니다. Marketplace의 경고를 억제할 수도 있습니다.

{{% alert color="info" %}}
억제 규칙을 수정한 후 **OK**를 클릭하여 **Manage Suppression Rules** 대화 상자를 닫고 변경 사항을 적용하십시오.
{{% /alert %}}

### Marketplace 경고 억제 {#suppress-appstore-warnings}

Marketplace 경고를 억제하려면 다음을 수행하십시오:

1. **Errors** 창에서 **Suppression rules** 버튼을 클릭하십시오.

    {{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/suppression-rules/errors-pane-suppress-warnings-button.png" alt="Viewing the suppress warnings rules" class="no-border" >}}

2. **Manage Suppression Rules** 대화 상자에서 **Suppress warnings from Marketplace modules** 옵션을 선택하십시오.

    {{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/suppression-rules/rules-dialog-app-store-setting.png" alt="Suppressing Marketplace warnings" class="no-border" >}}

3. **OK**를 클릭하여 새 설정을 적용하십시오.

Marketplace 모듈의 경고가 억제됩니다.

### 규칙 추가

보다 고급 케이스의 경우, 수동으로 새 규칙을 추가할 수 있습니다. 이렇게 하면 규칙이 억제할 경고를 결정할 때 사용하는 설정을 완전히 제어할 수 있습니다.

수동으로 새 규칙을 추가하려면 아래 단계를 따르십시오:

1. **Errors** 창에서 **Suppression rules** 버튼을 클릭하십시오.
2. **Manage Suppression Rules** 대화 상자에서 **New** 버튼을 선택하십시오:

    {{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/suppression-rules/rules-dialog-new-button.png" alt="Rules window - new button" class="no-border" >}}

3. **Add Suppression Rule** 대화 상자에서 규칙을 추가하기 위해 필요한 옵션을 설정하십시오(설정에 대한 자세한 내용은 [규칙 설정](#rule-settings) 섹션 참조).

    {{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/suppression-rules/new-warning-window.png" alt="Rules window - add suppression" class="no-border" >}}

4. **OK**를 클릭하여 선택을 확인하십시오.
5. **Manage Suppression Rules** 대화 상자에서 **OK**를 클릭하여 변경 사항을 저장하십시오.

억제 규칙이 생성됩니다.

### 규칙 편집

기존 규칙을 편집하려면 아래 단계를 따르십시오:

1. **Errors** 창에서 **Suppression rules** 버튼을 클릭하십시오.
2. **Manage Suppression Rules** 대화 상자에서 **Edit** 버튼을 선택하십시오:

    {{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/suppression-rules/rules-dialog-edit-button.png" alt="Rules window - edit button" class="no-border" >}}

3. **Edit Suppression Rule** 대화 상자에서 규칙을 변경하기 위한 옵션을 편집하십시오(설정에 대한 자세한 내용은 [억제 규칙 설정](#rule-settings) 섹션 참조).

    {{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/suppression-rules/rule-settings-window.png" alt="Rule settings window" class="no-border" >}}

4. **OK**를 클릭하여 선택을 확인하십시오.
5. **Manage Suppression Rules** 대화 상자에서 **OK**를 클릭하여 변경 사항을 저장하십시오.

억제 규칙이 편집됩니다.

### 규칙 삭제

기존 규칙을 삭제하려면 아래 단계를 따르십시오:

1. **Errors** 창에서 **Suppression rules** 버튼을 클릭하십시오.
2. **Manage Suppression Rules** 대화 상자에서 **Delete** 버튼을 클릭하십시오:

    {{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/suppression-rules/rules-dialog-delete-button.png" alt="Rules window - delete button" class="no-border" >}}

억제 규칙이 삭제됩니다.

### 억제 규칙 가져오기 {#import}

억제 규칙을 가져오려면 다음을 수행하십시오:

1. **Errors** 창에서 **Suppression rules** 버튼을 클릭하십시오.
2. **Manage Suppression Rules** 대화 상자에서 **Import** 버튼을 선택하십시오:

    {{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/suppression-rules/import-rules.png" alt="Import rules button" class="no-border" >}}

3. 가져오려는 폴더를 찾으십시오(가져오는 파일 확장자는 *.suppressions.json*이어야 합니다).
4. **Open**을 클릭하여 파일을 선택하십시오.
5. 확인 팝업 창에서 **OK**를 클릭하여 닫으십시오:

    {{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/suppression-rules/confirmation-dialog-after-rules-imported.png" alt="Import rules confirmation" class="no-border" >}}

6. **Manage Suppression Rules** 대화 상자에서 **OK**를 클릭하십시오.

경고 목록이 업데이트됩니다.

### 억제 규칙 내보내기 {#export}

억제 규칙을 내보내려면 다음을 수행하십시오:

1. **Errors** 창에서 **Suppression rules** 버튼을 클릭하십시오.
2. **Manage Suppression Rules** 대화 상자에서 **Export** 버튼을 선택하십시오:

    {{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/suppression-rules/export-rules.png" alt="Export rules button" class="no-border" >}}

3. 규칙을 내보낼 폴더를 찾으십시오(기본적으로 파일 이름은 `<앱 이름>.suppressions.json`입니다).
4. **Save** 버튼을 클릭하여 내보낸 규칙을 저장하십시오.
5. 확인 팝업 창에서 **OK**를 클릭하여 닫으십시오:

    {{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/suppression-rules/confirmation-dialog-after-rules-exported.png" alt="Export rules confirmation" class="no-border" >}}

6. **Manage Suppression Rules** 대화 상자에서 **OK**를 클릭하십시오.

억제 규칙이 내보내집니다. 다른 사용자가 해당 파일을 [가져오기](#import)하여 동일한 억제 규칙을 사용할 수 있습니다.

## 억제 규칙 설정 {#rule-settings}

아래 표에서 사용 가능한 설정을 설명합니다:

| 설정          | 설명                                                  |
| ---------------- | ------------------------------------------------------------ |
| Module           | 선택한 모듈 내의 경고를 억제합니다. **(All)**이 선택되면 규칙이 모든 모듈에 적용됩니다. |
| Document         | 선택한 문서 내의 경고를 억제합니다. **(All)**이 선택되면 규칙이 선택한 모듈의 모든 문서에 적용됩니다. **참고**: 특정 문서를 선택하려면 먼저 **Module**을 선택해야 합니다. |
| Suppress for | 특정 *오류 코드* 또는 *모든* 경고에 대해 경고를 억제할 수 있습니다. |
| Value            | 위의 **Suppress for** 선택기에서 **Error code** 옵션이 선택된 경우에만 표시됩니다. 특정 오류 코드(예: **CW1234**)를 입력하여 이 특정 경고만 억제할 수 있습니다. |

## 더 보기 {#read-more}

* [Errors Pane](/refguide8/errors-pane/)
* [Consistency Errors](/refguide8/consistency-errors/)
