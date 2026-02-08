---
title: "리소스 등록 (온프레미스 또는 Mendix on Kubernetes)"
description: "로컬 배포 또는 온프레미스 솔루션에서 카탈로그와 외부 엔티티를 사용하는 방법에 대해 설명합니다."
url: /catalog/register/data-sources-without-mendix-cloud/
linktitle: "Mendix on Kubernetes / 온프레미스 등록"
weight: 40
aliases:
    - /data-hub/data-hub-without-mendix-cloud/
    - /catalog/data-sources-without-mendix-cloud/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---
## 소개

이 가이드에서는 로컬 배포, Mendix on Kubernetes 또는 온프레미스(On-Premises) 솔루션에 배포할 때 [카탈로그](/catalog/)와 함께 또는 없이 [게시된 OData 서비스](/refguide/published-odata-services/) 및 [외부 엔티티(External Entity)](/refguide/external-entities/)를 사용하는 방법을 설명합니다.

## 사용 사례

이 문서에서는 다음 사용 사례를 다룹니다:

* 클라우드 환경에 배포하지 않고 로컬 머신에서 서비스와 클라이언트를 모두 개발하는 경우 (로컬 배포).
* Mendix Cloud 대신 [Kubernetes](/developerportal/deploy/private-cloud/) 또는 [온프레미스](/developerportal/deploy/on-premises-design/)에 배포하는 경우.

이러한 경우에도 외부 엔티티를 게시하고 사용할 수 있습니다. 이 가이드에서는 설계 시간(앱을 모델링할 때)과 런타임(개발 서버에 배포된 후)을 구분하여 카탈로그 및 외부 엔티티를 사용하는 방법을 설명합니다.

## 설계 시간에 데이터 사용하기 {#dh-design-time}

