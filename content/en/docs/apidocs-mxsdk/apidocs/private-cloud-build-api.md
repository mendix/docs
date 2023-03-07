---
title: "Mendix for Private Cloud Build API"
linktitle: "Private Cloud Build API"
url: /apidocs-mxsdk/apidocs/private-cloud-build-api/
type: swagger
category: "API Documentation"
weight: 38
---

## 1 Introduction

The Build API allows you to manage deployment packages which can later be used in the environments deployed in your private cloud. You can use the API to do the following:

- Retrieve all deployment packages of an application
- Retrieve a single deployment package based on the package id
- Upload deployment package in an application
- Create deployment packages based on the branch and revision
- Delete a deployment package

{{% alert color="info" %}}
This API is for connected private cloud clusters only.
{{% /alert %}}

## 2 Using the API

### 2.1 Authentication

Authentication for the API uses a Personal Access Token (PAT).

#### 2.1.1 Generating a PAT

Go to https://warden.mendix.com/ and follow the instructions in [Create a Personal Access Token with Warden](/developerportal/community-tools/warden/). Select the following as scopes:

- `mx:privatecloud-build:read` – to perform `GET` operations
- `mx:privatecloud-build:write` – to perform all operations (`GET`, `POST` and `DELETE`)
- `mx:modelrepository:write` – under `Model Repository` - to perform build package operation 

Store the generated value `{GENERATED_PAT}` somewhere safe so you can use it to authorize your Mendix for Private Cloud API calls.

#### 2.1.2 Scopes explanation
| Operation                   | Scopes                                                        |
|-----------------------------|---------------------------------------------------------------|
| Build  deployment package   | `mx:privatecloud-build:write` and `mx:modelrepository:write`  |
| Upload deployment package   | `mx:privatecloud-build:write`                                 |
| Delete deployment package   | `mx:privatecloud-build:write`                                 |
| Get deployment package      | `mx:privatecloud-build:read` or `mx:privatecloud-build:write` |
| Get deployment package list | `mx:privatecloud-build:read` or `mx:privatecloud-build:write` |
| Get Job                     | `mx:privatecloud-build:read` or `mx:privatecloud-build:write` |

#### 2.1.3 Using the PAT

Each request must contain an `Authorization` header with the value `MxToken {GENERATED_PAT}`.

{{< figure src="/attachments/apidocs-mxsdk/apidocs/private-cloud-deploy-api/authorization-header.png" >}}

To authenticate calls when using the Open API specification below, click **Authorize** and use the value `MxToken {GENERATED_PAT}`.


### 2.2 Managing Asynchronous Jobs{#async-jobs}

All resource manipulation API calls are processed asynchronously. In the response, there is an `id` which you can use with the `GET /jobs/…` call to get the status of the asynchronous job.

Each asynchronous call will also return a `Location` header that references the URL where the result of that job can be found. For example `https://privatecloud.mendixcloud.com/api/v3/jobs/59464c21-0558-47a9-8d3d-ccc7057dc359`. This can be used as an alternative to `GET /jobs/…`.

Once `GET /jobs/…` or the equivalent HTTP call returns a response with `"status": "finished"`, you can verify the manifest for the resource by using a `GET {RESOURCE}` API call. For example, if you were updating a cluster, you can use `GET /clusters/{clusterId}` to verify the cluster manifest.

## 3 Examples

### 3.1 Using the API to Build, Download and Delete a Deployment Package

The following steps will create a deployment package, retrieve it, refresh its `URL`, download it, delete it and, in the end, list all available deployment packages of an application.

1. Set up your authentication PAT.
2. Call `GET /apps/{appId}/packages` to retrieve all the deployment packages in the application. 
3. Prepare the JSON request for your deployment package as seen in the OpenAPI specification file.
4. Make the API call `POST /apps/{appId}/packages/build` using the deployment package JSON request to initiate the build of a new deployment package.
5. Verify that the job is successful using the process described in [Managing Asynchronous Jobs](#async-jobs). 
6. Call `GET /apps/{appId}/packages` to retrieve all the packages in the application. 
7. Once the job at Step 4 is successful, you will see a `packageId` in the response from Step 6. You can then call `GET /apps/{appId}/packages/{packageId}` to get the deployment package details.
The same `packageId` can the be used in Step 12 from the [DeployAPI](https://docs.mendix.com/apidocs-mxsdk/apidocs/private-cloud-deploy-api/#32-using-the-api-to-deploy-an-app) documentation.
8. Call `GET /apps/{appId}/packages` to retrieve all the deployment packages in the application. You should see the above-created deployment package in the list.
9. If you want to download the deployment package locally, you can use the location URL present in the response from Step 7. The URL has a lifetime of 15 minutes, so if more than 15 minutes have passed since the creation of the deployment package you need to request a new URL by calling `GET /apps/{appId}/packages/{packageId}?url=true`.
10. Call `DELETE /apps/{appId}/packageId` where you can get the value of package id from Step 7.
11. Verify that the job is successful, as before.
12. Call `GET /apps/{appId}/packages` to retrieve all the deployment packages in the application. The deployment package should be removed from the list.

### 3.2 Using the API to Upload a Deployment Package
1. Set up your authentication PAT.
2. Prepare the `multipart/form-data` request for your deployment package as seen in the OpenAPI specification file. The `file` will contain the `.mda` file of the deployment package you want to upload, and `fileName` represents the name with which the deployment package will be displayed in the Private Cloud Portal. If you don't provide the `.mda` extension to the `filename`, it'll be added automatically.
3. Make the API call `POST /apps/{appId}/packages` using the request created in the previous step to upload of the new deployment package.
4. Verify that the job is successful using the process described in [Managing Asynchronous Jobs](#async-jobs).
5. Once the previous job is successful, you will see a `packageId` in the response. You can then call `GET /apps/{appId}/packages/{packageId}` to get the deployment package details and verify the uploaded file.
The same `packageId` can the be used in Step 12 from the [DeployAPI](https://docs.mendix.com/apidocs-mxsdk/apidocs/private-cloud-deploy-api/#32-using-the-api-to-deploy-an-app) documentation.

## 4 API Reference

{{< swaggerui src="/openapi-spec/private-cloud-build-api.yaml"  >}}
