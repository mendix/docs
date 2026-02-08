---
title: "숏코드, Markdown 및 HTML 예제"
url: /community-tools/md-shortcode-examples/
draft: true
description: "Markdown 및 숏코드에 대한 다양한 테스트 케이스와 예제입니다. 이 페이지를 사용하여 다양한 숏코드, Markdown 및 HTML 요소가 어떻게 렌더링되는지 확인하세요."
linktitle: "숏코드, Markdown 및 HTML"
---
<!-- markdownlint-disable-file -->

## 소개

이 페이지는 문서에서 사용되는 숏코드, Markdown 및 HTML의 예제를 제공합니다. 소스 코드를 보려면 [Markdown 파일](https://github.com/mendix/docs/blob/development/content/en/docs/community-tools/contribute-to-mendix-docs/markdown-shortcodes.md)을 확인하거나, [https://docs-development.mendix.com](https://docs-development.mendix.com/community-tools/md-shortcode-examples/)(또는 로컬 빌드를 통해)에서 렌더링된 페이지를 확인하세요.

이 페이지는 [Shortcodes, Markdown, and HTML](https://mendix.atlassian.net/wiki/x/PYASow) Confluence 페이지에 설명된 기술 가이드라인과 구문을 시각화합니다.

## 숏코드

### 알림

{{% alert color="info" %}}
대부분의 알림은 이것과 같은 정보 알림이거나 경고 알림입니다. 필요한 경우 위험 알림이나 성공 알림을 만들 수도 있습니다.

알림은 한 줄 이상을 차지할 수 있습니다. 두 번째 문단을 추가하려면 첫 번째 문단과 두 번째 문단 사이에 빈 줄을 포함해야 합니다.
{{% /alert %}}

{{% alert color="warning" %}}
이것은 경고 알림입니다.
{{% /alert %}}

#### 알림 들여쓰기

목록에 알림을 추가하고 목록 항목의 들여쓰기에 맞추려면 다음과 같이 목록 항목과 알림 사이의 빈 줄을 생략하세요:

1. 첫 번째 목록 항목
{{% alert color="info" %}}
이 알림은 첫 번째 목록 항목에 맞춰 들여쓰기됩니다.
{{% /alert %}}
2. 두 번째 목록 항목
    * 하위 목록 항목
{{% alert color="info" %}}
이 알림은 하위 목록 항목에 맞춰 들여쓰기됩니다.
{{% /alert %}}

    {{% alert color="warning" %}}
    이렇게 4칸 공백을 추가하여 알림을 들여쓰기하려고 하지 마세요. 텍스트 서식이 엉망이 되고 올바르게 렌더링되지 않습니다. 위에 설명된 들여쓰기 방법만 사용하세요.
    {{% /alert %}}

### 버튼

{{% button color="info" href="https://marketplace.mendix.com/link/studiopro/" text="Go to Marketplace" title="Download Studio Pro from the Marketplace" %}}

### 코드 블록 {#code-blocks}

#### JSON 코드 블록

```json
{
     "Status" :  "Stopped",
     "EnvironmentId" :  "cd5fc610-edb0-43c5-a374-0439a6411ace",
     "Mode" :  "Acceptance",
     "Url" :  "https://calc-accp.mendixcloud.com",
     "ModelVersion" :  "1.1.0.253",
     "MendixVersion" :  "6.10.10",
     "Production" :  false
}
```

#### OQL 코드 블록

```sql
ALTER DATABASE [YourDatabase] SET READ_COMMITTED_SNAPSHOT ON;
CREATE ASSEMBLY [Mendix.SqlServerExtensions] FROM [a dll file] WITH PERMISSION_SET = SAFE;
```

#### 1번 줄과 4-6번 줄이 강조된 Java 코드 블록

```java {hl_lines=[1,"4-6"]}
@java.lang.Override
public java.lang.String executeAction() throws Exception
{
    // BEGIN USER CODE
    throw new com.mendix.systemwideinterfaces.MendixRuntimeException("Java action was not implemented");
    // END USER CODE
}
```

#### Diff 코드 블록

```diff
public class Hello1
{
   public static void Main()
   {
-      System.Console.WriteLine("Hello, World!");
+      System.Console.WriteLine("Rock all night long!");
   }
}
```

#### 목록에서 들여쓰기된 코드 블록

1. 첫 번째 목록 항목

    ```text
    Code block indented four spaces
    ```

2. 두 번째 목록 항목

### 이미지 (Figures)

#### Alt 텍스트와 Max-Width 클래스가 있는 이미지

{{< figure src="/attachments/community-tools/markdown-shortcodes/clear-environment.png"
    alt="Clear Environment options and confirmation"
    max-width=60% >}}

#### 이미지 테두리

##### 클래스 없음

이미지에 테두리가 자동으로 추가됩니다.

{{< figure src="/attachments/community-tools/markdown-shortcodes/half-bordered.png" >}}

##### class="no-border"

이미지 테두리가 억제됩니다. 예를 들어, 어두운 배경을 가진 이미지나 UX에서 이미 테두리가 있는 이미지에 사용할 수 있습니다.

{{< figure src="/attachments/community-tools/markdown-shortcodes/half-bordered.png" class="no-border" >}}

{{< figure src="/attachments/community-tools/markdown-shortcodes/navigation-menu.png" alt="" max-width=35% class="no-border" >}}

#### 링크 값이 있는 이미지

{{< figure src="/attachments/community-tools/markdown-shortcodes/parameter.png" alt="" link="/refguide/parameter/" class="no-border" >}}

#### 목록에서 들여쓰기된 이미지

1. 모듈을 마우스 오른쪽 버튼으로 클릭하고 **Add** > **Microflow**를 선택하여 새 마이크로플로우(Microflow)를 만드세요.
2. **Add Microflow** 대화 상자의 **Name** 필드에 *IVK_SetOrderToComplete*를 입력한 다음 **OK**를 클릭하세요.
3. **Orders** 개요 페이지에서 도구 모음에 **Action** 버튼을 추가하세요.

    {{< figure src="/attachments/community-tools/markdown-shortcodes/18581118.png" alt="Adding the Action button" class="no-border" >}}

4. **Action** 버튼을 더블 클릭하고 **Caption**을 *Set Processing to Complete*로 변경하세요.

### 아이콘

아이콘은 색상 매개 변수가 지정되지 않는 한 주변 텍스트의 색상과 일치합니다:

* **Global Navigation** 메뉴({{< icon name="layout-rounded-1-filled" >}})로 이동하세요.
* 제거하려면 **Delete**({{< icon name="trash-can" color="red" >}})를 클릭하세요.
* **Settings**({{< icon name="cog" >}})를 클릭하여 환경 설정을 구성하세요.

### 탭 창

탭 창을 사용하면 하나 이상의 탭이 있는 코드 블록을 만들 수 있으며 각 탭에 다른 프로그래밍 언어를 지정할 수 있습니다.

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [contains(Name, 'an')]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.Customer[contains(Name, 'an')]
    {{% /tab %}}
{{< /tabpane >}}

#### 별표가 포함된 탭 창

탭 창에 별표(`*`)가 포함된 코드가 있는 경우, 굵은 텍스트에 대한 린터 규칙이 코드 블록으로 인식하지 못하여 서식을 변경할 수 있습니다. 린터가 탭 창에서 작동하지 않도록 하려면 다음과 같이 탭 창 주위에 `markdownlint-disable no-space-in-emphasis`와 `markdownlint-enable no-space-in-emphasis`를 댓글로 추가하세요:

[//]: # (<!-- markdownlint-disable no-space-in-emphasis -->)

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [DateRegistered > '[%BeginOfCurrentDay%] - 3 * [%YearLength%]']
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
    //Sales.Customer[DateRegistered > '[%BeginOfCurrentDay%] - 3 * [%YearLength%]']
    {{% /tab %}}
{{< /tabpane >}}

[//]: # (<!-- markdownlint-enable no-space-in-emphasis -->)

### 비디오

Mendix 비디오는 Vidyard에 호스팅됩니다. 자세한 내용은 [the Videos section of the Style Guide](https://mendix.atlassian.net/wiki/spaces/RNDHB/pages/2510061889/Images+Icons+and+Videos#Videos)를 참조하세요.

{{< vidyard "GwE17mzGma5NAvDnXrVdFA" >}}

## 기타 Markdown 및 HTML 가이드라인

### 빈 줄

새 문단을 만들려면 <kbd>Enter</kbd>를 두 번 눌러 텍스트 줄 사이에 빈 줄을 추가하세요.

인접한 줄(사이에 빈 줄이 없는 줄)은 사이트에서 동일한 문단으로 렌더링됩니다.
예를 들어, 이 문장은 Markdown 파일에서 다른 줄에 있지만 이전 문장과 같은 문단의 일부로 렌더링됩니다.

### 굵게 및 기울임

**굵게** 표시되어야 하는 텍스트를 두 개의 별표로 감싸고, *기울임*으로 표시되어야 하는 텍스트를 한 개의 별표로 감싸세요.

### 접을 수 있는 콘텐츠 (Details)

접을 수 있는 콘텐츠의 경우 HTML `<details>` 및 `<summary>` 태그를 사용하세요:

<details><summary>예약어가 될 수 없습니다 (예약어 목록을 보려면 클릭)</summary>

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

### 각주

각주의 경우 유니코드 위 첨자 문자(¹²³ 등)와 `<small>` 태그를 사용하세요:

| Mendix 데이터 타입 | Edm 타입 | 속성 값 | Atom XML 표현 |
| --- | --- | --- | --- |
| ID ¹| Edm.Int64 | 3940649673954387 | 3940649673954387 |
| Autonumber | Edm.Int64 | 1 | 1 |
| Binary (지원되지 않음) |   |   |   |
| Boolean | Edm.Boolean | true | true |
| Date and time | Edm.DateTimeOffset | Fri, 19 Dec 2014 10:27:27 GMT | 2014-12-19T10:27:27.000Z |
| Enumeration | Enumeration (OData v4) or Edm.String (OData v3) | Color.Blue | Blue |
| Big decimal  | Edm.Decimal | 0.3333333333333333333333333333333333 | 0.3333333333333333333333333333333333 |
| Hashed string | Edm.String | HashPassword | HashPassword |
| Integer  | Edm.Int64 | 50 | 50 |
| Long ¹ | Edm.Int64 | 3940649673954387 | 3940649673954387 |
| String | Edm.String | John | John |

<small>¹ Excel을 사용하여 OData 소스를 가져올 때 긴 숫자가 잘린 것처럼 보일 수 있습니다. 이는 Microsoft에서 사용하는 데이터 타입의 제한 때문입니다. 자세한 내용은 [Last digits are changed to zeroes when you type long numbers in cells of Excel](https://support.microsoft.com/en-us/kb/269370)을 참조하세요.</small>

### 인라인 코드

문장에 통합된 인라인 코드의 경우 백틱(`` ` ``)을 사용하여 코드를 감싸세요: `cacheBust`. 여기에서 보여지듯이, 코드 스니펫 내에서 백틱을 렌더링해야 하는 경우 이중 백틱을 사용할 수 있습니다.

문장의 일부가 아니거나 여러 줄에 걸치는 코드 스니펫의 경우 대신 [코드 블록](#code-blocks)을 사용하세요.

### 키보드 키

키보드 키를 참조하려면 HTML `<kbd>` 태그를 사용하세요:

* <kbd>Enter</kbd>를 눌러 강조 표시된 항목을 선택하세요.
* 명령줄 도구에서 <kbd>Ctrl</kbd> + <kbd>C</kbd>를 눌러 로그 캡처를 중지하세요.

### 링크

#### 내부 링크 {#internal-links}

내부 링크(Docs 사이트의 다른 곳)에 연결하려면 다음과 같이 구조화된 상대 URL을 사용하세요: 모듈 내에서 모듈 역할을 통해 [모듈 보안](/refguide/module-security/)을 정의하고 페이지, 마이크로플로우(Microflow), 엔티티(Entity) 및 데이터셋에 대한 해당 모듈 역할의 보안 설정을 지정할 수 있습니다.

##### 앵커

문서의 특정 섹션에 대한 교차 참조를 추가하려면 제목 뒤에 중괄호(`{}`)로 사용자 지정 앵커를 추가하세요.

같은 페이지에 있는 앵커에 연결하려면 다음과 같이 괄호 안의 URL 경로로 앵커를 포함하면 됩니다: [내부 링크](#internal-links)

또는 다른 페이지에 있는 경우 상대 URL 끝에 앵커를 포함하세요: 활성화하려는 서비스는 앱의 [기술 담당자](/developerportal/general/app-roles/#technical-contact)가 앱에 대해 활성화한 상태여야 합니다. 자세한 내용은 [Services](/developerportal/deploy/environments/#services)를 참조하세요.

#### 외부 링크

외부 링크의 경우 다음과 같이 절대 URL을 사용하세요: 일부 모듈은 기본적으로 앱의 일부이며, 다른 모듈은 [Mendix Marketplace](https://marketplace.mendix.com/)에서 다운로드하여 앱에 기능을 추가할 수 있습니다.

{{% alert color="info" %}}
가능하면 `http` 대신 `https`를 사용하세요. 이는 보안을 위한 모범 사례이며, 외부 링크 아이콘은 `https` 링크 뒤에만 삽입됩니다.
{{% /alert %}}

### 목록

#### 순서 없는 목록

이것은 순서 없는 목록(글머리 기호 목록이라고도 함)입니다:

* 컴포넌트를 제출하려면 다음 섹션을 작성해야 합니다:
    * 컴포넌트의 확장된 **Description**
    * 컴포넌트의 **Typical usage scenario**
    * 컴포넌트의 **Features and limitations**
* 다음 섹션은 선택 사항입니다:
    * 모든 **Dependencies**(예: 필요한 Studio Pro 버전, 모듈, 이미지 및 스타일)
    * **Installation** 단계 및 세부 정보

#### 순서 있는 목록

이것은 순서 있는 목록(번호 매기기 목록이라고도 함)입니다:

1. **App Explorer**에서 **Home_Web** 페이지를 여세요.
2. **Toolbox**에서 **Template Grid**를 페이지로 드래그하세요.
    1. **Data containers** 섹션을 열거나 이 컨테이너를 검색하여 찾을 수 있습니다.
3. Mendix에서 도메인 모델(Domain Model)의 데이터를 페이지 요소에 표시하려면 해당 요소가 컨텍스트 내에 있어야 합니다. 템플릿 그리드를 더블 클릭하여 속성을 여세요.

순서 있는 목록 항목의 번호를 증가시킬 필요가 없습니다(Markdown이 자동으로 처리합니다). 단, 첫 번째 목록 항목은 `1. `로 시작해야 합니다. 예를 들어, 이 목록의 Markdown은 네 개의 목록 항목 모두 `1. `로 시작합니다.

1. **App Explorer**에서 **Home_Web** 페이지를 여세요.
1. **Toolbox**에서 **Template Grid**를 페이지로 드래그하세요.
    1. **Data containers** 섹션을 열거나 이 컨테이너를 검색하여 찾을 수 있습니다.
1. Mendix에서 도메인 모델(Domain Model)의 데이터를 페이지 요소에 표시하려면 해당 요소가 컨텍스트 내에 있어야 합니다. 템플릿 그리드를 더블 클릭하여 속성을 여세요.

### 테이블

#### 테이블의 아이콘

테이블에서 상태 정보를 표시해야 하는 경우 아이콘이 단어보다 더 명확할 수 있습니다:

| 작업 | Portfolio Manager | Contributor | Viewer |
| --- | --- | --- | --- |
| 사용자 초대 | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="alert-triangle-filled" color="yellow" >}} | {{< icon name="remove-circle-filled" color="red" >}} |

#### 테이블의 목록

테이블에 목록을 포함하려면 `<ol><li>...</li></ol>` 또는 `<ul><li>...</li></ul>`을 사용하세요(순서 있는 목록 또는 순서 없는 목록에 따라 다름). `<ol>` 또는 `<ul>` 태그 내에 필요한 만큼 목록 항목(`<li>...</li>`)을 중첩할 수 있습니다. 테이블 셀 내에서 다른 행을 시작하려면 `<br/>` 태그를 사용하세요.

| 매개 변수   | 값                                                        |
| ----------- | ------------------------------------------------------------ |
| DisplayName | 구성의 이름 식별자입니다(예: *MyConfiguration*). |
| API type    | `OpenAI`를 선택하세요.<br/>자세한 내용은 ENUM_ApiType 섹션을 참조하세요. |
| Endpoint    | API 엔드포인트입니다(예: `https://api.openai.com/v1`)   |
| API key     | API 호출을 승인하기 위한 접근 토큰입니다. <br />API를 받으려면 다음 단계를 따르세요:<ol><li>[OpenAI](https://platform.openai.com/)에서 계정을 만들고 로그인하세요.</li><li>[API key 페이지](https://platform.openai.com/account/api-keys)로 이동하여 새 비밀 키를 만드세요.</li><li>API 키를 복사하고 안전한 곳에 저장하세요.</li></ol> |