설계 시간, 즉 앱을 [모델링](/refguide/modeling/)하는 동안에는 Studio Pro에서 서비스 [메타데이터](#metadata)를 찾고, 등록하거나, 가져옵니다. 이 메타데이터는 계약 형태이며, 애플리케이션이 Mendix Cloud에서 호스팅되는 경우 카탈로그에 자동으로 등록됩니다. 자세한 내용은 아래의 [메타데이터 계약](#metadata) 섹션을 참조하십시오.

로컬, Mendix on Kubernetes 또는 온프레미스에 배포하는 경우, 메타데이터 계약을 사용하여 앱, 배포된 환경 및 제공하는 [게시된 OData 엔티티](/refguide/published-odata-entity/)를 추가할 수 있습니다. 설계 시간에 앱을 모델링할 때 데이터를 사용하는 일반 리소스에 대해서는 [앱 간 데이터 공유](/data-hub/share-data/) 및 [다른 앱에 데이터 쓰기](/catalog/write-data/)를 확인하십시오.

### 메타데이터 계약 {#metadata}

카탈로그는 조직의 소프트웨어가 제공하는 데이터와 기능에 대한 전화번호부 또는 지도 역할을 합니다. 배포된 애플리케이션, 환경, 서비스 및 버전에 대한 메타데이터가 포함됩니다. 등록된 모든 시스템에 대해 서비스를 설명하는 계약이 파싱되고 저장되므로, 사용자는 이러한 시스템이 제공하는 데이터셋, 로직 및 이벤트의 설명을 쉽게 찾을 수 있습니다. 카탈로그에는 데이터가 포함되지 않으며, 이러한 애플리케이션과 서비스를 설명하는 데 필요한 메타데이터만 포함됩니다.

Mendix Cloud에 배포하는 경우 이것이 어떻게 작동하는지 알아보려면 *카탈로그에서 리소스 등록*의 [Mendix Cloud를 통한 서비스 등록](/catalog/register/register-data/#mendix-cloud) 섹션을 참조하십시오.

### 지원되는 메타데이터 계약 유형

ZIP (여러 파일 계약용) 또는 XML (단일 파일 계약용)을 지원합니다.

### 팀 서버를 사용한 카탈로그에 계약 수동 등록 {#manual-team-server}

Mendix on Kubernetes 또는 온프레미스 설정에 배포하고 [Mendix 팀 서버](/refguide/version-control/#team-server)를 사용하는 경우, 카탈로그에 애플리케이션, 환경, 서비스를 수동으로 등록할 수 있습니다. 카탈로그에 서비스 계약을 등록하면 이를 소유한 회사의 구성원이 애플리케이션에서 찾고 가져올 수 있습니다.

카탈로그에 OData 계약 메타데이터 파일을 수동으로 등록하려면 다음 기본 단계를 따르십시오:

1. 배포할 `.mda` 패키지를 생성하십시오. 이를 위해 **Mendix Portal**의 **Environments** 페이지로 이동하여 **Create Package From Teamserver**를 클릭하십시오. `.mda` 패키지에는 모든 게시된 서비스와 사용된 OData 서비스를 나열하는 `dependencies.json` 파일이 포함됩니다.
2. [Transform](/apidocs-mxsdk/apidocs/registration-api/#transform-api) 작업을 사용하여 `dependencies.json`의 내용을 다른 작업의 페이로드로 변환하십시오 ([Transform 작업 사양](http://datahub-spec.s3-website.eu-central-1.amazonaws.com/registration_v5.html#/Endpoints/post_transform_dependenciesjson) 참조).
3. [Registration API](/apidocs-mxsdk/apidocs/registration-api/)를 사용하여 서비스를 등록하십시오.

자세한 단계는 *카탈로그에서 리소스 등록*의 [Mendix Cloud 없이 서비스 등록](/catalog/register/register-data/#without-mendix-cloud) 섹션을 참조하십시오.

### 팀 서버 없이 카탈로그에 계약 수동 등록 {#manual-no-team-server}

Mendix 팀 서버 없이 카탈로그에 계약을 수동으로 등록하려면 다음을 수행하십시오:

1. 게시 앱에서 계약을 내보내고 컴퓨터에 다운로드하십시오. </br> **Published OData Service** 문서의 **Settings** 탭으로 이동하여 **Metadata** 필드 옆의 **Export**를 클릭하십시오. `$metadata.xml` 파일을 저장하십시오.
2. 카탈로그에 계약을 수동으로 등록하십시오. </br> *카탈로그에서 리소스 등록*의 [Mendix Cloud 없이 서비스 등록](/catalog/register/register-data/#without-mendix-cloud) 섹션을 참조하십시오.

### Studio Pro에 직접 계약 가져오기 (카탈로그 우회) {#import-contracts}

로컬에 배포하거나 카탈로그에 서비스를 등록하지 않으려면, 게시된 OData 서비스를 사용하기 위해 메타데이터 계약 또는 서비스 URL을 Studio Pro에 직접 가져올 수 있습니다.

#### 파일에서 가져오기

게시된 OData 서비스의 메타데이터 계약 파일을 가져오려면 다음을 수행하십시오:

1. 게시 앱에서 계약을 내보내고 컴퓨터에 다운로드하십시오.

    **Published OData Service** 문서의 **Settings** 탭으로 이동하여 **Metadata** 필드 옆의 **Export**를 클릭하십시오. `$metadata.xml` 파일을 저장하십시오.

2. 소비 앱에 계약을 가져오십시오.

    서비스를 추가할 **App Explorer**에서 마우스 오른쪽 버튼을 클릭한 다음 **Add other** > **Consumed OData Service**를 클릭하십시오. 내보낸 `$metadata.xml` 파일을 선택하십시오.

서비스가 이제 [Integration Pane](/refguide/integration-pane/)에 나타납니다.

#### URL에서 가져오기

게시된 OData 서비스 URL을 가져오려면 다음을 수행하십시오:

1. OData 서비스 URL을 복사하십시오.

    Mendix 앱에서 게시된 OData 서비스 URL을 찾으려면 **Published OData Service** 문서의 **Settings** 탭으로 이동하여 **Metadata** 필드의 전체 링크를 복사하십시오.

2. 소비 앱에 **Consumed OData service**를 추가하십시오.

    서비스를 추가할 모듈의 **App Explorer**에서 마우스 오른쪽 버튼을 클릭한 다음 **Add other** > **Consumed OData Service**를 클릭하십시오.

3. **Add Consumed OData Service** 대화 상자에서 **From URL**이 선택되어 있는지 확인하고 복사한 URL을 필드에 붙여넣으십시오.

서비스가 이제 [Integration Pane](/refguide/integration-pane/)에 나타납니다.

### 수동으로 등록된 계약 업데이트하기

수동으로 등록된 계약의 메타데이터를 업데이트하려면 초기 등록과 동일한 단계를 따르십시오. 그런 다음 등록 시 업데이트된 소스가 기존 앱의 기존 환경에서 새 버전임을 표시하십시오.

Studio Pro에서 데이터 셋을 업데이트하려면 다음을 수행하십시오:

1. 앱과 업데이트하려는 게시된 OData 서비스를 여십시오.
2. **Entities**에서 **Customer**를 선택하고 **Edit**를 클릭하십시오.
3. **Updateable**의 체크박스를 선택하고 **OK**를 클릭하십시오.
4. **Publish**를 클릭하십시오.

자동으로 등록된 계약에서 이것이 어떻게 작동하는지 알아보려면 *Consumed OData Service*의 [업데이트 또는 전환](/refguide/consumed-odata-service/#update-switch) 섹션을 참조하십시오.

## 런타임에 데이터 사용하기 {#dh-runtime}

런타임, 즉 앱을 개발 서버에 배포한 후에는 게시 앱과 소비 앱 간에 OData 서비스를 통한 외부 엔티티 교환이 이루어집니다. Mendix on Kubernetes 또는 온프레미스 설정에 배포하는 사람은 누구나 [설계 시간에 데이터 사용](#dh-design-time)에서 설정한 OData 리소스를 사용할 수 있습니다. 런타임에는 카탈로그가 관여하지 않습니다.

{{% alert color="info" %}}
게시 서비스와 소비 서비스는 서로 네트워크 접근이 가능해야 하지만, 반드시 클라우드나 네트워크에 있을 필요는 없습니다. {{% /alert %}}
