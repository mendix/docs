---
title: "고유성 제약 조건 마이그레이션"
url: /refguide8/uniqueness-constraint-migration/
weight: 30
aliases:
    - /refguide/uniqueness-constraint-migration.html
    - /refguide/uniqueness-constraint-migration
# referred to in M2EE error message
---
## 소개

고유성 유효성 검사 제약 조건은 일반적으로 데이터베이스에서 처리됩니다. 이를 통해 상태 비저장 클러스터링, 더 많은 동시 사용자 및 고부하 애플리케이션을 효율적으로 처리할 수 있습니다.

다음 규칙은 데이터베이스에서 유효성을 검사할 수 있습니다:

* Entity Attribute에 대한 고유 규칙
* 일대다 Association의 *다 쪽*, 그리고 일대일 Association의 *양쪽*

그러나 Runtime에서 데이터 유효성 검사를 수행하고 이미 데이터가 포함된 데이터베이스에 나중에 고유성 유효성 검사를 추가하는 것도 가능합니다. 나중에 더 엄격한 규칙을 적용하면 데이터베이스의 데이터가 새 유효성 검사 규칙을 준수해야 합니다.

이 문서에서는 다음을 논의합니다:

* 데이터베이스 고유성 제약 조건 추가가 프로젝트에 미치는 영향
* Domain Model 유효성 검사를 변경할 때 기존 데이터를 마이그레이션하는 방법
* 현재 유효성 검사 규칙과 호환되지 않을 수 있는 기존 데이터가 데이터베이스 제약 조건으로 Mendix에서 배포할 수 있도록 기존 프로젝트 모델을 준수하도록 하는 방법

마이그레이션 도구 키트가 데이터베이스의 데이터와 모델에 정의된 유효성 검사 규칙 간의 불일치를 수정하는 데 도움을 줍니다.

*고유성 유효성 검사* 설정에 대한 자세한 내용은 [프로젝트 설정](/refguide8/project-settings/)을 참조하십시오.

## 고유 Attribute

### Runtime 고유성 유효성 검사의 효과

Mendix 앱이 Runtime 유효성 검사를 사용하는 경우, Entity를 변경하고 현재 데이터에 영향을 주지 않고 Attribute에 고유 유효성 검사 규칙을 추가할 수 있습니다. 예를 들어, 보험 번호가 데이터베이스에서 사람을 고유하게 식별하는 데 사용되어야 하므로 고유해야 한다고 Domain Model에 표시할 수 있습니다.

{{< figure src="/attachments/refguide8/runtime/data-storage/uniqueness-constraint-migration/attr-uniq-validation-rule.PNG" class="no-border" >}}

유효성 검사 규칙을 적용해도 더 엄격한 데이터 모델이 적용된 새 버전의 앱을 배포하기 전에 이미 데이터베이스에 저장된 사람에게는 영향을 미치지 않습니다. 보험 번호의 고유성은 기존 사람에 대해서만 새 사람에 대해 확인됩니다.

이것의 장점은 더 엄격한 모델이 현재 데이터에 영향을 미치지 않는다는 것입니다. 단점은 데이터베이스의 데이터 고유성에 대해 잘못된 가정을 하기 쉽다는 것입니다. 예를 들어, Microflow의 로직이 고유한 보험 번호에 의존할 수 있으며, 중복 보험 번호가 있는 오래된 데이터의 존재를 쉽게 간과할 수 있습니다.

### 고유성 유효성 검사의 현재 상황

고유성에 대한 Runtime 유효성 검사 사용은 더 이상 권장되지 않습니다. 그러나 제거될 때까지 **Database**로 설정하면 데이터베이스 수준에서 고유 유효성 검사 규칙을 적용하는 Runtime 설정을 제공하고 있습니다.

{{< figure src="/attachments/refguide8/runtime/data-storage/uniqueness-constraint-migration/uniqueness-validation-setting.PNG" class="no-border" >}}

이 라디오 버튼을 **Database**로 설정하는 것을 강력히 권장합니다. 이것은 향후 Mendix 버전에 대비하여 앱을 준비합니다. 라디오 버튼이 **Runtime**으로 유지되면 더 이상 사용되지 않음 경고가 표시됩니다:

{{< figure src="/attachments/refguide8/runtime/data-storage/uniqueness-constraint-migration/deprecation-warning.PNG" class="no-border" >}}

### 데이터베이스 고유성 유효성 검사의 효과

**Database**를 선택하면 Attribute에 고유 유효성 검사 규칙(기존 규칙 또는 새 규칙)이 있는 모델을 배포할 때, 영향을 받는 Entity의 모든 기존 객체에 대해 Attribute의 고유성이 확인됩니다. 동일한 보험 번호를 가진 사람이 여러 명이면:

