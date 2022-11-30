---
title: "Mendix for Private Cloud Deploy API"
linktitle: "Private Cloud Deploy API"
url: /apidocs-mxsdk/apidocs/private-cloud-deploy-api/
type: swagger
category: "API Documentation"
weight: 38
---

## 1 Introduction

The Mendix for Private Cloud Deploy API allows you to manage application environments deployed to your private cloud using the Mendix Operator. You can use the API to do the following:

* Download the configuration tool, mxpc-cli, for your operating system
* Create, update, or delete a cluster
* Create or delete a namespace
* Create or delete an environment
* Update an environment and deploy and manage an app in an environment through changes to the environment manifest

{{% alert color="info" %}}
This API is for connected private cloud clusters only.
{{% /alert %}}

## 2 Using the API

### 2.1 Authentication

Authentication for the API uses a Personal Access Token (PAT).

#### 2.1.1 Generating a PAT

Go to https://warden.mendix.com/ and follow the instructions in [Create a Personal Access Token with Warden](/developerportal/community-tools/warden/). Select the following as scopes:

* `mx:deployment:read` – to perform `GET` operations
* `mx:deployment:write` – to perform all operations (`GET`, `POST`, `PUT`, and `DELETE`)
 
Store the generated value `{GENERATED_PAT}`somewhere safe so you can use it to authorize your Mendix for Private Cloud API calls.

#### 2.1.2 Using the PAT

Each request must contain an `Authorization` header with the value `MxToken {GENERATED_PAT}`.

{{< figure src="/attachments/apidocs-mxsdk/apidocs/private-cloud-deploy-api/authorization-header.png" >}}

To authenticate calls when using the Open API specification below, click **Authorize** and use the value `MxToken {GENERATED_PAT}`.

### 2.2 Managing Asynchronous Jobs{#async-jobs}

All resource manipulation API calls are processed asynchronously. In the response, there is an `id` which you can use with the `GET /jobs/…` call to get the status of the asynchronous job.

Each asynchronous call will also return a `Location` header that references the URL where the result of that job can be found. For example `https://privatecloud.mendixcloud.com/api/v3/jobs/59464c21-0558-47a9-8d3d-ccc7057dc359`. This can be used as an alternative to `GET /jobs/…`.

Once `GET /jobs/…` or the equivalent HTTP call returns a response with `"status": "finished",`, you can verify the manifest for the resource by using a `GET {RESOURCE}` API call. For example, if you were updating a cluster, you can use `GET /clusters/{clusterId}` to verify the cluster manifest.

### 2.3 Assigning Ids

The API does not generate unique UUIDs for the resources. You will need to generate your own ids, which must be unique. If these are not unique, then the asynchronous job which creates the resource will fail.

## 3 Examples

### 3.1 Using the API to Restart an App

The following steps will restart an app by setting the number of instances to zero and then setting it back to the number of instances required.

1. Set up your authentication PAT.
1. Call `GET /apps/{appId}/environments/{environmentId}` to get the environment manifest for your app environment.
1. Change the `container.instances` to `0` in the manifest.
1. Call `PUT /apps/{appId}/environments/{environmentId}` using the updated manifest.
1. Verify that the job is successful using the process described in [Managing Asynchronous Jobs](#async-jobs).

    At this point your app is stopped and you will not be able to access it using the `appURL`.
1. Change the `container.instances` in the manifest to the number of instances you want to run.
1. Call `PUT /apps/{appId}/environments/{environmentId}` using the updated manifest.
1. Verify that the job is successful, as before.

    Your app is available once more.

### 3.2 Using the API to Deploy an App

The following steps will create a cluster, create a namespace, and create an environment with a running app.

1. Set up your authentication PAT.
1. Prepare a manifest for your new cluster.
1. Make the API call `POST /clusters` using the cluster manifest to create a new cluster. 
1. Verify that the job is successful using the process described in [Managing Asynchronous Jobs](#async-jobs).
1. Prepare a manifest for your new namespace. 
1. Make the API call `POST /clusters/{clusterId}/namespaces` using the `{clusterId}` of the cluster you just created and your namespace manifest to create a new namespace. 
1. Verify that the job is successful, as before.
1. Call `GET /cli` to retrieve all the available CLI versions.
1. Call `POST/cli/…` to download the correct version on mxpc-cli. This call will validate the provided path and query parameters and then redirect you to the CDN URL where the correct version of mxpc-cli is stored.
1. After mxpc-cli has been downloaded use the command `./mxpc-cli installer -n new-operator -i {namespaceID} -s {secret}` to install and configure the Mendix operator in the namespace. `{secret}` is the secret you provided in the manifest when creating the namespace.

    Once the installer has run, the namespace is ready to use (namespace installed, agent connected, database and store plans configured, ingress configured, registry configured).
1. Create a `DeploymentPackage` in the Private Cloud Portal. This step must currently be performed manually. We will release a Build API later, to address this limitation.
1. Prepare a manifest for your new environment. Either use the model in the OpenAPI spec file or get the manifest of an existing environment (by calling `GET /apps/{appId}/environments/{environmentId}`, for example) and change where required. Remember to use the `{clusterID}` and `{namespace}` values for the `provider` using the cluster and namespace you have just created, and use the deployment package you have just created as the `packageId`.
1. Make the API call `POST /apps/{appId}/environments` using the environment manifest to create a new environment. 
1. Verify that the job is successful, as before.
1. Now you can access the `appURL` which is returned from `GET /apps/{appId}/environments/{environmentId}` of the environment and, assuming everything was configure properly, you should see the application.

## 4 API Reference

{{< swaggerui src="/openapi-spec/private-cloud-deploy-api.yaml"  >}}
