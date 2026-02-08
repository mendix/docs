---
title: "Message Definition"
url: /refguide8/message-definitions/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Message Definition은 앱에서 송수신되는 메시지의 구조를 정의합니다. 메시지를 정의하면 해당 메시지에 대한 Import 및 Export Mapping을 생성할 수 있습니다.

Message Definition은 JSON과 XML 모두에 사용할 수 있으며, 단일 객체와 객체 목록 모두에 사용할 수 있습니다.

## Message Definitions 문서 추가

Message Definitions는 앱의 모듈에 추가할 수 있는 문서 유형입니다.

Message Definitions 문서를 추가하려면 다음을 수행하십시오:

1. 모듈 또는 모듈 내 폴더를 마우스 오른쪽 버튼으로 클릭하십시오.
2. **Add other > Message definitions**를 선택하십시오.

    {{< figure src="/attachments/refguide8/modeling/integration/message-definitions/add-definitions-document.png" alt="Right-click menu - add Message definitions" class="no-border" >}}

3. Message Definitions에 이름을 지정하고 **OK**를 클릭하십시오.

## Message Definition 관리

Message Definition 문서는 Message Definition의 목록을 표시합니다.

여기에서 다음 작업을 수행할 수 있습니다:

* 새 [Message Definition](#message-definition) **추가**
* 기존 Message Definition **편집**
* 불필요한 Message Definition **삭제**
* Message Definition의 **사용처 찾기**
* Message Definition에서 **매핑 생성...** (아래 참조)

### 매핑 생성...

**Generate mapping(s)...** 버튼을 사용하면 선택한 Message Definition에서 Import 및/또는 Export Mapping 문서를 생성할 수 있습니다. 매핑은 모듈에 추가됩니다.

매핑을 생성하려면 다음을 수행하십시오:

1. 사용할 Message Definition을 선택하십시오.
2. **Generate mapping(s)...**를 클릭하십시오.
3. 필요한 매핑이 선택되었는지 확인하십시오.
4. **OK**를 클릭하십시오.

    {{< figure src="/attachments/refguide8/modeling/integration/message-definitions/generate-mappings.png" alt="General mappings dialog" class="no-border" >}}

## Message Definition 정의{#message-definition}

Message Definitions 문서에서 **Add**를 클릭하여 새 Message Definition을 생성하거나 **Edit**를 클릭하여 기존 Message Definition을 편집하십시오.

### 일반

Message Definition은 **General** 탭에서 정의됩니다.

{{< figure src="/attachments/refguide8/modeling/integration/message-definitions/message-definition.png" alt="The Message Definition General tab" class="no-border" >}}

#### 이름

Message Definition의 이름입니다.

#### Entity

Message Definition의 기반이 되는 앱 Domain Model의 Entity입니다. 이 Message Definition을 사용하여 이 Entity 타입의 개별 객체 및 객체 목록을 내보내고 가져올 수 있습니다.

#### 구조

구조 트리는 Entity의 속성(Attribute)과 일부 연관(Association)을 표시합니다. **Filter**를 사용하여 특정 속성(Attribute)을 찾으십시오.

| 열 | 설명 | 편집 가능? | 참고 |
| --- | --- | :---: | --- |
| Checkbox | 속성(Attribute) 또는 연관(Association)이 메시지의 일부인지 확인합니다. | y | |
| Name | Domain Model에서 항목의 이름입니다. | n | |
| Type | Domain Model에서 항목의 타입입니다. | n | |
| Occurrence | 각 상위 항목에 대해 이 항목이 발생할 수 있는 횟수입니다. | n | |
| External Name | XML 노드 또는 JSON 속성의 이름입니다. | y | 기본적으로 속성(Attribute) 또는 (연관의 경우) Entity의 이름입니다.<br />`0..*` 발생의 경우 문자 `s`가 추가됩니다. |
| External Single Item Name | 단일 항목을 나타내는 XML 노드입니다. | y | 발생이 `0..*`인 XML의 경우에만 관련됩니다<br /> 기본적으로 Entity 이름입니다. |
| Example value | 속성(Attribute)의 일반적인 값입니다. | y | Published REST Service의 경우 이 값은 [대화형 문서](/refguide8/published-rest-services/#interactive-documentation)에 표시됩니다.<br />날짜/시간 값은 `year-month-day` 또는 `year-month-day hour:minute:second` 형식으로 지정됩니다. |
| Public Documentation | [대화형 문서](/refguide8/published-rest-services/#interactive-documentation)에 표시될 추가 정보입니다. | y | |

### 문서화

**Documentation** 탭을 사용하여 Message Definition의 용도를 설명하십시오.
