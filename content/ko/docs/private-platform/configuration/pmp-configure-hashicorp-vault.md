---
title: "HashiCorp Vault를 사용한 외부 시크릿 관리 구성"
url: /private-mendix-platform/configure-hashicorp-vault/
description: "Private Mendix Platform의 Hashicorp Vault 구성에 대해 설명합니다."
weight: 40
---

## 소개

Private Mendix Platform은 HashiCorp Vault를 외부 시크릿 관리 솔루션으로 지원하여 자격 증명 관리의 보안 및 유연성을 강화합니다. 이 통합은 Vault의 Kubernetes Auth Method를 사용하여 Kubernetes에서 실행되는 Mendix 애플리케이션이 할당된 Kubernetes Service Account ID를 사용하여 비밀번호 없이 인증할 수 있도록 합니다.

이 문서에서는 맞춤 Kubernetes Service Account(예: 권장 값은 `pmp-secret-accessor`) 또는 기본 제공 기본 Service Account를 사용하여 HashiCorp Vault 통합을 구성하는 방법을 설명합니다. 모든 플랫폼 자격 증명을 저장하기 위해 Vault 내의 중앙 집중식 시크릿 구조를 활용합니다.

{{% alert color="info" %}}
이 통합에는 HashiCorp Vault의 Key-Value (KV) Version 2 시크릿 엔진을 사용해야 합니다. KV Version 1 또는 다른 시크릿 엔진의 사용은 지원되지 않으며 작동하지 않습니다.
{{% /alert %}}

## 사전 요구사항

HashiCorp Vault 통합을 구성하기 전에 다음을 준비하십시오:

* Kubernetes 클러스터에서 접근 가능한 실행 중인 HashiCorp Vault 인스턴스(v1.9+ 권장), 선택한 마운트 경로(예: `pmp-dev`)에서 KV Version 2 시크릿 엔진이 활성화되어 있어야 합니다.
* `auth` 방법을 활성화하고, 정책을 만들고, 역할을 만들 수 있는 Vault 관리자 권한.
* 관리자 권한이 있는 Private Mendix Platform 프로젝트 관리자 패널 접근.
* HashiCorp Vault, Vault 정책, KV v2 엔진 및 Kubernetes에 대한 기본 지식.
* OIDC Issuer 기능이 활성화되어 검색 가능한 기존 Kubernetes 클러스터(예: EKS, AKS, OpenShift, Generic).
* 맞춤 Service Account를 사용하는 경우 Kubernetes 클러스터에서 `ServiceAccount` 및 Mendix Runtime 리소스를 생성하거나 수정할 권한.
* 대상 Kubernetes 클러스터에 연결하도록 구성된 Kubectl.
* Vault CLI가 설치되어 구성됨(최소한 초기에 Vault에 대한 관리자 접근 권한 포함).
* EKS 또는 AKS를 사용하는 경우 더 쉬운 구성 검색을 위한 클라우드 공급자 CLI(예: `aws`, `az`).
* 선택 사항: CLI 출력의 더 쉬운 구문 분석을 위한 `jq` 명령줄 JSON 프로세서(`brew install` jq 또는 다운로드).

## 외부 시크릿 관리 구성

외부 시크릿 관리를 구성하려면 다음 단계를 수행하십시오:

