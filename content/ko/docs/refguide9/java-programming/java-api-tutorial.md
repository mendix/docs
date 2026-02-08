---
title: "Java API 사용하기"
url: /refguide9/java-api-tutorial/
weight: 4
description: "Java Action을 추가하고, Eclipse에서 편집하고, Microflow에서 호출하는 방법을 설명합니다."
---

## 소개

이 튜토리얼에는 Mendix Runtime에서 제공하는 Java API를 사용하는 방법에 대한 몇 가지 예제가 포함되어 있습니다. 이 튜토리얼은 기본적인 Java 및 Mendix 모델링 지식이 있다고 가정합니다.

튜토리얼이 복잡해지지 않도록 관련 코드만 표시하고 Studio Pro 자체에서 생성한 전체 코드는 표시하지 않습니다. 직접 케이스를 재현하고 Action을 실행해 보는 것을 권장합니다.

이 예제를 살펴볼 때, IContext가 자주 사용됩니다. 이것은 무언가를 수행할 수 있는 컨텍스트입니다. 예를 들어, 객체에 대한 접근 권한을 보유합니다. 접근 권한이 필요한 객체에 대해 작업을 수행하면, 작업 중인 컨텍스트가 해당 권한이 있는지 여부와 해당 작업을 수행할 수 있는지 여부를 결정합니다.

이 사용 가이드에서는 다음을 수행하는 방법을 배울 수 있습니다:

* Microflow 실행 및 객체 커밋
* FileDocument 복사

## Microflow 실행 및 객체 커밋

때로는 Java Action에서 Microflow를 실행하고 싶을 수 있습니다. 이 섹션에서는 매개변수 전달 및 반환 값 얻기를 포함하여 이를 수행하는 방법을 설명합니다. 또한 결과가 객체에 저장되고 객체가 커밋됩니다.

이 예제에서는 `MyFirstModule` 모듈의 일부이며 `FormatString`이라는 Microflow를 실행합니다. 이 Microflow에는 문자열인 inputString이라는 입력 매개변수가 있습니다. 반환 값도 문자열이며, 형식화된 문자열을 포함합니다.

프록시를 사용하여 Microflow를 직접 호출할 수 있습니다:

```java
myfirstmodule.proxies.microflows.Microflows.formatString(getContext(), "this is an unformatted string");
```

하지만 클래스 선언 전에 프록시를 먼저 가져온 다음 Microflow를 직접 참조하여 코드를 더 읽기 쉽게 만들 수 있습니다.

```java
import static myfirstmodule.proxies.microflows.Microflows.formatString;
…
public class …
…
String formattedString = formatString(getContext(), "this is an unformatted string");
…
```

형식화된 문자열의 값을 얻으면 이를 객체에 저장한 다음 객체를 커밋할 수 있습니다.

아래 코드는 Microflow `MyFirstModule.FormatString`을 사용하여 문자열 `"this is an unformatted string"`을 형식화하고, `testObject` Entity의 `TestString` 속성에 저장한 다음 객체를 커밋합니다. 코드는 Java Action의 `BEGIN USER CODE`와 `END USER CODE` 사이에 배치됩니다.

```java
import static myfirstmodule.proxies.microflows.Microflows.formatString;
…
public class …
…
// BEGIN USER CODE
String formattedString = formatString(getContext(), "this is an unformatted string");
testObject.setTestString(context, formattedString);
Core.commit(context, testObject.getMendixObject());
// END USER CODE
…
```

## FileDocument 복사

**FileDocument**는 파일의 콘텐츠(예: 텍스트 파일 또는 Excel 시트)를 보유하는 System Module Entity입니다. 이 케이스에서는 `Attachment` Entity와 관계가 있는 `GenericObject`라는 Entity가 있습니다. `Attachment` Entity는 `FileDocument`를 상속합니다. 하나의 `GenericObject`는 여러 `Attachment`를 가질 수 있습니다. `Attachment`를 하나의 `GenericObject`에서 다른 것으로 복사하여 나중에 독립적으로 수정할 수 있도록 합니다.

Java Action에서 두 `GenericObject`를 매개변수로 전달합니다: `sourceObject`와 `destinationObject`. 또한 `sourceObject`의 모든 `Attachment`를 `destinationObject`에 복사합니다.

`Attachment`를 복사하려면 먼저 이를 검색해야 합니다. 이를 위해 `IMendixObjects` 목록을 반환하는 `getAttachments`라는 추가 메서드를 도입합니다. 이 코드는 Java Action의 `BEGIN EXTRA CODE`와 `END EXTRA CODE` 사이에 배치됩니다.

