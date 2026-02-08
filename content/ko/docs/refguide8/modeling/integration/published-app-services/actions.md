---
title: "Actions"
url: /refguide8/actions/
---

## 소개

{{% alert color="info" %}}
App Service는 더 이상 사용되지 않으며 Studio Pro 9에서 제거되었습니다. 대신 [Published Web Service](/refguide8/published-web-services/) 또는 [Published REST Service](/refguide8/published-rest-services/)를 사용하십시오.
{{% /alert %}}

Action은 App Service의 실제 Microflow 작업을 제공합니다. App Service 버전이 **Consumable**로 설정되면 해당 매개변수와 반환 유형은 App Service 계약의 일부이므로 더 이상 편집할 수 없습니다.

**General** 탭에서 Action에 해당하는 Microflow를 설정할 수 있습니다. Microflow가 설정되면 **Parameters** 탭이 자동으로 채워집니다.

Action 페이지에는 아래와 같은 탭이 있습니다.

## General

{{< figure src="/attachments/refguide8/modeling/integration/published-app-services/actions/16843926.png" class="no-border" >}}

### Name

소비자가 도구 상자에서 볼 수 있는 Action의 이름입니다.

### Icon

Action에 속하는 아이콘입니다. 앱의 모든 이미지 문서에서 아이콘을 선택할 수 있습니다. 아직 사용할 수 없는 경우 이미지 문서에 새 아이콘을 추가할 수 있습니다.

### Microflow

이 Action이 호출될 때 실행될 Microflow를 정의합니다.

### Description

Action을 설명합니다. 소비자는 개요에서 이 설명을 볼 수 있습니다.

## Parameters

{{< figure src="/attachments/refguide8/modeling/integration/published-app-services/actions/16843923.png" class="no-border" >}}

### Microflow Parameter

Microflow에서 매개변수의 이름을 정의합니다.

### Type

매개변수의 유형을 정의합니다.

### Can Be Empty

입력 매개변수로서 값이 비어 있을 수 있는지 여부를 정의합니다.

### Action Parameter

App Service Action 호출에서 매개변수의 이름을 정의합니다. 이는 처음에 Microflow 매개변수 이름에서 복사되지만 수정할 수 있습니다. 사용할 수 없는 예약된 매개변수 이름이 세 가지 있습니다:

* *username*
* *password*
* *appservicelocation* (대소문자 구분 없음)

### Exposed Attributes and Associations

{{< figure src="/attachments/refguide8/modeling/integration/published-app-services/actions/16843922.png" class="no-border" >}}

복합 유형(예: 도메인 모델의 Entity)에 대해 Entity의 속성을 포함할지 여부와 입력으로서 속성이 비어 있을 수 있는지 정의하는 버튼을 사용할 수 있습니다.

## Return Type

Action에서 반환할 객체의 종류를 정의합니다. 이는 단순 유형(정수 또는 문자열 등)이거나 복합 유형(예: Entity 모델의 Entity)일 수 있습니다.

### Can Be Empty

반환 값이 비어 있을 수 있는지 여부를 정의합니다.

예를 들어, 여기서 **빈** ReturnObject는 허용되지 않습니다:

{{< figure src="/attachments/refguide8/modeling/integration/published-app-services/actions/16843921.png" class="no-border" >}}
