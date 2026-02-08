---
title: "Microflow 데이터 소스를 위한 서버 측 페이징 및 정렬"
linktitle: "서버 측 페이징 및 정렬"
url: /refguide10/server-side-paging/
weight: 30
description: "REST 서비스에서 데이터를 검색하는 Microflow 데이터 소스가 있는 데이터 그리드를 생성하고, 서버 측 페이징 및 정렬을 추가하는 방법을 설명합니다."
aliases:
    - /howto10/logic-business-rules/server-side-paging/
---

## 소개

Microflow 데이터 소스에 서버 측 페이징 및 정렬을 사용하면 단일 페이지로 데이터를 검색하고 올바른 정렬 순서로 표시되도록 모델링할 수 있습니다. 이 접근 방식을 사용하면 모든 데이터를 클라이언트에 반환할 필요 없이 단일 페이지만 반환할 수 있습니다. 이는 REST 서비스와 같은 외부 소스에서 데이터를 가져올 때 유용하지만, Microflow의 일반 검색 활동에도 유용할 수 있습니다. 이를 위해 Microflow 자체에서 올바른 데이터를 가져오는 로직을 모델링해야 합니다.

이 사용 방법 문서에서는 다음을 배우게 됩니다:

* REST 서비스에서 데이터를 검색하는 Microflow 데이터 소스가 있는 데이터 그리드 생성
* 해당 데이터 그리드에 서버 측 페이징 및 정렬 추가

## 전제 조건

이 사용 방법을 시작하기 전에 다음 전제 조건을 완료했는지 확인하세요:

