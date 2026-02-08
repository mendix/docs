---
title: "Published REST Resource 생성"
url: /refguide8/generate-rest-resource/
weight: 20
description: "Entity에서 Published REST Resource 생성"
# If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
# linked from DM: domain model > entity (right-click) > Expose as REST resource > Help (integration)
---

## 소개

도메인 모델에서 Entity를 마우스 오른쪽 버튼으로 클릭하고 **Expose as REST resource**를 선택하여 Entity 기반의 기본 작업이 포함된 REST 리소스를 게시할 수 있습니다. 또는 Entity 또는 메시지 정의를 Published REST Service의 리소스 목록에 끌어다 놓을 수도 있습니다. 이 페이지에서는 이러한 작업을 수행한 후 사용할 수 있는 옵션을 설명합니다.

## REST Service

이 항목은 도메인 모델에서 **Expose as REST resource**를 클릭할 때만 표시됩니다. 그런 다음 리소스와 작업을 생성할 서비스를 선택하십시오.

## General

### Resource Name

게시하려는 리소스의 이름을 입력하십시오.

### Key Attribute

**Get by key**, **Patch** 또는 **Delete** 작업을 생성하려면 Entity에 고유 속성이 있어야 합니다. 여기에서 해당 속성을 선택하십시오.

## Operations

생성하려는 작업을 선택하십시오:

* **Get all** – 클라이언트가 모든 객체를 가져올 수 있습니다.
* **Get by key** – 클라이언트가 키를 제공하여 객체를 가져올 수 있습니다.
* **Post** – 클라이언트가 새 객체를 추가할 수 있습니다.
* **Patch** – 클라이언트가 기존 객체를 업데이트할 수 있습니다.
* **Delete** – 클라이언트가 기존 객체를 삭제할 수 있습니다.

**OK**를 클릭하면 다음 항목이 생성됩니다:

* 리소스
* 선택한 모든 작업
* 각 작업에 대한 Microflow
* 메시지 정의
* Import Mapping(**Post** 및 **Patch** 작업용)
* Export Mapping(**Get all** 및 **Get by key** 작업용)

Entity에 대한 메시지 정의를 이미 생성한 경우 해당 메시지 정의가 재사용됩니다. 해당 메시지 정의를 기반으로 하는 기존 Import 및 Export Mapping도 재사용됩니다.
