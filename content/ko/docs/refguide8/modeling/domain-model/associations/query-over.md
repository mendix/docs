---
title: "자기 참조(Self-Reference)를 통한 쿼리"
url: /refguide8/query-over/
weight: 20
---

## 소개

때때로 데이터의 유형과 구조에서 더 많은 유연성을 허용하기 위해 보다 일반적인 도메인 모델을 만들고 싶을 때가 있습니다. 이 경우 간단하면서도 효율적으로 설계된 모델을 위해 상속이나 자기 참조를 사용하는 경우가 많습니다. 이렇게 하면 Microflow와 애플리케이션 로직을 훨씬 쉽게 구축할 수 있지만 올바른 객체를 쿼리하는 것이 어려워질 수 있습니다. 특히 자기 참조를 사용할 때 더욱 그렇습니다.

## 예시

이 예시는 하나의 폴더가 여러 하위 폴더를 포함할 수 있는 컴퓨터의 폴더 구현에 대한 것입니다.

{{< figure src="/attachments/refguide8/modeling/domain-model/associations/query-over/query-over-example-structure.png" class="no-border" >}}

이를 구현하기 위해 **Folder**에 대한 자기 참조를 사용합니다. 자기 참조는 **Folder_SubFolder**라는 Association입니다. 이를 통해 무제한의 수와 수준의 폴더가 있는 폴더 구조를 구축할 수 있습니다.

{{% alert color="info" %}}
이 경우의 Association은 일대다 Association이지만, 동일한 기술이 다대다 또는 일대일 Association에도 적용됩니다.
{{% /alert %}}

{{< figure src="/attachments/refguide8/modeling/domain-model/associations/query-over/self-reference-domain-model.png" class="no-border" >}}

**QueryOver**라는 모듈에서 폴더 기능을 만들면 Association **Folder_SubFolder**는 도메인 모델에서 두 가지 방식으로 설명됩니다:

| Name | Type | Owner | Parent | Child |
| --- | --- | --- | --- | --- |
| Folder_Subfolder | Reference | Default | QueryOver.Folder | QueryOver.Folder |

* 다중성: 하나의 'Folder' 객체가 여러 'Folder' 객체와 연관됨

**Child**가 Association의 **Owner**입니다 – 즉, Association은 항상 자식을 통해 업데이트됩니다.

{{< figure src="/attachments/refguide8/modeling/domain-model/associations/query-over/query-over-association.png" class="no-border" >}}

위의 예에는 여섯 개의 폴더가 있으며 데이터베이스는 아래와 같이 구조화되고 Attribute가 채워져 있습니다. **Folder_SubFolder** 테이블에서 **ChildFolderID**는 Association의 소유자이므로 왼쪽에 표시됩니다.

{{< figure src="/attachments/refguide8/modeling/domain-model/associations/query-over/query-over-example-database.png" class="no-border" >}}