```java
public static List<IMendixObject> getAttachments(GenericObject object, IContext context) throws CoreException
{
	String attachmentEntityName = Attachment.entityName;
	String relationName = Attachment.MemberNames.Attachment_GenericObject.toString();
	String currentObjectID = object.getGUID();
	String query = String.format("//%s[%s=$currentid]", attachmentEntityName, relationName);
	return Core.createXPathQuery(query)
		.setVariable("currentid", currentObjectID)
		.execute(context);
}
```

| 줄 | 설명 |
| --- | --- |
| 1 | 도우미 메서드가 여기에 정의되어 있습니다. 매개변수는 `GenericObject` 프록시 객체와 쿼리를 수행하는 컨텍스트입니다. |
| 3 | `Attachment` Entity의 이름은 `Attachment` 프록시 클래스에서 `entityName`을 복사하여 `String`에 정의됩니다. |
| 4 | `Attachment` Entity와 `GenericObject` Entity 간의 관계 이름은 `Attachment` 프록시 클래스의 `MemberNames` 열거형에서 가져와 `toString()`을 호출하여 `String`에 정의됩니다. |
| 5 | `currentObject`의 ID는 `GenericObject` 프록시 객체의 `getGUID();` 메서드에서 검색됩니다. |
| 6 | `currentid`를 가진 객체와 관련된 `Attachment` Entity에 대한 쿼리를 구성합니다. `$` 접두사는 이것이 변수임을 나타내며, `Core.createXPathQuery` API를 사용하여 나중에 안전하게 삽입할 수 있습니다.
| 7 | `Core` 메서드 `createXPathQuery`를 사용하여 쿼리를 생성합니다. 이 쿼리는 현재 객체의 ID로 변수 `currentid`를 채웁니다. 쿼리를 실행할 컨텍스트를 전달합니다. 그 후 결과(`IMendixObjects` 목록)가 즉시 반환됩니다.

createXPathQuery API를 사용하면 정렬 메커니즘과 반환되는 최대 객체 수와 같은 조건도 입력할 수 있습니다. 쿼리를 실행한 후 이러한 조건이 적용됩니다. 자세한 내용은 JavaDoc을 참조하십시오.

이제 특정 `GenericObject`에서 모든 `Attachment`를 가져오는 방법이 있으므로 복사를 시작할 수 있습니다.

`BEGIN USER CODE`와 `END USER CODE` 사이의 코드입니다:

```java
Attachment newAttachment;
InputStream inputStream;
for (IMendixObject iMendixObject: getAttachments(sourceObject, context))
{
	inputStream = Core.getFileDocumentContent(iMendixObject);
	newAttachment = Attachment.create(context);
	newAttachment.setAttachment_GenericObject(destinationObject);
	Core.storeFileDocumentContent(context, newAttachment.getMendixObject(), (String) iMendixObject.getValue(system.proxies.Document.MemberNames.Name.toString()), inputStream);
}
```

| 줄 | 설명 |
| --- | --- |
| 1 | `newAttachment`라는 이름의 `Attachment` 변수를 선언합니다. |
| 2 | `inputStream`이라는 이름의 `InputStream` 변수를 선언합니다. |
| 3 | 도우미 메서드가 반환한 `IMendixObjects` 목록을 순회하기 시작합니다. |
| 5 | 여기서 `Core` 메서드 `getFileDocumentContent()`를 사용하여 검색된 `Attachment` 객체를 전달하여 실제 파일의 `InputStream`을 검색합니다. |
| 6 | 새 `Attachment`가 인스턴스화됩니다. |
| 7 | 대상 객체에 대한 관계가 새 `Attachment`에 설정됩니다. |
| 8 | 검색된 `InputStream`의 콘텐츠가 `Core` 메서드 `storeFileDocumentContent()`를 사용하여 새 `Attachment`에 저장됩니다. 이 메서드는 여러 매개변수를 받습니다: 이 저장을 수행하는 컨텍스트; `Attachment` 프록시에서 `getMendixObject()`를 호출하여 검색하는 `Attachment` 프록시의 `IMendixObject`; 알고자 하는 멤버 이름을 전달하여 `getValue()` 메서드를 사용하여 복사 중인 Attachment에서 복사하는 문자열 형식의 `FileDocument` 파일 이름; 실제 파일이 포함된 `InputStream`. |

이후 하나의 `GenericObject`에 속한 모든 `Attachment`가 다른 것에 복사됩니다.

## 더 읽기

* [사용자 정의 Java로 애플리케이션 확장하기](/refguide9/extending-your-application-with-custom-java/)