1. 중앙 KV v2 경로에 자격 증명을 저장하십시오. 자세한 내용은 [Vault에서 시크릿 생성](#create-vault-secret)을 참조하십시오.
2. Kubernetes 인증 방법을 활성화 및 구성하고, 정책을 만들고, 선택한 Service Account(맞춤 또는 기본)에 바인딩된 역할을 만드십시오. 자세한 내용은 [Kubernetes 인증 방법 구성](#configure-k8s-auth)을 참조하십시오.
3. Mendix Operator가 올바르게 설정되었는지 확인하고, 맞춤 Service Account를 사용하는 경우 이를 만들고 Mendix 애플리케이션에 할당하십시오. 자세한 내용은 [Private Mendix Platform을 위한 Kubernetes 구성](#configure-k8s-for-pmp)을 참조하십시오.
4. PMP 관리자 패널에서 자격 증명을 Vault 경로로 지정하십시오. 자세한 내용은 [Private Mendix Platform 자격 증명 구성](#configure-pmp-credentials)을 참조하십시오.

### Vault에서 시크릿 생성 {#create-vault-secret}

모든 Private Mendix Platform 시크릿을 Vault의 KV Version 2 엔진 내 단일 시크릿 경로(예: `pmp-dev/admin`)에 키-값 쌍으로 저장하십시오. 이렇게 하면 모든 자격 증명이 중앙 집중화됩니다.

이 단일 시크릿 경로 내에서 키는 Mendix가 요구하는 자격 증명 이름(점 사용, 예: `Marketplace.ImportCDNPassword`)과 정확히 일치해야 하며, 값은 실제 시크릿 문자열이어야 합니다.

{{% alert color="info" %}}
중첩된 `value=` 키 구조를 사용하지 마십시오.
{{% /alert %}}

1. 적절한 권한으로 Vault CLI에 로그인하십시오(예: `set VAULT_ADDR` 및 `VAULT_TOKEN`).
2. 대상 마운트 경로(예: `pmp-dev/`)가 존재하지 않거나 KV v2 엔진이 아닌 경우 다음 명령을 실행하십시오:

    ```bash
    vault secrets enable -path=pmp-dev kv-v2
    ```

    경로가 이미 사용 중인 경우 명령이 안전하게 실패합니다.

3. 중앙 시크릿 경로(예: `pmp-dev/admin`)에 대해 `vault kv put` 명령을 한 번 실행하고 비어 있지 않은 모든 키-값 쌍을 인수로 나열하십시오.

{{% alert color="info" %}}
중요한 점으로, KV v2의 경우 `put` 명령의 경로 구조는 `{KV_MOUNT}/data/{CENTRAL_SECRET_NAME}`입니다.

Mendix 키 이름을 키로 사용하십시오. 명명 규칙에 대한 자세한 내용은 [키 속성에 대한 명명 규칙](#naming-convention)을 참조하십시오. 비어 있지 않은 값이 있는 키만 포함하십시오. 플레이스홀더 값을 실제 시크릿으로 대체하십시오.
{{% /alert %}}

예를 들어, Mendix UI에서 **Central Secret Name**이 `http://<VAULT_ADDR>:8200/pmp-dev/admin`인 경우 다음 Bash 스크립트를 실행하십시오:

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

이 명령은 `pmp-dev` 마운트 경로 아래의 단일 `admin` 시크릿을 지정된 모든 자격 증명을 포함하도록 생성하거나 업데이트합니다.

#### 예시 구조

* **KV v2 엔진 마운트 경로** - `pmp-dev/`
* **중앙 시크릿 이름** - `admin` (마운트 아래의 이 단일 경로에 모든 시크릿이 보관됩니다.)
* **UI 입력(SecretName)** - `http://<VAULT_ADDR>:8200/pmp-dev/admin` (모든 자격 증명에 사용됩니다.)
* **자격 증명 키(KeyName)** - `Marketplace.ImportCDNPassword`
* **Vault API 경로** - `pmp-dev/data/admin`
* **저장된 데이터** - `{"Marketplace.ImportCDNPassword": "PLACEHOLDER_PASSWORD", "VCS.BitbucketAdminPassword": "PLACEHOLDER_PASSWORD", ...}`

#### 키 속성에 대한 명명 규칙 {#naming-convention}

Private Mendix Platform이 지정한 정확한 키 이름을 점(`.`)을 구분자로 사용하여 중앙 Vault 시크릿(예: `pmp-dev/admin`) 내의 키로 사용하십시오.

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

* **Kubernetes 빌드 설정**

    * `BuildPackage.FileBasicAuthPassword`
    * `BuildPackage.AwsSecretAccessKey`
    * `RuntimeBaseImage.PrivateRegistryPassword`
    * `RuntimeBaseImage.S3CompatibleAccessKey`
    * `MDAStorage.FileBasicAuthPassword`
    * `MDAStorage.AwsSecretAccessKey`
    * `OCIRegistry.PrivateRegistryPassword`
    * `OCIRegistry.S3CompatibleAccessKey`

* **빌드 클러스터 설정**

    * `BuildCluster.KubernetesConfigureToken`
    * `CIAdmin.JenkinsConfigureAPIToken`
    * `CIAdmin.JenkinsTriggerAuthToken`
    * `CIAdmin.AzureOrgAdminPAT`
    * `CIAdmin.AzureBlobStorageToken`
    * `CIAdmin.AzureAwsS3SK`

* **Marketplace**

    * `Marketplace.ImportCDNPassword`

* **Email**

    * `Email.SMTPPassword`

### Kubernetes 인증 방법 구성 {#configure-k8s-auth}

Kubernetes 인증 방법을 구성하여 파드가 Kubernetes Service Account 토큰을 사용하여 인증할 수 있도록 합니다.

1. 다음 명령을 실행하여 Kubernetes 인증 방법을 활성화하십시오:

    ```bash
    # Ensure VAULT_ADDR and VAULT_TOKEN are set appropriately
    vault auth enable kubernetes
    ```

2. Vault가 Kubernetes 클러스터의 API 서버 및 OIDC 발급자를 찾고 신뢰할 수 있도록 다음 속성을 구성하십시오:

    * **Kubernetes Host URL (K8S_HOST)** - Vault에서 연결 가능한 Kubernetes API 서버 엔드포인트의 주소.
    * **Kubernetes CA Certificate (K8S_CA_CERT)** - Vault가 Kubernetes API 서버를 확인하는 데 사용하는 CA 인증서 번들.
    * **Token Validation Method** - OIDC Issuer URL(**K8S_ISSUER**, Kubernetes 1.21 이상에서 선호) 또는 Token Reviewer JWT(**TOKEN_REVIEWER_JWT**).

3. Kubernetes 배포판에 따라 다음 옵션 중 하나를 선택하십시오.

    `<YOUR_EKS_CLUSTER_NAME>`과 같은 모든 플레이스홀더를 실제 값으로 주의 깊게 대체하십시오.
    
    Vault 인스턴스가 K8S_HOST 주소에 네트워크로 접근할 수 있는지 확인하십시오. 방화벽 규칙이 필요할 수 있습니다.
    
    `token_reviewer_jwt`를 사용하는 경우 관련 Service Account에 토큰을 검토할 클러스터 권한(`system:auth-delegator`)이 필요합니다.
    
    클러스터에 적합한 CA 인증서를 사용하십시오. 명령은 현재 kubectl 구성에서 이를 추출하려고 시도합니다.

    * EKS의 경우:

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

    * AKS의 경우:

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

        {{% alert color="info" %}} OIDC가 없는 AKS의 경우, OIDC Issuer를 사용할 수 없으면 Token Reviewer JWT 방법을 사용하십시오. 자세한 내용은 아래 *일반 Kubernetes*를 참조하십시오.
        {{% /alert %}}

    * OpenShift의 경우:

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
        else
          echo "Discovered OIDC Issuer: $K8S_ISSUER"
          echo "Configuring Vault K8s auth using OIDC Issuer for OpenShift cluster."
          vault write auth/kubernetes/config \
              issuer="$K8S_ISSUER" \
              kubernetes_host="$K8S_HOST" \
              kubernetes_ca_cert="$K8S_CA_CERT"
        fi
        ```

    * 일반 Kubernetes의 경우:

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
        else
          echo "Discovered OIDC Issuer: $K8S_ISSUER"
          echo "Configuring Vault K8s auth using OIDC Issuer."
          vault write auth/kubernetes/config \
              issuer="$K8S_ISSUER" \
              kubernetes_host="$K8S_HOST" \
              kubernetes_ca_cert="$K8S_CA_CERT"
        fi
        ```

4. `pmp-policy.hcl` Vault Terraform 정책을 만드십시오.
    단일 중앙 시크릿 경로에 대한 읽기 전용 접근을 부여하십시오. 중앙 경로가 pmp-dev/admin인 경우 정책 경로는 pmp-dev/data/admin입니다.

    ```terraform
    # pmp-policy.hcl
    # Grant read-only access to the central PMP secret
    path "pmp-dev/data/admin" {
      capabilities = ["read"]
    }
    ```

5. Vault에 정책을 작성하십시오:

   ```bash
   vault policy write pmp-secret-access pmp-policy.hcl
   ```

6. Mendix 애플리케이션의 네임스페이스에서 원하는 Kubernetes Service Account(맞춤 `pmp-secret-accessor` 또는 `default`)를 Vault 정책에 바인딩하십시오.

    * **bound_service_account_names** - 선택한 SA 이름(`pmp-secret-accessor` 또는 `default`)으로 설정하십시오. 이는 Mendix 앱이 사용할 Service Account와 일치해야 합니다.
    * **bound_service_account_namespaces** - Mendix 앱이 실행되는 네임스페이스(예: `feature-test`)로 설정하십시오.
    * **policies** - 위에서 만든 정책 이름(`pmp-secret-access`)으로 설정하십시오.

#### 예시 A - 맞춤 Service Account

다음 예시는 `pmp-secret-accessor` Service Account를 사용합니다.

```bash
vault write auth/kubernetes/role/pmp-secret-accessor-role \
    bound_service_account_names=pmp-secret-accessor \
    bound_service_account_namespaces=feature-test \
    policies=pmp-secret-access \
    ttl=24h
```

#### 예시 B - 기본 계정

다음 예시는 `default` Service Account를 사용합니다.

```bash
vault write auth/kubernetes/role/pmp-secret-accessor-role \
    bound_service_account_names=default \
    bound_service_account_namespaces=feature-test \
    policies=pmp-secret-access \
    ttl=24h
```

### Private Mendix Platform을 위한 Kubernetes 구성 {#configure-k8s-for-pmp}

Private Mendix Platform을 위해 Kubernetes를 구성하려면 Mendix 애플리케이션이 Vault Role에 지정된 Service Account로 실행되는지 확인한 다음 아래 설명된 작업을 수행하십시오.

#### Mendix Operator 구성

Mendix Operator를 구성하려면 다음 단계를 수행하십시오:

1. Mendix Operator가 파드가 Service Account 토큰을 마운트하도록 허용하려면 `OperatorConfiguration`을 편집하십시오:

    ```bash
    # Replace <your-operator-ns> with the namespace where the Mendix Operator runs
    kubectl edit operatorconfiguration mendix-operator-configuration -n <your-operator-ns>
    ```

2. `spec:` 섹션에 다음 줄을 추가하거나 확인하십시오:

    ```yaml
    spec:
        runtimeAutomountServiceAccountToken: true
        # ... other existing spec fields ...
    ```

#### Service Account 선택 및 구성

Service Account를 구성하려면 다음 옵션 중 하나를 선택하십시오.

##### 맞춤 Service Account

{{% alert color="info" %}}
Vault Role을 만들 때 `bound_service_account_names=pmp-secret-accessor`를 사용했는지 확인하십시오.
{{% /alert %}}

더 나은 격리를 위해 맞춤 Service Account(예: `pmp-secret-accessor`)를 사용하는 것이 권장됩니다. 맞춤 계정을 사용하려면 다음 단계를 수행하십시오:

1. Mendix 애플리케이션의 네임스페이스에 Service Account를 생성하십시오(필요한 경우 `feature-test`를 자체 값으로 대체):

    ```bash
    kubectl create serviceaccount pmp-secret-accessor --namespace feature-test --dry-run=client -o yaml | kubectl apply -f -
    ```

2. Mendix Runtime 맞춤 리소스를 편집하여 Mendix 앱에 Service Account를 할당하십시오. 필요한 경우 `mxplatform` 및 `feature-test`를 자체 값으로 대체하십시오.

    ```bash
    kubectl edit runtime mxplatform -n feature-test
    ```

3. spec 내의 파드 템플릿 섹션(예: `spec.template.spec`)을 찾고 `serviceAccountName` 필드를 추가하거나 수정하십시오:

    ```yaml
    # ... inside spec: template: spec: ...
    serviceAccountName: pmp-secret-accessor # Set your custom SA name
    ```

4. 변경 사항을 저장하십시오. Mendix Operator가 배포를 업데이트합니다.

##### 기본 Service Account

Service Account 자체에 대한 특별한 Kubernetes 작업은 필요하지 않습니다. 파드는 지정되지 않은 경우 `default` Service Account를 사용합니다.

{{% alert color="info" %}}
Vault Role을 만들 때 `bound_service_account_names=default`를 사용했는지 확인하십시오.

Mendix Runtime 맞춤 리소스 파드의 템플릿 사양에 있는 **serviceAccountName** 필드가 설정되지 않았거나 명시적으로 `default`로 설정되어 있는지 확인하십시오.
{{% /alert %}}

### Private Mendix Platform 자격 증명 구성 {#configure-pmp-credentials}

Private Mendix Platform 관리자 패널에서 자격 증명을 구성하십시오. 모든 자격 증명은 동일한 `Secret Name` URL을 사용합니다.

#### 구성 예시 - Vault와 Marketplace 자격 증명

1. Private Mendix Platform 관리자 패널에서 **Marketplace Settings**를 클릭하십시오.
2. 필수 구성 세부 정보를 입력하십시오.
3. **Credentials** 섹션에서 **Vault**를 선택하십시오.
4. **Secret Name**을 입력하십시오.

    이것은 Vault의 단일 중앙 시크릿을 가리키는 전체 URL이어야 합니다. 예: `http://<VAULT_ADDR>/pmp-dev/admin`. `<VAULT_ADDR>`을 클러스터 내에서 Vault에 접근할 수 있는 실제 주소로 대체하십시오. 예를 들어, Vault가 `hashicorptest` 네임스페이스에 있는 경우 `vault.hashicorptest.svc.cluster.local`, 또는 외부에서 접근하는 경우 외부 `LoadBalancer` 주소를 사용하십시오.

5. **Key name** 필드는 Mendix가 해당 중앙 시크릿에서 필요한 특정 키를 표시합니다(예: `Marketplace.ImportCDNPassword`).

    이 키는 **Secret Name** 필드에 지정된 시크릿에서 읽힙니다.

6. 구성을 저장하십시오.
7. 다른 모든 자격 증명(VCS, Build Settings, Email 등)에 대해 이전 단계를 반복하십시오. 중앙 시크릿 경로를 가리키는 동일한 **Secret Name URL**(예: `http://<VAULT_ADDR>/pmp-dev/admin`)을 사용하십시오. 읽기 전용 **Key Name** 필드만 각 자격 증명 유형에 따라 달라집니다.

애플리케이션은 할당된 Service Account(`pmp-secret-accessor` 또는 `default`, Vault Role 구성과 일치)를 사용하여 인증하고, 지정된 Secret Name URL에서 중앙 시크릿 맵을 가져오고, 필요한 **Key Name**에 해당하는 값을 추출합니다.

### 데이터베이스에 직접 자격 증명 저장
 
Hashicorp Vault를 사용하는 대신 기존 옵션을 사용하여 Private Mendix Platform 데이터베이스에 자격 증명을 저장할 수 있습니다. 이렇게 하려면 저장 옵션 목록에서 **Database**를 선택한 다음 입력 필드에 자격 증명을 직접 입력하십시오. 자격 증명은 암호화되어 Private Mendix Platform 데이터베이스에 저장됩니다.
