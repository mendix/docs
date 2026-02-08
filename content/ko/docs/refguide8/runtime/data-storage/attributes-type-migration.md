---
title: "Attribute 유형 마이그레이션"
url: /refguide8/attributes-type-migration/
weight: 10
---

## 소개

Mendix에서는 기존 Domain Model의 Attribute 및 Association 유형을 변경할 수 있습니다. 이 문서에서는 이를 수행할 때의 결과를 설명합니다.

## 기존 Attribute의 데이터 유형 변경

### 데이터 유형 변경 동작

Mendix Studio Pro에서 기존 Attribute의 유형을 변경하면, 기존 Attribute는 일반적으로 삭제되고 새 Attribute가 생성됩니다. 일부 Attribute 유형 변경의 경우 Mendix는 데이터베이스의 기존 데이터를 새 유형으로 변환하려고 합니다.

데이터를 새 유형으로 변환하지 **않아야** 하는 경우, Studio Pro에서 Attribute를 제거하고 동일한 이름으로 새 열을 생성해야 합니다. 유형을 변경하고 열 이름을 바꾸면 Mendix는 이전 열 이름을 기억하고 가능한 경우 열 값을 변환하려고 합니다.

### 변환 테이블

아래 표는 각 데이터 유형 변경에 대해 Mendix가 값을 변환하는지 여부를 보여줍니다.

키 | 의미
--- | ---
**&#x2713;** | 변환이 항상 가능합니다.
**\*<sup><small>note</small></sup>** | 변환이 항상 가능하지는 않거나 변환 중에 데이터가 변경됩니다. 자세한 내용은 관련 참고 사항을 확인하십시오. 변환이 불가능한 경우 아래 "**X**"와 동일한 동작입니다.
**X** | 변환 불가능. 원래 열이 제거되고 기존 행에 대한 기본값으로 새 열이 생성됩니다.

{{< figure src="/attachments/refguide8/runtime/data-storage/attributes-type-migration/conversion-table.png" alt="Table of conversions - click to enlarge" class="no-border" >}}
(*이미지를 클릭하면 확대됩니다*)

### 수동 변환

Mendix가 특정 열의 값을 다른 유형으로 변환할 수 없는 경우에도 수동으로 관리할 수 있습니다. Attribute의 이름을 변경하고(예: 이름에 'Deleted' 텍스트 추가), 동일한 이름과 새 데이터 유형으로 새 Attribute를 생성합니다. 전체 모델에서 이전(이름이 변경된) Attribute의 모든 발생을 찾아 새 Attribute로 변경합니다. 이전 Attribute를 참조하는 Microflow나 페이지가 더 이상 없는지 확인하십시오.

Entity의 모든 인스턴스를 검색하고, 인스턴스를 순회하며 각 인스턴스에 대해 이전 Attribute의 값을 읽고, 값을 변환하고, 새 Attribute에 저장하고 인스턴스를 커밋하는 Microflow를 생성합니다. 이 Microflow를 호출하는 버튼을 관리자 페이지에 배치합니다.

배포할 때 이 Microflow를 한 번 실행해야 하며, 그 후 Microflow와 이를 가리키는 버튼을 모두 제거하고 이전 Attribute도 제거할 수 있습니다.

## 기존 Association의 Association 유형 변경

일대다 Association이 있고 이를 일대일 Association으로 변경하면, 중복 Association이 데이터베이스에서 정리되지 않는다는 점에 유의하십시오. 예를 들어, Entity A에서 Entity B로의 일대다 Association은 a1에서 b1, a1에서 b2 등과 같이 여러 참조를 허용합니다. 일대일 Association은 객체당 단일 참조만 허용합니다: a1에서 b1. a1에서 b2와 같은 중복 Association 항목은 앱을 재배포할 때 정리되지 않습니다.
