---
title: "페이지 편집기 일관성 오류"
url: /refguide8/consistency-errors-pages/
description: "Mendix Studio Pro의 일관성 오류와 수정 방법에 대해 설명합니다."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

이 문서에서는 Studio Pro에서 페이지를 구성할 때 발생할 수 있는 가장 일반적이거나 복잡한 일관성 오류를 해결하는 방법을 설명합니다. 페이지의 일관성 오류 예로는 페이지의 데이터 뷰에 Entity 속성을 지정하지 않은 경우가 있습니다.

{{% alert color="info" %}}

이 문서에서 *모든* 오류를 설명하지는 않습니다. 발생할 수 있는 오류가 많으며, 그중 일부는 단순하여 추가 설명이 필요 없고, 다른 일부는 드물거나 사용 사례에 크게 의존합니다.

{{% /alert %}}

일부 오류에는 오류 코드가 있으며, 이러한 오류가 문서에 설명되어 있는 경우 Studio Pro에서 해당 문서로의 클릭 가능한 링크가 있습니다. 다른 오류에는 오류 코드가 없으며, 이 경우 특정 오류가 문서에 설명되어 있는지 수동으로 검색할 수 있습니다(**Errors** 창에 표시되는 메시지로 검색).

## List View 일관성 오류

[list view](/refguide8/list-view/)에 대해 [데이터 소스](/refguide8/data-sources/)를 올바르게 구성하지 않으면 일관성 오류가 발생합니다.

아래 도식은 list view의 데이터 소스가 **Database**로 설정되었지만 데이터베이스에서 검색해야 할 Entity가 지정되지 않았음을 보여줍니다. 이로 인해 일관성 오류가 발생합니다.

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/consistency-errors/consistency-errors-pages/list-view-error.png" alt="Data Source Consistency Error Scheme" class="no-border" >}}

아래 표에서는 list view를 구성할 때 발생할 수 있는 가장 일반적인 오류, 오류 원인, 수정 방법을 설명합니다.

| 오류 코드 | Error Pane의 메시지                                    | 오류 원인                                           | 수정 방법                                                   |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| CE0488     | No entity configured for the data source of this list view. Select an entity or change the data source. | **Database/XPath/Association** 옵션이 list view의 데이터 소스로 선택되었지만, Entity가 지정되지 않았습니다. | 다음 중 하나를 수행하십시오: <ul><li>list view의 속성 > **Data source**를 열고 **Entity (path)** 필드에서 Entity를 선택합니다</li><li>데이터 소스 유형을 변경합니다</li></ul> |
|            | No microflow configured for the data source of this list view. Select a microflow or change the data source. | 데이터 소스가 **Microflow**로 설정되었지만, Microflow가 지정되지 않았습니다. | 다음 중 하나를 수행하십시오: <ul><li>list view의 속성 > **Data source**를 열고 **Microflow** 필드에서 Microflow를 선택합니다</li><li>데이터 소스 유형을 변경합니다</li></ul> |
|            | No nanoflow configured for the data source of this list view. Select a nanoflow or change the data source. | 데이터 소스가 **Nanoflow**로 설정되었지만, Nanoflow가 지정되지 않았습니다. | 다음 중 하나를 수행하십시오: <ul><li>list view의 속성 > **Data source**를 열고 **Nanoflow** 필드에서 Nanoflow를 선택합니다</li><li>데이터 소스 유형을 변경합니다</li></ul> |
| CE0595     | Attribute {AttributeName} is not an attribute of entity {EntityName}. | list view의 대상 Entity를 내용을 업데이트하지 않고 변경했습니다. list view가 다른 Entity의 Attribute로 채워져 있습니다. | 위젯의 속성 > **Data source**를 열고 **Attribute (path)**에 대해 다른 Attribute를 선택하십시오. |

## Data View 일관성 오류

[data view](/refguide8/data-view/)에 대해 [데이터 소스](/refguide8/data-sources/)를 올바르게 구성하지 않으면 일관성 오류가 발생합니다.

예를 들어, **Listen to widget**를 데이터 소스로 선택했지만 수신 대기할 특정 **List widget**를 선택하지 않았습니다.

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/consistency-errors/consistency-errors-pages/data-view-no-list-widget.png" alt="Data View With no List Widget Configured" class="no-border" >}}

