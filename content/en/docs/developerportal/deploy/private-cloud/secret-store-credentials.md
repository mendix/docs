---
title: "Retrieve Environment-Sensitive Data from a Secret Store"
url: /developerportal/deploy/secret-store-credentials/
description: "Describes the process for using external secret stores for Kubernetes secrets"
weight: 20
tags: ["Deploy", "Private Cloud", "Secrets", "Secret Stores", "Vault", "Kubernetes", "AWS"]
---

## 1 Introduction

You can increase the security of your environment by implementing an external secrets store to manage your Kubernetes secrets.
Environments running Mendix for Private Cloud can be granted read-only access to a secrets store by using a [Kubernetes Secrets Store CSI Driver](https://secrets-store-csi-driver.sigs.k8s.io/). This document outlines the high-level process, and provides example implementations for HashiCorp Vault and AWS Secrets Manager.

{{% alert color="info" %}}Secret storage does not currently support [database plans](/developerportal/deploy/private-cloud-storage-plans/#database) or [blob storage plans](/developerportal/deploy/private-cloud-storage-plans/#blob-storage). You must provision your environment manually.{{% /alert %}}

{{% alert color="info" %}}Using an external secret storage provides multiple benefits, such as rotating credentials from a single location, collecting audit logs and dynamically generating role-specific credentials.

Using a secret storage incorrectly may reduce the security of your app. This document describes a simplified approach to setting up Vault and should not be used for production environments. Consult with your secrets store provider to ensure that it is set up securely for your production environment.
{{% /alert %}}

### 1.1 Supported Stores

Mendix apps currently support the following secret stores:

* AWS Secrets Manager
* HashiCorp Vault

## 2 Configuring Your Environment

To implement an external secret store, you must configure the required settings by following these steps:

1. Set up and configure the secret storage provider, for example, HashiCorp Vault, or AWS Secret Manager.
    In most cases, this should only be done once for the entire cluster. For more information and support, contact the secret storage provider.
2. Install and configure a [Kubernetes Secrets Store CSI driver](https://secrets-store-csi-driver.sigs.k8s.io/#supported-providers), for example, [AWS Secrets Manager CSI Secrets Store](https://github.com/aws/secrets-store-csi-driver-provider-aws).
    This driver is installed globally for the entire cluster. For more information, refer to documentation supplied by the secret storage provider.
3. Prepare a Kubernetes `ServiceAccount` to be used for authentication. 
    The `ServiceAccount` name must match the [Mendix App CR](/developerportal/deploy/private-cloud-technical-appendix-01/) name (that, is, the internal name of the app environment). In addition, the `ServiceAccount` needs to have a `privatecloud.mendix.com/environment-account: "true"` annotation.
    Your secret storage provider may have other requirements - for more information, refer to documentation supplied by the secret storage provider. Typically, the Kubernetes `ServiceAccount` requires vendor-specific annotations to link it with an account or role in the secret storage provider.
4. Configure the [SecretProviderClass](https://secrets-store-csi-driver.sigs.k8s.io/getting-started/usage.html#create-your-own-secretproviderclass-object)
     The `SecretProviderClass` contains vendor-specific configuration that specifies mapping rules - where to read the keys, how to transform and rename them. You must configure it to match the Mendix App CR name, and use a specific list of mappable keys - for more information, see [SecretProviderClass Keys](#keys). In addition, the `SecretProviderClass` should have a `privatecloud.mendix.com/environment-class: "true"` annotation.
     Your secret store provider may have other requirements - for more information, refer to documentation supplied by the secret store provider.
5. Configure permissions to read secrets specified in the `SecretProviderClass`.
    The specific configuration requirements depend on your secret store provider. It usually involves allowing the Kubernetes `ServiceAccount` to access specific keys in Vault or in AWS console.

### 2.1 `SecretProviderClass` Keys {#keys}

The following table lists the properties used as keys for database and storage-related data. Use the following values when configuring the mapping rules in your `SecretProviderClass`.

| Data type | Key | Example | Required |
| --- | --- | --- | --- |
| Database type (for example, SQLSERVER, PostgreSQL) | `database-type` | `PostgreSQL` | ✓ |
| Database Jdbc Url | `database-jdbc-url` | `jdbc:postgresql://pg.example.com:5432/my-app-1?sslmode=prefer` |  | ✓ |
| Database Host | `database-host` | `pg.example.com:5432` | ✓ |
| Database Name | `database-name` | `my-app-1` | ✓ |
| Database Username | `database-username` | `my-app-user-1` | ✓ |
| Database Password | `database-password` | `Welc0me!` |  |
| Storage service name | `storage-service-name` | `com.mendix.storage.s3` | ✓ |
| S3 Storage endpoint | `storage-endpoint` | `https://my-app-bucket.s3.eu-west-1.amazonaws.com` | ✓ (only for S3) |
| S3 Storage access key id | `storage-access-key-id` | `AKIA################` |  |
| S3 Storage secret access key | `storage-secret-access-key` | `A#######################################` |  |
| S3 subdirectory (or bucket name for S3-like storage systems) | `storage-bucket-name` | `subdirectory` | ✓ (only for S3) |
| Azure storage account | `storage-azure-account-name` | `example` | ✓ (only for Azure Blob Storage) |
| Azure storage account key | `storage-azure-account-key` | `aw==` | ✓ (only for Azure Blob Storage) |
| Azure storage container name | `storage-azure-container` | `examplecontainer` | ✓ (only for Azure Blob Storage) |
| Use HTTP for Azure | `storage-azure-use-https` | `true` |  |
| Use configured CA trust for file storage | `storage-use-ca-certificates` | `true` |  |
| Delete files from storage when deleted in the app | `storage-perform-delete` | `true` |  |
| Mendix Admin Password | `mx-admin-password` | `Welc0me!` |  |
| App constant `{name}` | `mx-const-{name}` | `mx-const-MyFirstModule.WelcomePageTitle` |  |
| Runtime custom setting `{name}` | `mx-runtime-{name}` | `mx-runtime-com.mendix.storage.s3.EncryptionKeys` |  |

`storage-service-name` must specify one of the following supported blob storage providers:

* `com.mendix.storage.s3` for AWS S3 or S3-compatible providers
* `com.mendix.storage.azure` for Azure Blob Storage

{{% alert color="info" %}}
If your app is created in Mendix version 9.20 or above, and its Kubernetes service account is linked to an AWS IAM Role, you do not need to specify an `storage-access-key-id` or `storage-secret-access-key` to access an S3 bucket. Instead, you can use the same AWS IAM role for RDS authentication.
For more information and a complete walkthrough example, see [Configuring a Secret Store with AWS Secrets Manager](#configure-using-aws-secrets-manager).
{{% /alert %}}

{{% alert color="info" %}}
If your app is created in Mendix version 9.22 or above, and its Kubernetes service account is linked to an AWS IAM Role, you do not need to specify a `database-password` to access a Postgres RDS database. Instead, you can use the same AWS IAM role for RDS authentication.
For more information and a complete walkthrough example, see the [AWS RDS IAM authentication example](#configure-using-rds-iam).
{{% /alert %}}

To set a Mendix app constant, use the `mx-const-{name}` format (replace `{name}` with the name of the app constant).
For example, if you need to set the `MyFirstModule.WelcomePageTitle` constant, specify its value via the `mx-const-MyFirstModule.WelcomePageTitle` key.

To set a [Mendix Runtime custom setting](/refguide/custom-settings/), use the `mx-runtime-{name}` format (replace `{name}` with the name of the custom setting).
For example, if you need to set the `com.mendix.storage.s3.EncryptionKeys` constant, specify its value via the `mx-runtime-com.mendix.storage.s3.EncryptionKeys` key.

For a full configuration example, see [Configuring a Secret Store with AWS Secrets Manager](#configure-using-aws-secrets-manager).

{{% alert color="info" %}}
Most of the Mendix Runtime settings don't contain private data or are managed by the Mendix Operator, and overriding some values could lead to unexpected behavior.
Consult with Mendix Support to check if using CSI Secrets Storage for your use case would be considered a supported use case.
{{% /alert %}}

{{% alert color="info" %}}
When using CSI Secrets Storage for app credentials, Mendix Operator version 2.9.0 only supports S3 (or S3-compatible) storage.
To use Azure Blob Storage (keys with the `storage-azure-` prefix), upgrade to Mendix Operator version 2.10.0 or above.
{{% /alert %}}

{{% alert color="info" %}}
To load app constants (`mx-const-*` keys) and Mendix Runtime custom settings (`mx-runtime-*`) from CSI Secrets Storage, upgrade to Mendix Operator version 2.10.0 or above.
{{% /alert %}}

## 3 Sample Implementations

The following sections outline the process of implementing an external secret store with Vault and with AWS. You can refer to them as an example, and to help you troubleshoot your own implementation.

### 3.1 Configuring a Secret Store with Vault

To enable your environment to use Vault as external secret storage, follow these steps:

1. Install [Vault](https://developer.hashicorp.com/vault/docs/platform/k8s/helm) and its [CSI Secrets Driver](https://github.com/hashicorp/vault-csi-provider), if it is not already installed in the cluster.
2. Install [CSI Secret Store Driver](https://developer.hashicorp.com/vault/tutorials/kubernetes/kubernetes-secret-store-driver#install-the-secrets-store-csi-driver), as shown in the following example. Replace `<{ns}>` with the namespace name where Vault is installed:

    ```shell
    helm repo add secrets-store-csi-driver https://kubernetes-sigs.github.io/secrets-store-csi-driver/charts
    helm -n <{ns}> install csi secrets-store-csi-driver/secrets-store-csi-driver \
    --set syncSecret.enabled=true
    ```

3. Configure a Postgres or SQLServer database server with the following:
    * A dedicated database to store your secrets
    * An S3-compatible storage
4. Set up the secret in the database by starting an interactive shell session on the `vault-0` pod, as shown in the following example. Replace `<{ns}>` with the namespace name where Vault is installed:

    ```shell
    kubectl -n <ns> exec -it vault-0 -- /bin/sh
   ```

5. Enable the Kubernetes authentication method by running the following command:

    ```text
    vault auth enable kubernetes
    ```

6. Configure the Kubernetes authentication method to use the service account token, the location of the Kubernetes host, and its certificate, as shown in the following example:

    ```shell
    vault write auth/kubernetes/config \
    kubernetes_host=https://$KUBERNETES_SERVICE_HOST:$KUBERNETES_SERVICE_PORT \
    kubernetes_ca_cert=@/var/run/secrets/kubernetes.io/serviceaccount/ca.crt
    ```

7. Create a database secret in Vault, as shown in the following example. Replace `<{env-db-secret}>` with a unique name:

    ```shell
    vault kv put secret/<{env-db-secret}> database-type="PostgreSQL" database-jdbc-url="jdbc:postgresql://pg.example.com:5432/my-app-1?sslmode=prefer" database-host="pg.example.com:5432" database-name="my-app-1" database-username="my-app-user-1" database-password="Welc0me!"
    ```

8. Create a file storage secret in Vault, as shown in the following example. Replace `<{env-file-secret}>` with a unique name, and update any values to match your file storage configuration:

    ```shell
    vault kv put secret/<{env-file-secret}> storage-service-name="com.mendix.storage.s3" storage-endpoint="https://my-app-bucket.s3.eu-west-1.amazonaws.com" storage-access-key-id="AKIA################" storage-secret-access-key="A#######################################" storage-bucket-name="subdirectory" storage-use-ca-certificates="true" storage-perform-delete="true"
    ```

9. Create an app environment configuration secret in Vault, as shown in the following example. Replace `<{env-configuration-secret}>` with a unique name, and set any additional parameters:

    ```shell
    vault kv put secret/<{env-configuration-secret}> mx-admin-password="Welc0me!"
    ```

10. Create the required Vault role, as shown in the following example. Replace `<{env-policy}>` with a unique name to identify the app environment, and update any paths to match the secrets you created in the previous steps:

    ```shell
    vault policy write <{env-policy}> - <<EOF
    path "secret/data/<{env-db-secret}>" {
        capabilities = ["read"]
    }
    path "secret/data/<{env-file-secret}>" {
        capabilities = ["read"]
    }
    path "secret/data/<{env-configuration-secret}>" {
        capabilities = ["read"]
    }
    EOF
    ```

11. Bind the Vault role to a Kubernetes service, as shown in the following example. Replace `<{env-policy}>` with the policy name from the previous step, use a unique role name in place of `<{env-role}>`, and specify the environment's Kubernetes namespace and ServiceAccount in place of `<{env-namespace}>` and `<{env-serviceaccount}>`):

    ```shell
    vault write auth/kubernetes/role/<{env-role}> \
      bound_service_account_names=<{env-serviceaccount}> \
      bound_service_account_namespaces=<{env-namespace}> \
      policies=<{env-policy}>
    ```

12. Create a Kubernetes `ServiceAccount` for your environment, as shown in the following example. Specify the environment's Kubernetes namespace and ServiceAccount in place of `<{env-namespace}>` and `<{env-serviceaccount}>`:

    ```shell
    kubectl -n <{env-namespace}> create serviceaccount <{env-serviceaccount}>
    kubectl -n <{env-namespace}> annotate serviceaccount <{env-serviceaccount}> privatecloud.mendix.com/environment-account=true
    ```

13. Create the `SecretProviderClass` CR for the Secrets Store CSI Driver:

    ```yaml
    apiVersion: secrets-store.csi.x-k8s.io/v1
    kind: SecretProviderClass
    metadata:
      name: <{MendixApp CR name}>
      annotations:
        privatecloud.mendix.com/environment-class: "true"
    spec:
      provider: vault
      parameters:
        vaultAddress: "http://vault.{<Vault-namespace>}.svc.cluster.local:8200"
        roleName: "<{env-role}>"
        objects: |
          - secretKey: "database-type"
            objectName: "database-type"
            secretPath: "secret/data/<{env-db-secret}>"
          - secretKey: "database-jdbc-url"
            objectName: "database-jdbc-url"
            secretPath: "secret/data/<{env-db-secret}>"
          - secretKey: "database-username"
            objectName: "database-username"
            secretPath: "secret/data/<{env-db-secret}>"
          - secretKey: "database-password"
            objectName: "database-password"
            secretPath: "secret/data/<{env-db-secret}>"
          - secretKey: "database-host"
            objectName: "database-host"
            secretPath: "secret/data/<{env-db-secret}>"
          - secretKey: "database-name"
            objectName: "database-name"
            secretPath: "secret/data/<{env-db-secret}>"
          - secretKey: "storage-service-name"
            objectName: "storage-service-name"
            secretPath: "secret/data/<{env-file-secret}>"
          - secretKey: "storage-endpoint"
            objectName: "storage-endpoint"
            secretPath: "secret/data/<{env-file-secret}>"
          - secretKey: "storage-access-key-id"
            objectName: "storage-access-key-id"
            secretPath: "secret/data/<{env-file-secret}>"
          - secretKey: "storage-secret-access-key"
            objectName: "storage-secret-access-key"
            secretPath: "secret/data/<{env-file-secret}>"
          - secretKey: "storage-bucket-name"
            objectName: "storage-bucket-name"
            secretPath: "secret/data/<{env-file-secret}>"
          - secretKey: "storage-perform-delete"
            objectName: "storage-perform-delete"
            secretPath: "secret/data/<{env-file-secret}>"
          - secretKey: "storage-use-ca-certificates"
            objectName: "storage-use-ca-certificates"
            secretPath: "secret/data/<{env-file-secret}>"
          - secretKey: "mx-admin-password"
            objectName: "mx-admin-password"
            secretPath: "secret/data/<{env-configuration-secret}>"
          # Example: use MyFirstModule.MyConstant constant value from AWS Secrets Manager
          #- secretKey: "MyFirstModule.MyConstant"
          #  objectName: "mx-const-MyFirstModule.MyConstant"
          #  secretPath: "secret/data/<{env-configuration-secret}>"
          # Example: use com.mendix.storage.s3.EncryptionKeys custom setting from AWS Secrets Manager
          #- secretKey: "com.mendix.storage.s3.EncryptionKeys"
          #  objectName: "mx-runtime-com.mendix.storage.s3.EncryptionKeys"
          #  secretPath: "secret/data/<{env-configuration-secret}>"
    ```

14. Create an app with the secret store enabled. If you are using the Portal, secret stores are enabled automatically if the **Enable Secrets Store** option is activated for the namespace where you create the app. For a standalone app, you must set the value of the `allowOverrideSecretsWithSecretStoreCSIDriver` setting to `true`in the Mendix app CRD.
    The following yaml shows an example Mendix app CRD:
    
    ```yaml
    cat > mendixApp.yaml <<EOF
    apiVersion: privatecloud.mendix.com/v1alpha1
    kind: MendixApp
    metadata:
      name: <{Mendix App CR name}>
    spec:
      mendixRuntimeVersion: 9.4.0.24572
      allowOverrideSecretsWithSecretStoreCSIDriver: true
      replicas: 1
      resources:
        limits:
          cpu: "1"
          memory: 512Mi
        requests:
          cpu: 100m
          memory: 512Mi
      runtime:
        customConfiguration: '{"ScheduledEventExecution":"NONE","MicroflowConstants":"{\"MyFirstModule.MyConstant\":\"Awesome\",\"RestClient.RestServiceUrl\":\"https://go-dummy-app.privatecloud-storage-tls.svc.cluster.local\",\"Atlas_Core.Atlas_Core_Version\":\"3.0.5\"}"}'
        dtapMode: D
        logAutosubscribeLevel: INFO
        runtimeLicense: {}
      runtimeMetricsConfiguration: {}
      sourceURL: oci-image://<{image URL}>
      sourceVersion: 0.0.0.87
    EOF
    ```

{{% alert color="warning" %}}These examples are provided for [KV Secrets Engine - Version 2](https://developer.hashicorp.com/vault/docs/secrets/kv/kv-v2). When setting policies or reading keys from the Vault `kv-v2` keystore, paths should be prefixed with `secrets/data/`. Please refer to the [Hashicorp Vault documentation](https://developer.hashicorp.com/vault/docs) for more information.{{% /alert %}}

### 3.2 Configuring a Secret Store with AWS Secrets Manager {#configure-using-aws-secrets-manager}

To enable your environment to use [AWS Secrets Manager](https://aws.amazon.com/blogs/security/how-to-use-aws-secrets-configuration-provider-with-kubernetes-secrets-store-csi-driver/) as external secret storage, follow these steps:

1. In AWS Secrets Manager, create a new secret of the type **Other**.
2. Define the keys as described in the [SecretProviderClass Keys](#keys) section above, and then click **Next**. 
3. Enter the secret name, for example, `<namespace>/<Kubernetes environment name>`.
4. Follow the wizard to complete the secret creation process.
5. Open the secret and copy the **Secret name** and **Secret ARN**.
6. In the Cloud Portal, create an environment using secrets storage, with no database or storage plan.
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

9. Allow a Kubernetes ServiceAccount to assume a role.

    1. Open the role for editing and add an entry for the ServiceAccount(s) to the list of conditions:

        {{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-deploy/awsserviceaccountlinktorole.png" >}}

    2. For the second condition, copy and paste the `sts.amazonaws.com` line; replace `:aud` with `:sub` and set it to `system:serviceaccount:<Kubernetes namespace>:<Kubernetes serviceaccount name>`.

        See [Amazon EKS Pod Identity Webhook – EKS Walkthrough](https://github.com/aws/amazon-eks-pod-identity-webhook#eks-walkthrough) for more details.

        The role ARN is required, you can use the **Copy** button next to the ARN name in the role details.

        After this, the specified serviceaccount in the specified namespace will be able to assume this role.
       
10. Create a Kubernetes `ServiceAccount` for your environment:

    ```shell
    kubectl -n <{Kubernetes namespace}> create serviceaccount <{environment name}>
    kubectl -n <{Kubernetes namespace}> annotate serviceaccount <{environment name}> privatecloud.mendix.com/environment-account=true
    kubectl -n <{Kubernetes namespace}> annotate serviceaccount <{environment name}> eks.amazonaws.com/role-arn=<{aws role ARN}>
    ```

11. Create an app with the secret store enabled. If you are using connected mode, secret stores are enabled automatically if the **Enable Secrets Store** option is activated for the namespace where you create the app. For a standalone app, you must set the value of the setting `allowOverrideSecretsWithSecretStoreCSIDriver` to `true`in the Mendix app CRD.

    The following yaml shows an example Mendix app CRD:
    
    ```yaml
    cat > mendixApp.yaml <<EOF
    apiVersion: privatecloud.mendix.com/v1alpha1
    kind: MendixApp
    metadata:
      name: <{Mendix App CR name}>
    spec:
      mendixRuntimeVersion: 9.4.0.24572
      allowOverrideSecretsWithSecretStoreCSIDriver: true
      replicas: 1
      resources:
        limits:
          cpu: "1"
          memory: 512Mi
        requests:
          cpu: 100m
          memory: 512Mi
      runtime:
        customConfiguration: '{"ScheduledEventExecution":"NONE","MicroflowConstants":"{\"MyFirstModule.MyConstant\":\"Awesome\",\"RestClient.RestServiceUrl\":\"https://go-dummy-app.privatecloud-storage-tls.svc.cluster.local\",\"Atlas_Core.Atlas_Core_Version\":\"3.0.5\"}"}'
        dtapMode: D
        logAutosubscribeLevel: INFO
        runtimeLicense: {}
      runtimeMetricsConfiguration: {}
      sourceURL: oci-image://<{image URL}>
      sourceVersion: 0.0.0.87
    EOF
    ```

12. Attach the secret to the environment by applying the following Kubernetes yaml:

    ```yaml
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
            - path: '"storage-use-ca-certificates"'
              objectAlias: "storage-use-ca-certificates"
            - path: '"mx-admin-password"'
              objectAlias: "mx-admin-password"
            # Example: use MyFirstModule.MyConstant constant value from AWS Secrets Manager
            #- path: '"MyFirstModule.MyConstant"'
            #  objectAlias: "mx-const-MyFirstModule.MyConstant"
            # Example: use com.mendix.storage.s3.EncryptionKeys custom setting from AWS Secrets Manager
            #- path: '"com.mendix.storage.s3.EncryptionKeys"'
            #  objectAlias: "mx-runtime-com.mendix.storage.s3.EncryptionKeys"
    ```

In the above example, `path` specifies the key name from the original AWS Secret (Secret Manager key), and `objectAlias` specifies how it will be named when mounted into the sidecar. Do not modify `objectAlias`, as it matches the AWS `objectName`.

If your app is created in Mendix version 9.20 or above, you can remove `storage-access-key-id` and `storage-secret-access-key` parameters, and instead attach this IAM policy to the app's IAM role (replace `<bucket_name>` with the name of the S3 bucket):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:AbortMultipartUpload",
        "s3:DeleteObject",
        "s3:GetObject",
        "s3:ListMultipartUploadParts",
        "s3:PutObject"
      ],
      "Resource": [
        "arn:aws:s3:::<bucket_name>/*"
      ]
    }
  ]
}
```

This means that the app authenticates with the AWS S3 API using AWS IRSA instead of static credentials.

### 3.3 Using IAM authentication for AWS RDS databases {#configure-using-rds-iam}

AWS RDS Postgres databases can use [IAM database authentication](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html) instead of regular passwords.

To use this feature, you need to:

* Use an AWS RDS Postgres database with [IAM authentication enabled](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.Enabling.html).
* Use Mendix Operator version 2.10.1 and above.
* Use Mendix 9.22 and above.
* Complete the steps described in [Configuring a Secret Store with AWS Secrets Manager](#configure-using-aws-secrets-manager).

After completing the prerequisites, follow these steps to switch from password-based authentication to IAM authentication:

1. Remove or comment out `database-password` from the `SecretProviderClass` and the associated AWS Secret.
2. Enable [IAM authentication](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.DBAccounts.html#UsingWithRDS.IAMDBAuth.DBAccounts.PostgreSQL) for the `database-username` role by using the `psql` commandline to run the following commands (replacing `<database-username>` with the username specified in `database-username`):

   ```sql {linenos=false}
   GRANT rds_iam TO <database-username>;
   ALTER ROLE <database-username> WITH PASSWORD NULL;
   ```

   {{% alert color="info" %}}This step is not necessary if the RDS instance was created with only IAM authentication enabled, and if `database-username` is the default (primary) user.{{% /alert %}}
3. Attach the following inline IAM policy to the environment's IAM role (created when [Configuring a Secret Store with AWS Secrets Manager](#configure-using-aws-secrets-manager)):

   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Action": [
           "rds-db:connect"
         ],
         "Resource": [
           "arn:aws:rds-db:<db-region>:<account-id>:dbuser:<db-resource-id>/<database-username>"
         ]
       }
     ]
   }
   ```

   replacing `<db-region>` with the RDS database region, `<account-id>` with the AWS account ID, `<db-resource-id>` with the database Resource ID and `<database-username>` with the username specified in `database-username`.
   
   For more information on how to get the Resource ID and create an RDS IAM policy, see the [AWS documentation](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.IAMPolicy.html).
4. Restart the Mendix app environment.

When using IAM authentication, the Mendix app's environment (`m2ee-sidecar` container) uses that app's attached IAM role to request a new Postgres password every 10 minutes from the [RDS API](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.Connecting.Go.html). These passwords expire after 15 minutes.
Passwords are only checked when opening a new connection, so an expired password does not cancel any existing connections or interrupt any running database transactions and queries.

## 4 Additional considerations {#additional-considerations}

When implementing a secret store, keep in mind the following considerations:

* It is not currently possible to use Storage Plans with CSI Secrets Storage. Instead, your infrastructure admin must attach a Kubernetes `ServiceAccount` and `SecretProviderClass` would be attached to the app before or after the environment is created.
* If a secret is rotated or updated, Mendix Operator version 2.10.0 and above will detect the changes and apply them. However (depending on the Mendix Runtime version in use), the changes might not be applied. If the changes are not applied, you should restart the environment. Bear in mind the following features of detecting a changed secret:
    * There is a delay of a few minutes before the CSI Secrets Storage driver detects the changes.
    * Only file storage credentials and `MxAdmin` password changes are correctly processed at the moment.
    * In Mendix version 9.22 or above, database password rotation is processed without restarting the app.
* Dynamic secrets in HashiCorp Vault are supported - from the app environment, they are identical to regular secrets.
* The internal name of the environment must match an existing `ServiceAccount` and `SecretProviderClass`.
* CSI Secrets Storage can override app settings — if a parameter is configured in the Developer Portal or `MendixApp` CR, the value from CSI Secrets Storage will have a higher priority and will override the value specified elsewhere. For example, CSI Secrets Storage can override the `MxAdmin` password, app constants, and runtime custom settings.
