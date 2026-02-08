---
title: "Azure Key Vault를 사용한 외부 시크릿 관리 구성"
url: /private-mendix-platform/configure-azure-key-vault/
description: "Private Mendix Platform의 Azure Key Vault 구성에 대해 설명합니다."
weight: 40
---

## 소개

Private Mendix Platform은 기존 데이터베이스 저장 옵션과 함께 [Azure Key Vault](https://azure.microsoft.com/en-us/products/key-vault)를 외부 시크릿 관리 솔루션으로 지원하여 자격 증명 관리의 보안 및 유연성을 강화합니다. 기존 데이터베이스 저장 방식에서는 자격 증명이 암호화되어 Private Mendix Platform 데이터베이스에 직접 저장됩니다. Azure Key Vault를 사용하면 자격 증명이 대신 보안 볼트에 저장되고 안전하게 접근되어 보안, 중앙 집중식 관리 및 엔터프라이즈 보안 정책 준수가 향상됩니다. 이 문서에서는 Private Mendix Platform 프로젝트에 대해 Azure Key Vault 통합을 구성하는 방법을 설명합니다.

## 사전 요구사항

Azure Key Vault 통합을 구성하기 전에 다음을 준비하십시오:

* Key Vault를 생성하고 관리할 적절한 권한이 있는 Azure 구독.
* Azure Active Directory(Azure AD)에서 사용자 할당 관리 ID를 만들고 역할 할당을 부여할 수 있는 권한.
* 관리자 권한이 있는 Private Mendix Platform 프로젝트 관리자 패널 접근.
* Azure 서비스, Azure AD 및 Kubernetes(AKS 배포 시)에 대한 기본 지식.
* OIDC Issuer 기능이 활성화된 기존 AKS(Azure Kubernetes Service) 클러스터.

## 외부 시크릿 관리 구성

외부 시크릿 관리를 구성하려면 먼저 Key Vault를 만들고 중요 자격 증명을 시크릿으로 저장하고, Azure AD Workload Identity를 구성한 다음, Private Mendix Platform 관리자 패널에서 필수 자격 증명을 구성해야 합니다. 자세한 내용은 아래 섹션을 참조하십시오.

### 시크릿 생성

Azure Key Vault에서 시크릿을 생성하려면 다음 단계를 수행하십시오:

1. Azure Portal에 로그인하십시오.
2. **Key Vaults** 서비스로 이동하십시오.
3. **Create**를 클릭하고 새 Key Vault를 구성하십시오:

    1. **Subscription** 및 **Resource Group**을 선택하십시오.
    2. Key Vault 이름을 입력하십시오(예: *PMP-Production-Vault*). 이 이름은 전역적으로 고유해야 합니다.
    3. **Region**을 선택하십시오.
    4. **Access configuration** 탭에서 권한 모델로 **Azure role-based access control (RBAC)**을 선택하십시오.

4. Key Vault를 검토하고 생성하십시오.
5. 배포 후 새 Key Vault로 이동하십시오.
6. **Secrets** 섹션으로 이동하여 **Generate/Import**를 클릭하십시오.
7. 시크릿의 **Name**을 입력하십시오(예: *PMP-Credentials*).
8. **Create**를 클릭하여 시크릿을 저장하십시오.

{{% alert color="info" %}}
Vault Name(예: *PMP-Production-Vault*)을 기록해 두십시오. Private Mendix Platform을 구성할 때 이 정보가 필요합니다.
{{% /alert %}}

#### 키 속성에 대한 명명 규칙 {#naming-convention}

시크릿의 JSON 구조를 만들 때 플랫 키-값 형식을 사용해야 합니다. 키 이름은 하이픈을 사용하여 모듈과 자격 증명 이름을 구분합니다(예: *Email-SMTPPassword*).

* 모든 키 이름은 읽기 전용입니다. 변경해서는 안 됩니다.
* Private Mendix Platform 구성과 동일한 이름으로 외부 시크릿 저장소에 키를 생성하십시오.
* 매핑은 다음과 같습니다:

    * VCS

        * Bitbucket

            * **VCS.BitbucketProjectAdminPAT** - Bitbucket 프로젝트 관리자의 개인 접근 토큰
            * **VCS.BitbucketAdminPassword** - Bitbucket 관리자 사용자의 비밀번호

        * GitLab

            * **VCS.GitlabGroupOwnerPAT** - GitLab 그룹 소유자의 개인 접근 토큰
            * **VCS.GitlabAdminPAT** - GitLab 관리자의 개인 접근 토큰

        * GitHub

            * **VCS.GithubOrgOwnerPAT** - GitHub 조직 소유자의 개인 접근 토큰
            * **VCS.GithubAdminPAT** - GitHub 관리자의 개인 접근 토큰
            * **VCS.GithubEnterpriseClientSecret** - GitHub Enterprise 앱의 클라이언트 시크릿

        * Azure

            * **VCS.AzureDevOpsOrgAdminPAT** - Azure DevOps 조직 소유자의 개인 접근 토큰
            * **VCS.AzureAuthSecret** - 현재 미사용

    * Kubernetes 빌드 설정

        * BuildPackage

            * fileServerBasic
               
                * **BuildPackage.FileBasicAuthPassword** - 파일 서버의 비밀번호

            * AwsAKSK

                * **BuildPackage.AwsSecretAccessKey** - 파일 서버의 AWS 시크릿 접근 키

        * RuntimeBaseImage

            * privateRegistry

                * **RuntimeBaseImage.PrivateRegistryPassword** - 런타임의 베이스 이미지

            * S3compatibleAccessKey

                * **RuntimeBaseImage.S3CompatibleAccessKey** - 베이스 이미지의 S3 호환 접근 키

        * MDAStorage

            * fileServerBasic

                * **MDAStorage.FileBasicAuthPassword** - 파일 서버의 비밀번호

            * awsAKSK

                * **MDAStorage.AwsSecretAccessKey** - MDA 스토리지의 AWS 시크릿 접근 키

        * OCIRegistry

            * privateRegistry

                * **OCIRegistry.PrivateRegistryPassword** - 프라이빗 레지스트리의 비밀번호

            * S3compatibleAccessKey

                * **OCIRegistry.S3CompatibleAccessKey** - OCI 레지스트리의 S3 호환 접근 키

    * 빌드 클러스터 설정

        * **BuildCluster.KubernetesConfigureToken** - Kubernetes 클러스터 구성을 위한 토큰
        * **CIAdmin.JenkinsConfigureAPIToken** - Jenkins 구성을 위한 토큰
        * **CIAdmin.JenkinsTriggerAuthToken** - Jenkins 트리거 구성을 위한 토큰
        * **CIAdmin.AzureOrgAdminPAT** - Azure DevOps 구성을 위한 개인 접근 토큰
        * **CIAdmin.AzureBlobStorageToken** - Azure Blob Storage의 SAS 토큰
        * **CIAdmin.AzureAwsS3SK** - Azure DevOps 조직 이름

    * Marketplace

        * **Marketplace.ImportCDNPassword** - Marketplace 관리자의 개인 접근 토큰

    * Email

        * **Email.SMTPPassword** - SMTP 서버의 비밀번호

### Azure AD Workload Identity 구성

Private Mendix Platform은 Azure AD Workload Identity를 사용하여 자격 증명을 저장하지 않고 Azure Key Vault에 안전하게 접근합니다. 이를 위해서는 사용자 할당 관리 ID를 만들고, Key Vault에 대한 권한을 부여하고, Private Mendix Platform에서 사용하는 Kubernetes Service Account에 연결해야 합니다.

#### 사용자 할당 관리 ID 생성

사용자 할당 관리 ID를 생성하려면 다음 단계를 수행하십시오:

1. Azure Portal에서 **Managed Identities**를 검색하고 선택하십시오.
2. **Create**를 클릭하십시오.
3. **Subscription** 및 **Resource Group**을 선택하십시오.
4. **Region**을 선택하십시오.
5. **Name**을 입력하십시오(예: *PMP-KeyVault-Identity*).
6. 검토하고 **Create**를 클릭하십시오.
7. 배포 후 새 ID로 이동하십시오.
8. **Overview** 페이지에서 **Client ID**를 기록해 두십시오. 이 정보는 나중에 서비스 계정을 구성하는 데 필요합니다.

#### Key Vault에 대한 관리 ID 접근 권한 부여

Key Vault에 대한 관리 ID 접근 권한을 부여하려면 다음 단계를 수행하십시오:

1. 이전에 생성한 Key Vault로 이동하십시오.
2. **Access control (IAM)** 섹션으로 이동하십시오.
3. **Add > Add role assignment**를 클릭하십시오.
4. **Key Vault Secrets User** 역할을 선택하십시오. 이 역할은 시크릿에 대한 Get 및 List 작업을 허용합니다.
5. **Next**를 클릭하십시오.
6. **Assign access to**에서 **Managed identity**를 선택하십시오.
7. **Select members**를 클릭하고 생성한 **User-Assigned Managed Identity**를 검색하십시오(예: **PMP-KeyVault-Identity**).
8. ID를 선택한 다음 **Review + assign**을 클릭하십시오.

#### 페더레이션 ID 구성

페더레이션 ID를 구성하려면 다음 단계를 수행하십시오:

1. Azure Portal에서 사용자 할당 관리 ID(예: **PMP-KeyVault-Identity**)로 다시 이동하십시오.
2. **Federated credentials** 섹션으로 이동하십시오.
3. **Add credential**을 클릭하십시오.
4. **Federated credential scenario** 목록에서 **Kubernetes accessing Azure resources**를 선택하십시오.
5. 다음 세부 정보를 입력하십시오:

    * **Kubernetes namespace** - Private Mendix Platform이 배포된 네임스페이스(예: **pmp-prod**).
    * **Service account name** - PMP 배포에서 사용할 Kubernetes 서비스 계정의 이름(예: **pmp-secret-accessor**).
    * **Issuer** - AKS 클러스터의 OIDC Issuer URL.

**Add**를 클릭하십시오.

#### 운영 구성 수정

고급 구성 설정에 대한 자세한 내용은 [고급 Operator 구성](/developerportal/deploy/private-cloud-cluster/#advanced-operator-configuration)을 참조하십시오.

구성을 수정하려면 다음 단계를 수행하십시오:

1. [서비스 토큰을 사용](https://docs.mendix.com/developerportal/deploy/private-cloud-cluster/#advanced-deployment-settings)하도록 구성을 업데이트하십시오.

    Mendix 앱 파드가 Kubernetes Service Account 토큰을 얻을 수 있도록 `runtimeAutomountServiceAccountToken: true`를 설정하십시오.

    ```text
    apiVersion: privatecloud.mendix.com/v1alpha1
    kind: OperatorConfiguration
    spec:
    # Optional: provide Mendix app Pods to get a Kubernetes Service Account token
    runtimeAutomountServiceAccountToken: true
    ```

2. Operator에 workload identity를 사용하도록 알려주는 맞춤 파드 레이블을 추가하십시오. 자세한 내용은 [일반 파드 레이블](https://docs.mendix.com/developerportal/deploy/private-cloud-cluster/#general-pod-labels)을 참조하십시오.

    ```text
    apiVersion: privatecloud.mendix.com/v1alpha1
    kind: OperatorConfiguration
    spec:
    # ...
    # Other configuration options values
    # Optional: custom pod labels
    customPodLabels:
        # Optional: general pod labels (applied to all app-related pods)
        general:
        # Example: enable Azure Workload Identity
        azure.workload.identity/use: "true"
    ```

#### Kubernetes 서비스 계정 구성

Azure AD Workload Identity를 활성화하려면 Private Mendix Platform 애플리케이션에서 사용하는 Kubernetes Service Account에 Azure 사용자 할당 관리 ID에 연결하기 위한 특정 어노테이션이 필요합니다. 두 가지 옵션이 있습니다: 전용 맞춤 Service Account를 사용하거나 애플리케이션 네임스페이스의 기존 기본 Service Account를 사용하는 것입니다.

더 나은 격리를 위해 맞춤 Service Account를 사용하는 것이 권장됩니다. 이는 Mendix 애플리케이션이 시크릿에 접근하기 위해 특별히 새 Service Account를 만드는 것을 포함합니다. 기본 서비스 계정은 모든 Kubernetes 네임스페이스에 이미 존재합니다. 더 간단하지만 동일한 네임스페이스의 다른 애플리케이션도 기본 Service Account를 사용하는 경우 격리가 줄어듭니다.

Kubernetes 서비스 계정을 구성하려면 다음 단계를 수행하십시오:

1. 위에서 지정한 이름(예: **pmp-secret-accessor**)으로 Kubernetes 서비스 계정을 생성하십시오.
2. 이 서비스 계정에 사용자 할당 관리 ID에 연결하는 어노테이션을 추가하십시오.

    ```text
    kubectl -n <{Kubernetes namespace}> create serviceaccount <{environment name}>
    kubectl -n <{Kubernetes namespace}> annotate serviceaccount <{environment name}> privatecloud.mendix.com/environment-account=true
    kubectl -n <{Kubernetes namespace}> annotate serviceaccount <{environment name}> azure.workload.identity/client-id=<{managed identity client id}>
    ```

3. 다음 명령을 사용하여 이 서비스 계정을 클러스터에 적용하십시오: `kubectl apply -f <your-service-account-file>.yaml`.
4. 이 서비스 계정을 사용하도록 Private Mendix Platform 배포 YAML을 업데이트하십시오:

    ```text
    apiVersion: apps/v1
    kind: Deployment
    metadata:
        name: pmp-deployment
    spec:
        template:
            spec:
                serviceAccountName: pmp-secret-accessor
    ```

5. 다음 명령을 사용하여 배포에 변경 사항을 적용하십시오: `kubectl apply -f <your-deployment-file>.yaml`.

### 자격 증명 구성
 
Private Mendix Platform은 여러 시크릿 저장 백엔드를 지원합니다. 다양한 유형의 자격 증명(VCS PAT, 이메일 서버 자격 증명 등)을 선호하는 시크릿 관리 솔루션을 사용하도록 구성할 수 있습니다.

#### 구성 예시 - Azure Key Vault와 VCS PAT
 
다음 예시는 Private Mendix Platform을 Azure Key Vault 및 VCS PAT와 함께 작동하도록 구성하는 방법을 보여줍니다.

1. Private Mendix Platform 관리자 패널로 이동하십시오.
2. **Version Control** 설정으로 이동하십시오.
3. 구성할 서비스를 선택하십시오(예: GitHub, GitLab 또는 Bitbucket).
4. 모든 필수 구성 세부 정보를 입력하십시오.
5. **Credentials** 섹션에서 **Azure Key Vault**를 선택하십시오.
6. Key Vault의 **Secret Name (Vault Name)**을 입력하십시오(예: **PMP-Production-Vault**).

    Key name 필드는 읽기 전용 형식으로 자동 생성된 키 경로를 표시합니다. 예를 들어 Bitbucket을 사용하는 경우 Project Admin PAT의 키 이름은 *VCS-BitbucketProjectAdminPAT*입니다.

7. Azure Key Vault 시크릿의 **Value**에 해당 특정 키의 올바른 자격 증명 값이 포함되어 있는지 확인하십시오.
8. 각 서비스의 명명 규칙을 따라 필요에 따라 다른 자격 증명에 대해 프로세스를 반복하십시오.

### 데이터베이스에 직접 자격 증명 저장
 
Azure Key Vault를 사용하는 대신 기존 옵션을 사용하여 Private Mendix Platform 데이터베이스에 자격 증명을 저장할 수 있습니다. 이렇게 하려면 저장 옵션 목록에서 **Database**를 선택한 다음 입력 필드에 자격 증명을 직접 입력하십시오. 자격 증명은 암호화되어 Private Mendix Platform 데이터베이스에 저장됩니다.
