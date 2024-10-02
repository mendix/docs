---
title: "Mendix for Private Cloud Build API"
url: /apidocs-mxsdk/apidocs/private-cloud-build-api/
type: swagger
description: "This API allows you to manage deployment packages which can later be used in the environments deployed in your private cloud."
weight: 70
---

{{% alert color="info" %}}
This document is about [Private Cloud](/developerportal/deploy/private-cloud/) API. For Private Mendix Platform API, see [Private Mendix Platform API Documentation](/apidocs-mxsdk/apidocs/private-platform/).
{{% /alert %}}

## Introduction

The Mendix for Private Cloud Build API allows you to manage deployment packages which can later be used in the environments deployed in your private cloud. You can use the API to do the following:

* Retrieve all deployment packages of an application
* Retrieve a single deployment package based on the package ID
* Upload deployment package in an application
* Create deployment packages based on the branch and revision
* Delete a deployment package

{{% alert color="info" %}}
The Mendix for Private Cloud Build API is available only for connected private cloud clusters.
{{% /alert %}}

## Using the API

To help you work with the Mendix for Private Cloud Build API, the following sections of this document describe how to authenticate for the API, and how to manage asynchronous API calls.

### Authentication

Authentication for the API uses a personal access token (PAT).

#### Generating a PAT

You can generate a PAT in the **Developer Settings** section of your Mendix Profile. For details, see the [Personal Access Tokens](/community-tools/mendix-profile/user-settings/#pat) section of *Mendix Profile*.

Select the following as scopes:

* `mx:privatecloud-build:read` – to perform `GET` operations
* `mx:privatecloud-build:write` – to perform all operations (`GET`, `POST` and `DELETE`)
* `mx:modelrepository:write` – under `Model Repository` – to perform build package operation 

Store the `{GENERATED_PAT}` in a safe location, so you can use it to authorize your Mendix for Private Cloud API calls.

#### Scopes Explanation

| Operation                    | Scopes                                                        |
|-----------------------------|---------------------------------------------------------------|
| Build deployment package   | `mx:privatecloud-build:write` and `mx:modelrepository:write`  |
| Upload deployment package   | `mx:privatecloud-build:write`                                 |
| Delete deployment package   | `mx:privatecloud-build:write`                                 |
| Get deployment package      | `mx:privatecloud-build:read` or `mx:privatecloud-build:write` |
| Get deployment package list | `mx:privatecloud-build:read` or `mx:privatecloud-build:write` |
| Get Job                     | `mx:privatecloud-build:read` or `mx:privatecloud-build:write` |

#### Using the PAT {#using-the-pat}

Each request must contain an `Authorization` header with the value `MxToken {GENERATED_PAT}`.

{{< figure src="/attachments/apidocs-mxsdk/apidocs/private-cloud-deploy-api/authorization-header.png" class="no-border" >}}

To authenticate calls when using the Open API specification below, click **Authorize** and use the value `MxToken {GENERATED_PAT}`.

### Managing Asynchronous Jobs {#async-jobs}

All resource manipulation API calls are processed asynchronously. In the response, there is an `id` which you can use with the `GET /jobs/…` call to get the status of the asynchronous job.

Each asynchronous call will also return a `Location` header that references the URL where the result of that job can be found, for example, `https://privatecloud.mendixcloud.com/api/v3/jobs/59464c21-0558-47a9-8d3d-ccc7057dc359`. This can be used as an alternative to `GET /jobs/…`.

Once `GET /jobs/…` or the equivalent HTTP call returns a response with `"status": "finished"`, you can verify the manifest for the resource by using a `GET {RESOURCE}` API call. For example, when updating a cluster, you can use `GET /clusters/{clusterId}` to verify the cluster manifest.

## Examples

The following sections of this document contain sample usage scenarios for the API.

{{% alert color="info" %}}
Please note that the attribute values in API requests are case-sensitive. Make sure that the input requests are entered correctly according to the specification file.
{{% /alert %}}

### Using the API to Build, Download and Delete a Deployment Package

The following steps will create a deployment package, retrieve it, refresh its `URL`, download it, delete it and, in the end, list all available deployment packages of an application.

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

### Using the API to Upload a Deployment Package

Follow the steps below to upload a deployment package by using the API.

1. Set up your authentication PAT.
2. Prepare the `multipart/form-data` request for your deployment package, as seen in the OpenAPI specification file. The `file` indicates the *.mda* file of the deployment package that you want to upload, and `fileName` represents the name with which the deployment package will be displayed in the Private Cloud Portal. If you do not provide the *.mda* extension to the *filename*, it is added automatically.
3. Make the API call `POST /apps/{appId}/packages` using the request created in the previous step to upload the new deployment package.
4. Verify that the job is successful using the process described in [Managing Asynchronous Jobs](#async-jobs).
5. Once the previous job is successful, you will see a `id` in the response. You can then call `GET /apps/{appId}/packages/{id}` to get the deployment package details and verify the uploaded file.
    You can use the same `id` when deploying an app through the [Mendix for Private Cloud Deploy API](/apidocs-mxsdk/apidocs/private-cloud-deploy-api/#api-deploy).

## API Reference

{{< swaggerui src="/openapi-spec/private-cloud-build-api.yaml"  >}}
