---
title: "10.15"
url: /releasenotes/sdk/metamodel-10.15/
weight: 85
---

## 10.15.0

### Microflows

#### SequenceFlow (Element)

* `caseValue` 속성을 삭제하였습니다. You can use the 'caseValues' property을(를) 사용하세요.
* `caseValues` 속성을 도입하였습니다. 

### Mappings

#### MappingSource (Element)

* MappingSource 엘리먼트를 공개하였습니다. 이는 유닛을 먼저 로드하지 않고도 (일부) 속성을 사용할 수 있음을 의미합니다.
* `name` 속성을 도입하였습니다. Info: "An identifier for mapping source."

### CustomWidgets

#### WidgetValueType (Element)

* `defaultType` 속성을 도입하였습니다. 
