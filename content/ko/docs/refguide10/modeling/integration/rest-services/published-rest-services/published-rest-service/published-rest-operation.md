---
title: "Published REST Operation"
url: /refguide10/published-rest-operation/
weight: 10
description: "Published REST 오퍼레이션을 구성하는 옵션입니다."
# If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
# linked from DM: published rest > select resource > add operation for resource > help (integration)
---

## 소개

Published REST Operation은 [Published REST Resource](/refguide10/published-rest-resource/)의 일부이며, 클라이언트가 리소스에서 항목을 `GET`, `PUT`, `POST`, `PATCH` 또는 `DELETE`하기 위해 호출할 수 있는 엔드포인트를 정의합니다.

**Published REST Service** 문서에서 서비스에 포함할 항목을 **Resources**로 추가할 수 있습니다:

{{< figure src="/attachments/refguide10/modeling/integration/rest-services/published-rest-operation/publshed-rest-service.png" alt="Published REST Service" class="no-border" >}}

## 오퍼레이션 정의

리소스를 **Add** 또는 **Edit**할 때 선택한 항목에 대해 **Operation** 정의 대화 상자에서 리소스를 다음과 같이 정의할 수 있습니다:

{{< figure src="/attachments/refguide10/modeling/integration/rest-services/published-rest-operation/operation-definition.png" alt="REST Operation" class="no-border" >}}

### 일반

**General** 탭에서 이 섹션에 설명된 대로 오퍼레이션 세부 정보를 입력할 수 있습니다.

#### Method

Method는 Microflow가 수행하는 오퍼레이션 유형을 지정합니다. 드롭다운 메뉴에서 다음 중 하나를 선택할 수 있습니다:

* **GET** – 지정된 위치의 항목을 검색합니다
* **PUT** – 지정된 위치의 항목을 대체하거나, 존재하지 않는 경우 생성합니다
* **POST** – 지정된 위치의 컬렉션에 항목을 생성합니다
* **PATCH** – 지정된 위치의 항목을 (부분적으로) 업데이트합니다
* **DELETE** – 지정된 위치의 항목을 삭제합니다
* **HEAD** – 지정된 위치의 항목에 대한 정보를 검색합니다; 이는 **GET**과 동일하지만 메시지 본문이 반환되지 않습니다
* **OPTIONS** – 사용 가능한 통신 옵션에 대한 정보를 반환합니다

#### 오퍼레이션 경로{#operation-path}

오퍼레이션에 접근할 수 있는 위치는 리소스의 URL로 시작하며, **Operation path**는 오퍼레이션의 나머지 경로를 지정합니다. 리소스의 위치를 사용하려면 비워둘 수 있습니다.

[경로 매개변수](/refguide10/published-rest-path-parameters/)를 사용하여 위치의 일부를 Microflow 매개변수 또는 Import Mapping의 매개변수로 캡처할 수 있습니다. 오퍼레이션 경로에서 `{`와 `}` 사이에 경로 매개변수를 지정하세요. 경로 매개변수에 해당하는 URL의 값이 Microflow 또는 Import Mapping에 전달됩니다.

**Method**와 **Operation path**는 [Published Rest 라우팅](/refguide10/published-rest-routing/)에 설명된 대로 주어진 요청 URL에 대해 실행되는 오퍼레이션을 정의합니다.

#### 예제 위치{#example-location}

**Example Location**은 오퍼레이션에 접근할 수 있는 URL의 예를 제공합니다.

#### Microflow {#microflow}

오퍼레이션에는 다음 매개변수가 있을 수 있습니다:

* [쿼리 매개변수](/refguide10/published-rest-query-parameters/), `?name1=value1&name2=value2` 형식으로 URL 끝에 위치합니다

    {{% alert color="info" %}}Microflow 매개변수가 경로에 없고 객체가 아닌 경우 쿼리 매개변수로 간주됩니다.{{% /alert %}}

* [경로 매개변수](/refguide10/published-rest-path-parameters/), URL 경로의 일부를 구성합니다
* 본문 매개변수 (선택 사항), 오퍼레이션에 대한 요청 본문에 있습니다

    {{% alert color="info" %}}`GET`, `HEAD`, `DELETE` 오퍼레이션에는 본문 매개변수가 없습니다.{{% /alert %}}

* 헤더 매개변수, 요청의 HTTP 헤더에서 옵니다
* 폼 매개변수 (선택 사항), multipart form 요청의 본문 일부입니다

오퍼레이션의 Microflow는 이러한 오퍼레이션 매개변수를 입력으로 받습니다.

