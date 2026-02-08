---
title: "Mapping Document"
url: /refguide8/mapping-documents/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Mapping Document는 특정 XML 스키마 또는 JSON 구조에 따라 Mendix 객체를 XML 또는 JSON으로 변환하는 방법을 정의하는 데 사용됩니다. 두 가지 유형의 매핑이 있습니다: [Import Mapping](/refguide8/import-mappings/) 및 [Export Mapping](/refguide8/export-mappings/).

## Import Mapping

Import Mapping은 특정 XML 스키마 또는 JSON 구조에 따라 수신 XML 또는 JSON을 Mendix 객체로 변환하는 방법을 정의하는 데 사용됩니다. 이는 다른 시스템에서 받은 데이터를 해석하기 위해 필요합니다. Mendix에서 XML 또는 JSON으로부터 Mendix 객체를 생성하는 세 가지 기본 시나리오가 있습니다:

* [Call Web Service](/refguide8/call-web-service-action/) 액티비티에서 ([Imported Web Service](/refguide8/consumed-web-service/)에 정의된) 웹 서비스로부터 XML을 수신합니다.
* [Call REST Service](/refguide8/call-rest-action/) 호출 액션에서 XML 또는 JSON을 수신합니다.
* [Import from Mapping](/refguide8/import-mapping-action/) 액션에서 직접 XML 또는 JSON을 가져옵니다. 

다음은 웹 서비스의 **Order**를 **ReceivedOrder** Entity에 매핑하는 Import Mapping 문서의 예입니다:

{{< figure src="/attachments/refguide8/modeling/integration/mapping-documents/16843933.png" class="no-border" >}}

자세한 내용은 [Import Mappings](/refguide8/import-mappings/)를 참조하십시오.

## Export Mapping

Export Mapping은 특정 XML 스키마에 따라 Mendix 객체를 XML로 변환하는 방법을 정의하는 데 사용됩니다. 이는 다른 시스템이 처리할 수 있는 형식으로 다른 시스템에 데이터를 보낼 수 있도록 하기 위해 필요합니다. Mendix에서 Mendix 객체를 XML로 변환하는 두 가지 기본 시나리오가 있습니다:

* [Call Web Service](/refguide8/call-web-service-action/) 액티비티에서 ([Imported Web Service](/refguide8/consumed-web-service/)에 정의된) 웹 서비스로 XML을 전송합니다.
* [Export with Mapping](/refguide8/export-mapping-action/) 액션에서 직접 XML을 내보냅니다. 

다음은 Export Mapping 문서의 예입니다:

{{< figure src="/attachments/refguide8/modeling/integration/mapping-documents/16843940.png" class="no-border" >}}

이 예에서는 Export Mapping이 호출될 때 **Cheesecake** Entity가 전달됩니다. 그런 다음 전달된 Cheesecake Mendix 객체에서 **Topping_Cheesecake** 연관(Association)을 따라 **Topping** Entity가 가져옵니다. 결과는 XML 문서로 전달되거나 웹 서비스로 전송됩니다.

자세한 내용은 [Export Mappings](/refguide8/export-mappings/)를 참조하십시오.

## 새 Mapping Document 생성

Import 또는 Export Mapping을 지정하려면 다음 작업을 수행해야 합니다:

1. 새 **Import Mapping** 또는 **Export Mapping** 문서를 생성하십시오.

2. **Select elements...**를 클릭하여 이 매핑의 소스 스키마로 XML 스키마, Imported Web Service 문서 또는 JSON 구조 문서를 선택하십시오. **Figure 1**을 참조하십시오. 

    스키마가 큰 경우 모든 요소를 매핑할 필요가 없도록 요소의 하위 집합을 선택할 수 있습니다. 이에 대한 자세한 내용은 [Select Elements](/refguide8/select--elements/) 섹션에서 설명합니다.

3. **OK**를 클릭하십시오. 왼쪽에 Entity에 대한 플레이스홀더가 있고 오른쪽에 선택한 XSD 요소가 있는 구조가 생성됩니다.

    Mapping Document에 파라미터 Entity를 포함할 수 있습니다. 파라미터 Entity가 있는 Mapping Document는 구성된 타입의 파라미터를 전달하여 ([Call Web Service](/refguide8/call-web-service-action/) 또는 [Export with Mapping](/refguide8/export-mapping-action/) 액티비티에서) 호출해야 합니다. 파라미터 Entity가 없는 Mapping Document는 파라미터를 전달하지 않고 호출할 수 있습니다. Import Mapping의 경우 Connector 도구를 사용하여 생성된 구조의 플레이스홀더에 Entity를 드래그하여 파라미터 Entity를 포함할 수 있습니다. Export Mapping은 항상 파라미터 Entity(내보내려는 객체)가 필요하며 매핑된 루트 요소가 이에 사용됩니다. 두 경우 모두 파라미터 Entity는 노란색 화살표 파라미터 기호로 표시됩니다.

