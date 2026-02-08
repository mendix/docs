---
title: "목록 값"
url: /apidocs-mxsdk/apidocs/pluggable-widgets-client-apis-list-values-10/
description: Mx10에서 데이터 소스 속성에 대한 객체 목록을 이해하기 위한 가이드입니다.
---

## 소개

`ListValue`는 [datasource](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types-10/#datasource) 속성에 대한 객체 목록을 나타내는 데 사용됩니다. 해당하는 리스트 항목 값은 [datasource](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types-10/#datasource) 속성에 연결된 다양한 유형의 속성을 나타냅니다.

## ListValue {#listvalue}

`isList="true"`인 [`datasource`](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types-10/#datasource) 속성이 위젯에 대해 구성된 경우, 클라이언트 컴포넌트는 `ListValue`로 표현된 객체 목록을 받습니다. 이 유형은 데이터 소스에 대한 상세한 액세스 및 제어를 가능하게 합니다.

```ts
export interface ObjectItem {
    id: GUID;
}

export interface ListValue {
    status: ValueStatus;

    offset: number;
    limit: number;
    setOffset(offset: number): void;
    setLimit(limit: Option<number>): void;
    requestTotalCount(needTotalCount: boolean): void;
    hasMoreItems?: boolean;
    totalCount?: number;
    items?: ObjectItem[];

    sortOrder: SortInstruction[];
    filter: Option<FilterCondition>;
    setSortOrder(sortOrder: Option<SortInstruction[]>): void;
    setFilter(filter: Option<FilterCondition>): void;
}
```

### 페이지네이션(Pagination) {#listvalue-pagination}

`offset` 및 `limit` 속성은 데이터 소스에서 검색된 객체의 범위를 지정합니다. `offset`은 시작 인덱스이고 `limit`은 요청된 항목 수입니다. 기본적으로 `offset`은 *0*이고 `limit`은 `undefined`입니다. 이는 데이터 소스의 모든 항목이 요청됨을 의미합니다. `setOffset` 및 `setLimit` 메서드로 이러한 속성을 제어할 수 있습니다. 이를 통해 위젯이 모든 데이터를 한 번에 표시하지 않도록 할 수 있습니다. 대신 적절한 오프셋과 제한을 설정하여 단일 페이지만 표시하거나, 제한을 늘려 필요할 때마다 추가 데이터를 로드할 수 있습니다.

다음 코드 샘플은 특정 범위의 데이터 소스 항목을 로드하기 위해 오프셋과 제한을 설정합니다:

```ts
this.props.myDataSource.setOffset(20);
this.props.myDataSource.setLimit(10);
```

`setOffset` 및 `setLimit` 메서드를 사용하여 페이지네이션을 지원하는 위젯을 만들 수 있습니다(위젯 속성이 다음과 같이 구성되었다고 가정함):

```ts
interface MyListWidgetsProps {
    myDataSource: ListValue;
    pageSize: number;
}
```

데이터 소스에서 요청하는 항목 수를 설정하려면 위젯의 생성자에서 `setLimit`를 사용할 수 있습니다:

```ts
export default class PagedWidget extends Component<PagedWidgetProps> {
    constructor(props: PagedWidgetProps) {
        super(props);

        props.myDataSource.setLimit(props.pageSize);
    }
}
```

다른 페이지로 전환하려면 `setOffset` 메서드로 오프셋을 변경할 수 있습니다:

```tsx
const ds = this.props.myDataSource;
const current = this.props.myDataSource.offset;
<button onClick={() => ds.setOffset(current - this.props.pageSize)}>
    이전
</button>
<button onClick={() => ds.setOffset(current + this.props.pageSize)}>
    다음
</button>
```

`hasMoreItems` 속성은 가장 최근 목록의 제한을 넘어서는 객체가 더 있는지 여부를 나타냅니다. 위젯이 `setLimit`로 제한을 설정하여 모든 레코드를 즉시 표시하지 않고 사용자가 추가 데이터를 로드할 수 있도록 하는 경우, 이 속성을 사용하여 사용자가 목록의 끝에 도달했음을 UI에서 명확히 알릴 수 있습니다.

다음 코드 샘플은 더 많은 데이터를 사용할 수 있는 경우에만 '더 보기' 버튼을 표시하고 사용자가 버튼을 클릭하면 추가 데이터를 로드합니다:

```tsx
const currentLimit = this.props.myDataSource.limit;
this.props.myDataSource.hasMoreItems &&
<button 
    onClick={() => this.props.myDataSource.setLimit(currentLimit + 10)}
>
    더 보기
</button>
```

`limit`이 *0*으로 설정된 경우, 해당 케이스는 특별한 방식으로 처리됩니다. 이 경우 `ListValue`는 데이터를 검색하기 위해 서버에 요청을 보내는 것을 피하고 즉시 빈 결과를 반환합니다. 이 속성은 특정 조건이 충족될 때만 데이터를 로드하는 "지연 로딩(lazily)" 위젯을 빌드하는 데 사용될 수 있습니다.

다음 코드 샘플은 버튼을 눌렀을 때만 데이터를 로드합니다:

```tsx
export default const LazyWidget = (props: LazyWidgetProps) => {
    useMemo(() => props.myDataSource.setLimit(0), []);
    return props.myDataSource.items?.length ? (
        props.myDataSource.items.map((i) => <div key={i.id}>항목</div>)
    ) : (
        <button onClick={() => props.myDataSource.setLimit(undefined)}>데이터 로드</button>
    );
}
```

`totalCount` 속성은 데이터 소스가 반환할 수 있는 총 객체 수입니다. 총 개수를 계산하는 것은 상당한 리소스를 소모할 수 있으며 위젯이 `requestTotalCount(true)` 메서드를 호출하여 총 개수가 필요함을 표시한 경우에만 반환됩니다. 가능하면 `totalCount` 속성 대신 `hasMoreItems`를 사용하십시오.

다음 코드 샘플은 총 개수 반환을 요청하는 방법을 보여줍니다:

```ts
export default class PagedWidget extends Component<PagedWidgetProps> {
    constructor(props: PagedWidgetProps) {
        super(props);
    
        props.myDataSource.requestTotalCount(true);
    }
}
```

`setOffset` 및 `setLimit`는 모든 [데이터 소스(/refguide/data-sources/#list-widgets)](#data-sources)에서 지원됩니다. `XPath` 및 `Database` 데이터 소스의 경우 요청된 페이지만 클라이언트에 반환됩니다. 다른 데이터 소스의 경우 전체 세트가 클라이언트에 반환되지만, 위젯은 `items` 속성에서 요청된 페이지만 받게 됩니다.

### 정렬(Sorting) {#listvalue-sorting}

`setSortOrder` 메서드를 사용하여 목록 항목에 대해 특정 정렬 순서를 설정하고 `sortOrder` 필드를 통해 현재 정렬 순서를 가져올 수 있습니다. 새 정렬 순서가 설정되면 위젯은 다음 재렌더링 시 새로운 결과를 받게 됩니다.

`setSortOrder` 메서드는 `SortInstruction` 배열인 하나의 인수를 받습니다. 또한 `undefined`를 `setSortOrder`에 전달하여 기본 정렬 순서를 복원할 수 있습니다.

`SortInstruction`은 두 요소의 배열로 정의됩니다:

```ts
type SortInstruction = [id: ListAttributeId, dir: SortDirection];
```

`SortInstruction` 유형의 첫 번째 요소는 데이터 소스에 연결된 속성(attribute property)의 `id`입니다. 이를 통해 위젯은 정렬에 어떤 속성을 사용해야 하는지 지정할 수 있습니다. 모든 속성을 정렬에 사용할 수 있는 것은 아니며, 일부 속성은 정렬이 허용되지 않을 수 있습니다. 속성을 정렬에 사용할 수 있는지 확인하려면 해당 속성 속성의 `sortable` 플래그를 확인해야 합니다. 이 플래그는 특정 속성을 정렬에 사용할 수 있는지 여부를 지정합니다. 속성 `id` 및 `sortable` 플래그에 대한 자세한 내용은 [속성 ID, 정렬 가능 및 필터링 가능 플래그(#listattributevalue-id-sortable-filterable)](#listattributevalue-id-sortable-filterable) 섹션을 참조하십시오.

`SortInstruction` 유형의 두 번째 속성은 정렬 방향을 나타내는 문자열 리터럴로, `"asc"` 또는 `"desc"` 중 하나입니다.

다음 코드 예제는 연결된 속성 `attributeAge` 및 `attributeName`을 기반으로 `myDataSource` 속성에 정렬을 적용하는 방법을 보여줍니다:

```ts
interface MyListWidgetsProps {
    myDataSource: ListValue;
    attributeAge: ListAttributeValue<BigJS>; // 정수
    attributeName: ListAttributeValue<BigJS>; // 문자열
}
```

다음 코드로 `attributeAge` 속성이 나타내는 속성을 기반으로 오름차순 정렬을 설정합니다:

```ts
if (this.props.attributeAge.sortable) {
    // 나이 오름차순 정렬
    const sortInstrs = [
        [this.props.attributeAge.id, "asc"]
    ]; 
    this.props.myDataSource.setSortOrder(sortInstrs);
} else {
    console.warn("정렬을 적용할 수 없습니다. 나이 속성이 정렬 가능하지 않습니다.");
}
```

다음 코드 샘플은 동시에 여러 속성에 대해 정렬하는 방법을 보여줍니다:

```ts
if (this.props.attributeAge.sortable && this.props.attributeName.sortable) {
    // 나이 내림차순 정렬 후, 이름 오름차순 정렬(나이 그룹 내에서)
    const sortInstrs = [
        [this.props.attributeAge.id, "desc"],
        [this.props.attributeName.id, "asc"],
    ]; 
    this.props.myDataSource.setSortOrder(sortInstrs);
} else {
    console.warn("정렬을 적용할 수 없습니다. 나이 또는 이름 속성이 정렬 가능하지 않습니다.");
}
```

다음 코드와 같이 `undefined`를 전달하여 기본 정렬 순서로 재설정합니다:

```ts
this.props.myDataSource.setSortOrder(undefined);
```

`setSort` 메서드는 모든 [데이터 소스(/refguide/data-sources/#list-widgets)](#data-sources)에서 지원됩니다. `Database` 및 `XPath` 데이터 소스의 경우 정렬은 백엔드에서 수행됩니다. 다른 모든 데이터 소스의 경우 정렬은 클라이언트에서 수행됩니다.

### 필터링(Filtering) {#listvalue-filtering}

데이터 소스 항목에 대한 필터링 조건을 설정할 수 있습니다. `setFilter()` 메서드는 필터 조건을 수락하고 필터링을 적용합니다. `filter` 필드는 현재 필터 조건을 나타냅니다.

`setFilter`는 원하는 필터링 동작을 설명하는 `FilterCondition` 유형의 특별히 생성된 객체만 수락합니다. `mendix` 모듈의 `mendix/filters/builders` 경로에 제공된 함수를 사용하여 필터 조건 객체를 생성할 수 있습니다. 이러한 함수를 필터 빌더라고 부릅니다. 또한 필터링 조건을 지우기 위해 `undefined`를 `setFilter`에 전달할 수 있습니다.

빌더 함수의 몇 가지 예로는 `DateTime` 또는 `Decimal` 속성 필터링을 위한 `equals`, `greaterThan`, `lessThanOrEqual` 등이 있습니다. `startsWith`, `contains`와 같은 함수는 `String` 속성 필터링에 유용합니다. 연관 관계를 기반으로 한 필터링도 가능합니다. 예를 들어, 참조(reference)에는 `equals`를, 참조 세트(reference set)에는 `contains`를 사용할 수 있습니다.

다음 코드 샘플은 필터 빌더를 사용하고 세 개의 연결된 속성과 두 개의 연결된 연관 관계가 있는 데이터 소스 속성에 필터링을 적용하는 방법을 보여줍니다:

```ts
interface MyListWidgetsProps {
    myDataSource: ListValue;
    mySelectableObjects: ListValue;
    myAttributeString: ListAttributeValue<string>;
    myAttributeBoolean: ListAttributeValue<boolean>;
    myAttributeNumber: ListAttributeValue<BigJS>;
    myAssociationReference: ListReferenceValue;
    myAssociationReferenceSet: ListReferenceSetValue;
}
```

`setFilter` 메서드는 모든 [데이터 소스(/refguide/data-sources/#list-widgets)](#data-sources)에서 지원됩니다. `Database` 및 `XPath` 데이터 소스의 경우 필터링은 백엔드에서 수행됩니다. 다른 모든 데이터 소스의 경우 필터링은 클라이언트에서 수행됩니다. 두 경우 모두 위젯은 `items` 속성에서 필터링된 항목을 받게 됩니다.

#### 단순 필터링 {#simple-filtering}

`myAttributeString` 속성이 나타내는 속성 값을 기반으로 간단한 필터를 적용하려면 다음 코드를 사용할 수 있습니다:

```ts
import { attribute, literal, startsWith } from "mendix/filters/builders";

// 위젯 코드 내부
if (this.props.myAttributeString.filterable) {
    const filterCond = startsWith(attribute(this.props.myAttributeString.id), literal("B"));
    this.props.myDataSource.setFilter(filterCond);
} else {
    console.log("속성이 필터링 가능하지 않습니다.");
}
```

코드의 첫 번째 단계는 `filterable` 플래그를 확인하여 `myAttributeString` 속성에 필터링을 사용할 수 있는지 확인하는 것입니다. 그런 다음 `myAttributeString`이 나타내는 속성이 "B"로 시작해야 함을 지정하는 `filterCond` 필터 조건을 구성합니다. `setFilter` 호출은 필터를 적용하고, 다음 재렌더링 시 컴포넌트는 `myAttributeString` 속성이 나타내는 속성 값이 "B"로 시작하는 항목만 받게 됩니다.

마찬가지로 다음과 같은 코드는 `myAttributeBoolean` 속성이 나타내는 속성 값이 true인 조건을 적용할 수 있습니다:

```ts
import { attribute, literal, equals } from "mendix/filters/builders";

// 위젯 코드 내부
if (this.props.myAttributeBoolean.filterable) {
    const filterCond = equals(attribute(this.props.myAttributeBoolean.id), literal(true));
    this.props.myDataSource.setFilter(filterCond);
} else {
    console.log("속성이 필터링 가능하지 않습니다.");
}
```

다음과 같은 코드는 다른 객체와 연관된 객체만 일치시키는 조건을 적용할 수 있습니다:

```ts
import { association, literal, notEquals, empty } from "mendix/filters/builders";

// 위젯 코드 내부
if (this.props.myAssociationReference.filterable) {
    const filterCond = notEquals(association(this.props.myAssociationReference.id), empty());
    this.props.myDataSource.setFilter(filterCond);
} else {
    console.log("연관 관계가 필터링 가능하지 않습니다.");
}
```

마찬가지로 다음과 같은 코드는 선택 가능한 객체 데이터 소스의 처음 두 객체 중 하나 이상과 연관된 객체만 일치시키는 조건을 적용할 수 있습니다:

```ts
import { association, literal, notEquals, contains } from "mendix/filters/builders";

// 위젯 코드 내부
if (this.props.myAssociationReferenceSet.filterable) {
    // 해당 두 객체를 사용할 수 있다고 가정함
    const objectItem1 = this.props.mySelectableObjects.items[0];
    const objectItem2 = this.props.mySelectableObjects.items[1];
    
    const filterCond = contains(association(this.props.myAssociationReferenceSet.id), literal([objectItem1, objectItem2]));
    this.props.myDataSource.setFilter(filterCond);
} else {
    console.log("연관 관계가 필터링 가능하지 않습니다.");
}
```

다음 코드 샘플은 현재 필터링 조건을 제거하는 방법을 보여줍니다:

```ts
this.props.myDataSource.setFilter(undefined);
```

#### 고급 필터링 {#advanced-filtering}

일부 사용 사례에서는 더 복잡한 필터링 조건을 적용해야 합니다. 예를 들어, `myAttributeString`이 "B"로 시작하고 `myAttributeBoolean`이 `true`인 항목만 가져오거나, `myAttributeNumber`가 `10`보다 크고 `myAssociationReference`가 다른 객체와 연관되어 있는 반면 `myAssociationReferenceSet`은 다른 어떤 객체와도 연관되지 않은 항목을 가져와야 하는 경우입니다. 이러한 조건을 구성하려면 특수 필터 빌더 `and`와 `or`를 사용해야 합니다. 다음 코드 샘플은 이를 사용하는 방법을 보여줍니다. 단순성을 위해 `filterable` 플래그 확인은 생략되었습니다. 실제 위젯은 항상 `filterable` 플래그를 고려해야 합니다.

```ts
import { attribute, association, literal, startsWith, equals, notEquals, greaterThan, and, or } from "mendix/filters/builders";

// 위젯 코드 내부
if (/* 모든 속성이 필터링 가능한지 확인 */) {
    const filterCond = or(
        and(
            startsWith(attribute(this.props.myAttributeString.id), literal("B")),
            equals(attribute(this.props.myAttributeBoolean.id), literal(true))
        ),
        and(
            greaterThan(attribute(this.props.myAttributeNumber.id), literal(10)),
            notEquals(association(this.props.myAssociationReference.id), empty()),
            equals(association(this.props.myAssociationReferenceSet.id), empty())
        )
    );
    this.props.myDataSource.setFilter(filterCond);
} else {
    console.log("일부 속성이 필터링 가능하지 않습니다.");
}
```

### 다시 로드(Reloading) {#listvalue-reload}

데이터 소스 항목을 다시 로드할 수 있습니다. `reload()` 메서드는 기존 `filter`, `offset`, `limit`, `requestTotalCount` 및 `sortOrder` 속성을 유지하면서 기본 데이터 소스에서 새로 가져오기를 트리거합니다. `reload()` 메서드는 인수를 받지 않습니다.

### 실제 데이터 작업

`items` 속성에는 데이터 소스의 요청된 모든 데이터 항목이 포함됩니다. 그러나 `items` 배열에서 모든 객체는 GUID로만 표현되므로 `ListValue`에서 직접 도메인 데이터에 액세스하는 것은 불가능합니다. 대신 항목 목록을 다른 속성(예: [`attribute`](#attribute), [`action`](#action) 또는 [`widgets`](#widgets) 유형의 속성)과 조합하여 사용할 수 있습니다. `ListValue`와 조합하여 다양한 속성 유형을 작업하는 방법에 대한 자세한 내용은 다음 섹션을 참조하십시오.

### 뷰 상태(View State) {#view-state}

뷰 상태는 사용자가 페이지를 벗어날 때 페이지의 현재 상태를 저장하고 사용자가 페이지로 돌아올 때 해당 상태를 복원하는 메커니즘입니다. 예를 들어 사용자가 개요 페이지의 DataGrid 위젯에 정렬 순서를 적용하고 상세 페이지로 이동한 경우, 사용자가 다시 개요 페이지로 돌아오면 DataGrid 위젯은 이전에 사용된 정렬 순서로 초기화됩니다.

뷰 상태는 위젯에 투명하게 작동하며, 위젯이 뷰 상태 메커니즘의 혜택을 받기 위해 추가 단계가 필요하지 않습니다.

`ListView`의 다음 정보는 자동으로 저장되고 복원됩니다:

* 페이지네이션 상태 (`limit` 및 `offset` 필드)
* 정렬 상태 (`sortOrder` 필드)
* 필터링 상태 (`filter` 필드)

### 리스트 값 항목의 상태 {#status-of-the-list-value-items}

`status` 속성은 컴포넌트에 항목의 상태와 컴포넌트가 이를 처리하는 방법에 대한 추가 정보를 제공합니다:

```tsx
export const enum ValueStatus {
    Loading = "loading",
    Unavailable = "unavailable",
    Available = "available"
}

if (this.props.listValue.status === ValueStatus.Available) {
    return (
        <div>
            ...
        </div>
    );
} else if (this.props.listValue.status === ValueStatus.Loading) {
    return <p>로딩 중... 잠시만 기다려주세요...</p>;
} else if (this.props.listValue.status === ValueStatus.Unavailable) {
    return <p>표시할 수 있는 항목이 없습니다.</p>;
}
```

더 구체적으로 `status` 속성은 다음과 같이 작동합니다:

* `status`가 `ValueStatus.Available`인 경우, 리스트 값 항목에 액세스할 수 있으며 결과가 `items` 배열에 노출됩니다.
* `status`가 `ValueStatus.Unavailable`인 경우, 리스트에 사용 가능한 데이터가 없으며 `items` 배열은 `undefined`입니다. 이는 데이터 소스가 데이터가 없는 주변 데이터 뷰에 의존하는 경우 발생할 수 있습니다.
* `status`가 `ValueStatus.Loading`인 경우, 리스트는 새로운 데이터가 도착하기를 기다리고 있는 상태입니다. 이는 데이터 소스가 의존하는 데이터(예: 부모 데이터 뷰)의 변경이나 해당 유형의 객체가 커밋되거나 삭제될 때 발생하는 엔티티 업데이트에 의해 트리거될 수 있습니다. 마이크로플로우에서 수행되는 경우 [클라이언트에서 새로 고침(refresh in client)](/refguide/change-object/#refresh-in-client)도 필요합니다.
    * 리스트 값이 이전에 `ValueStatus.Available` 상태였던 경우, 이전 `items` 배열이 여전히 반환됩니다. 이를 통해 컴포넌트는 `Loading` 상태를 명시적으로 처리할 필요가 없는 경우 이전 항목을 계속 표시할 수 있으며, 이는 깜빡임을 방지합니다.
    * 다른 경우에는 `items`가 `undefined`입니다. 이는 페이지가 여전히 로드 중이거나 이전 상태가 `ValueStatus.Unavailable`이었던 경우에 발생합니다.

## 연결된 프로퍼티 값(Linked Property Values) {#linked-values}

### ListActionValue {#listactionvalue}

`ListActionValue`는 `ListValue`의 항목에 적용할 수 있는 액션을 나타냅니다. `ListActionValue`는 객체이며 정의는 다음과 같습니다:

```ts
export interface ListActionValue {
    get: (item: ObjectItem) => ActionValue;
}
```

`ListValue`의 특정 항목에 대해 액션을 호출하려면 먼저 해당 항목과 함께 `ListActionValue.get`을 호출하여 `ActionValue` 인스턴스를 얻어야 합니다(위젯 속성이 다음과 같이 구성되었다고 가정함):

```ts
interface MyListWidgetsProps {
    myDataSource: ListValue;
    myListAction: ListActionValue;
}
```

다음 코드 샘플은 `myDataSource`의 첫 번째 요소에 대해 `myListAction`을 호출하는 방법을 보여줍니다.

```ts
const actionOnFirstItem = this.props.myListAction.get(this.props.myDataSource.item[0]);

actionOnFirstItem.execute();
```

이 코드 샘플에서는 단순성을 위해 `myDataSource` 상태 확인 및 항목 가용성 확인이 생략되었습니다. `ActionValue` 사용에 대한 자세한 내용은 [ActionValue 섹션(/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis-10/#actionvalue)](#actionvalue)을 참조하십시오.

### ListAttributeValue {#listattributevalue}

`ListAttributeValue`는 데이터 소스에 연결된 [attribute 속성(/apidocs-mxsdk/apidocs/pluggable-widgets-property-types-10/#attribute)](#attribute)을 나타냅니다.
이를 통해 클라이언트 컴포넌트는 `ListValue`의 개별 항목에 대한 속성 값에 액세스할 수 있습니다. `ListAttributeValue`는 객체이며 정의는 다음과 같습니다:

```ts
export interface ListAttributeValue<T extends AttributeValue> {
    get: (item: ObjectItem) => EditableValue<T>; // 참고: ListAttributeValue에서 얻은 EditableValue는 항상 읽기 전용임

    id: ListAttributeId;
    sortable: boolean;
    filterable: boolean;

    type: AttributeType;

    formatter: ValueFormatter<T>;
    universe: Option<T[]>; // Enumeration 유형의 속성에만 해당
}
```

#### 속성 값 얻기 {#obtaining-attribute-value}

{{% alert color="warning" %}}
기술적 제한으로 인해 `ListAttributeValue`를 통해 얻은 속성을 편집하는 것은 아직 불가능합니다. `ListAttributeValue`가 반환하는 `EditableValue`는 항상 **읽기 전용(readonly)**입니다.
{{% /alert %}}

`ListValue`의 특정 항목에 대한 속성 값을 작업하려면 먼저 해당 항목과 함께 `ListAttributeValue.get`을 호출하여 `EditableValue<T>` 인스턴스를 얻어야 합니다. 유형 `<T>`는 속성에 대해 구성된 허용되는 값 유형에 따라 다릅니다.

예를 들어 보겠습니다. 위젯 속성이 다음과 같이 구성되어 있고 `myAttributeOnDatasource` 속성이 `string` 유형의 속성을 허용한다고 가정합니다:

```ts
interface MyListWidgetsProps {
    myDataSource: ListValue;
    myAttributeOnDatasource: ListAttributeValue<string>;
}
```

다음 코드 샘플은 `myDataSource`의 첫 번째 요소에 대한 속성의 읽기 전용 값을 나타내는 `EditableValue<string>`을 얻는 방법을 보여줍니다.

```ts
const attributeValue = this.props.myAttributeOnDatasource.get(this.props.myDataSource.items[0]);
```

참고: 이 코드 샘플에서는 단순성을 위해 `myDataSource` 상태 확인 및 항목 가용성 확인이 생략되었습니다. `EditableValue` 사용에 대한 자세한 내용은 [EditableValue 섹션(/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis-10/#editable-value)](#editable-value)을 참조하십시오.

#### 속성 ID, 정렬 가능 및 필터링 가능 플래그 {#listattributevalue-id-sortable-filterable}

`ListAttributeId` 유형의 `id` 필드는 속성의 고유한 무작위로 생성된 문자열 식별자를 나타냅니다. 이 식별자는 연결된 데이터 소스 속성에 정렬 및 필터링을 적용할 때 어떤 속성을 정렬 및/또는 필터링에 사용해야 하는지 식별하는 데 사용될 수 있습니다. 자세한 내용은 [정렬(#listvalue-sorting)](#listvalue-sorting) 및 [필터링(#listvalue-filtering)](#listvalue-filtering) 섹션을 참조하십시오.

`sortable` 및 `filterable` 필드는 속성을 정렬 및/또는 필터링에 사용할 수 있는지 여부를 지정합니다. 이러한 플래그는 위젯이 데이터 소스 속성에 필터링 또는 정렬을 적용하기 전에 확인해야 합니다. 필터링 불가능한 속성에 필터링을 시도하거나 정렬 불가능한 속성에 정렬을 시도하면 실행 중에 오류가 발생합니다.

#### 속성 유형(Attribute Type)

[attribute](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types-10/#attribute) 속성은 해당 속성에 대해 구성할 수 있는 속성 유형을 정의합니다. 예를 들어, 진행 상황을 표시하기 위해 `String` 및 `Integer` 유형의 속성을 허용하도록 attribute 속성을 구성할 수 있습니다. 이는 사용자에게는 편리하지만 개발자에게는 서로 다른 데이터 유형을 처리하기 위한 추가 작업이 필요할 수 있습니다.

속성 속성의 `type` 필드를 확인하여 속성 유형을 확인할 수 있습니다. 다음 코드 샘플은 `myAttributeOnDatasource`라는 속성에서 속성 유형을 확인하는 방법을 보여줍니다:

```ts
if (this.props.myAttributeOnDatasource.type === "String") {
    console.log("String 속성");
} else if (this.props.myAttributeOnDatasource.type === "Integer") {
    console.log("Integer 속성");
} else {
    console.log("String/Integer 속성이 아님");
}
```

#### 포맷터(Formatter) 및 유니버스(Universe)

`formatter` 필드는 `get` 함수로 얻은 값에 사용되는 기본 포맷터를 나타냅니다.

선택적인 `universe` 필드는 속성에 대해 가능한 값의 배열을 나타냅니다. 자세한 내용은 [EditableValue](/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis-10/#editable-value)의 `universe` 필드를 참조하십시오.

### ListReferenceValue 및 ListReferenceSetValue {#listassociationvalue}

`ListReferenceValue` 및 `ListReferenceSetValue`는 모두 데이터 소스에 연결된 [association 속성(/apidocs-mxsdk/apidocs/pluggable-widgets-property-types-10/#association)](#association)을 나타내는 데 사용됩니다. 이를 통해 클라이언트 컴포넌트는 `ListValue`의 개별 항목에 대한 연관된 값에 액세스할 수 있습니다. `ListReferenceValue` 및 `ListReferenceSetValue`는 모두 객체이며 정의는 다음과 같습니다:

```ts
export type ListReferenceValue = ListAssociationValue<ObjectItem> & { type: "Reference" };

export type ListReferenceSetValue = ListAssociationValue<ObjectItem[]> & { type: "ReferenceSet" };

export interface ListAssociationValue<T extends ObjectItem | ObjectItem[]> {
  get: (item: ObjectItem) => DynamicValue<T>;

  id: ListAssociationId;
  filterable: boolean;
}
```

#### 연관 값 얻기

`ListValue`에서 반환된 특정 항목과 연관된 객체 또는 객체들을 작업하려면, 먼저 해당 항목과 함께 `get`을 호출하여 `DynamicValue<ObjectItem>`(`ListReferenceValue`의 경우) 또는 `DynamicValue<ObjectItem[]>`(`ListReferenceSetValue`의 경우) 인스턴스를 얻어야 합니다.

연관 속성이 두 가지 유형의 연관 관계를 모두 허용하도록 구성된 경우, 속성의 유형은 `ListReferenceValue | ListReferenceSetValue`로 정의되며 유형을 좁히기 위해 `type`에 대한 확인이 수행되어야 합니다. 자세한 내용은 [연관 유형(#association-type)](#association-type) 섹션을 참조하십시오.

`myAssociationOnDatasource` 속성이 `Reference` 유형의 연관 관계를 허용하도록 위젯 속성이 구성되어 있다고 가정하는 다음 예제 코드를 참조하십시오:

```ts
interface MyListWidgetsProps {
    myDataSource: ListValue;
    mySelectableObjects: ListValue;
    myAssociationOnDatasource: ListReferenceValue;
    myAttributeOnSelectableObjects: ListAttributeValue;
}
```

다음 코드 예제는 `myDataSource`의 첫 번째 요소에 대한 연관된 객체의 읽기 전용 값을 나타내는 `DynamicValue<ObjectItem>`을 얻는 방법을 보여줍니다:

```ts
const associationValue = this.props.myAssociationOnDatasource.get(this.props.myDataSource.items[0]);
```

이 예제에서 위젯은 단일 연관 관계만 허용하도록 구성되었으므로 연관된 객체를 나타내는 `ObjectItem`을 반환합니다. 이 연관된 객체의 개별 속성 값에 액세스하려면 선택 가능한 객체의 데이터 소스에 연결된 attribute 속성을 사용하고 연관된 객체를 여기에 전달할 수 있습니다. 자세한 내용은 [속성 값 얻기 섹션(/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis-list-values-10/#obtaining-attribute-value)](#obtaining-attribute-value)을 참조하십시오.

단순성을 위해 이러한 코드 샘플에서는 `myDataSource` 상태 확인 및 항목 가용성 확인이 생략되었습니다. `DynamicValue` 사용에 대한 자세한 내용은 [DynamicValue 섹션(/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis-10/#dynamic-value)](#dynamic-value)을 참조하십시오.

#### 연관 ID 및 필터링 가능 플래그 {#listassociationvalue-id-filterable}

`ListAssociationId` 유형의 `id` 필드는 연관 관계의 고유한 무작위로 생성된 문자열 식별자를 나타냅니다. 이 식별자는 연결된 데이터 소스 속성에 필터링을 적용할 때 어떤 연관 관계를 필터링에 사용해야 하는지 식별하는 데 사용될 수 있습니다. 자세한 내용은 [필터링(#listvalue-filtering)](#listvalue-filtering) 섹션을 참조하십시오.

`filterable` 필드는 연관 관계를 필터링에 사용할 수 있는지 여부를 지정합니다. 이 플래그는 위젯이 데이터 소스 속성에 필터링을 적용하기 전에 확인해야 합니다. 필터링 불가능한 연관 관계에 필터링을 시도하면 실행 중에 오류가 발생합니다.

#### 연관 유형(Association Type) {#association-type}

[association](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types-10/#association) 속성은 해당 속성에 대해 구성할 수 있는 연관 유형을 결정합니다. 예를 들어 연관 속성이 `Reference` 유형의 연관은 허용하고 `ReferenceSet`은 허용하지 않도록 구성될 수 있습니다.

연관 속성의 `type` 필드를 확인하여 연관 유형을 확인할 수 있습니다. 이는 속성이 참조(reference)와 참조 세트(reference set)를 모두 허용하도록 구성된 경우에 유용합니다. 다음 코드 샘플은 `myAssociationOnDatasource`라는 속성에서 연관 유형을 확인하는 방법을 보여줍니다:

```ts
if (this.props.myAssociationOnDatasource.type === "Reference") {
  console.log("Reference 연관 관계");
} else {
  // 유형이 "Reference"와 같지 않으면 TypeScript는 이를 "ReferenceSet"으로 좁힙니다.
  console.log("ReferenceSet 연관 관계");
}
```

### ListWidgetValue {#listwidgetvalue}

`ListWidgetValue`는 데이터 소스에 연결된 [위젯 속성(/apidocs-mxsdk/apidocs/pluggable-widgets-property-types-10/#widgets)](#widgets)을 나타냅니다. 이를 통해 클라이언트 컴포넌트는 `ListValue`의 항목으로 자식 위젯을 렌더링할 수 있습니다.
`ListWidgetValue`는 객체이며 정의는 다음과 같습니다:

```ts
export interface ListWidgetValue {
    get: (item: ObjectItem) => ReactNode;
}
```

명확성을 위해 `widgets` 속성 유형과 함께 `ListValue`를 사용하는 다음 예제를 고려하십시오. `myWidgets`라는 위젯 속성이 `myDataSource`라는 데이터 소스에 연결되도록 구성된 경우, 클라이언트 컴포넌트 props는 다음과 같이 나타납니다:

```ts
interface MyListWidgetsProps {
    myDataSource: ListValue;
    myWidgets: (i: ObjectItem) => ReactNode;
}
```

위의 구성으로 인해 클라이언트 컴포넌트는 다음과 같이 목록의 특정 항목을 사용하여 위젯의 모든 인스턴스를 렌더링할 수 있습니다:

```ts
this.props.myDataSource.items.map(i => this.props.myWidgets.get(i));
```

위젯 속성이 필수가 아닌 경우, 구성된 자식 위젯이 없을 수 있습니다. 이 경우 위젯 속성(위 예의 `myWidgets`)의 값은 `undefined`가 됩니다.

### ListExpressionValue {#listexpressionvalue}

`ListExpressionValue`는 데이터 소스에 연결된 [expression 속성(/apidocs-mxsdk/apidocs/pluggable-widgets-property-types-10/#expression)](#expression) 또는 [text template 속성(/apidocs-mxsdk/apidocs/pluggable-widgets-property-types-10/#texttemplate)](#texttemplate)을 나타냅니다. 이를 통해 클라이언트 컴포넌트는 `ListValue`의 개별 항목에 대한 표현식 또는 텍스트 템플릿 값에 액세스할 수 있습니다. `ListExpressionValue`는 객체이며 정의는 다음과 같습니다:

```ts
export interface ListExpressionValue<T extends AttributeValue> {
    get: (item: ObjectItem) => DynamicValue<T>;
};
```

유형 `<T>`는 expression 속성에 대해 구성된 반환 유형에 따라 다릅니다. 텍스트 템플릿 속성의 경우 이 유형은 항상 `string`입니다.

`ListValue`의 특정 항목에 대한 표현식 또는 텍스트 템플릿 값을 작업하려면 먼저 해당 항목과 함께 `ListExpressionValue.get`을 호출하여 `DynamicValue` 인스턴스를 얻어야 합니다(`boolean` 유형의 표현식으로 위젯 속성이 다음과 같이 구성되었다고 가정함):

```ts
interface MyListWidgetsProps {
    myDataSource: ListValue;
    myExpressionOnDatasource: ListExpressionValue<boolean>;
    myTextTemplateOnDatasource: ListExpressionValue<string>;
}
```

다음 코드 샘플은 `myDataSource`의 첫 번째 요소에 대한 표현식 값을 나타내는 `DynamicValue`를 얻는 방법을 보여줍니다.

```ts
const expressionValue = this.props.myDataSource.myExpressionOnDatasource.get(this.props.myDataSource.item[0]);
```

## 필터 도우미(Filter Helpers){#filter-helpers}

### 값 도우미(Value Helpers) {#filter-value-helpers}

필터 조건에서 속성과 리터럴 값을 나타낼 수 있게 해주는 두 가지 기본 도우미는 `attribute`와 `literal` 도우미입니다. 필터 조건을 생성할 때 모든 속성 또는 리터럴 값은 해당 도우미로 래핑되어야 합니다.

#### Attribute

`attribute` 도우미는 `ListAttributeId` 유형의 인수를 하나 받습니다. [ListAttributeValue](#listattributevalue)를 참조하십시오.

다음 코드 샘플은 `attribute` 도우미를 적용하고 필터 조건을 구성하는 데 그 결과를 사용하는 방법을 보여줍니다:

```ts
const attrA = attribute(this.props.myAttributeA.id);
const filterCondition = equals(attrA, literal("Bob"));
```

필터링에 사용할 수 있는 속성 유형:

* `Boolean`
* `DateTime`
* `AutoNumber`
* `Integer`
* `Long`
* `Decimal`
* `Enum`
* `String`
* `HashString`

필터링에 사용할 수 **없는** 속성 유형:

* `Binary`
* `EnumSet`
* `ObjectReference`
* `ObjectReferenceSet`

#### Literal

`literal` 도우미는 하나의 인수를 받습니다. 허용되는 인수 유형은 다음과 같습니다:

* `Boolean` 속성 유형에 대한 Boolean 값
* `String`, `HashString` 및 `Enumeration` 속성 유형에 대한 문자열 리터럴
* `AutoNumber`, `Integer`, `Long` 및 `Decimal` 속성 유형에 대한 `BigJS` 숫자
* `DateTime` 속성 유형에 대한 `Date` 객체
* 모든 속성 유형에 대한 `undefined`

다음 코드 샘플은 `literal` 도우미를 사용하는 방법을 보여줍니다:

```ts
const falsy = literal(false); // Boolean용
const bob = literal("Bob"); // String, HashString, Enumeration용
const meaningOfLife = literal(new BigJS(42)); // AutoNumber, Integer, Long, Decimal용
const now = literal(new Date()); // DateTime용
const undef = literal(undefined);
```

### 기본 도우미(Basic Helpers)

#### Equals

`equals` 도우미는 [값 도우미(#filter-value-helpers)](#filter-value-helpers)에 의해 생성된 두 개의 인수를 받습니다.
모든 유형의 속성과 리터럴을 수락합니다.

다음 코드 샘플은 `equals` 도우미를 사용하는 방법을 보여줍니다:

```ts
const attrA = attribute(this.props.myAttributeA.id);
const name = literal("Bob");

// 필터는 값이 "Bob"과 일치하는 항목을 유지함
const filterCondition = equals(attrA, name);
```

#### NotEqual

`notEqual` 도우미는 [값 도우미(#filter-value-helpers)](#filter-value-helpers)에 의해 생성된 두 개의 인수를 받습니다.
모든 유형의 속성과 리터럴을 수락합니다.

다음 코드 샘플은 `notEqual` 도우미를 사용하는 방법을 보여줍니다:

```ts
const attrA = attribute(this.props.myAttributeA.id);
const name = literal("Bob");

// 필터는 값이 "Bob"과 일치하지 않는 항목을 유지함
const filterCondition = notEqual(attrA, name);
```

#### GreaterThan

`greaterThan` 도우미는 [값 도우미(#filter-value-helpers)](#filter-value-helpers)에 의해 생성된 두 개의 인수를 받습니다.
`String`, `HashString`, `Enumeration`, `AutoNumber`, `Integer`, `Long`, `Decimal`, `DateTime` 속성과 그에 해당하는 리터럴만 허용합니다.

다음 코드 샘플은 `greaterThan` 도우미를 사용하는 방법을 보여줍니다:

```ts
const attr = attribute(this.props.myAttributeA.id);
const meaningOfLife = literal(new BigJS(42));

// 필터는 값이 42보다 큰 항목을 유지함
const filterCondition = greaterThan(attr, meaningOfLife);
```

#### LessThan

`lessThan` 도우미는 [값 도우미(#filter-value-helpers)](#filter-value-helpers)에 의해 생성된 두 개의 인수를 받습니다.
`String`, `HashString`, `Enumeration`, `AutoNumber`, `Integer`, `Long`, `Decimal`, `DateTime` 속성과 그에 해당하는 리터럴만 허용합니다.

다음 코드 샘플은 `lessThan` 도우미를 사용하는 방법을 보여줍니다:

```ts
const attr = attribute(this.props.myAttributeA.id);
const meaningOfLife = literal(new BigJS(42));

// 필터는 값이 42보다 작은 항목을 유지함
const filterCondition = lessThan(attr, meaningOfLife); 
```

#### GreaterThanOrEqual

`greaterThanOrEqual` 도우미는 [값 도우미(#filter-value-helpers)](#filter-value-helpers)에 의해 생성된 두 개의 인수를 받습니다.
`String`, `HashString`, `Enumeration`, `AutoNumber`, `Integer`, `Long`, `Decimal`, `DateTime` 속성과 그에 해당하는 리터럴만 허용합니다.

다음 코드 샘플은 `greaterThanOrEqual` 도우미를 사용하는 방법을 보여줍니다:

```ts
const attr = attribute(this.props.myAttributeA.id);
const meaningOfLife = literal(new BigJS(42));

// 필터는 값이 42보다 크거나 같은 항목을 유지함
const filterCondition = greaterThanOrEqual(attr, meaningOfLife); 
```

#### LessThanOrEqual

`lessThanOrEqual` 도우미는 [값 도우미(#filter-value-helpers)](#filter-value-helpers)에 의해 생성된 두 개의 인수를 받습니다.
`String`, `HashString`, `Enumeration`, `AutoNumber`, `Integer`, `Long`, `Decimal`, `DateTime` 속성과 그에 해당하는 리터럴만 허용합니다.

다음 코드 샘플은 `lessThanOrEqual` 도우미를 사용하는 방법을 보여줍니다:

```ts
const attr = attribute(this.props.myAttributeA.id);
const meaningOfLife = literal(new BigJS(42));

// 필터는 값이 42보다 작거나 같은 항목을 유지함
const filterCondition = lessThanOrEqual(attr, meaningOfLife); 
```

### 문자열 조건(String Conditions)

#### Contains

`contains` 도우미는 [값 도우미(#filter-value-helpers)](#filter-value-helpers)에 의해 생성된 두 개의 인수를 받습니다.
`String`, `Integer`, `Long`, `Decimal` 속성과 `String` 리터럴만 허용합니다.

다음 코드 샘플은 `contains` 도우미를 사용하는 방법을 보여줍니다:

```ts
const attrStr = attribute(this.props.myAttributeA.id); // 문자열 속성
const subStr = literal("secret");

// 필터는 값에 "secret"이라는 하위 문자열이 포함된 항목을 유지함
// 예: "my secret password", "secret file", "top secret"
const filterCondition1 = contains(attrStr, subStr);

// 숫자 속성에서도 작동함
const attrNum = attribute(this.props.myAttributeB.id); // 정수 속성
const subNum = literal("1337");

// 필터는 값에 숫자 시퀀스 "1337"이 포함된 항목을 유지함
// 예: "133700", "1231337", "913379"
const filterCondition2 = contains(attrNum, subNum);
```

#### StartsWith

`startsWith` 도우미는 [값 도우미(#filter-value-helpers)](#filter-value-helpers)에 의해 생성된 두 개의 인수를 받습니다.
`String`, `Integer`, `Long`, `Decimal` 속성과 `String` 리터럴만 허용합니다.

다음 코드 샘플은 `startsWith` 도우미를 사용하는 방법을 보여줍니다:

```ts
const attrStr = attribute(this.props.myAttributeA.id); // 문자열 속성
const subStr = literal("secret");

// 필터는 값이 "secret" 하위 문자열로 시작하는 항목을 유지함
// 예: "secret file", 하지만 "my secret password"나 "top secret"은 제외
const filterCondition1 = startsWith(attrStr, subStr);

// 숫자 속성에서도 작동함
const attrNum = attribute(this.props.myAttributeB.id); // 정수 속성
const subNum = literal("1337");

// 필터는 값이 숫자 시퀀스 "1337"로 시작하는 항목을 유지함
// 예: "133700", 하지만 "1231337"이나 "913379"는 제외
const filterCondition2 = startsWith(attrNum, subNum);
```

#### EndsWith

`endsWith` 도우미는 [값 도우미(#filter-value-helpers)](#filter-value-helpers)에 의해 생성된 두 개의 인수를 받습니다.
`String`, `Integer`, `Long`, `Decimal` 속성과 `String` 리터럴만 허용합니다.

다음 코드 샘플은 `endsWith` 도우미를 사용하는 방법을 보여줍니다:

```ts
const attrStr = attribute(this.props.myAttributeA.id); // 문자열 속성
const subStr = literal("secret");

// 필터는 값이 "secret" 하위 문자열로 끝나는 항목을 유지함
// 예: "top secret", 하지만 "my secret password"나 "secret file"은 제외
const filterCondition1 = startsWith(attrStr, subStr);

// 숫자 속성에서도 작동함
const attrNum = attribute(this.props.myAttributeB.id); // 정수 속성
const subNum = literal("1337");

// 필터는 값이 숫자 시퀀스 "1337"로 끝나는 항목을 유지함
// 예: "1231337", 하지만 "133700"이나 "913379"는 제외
const filterCondition2 = startsWith(attrNum, subNum);
```

### 논리 조건(Logic Conditions)

#### And

`and` 도우미는 다른 조건들을 *논리적 and* 연산으로 결합하는 데 사용됩니다. 2개 이상의 인수를 받습니다.

다음 사용 예제는 결과 필터링 세트에 나타나기 위해 객체에 대해 *모든 조건이 true여야 함*을 지정합니다:

```ts
const filterCondition = and(
    startsWith(attribute(this.props.myAttributeA.id), literal("Hi")), // myAttributeA가 문자열 "Hi"로 시작함
    equals(attribute(this.props.myAttributeB.id), literal(5)), // myAttributeB가 5와 같음
    greaterThan(attribute(this.props.myAttributeC.id), literal(new Date())) // myAttributeC가 현재 날짜 및 시간보다 큼
);
```

#### Or

`or` 도우미는 다른 조건들을 *논리적 or* 연산으로 결합하는 데 사용됩니다. 2개 이상의 인수를 받습니다.

다음 사용 예제는 결과 필터링 세트에 나타나기 위해 객체에 대해 *적어도 하나의 조건이 true여야 함*을 지정합니다:

```ts
const filterCondition = or(
    endsWith(attribute(this.props.myAttributeA.id), literal("Z")), // myAttributeA가 문자열 "Z"로 끝남
    graterThan(attribute(this.props.myAttributeB.id), literal(10)), // myAttributeB가 10보다 큼
    equals(attribute(this.props.myAttributeC.id), literal(true)) // myAttributeC가 True와 같음
);
```

#### Not

`not` 도우미는 조건을 반전시킵니다. 하나의 인수를 받습니다.

다음 사용 예제는 `startsWith` 조건을 반전시켜 `myAttributeA`가 "X"를 제외한 어떤 문자로도 시작해야 함을 지정합니다:

```ts
const filterCondition = not(
    startsWith(attribute(this.props.myAttributeA.id), literal("X")),
);
```
