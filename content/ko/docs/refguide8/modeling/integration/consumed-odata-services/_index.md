---
title: "Consumed OData Service"
url: /refguide8/consumed-odata-services/
description: "Studio Pro의 Consumed OData Service 개요"
---

## 소개

데이터는 [Published OData Service](/refguide8/published-odata-services/)를 통해 앱에서 다른 앱이 사용할 수 있도록 게시할 수 있습니다. Consumed OData Service는 [Catalog](/catalog/)를 통해 앱에 외부 데이터 소스를 통합하는 데 사용할 수 있습니다.

Catalog를 사용하면 조직의 다양한 소스에서 사용 가능한 데이터 소스를 Mendix 앱에 통합할 수 있습니다. [Catalog](/catalog/)에 등록된 OData 서비스는 [Data Hub 패널](/refguide8/data-hub-pane/)을 통해 Domain Model에 외부 Entity로 드래그 앤 드롭할 수 있는 Entity를 노출합니다. 프로젝트에 추가되는 OData 서비스 문서는 서비스 및 노출된 Entity에 대한 메타데이터를 검색하기 위한 정보를 제공합니다.

Consumed OData Service 문서와 프로젝트에서 Consumed OData Service를 업데이트하는 방법에 대한 자세한 내용은 [Consumed OData Service](/refguide8/consumed-odata-service/)를 참조하십시오.

Published OData Service가 지원해야 하는 기능과 Mendix 데이터 모델 간의 변환 방법에 대한 자세한 내용은 [Consumed OData Service 요구사항](/refguide8/consumed-odata-service-requirements/)을 참조하십시오.

## OData 서비스 및 외부 Entity

외부 Entity가 앱에서 사용되면 Consumed OData Service 계약의 정보를 통해 Entity에 대한 관련 데이터셋이 검색되어 반환됩니다.

### 외부 Entity

외부 Entity는 영구 Entity와 비교하여 몇 가지 제한이 있습니다:

* 외부 Entity는 읽기 전용입니다
* 집계 함수(평균, 합계, 최대, 최소)는 외부 Entity에 사용할 수 없습니다
* 외부 Entity에 대한 XPath 제약 조건에는 특정 제한이 있습니다(예: 영구 Entity와 외부 Entity 간의 연관(Association)에 대해 필터링할 수 없습니다)
* 외부 Entity는 Dataset에 사용할 수 없습니다
* 외부 Entity의 접근 규칙에서 [XPath 제약 조건](/refguide8/xpath-constraints/)을 설정할 수 없습니다

외부 Entity 간의 연관(Association)(원본 앱에서 정의된 대로)은 Domain Model에 표시됩니다. 양쪽이 모두 노출된 연관만 사용할 수 있습니다.

로컬 [영구 Entity](/refguide8/persistability/#persistable)와 외부 Entity 간의 연관(Association)을 생성할 수 있습니다. 이러한 연관의 경우 영구 Entity가 소유자여야 합니다.

### Consumed OData Service

외부 Entity를 Domain Model에 드래그하면 모델에 추가되는 **Consumed OData** 문서가 서비스 엔드포인트의 메타데이터 계약 값을 표시합니다.

**Data Hub** 패널에서 서비스와 Entity는 검색 결과 패널 및 **Project** 패널 모두에서 소비된 것으로 표시됩니다.

지정된 서비스 엔드포인트의 메타데이터 계약이 현재 프로젝트 모델의 계약과 다른 경우, **Data Hub** 패널 검색 결과 및 서비스의 **Properties** 패널에서 파란색 **Update** 화살표로 표시됩니다:

{{< figure src="/attachments/refguide8/modeling/integration/consumed-odata-services/data-hub-pane-update.png" alt="Data Hub Pane update" class="no-border" >}}

{{< figure src="/attachments/refguide8/modeling/integration/consumed-odata-services/consumed-odata-service/project-pane-update-available.png" alt="update service project-pane" class="no-border" >}}

이는 Consumed Service를 새 계약으로 **업데이트**해야 함을 의미합니다. 이렇게 하지 않으면 오래된 계약을 기반으로 엔드포인트에서 데이터를 검색할 때 오류가 발생합니다. Consumed OData Service 계약의 변경 사항은 [Consumed OData Service 업데이트 또는 전환](/refguide8/consumed-odata-service/#updating)에서 자세히 설명합니다.

#### 제한 사항 {#consumed-odata-service-limitations}

Catalog에서 새 버전으로 [Consumed OData Service](/refguide8/consumed-odata-service/)를 업데이트하지만 저장하지 않고 문서를 닫으면, 해당 서비스에 대해 사용 가능한 업데이트를 알리는 파란색 화살표 아이콘이 더 이상 표시되지 않습니다. 앱을 닫고 다시 열면 오류가 해결됩니다.

## 런타임 고려 사항

Consumed OData Service의 모든 검색에 대해 서비스 엔드포인트가 호출됩니다. 따라서 소비된 외부 Entity의 데이터 검색은 로컬 영구 Entity보다 느릴 수 있습니다.
