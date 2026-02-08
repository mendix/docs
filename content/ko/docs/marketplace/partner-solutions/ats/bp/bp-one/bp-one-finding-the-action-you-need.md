---
title: "필요한 Action 찾기"
url: /appstore/partner-solutions/ats/bp-one-finding-the-action-you-need/
---

## 소개

이 문서는 ATS에서 필요한 Action을 찾는 가장 좋은 방법을 설명합니다. 이를 위해 달성하고자 하는 목표에 대한 6가지 주요 카테고리를 사용합니다. 각 카테고리는 예제를 통해 일반적인 솔루션과 Widget별 솔루션을 설명합니다.

1. Widget 찾기
2. Widget 클릭하기
3. 입력 Widget 다루기
4. Widget에서 값 가져오기
5. 값/정보 검증하기
6. 값/정보 생성하기

상황에 맞는 챕터를 선택하세요. 어떤 항목이 본인의 상황에 해당하는지 확실하지 않은 경우, Widget 이름을 사용하여 ATS 내에서 Action을 검색하고 어떤 결과가 나오는지 확인하세요.

빠른 요약과 실행 계획은 챕터 7로 바로 이동하세요.

{{% alert color="info" %}}

ATS Recorder가 어떤 단계도 녹화하지 않는 경우, 이 모범 사례를 사용하여 올바른 Action을 찾을 수 있습니다.

{{% /alert %}}

## Widget 찾기

ATS에는 Widget을 찾기 위한 많은 Action이 있습니다. Widget을 찾는 것부터 특정 DataGrid 행을 찾는 것까지 다양합니다. 첫 번째 챕터에서는 Widget을 찾기 위한 일반 Action을 설명합니다. 두 번째 챕터에서는 보다 구체적인 검색을 수행하는 Action을 설명합니다. 마지막 챕터에서는 처음 두 챕터의 요약을 제공합니다. 무언가를 찾을 수 있는 Action을 검색할 때의 핵심 키워드는 "Find"입니다.

### 일반 Action

Widget을 찾으려면 항상 [*Find/Assert Widget*](/appstore/partner-solutions/ats/rg-one-findassert-widget/) Action을 우선적으로 선택하세요. 이 Action은 Widget의 `mx-name`을 사용하여 필요한 Widget을 찾습니다. ATS는 `mx-name` 대신 **Widget Name** 매개변수를 사용합니다.

**Widget Name**은 ATS Helper를 사용하여 찾을 수 있으며, 해당 값이 **Widget Name**입니다:

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/mx-name-ats-helper-cp-1.png" class="no-border" >}}

*Find/Assert Widget* Action은 `mx-name`이 있는 모든 Widget에서 작동합니다.

*Find/Assert Widget Action*

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/findassert-widget-action-search-1.png" class="no-border" >}}  

일반 Action이 작동하지 않는 경우, 특정 Action이 있는지 확인하세요.

### 특정 Action

특정 Widget 또는 해당 Widget의 콘텐츠를 찾는 경우, 검색에서 Widget 이름을 사용하세요.

