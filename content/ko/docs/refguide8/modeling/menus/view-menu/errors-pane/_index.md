---
title: "Errors 창"
url: /refguide8/errors-pane/
weight: 30
description: "Mendix Studio Pro의 Errors 창에 대해 설명합니다."
---

## 소개

앱이 항상 일관되고 올바르게 빌드되도록 하기 위해, Studio Pro는 앱을 빌드할 때 일관성 검사를 수행합니다.

일관성 검사가 충족되지 않으면, Studio Pro는 **Errors** 창에서 이를 알려줍니다. 페이지, Microflow, Domain Model 및 문서 템플릿의 오류와 경고가 강조 표시됩니다:

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/errors-pane.png" alt="Errors Pane" class="no-border" >}}

**Errors** 창을 표시하는 방법은 두 가지입니다:

* 강조 표시된 오류가 있는 요소를 마우스 오른쪽 버튼으로 클릭하고 **Found error** > **Go to Error List**를 선택합니다
* **View > Error List** 메뉴 옵션을 엽니다

## 메시지 유형 {#message-types}

세 가지 유형의 메시지가 있으며, 각각 고유한 버튼과 아이콘이 있습니다:

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/types-of-messages.png" alt="Types of Messages" class="no-border" >}}

아래 표에서 각 메시지 유형에 대한 세부 정보를 제공합니다:

| 유형         | 아이콘                                              | 기능                                                     |
| ------------ | ------------------------------------------------- | ------------------------------------------------------------ |
| Errors       | {{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/error-icon.png" class="no-border" >}}       | 앱이 올바르게 작동하고 배포되는 것을 방해하는 일관성 오류입니다(예: 데이터 뷰에 대한 Entity 속성을 지정하지 않으면 앱이 올바르게 작동할 수 없습니다). |
| Deprecations | {{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/deprecation-icon.png" class="no-border" >}} | 사용 중단되어 향후 버전에서 완전히 제거될 수 있는 기능에 대한 정보를 표시합니다. 현재 앱에는 영향을 미치지 않지만, 다음 버전으로 업그레이드할 때 문제가 발생할 수 있습니다. |
| Warnings     | {{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/warning-icon.png" class="no-border" >}}     | 치명적이지 않은 오류로, 경고가 있어도 앱을 게시할 수 있습니다. 그러나 앱에 논리적 결함이 있으므로(예: 버튼을 클릭해도 아무 일도 일어나지 않음) 경고에 따라 조치를 취하는 것이 좋습니다. |

## Errors 창과의 상호 작용

### 다양한 유형의 메시지 표시

**Errors**, **Deprecations**, **Warnings** 버튼을 클릭하여 **Errors** 창에 표시되는 메시지를 전환할 수 있습니다. 버튼이 강조 표시되면 해당 유형의 메시지가 표시됩니다.

메시지 유형에 대한 자세한 내용은 [메시지 유형](#message-types) 섹션을 참조하십시오.

### Check Now 옵션

**Check now** 옵션은 프로젝트의 일관성 실패 검사를 시작합니다. **Edit** > **Preferences**에서 자동 검사 지연을 설정한 경우 유용합니다. 자동 지연이 지정되지 않은 경우, 각 변경 후 즉시 검사가 수행됩니다.

### Limit to Current Tab 옵션

창에 표시되는 메시지를 현재 문서로 제한합니다.

### 메시지 개요

오류, 사용 중단 및 경고를 빠르게 찾을 수 있도록 각 메시지에 다음이 표시됩니다:

* 아이콘 – [메시지 유형](#message-types)을 나타냅니다
* 인덱스 번호 – 각 메시지에 할당된 인덱스 번호
* **Error Code** – 오류에만 해당하는 고유 코드; 경고 및 사용 중단에는 오류 코드가 없습니다
* **Message** – 검사 실패에 대한 설명/설명
* **Element** – 검사 실패를 유발하는 요소
* **Document** – 요소가 있는 위치
* **Module** – 문서가 있는 모듈

검사를 더블 클릭하면 검사 실패를 유발하는 요소로 직접 이동합니다.

창의 열 머리글을 클릭하여 메시지가 표시되는 순서를 정렬할 수도 있습니다. 따라서 아이콘, 인덱스 번호, 메시지, 오류 코드, 모듈, 문서 또는 요소별로 오류를 오름차순 또는 내림차순으로 정렬할 수 있습니다.

메시지 줄을 마우스 오른쪽 버튼으로 클릭하면 드롭다운 메뉴가 열립니다:

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/drop-down-menu.png" alt="Drop-Down Menu" class="no-border" >}}

드롭다운 메뉴에서 다음 작업을 사용할 수 있습니다:

* **Go to {요소 이름}** – 메시지를 더블 클릭하는 것과 동일하며, 검사 실패를 유발하는 요소로 이동합니다.
* **View documentation about {오류 코드 또는 요소 이름}** – 이 검사 실패를 설명하고 수정 방법을 안내하는 해당 문서를 엽니다; 현재 메시지에 대한 문서가 없는 경우 옵션이 회색으로 표시됩니다
* 메시지별 작업 – 메시지에 따라 달라지는 작업으로, 위의 예에서는 프로젝트에서 사용되지 않는 Microflow 매개변수를 제거할 수 있습니다

## 더 보기

* [Consistency Errors](/refguide8/consistency-errors/)
* [Studio Pro 개요](/refguide8/studio-pro-overview/)