* Studio Pro [8.2.0 이상](https://marketplace.mendix.com/link/studiopro/) 설치
* REST 서비스의 데이터 사용에 익숙하지 않은 경우 [REST Service 사용하기](/howto10/integration/consume-a-rest-service/)를 읽으세요

## Microflow 데이터 소스 생성

이 섹션에서는 REST 서비스용 JSON 구조와 Import Mapping을 생성합니다. 이를 위해 [REST Service 사용하기](/howto10/integration/consume-a-rest-service/)의 처음 네 섹션을 완료하세요 — (**Domain Model에 입력 Entity 추가**까지).

한 가지 중요한 변경 사항으로 이 단계를 완료하세요: JSON 스니펫에 이 REST 서비스 URL을 사용해야 합니다: `https://my-json-server.typicode.com/mendix/howto-api-data/airports`.

성공적으로 완료하면 앱에 다음 요소가 포함되어야 합니다:

* 공항 데이터를 기반으로 한 JSON 구조:

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/server-side-paging/json-structure.png" alt="json structure"   width="500"  class="no-border" >}}

* Import Mapping:

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/server-side-paging/import-mapping.png" alt="import mapping"   width="500"  class="no-border" >}}

* Domain Model에 추가된 입력 Entity:

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/server-side-paging/input-entity.png" alt="input entity"   width="500"  class="no-border" >}}

이제 Microflow 데이터 소스에서 REST 서비스를 호출할 수 있습니다. 문자 목록을 반환하는 Microflow 데이터 소스를 생성하려면 다음을 수행하세요:

1. 모듈을 마우스 오른쪽 버튼으로 클릭하고 **Add Microflow**를 클릭한 다음, *Call_REST*라는 새 Microflow를 생성합니다.
2. **Toolbox**에서 **Call REST service** 활동을 Microflow로 끌어다 놓습니다.
3. **Call REST service** 활동을 더블 클릭합니다.
4. **Location** > **Edit** 버튼을 클릭합니다:

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/server-side-paging/edit-call-rest.png" alt="edit call rest"   width="500"  class="no-border" >}}

5. **Template** 필드에 `https://my-json-server.typicode.com/mendix/howto-api-data/airports`를 추가하고 **OK**를 클릭합니다:

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/server-side-paging/add-airport-url.png" alt="airport template"   width="500"  class="no-border" >}}

6. **Response** 탭을 클릭합니다:

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/server-side-paging/response-tab.png" alt="response tab"   width="500"  class="no-border" >}}

7. **Response handling** 드롭다운 메뉴에서 **Apply import mapping**을 선택합니다.
8. **Mapping** > **Select**를 클릭하고 생성한 Import Mapping을 선택합니다.
9. **Variable Name**에 *Result*를 입력합니다. **OK**를 클릭하여 변경 사항을 적용합니다:

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/server-side-paging/call-rest-response.png" alt="variable result"   width="500"  class="no-border" >}}

10. **Toolbox**에서 **Retrieve** 활동을 Microflow로 끌어다 놓고 더블 클릭합니다.
11. **Association** > **Select**를 클릭합니다.
12. **Expand All**을 클릭하고 **JsonObject_Summary (List of NativeMobile.JsonObject)**를 선택합니다.
13. **OK**를 클릭하여 이 연결을 수락합니다.
14. **Retrieve** 활동을 마우스 오른쪽 버튼으로 클릭하고 **Set $JsonObjectList as return value**를 선택합니다:

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/server-side-paging/call-rest-returned.png" alt="set return value"   width="500"  class="no-border" >}}

## Microflow 데이터 소스로 데이터 그리드 생성

이전 섹션에서 문자 목록을 반환하는 Microflow를 생성했습니다. 이제 이 Microflow를 데이터 그리드의 데이터 소스로 사용합니다:

1. **Toolbox**에서 **Data grid**를 페이지로 끌어다 놓습니다.
2. 새로 배치된 데이터 그리드의 파란색 헤더를 더블 클릭합니다.
3. **Data source** 탭을 클릭합니다:

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/server-side-paging/data-source.png" alt="data source tab" class="no-border" >}}

4. **Type** > **Microflow**를 선택합니다.
5. **Microflow** > **Select**를 클릭하고 **Call_REST** Microflow를 선택합니다.
6. **OK**를 클릭하여 데이터 소스 변경 사항을 수락합니다.
7. **"Do you want to automatically fill the contents of the data grid?"** 팝업 창이 나타나면 **Yes**를 클릭합니다:

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/server-side-paging/auto-fill.png" alt="click yes"   width="500"  class="no-border" >}}

8. **"Do you want to generate controls for microflow source parameters of the data grid? This will enable server-side paging sorting and searching for the grid."** 팝업 창이 나타나면 **Yes**를 클릭합니다:

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/server-side-paging/question-dialog.png" alt="click yes again"   width="500"  class="no-border" >}}

이렇게 하면 데이터 그리드 주위에 데이터 뷰가 생성되고, 필요한 위젯과 Nanoflow가 생성되며, **Paging** 객체가 Microflow의 입력으로 추가됩니다:

{{< figure src="/attachments/refguide10/modeling/integration/rest-services/server-side-paging/paging.png" alt="paging object"   width="500"  class="no-border" >}}

## Microflow 데이터 소스에 페이징 지원 추가

이전 섹션에서 Microflow에 **Paging** 입력 매개변수를 추가했습니다. 이 매개변수에는 클라이언트에서 페이징 바로 페이지를 탐색할 때 업데이트되는 **PageNumber** 속성이 포함되어 있습니다. 이 섹션에서는 **PageNumber** 속성을 사용하여 REST 서비스에서 지정된 페이지를 검색합니다:

1. **CallREST** Microflow를 엽니다.
2. **Call REST service** 활동을 더블 클릭하고 **Location** > **Edit**를 클릭합니다.
3. **Template**을 `https://my-json-server.typicode.com/mendix/howto-api-data/airports?_limit=5&_page={1}`로 변경합니다:

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/server-side-paging/template-param-one.png" alt="add page bit to template"   width="500"  class="no-border" >}}

4. **Parameters** > **New**를 클릭하여 새 매개변수를 추가하고 이 매개변수에 `toString($Paging/PageNumber)` 표현식을 입력합니다:

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/server-side-paging/page-parameter.png" alt="add page number parameter"   width="500"  class="no-border" >}}

5. **OK** > **OK**를 클릭하여 이 표현식과 위치를 수락합니다.
6. **OK**를 클릭하여 **Call REST service** 활동의 변경 사항을 수락합니다. 이제 Microflow로 돌아갑니다.

앱을 배포하고 데이터 그리드를 추가한 페이지로 이동합니다. 데이터 그리드 위의 페이징 바 버튼을 사용하여 새로 추가된 서버 측 페이징을 사용할 수 있습니다.

## Microflow 데이터 소스에 서버 측 정렬 지원 추가

이제 데이터 그리드에 서버 측 페이징이 적용되었습니다. 다음으로 서버 측 정렬을 추가합니다.

클라이언트에서 데이터 그리드의 헤더를 클릭하면 클릭한 헤더와 연관된 속성으로 **SortAttribute**가 설정되어 **Paging** Entity가 업데이트됩니다. **SortAscending**은 오름차순의 경우 **true**로, 내림차순의 경우 **false**로 설정됩니다.

REST 서비스를 호출할 때 이러한 속성을 사용하세요:

1. **Call_REST** Microflow를 엽니다.
2. **Call REST service** 활동을 더블 클릭하고 **Location** > **Edit**를 클릭합니다.
3. 현재 **Template** 주소 끝에 `&_sort={2}&_order={3}`을 추가합니다:

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/server-side-paging/appended-template.png" alt="add sort and order bits to template"   width="500"  class="no-border" >}}

4. **Parameters** > **New**를 클릭하여 두 번째 매개변수를 추가하고 `toLowerCase($Paging/SortAttribute)` 표현식을 입력합니다:

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/server-side-paging/second-param.png" alt="add second parameter"   width="500"  class="no-border" >}}

5. **OK**를 클릭하여 이 표현식을 수락합니다.
6. **Parameters** > **New**를 클릭하여 세 번째 매개변수를 추가하고 `if $Paging/SortAscending then 'asc' else 'desc'` 표현식을 입력합니다:

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/server-side-paging/third-param.png" alt="add third parameter"   width="500"  class="no-border" >}}

7. **OK** > **OK**를 클릭하여 이 표현식과 위치를 수락합니다.
8. **OK**를 클릭하여 **Call REST service** 활동의 변경 사항을 수락합니다.

앱을 다시 배포하고 데이터 그리드가 있는 페이지로 이동합니다. 열 헤더를 클릭하여 서버 측 정렬이 작동하는 것을 확인하세요.

{{< figure src="/attachments/refguide10/modeling/integration/rest-services/server-side-paging/header-sorting-smaller2.gif" alt="click headers to sort" class="no-border" >}}

### 기본 정렬 순서 설정

데이터에 기본 정렬 순서를 설정할 수 있습니다. 사용자가 헤더를 클릭하지 않은 경우, 데이터가 기본 정렬 순서로 정렬됩니다:

1. 데이터 그리드가 포함된 페이지를 엽니다.
2. 데이터 그리드를 둘러싼 데이터 뷰를 마우스 오른쪽 버튼으로 클릭합니다.
3. **Go to data source nanoflow**를 선택합니다.
4. **Create object** 활동을 더블 클릭합니다:

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/server-side-paging/create-nano.png" alt="create object activity one"   width="500"  class="no-border" >}}

5. **New**를 클릭하여 **Paging** Entity의 멤버 값을 설정합니다.
6. **Member** 드롭다운 메뉴를 클릭하고 **SortAttribute (String (200))**를 선택합니다.
7. **Value**를 `'Name'`으로 설정합니다:

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/server-side-paging/name-value.png" alt="name value"   width="500"  class="no-border" >}}

8. **OK** > **OK**를 클릭하여 멤버와 **Create object** 활동의 변경 사항을 수락합니다.

앱을 다시 배포하고 데이터 그리드가 있는 페이지로 이동합니다. 이제 데이터가 **Name**으로 정렬됩니다.

{{< figure src="/attachments/refguide10/modeling/integration/rest-services/server-side-paging/data-by-name.png" alt="sorted by name"   width="500"  class="no-border" >}}

### 서버 측 정렬 비활성화

정렬을 지원하지 않는 REST 서비스를 사용하는 앱이나 사용자가 정렬 순서를 변경할 수 없도록 하는 앱에는 특별한 기능이 필요합니다. 이러한 경우, 헤더를 클릭해도 아무런 효과가 없도록 정렬을 비활성화하세요:

1. 데이터 그리드가 포함된 페이지를 엽니다.
2. 데이터 그리드를 둘러싼 데이터 뷰를 마우스 오른쪽 버튼으로 클릭하고 **Go to data source nanoflow**를 선택합니다.
3. **Create object** 활동을 더블 클릭합니다.
4. **New**를 클릭하여 **Paging** Entity의 다른 멤버 값을 설정합니다.
5. 드롭다운 메뉴에서 **Member** > **IsSortable (Boolean)**을 선택합니다.
6. **Value**에 *false*를 입력합니다:

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/server-side-paging/disable-sort.png" alt="value false" class="no-border" >}}

7. **OK** > **OK**를 클릭하여 멤버와 **Create object** 활동의 변경 사항을 수락합니다.

앱을 다시 배포하고 데이터 그리드가 있는 페이지로 이동합니다. 데이터는 여전히 **Name**으로 정렬되어 있지만, 헤더를 클릭하여 더 이상 정렬을 변경할 수 없습니다. **Name** 헤더 위에 화살표가 없는 것을 확인하세요.

{{< figure src="/attachments/refguide10/modeling/integration/rest-services/server-side-paging/sorting-disabled.png" alt="sorted but not clickable" class="no-border" >}}

## 서버 측 검색 추가

컨트롤 생성은 Microflow가 반환하는 Entity의 모든 속성에 대한 입력 필드도 생성합니다. 이러한 입력은 사용자가 검색 기준을 입력하는 데 사용할 수 있으며, 서버에서 데이터 세트를 필터링하는 데 사용할 수 있습니다. 사용자가 입력 필드에 입력한 모든 데이터는 데이터 소스 Microflow에 전달되는 **Paging** Entity에 설정됩니다.

Microflow에서 이 데이터를 사용하고 REST 호출에 검색 기준을 전달하여 필터링된 데이터 세트를 가져오기만 하면 됩니다. 예시로, **Name** 속성을 필터링하려면 아래 지침을 따르세요:

1. **Call_REST** Microflow를 엽니다.
2. **Call REST service** 활동을 더블 클릭하고 **Location** > **Edit**를 클릭합니다.
3. 현재 **Template** 주소 끝에 `&name_like={4}`를 추가합니다:

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/server-side-paging/template-add-search.png" alt="add search bits to template"   width="500"  class="no-border" >}}

4. **Parameters** > **New**를 클릭하여 네 번째 매개변수를 추가하고 다음 표현식을 입력합니다:

    ```text
    if $Paging/Name = empty then '' else $Paging/Name
    ```

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/server-side-paging/fourth-param.png" alt="add fourth parameter"   width="500"  class="no-border" >}}

5. **OK** > **OK**를 클릭하여 이 표현식과 위치의 변경 사항을 수락합니다.
6. **OK**를 클릭하여 **Call REST service** 활동의 변경 사항을 수락합니다.

앱을 다시 배포하고 데이터 그리드가 있는 페이지로 이동합니다. 이름의 일부 값(예: *International*)을 입력하고 **Search**를 클릭하여 서버 측 검색이 작동하는 것을 확인하세요!

## 더 보기

* [REST Services](/refguide10/integration/rest-services/)
* [JSON Structures 가이드](/refguide10/json-structures/)
* [Consumed REST Service](/refguide10/consumed-rest-service/)
* [Microflow에서 Call REST Service 액션 사용하기](/refguide10/integration/use-call-rest-action-in-microflow/)
