---
title: "XPath Constraints"
url: /refguide/xpath-constraints/
weight: 2
---

## 소개

모든 XPath 쿼리에 제약 조건을 추가하여 검색되는 데이터를 필터링할 수 있습니다. 제약 조건은 항상 유효한 [표현식](/refguide/xpath-expressions/)의 형태를 취해야 합니다. 이는 하나 이상의 Entity, Attribute 또는 Association이 [연산자](/refguide/xpath-operators/), [함수](/refguide/xpath-constraint-functions/) 및 [키워드 또는 시스템 변수](/refguide/xpath-keywords-and-system-variables/)와 결합된 것으로 구성되어야 합니다.

XPath 쿼리의 구문은 Studio Pro 환경과 Java 환경에서 다릅니다. Studio Pro에서는 완전한 쿼리를 작성하지 않고 제약 조건만 작성합니다. Entity는 컨텍스트에 의해 암묵적으로 결정됩니다. 따라서 고객 컨텍스트에서는 `//Sales.Customer[Name='Jansen']` 대신 `[Name='Jansen']`만 작성하면 됩니다. Java에서는 이중 슬래시(`//`)와 Entity 이름을 포함한 전체 쿼리를 작성해야 합니다.

{{% alert color="info" %}}
아래의 모든 Studio Pro 예제는 검색을 위해 Entity `Sales.Customer`가 선택되었다고 가정합니다.
{{% /alert %}}

## Studio Pro에서의 제약 조건

### XPath Constraints용 Visual Builder 사용하기

