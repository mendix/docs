---
title: "Microflow를 REST 오퍼레이션으로 게시하기"
linktitle: "Microflow를 REST 오퍼레이션으로 게시"
url: /refguide10/publish-microflow-as-rest-operation/
weight: 30
description: "Microflow를 REST 오퍼레이션으로 게시하는 방법"
# If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
# linked from DM: edit microflow > (right-click) Publish as REST service operation > New > Help (integration)
---

## 소개

Microflow를 REST 서비스 오퍼레이션으로 게시하려면 Microflow 편집기에서 마우스 오른쪽 버튼을 클릭하고 **Publish as REST service operation**을 선택하세요.

Microflow가 객체 또는 목록 유형의 매개변수를 두 개 이상 사용하는 경우, REST 오퍼레이션으로 게시할 수 없습니다. 게시를 시도하면 일관성 오류가 발생합니다.

## 리소스 선택

**Publish as REST service operation**을 클릭한 후, Microflow를 게시할 리소스를 선택하세요. 여러 가지 옵션이 있습니다:

* Microflow를 게시할 서비스와 리소스가 이미 있는 경우, 해당 항목을 선택하고 **Select**를 클릭합니다
* 서비스는 이미 있지만 리소스를 만들려는 경우, 서비스를 선택하고 **New**를 클릭합니다
* 새 서비스를 만들려는 경우, 모듈 또는 폴더를 선택하고 **New**를 클릭합니다

제안되는 리소스 이름은 Microflow의 매개변수 Entity 또는 Microflow 결과의 Entity입니다.

## 오퍼레이션 편집

서비스와 리소스를 선택하거나 생성한 후 오퍼레이션을 편집할 수 있습니다.

Microflow가 객체 또는 목록 매개변수를 사용하는 경우 **Method**의 제안 값은 **POST**입니다. 그렇지 않으면 **GET**입니다.
