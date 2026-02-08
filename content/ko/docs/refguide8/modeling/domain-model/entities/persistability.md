---
title: "영속성(Persistability)"
url: /refguide8/persistability/
weight: 20
---

## 소개

도메인 모델에서 Entity의 **Persistable** 속성은 객체를 데이터베이스에 커밋할 수 있는지 정의합니다.

영속 Entity는 도메인 모델에서 파란색으로 표시됩니다. 비영속 Entity는 주황색으로 표시됩니다. 아래 이미지에서 **Customer** Entity는 영속이고, **ProductQueryResults**는 비영속입니다.

{{< figure src="/attachments/refguide8/modeling/domain-model/entities/persistability/persistable-vs-non-persistable.png" alt="Picture of a persistable and a non-persistable entity" class="no-border" >}}

## 영속 Entity {#persistable}

Entity가 영속(Persistable)으로 선언되면 해당 Entity에 대한 데이터베이스 테이블이 생성됩니다.

이 Entity 유형의 객체를 커밋하면 테이블에 행이 삽입됩니다. 객체의 Attribute 및 Association 값도 데이터베이스에 저장됩니다.

### 자동 커밋된 객체

일반적으로 롤백은 마지막 커밋 이후 메모리의 변경 사항을 되돌립니다.

그러나 영속 자동 커밋된 객체 또는 "NEW" 상태의 객체에 대해 롤백을 수행하면 연관된 Entity의 데이터베이스 테이블에서 이 객체에 해당하는 행이 삭제됩니다. 자동 커밋된 객체에 대한 자세한 내용은 [Object Activity](/refguide8/object-activities/)를 참조하십시오.

## 비영속 Entity {#non-persistable}

비영속(Non-persistable) Entity는 런타임 메모리에 저장되며 데이터베이스에 커밋되지 않습니다. 따라서 데이터베이스에 테이블이 없습니다.

비영속 Entity를 커밋하면 현재 Attribute 값과 Association 값이 메모리에 기록되어 롤백 시 이 값으로 되돌릴 수 있습니다.
