---
title: "SoapUI를 사용한 웹 서비스 테스트"
url: /refguide10/integration/testing-web-services-using-soapui/
weight: 30
description: "SoapUI로 SOAP 프로젝트를 만들고, SoapUI에서 어설션을 만들며, SoapUI를 사용한 자동 테스트를 구축하는 방법을 설명합니다."
aliases: 
    - /howto10/testing/testing-web-services-using-soapui/
---

## 소개

Mendix 애플리케이션에서 자체 웹 서비스를 게시할 수 있습니다. 이러한 웹 서비스는 오퍼레이션으로 구성됩니다. 다른 애플리케이션이 이 웹 서비스의 오퍼레이션을 호출하면 결과를 반환할 수 있습니다. 이 결과는 웹 서비스가 호출될 때 실행되는 마이크로플로우(Microflow)를 기반으로 합니다. SoapUI를 사용하면 이러한 웹 서비스에 대한 (자동) 테스트를 만들 수 있습니다.

이 사용 방법 문서에서는 다음을 수행하는 방법을 알려드립니다:

* SoapUI로 SOAP 프로젝트 만들기
* SoapUI에서 어설션 만들기
* SoapUI를 사용한 자동 테스트 구축

## 준비

이 사용 방법 문서를 시작하기 전에 다음 사전 요구 사항을 완료하세요.

