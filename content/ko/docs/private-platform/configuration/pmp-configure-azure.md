---
title: "Azure에서 CI/CD 구성"
url: /private-mendix-platform/configure-azure/
description: "Private Mendix Platform의 초기 구성에 대해 설명합니다."
weight: 30
aliases:
    - /private-mendix-platform-configure-azure/
---

## 소개

이 문서는 Azure DevOps 서비스에서 Private Mendix Platform의 지속적 통합 및 배포(CI/CD) 솔루션을 구성할 때 사용할 수 있는 구성 옵션을 설명합니다.

### 사전 요구사항

CI/CD 파이프라인을 구성하려면 다음을 준비하십시오:

* Mendix 앱을 빌드할 Azure 조직.
* 빌드된 MDA 파일을 저장할 수 있는 Azure Blob 또는 AWS S3 엔드포인트.

## CI/CD 파이프라인 구성

Azure 조직이 있는 경우 **Switch to Admin Mode** > **Settings** > **Build Settings** > **Build Method** > **Build Utility**에서 Azure를 CI 시스템으로 설정할 수 있습니다. 먼저 [개인 접근 토큰](#pat)을 얻은 다음 다음 설정을 구성해야 합니다:

* [Azure Blob 설정](#blob)
* [S3 버킷 설정](#bucket)

마지막으로 [Kubernetes 클러스터를 등록](/private-mendix-platform/reference-guide/admin/company/#cluster-manager)해야 합니다.

{{< figure src="/attachments/private-platform/pmp-cicd4.png" class="no-border" >}}

### 개인 접근 토큰(Personal Access Token) 얻기 {#pat}

개인 접근 토큰(PAT)은 Azure DevOps에서 인증하는 데 사용됩니다. 토큰 얻기에 대한 자세한 내용은 Azure DevOps 문서의 [PAT 만들기](https://learn.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=Windows#create-a-pat)를 참조하십시오.

### Azure Blob 설정 구성 {#blob}

이 섹션의 설정은 Azure Blob 설정을 구성합니다.

* **Azure Blob URL** - 예: `https://{your domain name}.blob.core.windows.net/pmp`.
* **Azure Blob Token** - 이 시크릿 값은 Azure Blob 스토리지에 접근하는 데 사용됩니다.

### 빌드 이미지 설정 구성 {#bucket}

이 섹션의 설정은 S3 버킷을 구성합니다.

* **S3 Endpoint** - 예: `Cloud Object Storage - Amazon S3 - AWS`.
* **S3 Bucket Name** - S3 버킷 이름, 예: `mybucket`.
* **Region** - 예: `ap-southeast-1`.
* **Access Key ID** - 이 ID 값은 S3 버킷에 접근하는 데 사용됩니다.
* **Secret Access Key** - 이 시크릿 키 값은 S3 버킷에 접근하는 데 사용됩니다.

### Azure DevOps 파이프라인으로 앱 빌드

Azure DevOps 파이프라인으로 앱을 빌드하려면 다음 단계를 수행하십시오:

1. 관리자 모드에서 모든 필수 설정(Azure DevOps URL, Organization, PAT, Blob 또는 S3 Storage)을 구성했는지 확인한 다음 **Save**를 클릭하십시오.
2. 사용자 모드로 전환하십시오.
3. Azure DevOps 빌드 유틸리티로 패키지를 생성할 앱을 선택하십시오.

#### 앱 패키지 빌드 문제 해결

앱 패키지 빌드가 실패하면 [Azure DevOps](https://dev.azure.com)의 Pipeline Build 페이지에서 오류 메시지를 확인할 수 있습니다. 오류 메시지가 *No hosted parallelism has been purchased or granted*인 경우 Microsoft Azure DevOps 서비스에서 무료 병렬 처리 허가를 구매하거나 요청해야 합니다. 요청이 승인된 후 빌드를 다시 실행하십시오.

## CI/CD 파이프라인 아키텍처

이 섹션의 다이어그램은 파이프라인의 아키텍처와 구성 요소를 설명합니다. Auto Detect Mx Version 빌드 이미지 설정의 활성화 여부에 따라 아키텍처가 달라집니다.

### Auto Detect Mx Version 설정이 활성화된 아키텍처

다음 다이어그램은 **Auto Detect Mx Version** 설정을 활성화한 경우의 파이프라인 아키텍처를 보여줍니다. 자세한 내용은 [빌드 이미지 설정](/private-mendix-platform/configure-k8s/#build-images)을 참조하십시오.

{{< figure src="/attachments/private-platform/pmp-cicd2.png" alt="Auto Detect Mx Runtime Version" class="no-border" >}}

### Auto Detect Mx Version 설정이 비활성화된 아키텍처

다음 다이어그램은 **Auto Detect Mx Version** 설정을 비활성화한 경우의 파이프라인 아키텍처를 보여줍니다. 자세한 내용은 [빌드 이미지 설정](/private-mendix-platform/configure-k8s/#build-images)을 참조하십시오.

{{< figure src="/attachments/private-platform/pmp-cicd3.png" alt="User Input Mx Runtime Version" class="no-border" >}}
