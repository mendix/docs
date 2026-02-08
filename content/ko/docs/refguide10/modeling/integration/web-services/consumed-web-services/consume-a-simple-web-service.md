---
title: "간단한 웹 서비스 사용하기"
url: /refguide10/integration/consume-a-simple-web-service/
weight: 7
description: "WSDL을 가져오고 웹 서비스를 호출하는 로직을 만드는 방법을 설명합니다."
aliases:
    - /howto10/integration/consume-a-simple-web-service/
---

## 소개

Mendix는 엔터프라이즈를 위한 앱 플랫폼이며, 엔터프라이즈 소프트웨어에서는 [그린필드 프로젝트](https://en.wikipedia.org/wiki/Greenfield_project)에서 작업할 가능성이 거의 없습니다. 거의 모든 상황에서 기존 시스템과 통합해야 합니다. 이 사용 방법 문서에서는 Studio Pro로 웹 서비스를 사용하는 방법에 중점을 둡니다.

이 사용 방법 문서에서는 [W3Schools](https://www.w3schools.com/)의 예제 웹 서비스를 사용합니다. 이것은 섭씨를 화씨로 또는 그 반대로 온도를 변환하는 매우 간단한 웹 서비스입니다. 변환된 온도는 변수에 직접 저장할 수 있는 문자열 값으로 반환됩니다. 복잡한 XML 메시지를 반환하는 웹 서비스를 호출하려면 [XML 문서 가져오기 방법](/howto10/integration/importing-xml-documents/)에 설명된 XML-to-domain 매핑을 사용할 수 있습니다.

이 사용 방법 문서에서는 다음을 수행하는 방법을 알려드립니다:

* WSDL 가져오기
* 웹 서비스를 호출하는 로직 만들기

## WSDL 가져오기

WSDL은 웹 서비스의 오퍼레이션을 설명하며 Studio Pro에서 가져올 수 있습니다. WSDL을 가져온 후 마이크로플로우 편집기 내에서 웹 서비스의 오퍼레이션을 즉시 호출할 수 있습니다.

WSDL을 가져오려면 다음 단계를 따르세요:

1. **App Explorer**에서 모듈을 마우스 오른쪽 버튼으로 클릭하고 **Add other** > **Consumed web service**를 선택하세요.
2. 새 Consumed Web Service의 이름을 입력하고(예: *TemperatureConverter*) **OK**를 클릭하세요.
3. **Consumed Web Service** 화면에서 **Edit**을 클릭하세요. **URL**에 `https://www.w3schools.com/xml/tempconvert.asmx?wsdl`을 입력하고 **Import**를 클릭하세요.
4. 웹 서비스 포트를 선택하기 위한 **Select Ports** 대화 상자가 표시됩니다:

    {{< figure src="/attachments/refguide10/modeling/integration/web-services/consume-a-simple-web-service/select-ports.png" class="no-border" >}}

5. **OK**를 클릭하여 기본값을 선택한 다음 **OK**를 클릭하여 **WSDL Source** 대화 상자를 닫으세요. **CelsiusToFahrenheit** 및 **FahrenheitToCelsius** 오퍼레이션이 앱에 가져옵니다:

    {{< figure src="/attachments/refguide10/modeling/integration/web-services/consume-a-simple-web-service/wsdl-source-dialog-box.png" class="no-border" >}}

## 웹 서비스를 호출하는 로직 만들기

웹 서비스를 호출하는 로직을 만들려면 다음 단계를 따르세요:

1. **App Explorer**에서 모듈을 마우스 오른쪽 버튼으로 클릭하고 메뉴에서 **Add microflow**를 선택하세요:
2. 마이크로플로우(Microflow) 이름을 *ConvertCelsiusToFahrenheit*로 지정하고 **OK**를 클릭하세요.

    {{< figure src="/attachments/refguide10/modeling/integration/web-services/consume-a-simple-web-service/add-microflow.png" class="no-border" >}}

3. 빈 마이크로플로우가 표시됩니다:

    {{< figure src="/attachments/refguide10/modeling/integration/web-services/consume-a-simple-web-service/empty-microflow.png" class="no-border" >}}

4. **Toolbox**를 열고 시작 이벤트와 종료 이벤트 사이의 선에 **Create variable** 액티비티를 드래그하세요.
5. 새 액티비티를 더블클릭하여 **Create Variable** 속성 편집기를 여세요.
6. **Data Type**으로 **Integer/Long**을 선택하고 값으로 *100*을 입력하세요. **Output Variable Name**에 *TemperatureInCelsius*를 입력하세요:

    {{< figure src="/attachments/refguide10/modeling/integration/web-services/consume-a-simple-web-service/create-variable.png" class="no-border" >}}

7. **OK**를 클릭하세요. 마이크로플로우는 다음과 같이 보일 것입니다:

    {{< figure src="/attachments/refguide10/modeling/integration/web-services/consume-a-simple-web-service/18582079.png" class="no-border" >}}

8. 툴박스에서 **Call web service** 액티비티를 드래그하여 종료 이벤트 직전에 마이크로플로우에 추가하세요.
9. 이 액티비티를 더블클릭하여 **Call Web Service** 속성 편집기를 여세요. Consumed Web Service의 **Operation**에 대해 **Select**를 클릭하세요. **TemperatureConverter** 웹 서비스를 확장하고 **TempConvert** 아래에서 **CelsiusToFahrenheit** > **Select**를 클릭하세요:

    {{< figure src="/attachments/refguide10/modeling/integration/web-services/consume-a-simple-web-service/call-web-service-editor.png" class="no-border" >}}

10. 이 오퍼레이션의 **Location** 섹션에서 **Override location** 상자를 체크하여 위치를 재정의하고 웹 서비스의 보안 위치를 사용하세요.
11. **Edit**을 클릭하고 **Location** 편집기에서 URL의 `http`를 `https`로 변경한 다음 **OK**를 클릭하세요.
12. **Call Web Service** 속성 편집기의 **SOAP Request Body** 탭에서 **Celsius (optional)** 입력 매개변수를 더블클릭하고 웹 서비스 오퍼레이션이 문자열 값을 기대하므로 표현식에 `toString($TemperatureInCelsius)`를 입력하세요. 그런 다음 **OK**를 클릭하세요.

    {{< figure src="/attachments/refguide10/modeling/integration/web-services/consume-a-simple-web-service/soap-request-body.png" class="no-border" >}}

13. **SOAP Response** 탭에서 **Store in variable** 옵션에 **Yes**를 선택하세요. **Variable name**에 *TemperatureInFahrenheit*를 입력하세요:

    {{< figure src="/attachments/refguide10/modeling/integration/web-services/consume-a-simple-web-service/call-web-service-soap-response.png" class="no-border" >}}

14. **OK**를 클릭하세요. 마이크로플로우는 다음과 같이 보일 것입니다:

    {{< figure src="/attachments/refguide10/modeling/integration/web-services/consume-a-simple-web-service/microflow-part-2.png" class="no-border" >}}

15. **Toolbox**에서 종료 이벤트 앞의 선에 **Show message** 액티비티를 드래그하세요.
16. 새 액티비티를 더블클릭하여 **Show Message** 대화 상자를 여세요.

17. **Type**으로 **Information**을 선택하고 **Template**에 *The temperature in Fahrenheit is: {1}*을 입력하세요. *{1}*은 매개변수의 플레이스홀더 역할을 합니다.

    {{< figure src="/attachments/refguide10/modeling/integration/web-services/consume-a-simple-web-service/show-message.png" class="no-border" >}}

18. 새 매개변수를 만들고 표현식에 `$TemperatureInFahrenheit`를 입력하세요(이것은 웹 서비스 오퍼레이션의 반환 값입니다). **OK**를 클릭하세요:

    {{< figure src="/attachments/refguide10/modeling/integration/web-services/consume-a-simple-web-service/parameter.png" class="no-border" >}}

19. **OK**를 다시 클릭하여 show message 액티비티 값을 저장하세요. 마이크로플로우는 이제 다음과 같이 보일 것입니다:

    {{< figure src="/attachments/refguide10/modeling/integration/web-services/consume-a-simple-web-service/completed-microflow.png" class="no-border" >}}

20. 이 마이크로플로우를 트리거하는 메뉴 항목을 만드세요. 메뉴 항목을 만드는 방법에 대한 자세한 내용은 [네비게이션 설정](/refguide10/setting-up-the-navigation-structure/)을 참조하세요.

21. 애플리케이션을 배포하고 마이크로플로우를 트리거하여 웹 서비스 오퍼레이션을 호출하세요. 변환된 온도가 포함된 메시지가 표시됩니다.

## 더 읽기

* [보안 앱 만들기](/howto10/security/create-a-secure-app/)
* [복잡한 웹 서비스 사용하기](/howto10/integration/consume-a-complex-web-service/)
* [XML 문서 내보내기](/howto10/integration/export-xml-documents/)
* [Excel 문서 가져오기](/howto10/integration/importing-excel-documents/)
* [웹 서비스 노출](/howto10/integration/expose-a-web-service/)
* [Selenium 지원 사용하기](/howto10/integration/selenium-support/)