List 또는 Object 유형의 Microflow 매개변수는 본문 매개변수를 나타냅니다. 수신 JSON 또는 XML을 변환하기 위해 Import Mapping을 지정할 수 있습니다. FileDocument 유형(또는 FileDocument에서 상속하는) 매개변수는 특별합니다; 폼 매개변수에도 사용할 수 있으며, Import Mapping이 필요하지 않습니다.

오퍼레이션 Microflow는 [HttpRequest](/refguide10/http-request-and-response-entities/#http-request) 매개변수도 사용할 수 있습니다. 요청된 URL과 헤더를 검사하려면 이 매개변수를 추가할 수 있습니다.

상태 코드와 헤더를 설정하려면 [HttpResponse](/refguide10/http-request-and-response-entities/#http-response) 객체 매개변수를 추가하고 해당 객체의 속성을 설정하거나 `HttpResponse`를 반환하세요. `HttpResponse` 객체에 사용자 정의 이유 구문을 설정하는 것은 [효과가 없습니다](/refguide10/http-request-and-response-entities/#reason-phrase).

Microflow의 결과는 오퍼레이션의 결과이며 다음을 포함할 수 있습니다:

1. **파일 문서 반환** – 파일 스트림(예: PDF 또는 이미지)을 반환하려면 Microflow가 파일 문서를 반환하도록 하세요. 여기서 특히 관련 있는 HTTP 응답 헤더는 다음과 같습니다:
   a. [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) 헤더를 사용하여 파일의 MIME 유형을 지정합니다.
   b. [Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) 헤더를 사용하여 파일 이름을 지정하고 파일을 첨부 파일로 다운로드해야 하는지 여부를 나타냅니다.
   c. 추가 HTTP 응답 헤더를 사용하여 파일에 대한 기타 정보를 전달합니다.
   자세한 내용은 *REST로 이미지 및 파일 게시 및 사용*의 [MIME 유형 설정](/refguide10/send-receive-files-rest/#set-mime-type) 섹션을 참조하세요.

2. **객체 목록 반환** – XML 또는 JSON으로 변환할 Export Mapping을 지정합니다.

3. **기본 값 반환** – Microflow가 값(예: 문자열, 정수 또는 부울)을 반환하면 오퍼레이션의 응답은 해당 값이 됩니다.
    {{% alert color="info" %}}Microflow가 비어 있지 않은 값을 반환하면 `HttpResponse` 객체의 Content 속성은 무시됩니다. Microflow가 빈 값을 반환하면 `HttpResponse`의 Content가 결과로 사용됩니다.{{% /alert %}}

4. **[HttpResponse](/refguide10/http-request-and-response-entities/#http-response) 반환** – `HttpResponse`에서 상태 코드와 내용(문자열)을 설정할 수 있습니다. 예를 들어, 매핑 결과나 다른 소스의 문자열로 내용을 채울 수 있습니다. 응답에 헤더를 추가할 수도 있습니다.
    {{% alert color="info" %}}설정해야 할 중요한 헤더 중 하나는 **Content-Type**입니다. 빈 `HttpResponse`를 반환하면 항상 오류가 발생하므로 반환하지 마세요.{{% /alert %}}

Microflow가 처리되지 않은 예외를 발생시키면 응답은 **500: Internal server error**입니다.

보안이 활성화된 경우, Microflow에는 접근 가능하도록 최소 하나의 역할이 구성되어야 합니다.

#### Deprecated

서비스의 OpenApi (Swagger) 문서 페이지에서 [Published REST services](/refguide10/published-rest-services/)의 [문서화](/refguide10/published-rest-services/#interactive-documentation) 섹션에 설명된 대로 오퍼레이션을 더 이상 사용되지 않음(deprecated)으로 표시하려면 이 상자를 선택하세요. 이렇게 하면 클라이언트에게 더 이상 사용하지 말라고 알립니다.

#### 매개변수

[Published REST의 오퍼레이션 매개변수](/refguide10/published-rest-operation-parameter/)에 설명된 대로 오퍼레이션의 매개변수를 **Add**, **Update** 또는 **Delete**할 수 있습니다.

##### Import Mapping {#import-mapping}

본문 매개변수의 경우, 요청 본문을 객체로 변환하는 [Import Mapping](/refguide10/import-mappings/)을 선택할 수 있습니다. 파일 문서를 제외한 모든 객체 및 목록 매개변수에는 Import Mapping이 선택되어야 합니다.

Import Mapping을 선택하려면 매개변수를 더블 클릭하거나 매개변수를 선택한 후 그리드에서 **Edit**를 클릭하세요. Import Mapping을 선택할 때 매핑의 커밋 동작도 선택할 수 있습니다: 커밋, 이벤트 없이 커밋, 또는 가져온 객체를 커밋하지 않도록 선택할 수 있습니다.

매개변수를 사용하지 않는 Import Mapping 또는 기본 매개변수(예: 문자열 또는 정수)를 사용하는 Import Mapping을 선택할 수 있습니다. 기본 매개변수가 있는 Import Mapping을 선택하는 경우, 동일한 유형의 [경로 매개변수](/refguide10/published-rest-path-parameters/)가 정확히 하나 있어야 합니다. 해당 경로 매개변수가 Import Mapping에 전달됩니다.

Import Mapping에서 **Decide this at the place where the mapping gets used** 상자를 선택한 경우 **If no object was found** 시 수행할 작업을 지정할 수 있습니다.

XML과 JSON을 모두 지원하는 Import Mapping(예: Message Definition 기반 매핑)을 선택하면 오퍼레이션이 XML 및 JSON 요청을 모두 처리할 수 있습니다.

유효한 요청에는 Content-Type 헤더가 포함되어야 합니다. Import Mapping이 이해하는 미디어 유형 목록은 [인식되는 미디어 유형](#table1)을 참조하세요. 지원되지 않는 콘텐츠 유형을 사용하면 오퍼레이션은 **400 Bad Request** 응답을 반환합니다.

Import Mapping은 [JSON Schema](/refguide10/published-rest-service-json-schema/) 기반으로 [OpenAPI (Swagger) 문서 페이지](/refguide10/published-rest-services/#interactive-documentation)에서 오퍼레이션 응답에 대한 객체 스키마를 생성하는 데에도 사용됩니다.

#### 응답

오퍼레이션의 응답을 정의합니다. Microflow 결과의 유형과 적용되는 Export Mapping(있는 경우)을 지정할 수 있습니다.

##### 유형

Microflow의 결과 유형을 표시합니다.

##### Export Mapping {#export-mapping}

Microflow가 객체 또는 객체 목록을 반환하는 경우, 이 결과를 JSON 또는 XML로 매핑하는 방법을 지정해야 합니다. Microflow의 결과를 입력으로 사용하는 Export Mapping을 선택하세요.

XML과 JSON을 모두 지원하는 Export Mapping(예: Message Definition 기반 매핑)을 선택하면 출력은 Microflow에 `System.HttpResponse` 유형의 매개변수가 있고 Content-Type 헤더를 추가하는지 여부에 따라 달라집니다. 가능한 시나리오는 다음과 같습니다:

* Microflow가 아래 표와 같이 XML인 미디어 유형으로 Content-Type 헤더 매개변수를 설정하면 오퍼레이션은 XML을 반환합니다.

    <a id="table1">**인식되는 미디어 유형**</a>

    | 미디어 유형                    | 인식 결과 |
    | ---                          | --- |
    | *application/xml*            | XML |
    | *text/xml*                   | XML |
    | *+xml*로 끝나는 모든 것        | XML |
    | *application/json*           | JSON |
    | *+json*으로 끝나는 모든 것      | JSON |

* Microflow가 Content-Type 헤더를 다른 것으로 설정하면 오퍼레이션은 JSON을 반환합니다.

* Microflow가 Content-Type 헤더를 설정하지 않으면 요청의 Accept 헤더를 검사하여 출력이 결정됩니다. XML 또는 JSON으로 인식되는 첫 번째 미디어 유형(위 표에 제시된 대로)이 오퍼레이션 결과를 결정합니다: Content-Type은 (XML인 경우) *application/xml* 또는 (JSON인 경우) *application/json*입니다.

* Accept 헤더가 없거나 Accept 헤더에 인식 가능한 미디어 유형이 포함되어 있지 않으면 오퍼레이션은 JSON을 반환하고 Content-Type은 *application/json*입니다.

Export Mapping은 [JSON schema](/refguide10/published-rest-service-json-schema/) 기반으로 [OpenAPI (Swagger) 문서 페이지](/refguide10/published-rest-services/#interactive-documentation)에서 오퍼레이션 응답에 대한 객체 스키마를 생성하는 데에도 사용됩니다.

### 공개 문서

**Public Documentation** 탭에서 서비스의 [OpenAPI (Swagger) 문서 페이지](/refguide10/published-rest-services/#interactive-documentation)에서 사용될 문서를 지정할 수 있습니다.

#### 요약 {#summary}

오퍼레이션이 수행하는 작업에 대한 간략한 설명을 제공하세요.

#### 설명 {#description}

오퍼레이션이 수행하는 작업에 대한 전체 개요를 입력하세요. 텍스트 스타일을 지정하기 위해 [GitHub-flavored markdown](/refguide10/gfm-syntax/) 구문을 사용할 수 있습니다.
