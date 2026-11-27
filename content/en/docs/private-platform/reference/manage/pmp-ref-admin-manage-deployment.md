---
title: "Company Administrator Settings - Deployment"
linktitle: "Deployment"
url: /private-mendix-platform/admin-company/deployment/
description: "Provides details on the deployment settings that are available to company administrators."
weight: 30
---

## Introduction

In the **Deployment** section, administrators can manage existing clusters and register new ones.

## Cluster Manager

The **Cluster Manager** page allows administrators to configure clusters to be used in their devOps CI/CD pipelines. To configure a cluster, perform the following steps:

1. In **Switch to Admin Mode** > **Manage** > **Cluster Manager**, click **Register New Cluster**.
2. Configure the following values:
    
    * **Cluster Name** – Specify a name for the cluster.
    * **Cluster type** – Select the cluster type. **Kubernetes** is recommended.
    * **API Server** – Specify your API server.
    * **Token** – You must first create a service account, cluster role, and cluster role binding in the cluster, and then get the service account's token. For an example, see [Configuring Build Cluster Setting](/private-mendix-platform/configure-k8s/#build-cluster).
    * **Enable Logging and Monitoring** – Specify whether Grafana and Prometheus monitoring should be enabled for this cluster.
    * **Package Type** – For Kubernetes and Manual Production Deployment, select the type of package that will be uploaded to environments in this cluster.
    * **S3 Endpoint** – For Kubernetes and Manual Production Deployment, specify the S3 endpoint, for example, `Cloud Object Storage - Amazon S3 - AWS`.
    * **S3 Bucket Name** – For Kubernetes and Manual Production Deployment, specify the S3 bucket name, for example, `mybucket`.
    * **Region** – For Kubernetes and Manual Production Deployment, specify the region, for example, `ap-southeast-1`.
    * **Access Key ID** – For Kubernetes and Manual Production Deployment, this ID value is used to access the S3 bucket.
    * **Secret Access Key** – For Kubernetes and Manual Production Deployment, this secret key value is used to access the S3 bucket.

3. Click **Save**.
4. Click the newly created cluster and expand it, and then click **Retrieve Namespace(s)** to retrieve all the namespace and storage plans, or **Manually Register Namespace**. 
    
    Namespaces without any storage plan are skipped. This step requires the Mendix Operator to be installed and configured. You can repeat this step as required to retrieve additional namespaces.

5. After the cluster is registered, create environments with the cluster, namespace and plans.

### Configuring CI/CD Pipelines with Manual Approval {#manual-deployment}

If your production and development environments must be fully air-gapped and separated from each other, and you want to limit the ability to deploy packages to either selected users or an automated pipeline with manual approval, you can configure your cluster type to be **Manual Production Deployment**.

Selecting this option allows you to specify an S3 bucket. This bucket is then used as the destination where the deployment package is uploaded at the end of the pipeline, instead of being deployed to the production environment. Designated approvers can then retrieve the package from the S3 bucket and manually deploy it to the target environment.
