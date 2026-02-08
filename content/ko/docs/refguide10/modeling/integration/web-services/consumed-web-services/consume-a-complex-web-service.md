---
title: "복잡한 웹 서비스 사용하기"
url: /refguide10/integration/consume-a-complex-web-service/
weight: 8
description: "직접 및 마법사를 사용하여 웹 서비스를 가져오고 웹 서비스 호출을 구성하는 방법을 설명합니다."
aliases:
    - /howto10/integration/consume-a-complex-web-service/
---

## 소개

이 사용 방법 문서에서는 (타사) 웹 서비스를 사용하여 Mendix 애플리케이션을 통합하고 다른 애플리케이션의 기능과 데이터를 재사용하는 방법을 설명합니다. 웹 서비스는 Mendix 애플리케이션을 외부 시스템과 통합하는 데 선호되는 방법입니다. 데이터를 검색하고, 업데이트를 보내고, 작업을 수행하는 데 사용할 수 있습니다. Studio Pro에서 웹 서비스 호출은 Call Web Service 액션을 사용하여 마이크로플로우에서 수행됩니다.

이 사용 방법 문서에서는 다음을 수행하는 방법을 알려드립니다:

* 웹 서비스 문서를 앱에 직접 가져오기
* 웹 서비스 호출 구성

## 웹 서비스 가져오기

웹 서비스 문서를 앱에 가져올 수 있습니다. 자세한 정보는 [Consumed Web Services](/refguide10/consumed-web-services/)를 참조하세요.

웹 서비스를 직접 가져오려면 다음 단계를 따르세요:

1. 모듈을 마우스 오른쪽 버튼으로 클릭하고 **Add Other** > **Consumed web service**를 선택하세요.
2. 새 Consumed Web Service의 이름을 지정하고 **OK**를 클릭하세요.
3. **Consumed Web Service** 상자에서 이 Consumed Web Service에 사용할 **WSDL Source**를 지정하세요. **Edit**을 클릭하고 **WSDL Source** 대화 상자에서 **URL**을 지정하거나 컴퓨터에서 **File**을 로드하세요.

    {{< figure src="/attachments/refguide10/modeling/integration/web-services/consume-a-complex-web-service/enter-wsdl-url.png" class="no-border" width="700" >}}

4. **Import**를 클릭하여 WSDL의 서비스와 오퍼레이션을 가져오세요. 메시지가 표시되면 **WSDL Source** 대화 상자에서 사용할 포트를 선택하고 **OK**를 클릭하세요.

5. **Consumed web service** 화면에서 가져온 웹 서비스에 사용할 수 있는 **Services** 및 **Operations**를 검토하세요. 오퍼레이션을 클릭하면 오른쪽 창에 오퍼레이션에 대한 정보가 표시됩니다. 목록에서 개별 웹 서비스 오퍼레이션을 선택할 수 있으며, 그렇지 않으면 전체 서비스와 오퍼레이션이 가져옵니다:

    {{< figure src="/attachments/refguide10/modeling/integration/web-services/consume-a-complex-web-service/consumed-web-service-doc.png" class="no-border" width="700" >}}  

## 웹 서비스 호출 구성

웹 서비스 호출을 구성하려면 다음 단계를 따르세요:

1. 웹 서비스 마법사를 사용하지 않았거나 마법사에서 자동으로 마이크로플로우를 만드는 옵션을 사용하지 않은 경우, 가져온 웹 서비스를 호출할 마이크로플로우(Microflow)를 만드세요:

    {{< figure src="/attachments/refguide10/modeling/integration/web-services/consume-a-complex-web-service/import-microflow.png" class="no-border" width="500" >}}

    {{% alert color="info" %}}마이크로플로우가 웹 서비스 호출에 대한 인수로 필요한 변수를 만들거나 전달받도록 하세요.{{% /alert %}}

