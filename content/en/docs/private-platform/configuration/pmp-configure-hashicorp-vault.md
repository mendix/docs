---
title: "Configuring External Secret Management with HashiCorp Vault"
url: /private-mendix-platform/configure-hashicorp-vault/
description: "Documents the configuration of Hashicorp Vault for the Private Mendix Platform."
weight: 40
---

## Introduction

The Private Mendix Platform offers enhanced security and flexibility for credential management by supporting HashiCorp Vault as an external secret management solution. This integration uses Vault's Kubernetes Auth Method, allowing your Mendix application running in Kubernetes to authenticate password-lessly using its assigned Kubernetes Service Account identity.

This document describes how to configure HashiCorp Vault integration using either a custom Kubernetes Service Account (for example, the recommended value is `pmp-secret-accessor`) or the built-in default Service Account. It utilizes a centralized secret structure within Vault for storing all platform credentials.

{{% alert color="info" %}}
This integration requires the use of HashiCorp Vault's Key-Value (KV) Version 2 secrets engine. Using KV Version 1 or other secret engines is not supported and will not work.
{{% /alert %}}

## Prerequisites

Before configuring HashiCorp Vault integration, prepare the following:

* A running HashiCorp Vault instance (v1.9+ recommended) accessible from your Kubernetes cluster, with the KV Version 2 secrets engine enabled at your chosen mount path (for example, `pmp-dev`).
* Vault administrative privileges to enable `auth` methods, create policies, and create roles.
* Access to the Private Mendix Platform project admin panel with administrative privileges.
* Basic knowledge of HashiCorp Vault, Vault policies, KV v2 engine, and Kubernetes.
* An existing Kubernetes cluster (for example, EKS, AKS, OpenShift, Generic) with the OIDC Issuer feature enabled and discoverable.
* If using a custom Service Account, permissions to create or modify `ServiceAccount` and Mendix Runtime resources in your Kubernetes cluster.
* Kubectl configured to connect to your target Kubernetes cluster.
* Vault CLI installed and configured (at least initially with admin access to Vault).
* Cloud provider CLI (for example, `aws`, `az`) if using EKS or AKS, for easier configuration discovery.
* Optional: `jq` command-line JSON processor (`brew install` jq or download) for easier parsing of CLI output.

## Configuring External Secret Management

To configure external secret management, perform the following steps:

