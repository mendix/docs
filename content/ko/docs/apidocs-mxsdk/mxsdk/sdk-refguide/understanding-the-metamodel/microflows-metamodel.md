---
title: "Mendix Metamodel의 마이크로플로우"
linktitle: "Metamodel의 마이크로플로우"
description: "이 문서는 마이크로플로우(Microflow)를 만들고 호출하는 방법을 자세히 설명합니다."
url: /apidocs-mxsdk/mxsdk/microflows-metamodel/
weight: 4
---

## 소개

마이크로플로우(Microflow)에는 매개변수, 반환 타입(반환 값은 객체에 정의됨, 아래 참조), 허용된 모듈 역할이 있습니다. 규칙(Rule)은 마이크로플로우(Microflow)와 유사하지만 규칙 매개변수가 있으며 일부 마이크로플로우(Microflow) 관련 속성이 없습니다.

### 그래픽 개요

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16842814.svg" class="no-border" >}}

Studio Pro 가이드 | Model SDK API 문서
--- | --- |
[마이크로플로우](/refguide/microflows/) 개요 페이지 | [`microflows`](https://apidocs.rnd.mendix.com/modelsdk/latest/modules/microflows.html) 패키지
[마이크로플로우](/refguide/microflow/), 마이크로플로우(Microflow) 속성에 대한 기술 정보 | [Microflow](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.Microflow.html)
[규칙](/refguide/rules/) | [Rule](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.Rule.html)
[매개변수](/refguide/parameter/) | [MicroflowParameter](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.MicroflowParameter.html)

### 마이크로플로우 및 규칙 구조

마이크로플로우(Microflow)는 플로우로 연결된 객체의 모음으로 구성됩니다. 객체는 객체 조작 및 검색, 마이크로플로우(Microflow) 호출, 웹 서비스 호출 등의 액티비티(Activity)를 나타냅니다(자세한 내용은 아래 참조).

예를 들어, 간단한 마이크로플로우(Microflow)는 시작 이벤트, 단일 액티비티(Activity), 종료 이벤트로 구성될 수 있습니다. 그러면 마이크로플로우(Microflow)에는 MicroflowObjectCollection에 세 개의 MicroflowObject가 있고, 두 개의 SequenceFlow가 있습니다. 첫 번째 시퀀스 플로우는 시작 이벤트를 원점으로, 액티비티(Activity)를 대상으로 합니다. 두 번째 시퀀스 플로우는 액티비티(Activity)를 원점으로, 종료 이벤트를 대상으로 합니다.

#### 그래픽 개요

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16842811.svg" class="no-border" >}}

Studio Pro 가이드 | Model SDK API 문서
--- | --- |
[액티비티](/refguide/activities/) | [MicroflowObjectCollection](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.MicroflowObjectCollection.html)
[시퀀스 플로우](/refguide/sequence-flow/) | [SequenceFlow](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.SequenceFlow.html)

### 마이크로플로우 객체

마이크로플로우(Microflow)에 추가할 수 있는 여러 유형의 객체가 있습니다. 한 유형은 `Activity`로, 루프이거나 마이크로플로우(Microflow) 액션을 실행하는 액션 액티비티(Activity)일 수 있습니다(다양한 액티비티(Activity) 유형에 대한 자세한 내용은 다음 섹션 참조). 다른 마이크로플로우(Microflow) 객체 유형에는 시작 및 종료 이벤트, 의사 결정 및 병합, 주석 및 매개변수가 포함됩니다.

#### 그래픽 개요

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16842852.svg" class="no-border" >}}

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/18582249.svg" class="no-border" >}}

Studio Pro 가이드 | Model SDK API 문서
--- | --- |
[액티비티](/refguide/activities/) | [MicroflowParameterObject](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.MicroflowParameterObject.html), [Activity](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.Activity.html)
[시작](/refguide/start-event/) 및 [종료](/refguide/end-event/) 이벤트 | [StartEvent](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.StartEvent.html), [EndEvent](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.EndEvent.html)
[루프](/refguide/loop/), [Break](/refguide/break-event/) 및 [Continue](/refguide/continue-event/) 이벤트 | [LoopedActivity](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.LoopedActivity.html), [BreakEvent](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.BreakEvent.html), [ContinueEvent](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ContinueEvent.html)
[주석](/refguide/annotation/) | [Annotation](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.Annotation.html)

### 플로우 {#flows}

마이크로플로우(Microflow)는 플로우, 특히 `SequenceFlow`로 연결된 객체로 구성됩니다. 플로우에는 원점과 대상이 있으며, 이를 통해 마이크로플로우(Microflow)에서 객체의 순서가 정의됩니다.

열거형에 대한 의사 결정에는 각 열거형 값에 대한 시퀀스 플로우가 있습니다. 메타 모델에서 이는 시퀀스 플로우의 case 값으로 표현됩니다. 각 시퀀스 플로우에는 해당 열거형 케이스로 설정된 `value`가 있는 열거형 case 값이 있습니다. Boolean 의사 결정에는 `true`와 `false` 각각에 대한 두 개의 시퀀스 플로우가 있으며, 각각 해당하는 case 값이 있습니다.

객체 타입 의사 결정에는 분할된 엔티티(Entity) 타입의 각 특수화(Specialization)에 대한 시퀀스 플로우가 있습니다. 각 시퀀스 플로우에는 특수화(Specialization) 엔티티(Entity) 값이 있는 상속 case 값이 있습니다.

주석 플로우는 주석을 다른 마이크로플로우(Microflow) 객체에 연결하는 데 사용됩니다.

#### 그래픽 개요

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16842853.svg" class="no-border" >}}

| Studio Pro 가이드 | Model SDK API 문서 |
| --- | ---  |
| [시퀀스 플로우](/refguide/sequence-flow/) | [Flow](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.Flow.html) |
| [주석 플로우](/refguide/annotation/#annotation-flow) | [SequenceFlow](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.SequenceFlow.html) |
| |[AnnotationFlow](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.AnnotationFlow.html) |
| |Flow의 속성 [`origin`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.Flow.html#origin) 및 [`destination`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.Flow.html#destination) |
| |[CaseValue](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.CaseValue.html) 및 상속 계층 |

### 의사 결정

마이크로플로우(Microflow)의 제어 흐름은 두 가지 유형의 의사 결정으로 정의됩니다:

* **의사 결정(Decision)** – Boolean 또는 열거형 의사 결정용
* **객체 타입 의사 결정(Object type decision)** – 특수화(Specialization) 엔티티(Entity) 타입 기반 제어용

제어의 두 경로는 의사 결정으로 병합될 수 있습니다.

의사 결정은 표현식 또는 규칙에 따라 조건부로 분할됩니다. 규칙의 경우, 규칙 매개변수 매핑이 포함된 마이크로플로우(Microflow) 호출과 유사한 호출이 이루어집니다.

#### 그래픽 개요

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16842854.svg" class="no-border" >}}

| Studio Pro 가이드 | Model SDK API 문서 |
| --- | --- | 
| [의사 결정](/refguide/decision/) |[ExclusiveSplit](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ExclusiveSplit.html) |
| [객체 타입 의사 결정](/refguide/object-type-decision/) |[InheritanceSplit](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.InheritanceSplit.html) |
| [병합](/refguide/merge/) |[ExclusiveMerge](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ExclusiveMerge.html) |
| [규칙](/refguide/rules/) |[ExpressionSplitCondition](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ExpressionSplitCondition.html) |
| |[RuleSplitCondition](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.RuleSplitCondition.html) |
| |[RuleCall](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.RuleCall.html) |
| |[RuleCallParameterMapping](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.RuleCallParameterMapping.html) |

## 마이크로플로우 액티비티

### 객체 작업

마이크로플로우(Microflow)에서 여러 액티비티(Activity)를 통해 객체를 조작할 수 있습니다. 새 객체를 생성할 수 있습니다. 기존 객체를 검색할 수 있습니다(자세한 내용은 다음 하위 섹션 참조). 모든 객체를 업데이트하거나 삭제할 수 있습니다. 모든 변경 사항(생성 및 삭제 포함)을 커밋하거나 롤백할 수 있습니다.

객체 속성은 생성 액션과 업데이트 액션 모두에서 변경 액션으로 업데이트할 수 있습니다. 이러한 액션에는 어떤 속성이나 연관(Association)이 어떤 값으로 설정되는지 설명하는 항목 목록이 있습니다.

#### 그래픽 개요

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/18582248.svg" class="no-border" >}}

Studio Pro 가이드 | Model SDK API 문서
--- | --- |
[객체 생성](/refguide/create-object/) |[CreateObjectAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.CreateObjectAction.html) 및 [ChangeObjectAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ChangeObjectAction.html) ([ChangeMembersAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ChangeMembersAction.html), [MemberChange](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.MemberChange.html))
[객체 변경](/refguide/change-object/) | [DeleteAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.DeleteAction.html)
[객체 롤백](/refguide/rollback-object/) |[CommitAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.CommitAction.html) 및 [RollbackAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.RollbackAction.html)

### 객체 검색

검색 액션은 연관(Association) 기반 검색 또는 데이터베이스 기반 검색입니다. 연관(Association) 기반 검색은 특정 연관(Association)을 가리키고 해당 연관(Association)을 통해 관련 객체를 검색합니다. 데이터베이스 기반 검색은 데이터베이스에 직접 접근하고 XPath 제약 조건, 검색된 객체의 정렬 및 검색할 객체의 범위에 대한 제어를 제공합니다.

#### 그래픽 개요

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/18582244.svg" class="no-border" >}}

| Studio Pro 가이드 | Model SDK API 문서 |
| --- | --- |
| [객체 검색](/refguide/retrieve-objects/) |[RetrieveSource](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.RetrieveSource.html) |
| [XPath](/refguide/xpath/) 제약 조건 |[AssociationRetrieveSource](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.AssociationRetrieveSource.html) |
| |[DatabaseRetrieveSource](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.DatabaseRetrieveSource.html) |
| |[Range](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.Range.html), [ConstantRange](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ConstantRange.html) 및 [CustomRange](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.CustomRange.html) |
| |[SortItemList](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.SortItemList.html) 및 [SortItem](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.SortItem.html) |

### 마이크로플로우 호출

마이크로플로우(Microflow)는 표현식을 (호출된 마이크로플로우(Microflow)의) 매개변수에 매핑하는 정의를 통해 다른 마이크로플로우(Microflow)를 호출할 수 있습니다.

#### 그래픽 개요

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16842821.svg" class="no-border" >}}

| Studio Pro 가이드 | Model SDK API 문서 |
| --- | --- |
| [마이크로플로우 호출](/refguide/microflow-call/) |[MicroflowCallAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.MicroflowCallAction.html) |
| |[MicroflowCall](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.MicroflowCall.html) |
| |[MicroflowCallParameterMapping](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.MicroflowCallParameterMapping.html) |

### 웹 클라이언트 액티비티

마이크로플로우(Microflow)는 브라우저에서 동작을 트리거할 수 있습니다: 페이지 표시 및 닫기, (팝업) 메시지 표시, 유효성 검사 피드백 제공, 파일 다운로드 트리거.

#### 그래픽 개요

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/18582245.svg" class="no-border" >}}

Studio Pro 가이드 | Model SDK API 문서
--- | --- |
[페이지 표시](/refguide/show-page/) 및 [홈페이지 표시](/refguide/show-home-page/) |[ShowPageAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ShowPageAction.html) 및 [ShowHomePageAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ShowHomePageAction.html)
[페이지 닫기](/refguide/close-page/) |[CloseFormAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.CloseFormAction.html)
[메시지 표시](/refguide/show-message/) |[ShowMessageAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ShowMessageAction.html)
[유효성 검사 피드백](/refguide/validation-feedback/) |[ValidationFeedbackAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ValidationFeedbackAction.html)
[파일 다운로드](/refguide/download-file/) |[DownloadFileAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.DownloadFileAction.html)

### 앱 서비스 호출

앱 서비스 호출 액션은 특정 앱 서비스 액션(소비된 앱 서비스의 일부)을 가리킵니다. 액션 호출에는 앱 서비스 액션 매개변수를 표현식에 매핑하는 매개변수 매핑 목록이 있습니다.

#### 그래픽 개요

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16842823.svg" class="no-border" >}}

| Studio Pro 가이드 | Model SDK API 문서 |
| --- | --- |
| | [AppServiceCallAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.AppServiceCallAction.html) |
| |[AppServiceAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/appservices.AppServiceAction.html) |
| |[AppServiceCallParameterMapping](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.AppServiceCallParameterMapping.html) |
| |[AppServiceActionParameter](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/appservices.AppServiceActionParameter.html) |

### 웹 서비스 호출

가져온 웹 서비스에 대한 웹 서비스 호출에는 HTTP 구성과 요청 및 응답 매핑 구성이 있어 서드파티 웹 서비스 운영의 요청 및 응답 매개변수를 Mendix 앱 개념에 매핑합니다.

#### 그래픽 개요

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16842843.svg" class="no-border" >}}

HTTP 구성, 요청 처리 및 응답 처리에 대한 자세한 내용은 다음 다이어그램을 참조하십시오.

| Studio Pro 가이드 | Model SDK API 문서 |
| --- | --- |
| [웹 서비스 호출](/refguide/call-web-service-action/) |[WebServiceCallAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.WebServiceCallAction.html) |
| |[HttpConfiguration](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.HttpConfiguration.html) |
| |[RequestHandling](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.RequestHandling.html) 및 [ResultHandling](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ResultHandling.html) |

### 웹 서비스 호출 – 요청 HTTP 구성

HTTP 구성에는 선택적 사용자 정의 엔드포인트 위치, 인증 자격 증명 및 선택적 HTTP 헤더가 있습니다.

#### 그래픽 개요

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16842844.svg" class="no-border" >}}

| Studio Pro 가이드 | Model SDK API 문서 |
| --- | --- |
| [웹 서비스 호출](/refguide/call-web-service-action/) |[HttpConfiguration](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.HttpConfiguration.html) |
| |[HttpHeaderEntry](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.HttpHeaderEntry.html) |

### 웹 서비스 호출 – 요청 처리

웹 서비스 운영 요청은 Mendix 앱 개념에서 웹 서비스 운영의 세부 사항으로 매핑해야 합니다. 요청 처리를 구성할 수 있는 네 가지 방법이 있습니다. 각각 고유한 구성 옵션이 있습니다.

1. Export Mapping – 서드파티에 복잡한 XML 객체(비원시)를 보낼 때 권장하는 옵션입니다.
2. Simple Parameter Mapping – 서드파티에 원시 값만 보낼 때 이 옵션을 사용하십시오. 인수는 매개변수 타입과 호환되는 값을 생성하는 모든 MicroflowExpression일 수 있습니다. ElementPath는 XML 메시지에서 매개변수의 엘리먼트 트리 위치를 나타내는 문자열입니다.
3. Advanced Parameter Mapping – 위 두 매핑의 조합으로, 일반 내보내기 매핑보다 XML 계층 구조에서 한 수준 더 깊게 시작합니다. 원시 값에는 MicroflowExpression을, 복잡한 값에는 ExportMapping을 사용하십시오.
4. Custom mapping – 보낼 XML을 수동으로 지정합니다. 강력하지만 위험합니다.

#### 그래픽 개요

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/18582232.svg" class="no-border" >}}

| Studio Pro 가이드 | Model SDK API 문서 |
| --- | --- |
| [웹 서비스 호출](/refguide/call-web-service-action/) |[RequestHandling](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.RequestHandling.html) |
| |[SimpleRequestHandling](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.SimpleRequestHandling.html) - [WebServiceOperationSimpleParameterMapping](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.WebServiceOperationSimpleParameterMapping.html) |
| |[AdvancedRequestHandling](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.AdvancedRequestHandling.html) - [WebServiceOperationAdvancedParameterMapping](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.WebServiceOperationAdvancedParameterMapping.html) |
| |[MappingRequestHandling](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.MappingRequestHandling.html) |
| |[CustomRequestHandling](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.CustomRequestHandling.html) |

### 웹 서비스 호출 – 응답 처리

웹 서비스 운영의 결과는 가져오기 매핑을 사용하는 가져오기 매핑 호출로 Mendix 앱 개념에 매핑해야 합니다. 매핑할 객체의 범위도 제어할 수 있습니다.

#### 그래픽 개요

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16842842.svg" class="no-border" >}}

| Studio Pro 가이드 | Model SDK API 문서 |
| --- | --- |
| [웹 서비스 호출](/refguide/call-web-service-action/) |[ResultHandling](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ResultHandling.html) |
| |[ImportMappingCall](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ImportMappingCall.html) |
| |[ImportMapping](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/importmappings.ImportMapping.html) |
| |[Range](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.Range.html) |

### 변수

마이크로플로우(Microflow) 변수는 특정 액션으로 생성하고 변경할 수 있습니다. 변수 생성 액션에는 새로 생성된 변수의 타입을 나타내는 데이터 타입도 있습니다.

#### 그래픽 개요

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16842846.svg" class="no-border" >}}

Studio Pro 가이드 | Model SDK API 문서
--- | --- |
[변수 생성](/refguide/create-variable/) |[CreateVariableAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.CreateVariableAction.html)
[변수 변경](/refguide/change-variable/) |[ChangeVariableAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ChangeVariableAction.html)

### 리스트

리스트는 특정 액션으로 생성, 변경 및 삭제할 수 있습니다. 리스트 집계 액션에는 특정 함수(예: 합계 또는 평균)가 있습니다. 리스트 연산도 실행할 수 있으며, 자세한 내용은 다음 섹션을 참조하십시오.

#### 그래픽 개요

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/18582227.svg" class="no-border" >}}

| Studio Pro 가이드 | Model SDK API 문서 |
| --- | --- |
| [리스트 생성](/refguide/create-list/) |[CreateListAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.CreateListAction.html) |
| [리스트 변경](/refguide/change-list/) |[ChangeListAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ChangeListAction.html) |
| [리스트 집계](/refguide/aggregate-list/) |[DeleteAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.DeleteAction.html) |
| [리스트 연산](/refguide/list-operation/) |[AggregateListAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.AggregateListAction.html) |
| |[ListOperationAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ListOperationAction.html) 및 [ListOperation](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ListOperation.html) |

### 리스트 – 연산

리스트는 다양한 유형의 연산으로 조작할 수 있습니다. 리스트를 정렬할 수 있으며, 정렬 항목 목록이 있습니다. Head와 Tail은 각각 리스트의 첫 번째와 나머지를 제공합니다. Find와 Filter는 각각 특정 조건에 부합하는 리스트의 하나와 모든 엘리먼트를 선택합니다.

#### 그래픽 개요

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/18582228.svg" class="no-border" >}}

| Studio Pro 가이드 | Model SDK API 문서 |
| --- | --- |
| [리스트 연산](/refguide/list-operation/) |[ListOperation](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ListOperation.html) |
| |[Head](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.Head.html) 및 [Tail](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.Tail.html) |
| |[Sort](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.Sort.html), [SortItemList](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.SortItemList.html) 및 [SortItem](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.SortItem.html) |
| |[Filter](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.Filter.html) 및 [Find](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.Find.html) |

### 리스트 – 이진 연산

리스트는 두 개의 리스트를 입력으로 받는 여러 이진 연산으로 조작할 수 있습니다.

#### 그래픽 개요

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16842849.svg" class="no-border" >}}

| Studio Pro 가이드 | Model SDK API 문서 |
| --- | --- |
| [리스트 연산](/refguide/list-operation/) |[BinaryListOperation](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.BinaryListOperation.html) |
| |[Contains](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.Contains.html) |
| |[Intersect](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.Intersect.html) |
| |[ListEquals](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ListEquals.html) |
| |[Subtract](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.Subtract.html) |
| |[Union](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.Union.html) |

### Java 액션 호출

Java 액션 호출은 특정 Java 액션을 가리키며 Java 액션의 모든 매개변수에 대한 표현식이 포함된 매개변수 매핑이 있습니다.

#### 그래픽 개요

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/18582230.svg" class="no-border" >}}

| Studio Pro 가이드 | Model SDK API 문서 |
| --- | --- |
| [Java 액션 호출](/refguide/call-java-action/) |[JavaAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/javaactions.JavaAction.html) |
| |[JavaActionParameter](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/javaactions.JavaActionParameter.html) |
| |[JavaActionCallAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.JavaActionCallAction.html) |
| |[JavaActionParameterMapping](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.JavaActionParameterMapping.html) |

### 로깅

로깅 액션은 특정 로그 레벨의 단일 로그 노드를 대상으로 합니다. 로그 메시지는 매개변수화됩니다.

#### 그래픽 개요

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16844080.svg" class="no-border" >}}

| Studio Pro 가이드 | Model SDK API 문서 |
| --- | --- |
| [로그 메시지](/refguide/log-message/) |[LogMessageAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.LogMessageAction.html) |
| |[LogLevel](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.LogLevel.html) |
| |[StringTemplate](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.StringTemplate.html) |
| |[TemplateArgument](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.TemplateArgument.html) |

### XML 가져오기 및 내보내기

XML 가져오기 액션은 웹 서비스 응답 매핑과 유사한 XML-도메인 매핑을 사용합니다.

XML 내보내기 액션은 웹 서비스 요청 매핑과 유사한 도메인-XML 매핑을 사용합니다.

#### 그래픽 개요

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/18582238.svg" class="no-border" >}}

Model SDK API 문서

* [ImportXmlAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ImportXmlAction.html)
* [ResultHandling](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ResultHandling.html)
* [ExportXmlAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ExportXmlAction.html)
* [ExportMapping](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/exportmappings.ExportMapping.html)
* [FileDocumentExport](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.FileDocumentExport.html)
* [VariableExport](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.VariableExport.html)

### 문서 생성

문서는 문서 템플릿에서 생성됩니다. 이러한 템플릿에는 매개변수가 있으며, 각 호출 사이트에서 매개변수 매핑으로 매핑됩니다.

#### 그래픽 개요

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16844082.svg" class="no-border" >}}

| Studio Pro 가이드 | Model SDK API 문서 |
| --- | --- |
| [문서 생성](/refguide/generate-document/) |[GenerateDocumentAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.GenerateDocumentAction.html) |
| |[DocumentTemplate](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/documenttemplates.DocumentTemplate.html) |
| |[DocumentTemplateParameterMapping](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.DocumentTemplateParameterMapping.html) |
