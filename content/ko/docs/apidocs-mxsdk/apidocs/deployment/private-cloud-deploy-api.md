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

Mendix on Kubernetes Deploy API를 사용하면 Mendix Operator를 사용하여 Mendix on Kubernetes에 배포된 애플리케이션 환경을 관리할 수 있습니다. 이 API를 사용하여 다음 작업을 수행할 수 있습니다:

* Download the configuration tool, mxpc-cli, for your operating system
* Get the manifest file of one or more clusters
* Get the manifest file of one or more namespaces 
* Create, update, or delete a cluster
* Create, update, or delete a namespace
* Get the manifest file of one or more environments
* Create or delete an environment
* Update an environment and deploy and manage an app in an environment through changes to the environment manifest
* Get the manifest file of one or more applications

{{% alert color="info" %}}
The Mendix on Kubernetes Deploy API is for connected clusters only.
{{% /alert %}}

{{% alert color="info" %}}
The Standard Operator conversion to Global Operator managed namespace is not yet available in Deploy API.
{{% /alert %}}

## API 사용

Mendix on Kubernetes Build API를 사용하는 데 도움이 되도록, 이 문서의 다음 섹션에서는 API 인증 방법, 비동기 API 호출 관리 방법 및 리소스에 고유 ID를 할당할 때 유의할 사항을 설명합니다.

### 인증

API 인증은 개인 액세스 토큰(PAT)을 사용합니다.

#### PAT 생성

