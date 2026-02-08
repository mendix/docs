---
title: "Mendix on Kubernetes Build API"
url: /apidocs-mxsdk/apidocs/private-cloud-build-api/
type: swagger
description: "Mendix on Kubernetes Build API는 나중에 Mendix on Kubernetes에 배포된 환경에서 사용할 수 있는 배포 패키지를 관리합니다."
restapi: true
weight: 70
linktitle: "Kubernetes Build API"
---

## 소개

Mendix on Kubernetes Build API를 사용하면 나중에 Mendix on Kubernetes에 배포된 환경에서 사용할 수 있는 배포 패키지를 관리할 수 있습니다. API를 사용하여 다음을 수행할 수 있습니다:

* 애플리케이션의 모든 배포 패키지 검색
* 패키지 ID를 기반으로 단일 배포 패키지 검색
* 애플리케이션에 배포 패키지 업로드
* 브랜치 및 리비전을 기반으로 배포 패키지 생성
* 배포 패키지 삭제

{{% alert color="info" %}}
Mendix on Kubernetes Build API는 연결된 클러스터에서만 사용할 수 있습니다.
{{% /alert %}}

## API 사용

Mendix on Kubernetes Build API 작업을 돕기 위해 이 문서의 다음 섹션에서는 API 인증 방법과 비동기 API 호출 관리 방법에 대해 설명합니다.

### 인증

API 인증에는 개인용 액세스 토큰(PAT)을 사용합니다.

#### PAT 생성

