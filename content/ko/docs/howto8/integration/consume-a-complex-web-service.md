---
title: "복잡한 웹 서비스 사용하기"
url: /howto8/integration/consume-a-complex-web-service/
weight: 8
---

## 소개

이 사용 방법 문서에서는 Mendix 애플리케이션과 통합하고 다른 애플리케이션의 기능과 데이터를 재사용할 수 있는 (타사) 웹 서비스를 사용하는 방법을 설명합니다. 웹 서비스는 Mendix 애플리케이션을 외부 시스템과 통합하는 데 선호되는 방법입니다. 데이터 검색, 업데이트 전송 및 작업 수행에 사용할 수 있습니다. Mendix에서 웹 서비스를 호출하는 것은 웹 서비스 호출 액션을 사용하여 Microflow에서 수행됩니다.

이 사용 방법 문서에서는 다음을 학습합니다:

* **Import Web Service** 마법사를 사용하여 웹 서비스 가져오기
* 프로젝트에 웹 서비스 문서를 직접 가져오기
* 웹 서비스 호출 구성하기

## 마법사를 사용하여 웹 서비스 가져오기

이 섹션에서는 가져온 웹 서비스, 관련 데이터 Entity, XML 매핑, 그리고 웹 서비스를 트리거하는 Microflow의 생성을 단 몇 번의 클릭으로 통합할 수 있는 강력한 마법사에 대해 설명합니다.

### 구성

마법사를 사용하여 웹 서비스를 가져오려면 다음 단계를 따르십시오:

1. 도메인 모델을 열고 툴바에서 **Import web service/XML file**을 클릭하십시오.

    {{< figure src="/attachments/howto8/integration/consume-a-complex-web-service/18581788.png" class="no-border" >}}

    웹 서비스(또는 XML 파일)의 결과를 가져오는 과정을 안내하는 **Import Web Service or XML Schema** 마법사가 열립니다. 결과적으로 다음이 생성됩니다:
    * 결과를 저장하기 위한 Domain Model Entity
    * 수신 XML을 Mendix 객체에 매핑하는 XML-to-domain 매핑
    * 가져온 웹 서비스(또는 XML 스키마) 문서
    * 웹 서비스를 호출하는(또는 XML 파일을 가져오는) Microflow (선택 사항)
2. **Import Web Service or XML Scheme** 대화 상자에서 **Web service operation**을 선택하고 **Next**를 클릭하십시오:

    {{< figure src="/attachments/howto8/integration/consume-a-complex-web-service/18581787.png" class="no-border" >}}

3. **Import Web Service** 대화 상자에서 **Create new imported web service**를 선택하고 **Next**를 클릭하십시오.
4. **New Web Service Operation** 대화 상자의 **Web service Description** 섹션에서 **WSDL source**에 이 가져온 웹 서비스에 사용할 WSDL을 지정하십시오. **WSDL source**에 대해 **URL**(예: http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL)을 제공하거나 컴퓨터에서 **File**을 로드할 수 있습니다.

    {{< figure src="/attachments/howto8/integration/consume-a-complex-web-service/18581785.png" class="no-border" >}}

5. **Next**를 클릭하여 WSDL의 서비스와 작업을 가져오십시오.
6. **Select Ports** 팝업 창에서 웹 서비스 포트를 선택하고 **OK**를 클릭하십시오. Studio Pro가 이제 작업을 가져옵니다.

    {{< figure src="/attachments/howto8/integration/consume-a-complex-web-service/port.png" class="no-border" >}}

7. **New Web Service Operation** 대화 상자에서 가져온 웹 서비스에 사용 가능한 서비스와 작업을 검토할 수 있습니다. 작업 중 하나를 클릭하면 오른쪽 창에 작업에 대한 정보가 표시됩니다. 웹 서비스 작업을 선택하고 **Next**를 클릭하십시오.

    {{< figure src="/attachments/howto8/integration/consume-a-complex-web-service/18581784.png" class="no-border" >}}

