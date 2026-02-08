---
title: "자동 매핑"
url: /refguide8/map-automatically/
---

## Import 또는 Export Mapping에서 Entity, 속성 및 연관 생성

Mapping Document의 스키마 소스를 선택한 후 Entity, 연관(Association) 및 속성(Attribute)에 연결해야 합니다. Domain Model에 적합한 Entity가 아직 없는 경우 수동으로 새로 만드는 것은 특히 대규모 매핑에서 상당히 번거로울 수 있습니다. "Map automatically" 버튼이 대부분의 작업을 대신합니다. 선택된 스키마 요소를 기반으로 Domain Model Entity를 생성하고 매핑에서 사용합니다.

{{< figure src="/attachments/refguide8/modeling/integration/mapping-documents/map-automatically/18579457.png" class="no-border" >}}

위 그림에서는 스키마 요소에 Entity가 연결되어 있지 않으며 모듈의 Domain Model이 비어 있습니다. "Map automatically"를 클릭한 후 상황은 다음과 같습니다:

{{< figure src="/attachments/refguide8/modeling/integration/mapping-documents/map-automatically/18579459.png" class="no-border" >}}

다음 액션이 적용됩니다:

* 각 스키마 객체 요소에 대해 Entity가 생성됩니다. 이름은 스키마의 복합 타입 이름으로 설정됩니다.
* XML 확장 타입 및 Choice 옵션의 경우 Entity 일반화가 XML 기본 타입 또는 Choice 컨테이너에 해당하는 Entity로 설정됩니다.
* 스키마 기본 타입 및 속성에 대해 Entity 속성(Attribute)이 생성됩니다.

Domain Model 및 Mapping Document에 적용된 변경 사항을 보고하는 대화 상자가 표시됩니다("Details"를 눌러 대화 상자 확장).

{{< figure src="/attachments/refguide8/modeling/integration/mapping-documents/map-automatically/18579458.png" class="no-border" >}}

## 기존 Entity, 속성 및 연관 사용

Domain Model에 스키마 요소에 매핑되는 Entity가 이미 포함되어 있으면 매핑에서 재사용됩니다. 기본적으로 스키마 타입과 동일한 이름을 가진 Entity가 사용됩니다. 새 속성(Attribute)이 추가되거나 Entity에 아직 일반화가 없는 경우 일반화가 설정될 수 있습니다. 아직 존재하지 않는 경우 새 연관(Association)도 생성될 수 있습니다. 결과 대화 상자에서 기존 Domain Model 요소를 재사용하는지 보고합니다:

{{< figure src="/attachments/refguide8/modeling/integration/mapping-documents/map-automatically/18579460.png" class="no-border" >}}

## 제한 사항

Import Mapping의 파라미터 Entity는 "Map Automatically"에 의해 생성되지 않습니다. 기본적으로 비영구 Entity가 생성됩니다. Domain Model에서 수동으로 변경할 수 있습니다.

"Map Automatically"는 Entity의 영속성 동작에 영향을 미치는 경우 Entity 일반화를 생성하지 않습니다.

## 수동 확인

"Map automatically"는 도우미 도구입니다. 많은 수동 작업에서 벗어나게 해주는 Domain Model Entity와 연관(Association)을 생성합니다. Domain Model의 변경 사항이 올바른지 확인하는 것이 좋습니다. 보고 대화 상자를 사용하거나 Studio Pro의 변경 사항 독을 보고 실제로 변경된 내용을 확인할 수 있습니다. 종종 더 복잡한 매핑에서는 Domain Model의 요소 이름을 변경하거나, 스키마 요소를 다른 속성에 다시 연결하거나, Entity 일반화를 수정해야 할 수 있습니다. Entity에 일반화가 설정되면 Mendix 객체를 저장하는 데이터베이스 테이블에 영향을 미칠 수 있다는 점에 유의하십시오.
