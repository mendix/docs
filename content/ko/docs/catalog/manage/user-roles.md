---
title: "카탈로그 사용자 역할"
url: /catalog/manage/user-roles/
description: "카탈로그의 사용자 역할에 대해 설명합니다."
aliases:
    - /catalog/manage-data-sources/user-roles/
    - /data-hub/data-hub-catalog/user-roles/
    - /data-hub/data-hub-catalog/manage-data-sources/user-roles/
---

## 소개

카탈로그를 사용하여 등록된 OData 및 OpenAPI 서비스를 검색하고 사용할 수 있습니다. 또한 새 서비스를 등록하고 자체 서비스를 큐레이션할 수 있습니다.

구체적으로, 카탈로그를 사용하여 다음을 수행할 수 있습니다:

* Studio Pro에서 서비스를 게시하고 카탈로그에 등록
* 비Mendix 앱에 대해 [게시된 OData 서비스](/refguide/published-odata-services/) (v2, v3, v4)를 수동으로 등록
* 소유한 등록된 서비스의 메타데이터 (설명, 태그, 연락처 정보, 검색 가능성 등) 업데이트
* 조직의 카탈로그에 등록된 모든 검색 가능한 서비스 및 데이터셋을 확인하고, Studio Pro에서 앱의 외부 엔티티로 게시된 엔티티를 사용하여 데이터에 연결

## Mendix Admin {#admin}

Mendix Admin은 다음을 수행할 수 있습니다:

* 조직 카탈로그의 [Mendix Admin](/control-center/catalog-admin/) 역할 수행
* [큐레이터(Curator)](#curator) 역할 할당
* 조직의 데이터 거버넌스 정책에 따라 카탈로그 큐레이션
* 조직의 카탈로그에 등록된 모든 자산에 접근

자세한 내용은 *Control Center*의 [카탈로그 관리](/control-center/catalog-admin/) 섹션을 참조하십시오.

### 외부 사용자

Mendix Admin은 회사의 카탈로그에 외부 사용자를 추가할 수 있습니다. 자세한 내용은 *카탈로그 관리*의 [외부 사용자](/control-center/catalog-admin/#external-users) 섹션을 참조하십시오.

## 큐레이터(Curator) {#curator}

큐레이터(Curator)는 카탈로그에서 등록된 서비스를 큐레이션합니다. 등록된 서비스가 관련 사용자에게 표시되도록 하고 등록된 자산의 정보를 보강할 수 있습니다. 조직에는 여러 명의 큐레이터가 있을 수 있습니다.

큐레이터는 [Mendix Admin](#admin)이 할당하며, 등록된 서비스 및 데이터셋의 메타데이터에 설명, 태그, 연락처 정보 및 검색 가능성을 보강할 수 있습니다.
