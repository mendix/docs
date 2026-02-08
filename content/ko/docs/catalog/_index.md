---
title: "카탈로그"
url: /catalog/
description: "카탈로그의 프로세스와 속성에 대해 설명합니다."
weight: 41
no_list: false
description_list: true
cascade:
    - content_type: "Catalog"
    - mendix_version: 10
aliases:
    - /data-hub/data-catalog/index.html
    - /data-hub/
    - /data-hub/data-hub-catalog/
---

## 소개

[카탈로그(Catalog)](https://catalog.mendix.com)는 Mendix Cloud에서 제공하는 개발 도구입니다.

{{< figure src="/attachments/catalog/catalog-home.png" class="no-border" >}}

Mendix Cloud에서 실행되는 Mendix 앱이 제공하는 REST 서비스(게시된 [OData](/refguide/published-odata-services/) 및 OpenAPI REST 서비스), 웹 서비스(Web Service), 비즈니스 이벤트(Business Event)는 배포 시 조직의 카탈로그에 자동으로 등록됩니다. 이를 통해 Mendix 앱에서 게시 및 사용하는 모든 OData, OpenAPI, 웹 서비스 및 비즈니스 이벤트 엔드포인트(Endpoint)에 대한 최신 보기를 제공합니다. 이러한 자산은 카탈로그에서 [큐레이션](/catalog/manage/curate/)하여 관련 사용자에게 노출되고 쉽게 검색할 수 있도록 할 수 있습니다.

[카탈로그](/releasenotes/data-hub/) 릴리스 노트에서 업데이트 및 개선 사항을 확인하십시오.

{{% alert color="info" %}}
온프레미스(On-Premises)나 Mendix on Kubernetes와 같은 대체 환경에 Mendix 앱을 배포하는 경우, Catalog API를 사용하여 앱과 서비스를 카탈로그에 등록하면 배포된 API의 가시성을 확보할 수 있습니다. 로컬 배포에서 카탈로그를 사용하는 방법에 대한 자세한 내용은 [Mendix Cloud 없이 서비스 등록](/catalog/data-sources-without-mendix-cloud/)을 참조하십시오.{{% /alert %}}

{{% alert color="info" %}}
카탈로그와 [외부 엔티티(External Entity)](/refguide/external-entities/)는 Studio Pro [8.14](/releasenotes/studio-pro/8.14/) 이상에서 지원됩니다.{{% /alert %}}

## 카탈로그와 Mendix Connect {#catalog-mx-connect}

[Mendix Connect](https://www.mendix.com/data-hub/)는 조직의 사용자가 데이터를 안전하게 발견, 이해, 연결 및 관리할 수 있도록 Mendix 플랫폼에서 제공하는 기능 모음입니다. [카탈로그](/catalog/)는 조직 내에서 데이터를 보고, 공유하고, 사용할 수 있는 사용자 친화적인 방법으로 Mendix Connect 생태계의 일부입니다.

카탈로그 외에도 Mendix Connect 기능에는 다음이 포함됩니다:

* Studio Pro [10.0](/releasenotes/studio-pro/10.0/)의 [통합 기능](/refguide/integration/#integration-mx-connect)
* [Mendix Marketplace](/appstore/)에서 제공하는 플랫폼 지원 [커넥터 및 모듈](/appstore/#marketplace-mx-connect)

## 카탈로그 홈 {#catalog-home}

카탈로그 [홈](https://catalog.mendix.com) 화면에서 다음 탭으로 이동할 수 있습니다:

* **Home** – 카탈로그에서 검색하거나, 다양한 애플리케이션에서 서비스를 수동으로 등록하거나, 최근 변경되었거나 가장 인기 있는 서비스에서 선택하십시오
* **Browse** – 검색 창에서 등록된 자산을 [검색](/catalog/search/)하고 선택한 자산의 메타데이터 세부 정보를 **Data View** 또는 [Landscape View](/catalog/manage/landscape/)로 확인하십시오
* **Curate** – 등록된 자산에 대해 [큐레이션](/catalog/manage/curate/) 기능을 수행하여 등록된 메타데이터를 보강하고 검색 가능성을 높이십시오

**Home** 화면에서 다음 작업을 수행할 수 있습니다:

* **검색** – **Search** 상자를 사용하거나 제안된 **Tags**를 클릭하여 카탈로그에서 검색하십시오
* **새 서비스 등록** – 엔터프라이즈 비즈니스 애플리케이션에서 OData 서비스를 카탈로그에 수동으로 등록하십시오 (자세한 내용은 [카탈로그에서 OData 리소스 등록 방법](/catalog/register/register-data/)을 참조하십시오)

* **최근 변경 사항** – 가장 최근에 변경된 서비스를 확인하십시오
* **인기 서비스** – 가장 인기 있는 서비스를 확인하십시오

카탈로그는 Mendix Studio Pro에도 통합되어 있어 앱에서 공유 서비스를 찾고 연결할 수 있습니다. Studio Pro에서 카탈로그를 사용하는 방법에 대한 자세한 내용은 *Studio Pro 가이드*의 [Integration Pane](/refguide/integration-pane/)을 참조하십시오.

{{% alert color="info" %}}
카탈로그 통합은 Studio Pro 8.14 이상에서 사용할 수 있습니다. {{% /alert %}}

## 카탈로그에서 사용 가능한 정보 {#available-info}

카탈로그에서 등록된 자산에 대한 모든 정보는 [카탈로그 검색 세부 정보](/catalog/manage/search/#search-details) 화면에 표시됩니다. 이 정보는 OData 서비스 계약의 메타데이터와 등록된 자산이 큐레이션될 때 추가되는 추가 메타데이터에서 가져옵니다. 등록된 자산은 소유자, [큐레이터(Curator)](/catalog/manage/user-roles/#curator) 및 [Mendix Admin](/catalog/manage/user-roles/#admin)이 큐레이션할 수 있습니다.

서비스 및 노출된 데이터셋에 대해 등록되는 정보는 다음과 같습니다:

* **엔드포인트(Endpoint)** – 모든 등록된 자산은 카탈로그에서 엔드포인트(URL)로 정의됩니다. 서비스의 엔드포인트는 소비 앱에서 접근합니다.
* **환경(Environment)** – 자산의 위치를 완성하기 위해 엔드포인트는 환경에 게시됩니다. OData 서비스의 위치에는 게시 앱이 배포된 환경도 포함됩니다. 올바른 환경의 서비스에 연결하는 것은 매우 중요합니다. 예를 들어, 앱을 개발할 때는 비프로덕션 테스트 또는 수락 환경에 배포된 앱의 테스트 데이터에 연결하고자 할 것입니다. 그러나 최종 프로덕션 앱은 프로덕션 환경, 즉 실제 라이브 또는 작업 데이터의 데이터셋에 접근해야 합니다. 카탈로그에서는 데이터의 품질을 사용자에게 나타내는 **Environment Type**도 지정됩니다.

    {{% alert color="info" %}}카탈로그에서 환경 유형별로 검색 결과를 필터링할 수 있습니다 (**Production**, **Non-production**, Mendix Free App 환경 또는 **Sandbox**). Studio Pro의 [Integration Pane](/refguide/integration-pane/)에서는 기본 필터를 제거하여 비프로덕션 환경을 검색 결과에 포함할 수 있습니다. {{% /alert %}}

* **게시된 OData 서비스** – 서비스 엔드포인트에는 서비스를 정의하는 OData 서비스 메타데이터 계약 파일이 있습니다. 사용 가능한 서비스는 [게시된 OData 서비스](/refguide/published-odata-services/)에서 데이터셋, 속성 및 연관(Association)을 노출하여 카탈로그에 등록됩니다.
* **버전(Version)** – 특정 엔드포인트에서 노출되는 계약은 서비스 소유자에 의해 시간이 지남에 따라 변경될 수 있으며, 모범 사례를 따르면 이러한 변경 사항은 버전 번호 변경으로 표시됩니다. 모든 게시된 OData 서비스에는 버전 번호가 있습니다. 서비스를 소비하는 앱은 환경에 배포된 특정 버전의 서비스를 소비합니다.

    {{% alert color="info" %}}소비 앱을 중단시킬 수 있는 중대한 변경이 서비스에 이루어진 경우, 모범 사례에 따라 서비스는 버전 번호의 주요 업데이트와 함께 다른 엔드포인트에 배포되어야 합니다. 이 경우 서비스는 두 개의 다른 엔드포인트에 대해 두 번 나열됩니다. 자세한 내용은 *Consumed OData Service*의 [시맨틱 넘버링](/refguide/consumed-odata-service/#semantic)을 참조하십시오. {{% /alert %}}

Mendix Admin은 **큐레이터(Curator)**, **소유자(Owner)** 및 **외부 사용자(External User)**를 할당 및 관리하고 검색 가능성 설정을 제어할 수 있습니다. 자세한 내용은 [카탈로그 관리](/control-center/catalog-admin/)를 참조하십시오.

## 가이드 카테고리