PAT를 생성하려면 *Mendix 프로필*의 [개인 액세스 토큰](/portal/user-settings/#pat) 섹션을 참조하십시오.

다음 스코프를 선택하십시오:

* `mx:deployment:read` – to perform `GET` operations
* `mx:deployment:write` – to perform all operations (`GET`, `POST`, `PUT`, and `DELETE`)

For operations related to deployment packages (such as Create, Upload, Delete, and Retrieve), you need to create PAT tokens as specified in [Mendix on Kubernetes Build API: Using the PAT](/apidocs-mxsdk/apidocs/private-cloud-build-api/#using-the-pat).

`{GENERATED_PAT}` 값을 안전한 곳에 저장하여 Mendix on Kubernetes API 호출 인증에 사용하십시오.

#### 스코프 설명

| Operation                        | Scopes                                           |
|----------------------------------|------------------------------------------------- |
| Get namespace manifest           | `mx:deployment:read`  or `mx:deployment:write`   |
| Get namespaces manifest          | `mx:deployment:read`  or `mx:deployment:write`   |
| Get cluster manifest             | `mx:deployment:read`  or `mx:deployment:write`   |
| Get clusters manifest            | `mx:deployment:read`  or `mx:deployment:write`   |
| Create cluster                   | `mx:deployment:write`                            |
| Update cluster                   | `mx:deployment:write`                            |
| Delete cluster                   | `mx:deployment:write`                            |
| Create namespace                 | `mx:deployment:write`                            |
| Update namespace                 | `mx:deployment:write`                            |
| Delete namespace                 | `mx:deployment:write`                            |
| Get environment manifest         | `mx:deployment:read`  or `mx:deployment:write`   |
| Get multiple environment manifest| `mx:deployment:read`  or `mx:deployment:write`   |                         
| Create environment               | `mx:deployment:write`                            |
| Update environment               | `mx:deployment:write`                            |
| Delete environment               | `mx:deployment:write`                            |
| Get apps manifest                | `mx:deployment:write` and `mx:app:metadata:read` |                        
| Get app manifest                | `mx:deployment:write` and `mx:app:metadata:read` |                              
| Get job                          | `mx:deployment:read`  and `mx:deployment:write`  |

#### PAT 사용

각 요청에는 `MxToken {GENERATED_PAT}` 값을 가진 `Authorization` 헤더가 포함되어야 합니다.

{{< figure src="/attachments/apidocs-mxsdk/apidocs/private-cloud-deploy-api/authorization-header.png" class="no-border" >}}

To authenticate calls when using the Open API specification below, click **Authorize** and use the value `MxToken {GENERATED_PAT}`.

### 비동기 작업 관리 {#async-jobs}

모든 리소스 조작 API 호출은 비동기적으로 처리됩니다. In the response, there is an `id` which you can use with the `GET /jobs/…` call to get the status of the asynchronous job.

Each asynchronous call will also return a `Location` header that references the URL where the result of that job can be found, for example, `https://privatecloud.mendixcloud.com/api/v3/jobs/59464c21-0558-47a9-8d3d-ccc7057dc359`. This can be used as an alternative to `GET /jobs/…`.

Once `GET /jobs/…` or the equivalent HTTP call returns a response with `"status": "finished"`, you can verify the manifest for the resource by using a `GET {RESOURCE}` API call. For example, when updating a cluster, you can use `GET /clusters/{clusterId}` to verify the cluster manifest.

### ID 할당

API는 리소스에 대한 고유 UUID를 생성하지 않습니다. 고유해야 하는 자체 ID를 생성해야 합니다. If the IDs are not unique, the asynchronous job which creates the resource will fail.

## 예시

이 문서의 다음 섹션에는 API의 샘플 사용 시나리오가 포함되어 있습니다.

### API를 사용하여 클러스터 및 네임스페이스 업데이트 {#update-cluster}

다음 단계에서는 클러스터를 생성하고, register and install a namespace, add or update a cluster member, and enable development mode for the namespace.

1. Set up your authentication PAT.
2. Prepare a manifest for your new cluster.
3. Make the API call `POST /clusters` using the cluster manifest to create a new cluster. 
4. Verify that the job is successful using the process described in [Managing Asynchronous Jobs](#async-jobs).
5. Prepare a manifest for your new namespace. 
6. Make the API call `POST /clusters/{clusterId}/namespaces` using the `{clusterId}` of the cluster you just created and your namespace manifest to create a new namespace. 
7. Verify that the job is successful using the process described in [Managing Asynchronous Jobs](#async-jobs).
8. Call `GET /cli` to retrieve all the available CLI versions.
9. Call `POST/cli/…` to download the correct version on mxpc-cli. This call will validate the provided path and query parameters and then redirect you to the CDN URL where the correct version of mxpc-cli is stored.
10. After mxpc-cli has been downloaded use the command `./mxpc-cli installer -n new-operator -i {namespaceID} -s {secret}` to install and configure the Mendix operator in the namespace. `{secret}` is the secret you provided in the manifest when creating the namespace.
    Once the installer has run, the namespace is ready to use (namespace installed, agent connected, database and store plans configured, ingress configured, registry configured).
11. Call `GET /clusters` to retrieve all the clusters that have been created. Copy the `clusterId` from the response of this call.
12. Make an API call `POST /clusters/{clusterId}` to add/update the cluster member. You can get the manifest for this update request from `GET /clusters/{clusterId}`.
13. Make an API call `POST /clusters/{namespaceId}` to update the namespace development mode and set `enableDevelopmentMode` to true. You can get the manifest for this update request from `GET /clusters/{namespaceId}`.

{{% alert color="info" %}}
If required, the invitation for the cluster/namespace member can be auto-accepted by setting `autoAcceptInvite` to true in the update cluster/namespace API request.
{{% /alert %}}

### API를 사용하여 네임스페이스 멤버에게 사용자 정의 역할 할당 {#assign-custom-role}

Perform the following steps to create a cluster, register and install a namespace, add a custom role in the Cluster Overview page in the portal, and assign the role to the namespace member:

1. Set up your authentication PAT.
2. Prepare the manifest for both your new cluster and namespace.
3. Configure the namespace by following steps 8-11 of [Using the API to Update the Cluster and Namespace](#update-cluster).
4. Create a custom role in the Cluster Overview page in the portal. This role must be created only on the Portal side.
5. Make a POST `/clusters/{namespaceId}` API call to assign the role that you created in step 4 to the namespace member.
    You can obtain the manifest for this update request through GET `/clusters/{namespaceId}`. When updating the namespace, only the role needs to be specified for the namespace member, as the fine-grained permissions are already included in the role created in step 4.

{{% alert color="info" %}}
If required, the invitation for the cluster or namespace member can be auto-accepted by setting `autoAcceptInvite` to true in the update cluster or namespace API request.
{{% /alert %}}

### API를 사용하여 앱 재시작 {#restart}

다음 단계에서는 앱을 재시작합니다 by setting the number of instances to zero and then setting it back to the number of instances required.

1. Set up your authentication PAT.
2. Call `GET /apps/{appId}/namespaces/{namespaceId}/environments/{environmentId}` to get the environment manifest for your app environment.
3. Change the `container.instances` to `0` in the manifest.
4. Call `PUT /apps/{appId}/namespaces/{namespaceId}/environments/{environmentId}` using the updated manifest.
5. Verify that the job is successful using the process described in [Managing Asynchronous Jobs](#async-jobs).

    At this point, your app is stopped and you will not be able to access it using the `appURL`.
6. Change the `container.instances` in the manifest to the number of instances you want to run.
7. Call `PUT /apps/{appId}/environments/namespaces/{namespaceId}/{environmentId}` using the updated manifest.
8. Verify that the job is successful, as before.

    Your app is available once more.

### API를 사용하여 앱 배포 {#api-deploy}

다음 단계에서는 클러스터를 생성하고, create a namespace, and create an environment with a running app.

1. Set up your authentication PAT.
2. Prepare a manifest for your new cluster.
3. Make the API call `POST /clusters` using the cluster manifest to create a new cluster. 
4. Verify that the job is successful using the process described in [Managing Asynchronous Jobs](#async-jobs).
5. Prepare a manifest for your new namespace. 
6. Make the API call `POST /clusters/{clusterId}/namespaces` using the `{clusterId}` of the cluster you just created and your namespace manifest to create a new namespace. 
7. Verify that the job is successful using the process described in [Managing Asynchronous Jobs](#async-jobs).
8. Call `GET /cli` to retrieve all the available CLI versions.
9. Call `POST/cli/…` to download the correct version on mxpc-cli. This call will validate the provided path and query parameters and then redirect you to the CDN URL where the correct version of mxpc-cli is stored.
10. After mxpc-cli has been downloaded use the command `./mxpc-cli installer -n new-operator -i {namespaceID} -s {secret}` to install and configure the Mendix operator in the namespace. `{secret}` is the secret you provided in the manifest when creating the namespace.
    Once the installer has run, the namespace is ready to use (namespace installed, agent connected, database and store plans configured, ingress configured, registry configured).
11. Create a `DeploymentPackage` in the Mendix on Kubernetes Portal.
    You can create a deployment package by using the [Mendix on Kubernetes Build API](/apidocs-mxsdk/apidocs/private-cloud-build-api/). Once you create a deployment package, you can retrieve the `packageId` using the `GET /apps/{appId}/packages` response.
12. Prepare a manifest for your new environment. 
    Either use the model in the OpenAPI spec file or get the manifest of an existing environment (by calling `GET /apps/{appId}/namespaces/{namespaceId}/environments/{environmentId}`, for example) and change where required. Remember to use the `{clusterID}` and `{namespace}` values for the `provider` using the cluster and namespace you have just created, and use the ID of the deployment package you have just created as the `packageId`.
13. Make the API call `POST /apps/{appId}/environments` using the environment manifest to create a new environment. 
14. Verify that the job is successful using the process described in [Managing Asynchronous Jobs](#async-jobs).
15. Now you can access the application at the `appURL` which is returned from `GET /apps/{appId}/namespaces/{namespaceId}/environments/{environmentId}` of the environment.

{{% alert color="info" %}}
Please note that there is a limited support for Custom permissions in Deploy APIs.
{{% /alert %}}

{{% alert color="info" %}}
In order to create or manage environments in a namespace through an API, the technical contact must have a role assigned to the namespace permissions.
{{% /alert %}}

## API 참조

{{% alert color="info" %}}
Please note that the fields marked as non-editable in the OpenAPI .yaml file are used for read-only purposes. Any modifications made to the values of these fields will be ignored.
{{% /alert %}}

{{< swaggerui src="/openapi-spec/private-cloud-deploy-api.yaml"  >}}
