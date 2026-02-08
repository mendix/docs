---
title: "Mendix on Kubernetes Deploy API"
url: /apidocs-mxsdk/apidocs/private-cloud-deploy-api/
type: swagger
description: "Mendix on Kubernetes Deploy API는 Mendix Operator를 사용하여 Mendix on Kubernetes에 배포된 애플리케이션 환경을 관리합니다."
restapi: true
weight: 72
linktitle: "Kubernetes Deploy API"
---

## 소개

Mendix on Kubernetes Deploy API를 사용하면 Mendix Operator를 사용하여 Mendix on Kubernetes에 배포된 애플리케이션 환경을 관리할 수 있습니다. API를 사용하여 다음을 수행할 수 있습니다:

* 운영 체제에 맞는 구성 도구인 mxpc-cli 다운로드
* 하나 이상의 클러스터 매니페스트 파일 가져오기
* 하나 이상의 네임스페이스 매니페스트 파일 가져오기
* 클러스터 생성, 업데이트 또는 삭제
* 네임스페이스 생성, 업데이트 또는 삭제
* 하나 이상의 환경 매니페스트 파일 가져오기
* 환경 생성 또는 삭제
* 환경 업데이트 및 환경 매니페스트 변경을 통한 환경 내 앱 배포 및 관리
* 하나 이상의 애플리케이션 매니페스트 파일 가져오기

{{% alert color="info" %}}
Mendix on Kubernetes Deploy API는 연결된 클러스터에서만 사용할 수 있습니다.
{{% /alert %}}

{{% alert color="info" %}}
Global Operator 관리 네임스페이스로의 Standard Operator 변환은 아직 Deploy API에서 사용할 수 없습니다.
{{% /alert %}}

## API 사용

Mendix on Kubernetes Build API 작업을 돕기 위해 이 문서의 다음 섹션에서는 API 인증 방법, 비동기 API 호출 관리 방법, 리소스에 고유 ID를 할당할 때 유의할 사항에 대해 설명합니다.

### 인증

API 인증에는 개인용 액세스 토큰(PAT)을 사용합니다.

#### PAT 생성

