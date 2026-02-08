---
title: "Registration API"
linktitle: "Registration API"
url: /apidocs-mxsdk/apidocs/registration-api/
description: "Registration API를 사용하면 조직의 Catalog에 서비스를 등록하고 업데이트할 수 있습니다."
weight: 50
type: swagger
---

## 소개

Registration API를 사용하면 애플리케이션, 환경 및 서비스를 등록할 수 있습니다.

이 API에는 다음이 포함됩니다:

* `POST` methods for registering new assets where a UUID is generated and returned for the asset in the response body
* `PUT` calls to update assets for existing UUIDs or create new applications and environments for new UUIDs. 
* `DELETE` calls to delete applications, environments, and endpoints.

## 인증 및 접근 권한

Registration API의 인증에는 다음이 필요합니다:

* Personal access token (PAT): For every API request you make to a Catalog API, include the following key-value pair with your headers: `Authorization: MxToken <your_Personal_Access_Token>`.

### PAT 생성

PAT 생성 방법에 대한 자세한 내용은 *사용자 설정*의 [개인 액세스 토큰](/portal/user-settings/#pat) 섹션을 참조하십시오.

생성된 값 {GENERATED_PAT}를 안전한 곳에 저장하여 API 호출 인증에 사용하십시오.

## Registration API 호출

노출된 서비스의 세부 정보를 등록하려면 다음 일련의 REST 호출을 따르십시오(다음 섹션에서 자세히 설명):

1. [Register the application](#register-application) and retrieve an application UUID.
2. Use the application UUID to [register the environment](#register-environment) and retrieve the environment UUID.
3. Use the application UUID and the environment UUID to [register services](#register-services). If needed, use the [Transform API](#transform-api) (an endpoint of the Registration API) to get your service contract in the right format before registering the service.

Registration API 사양은 동일한 경로에 대한 모든 선택적 필드, 필수 형식 및 기타 작업을 설명합니다.

## 예시 {#registration}

### 애플리케이션 등록 {#register-application}

애플리케이션을 등록하려면 다음이 필요합니다:

* Personal access token
* Application Name

요청 예시를 아래에서 확인할 수 있습니다:

```bash
curl --location --request POST 'https://catalog.mendix.com/rest/registration/v5/applications' \
--header 'Content-Type: application/json' \
--header 'Authorization: MxToken <your_Personal_Access_Token>' \
--data-raw '{"name": "My-Application"}'
```

A successful `POST` call results in a `201` status code and a JSON response body that includes the details you provided about the application, the location of an application icon, and a unique ID:

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

* Personal access token
* `application_UUID`
* Environment `Name`
* Environment `Location`
* Environment `Type`

이 필드에 제공할 수 있는 항목과 제공할 수 없는 항목에 대한 자세한 내용은 아래 [API 참조](#api-reference) 섹션을 참조하십시오.

요청 예시를 아래에서 확인할 수 있습니다:

```bash
curl --location --request POST 'https://catalog.mendix.com/rest/registration/v5/applications/{application_UUID}/environments' \
--header 'Content-Type: application/json' \
--header 'Authorization: MxToken <your_Personal_Access_Token>' \
--data-raw '{"name": "My-Environment", "location": "https://my-deployed-application-url.com", "type": "Production"}'
```

A successful `POST` call results in a `201` status code and a JSON response body that includes the details you provided about the environment, along with a unique ID:

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

* Personal access token
* `application_UUID`
* `environment_UUID`
* Service `Path`, `Name`, and `ContractType`
* Service version `Version` and `Security Scheme`
* Service `Contract` with `Type` and `Value`

{{% alert color="warning" %}}
Once a version is released to production, any updated contracts should be given a new version. This applies even if you are only registering for a non-production environment.

This is because changes to a particular version of a published OData service are reflected in the entities and attributes available through the Catalog, for every environment for which the service is published. For example, if you have version 1.0.0 published to both non-production and production environments, any changes you make to version 1.0.0 of the service in the non-production environment are also reflected in the service in production.
{{% /alert %}}

이 필드에 제공할 수 있는 항목과 제공할 수 없는 항목에 대한 자세한 내용은 아래 [API 참조](#api-reference) 섹션을 참조하십시오.

요청 예시를 아래에서 확인할 수 있습니다:

```bash
curl --location --request PUT 'https://catalog.mendix.com/rest/registration/v5/applications/{application_UUID}/environments/{environment_UUID}/published-endpoints' \
--header 'Content-Type: application/json' \
--header 'Authorization: MxToken <your_Personal_Access_Token>'\
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
                "contents": "<?xml version=\"1.0\" encoding=\"utf-8\"?><edmx:Edmx Version=\"1.0\" xmlns:edmx=\"http://schemas.microsoft.com/ado/2007/06/edmx\" xmlns:mx=\"http://www.mendix.com/Protocols/MendixData\">  <edmx:DataServices m:DataServiceVersion=\"3.0\" m:MaxDataServiceVersion=\"3.0\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\">    <Schema Namespace=\"DefaultNamespace\" xmlns=\"http://schemas.microsoft.com/ado/2009/11/edm\"><EntityType Name=\"Employee\"><Key><PropertyRef Name=\"ID\" /></Key><Property Name=\"ID\" Type=\"Edm.Int64\" Nullable=\"false\" mx:isAttribute=\"false\" /><Property Name=\"Name\" Type=\"Edm.String\" MaxLength=\"200\" /><Property Name=\"DateOfBirth\" Type=\"Edm.DateTimeOffset\" /><Property Name=\"Address\" Type=\"Edm.String\" MaxLength=\"200\" /><Property Name=\"JobTitle\" Type=\"Edm.String\" MaxLength=\"200\" /><Property Name=\"Salary\" Type=\"Edm.Decimal\" /></EntityType><EntityContainer Name=\"test.acme.employeeinformation/v1Entities\" m:IsDefaultEntityContainer=\"true\"><EntitySet Name=\"Employees\" EntityType=\"DefaultNamespace.Employee\" /></EntityContainer></Schema></edmx:DataServices></edmx:Edmx>"
              },
              {
                "isPrimary": false,
                "uri": "servicefeed.xml",
                "contents": "<?xml version=\"1.0\" encoding=\"utf-8\"?><service xmlns:atom=\"http://www.w3.org/2005/Atom\" xml:base=\"https://hr.acmecorp.test/odata/test.acme.employeeinformation/v1/\" xmlns=\"http://www.w3.org/2007/app\"><workspace><atom:title>Default</atom:title><collection href=\"Employees\"><atom:title>Employees</atom:title></collection>  </workspace></service>"
              }
            ]
          }
        ]
      }
    }
  ]
}'''
```

{{% alert color="info" %}} If you are receiving a `400` response because your contract metadata is getting rejected, use the [Transform API](#transform-api) to get the contract in the right format. If you want to register more than one service for the same application and environment at once, add another object to the `Endpoints` list in the request body.{{% /alert%}}

A successful `PUT` call results in a `200` status code and a JSON response body that includes the details you provided about the service or services, along with a unique UUID and some other details:

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
Completing the `PUT` operation call more than once overwrites the details for all the published endpoints at the specified environment. If there is a collection of endpoints on the environment, you can create, update, and delete different endpoints all in one `PUT` call.
{{% /alert %}}

#### 환경 이름 변경 시 동작

호스팅된 환경의 URL을 업데이트하는 것은 가능합니다(드물지만). 재배포 시 루트 URL이 업데이트되고, 해당 환경에 등록된 엔드포인트의 위치가 업데이트됩니다.

### Transform API를 사용하여 서비스 세부 정보 준비 {#transform-api}

Transform API는 Registration API의 엔드포인트입니다. Mendix 앱이 생성하는 *dependencies.json* 파일을 Registration API가 서비스를 등록하는 데 필요한 구조로 변환합니다.

{{% alert color="info" %}}These optional fields are not currently converted by the Transform API: `SecurityClassification`, `Discoverable`, `Validated`, and `Tags`.{{% /alert %}}

Registration API의 Transform 엔드포인트를 호출하려면 다음이 필요합니다:

* Your app's *dependencies.json* file converted to an escaped JSON string

    {{% alert color="info" %}}You can find your *dependencies.json* file in the **deployment** > **model** folder of your Mendix application.{{% /alert %}}

* Endpoint location `Name`
* Endpoint location `Value`

    {{% alert color="info" %}}You can find these two values in the *metadata.json* file for your exposed service. They are in an array called `Constants`, and named `Name` and `DefaultValue`.{{% /alert %}}

    {{% alert color="info" %}}For more details on what can and cannot be provided in these fields, [API Reference](#api-reference) section below.{{% /alert %}}

*dependencies.json* 파일을 변환하는 요청 예시를 아래에서 확인할 수 있습니다:

```bash
curl --location --request POST 'https://catalog.mendix.com/rest/registration/v5/transform/dependenciesjson' \
--header 'Content-Type: application/json' \
--header 'Authorization: MxToken <your_Personal_Access_Token>' \
--data-raw '{
  "dependenciesJsonString": "{ \"schemaVersion\": \"1.3\", \"appName\": \"HR Acme Corp\", \"published\": [ { \"name\": \"test.acme.employeeinformation\", \"version\": \"2.0\", \"path\": \"/employeeservice/v2\", \"serviceType\": \"OData 3.0\", \"contracts\": [ { \"type\": \"ServiceFeed\", \"value\": \"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\\r\\n<service xmlns=\\\"http://www.w3.org/2007/app\\\" xmlns:atom=\\\"http://www.w3.org/2005/Atom\\\" xml:base=\\\"https://hr.acmecorp.test/odata/test.acme.employeeinformation/v1/\\\">\\r\\n <workspace>\\r\\n <atom:title>Default</atom:title>\\r\\n <collection href=\\\"Employees\\\">\\r\\n <atom:title>Employees</atom:title>\\r\\n </collection>\\r\\n </workspace>\\r\\n</service>\" }, { \"type\": \"Metadata\", \"value\": \"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\\r\\n<edmx:Edmx xmlns:edmx=\\\"http://schemas.microsoft.com/ado/2007/06/edmx\\\" xmlns:mx=\\\"http://www.mendix.com/Protocols/MendixData\\\" Version=\\\"1.0\\\">\\r\\n <edmx:DataServices xmlns:m=\\\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\\\" m:DataServiceVersion=\\\"3.0\\\" m:MaxDataServiceVersion=\\\"3.0\\\">\\r\\n <Schema xmlns=\\\"http://schemas.microsoft.com/ado/2009/11/edm\\\" Namespace=\\\"DefaultNamespace\\\">\\r\\n <EntityType Name=\\\"Employee\\\">\\r\\n <Key>\\r\\n <PropertyRef Name=\\\"ID\\\" />\\r\\n </Key>\\r\\n <Property Name=\\\"ID\\\" Type=\\\"Edm.Int64\\\" Nullable=\\\"false\\\" mx:isAttribute=\\\"false\\\" />\\r\\n <Property Name=\\\"Name\\\" Type=\\\"Edm.String\\\" MaxLength=\\\"200\\\" />\\r\\n <Property Name=\\\"DateOfBirth\\\" Type=\\\"Edm.DateTimeOffset\\\" />\\r\\n <Property Name=\\\"Address\\\" Type=\\\"Edm.String\\\" MaxLength=\\\"200\\\" />\\r\\n <Property Name=\\\"JobTitle\\\" Type=\\\"Edm.String\\\" MaxLength=\\\"200\\\" />\\r\\n <Property Name=\\\"Salary\\\" Type=\\\"Edm.Decimal\\\" />\\r\\n </EntityType>\\r\\n <EntityContainer Name=\\\"test.acme.employeeinformation/v1Entities\\\" m:IsDefaultEntityContainer=\\\"true\\\">\\r\\n <EntitySet Name=\\\"Employees\\\" EntityType=\\\"DefaultNamespace.Employee\\\" />\\r\\n </EntityContainer>\\r\\n </Schema>\\r\\n </edmx:DataServices>\\r\\n</edmx:Edmx>\" } ], \"security\": { \"types\": [ { \"type\": \"MxID\", \"authenticationModuleId\": \"a4f7847b-9562-4b5a-adc2-4a0bf41cc534\" } ], \"allowedRoles\": [ { \"name\": \"User\", \"id\": \"91ca220e-9498-4d23-9d2e-90b9c19aca37\" } ] } } ], \"consumed\": [ { \"name\": \"test.acme.employeemanagement\", \"version\": \"1.0\", \"serviceType\": \"OData 3.0\", \"constant\": \"MyFirstModule.EmployeeManagement_Location\", \"uses\": [{ \"type\": \"entity\", \"name\": \"ManagingEmployees\" }] } ] }",
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
                  "contents": "<?xml version=\"1.0\" encoding=\"utf-8\"?><edmx:Edmx Version=\"1.0\" xmlns:edmx=\"http://schemas.microsoft.com/ado/2007/06/edmx\" xmlns:mx=\"http://www.mendix.com/Protocols/MendixData\">  <edmx:DataServices m:DataServiceVersion=\"3.0\" m:MaxDataServiceVersion=\"3.0\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\">    <Schema Namespace=\"DefaultNamespace\" xmlns=\"http://schemas.microsoft.com/ado/2009/11/edm\"><EntityType Name=\"Employee\"><Key><PropertyRef Name=\"ID\" /></Key><Property Name=\"ID\" Type=\"Edm.Int64\" Nullable=\"false\" mx:isAttribute=\"false\" /><Property Name=\"Name\" Type=\"Edm.String\" MaxLength=\"200\" /><Property Name=\"DateOfBirth\" Type=\"Edm.DateTimeOffset\" /><Property Name=\"Address\" Type=\"Edm.String\" MaxLength=\"200\" /><Property Name=\"JobTitle\" Type=\"Edm.String\" MaxLength=\"200\" /><Property Name=\"Salary\" Type=\"Edm.Decimal\" /></EntityType><EntityContainer Name=\"test.acme.employeeinformation/v1Entities\" m:IsDefaultEntityContainer=\"true\"><EntitySet Name=\"Employees\" EntityType=\"DefaultNamespace.Employee\" /></EntityContainer></Schema></edmx:DataServices></edmx:Edmx>"
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

## API 참조 {#api-reference}

{{< swaggerui src="/openapi-spec/catalog-registration_v5.yaml" >}}
