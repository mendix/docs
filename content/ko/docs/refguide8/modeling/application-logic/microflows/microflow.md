---
title: "Microflow 속성"
url: /refguide8/microflow/
---

## 소개

이 문서에서는 Microflow의 속성을 설명합니다. Microflow의 용도와 포함하는 요소의 종류를 확인하려면 [Microflow](/refguide8/microflows/)를 참조하십시오.

## 속성

Microflow 속성의 예는 아래 이미지에 나와 있습니다:

{{< figure src="/attachments/refguide8/modeling/application-logic/microflows/microflow/microflow-properties.png" alt="Microflow Properties"   width="250"  class="no-border" >}}

Microflow 속성은 다음 섹션으로 구성됩니다:

* [공통](#common)
* [동시 실행](#concurrent)
* [출력](#output)
* [보안](#security)
* [사용](#usage)

### 공통 섹션 {#common}

#### 이름

**Name**은 Microflow의 내부 이름입니다. 앱에서 Microflow를 참조할 때 이 이름을 사용합니다. 모듈 내에서 고유해야 하지만, 다른 모듈에서는 동일한 이름의 Microflow를 가질 수 있습니다. Microflow를 참조할 때 고유성을 보장하고 다른 모듈에서 Microflow를 사용할 수 있도록 일반적으로 모듈 이름을 앞에 추가합니다.

#### 문서

**Documentation**을 통해 Microflow를 설명하여 사용자가 더 쉽게 사용하고 수정할 수 있도록 할 수 있습니다.

### 동시 실행 섹션 {#concurrent}

#### 비허용

**Disallow** 속성을 사용하면 Microflow를 동시에 여러 번 실행할 수 있는지 여부를 지정할 수 있습니다. 이것은 하나의 사용자 세션 내에서만이 아니라 앱을 사용하는 모든 최종 사용자에게 적용됩니다.

Microflow의 동시 실행을 비허용하면 Microflow가 다른 실행 중인 인스턴스를 방해할 경우(예: 전역 리소스에 접근하는 경우) 유용할 수 있습니다.

| 옵션 | 설명 |
| --- | --- |
| No *(기본값)*  | Microflow를 동시에 여러 번 실행할 수 있습니다. |
| Yes | Microflow를 동시에 여러 번 실행할 수 없습니다. 사용자에게 메시지가 표시되거나 다른 Microflow가 대신 실행됩니다. |

#### 오류 메시지

**Error message**는 동시 실행이 허용되지 않고 사용자가 이미 실행 중인 Microflow를 시작하려고 할 때 사용자가 받는 메시지를 정의합니다. **Error microflow**가 정의되어 있으면 이 메시지는 표시되지 않습니다.

#### 오류 Microflow

**Error microflow**는 동시 실행이 허용되지 않고 사용자가 이미 실행 중인 Microflow를 시작하려고 할 때 실행할 다른 Microflow를 정의합니다. 설정되면 사용자에게 더 이상 메시지가 표시되지 않습니다.

### 출력 섹션 {#output}

#### 반환 타입

반환 타입은 Microflow가 반환하는 정보를 정의합니다. Microflow의 호출자는 이 타입의 결과를 받게 됩니다. 가능한 반환 타입에 대해서는 [데이터 타입](/refguide8/data-types/)을 참조하십시오.

{{% alert color="info" %}}
객체를 커밋해야 하는지 여부를 나타내려면 Microflow의 반환 타입으로 Boolean을 사용할 수 있습니다.
{{% /alert %}}

### 보안 섹션 {#security}

#### Entity 접근 적용

**Apply entity access**는 객체에 대한 작업을 수행할 때 현재 사용자 기반의 Entity 접근을 적용할지 여부를 나타냅니다. 이것을 yes로 설정하면 [검색 액션](/refguide8/retrieve/)으로 검색되는 객체가 현재 사용자가 볼 수 있는 객체로만 제한됩니다. 마찬가지로, 속성 및 연관 읽기 및 쓰기 시 현재 사용자의 Entity 접근이 적용됩니다. 반대로, Entity 접근이 적용되지 않으면 모든 작업이 허용되고 모든 객체가 검색됩니다.

| 옵션 | 설명 |
| --- | --- |
| Yes | 객체 검색 및 조작에 Entity 접근이 적용됩니다. 현재 사용자의 권한이 고려됩니다. |
| No  *(기본값)*  | Entity 접근이 적용되지 않습니다. |

{{% alert color="info" %}}
기본적으로 Entity 접근은 적용되지 않습니다. 현재 사용자의 접근 권한을 존중하는 일부 액션을 수행하려면 **Apply entity access**를 **Yes**로 설정하십시오.
{{% /alert %}}

{{% alert color="info" %}}
Entity 접근을 적용하는 Microflow에는 편집기에 **Entity Access** 태그가 표시됩니다.
{{% /alert %}}

#### 허용된 역할

**Allowed roles**는 사용자가 Microflow를 실행할 수 있으려면 가지고 있어야 하는 [모듈 역할](/refguide8/module-security/#module-role)을 정의합니다.

{{% alert color="warning" %}}
이러한 역할은 Microflow가 클라이언트에서 실행될 때만 확인됩니다. Microflow는 항상 다른 Microflow를 호출할 수 있으며, 이 경우 이러한 역할은 확인되지 않습니다.
{{% /alert %}}

자세한 내용은 [모듈 보안](/refguide8/module-security/)을 참조하십시오.

### 사용 섹션 {#usage}

#### 사용됨으로 표시

Studio Pro에서 사용되지 않는 항목을 검색할 수 있습니다(<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd>, 그런 다음 **Search for** 드롭다운 메뉴에서 **Unused items**를 선택). Java 코드에서만 호출되는 Microflow는 Studio Pro가 Java 소스 코드 내부를 볼 수 없기 때문에 사용되지 않는 것으로 나열됩니다.

**Mark as used** 속성을 **Yes**로 설정하면 Microflow가 사용되고 있음을 명시적으로 지정하며, Studio Pro는 사용되지 않는 항목을 검색할 때 더 이상 이를 나열하지 않습니다.

기본값: *No*

## Microflow 액션으로 노출

Microflow에서 마우스 오른쪽 버튼을 클릭하고 **Properties**를 선택하여 접근할 수 있는 다른 속성이 하나 있습니다.

{{< figure src="/attachments/refguide8/modeling/application-logic/microflows/microflow/microflow-expose.png" alt="Expose as Microflow Actin" class="no-border" >}}

**Expose as microflow action** 옵션을 선택하면 Microflow를 Microflow 액션으로 노출할 수 있습니다. Microflow를 노출하면 선택한 카테고리의 **Toolbox**에 Microflow를 편집할 때 나타납니다. 이 액션이 Microflow에서 사용되면 제공된 캡션과 아이콘이 표시됩니다.

Microflow 액션의 캡션과 카테고리는 필수이지만 아이콘은 선택 사항입니다. 아이콘이 선택되지 않으면 기본 Microflow 호출 액션 아이콘이 사용됩니다. 아이콘의 권장 크기는 16x16 픽셀입니다.
