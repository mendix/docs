---
title: "카탈로그에서 검색하기"
url: /catalog/manage/search/
description: "카탈로그에서 서비스와 데이터셋을 찾는 방법에 대해 설명합니다."
aliases:
    - /data-hub/data-hub-catalog/search/
    - /data-hub/data-hub-catalog/manage-data-sources/search/
    - /catalog/search/
---

## 소개

앱 개발에 사용할 올바른 데이터를 찾는 것은 카탈로그의 검색 기능을 사용하면 더 쉬워집니다. 등록된 데이터 자산의 세부 정보는 [Search API](/apidocs-mxsdk/apidocs/catalog-apis/)를 사용하여 접근하거나, 카탈로그의 [자산 세부 정보](#search-details) 화면 또는 Studio Pro의 [Integration Pane](/refguide/integration-pane/)에서 확인할 수 있습니다. 이 문서에서는 카탈로그에서 검색하는 방법을 설명합니다.

## 카탈로그에서 검색하기 {#search-catalog}

### 등록된 자산의 세부 정보

[홈](#data-hub-home) 페이지에서 검색을 시작하거나 [Catalog](#search-tab) 탭을 클릭하여 **Search** 창과 **Asset Details** 화면으로 이동할 수 있습니다. 이 섹션에서는 등록된 자산인 서비스, 데이터셋 및 속성의 주요 속성에 대해 설명합니다.

{{% alert color="info" %}}**Dataset**은 Mendix Studio Pro에서 게시된 **Entity**의 **Entity set** 이름이며, 기본적으로 엔티티 이름에 "s"가 추가됩니다. 예를 들어, `Customer`라는 이름의 엔티티가 OData 서비스에 게시되면 **Search Details**의 **Dataset** 이름은 `Customers`가 됩니다.{{% /alert %}}

#### 버전

모든 게시된 서비스에는 버전 번호가 있습니다. 서비스를 사용하는 앱은 특정 버전에서 사용합니다. 서비스의 업데이트 및 변경 사항은 버전 번호의 변경으로 표시됩니다. 카탈로그에서 등록된 서비스의 여러 버전을 사용할 수 있습니다. 서비스 버전은 [자산 세부 정보](#search-details)에 표시됩니다.

#### 환경

카탈로그는 특정 환경에 배포된 게시된 서비스의 레지스터입니다. 각 환경에 대해 서로 다른 버전 번호를 부여하여 서비스의 여러 버전을 가질 수 있습니다.

환경은 사용 가능한 데이터셋의 품질에 대한 표시도 제공합니다. *프로덕션 환경*에서 사용 가능한 공유 데이터셋에는 프로덕션 수준의 데이터가 있으며, 비프로덕션 환경(*승인*, *개발*)에는 안정적인 앱 구축에 신뢰할 수 없지만 개발 작업에 유용할 수 있는 데이터가 채워질 수 있습니다.

검색 결과는 서비스 엔드포인트를 보여줍니다. 서비스 버전이 테스트 환경과 승인 환경 모두에 배포된 경우 검색 결과에 두 개의 엔드포인트가 표시됩니다.

{{% alert color="info" %}}
기본적으로 카탈로그의 검색 결과는 **Production** 환경의 결과만 표시하도록 필터링됩니다. 검색 창의 **Add Filter** 목록에서 **Non-production** 또는 **Mendix Free App (Sandbox)** 환경을 체크하여 검색을 확장할 수 있습니다. 자세한 내용은 아래의 [필터](#filter) 섹션을 참조하십시오.
{{% /alert %}}

#### 자산 설명

게시된 서비스 메타데이터의 일부로 포함된 설명입니다. 이 설명은 소유자와 큐레이터가 서비스, 데이터셋 및 속성 수준에서 편집할 수 있습니다.

{{% alert color="info" %}}
Studio Pro에서 서비스를 게시할 때 서비스의 요약과 설명을 지정할 수 있습니다. 설명만 서비스 계약 문서에 포함되어 카탈로그에 등록됩니다.
{{% /alert %}}

### 자산 검색하기 {#data-hub-home}

카탈로그에서 검색할 때 다음 필드가 검색됩니다:

* 서비스 엔드포인트: 이름, 설명, 태그
* 애플리케이션: 이름
* 데이터셋: 이름, 설명
* 속성: 이름, 설명
* 연관(Association): 이름

**Catalog** 홈 페이지에서 다음 방법으로 카탈로그를 검색할 수 있습니다:

* 검색 상자에 검색어를 입력하고 **Search**를 클릭 (검색 문자열은 최소 3개의 영숫자 문자여야 합니다)
* 검색 제안에 제공된 태그 중 하나를 클릭
* **Most Recent Changes**의 서비스 중 하나를 클릭
* **Popular Services**의 서비스 중 하나를 클릭
* **Catalog** 탭을 클릭

위의 작업 중 하나를 수행하면 **Search** 화면으로 이동합니다.

### 검색 화면 {#search-tab}

**Search** 화면은 왼쪽의 [검색](#search-pane) 창, 중앙 패널의 선택된 자산의 [자산 세부 정보](#search-details), 오른쪽의 [자산 메타데이터](#metadata) 패널로 나뉩니다.

### 검색 창 {#search-pane}

접을 수 있는 **Search** 창은 카탈로그에서 등록된 자산을 검색하는 데 사용됩니다.

{{< figure src="/attachments/catalog/search/search-pane.png" alt="search pane"   width="300"  class="no-border" >}}

#### 검색 지정하기

**Search** 영역에 최소 3개의 영숫자 문자로 검색 문자열을 입력하십시오. 와일드카드 `*` 또는 빈 문자열 `''`를 검색하면 등록된 모든 항목이 반환됩니다.

#### 필터 {#filter}

다음 기준으로 검색 결과를 필터링할 수 있습니다:

* 환경 유형 (기본적으로 **Production** 환경 필터가 활성화되어 있습니다)
* 기술(Technology)
* [CRUD](/howto/integration/write-data/) (생성 가능, 읽기 가능, 업데이트 가능, 삭제 가능) 기능
* 소유권

**Filter** 대화 상자에서 검색에 포함할 필터를 체크한 다음 **Apply**를 클릭하십시오. 검색 결과는 선택한 필터의 결과만 표시합니다.

**Count** 및 **Pagination**을 포함하여 적용되는 제한 사항과 항목이 **Sortable**인지 **Filterable**인지 여부도 표시됩니다.

#### 검색 결과 {#search-results}

검색 기준(검색 문자열 및 필터)을 충족하는 항목 수가 검색 결과 목록에 표시됩니다. 검색 결과에 표시되는 항목의 순서는 다음의 조합입니다:

* 검색 문자열과의 가장 근접한 일치
* 서비스의 인기도 (연결 수)
* **Validated** 자산이 비검증 자산보다 먼저 표시

검색 결과에서 항목을 선택하면 **Landscape** 탭에 [Landscape](/data-hub/data-hub-landscape/)에서 선택한 항목의 연결 및 의존성 네트워크가 표시됩니다.

### 선택한 자산 세부 정보 {#search-details}

검색 결과를 클릭하면 이 패널에 세부 정보가 표시됩니다.

#### 선택한 서비스의 세부 정보 {#service-details}

게시된 서비스의 계약(*$metadata* 문서)에는 서비스에서 노출되는 내용의 세부 정보가 포함됩니다. 여기에는 노출된 데이터셋(또는 Mendix Studio Pro의 엔티티 셋)의 메타데이터와 노출된 속성, 연관 및 유형이 포함됩니다. 계약 메타데이터는 카탈로그에서 큐레이션된 메타데이터와 함께 표시됩니다.

검색 결과에서 서비스를 선택하면 다음 세부 정보가 표시됩니다:

* 애플리케이션 아이콘
* 서비스 이름
* **Non-discoverable** 아이콘 – 서비스가 검색 불가로 설정된 경우 (기본적으로 서비스는 회사의 모든 사용자에게 검색 가능하며 아이콘이 나타나지 않습니다)
* **Validated** 아이콘 – 자산에 설정된 경우
* **Environment Name** – 앱이 배포된 곳
* **Version** – 서비스의 버전 번호
* **Connections** – 서비스를 사용하는 앱 수
* **Authentication** – 인증 정보 및 사용 가능한 경우 **Request access** 옵션
* 서비스 설명
* 서비스에 노출된 모든 **Datasets** (각각을 확장하여 속성 및 연관의 세부 정보를 볼 수 있습니다)

{{% alert color="info" %}}Mendix Studio Pro에서 **Dataset**은 게시된 **Entity**의 **Entity set** 이름입니다. 기본적으로 엔티티 이름에 "s"가 추가됩니다. 예를 들어, `Customer`라는 이름의 엔티티가 OData 서비스에 게시되면 **Search Details**의 **Dataset** 이름은 `Customers`가 됩니다.{{% /alert %}}

이 화면에서 다음 작업을 수행할 수 있습니다:

* **Share** – 이 자산 세부 정보 페이지의 링크를 클립보드에 복사하여 다른 사람과 공유하십시오.
* **[계약 다운로드](#download-contract)** – 서비스 엔드포인트에서 OData 계약을 가져와 컴퓨터에 저장하십시오. 카탈로그에 이를 업로드하여 수동으로 등록할 수 있습니다.
* **Copy URI** – 서비스 계약의 URI를 클립보드에 복사하십시오. 이 URI를 사용하여 다른 엔터프라이즈 애플리케이션에 서비스를 통합할 수 있습니다.
* **Copy Dataset URI** – 다른 비즈니스 애플리케이션에서 사용할 수 있도록 데이터셋의 URI를 클립보드에 복사하십시오.

#### 선택한 데이터셋의 세부 정보 {#entity-details}

검색 결과에서 **Dataset**을 선택하면 **Search Details** 패널에 다음 세부 정보가 표시됩니다.

##### 일반 정보

데이터셋의 소스 및 엔드포인트 세부 정보가 표시됩니다:

{{< figure src="/attachments/catalog/search/dataset-details.png" alt="associations info" >}}

* 데이터셋 이름
* **Part of** – 데이터셋이 노출된 서비스 세부 정보 페이지로의 링크
* 데이터셋이 노출된 서비스의 **Version** 번호
* **Connections** – 이 데이터셋을 사용하는 앱 수
* 데이터셋 설명
* [인증 방법](/catalog/register/register-data/#authentication)

이 화면에서 다음 작업을 수행할 수 있습니다:

* **Copy URI** – 다른 비즈니스 애플리케이션에서 사용할 수 있도록 데이터셋의 URI를 클립보드에 복사하십시오
* **Share** – 이 데이터셋 세부 정보 페이지의 링크를 클립보드에 복사하여 다른 사람과 공유하십시오
* **Edit** – 데이터셋 편집 화면에 접근하십시오

#### 데이터셋 정보

**Attributes** 탭에는 서비스에서 데이터셋에 노출된 속성이 나열됩니다.

각 데이터셋의 **Associations** 탭에서 연관이 표시됩니다:

{{< figure src="/attachments/catalog/search/attributes-associations.png" alt="associations info" class="no-border" >}}

* **Name** – OData 서비스 계약에 노출된 연관의 이름.
* **Navigates to** – 연관이 이루어진 데이터셋. 링크를 클릭하여 카탈로그에서 관련 데이터셋의 세부 정보를 확인하십시오.
* **Multiplicity** – 다중성을 나타냅니다.

### 메타데이터 패널 {#metadata}

자산 세부 정보 화면 오른쪽의 메타데이터 패널에는 서비스 메타데이터 계약의 세부 정보와 카탈로그에서 큐레이션된 값이 표시됩니다:

{{< figure src="/attachments/catalog/search/metadata.png" alt="metadata pane"   width="300"  class="no-border" >}}

#### 태그

카탈로그에서 서비스에 할당된 태그입니다 (자세한 내용은 *등록된 자산 큐레이션 방법*의 [서비스에 태그 추가 또는 편집](/catalog/manage/curate/#tags) 섹션을 참조하십시오). 서비스 수준에서 할당된 태그는 서비스에 노출된 데이터셋과 속성으로 전파됩니다.

#### 비즈니스 소유자(Business Owner) {#business-owner}

서비스에 노출된 데이터의 비즈니스 소유자로의 링크입니다. 자세한 내용은 *등록된 자산 큐레이션 방법*의 [앱 소유자 변경](/catalog/manage/curate/#changing-owners) 섹션을 참조하십시오.

#### 기술 소유자(Technical Owner)

앱의 기술 담당자입니다. 기본적으로 서비스를 등록한 소유자입니다.

Mendix Cloud에서 호스팅되는 앱의 경우 **Technical Owner**는 앱을 배포한 앱 개발자입니다.

기술 소유자는 [변경](/catalog/manage/curate/#changing-owners)할 수 있습니다.

#### 검색 가능성(Discoverability) {#discoverability-metadata}

서비스가 등록되면 기본적으로 카탈로그에서 **Discoverable** 상태입니다. 이 설정이 되면 회사의 모든 사용자가 해당 서비스를 찾고 세부 정보를 보고 사용할 수 있습니다. 자산의 소유자와 큐레이터는 서비스를 **Non-discoverable**로 설정할 수 있으며, 이 경우 소유자 또는 큐레이터가 아닌 사용자에게는 보이지 않습니다.

소유자 또는 큐레이터로서 **Discoverability**를 변경하려면 아래의 [큐레이션 옵션](#curation-option) 섹션을 참조하십시오.

다음 검색 가능성 값을 설정할 수 있습니다:

* **Discoverable** – 회사의 모든 사용자가 카탈로그와 Studio Pro에서 자산을 보고 사용할 수 있습니다
* **Non-Discoverable** – 자산은 카탈로그에서 소유자, 큐레이터 및 Mendix Admin에게만 표시됩니다. Studio Pro의 [Integration Pane](/refguide/integration-pane/) 또는 Catalog API의 다른 클라이언트의 검색 결과에 포함되지 않습니다.

#### 검증(Validated)

서비스가 **Validated**되었는지를 나타냅니다. 소유자 또는 큐레이터로서 **Validated**를 변경하는 방법에 대해서는 아래의 [큐레이션 옵션](#curation-option) 섹션을 참조하십시오. 이것이 의미하는 바에 대해 알아보려면 *등록된 자산 큐레이션*의 [Validated](/catalog/manage/curate/#validated) 섹션을 참조하십시오.

#### 애플리케이션

주어진 환경에서 서비스가 게시된 애플리케이션으로의 링크입니다.

#### 환경 유형

환경 유형은 노출된 데이터셋이 연결하는 데이터의 품질과 상태를 나타냅니다. 다음 환경 유형을 지정할 수 있습니다:

* **Production**
* **Non-Production**
* **Sandbox** (Mendix Free App 환경)

### 큐레이션 옵션 {#curation-option}

선택한 자산의 소유자이거나 큐레이터인 경우 자산 세부 정보 화면에 **큐레이션 옵션**이 표시됩니다. **Edit**에서 카탈로그에 자산에 대해 표시되는 정보를 편집할 수 있습니다.

{{< figure src="/attachments/catalog/search/curation-option.png" alt="curation option"   width="300"  >}}

선택한 서비스에 대해 [애플리케이션 세부 정보](/catalog/manage/curate/#curate-application), [서비스 세부 정보](/catalog/manage/curate/#service-details) 및 인증을 편집할 수 있습니다.

자세한 내용은 *등록된 자산 큐레이션*의 [검색 가능성 및 검증](/catalog/manage/curate/#discoverability) 섹션을 참조하십시오.

### 서비스 및 데이터셋 URI

서비스 URI는 서비스 계약의 위치이며 서비스 엔드포인트라고도 합니다. 모든 노출된 데이터셋(엔티티 셋)의 엔드포인트는 계약에 정의됩니다. 서비스 및 데이터셋의 세부 정보 화면에서 **Copy URI**를 클릭하여 URI를 클립보드에 복사할 수 있습니다. 이러한 URI는 BI 애플리케이션에서 계약 및 리소스에 직접 접근하는 데 사용할 수 있습니다.

### 서비스 계약 다운로드하기 {#download-contract}

선택한 서비스에 대해 **Download Contract**를 클릭하여 서비스 엔드포인트에 있는 서비스 계약을 다운로드할 수 있습니다. 전체 계약을 구성하는 모든 파일이 포함된 ZIP 파일이 생성되어 다운로드됩니다.

결과 ZIP 파일의 이름은 `DataHub_<service_name>_<service_version>_<technology>.zip` 형식이며, `<technology>` 문자열은 서비스 프로토콜을 식별합니다.

예시는 다음과 같습니다:

{{< figure src="/attachments/catalog/search/download_example.png" alt="download example" class="no-border" >}}

**Download**를 클릭하면 다음 파일이 다운로드됩니다: `DataHub_SAP_Intelligence_1.0_OData4.zip`. 이 ZIP 파일에는 서비스를 정의하는 모든 메타데이터 파일이 포함된 `DataHub_SAP_Intelligence_1.0_OData4` 폴더가 있습니다.

### Landscape에서 검색 결과 보기

검색 결과 창에서 항목을 선택하면 [Landscape](/data-hub/data-hub-landscape/) 탭을 클릭하여 선택한 자산의 연결 및 의존성 네트워크를 볼 수 있습니다. 이는 선택한 항목의 컨텍스트와 관련성 및 노출된 데이터셋의 데이터를 나타내는 그래픽 표현을 제공합니다.

## API를 사용한 검색

Catalog Search API를 사용하려면 [Search API](/apidocs-mxsdk/apidocs/search-api/)를 참조하십시오.