8. **Select Elements** 대화 상자에서 웹 서비스의 반환 값으로 매핑할 개별 요소를 선택적으로 선택할 수 있습니다. **Next**를 클릭하십시오.

    {{< figure src="/attachments/howto8/integration/consume-a-complex-web-service/18581783.png" class="no-border" >}}

9. 이 마법사의 마지막 단계에서 생성된 Entity에 첨부될 아이콘을 선택하고 가져온 웹 서비스가 호출되는 Microflow를 생성할 수 있습니다:

    {{< figure src="/attachments/howto8/integration/consume-a-complex-web-service/18581782.png" class="no-border" >}}

10. **Finish**를 클릭하여 웹 서비스를 생성하십시오.

### 결과

마법사를 완료하면 선택한 옵션에 따라 다음이 모델에 추가됩니다:

* 가져온 서비스
* XML-to-domain 매핑
* 웹 서비스 작업이 호출되는 Microflow
* Domain Model Entity (기본적으로 Studio Pro는 비영구 Entity를 생성합니다)

{{< figure src="/attachments/howto8/integration/consume-a-complex-web-service/18581781.png" class="no-border" >}}

## 웹 서비스 직접 가져오기

위에서 설명한 마법사를 사용하는 대안으로 웹 서비스 문서를 프로젝트에 직접 가져올 수 있습니다. 자세한 내용은 *Studio Pro 가이드*의 [Consumed Web Services](/refguide8/consumed-web-services/)를 참조하십시오.

웹 서비스를 직접 가져오려면 다음 단계를 따르십시오:

1. 모듈을 마우스 오른쪽 버튼으로 클릭하고 **Add Other** > **Consumed web service**를 선택하십시오.
2. 새 소비 웹 서비스의 이름을 지정하고 **OK**를 클릭하십시오.
3. **Consumed Web Service** 상자에서 이 소비 웹 서비스에 사용할 **WSDL Source**를 지정하십시오. **URL**을 지정하거나 컴퓨터에서 **File**을 로드할 수 있습니다.

    {{< figure src="/attachments/howto8/integration/consume-a-complex-web-service/enter-wsdl-url.png" class="no-border" >}}

4. **Import**를 클릭하여 WSDL의 서비스와 작업을 가져오십시오. 메시지가 표시되면 **WSDL Source** 대화 상자에서 사용할 포트를 선택하고 **OK**를 클릭하십시오.

5. **Consumed Web Services** 상자에서 가져온 웹 서비스에 사용 가능한 **Services**와 **Operations**를 검토하십시오. **Operations** 중 하나를 클릭하면 오른쪽 창에 작업에 대한 정보가 표시됩니다. 목록에서 개별 웹 서비스 작업을 선택할 수 있으며, 그렇지 않으면 전체 서비스와 작업이 가져옵니다:

    {{< figure src="/attachments/howto8/integration/consume-a-complex-web-service/18581779.png" class="no-border" >}}
6. **OK**를 클릭하십시오. 웹 서비스가 모델에 추가됩니다.

## 웹 서비스 호출 구성하기

웹 서비스 호출을 구성하려면 다음 단계를 따르십시오:

1. 웹 서비스 마법사를 사용하지 않았거나 마법사에서 Microflow를 자동으로 생성하는 옵션을 사용하지 않은 경우, 가져온 웹 서비스를 호출할 Microflow를 생성해야 합니다:

    {{< figure src="/attachments/howto8/integration/consume-a-complex-web-service/18581778.png" class="no-border" >}}

    {{% alert color="info" %}}Microflow가 웹 서비스 호출에 필요한 인수로 변수를 생성하거나 전달받는지 확인하십시오.{{% /alert %}}

