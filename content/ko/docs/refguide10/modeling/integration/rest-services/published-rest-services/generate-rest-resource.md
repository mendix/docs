---
title: "Published REST 리소스 생성하기"
url: /refguide10/generate-rest-resource/
weight: 20
description: "Entity에서 Published REST 리소스를 생성합니다"
# If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
# linked from DM: domain model > entity (right-click) > Expose as REST resource > Help (integration)
---

## 소개

Domain Model에서 Entity를 마우스 오른쪽 버튼으로 클릭하고 **Expose as REST resource**를 선택하여 기본 오퍼레이션이 포함된 REST 리소스를 게시할 수 있습니다. 또는 Entity 또는 [Message Definition](/refguide10/message-definitions/)을 Published REST Service의 리소스 목록에 끌어다 놓을 수도 있습니다. 이 페이지에서는 이러한 작업을 수행한 후 사용할 수 있는 옵션을 설명합니다.

## REST Service

이 옵션은 Domain Model에서 **Expose as REST resource**를 클릭할 때만 표시됩니다. 리소스와 오퍼레이션을 생성할 서비스를 선택하세요.

## 일반

### 리소스 이름

게시할 리소스의 이름을 입력하세요.

### Key Attribute

**Get by key**, **Patch** 또는 **Delete** 오퍼레이션을 생성하려면 Entity에 고유 속성이 있어야 합니다. 여기서 해당 속성을 선택하세요.

## 오퍼레이션 {#operations}

생성할 오퍼레이션의 체크박스를 선택하세요:

* **Get all** – 클라이언트가 모든 객체를 가져올 수 있습니다
* **Get by key** – 클라이언트가 키를 사용하여 객체를 가져올 수 있습니다
* **Post** – 클라이언트가 새 객체를 추가할 수 있습니다
* **Patch** – 클라이언트가 기존 객체를 업데이트할 수 있습니다
* **Delete** – 클라이언트가 기존 객체를 삭제할 수 있습니다

**OK**를 클릭하면 다음 항목이 생성됩니다:

* 리소스
* 선택한 모든 오퍼레이션
* 각 오퍼레이션에 대한 Microflow
* Message Definition
* [Import Mapping](/refguide10/import-mappings/) (`POST` 및 `PATCH` 오퍼레이션용)
* [Export Mapping](/refguide10/export-mappings/) (**Get all** 및 **Get by key** 오퍼레이션용)

해당 Entity에 대한 Message Definition을 이미 생성한 경우, 해당 Message Definition이 재사용됩니다. 해당 Message Definition을 기반으로 한 기존 Import 및 Export Mapping도 재사용됩니다.
