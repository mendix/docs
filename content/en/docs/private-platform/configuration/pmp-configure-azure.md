---
title: "Configuring CI/CD on Azure"
url: /private-mendix-platform/configure-azure/
description: "Documents the initial configuration for the Private Mendix Platform."
weight: 30
aliases:
    - /private-mendix-platform-configure-azure/
---

## Introduction

This document explains the configuration options available when configuring a Continuous Integration and Delivery (CI/CD) solution for Private Mendix Platform on the Azure DevOps service.

### Prerequisites

To configure the CI/CD pipeline, prepare the following:

* An Azure organization where you want to build your Mendix app.
* An Azure blob or an AWS S3 endpoint where you can store the built MDA files.

## Configuring the CI/CD Pipeline

If you have an Azure organization, you can set Azure as your CI System in **Settings** > **DevOps** > **CI/CD**. You need to first obtain a [Personal Access Token](#pat), and then configure the followings settings:

* [Azure blob settings](#blob)
* [S3 bucket settings](#bucket)

Finally, you must also [register your Kubernetes cluster](#register-cluster).

{{< figure src="/attachments/private-platform/pmp-cicd4.png" class="no-border" >}}

### Obtaining a Personal Access Token {#pat}

A Personal Access Token (PAT) is used to authenticate in Azure DevOps. For information about obtaining the token, see [Create a PAT](https://learn.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=Windows#create-a-pat) in the Azure DevOps documentation.

### Configuring Azure Blob Settings {#blob}

The settings in this section configure the Azure blob settings.

* **Azure Blob URL** - For example, `https://{your domain name}.blob.core.windows.net/pmp`.
* **Azure Blob Token** - This secret value is used to access the Azure Blob storage.

### Configuring Build Images Setting {#bucket}

The settings in this section configure the S3 bucket.

* **S3 Endpoint** - For example, `Cloud Object Storage - Amazon S3 - AWS`.
* **S3 Bucket Name** - Your S3 bucket name, for example, `mybucket`.
* **Region** - For example, `ap-southeast-1`.
* **Access Key ID** - This ID value is used to access the S3 bucket.
* **Secret Access Key** - This secret key value is used to access the S3 bucket.

### Registering a Kubernetes Cluster {#register-cluster}

Before creating any environments, you must register your Kubernetes clusters by doing the following steps:

1. Click **Register New Cluster**.
2. Configure the following values:
    
    * **Cluster Name** - Specify a name for the cluster.
    * **API Server** - Specify your Kubernetes API server.
    * **Token** - You must first create a service account, cluster role, and cluster role binding in the cluster, and then get the service account's token. For reference, see the following shell script:

        ```text
        # create ServiceAccount, ClusterRole, and ClusterRoleBinding
        kubectl apply -f << EOF -
        apiVersion: v1
        kind: ServiceAccount
        metadata:
          name: mxplatform-cicd
          namespace: kube-system
        ---
        apiVersion: v1
        kind: Secret
        metadata:
          name: mxplatform-cicd
          namespace: kube-system
          annotations:
            kubernetes.io/service-account.name: mxplatform-cicd
        type: kubernetes.io/service-account-token
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: ClusterRole
        metadata:
          name: mxplatform-cicd
        rules:
        - apiGroups:
          - ""
          resources:
          - namespaces
          verbs:
          - list
        - apiGroups:
          - privatecloud.mendix.com
          resources:
          - storageplans
          verbs:
          - list
        - apiGroups:
          - privatecloud.mendix.com
          resources:
          - mendixapps
          verbs:
          - '*'
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: ClusterRoleBinding
        metadata:
          name: mxplatform-cicd
        subjects:
        - kind: ServiceAccount
          name: mxplatform-cicd
          namespace: kube-system
        roleRef:
          kind: ClusterRole
          name: mxplatform-cicd
          apiGroup: rbac.authorization.k8s.io
        EOF

        # get service account token:
        kubectl get secret mxplatform-cicd -nkube-system -o jsonpath='{.data.token}'|base64 -d
        # for openshift cluster
        kubectl get secret mxplatform-cicd -nkube-system -o jsonpath='{.metadata.annotations.openshift\.io/token-secret\.value}'
        ```

3. Optionally, enable the **Help Me** feature. For reference, see the following shell script:

    ```text
    # create ServiceAccount, ClusterRole, and ClusterRoleBinding
    kubectl apply -f << EOF -
    apiVersion: v1
    kind: ServiceAccount
    metadata:
      name: mxplatform-cicd
      namespace: kube-system
    ---
    apiVersion: v1
    kind: Secret
    metadata:
      name: mxplatform-cicd
      namespace: kube-system
      annotations:
        kubernetes.io/service-account.name: mxplatform-cicd
    type: kubernetes.io/service-account-token
    ---
    apiVersion: rbac.authorization.k8s.io/v1
    kind: ClusterRole
    metadata:
        name: mxplatform-cicd
    rules:
    - apiGroups:
        - ""
        resources:
        - namespaces
        verbs:
        - list
    - apiGroups:
        - ""
        resources:
        - deployments
        verbs:
        - get
        - list
        - watch
    - apiGroups:
        - ""
        resources:
        - pods
        verbs:
        - get
        - list
    - apiGroups:
        - ""
        resources:
        - pods/log
        verbs:
        - get
    - apiGroups:
        - ""
        resources:
        - events
        verbs:
        - get
        - list
    - apiGroups:
        - privatecloud.mendix.com
        resources:
        - storageplans
        verbs:
        - list
    - apiGroups:
        - privatecloud.mendix.com
        resources:
        - mendixapps
        verbs:
        - '*'
    ---
    apiVersion: rbac.authorization.k8s.io/v1
    kind: ClusterRoleBinding
    metadata:
        name: mxplatform-cicd
    subjects:
    - kind: ServiceAccount
        name: mxplatform-cicd
        namespace: kube-system
    roleRef:
        kind: ClusterRole
        name: mxplatform-cicd
        apiGroup: rbac.authorization.k8s.io
    EOF

    # get service account token:
    kubectl get secret mxplatform-cicd -nkube-system -o jsonpath='{.data.token}'|base64 -d
    # for openshift cluster
    kubectl get secret mxplatform-cicd -nkube-system -o jsonpath='{.metadata.annotations.openshift\.io/token-secret\.value}'
    ```

4. Click **Save**.
5. Click the newly created cluster and expand it, and then click **Retrieve Namespace(s)** to retrieve all the namespace and storage plans. 
    
    Namespaces without any storage plan are skipped. This step requires the Mendix Operator to be installed and configured. You can repeat this step as required to retrieve additional namespaces.

6. After the cluster is registered, create environments with the cluster, namespace and plans.

## Architecture of the CI/CD Pipeline

The diagrams in this section present the architecture and components of the pipeline. The architecture is different depending on whether you enabled the Auto Detect Mx Version build image setting.

### Architecture with the Auto Detect Mx Version Setting Enabled

The following diagram shows the architecture of the pipeline if you enable the **Auto Detect Mx Version** setting. For more information, see [Build Images Setting](/private-mendix-platform/configure-k8s/#build-images).

{{< figure src="/attachments/private-platform/pmp-cicd2.png" alt="Auto Detect Mx Runtime Version" class="no-border" >}}

### Architecture with the Auto Detect Mx Version Setting Disabled

The following diagram shows the architecture of the pipeline if you disable the **Auto Detect Mx Version** setting. For more information, see [Build Images Setting](/private-mendix-platform/configure-k8s/#build-images).

{{< figure src="/attachments/private-platform/pmp-cicd3.png" alt="User Input Mx Runtime Version" class="no-border" >}}