1. Store your credentials in a centralized KV v2 path. For more information, see [Creating Secrets in Vault](#create-vault-secret).
2. Enable and configure the Kubernetes authentication method, create a policy, and create a role bound to the chosen Service Account (custom or default). For more information, see [Configuring the Kubernetes Authentication Method](#configure-k8s-auth).
3. Ensure the Mendix Operator is set up correctly and, if using a custom Service Account, create it and assign it to your Mendix application. For more information, see [Configuring Kubernetes for Private Mendix Platform](#configure-k8s-for-pmp).
4. Point the credentials in the PMP admin panel to your Vault path. For more information, see [Configuring the Private Mendix Platform Credentials](#configure-pmp-credentials).

### Creating Secrets in Vault {#create-vault-secret}

Store all Private Mendix Platform secrets as key-value pairs within a single secret path in Vault's KV Version 2 engine (for example, `pmp-dev/admin`). This centralizes all credentials.

Within this single secret path, the key must exactly match the credential name required by Mendix (using dots, for example, `Marketplace.ImportCDNPassword`), and the value must be the actual secret string. 

{{% alert color="info" %}}
Do not use a nested `value=` key structure.
{{% /alert %}}

1. Log in to the Vault CLI with appropriate permissions (for example, `set VAULT_ADDR` and `VAULT_TOKEN`).
2. If your target mount path (for example, `pmp-dev/`) does not exist, or is not a KV v2 engine, run the following command:

    ```bash
    vault secrets enable -path=pmp-dev kv-v2
    ```

    If the path is already in use, the command fails safely.

3. Run the `vault kv put` command once for the central secret path (for example, `pmp-dev/admin`), listing all non-empty key-value pairs as arguments.

{{% alert color="info" %}}
Crucially for KV v2, the path structure for the `put` command is `{KV_MOUNT}/data/{CENTRAL_SECRET_NAME}`.

Use the Mendix Key Name as the key. For more information about the naming convention, see [Naming Convention for Key Properties](#naming-convention). Only include keys that have non-empty values. Replace placeholder values with your actual secrets.
{{% /alert %}}

For example, if your **Central Secret Name** in the Mendix UI will be `http://<VAULT_ADDR>:8200/pmp-dev/admin`, run the following Bash script:

```bash
# Note the required "/data/" in the path for the CLI 'put' command with KV v2
# Add ALL non-empty secrets as key=value pairs to this single command
vault kv put pmp-dev/data/admin \
    VCS.BitbucketProjectAdminPAT="YOUR_PAT_TOKEN" \
    VCS.BitbucketAdminPassword="YOUR_PASSWORD" \
    VCS.AzureDevOpsOrgAdminPAT="YOUR_AZDO_PAT" \
    BuildPackage.FileBasicAuthPassword="YOUR_PASSWORD" \
    BuildPackage.AwsSecretAccessKey="YOUR_AWS_SECRET_KEY" \
    RuntimeBaseImage.PrivateRegistryPassword="YOUR_REGISTRY_PASSWORD" \
    MDAStorage.FileBasicAuthPassword="YOUR_PASSWORD" \
    MDAStorage.AwsSecretAccessKey="YOUR_AWS_SECRET_KEY" \
    OCIRegistry.PrivateRegistryPassword="YOUR_OCI_PASSWORD" \
    OCIRegistry.S3CompatibleAccessKey="YOUR_S3_KEY" \
    BuildCluster.KubernetesConfigureToken="YOUR_K8S_TOKEN" \
    CIAdmin.JenkinsConfigureAPIToken="YOUR_JENKINS_TOKEN" \
    CIAdmin.JenkinsTriggerAuthToken="YOUR_TRIGGER_TOKEN" \
    ClusterManager.KubernetesApiToken="YOUR_K8S_API_TOKEN" \
    Marketplace.ImportCDNPassword="YOUR_MARKETPLACE_PASSWORD" \
    Email.SMTPPassword="YOUR_SMTP_PASSWORD"
    # Add any other non-empty key=value pairs here based on the Naming Convention
```

This command creates or updates the single `admin` secret under the `pmp-dev` mount path to contain all the specified credentials.

#### Example Structure

* **KV v2 Engine Mount Path** - `pmp-dev/`
* **Central Secret Name** - `admin` (This single path under the mount holds all secrets.)
* **Your UI Input (SecretName)** - `http://<VAULT_ADDR>:8200/pmp-dev/admin` (Used for all credentials.)
* **Credential Key (KeyName)** - `Marketplace.ImportCDNPassword`
* **Vault API Path** - `pmp-dev/data/admin`
* **Data Stored** - `{"Marketplace.ImportCDNPassword": "PLACEHOLDER_PASSWORD", "VCS.BitbucketAdminPassword": "PLACEHOLDER_PASSWORD", ...}`

#### Naming Convention for Key Properties {#naming-convention}

Use the exact key names specified by Private Mendix Platform, with dots (`.`) as separators, as the keys within your central Vault secret (for example, `pmp-dev/admin`).

* **VCS**

    * `VCS.BitbucketProjectAdminPAT`
    * `VCS.BitbucketAdminPassword`
    * `VCS.GitlabGroupOwnerPAT`
    * `VCS.GitlabAdminPAT`
    * `VCS.GithubOrgOwnerPAT`
    * `VCS.GithubAdminPAT`
    * `VCS.GithubEnterpriseClientSecret`
    * `VCS.AzureDevOpsOrgAdminPAT`
    * `VCS.AzureAuthSecret`

* **Kubernetes Build Settings**

    * `BuildPackage.FileBasicAuthPassword`
    * `BuildPackage.AwsSecretAccessKey`
    * `RuntimeBaseImage.PrivateRegistryPassword`
    * `RuntimeBaseImage.S3CompatibleAccessKey`
    * `MDAStorage.FileBasicAuthPassword`
    * `MDAStorage.AwsSecretAccessKey`
    * `OCIRegistry.PrivateRegistryPassword`
    * `OCIRegistry.S3CompatibleAccessKey`

* **Build Cluster Settings**

    * `BuildCluster.KubernetesConfigureToken`
    * `CIAdmin.JenkinsConfigureAPIToken`
    * `CIAdmin.JenkinsTriggerAuthToken`
    * `CIAdmin.AzureOrgAdminPAT`
    * `CIAdmin.AzureBlobStorageToken`
    * `CIAdmin.AzureAwsS3SK`

* **Cluster Manager**

    * `ClusterManager.KubernetesApiToken`
    * `ClusterSettings.KubernetesAdminPassword`
    * `ClusterSettings.GrafanaAPIKey`
    * `ClusterSettings.MDAAWSS3AccessKey`
    * `ClusterSettings.OCIRegistryPassword`

* **Marketplace**

    * `Marketplace.ImportCDNPassword`

* **Email**

    * `Email.SMTPPassword`

### Configuring the Kubernetes Authentication Method {#configure-k8s-auth}

Configure the Kubernetes authentication method to allows pod to authenticate using their Kubernetes Service Account token.

1. Enable the Kubernetes authentication method by running the following command:

    ```bash
    # Ensure VAULT_ADDR and VAULT_TOKEN are set appropriately
    vault auth enable kubernetes
    ```

2. Configure the following properties to enable Vault to find and trust your Kubernetes cluster's API server and OIDC issuer:

    * **Kubernetes Host URL (K8S_HOST)** - The address of the Kubernetes API server endpoint reachable by Vault.
    * **Kubernetes CA Certificate (K8S_CA_CERT)** - The CA certificate bundle Vault uses to verify the Kubernetes API server.
    * **Token Validation Method** - Either the OIDC Issuer URL (**K8S_ISSUER**, preferred for Kubernetes 1.21 and newer) or a Token Reviewer JWT (**TOKEN_REVIEWER_JWT**).

3. Choose one of the following options, according to your Kubernetes distribution.

    Carefully replace all placeholders like `<YOUR_EKS_CLUSTER_NAME>` with your actual values. 
    
    Ensure that your Vault instance  can network-reach the K8S_HOST address. Firewall rules might be necessary. 
    
    If using `token_reviewer_jwt`, the associated Service Account needs cluster permissions to review tokens (`system:auth-delegator`). 
    
    Use the correct CA certificate for your cluster. The commands attempt to extract it from your current kubectl configuration.

    * For EKS:

        ```bash
        # Replace <...> placeholders with your specific EKS values
        export EKS_CLUSTER_NAME="<YOUR_EKS_CLUSTER_NAME>"
        export KUBECONFIG_CLUSTER_NAME="<YOUR_EKS_CLUSTER_ARN_OR_NAME_IN_KUBECONFIG>"

        # Get EKS OIDC Issuer URL (Preferred)
        K8S_ISSUER=$(aws eks describe-cluster --name "$EKS_CLUSTER_NAME" --query "cluster.identity.oidc.issuer" --output text)
        if [ -z "$K8S_ISSUER" ] || [ "$K8S_ISSUER" == "None" ]; then echo "Error: OIDC Issuer not found for cluster $EKS_CLUSTER_NAME. Ensure it's enabled."; exit 1; fi

        # Get EKS API Server Endpoint
        K8S_HOST=$(aws eks describe-cluster --name "$EKS_CLUSTER_NAME" --query "cluster.endpoint" --output text)

        # Get Kubernetes CA Certificate (from your local kubeconfig)
        K8S_CA_CERT_BASE64=$(kubectl config view --raw -o jsonpath="{.clusters[?(@.name==\"$KUBECONFIG_CLUSTER_NAME\")].cluster.certificate-authority-data}")
        if [ -z "$K8S_CA_CERT_BASE64" ]; then echo "Error: CA cert not found for cluster name $KUBECONFIG_CLUSTER_NAME in kubeconfig."; exit 1; fi
        K8S_CA_CERT=$(echo "$K8S_CA_CERT_BASE64" | base64 --decode)

        # Write the configuration to Vault (using OIDC issuer)
        echo "Configuring Vault K8s auth for EKS cluster: $EKS_CLUSTER_NAME"
        vault write auth/kubernetes/config \
            issuer="$K8S_ISSUER" \
            kubernetes_host="$K8S_HOST" \
            kubernetes_ca_cert="$K8S_CA_CERT"
        ```

    * For AKS:

        ```bash
        # Replace <...> placeholders with your specific AKS values
        export AKS_RESOURCE_GROUP="<YOUR_RESOURCE_GROUP>"
        export AKS_CLUSTER_NAME="<YOUR_AKS_CLUSTER_NAME>"

        # Get AKS OIDC Issuer URL (Preferred) - Requires OIDC feature enabled on AKS
        K8S_ISSUER=$(az aks show --resource-group "$AKS_RESOURCE_GROUP" --name "$AKS_CLUSTER_NAME" --query "oidcIssuerProfile.issuerUrl" -o tsv)
        if [ -z "$K8S_ISSUER" ] || [ "$K8S_ISSUER" == "None" ]; then echo "Warning: OIDC Issuer not found/enabled for cluster $AKS_CLUSTER_NAME. Consider enabling it or using the Token Reviewer method."; exit 1; fi

        # Get AKS API Server Endpoint
        K8S_HOST_FQDN=$(az aks show --resource-group "$AKS_RESOURCE_GROUP" --name "$AKS_CLUSTER_NAME" --query "fqdn" -o tsv)
        K8S_HOST="https://${K8S_HOST_FQDN}"

        # Get Kubernetes CA Certificate (from your local kubeconfig)
        K8S_CA_CERT_BASE64=$(kubectl config view --raw -o jsonpath="{.clusters[?(@.name==\"$AKS_CLUSTER_NAME\")].cluster.certificate-authority-data}")
        if [ -z "$K8S_CA_CERT_BASE64" ]; then echo "Error: CA cert not found for cluster name $AKS_CLUSTER_NAME in kubeconfig."; exit 1; fi
        K8S_CA_CERT=$(echo "$K8S_CA_CERT_BASE64" | base64 --decode)

        # Write the configuration to Vault (using OIDC issuer)
        echo "Configuring Vault K8s auth for AKS cluster: $AKS_CLUSTER_NAME"
        vault write auth/kubernetes/config \
            issuer="$K8S_ISSUER" \
            kubernetes_host="$K8S_HOST" \
            kubernetes_ca_cert="$K8S_CA_CERT"
        ```

        {{% alert color="info" %}} For AKS without OIDC, if OIDC Issuer is unavailable, use the Token Reviewer JWT method. For more information, see *For generic Kubernetes* below.
        {{% /alert %}}

    * For Openshift:

        ```bash
        # Ensure you are logged into your OpenShift cluster using 'oc login'

        # Get OpenShift API Server Endpoint
        K8S_HOST=$(oc config view --minify -o jsonpath='{.clusters[0].cluster.server}')

        # Get Cluster Name from current context for CA cert lookup
        CURRENT_CONTEXT=$(oc config current-context)
        KUBECONFIG_CLUSTER_NAME=$(oc config view -o jsonpath="{.contexts[?(@.name==\"$CURRENT_CONTEXT\")].context.cluster}")
        if [ -z "$KUBECONFIG_CLUSTER_NAME" ]; then echo "Error: Could not determine cluster name from context $CURRENT_CONTEXT."; exit 1; fi

        # Get Kubernetes CA Certificate (from your local kubeconfig)
        K8S_CA_CERT_BASE64=$(oc config view --raw -o jsonpath="{.clusters[?(@.name==\"$KUBECONFIG_CLUSTER_NAME\")].cluster.certificate-authority-data}")
        if [ -z "$K8S_CA_CERT_BASE64" ]; then echo "Error: CA cert not found for cluster name $KUBECONFIG_CLUSTER_NAME in kubeconfig."; exit 1; fi
        K8S_CA_CERT=$(echo "$K8S_CA_CERT_BASE64" | base64 --decode)


        # --- Choose ONE Token Validation Method ---

        # Method 1: OIDC Issuer (Preferred for OpenShift 4.x+)
        echo "Attempting to discover OpenShift OIDC Issuer..."
        K8S_ISSUER=$(oc get --raw /.well-known/openid-configuration | jq -r .issuer 2>/dev/null) # Requires jq
        if [ -z "$K8S_ISSUER" ] || [ "$K8S_ISSUER" == "null" ]; then
          echo "Warning: Could not automatically discover OIDC issuer. Falling back to Token Reviewer method is recommended if this fails."
          # Optionally, attempt to construct based on common patterns if discovery fails, requires validation
          # K8S_ISSUER="https://$(echo $K8S_HOST | sed 's|^https://api\.||; s|:.*||')/oauth/token"
          # echo "Attempting constructed issuer: $K8S_ISSUER"
        else
          echo "Discovered OIDC Issuer: $K8S_ISSUER"
          echo "Configuring Vault K8s auth using OIDC Issuer for OpenShift cluster."
          vault write auth/kubernetes/config \
              issuer="$K8S_ISSUER" \
              kubernetes_host="$K8S_HOST" \
              kubernetes_ca_cert="$K8S_CA_CERT"
        fi
        # If the above fails or discovery doesn't work, proceed to Method 2 below.

        # Method 2: Token Reviewer JWT (Alternative/Fallback)
        # echo "Configuring Vault K8s auth using Token Reviewer JWT for OpenShift cluster."
        # VAULT_REVIEWER_SA_NAME="vault-reviewer"
        # VAULT_REVIEWER_NAMESPACE="default" # Or adjust as needed
        # echo "Creating Service Account $VAULT_REVIEWER_SA_NAME in namespace $VAULT_REVIEWER_NAMESPACE..."
        # oc create serviceaccount $VAULT_REVIEWER_SA_NAME -n $VAULT_REVIEWER_NAMESPACE --dry-run=client -o yaml | oc apply -f -
        # echo "Adding system:auth-delegator ClusterRole to Service Account..."
        # oc adm policy add-cluster-role-to-user system:auth-delegator -z $VAULT_REVIEWER_SA_NAME -n $VAULT_REVIEWER_NAMESPACE
        # echo "Generating long-lived token (adjust duration if needed)..."
        # TOKEN_REVIEWER_JWT=$(oc create token $VAULT_REVIEWER_SA_NAME --duration=8760h -n $VAULT_REVIEWER_NAMESPACE) # Duration requires OpenShift 4.7+
        # if [ -z "$TOKEN_REVIEWER_JWT" ]; then echo "Error: Failed to generate token reviewer JWT."; exit 1; fi

        # vault write auth/kubernetes/config \
        #     token_reviewer_jwt="$TOKEN_REVIEWER_JWT" \
        #     kubernetes_host="$K8S_HOST" \
        #     kubernetes_ca_cert="$K8S_CA_CERT"
        ```

    * For generic Kubernetes:

        ```bash
        # Ensure kubectl is pointing to your target cluster

        # Get API Server Endpoint
        K8S_HOST=$(kubectl config view --minify -o jsonpath='{.clusters[0].cluster.server}')

        # Get Cluster Name from current context for CA cert lookup
        CURRENT_CONTEXT=$(kubectl config current-context)
        KUBECONFIG_CLUSTER_NAME=$(kubectl config view -o jsonpath="{.contexts[?(@.name==\"$CURRENT_CONTEXT\")].context.cluster}")
        if [ -z "$KUBECONFIG_CLUSTER_NAME" ]; then echo "Error: Could not determine cluster name from context $CURRENT_CONTEXT."; exit 1; fi

        # Get Kubernetes CA Certificate (from your local kubeconfig)
        K8S_CA_CERT_BASE64=$(kubectl config view --raw -o jsonpath="{.clusters[?(@.name==\"$KUBECONFIG_CLUSTER_NAME\")].cluster.certificate-authority-data}")
        if [ -z "$K8S_CA_CERT_BASE64" ]; then echo "Error: CA cert not found for cluster name $KUBECONFIG_CLUSTER_NAME in kubeconfig."; exit 1; fi
        K8S_CA_CERT=$(echo "$K8S_CA_CERT_BASE64" | base64 --decode)

        # --- Choose ONE Token Validation Method ---

        # Method 1: OIDC Issuer (Preferred for K8s 1.21+)
        echo "Attempting to discover Kubernetes OIDC Issuer..."
        K8S_ISSUER=$(kubectl get --raw /.well-known/openid-configuration | jq -r .issuer 2>/dev/null) # Requires jq
        if [ -z "$K8S_ISSUER" ] || [ "$K8S_ISSUER" == "null" ]; then
          echo "Warning: Could not automatically discover OIDC issuer. Ensure Service Account Issuer Discovery is enabled on your cluster, or use the Token Reviewer JWT method."
          # Set K8S_ISSUER to empty to potentially proceed to Token Reviewer if desired, or exit:
          # exit 1
        else
          echo "Discovered OIDC Issuer: $K8S_ISSUER"
          echo "Configuring Vault K8s auth using OIDC Issuer."
          vault write auth/kubernetes/config \
              issuer="$K8S_ISSUER" \
              kubernetes_host="$K8S_HOST" \
              kubernetes_ca_cert="$K8S_CA_CERT"
        fi

        # Method 2: Token Reviewer JWT (Alternative/Fallback, if Issuer method failed or is unavailable)
        # if [ -z "$K8S_ISSUER" ] || [ "$K8S_ISSUER" == "null" ]; then # Only run if Issuer failed
        #   echo "Configuring Vault K8s auth using Token Reviewer JWT."
        #   VAULT_REVIEWER_SA_NAME="vault-reviewer"
        #   VAULT_REVIEWER_NAMESPACE="default" # Or adjust as needed
        #   echo "Creating Service Account $VAULT_REVIEWER_SA_NAME in namespace $VAULT_REVIEWER_NAMESPACE..."
        #   kubectl create serviceaccount $VAULT_REVIEWER_SA_NAME -n $VAULT_REVIEWER_NAMESPACE --dry-run=client -o yaml | kubectl apply -f -
        #   echo "Adding system:auth-delegator ClusterRoleBinding to Service Account..."
        #   kubectl create clusterrolebinding vault-reviewer-auth-delegator --clusterrole=system:auth-delegator --serviceaccount=$VAULT_REVIEWER_NAMESPACE:$VAULT_REVIEWER_SA_NAME --dry-run=client -o yaml | kubectl apply -f -
        #   echo "Generating long-lived token (requires K8s 1.24+)..."
        #   TOKEN_REVIEWER_JWT=$(kubectl create token $VAULT_REVIEWER_SA_NAME --duration=8760h -n $VAULT_REVIEWER_NAMESPACE) # Adjust duration if needed
        #   if [ -z "$TOKEN_REVIEWER_JWT" ]; then echo "Error: Failed to generate token reviewer JWT (requires K8s 1.24+). Check Service Account or use manual token secret method for older K8s."; exit 1; fi

        #   vault write auth/kubernetes/config \
        #       token_reviewer_jwt="$TOKEN_REVIEWER_JWT" \
        #       kubernetes_host="$K8S_HOST" \
        #       kubernetes_ca_cert="$K8S_CA_CERT"
        # fi
        ```

4. Create a `pmp-policy.hcl` Vault Terraform policy.
    Grant read-only access to the single central secret path. If the central path is pmp-dev/admin, the policy path is pmp-dev/data/admin.

    ```terraform
    # pmp-policy.hcl
    # Grant read-only access to the central PMP secret
    path "pmp-dev/data/admin" {
      capabilities = ["read"]
    }
    ```

5. Write the policy to Vault:

   ```bash
   vault policy write pmp-secret-access pmp-policy.hcl
   ```

6. Bind the desired Kubernetes Service Account (custom `pmp-secret-accessor` or `default`) in your Mendix application's namespace to the Vault policy.

    * **bound_service_account_names** - Set to your chosen SA name (`pmp-secret-accessor` or `default`). This must match the Service Account your Mendix app will use.
    * **bound_service_account_namespaces** - Set to the namespace where your Mendix app runs (for example, `feature-test`).
    * **policies** - Set to the policy name created above (`pmp-secret-access`).

#### Example A - Custom Service Account

The following example uses the `pmp-secret-accessor` Service Account.

```bash
vault write auth/kubernetes/role/pmp-secret-accessor-role \
    bound_service_account_names=pmp-secret-accessor \
    bound_service_account_namespaces=feature-test \
    policies=pmp-secret-access \
    ttl=24h
```

#### Example B - Default Account

The following example uses the `default` Service Account.

```bash
vault write auth/kubernetes/role/pmp-secret-accessor-role \
    bound_service_account_names=default \
    bound_service_account_namespaces=feature-test \
    policies=pmp-secret-access \
    ttl=24h
```

### Configuring Kubernetes for Private Mendix Platform {#configure-k8s-for-pmp}

To configure Kubernetes for Private Mendix Platform, ensure that your Mendix application runs with the Service Account specified in the Vault Role, and then perform the actions described below.

#### Configuring the Mendix Operator

To configure the Mendix Operator, perform the following steps:

1. To ensure that the Mendix Operator allows pods to mount their Service Account token, edit the `OperatorConfiguration`:

    ```bash
    # Replace <your-operator-ns> with the namespace where the Mendix Operator runs
    kubectl edit operatorconfiguration mendix-operator-configuration -n <your-operator-ns>
    ```

2. Add or confirm the following line in the `spec:` section:

    ```yaml
    spec:
        runtimeAutomountServiceAccountToken: true
        # ... other existing spec fields ...
    ```

#### Choosing and Configuring the Service Account

To configure the Service Account, select one of the following options.

##### Custom Service Account

{{% alert color="info" %}}
Ensure that you used `bound_service_account_names=pmp-secret-accessor` when creating the Vault Role.
{{% /alert %}}

Using a custom Service Account, for example, `pmp-secret-accessor`, is recommended for better isolation. To use a custom account, perform the following steps:

1. Create the Service Account in your Mendix application's namespace (replace `feature-test` with your own value if required):

    ```bash
    kubectl create serviceaccount pmp-secret-accessor --namespace feature-test --dry-run=client -o yaml | kubectl apply -f -
    ```

2. Assign the Service Account to your Mendix app by editing the Mendix Runtime custom resource. Replace `mxplatform` and `feature-test` with your own values if needed.

    ```bash
    kubectl edit runtime mxplatform -n feature-test
    ```

3. Find the pod template section within the spec (for example, `spec.template.spec`), and add or modify the `serviceAccountName` field:

    ```yaml
    # ... inside spec: template: spec: ...
    serviceAccountName: pmp-secret-accessor # Set your custom SA name
    ```

4. Save the changes. The Mendix Operator updates the deployment.

##### Default Service Account

No specific Kubernetes action is needed for the Service Account itself. Pods use the `default` Service Account if none is specified.

{{% alert color="info" %}}
Ensure that you used `bound_service_account_names=default` when creating the Vault Role.

Ensure the **serviceAccountName** field in the template specification of your Mendix Runtime custom resource pod is either not set, or explicitly set to `default`.
{{% /alert %}}

### Configuring the Private Mendix Platform Credentials {#configure-pmp-credentials}

Configure credentials in the Private Mendix Platform administrator panel. All credentials will use the same `Secret Name` URL.

#### Example Configuration - Vault and Marketplace Credential

1. In the Private Mendix Platform admin panel, click **Marketplace Settings**.
2. Enter the required configuration details.
3. In the **Credentials** section, select **Vault**.
4. Enter the **Secret Name**. 

    This must be a full URL pointing to the single central secret in Vault, for example, `http://<VAULT_ADDR>/pmp-dev/admin`. Replace `<VAULT_ADDR>` with the actual address Vault is accessible from within your cluster, for example, `vault.hashicorptest.svc.cluster.local` if Vault is in the `hashicorptest` namespace, or the external `LoadBalancer` address if accessed externally.

5. The **Key name** field displays the specific key Mendix needs from that central secret (for example, `Marketplace.ImportCDNPassword`). 

    This key will be read from the secret specified in the **Secret Name** field.

6. Save the configuration.
7. Repeat the previous steps for all other credentials (VCS, Build Settings, Email, and so on). Use the same **Secret Name URL** pointing to your central secret path (for example, `http://<VAULT_ADDR>/pmp-dev/admin`). Only the read-only **Key Name** field will be different for each credential type.

The application will use its assigned Service Account (`pmp-secret-accessor` or `default`, matching the Vault Role configuration) to authenticate, fetch the central secret map from the specified Secret Name URL, and extract the value corresponding to the required **Key Name**.

### Storing the Credentials Directly in the Database
 
Instead of using the Hashicorp Vault, you can still use the legacy option to store the credentials in the Private Mendix Platform database. To do this, you must select **Database** from the list of storage options, and then enter the credentials directly in an input field. The credentials are encrypted and stored in the Private Mendix Platform database.
