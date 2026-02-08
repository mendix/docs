---
title: "AWS Secret Manager를 사용한 외부 시크릿 관리 구성"
url: /private-mendix-platform/configure-aws-secret-manager/
description: "Private Mendix Platform의 AWS Secret Manager 구성에 대해 설명합니다."
weight: 40
---

## 소개

Private Mendix Platform은 기존 데이터베이스 저장 옵션과 함께 [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/)를 외부 시크릿 관리 솔루션으로 지원하여 자격 증명 관리의 보안 및 유연성을 강화합니다. 기존 데이터베이스 저장 방식에서는 자격 증명이 암호화되어 Private Mendix Platform 데이터베이스에 직접 저장됩니다. AWS Secrets Manager를 사용하면 자격 증명이 대신 AWS Secrets Manager에 저장되고 IAM 역할을 통해 안전하게 접근되어 보안, 중앙 집중식 관리 및 엔터프라이즈 보안 정책 준수가 향상됩니다. 이 문서에서는 Private Mendix Platform 프로젝트에 대해 AWS Secrets Manager 통합을 구성하는 방법을 설명합니다.

## 사전 요구사항

AWS Secrets Manager 통합을 구성하기 전에 다음을 준비하십시오:

* 시크릿을 생성하고 관리할 적절한 권한이 있는 AWS 계정
* AWS Secrets Manager 접근을 위한 역할 및 정책을 생성할 IAM 권한
* 관리자 권한이 있는 Private Mendix Platform 프로젝트 관리자 패널 접근
* AWS 서비스, IAM 역할 및 Kubernetes(EKS 배포 시)에 대한 기본 지식
* 기존 EKS 클러스터(PMP 배포가 Kubernetes에서 실행되는 경우)

## 외부 시크릿 관리 구성

외부 시크릿 관리를 구성하려면 먼저 AWS Secret Manager에서 시크릿을 생성하고, IAM 권한 및 서비스 계정을 구성한 다음, Private Mendix Platform 관리자 패널에서 필수 자격 증명을 구성해야 합니다. 자세한 내용은 아래 섹션을 참조하십시오.

### 시크릿 생성

AWS Secret Manager에서 시크릿을 생성하려면 다음 단계를 수행하십시오:

1. AWS Management Console에 로그인하십시오.
2. **AWS Secrets Manager** 서비스로 이동하십시오.
3. **"Store a new secret**을 클릭하십시오.
4. 시크릿 유형으로 **Other type of secret**을 선택하십시오.
5. 시크릿 저장을 위해 **JSON** 형식을 선택하십시오.
6. Private Mendix Platform [명명 규칙](#naming-convention)을 사용하여 키-값 쌍을 입력하십시오.
7. **Next**를 클릭하십시오.
8. 시크릿에 대한 설명적 이름을 입력하십시오. 예: *PMP-Production-Credentials*.
9. 선택 사항: 더 나은 구성 및 규정 준수 추적을 위해 설명과 태그를 추가하십시오.
10. **Next**를 클릭하여 시크릿 설정을 검토하십시오.
11. 세부 정보를 검토하고 **Store**를 클릭하여 시크릿을 생성하십시오.

{{% alert color="info" %}}
시크릿 이름과 ARN을 기록해 두십시오. Private Mendix Platform이 시크릿을 사용하도록 구성할 때 이 정보가 필요합니다.
{{% /alert %}}

#### 키 속성에 대한 명명 규칙 {#naming-convention}

외부 시크릿 저장소에서 키로 사용할 속성을 만들 때 다음 명명 규칙을 사용하십시오:

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

다음은 JSON 템플릿입니다. 이 템플릿을 시크릿에 복사하고 사용할 값을 설정하십시오. 사용하지 않을 값은 비워 두십시오.

```json
{
  "VCS": {
    "BitbucketProjectAdminPAT": "",
    "BitbucketAdminPassword": "",
    "GitlabGroupOwnerPAT": "",
    "GitlabAdminPAT": "",
    "GithubOrgOwnerPAT": "",
    "GithubAdminPAT": "",
    "GithubEnterpriseClientSecret": "",
    "AzureDevOpsOrgAdminPAT": "",
    "AzureAuthSecret": ""
  },
  "BuildPackage": {
    "FileBasicAuthPassword": "",
    "AwsSecretAccessKey": ""
  },
  "RuntimeBaseImage": {
    "PrivateRegistryPassword": "",
    "S3CompatibleAccessKey": ""
  },
  "MDAStorage": {
    "FileBasicAuthPassword": "",
    "AwsSecretAccessKey": ""
  },
  "OCIRegistry": {
    "PrivateRegistryPassword": "",
    "S3CompatibleAccessKey": ""
  },
  "BuildCluster": {
    "KubernetesConfigureToken": ""
  },
  "CIAdmin": {
    "JenkinsConfigureAPIToken": "",
    "JenkinsTriggerAuthToken": "",
    "AzureOrgAdminPAT": "",
    "AzureBlobStorageToken": "",
    "AzureAwsS3SK": ""
  },
  "ClusterManager": {
    "KubernetesApiToken": ""
  },
  "ClusterSettings": {
    "KubernetesAdminPassword": "",
    "GrafanaAPIKey": "",
    "MDAAWSS3AccessKey": "",
    "OCIRegistryPassword": ""
  },
  "Marketplace": {
    "ImportCDNPassword": ""
  },
  "Email": {
    "SMTPPassword": ""
  }
}
```

### IAM 권한 및 서비스 계정 구성

Private Mendix Platform은 [IRSA (IAM Roles for Service Accounts)](https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html)를 사용하여 AWS 자격 증명을 저장하지 않고 AWS Secrets Manager에 안전하게 접근합니다. 이는 시크릿에 접근하는 안전하고 감사 가능한 방법을 제공합니다. 이 기능을 활성화하려면 먼저 [IAM 역할](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html)을 생성한 다음 서비스 계정을 구성해야 합니다.

#### IAM 역할 생성

IAM 역할을 생성하려면 다음 단계를 수행하십시오:

1. AWS Management Console에서 IAM 서비스로 이동하십시오.
2. **Create role**을 클릭하고 다음을 구성하십시오:

    * **Trusted entity** - **Web identity** 선택
    * **Identity provider** - EKS 클러스터의 OIDC 공급자를 선택
    * **Audience** - `sts.amazonaws.com`

3. **Next**를 클릭하여 권한으로 진행하십시오.
4. 다음 권한을 가진 맞춤 정책을 생성하거나 연결하십시오:

    ```yaml
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": [
                    "secretsmanager:GetSecretValue",
                    "secretsmanager:DescribeSecret"
                ],
                "Resource": "arn:aws:secretsmanager:*:*:secret:PMP-*"
            }
        ]
    }
    ```

5. 역할의 이름을 지정하십시오. 예: *PMP-SecretsManager-Role*.
6. 다음 단계를 위해 **Role ARN**을 기록해 두십시오.

#### EKS 서비스 계정 구성

EKS 서비스 계정을 구성하려면 다음 단계를 수행하십시오:

1. AWS Management Console에서 EKS 클러스터로 이동하십시오.
2. **Configuration** 탭에서 **Service accounts**를 선택하십시오.
3. **Create**를 클릭하여 새 서비스 계정을 생성하십시오.
4. 서비스 계정 이름을 입력하십시오. 예: *pmp-secrets-access*.
5. **IAM role** 아래에서 위에서 생성한 역할을 선택하십시오.
6. **Create**를 클릭하여 서비스 계정 생성을 완료하십시오.
7. 배포 YAML에 다음 어노테이션을 추가하여 새 서비스 계정을 사용하도록 Kubernetes 배포를 업데이트하십시오:

    ```text
    apiVersion: apps/v1
    kind: Deployment
    metadata:
        name: pmp-deployment
        annotations:
            eks.amazonaws.com/role-arn: arn:aws:iam::<your-account-id>:role/PMP-SecretsManager-Role
    spec:
        template:
            spec:
                serviceAccountName: pmp-secret-access
    ```

8. 다음 명령을 사용하여 Kubernetes 클러스터에 변경 사항을 적용하십시오: `kubectl apply -f <your-deployment-file>.yaml`.
9. 애플리케이션의 로그를 확인하여 서비스 계정이 올바르게 구성되었는지 확인하십시오.

    AWS Secret Manager에 저장된 시크릿에 접근할 수 있어야 합니다.

### 자격 증명 구성

Private Mendix Platform은 여러 시크릿 저장 백엔드를 지원합니다. 다양한 유형의 자격 증명(VCS PAT, 이메일 서버 자격 증명 등)을 선호하는 시크릿 관리 솔루션을 사용하도록 구성할 수 있습니다.

#### 구성 예시 - AWS Secrets Manager와 VCS PAT

다음 예시는 Private Mendix Platform을 AWS Secrets Manager 및 VCS PAT와 함께 작동하도록 구성하는 방법을 보여줍니다.

1. Private Mendix Platform 관리자 패널로 이동하십시오.
2. **Version Control** 설정으로 이동하십시오.
3. 구성할 서비스를 선택하십시오(예: GitHub, GitLab 또는 Bitbucket).
4. 모든 필수 구성 세부 정보를 입력하십시오.
5. **Credentials** 섹션에서 **AWS Secrets Manager**를 선택하십시오.
6. 이전에 생성한 시크릿의 이름을 입력하십시오. 예: *PMP-Credentials*.

    **Key name** 필드는 읽기 전용 형식으로 자동 생성된 키 경로를 표시합니다.

7. AWS Secrets Manager 시크릿에 적절한 키 구조를 사용하여 자격 증명이 포함되어 있는지 확인하십시오.

    예를 들어 Bitbucket을 사용하는 경우 `Project Admin PAT`의 키 이름은 `VCS.BitbucketProjectAdminPAT`이며, 여기서 `VCS`는 모듈 이름이고 `BitbucketProjectAdminPAT`는 자격 증명 이름입니다.

    시크릿 템플릿에는 사용할 수 있는 샘플 키 구조가 포함되어 있습니다:

    ```text
        {  //...other keys
            "VCS": {
                // ...other keys
                "BitbucketProjectAdminPAT": "your-bitbucket-pat",
                // ...other keys
                },
            // ...other keys
        }
    ```

8. 각 서비스의 명명 규칙을 따라 필요에 따라 다른 자격 증명에 대해 프로세스를 반복하십시오.

## 데이터베이스에 직접 자격 증명 저장

AWS Secret Manager를 사용하는 대신 기존 옵션을 사용하여 Private Mendix Platform 데이터베이스에 자격 증명을 저장할 수 있습니다. 이렇게 하려면 저장 옵션 드롭다운에서 **Database**를 선택한 다음 입력 필드에 자격 증명을 직접 입력하십시오. 자격 증명은 암호화되어 Private Mendix Platform 데이터베이스에 저장됩니다.
