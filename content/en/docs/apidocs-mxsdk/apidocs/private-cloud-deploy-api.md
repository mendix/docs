---
title: "Mendix for Private Cloud Deploy API"
url: /apidocs-mxsdk/apidocs/private-cloud-deploy-api/
type: swagger
description: "This API allows you to manage application environments deployed to your private cloud using the Mendix Operator."
weight: 72
---

{{% alert color="info" %}}
This document is about [Private Cloud](/developerportal/deploy/private-cloud/) API. For [Private Mendix Platform](/private-mendix-platform/) API, see [Private Mendix Platform API Documentation](/apidocs-mxsdk/apidocs/private-platform/).
{{% /alert %}}

## Introduction

The Mendix for Private Cloud Deploy API allows you to manage application environments deployed to your private cloud using the Mendix Operator. You can use the API to do the following:

* Download the configuration tool, mxpc-cli, for your operating system
* Create, update, or delete a cluster
* Create, update, or delete a namespace
* Create or delete an environment
* Update an environment and deploy and manage an app in an environment through changes to the environment manifest

{{% alert color="info" %}}
The Mendix for Private Cloud Deploy API is for connected private cloud clusters only.
{{% /alert %}}

{{% alert color="info" %}}
The Standard Operator conversion to Global Operator managed namespace is not yet available in Deploy API.
{{% /alert %}}

## Using the API

To help you work with the Mendix for Private Cloud Build API, the following sections of this document describe how to authenticate for the API, how to manage asynchronous API calls, and what to keep in mind when assigning unique IDs for the resources.

### Authentication

Authentication for the API uses a personal access token (PAT).

#### Generating a PAT

To generate a PAT, see the [Personal Access Tokens](/community-tools/mendix-profile/user-settings/#pat) section of *Mendix Profile*.

Select the following as scopes:

* `mx:deployment:read` – to perform `GET` operations
* `mx:deployment:write` – to perform all operations (`GET`, `POST`, `PUT`, and `DELETE`)

For operations related to deployment packages (such as Create, Upload, Delete, and Retrieve), you need to create PAT tokens as specified in [Mendix for Private Cloud Build API: Using the PAT](/apidocs-mxsdk/apidocs/private-cloud-build-api/#using-the-pat).
 
Store the `{GENERATED_PAT}` value in a safe location, so you can use it to authorize your Mendix for Private Cloud API calls.

#### Scopes Explanation

| Operation                   | Scopes                                           |
|-----------------------------|-------------------------------------------------|
| Get namespace manifest      | `mx:deployment:read`  or `mx:deployment:write`    |
| Get namespaces manifest     | `mx:deployment:read`  or `mx:deployment:write`    |
| Get cluster manifest        | `mx:deployment:read`  or `mx:deployment:write`    |
| Get clusters manifest       | `mx:deployment:read`  or `mx:deployment:write`    |
| Create cluster              | `mx:deployment:write`                            |
| Update cluster              | `mx:deployment:write`                            |
| Delete cluster              | `mx:deployment:write`                            |
| Create namespace            | `mx:deployment:write`                            |
| Update namespace            | `mx:deployment:write`                            |
| Delete namespace            | `mx:deployment:write`                            |
| Get environment manifest    | `mx:deployment:read`  or `mx:deployment:write`    |
| Create environment          | `mx:deployment:write`                            |
| Update environment          | `mx:deployment:write`                           |
| Delete environment          | `mx:deployment:write`                           |
| Get Apps manifest           | `mx:deployment:write` and `mx:app:metadata:read`|                        
| Get App manifest.           | `mx:deployment:write` and `mx:app:metadata:read`|                              
| Get Job                     | `mx:deployment:read`  and `mx:deployment:write`    |

#### Using the PAT

Each request must contain an `Authorization` header with the value `MxToken {GENERATED_PAT}`.

{{< figure src="/attachments/apidocs-mxsdk/apidocs/private-cloud-deploy-api/authorization-header.png" class="no-border" >}}

To authenticate calls when using the Open API specification below, click **Authorize** and use the value `MxToken {GENERATED_PAT}`.

### Managing Asynchronous Jobs {#async-jobs}

All resource manipulation API calls are processed asynchronously. In the response, there is an `id` which you can use with the `GET /jobs/…` call to get the status of the asynchronous job.

Each asynchronous call will also return a `Location` header that references the URL where the result of that job can be found, for example, `https://privatecloud.mendixcloud.com/api/v3/jobs/59464c21-0558-47a9-8d3d-ccc7057dc359`. This can be used as an alternative to `GET /jobs/…`.

Once `GET /jobs/…` or the equivalent HTTP call returns a response with `"status": "finished"`, you can verify the manifest for the resource by using a `GET {RESOURCE}` API call. For example, when updating a cluster, you can use `GET /clusters/{clusterId}` to verify the cluster manifest.

### Assigning IDs

The API does not generate unique UUIDs for the resources. You must generate your own IDs, which must be unique. If the IDs are not unique, the asynchronous job which creates the resource will fail.

## Examples

The following sections of this document contain sample usage scenarios for the API.

### Using the API to Update the Cluster and Namespace

The following steps will create a cluster, register and install a namespace, add or update a cluster member, and enable development mode for the namespace.

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

### Using the API to Restart an App {#restart}

The following steps will restart an app by setting the number of instances to zero and then setting it back to the number of instances required.

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

### Using the API to Deploy an App {#api-deploy}

The following steps will create a cluster, create a namespace, and create an environment with a running app.

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
11. Create a `DeploymentPackage` in the Private Cloud Portal.
    You can create a deployment package by using the [Mendix for Private Cloud Build API](/apidocs-mxsdk/apidocs/private-cloud-build-api/). Once you create a deployment package, you can retrieve the `packageId` using the `GET /apps/{appId}/packages` response.
12. Prepare a manifest for your new environment. 
    Either use the model in the OpenAPI spec file or get the manifest of an existing environment (by calling `GET /apps/{appId}/namespaces/{namespaceId}/environments/{environmentId}`, for example) and change where required. Remember to use the `{clusterID}` and `{namespace}` values for the `provider` using the cluster and namespace you have just created, and use the ID of the deployment package you have just created as the `packageId`.
13. Make the API call `POST /apps/{appId}/environments` using the environment manifest to create a new environment. 
14. Verify that the job is successful using the process described in [Managing Asynchronous Jobs](#async-jobs).
15. Now you can access the application at the `appURL` which is returned from `GET /apps/{appId}/namespaces/{namespaceId}/environments/{environmentId}` of the environment.

{{% alert color="info" %}}
Please note that there is a limited support for Custom permissions in Deploy APIs.
{{% /alert %}}

## API Reference

{{% alert color="info" %}}
Please note that the fields marked as non-editable in the OpenAPI .yaml file are used for read-only purposes. Any modifications made to the values of these fields will be ignored.
{{% /alert %}}

{{< swaggerui src="/openapi-spec/private-cloud-deploy-api.yaml"  >}}
