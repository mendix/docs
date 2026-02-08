---
title: "Parameter"
url: /refguide9/parameter/
weight: 70
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Parameter는 Microflow의 입력으로 사용되는 특수한 종류의 변수입니다. Microflow가 트리거되면 Parameter는 현재 값으로 채워집니다.

Microflow에서 *Customer* Entity의 객체를 사용하려면 Parameter를 사용하십시오. 아래 그림에서 객체 이름은 *EnclosingCustomer*이며 검정색으로 표시됩니다. 데이터 유형이 객체이므로 Entity 이름이 객체 이름 아래에 파란색으로 표시됩니다.

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/parameter/parameter.png" class="no-border" >}}

## 출력 속성

### 이름

**이름**은 Parameter의 값을 나타냅니다.

### 데이터 유형

Parameter의 데이터 유형은 기대하는 값의 유형을 정의합니다. 가능한 데이터 유형은 [데이터 유형](/refguide9/data-types/)을 참조하십시오.

기본값: *Object*