아래 표에서는 data view를 구성할 때 발생할 수 있는 가장 일반적인 오류, 오류 원인, 수정 방법을 설명합니다.

| 오류 코드 | Error Pane의 메시지                                    | 오류 원인                                           | 수정 방법                                                   |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| CE0488     | No entity configured for the data source of this data view. Select an entity or change the data source. | **Context**가 data view의 데이터 소스로 선택되었지만, Entity가 지정되지 않았습니다. | 다음 중 하나를 수행하십시오: <ul><li>data view의 속성 > **Data Source**를 열고 **Entity** 필드에서 Entity를 선택합니다</li><li>데이터 소스 유형을 변경합니다</li></ul> |
|            | No microflow configured for the data source of this data view. Select a microflow or change the data source | Microflow가 데이터 소스로 선택되었지만, Microflow가 지정되지 않았습니다. | 다음 중 하나를 수행하십시오: <ul><li>data view의 속성 > **Data Source**를 열고 **Microflow** 필드에서 Microflow를 선택합니다</li><li>데이터 소스 유형을 변경합니다</li></ul> |
|            | No nanoflow configured for the data source of this data view. Select a nanoflow or change the data source | Nanoflow가 데이터 소스로 선택되었지만, Nanoflow가 지정되지 않았습니다. | 다음 중 하나를 수행하십시오: <ul><li>data view의 속성 > **Data Source**를 열고 **Nanoflow** 필드에서 Nanoflow를 선택합니다</li><li>데이터 소스 유형을 변경합니다</li></ul> |
| CE0536     | No list widget configured for the data source of this data view. Select a widget or change the data source. | **Listen to widget**가 data view의 데이터 소스로 구성되었지만, 지정된 list view 위젯이 동일한 페이지에 더 이상 존재하지 않습니다. | 다음 중 하나를 수행하십시오: <ul><li>동일한 페이지에 list view를 생성하고 구성한 다음 data view의 list widget으로 선택합니다</li><li>데이터 소스 유형을 변경합니다</li></ul> |
| CE0558     | All data views receiving an object from the page parameter must have the same entity. | 하나의 페이지에 서로 다른 Entity를 데이터 소스로 가진 여러 data view가 있습니다. | 다음 중 하나를 수행하십시오: <ul><li>페이지 컨텍스트를 사용하는 모든 data view에 동일한 Entity를 선택합니다</li><li>데이터 소스를 변경합니다</li></ul> |

## Context Not Available 일관성 오류

페이지가 사용할 수 없는 컨텍스트를 예상할 때 발생하는 오류는 아래 표에 설명되어 있습니다.

