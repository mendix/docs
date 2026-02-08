---
title: "카탈로그에서 리소스 등록하기"
linktitle: "리소스 등록"
url: /catalog/register/register-data/
description: "Mendix Cloud 또는 UI 양식을 통해 카탈로그에서 리소스를 등록하는 방법에 대해 설명합니다."
weight: 10
aliases:
    - /catalog/register/
    - /catalog/register-data/
    - /catalog/register-data-sources/register-data/
    - /catalog/register-data-sources/register
    - /data-hub/data-hub-catalog/register
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
#The anchor registration-form below is mapped, so it should not be removed or changed.
---

## 소개

카탈로그에서 게시된 서비스를 등록하는 세 가지 방법이 있습니다. Mendix는 모든 OData 버전, REST, 비즈니스 이벤트(Business Event) 및 웹 서비스(Web Service)를 지원합니다.

이 문서에서는 다음 방법으로 서비스를 등록하는 방법을 설명합니다:

* [Mendix Cloud](#mendix-cloud)를 통해 – [게시된 OData](/refguide/published-odata-services/)/REST/Web 서비스 또는 비즈니스 이벤트를 Mendix Cloud에 배포할 때 자동으로 등록됩니다
* [카탈로그 UI 양식](#registration-form)을 통해
* [Catalog Registration API](/apidocs-mxsdk/apidocs/registration-api/)를 통해

## 사전 요구 사항

이 문서를 시작하기 전에 다음 사전 요구 사항을 완료했는지 확인하십시오:

* Studio Pro [8.14.0 이상](https://marketplace.mendix.com/link/studiopro/)이 설치되어 있습니다
* Mendix 계정이 있습니다
* 등록할 준비가 된 노출된 OData/REST/Web 서비스 또는 비즈니스 이벤트가 있습니다 (노출된 OData 서비스를 만드는 방법에 대한 지침은 [앱 간 데이터 공유](/howto/integration/share-data/)의 앱 만들기 및 엔티티 노출 섹션을 참조하십시오)

## Mendix Cloud를 통한 서비스 등록 {#mendix-cloud}

[Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/)에 배포된 게시된 서비스가 있으면, 해당 서비스는 이미 [카탈로그에 등록](/catalog/register/automatically-registered-services/)되어 있습니다.

## Mendix Cloud 없이 서비스 등록하기 {#without-mendix-cloud}

Mendix Cloud를 사용하여 Mendix 애플리케이션을 배포하지 않는 경우, 카탈로그에 노출된 서비스를 등록하는 두 가지 다른 방법이 있습니다:

* [Catalog Registration API](/apidocs-mxsdk/apidocs/registration-api/)를 통해
* [카탈로그 UI 양식](#registration-form)을 통해

카탈로그는 애플리케이션 및 서비스가 배포된 환경에 대한 메타데이터를 수집하므로 서비스를 서로 구분할 수 있습니다. 서비스를 등록하려면 서비스가 배포된 애플리케이션과 환경에 대한 세부 정보를 모두 제공해야 합니다.

Mendix Cloud 없이 외부 엔티티 및 카탈로그를 사용하는 방법에 대한 자세한 내용은 [Mendix Cloud 없이 서비스 등록](/catalog/data-sources-without-mendix-cloud/)을 참조하십시오.

### 카탈로그 UI 양식을 통한 서비스 등록 {#registration-form}

카탈로그에는 단일 노출된 서비스를 등록할 수 있는 UI 양식이 있습니다. 시작하기 전에 다음 세부 정보를 수집했는지 확인하십시오:

* 등록하려는 서비스에 따라 *.xml*, *.json*, *.yaml* 또는 *.wsdl*로 된 메타데이터 계약 파일, 또는 여러 파일인 경우 *.zip*
* 서비스 세부 정보: `Name`, `Version`, `Path`
* 애플리케이션 `Name`
* 환경 세부 정보: `Name`, `Location` (URL), `Type`

아래 단계를 따르십시오:

1. [카탈로그 홈 페이지](https://catalog.mendix.com)를 열어 주십시오.
2. **Contract** 화면에서 등록하려는 서비스 유형을 선택하십시오. 선택한 서비스 유형에 해당하는 유효한 계약 파일을 업로드하십시오:
    * OData의 경우 *.xml*
    * REST의 경우 *.yaml* 또는 *.json*
    * Web Service의 경우 *.wsdl* 또는 *.xml*

    계약에 대한 자세한 내용은 아래의 [계약 구조](#contract-structure) 섹션을 참조하십시오.
3. **Service Details** 화면에서 등록할 서비스 유형을 선택하고 다음 세부 정보를 지정하십시오:
   1. 서비스 이름(Service Name)
   2. 서비스 버전(Service Version)
   3. 서비스 상대 경로(Service Relative Path)
   
   서비스 상대 경로는 애플리케이션의 환경 URL에 대한 서비스 계약의 경로입니다. 버전 관리에 대한 자세한 내용은 [시맨틱 넘버링](/refguide/consumed-odata-service/#semantic)을 참조하십시오. 양식의 나머지 필드는 선택 사항입니다.

    {{% alert color="warning" %}}버전이 프로덕션에 릴리스되면, 업데이트된 계약에는 새 버전이 부여되어야 합니다. 비프로덕션 환경에만 등록하는 경우에도 적용됩니다.<br/><br/>이는 게시된 서비스의 특정 버전에 대한 변경 사항이 해당 서비스가 게시된 모든 환경의 카탈로그에서 사용 가능한 엔티티와 속성에 반영되기 때문입니다. 예를 들어, 비프로덕션과 프로덕션 환경 모두에 게시된 버전 1.0.0이 있는 경우, 비프로덕션 환경에서 서비스 버전 1.0.0에 대한 변경 사항이 프로덕션의 서비스에도 반영됩니다.{{% /alert %}}

4. 모든 필수 필드를 입력했으면 **Next**를 선택하십시오.
5. **Application** 화면에서 이름으로 기존 애플리케이션을 선택하거나 새 애플리케이션을 등록하십시오. 등록 완료 후 **Curation** 기능을 통해 **Technical Owner**와 **Business Owner**를 편집할 수도 있습니다.
6. 모든 필수 필드를 입력했으면 **Next**를 선택하십시오.
7. **Environment** 화면에서 이름으로 기존 환경을 선택하거나, **Environment Name**, **Environment Location** (URL), **Environment Type**을 제공하여 새 환경을 등록하십시오. **Environment Type** 옵션은 해당 환경에서 찾을 수 있는 데이터의 유형을 나타냅니다:

    * **Production** – 프로덕션 품질의 데이터
    * **Sandbox** – Mendix Free App 환경, 프로덕션 품질이 아닌 데이터
    * **Non-production** – 호스팅 비용이 지불되지만 프로덕션 품질이 아닌 데이터

8. **Authentication** 방법을 선택하십시오. 지원되는 인증 유형에 대한 자세한 내용은 아래의 [인증](#authentication) 섹션을 참조하십시오. 큐레이터는 나중에 [인증 방법을 추가하거나 변경](/catalog/manage/curate/#authentication)할 수도 있습니다.
9. **Done!**을 선택하여 등록을 완료하십시오.

축하합니다! 서비스가 카탈로그에 등록되었습니다.

서비스의 검색 가능 상태는 Mendix Admin이 설정한 기본값으로 설정됩니다. 자세한 내용은 *카탈로그 관리*의 [설정](/control-center/catalog-admin/#settings) 섹션을 참조하십시오.

#### 인증 방법 선택하기 {#authentication}

서비스 게시자는 소비 개발자가 서비스를 사용할 때 자신을 식별하는 방법을 결정할 수 있습니다.

카탈로그는 다음 방법을 지원합니다:

* **Basic authentication** – 사용자 이름과 비밀번호로 인증
* **Active session** – Mendix 서비스의 경우, 열려 있고 활성화된 브라우저 세션에서 인증
* **Mendix SSO** – Mendix 서비스의 경우, [Mendix SSO](/appstore/modules/mendix-sso/) 모듈을 사용한 싱글 사인온 인증
* **OAuth** – [OAuth](https://oauth.net/)로 인증
* **OpenID Connect** – [OAuth 2.0](https://oauth.net/2/) 위에 구축되고 [OIDC SSO](/appstore/modules/oidc/) 모듈과 함께 사용되는 [OpenID Connect](https://openid.net/connect/)로 인증
* **Other** – 사용자 정의 모듈을 포함한 기타 인증 방법 지정

소비 개발자가 서비스를 사용하기 위해 쉽게 인증할 수 있도록 가능한 한 많은 세부 정보를 입력하십시오.

##### Marketplace 모듈 선택하기 (선택 사항)

Mendix Marketplace의 모듈을 사용하는 경우, **Other**를 선택한 다음 **Marketplace Module** 드롭다운 목록에서 모듈을 선택하십시오.

#### 계약 구조 {#contract-structure}

모든 ZIP 계약에는 *primary*라는 이름의 기본 문서가 포함되어야 합니다.

ZIP 파일의 나머지 문서는 URI 경로의 각 세그먼트가 고유한 폴더로 표현되는 일련의 중첩 폴더 내에 구조화되어야 합니다. 절대 URL 또는 상대 URI를 사용할 수 있지만, 이들은 서로 다른 최상위 폴더를 가집니다:

* 절대 URL – 전체 URL이 폴더 구조로 표현되며, ZIP 파일의 루트에 **http** 또는 **https** 폴더로 시작합니다. 이 최상위 **http** 또는 **https** 폴더에는 도메인 이름의 폴더가 포함됩니다. 도메인 폴더에는 나머지 URL 경로를 나타내는 일련의 다른 폴더와 파일이 포함됩니다.
* 상대 URI – 폴더와 파일은 Document Base URL을 기준으로 구조화되어야 합니다. 즉, 상대 URI는 기본 문서에서 사용되는 것과 일치하는 폴더 구조를 사용합니다.

아래 다이어그램은 두 URI 유형에 대한 ZIP 계약 구조의 예시를 보여줍니다. 절대 폴더 구조는 각 경우에 동일하지만, 상대 구조는 Document Base URL에 따라 다릅니다. **odata**, **v1**, **docs**는 각각 별도의 폴더이지만, 여기에 표시된 절대 폴더 구조에서는 공간을 절약하기 위해 축약된 형식으로 표현됩니다.

{{< figure src="/attachments/catalog/register-data/zip-file-structure.png" alt="Absolute and relative folder structures for two different base URLs." class="no-border" >}}
