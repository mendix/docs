---
title: "데이터 소스 검색"
url: /refguide10/datasource-runtime/
weight: 60
---

## 소개

[목록 위젯](/refguide10/data-sources/#list-widgets)을 구성할 때 모든 데이터 소스는 동일한 기능을 제공합니다. 예를 들어, 목록 위젯에 포함된 위젯은 데이터 소스에서 제공하는 Entity의 Attribute를 사용할 수 있으며, 목록 위젯이 정렬 및 필터링을 지원하는 경우 모든 데이터 소스에 대해 지원합니다.

마찬가지로, [Pluggable Widget](/apidocs-mxsdk/apidocs/pluggable-widgets/)을 구현할 때 모든 데이터 소스가 동일한 [API](/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis-list-values/)와 함께 작동하므로 데이터 소스에 대해 걱정할 필요가 없습니다.

데이터 소스의 내부 메커니즘에 대해 알 필요는 없지만, 페이지를 더 효율적으로 만들거나 성능을 향상시킬 수 있는 세부 정보를 아는 것이 도움이 되는 경우가 있습니다. 또한 목록 위젯의 동작을 더 잘 이해하는 데 도움이 됩니다. 이 문서에서는 Mendix Runtime의 백그라운드에서 발생하는 다양한 데이터 흐름과 그 차이점을 설명합니다.

## 페이징, 정렬 및 필터링 {#paging-sorting-filtering}

모든 데이터 소스는 페이징, 정렬 및 필터링을 지원하지만 런타임에서 처리되는 방식은 유형에 따라 다릅니다.

### Database 소스

[Database 소스](/refguide10/database-source/)의 경우, 이러한 작업은 Runtime Server에서 적용됩니다. 이는 Mendix Client가 모든 페이징, 정렬 및 필터링 정보와 함께 요청을 보내고 Runtime Server가 이 정보를 적용하여 요청된 객체 목록(페이징, 필터 및 정렬 순서가 적용된)을 Mendix Client에 반환함을 의미합니다.

이러한 작업이 Runtime Server에서 적용되고 요청된 객체만 Mendix Client에 반환되므로, 네트워크를 통해 전송되는 데이터 양이 최소화되어 성능이 향상됩니다. 사용자가 위젯과 상호작용하여 다른 페이지로 이동하거나 필터를 변경하면 Mendix Client가 Runtime Server에 새 요청을 보냅니다.

{{< figure src="/attachments/refguide10/runtime/mendix-client/data-source-server-paged.png" class="no-border" >}}

### Microflow 또는 Nanoflow 소스

[Microflow](/refguide10/microflow-source/) 또는 [Nanoflow](/refguide10/nanoflow-source/) 소스의 경우, 이러한 작업은 Runtime Server가 아닌 Mendix Client에서 적용됩니다. 이는 Microflow 또는 Nanoflow 데이터 소스가 모델링된 로직에 따라 모든 객체를 반환한 후 Mendix Client에서 페이징, 정렬 및 필터링이 적용됨을 의미합니다.

이는 페이징이나 필터에 의해 제한된 객체 세트가 요청되더라도 Microflow 또는 Nanoflow가 반환하는 모든 객체의 전체 세트가 네트워크를 통해 Mendix Client로 전송됨을 의미합니다. 그런 다음 모든 데이터가 Mendix Client에서 사용 가능하므로 페이징, 정렬 또는 필터링의 변경은 데이터를 검색하기 위해 Microflow 또는 Nanoflow를 트리거하지 않고 이 객체 목록에 대해 작동합니다.

### Association 소스

[Association 소스](/refguide10/association-source/)는 Microflow 또는 Nanoflow 소스와 동일한 방식으로 작동하지만, 객체 목록에는 지정된 Association으로 연결된 객체가 포함됩니다.

{{< figure src="/attachments/refguide10/runtime/mendix-client/data-source-client-paged.png" class="no-border" >}}

## 네트워크 최적화 모드

이전 섹션에서 설명한 것처럼 데이터 소스의 유형은 네트워크 요청이 트리거되는 시기에 영향을 줍니다. 이 요청의 응답 크기는 반환되는 객체 수뿐만 아니라 최적화 모드에도 의존합니다.

두 가지 [최적화 모드](/refguide10/data-sources/#optimization-mode)가 있으며, Mendix 버전 10.8.0 이상에서는 데이터 소스에 적용되는 모드를 데이터 소스 고급 속성에서 확인할 수 있습니다.

이러한 모드가 위젯의 성능과 동작에 미치는 영향을 보여주기 위해 [Data Grid 2](/appstore/modules/data-grid-2/) 위젯을 고려해 보겠습니다. Data Grid는 Entity `OrderLine`의 Database 데이터 소스로 구성됩니다. Data Grid는 각각 `Description`과 `Price` Attribute를 포함하는 두 개의 열을 보여줍니다.

### 네트워크 왕복 최적화

**Network Round Trips** 최적화 모드에서 Runtime Server는 `OrderLine` Entity의 요청된 객체의 모든 Attribute를 반환합니다. Entity에 `Quantity` Attribute와 같은 추가 Attribute가 있는 경우, Data Grid에 표시되지 않더라도 네트워크 응답에 포함됩니다. 이는 네트워크를 통해 더 많은 정보가 반환되므로 네트워크 부하가 증가합니다. Attribute 수가 많을수록 더 많은 데이터가 전송됩니다.

이 모드에서 Runtime Server에서 수신한 객체는 [Mendix 객체 캐시](/refguide10/mendix-client/#object-cache)에 등록됩니다. Mendix Client가 객체를 필요로 하는 경우(예: 클라이언트 액션 실행 시) 캐시에서 객체를 검색하며 Mendix Client가 Runtime Server에 요청을 보내지 않습니다.

객체가 캐시되므로 페이지에 표시되는 데이터는 해당 페이지를 다시 로드할 필요 없이 즉시 업데이트됩니다.

일부 시나리오에서는 Mendix Client가 객체의 모든 Attribute를 사용할 수 있어야 합니다. 이 경우 **Network Round Trips**가 기본 모드가 되며 변경할 수 없습니다.

### 네트워크 부하 최적화 {#optimize-for-network-load}

**Optimize for Network Load** 최적화 모드에서 Runtime Server는 `OrderLine` Entity의 요청된 객체에 대해 그리드에서 사용하는 Attribute만 반환합니다. 이렇게 하면 네트워크를 통해 전송되는 데이터 양이 제한됩니다.

모든 Attribute를 포함하지 않는 객체는 [Mendix 객체 캐시](/refguide10/mendix-client/#object-cache)에 등록되지 않습니다. 이는 Mendix Client가 객체를 필요로 할 때(예: 클라이언트 액션에서) 모든 Attribute가 포함된 객체를 가져오기 위해 Runtime Server에 추가 요청이 발행됨을 의미합니다.

페이지의 위젯에 표시되는 데이터는 데이터 소스가 다시 로드될 때까지 업데이트되지 않습니다.