| 오류 코드 | Error Pane의 메시지                                    | 오류 원인                                           | 수정 방법                                                   |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| CE1568     | The selected page {Name of the page} expects an object of type {type of object}, which is not available here. | 페이지에 특정 유형의 객체가 전달되어야 하는 data view가 있습니다. 이 오류는 이 객체를 사용할 수 없는 다른 페이지에서 페이지를 호출할 때 발생합니다. 자세한 예제는 [CE1568 오류 수정 예제](#error-example-1)를 참조하십시오. | 구성된 data view가 있는 페이지에 객체가 전달되도록 하십시오. 자세한 내용은 [CE1568 오류 수정 예제](#error-example-1)를 참조하십시오. |
| CE1569     | The selected page {Name of page} expects an object of type X, which is not compatible with the object of type Y that is available here. | 페이지를 여는 위젯(예: 버튼)이 있습니다. 페이지에는 특정 유형의 객체가 전달되어야 하는 data view가 있습니다. 그러나 위젯은 다른 유형의 객체가 있는 데이터 컨테이너 안에 배치되어 있습니다. 자세한 예제는 [CE1569 오류 수정 예제](#error-example-2) 섹션을 참조하십시오. | 버튼이 페이지에 올바른 유형의 객체를 전달하는 데이터 컨테이너에 배치되었는지 확인하십시오. 자세한 내용은 [CE1569 오류 수정 예제](#error-example-2) 섹션을 참조하십시오. |

### CE1568 오류 수정 예제 {#error-example-1}

페이지가 호출 페이지 또는 Microflow에서 전달되지 않은 컨텍스트를 예상하면 일관성 오류가 발생합니다.

예를 들어, **Customers** 페이지에는 모든 고객 이름의 목록이 있는 list view(**Customer**가 **Data Source** 속성에서 **Entity**로 설정됨)와 list view 외부([container](/refguide8/container/)에만 배치된)에 **Details** 버튼이 있습니다. **Details** 버튼은 사용자가 클릭하면 **Customer Details** 페이지를 엽니다(버튼의 **On Click Action**이 **Page**로 설정됨).

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/consistency-errors/consistency-errors-pages/customers-page.png" alt="Button Properties on the Customers Page" class="no-border" >}}

그러나 **Customer Details** 페이지에는 *Customer* 객체가 전달되어야 하는 data view가 있습니다. 즉, 이 페이지가 데이터를 표시하려면 먼저 데이터를 가져와야 합니다.

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/consistency-errors/consistency-errors-pages/data-view-customer.png" alt="Data View Expects the Customer Object" class="no-border" >}}

이 객체가 **Customers** 페이지에서 전달되지 않으므로 일관성 오류가 발생합니다.

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/consistency-errors/consistency-errors-pages/object-error.png" alt="Example of Error When Context is Unavailable" class="no-border" >}}

**Customers** 페이지의 **Details** 버튼이 데이터 컨테이너 외부에 있으므로 어떤 객체를 전달해야 하는지 알 수 없습니다. 이 오류의 수정 방법은 다음에 따라 달라집니다:

* Customer 목록에서 특정 *Customer* 객체를 **Customer Details** 페이지에 전달하려는 경우, 즉 특정 고객의 세부 정보가 **Customer Details** 페이지에 표시되는 경우(자세한 내용은 [페이지에 특정 객체 전달](#passing-specific-object) 섹션 참조)
* *Customer* 유형의 새 객체를 생성하여 **Customer Details** 페이지에 전달하려는 경우, 즉 새 고객이 생성되는 경우(자세한 내용은 [새 객체 생성 및 페이지에 전달](#creating-new-object) 섹션 참조)

#### 페이지에 특정 객체 전달 {#passing-specific-object}

**Customer Details** 페이지가 특정 고객의 세부 정보를 열도록 하려면, 특정 객체를 페이지에 전달하려는 것입니다. **Customer** 페이지에 이미 고객 목록이 있는 list view가 있으므로 다음과 같이 이 오류를 수정할 수 있습니다:

1. **Customers** 페이지를 여십시오.
2. **Details** 버튼을 list view 안으로 드래그하십시오.

    {{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/consistency-errors/consistency-errors-pages/details-button-inside-the-list-view.png" alt="The Details Button Example" class="no-border" >}}

이제 버튼이 **Customers** 페이지의 list view에서 *Customer* 유형의 객체를 가져와 **Customer Details** 페이지에 전달합니다. 결과적으로 특정 고객의 세부 정보가 **Customer Details** 페이지에 표시됩니다.

#### 새 객체 생성 및 페이지에 전달 {#creating-new-object}

새 고객을 생성하고 **Customers Details** 페이지에서 고객 세부 정보를 입력하려면 다음을 수행하십시오:

1. **Customers** 페이지를 여십시오.
2. **Details** 버튼의 속성을 열고 **On Click Action**을 **Create Object**로 설정하십시오.
3. **Entity**를 **Customer**로 설정하십시오.
4. **Page**를 **Customer Details**로 설정하십시오.

    {{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/consistency-errors/consistency-errors-pages/button-create-object.png" alt="On Click Event Example" class="no-border" >}}

5. 이 버튼은 이제 기존 고객의 세부 정보를 표시하는 대신 새 고객을 생성하므로 버튼의 캡션을 **Details**에서 **Add**로 변경하십시오.

이제 사용자가 이 버튼을 클릭하면 **Customer Details** 페이지가 열리고 새 *Customer* 객체가 생성됩니다.

### CE1569 오류 수정 예제 {#error-example-2}

위젯이 페이지를 열고 이 위젯이 Entity X의 데이터 컨테이너 안에 있지만 참조된 페이지가 Entity Y를 예상하면 일관성 오류가 발생합니다.

예를 들어, **Engineers** 페이지에 **Tasks** 페이지를 여는 **Details** 버튼이 있습니다.

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/consistency-errors/consistency-errors-pages/engineers-page.png" alt="A Button on Engineers Page" class="no-border" >}}

버튼은 list view 안에 배치되어 있으며, list view의 데이터 소스는 **Properties** > **Data Source**에서 Entity *Engineer*로 설정되어 있습니다.

Tasks 페이지에는 data view가 있지만, data view의 데이터 소스는 **Properties** > **Data Source**에서 Entity *SmartTask*로 설정되어 있습니다.

이는 data view가 *SmartTask* 유형의 객체가 전달되기를 예상하지만, **Engineers** 페이지는 *Engineer* 유형의 객체를 전달하고 있음을 의미합니다.

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/consistency-errors/consistency-errors-pages/tasks-page-list-view.png" alt="Data Source Example" class="no-border" >}}

이 오류를 수정하려면 다음 중 하나를 수행하십시오:

* **Details** 버튼을 올바른 유형의 데이터를 페이지에 전달하는 데이터 컨테이너에 배치합니다:

    {{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/consistency-errors/consistency-errors-pages/details-button.png"   width="350"  class="no-border" >}}

* 버튼에 객체 전달을 예상하지 않거나 *Engineer* 유형의 객체를 예상하는 다른 페이지를 선택합니다
* **Tasks** 페이지의 data view 데이터 소스를 Entity *Engineer*로 변경합니다

## Data 일관성 오류

데이터 소스에서 객체를 예상하는 위젯이 객체를 받지 못하거나 다른 Entity 유형의 객체를 받으면 데이터 일관성 오류가 발생합니다.

이 유형의 가장 일반적인 오류 중 일부는 아래 표에 설명되어 있습니다:

| 오류 코드 | Error Pane의 메시지                                    | 오류 원인                                           | 수정 방법                                                   |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| CE0552     | Microflow {name of the microflow} does not return an object. | 위젯(예: data view)의 데이터 소스가 **Microflow**로 설정되었지만, Microflow가 객체를 반환하지 않습니다. | Microflow를 열고 종료 이벤트의 반환 값을 구성하십시오. |
| CE0551     | Microflow {name of the microflow} does not return a list.    | list view의 데이터 소스가 **Microflow**로 설정되었지만, Microflow가 목록을 반환하지 않습니다. | Microflow를 열고 종료 이벤트가 목록을 반환하도록 구성하십시오. |
| CE1573     | Parameter {Name of the parameter} of the selected microflow/nanoflow does not match available arguments. No arguments available to {Name of the widget}. | 위젯(예: 버튼)의 on-click 이벤트로 Microflow 또는 Nanoflow를 선택했으며, Microflow/Nanoflow에 매개변수가 포함되어 있지만 위젯에 Microflow에 전달할 인수(예: 객체)가 없습니다. | 위젯을 데이터 컨테이너에 배치하고 데이터 컨테이너의 데이터 소스가 Microflow/Nanoflow 매개변수의 **Data type** 속성에서 선택한 Entity와 일치하는지 확인하십시오. 자세한 예제와 수정 방법은 [CE1573 오류 수정 예제](#error-fix-example-3) 섹션을 참조하십시오. |
| CE1574     | Parameter {Name of the parameter} of the selected microflow/nanoflow does not match available arguments. Arguments available to {Name of the widget} are {list of available arguments}. | 위젯의 데이터 소스로 Microflow 또는 Nanoflow를 선택했지만, 이 위젯에 사용 가능한 인수가 Microflow의 매개변수와 일치하지 않습니다. | 위젯에 사용 가능한 인수(예: 객체)가 Microflow/Nanoflow 매개변수의 **Data type** 속성에서 선택한 Entity와 일치하는지 확인하십시오. 자세한 예제와 수정 방법은 [CE1574 오류 수정 예제](#error-fix-example-4) 섹션을 참조하십시오. |

### CE1573 오류 수정 예제 {#error-fix-example-3}

위젯의 on-click 이벤트로 Microflow 또는 Nanoflow를 설정하고, 이 Microflow가 사용할 수 없는 인수(예: 객체)를 예상하면 오류가 발생합니다.

예를 들어, *Customers* 페이지에 Microflow를 호출하는 버튼이 있습니다(버튼의 [**On click** 이벤트](/refguide8/on-click-event/)가 *Microflow*로 설정됨):

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/consistency-errors/consistency-errors-pages/on-click-event-button.png" class="no-border" >}}

그러나 Microflow에는 *Customer* 매개변수가 있습니다:

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/consistency-errors/consistency-errors-pages/microflow-parameter.png" class="no-border" >}}

Microflow 매개변수는 *Customer* 인수를 예상하며, 이 인수가 버튼이 있는 페이지에서 사용할 수 없으므로 오류가 발생합니다.

수정하려면 다음을 수행하십시오:

1. *Customers* 페이지를 열고 데이터 컨테이너를 드래그하십시오. 예를 들어, list view를 드래그할 수 있습니다.
2. list view의 데이터 소스 유형을 *Database*로 설정하고 **Entity (path)**를 *Customer*로 설정하십시오.

    {{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/consistency-errors/consistency-errors-pages/data-source-list-view.png" class="no-border" >}}

3. 버튼을 list view 안에 배치하십시오.

이제 *Customer* 객체가 페이지에서 사용 가능하며 Microflow 매개변수 *Customer*와 일치합니다.

### CE1574 오류 수정 예제 {#error-fix-example-4}

위젯의 on-click 이벤트로 Microflow 또는 Nanoflow를 설정하고, 이 Microflow/Nanoflow가 특정 인수를 예상하지만 위젯에 다른 인수가 사용 가능한 경우 오류가 발생합니다.

예를 들어, *Customers* 페이지에 Microflow를 호출하는 버튼이 있습니다([On click event](/refguide8/on-click-event/)가 *Microflow*로 설정됨):

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/consistency-errors/consistency-errors-pages/on-click-event-button.png" class="no-border" >}}

Microflow에는 *Customer* 매개변수가 있습니다:

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/consistency-errors/consistency-errors-pages/microflow-parameter.png" class="no-border" >}}

*Customers* 페이지에 *Photo* 객체가 사용 가능한 데이터 컨테이너(예: data view)도 있습니다. 즉, data view의 데이터 소스 유형이 *Context*로 설정되고 **Entity (path)**가 *Photo*로 설정되어 있습니다:

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/consistency-errors/consistency-errors-pages/data-view-data-source.png" class="no-border" >}}

Microflow에는 *Customer* 매개변수가 있고 data view에는 *Photo* 객체가 있으므로 충돌하여 오류가 발생합니다.

이 오류를 수정하는 가장 좋은 방법은 Microflow를 *Photo*를 수락하도록 변경하거나 버튼을 다른 Entity의 데이터 컨테이너에 배치하는 것입니다.

## Input Widget 일관성 오류

입력 위젯에 대한 가장 일반적인 오류, 원인 및 수정 방법은 아래 표에 설명되어 있습니다. 입력 위젯에 대한 자세한 내용은 [Input Widgets](/refguide8/input-widgets/)를 참조하십시오.

| 오류 코드 | Error Pane의 메시지                                    | 오류 원인                                           | 수정 방법                                                   |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| CE0544     | This widget can only function inside a data container. Move it into a data view, list view or template grid. | 페이지에 입력 위젯을 추가했지만 데이터 컨테이너 안에 있지 않습니다. 입력 위젯은 특정 Entity 유형의 Attribute를 참조해야 합니다. 그리고 Entity는 데이터 컨테이너를 통해서만 사용할 수 있습니다. 입력 위젯에 대한 자세한 내용은 [Input Widgets](/refguide8/input-widgets/)를 참조하십시오. | 이 위젯을 데이터 컨테이너(data view, list view 또는 template grid)에 배치하십시오. |
| CE0545     | Select an attribute for this {widget name}.                  | 입력 위젯을 추가하고 데이터 컨테이너 안에 있지만 Attribute가 선택되지 않았습니다. | 위젯을 마우스 오른쪽 버튼으로 클릭하고 드롭다운 목록에서 **Select Attribute**를 클릭하여 Attribute를 설정하십시오; 또는 위젯의 속성 > **Data source** 섹션을 열고 **Attribute (path)** 필드에서 Attribute를 설정하십시오. |
|            | Association {Name} must be a reference (not a reference set) | reference selector를 추가한 후 Association을 reference 유형에서 reference set으로 변경했습니다(일대다 또는 일대일에서 다대다로). | Domain Model을 열고 reference selector에 대해 선택한 Association을 찾아 일대다 Association으로 변경하십시오. Domain Model을 변경하면 다른 오류가 발생할 수 있습니다. Domain Model을 변경하지 않으려면 reference selector 대신 다른 위젯을 사용하는 것이 좋습니다.<br />reference selector에 대한 이 오류를 수정하는 방법에 대한 자세한 내용은 [Reference Selector의 잘못된 다중성](#incorrect-multiplicity-reference) 섹션을 참조하십시오. |
|            | Association {Name} must be a reference set (not a reference) | input reference set selector를 추가한 후 Association을 reference set 유형에서 reference로 변경했습니다(다대다에서 일대다 또는 일대일로). | Domain Model을 열고 input reference set selector에 대해 선택한 Association을 찾아 다대다 Association으로 변경하십시오. Domain Model을 변경하면 다른 오류가 발생할 수 있습니다. Domain Model을 변경하지 않으려면 reference set selector 대신 다른 위젯을 사용하는 것이 좋습니다. <br />reference set selector 및 input reference set selector의 일관성 오류를 수정하는 방법에 대한 자세한 내용은 [Reference Set Selector 및 Input Reference Set Selector의 잘못된 다중성](#incorrect-multiplicity-reference-set) 섹션을 참조하십시오. |
|            | The reference set selector expects an association of type reference set that starts in the data view entity. | reference set selector를 추가한 후 Association을 reference set 유형에서 reference로 변경했습니다(다대다에서 일대다 또는 일대일로). | Domain Model을 열고 reference set selector에 대해 선택한 Association을 찾아 다대다 Association으로 변경하십시오. Domain Model을 변경하면 다른 오류가 발생할 수 있습니다. Domain Model을 변경하지 않으려면 input reference set selector 대신 다른 위젯을 사용하는 것이 좋습니다. <br />reference set selector 및 input reference set selector의 일관성 오류를 수정하는 방법에 대한 자세한 내용은 [Reference Set Selector 및 Input Reference Set Selector의 잘못된 다중성](#incorrect-multiplicity-reference-set) 섹션을 참조하십시오. |

### Reference Selector의 잘못된 다중성 {#incorrect-multiplicity-reference}

Reference selector는 일대다 또는 일대일 Association을 표시하고 편집하는 데 사용되는 위젯입니다. 이 위젯에 대한 자세한 내용은 [Reference Selector](/refguide8/reference-selector/)를 참조하십시오.

잘못된 유형의 Association이 있으면 일관성 오류가 발생합니다: *Association {Name} must be a reference (not a reference set)*.

이 오류를 수정하려면 다음을 수행하십시오:

1. Domain Model을 열고 reference selector에 사용 중인 Association을 더블 클릭하십시오.
2. **Properties of Association** 대화 상자에서 **Multiplicity**를 일대다로 변경하십시오.

    {{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/consistency-errors/consistency-errors-pages/one-to-many-multiplicity.png" alt="Multiplicity for One-to-many Association" class="no-border" >}}

3. **OK**를 클릭하여 변경 사항을 저장하십시오.

Association 다중성을 변경하여 오류를 수정했습니다.

{{% alert color="info" %}}
Domain Model을 변경하면 다른 오류가 발생할 수 있습니다. Domain Model을 변경하지 않으려면 reference selector 대신 reference set selector 또는 input reference set selector와 같은 다른 위젯을 사용하는 것이 좋습니다.
{{% /alert %}}

### Reference Set Selector 및 Input Reference Set Selector의 잘못된 다중성 {#incorrect-multiplicity-reference-set}

Reference set selector 및 input set selector는 다대다 Association을 표시하고 편집하는 데 사용되는 위젯입니다. 이러한 위젯에 대한 자세한 내용은 [Reference Set Selector](/refguide8/reference-set-selector/) 및 [Input Reference Set Selector](/refguide8/input-reference-set-selector/)를 참조하십시오.

잘못된 유형의 Association이 있으면 다음 오류가 발생합니다:

* *Association {Name} must be a reference set (not a reference)* – input reference set selector의 경우
* *The reference set selector expects an association of type reference set that starts in the data view entity* – reference set selector의 경우

오류를 수정하려면 다음을 수행하십시오:

1. Domain Model을 열고 reference set selector 또는 input reference set selector에 사용 중인 Association을 더블 클릭하십시오: <br/>
2. **Properties of Association** 대화 상자에서 **Multiplicity**를 다대다로 변경하십시오.

    {{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/consistency-errors/consistency-errors-pages/changing-multiplicity.png" alt="Multiplicity for Many-to-many Association" class="no-border" >}}

3. **OK**를 클릭하여 변경 사항을 저장하십시오.

Association 다중성을 변경하여 오류를 수정했습니다.

{{% alert color="info" %}}
Domain Model을 변경하면 다른 오류가 발생할 수 있습니다. Domain Model을 변경하지 않으려면 reference set selector 또는 input reference set selector 대신 reference selector와 같은 다른 위젯을 사용하는 것이 좋습니다.
{{% /alert %}}

## File Widget 일관성 오류

파일 위젯은 데이터 컨테이너에 배치해야 합니다. 그렇지 않으면 일관성 오류가 발생합니다. 일관성 오류를 수정하는 또 다른 방법은 파일 위젯을 snippet에 배치하고 snippet을 구성하는 것입니다. 파일 위젯에 대한 자세한 내용은 [File Widgets](/refguide8/file-widgets/)를 참조하십시오.

| 오류 코드 | Error Pane의 메시지                                    | 오류 원인                                           | 수정 방법                                                   |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
|            | A [file manager](/refguide8/file-manager/) must be placed in a data view or snippet that is connected to the entity 'System.FileDocument' or a specialization. | 페이지에 file manager를 추가했지만, 올바르게 구성된 data view 또는 snippet 안에 있지 않습니다. | 이 위젯을 데이터 컨테이너에 배치하십시오. snippet에 배치하려면 올바르게 구성해야 합니다: 이 snippet의 Entity로 System.FileDocument(또는 그 특수화)를 설정하거나 snippet을 데이터 컨테이너에 배치하십시오. |
|            | An [image uploader](/refguide8/image-uploader/) must be placed in a data view or snippet that is connected to the entity 'System.Image' or a specialization. | 페이지에 image uploader를 추가했지만, 올바르게 구성된 data view 또는 snippet 안에 있지 않습니다. | 이 위젯을 데이터 컨테이너에 배치하십시오. snippet에 배치하려면 올바르게 구성해야 합니다: 이 snippet의 Entity로 System.Image(또는 그 특수화)를 설정하거나 snippet을 데이터 컨테이너에 배치하십시오. |
|            | Move this widget into a data container, for example a data view or list view. | 페이지에 [image viewer](/refguide8/image-viewer/)를 추가했지만, data view 또는 list view 안에 있지 않습니다. | 이 위젯을 data view 또는 list view 안에 배치하십시오.         |
| CE0489     | Select an entity for the data source of this [image viewer](/refguide8/image-viewer/). | 페이지에 image viewer를 추가하고 data view 또는 list view 안에 배치했지만, image viewer에 대한 Entity가 지정되지 않았습니다. | image viewer의 속성 > **Data source** 섹션을 열고 **Entity (path)** 필드에서 Entity를 선택하십시오. |

## Image Widget 일관성 오류

image 위젯의 일관성 오류는 아래 표에 설명되어 있습니다:

| 오류 코드 | Error Pane의 메시지 | 오류 원인                                           | 수정 방법                                                   |
| ---------- | ------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
|            | No image selected         | 페이지에 image 위젯을 추가했지만 이미지 자체를 선택하지 않았습니다. | 이미지 속성 > **General** > **Image**를 열고 이미지를 선택하십시오. image 위젯에 대한 자세한 내용은 [Image](/refguide8/image/)를 참조하십시오. |

## On Click Event 일관성 오류

다양한 위젯(예: 버튼 또는 이미지)에 대해 **On Click Event**를 지정할 수 있습니다.

가장 일반적인 일관성 오류는 on click 이벤트를 구성하지 않는 것과 관련이 있습니다.

일관성 오류를 수정하려면 on click 이벤트 구성을 완료하거나(예: on click 이벤트 **Show a page**의 경우 열려야 하는 특정 페이지를 선택) on click 동작을 변경하십시오.

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/consistency-errors/consistency-errors-pages/on-click-event.png" alt="On Click Event Example" class="no-border" >}}

## 더 보기

* [Pages](/refguide8/pages/)
