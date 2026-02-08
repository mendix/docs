---
title: "Consumed REST Service"
url: /refguide10/consumed-rest-service/
description: "새로운 Consumed REST Service 문서의 구성 및 사용 방법을 설명합니다."
weight: 5
aliases:
    - /refguide10/consumed-rest-services-beta
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 소개

Consumed REST Service 문서를 사용하여 Mendix Studio Pro에서 REST 요청을 전송하세요. 이 기능을 통해 요청을 작성, 테스트하고 요청을 저장할 데이터 구조를 생성할 수 있습니다.

이 기능은 [Mendix Studio Pro 10.17](/releasenotes/studio-pro/10.17/) 이상에서 지원됩니다.

{{% alert color="info" %}}

Consumed REST Service 문서는 Windows 전용으로 정식 출시(GA)되었습니다. 이 기능은 macOS에서는 아직 베타 버전이며, 추후 정식 출시될 예정입니다.

{{% /alert %}}

### 사용 사례

Consumed REST Service 문서를 사용하여 다음을 수행할 수 있습니다:

* REST Service를 수동으로 또는 OpenAPI/Swagger 계약에서 사용(Consume)
* `GET`, `POST`, `PUT`, `PATCH`, `DELETE` 요청 구성
* Domain Model에 직접 Entity 생성
* Microflow를 통해 REST 요청 전송

{{% alert color="info" %}}
OpenAPI/Swagger 계약 가져오기 기능은 [Studio Pro 10.21](/releasenotes/studio-pro/10.21/)에서 베타 기능으로 도입되었습니다.
{{% /alert %}}

### 제한 사항

* 요청 응답을 사용하여 Domain Model에 데이터 구조를 자동으로 생성하려면 응답 데이터가 JSON 형식이어야 합니다. XML이나 원시 텍스트 등 다른 형식도 처리할 수 있지만, Microflow에서 필요한 데이터를 추출해야 합니다.
* 현재 Query Parameters 탭에서 매개변수를 구성할 수 없습니다.
* API의 스트리밍 응답은 현재 지원되지 않습니다.
* 응답은 상태 코드 `200`인 응답에 대해서만 Microflow에서 매핑할 수 있습니다. Send REST request 액션이 Microflow에서 실행되고 상태 코드가 2xx 범위이지만 `200`이 아닌 경우, latestHttpResponse를 사용하여 상태 코드와 응답 내용을 가져오세요.

### 전제 조건