{{% alert color="warning" %}}
XPath Constraints용 Visual Builder에는 [Builder 제한 사항](#limitations)에 나열된 여러 제한 사항이 있습니다.
{{% /alert %}}

데이터베이스에서 데이터를 검색할 수 있는 모든 곳에서 Builder를 사용할 수 있습니다. 예를 들어 Microflow의 [Retrieve object(s)](/refguide/retrieve-objects/) Activity 또는 Widget의 [Data Source](/refguide/database-source/)에서 사용할 수 있습니다. **(From) Database**를 선택하고 **XPath constraint** 옆의 **Edit…**를 클릭하면 제약 조건을 작성할 수 있는 대화 상자가 열립니다.

Builder와 XPath 표현식 편집기 사이를 전환하여 다양한 방식으로 볼 수 있습니다. 또한 [환경 설정](/refguide/preferences-dialog/#visual-builder)에서 Builder를 기본값으로 설정할 수도 있습니다.

#### XPath 제약 조건 구성하기

데이터베이스에서 검색하는 Entity가 이미 컨텍스트로 선택되어 있으며, 대화 상자에 **Select records of {entity}**로 표시됩니다.

그런 다음 **Where**로 시작하는 절이 표시되며, 여기서 세 부분으로 나뉘는 하나 이상의 조건을 입력할 수 있습니다:

1. Entity, Attribute 또는 Association.

    아래쪽 화살표(▼)를 클릭하고 옵션 목록에서 선택하십시오. 현재 컨텍스트에 맞고 XPath Constraints용 Visual Builder에서 지원하는 옵션만 표시됩니다.

2. 관계형 [연산자](/refguide/xpath-operators/) 또는 함수.

    아래쪽 화살표(▼)를 클릭하고 지원되는 옵션 목록에서 선택하십시오.

3. 조건.

    데이터를 필터링하는 데 사용하려는 값입니다. 이는 따옴표 없이 입력하는 문자열이거나 변수일 수 있습니다. 이 필드가 비어 있을 때 클릭하면 사용 가능한 변수 중에서 선택할 수 있습니다.

**Add rule**을 클릭하여 추가 규칙을 생성할 수 있습니다.

여러 규칙이 있는 경우 현재 선택 항목 옆의 아래쪽 화살표(▼)를 클릭하여 **And** 또는 **Or**로 결합할지 선택할 수 있습니다.

함께 적용해야 하는 규칙 그룹을 생성할 수 있습니다. **Add group**을 클릭하면 됩니다. 이렇게 하면 다음과 같은 규칙을 생성할 수 있습니다:

`[(Name = 'Thomson' and Sales.Customer_Address/Sales.Address/City = 'New York') or (Name = 'Thompson' and Sales.Customer_Address/Sales.Address/City = 'London')]`

{{< figure src="/attachments/refguide/modeling/xpath/xpath-constraints/thomson-and-thompson.png" class="no-border" >}}

각 규칙에 표시된 여섯 개의 점(**⋮⋮**)으로 나타나는 핸들을 사용하여 규칙의 순서를 변경하거나 한 그룹에서 다른 그룹으로 이동할 수 있습니다.

#### Builder 제한 사항 {#limitations}

XPath Constraints용 Visual Builder는 임의로 복잡한 XPath 표현식을 만드는 데 사용할 수 없습니다. Builder에는 다음과 같은 제한 사항이 있습니다:

* 모든 함수를 지원하지 않습니다. 다음 관계형 연산자 및 함수를 지원합니다:

    * is
    * is not
    * contains
    * does not contain
    * starts with
    * ends with

* Entity의 `id` Attribute를 지원하지 않습니다
* `[Sales.Customer_Address/Sales.Address[City = 'New York' or City = 'London']]`와 같은 중첩 표현식을 지원하지 않습니다
* 기존 표현식이 변수로 시작하는 경우 Builder에서 표시할 수 없습니다(예: `[($CurrentAddress = Sales.Customer_Address)]`)—그러나 Builder에서 반대 방향으로 동일한 표현식을 작성할 수 있습니다(`[(Sales.Customer_Address = $CurrentAddress)]`는 Builder에서 작성하고 표시할 수 있습니다)

지원되지 않는 기능을 사용하려고 하면 경고가 표시되며 표현식 편집기에서 XPath 표현식을 편집하도록 선택할 수 있습니다.

{{< figure src="/attachments/refguide/modeling/xpath/xpath-constraints/advanced-features.png" >}}

### XPath 표현식 작성하기

모든 버전의 Mendix에서 아래에 설명된 구문을 사용하여 XPath 제약 조건을 작성할 수 있습니다. XPath를 입력하면 올바른 Entity, Attribute, 변수 및 Association을 선택하는 데 도움이 되는 지원이 제공됩니다. 구문 오류가 있는지도 확인할 수 있습니다.

데이터베이스에서 데이터를 검색할 수 있는 모든 곳에서, 예를 들어 Microflow의 [Retrieve object(s)](/refguide/retrieve-objects/) Activity 또는 Widget의 [Data Source](/refguide/database-source/)에서, **(From) Database**를 선택하면 항상 **Edit…**를 클릭하여 제약 조건을 입력할 수 있는 대화 상자를 열어 **XPath constraint**를 추가할 수 있는 옵션이 있습니다.

{{< figure src="/attachments/refguide/modeling/xpath/xpath-constraints/from-database-xpath-10-5.png" class="no-border" >}}

**XPath expression** 옵션을 선택하여 제약 조건을 입력할 수 있습니다.

{{< figure src="/attachments/refguide/modeling/xpath/xpath-constraints/xpath-expression-10-5.png" class="no-border" >}}

## Java에서의 제약 조건

Java에서 XPath 제약 조건을 적용하려면, [XPath](/refguide/xpath/)에 설명된 완전한 XPath 표현식을 사용해야 합니다. 여기에는 Entity 컨텍스트와 제약 조건 표현식, 그리고 (선택적으로) 집계 함수와 검색할 Attribute가 포함됩니다.

XPath는 [core.createXPathQuery](https://apidocs.rnd.mendix.com/11/runtime/com/mendix/core/Core.html#createXPathQuery(java.lang.String)) 호출에서 사용해야 합니다. 그런 다음 [XPathQueryBase.execute](https://apidocs.rnd.mendix.com/11/runtime/com/mendix/datastorage/XPathQueryBase.html#execute(com.mendix.systemwideinterfaces.core.IContext))를 호출하면 제공한 XPath를 사용하여 필터링된 객체 목록이 반환됩니다.

예를 들어, Jansen이라는 이름의 모든 고객을 검색하려면:

```java
public List<IMendixObject> getCustomersNameJansen(IContext context, ICore core, int value) {
    List<IMendixObject> results = core.createXPathQuery("//Sales.Customer[Name='Jansen']")
        .execute(context);
    return results;
}
```

## 단순 제약 조건

다음 예제는 Studio Pro에서 XPath 쿼리를 수행하는 방법을 보여줍니다. **Entity** `Sales.Customer`를 **Select**하고 XPath 제약 조건 `[Name='Jansen']`을 작성합니다:

{{< figure src="/attachments/refguide/modeling/xpath/xpath-constraints/XPath-constraint-example.png" alt="XPath constraint example in Studio Pro" width="400px" class="no-border" >}}

## 다중 제약 조건

객체의 `id`(고유 식별자)에 대해 쿼리하는 경우를 제외하고, 단일 쿼리에 여러 제약 조건을 추가할 수 있습니다.

다중 제약 조건의 일부로 `id`에 대해 쿼리해야 하는 경우(예: `[id = $currentuser]`), [제약 조건 1 `and` 제약 조건 2](#and) 섹션에 표시된 첫 번째 형식을 사용하여 `and` 제약 조건을 생성할 수 있습니다: `[id = …][{additional constraint}]`.

### 제약 조건 1 `and` 제약 조건 2{#and}

검색되는 객체에 두 제약 조건이 모두 적용되도록 결합하는 두 가지 방법이 있습니다.

이 쿼리는 이름이 Jansen이고 Rotterdam에 거주하는 모든 고객을 검색합니다:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [Name='Jansen'][Sales.Customer_Address/Sales.Address/City = 'Rotterdam']
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.Customer[Name = 'Jansen'][Sales.Customer_Address/Sales.Address/City = 'Rotterdam']
    {{% /tab %}}
{{< /tabpane >}}

`and` [연산자](/refguide/xpath-operators/)로 제약 조건을 결합할 수도 있습니다. 이 쿼리는 이름이 Jansen이고 Rotterdam에 거주하는 모든 고객을 검색합니다:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [Name = 'Jansen' and Sales.Customer_Address/Sales.Address/City = 'Rotterdam']
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.Customer[Name = 'Jansen' and Sales.Customer_Address/Sales.Address/City = 'Rotterdam']
    {{% /tab %}}
{{< /tabpane >}}

### 제약 조건 1 `or` 제약 조건 2

`or` 연산자도 사용할 수 있습니다. 이 쿼리는 이름이 Jansen이거나 Rotterdam에 거주하는 모든 고객을 검색합니다.

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [Name = 'Jansen' or Sales.Customer_Address/Sales.Address/City = 'Rotterdam']
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.Customer[Name = 'Jansen' or Sales.Customer_Address/Sales.Address/City = 'Rotterdam']
    {{% /tab %}}
{{< /tabpane >}}

### 제약 조건 우선순위 지정

괄호를 사용하여 제약 조건을 그룹화하여 우선순위를 정의할 수 있습니다. 이 쿼리는 이름이 "Jansen" 또는 "Smit"이면서 Rotterdam에 거주하는 모든 고객을 검색합니다:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [( Name = 'Jansen' or Name = 'Smit' ) and Sales.Customer_Address/Sales.Address/City = 'Rotterdam']
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.Customer[( Name = 'Jansen' or Name = 'Smit' ) and Sales.Customer_Address/Sales.Address/City = 'Rotterdam']
    {{% /tab %}}
{{< /tabpane >}}

### 하위 제약 조건

경우에 따라 제약되는 데이터를 제한하기 위해 하위 제약 조건을 정의하는 것이 유용할 수 있습니다. 이는 원래 제약 조건의 대괄호 안에 하위 제약 조건을 추가하면 쉽게 달성할 수 있습니다. 하위 제약 조건은 실제 쿼리가 아닌 메타 제약 조건에만 적용되므로 두 개의 별도 제약 조건과 혼동하지 마십시오. 따라서 대괄호가 하나씩 열리고 닫히는 것이 아니라, 하위 제약 조건이 메타 제약 조건 내에 완전히 포함되어야 합니다. 충분히 복잡한 쿼리에서는 하나의 제약 조건이 끝나고 다른 제약 조건이 시작되는 곳에 대한 혼란이 발생할 수 있습니다. 이를 방지하기 위해 대괄호 세트를 주의 깊게 추적하십시오.

이 쿼리는 Administrator 역할을 가진 모든 사용자를 검색합니다:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [System.UserRoles/System.UserRole[id = '[%UserRole_Administrator%]']]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.User[System.UserRoles/System.UserRole[id = '[%UserRole_Administrator%]']]
    {{% /tab %}}
{{< /tabpane >}}

이 쿼리는 Rotterdam 또는 Losdun에 거주하는 모든 고객을 검색합니다:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [Sales.Customer_Address/Sales.Address[City = 'Rotterdam' or City = 'Losdun']]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.Customer[Sales.Customer_Address/Sales.Address[City = 'Rotterdam' or City = 'Losdun']]
    {{% /tab %}}
{{< /tabpane >}}

이 쿼리는 가이아나의 New Amsterdam에 거주하는 모든 고객을 검색합니다(예를 들어 인디아나의 New Amsterdam에 거주하는 고객과 구별):

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [Sales.Customer_Address/Sales.Address[City = 'New Amsterdam']/Sales.Address_Country/Sales.Country/Name = 'Guyana']
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.Customer[Sales.Customer_Address/Sales.Address[City = 'New Amsterdam']/Sales.Address_Country/Sales.Country/Name = 'Guyana']
    {{% /tab %}}
{{< /tabpane >}}

### 경로 결합

단일 제약 조건에서 동일한 경로를 두 번 이상 사용하는 것을 피하십시오. 예를 들어, Rotterdam과 Losdun에 대한 예제는 다음과 같이도 작성할 수 있습니다:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [Sales.Customer_Address/Sales.Address/City = 'Rotterdam' or Sales.Customer_Address/Sales.Address/City = 'Losdun']
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.Customer[Sales.Customer_Address/Sales.Address/City = 'Rotterdam' or Sales.Customer_Address/Sales.Address/City = 'Losdun']
    {{% /tab %}}
{{< /tabpane >}}

그러나 이 쿼리는 비효율적으로 실행되며 쿼리 프로세스를 상당히 느리게 합니다.
