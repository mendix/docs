---
title: "XML 문서 내보내기"
url: /howto9/integration/export-xml-documents/
weight: 4
description: "XML 스키마 추가, 도메인-XML 매핑 생성 및 내보내기 로직을 설명합니다."
---

## 소개

엔터프라이즈 소프트웨어에서는 [그린필드](https://en.wikipedia.org/wiki/Greenfield_project)에서 작업하는 경우가 드뭅니다. 거의 모든 상황에서 기존 시스템과 통합해야 합니다. Mendix는 다양한 통합 방법을 지원하지만, 이 사용 방법 문서에서는 XML 문서를 내보내는 방법에 초점을 맞춥니다.

이 사용 방법 문서에서는 다음을 배울 수 있습니다:

* XML 스키마 추가하기
* 도메인-XML 매핑 및 내보내기 로직 생성하기

## 전제 조건

XML 문서를 내보내기 시작하려면 먼저 내보내기 중에 사용할 애플리케이션 데이터가 필요합니다. 먼저 고객 데이터를 유지하기 위한 데이터 구조와 GUI를 설정해야 합니다. 그런 다음 실제 내보내기 로직과 해당 내보내기 매핑을 생성합니다. 따라서 다음 방법을 알아야 합니다:

* Domain Model 생성하기(자세한 내용은 [기본 데이터 레이어 생성하기](/refguide9/create-a-basic-data-layer/) 참조)
* 사용자 정의 파일 문서 생성하기(자세한 내용은 [File Manager](/refguide9/file-manager/) 참조)
* 개요 및 상세 페이지 생성하기(자세한 내용은 [첫 번째 개요 및 상세 페이지 생성하기](/howto9/front-end/create-your-first-two-overview-and-detail-pages/) 참조)
* 메뉴 항목 생성하기(자세한 내용은 [내비게이션 설정](/refguide9/setting-up-the-navigation-structure/) 참조)

이 사용 방법을 시작하기 전에 다음 전제 조건을 완료했는지 확인하십시오:

1. Domain Model에서 다음 **Customer** Entity를 생성하십시오:

    {{< figure src="/attachments/howto9/integration/export-xml-documents/18581816.png" class="no-border" >}}

2. Customer 객체를 관리하기 위한 개요 및 상세 페이지를 생성하십시오.
3. 고객 개요 페이지에 접근할 수 있는 메뉴 항목을 생성하십시오.
4. *System.FileDocument*의 모든 속성을 상속하는 **XMLDocument** Entity를 생성하십시오:

    {{< figure src="/attachments/howto9/integration/export-xml-documents/18581650.png" class="no-border" >}}

5. XMLDocument와 Customer 간에 참조 집합(다대다 **[*-*]**)을 생성하십시오:

    {{< figure src="/attachments/howto9/integration/export-xml-documents/18581814.png" class="no-border" >}}

## XML 스키마(XSD) 추가하기

문서를 가져오든 내보내든, XML로 작업한다는 것은 애플리케이션에 XML 스키마(XSD라고도 함)가 포함되어야 한다는 의미입니다. XSD는 XML 파일의 가능한 내용을 설명합니다. 이 XSD를 기반으로 애플리케이션은 XML 파일을 읽거나 쓰는 방법을 알게 됩니다. XSD 파일이 없는 경우, XML 문서를 입력으로 받는 온라인 XSD 생성기를 사용할 수 있습니다. 이 사용 방법에서는 [Customers.xsd](/attachments/howto9/integration/export-xml-documents/18581813.xsd)를 사용할 수 있습니다.

1. **App Explorer**에서 모듈을 마우스 오른쪽 버튼으로 클릭하고 **Add other** > **XML schema**를 선택하십시오.
2. **Name**에 *CustomersXSD*를 입력하고 **OK**를 클릭하십시오:

    {{< figure src="/attachments/howto9/integration/export-xml-documents/18581696.png" class="no-border" >}}

3. **XML Schema** 편집기에서 **XML Schema**의 **Select**를 클릭하고 이전에 다운로드한 XSD 파일을 선택하십시오:

    {{< figure src="/attachments/howto9/integration/export-xml-documents/18581812.png" class="no-border" >}}

4. **OK**를 클릭하여 XML 스키마를 저장하십시오. 다음 단계에서 이 스키마를 사용합니다.

## 도메인-XML 매핑 생성하기

XML 스키마는 XML 문서의 내용이 무엇이어야 하는지 설명합니다. 애플리케이션의 데이터가 XML 문서로 변환되는 방법을 정의하려면 도메인-XML 매핑을 생성해야 합니다.

1. **App Explorer**에서 모듈을 마우스 오른쪽 버튼으로 클릭하고 **Add other** > **Export mapping**을 선택하십시오.
2. **Name**에 *ExportCustomersMapping*을 입력하십시오:

    {{< figure src="/attachments/howto9/integration/export-xml-documents/18581849.png" class="no-border" >}}

3. **OK**를 클릭하면 **Select schema elements for export mapping** 대화 상자가 자동으로 열립니다. 다음을 수행하십시오:<br />
    1. **Schema source**에서 **XML schema**를 선택하십시오.<br />
    1. 스키마에서 이전에 추가한 **CustomersXSD**를 선택하십시오.<br />
    1. 대화 상자의 **Schema elements** 섹션에서 **Expand all** 및 **Check all** 버튼을 클릭하십시오. 이렇게 하면 **Customer** 요소와 그 하위 요소가 자동으로 선택됩니다. 화면은 다음과 같이 표시됩니다:

    {{< figure src="/attachments/howto9/integration/export-xml-documents/18581811.png" class="no-border" >}}

4. **OK**를 클릭하십시오. 이제 가져오기 매핑의 첫 번째 부분이 표시됩니다:

    {{< figure src="/attachments/howto9/integration/export-xml-documents/18581810.png" class="no-border" >}}

5. **Connector** 패인을 열고 **Connector**에서 **XMLDocument** Entity를 플레이스홀더로 끌어다 놓으십시오:

    {{< figure src="/attachments/howto9/integration/export-xml-documents/18581809.png" class="no-border" >}}

    이 요소의 매핑 편집기가 팝업됩니다. **OK**를 클릭하여 닫을 수 있습니다.

6. **Connector**에서 **Customer** Entity를 플레이스홀더로 끌어다 놓으십시오:

    {{< figure src="/attachments/howto9/integration/export-xml-documents/18581808.png" class="no-border" >}}

    이 요소의 매핑 편집기가 열립니다:

    {{< figure src="/attachments/howto9/integration/export-xml-documents/18581806.png" class="no-border" >}}

7. 매핑 편집기에서 다음을 확인하십시오:<br />
    1. **Method**가 **By association**으로 설정되어 있는지 확인<br />
    2. **Association to parent**가 **XMLDocument_Customer**로 설정되어 있는지 확인<br />
8. 5개의 **Attribute to value element mapping** 인스턴스 모두에 대해 속성을 선택하십시오(또는 **Map attributes by name**을 클릭하여 이를 수행하십시오). 다음과 같은 매핑이 되어야 합니다:

    {{< figure src="/attachments/howto9/integration/export-xml-documents/18581807.png" class="no-border" >}}

9. **OK**를 클릭하여 매핑을 저장하십시오.

## 내보내기 로직 생성하기

이 섹션에서는 애플리케이션에 저장된 고객을 XML 문서로 내보내는 로직을 생성하는 방법을 설명합니다.

내보내기 로직을 생성하려면 다음 단계를 따르십시오:

1. **Customer** 개요 페이지를 열고, 데이터 그리드 위젯의 도구 모음을 마우스 오른쪽 버튼으로 클릭한 다음 **Add button** > **Action**을 선택하여 새 Action 버튼을 추가하십시오:

    {{< figure src="/attachments/howto9/integration/export-xml-documents/18581804.png" class="no-border" >}}

2. 새 버튼을 더블 클릭하여 속성 편집기를 열고 다음을 수행하십시오:
    * **Caption**에 *Export as XML*을 입력
    * **On click**에서 **Call a microflow**를 선택
    * **Select Microflow** 대화 상자에서 **New**를 클릭하여 새 Microflow를 생성하고 **Name**에 *Customers_Export*를 입력

    {{< figure src="/attachments/howto9/integration/export-xml-documents/18581803.png" class="no-border" >}}

3. **OK**를 클릭하여 버튼 속성을 저장하십시오.
4. 새 액션 버튼을 마우스 오른쪽 버튼으로 클릭하고 컨텍스트 메뉴에서 **Go to microflow**를 클릭하십시오. 하나의 입력 매개변수가 있는 빈 Microflow가 표시됩니다:

    {{< figure src="/attachments/howto9/integration/export-xml-documents/18581802.png" class="no-border" >}}

5. 입력 매개변수를 선택하고 삭제하십시오.
6. **Toolbox**를 여십시오. Studio Pro의 오른쪽 하단에 있어야 합니다(**View** 메뉴에서도 열 수 있습니다).
7. **Toolbox**에서 **Retrieve** 액티비티를 시작 이벤트와 종료 이벤트 사이의 선으로 끌어다 놓으십시오.
8. 액티비티를 더블 클릭하여 **Retrieve Objects** 속성 편집기를 열고 다음을 수행하십시오:
    * **Source**에서 **From database**를 선택
    * **Entity**에서 **Select...**를 클릭하고 customer Entity를 선택

    {{< figure src="/attachments/howto9/integration/export-xml-documents/18581830.png" class="no-border" >}}

9. **OK**를 클릭하십시오. Microflow는 다음과 같이 표시됩니다:

    {{< figure src="/attachments/howto9/integration/export-xml-documents/18581827.png" class="no-border" >}}

10. **Toolbox**에서 **Create object** 액티비티를 시작 이벤트와 종료 이벤트 사이의 선으로 끌어다 놓으십시오.
11. 액티비티를 더블 클릭하여 **Create Object** 편집기를 열고 다음을 수행하십시오:
    * **Entity**에서 **XMLDocument**를 선택
    * **New**를 클릭하여 변경 항목을 추가

    {{< figure src="/attachments/howto9/integration/export-xml-documents/18581801.png" class="no-border" >}}

12. **Edit Change Item** 편집기에서 다음을 수행하십시오:
    * 변경 항목의 **Member**에서 **XMLDocument_Customer** 참조를 선택
    * **Value**에 *$CustomerList*를 입력

    {{< figure src="/attachments/howto9/integration/export-xml-documents/18581825.png" class="no-border" >}}

13. **OK**를 클릭하여 변경 항목을 저장하십시오.
14. **Name** 속성을 *'customers.xml'*(작은따옴표['] 포함)로 설정하는 변경 항목을 생성하십시오. **Create Object** 대화 상자는 다음과 같이 표시됩니다:

    {{< figure src="/attachments/howto9/integration/export-xml-documents/create-object.png" class="no-border" >}}

15. **OK**를 클릭하여 액션 속성을 저장하십시오. Microflow는 다음과 같이 표시됩니다:

    {{< figure src="/attachments/howto9/integration/export-xml-documents/18581823.png" class="no-border" >}}

16. **Toolbox**에서 **Export with mapping** 액티비티를 시작 이벤트와 종료 이벤트 사이의 선으로 끌어다 놓으십시오. 새로운 XML 내보내기 액티비티가 삽입됩니다.
17. 새 액티비티를 더블 클릭하여 속성 편집기를 열고 다음을 수행하십시오:
    * **Mapping**에서 이전에 생성한 **ExportCustomersMapping** XML-도메인 매핑을 선택
    * **Parameter type**에서 Entity **XMLDocument**가 자동으로 선택되었는지 확인
    * **Parameter**에서 생성된 **NewXMLDocument**를 선택
    * 출력 **Name**에서 생성된 **NewXMLDocument**를 선택

    {{< figure src="/attachments/howto9/integration/export-xml-documents/18581822.png" class="no-border" >}}

18. **OK**를 클릭하여 속성을 저장하십시오. Microflow는 다음과 같이 표시됩니다:

    {{< figure src="/attachments/howto9/integration/export-xml-documents/18581821.png" class="no-border" >}}

19. **Toolbox**에서 **Download file** 액티비티를 시작 이벤트와 종료 이벤트 사이의 선으로 끌어다 놓으십시오.
20. 액티비티를 더블 클릭하여 **Download File** 대화 상자를 열고 **File document**으로 **NewXMLDocument**를 선택하십시오:

    {{< figure src="/attachments/howto9/integration/export-xml-documents/18581818.png" class="no-border" >}}

21. **OK**를 클릭하십시오. Microflow는 다음과 같이 표시됩니다:

    {{< figure src="/attachments/howto9/integration/export-xml-documents/18581819.png" class="no-border" >}}

22. 애플리케이션을 배포하고 고객 개요 페이지를 여십시오.
23. **Export as XML** 버튼을 클릭하고 생성된 XML 문서를 다운로드하십시오.

## 더 읽기

* [복잡한 웹 서비스 소비하기](/howto9/integration/consume-a-complex-web-service/)
* [간단한 웹 서비스 소비하기](/howto9/integration/consume-a-simple-web-service/)
* [Excel 문서 가져오기](/howto9/integration/importing-excel-documents/)
* [웹 서비스 노출하기](/howto9/integration/expose-a-web-service/)
* [Selenium 지원 활성화하기](/howto9/integration/selenium-support/)
* [XML 문서 가져오기](/howto9/integration/importing-xml-documents/)
* [REST 서비스 소비하기](/howto9/integration/consume-a-rest-service/)
* [OData를 사용하여 BI 도구에 데이터 노출하기](/howto9/integration/exposing-data-to-bi-tools-using-odata/)