Mendix 프로필의 **Developer Settings** 섹션에서 PAT를 생성할 수 있습니다. 자세한 내용은 *Mendix 프로필(Mendix Profile)*의 [개인용 액세스 토큰(Personal Access Tokens)](/portal/user-settings/#pat) 섹션을 참조하십시오.

다음 스코프(Scope)를 선택하십시오:

* `mx:privatecloud-build:read` – `GET` 작업을 수행하기 위함
* `mx:privatecloud-build:write` – 모든 작업(`GET`, `POST`, `DELETE`)을 수행하기 위함
* `mx:modelrepository:write` – `Model Repository` 아래 – 패키지 빌드 작업을 수행하기 위함

`{GENERATED_PAT}`를 안전한 위치에 보관하여 Mendix on Kubernetes API 호출을 인증하는 데 사용하십시오.

#### 스코프 설명

| 작업                    | 스코프                                                        |
|-----------------------------|---------------------------------------------------------------|
| 배포 패키지 빌드   | `mx:privatecloud-build:write` 및 `mx:modelrepository:write`  |
| 배포 패키지 업로드   | `mx:privatecloud-build:write`                                 |
| 배포 패키지 삭제   | `mx:privatecloud-build:write`                                 |
| 배포 패키지 가져오기      | `mx:privatecloud-build:read` 또는 `mx:privatecloud-build:write` |
| 배포 패키지 목록 가져오기 | `mx:privatecloud-build:read` 또는 `mx:privatecloud-build:write` |
| 작업 가져오기                     | `mx:privatecloud-build:read` 또는 `mx:privatecloud-build:write` |

#### PAT 사용 {#using-the-pat}

각 요청에는 값이 `MxToken {GENERATED_PAT}`인 `Authorization` 헤더가 포함되어야 합니다.

{{< figure src="/attachments/apidocs-mxsdk/apidocs/private-cloud-deploy-api/authorization-header.png" class="no-border" >}}

아래의 OpenAPI 사양을 사용하여 호출을 인증하려면 **Authorize**를 클릭하고 `MxToken {GENERATED_PAT}` 값을 사용하십시오.

### 비동기 작업 관리 {#async-jobs}

모든 리소스 조작 API 호출은 비동기적으로 처리됩니다. 응답에는 `GET /jobs/…` 호출과 함께 사용하여 비동기 작업의 상태를 가져올 수 있는 `id`가 있습니다.

각 비동기 호출은 해당 작업의 결과를 찾을 수 있는 URL을 참조하는 `Location` 헤더도 반환합니다(예: `https://privatecloud.mendixcloud.com/api/v3/jobs/59464c21-0558-47a9-8d3d-ccc7057dc359`). 이는 `GET /jobs/…`의 대안으로 사용할 수 있습니다.

`GET /jobs/…` 또는 이에 상응하는 HTTP 호출이 `"status": "finished"`가 포함된 응답을 반환하면 `GET {RESOURCE}` API 호출을 사용하여 리소스에 대한 매니페스트를 확인할 수 있습니다. 예를 들어, 클러스터를 업데이트할 때 `GET /clusters/{clusterId}`를 사용하여 클러스터 매니페스트를 확인할 수 있습니다.

## 예시

이 문서의 다음 섹션에는 API에 대한 샘플 사용 시나리오가 포함되어 있습니다.

{{% alert color="info" %}}
API 요청의 속성 값은 대소문자를 구분합니다. 입력 요청이 사양 파일에 따라 올바르게 입력되었는지 확인하십시오.
{{% /alert %}}

### API를 사용하여 배포 패키지 빌드, 다운로드 및 삭제

다음 단계에서는 배포 패키지를 생성, 검색, `URL` 새로 고침, 다운로드, 삭제한 다음 마지막으로 애플리케이션의 사용 가능한 모든 배포 패키지를 나열합니다.

1. 인증 PAT를 설정합니다.
2. `GET /apps/{appId}/packages`를 호출하여 애플리케이션의 모든 배포 패키지를 검색합니다.
3. OpenAPI 사양 파일에 표시된 대로 배포 패키지에 대한 JSON 요청을 준비합니다.
4. 배포 패키지 JSON 요청을 사용하여 API 호출 `POST /apps/{appId}/packages/build`를 수행하여 새 배포 패키지 빌드를 시작합니다.
5. [비동기 작업 관리](#async-jobs)에 설명된 프로세스를 사용하여 작업이 성공했는지 확인합니다.
6. `GET /apps/{appId}/packages`를 호출하여 애플리케이션의 모든 패키지를 검색합니다.
7. 4단계에서 시작한 작업이 성공하면 6단계의 응답에 `id`가 표시됩니다. 그런 다음 `GET /apps/{appId}/packages/{id}`를 호출하여 배포 패키지 세부 정보를 가져올 수 있습니다.
    동일한 `id`를 [DeployAPI](/apidocs-mxsdk/apidocs/private-cloud-deploy-api/#restart) 문서의 12단계에서 사용할 수 있습니다.
8. `GET /apps/{appId}/packages`를 호출하여 애플리케이션의 모든 배포 패키지를 검색합니다. 목록에서 이전에 생성한 배포 패키지를 볼 수 있어야 합니다.
9. 배포 패키지를 로컬로 다운로드하려면 7단계의 응답에 있는 위치 URL을 사용할 수 있습니다. URL의 유효 기간은 15분이므로 배포 패키지 생성 후 15분 이상 경과한 경우 `GET /apps/{appId}/packages/{id}?url=true`를 호출하여 새 URL을 요청해야 합니다.
10. `DELETE /apps/{appId}/id`를 호출합니다(여기서 패키지 ID 값은 7단계에서 얻을 수 있음).
11. [비동기 작업 관리](#async-jobs)에 설명된 프로세스를 사용하여 작업이 성공했는지 확인합니다.
12. `GET /apps/{appId}/packages`를 호출하여 애플리케이션의 모든 배포 패키지를 검색합니다. 배포 패키지가 목록에서 제거되어야 합니다.

{{% alert color="info" %}}
`Main line`에 대한 배포 패키지를 빌드하려고 하는데 빌드 작업이 실패하면 배포 패키지 빌드 엔드포인트의 JSON 요청 본문에서 브랜치를 `trunk`로 설정해 보십시오.
{{% /alert %}}

### API를 사용하여 배포 패키지 업로드

아래 단계에 따라 API를 사용하여 배포 패키지를 업로드하십시오.

1. 인증 PAT를 설정합니다.
2. OpenAPI 사양 파일에 표시된 대로 배포 패키지에 대한 `multipart/form-data` 요청을 준비합니다. `file`은 업로드하려는 배포 패키지의 *.mda* 파일을 나타내며 `fileName`은 Mendix on Kubernetes Portal에 표시될 배포 패키지의 이름을 나타냅니다. *filename*에 *.mda* 확장자를 제공하지 않으면 자동으로 추가됩니다.
3. 이전 단계에서 생성한 요청을 사용하여 API 호출 `POST /apps/{appId}/packages`를 수행하여 새 배포 패키지를 업로드합니다.
4. [비동기 작업 관리](#async-jobs)에 설명된 프로세스를 사용하여 작업이 성공했는지 확인합니다.
5. 이전 작업이 성공하면 응답에 `id`가 표시됩니다. 그런 다음 `GET /apps/{appId}/packages/{id}`를 호출하여 배포 패키지 세부 정보를 가져오고 업로드된 파일을 확인할 수 있습니다.
    [Mendix on Kubernetes Deploy API](/apidocs-mxsdk/apidocs/private-cloud-deploy-api/#api-deploy)를 통해 앱을 배포할 때 동일한 `id`를 사용할 수 있습니다.

## API 레퍼런스

{{< swaggerui src="/openapi-spec/private-cloud-build-api.yaml"  >}}
