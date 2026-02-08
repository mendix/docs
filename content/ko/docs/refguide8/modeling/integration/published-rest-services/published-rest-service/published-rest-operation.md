---
title: "Published REST Operation"
url: /refguide8/published-rest-operation/
weight: 10
description: "Published REST 작업을 구성하는 옵션"
# If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
# linked from DM: published rest > select resource > add operation for resource > help (integration)
---

## 소개

Published REST Operation은 [Published REST Resource](/refguide8/published-rest-resource/)의 일부이며 클라이언트가 리소스에서 항목을 GET, PUT, POST, PATCH 또는 DELETE하기 위해 호출할 수 있는 엔드포인트를 정의합니다.

**Published REST Service** 문서에서 서비스에 포함할 항목을 **Resources**로 추가할 수 있습니다:

{{< figure src="/attachments/refguide8/modeling/integration/published-rest-services/published-rest-service/published-rest-operation/publshed-rest-service.png" alt="Published REST Service" class="no-border" >}}

## 작업 정의

리소스를 **Add** 또는 **Edit**할 때 선택한 항목의 **Operation** 정의 대화 상자에서 다음과 같이 리소스를 정의할 수 있습니다:

{{< figure src="/attachments/refguide8/modeling/integration/published-rest-services/published-rest-service/published-rest-operation/operation-definition.png" alt="REST Operation" class="no-border" >}}

### General

**General** 탭에서 이 섹션에 설명된 대로 작업 세부 정보를 입력할 수 있습니다.

#### Method

Method는 Microflow에 의해 수행되는 작업 유형을 지정합니다. 드롭다운 메뉴에서 다음 중 하나를 선택할 수 있습니다:

* **GET** – 지정된 위치의 항목을 검색합니다.
* **PUT** – 지정된 위치의 항목을 교체하거나, 존재하지 않는 경우 생성합니다.
* **POST** – 지정된 위치의 컬렉션에 항목을 생성합니다.
* **PATCH** – 지정된 위치의 항목을 (부분적으로) 업데이트합니다.
* **DELETE** – 지정된 위치의 항목을 삭제합니다.
* **HEAD** - 지정된 위치의 항목에 대한 정보를 검색합니다. 이는 메시지 본문이 반환되지 않는다는 점을 제외하면 **GET**과 동일합니다.
* **OPTIONS** - 사용 가능한 통신 옵션에 대한 정보를 반환합니다.

#### Operation Path{#operation-path}

작업에 접근할 수 있는 위치는 리소스의 URL로 시작하며 **Operation path**는 작업의 나머지 경로를 지정합니다. 리소스의 위치를 사용하려면 비워 둘 수 있습니다.

[경로 매개변수](/refguide8/published-rest-path-parameters/)를 사용하여 위치의 일부를 Microflow 매개변수 또는 Import Mapping의 매개변수로 캡처할 수 있습니다. `{`와 `}` 사이의 작업 경로에 경로 매개변수를 지정하십시오. 경로 매개변수에 대한 URL의 값이 Microflow 또는 Import Mapping에 전달됩니다.

**Method**와 **Operation path**는 [Published REST Routing](/refguide8/published-rest-routing/)에 설명된 대로 주어진 요청 URL에 대해 실행되는 작업을 정의합니다.

#### Example Location{#example-location}

**Example Location**은 작업에 접근할 수 있는 URL의 예시를 제공합니다.

#### Microflow

작업에는 다음과 같은 매개변수가 있을 수 있습니다:

* [쿼리 매개변수](/refguide8/published-rest-query-parameters/), URL 끝에 `?name1=value1&name2=value2` 형식으로 있습니다.

    {{% alert color="info" %}}Microflow 매개변수가 경로에 없고 객체가 아닌 경우 쿼리 매개변수로 간주됩니다.{{% /alert %}}

* [경로 매개변수](/refguide8/published-rest-path-parameters/), URL 경로의 일부를 형성합니다.
* 본문 매개변수(선택 사항), 작업에 대한 요청 본문에 있습니다.

    {{% alert color="info" %}}**GET**, **HEAD** 및 **DELETE** 작업에는 본문 매개변수가 없습니다.{{% /alert %}}

* 헤더 매개변수, 요청의 HTTP 헤더에서 가져옵니다.
* 폼 매개변수(선택 사항), 멀티파트 폼 요청의 본문 일부입니다.

