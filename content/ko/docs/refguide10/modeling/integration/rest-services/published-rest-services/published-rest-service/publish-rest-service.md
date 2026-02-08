---
title: "REST Service 게시하기"
url: /refguide10/publish-a-rest-service/
weight: 10
description: "Published REST Service를 생성하고 JSON 또는 XML로 결과를 반환하는 방법을 설명합니다."
aliases:
    - /howto10/integration/publish-rest-service/
---

## 소개

Mendix에서는 Studio Pro에서 기본적으로 REST 웹 서비스를 게시할 수 있습니다. 이 문서에서는 예제 프로젝트에서 REST 서비스를 게시하는 방법을 설명하고 Published REST Service의 `GET` 오퍼레이션을 시연합니다.

## 예제 앱 설정

다음 섹션에서 사용할 예제 앱을 설정하려면 다음 단계를 따르세요:

1. 새 앱을 만들고 **MyFirstModule** 모듈의 이름을 **RESTExample**로 변경합니다.
2. **RESTExample** 모듈의 Domain Model을 엽니다.
3. 아래와 같이 다대일 연결로 **OrderItem** 및 **Order** Entity를 만듭니다:

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/publish-rest-service/domainmodel.png" alt="Many-to-one association from OrderItem to Order" class="no-border" >}}

