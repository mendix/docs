---
title: "OData 표현"
url: /refguide8/odata-representation/
---

이 문서는 Published OData Service에서 Entity가 어떻게 표현되는지 설명합니다.

## Attributes

| Mendix 데이터 유형 | Edm 유형 | 속성 값 | Atom XML 표현 |
| --- | --- | --- | --- |
| Id ¹ ²| Edm.Int64 | 3940649673954387 | 3940649673954387 |
| Autonumber | Edm.Int64 | 1 | 1 |
| Binary (지원되지 않음) ³ |   |   |   |
| Boolean | Edm.Boolean | true | true |
| Date and time | Edm.DateTimeOffset | Fri, 19 Dec 2014 10:27:27 GMT | 2014-12-19T10:27:27.000Z |
| Enumeration | Edm.String | Color.Blue | Blue |
| Big decimal  | Edm.Decimal | 0.3333333333333333333333333333333333 | 0.3333333333333333333333333333333333 |
| Hashed string | Edm.String | HashPassword | HashPassword |
| Integer  | Edm.Int64 | 50 | 50 |
| Long ² | Edm.Int64 | 3940649673954387 | 3940649673954387 |
| String ⁴ | Edm.String | John | John |

<small>¹ 서비스의 메타데이터에서 ID는 `isAttribute="false"`로 표시됩니다(`http://www.mendix.com/Protocols/MendixData` 네임스페이스의 Mendix 전용 XML 속성 사용). 이는 도메인 모델에 나타나지 않는 속성임을 나타냅니다. 참고: `isAttribute="false"` 기능은 Studio Pro [8.6.0](/releasenotes/studio-pro/8.6/#860)에서 도입되었습니다.<br />
² Excel을 사용하여 OData 소스를 가져올 때 긴 숫자가 잘려 보일 수 있습니다. 이는 Microsoft가 사용하는 데이터 유형의 제한 때문입니다. 자세한 내용은 [Last digits are changed to zeroes when you type long numbers in cells of Excel](https://support.microsoft.com/en-us/kb/269370)을 참조하십시오.<br />
³ Binary 데이터 유형은 지원되지 않지만 FileDocument 및 Image 시스템 Entity는 지원되며 `Edm.Binary` 유형의 Base64 인코딩 문자열로 표현됩니다.<br />
⁴ 문자열 속성의 길이가 제한된 경우 `MaxLength` 속성이 지정됩니다. 참고: 이 기능은 Studio Pro [8.16.0](/releasenotes/studio-pro/8.16/#8160)에서 도입되었습니다.</small>

또한 OData 항목의 `updated` 필드는 Entity의 시스템 changedDate 속성에서 가져옵니다. 이 속성을 사용할 수 없는 경우(노출되지 않았거나, 사용자에게 접근 권한이 없거나, 데이터베이스에서 비어 있는 경우) 기본 날짜(1970-1-1)가 사용됩니다.

## Associations {#associations}

OData 서비스의 설정에서 연관을 표현하는 방법을 선택할 수 있습니다. 아래에 두 가지 옵션이 설명되어 있습니다.

### 링크로 표현

연관을 링크로 표현하도록 선택하면 각 객체에 각 연관에 대한 링크가 포함됩니다. 연관된 객체는 해당 링크를 통해 검색할 수 있습니다.

이는 다른 쪽의 Entity도 이 서비스의 리소스인 경우에만 연관을 노출할 수 있음을 의미합니다. 또한 같은 서비스에서 동일한 Entity를 두 번 이상 게시할 수 없음을 의미합니다(이 경우 링크가 어디를 가리켜야 하는지 명확하지 않기 때문입니다).

이 방법을 사용하면 연관의 양쪽을 모두 노출할 수 있으며 다대다 연관도 노출할 수 있습니다.

### 연관된 객체 ID로 표현

연관을 연관된 객체 ID로 표현하도록 선택하면 연관된 객체의 ID가 `Edm.Int64` 속성으로 표현됩니다. 연관이 둘 이상의 객체를 참조하는 경우 해당 쪽에서 노출할 수 없습니다.
