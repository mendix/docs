---
title: "Enumeration"
url: /refguide9/enumerations/
weight: 40
aliases:
    - /refguide9/enumeration-values.html
    - /refguide9/enumeration-values
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
#The anchor <enum-value-properties> below is mapped, so it should not be removed or changed.
---

## 소개

Enumeration은 미리 정의된 값의 목록을 정의합니다. Enumeration은 Enumeration 속성 유형에 사용됩니다. 예를 들어, 주문의 상태는 *Open*, *Closed* 또는 *In Progress*일 수 있습니다. 따라서 주문 상태에 대한 Enumeration은 *Open*, *Closed*, *In_Progress*의 세 가지 값으로 구성됩니다. 

Enumeration은 하나 이상의 [Enumeration 값](/refguide9/enumerations/#enum-properties)으로 구성됩니다. 각 값은 하나의 옵션을 나타냅니다. Enumeration 유형의 속성은 초기화되지 않은 상태를 나타낼 수도 있습니다: 예를 들어, 주문에 상태를 할당하지 않으면 주문 상태는 *empty*가 됩니다. 

## Enumeration 생성  

새 Enumeration을 생성하려면 다음을 수행하십시오: 

1. [App Explorer](/refguide9/app-explorer/)에서 Enumeration을 추가할 모듈 또는 폴더를 마우스 오른쪽 버튼으로 클릭하고 액션 목록에서 **Add other** > **Enumeration**을 선택합니다.
2. **Add Enumeration** 대화 상자에서 Enumeration의 이름을 입력합니다.
3. **Enumeration** 대화 상자에서 **New**를 클릭하여 Enumeration 값을 생성합니다:

    1. Enumeration 값의 **Name**과 **Caption**을 입력합니다. 필요한 경우 **Image**를 설정할 수 있습니다. Enumeration 속성에 대한 자세한 내용은 [Enumeration 속성](#enum-properties) 섹션을 참조하십시오. <br />

        {{< figure src="/attachments/refguide9/modeling/resources/enumerations/add-enum-value.png" class="no-border" >}}

    1. **OK**를 클릭하여 Enumeration 값을 저장합니다.

4. 생성하려는 모든 Enumeration 값에 대해 3단계를 반복합니다.
5. **OK**를 클릭하여 Enumeration을 저장합니다. 

앱에 새 Enumeration을 추가했습니다. 앱에서 Enumeration 유형의 다양한 속성에 동일한 Enumeration을 사용할 수 있습니다. 

## Enumeration 속성 {#enum-properties}

Enumeration에는 다음과 같은 속성이 있습니다:

* **Name** – Enumeration의 이름입니다.
* **Export level** – 애드온 모듈 또는 솔루션을 개발할 때 소비자(고객) 측에서 이 문서에 대한 접근 수준을 정의할 수 있습니다. 

    {{% alert color="info" %}}이 속성은 애드온 및 솔루션 모듈에서만 사용할 수 있습니다. 모듈 유형에 대한 자세한 내용은 *Modules*의 [Module Types](/refguide9/modules/#module-types) 섹션을 참조하십시오.{{% /alert %}}

    **Export level**에는 다음 값이 있습니다:   

    * **Hidden** *(기본값)* – 문서/요소 콘텐츠가 소비자에게 숨겨집니다. 
    * **Usable** – 소비자가 앱에서 Enumeration을 사용할 수 있습니다. 

* **Enumeration values** – Enumeration에는 하나 이상의 Enumeration 값이 있습니다. 각 값은 옵션 중 하나를 나타냅니다. Enumeration 값과 그 속성에 대한 자세한 내용은 [Enumeration 값 속성](#enum-value-properties) 섹션을 참조하십시오.

    {{< figure src="/attachments/refguide9/modeling/resources/enumerations/enumeration-properties.png" class="no-border" >}}

### Enumeration 값 속성 {#enum-value-properties}

Enumeration 값 속성은 아래에 설명되어 있습니다:

#### 캡션 

Enumeration 값의 캡션은 최종 사용자가 이 Enumeration 값에 대해 보는 텍스트입니다.

캡션은 변경할 수 있으며 모든 문자를 포함할 수 있습니다. 예를 들어, *In Progress*는 공백을 포함하더라도 유효한 캡션입니다.  

이것은 번역 가능한 텍스트입니다. 자세한 내용은 [Language Menu](/refguide9/translatable-texts/)를 참조하십시오. 

#### 이름{#name}

Enumeration 값의 이름입니다. 앱에서 Enumeration 값을 참조하는 데 사용되는 기술적 이름입니다.

Enumeration 값의 이름은 문자로 시작하고 문자, 숫자, 밑줄만 포함하는 기술적 이름이어야 합니다.

<details><summary>예약어가 될 수 없습니다 (예약어 목록을 보려면 클릭하십시오)</summary>

* `abstract`
* `assert`
* `boolean`
* `break`
* `byte`
* `case`
* `catch`
* `changedby`
* `changeddate`
* `char`
* `class`
* `con`
* `const`
* `context`
* `continue`
* `createddate`
* `currentUser`
* `default`
* `do`
* `double`
* `else`
* `empty`
* `enum`
* `extends`
* `false`
* `final`
* `finally`
* `float`
* `for`
* `goto`
* `guid`
* `id`
* `if`
* `implements`
* `import`
* `instanceof`
* `int`
* `interface`
* `long`
* `MendixObject`
* `native`
* `new`
* `null`
* `object`
* `owner`
* `package`
* `private`
* `protected`
* `public`
* `return`
* `short`
* `static`
* `strictfp`
* `submetaobjectname`
* `super`
* `switch`
* `synchronized`
* `this`
* `throw`
* `throws`
* `transient`
* `true`
* `try`
* `type`
* `void`
* `volatile`
* `while`

</details>

{{% alert color="warning" %}}
Enumeration 값의 이름은 데이터베이스에 Enumeration 값을 저장하는 데도 사용됩니다. 따라서 Enumeration 값의 **Name**을 변경하는 것은 허용되지 않습니다. 데이터베이스의 데이터가 무효화될 수 있습니다.
{{% /alert %}}
  
#### 이미지

Data Grid 열에 표시될 Enumeration 값에 대해 선택된 이미지입니다.

Data Grid에서 이미지를 사용하려면 열의 Enumeration 형식을 *Image*로 설정하십시오. Data Grid 열에 대한 자세한 내용은 [Grid Columns](/refguide9/columns/)를 참조하십시오.

## 더 읽기

* [Attributes](/refguide9/attributes/)
* [Entities](/refguide9/entities/)
