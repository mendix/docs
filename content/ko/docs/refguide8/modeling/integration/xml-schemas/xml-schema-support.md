---
title: "XML 스키마 지원(XML Schema Support)"
url: /refguide8/xml-schema-support/
---

## 소개

Mendix는 XML Schema Definition (XSD) 파일을 해석하여 XML 가져오기/내보내기 및 SOAP/XML 웹 서비스 호출을 위한 입력/출력 형식을 결정합니다. Mendix Studio Pro를 사용하여 XML 스키마(.xsd 파일) 또는 웹 서비스 정의(.wsdl 파일)를 가져올 때 지원되지 않는 구성에 대한 경고 메시지가 포함된 대화 상자가 표시될 수 있습니다. 이는 현재 Mendix가 전체 XSD 표준을 지원하지 않기 때문입니다. Mendix의 매핑은 Entity와 Attribute를 기반으로 하며, 일부 XSD 구성은 이 형식에 쉽게 적용되지 않습니다. 다음 표는 Mendix에서 지원되는 XSD 구성을 보여줍니다.

| XSD Construct | Is Supported |
| --- | --- |
| group | Yes |
| sequence | Only if it occurs exactly once |
| choice | Only if the individual options are not sequence elements |
| unique | Yes |
| attributeGroup | Yes |
| all | Only if each child element of the **all** occurs at most once |
| union | Yes |
| any | No |
| anyAttribute | No |
| list | No |

Mendix에는 두 가지 종류의 XML 매핑이 있습니다: XML 데이터를 Mendix 객체로 변환하는 Import Mapping과 그 반대를 수행하는 Export Mapping입니다. Import Mapping은 Microflow에서 'Import XML' 액티비티를 사용하여 XML 파일을 가져올 때와 웹 서비스 호출의 응답을 처리할 때 사용됩니다. Export Mapping은 Microflow에서 XML 파일을 내보낼 때와 웹 서비스 호출 요청을 위한 XML을 생성할 때 사용됩니다.

Import Mapping의 매핑 편집기에서 XSD에 따라 XML에 나타날 수 있는 요소를 확인한 다음 해당 요소에 대한 Mendix 객체 매핑을 정의할 수 있습니다. 요소가 얼마나 자주 또는 어떤 순서로 나타나는지는 크게 중요하지 않습니다. 요소가 나타날 때마다 해당 요소에 대한 매핑이 적용됩니다.

XSD에 지원되지 않는 구성이 포함된 경우 매핑 편집기에서 다음 경고 아이콘으로 강조 표시됩니다: {{< figure src="/attachments/refguide8/modeling/integration/xml-schemas/xml-schema-support/16843903.png" class="no-border" >}}

이 아이콘은 지원되지 않는 각 요소 또는 Attribute 옆에 표시됩니다. 이러한 요소나 Attribute를 선택하면 일관성 오류가 발생합니다.

Export Mapping을 사용하여 생성된 XML은 XSD 사양을 엄격히 준수해야 합니다. 이는 매핑에 의해 생성된 XML 태그가 XSD에서 지정한 정확한 순서여야 한다는 것을 의미합니다.

## 요소(Elements)와 유형(Types)

XSD는 XML의 태그에 해당하는 요소를 정의합니다. 요소는 기본 값이나 하위 요소 목록과 같은 내용을 정의하는 유형을 가집니다. 요소는 단순 유형(Simple Type) 또는 복합 유형(Complex Type)을 가질 수 있으며, 복합 유형은 단순 콘텐츠 또는 복합 콘텐츠를 가질 수 있습니다. 단순 유형과 단순 콘텐츠를 가진 복합 유형 모두에서 요소의 내용은 정수나 문자열 값과 같은 기본 값입니다. 복합 콘텐츠를 가진 복합 유형의 경우, 요소의 내용은 여러 하위 요소로 구성될 수 있습니다. 복합 유형은 XML 태그 내에 나타날 수 있는 Attribute도 정의할 수 있습니다.

다음 예시는 XML 스키마와 해당 스키마를 준수하는 XML 인스턴스를 보여줍니다. 스키마는 'name'과 'shoesize' 요소의 시퀀스인 복합 콘텐츠를 가진 복합 유형의 'customer' 요소를 정의합니다. 'name' 요소는 'string'이라는 단순 유형을 가집니다. 'shoesize' 요소는 'country' Attribute를 추가하여 단순 유형 'integer'를 확장하는 단순 콘텐츠를 가진 복합 유형을 가집니다.