4. **Order** 및 **OrderItem** Entity에 대한 [개요 및 상세 페이지를 생성](/howto10/front-end/create-your-first-two-overview-and-detail-pages/#create-automatically)합니다.
5. **Order_NewEdit** 페이지에 [데이터 그리드](/refguide10/data-grid/)를 추가합니다. 데이터베이스에서 연결을 통해 **OrderItem** 객체를 표시하도록 설정합니다:
    
    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/publish-rest-service/DataGridSettings.png" alt="Data grid settings for the Order_NewEdit page" class="no-border" >}}

완성된 **Order_Overview** 페이지는 다음과 같아야 합니다:

{{< figure src="/attachments/refguide10/modeling/integration/rest-services/publish-rest-service/order_NewEdit_Page.png" alt="Structure mode view of the Order_NewEdit page with data grid" class="no-border" >}}

앱 네비게이션에 개요 페이지를 추가합니다. 그런 다음 애플리케이션을 실행하고 몇 가지 주문과 주문 항목을 생성합니다.

## 서비스 게시

모델의 데이터를 REST 서비스에서 사용하려면 Message Definition을 생성해야 합니다.

### 매핑 생성

매핑을 생성하려면 다음 단계를 따르세요:

1. **App Explorer**에서 **RESTExample** 모듈을 마우스 오른쪽 버튼으로 클릭하고 **Add other** > **Message definitions**를 선택합니다.
2. **Add Message Definitions** 대화 상자에서 **Name** 필드에 *MD_Orders*를 입력합니다. **OK**를 클릭하여 새 Message Definition을 생성하고 편집을 시작합니다.
3. **Add**를 선택하여 **Message Definition** 대화 상자를 엽니다.
4. **Select**를 클릭하고 목록에서 **Order** Entity를 선택합니다. Entity를 선택하면 **Message definition** 대화 상자의 **Structure** 부분이 채워집니다. 기본적으로 **Order** 체크박스만 선택됩니다.
5. **OrderID** 및 **Customer** 속성을 선택합니다.
6. **OrderItem_Order** 연결을 선택하고 확장한 다음 **Product** 및 **Quantity** 속성을 선택합니다:

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/publish-rest-service/MD_SelectedAttributes.png" alt="Checkbox selections in the Message Definition 'Order' dialog box" class="no-border" >}}

7. **OK**를 클릭하여 대화 상자를 닫습니다.
8. **MD_Orders** Message Definition을 저장하고 닫습니다.

### REST Service 구성

1. **App Explorer**에서 **RESTExample** 모듈을 마우스 오른쪽 버튼으로 클릭하고 **Add other** > **Published REST Service**를 선택합니다.
2. REST 서비스의 **Name**에 *PRS_OrderService*를 입력합니다. **OK**를 눌러 새 REST 서비스를 생성하고 편집을 시작합니다.
3. **Resources** 필드에서 **Add**를 클릭하여 서비스에 새 리소스를 추가합니다. **Resource name**에 **GetOrderByID**를 입력한 다음 **OK**를 클릭합니다.

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/publish-rest-service/AddRestResource.png" alt="Adding a GetOrderByID resource" class="no-border" >}}

4. **Operations for resource** 필드에서 **Add**를 클릭하여 리소스에 오퍼레이션을 추가합니다.
5. **Operation** 대화 상자에서 **Operation path** 필드에 `{OrderID}`를 입력합니다. 중괄호(`{}`)를 포함해야 합니다. 이렇게 하면 대화 상자의 **Example location** 필드에 표시된 URL에서 주문 ID로 REST 서비스를 호출할 수 있습니다.

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/publish-rest-service/AddOperation.png" alt="{OrderID} in the Operation path field" class="no-border" >}}

6. 같은 대화 상자에서 **Microflow** 필드 옆의 **Select**를 클릭합니다. 이 오퍼레이션에 대한 Microflow가 아직 없으므로 대화 상자에서 **RESTExample** 모듈을 선택하고 **New**를 클릭하여 새 Microflow를 생성합니다. 이 새 Microflow의 **Name**에 *PRS_GetGetOrderByID*를 입력한 다음 **OK**를 클릭합니다.

7. 같은 **Operation** 대화 상자의 **Parameters** 필드에서 **Add**를 클릭하고 **OrderID** 경로 매개변수를 추가합니다.

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/publish-rest-service/OperationsDialogSettings.png" alt="Operation path, microflow, and parameter settings" class="no-border" >}}

8. <a id="edit-microflow"></a>**OK**를 클릭하여 **Operation** 대화 상자를 닫은 다음 **Show**를 클릭하여 새로 생성된 Microflow 편집을 시작합니다. **OrderID** 매개변수를 추가합니다.

    {{% alert color="info" %}}이 매개변수는 **httpRequest** 매개변수와 함께 자동으로 추가될 수 있습니다. **httpRequest** 매개변수가 추가된 경우 오류를 방지하려면 제거하세요.<br/>
    **httpResponse** 매개변수도 자동으로 추가될 수 있습니다. 이 경우 아래 [Export Mapping 구축](#export-mapping)의 단계를 따르면 오류를 방지하기 위해 매개변수를 제거해야 합니다.{{% /alert %}}

9. Microflow에 **Create variable** 활동을 추가하여 **OrderID** 변수를 데이터 유형 **String**에서 **Integer/Long**으로 변환합니다. 이렇게 하면 **OrderID** (**AutoNumber** 데이터 유형)를 검색할 수 있습니다.

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/publish-rest-service/ConvertOrderID.png" alt="Create Variable dialog box used to parse OrderID as an integer variable" class="no-border" >}}

10. Microflow에 **Retrieve** 활동을 추가하여 **OrderID**를 기반으로 **Order**를 검색합니다. 이 활동을 데이터베이스에서 첫 번째 일치하는 주문을 검색하도록 설정합니다.

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/publish-rest-service/RetrieveOrder.png" alt="Range and XPath constraint settings in the Retrieve dialog box" >}}

#### Export Mapping 구축 (선택 사항){#export-mapping}

다음 단계에서는 출력이 JSON으로 생성되도록 하는 방법을 설명합니다. [Export Mappings](/refguide10/export-mappings/)를 사용하거나 Microflow에서 이를 수행할 수 있습니다. Studio Pro의 Published REST 서비스는 [콘텐츠 협상](https://nordicapis.com/content-negotiation/)을 지원하므로 Export Mapping 생성은 필수가 아닙니다. 즉, REST 서비스가 서버에 반환할 미디어 유형을 선택할 수 있습니다.

{{% alert color="info" %}}다음 단계를 따라 Export Mapping을 설정하는 방법을 배울 수 있지만, Microflow에서 객체 목록을 반환할 수도 있습니다. Studio Pro가 `Accept` 헤더에 표시된 원하는 형식으로 내보냅니다. 그런 다음 XML 또는 JSON 중 어떤 것을 받을지 지정할 수 있습니다. Export Mapping 대신 Microflow를 사용하는 경우 [앱 보기](#viewing)로 건너뛰세요.{{% /alert %}}

Export Mapping을 구축하려면 다음 단계를 따르세요:

1. **App Explorer**에서 **RESTExample** 모듈을 마우스 오른쪽 버튼으로 클릭하고 **Add other** > **Export mapping**을 선택하여 *EM_ExportOrder*라는 새 Export Mapping을 추가합니다.
    
2. **Select schema elements for export mapping** 대화 상자에서 **Message definition**을 선택합니다. 그런 다음 **Select**를 클릭하여 앞서 생성한 **MD_Orders** 매핑에서 **Order**를 선택합니다. 아래와 같이 모든 속성을 선택하고 **OK**를 클릭합니다.

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/publish-rest-service/SelectSchemaForExport.png" alt="All attribute checkboxes selected in the Select schema elements for export mapping dialog" class="no-border" >}}

3. 표시된 Export Mapping에서 스키마 객체 요소를 Domain Model의 일치하는 Entity에 매핑합니다. 스키마 객체 요소를 더블 클릭하거나 **Connector** 창에서 Entity를 끌어다 놓으세요. 같은 이름의 속성을 매핑하세요. 매핑은 다음과 같아야 합니다:

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/publish-rest-service/ExportMappingResult.png" alt="Mapping Order to Order and OrderItem to OrderItem" class="no-border" >}}

4. **PRS_GetGetOrderByID** Microflow로 돌아가서 **Export with mapping** 활동을 추가합니다.
5. 대화 상자의 **Mapping** 필드에서 **EM_ExportOrder** 매핑을 선택합니다. **Parameter** 필드에서 Microflow의 **Retrieve** 액션으로 검색된 **Order** 객체를 선택합니다.
6. 결과로 **JSON**을 선택하고 출력을 **String Variable**에 저장합니다. **Variable name**에 *Order_JSON*을 입력합니다.

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/publish-rest-service/MFExportWithMapping.png" alt="Export With Mapping dialog box settings" class="no-border" >}}

7. Microflow에 **Create object** 활동을 추가하여 **HttpResponse** 유형의 객체를 생성합니다. 세 가지 새 멤버를 만듭니다:
    * 성공을 나타내는 값 `200`을 반환하는 **StatusCode**
    * 이전 단계에서 내보낸 JSON에 매핑된 **Content**
    * 사용할 **HttpVersion** (이 경우 `'HTTP/1.1'`)

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/publish-rest-service/httpResponse.png" alt="Create Object dialog box for HttpResponse object" class="no-border" >}}

8. Microflow에 **Create object** 활동을 추가하여 **HttpHeader** 유형의 객체를 생성합니다. 세 가지 새 멤버를 만듭니다:
    * `'Content-Type'`으로 설정된 **Key**
    * `'application/json'`으로 설정된 **Value** (응답이 JSON 대신 XML을 포함하는 경우 `'application/xml'`)
    * HTTP 응답(`$NewHttpResponse`)으로 설정된 **System.HttpHeaders**

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/publish-rest-service/httpResponseHeader.png" alt="Create Object dialog for HttpHeader" class="no-border" >}}

9. Microflow에서 **End Event**를 열고 반환 값으로 `$NewHttpResponse`를 입력합니다. 완성된 Microflow는 다음과 같아야 합니다:

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/publish-rest-service/CompleteMFNoErrorHandling.png" alt="Completed PRS_GetGetOrderByID microflow" class="no-border" >}}

    {{% alert color="info" %}}오류가 없어야 합니다. CE0346 오류가 있는 경우 [Microflow 편집 시작](#edit-microflow) 시 **httpResponse** 매개변수가 자동으로 생성되었는지 확인하세요. 있다면 제거하세요.{{% /alert %}}

### 앱 보기 {#viewing}

앱을 보고 사용해 보려면 다음 단계를 따르세요:

1. 앱을 실행하고 다음 URL을 사용하여 브라우저에서 엽니다: [http://localhost:8080/rest-doc/](http://localhost:8080/rest-doc/).
2. 모든 Published REST 서비스의 문서가 있는 페이지가 표시됩니다. **PRS_OrderService** 링크를 클릭하여 세부 정보를 확인합니다:

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/publish-rest-service/RESTTestDetails.png" alt="Details for the PRS_OrderService" class="no-border" >}}

3. **GET**을 클릭합니다. 그런 다음 **Try it out**을 클릭하고 **OrderID**를 입력합니다.

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/publish-rest-service/RESTTestExecute.png" alt="OrderID with Description input field" class="no-border" >}}

4. **Execute**를 클릭하여 요청을 실행하고 **Response body**에서 결과를 반환합니다.

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/publish-rest-service/RESTTestResponse.png" alt="Result in Response" class="no-border" >}}

축하합니다! 첫 번째 REST 서비스를 게시했습니다.

## 오류 처리

이 새 서비스에는 아직 오류 처리가 구현되지 않았습니다. 예를 들어, **Execute**를 클릭하기 전에 **OrderID** 매개변수에 정수 대신 텍스트를 입력하거나 비워두면 일반적인 `500` 또는 `404` 오류가 표시됩니다. 더 견고한 서비스를 게시하려면 오류 처리를 구현하세요.

### 오류 처리 추가

1. **PRS_GetGetOrderByID** Microflow를 열고 첫 번째 활동을 마우스 오른쪽 버튼으로 클릭합니다. **Set error handling** > **Custom with rollback** > **OK**를 선택합니다.
2. 오류 처리 플로우 위에 마우스를 올립니다. 파란색 원을 클릭하고 **Create object**를 선택합니다.
   
    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/publish-rest-service/create-object.png" class="no-border" >}}

3. 새 **HttpResponse** 객체를 생성하고 **Name**에 *NewHttpErrorResponse*를 입력합니다. 그런 다음 아래와 같이 속성을 매핑합니다:

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/publish-rest-service/ParsingErrorResponse.png" alt="Create Object dialog box for NewHttpErrorResponse" class="no-border" >}}

    {{% alert color="info" %}}**Content** 값은 JSON 문자열 `'{"Error": "The OrderID can only be an integer"}'`입니다.{{% /alert %}}

4. 다음 오류 처리 플로우 위에 마우스를 올리고 파란색 점을 클릭한 다음 또 다른 **Create object** 활동을 추가하여 새 **httpHeader** 객체를 생성합니다. 아래와 같이 속성을 매핑합니다:

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/publish-rest-service/ParsingErrorResponseHeader.png" alt="Create Object dialog box for NewHttpHeader_1" class="no-border" >}}

5. **End Event**를 추가하고 반환 값을 `$NewHttpErrorResponse`로 설정합니다. Microflow는 다음과 같아야 합니다:

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/publish-rest-service/ParsingErrorMicroflow.png" alt="Updated microflow with error handling" class="no-border" >}}

6. [앱 보기](#viewing) 섹션에서와 같이 오류 핸들러를 테스트합니다. **OrderID** 매개변수에 텍스트를 입력하고 **Execute**를 클릭한 다음 요청의 응답을 확인합니다:

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/publish-rest-service/ParsingErrorRESTResult.png" alt="Error in server response" class="no-border" >}}

### 추가 오류 처리

이제 **OrderID** 매개변수 오류 처리를 완료했으므로, 빈 응답을 처리할 차례입니다. 빈 응답은 기술적으로 오류가 아니지만, 아무것도 반환되지 않을 때 무슨 일이 발생했는지 표시하는 것이 좋은 관행입니다. **OrderID** 매개변수에 유효한 정수가 입력되었지만 데이터베이스에서 해당하는 **Order** 결과를 찾을 수 없는 상황에 대한 오류 처리를 추가하려면 다음 단계를 따르세요:

1. 데이터베이스에서 주문 검색 활동 후에 `$Order != empty` 표현식을 가진 결정 활동을 추가합니다. **true** 종료를 JSON으로 내보내는 활동에 연결합니다. **false** 종료에는 **NewHttpErrorNotFoundResponse** 객체를 생성하는 새 **Create object** 활동을 추가합니다.

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/publish-rest-service/OrderNotFoundResponse.png" alt="Create Object dialog box for NewHttpErrorNotFoundResponse" class="no-border" >}}

    {{% alert color="info" %}}**Content** 값은 문자열 `'{"Error": "No Order available for ID:'+$OrderID+'"}'`입니다.{{% /alert %}}

2. **NewHttpErrorNotFoundHeader** 객체를 생성하는 활동을 추가합니다.

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/publish-rest-service/OrderNotFoundHeader.png" alt="Create Object dialog box for NewHttpErrorNotFoundHeader" class="no-border" >}}

3. **End Event**를 `$NewHttpErrorNotFoundResponse`를 반환하도록 구성합니다. Microflow는 다음과 같아야 합니다:

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/publish-rest-service/CompleteMFWithErrorHandling.png" alt="Updated microflow with decision activity and false exit" class="no-border" >}}

4. [앱 보기](#viewing) 섹션에서와 같이 새 오류 응답을 테스트합니다.

## 더 보기

* [Published REST Services](/refguide10/published-rest-services/) – Published REST 서비스 생성에 대한 정보 (`GET`, `POST`, `DELETE` 오퍼레이션 포함)
