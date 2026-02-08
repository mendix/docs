---
title: "CAB.11 - 고유 텍스트 값으로 항목/행 찾기"
url: /appstore/partner-solutions/ats/ht-one-cab-11-find-itemrow/
description: "이 사용 방법은 고유 텍스트 값을 사용하여 항목/행을 찾기 위한 Search Context Action을 만드는 방법을 단계별로 설명합니다."
---

## 소개

이 사용 방법은 Search Context Action을 만드는 방법을 설명합니다. 이 Action은 항목/행 내부의 설명을 기반으로 항목/행을 반환합니다.

이 사용 방법은 내부의 고유 텍스트 값을 사용하여 항목/행을 찾아야 하는 모든 상황에 적용됩니다. 자식 요소로 항목/행을 가져와야 하는 경우, 이 사용 방법을 따를 수 있습니다. Widget에 따라 일부 조정이 필요할 수 있다는 점을 유의하세요!

이 사용 방법에서는 다음을 수행하는 방법을 배울 수 있습니다:

* 동일한 `mx-name`을 가진 여러 Widget이 있는 상황에 접근하기
* 올바른 Widget을 찾는 데 사용되는 항목/행을 반환하는 커스텀 Action 만들기

## 사전 요구 사항

이 사용 방법을 시작하기 전에 다음 사전 요구 사항을 완료했는지 확인하세요:

* [커스텀 Action 일반 섹션](/appstore/partner-solutions/ats/ht-one-custom-action-general/)

## 사용자 접근 방식 정의

먼저 사용자 접근 방식과 Widget을 찾는 방법을 정의합니다. Widget을 둘러싸는 요소를 찾는 것이 중요합니다. 이 요소를 이벤트를 수행하는 Action의 Search Context로 사용합니다.

이 사용 방법에서 ATS는 이 버튼을 클릭해야 합니다:

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/create-custom-actions/create-search-context-actions/cab-11-find-itemrow/buttontoclick.png" class="no-border" >}}

그러나 이 페이지에는 동일한 `mx-name`을 가진 여러 버튼이 있습니다:

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/create-custom-actions/create-search-context-actions/cab-11-find-itemrow/buttontoclick-multiple.png" class="no-border" >}}

사용자 접근 방식을 정의하려면 다음 단계를 따르세요:

1. Recorder를 사용하여 버튼에 대한 고유한 경로가 있는지 확인하세요. 이 경우, Recorder를 사용하여 버튼을 클릭하면 경로에 `index-0`을 사용합니다:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/create-custom-actions/create-search-context-actions/cab-11-find-itemrow/buttontoclick-recorderpath.png" class="no-border" >}}

    `index-0`은 ListView, TemplateGrid 등 내의 항목/행의 `mx-name`입니다. 이것이 버튼을 찾는 데 사용하는 고유한 요소입니다. Recorder는 하드코딩된 `index-0`을 사용합니다. 테스트 케이스는 작동하지만, 그리드에 항목을 추가하면 테스트 케이스가 깨집니다.

    이를 피하려면 세션 중에 텍스트 값을 기반으로 항목/행을 가져오세요.

2. 디버거를 열면 버튼이 ListView 항목의 자식 요소인 것을 볼 수 있습니다:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/create-custom-actions/create-search-context-actions/cab-11-find-itemrow/buttontoclick-listviewitem.png" class="no-border" >}}

3. 이제 가져오려는 고유한 요소를 찾았지만, `mx-name`을 사용하여 찾을 수 없습니다. 그렇다면 어떻게 요소를 찾을까요? 해당 ListView 항목 내에서 다른 고유한 요소를 찾아서 해결합니다. ListView 항목 내부에 고유한 값을 가진 텍스트 상자가 있습니다. 텍스트 상자 자체는 다른 ListView 항목과 같이 `mx-name-textBox5`를 가지고 있습니다. 검색에 고유한 값을 추가하면 찾을 수 있습니다. `mx-name`과 고유한 값을 결합하면 올바른 요소를 찾을 수 있습니다.

    이것은 ListView 항목의 자식 요소인 텍스트 상자입니다:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/create-custom-actions/create-search-context-actions/cab-11-find-itemrow/buttontoclick-listviewitem-textbox.png" class="no-border" >}}

요약은 다음과 같습니다:

* ATS는 고유한 값을 가진 텍스트 상자를 찾아야 합니다
* 세션에서 부모 ListView 항목을 가져옵니다
* ListView 항목을 반환합니다

## Action 구조