4. 스키마의 하위 요소를 매핑하십시오. Entity는 네 가지 방법으로 얻을 수 있습니다:

    * 매핑 파라미터에서
    * 연관(Association)으로
    * 사용자 정의 Microflow에서
    * Choice 또는 상속 XML 요소의 경우 Entity 특수화에서

5. 마지막으로 Entity 속성(Attribute)이 XML 또는 JSON 구조로 어떻게 변환되어야 하는지 구성해야 합니다.

## 편의 기능

* Map automatically: Domain Model에서 매핑에 사용할 수 있는 Entity 및 연관(Association)을 자동으로 검색합니다. 일치하는 Entity 또는 연관이 발견되지 않으면 Domain Model에서 생성됩니다. 이 기능은 [Map Automatically](/refguide8/map-automatically/) 섹션에서 자세히 설명합니다.
* Clear mappings: 문서의 모든 매핑 요소를 Entity 및 연관(Association)에서 연결 해제합니다. Domain Model에서 삭제되지는 않습니다.

## 팁: 중요한 창

Mapping Document는 두 개의 창에 크게 의존합니다. Studio Pro에서 보이지 않으면 **View 메뉴**에서 활성화할 수 있습니다.

* **Properties 창**. 개별 매핑 요소의 세부 정보가 여기에 표시됩니다.
* **Connector 창**. Connector 창의 Entity를 Mapping Document로 드래그합니다.

## 사용자 상호작용

* Entity 드래그. Connector 창에서 Entity를 드래그하여 Entity 플레이스홀더(점선 상자)에 드롭하여 XML 요소에 연결합니다. 
* 매핑 요소를 더블 클릭(Entity 쪽 또는 XML 쪽). 개별 매핑에 대한 세부 정보를 지정할 수 있는 대화 상자가 열립니다. 요소가 아직 Entity에 연결되지 않은 경우 먼저 Entity를 선택할 수 있는 대화 상자가 나타납니다.
* 마우스 오른쪽 클릭, "Select Entity". XML 요소에 연결된 Entity를 변경합니다.
* 마우스 오른쪽 클릭, "Go to Entity". Entity를 포함하는 Domain Model을 열고 Entity로 이동합니다.
* 마우스 오른쪽 클릭, "Collapse All". 매핑 요소의 모든 하위 항목을 숨겨 대규모 매핑에서 개요를 유지할 수 있습니다.
* 마우스 오른쪽 클릭, "Expand All". 매핑 요소의 모든 하위 항목을 확장합니다. 모든 기본 요소가 표시됩니다.
* 왼쪽 마우스 클릭 "-" 아이콘(매핑 요소 아래). 기본 요소를 보이지 않게 합니다.
* 왼쪽 마우스 클릭 "+" 아이콘(매핑 요소 아래). 기본 요소를 다시 보이게 합니다.

## 속성

| 속성 | 설명 |
| --- | --- |
| Name | 매핑의 이름입니다. |
| Documentation | 이 매핑의 기능을 설명하기 위한 추가 정보를 지정할 수 있습니다. |
| Web Service Operation Properties | 이 카테고리는 매핑이 XML Schema가 아닌 웹 서비스 호출용인 경우에만 채워집니다. |
| Web Service | 이 매핑이 대상으로 하는 Imported Web Service의 이름입니다. |
| Service name | Imported Service의 WSDL에 정의된 실제 서비스 이름입니다. |
| Operation name | 이 매핑이 대상으로 하는 서비스의 특정 작업 이름입니다. |
| Request part | Export Mapping에만 적용됩니다. 이 매핑이 대상으로 하는 헤더 또는 본문 파라미터의 이름입니다. 매핑이 모든 본문 파라미터용이면 값은 "Body"입니다. |
| XML Schema Properties | 이 카테고리는 매핑이 웹 서비스 호출이 아닌 XML Schema용인 경우에만 채워집니다. |
| XML Schema | 이 매핑이 대상으로 하는 XML Schema의 이름입니다. |
| Start at | 이 매핑이 정의하는 XML 구조의 부분을 결정합니다. |
| Send empty values | Export Mapping에만 적용됩니다. 매핑 요소가 선택 사항이고 nillable인 경우 빈 값을 보낼지 여부를 선택해야 합니다. 기본값은 빈 값을 보내지 않는 것입니다. |