2. 자체 마이크로플로우를 만드는 경우 마이크로플로우에 [Call web service](/refguide10/call-web-service-action/) 액티비티를 추가하세요. 마이크로플로우에 액티비티를 추가하는 방법에 대한 자세한 내용은 [Activities](/refguide10/activities/)를 참조하세요.
3. 액티비티를 더블클릭하여 **Call Web Service** 속성 편집기를 열고 **Operation** 필드에서 **Select**를 클릭하세요.
4. **Select Web Service Operation** 대화 상자에서 이 웹 서비스 호출에 대한 오퍼레이션을 선택할 수 있습니다:

    {{< figure src="/attachments/refguide10/modeling/integration/web-services/consume-a-complex-web-service/select-web-service-op.png" alt="select web service op" class="no-border" width="700" >}}

5. **Call Web Service** 속성 편집기의 **SOAP Request Body** 탭에서 SOAP 본문을 구성할 수 있습니다. 여기에는 웹 서비스 요청을 실행하는 데 필요한 매개변수가 포함됩니다. **Simple**, **Export Mapping**, **Custom** 옵션을 사용하여 사용할 SOAP 본문의 유형을 선택할 수 있습니다. **Edit value**를 클릭하고 다음 중 하나를 사용하여 도메인-to-XML 매핑 또는 입력 인수로 사용되는 마이크로플로우의 변수를 변경하세요:
    * **Simple expressions for each request parameter** — 가져온 웹 서비스가 기본 인수만 필요한 경우:

        {{< figure src="/attachments/refguide10/modeling/integration/web-services/consume-a-complex-web-service/simple-expression-param.png" class="no-border" width="700" >}}

    * **Export mappings for each request parameter** 또는 **Export mapping for the entire request** — 도메인 모델 엔티티를 XML 요소에 매핑해야 하는 경우
    * **Custom request template** — 매개변수가 있는 사용자 정의 XML 본문 정의용:

        {{< figure src="/attachments/refguide10/modeling/integration/web-services/consume-a-complex-web-service/custom-request-temp.png" alt="custom-request-temp" class="no-border" width="700" >}}

6. **HTTP Headers** 탭에서 Mendix Runtime이 웹 서비스를 호출하기 전에 HTTP 인증을 사용해야 하는 경우 **Use HTTP authentication**을 체크하고 **Edit** 버튼을 사용하여 **User name** 및 **Password**를 입력하세요:

    {{< figure src="/attachments/refguide10/modeling/integration/web-services/consume-a-complex-web-service/http-authentication.png" alt="http-authentication" class="no-border" width="700" >}}

7. **SOAP Response** 탭에서 웹 서비스 호출의 반환 처리를 다음과 같이 구성할 수 있습니다:
    * 반환이 복잡한 XML 구조인 경우 **Mapping**을 선택하고 XML-to-domain 매핑을 사용하여 XML 요소를 도메인 모델 엔티티에 매핑하세요:

        {{< figure src="/attachments/refguide10/modeling/integration/web-services/consume-a-complex-web-service/18581790.png" class="no-border" width="700" >}}

    * 반환이 기본 유형인 경우 **Store in variable** — **Yes**를 선택하고 **Type** 및 **Variable**을 제공하여 변수에 저장할 수 있습니다:

        {{< figure src="/attachments/refguide10/modeling/integration/web-services/consume-a-complex-web-service/18581789.png" class="no-border" width="700" >}}

    * 반환을 무시하려면 **Ignore**를 선택하세요

가져온 웹 서비스를 이제 애플리케이션에서 사용할 준비가 되었습니다.

## 더 읽기

* [간단한 웹 서비스 사용하기](/howto10/integration/consume-a-simple-web-service/)
* [XML 문서 내보내기](/howto10/integration/export-xml-documents/)
* [Excel 문서 가져오기](/howto10/integration/importing-excel-documents/)
* [웹 서비스 노출](/howto10/integration/expose-a-web-service/)
* [Selenium 지원 사용하기](/howto10/integration/selenium-support/)
* [XML 문서 가져오기](/howto10/integration/importing-xml-documents/)
* [REST 서비스 사용하기](/howto10/integration/consume-a-rest-service/)
* [OData를 사용하여 BI 도구에 데이터 노출하기](/howto10/integration/exposing-data-to-bi-tools-using-odata/)