1. 예를 들어, DataGrid Widget 내부의 행을 찾으려고 합니다. *Find/Assert Widget* Action을 열 이름과 함께 사용할 수 있지만, 여러 DataGrid가 있는 경우 작동하지 않습니다. 해결 방법은 "Find Datagrid"라는 검색어를 사용하는 것입니다. ATS가 모든 Action을 확인하고 해당 단어와 일치하는 Action을 반환합니다. [*Find/Assert DataGrid Row*](/appstore/partner-solutions/ats/rg-one-findassert-datagrid-row/)라는 Action이 있습니다. *Find/Assert DataGrid Row* Action을 사용하면 특정 열에서 특정 값을 포함하는 DataGrid 행을 검색할 수 있습니다. 이 Action은 ListView 및 TemplateGrid에서도 작동합니다.

    {{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/find-datagrid-example-1.png" class="no-border" >}}

2. 예를 들어, Simple Checkbox Set Selector Widget에서 체크박스를 찾으려고 합니다. 체크박스에 자체 `mx-name`이 없으므로 *Find/Assert Widget* Action을 사용할 수 없습니다. 체크박스는 Simple Checkbox Set Selector Widget의 일부입니다. 해결 방법은 "Find Simple Checkbox Set Selector"라는 검색어를 사용하는 것입니다. ATS가 모든 Action을 확인하고 해당 단어와 일치하는 Action을 반환합니다. [Find Simple Checkbox Set Selector](/appstore/partner-solutions/ats/rg-one-find-simple-checkbox-set-selector/)라는 Action이 있습니다. *Find Simple Checkbox Set Selector* Action은 전체 Widget의 **Widget Name**과 체크박스에 표시되는 값을 기반으로 체크박스를 찾습니다.

    {{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/find-simple-checkbox-set-selector-example-1.png" class="no-border" >}}

3. 예를 들어, 제목이나 내부 텍스트를 기반으로 대화 상자를 찾으려고 합니다. 대화 상자에 `mx-name`이 없으므로 *Find/Assert Widget* Action을 사용할 수 없습니다. 해결 방법은 "Find Dialog"라는 검색어를 사용하는 것입니다. ATS가 모든 Action을 확인하고 해당 단어와 일치하는 Action을 반환합니다. [*Find/Assert Dialog*](/appstore/partner-solutions/ats/rg-one-findassert-dialog/)라는 Action이 있습니다. *Find/Assert Dialog* Action은 제목, 텍스트 또는 대화 상자만을 기반으로 대화 상자를 찾을 수 있습니다.

    {{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/find-dialog-example-1.png" class="no-border" >}}

### 요약

Widget을 찾으려면 가능하면 항상 *Find/Assert Widget* Action을 사용하세요.

Widget 내부에서 보다 구체적인 항목을 찾거나 Widget에 `mx-name`이 없는 경우, [Mendix Marketplace](https://marketplace.mendix.com/) 또는 Mendix Modeler에 표시된 Widget 이름과 "Find"를 조합하여 사용하세요. ATS Helper를 사용하여 이름을 찾을 수도 있습니다.

고유한 이름이 없거나 지원되지 않아 Widget을 찾을 수 없는 경우, [커스텀 Action 만들기](/appstore/partner-solutions/ats/ht-one-create-custom-actions/)를 참조하세요.

## Widget 클릭하기

ATS에는 Widget을 클릭하기 위한 많은 Action이 있습니다. Widget을 클릭하는 것부터 특정 DataGrid 행을 클릭하는 것까지 다양합니다. 첫 번째 챕터에서는 Widget을 클릭하기 위한 일반 Action을 설명합니다. 두 번째 챕터에서는 보다 구체적인 클릭을 수행하는 Action을 설명합니다. 마지막 챕터에서는 처음 두 챕터의 요약을 제공합니다. 무언가를 클릭할 수 있는 Action을 검색할 때의 핵심 키워드는 "Click"입니다.

### 일반 Action

Widget을 클릭하려면 항상 [*Click Widget*](/appstore/partner-solutions/ats/rg-one-click-widget/) Action을 우선적으로 선택하세요. 이 Action은 Widget의 `mx-name`을 사용하여 필요한 Widget을 클릭합니다. ATS는 `mx-name` 대신 **Widget Name** 매개변수를 사용합니다.

**Widget Name**은 ATS Helper를 사용하여 찾을 수 있으며, 해당 값이 **Widget Name**입니다:

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/mx-name-ats-helper-cp-1.png" class="no-border" >}}

*Click Widget* Action은 `mx-name`이 있는 모든 Widget에서 작동합니다.

*Click Widget Action*

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/click-widget-action-search-1.png" class="no-border" >}}

일반 Action이 작동하지 않는 경우, 특정 Action이 있는지 확인하세요.

### 특정 Action

ATS에는 몇 가지 특정 클릭 Action도 있습니다. 이를 찾으려면 "Click"과 Widget 이름을 조합한 검색어를 사용하세요.

1. 예를 들어, ListView Widget 내부의 더 보기 버튼을 클릭하려고 합니다. 더 보기 버튼에 자체 `mx-name`이 없으므로 *Click Widget* Action을 사용할 수 없습니다. 이 버튼은 ListView Widget의 일부입니다. 해결 방법은 "Click load more" 또는 "Click listview"라는 검색어를 사용하는 것입니다. ATS가 모든 Action을 확인하고 해당 단어와 일치하는 Action을 반환합니다. [*Click Widget Button*](/appstore/partner-solutions/ats/rg-one-click-widget-button/)이라는 Action이 있습니다. *Click Widget Button* Action은 Widget의 `mx-name`과 버튼 유형을 사용하여 올바른 버튼을 클릭합니다. 이 경우 "load more" 유형을 선택하세요.
2. 예를 들어, DataGrid 내부의 특정 DataGrid 행을 클릭하려고 합니다. *Click Widget* Action을 열 이름과 함께 사용할 수 있지만, 여러 DataGrid가 있는 경우 ATS가 구분할 수 없습니다. 해결 방법은 "Click DataGrid"라는 검색어를 사용하는 것입니다. ATS가 모든 Action을 확인하고 해당 단어와 일치하는 Action을 반환합니다. [*Click DataGrid Row*](/appstore/partner-solutions/ats/rg-one-click-datagrid-row/)라는 Action이 있습니다. *Click DataGrid Row* Action을 사용하면 특정 열에서 특정 값을 포함하는 DataGrid 행을 클릭할 수 있습니다. 이 Action은 ListView 및 TemplateGrid에서도 작동합니다.

    {{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/click-datagrid-row-action-search-1.png" class="no-border" >}}

3. 예를 들어, 메뉴바 Widget에서 메뉴 항목을 클릭하려고 합니다. 메뉴 항목에 자체 `mx-name`이 없으므로 *Click Widget* Action을 사용할 수 없습니다. 이 항목은 메뉴바 Widget의 일부입니다. 해결 방법은 "Click menu"라는 검색어를 사용하는 것입니다. ATS가 모든 Action을 확인하고 해당 단어와 일치하는 Action을 반환합니다. [*Click Menu Item*](/appstore/partner-solutions/ats/rg-one-click-menu-item/)이라는 Action이 있습니다. *Click Menu Item* Action은 캡션을 사용하여 메뉴바 Widget 내부의 메뉴 항목을 클릭합니다.

    {{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/click-menu-item-action-search-1.png" class="no-border" >}}

4. 예를 들어, 이전 단계에서 찾은 요소를 클릭하려고 합니다. *Click Widget* Action은 요소를 입력으로 받지 않으므로 사용할 수 없습니다. 해결 방법은 "Click/Doubleclick"이라는 검색어를 사용하는 것입니다. ATS가 모든 Action을 확인하고 해당 단어와 일치하는 Action을 반환합니다. [*Click/Doubleclick*](/appstore/partner-solutions/ats/rg-one-clickdoubleclick/)이라는 Action이 있습니다. *Click/Doubleclick* Action은 이전 단계에서 찾은 요소를 클릭하려는 경우에 사용하는 Action입니다.

    {{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/clickdoubleclick-action-search-1.png" class="no-border" >}}

### 요약

Widget을 클릭하려면 가능하면 항상 *Click Widget* Action을 사용하세요.

Widget 내부에서 보다 구체적인 항목을 클릭하거나 Widget에 `mx-name`이 없는 경우, [Mendix Marketplace](https://marketplace.mendix.com/) 또는 Mendix Modeler에 표시된 Widget 이름과 "Click"을 조합하여 사용하세요. ATS Helper를 사용하여 이름을 찾을 수도 있습니다.

고유한 이름이 없거나 지원되지 않아 Widget을 클릭할 수 없는 경우, [커스텀 Action 만들기](/appstore/partner-solutions/ats/ht-one-create-custom-actions/)를 참조하세요.

## 입력 Widget 설정하기

ATS에는 입력 Widget을 설정하기 위한 여러 Action이 있습니다. 대부분의 상황을 다루는 간단한 Action부터 테이블 내부의 체크박스까지 다양합니다. 첫 번째 챕터에서는 입력 Widget을 설정하기 위한 일반 Action을 설명합니다. 두 번째 챕터에서는 보다 구체적인 입력 Widget을 설정하는 Action을 설명합니다. 마지막 챕터에서는 처음 두 챕터의 요약을 제공합니다. 입력 Widget을 처리할 수 있는 Action을 검색할 때의 핵심 키워드는 "Set"입니다.

### 일반 Action

입력 Widget을 설정하려면 항상 [*Set Value*](/appstore/partner-solutions/ats/rg-one-set-value/) Action을 우선적으로 선택하세요. 이 Action은 Widget의 `mx-name`과 설정할 값을 사용하여 입력 Widget을 설정합니다. ATS는 `mx-name` 대신 **Widget Name** 매개변수를 사용합니다.

**Widget Name**은 ATS Helper를 사용하여 찾을 수 있으며, 해당 값이 **Widget Name**입니다:

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/mx-name-ats-helper-cp-1.png" class="no-border" >}}

*Set Value* Action은 입력 Widget인 거의 모든 Widget에서 작동합니다.

*Set Value Action*

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/set-value-action-search-1.png" class="no-border" >}}

일반 Action이 작동하지 않는 경우, 특정 Action이 있는지 확인하세요.

### 특정 Action

ATS에는 입력 Widget을 설정하기 위한 몇 가지 특정 Action도 있습니다. 이를 찾으려면 "Set"과 Widget 이름을 조합한 검색어를 사용하세요.

1. 예를 들어, 체크박스 Widget의 값을 특정 상태로 설정하려고 합니다. *Set Value* Action은 작동하지 않으므로 사용할 수 없습니다. 해결 방법은 "Set Checkbox"라는 검색어를 사용하는 것입니다. ATS가 모든 Action을 확인하고 해당 단어와 일치하는 Action을 반환합니다. [*Set Checkbox Value*](/appstore/partner-solutions/ats/rg-one-set-checkbox-value/)라는 Action이 있습니다. *Set Checkbox Value* Action은 Widget의 `mx-name`과 설정한 Boolean 값을 사용하여 체크박스를 선택하거나 해제합니다.

    {{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/set-checkbox-value-action-search-1.png" class="no-border" >}}

2. 예를 들어, BooleanSlider Widget을 특정 값으로 설정하려고 합니다. *Set Value* Action은 작동하지 않으므로 사용할 수 없습니다. 해결 방법은 "Set BooleanSlider"라는 검색어를 사용하는 것입니다. ATS가 모든 Action을 확인하고 해당 단어와 일치하는 Action을 반환합니다. [*Set BooleanSlider Value*](/appstore/partner-solutions/ats/rg-one-set-booleanslider-value/)라는 Action이 있습니다. *Set BooleanSlider Value* Action은 Widget의 `mx-name`과 슬라이더를 설정할 값을 사용합니다.

    {{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/set-booleanslider-value-action-search-1.png" class="no-border" >}}

3. 예를 들어, GridSelector Widget 내부의 라디오 버튼을 설정하려고 합니다. 라디오 버튼에 자체 `mx-name`이 없으므로 *Set Value*를 사용할 수 없습니다. 이 버튼은 GridSelector Widget의 일부입니다. 해결 방법은 "Set Grid Selector"라는 검색어를 사용하는 것입니다. ATS가 모든 Action을 확인하고 해당 단어와 일치하는 Action을 반환합니다. [*Set Grid Selector Value*](/appstore/partner-solutions/ats/rg-one-set-grid-selector-radiobutton-checked/)라는 Action이 있습니다. *Set Grid Selector Value* Action은 Widget의 `mx-name`, 열 캡션, 행 캡션을 사용하여 라디오 버튼을 찾습니다.

    {{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/set-grid-selector-radiobutton-action-search-1.png" class="no-border" >}}

4. 예를 들어, Input Reference Selector Widget을 설정하려고 합니다. *Set Value* Action은 작동하지 않으므로 사용할 수 없습니다. 해결 방법은 "Set InputReferenceSelector"라는 검색어를 사용하는 것입니다. ATS가 모든 Action을 확인하고 해당 단어와 일치하는 Action을 반환합니다. [*Set InputReferenceSelector Value*](/appstore/partner-solutions/ats/rg-one-set-inputreferenceselector-value/)라는 Action이 있습니다. *Set InputReferenceSelector Value* Action은 `mx-name`과 설정한 값을 사용하여 InputReferenceSelector Widget을 설정합니다.

    {{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/set-inputreferenceselector-value-action-search-1.png" class="no-border" >}}

### 요약

입력 Widget을 설정하려면 가능하면 항상 *Set Value* Action을 사용하세요.

특수 입력 Widget을 설정하거나 Widget에 `mx-name`이 없는 경우, [Mendix Marketplace](https://marketplace.mendix.com/) 또는 Mendix Modeler에 표시된 Widget 이름과 "Click"을 조합하여 사용하세요. ATS Helper를 사용하여 이름을 찾을 수도 있습니다.

고유한 이름이 없거나 지원되지 않아 입력 Widget을 설정할 수 없는 경우, [커스텀 Action 만들기](/appstore/partner-solutions/ats/ht-one-create-custom-actions/)를 참조하세요.

## Widget에서 값 가져오기

ATS에는 Widget에서 값을 가져오기 위한 여러 Action이 있습니다. 첫 번째 챕터에서는 Widget에서 값을 가져오기 위한 일반 Action을 설명합니다. 두 번째 챕터에서는 Widget에서 특정 값을 가져오는 Action을 설명합니다. 마지막 챕터에서는 처음 두 챕터의 요약을 제공합니다. 값을 가져올 수 있는 Action을 검색할 때의 핵심 키워드는 "Get"입니다.

### 일반 Action

Widget에서 값을 가져오려면 항상 [Get Value](/appstore/partner-solutions/ats/rg-one-get-value/) Action을 우선적으로 선택하세요. 이 Action은 Widget의 `mx-name`을 사용하여 Widget의 값을 가져옵니다. ATS는 `mx-name` 대신 **Widget Name** 매개변수를 사용합니다.

**Widget Name**은 ATS Helper를 사용하여 찾을 수 있으며, 해당 값이 **Widget Name**입니다:

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/mx-name-ats-helper-cp-1.png" class="no-border" >}}

*Get Value* Action은 입력 Widget인 거의 모든 Widget에서 작동합니다.

*Get Value Action*

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/get-value-action-search-1.png" class="no-border" >}}

일반 Action이 작동하지 않는 경우, 특정 Action이 있는지 확인하세요.

### 특정 Action

ATS에는 Widget에서 값을 가져오기 위한 몇 가지 특정 Action도 있습니다. 이를 찾으려면 "Get"과 Widget 이름을 조합한 검색어를 사용하세요.

1. 예를 들어, Input Reference Selector Widget의 값을 가져오려고 합니다. *Get Value* Action은 작동하지 않으므로 사용할 수 없습니다. 해결 방법은 "Get InputReferenceSelector"라는 검색어를 사용하는 것입니다. ATS가 모든 Action을 확인하고 해당 단어와 일치하는 Action을 반환합니다. [_ Get InputReferenceSelector_](/appstore/partner-solutions/ats/rg-one-get-inputreferenceselector-value/)라는 Action이 있습니다. *Get InputReferenceSelector* Action은 `mx-name`을 사용하여 InputReferenceSelector Widget이 설정된 값을 반환합니다.

    {{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/get-inputreferenceselector-value-action-search-1.png" class="no-border" >}}

2. 예를 들어, CKEditor Widget에 표시된 값을 가져오려고 합니다. *Get Value* Action은 작동하지 않으므로 사용할 수 없습니다. 해결 방법은 "Get CKEditor"라는 검색어를 사용하는 것입니다. ATS가 모든 Action을 확인하고 해당 단어와 일치하는 Action을 반환합니다. [*Get CKEditor Value*](/appstore/partner-solutions/ats/rg-one-get-ckeditor-value/)라는 Action이 있습니다. *Get CKEditor Value* Action은 `mx-name`을 사용하여 CKEditor Widget에 표시된 값을 반환합니다.

    {{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/get-ckeditor-value-action-search-1.png" class="no-border" >}}

3. 예를 들어, 대화 상자 Widget에 표시된 메시지를 가져오려고 합니다. `mx-name`이 없으므로 *Get Value* Action을 사용할 수 없습니다. 해결 방법은 "Get Dialog"라는 검색어를 사용하는 것입니다. ATS가 모든 Action을 확인하고 해당 단어와 일치하는 Action을 반환합니다. [*Get Dialog Message Text*](/appstore/partner-solutions/ats/rg-one-get-dialog-message-text/)라는 Action이 있습니다. *Get Dialog Message Text* Action은 대화 상자를 WebElement로 사용하여 메시지 텍스트를 가져옵니다. *Find/Assert Dialog* Action을 사용하여 대화 상자를 WebElement로 가져올 수 있습니다.

    {{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/get-dialog-message-text-action-search-1.png" class="no-border" >}}

### 요약

Widget에서 값을 가져오려면 가능하면 항상 *Get Value* Action을 사용하세요.

특정 Widget에서 값을 가져오거나 Widget에 `mx-name`이 없는 경우, [Mendix Marketplace](https://marketplace.mendix.com/) 또는 Mendix Modeler에 표시된 Widget 이름과 "Get"을 조합하여 사용하세요. ATS Helper를 사용하여 이름을 찾을 수도 있습니다.

고유한 이름이 없거나 지원되지 않아 Widget에서 값을 가져올 수 없는 경우, [커스텀 Action 만들기](/appstore/partner-solutions/ats/ht-one-create-custom-actions/)를 참조하세요.

## 값/정보 검증하기

ATS에는 값을 검증하기 위한 여러 Action이 있습니다. 첫 번째 챕터에서는 앱 내부의 값을 검증하기 위한 일반 Action을 설명합니다. 두 번째 챕터에서는 앱 내부 또는 ATS 내부의 특정 값을 검증하는 Action을 설명합니다. 마지막 챕터에서는 처음 두 챕터의 요약을 제공합니다. 값을 검증할 수 있는 Action을 검색할 때의 핵심 키워드는 "Assert"입니다.

### 일반 Action

Widget 내부의 값을 검증하려면 항상 [*Assert Value*](/appstore/partner-solutions/ats/rg-one-assert-value/) Action을 우선적으로 선택하세요. 이 Action은 Widget의 `mx-name`을 사용하여 Widget의 값을 검증합니다. ATS는 `mx-name` 대신 **Widget Name** 매개변수를 사용합니다.

**Widget Name**은 ATS Helper를 사용하여 찾을 수 있으며, 해당 값이 **Widget Name**입니다:

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/mx-name-ats-helper-cp-1.png" class="no-border" >}}

*Assert Value* Action은 입력 Widget인 거의 모든 Widget에서 작동합니다.

*Assert Value Action*

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/assert-value-action-search-1.png" class="no-border" >}}

일반 Action이 작동하지 않는 경우, 특정 Action이 있는지 확인하세요.

### 특정 Action

ATS에는 Widget 내부 또는 ATS 내부의 값을 검증하기 위한 몇 가지 특정 Action도 있습니다. 이를 찾으려면 "Assert"와 Widget 이름 또는 검증하려는 항목을 조합한 검색어를 사용하세요.

1. 예를 들어, 특정 유효성 검사 메시지가 나타나는지 확인하려고 합니다. *Assert Value* Action은 Widget 내부의 값을 검증하는 것이지 유효성 검사 메시지를 검증하는 것이 아니므로 사용할 수 없습니다. 해결 방법은 "Assert Validation"이라는 검색어를 사용하는 것입니다. ATS가 모든 Action을 확인하고 해당 단어와 일치하는 Action을 반환합니다. [*Assert Validation Message*](/appstore/partner-solutions/ats/rg-one-assert-validation-message/)라는 Action이 있습니다. *Assert Validation Message* Action은 Widget의 `mx-name`을 사용하여 Widget에 나타나는 유효성 검사 메시지를 검증합니다.

    {{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/assert-validation-message-action-search-1.png" class="no-border" >}}

2. 예를 들어, 올바른 페이지가 열렸는지 확인하려고 합니다. 사용할 수 있는 `mx-name`이 없으므로 *Assert Value*를 사용할 수 없습니다. 해결 방법은 "Assert Page"라는 검색어를 사용하는 것입니다. ATS가 모든 Action을 확인하고 해당 단어와 일치하는 Action을 반환합니다. [*Assert Current Page*](/appstore/partner-solutions/ats/rg-one-assert-current-page/)라는 Action이 있습니다. *Assert Current Page* Action은 페이지 제목을 사용하여 올바른 페이지가 열렸는지 검증합니다.

    {{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/assert-current-page-action-search-1.png" class="no-border" >}}

    이 예제들은 Mendix 앱에서 무언가를 검증하기 위한 Action을 보여주었습니다. ATS에는 내부 결과/값을 검증하는 Action도 있습니다.

3. 예를 들어, 이전 테스트 단계의 결과가 특정 값과 같지 않은지 확인하려고 합니다. ATS 내부의 값을 검증하려는 것이므로 *Assert Value* Action을 사용할 수 없습니다. 해결 방법은 "Assert not equal"이라는 검색어를 사용하는 것입니다. ATS가 모든 Action을 확인하고 해당 단어와 일치하는 Action을 반환합니다. [*Assert Not equals*](/appstore/partner-solutions/ats/rg-one-assert-not-equals/)라는 Action이 있습니다. *Assert Not equals* Action은 제공된 두 값을 비교하고 같은지 여부를 확인합니다.

    {{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/assert-not-equals-action-search-1.png" class="no-border" >}}

### 요약

Widget에서 값을 검증하려면 가능하면 항상 *Assert Value* Action을 사용하세요.

특정 Widget에서 값을 검증하거나 Widget에 `mx-name`이 없는 경우, [Mendix Marketplace](https://marketplace.mendix.com/) 또는 Mendix Modeler에 표시된 Widget 이름과 "Assert"를 조합하여 사용하세요. ATS Helper를 사용하여 이름을 찾을 수도 있습니다.

고유한 이름이 없거나 지원되지 않아 Widget에서 값을 검증할 수 없는 경우, [커스텀 Action 만들기](/appstore/partner-solutions/ats/ht-one-create-custom-actions/)를 참조하세요.

## 값/정보 생성하기

ATS에는 랜덤 또는 현재 시간 값을 생성하기 위한 여러 Action이 있습니다. 첫 번째 챕터에서는 재사용 가능한 문자열을 만드는 일반 Action을 설명합니다. 두 번째 챕터에서는 보다 구체적인 작업을 수행하는 Action을 설명합니다. 마지막 챕터에서는 처음 두 챕터의 요약을 제공합니다. 이 경우에는 필요한 Action을 찾기 위한 핵심 키워드가 없습니다.

### 일반 Action

일부 테스트 케이스에서는 동일한 값을 여러 번 입력하려고 할 수 있습니다. 매번 동일한 값을 입력하는 대신 [*Concatenate String*](/appstore/partner-solutions/ats/rg-one-concatenate-string/)을 사용할 수 있습니다. *Concatenate String* Action은 입력한 텍스트를 결합하고 반환하여 다른 Action에서 해당 값을 재사용할 수 있게 합니다.

이 Action은 변수 Selector를 만드는 데도 사용됩니다.

*Concatenate String Action*

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/concatenate-string-action-search-1.png" class="no-border" >}}

### 특정 Action

ATS에는 테스트 케이스에서 사용할 값을 생성하기 위한 몇 가지 특정 Action도 있습니다. 이를 찾기 위해 사용하는 검색어는 "Random" 또는 "Current"입니다.

1. 예를 들어, 테스트 케이스에서 고유한 값을 사용하려고 합니다. 이렇게 하면 테스트 케이스를 재사용할 수도 있습니다. 해결 방법은 "Random"이라는 검색어를 사용하는 것입니다. ATS가 모든 Action을 확인하고 해당 단어와 일치하는 Action을 반환합니다. [*Random String*](/appstore/partner-solutions/ats/rg-one-random-string/)이라는 Action이 있습니다. *Random String* Action은 랜덤 값을 생성하고 접두사 및/또는 접미사를 설정할 수 있습니다.

    {{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/random-string-action-search-1.png" class="no-border" >}}

2. 예를 들어, 테스트 케이스에서 고유한 숫자 값을 사용하려고 합니다. 이렇게 하면 테스트 케이스를 재사용할 수도 있습니다. 해결 방법은 "Random"이라는 검색어를 사용하는 것입니다. ATS가 모든 Action을 확인하고 해당 단어와 일치하는 Action을 반환합니다. [*Random Number*](/appstore/partner-solutions/ats/rg-one-random-number/)라는 Action이 있습니다. *Random Number* Action은 랜덤 숫자를 생성하고 최솟값과 최댓값을 설정할 수 있습니다.

    {{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/random-number-action-search-1.png" class="no-border" >}}

3. 예를 들어, 테스트 케이스에서 오늘 날짜를 사용하려고 합니다. 이렇게 하면 테스트 케이스를 재사용할 수 있지만, 테스트 케이스를 실행할 때마다 입력하고 싶지 않습니다. 해결 방법은 "Current Date"라는 검색어를 사용하는 것입니다. ATS가 모든 Action을 확인하고 해당 단어와 일치하는 Action을 반환합니다. [*Get Current DateTime String*](/appstore/partner-solutions/ats/rg-one-get-current-datetime-string/)이라는 Action이 있습니다. *Get Current DateTime String* Action은 현재 날짜를 가져오고 날짜 형식을 설정할 수 있습니다.

    {{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/get-current-datetime-string-action-search-1.png" class="no-border" >}}

### 요약

값이나 정보를 생성하려면 이 챕터의 처음 두 섹션을 따르세요. 이에 대한 일반적인 솔루션은 없으며, *Concatenate String* Action과 같은 상수 제공자만 있습니다.

## 요약

올바른 결과를 달성하기 위해서는 특정 단계를 따르는 것이 중요합니다.

1. ATS Recorder를 사용하세요. ATS Recorder가 작동하지 않는 경우 2단계로 이동하세요.
2. Recorder가 작동하지 않는다고 해서 ATS가 Widget과 상호 작용할 수 없는 것은 아닙니다. 수행하려는 작업에 맞는 Action을 선택하세요.

    작업                             | Action |
    ----------------------------------|:------:|
    Widget 찾기                 | [*Find/Assert Widget*](/appstore/partner-solutions/ats/rg-one-findassert-widget/) Action |
    Widget 클릭하기                | [*Click Widget*](/appstore/partner-solutions/ats/rg-one-click-widget/) Action |
    입력 Widget 다루기            | [*Set Value*](/appstore/partner-solutions/ats/rg-one-set-value/) Action |
    Widget에서 값 가져오기 | [*Get Value*](/appstore/partner-solutions/ats/rg-one-get-value/) Action |
    값/정보 검증하기     | [*Assert Value*](/appstore/partner-solutions/ats/rg-one-assert-value/) Action |
    값/정보 생성하기    | 자세한 내용은 해당 섹션을 참조하세요. |

    mx-name이 없거나 작업을 다루지 못하는 경우 3단계로 이동하세요.

3. 일반 Action으로 작업이 다루어지지 않는 경우, 작업에 따라 다음 검색어를 사용하세요.

    작업                             | 검색어 |
    ----------------------------------|:------:|
    Widget 찾기                 | Widget 이름과 "Find"의 조합 |
    Widget 클릭하기                | Widget 이름과 "Click"의 조합 |
    입력 Widget 다루기            | Widget 이름과 "Set"의 조합 |
    Widget에서 값 가져오기 | Widget 이름과 "Get"의 조합 |
    값/정보 검증하기     | Widget 이름과 "Assert"의 조합 |
    값/정보 생성하기    | 자세한 내용은 해당 섹션을 참조하세요. |

    ATS가 작업을 지원하지 않는다고 확인되면 4단계로 이동하세요.

4. ATS가 표준 솔루션으로 작업을 지원하지 않는 경우, 자체 솔루션을 만들어야 합니다. [커스텀 Action 만들기](/appstore/partner-solutions/ats/ht-one-create-custom-actions/)를 참조하세요.