* [Studio Pro 10.17](/releasenotes/studio-pro/10.17/) 이상
* [HTTP 요청 메서드](https://www.w3schools.com/tags/ref_httpmethods.asp)에 대한 이해

## Consumed REST Service 문서 추가하기 {#installation}

[Studio Pro](https://marketplace.mendix.com/link/studiopro/)를 다운로드하고 앱에 Consumed REST Service 문서를 추가하세요. 이를 위해 다음 단계를 따르세요:

1. Consumed REST Service 문서를 추가할 모듈을 마우스 오른쪽 버튼으로 클릭합니다.
2. **Add other** > **Consumed REST service**를 선택합니다.
    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/consumed-rest-service/add-consumed-rest-service.png" width="500" class="no-border" >}}
3. 서비스 이름을 지정합니다.
4. **Add request(s)** 아래에서 **Manually** 또는 **From OpenAPI/Swagger contract** 중 하나를 선택합니다.

    * 수동으로 요청을 추가하려면:
        1. **Manually**를 선택합니다.
        2. **OK**를 클릭합니다.
    * OpenAPI 또는 Swagger 계약에서 요청을 추가하려면:
        1. **URL** 또는 **File**을 선택하고 아래 필드에 해당 URL을 붙여넣거나 원하는 파일을 선택합니다.
        2. **OK**를 클릭합니다.
        3. 문서에 추가할 요청을 선택합니다.
        4. **OK**를 클릭합니다.

OpenAPI/Swagger 계약에서 가져오기에 대한 자세한 내용은 아래의 [OpenAPI/Swagger 계약에서 가져오기](#open-api-import) 섹션을 참조하세요.

## 구성 {#configuration}

Consumed REST Service를 사용하여 앱에 대한 `GET`, `POST`, `PUT`, `PATCH` 또는 `DELETE` 요청을 구성하세요. 요청은 수동으로 구성하거나 OpenAPI 또는 Swagger 계약을 업로드하여 구성할 수 있습니다.

OpenAPI URL 또는 Swagger 계약을 업로드하면 URL 또는 파일의 내용이 Consumed REST Service 문서에 자동으로 추가됩니다. 업로드 후에도 새로운 [매개변수](#add-parameters), [헤더](#add-headers) 추가 또는 요청/응답에서 Entity 생성 등 수동으로 요청을 구성할 수 있습니다.

### 기본 구성 {#configure-a-request}

다음을 수행하여 서버에 데이터를 보내는 `GET`, `POST`, `PUT`, `PATCH` 또는 `DELETE` 요청을 생성하세요:

1. **Method & URL** 필드에서 드롭다운을 사용하여 사용할 HTTP 메서드를 선택합니다.
2. 엔드포인트를 추가하고 **Send**를 클릭합니다.

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/consumed-rest-service/general-section.png" class="no-border" width="500" >}}

3. **Base URL**을 클릭합니다.
4. 이 Consumed REST Service 문서의 모든 요청에서 동일한 URL을 사용하려면 기본 URL을 추가합니다.
   
   {{< figure src="/attachments/refguide10/modeling/integration/rest-services/consumed-rest-service/base-url.png" class="no-border"  width="500" >}}

   기본 URL을 동적으로 만들려면 아래의 [동적 기본 URL](#dynamic-base-url) 섹션을 참조하세요.

5. **Authentication**을 클릭합니다.
6. 인증 방법을 선택한 다음 **OK**를 클릭합니다. 자세한 내용은 [인증 방법](#authentication)을 참조하세요.

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/consumed-rest-service/configuration-screen.png" width="500" >}}

7. **Send**를 클릭합니다.

**Response** 탭에서 요청을 시각화한 다음, 응답을 사용하여 [Domain Model에 Entity를 생성](#create-entity)할 수 있습니다.

### OpenAPI/Swagger 계약에서 가져오기 {#open-api-import}

기존 계약에서 더 많은 요청을 추가하려면 다음을 수행하세요:

1. **Request** 필드에서 **Add Request**를 클릭합니다:

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/consumed-rest-service/add-request-button.png" class="no-border" >}}

2. **Add Request(s)** 대화 상자에서 문서에 추가할 요청을 선택한 다음 **Add**를 클릭합니다.

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/consumed-rest-service/add-request.png" class="no-border" >}}

새 빈 요청을 만들려면 **Add Request(s)** 대화 상자에서 **New**를 클릭하세요.

### 인증 방법 {#authentication}

문서의 모든 요청에 사용할 기본 인증을 구성할 수 있습니다. 인증은 필수가 아니지만 필요에 따라 추가할 수 있습니다. 기본 인증을 추가하려면 다음을 수행하세요:

1. **Authentication**을 클릭합니다.
2. **Authentication method** 필드에서 드롭다운을 클릭하고 **Basic authentication**을 선택합니다.

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/consumed-rest-service/authentication-setup.png" >}}

3. 사용자 이름과 비밀번호에 대한 상수를 선택하거나 새로 생성합니다. 새 상수를 생성하려면 다음 단계를 따르세요:
   1. **Username** 또는 **Password** 옆에서 **Select** > **New**를 클릭합니다.
   2. 상수 이름을 지정하고 **OK**를 클릭합니다.
4. 필요한 추가 정보를 추가한 다음 **OK**를 클릭합니다.

### 매개변수 추가 {#add-parameters}

{{% alert color="info" %}}

매개변수는 Authentication 섹션에서 지원되지 않습니다.

{{% /alert %}}

매개변수는 URL의 경로 및 쿼리 부분, 헤더 값, 본문에서 완전히 지원됩니다. 중괄호 안에 정의됩니다. 예를 들어, URL에서 `number`를 매개변수로 정의하면 `http://numbersapi.com/{number}`와 같습니다. URL, 헤더 또는 본문에서 중괄호 내에 구성된 매개변수는 자동으로 매개변수 그리드에 추가됩니다.

{{< figure src="/attachments/refguide10/modeling/integration/rest-services/consumed-rest-service/get-header.png" class="no-border" >}}

매개변수 그리드에 직접 새 매개변수를 수동으로 추가할 수도 있습니다. 이를 위해 다음 단계를 따르세요:

1. **Parameters** 탭을 열고 **Add parameter**를 클릭합니다.
2. 매개변수 이름을 지정하고 테스트 값을 추가합니다.

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/consumed-rest-service/adding-parameters.png" class="no-border" width="600" >}}

3. 매개변수를 테스트하려면 **Send**를 클릭합니다.

#### 동적 기본 URL {#dynamic-base-url}

기본 URL을 매개변수로 추가할 수 있습니다. 이를 위해 다음 단계를 따르세요:

1. **Base URL**을 클릭합니다.
2. Dynamic 필드에서 **Yes**를 선택합니다.
3. **OK**를 클릭합니다.

{{< figure src="/attachments/refguide10/modeling/integration/rest-services/consumed-rest-service/dynamic-base-url.png" class="no-border" width="600" >}}

이제 기본 URL이 매개변수로 간주됩니다. [Send REST Request](/refguide10/send-rest-request/) Microflow 활동에서 값을 변경할 수 있습니다.

### 헤더 추가 {#add-headers}

문서에 지정한 모든 HTTP 요청에 대해 헤더를 추가할 수 있습니다. 헤더를 추가하려면 다음을 수행하세요:

1. **Headers** 탭을 열고 **Add header**를 클릭합니다.

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/consumed-rest-service/header-example.png" class="no-border"  width="300" >}}

2. **Key** 필드에서 드롭다운을 클릭하고 가장 일반적으로 사용되는 HTTP 헤더 목록에서 선택합니다. Key 필드에 직접 입력하고 **Value** 필드에 값을 추가하여 사용자 정의 헤더를 만들 수도 있습니다.

3. **OK**를 클릭합니다. 헤더를 테스트하려면 **Send**를 클릭합니다.

아래와 같이 헤더의 테스트 값으로 매개변수를 추가할 수도 있습니다. 예를 들어, 인증 토큰이 동적인 Authorization 헤더를 정의할 수 있습니다.

{{< figure src="/attachments/refguide10/modeling/integration/rest-services/consumed-rest-service/parameters-for-header.png" class="no-border" width="300" >}}

### 요청 본문 추가 (POST, PUT, PATCH 요청에만 해당) {#add-a-request-body}

`POST`, `PUT`, `PATCH` 요청은 요청 본문으로 텍스트 전송을 지원합니다. 다양한 형식이 지원됩니다.

#### 정적 텍스트를 전송하는 요청 본문

요청 본문 내용이 정적인 경우, **Body** 탭에 텍스트를 붙여넣으세요. 이 텍스트는 요청을 보낼 때 본문 내용으로 포함됩니다.

{{< figure src="/attachments/refguide10/modeling/integration/rest-services/consumed-rest-service/json-example.png" class="no-border" width="300" >}}

#### 매개변수를 사용하여 요청 본문 추가

Body 탭의 텍스트에 중괄호로 둘러싸인 매개변수 이름이 포함되어 있으면 매개변수로 해석됩니다. 이러한 매개변수를 사용하여 본문 내용을 동적으로 변경할 수 있습니다.

{{< figure src="/attachments/refguide10/modeling/integration/rest-services/consumed-rest-service/body-structure-example.png" class="no-border"  width="500" >}}

예를 들어, 본문 내용이 `product_curr={currency}&product_price={price}`인 경우, `currency` 및 `price` 매개변수를 사용하여 본문 내용을 변경할 수 있습니다.

#### 여러 Entity에서 내용을 가져오는 요청 본문

JSON 형식의 본문이 있는 경우, Domain Model에 본문 내용을 제공할 Entity를 생성할 수 있습니다. 이를 통해 동적 데이터가 포함된 본문을 쉽게 전송할 수 있습니다.

다음을 수행하여 요청에 JSON 스니펫에서 본문 Entity를 생성하세요:

1. **Body** 탭을 클릭하고 JSON 문자열을 추가합니다.

2. 입력을 검증하려면 **Send**를 클릭합니다.

3. 새로 생성된 JSON 문자열을 Domain Model에서 Entity로 사용하려면 **Use JSON Snippet**을 클릭합니다. 본문 문자열은 **Body structure** 탭에서 볼 수 있습니다.

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/consumed-rest-service/body-structure-tab.png" class="no-border"  width="400" >}}

   Entity 이름이 미리 채워져 있지만, 사용자 정의 이름으로 변경할 수 있습니다.

4. Entity를 생성하려면 **Create Entity** > **OK**를 클릭합니다. **Show**를 클릭하여 Domain Model에서 Entity를 확인하세요.

### 응답 데이터 처리

**Response data** 탭에서 요청의 응답을 확인할 수 있습니다.

{{< figure src="/attachments/refguide10/modeling/integration/rest-services/consumed-rest-service/response-tab.png" class="no-border"  width="500" >}}

#### 응답이 JSON 형식인 경우 {#create-entity}

응답이 JSON 형식이고 응답을 사용하여 Entity를 생성하려면 **Response structure** 탭을 열어 응답 데이터의 미리보기를 확인하세요:

{{< figure src="/attachments/refguide10/modeling/integration/rest-services/consumed-rest-service/response-structure-tab.png" class="no-border"  width="500" >}}

Entity 이름이 미리 채워져 있지만, 사용자 정의 이름으로 변경할 수 있습니다. Entity를 생성하려면 다음을 수행하세요:

1. **Create Entity** > **OK**를 클릭합니다.
2. Domain Model에서 Entity를 보려면 **Show**를 클릭합니다.

요청 본문에 매개변수를 추가할 때 데이터 구조(Entity)를 입력으로 생성하여 추가할 수도 있습니다. 요청의 작은 부분만 동적인 경우, JSON 스니펫에서 직접 매개변수를 사용할 수 있습니다.

응답 구조를 평탄화하고 단순화할 수 있습니다. **Flatten and simplify structure**를 선택하여 이 기능을 활성화하세요. 자세한 내용은 아래의 [응답 데이터 단순화 및 평탄화](#simplify-and-flatten) 섹션을 참조하세요.

#### 응답이 JSON 형식이 아닌 경우 {#processing-non-json}

응답이 JSON 형식이 아닌 경우, 자동으로 Entity로 변환할 수 없습니다. 대신 Microflow에서 데이터를 추출할 수 있습니다.

[Send REST request](/refguide10/send-rest-request/) 액션이 Microflow에서 실행되면 결과가 `latestHttpResponse` 변수에 저장됩니다. `latestHttpResponse`에서 요청의 `StatusCode`와 `Content`를 확인할 수 있습니다. 여기에서 Microflow 로직을 사용하여 정보를 추출할 수 있습니다. 예를 들어, 응답이 XML 형식인 경우 [Import Mapping](/refguide10/import-mappings/)을 사용하여 데이터를 읽을 수 있습니다.

### 응답 데이터 단순화 및 평탄화 {#simplify-and-flatten}

JSON 데이터를 수신하면 응답 구조가 가능한 경우 단순화되고 평탄화됩니다. 이는 **Response structure** 탭에서 확인할 수 있습니다.

예를 들어, URL `https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json`은 차량 정보를 반환합니다. 객체 목록이 포함된 `Results` 속성을 가진 JSON 객체를 반환합니다. 단순화 없이 **Create entity**를 클릭하면 3개의 Entity가 생성됩니다. 단순화를 사용하면 모든 차량 정보를 포함하면서 2개의 Entity만 생성됩니다.

기본적으로 단순화 및 평탄화가 활성화되어 있습니다. 이를 변경하려면 **Create entity** 버튼을 클릭하기 전에 **Response structure** 탭에서 **Flatten and simplify structure** 체크박스를 해제하세요.

### Microflow에서 REST 요청 사용 {#add-entity-to-microflow}

Microflow에서 요청을 선택하려면 다음 단계를 완료하세요:

1. 새 Microflow를 생성하고 [Send REST request](/refguide10/send-rest-request/) 활동을 끌어다 놓습니다.
2. 활동을 더블 클릭하고 **Select**를 클릭하여 추가할 요청을 선택한 다음 **Select** > **OK**를 클릭합니다.

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/consumed-rest-service/send-request-activity.png" class="no-border" width="500" >}}

요청에 매개변수를 정의한 경우, 해당 매개변수가 활동에 추가됩니다. **Edit**를 클릭하여 Microflow에서 매개변수를 변경하세요. 이 활동의 매개변수 값은 요청에 정의된 테스트 값 대신 런타임에서 사용됩니다.
