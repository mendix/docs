---
title: "Nanoflow 속성"
url: /refguide8/nanoflow/
---

## 소개

이 페이지에서는 Nanoflow의 속성을 설명합니다. Nanoflow 사용 및 Nanoflow 요소에 대한 자세한 내용은 [Nanoflow](/refguide8/nanoflows/)를 참조하십시오.

## 속성

Nanoflow 속성의 예는 아래 이미지에 나와 있습니다:

{{< figure src="/attachments/refguide8/modeling/application-logic/nanoflows/nanoflow/nanoflow-properties.png" alt="Nanoflow Properties"   width="250"  class="no-border" >}}

Nanoflow 속성은 다음 섹션으로 구성됩니다:

* [공통](#common)
* [출력](#output)
* [보안](#security)
* [사용](#usage)

### 공통 섹션{#common}

#### 이름

**Name**은 Nanoflow의 내부 이름입니다. 앱에서 Nanoflow를 참조할 때 이 이름을 사용합니다. 모듈 내에서 고유해야 하지만, 다른 모듈에서는 동일한 이름의 Nanoflow를 가질 수 있습니다. Nanoflow를 참조할 때 고유성을 보장하고 다른 모듈에서 Nanoflow를 사용할 수 있도록 일반적으로 모듈 이름을 앞에 추가합니다.

#### 문서

**Documentation**을 통해 Nanoflow를 설명하여 사용자가 더 쉽게 사용하고 수정할 수 있도록 할 수 있습니다.

### 출력 섹션{#output}

#### 반환 타입

반환 타입은 Nanoflow가 반환하는 정보를 정의합니다. Nanoflow의 호출자는 이 타입의 결과를 받게 됩니다. 가능한 반환 타입에 대해서는 [데이터 타입](/refguide8/data-types/)을 참조하십시오.

### 보안 섹션{#security}

#### 허용된 역할

사용자가 Nanoflow를 실행할 수 있으려면 가지고 있어야 하는 [모듈 역할](/refguide8/module-security/#module-role)입니다.

자세한 내용은 [모듈 보안](/refguide8/module-security/)을 참조하십시오.

### 사용 섹션 {#usage}

#### 사용됨으로 표시

Studio Pro에서 사용되지 않는 항목을 검색할 수 있습니다(<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd>, 그런 다음 **Search for** 드롭다운 메뉴에서 **Unused items**를 선택). JavaScript 코드에서만 호출되는 Nanoflow는 Studio Pro가 소스 코드 내부를 볼 수 없기 때문에 사용되지 않는 것으로 나열됩니다.

**Mark as used** 속성을 **Yes**로 설정하면 Nanoflow가 사용되고 있음을 명시적으로 지정하며, Studio Pro는 사용되지 않는 항목을 검색할 때 더 이상 이를 나열하지 않습니다.

기본값: *No*