* [SoapUI](https://www.soapui.org/downloads/soapui.html)를 다운로드하고 설치하세요
* [웹 서비스 노출](/howto10/integration/expose-a-web-service/) 사용 방법 문서를 완료하세요

| 소프트웨어 | 이 사용 방법 문서에서 사용한 버전 |
| --- | --- |
| SoapUI | 5.7.0 |

{{% alert color="warning" %}}
이 사용 방법 문서의 모든 이미지, 이름 및 단계는 Studio Pro 9.24를 기반으로 합니다. 다른 버전을 사용할 때 화면의 이미지 및/또는 이름이 이 사용 방법 문서에서 사용된 이미지 또는 이름과 다를 수 있습니다.
{{% /alert %}}

## 추가 마이크로플로우를 웹 서비스 오퍼레이션으로 게시하기

[웹 서비스 노출](/howto10/integration/expose-a-web-service/)에서 마이크로플로우 *GetCustomers*를 웹 서비스 오퍼레이션으로 게시했습니다. 이 문서에서는 두 개의 마이크로플로우를 더 만들고 웹 서비스 오퍼레이션으로 게시합니다.

1. [웹 서비스 노출 방법](/howto10/integration/expose-a-web-service/)에서 만든 앱을 여세요.
2. 고객을 만들고 Boolean을 반환하는 마이크로플로우를 만드세요:

    {{< figure src="/attachments/refguide10/modeling/integration/web-services/testing-web-services-using-soapui/model1.jpg" class="no-border" >}}

3. 고객을 삭제하고 Boolean을 반환하는 마이크로플로우를 만드세요:

    {{< figure src="/attachments/refguide10/modeling/integration/web-services/testing-web-services-using-soapui/model2.jpg" class="no-border" >}}

4. [웹 서비스 노출 방법](/howto10/integration/expose-a-web-service/)에 설명된 대로 두 마이크로플로우를 **CustomerWebService**의 웹 서비스 오퍼레이션으로 게시하세요.

## 새 SOAP 프로젝트 만들기

이 섹션에서는 새 SOAP 프로젝트를 만듭니다.

1. **SoapUI**를 여세요.
2. <kbd>Ctrl</kbd> + <kbd>N</kbd>을 눌러 새 SOAP 프로젝트를 만드세요.
3. Studio Pro에서 앱을 로컬에서 실행하세요.
4. `http://localhost:8080/ws-doc/`로 이동하세요.
    {{< figure src="/attachments/refguide10/modeling/integration/web-services/testing-web-services-using-soapui/18580314.png" class="no-border" >}}
5. SoapUI의 **Initial WSDL** 필드에 WSDL 스키마의 URL을 입력하세요.
    **Project Name** 필드는 웹 서비스 이름 뒤에 *?wsdl*이 추가된 이름으로 자동으로 채워집니다.
    {{< figure src="/attachments/refguide10/modeling/integration/web-services/testing-web-services-using-soapui/18580334.png" class="no-border" >}}
6. **OK**를 클릭하세요. SoapUI에 새 SOAP 프로젝트가 만들어집니다.

## TestSuite, TestCase 및 TestStep 구축

이 섹션에서는 TestSuite를 구축합니다. TestSuite에는 하나 이상의 TestCase가 포함됩니다. 모든 TestCase에는 하나 이상의 TestStep이 포함됩니다.

1. SoapUI에서 <kbd>Ctrl</kbd> + <kbd>T</kbd>를 눌러 새 TestSuite를 만드세요. 주어진 이름 `TestSuite 1`을 사용할 수 있습니다.
2. **OK**를 클릭하세요.
3. `TestSuite 1`을 선택하고 <kbd>Ctrl</kbd> + <kbd>N</kbd>을 눌러 새 TestCase를 만드세요.
    {{< figure src="/attachments/refguide10/modeling/integration/web-services/testing-web-services-using-soapui/18580331.png" class="no-border" >}}
4. **OK**를 클릭하세요.
5. TestSuite 1과 TestCase 1을 확장하세요.
6. **Test Steps(0)**를 마우스 오른쪽 버튼으로 클릭하고 **SOAP Request**를 선택하세요.
    {{< figure src="/attachments/refguide10/modeling/integration/web-services/testing-web-services-using-soapui/18580312.png" class="no-border" >}}
7. 이름 필드에 *Retrieve Customers*를 입력하세요.
    {{< figure src="/attachments/refguide10/modeling/integration/web-services/testing-web-services-using-soapui/18580329.png" class="no-border" >}}
8. **OK**를 클릭하세요.
9. **CustomerWebserviceSoap -> GetCustomers**를 선택하세요.
    {{< figure src="/attachments/refguide10/modeling/integration/web-services/testing-web-services-using-soapui/18580328.png" class="no-border" >}}
10. **OK**를 클릭하세요.
    {{< figure src="/attachments/refguide10/modeling/integration/web-services/testing-web-services-using-soapui/18580327.png" class="no-border" >}}
11. **OK**를 클릭하세요.
12. SOAP 요청 **Retrieve Customers**를 여세요.
    {{< figure src="/attachments/refguide10/modeling/integration/web-services/testing-web-services-using-soapui/18580326.png" class="no-border" >}} 
13. 다음 값을 변경하세요:

    ```java
    <Offset>?</Offset>
    <PageSize>?</PageSize>
    ```

    다음으로 변경:

    ```java
    <Offset>0</Offset>
    <PageSize>10</PageSize>
    ```

14. <kbd>Alt</kbd> + <kbd>Enter</kbd>를 눌러 요청을 제출하세요. 이전 사용 방법 문서에서 만든 고객이 응답에 표시됩니다. 응답은 아래 코드와 같습니다:

    ```xml
    <soap:Envelope xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://www.example.com/">
        <soap:Body>
            <tns:GetCustomersResponse>
                <Customer>
                    <Name>Jessica D. Rogers</Name>
                    <Address>2118 Collins Street</Address>
                    <ZipCode>PA 16646</ZipCode>
                    <City>Hastings</City>
                </Customer>
                <Customer>
                    <Name>Jamie S. Wentz</Name>
                    <Address>3269 Village View Drive</Address>
                    <ZipCode>MD 20872</ZipCode>
                    <City>Damascus</City>
                </Customer>
                <Customer>
                    <Name>Blake G. Race</Name>
                    <Address>4437 Sunny Glen Lane</Address>
                    <ZipCode>OH 44115</ZipCode>
                    <City>Cleveland</City>
                </Customer>
                <Customer>
                    <Name>Angela L. Dolly</Name>
                    <Address>3718 Alpha Avenue</Address>
                    <ZipCode>TX 75439</ZipCode>
                    <City>Ector</City>
                </Customer>
            </tns:GetCustomersResponse>
        </soap:Body>
    </soap:Envelope>
    ```

## 어설션

어설션은 실행 중에 TestStep이 수신한 메시지를 검증하는 데 사용되며, 일반적으로 메시지의 일부(또는 전체 메시지)를 예상 값과 비교합니다. 이 섹션에서는 고객 수를 검증하는 어설션을 만듭니다.

1. **Assertions (1)**을 클릭하세요.
    {{< figure src="/attachments/refguide10/modeling/integration/web-services/testing-web-services-using-soapui/18580307.png" class="no-border" >}}
    3장 9단계에서 *Add SOAP Response Assertion* 체크박스가 체크되었습니다. 이것이 목록에서 보이는 첫 번째 어설션인 *SOAP Response - VALID*입니다.
2. 어설션 추가 아이콘을 클릭하세요.
    {{< figure src="/attachments/refguide10/modeling/integration/web-services/testing-web-services-using-soapui/18580324.png" class="no-border" >}}
3. **Property Content**를 클릭하세요.
4. **XPath Match**를 클릭하세요.
5. XPath Expression 필드에 *count(//Customer)*를 입력하세요.
6. 이전 사용 방법 문서의 1.4 단계에서 일부 데이터를 추가했습니다. **Expected Result** 필드에 만든 고객의 수를 입력하세요. 이 예에서는 네 명의 고객이 만들어졌습니다.
    {{< figure src="/attachments/refguide10/modeling/integration/web-services/testing-web-services-using-soapui/18580323.png" class="no-border" >}}
7. **Save**를 클릭하세요.

## TestCase 확장

이 섹션에서는 여러 테스트 단계와 어설션으로 TestCase를 확장합니다.

1. 다음 세부 정보로 기존 TestCase에 새 SOAP 요청을 추가하세요:

    | 필드 | 값 |
    | --- | --- |
    | Specify name for step | Create Customer |
    | Select operation to invoke for request | CustomerWebServiceSoap -> CreateCustomer |

2. 요청을 다음 값으로 변경하세요:

    ```xml
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:exam="http://www.example.com/">
       <soapenv:Header/>
       <soapenv:Body>
          <exam:CreateCustomer>
             <Name>Donald A. Hylton</Name>
             <Address>784 Better Street</Address>
             <City>Kansas City</City>
             <ZipCode>KS 66102</ZipCode>
          </exam:CreateCustomer>
       </soapenv:Body>
    </soapenv:Envelope>
    ```

3. **Contains Assertion**을 추가하고 콘텐츠 필드에 *true*를 입력하세요.
    {{< figure src="/attachments/refguide10/modeling/integration/web-services/testing-web-services-using-soapui/18580322.png" class="no-border" >}} 
4. TestStep **Retrieve Customers**를 마우스 오른쪽 버튼으로 클릭하세요.
5. **Clone TestStep**을 선택하세요.
6. **TestStep Name**을 *Retrieve Customers 2*로 변경하세요.
    {{< figure src="/attachments/refguide10/modeling/integration/web-services/testing-web-services-using-soapui/18580320.png" class="no-border" >}}
7. **OK**를 클릭하세요.
8. TestStep **Retrieve Customers 2**를 여세요.
9. **Assertions (2)**를 클릭하세요.
10. **XPath Match - Unknown**을 여세요.
11. **Expected result**를 *1 + [5.6 단계에서 입력한 숫자]*로 변경하세요.
12. **Save**를 클릭하세요.
13. 다음 세부 정보로 기존 TestCase에 새 SOAP 요청을 추가하세요:
    * **Specify name for step**에 *Delete Customer*를 입력하세요.
    * **Select operation to invoke for request** 필드에 *CustomerWebServiceSoap -> DeleteCustomer*를 입력하세요.

14. 요청을 다음 값으로 변경하세요:

    ```xml
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:exam="http://www.example.com/">
       <soapenv:Header/>
       <soapenv:Body>
          <exam:DeleteCustomer>
             <Name>Donald A. Hylton</Name>
          </exam:DeleteCustomer>
       </soapenv:Body>
    </soapenv:Envelope>
    ```

## TestCase 실행

이 섹션에서는 이전 장에서 만든 TestCase를 실행하는 방법을 알아봅니다.

1. TestCase **TestCase 1**을 여세요.
    {{< figure src="/attachments/refguide10/modeling/integration/web-services/testing-web-services-using-soapui/18580310.png" class="no-border" >}}
2. 이 TestCase 실행 아이콘을 클릭하세요.
    {{< figure src="/attachments/refguide10/modeling/integration/web-services/testing-web-services-using-soapui/18580309.png" class="no-border" >}}

축하합니다! SoapUI로 첫 번째 자동 테스트를 만들었습니다.

## 더 읽기

* [런타임 오류의 근본 원인 찾기](/howto10/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
* [Mendix에서 경고 메시지 지우기](/howto10/monitoring-troubleshooting/clear-warning-messages/)
* [SoapUI를 사용한 웹 서비스 테스트](/howto10/testing/testing-web-services-using-soapui/)
* [JMX를 사용한 Mendix 모니터링](/developerportal/deploy/monitoring-mendix-using-jmx/)
* [원격 Java 액션 디버깅](/howto10/monitoring-troubleshooting/debug-java-actions-remotely/)
* [로그 수준](/howto10/monitoring-troubleshooting/log-levels/)
* [Java 액션 디버깅](/howto10/monitoring-troubleshooting/debug-java-actions/)
* [마이크로플로우 및 나노플로우 디버깅](/refguide10/debug-microflows-and-nanoflows/)
* [원격 마이크로플로우 디버깅](/refguide10/debug-microflows-remotely/)

다음 유용한 링크를 통해 이 주제에 대해 더 알아보세요:

* [SoapUI 초보자를 위한 10가지 팁](https://www.soapui.org/getting-started/10-tips-for-the-soapui-beginner.html)