PAT를 생성하려면 *Mendix 프로필(Mendix Profile)*의 [개인용 액세스 토큰(Personal Access Tokens)](/portal/user-settings/#pat) 섹션을 참조하십시오.

다음 스코프(Scope)를 선택하십시오:

* `mx:deployment:read` – `GET` 작업을 수행하기 위함
* `mx:deployment:write` – 모든 작업(`GET`, `POST`, `PUT`, `DELETE`)을 수행하기 위함

배포 패키지와 관련된 작업(생성, 업로드, 삭제 및 검색 등)의 경우 [Mendix on Kubernetes Build API: PAT 사용](/apidocs-mxsdk/apidocs/private-cloud-build-api/#using-the-pat)에 명시된 대로 PAT 토큰을 생성해야 합니다.

`{GENERATED_PAT}` 값을 안전한 위치에 보관하여 Mendix on Kubernetes API 호출을 인증하는 데 사용하십시오.

#### 스코프 설명

| 작업                        | 스코프                                           |
|----------------------------------|------------------------------------------------- |
| 네임스페이스 매니페스트 가져오기           | `mx:deployment:read`  또는 `mx:deployment:write`   |
| 네임스페이스(복수) 매니페스트 가져오기          | `mx:deployment:read`  또는 `mx:deployment:write`   |
| 클러스터 매니페스트 가져오기             | `mx:deployment:read`  또는 `mx:deployment:write`   |
| 클러스터(복수) 매니페스트 가져오기            | `mx:deployment:read`  또는 `mx:deployment:write`   |
| 클러스터 생성                   | `mx:deployment:write`                            |
| 클러스터 업데이트                   | `mx:deployment:write`                            |
| 클러스터 삭제                   | `mx:deployment:write`                            |
| 네임스페이스 생성                 | `mx:deployment:write`                            |
| 네임스페이스 업데이트                 | `mx:deployment:write`                            |
| 네임스페이스 삭제                 | `mx:deployment:write`                            |
| 환경 매니페스트 가져오기         | `mx:deployment:read`  또는 `mx:deployment:write`   |
| 다중 환경 매니페스트 가져오기| `mx:deployment:read`  또는 `mx:deployment:write`   |                         
| 환경 생성               | `mx:deployment:write`                            |
| 환경 업데이트               | `mx:deployment:write`                            |
| 환경 삭제               | `mx:deployment:write`                            |
| 앱(복수) 매니페스트 가져오기                | `mx:deployment:write` 및 `mx:app:metadata:read` |                        
| 앱 매니페스트 가져오기                | `mx:deployment:write` 및 `mx:app:metadata:read` |                              
| 작업 가져오기                          | `mx:deployment:read`  및 `mx:deployment:write`  |

#### PAT 사용

각 요청에는 값이 `MxToken {GENERATED_PAT}`인 `Authorization` 헤더가 포함되어야 합니다.

{{< figure src="/attachments/apidocs-mxsdk/apidocs/private-cloud-deploy-api/authorization-header.png" class="no-border" >}}

아래의 OpenAPI 사양을 사용하여 호출을 인증하려면 **Authorize**를 클릭하고 `MxToken {GENERATED_PAT}` 값을 사용하십시오.

### 비동기 작업 관리 {#async-jobs}

모든 리소스 조작 API 호출은 비동기적으로 처리됩니다. 응답에는 `GET /jobs/…` 호출과 함께 사용하여 비동기 작업의 상태를 가져올 수 있는 `id`가 있습니다.

각 비동기 호출은 해당 작업의 결과를 찾을 수 있는 URL을 참조하는 `Location` 헤더도 반환합니다(예: `https://privatecloud.mendixcloud.com/api/v3/jobs/59464c21-0558-47a9-8d3d-ccc7057dc359`). 이는 `GET /jobs/…`의 대안으로 사용할 수 있습니다.

`GET /jobs/…` 또는 이에 상응하는 HTTP 호출이 `"status": "finished"`가 포함된 응답을 반환하면 `GET {RESOURCE}` API 호출을 사용하여 리소스에 대한 매니페스트를 확인할 수 있습니다. 예를 들어, 클러스터를 업데이트할 때 `GET /clusters/{clusterId}`를 사용하여 클러스터 매니페스트를 확인할 수 있습니다.

### ID 할당

API는 리소스에 대해 고유한 UUID를 생성하지 않습니다. 고유해야 하는 자체 ID를 생성해야 합니다. ID가 고유하지 않으면 리소스를 생성하는 비동기 작업이 실패합니다.

## 예시

이 문서의 다음 섹션에는 API에 대한 샘플 사용 시나리오가 포함되어 있습니다.

### API를 사용하여 클러스터 및 네임스페이스 업데이트 {#update-cluster}

다음 단계에서는 클러스터를 생성하고, 네임스페이스를 등록 및 설치하고, 클러스터 구성원을 추가 또는 업데이트하고, 네임스페이스에 대해 개발 모드를 활성화합니다.

1. 인증 PAT를 설정합니다.
2. 새 클러스터에 대한 매니페스트를 준비합니다.
3. 클러스터 매니페스트를 사용하여 API 호출 `POST /clusters`를 수행하여 새 클러스터를 생성합니다.
4. [비동기 작업 관리](#async-jobs)에 설명된 프로세스를 사용하여 작업이 성공했는지 확인합니다.
5. 새 네임스페이스에 대한 매니페스트를 준비합니다.
6. 방금 생성한 클러스터의 `{clusterId}`와 네임스페이스 매니페스트를 사용하여 API 호출 `POST /clusters/{clusterId}/namespaces`를 수행하여 새 네임스페이스를 생성합니다.
7. [비동기 작업 관리](#async-jobs)에 설명된 프로세스를 사용하여 작업이 성공했는지 확인합니다.
8. `GET /cli`를 호출하여 사용 가능한 모든 CLI 버전을 검색합니다.
9. `POST/cli/…`를 호출하여 올바른 버전의 mxpc-cli를 다운로드합니다. 이 호출은 제공된 경로 및 쿼리 파라미터를 검증한 다음 올바른 버전의 mxpc-cli가 저장된 CDN URL로 리디렉션합니다.
10. mxpc-cli가 다운로드되면 명령 `./mxpc-cli installer -n new-operator -i {namespaceID} -s {secret}`을 사용하여 네임스페이스에 Mendix 오퍼레이터를 설치하고 구성합니다. `{secret}`은 네임스페이스를 생성할 때 매니페스트에 제공한 비밀(secret)입니다.
    설치 프로그램이 실행되면 네임스페이스를 사용할 준비가 된 것입니다(네임스페이스 설치됨, 에이전트 연결됨, 데이터베이스 및 스토리지 계획 구성됨, 인그레스 구성됨, 레지스트리 구성됨).
11. `GET /clusters`를 호출하여 생성된 모든 클러스터를 검색합니다. 이 호출의 응답에서 `clusterId`를 복사합니다.
12. API 호출 `POST /clusters/{clusterId}`를 수행하여 클러스터 구성원을 추가/업데이트합니다. `GET /clusters/{clusterId}`에서 이 업데이트 요청에 대한 매니페스트를 가져올 수 있습니다.
13. API 호출 `POST /clusters/{namespaceId}`를 수행하여 네임스페이스 개발 모드를 업데이트하고 `enableDevelopmentMode`를 true로 설정합니다. `GET /clusters/{namespaceId}`에서 이 업데이트 요청에 대한 매니페스트를 가져올 수 있습니다.

{{% alert color="info" %}}
필요한 경우, 클러스터/네임스페이스 업데이트 API 요청에서 `autoAcceptInvite`를 true로 설정하여 클러스터/네임스페이스 구성원에 대한 초대를 자동 수락할 수 있습니다.
{{% /alert %}}

### API를 사용하여 네임스페이스 구성원에게 사용자 지정 역할 할당 {#assign-custom-role}

다음 단계를 수행하여 클러스터를 생성하고, 네임스페이스를 등록 및 설치하고, 포털의 Cluster Overview 페이지에서 사용자 지정 역할을 추가하고, 해당 역할을 네임스페이스 구성원에게 할당하십시오:

1. 인증 PAT를 설정합니다.
2. 새 클러스터와 네임스페이스 모두에 대한 매니페스트를 준비합니다.
3. [API를 사용하여 클러스터 및 네임스페이스 업데이트](#update-cluster)의 8-11단계에 따라 네임스페이스를 구성합니다.
4. 포털의 Cluster Overview 페이지에서 사용자 지정 역할을 생성합니다. 이 역할은 포털 측에서만 생성해야 합니다.
5. POST `/clusters/{namespaceId}` API 호출을 수행하여 4단계에서 생성한 역할을 네임스페이스 구성원에게 할당합니다.
    GET `/clusters/{namespaceId}`를 통해 이 업데이트 요청에 대한 매니페스트를 얻을 수 있습니다. 네임스페이스를 업데이트할 때 네임스페이스 구성원에 대해 역할만 지정하면 됩니다. 세분화된 권한은 이미 4단계에서 생성된 역할에 포함되어 있기 때문입니다.

{{% alert color="info" %}}
필요한 경우, 클러스터 또는 네임스페이스 업데이트 API 요청에서 `autoAcceptInvite`를 true로 설정하여 클러스터 또는 네임스페이스 구성원에 대한 초대를 자동 수락할 수 있습니다.
{{% /alert %}}

### API를 사용하여 앱 다시 시작 {#restart}

다음 단계에서는 인스턴스 수를 0으로 설정한 다음 다시 필요한 인스턴스 수로 설정하여 앱을 다시 시작합니다.

1. 인증 PAT를 설정합니다.
2. `GET /apps/{appId}/namespaces/{namespaceId}/environments/{environmentId}`를 호출하여 앱 환경에 대한 환경 매니페스트를 가져옵니다.
3. 매니페스트에서 `container.instances`를 `0`으로 변경합니다.
4. 업데이트된 매니페스트를 사용하여 `PUT /apps/{appId}/namespaces/{namespaceId}/environments/{environmentId}`를 호출합니다.
5. [비동기 작업 관리](#async-jobs)에 설명된 프로세스를 사용하여 작업이 성공했는지 확인합니다.

    이 시점에서 앱이 중지되어 `appURL`을 사용하여 앱에 액세스할 수 없습니다.
6. 매니페스트에서 `container.instances`를 실행하려는 인스턴스 수로 변경합니다.
7. 업데이트된 매니페스트를 사용하여 `PUT /apps/{appId}/environments/namespaces/{namespaceId}/{environmentId}`를 호출합니다.
8. 이전과 같이 작업이 성공했는지 확인합니다.

    앱을 다시 사용할 수 있습니다.

### API를 사용하여 앱 배포 {#api-deploy}

다음 단계에서는 클러스터를 생성하고, 네임스페이스를 생성하고, 실행 중인 앱이 있는 환경을 생성합니다.

1. 인증 PAT를 설정합니다.
2. 새 클러스터에 대한 매니페스트를 준비합니다.
3. 클러스터 매니페스트를 사용하여 API 호출 `POST /clusters`를 수행하여 새 클러스터를 생성합니다.
4. [비동기 작업 관리](#async-jobs)에 설명된 프로세스를 사용하여 작업이 성공했는지 확인합니다.
5. 새 네임스페이스에 대한 매니페스트를 준비합니다.
6. 방금 생성한 클러스터의 `{clusterId}`와 네임스페이스 매니페스트를 사용하여 API 호출 `POST /clusters/{clusterId}/namespaces`를 수행하여 새 네임스페이스를 생성합니다.
7. [비동기 작업 관리](#async-jobs)에 설명된 프로세스를 사용하여 작업이 성공했는지 확인합니다.
8. `GET /cli`를 호출하여 사용 가능한 모든 CLI 버전을 검색합니다.
9. `POST/cli/…`를 호출하여 올바른 버전의 mxpc-cli를 다운로드합니다. 이 호출은 제공된 경로 및 쿼리 파라미터를 검증한 다음 올바른 버전의 mxpc-cli가 저장된 CDN URL로 리디렉션합니다.
10. mxpc-cli가 다운로드되면 명령 `./mxpc-cli installer -n new-operator -i {namespaceID} -s {secret}`을 사용하여 네임스페이스에 Mendix 오퍼레이터를 설치하고 구성합니다. `{secret}`은 네임스페이스를 생성할 때 매니페스트에 제공한 비밀(secret)입니다.
    설치 프로그램이 실행되면 네임스페이스를 사용할 준비가 된 것입니다(네임스페이스 설치됨, 에이전트 연결됨, 데이터베이스 및 스토리지 계획 구성됨, 인그레스 구성됨, 레지스트리 구성됨).
11. Mendix on Kubernetes Portal에서 `DeploymentPackage`를 생성합니다.
    [Mendix on Kubernetes Build API](/apidocs-mxsdk/apidocs/private-cloud-build-api/)를 사용하여 배포 패키지를 생성할 수 있습니다. 배포 패키지를 생성하면 `GET /apps/{appId}/packages` 응답을 사용하여 `packageId`를 검색할 수 있습니다.
12. 새 환경에 대한 매니페스트를 준비합니다.
    OpenAPI 사양 파일의 모델을 사용하거나 기존 환경의 매니페스트를 가져와서(예: `GET /apps/{appId}/namespaces/{namespaceId}/environments/{environmentId}` 호출) 필요한 부분을 변경하십시오. 방금 생성한 클러스터와 네임스페이스를 사용하여 `provider`에 `{clusterID}` 및 `{namespace}` 값을 사용하고, 방금 생성한 배포 패키지의 ID를 `packageId`로 사용하는 것을 잊지 마십시오.
13. 환경 매니페스트를 사용하여 API 호출 `POST /apps/{appId}/environments`를 수행하여 새 환경을 생성합니다.
14. [비동기 작업 관리](#async-jobs)에 설명된 프로세스를 사용하여 작업이 성공했는지 확인합니다.
15. 이제 환경의 `GET /apps/{appId}/namespaces/{namespaceId}/environments/{environmentId}`에서 반환된 `appURL`에서 애플리케이션에 액세스할 수 있습니다.

{{% alert color="info" %}}
Deploy API에서는 사용자 지정 권한(Custom permissions)에 대한 지원이 제한적입니다.
{{% /alert %}}

{{% alert color="info" %}}
API를 통해 네임스페이스에서 환경을 생성하거나 관리하려면 기술 담당자에게 네임스페이스 권한에 할당된 역할이 있어야 합니다.
{{% /alert %}}

## API 레퍼런스

{{% alert color="info" %}}
OpenAPI .yaml 파일에서 편집 불가능으로 표시된 필드는 읽기 전용 목적으로 사용됩니다. 이 필드의 값을 수정하면 무시됩니다.
{{% /alert %}}

{{< swaggerui src="/openapi-spec/private-cloud-deploy-api.yaml"  >}}
