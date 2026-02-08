---
title: "Go to 옵션"
url: /refguide10/go-to-option/
description: "Mendix Studio Pro의 Go to 옵션에 대해 설명합니다."
weight: 40
---

## 소개

Studio Pro 편집기(내비게이션, 페이지, Microflow 편집기 등)에서 항목을 마우스 오른쪽 버튼으로 클릭하면 편리한 메뉴에 접근할 수 있습니다. **Go to** 옵션은 앱에서 경로를 찾는 데 자주 사용됩니다. 한 요소에서 다른 요소로 이동할 수 있습니다. 예를 들어, 버튼의 대상 또는 데이터 그리드의 소스로 이동할 수 있습니다.

## Go to 옵션

**Go to** 옵션 사용 예는 아래에 설명되어 있습니다:

* **메뉴 항목의 대상 열기** – **App** > **Navigation**에서 메뉴 항목을 마우스 오른쪽 버튼으로 클릭하고 **Go to target**을 선택할 수 있습니다. Studio Pro가 메뉴 항목의 해당 대상(예: 페이지)을 엽니다.

    {{< figure src="/attachments/refguide10/modeling/menus/edit-menu/go-to-option/go-to-target.png" alt="Go to Target" class="no-border" width="600" >}}

* **요소의 데이터 소스 열기** – 페이지에서 위젯의 데이터 소스로 이동할 수 있습니다. 예를 들어, 데이터 그리드의 버튼을 마우스 오른쪽 버튼으로 클릭하고 **Go to microflow**를 선택할 수 있습니다. Mendix Studio Pro가 해당 Microflow를 엽니다:

    {{< figure src="/attachments/refguide10/modeling/menus/edit-menu/go-to-option/go-to-microflow.png" alt="Go to Microflow" class="no-border" width="500" >}}

* **Microflow에서 Entity 열기** – Microflow에서 활동을 마우스 오른쪽 버튼으로 클릭하고 **Go to entity**를 선택하면 Domain Model의 Entity로 이동할 수 있습니다. Mendix Studio Pro가 해당 Domain Model을 엽니다:

    {{< figure src="/attachments/refguide10/modeling/menus/edit-menu/go-to-option/go-to-entity.png" alt="Go to Entity" class="no-border" width="400" >}}

## Go to 대화 상자 {#go-to-dialog}

**Go to** 대화 상자는 **Edit** 메뉴 또는 <kbd>Ctrl</kbd> + <kbd>G</kbd> 단축키를 통해 접근할 수 있습니다. 이 대화 상자에서 몇 글자를 입력하고 <kbd>Enter</kbd>를 눌러 앱의 모든 문서 또는 Domain Model 요소로 빠르게 이동할 수 있습니다.

{{< figure src="/attachments/refguide10/modeling/menus/edit-menu/go-to-option/go-to-dialog.png" alt="Go to Dialog"  width="400" >}}

입력한 글자 또는 용어는 캐시되므로 대화 상자를 닫았다가 다시 열어도 입력 내용이 유지됩니다.

이 대화 상자는 필터 옵션도 지원합니다. 필터 선택 항목은 대화 상자를 닫고 다시 열 때와 다른 사용자 세션에서도 저장됩니다. 이는 Studio Pro를 닫았다가 다시 열어도 필터 선택 항목이 저장됨을 의미합니다.

## 더 읽기

* [찾기, 고급 찾기, 사용처 찾기](/refguide10/find-and-find-advanced/)
* [Navigation](/refguide10/navigation/)
* [Pages](/refguide10/pages/)
* [Microflows](/refguide10/microflows/)
* [Domain Model의 데이터](/refguide10/domain-model/)
