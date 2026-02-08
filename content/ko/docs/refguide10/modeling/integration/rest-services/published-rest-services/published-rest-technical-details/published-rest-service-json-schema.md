---
title: "Published REST Operation의 JSON Schema"
url: /refguide10/published-rest-service-json-schema/
weight: 20
description: "오퍼레이션 요청 본문 및 오퍼레이션 결과에 대한 JSON Schema를 설명합니다"
---

## 소개

[REST 서비스를 게시](/refguide10/published-rest-services/)하면 해당 서비스에 대한 [OpenAPI (Swagger) 문서 페이지](/refguide10/published-rest-services/#interactive-documentation)가 생성됩니다. 이 페이지에는 서비스가 수신하고 반환할 수 있는 메시지 구조에 대한 설명이 포함됩니다. 이 구조는 JSON Schema를 사용하여 설명됩니다.

Import 또는 Export Mapping이 정의된 오퍼레이션은 이러한 스키마를 생성하지만, [Message Definition](/refguide10/message-definitions/)을 기반으로 한 매핑에 대해서만 생성됩니다.

JSON Schema는 여기에 설명된 규칙을 기반으로 생성됩니다.

## 정의

OpenAPI 스키마에는 본문 매개변수와 반환 유형에 대한 정의가 포함됩니다. 구성된 Import 또는 Export Mapping이 Message Definition을 기반으로 하는 경우 해당 정의가 있습니다.

### 메시지 정의

```json
"#definition_name#": { 
  "type": "object",
  "properties": [
     #attribute_name#: #attribute_schema#
  ]
}
```

기본적으로 정의 이름은 매핑이 기반으로 하는 Message Definition의 이름입니다. 매핑의 공개 이름을 설정하여 자체 정의 이름을 선택할 수 있습니다.

### 속성

속성의 스키마는 속성 유형에 따라 달라집니다:

| 속성 유형 | 속성 스키마      |
| ---            | ---                  |
| Autonumber     | `{ "type": "integer", "format": "int64" }` |
| Binary         | `{ "type": "string", "format": "binary" }` |
| Boolean        | `{ "type": "boolean" }` |
| Date and time  | `{ "type": "string", "format": "date-time" }` |
| Decimal        | `{ "type": "number" }` |
| Enumeration    | `{ "type": "string", "enum": ["cat", "dog", "ferret", "fish"] }` |
| Hashed string  | `{ "type": "string" }` |
| Integer        | `{ "type": "integer", "format": "int32" }` |
| Long           | `{ "type": "integer", "format": "int64" }` |
| String         | `{ "type": "string" }` |

## 오퍼레이션 요청 본문의 JSON Schema

오퍼레이션에 본문 매개변수가 있으면 스키마가 있습니다. 이 스키마는 Message Definition 기반 Import Mapping을 선택한 경우 정의를 참조합니다.

매개변수가 객체인 경우:

```json
{ "$ref": "#/definitions/#definition_name#"}
```

매개변수가 목록인 경우:

```json
{ 
  "type": "array",
  "items": [{ "$ref": "#/definitions/#definition_name#"}]
}
```

Import Mapping이 없거나 매핑이 Message Definition을 기반으로 하지 않는 경우:

```json
{ "type": "file" }
```

## 오퍼레이션 결과의 JSON Schema

오퍼레이션의 결과에도 스키마가 있습니다. 형식은 결과 유형에 따라 달라집니다.

Export Mapping이 없거나 Export Mapping이 Message Definition을 기반으로 하지 않는 경우:

```json
{ "type": "file" }
```

Microflow가 객체를 반환하는 경우:

```json
{ "$ref": "#/definitions/#definition_name#"}
```

Microflow가 목록을 반환하는 경우:

```json
{ 
  "type": "array",
  "items": [{ "$ref": "#/definitions/#definition_name#"}]
}
```

Microflow가 기본 값을 반환하는 경우, 스키마는 유형에 따라 달라집니다:

| Microflow 결과 | 스키마      |
| ---              | ---         |
| Nothing          | (없음)     |
| Binary           | `{ "type": "file" }` |
| Boolean          | `{ "type": "boolean" }` |
| Date and time    | `{ "type": "file" }` |
| Decimal          | `{ "type": "number" }` |
| Enumeration      | `{ "type": "file" }` |
| Integer/Long     | `{ "type": "integer" }` |
| String           | `{ "type": "file" }` |
