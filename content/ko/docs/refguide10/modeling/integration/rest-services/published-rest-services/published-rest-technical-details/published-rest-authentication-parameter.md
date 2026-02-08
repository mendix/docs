---
title: "사용자 정의 인증 Microflow 매개변수"
url: /refguide10/published-rest-authentication-parameter/
weight: 40
description: "Published REST 서비스의 사용자 정의 인증 Microflow에 전달되는 매개변수"
---

## 소개

Published REST 서비스의 사용자 정의 인증 Microflow는 클라이언트가 오퍼레이션 중 하나를 호출할 때마다 실행됩니다. 클라이언트의 요청에는 헤더가 포함되어 있으며 쿼리 매개변수가 포함될 수 있고, 이를 인증 Microflow에 전달할 수 있습니다.

인증 Microflow 옆의 **Parameters**를 클릭하면 **Authentication microflow arguments** 대화 상자가 나타납니다. 이 대화 상자에서 매개변수를 설정할 수 있습니다.

## 매개변수

아래 정보는 Microflow 매개변수에 대한 개요를 제공하고 값이 어디에서 오는지 설명합니다. **Add**를 클릭하여 매개변수를 추가하고, **Edit**를 클릭하여 매개변수를 변경하세요.

모든 Microflow 매개변수를 여기에 추가해야 합니다.

### 매개변수 유형

매개변수의 출처를 지정합니다. 가능한 값은 다음과 같습니다:

* **Query** – 요청에 `?name=John&age=42`와 같은 쿼리 문자열이 포함된 경우, 쿼리 매개변수를 추가하여 이를 Microflow에 전달할 수 있습니다. 자세한 내용은 [Published REST Query Parameters](/refguide10/published-rest-query-parameters/)를 참조하세요.

* **Header** – 헤더 매개변수의 값은 해당 이름의 (첫 번째) 요청 헤더에서 가져옵니다.

### 이름

매개변수의 이름입니다. 헤더 매개변수의 경우 요청 헤더의 이름이어야 합니다.

### 데이터 유형

매개변수의 유형을 지정합니다. 기본 유형만 지원됩니다.

### Microflow 매개변수

이 오퍼레이션 매개변수의 값으로 채워질 Microflow 매개변수를 지정합니다. 항상 하나를 선택해야 합니다.
