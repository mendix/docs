---
title: "Registration API"
linktitle: "Registration API"
url: /apidocs-mxsdk/apidocs/registration-api/
description: "Registration API는 조직의 Catalog에 서비스를 등록하고 업데이트할 수 있게 해줍니다."
weight: 50
type: swagger
---

## 소개

Registration API는 애플리케이션, 환경 및 서비스를 등록하는 데 사용할 수 있습니다.

API에는 다음이 포함됩니다:

* 응답 본문에 자산에 대한 UUID가 생성되어 반환되는 새 자산 등록을 위한 `POST` 메서드
* 기존 UUID에 대한 자산을 업데이트하거나 새 UUID에 대한 새 애플리케이션 및 환경을 생성하기 위한 `PUT` 호출
* 애플리케이션, 환경 및 엔드포인트를 삭제하기 위한 `DELETE` 호출

## 인증 및 액세스 권한

Registration API에 대한 인증에는 다음이 필요합니다:

* 개인용 액세스 토큰(PAT): Catalog API에 대한 모든 API 요청의 헤더에 다음 키-값 쌍을 포함하십시오: `Authorization: MxToken <your_Personal_Access_Token>`.

### PAT 생성

PAT 생성 방법에 대한 자세한 내용은 *사용자 설정(User Settings)*의 [개인용 액세스 토큰(Personal Access Tokens)](/portal/user-settings/#pat) 섹션을 참조하십시오.

생성된 값 {GENERATED_PAT}을 안전한 곳에 보관하여 API 호출을 인증하는 데 사용하십시오.

## Registration API 호출

노출된 서비스의 세부 정보를 등록하려면 다음 REST 호출 시리즈(다음 섹션에서 자세히 설명됨)를 따르십시오:

1. [애플리케이션을 등록](#register-application)하고 애플리케이션 UUID를 검색합니다.
2. 애플리케이션 UUID를 사용하여 [환경을 등록](#register-environment)하고 환경 UUID를 검색합니다.
3. 애플리케이션 UUID와 환경 UUID를 사용하여 [서비스를 등록](#register-services)합니다. 필요한 경우, 서비스를 등록하기 전에 [Transform API](#transform-api)(Registration API의 엔드포인트)를 사용하여 서비스 계약을 올바른 형식으로 가져오십시오.

Registration API 사양은 모든 선택적 필드, 필수 형식 및 동일한 경로에 대한 기타 작업에 대해 설명합니다.

## 예시 {#registration}

### 애플리케이션 등록 {#register-application}

애플리케이션을 등록하려면 다음이 필요합니다:

* 개인용 액세스 토큰
* 애플리케이션 이름(Application Name)

아래에서 요청 예시를 볼 수 있습니다:

```bash
curl --location --request POST 'https://catalog.mendix.com/rest/registration/v5/applications' 
--header 'Content-Type: application/json' 
--header 'Authorization: MxToken <your_Personal_Access_Token>' 
--data-raw '{"name": "My-Application"}'
```

성공적인 `POST` 호출은 `201` 상태 코드와 애플리케이션에 대해 제공한 세부 정보, 애플리케이션 아이콘 위치 및 고유 ID가 포함된 JSON 응답 본문을 반환합니다:

```json
{
	"name":"My-Application",
	"type":"Other",
	"uuid":"0301800d-b104-417f-8a64-a8f3ba3450c3",
	"icon":"https://catalog.mendix.com/resources/logos/other_icon.png"
}
```

애플리케이션 `uuid`를 사용하여 환경을 등록하십시오.

### 환경 등록 {#register-environment}

환경을 등록하려면 다음이 필요합니다:

* 개인용 액세스 토큰
* `application_UUID`
* 환경 이름(Environment `Name`)
* 환경 위치(Environment `Location`)
* 환경 유형(Environment `Type`)

이 필드에 제공할 수 있는 내용과 제공할 수 없는 내용에 대한 자세한 내용은 아래의 [API 레퍼런스](#api-reference) 섹션을 참조하십시오.

아래에서 요청 예시를 볼 수 있습니다:

```bash
curl --location --request POST 'https://catalog.mendix.com/rest/registration/v5/applications/{application_UUID}/environments' 
--header 'Content-Type: application/json' 
--header 'Authorization: MxToken <your_Personal_Access_Token>' 
--data-raw '{"name": "My-Environment", "location": "https://my-deployed-application-url.com", "type": "Production"}'
```

성공적인 `POST` 호출은 `201` 상태 코드와 환경에 대해 제공한 세부 정보 및 고유 ID가 포함된 JSON 응답 본문을 반환합니다:

```json
{
	"name":"My-Environment",
	"uuid":"c3acf1e6-8ed3-472c-8c9f-d93cf3a53b9b",
	"location":"https://my-deployed-application-url.com",
	"type":"Production",
	"application": {
		"name":"My-Application",
		"uuid":"0301800d-b104-417f-8a64-a8f3ba3450c3",
		"type":"Other",
		"icon":"https://catalog.mendix.com/resources/logos/other_icon.png"
	}
}
```

애플리케이션 `uuid`와 환경 `uuid`를 사용하여 하나 이상의 서비스를 등록하십시오.

### 서비스 등록 {#register-services}

서비스를 등록하려면 다음이 필요합니다:

* 개인용 액세스 토큰
* `application_UUID`
* `environment_UUID`
* 서비스 `Path`, `Name`, `ContractType`
* 서비스 버전 `Version` 및 `Security Scheme`
* `Type` 및 `Value`가 포함된 서비스 `Contract`

{{% alert color="warning" %}}
버전이 프로덕션에 릴리스되면, 업데이트된 계약에는 새 버전을 부여해야 합니다. 이는 비 프로덕션 환경에만 등록하는 경우에도 적용됩니다.

이는 게시된 OData 서비스의 특정 버전에 대한 변경 사항이 해당 서비스가 게시된 모든 환경에 대해 Catalog를 통해 사용할 수 있는 엔티티 및 속성에 반영되기 때문입니다. 예를 들어, 버전 1.0.0을 비 프로덕션 및 프로덕션 환경 모두에 게시한 경우, 비 프로덕션 환경에서 서비스의 버전 1.0.0을 변경하면 프로덕션의 서비스에도 반영됩니다.
{{% /alert %}}

이 필드에 제공할 수 있는 내용과 제공할 수 없는 내용에 대한 자세한 내용은 아래의 [API 레퍼런스](#api-reference) 섹션을 참조하십시오.

아래에서 요청 예시를 볼 수 있습니다:

```bash
curl --location --request PUT 'https://catalog.mendix.com/rest/registration/v5/applications/{application_UUID}/environments/{environment_UUID}/published-endpoints' 
--header 'Content-Type: application/json' 
--header 'Authorization: MxToken <your_Personal_Access_Token>'
--data-raw '{
  "endpoints": [
    {
      "path": "/path/to/my/service/endpoint",
      "serviceVersion": {
        "version": "1.0",
        "type": "OData",
        "service": {
          "name": "My-Service-Name",
           "ContractType": "OData_3_0"
        },
        "securityScheme": {
          "securityTypes": [
            {
              "name": "Basic"
            }
          ]
        },
        "contracts": [
          {
            "type": "CSDL",
            "documentBaseURL": "https://hr.acmecorp.test/odata/test.acme.employeeinformation/v1/",
            "documents": [
              {
                "isPrimary": true,
                "uri": "metadata.xml",
                "contents": "<?xml version="1.0" encoding="utf-8"?><edmx:Edmx Version="1.0" xmlns:edmx="http://schemas.microsoft.com/ado/2007/06/edmx" xmlns:mx="http://www.mendix.com/Protocols/MendixData">  <edmx:DataServices m:DataServiceVersion="3.0" m:MaxDataServiceVersion="3.0" xmlns:m="http://schemas.microsoft.com/ado/2007/08/dataservices/metadata">    <Schema Namespace="DefaultNamespace" xmlns="http://schemas.microsoft.com/ado/2009/11/edm"><EntityType Name="Employee"><Key><PropertyRef Name="ID" /></Key><Property Name="ID" Type="Edm.Int64" Nullable="false" mx:isAttribute="false" /><Property Name="Name" Type="Edm.String" MaxLength="200" /><Property Name="DateOfBirth" Type="Edm.DateTimeOffset" /><Property Name="Address" Type="Edm.String" MaxLength="200" /><Property Name="JobTitle" Type="Edm.String" MaxLength="200" /><Property Name="Salary" Type="Edm.Decimal" /></EntityType><EntityContainer Name="test.acme.employeeinformation/v1Entities" m:IsDefaultEntityContainer="true"><EntitySet Name="Employees" EntityType="DefaultNamespace.Employee" /></EntityContainer></Schema></edmx:DataServices></edmx:Edmx>"
              },
              {
                "isPrimary": false,
                "uri": "servicefeed.xml",
                "contents": "<?xml version="1.0" encoding="utf-8"?><service xmlns:atom="http://www.w3.org/2005/Atom" xml:base="https://hr.acmecorp.test/odata/test.acme.employeeinformation/v1/" xmlns="http://www.w3.org/2007/app"><workspace><atom:title>Default</atom:title><collection href="Employees"><atom:title>Employees</atom:title></collection>  </workspace></service>"
              }
            ]
          }
        ]
      }
    }
  ]
}'''
```

{{% alert color="info" %}} 계약 메타데이터가 거부되어 `400` 응답을 받는 경우, [Transform API](#transform-api)를 사용하여 계약을 올바른 형식으로 가져오십시오. 동일한 애플리케이션 및 환경에 대해 한 번에 둘 이상의 서비스를 등록하려면 요청 본문의 `Endpoints` 목록에 다른 객체를 추가하십시오.{{% /alert%}}

성공적인 `PUT` 호출은 `200` 상태 코드와 서비스에 대해 제공한 세부 정보, 고유 UUID 및 기타 세부 정보가 포함된 JSON 응답 본문을 반환합니다:

```json
{
    "endpoints": [
        {
            "path": "path/to/my/service/endpoint",
            "securityClassification": "Internal",
            "uuid": "f8e1772a-4bd2-43c7-bb1c-3bc61eb8bf5c",
            "links": [
                {
                    "href": "https://catalog.mendix.com/rest/registration/v5/endpoints/f8e1772a-4bd2-43c7-bb1c-3bc61eb8bf5c",
                    "rel": "Self"
                },
                {
                    "href": "https://catalog.mendix.com/link/endpoint?EndpointUUID=f8e1772a-4bd2-43c7-bb1c-3bc61eb8bf5c",
                    "rel": "Catalog"
                }
            ],
            "connections": 0,
            "lastUpdated": "2023-08-03T11:40:39.462Z",
            "serviceVersion": {
                "version": "1.0",
                "description": "",
                "publishDate": "2023-08-03T11:40:04.978Z",
                "uuid": "ffdf7a37-b3df-4488-b4de-79553ed34888",
                "service": {
                    "name": "My-Service-Name",
                    "uuid": "e36650ab-9a89-4a2d-8b88-d57a2efa5b9e",
                    "links": [
                        {
                            "href": "https://catalog.mendix.com/rest/registration/v5/applications/831ae898-7ee2-4e60-bf9c-2c709e0050b6/services/My-Service-Name",
                            "rel": "Self"
                        }
                    ]
                },
                "securityScheme": {
                    "securityTypes": [
                        {
                            "name": "Basic"
                        }
                    ]
                },
                "type": "OData"
            },
            "validated": false,
            "discoverable": true
        }
    ]
}
```

{{% alert color="info" %}}
`PUT` 작업 호출을 두 번 이상 완료하면 지정된 환경의 모든 게시된 엔드포인트에 대한 세부 정보가 덮어씌워집니다. 환경에 엔드포인트 컬렉션이 있는 경우, 한 번의 `PUT` 호출로 다른 엔드포인트를 생성, 업데이트 및 삭제할 수 있습니다.
{{% /alert %}}

#### 환경 이름 변경 시 동작

호스팅된 환경의 URL을 업데이트하는 것은 가능하지만(일반적이지는 않음), 재배포 시 루트 URL이 업데이트되고 해당 환경에 등록된 엔드포인트는 업데이트된 엔드포인트 위치를 갖게 됩니다.

### Transform API를 사용하여 서비스 세부 정보 준비 {#transform-api}

Transform API는 Registration API의 엔드포인트입니다. Mendix 앱이 생성하는 *dependencies.json* 파일을 Registration API가 서비스를 등록하는 데 필요한 구조로 변환합니다.

{{% alert color="info" %}}다음 선택적 필드는 현재 Transform API에서 변환되지 않습니다: `SecurityClassification`, `Discoverable`, `Validated` 및 `Tags`.{{% /alert %}}

Registration API의 Transform 엔드포인트를 호출하려면 다음이 필요합니다:

* 이스케이프된 JSON 문자열로 변환된 앱의 *dependencies.json* 파일

    {{% alert color="info" %}}*dependencies.json* 파일은 Mendix 애플리케이션의 **deployment** > **model** 폴더에서 찾을 수 있습니다.{{% /alert %}}

* 엔드포인트 위치 이름(Endpoint location `Name`)
* 엔드포인트 위치 값(Endpoint location `Value`)

    {{% alert color="info" %}}이 두 값은 노출된 서비스의 *metadata.json* 파일에서 찾을 수 있습니다. `Constants`라는 배열에 `Name`과 `DefaultValue`라는 이름으로 있습니다.{{% /alert %}}

    {{% alert color="info" %}}이 필드에 제공할 수 있는 내용과 제공할 수 없는 내용에 대한 자세한 내용은 아래의 [API 레퍼런스](#api-reference) 섹션을 참조하십시오.{{% /alert %}}

*dependencies.json* 파일을 변환하는 요청 예시는 아래에서 볼 수 있습니다:

```bash
curl --location --request POST 'https://catalog.mendix.com/rest/registration/v5/transform/dependenciesjson' 
--header 'Content-Type: application/json' 
--header 'Authorization: MxToken <your_Personal_Access_Token>' 
--data-raw '{
  "dependenciesJsonString": "{ "schemaVersion": "1.3", "appName": "HR Acme Corp", "published": [ { "name": "test.acme.employeeinformation", "version": "2.0", "path": "/employeeservice/v2", "serviceType": "OData 3.0", "contracts": [ { "type": "ServiceFeed", "value": "<?xml version="1.0" encoding="UTF-8"?>
<service xmlns="http://www.w3.org/2007/app" xmlns:atom="http://www.w3.org/2005/Atom" xml:base="https://hr.acmecorp.test/odata/test.acme.employeeinformation/v1/">
 <workspace>
 <atom:title>Default</atom:title>
 <collection href="Employees">
 <atom:title>Employees</atom:title>
 </collection>
 </workspace>
</service>" }, { "type": "Metadata", "value": "<?xml version="1.0" encoding="UTF-8"?>
<edmx:Edmx xmlns:edmx="http://schemas.microsoft.com/ado/2007/06/edmx" xmlns:mx="http://www.mendix.com/Protocols/MendixData" Version="1.0">
 <edmx:DataServices xmlns:m="http://schemas.microsoft.com/ado/2007/08/dataservices/metadata" m:DataServiceVersion="3.0" m:MaxDataServiceVersion="3.0">
 <Schema xmlns="http://schemas.microsoft.com/ado/2009/11/edm" Namespace="DefaultNamespace">
 <EntityType Name="Employee">
 <Key>
 <PropertyRef Name="ID" />
 </Key>
 <Property Name="ID" Type="Edm.Int64" Nullable="false" mx:isAttribute="false" />
 <Property Name="Name" Type="Edm.String" MaxLength="200" />
 <Property Name="DateOfBirth" Type="Edm.DateTimeOffset" />
 <Property Name="Address" Type="Edm.String" MaxLength="200" />
 <Property Name="JobTitle" Type="Edm.String" MaxLength="200" />
 <Property Name="Salary" Type="Edm.Decimal" />
 </EntityType>
 <EntityContainer Name="test.acme.employeeinformation/v1Entities" m:IsDefaultEntityCon... [truncated]
  "endpointLocationConstants": [
    {
      "name": "MyFirstModule.EmployeeManagement_Location",
      "value": "https://hr.acmecorp.test/employeeservice/v2"
    }
  ]
}'
```

성공적인 `PUT` 호출은 `200` 상태 코드와 JSON 응답 본문을 반환합니다. 서비스를 등록하려면 `PUTPublishedEndpoints` 섹션의 정보를 사용하십시오.

```json
{
  "putPublishedEndpoints": {
    "endpoints": {
      "path": "/employeeservice/v2",
      "discoverable": true,
      "validated": true,
      "serviceVersion": {
        "version": "2.0",
        "type": "OData",
        "service": {
          "name": "test.acme.employeeinformation"
        },
        "tags": [
          {
            "name": "hr"
          },
          {
            "name": "employee"
          }
        ],
        "securityScheme": {
          "securityTypes": [
            {
              "name": "MxID",
              "marketplaceModuleID": "93457"
            }
          ],
          "mxAllowedRoles": [
            {
              "name": "User",
              "uuid": "91ca220e-9498-4d23-9d2e-90b9c19aca37"
            }
          ],
          "contracts": [
            {
              "type": "CSDL",
              "documentBaseURL": "https://hr.acmecorp.test/odata/test.acme.employeeinformation/v1/",
              "documents": [
                {
                  "isPrimary": true,
                  "uri": "metadata.xml",
                  "contents": "<?xml version="1.0" encoding="utf-8"?><edmx:Edmx Version="1.0" xmlns:edmx="http://schemas.microsoft.com/ado/2007/06/edmx" xmlns:mx="http://www.mendix.com/Protocols/MendixData">  <edmx:DataServices m:DataServiceVersion="3.0" m:MaxDataServiceVersion="3.0" xmlns:m="http://schemas.microsoft.com/ado/2007/08/dataservices/metadata">    <Schema Namespace="DefaultNamespace" xmlns="http://schemas.microsoft.com/ado/2009/11/edm"><EntityType Name="Employee"><Key><PropertyRef Name="ID" /></Key><Property Name="ID" Type="Edm.Int64" Nullable="false" mx:isAttribute="false" /><Property Name="Name" Type="Edm.String" MaxLength="200" /><Property Name="DateOfBirth" Type="Edm.DateTimeOffset" /><Property Name="Address" Type="Edm.String" MaxLength="200" /><Property Name="JobTitle" Type="Edm.String" MaxLength="200" /><Property Name="Salary" Type="Edm.Decimal" /></EntityType><EntityContainer Name="test.acme.employeeinformation/v1Entities" m:IsDefaultEntityContainer="true"><EntitySet Name="Employees" EntityType="DefaultNamespace.Employee" /></EntityContainer></Schema></edmx:DataServices></edmx:Edmx>"
                }
              ]
            }
          ]
        }
      }
    }
  },
  "putConsumedEndpoints": {
    "endpoints": [
      {
        "endpointLocation": "https://hr.acmecorp.test/employeeservice/v2",
        "consumedItems": [
          {
            "type": "EntitySet",
            "name": "ManagingEmployees",
            "namespace": "DefaultNamespace"
          }
        ]
      }
    ]
  }
}
```

## API 레퍼런스 {#api-reference}

{{< swaggerui src="/openapi-spec/catalog-registration_v5.yaml" >}}
