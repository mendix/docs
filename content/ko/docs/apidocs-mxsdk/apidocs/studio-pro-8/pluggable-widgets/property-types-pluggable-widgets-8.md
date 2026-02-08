---
title: "속성 타입"
url: /apidocs-mxsdk/apidocs/property-types-pluggable-widgets-8/
weight: 10
description: A guide for understanding pluggable widgets' property types.
---

## 소개

구성 가능하게 하기 위해, 플러거블 위젯(Pluggable Widget)은 플러거블 위젯에 사용 가능한 속성을 설명하는 [위젯 속성 정의](/apidocs-mxsdk/apidocs/pluggable-widgets/#properties-definition)를 사용합니다. 플러거블 위젯의 동작 예제를 보려면 [플러거블 위젯 빌드 방법](/howto/extensibility/pluggable-widgets/)을 참조하세요.

속성 정의의 일반적인 구조는 다음과 같습니다:

```xml
<property key="propertyKey" type="propertyType">
	<caption>My Property</caption>
	<description>This is my property</description>
</property>
```

### XML 속성

#### Key (필수) {#key}

이는 위젯 클라이언트 컴포넌트에 제공되는 클라이언트 컴포넌트 props에서 prop `key`를 정의합니다. 각 속성은 대소문자 모든 문자, 숫자 또는 밑줄을 포함할 수 있는 고유한 `key`를 가져야 합니다. 단, `key` 속성은 숫자로 *시작*할 수 없습니다.

#### Type (필수)

이는 속성의 타입을 정의합니다. `type`은 다음 중 하나여야 합니다: 

* 정적 타입
    * [string](#string)
    * [boolean](#boolean)
    * [integer](#integer)
    * [decimal](#decimal)
    * [enumeration](#enumeration)
* 컴포넌트 타입
    * [icon](#icon)
    * [image](#image)
    * [widgets](#widgets)
* 동적 타입
    * [expression](#expression)
    * [textTemplate](#texttemplate)
    * [action](#action)
    * [attribute](#attribute)
    * [object](#object)
    * [file](#file)
    * [datasource](#datasource)

### XML 요소

`<caption>` (필수) — Studio Pro에서 위젯을 구성하는 동안 사용자(최종 사용자가 아님)에게 표시되는 속성 이름을 정의합니다.

`<description>` (필수) — 속성의 목적을 설명하는 설명입니다.

## 정적 타입

정적 타입은 Studio Pro에서 구성된 값을 위젯에 전달하기 위해 만들어졌습니다. 동적 데이터에 의존하지 않습니다. 정적 속성은 간단한 기본 값으로 위젯 클라이언트 컴포넌트에 전달됩니다.

### String{#string}

string 속성 타입은 Studio Pro에서 간단한 텍스트 입력으로 표시됩니다. `string` prop으로 클라이언트 컴포넌트에 전달됩니다.

#### XML 속성

| 속성 | 필수 | 속성 타입 | 설명 |
| -------------- | -------- | -------------- | ------------------------------------------------------------ |
| `type`         | 예      | String         | `string`이어야 합니다 |
| `key`          | 예      | String         | [key](#key) 참조 |
| `defaultValue` | 아니오  | String         | 속성의 기본값 |
| `multiline`    | 아니오  | Boolean        | 여러 줄 입력을 활성화하려면 `true`, 아니면 `false` |
| `required`     | 아니오  | Boolean        | 사용자가 속성을 지정해야 하는지 여부, 기본값 `true` |

#### Studio Pro UI

속성이 다음과 같이 정의된 경우:

```xml
<property key="myString" type="string">
	<caption>My string</caption>
	<description>My string setting</description>
</property>
```

Studio Pro의 속성 UI는 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-parent-8/property-types-pluggable-widgets-8/string.png" class="no-border" >}}

속성이 다음과 같이 정의된 경우:

```xml
<property key="myStringMultiline" type="string" multiline="true">
	<caption>My string multiline</caption>
	<description>My string multiline setting</description>
</property>
```

Studio Pro의 속성 UI는 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-parent-8/property-types-pluggable-widgets-8/string-multiline.png" class="no-border" >}}

### Boolean{#boolean}

Boolean 타입의 속성은 Studio Pro에서 토글로 표시됩니다. `boolean` props로 클라이언트 컴포넌트에 전달됩니다.

#### XML 속성

| 속성 | 필수 | 속성 타입 | 설명 |
| -------------- | -------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`         | 예      | String         | `boolean`이어야 합니다 |
| `key`          | 예      | String         | [key](#key) 참조 |
| `defaultValue` | 예      | Boolean        | 속성의 기본값, `true` 또는 `false` |

#### Studio Pro UI

속성이 다음과 같이 정의된 경우:

```xml
<property key="myBoolean" type="boolean" defaultValue="false">
	<caption>My boolean</caption>
	<description>My boolean setting</description>
</property>
```

Studio Pro의 속성 UI는 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-parent-8/property-types-pluggable-widgets-8/boolean.png" class="no-border" >}}

### Integer{#integer}

Integer는 Studio Pro에서 숫자 입력으로 표시됩니다. `number` prop으로 클라이언트 컴포넌트에 전달됩니다.

#### XML 속성

| 속성 | 필수 | 속성 타입 | 설명 |
| -------------- | -------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`         | 예      | String         | `integer`여야 합니다 |
| `key`          | 예      | String         | [key](#key) 참조 |
| `defaultValue` | 예      | Integer        | 속성의 기본값 |

#### Studio Pro UI

속성이 다음과 같이 정의된 경우:

```xml
<property key="myInteger" type="integer" defaultValue="1000">
	<caption>My integer</caption>
	<description>My integer setting</description>
</property>
```

Studio Pro의 속성 UI는 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-parent-8/property-types-pluggable-widgets-8/integer.png" class="no-border" >}}

### Decimal{#decimal}

decimal 타입의 속성은 Studio Pro에서 숫자 입력으로 표시됩니다. `Big` prop으로 클라이언트 컴포넌트에 전달됩니다.

#### XML 속성

| 속성 | 필수 | 속성 타입 | 설명 |
| -------------- | -------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`         | 예      | String         | `decimal`이어야 합니다 |
| `key`          | 예      | String         | [key](#key) 참조 |
| `defaultValue` | 예      | Integer        | 속성의 기본값 |

#### Studio Pro UI

속성이 다음과 같이 정의된 경우:

```xml
<property key="myDecimal" type="decimal" defaultValue="50.4">
	<caption>My decimal</caption>
	<description>My decimal setting</description>
</property>
```

Studio Pro의 속성 UI는 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-parent-8/property-types-pluggable-widgets-8/decimal.png" alt="decimal" class="no-border" >}}

### Enumeration{#enumeration}

enumeration 속성 타입은 사용자가 XML에 정의된 여러 옵션 중 하나를 선택할 수 있게 합니다. 선택된 열거형 요소의 `key`가 `string` prop으로 클라이언트 컴포넌트에 전달됩니다.

#### XML 속성

| 속성 | 필수 | 속성 타입 | 설명 |
| -------------- | -------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`         | 예      | String         | `enumeration`이어야 합니다 |
| `key`          | 예      | String         | [key](#key) 참조 |
| `defaultValue` | 예      | Integer        | 속성의 기본값 |

#### XML 요소

`<enumerationValues>` (필수) — 가능한 열거형 값을 정의하기 위해 내부에 여러 `<enumerationValue>` 요소가 포함된 하나의 `<enumerationValues>` 요소를 선언해야 합니다. 모든 열거형 값에는 `key` 속성과 캡션이 필요합니다. 다음과 같이 열거형 값을 입력하세요:

```xml
<enumerationValue key="myEnumOption">My enum option caption</enumerationValue>
```

선택된 요소의 `key`가 클라이언트 컴포넌트에 전달됩니다. `key`는 앱에서 사용되는 옵션을 식별하는 데 사용되므로 변경하면 안 됩니다.

#### Studio Pro UI

속성이 다음과 같이 정의된 경우:

```xml
	<property key="myEnumeration" type="enumeration" defaultValue="red">
		<caption>My enumeration</caption>
		<description>My enumeration setting</description>
		<enumerationValues>
			<enumerationValue key="red">Red</enumerationValue>
			<enumerationValue key="green">Green</enumerationValue>
			<enumerationValue key="blue">Blue</enumerationValue>
		</enumerationValues>
	</property>
```

Studio Pro의 속성 UI는 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-parent-8/property-types-pluggable-widgets-8/enumeration.png" class="no-border" >}}

## 컴포넌트 타입

### Icon {#icon}

icon 타입의 속성은 사용자가 [버튼](/refguide/button-properties/#icon)에서 사용되는 것과 유사한 아이콘을 구성할 수 있게 합니다. `DynamicValue<IconValue>` prop으로 클라이언트 컴포넌트에 전달됩니다. 자세한 내용은 *플러거블 위젯에 사용 가능한 Client API*의 [IconValue](/apidocs-mxsdk/apidocs/client-apis-for-pluggable-widgets-8/#icon-value) 섹션을 참조하세요.

{{% alert color="info" %}}
이 속성 타입은 Mendix 8.1에서 도입되었습니다.
{{% /alert %}}

#### XML 속성

| 속성 | 필수 | 속성 타입 | 설명 |
| ---------- | -------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`     | 예      | String         | `icon`이어야 합니다 |
| `key`      | 예      | String         | [key](#key) 참조 |
| `required` | 아니오  | Boolean        | 사용자가 속성을 지정해야 하는지 여부, 기본값 `true` |

#### Studio Pro UI

컴포넌트가 다음과 같이 정의된 경우:

```xml
<property key="cardIcon" type="icon" required="false">
	<caption>Icon</caption>
	<description>Card icon</description>
</property>
```

Studio Pro의 컴포넌트 UI는 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-parent-8/property-types-pluggable-widgets-8/icon.png" class="no-border" >}}

### Image {#image}

Image는 사용자가 [이미지 컬렉션](/refguide/image-collection/)에서 정적 이미지를 구성할 수 있게 합니다. 또한 **System.Image**의 특수화인 객체에서 이미지를 구성할 수 있게 합니다. `DynamicValue<ImageValue>` prop으로 클라이언트 컴포넌트에 전달됩니다(자세한 내용은 *플러거블 위젯에 사용 가능한 Client API*의 [ImageValue](/apidocs-mxsdk/apidocs/client-apis-for-pluggable-widgets-8/#imagevalue) 섹션을 참조하세요). 지원되는 이미지 형식에 대한 자세한 내용은 [이미지 참조 가이드](/refguide/images/)를 참조하세요.

{{% alert color="info" %}}
이 속성 타입은 Mendix 8.1에서 도입되었습니다. 동적 이미지 지원은 Mendix [8.4.0](/releasenotes/studio-pro/8.4/)에서 도입되었습니다.
{{% /alert %}}

{{% alert color="info" %}}
네이티브 모바일 앱에서 SVG 이미지 지원은 Mendix [8.4.0](/releasenotes/studio-pro/8.4/)에서 도입되었습니다.
{{% /alert %}}

{{% alert color="warning" %}}
GIF 이미지는 Android 기기의 네이티브 모바일 앱에서 지원되지 않습니다.
{{% /alert %}}

#### XML 속성

| 속성 | 필수 | 속성 타입 | 설명 |
| ---------- | -------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`     | 예      | String         | `image`여야 합니다 |
| `key`      | 예      | String         | [key](#key) 참조 |
| `required` | 아니오  | Boolean        | 사용자가 속성을 지정해야 하는지 여부, 기본값 `true` |

#### Studio Pro UI

컴포넌트가 다음과 같이 정의된 경우:

```xml
<property key="bgImage" type="image" required="false">
	<caption>Background Image</caption>
	<description>Image shown blurred in a background</description>
</property>
```

Studio Pro의 컴포넌트 UI는 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-parent-8/property-types-pluggable-widgets-8/image.png" class="no-border" >}}

### Widgets {#widgets}

widgets 속성은 사용자가 [컨테이너](/refguide/container/) 위젯의 내용과 유사하게 플러거블 위젯 안에 여러 위젯을 배치할 수 있게 합니다. `dataSource` 속성이 지정되지 않거나 속성이 지정되었지만 사용자가 데이터 소스를 구성하지 않은 경우 `ReactNode` prop으로 클라이언트 컴포넌트에 전달됩니다. 그렇지 않으면 [`ListWidgetValue`](/apidocs-mxsdk/apidocs/client-apis-for-pluggable-widgets-8/#listwidgetvalue)로 전달됩니다. 자세한 내용은 아래의 [Datasource](#datasource) 섹션을 참조하세요.

{{% alert color="info" %}}
이 속성 타입은 Mendix 8.3에서 도입되었습니다.
{{% /alert %}}

{{% alert color="info" %}}
`dataSource` 속성 지원은 Mendix 8.7에서 도입되었습니다.
{{% /alert %}}

{{% alert color="warning" %}}
일부 위젯은 아직 플러거블 위젯 내부에서 지원되지 않습니다. 지원되지 않는 위젯을 플러거블 위젯 안에 배치하면 Studio Pro에서 일관성 오류가 발생합니다.
{{% /alert %}}

#### XML 속성

| 속성 | 필수 | 속성 타입 | 설명 |
| ------------ | -------- | -------------- | ----------- |
| `type`       | 예      | String         | `widgets`여야 합니다 |
| `key`        | 예      | String         | [key](#key) 참조 |
| `dataSource` | 아니오  | Property Path  | 이 widget 속성에 연결된 [`datasource`](#datasource) 속성의 경로를 지정합니다 |
| `required`   | 아니오  | Boolean        | 사용자가 최소 하나의 위젯을 제공해야 하는지 여부, 기본값 `true` |

#### Studio Pro UI

컴포넌트가 `dataSource` 속성 없이 다음과 같이 정의된 경우:

```xml
<property key="content" type="widgets" required="false">
	<caption>Content</caption>
	<description>Content of a box</description>
</property>
```

Studio Pro의 컴포넌트 UI는 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-parent-8/property-types-pluggable-widgets-8/widgets.png" alt="studio pro ui" class="no-border" >}}

#### DataSource 속성 사용하기

컴포넌트가 `dataSource` 속성으로 정의되고, `myDataSource`가 이 위젯에 대해 다른 곳에서 정의된 [`datasource`](#datasource) 속성의 key인 경우:

```xml
<property key="content" type="widgets" required="false" dataSource="myDataSource">
	<caption>Content</caption>
	<description>Widgets using data source</description>
</property>
```

Studio Pro의 컴포넌트 UI는 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-parent-8/property-types-pluggable-widgets-8/widgets_with_ds.png" alt="studio pro ui" class="no-border" >}}

## 동적 타입

### Expression{#expression}

expression 속성은 사용자가 [표현식(expression)](/refguide/expressions/)을 구성할 수 있게 합니다.

`dataSource` 속성이 지정되지 않거나, `dataSource` 속성이 지정되었지만 사용자가 데이터 소스를 구성하지 않은 경우, 클라이언트는 expression의 반환 타입에 따라 `DynamicValue<T>`를 수신합니다.

`dataSource` 속성이 지정되고 사용자가 구성한 경우, expression의 반환 타입에 따라 [`ListExpressionValue<T>`](/apidocs-mxsdk/apidocs/client-apis-for-pluggable-widgets-8/#listexpressionvalue)로 전달됩니다. 자세한 내용은 아래의 [Datasource](#datasource) 섹션을 참조하세요.

{{% alert color="info" %}}
`dataSource` 속성 지원은 Mendix 8.14에서 도입되었습니다.
{{% /alert %}}

#### XML 속성

| 속성 | 필수 | 속성 타입 | 설명 |
| -------------- | -------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`         | 예      | String              | `expression`이어야 합니다 |
| `key`          | 예      | String              | [key](#key) 참조 |
| `defaultValue` | 아니오  | String (Expression) | 속성의 기본값 |
| `required`     | 아니오  | Boolean             | 사용자가 속성을 지정해야 하는지 여부, 기본값 `true` |
| `dataSource`   | 아니오  | Property Path       | 이 expression 속성에 연결된 [`datasource`](#datasource) 속성의 경로를 지정합니다 |

#### XML 요소

`<returnType>` (필수) — expression 속성은 expression의 허용 반환 타입을 정의하기 위해 `<returnType>` 요소를 포함해야 합니다. Mendix 플랫폼은 구성된 expression이 올바른 데이터 타입을 반환하도록 보장합니다.

| 지원되는 반환 타입 | 클라이언트 컴포넌트가 수신하는 해당 타입 |
| -------------------- | --------------------------------------------- |
| `Boolean`              | `DynamicValue<boolean>` |
| `DateTime`           | `DynamicValue<Date>` |
| `Decimal`             | `DynamicValue<BigJS>` |
| `Integer`              | `DynamicValue<BigJS>` |
| `String`               | `DynamicValue<string>` |

#### Studio Pro UI

속성이 다음과 같이 정의된 경우:

```xml
<property key="progressBarColor" type="expression" defaultValue="'red'">
	<caption>Color</caption>
	<description>Progress bar CSS color</description>
	<returnType type="String" />
</property>
```

Studio Pro의 속성 UI는 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-parent-8/property-types-pluggable-widgets-8/expression.png" class="no-border" >}}

### TextTemplate{#texttemplate}

TextTemplate 속성은 사용자가 [텍스트 위젯의 Caption](/refguide/text/#caption)과 유사한 번역 가능한 텍스트 템플릿을 구성할 수 있게 합니다.

`dataSource` 속성이 지정되지 않거나, `dataSource` 속성이 지정되었지만 사용자가 데이터 소스를 구성하지 않은 경우, 보간된 문자열이 `DynamicValue<string>`으로 클라이언트 컴포넌트에 전달됩니다.

`dataSource` 속성이 지정되고 사용자가 구성한 경우, [`ListExpressionValue<string>`](/apidocs-mxsdk/apidocs/client-apis-for-pluggable-widgets-8/#listexpressionvalue)으로 전달됩니다. 자세한 내용은 아래의 [Datasource](#datasource) 섹션을 참조하세요.

{{% alert color="info" %}}
`dataSource` 속성 지원은 Mendix 8.14에서 도입되었습니다.
{{% /alert %}}

#### XML 속성

| 속성 | 필수 | 속성 타입 | 설명 |
| ------------ | -------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`       | 예      | String         | `textTemplate`이어야 합니다 |
| `key`        | 예      | String         | [key](#key) 참조 |
| `multiline`  | 아니오  | Boolean        | 여러 줄 입력을 활성화하려면 `true`, 아니면 `false` |
| `required`   | 아니오  | Boolean        | 사용자가 속성을 지정해야 하는지 여부, 기본값 `true` |
| `dataSource` | 아니오  | Property Path  | 이 text template 속성에 연결된 [`datasource`](#datasource) 속성의 경로를 지정합니다 |

#### XML 요소

`<translations>` — `lang` 속성으로 [ISO 639](https://en.wikipedia.org/wiki/ISO_639) 언어 코드를 나타내는 `<translation>` 요소를 사용하여 다양한 언어에 대한 텍스트 템플릿의 기본값을 설정할 수 있습니다. 사용 가능한 언어는 Studio Pro의 [언어 탭](/refguide/app-settings/#languages-tab)에 나열되어 있습니다.

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

Studio Pro의 속성 UI는 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-parent-8/property-types-pluggable-widgets-8/text.png" class="no-border" >}}

### Action{#action}

action 속성 타입은 사용자가 나노플로우(Nanoflow) 호출, 변경 사항 저장, 페이지 열기 등의 작업을 수행할 수 있는 액션을 구성할 수 있게 합니다.

`dataSource` 속성이 지정되지 않거나, `dataSource` 속성이 지정되었지만 사용자가 데이터 소스를 구성하지 않은 경우, 클라이언트는 액션을 나타내는 `ActionValue`를 수신하거나 **Do nothing** 액션이 선택된 경우 `undefined`를 수신합니다.

`dataSource` 속성이 지정되고 사용자가 구성한 경우, [`ListActionValue`](/apidocs-mxsdk/apidocs/client-apis-for-pluggable-widgets-8/#listactionvalue)로 전달됩니다. 자세한 내용은 아래의 [Datasource](#datasource) 섹션을 참조하세요.

{{% alert color="info" %}}
`dataSource` 속성 지원은 Mendix 8.9에서 도입되었습니다.
{{% /alert %}}

#### XML 속성

| 속성 | 필수 | 속성 타입 | 설명 |
| ------------ | -------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`       | 예      | String         | `action`이어야 합니다 |
| `key`        | 예      | String         | [key](#key) 참조 |
| `dataSource` | 아니오  | Property Path  | 이 action 속성에 연결된 [`datasource`](#datasource) 속성의 경로를 지정합니다 |

#### Studio Pro UI

속성이 다음과 같이 정의된 경우:

```xml
<property key="buttonAction" type="action">
	<caption>On click</caption>
	<description>Action to be performed when button is clicked</description>
</property>
```

Studio Pro의 속성 UI는 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-parent-8/property-types-pluggable-widgets-8/action.png" class="no-border" >}}

### Attribute{#attribute}

attribute 속성 타입은 위젯이 엔티티(Entity)의 속성(Attribute)과 직접 작업할 수 있게 하며, 속성의 읽기와 쓰기를 모두 포함합니다. 위젯의 목적에 따라 위젯은 지원하는 속성 타입을 정의해야 합니다.

`dataSource` 속성이 지정되지 않거나, `dataSource` 속성이 지정되었지만 사용자가 데이터 소스를 구성하지 않은 경우, 클라이언트는 구성된 `<attributeType>`에 따라 `EditableValue<T>`를 수신합니다. 자세한 내용은 *플러거블 위젯에 사용 가능한 Client API*의 [EditableValue](/apidocs-mxsdk/apidocs/client-apis-for-pluggable-widgets-8/#editable-value) 섹션을 참조하세요.

`dataSource` 속성이 지정되고 사용자가 구성한 경우, [`ListAttributeValue`](/apidocs-mxsdk/apidocs/client-apis-for-pluggable-widgets-8/#listattributevalue)로 전달됩니다. 자세한 내용은 아래의 [Datasource](#datasource) 섹션을 참조하세요.

{{% alert color="info" %}}
`dataSource` 속성 지원은 Mendix 8.12에서 도입되었습니다.
{{% /alert %}}

#### XML 

| 속성 | 필수 | 속성 타입 | 설명 |
| ------------ | -------- | -------------- | ------------------------------------------------------------ |
| `type`       | 예      | String         | `attribute`여야 합니다 |
| `key`        | 예      | String         | [key](#key) 참조 |
| `onChange`   | 아니오  | Property Path  | 위젯이 값을 변경할 때 Mendix 플랫폼이 실행할 Action 속성의 경로 |
| `required`   | 아니오  | Boolean        | 사용자가 속성을 지정해야 하는지 여부, 기본값 `true` |
| `dataSource` | 아니오  | Property Path  | 이 attribute 속성에 연결된 [`datasource`](#datasource) 속성의 경로를 지정합니다 |

#### XML 요소

`<attributeTypes>` (필수) — 이 요소는 Studio Pro에서 attribute 속성을 구성할 때 사용할 수 있는 지원되는 속성 타입을 선언하는 `<attributeType>` 요소를 캡슐화합니다.

`<attributeType>` (하나 이상 필수) — 이 요소는 `name` 속성에서 허용되는 속성 타입을 정의합니다.

| 지원되는 속성 타입 | 클라이언트 컴포넌트가 수신하는 해당 타입 |
| ------------------------- | --------------------------------------------- |
| `AutoNumber`              | `EditableValue<string>` |
| `Binary`                  | `EditableValue<string>` |
| `Boolean`                 | `EditableValue<boolean>` |
| `DateTime`                | `EditableValue<Date>` |
| `Enum`                    | `EditableValue<string>` |
| `HashString`              | `EditableValue<string>` |
| `Integer`                 | `EditableValue<BigJS>` |
| `Long`                    | `EditableValue<BigJS>` |
| `String`                  | `EditableValue<string>` |
| `Decimal`                 | `EditableValue<BigJS>` |

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

Studio Pro의 속성 UI는 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-parent-8/property-types-pluggable-widgets-8/xml-element.png" class="no-border" >}}

### Object{#object}

object 속성 타입은 임의의 속성 목록을 생성할 수 있게 합니다.

#### XML 속성

| 속성 | 필수 | 속성 타입 | 설명 |
| ---------- | -------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`     | 예      | String         | `object`여야 합니다 |
| `key`      | 예      | String         | [key](#key) 참조 |
| `isList`   | 예      | Boolean        | `true`여야 합니다 |
| `required` | 아니오  | Boolean        | 사용자가 목록에 항목을 지정해야 하는지 여부, 기본값 `true` |

#### XML 요소

`<properties>` (필수) — 구성할 속성 목록을 캡슐화합니다. 속성 그룹에 대한 자세한 내용은 *플러거블 위젯 API*의 [속성 그룹](/apidocs-mxsdk/apidocs/pluggable-widgets/#property-groups) 섹션을 참조하세요. 속성은 `<propertyGroup>` 요소로 그룹화해야 합니다. 중첩된 object 속성은 지원되지 않습니다.

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

Studio Pro의 속성 UI는 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-parent-8/property-types-pluggable-widgets-8/object.png" class="no-border" >}}

### File {#file}

file 속성 타입은 사용자가 **System.File**의 특수화인 객체에서 파일을 구성할 수 있게 합니다. [`DynamicValue<FileValue>`](/apidocs-mxsdk/apidocs/client-apis-for-pluggable-widgets-8/#filevalue) prop으로 클라이언트 컴포넌트에 전달됩니다.

#### XML 속성

| 속성 | 필수 | 속성 타입 | 설명 |
| ---------- | -------- | -------------- | ----------- |
| `type`     | 예      | String         | `file`이어야 합니다 |
| `key`      | 예      | String         | [key](#key) 참조 |

#### Studio Pro UI

속성이 다음과 같이 정의된 경우:

```xml

<property key="file" type="file" required="false">
	<caption>File</caption>
	<description>Sample text file</description>
</property>
```

Studio Pro의 속성 UI는 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-parent-8/property-types-pluggable-widgets-8/file.png" class="no-border" >}}

### Datasource {#datasource}

datasource 속성은 위젯이 객체 목록과 작업할 수 있게 합니다. 클라이언트 컴포넌트는 [`ListValue`](/apidocs-mxsdk/apidocs/client-apis-for-pluggable-widgets-8/#listvalue) 타입의 값 prop을 수신하며, [`action`](#action), [`attribute`](#attribute), [`expression`](#expression), [`text template`](#texttemplate) 및 [`widgets`](#widgets) 속성과 함께 사용할 수 있습니다. 사용 가능한 데이터 소스 타입은 [데이터 소스](/refguide/data-sources/#list-widgets)를 참조하세요.

{{% alert color="info" %}}
datasource 속성 타입 지원은 Mendix 8.7에서 도입되었습니다.
{{% /alert %}}

{{% alert color="warning" %}}
목록 datasource만 지원되므로 `isList="true"` 지정이 필수입니다.
{{% /alert %}}

#### XML 속성

| 속성 | 필수 | 속성 타입 | 설명 |
| ---------- | -------- | -------------- | ----------- |
| `type`     | 예      | String         | `datasource`여야 합니다 |
| `key`      | 예      | String         | [key](#key) 참조 |
| `isList`   | 예      | Boolean        | `true`여야 합니다 |
| `required` | 아니오  | Boolean        | 사용자가 datasource를 지정해야 하는지 여부, 기본값 `true` |

#### Studio Pro UI

속성이 다음과 같이 정의된 경우:

```xml
<property key="data" type="datasource" isList="true" required="false">
	<caption>Data source</caption>
	<description />
</property>
```

Studio Pro의 속성 UI는 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-parent-8/property-types-pluggable-widgets-8/datasource.png" class="no-border" >}}

## 시스템 속성 {#system-properties}

시스템 속성은 플러거블 위젯이 Mendix 플랫폼에서 제공하는 확장 위젯 기능을 채택하는 방법입니다. 시스템 속성은 `<systemProperty>` 요소로 정의해야 합니다. `<systemProperty>`가 필요로 하는 유일한 속성 XML 속성은 시스템 속성의 타입을 정의하는 `key` 속성입니다. 다음 값이 허용됩니다:

* `Label`
* `Name`
* `TabIndex`
* `Visibility`
* `Editability`

### Label {#label}

Label 속성은 플러거블 위젯이 [코어 입력 위젯](/refguide/text-box/#label)과 유사한 레이블 기능을 가질 수 있게 합니다. 이를 통해 사용자는 레이블, 레이블 위치, 레이블 너비를 설정할 수 있습니다. 위젯에 레이블이 구성되면 클라이언트 컴포넌트가 자동으로 올바른 마크업으로 래핑됩니다.

```xml
<systemProperty key="Label"/>
```

### Name {#name}

모든 위젯에는 기본적으로 이름이 있습니다. 이 속성은 위젯 이름 입력의 위치를 제어하는 데 사용할 수 있습니다. 이 속성이 지정되지 않으면 입력은 **Common** 탭에 배치됩니다. 위젯의 이름은 [자동화된 테스트](/howto/integration/selenium-support/) 중에 위치를 찾는 데도 사용됩니다. 이 목적을 위해 웹 앱에서는 위젯 이름이 컴포넌트가 수신하는 `class` prop에 자동으로 추가되고, 네이티브 모바일 앱에서는 별도의 `name` prop으로 전달됩니다.

```xml
<systemProperty key="Name"/>
```

### TabIndex {#tabindex}

TabIndex 속성은 플러거블 위젯이 [코어 입력 위젯](/refguide/common-widget-properties/#tab-index)과 유사한 **Tab index** 설정을 구현할 수 있게 합니다. 모든 선택 가능하거나 입력과 유사한 위젯은 일관된 개발 경험과 최종 사용자를 위한 접근 가능한 앱을 제공하기 위해 이를 선택해야 합니다. 위젯의 탭 인덱스가 0이 아닌 경우 `tabIndex` prop으로 클라이언트 컴포넌트에 전달됩니다.

```xml
<systemProperty key="TabIndex"/>
```

### Visibility {#visibility}

모든 플러거블 위젯은 [조건부로 숨길](/refguide/common-widget-properties/#visibility-properties) 수 있습니다. 이 속성은 위젯 표시 여부 입력의 위치를 제어하는 데 사용할 수 있습니다.

{{% alert color="info" %}}
이 속성 타입은 Mendix 8.1에서 도입되었습니다.
{{% /alert %}}

```xml
<systemProperty key="Visibility"/>
```

### Editability {#editability}

editability 속성은 플러거블 위젯이 [코어 입력 위젯](/refguide/text-box/#editability)과 유사한 편집 가능 구성을 가질 수 있게 합니다. 위젯이 읽기 전용으로 표시되거나 조건이 false인 조건부 편집 가능으로 설정된 경우, 클라이언트 컴포넌트가 수신하는 모든 [편집 가능한 값](/apidocs-mxsdk/apidocs/client-apis-for-pluggable-widgets-8/#editable-value)에 `readOnly` 플래그가 설정됩니다.

{{% alert color="info" %}}
이 속성 타입은 Mendix 8.1에서 도입되었습니다.
{{% /alert %}}

```xml
<systemProperty key="Editability"/>
```

## 더 읽기

* [플러거블 위젯(Pluggable Widgets) API](/apidocs-mxsdk/apidocs/pluggable-widgets/)
* [플러거블 위젯에 사용 가능한 Client API (Mendix 8)](/apidocs-mxsdk/apidocs/client-apis-for-pluggable-widgets-8/)
* [플러거블 위젯 빌드](/howto/extensibility/pluggable-widgets/)
