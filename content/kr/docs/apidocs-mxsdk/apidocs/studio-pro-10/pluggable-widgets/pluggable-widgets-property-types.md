---
title: "속성 유형"
url: /apidocs-mxsdk/apidocs/pluggable-widgets-property-types-10/
description: Mx10에서 플러그형 위젯의 속성 유형을 이해하기 위한 가이드입니다.
weight: 10
---

## 소개

구성 가능하도록 하기 위해 플러그형 위젯은 플러그형 위젯에 사용할 수 있는 속성을 설명하는 [위젯 속성 정의(/apidocs-mxsdk/apidocs/pluggable-widgets-10/#properties-definition)](#properties-definition)를 사용합니다. 플러그형 위젯의 실제 작동 예는 [플러그형 위젯 빌드 방법](/howto/extensibility/pluggable-widgets/)을 참조하십시오.

속성 정의의 일반적인 구조는 다음과 같습니다:

```xml
<property key="propertyKey" type="propertyType">
	<caption>내 속성</caption>
	<description>이것은 나의 속성입니다</description>
</property>
```

### XML 속성(Attributes)

#### Key (필수) {#key}

이는 위젯 클라이언트 컴포넌트에 제공되는 클라이언트 컴포넌트 props의 prop `key`를 정의합니다. 각 속성은 모든 대소문자의 문자, 숫자 또는 밑줄을 포함할 수 있는 고유한 `key`를 가져야 합니다. 그러나 `key` 속성은 숫자로 *시작*할 수 없습니다.

#### Type (필수)

이는 속성의 유형을 정의합니다. `type`은 다음 중 하나여야 합니다: 

* 정적 유형(Static Types)
    * [string](#string)
    * [boolean](#boolean)
    * [integer](#integer)
    * [decimal](#decimal)
    * [enumeration](#enumeration)
* 컴포넌트 유형(Component Types)
    * [icon](#icon)
    * [image](#image)
    * [widgets](#widgets)
* 동적 유형(Dynamic Types)
    * [expression](#expression)
    * [textTemplate](#texttemplate)
    * [action](#action)
    * [attribute](#attribute)
    * [association](#association)
    * [object](#object)
    * [file](#file)
    * [datasource](#datasource)
    * [selection](#selection)

### XML 요소(Elements)

`<caption>` (필수) — Studio Pro에서 위젯을 구성하는 동안 사용자(최종 사용자가 아님)에게 표시되는 속성 이름을 정의합니다.

`<description>` (필수) — 속성의 목적을 설명하는 설명입니다.

## 정적 유형(Static Types)

정적 유형은 Studio Pro에서 구성된 값을 위젯으로 전달하기 위해 만들어졌습니다. 동적 데이터에 의존하지 않습니다. 정적 속성은 단순한 기본값으로 위젯 클라이언트 컴포넌트에 전달됩니다.

### String {#string}

string 속성 유형은 Studio Pro에서 단순 텍스트 입력으로 표현됩니다. 클라이언트 컴포넌트에 `string` prop으로 전달됩니다.

#### XML 속성(Attributes)

| 속성 | 필수 | 속성 유형 | 설명 |
|----------------|----------|----------------|-----------------------------------------------------------------------|
| `type` | 예 | String | `string`이어야 함 |
| `key` | 예 | String | [key](#key) 참조 |
| `defaultValue` | 아니요 | String | 속성의 기본값 |
| `multiline` | 아니요 | Boolean | 멀티라인 입력을 활성화하려면 `true`, 그렇지 않으면 `false` |
| `required` | 아니요 | Boolean | 사용자가 속성을 지정해야 하는지 여부, 기본값은 `true` |

#### Studio Pro UI

속성이 다음과 같이 정의된 경우:

```xml
<property key="myString" type="string">
	<caption>My string</caption>
	<description>My string setting</description>
</property>
```

속성에 대한 Studio Pro UI는 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-widgets-property-types/string.png" class="no-border" >}}

속성이 다음과 같이 정의된 경우:

```xml
<property key="myStringMultiline" type="string" multiline="true">
	<caption>My string multiline</caption>
	<description>My string multiline setting</description>
</property>
```

속성에 대한 Studio Pro UI는 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-widgets-property-types/string-multiline.png" class="no-border" >}}

### Boolean {#boolean}

Boolean 유형의 속성은 Studio Pro에서 토글로 표현됩니다. 클라이언트 컴포넌트에 `boolean` props로 전달됩니다.

#### XML 속성(Attributes)

| 속성 | 필수 | 속성 유형 | 설명 |
| - | - | - | - |
| `type` | 예 | String | `boolean`이어야 함 |
| `key` | 예 | String | [key](#key) 참조 |
| `defaultValue` | 예 | Boolean | 속성의 기본값, `true` 또는 `false` |

#### Studio Pro UI

속성이 다음과 같이 정의된 경우:

```xml
<property key="myBoolean" type="boolean" defaultValue="false">
	<caption>My boolean</caption>
	<description>My boolean setting</description>
</property>
```

속성에 대한 Studio Pro UI는 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-widgets-property-types/boolean.png" class="no-border" >}}

### Integer {#integer}

Integer는 Studio Pro에서 숫자 입력으로 표현됩니다. 클라이언트 컴포넌트에 `number` prop으로 전달됩니다.

#### XML 속성(Attributes) 

| 속성 | 필수 | 속성 유형 | 설명 |
|----------------|----------|----------------|--------------------------------|
| `type` | 예 | String | `integer`여야 함 |
| `key` | 예 | String | [key](#key) 참조 |
| `defaultValue` | 예 | Integer | 속성의 기본값 |

#### Studio Pro UI

속성이 다음과 같이 정의된 경우:

```xml
<property key="myInteger" type="integer" defaultValue="1000">
	<caption>My integer</caption>
	<description>My integer setting</description>
</property>
```

속성에 대한 Studio Pro UI는 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-widgets-property-types/integer.png" class="no-border" >}}

### Decimal {#decimal}

decimal 유형의 속성은 Studio Pro에서 숫자 입력으로 표현됩니다. 클라이언트 컴포넌트에 `Big` prop으로 전달됩니다.

#### XML 속성(Attributes)

| 속성 | 필수 | 속성 유형 | 설명 |
|----------------|----------|----------------|--------------------------------|
| `type` | 예 | String | `decimal`이어야 함 |
| `key` | 예 | String | [key](#key) 참조 |
| `defaultValue` | 예 | Integer | 속성의 기본값 |

#### Studio Pro UI

속성이 다음과 같이 정의된 경우:

```xml
<property key="myDecimal" type="decimal" defaultValue="50.4">
	<caption>My decimal</caption>
	<description>My decimal setting</description>
</property>
```

속성에 대한 Studio Pro UI는 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-widgets-property-types/decimal.png" alt="decimal" class="no-border" >}}

### Enumeration {#enumeration}

enumeration 속성 유형을 사용하면 사용자가 XML에 정의된 여러 옵션 중 하나를 선택할 수 있습니다. 선택된 열거형 요소의 `key`가 클라이언트 컴포넌트에 `string` prop으로 전달됩니다.

#### XML 속성(Attributes)

| 속성 | 필수 | 속성 유형 | 설명 |
|----------------|----------|----------------|--------------------------------|
| `type` | 예 | String | `enumeration`이어야 함 |
| `key` | 예 | String | [key](#key) 참조 |
| `defaultValue` | 예 | Integer | 속성의 기본값 |

#### XML 요소(Elements)

`<enumerationValues>` (필수) — 가능한 열거형 값을 정의하려면 내부에 여러 `<enumerationValue>` 요소가 있는 하나의 `<enumerationValues>` 요소를 선언해야 합니다. 모든 열거형 값에는 캡션뿐만 아니라 `key` 속성이 필요합니다. 열거형 값을 다음과 같이 입력하십시오:

```xml
<enumerationValue key="myEnumOption">내 열거형 옵션 캡션</enumerationValue>
```

선택된 요소의 `key`가 클라이언트 컴포넌트에 전달됩니다. `key`는 앱에서 사용되는 옵션을 식별하는 데 사용되므로 변경해서는 안 됩니다.

#### Studio Pro UI

속성이 다음과 같이 정의된 경우:

```xml
	<property key="myEnumeration" type="enumeration" defaultValue="blue">
		<caption>My enumeration</caption>
		<description>My enumeration setting</description>
		<enumerationValues>
			<enumerationValue key="red">Red</enumerationValue>
			<enumerationValue key="green">Green</enumerationValue>
			<enumerationValue key="blue">Blue</enumerationValue>
		</enumerationValues>
	</property>
```

속성에 대한 Studio Pro UI는 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-widgets-property-types/enumeration.png" class="no-border" >}}

## 컴포넌트 유형(Component Types)

### Icon {#icon}

icon 유형의 속성을 사용하면 사용자가 [버튼(/refguide/button-properties/#icon)](#icon)에서 사용하는 것과 유사한 아이콘을 구성할 수 있습니다. 클라이언트 컴포넌트에 `DynamicValue<IconValue>` prop으로 전달됩니다. 자세한 내용은 *플러그형 위젯에서 사용할 수 있는 클라이언트 API*의 [IconValue](/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis-10/#icon-value) 섹션을 참조하십시오.

#### XML 속성(Attributes)

| 속성 | 필수 | 속성 유형 | 설명 |
|------------|----------|----------------|-----------------------------------------------------------------------|
| `type` | 예 | String | `icon`이어야 함 |
| `key` | 예 | String | [key](#key) 참조 |
| `required` | 아니요 | Boolean | 사용자가 속성을 지정해야 하는지 여부, 기본값은 `true` |

#### Studio Pro UI

컴포넌트가 다음과 같이 정의된 경우:

```xml
<property key="cardIcon" type="icon" required="false">
	<caption>Icon</caption>
	<description>Card icon</description>
</property>
```

컴포넌트에 대한 Studio Pro UI는 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-widgets-property-types/icon.png" class="no-border" >}}

### Image {#image}

Image를 사용하면 사용자가 [이미지 컬렉션(/refguide/image-collection/)](#image-collection)에서 정적 이미지를 구성할 수 있습니다. 또한 사용자가 **System.Image**의 전문화인 객체에서 이미지를 구성할 수 있도록 허용합니다. 클라이언트 컴포넌트에 `DynamicValue<ImageValue>` prop으로 전달됩니다(자세한 내용은 *플러그형 위젯에서 사용할 수 있는 클라이언트 API*의 [ImageValue](/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis-10/#imagevalue) 섹션 참조). 지원되는 이미지 형식에 대한 자세한 내용은 [이미지 참조 가이드(/refguide/images/)](#images)를 참조하십시오.

{{% alert color="warning" %}}
GIF 이미지는 Android 기기의 네이티브 모바일 앱에서 지원되지 않습니다.
{{% /alert %}}

#### XML 속성(Attributes)

| 속성 | 필수 | 속성 유형 | 설명 |
|------------|----------|----------------|-----------------------------------------------------------------------|
| `type` | 예 | String | `image`여야 함 |
| `key` | 예 | String | [key](#key) 참조 |
| `required` | 아니요 | Boolean | 사용자가 속성을 지정해야 하는지 여부, 기본값은 `true` |

#### Studio Pro UI

컴포넌트가 다음과 같이 정의된 경우:

```xml
<property key="bgImage" type="image" required="false">
	<caption>Background Image</caption>
	<description>Image shown blurred in a background</description>
</property>
```

컴포넌트에 대한 Studio Pro UI는 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-widgets-property-types/image.png" class="no-border" >}}

### Widgets {#widgets}

widgets 속성을 사용하면 사용자가 [컨테이너(/refguide/container/)](#container) 위젯의 내용과 유사하게 플러그형 위젯 내부에 여러 위젯을 배치할 수 있습니다. `dataSource` 속성이 지정되지 않은 경우 클라이언트 컴포넌트에 `ReactNode` prop으로 전달되고, 지정된 경우 [`ListWidgetValue`](/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis-list-values-10/#listwidgetvalue)로 전달됩니다. 자세한 내용은 아래의 [데이터 소스(#datasource)](#datasource) 섹션을 참조하십시오.

{{% alert color="warning" %}}
일부 위젯은 아직 플러그형 위젯 내부에서 지원되지 않습니다. 지원되지 않는 위젯을 플러그형 위젯 내부에 배치하면 Studio Pro에서 일관성 오류가 발생합니다.
{{% /alert %}}

#### XML 속성(Attributes)

| 속성 | 필수 | 속성 유형 | 설명 |
|--------------|----------|----------------|------------------------------------------------------------------------------------------------|
| `type` | 예 | String | `widgets`여야 함 |
| `key` | 예 | String | [key](#key) 참조 |
| `dataSource` | 아니요 | Property Path | 이 `widgets` 속성에 연결된 [`datasource`](#datasource) 속성의 경로를 지정합니다. |
| `required` | 아니요 | Boolean | 사용자가 하나 이상의 위젯을 제공해야 하는지 여부, 기본값은 `true` |

#### Studio Pro UI

컴포넌트가 다음과 같이 `dataSource` 속성 없이 정의된 경우:

```xml
<property key="content" type="widgets" required="false">
	<caption>Content</caption>
	<description>Content of a box</description>
</property>
```

컴포넌트에 대한 Studio Pro UI는 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-widgets-property-types/widgets.png" alt="studio pro ui" class="no-border" >}}

#### DataSource 속성 사용

컴포넌트가 `dataSource` 속성과 함께 정의된 경우(`myDataSource`가 이 위젯에 대해 다른 곳에 정의된 [`datasource`](#datasource) 속성의 키라고 가정함):

```xml
<property key="content" type="widgets" required="false" dataSource="myDataSource">
	<caption>Content</caption>
	<description>Widgets using data source</description>
</property>
```

컴포넌트에 대한 Studio Pro UI는 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-widgets-property-types/widgets_with_ds.png" alt="studio pro ui" class="no-border" >}}

## 동적 유형(Dynamic Types)

### Expression {#expression}

expression 속성을 사용하면 사용자가 [표현식(/refguide/expressions/)](#expression)을 구성할 수 있습니다.

`dataSource` 속성이 지정되지 않은 경우 클라이언트는 표현식의 반환 유형에 따라 `DynamicValue<T>`를 받습니다.

`dataSource` 속성이 지정되고 사용자에 의해 구성된 경우, 표현식의 반환 유형에 따라 [`ListExpressionValue<T>`](/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis-list-values-10/#listexpressionvalue)로 전달됩니다. 자세한 내용은 아래의 [데이터 소스(#datasource)](#datasource) 섹션을 참조하십시오.

#### XML 속성(Attributes)

| 속성 | 필수 | 속성 유형 | 설명 |
|----------------|----------|---------------------|-------------------------------------------------------------------------------------------------|
| `type` | 예 | String | `expression`이어야 함 |
| `key` | 예 | String | [key](#key) 참조 |
| `defaultValue` | 아니요 | String (Expression) | 속성의 기본값 |
| `required` | 아니요 | Boolean | 사용자가 속성을 지정해야 하는지 여부, 기본값은 `true` |
| `dataSource` | 아니요 | Property Path | 이 expression 속성에 연결된 [`datasource`](#datasource) 속성의 경로를 지정합니다. |

#### XML 요소(Elements)

`<returnType>` (필수) — 표현식의 반환 유형을 정의하려면 expression 속성에 `<returnType>` 요소가 포함되어야 합니다. Mendix 플랫폼은 구성된 표현식이 올바른 데이터 유형을 반환하도록 보장합니다.

표현식의 반환 유형은 `type` 또는 `assignableTo` 속성 중 하나를 사용하여 정의해야 합니다. 두 가지를 모두 지정하는 것은 허용되지 않습니다.

| 속성 | 필수 | 속성 유형 | 설명 |
|----------------|----------|----------------|------------------------------------------------------------------------------------------------------------------|
| `type` | 아니요 | String | 지원되는 고정 반환 유형 중 하나여야 하는 고정 반환 유형 |
| `assignableTo` | 아니요 | Property Path | 구성되었을 때 반환 유형을 결정할 [`attribute`](#attribute) 속성의 경로를 지정합니다. |

##### 고정 반환 유형(Fixed Return Type)

아래의 지원되는 유형 중 하나로 expression 속성에 대해 고정된 반환 유형을 설정할 수 있습니다.

| 지원되는 반환 유형 | 클라이언트 컴포넌트가 받는 해당 유형 |
|------------------------|-----------------------------------------------------------------------------------------|
| `Boolean` | `DynamicValue<boolean>` |
| `DateTime` | `DynamicValue<Date>` |
| `Decimal` | `DynamicValue<BigJS>` |
| `Integer` | `DynamicValue<BigJS>` |
| `String` | `DynamicValue<string>` |

##### 속성에 할당 가능한 반환 유형(Return Type Assignable to an Attribute)

`assignableTo`를 사용하여 expression 속성의 반환 유형이 지정된 속성 경로를 가진 attribute 속성에 의존하도록 지정할 수 있습니다. 즉, 표현식의 값은 해당 attribute 속성에 대해 구성된 속성에 할당 가능해집니다([`setValue`](/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis-10/#editable-value) 사용).

클라이언트 컴포넌트는 대상 속성의 가능한 유형에 따라 `DynamicValue<T>`를 받습니다. attribute 속성이 둘 이상의 유형을 허용하는 경우 실제 값의 유형은 구성된 속성에 따라 달라집니다.

예를 들어, 속성이 다음과 같이 정의된 경우:

```xml
<property key="myAttribute" type="attribute">
	<caption>My string</caption>
	<description>My string setting</description>
    <attributeTypes>
        <attributeType name="String" />
        <attributeType name="Boolean" />
    </attributeTypes>
</property>
```

```xml
<property key="myExpression" type="expression">
	<caption>My string</caption>
	<description>My string setting</description>
    <returnType assignableTo="myAttribute" />
</property>
```

클라이언트 컴포넌트는 `DynamicValue<string | boolean>` 유형의 `myExpression` prop을 받습니다.

이는 표현식에 가능한 모든 값 유형의 유니온(union) 유형입니다. 값의 실제 유형은 `myAttribute` 속성에 대해 구성된 속성에 따라 달라집니다. `String` 유형의 속성의 경우 값은 `string`이 되고, 그렇지 않으면 `boolean`이 됩니다.

#### Studio Pro UI

속성이 다음과 같이 정의된 경우:

```xml
<property key="progressBarColor" type="expression" defaultValue="'red'">
	<caption>Color</caption>
	<description>Progress bar CSS color</description>
	<returnType type="String" />
</property>
```

속성에 대한 Studio Pro UI는 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-widgets-property-types/expression.png" class="no-border" >}}

### TextTemplate {#texttemplate}

TextTemplate 속성을 사용하면 사용자가 텍스트 위젯의 [캡션(/refguide/text/#caption)](#caption)과 유사하게 번역 가능한 텍스트 템플릿을 구성할 수 있습니다.

`dataSource` 속성이 지정되지 않은 경우, 보간된 문자열이 클라이언트 컴포넌트에 `DynamicValue<string>`으로 전달됩니다.

`dataSource` 속성이 지정되고 사용자에 의해 구성된 경우, [`ListExpressionValue<string>`](/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis-list-values-10/#listexpressionvalue)으로 전달됩니다. 자세한 내용은 아래의 [데이터 소스(#datasource)](#datasource) 섹션을 참조하십시오.

#### XML 속성(Attributes)

| 속성 | 필수 | 속성 유형 | 설명 |
|--------------|----------|----------------|----------------------------------------------------------------------------------------------------|
| `type` | 예 | String | `textTemplate`이어야 함 |
| `key` | 예 | String | [key](#key) 참조 |
| `multiline` | 아니요 | Boolean | 멀티라인 입력을 활성화하려면 `true`, 그렇지 않으면 `false` |
| `required` | 아니요 | Boolean | 사용자가 속성을 지정해야 하는지 여부, 기본값은 `true` |
| `dataSource` | 아니요 | Property Path | 이 텍스트 템플릿 속성에 연결된 [`datasource`](#datasource) 속성의 경로를 지정합니다. |

#### XML 요소(Elements)

`<translations>` — 사용자가 언어의 [ISO 639](https://en.wikipedia.org/wiki/ISO_639) 코드를 나타내는 `lang` 속성이 있는 `<translation>` 요소를 사용하여 다양한 언어에 대한 텍스트 템플릿의 기본값을 설정할 수 있게 해줍니다. 사용 가능한 언어는 Studio Pro의 [Languages 탭(/refguide/app-settings/#languages-tab)](#languages-tab)에 나열되어 있습니다.

#### Studio Pro UI

속성이 다음과 같이 정의된 경우:

```xml
<property key="myBlockTitle" type="textTemplate">
	<caption>Input title</caption>
	<description>Title for the color input</description>
	<translations>
		<translation lang="en_US">Color</translation>
		<translation lang="nl_NL">Kleur</translation>
		<translation lang="uk_UA">Колір</translation>
	</translations>
</property>
```

속성에 대한 Studio Pro UI는 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-widgets-property-types/text.png" class="no-border" >}}

### Action {#action}

{{% alert color="info" %}}
Action에 대한 `defaultType` 및 `defaultValue` 속성은 Mendix [10.15](/releasenotes/studio-pro/10.15/)에서 도입되었습니다.
{{% /alert %}}

action 속성 유형을 사용하면 사용자가 나노플로우 호출, 변경 사항 저장, 페이지 열기 등과 같은 작업을 수행할 수 있는 액션을 구성할 수 있습니다.

`dataSource` 속성이 지정되지 않은 경우, 클라이언트는 액션을 나타내는 `ActionValue`를 받거나 **Do nothing** 액션이 선택된 경우 `undefined`를 받습니다.

`dataSource` 속성이 지정되고 사용자에 의해 구성된 경우, [`ListActionValue`](/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis-list-values-10/#listactionvalue)로 전달됩니다. 자세한 내용은 아래의 [데이터 소스(#datasource)](#datasource) 섹션을 참조하십시오.

#### XML 속성(Attributes) {#xml-attributes}

| 속성 | 필수 | 속성 유형 | 설명 |
|----------------|----------|----------------|---------------------------------------------------------------------------------------------------------|
| `type` | 예 | String | `action`이어야 함 |
| `key` | 예 | String | [key](#key) 참조 |
| `dataSource` | 아니요 | Property Path | 이 action 속성에 연결된 [`datasource`](#datasource) 속성의 경로를 지정합니다. |
| `defaultValue` | 아니요 | String | 속성의 기본값, 형식은 `<ModuleId>.<DocumentId>`여야 함 |
| `defaultType` | 아니요 | String | 속성의 기본 유형, 지원되는 값은 `None`, `OpenPage`, `CallNanoflow`, `CallMicroflow`임 |

#### XML 요소(Elements) {#action-xml-elements}

{{% alert color="info" %}}
액션 변수(Action variables)는 Mendix [10.21](/releasenotes/studio-pro/10.21/#pluggable-widget-api-action-variables)에서 도입되었습니다.
{{% /alert %}}

`<actionVariables>` — [ActionValue에서 execute()를 호출(/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis-10/#execute)](#execute)할 때 위젯이 제공하는 변수를 정의합니다. 변수는 [마이크로플로우 호출(/refguide/on-click-event/#call-microflow)](#call-microflow) 및 [나노플로우 호출(/refguide/on-click-event/#call-nanoflow)](#call-nanoflow) 액션을 구성할 때 Studio Pro에서 사용할 수 있습니다.

`<actionVariable>` (하나 이상 필수) — `ActionValue.execute()`를 호출할 때 위젯에서 인수로 제공하는 기본값을 나타냅니다. 변수는 다음 속성으로 정의됩니다:

* `key` (필수) — Studio Pro 및 Pluggable Widgets API에서 사용되는 변수의 식별자입니다.
* `type` (필수) — 변수가 나타내는 값의 유형입니다. 지원되는 유형과 해당 Typescript 유형은 아래 표에 나열되어 있습니다.
* `caption` (필수) — Studio Pro에 표시되는 변수에 대한 짧은 설명입니다.

| 액션 변수 유형 | 클라이언트 유형 |
| -------------------- | --------- |
| `String` | `string` |
| `Integer` | `Big` |
| `Decimal` | `Big` |
| `DateTime` | `Date` |
| `Boolean` | `boolean` |

#### Studio Pro UI

속성이 다음과 같이 정의된 경우:

```xml
<property key="buttonAction" type="action">
	<caption>On click</caption>
	<description>Action to be performed when button is clicked</description>
</property>
```

속성에 대한 Studio Pro UI는 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-widgets-property-types/action.png" class="no-border" >}}

액션이 다음 XML을 사용하여 변수를 노출하는 경우:

```xml
<property key="actionWithVariable" type="action">
	<caption>On click</caption>
	<description>Action to be performed when button is clicked</description>
	<actionVariables>
		<actionVariable key="random" type="Decimal" caption="Random number between 0 and 1" />
	</actionVariables>
</property>
```

변수는 UI에 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-widgets-property-types/action-variable.png" class="no-border" >}}

### Attribute {#attribute}

attribute 속성 유형을 사용하면 위젯이 엔티티의 속성을 직접 읽고 쓸 수 있습니다. 위젯의 목적에 따라 지원하는 속성 유형을 정의해야 합니다.

`dataSource` 속성이 지정되지 않은 경우, 클라이언트는 구성된 `<attributeType>`에 따라 `EditableValue<T>`를 받습니다. 자세한 내용은 *플러그형 위젯에서 사용할 수 있는 클라이언트 API*의 [EditableValue](/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis-10/#editable-value) 섹션을 참조하십시오.

`dataSource` 속성이 지정되고 사용자에 의해 구성된 경우, [`ListAttributeValue`](/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis-list-values-10/#listattributevalue)로 전달됩니다. 자세한 내용은 아래의 [데이터 소스(#datasource)](#datasource) 섹션을 참조하십시오.

#### XML 속성(Attributes)

| 속성 | 필수 | 속성 유형 | 설명 |
|--------------|----------|----------------|----------------------------------------------------------------------------------------------------------------------------------|
| `type` | 예 | String | `attribute`여야 함 |
| `key` | 예 | String | [key](#key) 참조 |
| `onChange` | 아니요 | Property Path | 위젯에 의해 값이 변경될 때 Mendix 플랫폼에서 실행될 [`action`](#action) 속성의 경로 |
| `required` | 아니요 | Boolean | 사용자가 속성을 지정해야 하는지 여부 결정, 기본값은 `true` |
| `dataSource` | 아니요 | Property Path | 이 attribute 속성에 연결된 [`datasource`](#datasource) 속성의 경로를 지정합니다. |
| `setLabel` | 아니요 | Boolean | 구성된 속성으로 [`Label`](#setLabel) 값을 자동으로 설정하려면 `true`, 그렇지 않으면 `false` |

#### XML 요소(Elements)

`<attributeTypes>` (필수) — 이 요소는 Studio Pro에서 attribute 속성을 구성하는 동안 사용할 수 있는 지원되는 속성 유형을 선언하는 `<attributeType>` 요소들을 캡슐화합니다.

`<attributeType>` (하나 이상 필수) — 이 요소는 `name` 속성에 허용되는 속성 유형을 정의합니다.

| 지원되는 속성 유형 | 클라이언트 컴포넌트가 받는 해당 유형 |
|---------------------------|-----------------------------------------------|
| `AutoNumber` | `EditableValue<string>` |
| `Binary` | `EditableValue<string>` |
| `Boolean` | `EditableValue<boolean>` |
| `DateTime` | `EditableValue<Date>` |
| `Enum` | `EditableValue<string>` |
| `HashString` | `EditableValue<string>` |
| `Integer` | `EditableValue<BigJS>` |
| `Long` | `EditableValue<BigJS>` |
| `String` | `EditableValue<string>` |
| `Decimal` | `EditableValue<BigJS>` |

#### Studio Pro UI

속성이 다음과 같이 정의된 경우:

```xml
<property key="percentage" type="attribute" onChange="onPercentageChange">
	<caption>Percentage</caption>
	<description>Progress percentage</description>
	<attributeTypes>
		<attributeType name="Decimal"/>
		<attributeType name="Integer"/>
	</attributeTypes>
</property>
    
<property key="onPercentageChange" type="action">
	<caption>On change</caption>
	<description/>
</property>
```

속성에 대한 Studio Pro UI는 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-widgets-property-types/attribute.png" class="no-border" >}}

### Association {#association}

association 속성 유형을 사용하면 위젯이 엔티티 간의 연관 관계(association)를 직접 읽고 쓸 수 있습니다. 위젯의 목적에 따라 지원하는 연관 유형을 정의해야 합니다.

`dataSource` 속성이 지정되지 않은 경우, 클라이언트는 참조(단일 참조)의 경우 `ReferenceValue`를, 참조 세트(다중 참조)의 경우 `ReferenceSetValue`를 받거나 이들의 유니온(union)을 받습니다. 자세한 내용은 *플러그형 위젯에서 사용할 수 있는 클라이언트 API*의 [ModifiableValue](/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis-10/#modifiable-value) 섹션을 참조하십시오.

`dataSource` 속성이 지정되고 사용자에 의해 구성된 경우, 속성 구성에 따라 [`ListReferenceValue` 또는 `ListReferenceSetValue`](/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis-list-values-10/#listassociationvalue)로 전달됩니다. 자세한 내용은 아래의 [데이터 소스(#datasource)](#datasource) 섹션을 참조하십시오.

#### XML 속성(Attributes) {#xml-attributes}

| 속성 | 필수 | 속성 유형 | 설명 |
|---------------------|----------|----------------|----------------------------------------------------------------------------------------------------------------------------------|
| `type` | 예 | String | `association`이어야 함 |
| `key` | 예 | String | [key](#key) 참조 |
| `onChange` | 아니요 | Property Path | 위젯에 의해 값이 변경될 때 Mendix 플랫폼에서 실행될 [`action`](#action) 속성의 경로 |
| `required` | 아니요 | Boolean | 사용자가 속성을 지정해야 하는지 여부 결정, 기본값은 `true` |
| `selectableObjects` | 예 | Property Path | 연관 관계에 대해 선택 가능한 객체를 제공할 [`datasource`](#datasource) 속성의 경로를 지정합니다. |
| `dataSource` | 아니요 | Property Path | 이 association 속성에 연결된 [`datasource`](#datasource) 속성의 경로를 지정합니다. |
| `setLabel` | 아니요 | Boolean | 구성된 엔티티로 [`Label`](#setLabel) 값을 자동으로 설정하려면 `true`, 그렇지 않으면 `false` |

#### XML 요소(Elements)

`<associationTypes>` (필수) — 이 요소는 Studio Pro에서 association 속성을 구성하는 동안 사용할 수 있는 지원되는 연관 유형을 선언하는 `<associationType>` 요소들을 캡슐화합니다.

`<associationType>` (하나 이상 필수) — 이 요소는 `name` 속성에 허용되는 연관 유형을 정의합니다.

| 지원되는 속성 유형 | 클라이언트 컴포넌트가 받는 해당 유형 |
|---------------------------|-----------------------------------------------|
| `Reference` | `ReferenceValue` |
| `ReferenceSet` | `ReferenceSetValue` |

#### Studio Pro UI

속성이 다음과 같이 정의된 경우:

```xml
<property key="ref" type="association" selectableObjects="objectsDatasource">
    <caption>Reference</caption>
    <description>Reference</description>
    <associationTypes>
        <associationType name="Reference"/>
        <associationType name="ReferenceSet"/>
    </associationTypes>
</property>

<property key="objectsDatasource" type="datasource" isList="true">
    <caption>Selectable objects</caption>
    <description/>
</property>
```

속성에 대한 Studio Pro UI는 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-widgets-property-types/association.png" class="no-border" >}}

### Object {#object}

object 속성 유형을 사용하면 임의의 속성 목록을 만들 수 있습니다.

#### XML 속성(Attributes)

| 속성 | 필수 | 속성 유형 | 설명 |
|------------|----------|----------------|--------------------------------------------------------------------------------------|
| `type` | 예 | String | `object`여야 함 |
| `key` | 예 | String | [key](#key) 참조 |
| `isList` | 예 | Boolean | `true`여야 함 |
| `required` | 아니요 | Boolean | 사용자가 목록에서 항목을 지정해야 하는지 여부 결정, 기본값은 `true` |

#### XML 요소(Elements)

`<properties>` (필수) — 구성할 속성 목록을 캡슐화합니다. 프로퍼티 그룹에 대한 자세한 내용은 *플러그형 위젯 API*의 [프로퍼티 그룹(/apidocs-mxsdk/apidocs/pluggable-widgets-10/#property-groups)](#property-groups) 섹션을 참조하십시오. 속성은 `<propertyGroup>` 요소로 그룹화되어야 합니다. 중첩된 객체 속성은 지원되지 않습니다.

#### Studio Pro UI

속성이 다음과 같이 정의된 경우:

```xml
<property key="myObject" type="object" isList="true">
	<caption>My object list</caption>
	<description/>
	<properties>
		<propertyGroup caption="Object list group">
			<property key="myObjectBool" type="boolean" defaultValue="true">
				<caption>My boolean</caption>
				<description>My boolean setting</description>
			</property>
			<property key="myObjectAction" type="action">
				<caption>My action</caption>
				<description>My action setting</description>
			</property>
		</propertyGroup>
	</properties>
</property>
```

속성에 대한 Studio Pro UI는 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-widgets-property-types/object.png" >}}

### File {#file}

file 속성 유형을 사용하면 사용자가 **System.File**의 전문화인 객체에서 파일을 구성할 수 있습니다. 클라이언트 컴포넌트에 [`DynamicValue<FileValue>`](/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis-10/#filevalue) prop으로 전달됩니다.

#### XML 속성(Attributes)

| 속성 | 필수 | 속성 유형 | 설명 |
|-----------|----------|----------------|-----------------|
| `type` | 예 | String | `file`이어야 함 |
| `key` | 예 | String | [key](#key) 참조 |

#### Studio Pro UI

속성이 다음과 같이 정의된 경우:

```xml

<property key="file" type="file" required="false">
	<caption>File</caption>
	<description>Sample text file</description>
</property>
```

속성에 대한 Studio Pro UI는 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-widgets-property-types/file.png" >}}

### Datasource {#datasource}

datasource 속성을 사용하면 위젯이 객체 목록을 작업할 수 있습니다. 클라이언트 컴포넌트는 [`ListValue`](/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis-list-values-10/#listvalue) 유형의 값 prop을 받으며, [`action`](#action), [`attribute`](#attribute), [`association`](#association), [`expression`](#expression), [`text template`](#texttemplate) 및 [`widgets`](#widgets) 속성과 함께 사용될 수 있습니다. 사용 가능한 데이터 소스 유형은 [데이터 소스(/refguide/data-sources/#list-widgets)](#data-sources)를 참조하십시오.

사용자가 데이터 소스를 구성하지 않은 경우, 데이터 소스 속성에 연결된 모든 속성은 (필수로 표시되어 있더라도) 클라이언트 컴포넌트에 전달되는 props에서 자동으로 생략됩니다.

{{% alert color="warning" %}}
목록 데이터 소스만 지원되므로 `isList="true"` 지정이 필수입니다.
{{% /alert %}}

#### XML 속성(Attributes)

| 속성 | 필수 | 속성 유형 | 설명 |
|----------------|----------|----------------|------------------------------------------------------------------------------------------------------------|
| `type` | 예 | String | `datasource`여야 함 |
| `key` | 예 | String | [key](#key) 참조 |
| `isList` | 예 | Boolean | `true`여야 함 |
| `required` | 아니요 | Boolean | 사용자가 데이터 소스를 지정해야 하는지 여부 결정, 기본값은 `true` |
| `defaultType` | 아니요 | String | 속성의 기본 유형, 지원되는 값은 `Database`, `Microflow`, `Nanoflow`, `Association`임 |
| `defaultValue` | 아니요 | String | 속성의 기본값, [기본 데이터 소스(#data-source-defaults)](#data-source-defaults) 참조 |

##### 기본 데이터 소스(Data Source Defaults) {#data-source-defaults}

{{% alert color="info" %}}
데이터 소스에 대한 `defaultType` 및 `defaultValue` 속성은 Mendix [10.16](/releasenotes/studio-pro/10.16/)에서 도입되었습니다.
{{% /alert %}}

`defaultType` 및 `defaultValue` 속성을 사용하여 위젯에 대한 기본 데이터 소스를 구성할 수 있습니다. Studio Pro에서 재정의되지 않는 한, 위젯은 기본값에 따라 데이터 소스를 구성하려고 시도합니다. 기본값을 적용하려면 두 속성을 모두 설정해야 합니다.

`defaultValue`의 형식은 선택한 `defaultType`에 따라 다릅니다:

| 데이터 소스 유형 | 형식 | 예시 |
|--------------------------|-------------|-----------------------------------------------------------------------|
| `Database` `Association` | Entity Path | `ModuleName.EntityName` 또는 `ModuleName.A/ModuleName.A_B/ModuleName.B` |
| `Microflow` `Nanoflow` | Document ID | `ModuleName.DocumentName` |

#### Studio Pro UI

속성이 다음과 같이 정의된 경우:

```xml
<property key="data" type="datasource" isList="true" required="false">
	<caption>Data source</caption>
	<description />
</property>
```

속성에 대한 Studio Pro UI는 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-widgets-property-types/datasource.png" class="no-border" >}}

### Selection {#selection}

{{% alert color="info" %}}
이 속성 유형은 Mendix [10.7](/releasenotes/studio-pro/10.7/)에서 도입되었습니다.
{{% /alert %}}

selection 속성을 사용하면 위젯이 액션, 표현식 또는 데이터 뷰의 `Listen to` 데이터 소스에서 사용할 수 있는 선택 항목을 읽고 설정할 수 있습니다.

#### XML 속성(Attributes)

| 속성 | 필수 | 속성 유형 | 설명 |
|----------------|----------|---------------------|---------------------------------------------------------------------------------------------------------------------------------|
| `type` | 예 | String | `selection`이어야 함 |
| `key` | 예 | String | [key](#key) 참조 |
| `dataSource` | 예 | Property Path | 이 selection 속성에 연결된 [`datasource`](#datasource) 속성의 경로를 지정합니다. |
| `defaultValue` | 아니요 | String (Expression) | 속성의 기본값 |
| `onChange` | 아니요 | Property Path | 위젯에 의해 선택 항목이 변경될 때 Mendix 플랫폼에서 실행될 [`action`](#action) 속성의 경로 |

#### XML 요소(Elements)

`<selectionTypes>` (필수) — 이 요소는 Studio Pro에서 selection 속성을 구성하는 동안 사용할 수 있는 지원되는 선택 유형을 선언하는 `<selectionType>` 요소들을 캡슐화합니다.

`<selectionType>` (하나 이상 필수) — 이 요소는 `name` 속성에 선택 유형을 정의합니다.

| 지원되는 선택 유형 | 클라이언트 컴포넌트가 받는 해당 유형 |
|---------------------------|-----------------------------------------------|
| `None` | `undefined` |
| `Single` | `SelectionSingleValue` |
| `Multi` | `SelectionMultiValue` |

자세한 내용은 *플러그형 위젯에서 사용할 수 있는 클라이언트 API*의 [SelectionValue](/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis-10/#selection-value) 섹션을 참조하십시오.

#### Studio Pro UI

속성이 다음과 같이 정의된 경우:

```xml
<property key="selection" type="selection" dataSource="datasource">
  <caption>Selection</caption>
  <description />
  <selectionTypes>
    <selectionType name="None" />
    <selectionType name="Single" />
    <selectionType name="Multi" />
  </selectionTypes>
</property>
```

속성에 대한 Studio Pro UI는 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-widgets-property-types/selection.png" >}}

## 시스템 속성(System Properties) {#system-properties}

시스템 속성은 플러그형 위젯이 Mendix 플랫폼에서 제공하는 확장된 위젯 기능을 채택하는 방법입니다. 시스템 속성은 `<systemProperty>` 요소로 정의되어야 합니다. `<systemProperty>`에 필요한 유일한 XML 속성은 시스템 속성의 유형을 정의하는 `key` 속성입니다. 다음 값이 허용됩니다:

* `Label`
* `Name`
* `TabIndex`
* `Visibility`
* `Editability`

### Label {#label}

Label 속성을 사용하면 플러그형 위젯이 [코어 입력 위젯(/refguide/text-box/#label)](#label)과 유사한 레이블 지정 기능을 가질 수 있습니다. 이를 통해 사용자는 레이블, 레이블 위치 및 레이블 너비를 설정할 수 있습니다. 위젯에 레이블이 구성된 경우 클라이언트 컴포넌트는 자동으로 올바른 마크업으로 래핑됩니다.

```xml
<systemProperty key="Label"/>
```

#### setLabel {#setLabel}

{{% alert color="info" %}}
`setLabel` 속성은 Mendix [10.5](/releasenotes/studio-pro/10.5/)에서 도입되었습니다.
{{% /alert %}}

`setLabel`을 사용하여 `Label` 속성 값을 설정하는 데 사용할 수 있는 속성을 지정할 수 있습니다.

`setLabel` 속성이 있는 프로퍼티 값을 구성하면 `Label` 값이 자동으로 업데이트됩니다.

attribute 및 association 속성만 `setLabel` 속성을 사용할 수 있습니다.

`Label` 값은 설정할 때 기본값이 아닌 값이 없는 경우에만 설정됩니다. 속성이 숨겨지면 `Label` 값은 다시 기본값으로 돌아갑니다. 둘 이상의 속성이 레이블을 설정할 수 있습니다. 그러나 `setLabel` 속성이 있는 여러 프로퍼티가 동시에 표시되는 경우 가장 먼저 업데이트된 프로퍼티가 레이블을 설정합니다. 예를 들어 속성이 다음과 같이 정의된 경우:

```xml
<property key="myAttribute" setLabel="true" type="attribute">
	<caption>My string</caption>
	<description>My string setting</description>
    <attributeTypes>
        <attributeType name="String" />
        <attributeType name="Boolean" />
    </attributeTypes>
</property>
<property key="myAssociation" setLabel="true" type="association" selectableObjects="objectsDatasource">
    <caption>Reference</caption>
    <description>Reference</description>
    <associationTypes>
        <associationType name="Reference"/>
        <associationType name="ReferenceSet"/>
    </associationTypes>
</property>
<property key="objectsDatasource" type="datasource" isList="true">
    <caption>Selectable objects</caption>
    <description/>
</property>
```

그러면 `Label` 속성은 가장 먼저 구성된 속성에 의해 설정됩니다.

### Name {#name}

모든 위젯은 기본적으로 이름을 가집니다. 이 속성은 위젯 이름 입력 위치를 제어하는 데 사용될 수 있습니다. 이 속성이 지정되지 않으면 입력은 **Common** 탭에 배치됩니다. 위젯 이름은 [자동화된 테스트](/howto/integration/selenium-support/) 중에 위젯을 찾는 데에도 사용됩니다. 웹 앱의 경우 위젯 이름이 컴포넌트가 받는 `class` prop에 자동으로 추가되고, 네이티브 모바일 앱의 경우 별도의 `name` prop으로 전달됩니다.

```xml
<systemProperty key="Name"/>
```

### TabIndex {#tabindex}

TabIndex 속성을 사용하면 플러그형 위젯이 [코어 입력 위젯(/refguide/common-widget-properties/#tab-index)](#tab-index)과 유사하게 **Tab index** 설정을 구현할 수 있습니다. 모든 선택 가능한 위젯 또는 입력형 위젯은 일관된 개발 경험을 제공하고 최종 사용자를 위한 접근성 있는 앱을 제공하기 위해 이를 선택해야 합니다. 위젯의 탭 인덱스가 0이 아닌 경우 `tabIndex` prop으로 클라이언트 컴포넌트에 전달됩니다.

```xml
<systemProperty key="TabIndex"/>
```

### Visibility {#visibility}

모든 플러그형 위젯은 [조건부로 숨길 수(/refguide/common-widget-properties/#visibility-properties)](#visibility) 있습니다. 이 속성은 위젯 가시성 입력 위치를 제어하는 데 사용될 수 있습니다.

```xml
<systemProperty key="Visibility"/>
```

### Editability {#editability}

editability 속성을 사용하면 플러그형 위젯이 [코어 입력 위젯(/refguide/text-box/#editability)](#editability)과 유사하게 편집 가능 구성을 가질 수 있습니다. 위젯이 읽기 전용으로 표시되거나 조건이 false인 조건부 편집 가능으로 표시되면, 클라이언트 컴포넌트가 받는 모든 [편집 가능한 값](/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis-10/#editable-value)에는 `readOnly` 플래그가 설정됩니다.

```xml
<systemProperty key="Editability"/>
```

## 속성 변환(Converting Properties) {#converting-properties}

플러그형 위젯의 속성 유형이 변경되면 Mendix 플랫폼은 속성 값을 새 유형으로 자동으로 마이그레이션합니다. 다음 표에는 지원되는 속성 유형 변경 사항이 나열되어 있습니다:

| From | To |
|----------------|----------------|
| `TextTemplate` | `Expression` |
| `Expression` | `TextTemplate` |
| `Expression` | `String` |
| `Expression` | `Boolean` |
| `Expression` | `Integer` |
| `Expression` | `Decimal` |
| `String` | `Expression` |
| `Boolean` | `Expresson` |
| `Integer` | `Expression` |
| `Decimal` | `Expression` |
| `Decimal` | `Integer` |
| `Integer` | `Decimal` |
| `Attribute` | `Expression` |
| `Attribute` | `TextTemplate` |

{{% alert color="warning" %}}
`decimal`에서 `integer`로 변환할 때 값은 가장 가까운 정수로 반올림됩니다.

`TextTemplate`에서 `Expression`으로 변환할 때 현재 언어의 텍스트 템플릿만 마이그레이션되며 대체(fallback) 텍스트는 포함되지 않습니다.
{{% /alert %}}

{{% alert color="info" %}}
이 기능은 Mendix 10.24에서 도입되었습니다.
{{% /alert %}}

## 추가 정보

* [플러그형 위젯 API](/apidocs-mxsdk/apidocs/pluggable-widgets-10/)
* [플러그형 위젯에서 사용할 수 있는 클라이언트 API](/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis-10/)
* [플러그형 위젯 빌드](/howto/extensibility/pluggable-widgets/)
