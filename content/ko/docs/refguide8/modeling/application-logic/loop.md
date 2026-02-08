---
title: "루프"
url: /refguide8/loop/
weight: 80
---

## 소개

루프는 객체 목록을 반복하는 데 사용되며 프레임으로 시각화됩니다. 각 객체에 대해 루프 내부의 플로우가 실행됩니다. 파라미터와 동일하게 보이는 반복자(iterator)는 각 반복에서 목록의 현재 객체를 나타냅니다. 객체 이름은 검정색으로 표시되고 객체의 Entity 타입은 파란색으로 표시됩니다.

예를 들어, *OrderLine* Entity의 객체 목록이 있고 모든 객체에 대해 구매 날짜를 설정하려면, 구매 날짜를 설정하는 변경 액티비티가 포함된 루프를 사용할 수 있습니다:

{{< figure src="/attachments/refguide8/modeling/application-logic/loop/loop.png" class="no-border" >}}

루프에는 시작 및 종료 이벤트를 제외한 Microflow에서 사용되는 모든 유형의 요소가 포함될 수 있습니다. [Break 이벤트](/refguide8/break-event/) 및 [Continue 이벤트](/refguide8/continue-event/)는 루프 내에서만 사용할 수 있습니다.

## 입력 속성

### 반복 대상

반복할 항목의 목록인 변수입니다.

## 액션 속성

### 루프 객체 이름

**Loop object name**은 현재 작업 중인 목록 항목의 이름입니다. 루프 내부의 플로우는 목록의 각 객체에 대해 실행되며, 객체는 항상 이 이름을 갖습니다. 예를 들어, 루프가 반복하는 목록이 *List of Order* 타입인 경우 반복자 객체는 *Order* 타입이 됩니다.
