---
title: "성능 향상을 위한 데이터 비정규화"
url: /howto/data-models/denormalize-data-to-improve-performance/
weight: 6
description: "Studio Pro에서 데이터를 비정규화하고 비정규화된 데이터를 동기화 상태로 유지하는 방법을 설명합니다."
---

## 소개

이 사용 방법에서는 Mendix에서 데이터를 비정규화하여 성능을 향상시키는 방법을 설명합니다.

이 사용 방법에서는 다음을 수행하는 방법을 알려줍니다:

* 데이터 비정규화
* 비정규화된 데이터를 동기화 상태로 유지

## 사전 준비 사항

이 사용 방법을 시작하기 전에 다음 사전 준비 사항을 완료했는지 확인하세요:

* [도메인 모델 구성](/refguide/configuring-a-domain-model/)

## 비정규화

예제 시나리오로, Domain Model에 Customer와 Order라는 두 개의 관련 Entity가 포함되어 있습니다. 고객 개요 페이지에서는 고객 이름과 총 주문 금액을 나란히 표시해야 합니다. 고객 이름을 표시하는 것은 쉽지만, 총 주문 금액은 계산해야 합니다.

총 주문 금액을 표시하기 위해 두 가지 옵션이 있습니다:

* 첫 번째 옵션: Customer Entity에 계산된 속성을 만들어 총 주문 금액을 계산
    * 이 옵션의 단점은 계산된 속성이 개요 페이지의 성능을 저하시킨다는 것입니다
* 두 번째 옵션: Customer Entity에 영구 속성을 만들어 총 주문 금액을 데이터베이스에 저장 – 이를 비정규화라고 합니다
    * 이 옵션의 단점은 중복 데이터를 동기화 상태로 유지해야 한다는 것입니다 (하지만 Mendix [이벤트 핸들러](/refguide/event-handlers/)로 쉽게 할 수 있습니다)

비정규화를 활성화하려면 다음 단계를 따르세요:

1. 다음과 같은 Domain Model을 만드세요:

    {{< figure src="/attachments/howto/data-models/denormalize-data-to-improve-performance/18582169.png" class="no-border" >}}

2. **Customer** Entity를 더블클릭하여 속성 편집기를 여세요:

    {{< figure src="/attachments/howto/data-models/denormalize-data-to-improve-performance/18582168.png" class="no-border" >}}

3. **TotalOrderAmount**라는 decimal 속성을 추가하세요.
4. *Customer* Entity에 대한 개요 및 상세 페이지를 만드세요.
5. 고객 개요 페이지에 **TotalOrderAmount** 값이 표시되는지 확인하세요.
6. 주문 상세 페이지에 고객을 선택하기 위한 필수 참조 선택기가 있는지 확인하세요.

이제 애플리케이션이 중복 데이터를 저장할 준비가 되었지만, 여전히 데이터를 동기화 상태로 유지해야 합니다.

## After Commit 이벤트로 비정규화된 데이터 동기화 유지

1. Domain Model을 열고 Order Entity를 더블클릭하여 속성 편집기를 여세요.
2. **Event handlers** 탭에서 **New**를 클릭하여 새 이벤트 핸들러를 추가하세요.
3. **New Event Handler** 대화 상자에서 다음을 수행하세요:
    * **Moment**으로 **After**를 선택
    * **Event**로 **Commit**을 선택
    * **Pass the event object**에 **Yes**를 선택
    * **Select...**를 클릭하여 Microflow 선택기를 열기

    {{< figure src="/attachments/howto/data-models/denormalize-data-to-improve-performance/18582166.png" class="no-border" >}}

4. Microflow 선택기에서 **New**를 클릭하고 새 Microflow의 이름을 입력하세요 (예: *Order_AfterCommit*).
5. **OK**를 클릭하여 새 Microflow를 만든 다음 **OK**를 다시 클릭하여 이벤트 핸들러를 저장하세요.
6. 새 Microflow를 여세요. 다음과 같이 표시되어야 합니다:

    {{< figure src="/attachments/howto/data-models/denormalize-data-to-improve-performance/18582165.png" class="no-border" >}}

    새 Microflow가 무엇을 해야 하는지 생각해 봅시다. 총 주문 금액을 계산하고 이 값을 customer 객체에 저장하려고 합니다. 현재 Microflow에는 order 객체만 입력 매개변수로 있습니다. 따라서 먼저 해당 customer를 가져와야 합니다. 그런 다음 이 customer의 모든 주문을 가져와 총 주문 금액을 계산해야 합니다. 총 주문 금액이 있으면 customer 객체에 저장해야 합니다. 완료되면 Microflow는 다음과 같이 표시되어야 합니다:

    {{< figure src="/attachments/howto/data-models/denormalize-data-to-improve-performance/18582150.png" class="no-border" >}}

7. **Toolbox**를 여세요. Studio Pro의 오른쪽 하단 모서리에 도킹되어 있어야 합니다. **Toolbox**를 찾을 수 없는 경우 **View** 메뉴에서 열 수 있습니다:

    {{< figure src="/attachments/howto/data-models/denormalize-data-to-improve-performance/18582163.png" class="no-border" >}}

