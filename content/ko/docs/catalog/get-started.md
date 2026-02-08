---
title: "카탈로그 시작하기"
url: /catalog/get-started/
linktitle: "카탈로그 시작하기"
weight: 1
description: "카탈로그를 처음 사용하는 사용자가 수행할 수 있는 초기 단계에 대해 설명합니다."
aliases:
    - /data-hub/data-hub-catalog/get-started/

---

## 소개

카탈로그(Catalog)는 Mendix 개발자와 관리자가 연결된 생태계 전체에서 서비스를 발견하고 탐색할 수 있도록 하는 개방형 표준 기반 메타데이터 저장소입니다. 이 저장소는 웹 앱 catalog.mendix.com 또는 [Catalog API](/apidocs-mxsdk/apidocs/catalog-apis/)를 통해 조직 내 [인증된 사용자](/catalog/manage-data-sources/user-roles/)가 접근할 수 있습니다.

{{% alert color="info" %}}카탈로그는 현재 OData, REST, 웹 서비스(Web Service) 및 비즈니스 이벤트(Business Event)를 지원합니다. 또한 OData로 래핑된 서비스, API 또는 데이터베이스도 지원합니다.{{% /alert %}}

## 회사의 카탈로그

회사 자격 증명으로 catalog.mendix.com에 로그인하여 회사에서 공유된 메타데이터를 확인하십시오.

[사용자 역할](/catalog/manage-data-sources/user-roles/) 및 사용 사례에 따라 다음을 수행할 수 있습니다:

* 회사 내 다른 앱에서 사용할 [서비스 등록](/catalog/register-data-sources/)
* 회사 카탈로그의 [서비스 사용](/catalog/consume/)
* 서비스 소유자 또는 관리자로서 [서비스 관리](/catalog/manage-data-sources/)

## 카탈로그와 앱 배포 방법

어떤 배포 방법이든 카탈로그를 사용할 수 있지만, 각 배포 방법에 따라 서비스가 등록되는 방식에 차이가 있습니다. 아래 표에서 이러한 차이점을 설명합니다.

| 배포 방법 | 서비스 등록 방식 | 
| --- | --- |
| [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/) | 배포된 앱의 게시된 OData/REST 서비스 및 비즈니스 이벤트(Business Event) 서비스가 카탈로그에 서비스로 [자동 등록](/catalog/register/register-data/#mendix-cloud)됩니다 <br> [Registration API를 사용한 서비스 등록](/apidocs-mxsdk/apidocs/registration-api/) |
| [Mendix on Kubernetes](/developerportal/deploy/private-cloud/) | [Registration API](/apidocs-mxsdk/apidocs/registration-api/) 사용 |
| [온프레미스(On-Premises)](/developerportal/deploy/on-premises-design/) | [Registration API](/apidocs-mxsdk/apidocs/registration-api/) 사용 |

서비스가 등록되면 메타데이터가 카탈로그에 저장되어 회사 내 인증된 사용자와 이러한 소스를 공유할 수 있습니다.

## 직접 해보기

[앱 간 데이터 공유](/howto/integration/share-data/)를 따라 카탈로그를 사용하여 두 Mendix 앱 간에 데이터를 공유해 보십시오.

[다른 앱에 데이터 쓰기](/howto/integration/write-data/) 방법을 학습하여 이 경험을 확장하십시오.

## 프로세스 및 속성

[카탈로그](/catalog/)에서 카탈로그의 프로세스와 속성에 대한 자세한 정보를 확인할 수 있습니다. 이 문서는 카탈로그 UI(catalog.mendix.com)에서 보이는 내용과 UI의 각 부분이 서로 어떻게 관련되는지에 대한 설명이 필요할 때 유용합니다.
