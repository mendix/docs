---
title: "카탈로그에서 OData로 래핑된 서비스 등록하기"
linktitle: "OData로 래핑된 서비스 등록"
url: /catalog/register/register-odata-wrapped-services/
description: "비OData 리소스를 OData로 변환하여 카탈로그에 등록하는 방법에 대해 설명합니다."
weight: 30
aliases:
    - /catalog/register/register-non-odata-resources/
---

## 소개

카탈로그는 노출된 서비스에서 메타데이터를 수집하며 현재 OData, REST, 웹 서비스(Web Service) 및 비즈니스 이벤트(Business Event)를 지원합니다. 위에 나열된 서비스 이외의 것을 연결하려면 OData로 래핑한 다음 카탈로그에 서비스 계약 파일을 등록하면 됩니다. 이후 Mendix Studio Pro에서 사용할 수 있도록 할 수 있습니다. 현재 데이터를 OData로 래핑하는 두 가지 방법이 있습니다:

* [Mendix 앱을 통해 OData 노출](#use-mendix-app)
* [서비스 래퍼(사용자 정의 솔루션)를 통해 OData 노출](#use-service-wrapper)

## Mendix 앱을 통해 OData 노출하기 {#use-mendix-app}

Mendix 앱을 통해 OData를 노출하려면 영속성 있는 엔티티(Entity) 데이터를 모듈에 복제하여 저장하십시오. 이 모듈에서 영속성 있는 엔티티를 게시된 OData 서비스로 노출하십시오. 이를 통해 Mendix Landscape 내에서 외부 엔티티 데이터에 대한 읽기 전용 접근이 가능합니다.

자세한 내용은 [게시된 OData 서비스](/refguide/published-odata-services/) 및 [커넥터 빌드](/appstore/creating-content/connector-guide-build/)를 참조하십시오.

## 서비스 래퍼를 통해 OData 노출하기 {#use-service-wrapper}

사용자 정의 솔루션으로, 서비스 래퍼를 통해 OData를 노출할 수 있습니다. 웹 서버와 비OData 서비스가 있는 사용자 정의 애플리케이션이 있는 경우 앱 데이터를 OData로 변환하는 서비스 래퍼를 구축할 수 있습니다. REST API 및 Async API와 같은 다양한 유형의 서비스 위에 OData API 래퍼를 만들 수 있습니다. 예를 들어, Apache Olingo 라이브러리를 사용하여 OData 서비스를 만들 수 있습니다.

사용된 OData 서비스에는 특정 제한 사항이 있습니다. 제한 사항에 대한 자세한 내용은 *Consumed OData Services*의 [OData 서비스 및 외부 엔티티](/refguide/consumed-odata-services/#external-entities) 섹션을 참조하십시오.

아래 다이어그램은 OData API 래퍼를 사용하여 사용자 정의 앱 서비스를 Mendix Studio Pro 앱에 연결하는 방법을 나타냅니다:

{{< figure src="/attachments/catalog/register-non-odata-resources/non-odata.png" alt="Catalog connecting to non-OData resources" class="no-border" >}}

OData 서비스를 사용할 수 있게 되면, 데이터에 대해 생성된 *$metadata* 파일을 찾아 홈 페이지의 커넥터를 통해 카탈로그에 서비스를 등록하는 데 사용하십시오. 연결 설정에 대한 자세한 내용은 [게시된 OData 서비스](/refguide/published-odata-services/)를 참조하십시오.

### 서비스 래퍼를 사용한 OData 노출 예시

.NET으로 OData 서비스를 작성하는 방법에 대한 다음 예시를 찾을 수 있습니다:

* [Work With OData in Web API: Create Your First OData Service](https://www.c-sharpcorner.com/UploadFile/dacca2/work-with-odata-in-web-api-create-your-first-odata-service/)
* [Write a Simple OData V4 Service](https://docs.microsoft.com/en-us/odata/webapi/getting-started)
