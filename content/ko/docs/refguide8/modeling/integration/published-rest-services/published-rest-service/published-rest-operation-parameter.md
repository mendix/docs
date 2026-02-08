---
title: "Published REST의 작업 매개변수"
url: /refguide8/published-rest-operation-parameter/
weight: 20
description: "Published REST 작업에 매개변수를 추가하여 구성하는 방법"
# If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

클라이언트가 Published REST 작업을 호출하면 선택적 쿼리 문자열과 본문이 포함될 수 있는 URL을 호출합니다. 이러한 매개변수는 쿼리 매개변수, 경로 매개변수, 본문 매개변수, 헤더 매개변수 및 폼 매개변수로 Microflow 및 Import Mapping에 전달할 수 있습니다.

Published REST 작업에서 매개변수를 추가하거나 편집할 때 아래에 설명된 설정을 지정할 수 있습니다. 이러한 설정은 **Add operation for resource** 대화 상자의 **Add parameter** 섹션에 있습니다.

## General

### Parameter Type

매개변수의 출처를 지정하십시오. 가능한 값은 다음과 같습니다:

* **Query** – 요청에 `?name=John&age=42`와 같은 쿼리 문자열이 포함된 경우 쿼리 매개변수를 추가하여 Microflow에 전달할 수 있습니다. 자세한 내용은 [Published REST Query Parameters](/refguide8/published-rest-query-parameters/)를 참조하십시오.
* **Path** – 작업 경로에도 매개변수가 포함될 수 있습니다. 경로 매개변수를 추가하는 경우 작업 경로에도 추가해야 합니다. 자세한 내용은 [Published REST Path Parameters](/refguide8/published-rest-path-parameters/)를 참조하십시오.
* **Body** – Microflow에는 0개 또는 1개의 본문 매개변수가 있을 수 있습니다. 본문 매개변수는 요청 본문에서 가져옵니다. 본문이 파일 문서 또는 이미지인 경우 해당 내용은 요청 본문으로 채워집니다. 본문 매개변수가 다른 유형의 객체 또는 목록인 경우 요청의 본문 내용을 객체 또는 목록으로 변환하기 위한 Import Mapping이 필요합니다. `GET`, `HEAD` 및 `OPTIONS` 작업에는 본문 매개변수가 없어야 합니다.
* **Header** – 헤더 매개변수의 값은 해당 이름의 (첫 번째) 요청 헤더에서 가져옵니다.
* **Form** – 폼 매개변수의 값은 해당 이름의 본문 부분에서 가져옵니다(`multipart/form-data` 요청에 사용 가능).

### Name

매개변수의 이름입니다. 헤더 매개변수의 경우 요청 헤더의 이름이어야 합니다.

### Type

매개변수의 유형을 지정하십시오. 객체 또는 목록 매개변수는 요청 본문에서만 가져올 수 있습니다.

### Microflow Parameter

이 작업 매개변수의 값으로 채워질 Microflow 매개변수를 지정하십시오. Import Mapping에 전달할 경로 매개변수를 정의한 경우를 제외하고 항상 하나를 선택해야 합니다.

## Mapping

Mapping 그룹은 본문 매개변수에 대해서만 표시됩니다.

### Import Mapping

요청 본문(JSON 또는 XML)을 객체 또는 목록으로 변환하는 Import Mapping을 지정하십시오.

작업에 해당 유형의 경로 매개변수가 하나 이하인 경우 원시 매개변수(문자열, 정수 등)를 받는 Import Mapping을 사용할 수 있습니다. 해당 경로 매개변수의 값이 Microflow에 전달됩니다. 경로 매개변수가 없는 경우 빈 값이 Import Mapping에 전달됩니다.

### If No Object Was Found

찾기 작업에서 기존 객체를 찾지 못한 경우 작업의 동작을 설정합니다.

[Import Mapping](/refguide8/import-mappings/)의 최상위 수준에서 **Decide this at the place where the mapping gets used**가 선택 해제된 경우 동작은 Import Mapping에서 설정됩니다.

Import Mapping에서 **Decide this at the place where the mapping gets used**가 선택된 경우 REST 작업 자체에서 **If no object was found** 동작을 정의할 수 있습니다. 이는 동일한 Import Mapping을 여러 작업에서 사용하면서 각각에 대해 다른 동작을 설정할 수 있음을 의미합니다. 옵션은 다음과 같습니다:

* Create – 매핑할 올바른 Entity의 객체를 생성 — 일반적으로 **POST** 작업에 사용
* Ignore – 이 요소를 매핑하지 않고 파싱을 계속
* Error – XML 파싱을 중지하고 오류 발생 — 일반적으로 **PUT** 및 **PATCH** 작업에 사용

### Commit

Import Mapping이 생성하거나 변경하는 객체를 커밋해야 하는지 여부를 지정할 수 있습니다. 다음 중에서 선택할 수 있습니다:

* **Yes** – 변경 사항을 커밋하고 유효성 검사 규칙과 같은 이벤트를 트리거합니다.
* **Yes without events** – 유효성 검사 규칙과 같은 이벤트를 트리거하지 않고 변경 사항을 커밋합니다.
* **No** – 변경 사항을 커밋하지 않으므로 Microflow에서 커밋할 수 있습니다. Microflow에서 추가 검사를 수행하고 검사 중 하나가 실패하면 커밋을 건너뛰려는 경우 유용합니다.

## Public Documentation

매개변수에 대한 **Description**을 제공하십시오. 서식 있는 텍스트를 위해 [GitHub-flavored Markdown](/refguide8/gfm-syntax/)을 사용할 수 있습니다.

이는 서비스의 [OpenAPI (Swagger) 문서 페이지](/refguide8/published-rest-services/#interactive-documentation)에서 사용됩니다.

{{% alert color="info" %}}
Public Documentation 기능은 버전 8.3.0에서 도입되었습니다.
{{% /alert %}}