* Studio Pro에서 앱을 배포하면 배포 시 오류가 표시됩니다
* 배포 패키지에서 앱을 배포하면(예: Mendix Cloud에서) 앱이 시작되지 않고 로그에 오류가 기록됩니다

{{< figure src="/attachments/refguide8/runtime/data-storage/uniqueness-constraint-migration/startup-error.png" class="no-border" >}}

### 데이터베이스 고유성 유효성 검사 사용의 제한 사항

다른(일반화) Entity의 특수화인 Entity를 사용하는 경우 데이터베이스 고유성 유효성 검사 사용에 제한 사항이 있습니다.

데이터베이스 고유성 유효성 검사 옵션이 활성화된 경우, 이 Entity의 일반화에서 오는 Attribute에 대해 특수화 Entity에서 고유 유효성 검사 규칙을 정의할 수 없습니다. 이렇게 하면 다음 이미지와 같은 일관성 오류가 보고됩니다:

{{< figure src="/attachments/refguide8/runtime/data-storage/uniqueness-constraint-migration/unique-validation-rule-unresolved.png" class="no-border" >}}

그러나 특수화된 Entity에 추가된 Attribute에 대해서는 고유 유효성 검사 규칙을 정의할 수 있습니다.

---

예를 들어 두 Entity가 있습니다:

* **EmployeeNumber** Attribute가 있는 일반 Entity **Employee**
* *Employee*를 기반으로 하는 **EmailAddress** Attribute가 있는 특수화된 Entity **SalesEmployee**

각 *SalesEmployee*는 *Employee* Entity에 있으므로 *EmployeeNumber*를 갖게 됩니다. 그러나 *SalesEmployee* Entity에서 *EmployeeNumber*를 고유하게 만드는 유효성 검사 규칙을 설정할 수 없습니다.

그러나 *EmailAddress*는 *SalesEmployee* Entity에만 나타나므로 고유하게 만드는 유효성 검사 규칙을 설정할 수 있습니다.

---

이러한 Attribute의 고유 유효성 검사 규칙을 Attribute가 정의된 일반화 Entity로 이동하여 이 문제를 간단히 해결할 수 있습니다.

{{< figure src="/attachments/refguide8/runtime/data-storage/uniqueness-constraint-migration/unique-validation-rule-resolved.png" class="no-border" >}}

## 고유 Association

Association에 대해서도 비슷한 상황이 발생합니다. 다음 예를 고려하십시오:

{{< figure src="/attachments/refguide8/runtime/data-storage/uniqueness-constraint-migration/one-to-many-assoc.PNG" class="no-border" >}}

처음에 Domain Model에는 **Address**와 **Person** 간의 일대다 Association이 포함되어 있습니다. 이는 Person이 여러 주소를 가질 수 있음을 의미합니다. 시간이 지나면서 Person당 하나의 Address만 허용하는 로직이 앱에 추가되었기 때문에 데이터 구조가 변경됩니다. 적절한 데이터 모델링은 Association을 일대일 Association으로 변경하도록 규정합니다. 새 데이터는 업데이트된 Association을 올바르게 반영합니다.

{{< figure src="/attachments/refguide8/runtime/data-storage/uniqueness-constraint-migration/one-to-one-assoc.PNG" class="no-border" >}}

데이터베이스의 기존 Association 데이터도 업데이트된 일대일 Association을 준수해야 합니다. 이것은 배포 시 확인됩니다. Person에 여러 주소가 있으면 모델이 배포되지 않으며, Studio Pro 또는 (Mendix) 클라우드 배포의 로그에 오류가 표시됩니다:

{{< figure src="/attachments/refguide8/runtime/data-storage/uniqueness-constraint-migration/startup-error-assoc.png" class="no-border" >}}

Person당 단일 주소만 반환하는 결과에서 쉽게 간과할 수 있는 실수(실제로는 데이터베이스에 여전히 여러 주소가 있는 경우)를 방지하기 위해 기존 데이터에 이 새로운 엄격한 Association을 적용합니다. Mendix 플랫폼은 각 실행에서 일관되게 동일한 주소를 반환했지만, 다른 주소는 데이터베이스에 휴면 항목이 됩니다.

## 마이그레이션 지원

오래된 데이터의 마이그레이션을 돕기 위해 Mendix는 마이그레이션 도구 키트를 개발했습니다. 이에 대한 자세한 내용은 [Mendix Support](https://support.mendix.com)에 문의하십시오.
