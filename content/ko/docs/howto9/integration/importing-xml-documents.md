---
title: "XML 문서 가져오기"
url: /howto9/integration/importing-xml-documents/
weight: 3
description: "데이터 구조 및 GUI 준비, XML 스키마 추가, XML-도메인 매핑 생성 방법을 설명합니다."
---

## 소개

Mendix는 엔터프라이즈 조직을 위한 앱 플랫폼이며, 엔터프라이즈 소프트웨어에서는 [그린필드](https://en.wikipedia.org/wiki/Greenfield_project)에서 작업하는 경우가 드뭅니다. 거의 모든 상황에서 기존 시스템과 통합해야 합니다. Mendix는 다양한 통합 방법을 지원하지만, 이 사용 방법 문서에서는 Mendix로 XML 문서를 가져오는 방법에 초점을 맞춥니다.

이 사용 방법 문서에서는 다음을 배울 수 있습니다:

* 데이터 구조 및 GUI 준비하기
* XML 스키마 추가하기
* XML-도메인 매핑 생성하기

## 전제 조건

계속하기 전에 다음을 생성하는 방법을 알고 있는지 확인하십시오:

* Domain Model([기본 데이터 레이어 생성하기](/refguide9/create-a-basic-data-layer/) 참조)
* 사용자 정의 파일 문서([File Manager](/refguide9/file-manager/) 참조)
* 개요 및 상세 페이지([첫 번째 개요 및 상세 페이지 생성하기](/howto9/front-end/create-your-first-two-overview-and-detail-pages/) 참조)
* 메뉴 항목([내비게이션 설정](/refguide9/setting-up-the-navigation-structure/) 참조)

## 데이터 구조 및 GUI 준비하기

이 사용 방법에서 사용하는 XML 문서에는 고객이 포함되어 있습니다. 가져온 데이터를 볼 수 있으려면, 먼저 고객 데이터를 유지하기 위한 데이터 구조와 GUI를 설정해야 합니다. 그런 다음 XML 문서의 업로드 및 다운로드를 용이하게 해야 합니다. 마지막으로 실제 가져오기 로직과 해당 가져오기 매핑을 생성합니다.

데이터 구조 및 GUI를 준비하려면 다음 단계를 따르십시오:

1. Domain Model에서 다음 **Customer** Entity를 생성하십시오:

    {{< figure src="/attachments/howto9/integration/importing-xml-documents/18581649.png" class="no-border" >}}

2. **Customer** 유형의 객체를 관리하기 위한 개요 및 상세 페이지를 생성하십시오.
3. 고객 개요 페이지에 접근할 수 있는 메뉴 항목을 생성하십시오.
4. **System.FileDocument**의 모든 속성을 상속하는 **XMLDocument**라는 Entity를 생성하십시오:

    {{< figure src="/attachments/howto9/integration/export-xml-documents/18581650.png" class="no-border" >}}

5. **XMLDocument** 유형의 객체를 관리하기 위한 개요 및 상세 페이지를 생성하십시오.
6. XML 문서 개요 페이지에 접근할 수 있는 메뉴 항목을 생성하십시오(자세한 내용은 [내비게이션 설정](/refguide9/setting-up-the-navigation-structure/) 참조).

## XML 스키마(XSD) 추가하기

문서를 가져오든 내보내든, XML로 작업한다는 것은 애플리케이션에 XSD라고도 하는 XML 스키마가 포함되어야 한다는 의미입니다. XSD는 XML 파일의 가능한 내용을 설명합니다. XSD를 기반으로 애플리케이션은 XML 파일을 읽거나 쓰는 방법을 알게 됩니다. XSD 파일이 없는 경우, XML 문서를 입력으로 받는 온라인 XSD 생성기를 사용할 수 있습니다. 이 사용 방법에서는 [Customers.xsd](/attachments/howto9/integration/importing-xml-documents/18581652.xsd)를 사용할 수 있습니다.

XML 스키마(XSD)를 추가하려면 다음 단계를 따르십시오:

1. **App Explorer**에서 모듈을 마우스 오른쪽 버튼으로 클릭하고 메뉴에서 **Add Other** > **XML schema**를 선택하십시오.
2. **Name**에 **CustomersXSD**를 입력하고 **OK**를 클릭하십시오:

    {{< figure src="/attachments/howto9/integration/export-xml-documents/18581696.png" class="no-border" >}}

3. **XML Schema** 편집기에서 **Select**를 클릭하고 이전에 다운로드한 XSD 파일을 선택하십시오:

    {{< figure src="/attachments/howto9/integration/importing-xml-documents/18581657.png" class="no-border" >}}

4. **OK**를 클릭하여 XML 스키마를 저장하십시오. 다음 단계에서 이 스키마를 사용합니다.

## XML-도메인 매핑 생성하기

XML 스키마는 XML 파일의 가능한 내용을 설명하지만, XML 문서의 데이터가 애플리케이션으로 가져오는 방법을 정의하려면 XML-도메인 매핑을 생성해야 합니다.

XML-도메인 매핑을 생성하려면 다음 단계를 따르십시오:

1. **App Explorer**에서 모듈을 마우스 오른쪽 버튼으로 클릭하고 **Add Other** > **Import mapping**을 선택하십시오.
2. **Name**에 **ImportCustomersMapping**을 입력하고 **OK**를 클릭하십시오. 새 매핑이 자동으로 열리고 요소가 표시됩니다.

    {{< figure src="/attachments/howto9/integration/importing-xml-documents/18581689.png" class="no-border" >}}

3. **Select schema elements** 대화 상자에서 **Schema source**로 **XML schema**가 선택되어 있는지 확인하고, 스키마로 **CustomerXSD**를 선택하십시오. 그런 다음 **Expand all**을 클릭하여 요소가 있는 트리를 확인하십시오.
4. **Customer**, **ID**, **CompanyName**, **Address**, **City**, **PostalCode** 요소를 선택하십시오:

    {{< figure src="/attachments/howto9/integration/importing-xml-documents/18581656.png" class="no-border" >}}

5. **OK**를 클릭하십시오. 가져오기 매핑의 첫 번째 부분은 다음과 같이 표시됩니다:

    {{< figure src="/attachments/howto9/integration/importing-xml-documents/18581655.png" class="no-border" >}}

6. 커넥터를 여십시오(Studio Pro 오른쪽 하단 또는 **View** 메뉴에서).
7. 커넥터에서 **Customer** Entity를 매핑 편집기의 플레이스홀더로 끌어다 놓으십시오:

    {{< figure src="/attachments/howto9/integration/importing-xml-documents/18581681.png" class="no-border" >}}

    이 요소의 **Map entity** 편집기가 자동으로 열립니다:

    {{< figure src="/attachments/howto9/integration/importing-xml-documents/18581654.png" class="no-border" >}}

8. **Map entity** 편집기에서 다음을 수행하십시오:
    * **Method**에서 **Find an object (by key)**를 선택하십시오(객체를 검색하려면 value-to-attribute 매핑에서 하나 이상의 키를 정의해야 합니다)
    * **If no object was found**에서 **Create**를 선택하십시오
    * 5개의 value-to-attribute 매핑 모두에 대해 속성을 선택하십시오
    * **CustomerID**를 **Key**로 설정하십시오

    {{< figure src="/attachments/howto9/integration/importing-xml-documents/18581653.png" class="no-border" >}}

9. **OK**를 클릭하여 매핑을 저장하십시오.

## 가져오기 로직 생성하기

이 섹션에서는 [XML 문서](/attachments/howto9/integration/importing-xml-documents/18581651.xml)에 저장된 고객을 애플리케이션에 가져오는 로직을 생성합니다.

가져오기 로직을 생성하려면 다음 단계를 따르십시오:

1. **XMLDocument** 개요 페이지를 여십시오. 기본 레이아웃을 사용하면 다음과 같이 표시됩니다:

    {{< figure src="/attachments/howto9/integration/importing-xml-documents/18581648.png" class="no-border" >}}

2. 데이터 그리드 위젯의 도구 모음을 마우스 오른쪽 버튼으로 클릭하고 **Add button** > **Action**을 선택하여 새 액션 버튼을 추가하십시오:

    {{< figure src="/attachments/howto9/integration/importing-xml-documents/18581647.png" class="no-border" >}}

3. 새 버튼을 더블 클릭하여 **Edit Action Button** 편집기를 열고 다음을 수행하십시오:<br />
    1. 캡션을 *Import XML Document*로 변경하십시오<br />
    2. **On click** 이벤트에서 **Call a microflow**를 선택한 다음 Microflow의 **Select**를 클릭하고, 새 Microflow를 생성하여 이름을 **XMLDocument_Import**로 지정하십시오.<br />
    3. **OK**를 클릭하여 속성을 저장하십시오.<br />

    {{< figure src="/attachments/howto9/integration/importing-xml-documents/18581646.png" class="no-border" >}}

4. 새 **Import XML Document** 버튼을 마우스 오른쪽 버튼으로 클릭하고 컨텍스트 메뉴에서 **Go to on click microflow**를 선택하십시오. **XMLDocument**가 입력 매개변수인 빈 Microflow가 표시됩니다:

    {{< figure src="/attachments/howto9/integration/importing-xml-documents/18581669.png" class="no-border" >}}

5. **Toolbox**를 열고 **Import with mapping** 액티비티를 시작과 종료 이벤트 사이의 선으로 끌어다 놓으십시오. 새로운 XML 가져오기 액티비티가 삽입됩니다.
6. 새 액티비티를 더블 클릭하여 **Import With Mapping** 대화 상자를 열고 다음을 수행하십시오:<br />
    1. **Variable**로 입력 매개변수 **XMLDocument**를 선택하십시오.<br />
    2. 매핑으로 이전에 생성한 XML-도메인 매핑 **ImportCustomersMapping**을 선택하십시오.<br />
    3. **OK**를 클릭하여 속성을 저장하십시오.<br />

    {{< figure src="/attachments/howto9/integration/importing-xml-documents/18581668.png" class="no-border" >}}

    Microflow는 다음과 같이 표시됩니다:

    {{< figure src="/attachments/howto9/integration/importing-xml-documents/18581667.png" class="no-border" >}}

## XML 파일 가져오기

XML 파일을 가져오려면 다음 단계를 따르십시오:

1. 애플리케이션을 배포하고, [Customers.xml](/attachments/howto9/integration/importing-xml-documents/18581651.xml)을 업로드한 다음 가져오기 Microflow를 트리거하십시오.
2. 고객 개요 페이지를 열고 고객 데이터가 애플리케이션에 가져왔는지 확인하십시오.

## 더 읽기

* [복잡한 웹 서비스 소비하기](/howto9/integration/consume-a-complex-web-service/)
* [간단한 웹 서비스 소비하기](/howto9/integration/consume-a-simple-web-service/)
* [XML 문서 내보내기](/howto9/integration/export-xml-documents/)
* [웹 서비스 노출하기](/howto9/integration/expose-a-web-service/)
* [Selenium 지원 처리하기](/howto9/integration/selenium-support/)
* [REST 서비스 소비하기](/howto9/integration/consume-a-rest-service/)
* [OData를 사용하여 BI 도구에 데이터 노출하기](/howto9/integration/exposing-data-to-bi-tools-using-odata/)