2. 자체 Microflow를 생성하는 경우 Microflow에 웹 서비스 호출 Activity를 추가하십시오. Microflow에 Activity를 추가하는 방법에 대한 자세한 내용은 *Studio Pro 가이드*의 [Activities](/refguide8/activities/)를 참조하십시오.
3. Activity를 더블클릭하여 **Call Web Service** 속성 편집기를 열고 **Operation** 섹션에서 **Operation**에 대해 **Select**를 클릭하십시오.
4. **Select Web Service Operation** 대화 상자에서 이 웹 서비스 호출의 작업을 선택할 수 있습니다:

    {{< figure src="/attachments/howto8/integration/consume-a-complex-web-service/18581777.png" class="no-border" >}}

5. **Call Web Service** 속성 편집기의 **SOAP Request Body** 탭에서 SOAP 본문을 구성할 수 있습니다. 이 본문에는 웹 서비스 요청을 실행하는 데 필요한 매개변수가 포함됩니다. **Simple**, **Export Mapping**, **Custom** 옵션을 사용하면 사용할 SOAP 본문 유형을 선택할 수 있습니다. **Edit value**를 클릭하고 다음 중 하나를 사용하여 domain-to-XML 매핑 또는 Microflow의 변수를 입력 인수로 변경하십시오:
    * **Simple expressions for each request parameter** — 가져온 웹 서비스가 원시 인수만 필요한 경우:

        {{< figure src="/attachments/howto8/integration/consume-a-complex-web-service/18581791.png" class="no-border" >}}

    * **Export mappings for each request parameter** 또는 **Export mapping for the entire request** — Domain Model Entity를 XML 요소에 매핑해야 하는 경우
    * **Custom request template** — 매개변수가 포함된 사용자 정의 XML 본문 정의용:

        {{< figure src="/attachments/howto8/integration/consume-a-complex-web-service/18581792.png" class="no-border" >}}

6. **HTTP Headers** 탭에서 Mendix Runtime이 웹 서비스를 호출하기 전에 HTTP 인증을 수행해야 하는 경우 **Use HTTP authentication**을 선택하고 **Edit** 버튼을 사용하여 **User name**과 **Password**를 입력하십시오:

    {{< figure src="/attachments/howto8/integration/consume-a-complex-web-service/18581793.png" class="no-border" >}}

7. **SOAP Response** 탭에서 웹 서비스 호출의 반환 처리를 다음과 같이 구성할 수 있습니다:
    * 반환이 복잡한 XML 구조인 경우 **Mapping**을 선택하고 XML-to-domain 매핑을 사용하여 XML 요소를 Domain Model Entity에 매핑하십시오:

        {{< figure src="/attachments/howto8/integration/consume-a-complex-web-service/18581790.png" class="no-border" >}}

    * 반환이 원시 값인 경우 **Store in variable** — **Yes**를 선택하고 **Type**과 **Variable**을 지정하여 변수에 저장할 수 있습니다:

        {{< figure src="/attachments/howto8/integration/consume-a-complex-web-service/18581789.png" class="no-border" >}}

    * 반환을 무시하려면 **Ignore**를 선택하십시오
8. 가져온 웹 서비스를 이제 애플리케이션에서 사용할 준비가 되었습니다.

## 더 읽기

* [간단한 웹 서비스 사용하기](/howto8/integration/consume-a-simple-web-service/)
* [XML 문서 내보내기](/howto8/integration/export-xml-documents/)
* [Excel 문서 가져오기](/howto8/integration/importing-excel-documents/)
* [웹 서비스 노출하기](/howto8/integration/expose-a-web-service/)
* [Selenium 지원 사용하기](/howto8/integration/selenium-support/)
* [XML 문서 가져오기](/howto8/integration/importing-xml-documents/)
* [REST 서비스 사용하기](/howto8/integration/consume-a-rest-service/)
* [OData를 사용하여 BI 도구에 데이터 노출하기](/howto8/integration/exposing-data-to-bi-tools-using-odata/)