**XML 스키마 예시**

```xml
<?xml version="1.0" encoding="utf-8"?>
<xs:schema targetNamespace="http://www.example.com/" elementFormDefault="qualified" xmlns:tns="http://www.example.com/" xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="customer">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="name" type="xs:string"/>
        <xs:element name="shoesize" type="tns:shoesizeType"/>
      </xs:sequence>
    </xs:complexType>
  </xs:element>
  <xs:complexType name="shoesizeType">
    <xs:simpleContent>
      <xs:extension base="xs:integer">
        <xs:attribute name="country" type="xs:string"/>
      </xs:extension>
    </xs:simpleContent>
  </xs:complexType>
</xs:schema>

```

**XML 인스턴스 예시**

```xml
<?xml version="1.0" encoding="utf-8"?>
<customer xmlns="http://www.example.com/">
  <name>John Doe</name>
  <shoesize country="GB">8</shoesize>
</customer>

```

Mendix의 XML 매핑은 Entity, Attribute 및 Association으로 구성된 Domain Model을 기반으로 하므로, 매핑을 생성할 때 XSD 요소는 일종의 객체 모델로 변환됩니다. 복합 유형을 가지거나 두 번 이상 나타나는 요소는 Entity에 매핑되는 '객체 요소'로 변환됩니다. 단순 유형을 가지고 최대 한 번 나타나는 요소는 포함하는 객체 요소의 Entity Attribute에 매핑되는 '값 요소'로 변환됩니다. 복합 유형의 XML Attribute도 값 요소로 변환됩니다.

다음 이미지는 이전 예시의 XML 스키마가 Mendix에서 매핑으로 변환되는 방법을 보여줍니다. 이것은 예시의 'customer' 요소에 대한 XML-도메인 매핑입니다. 'customer' 요소는 객체 요소(회색 직사각형)로 변환되며, 'name'과 'shoesize' 요소 및 'shoesize' 요소의 'country' Attribute는 매핑에서 값 요소로 변환됩니다.

## Attribute

복합 유형은 XML 태그 내에 나타날 수 있는 Attribute를 지정할 수 있습니다. 이러한 Attribute는 항상 단순 유형을 가지며 최대 한 번 나타날 수 있습니다. Attribute는 두 매핑 유형 모두에서 완전히 지원됩니다. Attribute는 매핑에서 값 요소로 변환되므로 Entity의 Attribute에 매핑될 수 있습니다.

## 단순 유형 및 단순 콘텐츠를 가진 복합 유형

Mendix는 기본 콘텐츠를 가진 요소, 즉 단순 유형이나 단순 콘텐츠를 가진 복합 유형을 완전히 지원합니다. 그러나 현재 Mendix는 문자열을 유한한 가능성 집합으로 제한하거나 정수의 범위를 제한하는 등 단순 유형의 제한 사항을 고려하지 않습니다. 이러한 경우 기본 유형(예: 문자열)의 모든 가능한 값이 허용됩니다.

일반적으로 기본 콘텐츠를 가진 요소는 매핑에서 값 요소로 변환됩니다. 어떤 이유로 기본 콘텐츠를 가진 요소가 매핑에서 객체 요소로 변환되는 경우(예: 두 번 이상 나타나거나 Attribute도 정의하는 복합 유형을 가진 경우) 요소의 내용은 '(Contents)'라는 추가 값 요소로 변환됩니다.

{{% alert color="info" %}}
16진수 바이너리(hex binary) 유형은 문자열로 인식되므로 바이너리 유형에 대한 작업은 16진수 바이너리에 적용할 수 없습니다(예: MTOM 첨부 파일).
{{% /alert %}}

## 복합 콘텐츠를 가진 복합 유형

복합 콘텐츠를 가진 복합 유형의 요소의 경우, 요소의 내용은 choice와 sequence와 같은 하나 이상의 그룹화 구성에 의해 순서와 다중성이 정의된 여러 하위 요소로 구성될 수 있습니다.

## 혼합 콘텐츠(Mixed Content)

복합 유형은 콘텐츠를 혼합으로 정의할 수 있습니다. 이는 요소가 텍스트와 하위 요소를 모두 내용으로 가진다는 것을 의미합니다. 혼합 콘텐츠는 (X)HTML과 같은 문서 데이터에서 일반적으로 발견되며, 구조화된 데이터에서는 덜 일반적입니다. 현재 혼합 콘텐츠는 Mendix에서 지원되지 않습니다.
