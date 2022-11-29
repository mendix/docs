---
title: "Mendix for Private Cloud Deploy API"
linktitle: "Private Cloud Deploy API"
url: /apidocs-mxsdk/apidocs/private-cloud-deploy-api/
type: swagger
category: "API Documentation"
draft: true
weight: 38
---

## 1 Introduction

The Mendix for Private Cloud Deploy API allows you to manage application environments deployed to your private cloud using the Mendix Operator. You can use the API to do the following:

* Download the configuration tool, mxpc-cli, for your operating system
* Create, update, or delete a cluster
* Create, update, or delete a namespace
* Create or delete an environment
* Deploy and manage an app in an environment through changes to the environment manifest

## 2 Using the API

### 2.1 Authentication

Authentication for the API uses a Personal Access Token (PAT).

#### 2.1.1 Generating a PAT

Go to https://warden.mendix.com/ and follow the instructions in [Create a Personal Access Token with Warden](/developerportal/community-tools/warden/). Select both `mx:deployment:read` and `mx:deployment:write` as scopes.
 
Store the generated value `{GENERATED_PAT}`somewhere safe so you can use it to authorize your Mendix for Private Cloud API calls.

#### 2.1.2 Using the PAT

Each request must contain an `Authorization` header with the value `MxToken {GENERATED_PAT}`.

{{< figure src="/attachments/apidocs-mxsdk/apidocs/private-cloud-deploy-api/authorization-header.png" >}}

{{% todo %}}I think we need instructions here on how to authorize calls when testing the Swagger/API Reference{{% /todo %}}

### 2.2 Managing Asynchronous Jobs{#async-jobs}

All resource manipulation API calls are processed asynchronously. In the response, there is an `id` which you can use with the `GET /jobs/…` call to get the status of the asynchronous job.

When the job is complete, the `GET /jobs/…` call will return a `Location` header that references the URL where the result of that job can be found.

{{% todo %}}Have an example of what is in the location header?{{% /todo %}}

You can then verify the manifest for the resource by using a `GET {RESOURCE}` API call. For example, if you were updating a cluster, you can use `GET /clusters/{clusterId}` to verify the cluster manifest.

### 2.3 Using the API to Restart an App

{{% todo %}}Perhaps a simpler example first?{{% /todo %}}

1. `GET` an environment manifest
1. Change the `container.instances` to `0`
1. `PUT` the manifest
1. Wait for job
1. Change the `container.instances` to the number of instances you want to run
1. `PUT` the manifest
1. Wait for job

### 2.4 Using the API to Deploy an App

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
1. Prepare a manifest for your new environment. Either use the model in the OpenAPI spec file or get the manifest of an existing environment (by calling `GET /apps/{appId}/environments/{environmentId}`, for example) and change where required. Remember to use the `{clusterID}` and `{namespace}` values for the `provider` using the cluster and namespace you have just created.
1. Make the API call `POST /apps/{appId}/environments` using the environment manifest to create a new environment. 
1. Verify that the job is successful, as before.
1. Now you can access the `appURL` which is returned from `GET /apps/{appId}/environments/{environmentId}` of the environment and, assuming everything was configure properly, you should see the application.

## 3 API Reference

{{< swaggerui src="/openapi-spec/private-cloud-deploy-api.yaml"  >}}
