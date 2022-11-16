---
title: "Integrate Kubernetes with Secret Stores"
url: /developerportal/deploy/secret-store-credentials/
description: "Describes the process for using external secret stores for Kubernetes secrets"
weight: 20
tags: ["Deploy", "Private Cloud", "Secrets", "Secret Stores", "Vault", "Kubernetes", "AWS"]
---

## 1 Introduction

You can increase the security of your environment by implementing an external secrets store to manage your Kubernetes secrets.
Environments running Mendix for Private Cloud can be granted read-only access to a secrets store by using a [Kubernetes Secrets Store CSI Driver](https://secrets-store-csi-driver.sigs.k8s.io/). This document outlines the high-level process, and provides example implementations for HashiCorp Vault and AWS Secrets Manager.

{{% alert color="info" %}}Using an external secret storage provides multiple benefits, such as rotating credentials from a single location, collecting audit logs and dynamically generating role-specific credentials.

However, using a secret storage incorrectly may reduce the security of your app. This document describes a simplified approach to setting up Vault and should not be used for production environments. Consult with your secrets store provider to ensure that it is set up securely for your production environment.{{% /alert %}}

## 2 Configuring Your Environment

To implement an external secret store, you must configure the required settings by following these steps:

1. Set up and configure the secret storage provider, for example, HashiCorp Vault, or AWS Secret Manager.
    In most cases, this should only be done once for the entire cluster. For more information and support, contact the secret storage provider.
2. Install and configure a [Kubernetes Secrets Store CSI driver](https://secrets-store-csi-driver.sigs.k8s.io/#supported-providers), for example, [AWS Secrets Manager CSI Secrets Store](https://github.com/aws/secrets-store-csi-driver-provider-aws).
    This driver is installed globally for the entire cluster. For more information, refer to documentation supplied by the secret storage provider.
3. Prepare a Kubernetes `ServiceAccount` to be used for authentication. 
    The `ServiceAccount` name must match the [Mendix App CR](/deploy/private-cloud-technical-appendix-01/) name (that, is, the internal name of the app environment). In addition, the `ServiceAccount` needs to have a `privatecloud.mendix.com/environment-account: "true"` annotation.
    Your secret storage provider may have other requirements - for more information, refer to documentation supplied by the secret storage provider. Typically, the Kubernetes `ServiceAccount` requires vendor-specific annotations to link it with an account or role in the secret storagee provider.
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
| Database Password | `database-password` | `Welc0me!` | ✓ |
| Storage service name | `storage-service-name` | `com.mendix.storage.s3` | ✓ |
| Storage endpoint | `storage-endpoint` | `https://my-app-bucket.s3.eu-west-1.amazonaws.com` | ✓ |
| Storage access key id | `storage-access-key-id` | `AKIA################` |  |
| Storage secret access key | `storage-secret-access-key` | `A#######################################` |  |
| S3 subdirectory (or bucket name for S3-like storage systems) | `storage-bucket-name` | `subdirectory` | ✓ |
| Use configured CA trust for file storage | `storage-use-ca-certificates` | `true` |  |
| Delete files from storage when deleted in the app | `storage-perform-delete` | `true` |  |
| Mendix Admin Password | `mx-admin-password` | `Welc0me!` |  |


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
    issuer="https://kubernetes.default.svc.cluster.local" \
    token_reviewer_jwt="$(cat /var/run/secrets/kubernetes.io/serviceaccount/token)" \
    kubernetes_host="https://$KUBERNETES_PORT_443_TCP_ADDR:443" \
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
    path "secret/<{env-db-secret}>" {
        capabilities = ["read"]
    }
    path "secret/<{env-file-secret}>" {
        capabilities = ["read"]
    }
    path "secret/<{env-configuration-secret}>" {
        capabilities = ["read"]
    }
    EOF
    ```
11. Bind the Vault role to a k8s service, as shown in the following example. Replace `<{env-policy}>` with the policy name from the previous step, use a unique role name in place of `<{env-role}>`, and specify the environment's Kubernetes namespace and ServiceAccount in place of `<{env-namespace}>` and `<{env-serviceaccount}>`):
    ```shell
    vault write auth/kubernetes/role/<{env-role}> \
      bound_service_account_names=<{env-serviceaccount}> \
      bound_service_account_namespaces=<{env-namespace}> \
      policies=<{env-policy}> \
    ```
12. Create a Kubernetes `ServiceAccount` for your environment, as shown in the following example. Specify the environment's Kubernetes namespace and ServiceAccount in place of `<{env-namespace}>` and `<{env-serviceaccount}>`:
    ```shell
    kubectl -n <{env-namespace}> create serviceaccount <{env-serviceaccount}>
    kubectl -n <{env-namespace}> annotate serviceaccount <{env-serviceaccount}> privatecloud.mendix.com/environment-account=true
    ```
13. Create the `SecretProviderClass` CR for the Secrets Store CSI Driver:
    ```yaml
    apiVersion: secrets-store.csi.x-k8s.io/v1alpha1
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
            secretPath: "secret/<{env-db-secret}>"
          - secretKey: "database-jdbc-url"
            objectName: "database-jdbc-url"
            secretPath: "secret/<{env-db-secret}>"
          - secretKey: "database-username"
            objectName: "database-username"
            secretPath: "secret/<{env-db-secret}>"
          - secretKey: "database-password"
            objectName: "database-password"
            secretPath: "secret/<{env-db-secret}>"
          - secretKey: "database-host"
            objectName: "database-host"
            secretPath: "secret/<{env-db-secret}>"
          - secretKey: "database-name"
            objectName: "database-name"
            secretPath: "secret/<{env-db-secret}>"
          - secretKey: "storage-service-name"
            objectName: "storage-service-name"
            secretPath: "secret/<{env-file-secret}>"
          - secretKey: "storage-endpoint"
            objectName: "storage-endpoint"
            secretPath: "secret/<{env-file-secret}>"
          - secretKey: "storage-access-key-id"
            objectName: "storage-access-key-id"
            secretPath: "secret/<{env-file-secret}>"
          - secretKey: "torage-secret-access-key"
            objectName: "storage-secret-access-key"
            secretPath: "secret/<{env-file-secret}>"
          - secretKey: "storage-bucket-name"
            objectName: "storage-bucket-name"
            secretPath: "secret/<{env-file-secret}>"
          - secretKey: "storage-perform-delete"
            objectName: "storage-perform-delete"
            secretPath: "secret/<{env-file-secret}>"
          #- secretKey: "storage-use-ca-certificates"
          #  objectAlias: "storage-use-ca-certificates"
          #  secretPath: "secret/<{env-file-secret}>
          - secretKey: "mx-admin-password"
            objectName: "mx-admin-password"
            secretPath: "secret/<{env-configuration-secret}>"
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

### 3.2 Configuring a Secret Store with AWS Secrets Manager

To enable your environment to use AWS Secrets Manager as external secret storage, follow these steps:

1. In AWS Secrets Manager, create a new secret of the type **Other**.
2. Define the keys as described in the [SecretProviderClass Keys](#keys) section above, and then click **Next**. 
3. Enter the secret name, for example, `<namespace>/<k8s environment name>`.
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
9. Create a Kubernetes `ServiceAccount` for your environment:
    ```shell
    kubectl -n <{k8s namespace}> create serviceaccount <{environment name}>
    kubectl -n <{k8s namespace}> annotate serviceaccount <{environment name}> privatecloud.mendix.com/environment-account=true
    kubectl -n <{k8s namespace}> annotate serviceaccount <{environment name}> eks.amazonaws.com/role-arn=<{aws role ARN}>
    ```
10. Create an app with the secret store enabled. If you are using the Portal, secret stores are enabled automatically if the **Enable Secrets Store** option is activated for the namespace where you create the app. For a standalone app, you must set the value of the `allowOverrideSecretsWithSecretStoreCSIDriver` setting to `true`in the Mendix app CRD.
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
11. Attach the secret to the environment by applying the following k8s yaml:
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
            #- path: '"storage-use-ca-certificates"'
            #  objectAlias: "storage-use-ca-certificates"
            - path: '"mx-admin-password"'
              objectAlias: "mx-admin-password"
    ```

In the above example, `path` specifies the key name from the original AWS Secret (Secret Manager key), and `objectAlias` specifies how it will be named when mounted into the sidecar. Do not modify `objectAlias`, as it matches the Vault `objectName`.

## 4 Additional considerations {#additional-considerations}

When implementing a secret store, keep in mind the following considerations:

* It is not currently possible to use Storage Plans with CSI Secrets Storage. Instead, your infrastructure admin must attach a Kubernetes `ServiceAccount` and `SecretProviderClass` would be attached to the app before or after the environment is created.
* If a secret is rotated or updated, the app should be restarted to use new credentials.
* Dynamic secrets in HashiCorp Vault are supported - from the app environment, they are identical to regular secrets.
* The internal name of the environment must match an existing `ServiceAccount` and `SecretProviderClass`.
* CSI Secrets Storage can override app settings - if a parameter is configured in the Cloud Portal or `MendixApp` CR, its value from CSI Secrets Storage will have a higher priority and will override the value specified in the Cloud Portal. Currently this applies only to the `MxAdmin` password. In the future, this may also include app constants and other settings.
