---
title: "Integrate Kubernetes with Secret Stores"
url: /developerportal/deploy/private-cloud-secrets/
description: "Describes the process for using external secret stores for Kubernetes secrets"
weight: 20
tags: ["Deploy", "Private Cloud", "Secrets", "Secret Stores", "Vault", "Kubernetes", "AWS"]
---

## 1 Introduction

You can increase the security of your environment by implementing an external secrets store to manage your Kubernetes secrets. Mendix Private Cloud supports multiple secret stores. This document outlines the high-level process, and provides example implementations for Vault and AWS Secrets Manager.

## 2 Configuring Your Environment

To implement an external secret store, you must configure the required settings by following these steps:

1. Prepare a Kubernetes `ServiceAccount` to be used for authentication. 
    The `ServiceAccount` name must match the [Mendix App CR](/deploy/private-cloud-technical-appendix-01/) name (that, is, the internal name of the app environment). Your secret store provider may have other requirements - for more information, refer to documentation supplied by the secret store provider.
2. Configure the [SecretProviderClass](https://secrets-store-csi-driver.sigs.k8s.io/getting-started/usage.html#create-your-own-secretproviderclass-object)
     The `SecretProviderClass` is the mapping rules configuration that specifies what should be mounted and where. You must configure it to match the Mendix App CR name, and use a specific list of mappable keys - for more information, see [SecretProviderClass Keys](#keys). Your secret store provider may have other requirements - for more information, refer to documentation supplied by the secret store provider.
3.Configure permissions to read secrets specified in the `SecretProviderClass`.
    The specific configuration requirements depend on your secret store provider. It usually involves allowing the `k8s ServiceAccount` to access specific keys in the Vault or in AWS console.
4. Configure the secret storage, for example, Vault, or AWS Secret Manager.
5. Configure a k8s Secret provider, for example, AWS Secrets Manager CSI Secrets Store.

### 2.1 `SecretProviderClass` Keys {#keys}

The following table lists the properties used as keys for database and storage-related data. Use the following values when configuring the mapping rules in your `SecretProviderClass`.

| Data type | Key |
| --- | --- |
| Database type (for example, SQLSERVER, PostgreSQL) | `database-type` |
| Database Jdbc Url | `database-jdbc-url` |
| Database Host | `database-host` |
| Database Name | `database-name` |
| Database Username | `database-username` |
| Database Password | `database-password` |
| Storage service name (for example, `com.mendix.storage.s3`) | `storage-service-name` |
| Storage endpoint | `storage-endpoint` |
| Storage access key id | `storage-access-key-id` |
| Storage secret access key | `storage-secret-access-key` |
| Storage bucket name | `storage-bucket-name` |
| Storage region | `storage-region` |
| Mendix Admin Password | `mx-admin-password` |
| Custom Certificate Authorities | `custom-ca-crt` |


## 3 Sample Implementations

The following sections outline the process of implementing an external secret store with Vault and with AWS. You can refer to them as an example, and to help you troubleshoot your own implementation.

### 3.1 Configuring a Secret Store with Vault

To enable your environment to use Vault as external secret storage, follow these steps:

1. Create a secret at Vault:
    ```text {linenos=false} 
    vault kv put secret/db-pass password="db-secret-password"
    ```
2. Create the required Vault role:
    ```text {linenos=table}
    vault policy write internal-app - <<EOF
    path "secret/data/db-pass" {
    capabilities = ["read"]
    }
    EOF
    ```
3. Bind the Vault role to a k8s service:
    ```text {linenos=table}
    vault write auth/kubernetes/role/database \
    bound_service_account_names=webapp-sa \
    bound_service_account_namespaces=default \
    policies=internal-app \
    ttl=20m
    ```
4. Create the `SecretProviderClass` CR for the Secrets Store CSI Driver:
    ```text {linenos=table}
    apiVersion: secrets-store.csi.x-k8s.io/v1alpha1
    kind: SecretProviderClass
    metadata:
    name: vault-database
    spec:
    provider: vault
    parameters:
    vaultAddress: "http://vault.default:8200"
    roleName: "database"
    objects: |
    - objectName: "db-password"
    secretPath: "secret/data/db-pass"
    secretKey: "password"
    ```

### 3.2 Configuring a Secret Store with AWS Secrets Manager

To enable your environment to use AWS Secrets Manager as external secret storage, follow these steps:

1. In AWS Secrets Manager, create a new secret of the type **Other**.
2. Define the keys as described in the [SecretProviderClass Keys](#keys) section above, and then click **Next**. 
3. Enter the secret name, for example, `<namespace>/<k8s environment name>`.
4. Follow the wizard to complete the secret creation process.
5. Open the secret and copy the **Secret name** and **Secret ARN**.
6. In Portunus, create an environment using secrets storage, with no database or storage plan.
7. Create an **IAM Role** without any attached policies for that environment in the AWS console. 
    {{% alert color="info" %}}Use the environment internal name as the service account name.{{% /alert %}}
8. In the IAM role, add an inline policy with the following JSON:
    ```json
    {
    "Version": "2012-10-17",
    "Statement": [
    {
    "Effect": "Allow",
    "Action": [
    "secretsmanager:GetSecretValue",
    "secretsmanager:DescribeSecret"
    ],
    "Resource": [
    "<{The secret ARN that you copied in step 5 above}>"
    ]
    }
    ]
    }
    ```
9. Create a `k8s ServiceAccount` for your environment:
    ```text {linenos=table}
    kubectl -n <{k8s namespace}> create serviceaccount <{environment name}>
    kubectl -n <{k8s namespace}> annotate serviceaccount <{environment name}> privatecloud.mendix.com/environment-account=true
    kubectl -n <{k8s namespace}> annotate serviceaccount <{environment name}> eks.amazonaws.com/role-arn=<{aws role ARN}>
    ```
10. In the Mendix app, set `allowOverrideSecretsWithSecretStoreCSIDriver` to *true*, and make sure that the app does not use storage plans. For more information, see [Additional considerations](#additional-considerations).
11. Attach the secret to the environment by applying the following k8s yaml:
    ```text {linenos=table}
    apiVersion: secrets-store.csi.x-k8s.io/v1
    kind: SecretProviderClass
    metadata:
    name: <{MendixApp CR name}>
    annotations:
    privatecloud.mendix.com/environment-class: "true"
    spec:
    provider: aws
    parameters:
    objects: |
    - objectName: "<{The secret name that you copied in step 5 above}>"
    objectType: "secretsmanager"
    jmesPath:
    - path: '"database-type"'
    objectAlias: "database-type"
    - path: '"database-jdbc-url"'
    objectAlias: "database-jdbc-url"
    - path: '"database-username"'
    objectAlias: "database-username"
    - path: '"database-password"'
    objectAlias: "database-password"
    - path: '"database-host"'
    objectAlias: "database-host"
    - path: '"database-name"'
    objectAlias: "database-name"
    - path: '"storage-service-name"'
    objectAlias: "storage-service-name"
    - path: '"storage-endpoint"'
    objectAlias: "storage-endpoint"
    - path: '"storage-access-key-id"'
    objectAlias: "storage-access-key-id"
    - path: '"storage-secret-access-key"'
    objectAlias: "storage-secret-access-key"
    - path: '"storage-bucket-name"'
    objectAlias: "storage-bucket-name"
    - path: '"storage-perform-delete"'
    objectAlias: "storage-perform-delete"
    #- path: '"storage-use-ca-certificates"'
    #  objectAlias: "storage-use-ca-certificates"
    - path: '"mx-admin-password"'
    objectAlias: "mx-admin-password"

In the above example, `path` specifies the key name from the original AWS Secret (Secret Manager key), and `objectAlias` specifies how it will be named when mounted into the sidecar. Do not modify `objectAlias`, as it matches the Vault `objectName`.

## 4 Additional considerations {#additional-considerations}

When implementing a secret store, keep in mind the following considerations:

* It is not currently possible to use Storage Plans with CSI Secret Storage. Instead, your infrastructure admin must attach a `k8s ServiceAccount` and `SecretProviderClass` would be attached to the app before or after the environment is created.
* The internal name of the environment must match an existing `ServiceAccount` and `SecretProviderClass`.
* CSI Secret Storage can override app settings. Currently this applies only to the `MxAdmin` password. In the future, this may also include app constants and other settings.