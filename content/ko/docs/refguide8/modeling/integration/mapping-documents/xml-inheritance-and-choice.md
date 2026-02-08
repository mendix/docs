---
title: "XML Inheritance 및 Choice"
url: /refguide8/xml-inheritance-and-choice/
---

## Entity 특수화를 통한 객체 획득

매핑 문서에서 XSD 요소에 대한 두 가지 특수한 경우가 있습니다: Choice와 Inheritance입니다.

* Inheritance 요소는 특정 유형 또는 그 하위 유형 중 하나의 요소로 채워져야 합니다.
* Choice 요소는 여러 대안 중 정확히 하나로 채워져야 합니다.

Mendix에서는 Inheritance와 Choice 모두 Entity 특수화로 매핑됩니다.

* 기본 Inheritance 또는 Choice 요소는 일반화 Entity에 매핑됩니다. Export Mapping의 경우, 기본 매핑에는 [Export Mappings](/refguide8/export-mappings/)에서 설명한 대로 Mendix 객체를 얻는 방법(매개변수에서, 연관에 의해, Microflow 또는 키)에 대한 설정이 포함됩니다.
* Inheritance 또는 Choice의 하위 요소는 Entity 특수화로 매핑됩니다. Export Mapping의 경우, 기본 매핑 요소에서 한 단계 위에서 이미 정의되어 있으므로 객체를 얻는 방법을 지정할 수 없습니다. 그러나 Import Mapping의 경우에는 [Import Mappings](/refguide8/import-mappings/)에서 설명한 대로 Mendix 객체를 얻는 방법을 지정해야 합니다.

## XML Inheritance

아래 이미지에서는 Inheritance가 포함된 Export Mapping의 예시를 보여줍니다. Import Mapping의 경우 구조는 동일하며 화살표 방향만 반대입니다. 하나의 *Persons* 객체는 *Person*에 대한 일대다 연관을 가집니다. Person은 Customer 또는 Employee일 수 있습니다.

{{< figure src="/attachments/refguide8/modeling/integration/mapping-documents/xml-inheritance-and-choice/16843946.png" class="no-border" >}}

Import Mapping의 경우, 수신 XML을 특정 XSD 유형에 매핑하는 것은 *xsi:type* 속성으로 정의됩니다. 그러나 이 속성은 선택 사항입니다. *xsi:type* 속성이 **없고** 요소의 기본 유형이 **추상이 아닌** 경우 해당 유형이 사용됩니다(예시에서는 Person). 기본 유형에 Import Mapping 문서에 정의된 매핑이 없으면 건너뜁니다. 기본 유형이 추상인 경우 오류가 발생합니다.

Export Mapping의 경우, Inheritance 요소가 **선택 사항**이고 연관 또는 Microflow를 통해 빈 객체가 획득되면 요소가 생성되지 않습니다. Inheritance 요소가 **nillable**이고 빈 객체가 획득되면 *xsi:type*이 매핑의 첫 번째 Inheritance 옵션으로 설정된 요소가 생성됩니다.

### Export Mapping에서 웹 서비스의 Request Part 선택

[요소 선택](/refguide8/select--elements/)에서는 매핑에 사용할 XML 스키마 또는 WSDL 요소를 선택하는 방법을 설명합니다. Export Mapping을 사용하여 웹 서비스 작업의 요청 본문을 만드는 경우, 여러 요청 매개변수가 있으면 Request Part를 선택할 수 있습니다. Inheritance 요소도 Request Part로 지원됩니다.

루트 요소가 Inheritance 요소인 경우 전체 본문만 매핑할 수 있습니다. 이 경우 개별 요청 매개변수 매핑은 불가능합니다.

## XML Choice

아래 이미지는 Choice 요소가 있는 Export Mapping을 보여줍니다. 스키마는 직원 ID 또는 회원 ID의 두 가지 대안이 있는 Choice를 지정합니다. 이 이미지에서는 기본 Entity *Person*이 Choice 옵션의 일반화 역할을 하도록 Choice 요소에 매핑됩니다.

{{< figure src="/attachments/refguide8/modeling/integration/mapping-documents/xml-inheritance-and-choice/16843945.png" class="no-border" >}}

객체를 내보낼 때, Choice 요소의 **선택 사항** 처리는 다른 요소와 다릅니다. 이는 Choice 요소가 XML에 명시적으로 나타나지 않기 때문입니다. Choice 요소에 대해 빈 객체를 내보내는 것이 유효한 두 가지 경우가 있습니다: 첫째, Choice 요소 자체가 **선택 사항**인 경우, 둘째, Choice 옵션 중 하나 이상이 **선택 사항**인 경우입니다. 이러한 경우에는 요소가 생성되지 않으며, 그렇지 않으면 오류가 발생합니다. Choice 요소의 하나 이상의 옵션이 **nillable**이고 Choice 요소에서 빈 객체를 내보내는 경우, Mendix는 *xsi:nil* 속성으로 어떤 XML 요소를 보내야 하는지 결정할 수 없으므로 '지원되지 않음' 오류를 발생시킵니다.
