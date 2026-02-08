---
title: "데이터 접근성 및 보안"
url: /catalog/manage/security/
description: "등록된 자산 및 접근과 관련된 보안 측면에 대해 설명합니다."
aliases:
    - /data-hub/data-hub-catalog/security/
    - /data-hub/data-hub-catalog/manage-data-sources/security/
    - /catalog/security/
---

## 소개

카탈로그에서 [접근 수준(Access Level)](#access-level)은 등록된 서비스에 접근할 수 있는지 여부를 나타냅니다.

Mendix 앱의 보안은 앱 수준, 모듈 수준 및 엔티티(Entity) 수준에서 정의할 수 있습니다. 게시된 데이터셋과 관련된 데이터에 대한 접근을 제어하기 위해 추가 인증 방법을 지정할 수도 있습니다.

이 보안 수준은 앱의 최종 사용자가 노출된 데이터셋으로 표현되는 데이터에 접근할 수 있는지 여부를 결정합니다. 자세한 내용은 *게시된 OData 서비스*의 [보안](/refguide/published-odata-services/#security) 섹션을 참조하십시오.

데이터에 대한 접근은 조직의 식별 프로토콜에 의해 결정되며, Mendix 앱을 통한 모든 데이터 접근에 적용됩니다. 사용자 정의 HTTP 헤더 검증 예시에 대해서는 *보안 및 공유 데이터셋*의 [사용자 정의 HTTP 헤더 검증](/refguide/security-shared-datasets/#http-header-validation) 섹션을 참조하십시오.

## 등록된 서비스의 접근 수준 {#access-level}

등록된 서비스에는 카탈로그에서 서비스의 가시성 및 접근성에 적용되는 다음과 같은 분류가 있습니다:

* **Public** – 카탈로그의 모든 내부 및 외부 사용자에게 서비스가 표시됩니다
* **Internal** – 서비스가 조직 구성원으로 제한됩니다

자산의 **접근 수준(Access Level)**은 서비스에 대한 런타임 보안 및 앱 개발 시 데이터셋을 사용할 때 사용자가 볼 수 있고 사용할 수 있는 내용을 나타냅니다.

등록된 서비스의 접근 수준은 카탈로그의 **Service Metadata** 패널에 표시됩니다.

## 더 보기

OData 서비스의 보안 및 인증에 대한 자세한 내용은 [보안 및 공유 데이터셋](/refguide/security-shared-datasets/)을 참조하십시오.