작업의 Microflow는 이러한 작업 매개변수를 입력으로 받습니다.

*List* 또는 *Object* 유형의 Microflow 매개변수는 본문 매개변수를 나타냅니다. 수신 JSON 또는 XML을 변환하기 위한 Import Mapping을 지정할 수 있습니다. *FileDocument* 유형(또는 *FileDocument*에서 상속하는 유형)의 매개변수는 특별합니다: 폼 매개변수에도 사용할 수 있으며 Import Mapping이 필요하지 않습니다.

작업 Microflow는 [HttpRequest](/refguide8/http-request-and-response-entities/#http-request) 매개변수도 받을 수 있습니다. 요청된 URL과 헤더를 검사하려면 이 매개변수를 추가할 수 있습니다.

상태 코드, 이유 구문 및 헤더를 설정하려면 [HttpResponse](/refguide8/http-request-and-response-entities/#http-response) 객체 매개변수를 추가하고 해당 객체의 속성을 설정하거나 *HttpResponse*를 반환하십시오.

Microflow의 결과는 작업의 결과이며 다음을 포함할 수 있습니다:

1. ***목록*** **또는** ***객체*** **반환** – XML 또는 JSON으로 변환하기 위한 Export Mapping을 지정해야 합니다.
2. **원시 값 반환** – Microflow가 문자열, 정수 또는 Boolean과 같은 값을 반환하면 작업에 대한 응답이 해당 값이 됩니다.

    {{% alert color="info" %}}Microflow에서 비어 있지 않은 값이 반환되면 *HttpResponse* 객체의 *Content* 속성은 무시됩니다.

    Microflow에서 빈 값이 반환되면 *HttpResponse*의 *Content*가 결과로 사용됩니다.{{% /alert %}}

3. **파일 문서 반환** – PDF 또는 이미지와 같은 파일 데이터를 반환하려는 경우 Microflow가 파일 문서를 반환합니다.
4. [HttpResponse](/refguide8/http-request-and-response-entities/#http-response) **반환** – *HttpResponse*에서 상태 코드, 이유 구문 및 콘텐츠(문자열)를 설정할 수 있습니다. 예를 들어 매핑 결과 또는 다른 소스의 문자열로 콘텐츠를 채울 수 있습니다. 응답에 헤더를 추가할 수도 있습니다.

    {{% alert color="info" %}}설정해야 할 중요한 헤더 중 하나는 *Content-Type*입니다. *빈* *HttpResponse*를 반환하지 마십시오. 항상 오류가 발생합니다.{{% /alert %}}

Microflow가 처리되지 않은 예외를 발생시키면 응답은 **500: Internal server error**입니다.

보안이 활성화된 경우 Microflow에 접근 가능하도록 하나 이상의 역할이 구성되어 있어야 합니다.

#### Deprecated

[Published REST Services](/refguide8/published-rest-services/)의 [문서](/refguide8/published-rest-services/#interactive-documentation) 섹션에 설명된 대로 서비스의 OpenApi (Swagger) 문서 페이지에서 작업을 더 이상 사용되지 않는 것으로 표시하려면 이 상자를 선택하십시오. 이는 클라이언트에 더 이상 사용하지 말 것을 알립니다.

#### Parameters

[Published REST의 작업 매개변수](/refguide8/published-rest-operation-parameter/)에 설명된 작업의 매개변수를 **Add**, **Update** 또는 **Delete**할 수 있습니다.

##### Import Mapping {#import-mapping}

본문 매개변수의 경우 요청 본문을 객체로 변환하는 [Import Mapping](/refguide8/import-mappings/)을 선택할 수 있습니다. 파일 문서를 제외한 모든 객체 및 목록 매개변수에는 Import Mapping이 선택되어 있어야 합니다.

Import Mapping을 선택하려면 매개변수를 더블 클릭하거나 매개변수를 선택한 후 그리드에서 **Edit**를 클릭하십시오. Import Mapping을 선택할 때 매핑의 커밋 동작도 선택할 수 있습니다: 커밋, 이벤트 없이 커밋 또는 가져온 객체를 커밋하지 않음 중에서 선택할 수 있습니다.

매개변수를 받지 않는 Import Mapping 또는 원시 매개변수(예: 문자열, 정수)를 받는 Import Mapping을 선택할 수 있습니다. 원시 매개변수가 있는 Import Mapping을 선택하는 경우 동일한 유형의 [경로 매개변수](/refguide8/published-rest-path-parameters/)가 정확히 하나 있어야 합니다. 해당 경로 매개변수가 Import Mapping에 전달됩니다.

Import Mapping에서 **decide this at the place where the mapping gets used** 상자를 선택한 경우 **객체를 찾지 못한 경우** 어떻게 할지 지정할 수 있습니다.

XML과 JSON을 모두 지원하는 Import Mapping(예: 메시지 정의 기반 매핑)을 선택하면 작업이 XML 및 JSON 요청을 모두 처리할 수 있습니다.

유효한 요청에는 *Content-Type* 헤더가 포함되어야 합니다. Import Mapping이 이해하는 미디어 유형 목록은 [인식된 미디어 유형](#table1)을 참조하십시오. 지원되지 않는 콘텐츠 유형을 사용하면 작업 결과는 "**400 Bad Request**" 응답이 됩니다.

Import Mapping은 [JSON Schema](/refguide8/published-rest-service-json-schema/) 기반의 [OpenAPI (Swagger) 문서 페이지](/refguide8/published-rest-services/#interactive-documentation)에서 작업 응답에 대한 객체 스키마를 생성하는 데에도 사용됩니다.

#### Response

작업의 응답을 정의합니다. Microflow 결과의 유형과 적용된 Export Mapping(있는 경우)을 지정할 수 있습니다.

##### Type

Microflow의 결과 유형을 표시합니다.

##### Export Mapping

Microflow가 객체 또는 객체 목록을 반환하는 경우 이 결과가 JSON 또는 XML로 매핑되는 방법을 지정해야 합니다. Microflow의 결과를 입력으로 받는 Export Mapping을 선택하십시오.

XML과 JSON을 모두 지원하는 Export Mapping(예: 메시지 정의 기반 매핑)을 선택하면 출력은 Microflow에 *System.HttpResponse* 유형의 매개변수가 있고 *Content-Type* 헤더를 추가하는지에 따라 달라집니다. 가능한 시나리오는 아래와 같습니다:

* Microflow가 XML인 미디어 유형으로 *Content-Type* 헤더 매개변수를 설정하면 작업은 아래 표에 제공된 대로 XML을 반환합니다.

    <a id="table1">**인식된 미디어 유형**</a>

    | 미디어 유형                   | 인식 결과 |
    | ---                          | --- |
    | *application/xml*            | XML |
    | *text/xml*                   | XML |
    | *+xml*로 끝나는 모든 것  | XML |
    | *application/json*           | JSON |
    | *+json*으로 끝나는 모든 것 | JSON |

* Microflow가 *Content-Type* 헤더를 다른 값으로 설정하면 작업은 JSON을 반환합니다.

* Microflow가 *Content-Type* 헤더를 설정하지 않으면 요청의 *Accept* 헤더를 검사하여 출력이 결정됩니다. XML 또는 JSON으로 인식되는 첫 번째 미디어 유형(위 표에 제공된 대로)이 작업 결과를 결정합니다: *Content-Type*은 *application/xml*(XML인 경우) 또는 *application/json*(JSON인 경우)입니다.

* *Accept* 헤더가 없거나 *Accept* 헤더에 인식 가능한 미디어 유형이 포함되어 있지 않으면 작업은 JSON을 반환하고 *Content-Type*은 *application/json*입니다.

Export Mapping은 [JSON Schema](/refguide8/published-rest-service-json-schema/) 기반의 [OpenAPI (Swagger) 문서 페이지](/refguide8/published-rest-services/#interactive-documentation)에서 작업 응답에 대한 객체 스키마를 생성하는 데에도 사용됩니다.

### Public Documentation

**Public Documentation** 탭에서 서비스의 [OpenAPI (Swagger) 문서 페이지](/refguide8/published-rest-services/#interactive-documentation)에 사용될 문서를 지정할 수 있습니다.

#### Summary {#summary}

작업이 수행하는 작업에 대한 짧은 설명을 제공하십시오.

#### Description {#description}

작업이 수행하는 작업에 대한 전체 개요를 입력하십시오. [GitHub-flavored Markdown](/refguide8/gfm-syntax/) 구문을 사용하여 텍스트를 스타일링할 수 있습니다.

## 예시

**Studio Pro 8에서 REST를 게시하는 방법**

{{< youtube Ff_P84NOcZk >}}