도메인 모델이 데이터베이스에서 어떻게 구현되는지에 대한 자세한 내용은 *도메인 모델*의 [구현](/refguide8/domain-model/#implementation) 섹션을 참조하십시오.

### 폴더(부모)에서 하위 폴더(자식) 검색

Microflow에서 $ChosenFolder 객체를 사용할 수 있는 경우 하위 폴더를 쉽게 검색할 수 있습니다. 각 Association에는 오른쪽(Association의 부모)과 왼쪽(Association의 자식 또는 소유자)이 있습니다. 플랫폼은 각 Association을 읽고 부모가 $ChosenFolder와 같은지 확인합니다.

이것은 다음 XPath 제약 조건을 사용하여 구현됩니다: `[QueryOver.Folder_SubFolder=$ChosenFolder]`. XPath 제약 조건은 오른쪽에서 왼쪽으로 읽히며 결과 Folder가 결과입니다. 이것이 Association을 따르는 방향을 해석하는 방법의 핵심입니다.

{{< figure src="/attachments/refguide8/modeling/domain-model/associations/query-over/query-over-retrieve-normal.png"   width="400"  class="no-border" >}}

$ChosenFolder 객체의 **Code**가 `202002141322015`이고 **Name**이 `SubFolder2`인 경우 **ID**가 `3`인 폴더를 선택한 것입니다. 왼쪽 테이블에서 주황색으로 강조 표시된 두 폴더가 반환됩니다. 플랫폼은 기본적으로 Association의 오른쪽/부모 쪽에 제약 조건을 적용하고 관련 ChildFolder를 반환합니다.

{{< figure src="/attachments/refguide8/modeling/domain-model/associations/query-over/query-over-retrieve-normal-tables.png" class="no-border" >}}

### 폴더에서 부모 폴더 검색

$ChosenFolder 객체를 사용할 수 있고 ParentFolder(계층에서 한 단계 위의 폴더, 예를 들어 **SubFolder2**가 주어지면 **MainFolder**를 검색하려는 경우)를 데이터베이스에서 검색하려면 더 복잡해집니다.

`[reversed ()]` 표현식을 사용하여 Mendix에게 평소에 사용하는 방향의 반대 방향으로 제약 조건을 읽도록 지시하십시오.

{{% alert color="info" %}}
`[reversed()]`는 하나의 Association에만 적용됩니다. 여러 Association이 있는 경우 정상적인 방식으로 해석됩니다. 아래의 [더 복잡한 쿼리 만들기](#more-complex)를 참조하십시오.

`[reversed()]` 표현식은 자기 참조에만 적용할 수 있습니다. Association이 두 개의 다른 객체 유형 사이에 있는 경우 플랫폼은 조인 방향을 자동으로 결정할 수 있습니다.
{{% /alert %}}

이 예에서 $ChosenFolder의 부모인 폴더를 찾으려 합니다. 이제 쿼리는 `[QueryOver.Folder_SubFolder [reversed ()]=$ChosenFolder]`가 됩니다. Association을 오른쪽에서 왼쪽(부모에서 자식)으로 읽는 대신, 왼쪽에서 오른쪽으로 읽습니다.

{{< figure src="/attachments/refguide8/modeling/domain-model/associations/query-over/query-over-retrieve-reversed.png"   width="400"  class="no-border" >}}

$ChosenFolder 객체의 **Code**가 `202002141322015`이고 **Name**이 `SubFolder2`인 경우 **ID**가 `3`인 폴더를 선택한 것입니다. 오른쪽 테이블에서 주황색으로 강조 표시된 폴더가 반환됩니다. 플랫폼은 Association의 왼쪽/자식 쪽에 역방향으로 제약 조건을 적용하고 관련 ParentFolder를 반환합니다.

{{< figure src="/attachments/refguide8/modeling/domain-model/associations/query-over/query-over-retrieve-reversed-tables.png" class="no-border" >}}

### 더 복잡한 쿼리 만들기 {#more-complex}

이전 예는 간단한 것이었습니다. 그러나 `[reversed()]` 표현식은 더 복잡한 쿼리에서도 사용할 수 있습니다.

예를 들어, 각 폴더가 Association **File_Folder**를 통해 폴더와 연관된 여러 파일을 포함할 수 있다고 가정합니다.

{{< figure src="/attachments/refguide8/modeling/domain-model/associations/query-over/query-over-extended-domain-model.png" class="no-border" >}}

폴더 객체 $ChosenFolder의 부모 폴더에 있는 모든 파일을 검색하려 합니다.

제약 조건 `[QueryOver.File_Folder/QueryOver.Folder/QueryOver.Folder_SubFolder [reversed ()]=$ChosenFolder]`를 사용하여 **$ChosenFolder**와 동일한 **Folder**와 (부모로서) 연관된 **Folder**와 연관된 모든 **File** 객체를 반환합니다.

{{< figure src="/attachments/refguide8/modeling/domain-model/associations/query-over/query-over-retrieve-complex.png" class="no-border" >}}

$ChosenFolder 객체가 `SubFolder2`인 경우 Association **File_Folder**를 통해 `MainFolder`와 연관된 모든 **File** 객체를 검색합니다.

## 특수화에 대한 Association

자기 참조의 특수한 경우에서 일대다 Association이 자기 자신의 특수화와의 경우, [Association으로 검색](/refguide8/retrieve/#source)할 수 없습니다.

다음은 상속의 예입니다:

{{< figure src="/attachments/refguide8/modeling/domain-model/associations/query-over/limitation.png" class="no-border" >}}

이 예에서 입력이 특수화인 경우 Microflow에서 표준 Association으로 검색을 사용하여 **Specialization** 목록을 검색할 수 없습니다.

그러나 이 제한에 대한 해결 방법이 있습니다: Java API를 사용하여 Java 액션으로 Specialization 목록을 검색할 수 있습니다. 이 Java 액션에는 두 개의 매개변수가 필요합니다: **Specialization**과 Boolean **Reverse**이며 다음 코드 스니펫을 통해 구현됩니다:

```java
public class RetrieveAsAssociatedWithB extends CustomJavaAction<java.util.List<IMendixObject>>
{
	private IMendixObject __B;
	private main.proxies.Specialization B;
	private java.lang.Boolean Reverse;

	public RetrieveAsAssociatedWithB(IContext context, IMendixObject B, java.lang.Boolean Reverse)
	{
		super(context);
		this.__B = B;
		this.Reverse = Reverse;
	}

	@java.lang.Override
	public java.util.List<IMendixObject> executeAction() throws Exception
	{
		this.B = __B == null ? null : main.proxies.Specialization.initialize(getContext(), __B);
 
		// BEGIN USER CODE
		return Core.retrieveByPath(getContext(), __B, "Main.Generalization_Specialization", Reverse);
		// END USER CODE
	}
}
```

{{% alert color="info" %}}
이 코드 스니펫에서 `Core.retrieveByPath(..)`를 실행할 수 있도록 `com.mendix.core.Core`를 임포트해야 합니다.
{{% /alert %}}

`Reverse` Boolean을 true로 설정하고 `Specialization` 객체를 입력으로 사용하면 반환된 목록에 특수화와 연관된 모든 일반화가 포함됩니다.
