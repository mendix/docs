---
title: "데이터 유효성 검사 설정"
url: /refguide9/setting-up-data-validation/
weight: 70
description: "Studio Pro에서 필수 유효성 검사와 고급 데이터 유효성 검사를 설정하는 방법을 설명합니다."
aliases:
    - /howto9/data-models/setting-up-data-validation/
---

## 소개

이 문서에서는 Mendix에서 데이터 유효성 검사를 설정하는 방법을 설명합니다. 먼저 기본 데이터 구조를 설정해야 합니다. 그렇지 않으면 유효성을 검사할 데이터가 없습니다. 기본 데이터 구조 설정에 대한 자세한 내용은 [기본 데이터 레이어 만들기](/refguide9/create-a-basic-data-layer/)를 참조하십시오.

## Entity 수준의 데이터 유효성 검사

이 섹션에서는 모듈의 Domain Model에 Validation Rule을 추가하는 방법을 설명합니다. Validation Rule은 객체의 변경 사항이 커밋될 때 항상 트리거됩니다.

{{% alert color="info" %}}
Validation Rule은 [Persistable](/refguide9/persistability/) Entity에만 적용할 수 있습니다.
{{% /alert %}}

Entity 수준에서 Validation Rule을 추가하려면 아래 단계를 따르십시오:

1. Studio Pro에서 [Domain Model](/refguide9/create-a-basic-data-layer/)을 여십시오.
2. Persistable Entity를 더블 클릭하여 속성을 여십시오.
3. **Validation rules** 탭으로 이동하십시오.

    {{< figure src="/attachments/refguide9/modeling/domain-model/setting-up-data-validation/validation-rules-tab.png" width="500px" class="no-border" >}}

4. **New**를 클릭하여 이 Entity에 대한 새 Validation Rule 구성을 시작하십시오.
5. 값이 유효성 검사되어야 하는 **Attribute**를 선택하십시오.
6. 유효성 검사가 실패할 경우 최종 사용자에게 표시되는 **Error message**를 입력하십시오.
7. Validation Rule의 **Type**을 선택하십시오.
8. **OK**를 클릭하여 이 Validation Rule을 저장하십시오.

이미 구성된 Validation Rule의 예는 아래와 같습니다:

{{< figure src="/attachments/refguide9/modeling/domain-model/setting-up-data-validation/validation-rule-example.png" width="500px" class="no-border" >}}

Entity 수준에서 Validation Rule을 추가하는 방법에 대한 자세한 내용은 [Validation Rule](/refguide9/validation-rules/)을 참조하십시오.

## 입력 위젯, Reference Selector 및 드롭다운의 필수 유효성 검사

Studio Pro의 페이지 편집기를 사용하면 필수 입력을 구성하고 입력이 비어 있을 때 최종 사용자에게 표시되는 오류 메시지를 추가할 수 있습니다. 이를 위해 먼저 상세 페이지가 필요합니다. 상세 페이지를 만드는 방법에 대한 자세한 내용은 [첫 번째 Overview 및 Detail 페이지 만들기](/howto9/front-end/create-your-first-two-overview-and-detail-pages/)를 참조하십시오.

페이지 편집기를 통해 입력 요소에 필수 유효성 검사를 설정하려면 아래 단계를 따르십시오:

1. **상세 페이지**를 열고 입력 위젯을 더블 클릭하여 속성을 여십시오.
2. **Validation** 섹션으로 이동하여 유효성 검사 **Type**을 선택하십시오.
3. 해당하는 경우 **Placeholder text**에 메시지를 입력하십시오.
4. **Validation** 섹션의 **Message**에 사용자 정의 오류 메시지를 추가할 수도 있습니다. 이 오류 메시지는 유효성 검사가 실패할 때 최종 사용자에게 표시됩니다.

**Customer** Entity의 **Name** Attribute에 대한 입력 확인 예는 아래와 같습니다:

{{< figure src="/attachments/refguide9/modeling/domain-model/setting-up-data-validation/input-widget-validation.png" width="500px" class="no-border" >}}

{{% alert color="info" %}}
페이지 편집기에서 **입력 요소**에 대한 **Required** 유효성 검사는 항상 Entity 수준의 Validation Rule보다 먼저 확인됩니다. 즉, 둘 다 **Required**로 설정하고 서로 다른 오류 메시지를 지정한 경우 페이지 오류 메시지가 최종 사용자에게 표시됩니다.
{{% /alert %}}