8. 도구 상자에서 **Retrieve object(s)** 활동을 Microflow의 시작 이벤트와 종료 이벤트 사이의 라인으로 드래그하세요:

    {{< figure src="/attachments/howto/data-models/denormalize-data-to-improve-performance/18582164.png" class="no-border" >}}

9. 새 활동을 더블클릭하여 **Retrieve** 대화 상자에서 속성을 열고 다음을 수행하세요:
    * **Source**로 **By association**을 선택
    * **Select...**를 클릭하여 **Association** 선택기를 열기

    {{< figure src="/attachments/howto/data-models/denormalize-data-to-improve-performance/18582162.png">}}

10. **Select association** 팝업 창에서 트리 뷰의 **Variables** 노드에서 **Order_Customer**를 선택한 다음 **Select**를 클릭하세요:

    {{< figure src="/attachments/howto/data-models/denormalize-data-to-improve-performance/18582161.png" >}}

    아래에서 볼 수 있듯이, **Retrieve** 대화 상자의 **Output** 섹션이 자동으로 구성됩니다:

    {{< figure src="/attachments/howto/data-models/denormalize-data-to-improve-performance/18582160.png" >}}

11. **OK**를 클릭하여 활동을 저장하세요. Microflow는 이제 다음과 같이 표시되어야 합니다:

    {{< figure src="/attachments/howto/data-models/denormalize-data-to-improve-performance/18582159.png" class="no-border" >}}

12. 또 다른 Retrieve object(s) 활동을 삽입하고(8단계에서와 같이), 더블클릭하여 **Edit Retrieve Object(s)** 대화 상자에서 속성을 열고 다음을 수행하세요:
    * **Source**로 **From Database**를 선택
    * **Select...**를 클릭하여 Entity 선택기를 열기

    {{< figure src="/attachments/howto/data-models/denormalize-data-to-improve-performance/18582157.png" >}}

13. **Select entity** 팝업 창에서 트리 뷰의 **Variables** 노드에서 **Order**를 선택한 다음 **Select**를 클릭하세요:

    {{< figure src="/attachments/howto/data-models/denormalize-data-to-improve-performance/18582158.png" class="no-border" >}}

    아래에서 볼 수 있듯이, **Retrieve** 대화 상자의 **XPath constraint** 및 **Output** 섹션이 자동으로 구성됩니다:

    {{< figure src="/attachments/howto/data-models/denormalize-data-to-improve-performance/18582156.png" >}}

14. **OK**를 클릭하여 활동을 저장하세요. Microflow는 이제 다음과 같이 표시되어야 합니다:

    {{< figure src="/attachments/howto/data-models/denormalize-data-to-improve-performance/18582155.png" class="no-border" >}}

15. aggregate list 활동을 삽입하고, 더블클릭하여 **Aggregate List** 대화 상자에서 속성을 열고 다음을 수행하세요:
    * **Input > List**에 **OrderList**를 선택
    * **Function**에 **Sum**을 선택
    * **Attribute**에 **Totalprice**를 선택
    * **Output > Variable** 이름으로 *SumTotalprice*를 입력

    {{< figure src="/attachments/howto/data-models/denormalize-data-to-improve-performance/18582153.png" class="no-border" >}}

16. **OK**를 클릭하여 활동을 저장하세요. Microflow는 이제 다음과 같이 표시되어야 합니다:

    {{< figure src="/attachments/howto/data-models/denormalize-data-to-improve-performance/18582152.png" class="no-border" >}}

17. change 활동을 삽입하고, 더블클릭하여 **Change Object** 대화 상자에서 속성을 열고 다음을 수행하세요:
    * **Input > Object**에 **Customer**를 선택
    * **Commit** 작업에 **Yes**를 선택
    * 클라이언트에서 새로 고침에 **Yes**를 선택 (객체 변경은 서버 측에서 이루어지며, 이 옵션으로 서버가 클라이언트에 객체를 새로 고치도록 트리거합니다)
    * **New**를 클릭하여 새 변경 항목을 만들기
18. **Edit Change Item** 대화 상자에서 다음을 수행하세요:
    * **Member**에 **TotalOrderAmount**를 선택
    * **Value**에 *$SumTotalprice*를 입력
    * **OK**를 클릭하여 변경 항목을 저장
19. **OK**를 다시 클릭하여 활동을 저장하세요. Microflow는 이제 다음과 같이 표시되어야 합니다:

    {{< figure src="/attachments/howto/data-models/denormalize-data-to-improve-performance/18582150.png" class="no-border" >}}

20. 애플리케이션을 실행하고 일부 고객과 주문을 만드세요. 이제 TotalOrderAmount에 최신 값이 표시되어야 합니다.

## 더 읽기

* [도메인 모델 구성](/refguide/configuring-a-domain-model/)
* [데이터 유효성 검사 설정](/refguide/setting-up-data-validation/)
* [런타임 오류의 근본 원인 찾기](/howto/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
* [에픽](/developerportal/project-management/epics/)
* [XPath를 사용한 접근 규칙 정의](/refguide/define-access-rules-using-xpath/)
* [속성](/refguide/attributes/)
* [이벤트 핸들러](/refguide/event-handlers/)
