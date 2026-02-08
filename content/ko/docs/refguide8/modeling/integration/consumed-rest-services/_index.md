---
title: "Consumed REST Service"
url: /refguide8/consumed-rest-services/
description: "Mendix에서 소비되는 REST 서비스 및 JSON에 대한 개요를 제공합니다."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## REST

REST(Representational State Transfer)는 리소스를 소비하거나 노출하기 위한 접근 방식입니다. 엔드포인트 간에 데이터를 전송하기 위해 광범위한 스키마나 계약이 필요하지 않아 단순성 때문에 인기를 얻고 있습니다. 다음을 사용합니다:

* 리소스를 찾기 위한 HTTP URL
* 인증 및 콘텐츠 유형(예: XML 또는 JSON) 지정을 위한 HTTP 헤더
* 리소스에 대한 작업을 식별하기 위한 HTTP 메서드(예: GET(데이터 검색) 또는 POST(데이터 전송))

계약과 스키마가 없어 REST를 쉽게 시작할 수 있습니다. 그러나 많은 REST 엔드포인트는 복잡한 데이터를 반환합니다.

[JSON Structure](/refguide8/json-structures/) 문서는 JSON 데이터에 구조를 부여하는 데 도움이 됩니다. 예제 JSON 스니펫에서 [Mapping Document](/refguide8/mapping-documents/)에서 사용되는 경량 스키마가 추출됩니다. [Import Mapping](/refguide8/import-mappings/) 문서는 JSON(또는 XML)을 Mendix 객체로 변환하고, [Export Mapping](/refguide8/export-mappings/) 문서는 Mendix 객체를 JSON(또는 XML)으로 직렬화합니다.

## JSON

JSON(JavaScript Object Notation)은 데이터의 경량 표현입니다. 

```js
{
	"name": "John Smith",
	"age": 23,
	"address": 
	{
		"street": "Dopeylane 14",
		"city": "Worchestire"
	}
}
```

위에서 `person` 객체가 `name`, `age` 속성과 참조된 `address` 객체의 해당 값으로 설명되어 있습니다.

## 예제

**Mendix Studio Pro 8에서 REST를 소비하는 방법**

{{< youtube OhzWTa1kZ00 >}}