입력 위젯 유효성 검사에 대한 자세한 내용은 *페이지 편집기의 공통 속성*에서 [유효성 검사](/refguide9/common-widget-properties/#validation) 섹션을 참조하십시오.

## Before Commit 이벤트를 사용한 고급 데이터 유효성 검사

Validation Rule은 간단한 유효성 검사에 적합하지만, Mendix는 더 복잡한 유효성 검사를 처리하는 방법도 제공합니다. Domain Model을 통해 Entity 수준에서 Event Handler를 정의할 수 있습니다. **Before Commit** 및 **After Commit** 이벤트는 객체가 데이터베이스에 커밋될 때 트리거됩니다. **After Commit**은 비정규화 데이터의 값을 계산하는 데 가장 일반적으로 사용됩니다. **Before Commit** 이벤트를 사용하면 Boolean 값을 반환해야 하는 Microflow를 실행할 수 있습니다. Microflow가 `false`를 반환하면 전체 커밋이 중단되고, 그렇지 않으면 객체가 데이터베이스에 저장됩니다. 이 메커니즘은 데이터 유효성 검사에 매우 유용합니다.

이 섹션에서는 **Before Commit** 이벤트를 사용하여 데이터를 유효성 검사하는 방법을 설명합니다. 다음 단계를 따르십시오:

1. Studio Pro에서 [Domain Model](/refguide9/create-a-basic-data-layer/)을 여십시오.
2. Entity를 더블 클릭하여 속성을 여십시오.
3. **Event handlers** 탭으로 이동하십시오.
4. **New**를 클릭하여 이 Entity에 대한 새 Event Handler 구성을 시작하십시오.
5. **Moment**는 **Before**, **Event**는 **Commit**을 선택하십시오. 이렇게 하면 이 Entity의 객체가 커밋될 때마다 이벤트가 트리거됩니다.
6. 유효성을 검사할 데이터가 객체에 있으므로 **Pass event object**에서 **Yes**를 선택하십시오.

    {{< figure src="/attachments/refguide9/modeling/domain-model/setting-up-data-validation/event-handler.png" width="500px" class="no-border" >}}

7. **Select**를 클릭하여 이 이벤트에 Microflow를 연결하십시오.
8. **Select Microflow** 대화 상자에서 **New**를 클릭하여 새 Microflow를 만드십시오.
9. **OK**를 클릭하여 Event Handler를 저장하고 생성된 Microflow를 여십시오. 다음과 같이 표시됩니다:

    {{< figure src="/attachments/refguide9/modeling/domain-model/setting-up-data-validation/microflow-1.png" class="no-border" >}}

이 Microflow가 Boolean 값을 반환하는 한 데이터가 유효한지 여부를 결정하는 모든 로직을 자유롭게 추가할 수 있습니다. Microflow가 `false`를 반환하면 커밋이 취소됩니다. `true`를 반환하면 객체가 커밋됩니다.

Microflow 작업에 대한 자세한 내용은 [Microflow](/refguide9/microflows/)를 참조하십시오.

## 사용자 정의 저장 버튼을 사용한 고급 유효성 검사 {#custom-validation-save-button}

사용자 입력의 유효성 검사는 상세 페이지에서 기본 **Save** 버튼을 재정의하여 수행할 수도 있습니다. 상세 페이지를 만드는 방법에 대한 자세한 내용은 [첫 번째 Overview 및 Detail 페이지 만들기](/howto9/front-end/create-your-first-two-overview-and-detail-pages/)를 참조하십시오.

데이터 유효성 검사를 위한 사용자 정의 **Save** 버튼을 구성하는 두 가지 방법이 있습니다.

{{% alert color="info" %}}
[Validation Assist](/refguide9/validation-assist/)를 사용하여 이 작업을 수행할 수 있습니다. Validation Assist를 사용하면 사전 구축된 표현식을 활용하여 유효성 검사 Microflow를 자동으로 구성할 수 있습니다. Validation Assist 사용 방법에 대한 자세한 내용은 *Validation Assist*의 [Validation Assist를 사용한 데이터 유효성 검사 구축](/refguide9/validation-assist/#build-validation-with-validation-assist) 섹션을 참조하십시오.
{{% /alert %}}

수동으로 사용자 정의 **Save** 버튼을 구성할 수도 있습니다. 다음 단계를 따르십시오:

1. **Save** 버튼을 마우스 오른쪽 버튼으로 클릭하고 **Delete**를 선택하여 페이지에서 제거하십시오.
2. **Cancel** 버튼 아래의 드롭 존을 마우스 오른쪽 버튼으로 클릭하고 **Add widget > Buttons > Call microflow**를 선택하십시오.
3. **Select Microflow** 대화 상자에서 **New**를 클릭하여 새 Microflow를 만드십시오. 다음과 같이 표시됩니다:

    {{< figure src="/attachments/refguide9/modeling/domain-model/setting-up-data-validation/microflow-2.png" class="no-border" >}}

4. **Commit** Activity를 만들어 객체를 데이터베이스에 저장하십시오.
5. **Close page** Activity를 만들어 상세 페이지를 닫으십시오.

    이제 기본 **Save** 버튼 동작을 모방하는 Microflow를 만들었습니다. 다음과 같이 표시됩니다:

    {{< figure src="/attachments/refguide9/modeling/domain-model/setting-up-data-validation/microflow-3.png" class="no-border" >}}

    이제 Microflow를 확장하여 사용자 입력의 유효성을 검사할 수 있습니다.
6. 시작 이벤트 뒤에 **Decision**을 삽입하십시오.
7. Decision을 더블 클릭하여 속성을 여십시오.
8. `true` 또는 `false`를 반환하는 표현식을 입력하십시오. 예: *$Customer/Name != 'John'*. 보시다시피, 표현식에서 **Customer** 입력 매개변수를 사용하여 값을 유효성 검사할 수 있습니다.
9. **OK**를 클릭하여 속성을 저장하십시오.
10. Decision과 Commit Activity 사이의 흐름을 마우스 오른쪽 버튼으로 클릭하고 조건 값으로 **true**를 선택하십시오. 이 경우 고객의 이름이 'John'이 아니면 객체가 데이터베이스에 저장되고 페이지가 닫힙니다.

    {{< figure src="/attachments/refguide9/modeling/domain-model/setting-up-data-validation/microflow-4.png" width="500px" class="no-border" >}}

11. Decision에서 추가 흐름을 그리고 다른 End Event를 추가하십시오.
12. Decision과 End Event 사이의 흐름을 마우스 오른쪽 버튼으로 클릭하고 조건 값으로 **false**를 선택하십시오.
13. Decision과 새 End Event 사이에 **Validation feedback** Activity를 삽입하십시오. Activity의 속성 대화 상자에서 다음과 같이 구성하십시오:

    1. **Variable**로 입력 매개변수를 선택하십시오(예제에서는 **Customer** Entity가 입력 매개변수입니다).
    2. **Customer** Entity의 Attribute를 **Member**로 선택하십시오(예: **Name**).
    3. **Template** 필드에 오류 메시지를 입력하십시오. 인덱스를 사용하여 템플릿에 매개변수를 동적으로 삽입할 수 있습니다.

    {{< figure src="/attachments/refguide9/modeling/domain-model/setting-up-data-validation/validation-feedback.png" width="550px" class="no-border" >}}

    Microflow는 이제 다음과 같이 표시됩니다:

    {{< figure src="/attachments/refguide9/modeling/domain-model/setting-up-data-validation/microflow-5.png" width="500px" class="no-border" >}}

## 여러 Attribute 유효성 검사

여러 Attribute의 유효성을 검사하려면 Sub-microflow에서 수행하는 것이 가장 좋습니다:

1. `true`로 설정된 Boolean 변수를 만드십시오. 이 변수를 **Return value**로 표시하십시오.
2. 위 섹션에서 설명한 대로 유효성 검사를 만드십시오.
3. 유효성 검사 피드백 또는 오류 메시지 후에 Boolean 변수를 `false`로 변경하도록 Sub-microflow를 구성하십시오. 이 흐름을 Merge를 사용하여 메인 시퀀스 흐름에 다시 연결하고 다음 유효성 검사를 계속하십시오.
4. Sub-microflow의 끝에서 변수는 모든 유효성 검사를 성공적으로 통과한 경우 `true`이고, 하나 이상의 유효성 검사가 실패한 경우 `false`여야 합니다.
5. 반환 값을 확인하는 [Decision](/refguide9/decision/)을 추가하고 모든 유효성 검사를 통과한 경우에만 Microflow가 **Commit** 이벤트로 계속되도록 허용하십시오. 이렇게 하면 모든 필요한 유효성 검사를 한 번에 수행하면서 로직을 유지할 수 있습니다.

## 추가 정보

* [성능 향상을 위한 데이터 비정규화](/howto9/data-models/denormalize-data-to-improve-performance/)
