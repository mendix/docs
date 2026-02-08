---
title: "Mendix on Kubernetes Build API"
url: /apidocs-mxsdk/apidocs/private-cloud-build-api/
type: swagger
description: "Mendix on Kubernetes Build API는 Mendix on Kubernetes에 배포된 환경에서 나중에 사용할 수 있는 배포 패키지를 관리합니다."
restapi: true
weight: 70
linktitle: "Kubernetes Build API"
---

## 소개

Mendix on Kubernetes Build API를 사용하면 Mendix on Kubernetes에 배포된 환경에서 나중에 사용할 수 있는 배포 패키지를 관리할 수 있습니다. 이 API를 사용하여 다음 작업을 수행할 수 있습니다:

* 애플리케이션의 모든 배포 패키지 조회
* 패키지 ID를 기반으로 단일 배포 패키지 조회
* 애플리케이션에 배포 패키지 업로드
* 브랜치 및 리비전을 기반으로 배포 패키지 생성
* 배포 패키지 삭제

{{% alert color="info" %}}
The Mendix on Kubernetes Build API is available only for connected clusters.
{{% /alert %}}

## API 사용

Mendix on Kubernetes Build API를 사용하는 데 도움이 되도록, 이 문서의 다음 섹션에서는 API 인증 방법과 비동기 API 호출 관리 방법을 설명합니다.

### 인증

API 인증은 개인 액세스 토큰(PAT)을 사용합니다.

#### PAT 생성

Mendix 프로필의 **개발자 설정** 섹션에서 PAT를 생성할 수 있습니다. 자세한 내용은 *Mendix 프로필*의 [개인 액세스 토큰](/portal/user-settings/#pat) 섹션을 참조하십시오.

다음 스코프를 선택하십시오:

* `mx:privatecloud-build:read` – to perform `GET` operations
* `mx:privatecloud-build:write` – to perform all operations (`GET`, `POST` and `DELETE`)
* `mx:modelrepository:write` – under `Model Repository` – to perform build package operation 

`{GENERATED_PAT}`를 안전한 곳에 저장하여 Mendix on Kubernetes API 호출 인증에 사용하십시오.

#### 스코프 설명

| Operation                    | Scopes                                                        |
|-----------------------------|---------------------------------------------------------------|
| Build deployment package   | `mx:privatecloud-build:write` and `mx:modelrepository:write`  |
| Upload deployment package   | `mx:privatecloud-build:write`                                 |
| Delete deployment package   | `mx:privatecloud-build:write`                                 |
| Get deployment package      | `mx:privatecloud-build:read` or `mx:privatecloud-build:write` |
| Get deployment package list | `mx:privatecloud-build:read` or `mx:privatecloud-build:write` |
| Get Job                     | `mx:privatecloud-build:read` or `mx:privatecloud-build:write` |

#### PAT 사용 {#using-the-pat}

각 요청에는 `MxToken {GENERATED_PAT}` 값을 가진 `Authorization` 헤더가 포함되어야 합니다.

{{< figure src="/attachments/apidocs-mxsdk/apidocs/private-cloud-deploy-api/authorization-header.png" class="no-border" >}}

아래의 Open API 사양을 사용하여 호출을 인증하려면 **Authorize**를 클릭하고 `MxToken {GENERATED_PAT}` 값을 사용하십시오.

### 비동기 작업 관리 {#async-jobs}

모든 리소스 조작 API 호출은 비동기적으로 처리됩니다. In the response, there is an `id` which you can use with the `GET /jobs/…` call to get the status of the asynchronous job.

Each asynchronous call will also return a `Location` header that references the URL where the result of that job can be found, for example, `https://privatecloud.mendixcloud.com/api/v3/jobs/59464c21-0558-47a9-8d3d-ccc7057dc359`. This can be used as an alternative to `GET /jobs/…`.

Once `GET /jobs/…` or the equivalent HTTP call returns a response with `"status": "finished"`, you can verify the manifest for the resource by using a `GET {RESOURCE}` API call. For example, when updating a cluster, you can use `GET /clusters/{clusterId}` to verify the cluster manifest.

## 예시

이 문서의 다음 섹션에는 API의 샘플 사용 시나리오가 포함되어 있습니다.

{{% alert color="info" %}}
Please note that the attribute values in API requests are case-sensitive. Make sure that the input requests are entered correctly according to the specification file.
{{% /alert %}}

### API를 사용하여 배포 패키지 빌드, 다운로드 및 삭제

다음 단계에서는 배포 패키지를 생성하고, 조회하고, `URL`을 새로 고치고, 다운로드하고, 삭제한 후 마지막으로 애플리케이션의 사용 가능한 모든 배포 패키지를 나열합니다.

1. Set up your authentication PAT.
2. Call `GET /apps/{appId}/packages` to retrieve all the deployment packages in the application. 
3. Prepare the JSON request for your deployment package, as seen in the OpenAPI specification file.
4. Make the API call `POST /apps/{appId}/packages/build` using the deployment package JSON request to initiate the build of a new deployment package.
5. Verify that the job is successful using the process described in [Managing Asynchronous Jobs](#async-jobs). 
6. Call `GET /apps/{appId}/packages` to retrieve all the packages in the application. 
7. Once the job that you launched in step 4 is successful, you will see a `id` in the response from Step 6. You can then call `GET /apps/{appId}/packages/{id}` to get the deployment package details.
    The same `id` can the be used in step 12 from the [DeployAPI](/apidocs-mxsdk/apidocs/private-cloud-deploy-api/#restart) documentation.
8. Call `GET /apps/{appId}/packages` to retrieve all the deployment packages in the application. You should see the previously created deployment package in the list.
9. If you want to download the deployment package locally, you can use the location URL present in the response from step 7. The URL has a lifetime of 15 minutes, so if more than 15 minutes have passed since the creation of the deployment package, you must request a new URL by calling `GET /apps/{appId}/packages/{id}?url=true`.
10. Call `DELETE /apps/{appId}/id`, where you can get the package ID value from step 7.
11. Verify that the job is successful using the process described in [Managing Asynchronous Jobs](#async-jobs). 
12. Call `GET /apps/{appId}/packages` to retrieve all the deployment packages in the application. The deployment package should be removed from the list.

{{% alert color="info" %}}
If you are trying to build a deployment package for the `Main line` and the build operation fails, try setting the branch to `trunk` in the JSON request body for the Build Deployment Package endpoint.
{{% /alert %}}

### API를 사용하여 배포 패키지 업로드

API를 사용하여 배포 패키지를 업로드하려면 아래 단계를 따르십시오.

1. Set up your authentication PAT.
2. Prepare the `multipart/form-data` request for your deployment package, as seen in the OpenAPI specification file. The `file` indicates the *.mda* file of the deployment package that you want to upload, and `fileName` represents the name with which the deployment package will be displayed in the Mendix on Kubernetes Portal. If you do not provide the *.mda* extension to the *filename*, it is added automatically.
3. Make the API call `POST /apps/{appId}/packages` using the request created in the previous step to upload the new deployment package.
4. Verify that the job is successful using the process described in [Managing Asynchronous Jobs](#async-jobs).
5. Once the previous job is successful, you will see a `id` in the response. You can then call `GET /apps/{appId}/packages/{id}` to get the deployment package details and verify the uploaded file.
    You can use the same `id` when deploying an app through the [Mendix on Kubernetes Deploy API](/apidocs-mxsdk/apidocs/private-cloud-deploy-api/#api-deploy).

## API 참조

{{< swaggerui src="/openapi-spec/private-cloud-build-api.yaml"  >}}