ATS에는 Widget의 부모 항목/행을 찾는 [Find Item/Row (by child element)](/appstore/partner-solutions/ats/rg-one-find-itemrow-by-child/)라는 Mendix Action이 있습니다. 이 Action은 요소가 현재 있는 ListView 항목을 반환합니다. 인덱스 번호는 중요하지 않습니다.

Action 구조를 정의하려면 다음 단계를 따르세요:

1. [Find/Assert Widget](/appstore/partner-solutions/ats/rg-one-findassert-widget/) Action을 사용하여 특정 값을 포함하는 텍스트 상자를 찾으세요. Find/Assert Widget Action을 추가하고, 적절한 테스트 단계 설명을 제공하고, 출력 설명을 제공하세요:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/create-custom-actions/create-search-context-actions/cab-11-find-itemrow/listviewitem-textbox.png" class="no-border" >}}

    입력 매개변수는 나중에 생성하고 연결합니다.

2. Find Item/Row (by child element) Action을 사용하여 테스트 단계 1의 텍스트 상자를 둘러싸는 ListView 항목을 가져오세요. Action을 추가하고, 적절한 테스트 단계 설명을 제공하고, 출력 설명을 제공하고, 테스트 단계 1의 출력을 연결하세요:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/create-custom-actions/create-search-context-actions/cab-11-find-itemrow/listviewitem-finditemrow.png" class="no-border" >}}

3. 마지막 단계는 찾은 ListView를 출력 매개변수로 반환해야 한다는 것입니다. 출력 매개변수를 사용하려면 [Set Return Value](/appstore/partner-solutions/ats/rg-one-set-return-value/) Action을 추가하고 테스트 단계 2의 출력을 연결해야 합니다. 이 Action은 설명이 필요하지 않습니다. Set Return Value Action은 항목/행이 WebElement이므로 연결된 입력을 출력 매개변수에 WebElement로 제공합니다:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/create-custom-actions/create-search-context-actions/cab-11-find-itemrow/listviewitem-setreturnvalue.png" class="no-border" >}}

## Action 매개변수

다음으로 Action 입력 및 출력 매개변수를 추가해야 합니다:

* 입력 매개변수:
    * Widget Name
    * Value
    * Search Context
* 출력 매개변수:
    * Item/Row

{{% alert color="info" %}}
Action 매개변수를 만들 때 [커스텀 Action 만들기 가이드라인](/appstore/partner-solutions/ats/ht-one-guidelines-custom-action/)을 유의하세요.
{{% /alert %}}

1. **Widget Name** 입력 매개변수를 다음과 같이 구성하세요:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/create-custom-actions/create-search-context-actions/cab-11-find-itemrow/widgetname-inputparameter.png" class="no-border" >}}

2. **Value** 입력 매개변수를 다음과 같이 구성하세요:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/create-custom-actions/create-search-context-actions/cab-11-find-itemrow/listviewitem-inputparameter-Value.png" class="no-border" >}}

3. **Search Context** 입력 매개변수를 다음과 같이 구성하세요:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/create-custom-actions/create-search-context-actions/cab-11-find-itemrow/listviewitem-inputparameter-searchcontext.png" class="no-border" >}}

4. **Item/Row** 출력 매개변수를 다음과 같이 구성하세요:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/create-custom-actions/create-search-context-actions/cab-11-find-itemrow/listviewitem-outputparameter-itemrow.png" class="no-border" >}}

5. 다음으로 입력 매개변수를 올바른 Action에 연결하세요. 입력 매개변수는 Find/Assert Widget Action에 연결됩니다:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/create-custom-actions/create-search-context-actions/cab-11-find-itemrow/listviewitem-inputparameters-connected.png" class="no-border" >}}

이 커스텀 Action에 로직을 추가할 필요는 없습니다. 항목/행을 반환하기만 하면 됩니다.

## 최종 확인

이제 다음 항목을 확인하세요:

* 매개변수에 대한 ATS 명명 규칙 사용
* 테스트 단계, 입력 매개변수, 출력 매개변수 및 Action 반환에 대한 명확한 설명
* 코드 조각에서의 구두점 사용(사용된 경우)
* 오류를 방지하기 위한 다양한 매개변수의 데이터 유형 사용

이러한 항목을 확인한 후, 이 Action을 사용하는 테스트 케이스를 실행할 수 있습니다.

축하합니다! 고유한 값을 사용하여 항목/행을 찾는 자체 커스텀 Action을 만들었습니다.

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/create-custom-actions/create-search-context-actions/cab-11-find-itemrow/listviewitem-actionfinished.png" class="no-border" >}}
