---
title: "지원되는 프로바이더"
url: /developerportal/deploy/private-cloud-supported-environments/
description: "Kubernetes 기반 Mendix에서 지원하는 프로바이더를 설명합니다."
weight: 100
---

## 소개

Kubernetes 기반 Mendix는 Mendix 앱을 배포하고 실행하기 위해 외부 서비스에 의존합니다.
이 문서에서는 Mendix Operator에서 공식적으로 지원하는 프로바이더 및 서비스를 다룹니다.

## Kubernetes 클러스터 유형

### 지원되는 클러스터 유형{#supported-clusters}

현재 다음 Kubernetes 클러스터 유형에 대한 배포를 지원합니다:

* [Amazon Elastic Kubernetes Service](https://aws.amazon.com/eks/) (EKS)
{{% alert color="info" %}}
Amazon EKS에 앱을 배포하려면 Mendix for Amazon EKS Reference Deployment 사용을 고려하십시오. 자세한 내용은 [Mendix for Amazon EKS—Terraform module](https://registry.terraform.io/modules/aws-ia/mendix-private-cloud/aws/latest)을 참조하십시오.
{{% /alert %}}
* [Azure Kubernetes Service](https://azure.microsoft.com/en-us/services/kubernetes-service/)
* [Red Hat OpenShift Container Platform](https://www.openshift.com/)
* [MicroK8s](https://microk8s.io/)
* [k3s](https://k3s.io/)
* [minikube](https://minikube.sigs.k8s.io/docs/)
* [Google Cloud Platform](https://cloud.google.com/)
* [Google Kubernetes Engine- Autopilot](https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview). 자세한 내용은 [Kubernetes 기반 Mendix 클러스터: GKE Autopilot 해결 방법](/developerportal/deploy/private-cloud-cluster/#gke-autopilot-workarounds)을 참조하십시오

{{% alert color="warning" %}}
Red Hat OpenShift에 배포하는 경우 배포를 생성할 때 이를 구체적으로 지정해야 합니다. 다른 모든 클러스터 유형은 일반적인 Kubernetes 작업을 사용합니다.
{{% /alert %}}

#### 지원되는 버전{#supported-versions}

Kubernetes 기반 Mendix Operator `v2.*.*`는 다음을 공식적으로 지원하는 최신 버전입니다:

* Kubernetes 버전 1.19~1.34
* OpenShift 4.6~4.20

{{% alert color="warning" %}}
Kubernetes 1.22는 여러 더 이상 사용되지 않는 API 및 기능에 대한 지원을 제거하는 [새 릴리스](https://kubernetes.io/blog/2021/08/04/kubernetes-1-22-release-announcement/)입니다.

이 Kubernetes 버전은 아직 대부분의 배포판 및 프로바이더에서 제공되거나 완전히 지원되지 않습니다.

Kubernetes 기반 Mendix Operator v2.*.*는 Kubernetes 버전 1.20 이상에 대한 지원을 확장하며 Kubernetes 버전 1.22에서 원활하게 작동하는 것이 확인되었습니다.

Kubernetes 기반 Mendix Operator v1.\*.\*를 실행하는 기존 클러스터는 Kubernetes 1.22로 업그레이드하기 **전에** Kubernetes 1.21 및 Kubernetes 기반 Mendix Operator v2.\*.\*로 업그레이드해야 합니다.

EOL된 구성 요소는 호환 가능한 상태로 유지될 것으로 예상되지만, 적극적으로 테스트하지는 않습니다. 이는 벤더가 보안 취약점(CVE)으로 인해 End-of-Life(EOL) 버전을 제거할 수 있기 때문입니다.

{{% /alert %}}

Kubernetes 기반 Mendix Operator `v1.12.*`는 이전 Kubernetes 버전을 공식적으로 지원하는 LTS 릴리스입니다:

* Kubernetes 버전 1.13~1.21
* OpenShift 3.11~4.7

### 클러스터 요구 사항

Mendix Operator를 설치하려면 클러스터 관리자가 다음을 수행할 수 있는 권한이 필요합니다:

* Custom Resource Definitions 생성
* 대상 네임스페이스 또는 프로젝트에서 역할 생성
* 대상 네임스페이스 또는 프로젝트에서 역할 바인딩 생성

클러스터에는 Kubernetes 노드에서 최소 2개의 CPU 코어, 2 GB 메모리 및 3 GB 임시 스토리지가 사용 가능해야 합니다. 이는 하나의 간단한 앱을 실행하기에 충분하지만 Kubernetes 핵심 구성 요소에 필요한 추가 리소스는 포함하지 않습니다.

OpenShift에서 클러스터 관리자는 `system:admin` 역할을 가져야 합니다.

#### CPU 요구 사항

Mendix Operator는 [x86-64](https://en.wikipedia.org/wiki/X86-64) 아키텍처의 CPU에서 실행됩니다.

{{% alert color="info" %}}

Mendix Operator v2.5.0부터 *연결 모드*에서 사용되는 컨테이너 이미지도 [ARM64/AArch64](https://en.wikipedia.org/wiki/AArch64)를 지원합니다. *ARM64* 지원은 현재 실험적이며 비프로덕션 환경에서만 사용해야 합니다.

핵심 *연결 모드* 기능만 *ARM64*를 지원합니다. 다음 기능은 현재 *ARM64* CPU를 지원하지 **않습니다**:

* [자체 레지스트리로 마이그레이션](/developerportal/deploy/private-cloud-migrating/)

{{% /alert %}}

{{% alert color="warning" %}}
클러스터가 여러 아키텍처(예: *x86-64* 및 *ARM64*)의 노드를 실행하는 경우 Kubernetes 기반 Mendix가 설치된 네임스페이스는 고정된(지정된) 아키텍처를 사용해야 합니다. 이를 수행하는 한 가지 방법은 해당 네임스페이스에 대해 [PodNodeSelector](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#podnodeselector)를 구성하고 특정 아키텍처(예: `amd64`)의 노드만 사용하는 것입니다.

이미지 빌더는 현재 다중 아키텍처 이미지를 빌드하지 않습니다.
{{% /alert %}}

### 지원되지 않는 클러스터 유형

[OpenShift Online](https://www.openshift.com/products/online/)(Starter 및 Pro를 포함한 모든 에디션) 또는 [OpenShift Developer Sandbox](https://developers.redhat.com/developer-sandbox)에서는 Custom Resource Definitions 설치를 허용하지 않으므로 Kubernetes 기반 Mendix를 사용할 수 없습니다.

[Docker Desktop](https://docs.docker.com/desktop/kubernetes/)에 포함된 Kubernetes는 공식적으로 지원되지 않습니다.

## 컨테이너 레지스트리{#container-registries}

Kubernetes 기반 Mendix는 모든 앱에 대한 컨테이너 이미지를 빌드하고 레지스트리에 푸시합니다. 레지스트리에 액세스하기 위한 자격 증명과 이미지를 레지스트리에 푸시할 수 있는 권한이 필요합니다.

이미지는 Kubernetes 기반 Mendix가 아닌 Kubernetes에 의해 레지스트리에서 가져옵니다.
Kubernetes 기반 Mendix의 구성 스크립트는 Kubernetes 이미지 풀 시크릿을 구성하고 이미지 푸시에 사용하는 것과 동일한 자격 증명을 사용할 수 있습니다(EKS를 제외한 모든 레지스트리).
대규모 또는 엔터프라이즈 배포의 경우 클러스터 전체 수준에서 이미지 풀을 구성하거나 별도의 읽기 전용 이미지 풀 자격 증명을 구성하는 것이 좋습니다.

### 로컬 레지스트리

로컬, 자체 호스팅 레지스트리는 다음 자체 인프라 클러스터에서 비프로덕션 용도로 지원됩니다:

* MicroK8s
* k3s
* minikube

로컬 레지스트리를 사용하려면 Kubernetes Pod(이미지 푸시용)와 클러스터 자체(이미지 풀용)에서 사용할 수 있어야 합니다. 대부분의 경우 푸시 URL과 풀 URL이 다릅니다.

사용자 이름/비밀번호 인증 또는 인증 없이 푸시할 수 있습니다.

### 외부 호스팅 레지스트리

사용자 이름/비밀번호 인증을 허용하는 외부 호스팅 [OCI 호환](https://github.com/opencontainers/distribution-spec/blob/main/spec.md) 레지스트리가 지원됩니다. 여기에는 다음이 포함됩니다:

* [Docker Hub](https://hub.docker.com/)
* [quay.io](https://quay.io/)
* [JFROG Artifactory](https://jfrog.com/artifactory/)
* [Sonatype Nexus](https://www.sonatype.com/products/nexus-repository)
* [Harbor](https://goharbor.io)

ACR을 Azure Kubernetes Service와 함께 사용하는 경우 ACR에서 이미지를 풀하기 위한 [네이티브 인증](https://docs.microsoft.com/en-us/azure/aks/cluster-container-registry-integration#create-a-new-aks-cluster-with-acr-integration)을 설정할 수 있습니다.

### OpenShift Image Registry

OpenShift 클러스터에서 로컬 이미지 레지스트리를 사용할 수 있습니다. OpenShift가 아닌 클러스터에서는 OpenShift 레지스트리를 사용할 수 없습니다.

이미지 풀 인증은 기본적으로 구성됩니다.

OpenShift 4 레지스트리는 구성이 필요하지 않으며 자동으로 구성됩니다.

OpenShift 3 레지스트리의 경우 풀 URL을 `docker-registry.default.svc:5000`으로 설정해야 합니다.
푸시 URL은 `<registry ip>:5000`으로 설정해야 하며, 여기서 `<registry ip>`는 `oc get svc docker-registry -n default`를 실행하여 얻을 수 있습니다.

OpenShift 레지스트리는 설치되고 사용 가능하도록 활성화되어야 합니다.

### Amazon Elastic Container Registry (ECR)

[Amazon ECR](https://aws.amazon.com/ecr/)은 EKS 클러스터에서만 사용할 수 있습니다.

ECR 레지스트리를 사용하려면 Mendix Operator에 이미지를 푸시하고 풀할 수 있는 권한이 있는 AWS Identity and Access Management(IAM) 계정이 필요합니다.

EKS 클러스터는 [ECR에서 이미지를 풀](https://docs.aws.amazon.com/AmazonECR/latest/userguide/ECR_on_EKS.html)할 수 있도록 구성되어야 합니다.

### Google Artifact Registry

[Google Cloud Platform](https://cloud.google.com/)은 [artifact registry](https://cloud.google.com/artifact-registry)를 제공합니다.

Mendix Operator는 [workload identity](https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity)를 사용한 레지스트리 인증을 지원합니다. Mendix Operator에는 레지스트리에 인증할 수 있는 권한을 가진 [google service account](https://cloud.google.com/iam/docs/service-accounts)에 [바인딩된](https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity#authenticating_to) Kubernetes 서비스 계정이 필요합니다.

### Azure Container Registry

[Azure Container Registry](https://azure.microsoft.com/en-us/services/container-registry/)는 모든 클러스터에서 사용할 수 있습니다(정적 자격 증명 인증을 사용하는 경우).

[Azure Kubernetes Service](https://azure.microsoft.com/en-us/products/kubernetes-service)와 함께 사용하는 경우 Mendix Operator는 Mendix Operator의 Kubernetes 서비스 계정에 할당된 [관리 ID 인증](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-authentication-managed-identity)을 사용할 수 있습니다.

## 데이터베이스{#databases}

다음 데이터베이스가 지원되며 나열된 기능을 제공합니다.

| 데이터베이스 | 데이터 지속성 | Operator에 의한 프로비저닝 |
| --- | --- | --- |
| Ephemeral | 아니오 | 예 |
| 표준 PostgreSQL | 예 | 예 |
| Microsoft SQL Server | 예 | 예 |
| 전용 JDBC | 예 | 아니오 |

### Ephemeral 데이터베이스

Ephemeral 데이터베이스 플랜은 Mendix Runtime 컨테이너에서 직접 실행되는 인메모리 데이터베이스를 사용합니다.
외부 데이터베이스나 프로바이더가 필요하지 않으며 빠른 테스트 또는 파일 스토리지가 필요하지 않은 앱에 적합합니다.

{{% alert color="info" %}}
Ephemeral 데이터베이스를 사용하는 앱은 환경이 중지되거나 다시 시작되면 모든 데이터를 잃게 됩니다.

Ephemeral 데이터베이스를 사용하는 앱은 둘 이상의 레플리카를 가질 수 없습니다. 첫 번째(리더) 레플리카만 시작할 수 있습니다.
{{% /alert %}}

### 표준 PostgreSQL 데이터베이스

이것은 Operator에 의해 자동으로 프로비저닝되는 PostgreSQL 데이터베이스를 말합니다. 기존 데이터베이스에 연결하는 경우 아래에 설명된 [전용 JDBC 데이터베이스](#jdbc) 옵션을 사용해야 합니다.

다음 표준 PostgreSQL 데이터베이스가 지원됩니다:

* PostgreSQL 13
* PostgreSQL 14
* PostgreSQL 15
* PostgreSQL 16
* PostgreSQL 17

{{% alert color="info" %}}
Kubernetes 기반 Mendix는 위에 나열된 모든 Postgres 버전을 지원하지만 Mendix Runtime은 더 구체적인 Postgres 버전을 요구할 수 있습니다.

최상의 호환성을 위해 사용 가능한 최신 Postgres 버전을 사용하십시오.
{{% /alert %}}

표준 PostgreSQL 데이터베이스는 Helm 차트 또는 설치 패키지에서 설치된 수정되지 않은 PostgreSQL 데이터베이스입니다.

다음 관리형 PostgreSQL 데이터베이스가 지원됩니다:

* [Amazon RDS for PostgreSQL](https://aws.amazon.com/rds/postgresql/)
* [Azure Database for PostgreSQL](https://azure.microsoft.com/en-us/services/postgresql/).
* [Google Cloud SQL for PostgreSQL](https://cloud.google.com/sql/docs/postgres).
* [Amazon RDS Aurora for PostgreSQL](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.AuroraPostgreSQL.html)

Amazon PostgreSQL 인스턴스는 Kubernetes 클러스터에서의 연결을 허용하기 위해 추가 방화벽 구성이 필요합니다.

Amazon Aurora PostgreSQL 인스턴스는 Kubernetes 클러스터에서의 연결을 허용하기 위해 추가 방화벽 구성이 필요합니다.

Azure PostgreSQL 데이터베이스는 Kubernetes 클러스터에서의 연결을 허용하기 위해 추가 방화벽 구성이 필요합니다.

일부 관리형 PostgreSQL 데이터베이스에는 제한 사항이 있거나 추가 구성이 필요할 수 있습니다.

정적 비밀번호 인증의 대안으로 Mendix Operator는 Kubernetes Service Account를 사용하여 다음과 인증할 수 있습니다:

* IAM 역할을 사용하는 AWS RDS 데이터베이스
* 관리 ID를 사용하는 Azure Database for PostgreSQL (Flexible Server) 데이터베이스

{{% alert color="info" %}}
PostgreSQL 데이터베이스를 사용하려면 Mendix Operator에 새 사용자 및 데이터베이스를 생성할 수 있는 루트 권한이 있는 Superuser 계정이 필요합니다.

각 Mendix 앱 환경에 대해 앱이 자체 데이터에만 액세스할 수 있도록 새 데이터베이스 스키마 및 사용자(역할)가 생성됩니다.
{{% /alert %}}

{{% alert color="info" %}}
기본적으로 Mendix Operator는 먼저 TLS가 활성화된 상태에서 데이터베이스 서버에 연결합니다. 데이터베이스 서버가 TLS를 지원하지 않으면 Mendix Operator는 TLS 없이 다시 연결합니다.
모든 PostgreSQL 데이터베이스(자체 서명 인증서가 있는 데이터베이스 포함)와의 호환성을 보장하기 위해 기본적으로 모든 TLS CA가 신뢰됩니다.

Strict TLS가 활성화된 경우 Kubernetes 기반 Mendix는 TLS로 PostgreSQL 서버에 연결하고 PostgreSQL 서버의 TLS 인증서를 검증합니다. 이 경우 다음과 같은 경우 연결이 실패합니다:

* PostgreSQL 서버의 인증서가 유효하지 않은 경우
* 또는 인증서가 알 수 없는 인증 기관에 의해 서명된 경우
* 또는 PostgreSQL 서버가 TLS 연결을 지원하지 않는 경우.

Mendix Operator를 사용하면 신뢰할 사용자 정의 인증 기관을 지정할 수 있습니다. 이를 통해 자체 서명 인증서가 있는 데이터베이스에서도 Strict TLS를 활성화할 수 있습니다.

Strict TLS 모드는 Mendix 8.15.2(또는 이후 버전)에서 생성된 앱에서만 사용해야 합니다. 이전 Mendix 버전은 TLS 인증서를 검증할 때 시작에 실패합니다.
{{% /alert %}}

### Microsoft SQL Server

이것은 Operator에 의해 자동으로 프로비저닝되는 SQL Server 데이터베이스를 말합니다. 기존 데이터베이스에 연결하는 경우 아래에 설명된 [전용 JDBC 데이터베이스](#jdbc) 옵션을 사용해야 합니다.

다음 Microsoft SQL Server 에디션이 지원됩니다:

* SQL Server 2019
* SQL Server 2022

다음 관리형 Microsoft SQL Server 데이터베이스가 지원됩니다:

* [Amazon RDS for SQL Server](https://aws.amazon.com/rds/sqlserver/)
* [Azure SQL Database](https://azure.microsoft.com/en-us/services/sql-database/)

Amazon 및 Azure SQL 서버는 Kubernetes 클러스터에서의 연결을 허용하기 위해 추가 방화벽 구성이 필요합니다.

일부 관리형 SQL Server 데이터베이스에는 제한 사항이 있거나 추가 구성이 필요할 수 있습니다.

정적 비밀번호 인증의 대안으로 Mendix Operator는 Kubernetes Service Account를 사용하여 Azure SQL 데이터베이스와 인증할 수 있습니다. Kubernetes Service Account는 Managed Identity에 연결되며 Managed Identity가 정적 사용자 이름/비밀번호를 대체합니다. 이 기능에는 Mendix Operator 버전 2.17(이상) 및 Mendix 10.10(이상)이 필요합니다.

{{% alert color="info" %}}
SQL Server 데이터베이스를 사용하려면 Mendix Operator에 새 사용자 및 데이터베이스를 생성할 수 있는 권한이 있는 Superuser 계정이 필요합니다.

각 Mendix 앱 환경에 대해 앱이 자체 데이터에만 액세스할 수 있도록 새 데이터베이스, 사용자 및 로그인이 생성됩니다.
{{% /alert %}}

{{% alert color="info" %}}
기본적으로 Kubernetes 기반 Mendix는 암호화를 강제하지 않습니다. 필요한 경우 SQL Server에서 암호화를 강제할 수 있습니다.

Strict TLS가 활성화된 경우 Mendix Operator는 TLS로 SQL Server에 연결하고 SQL Server의 TLS 인증서를 검증합니다. 이 경우 다음과 같은 경우 연결이 실패합니다:

* SQL Server가 암호화를 지원하지 않는 경우
* SQL Server 서버의 인증서가 유효하지 않은 경우
* 또는 인증서가 알 수 없는 인증 기관에 의해 서명된 경우

Mendix Operator를 사용하면 신뢰할 사용자 정의 인증 기관을 지정할 수 있습니다. 이를 통해 자체 서명 인증서가 있는 데이터베이스에서도 Strict TLS를 활성화할 수 있습니다.

Strict TLS 모드는 Mendix 8.15.2(또는 이후 버전)에서 생성된 앱에서만 사용해야 합니다. 이전 Mendix 버전은 TLS 인증서를 검증할 때 시작에 실패합니다.
{{% /alert %}}

### 전용 JDBC 데이터베이스{#jdbc}

이를 통해 Mendix Runtime에서 지원하는 기존 데이터베이스(스키마) [데이터베이스 구성 매개변수](/refguide/custom-settings/)를 직접 사용할 수 있습니다.

{{% alert color="info" %}}
전용 JDBC 데이터베이스는 둘 이상의 Mendix 앱에서 사용할 수 없습니다.
{{% /alert %}}

## 파일 스토리지{#file-storage}

### Ephemeral 파일 스토리지

Ephemeral 파일 스토리지 플랜은 Mendix Runtime 컨테이너에 직접 파일을 저장합니다.
외부 파일 스토리지 프로바이더가 필요하지 않으며 빠른 테스트 또는 파일 스토리지가 필요하지 않은 상태 비저장 앱에 적합합니다.

{{% alert color="info" %}}
Ephemeral 파일 스토리지를 사용하는 앱은 환경이 중지되거나 다시 시작되면 모든 파일을 잃게 됩니다.
{{% /alert %}}

### MinIO

[MinIO](https://min.io/)의 최신 버전이 서버 모드에서 실행되는 경우 지원됩니다.

{{% alert color="info" %}}
사용자, 정책 및 버킷을 생성하고 삭제할 수 있는 권한이 있는 관리자 계정이 필요합니다.

각 Mendix 앱 환경에 대해 앱이 자체 데이터에만 액세스할 수 있도록 새 버킷 및 사용자가 생성됩니다.
{{% /alert %}}

{{% alert color="warning" %}}
MinIO가 더 이상 사용되지 않는 Gateway 모드로 설치된 경우 etcd를 사용하도록 구성해야 합니다.
MinIO는 etcd를 사용하여 구성을 저장합니다.
etcd가 없으면 MinIO는 관리 API를 비활성화합니다 – 이는 Mendix Operator가 각 환경에 대해 새 사용자를 생성하는 데 필요합니다.
{{% /alert %}}

### Amazon S3

[Amazon S3](https://aws.amazon.com/s3/)가 지원됩니다. Kubernetes 기반 Mendix는 S3 버킷을 관리하고 액세스하는 여러 방법을 지원합니다: 환경별로 새 S3 버킷 및 IAM 계정을 생성하는 것부터 네임스페이스의 모든 환경이 계정 및 버킷을 공유하는 것까지.

지원되는 S3 모드의 전체 목록 및 각 모드에 필요한 IAM 권한은 [스토리지 플랜](/developerportal/deploy/standard-operator/#storage-plan) 구성 세부 정보에서 확인할 수 있습니다.

### Azure Blob Storage

[Azure Blob Storage](https://azure.microsoft.com/en-us/services/storage/blobs/)가 지원됩니다.

Mendix Operator는 다음 작업을 수행할 수 있습니다:

* 환경에 정적 액세스 키 및 기타 자격 증명을 제공합니다(정적 구성).
* 모든 새 환경에 대해 전용 컨테이너 및 Azure Managed Identity를 생성하고 환경이 전용 컨테이너에만 액세스할 수 있도록 하여 스토리지 컨테이너의 수명 주기를 처리합니다(환경의 Managed Identity를 통해). 이 기능은 Mendix 10.10 이상에서 작동합니다.

지원되는 Azure Blob Storage 모드의 전체 목록 및 각 모드에 필요한 역할 할당(권한)은 [스토리지 플랜](/developerportal/deploy/standard-operator/#storage-plan) 구성 세부 정보에서 확인할 수 있습니다.

### Google Cloud Storage

[Google Cloud Storage](https://cloud.google.com/storage)는 [Cloud Storage Interoperability](https://cloud.google.com/storage/docs/interoperability) 모드에서 지원됩니다.

Mendix Operator에는 상호 운용성 설정에서 구성할 수 있는 스토리지에 액세스하기 위한 엔드포인트, 액세스 키 및 비밀 키가 필요합니다.

### Ceph

[Ceph](https://ceph.io/en/)는 S3 호환 인터페이스 [Ceph Object Gateway](https://docs.ceph.com/en/mimic/radosgw/)를 통해 지원됩니다. Mendix Operator에는 스토리지에 액세스하기 위한 엔드포인트, 액세스 키 및 비밀 키가 필요합니다. 자격 증명을 얻는 방법에 대한 정보는 Ceph 문서를 확인하십시오.

## 네트워킹

{{% alert color="info" %}}
DNS, 로드 밸런싱 및 Ingress 컨트롤러는 전체 Kubernetes 클러스터에 대해 먼저 구성해야 합니다.
Kubernetes 기반 Mendix는 기존 Ingress 컨트롤러를 사용합니다.
{{% /alert %}}

{{% alert color="warning" %}}
[Kubernetes Ingress NGINX Controller](https://kubernetes.github.io/ingress-nginx/)는 [2026년 3월까지](https://kubernetes.io/blog/2025/11/11/ingress-nginx-retirement/) 지원됩니다. 다른 Ingress 컨트롤러로 전환하는 것을 권장합니다. NGINX 프로젝트(F5 Networks)의 [NGINX Ingress Controller](https://github.com/nginx/kubernetes-ingress)는 유사한 기능 세트를 가지고 있습니다. 대부분의 경우 더 이상 사용되지 않는 Kubernetes 컨트롤러에서 F5 Networks의 컨트롤러로 전환하려면 Ingress 어노테이션의 이름만 변경하면 됩니다.
{{% /alert %}}

### OpenShift Route

OpenShift 라우트는 OpenShift에서만 지원됩니다.

현재 지원되는 유일한 구성 옵션은 TLS를 켜거나 끄는 것입니다.
TLS가 켜져 있으면 `Edge` 종료(트래픽이 Pod로 라우팅되기 전에 라우터에서 TLS 종료가 발생)가 사용되며 HTTP에서 HTTPS로 자동 리디렉션됩니다.

OpenShift에서 다음 구성 옵션을 사용할 수 있습니다:

* TLS 켜기 및 끄기
* 라우트 어노테이션 추가
* 기본 라우터 인증서 대신 사용할 기존 TLS 인증서 시크릿 이름 제공
* 기본 OpenShift 라우트 도메인 대신 사용할 사용자 정의 도메인 이름(예: mendix.example.com) 제공

개별 환경에 대해 기본 구성을 재정의하는 사용자 정의 TLS 구성을 제공할 수도 있습니다(**독립형** Mendix Operator 설치에서만 사용 가능):

* TLS 켜기 및 끄기
* 사용할 기존 TLS 인증서 시크릿 이름 지정
* 환경 사양에서 직접 TLS 인증서 및 개인 키 값 제공

### Ingress

Kubernetes 기반 Mendix는 다음 Ingress 컨트롤러와 호환됩니다:

* NGINX 프로젝트의 [NGINX Ingress Controller](https://github.com/nginx/kubernetes-ingress)
* [Traefik](https://traefik.io/traefik/)
* [Istio Kubernetes Ingress](https://istio.io/latest/docs/tasks/traffic-management/ingress/kubernetes-ingress/)
* [HAProxy Kubernetes Ingress Controller](https://github.com/haproxytech/kubernetes-ingress)
* [AWS Application Load Balancer](https://docs.aws.amazon.com/eks/latest/userguide/alb-ingress.html)
* [Ingress for External Application Load Balancer](https://cloud.google.com/kubernetes-engine/docs/concepts/ingress-xlb)
* [Azure Application Gateway Ingress Controller](https://learn.microsoft.com/en-us/azure/application-gateway/ingress-controller-overview)
* Kubernetes 프로젝트의 [더 이상 사용되지 않는 Kubernetes Ingress NGINX Controller](https://kubernetes.github.io/ingress-nginx/) - ⚠️ 2026년 3월까지만 지원

Ingress의 경우 다음을 수행할 수 있습니다:

* TLS 켜기 및 끄기
* Ingress 어노테이션 추가
* 서비스 어노테이션 추가
* Ingress 클래스, 경로 및 경로 유형 지정
* 사용할 기존 TLS 시크릿 이름 제공
* 도메인 이름(예: mendix.example.com) 제공

각 환경에 대해 도메인 이름을 기반으로 URL이 자동으로 생성됩니다.
예를 들어, 도메인 이름이 mendix.example.com으로 설정된 경우 앱은 myapp1-dev.mendix.example.com, myapp1-prod.mendix.example.com 등과 같은 URL을 갖게 됩니다.

DNS 서버는 모든 하위 도메인(`*` 하위 도메인, 예: `*.mendix.example.com`)을 Ingress/로드 밸런서로 라우팅하도록 구성해야 합니다.

개별 환경에 대해 기본 구성을 재정의하는 사용자 정의 TLS 구성을 제공할 수도 있습니다(**독립형** Mendix Operator 설치에서만 사용 가능):

* TLS 켜기 및 끄기
* 사용할 기존 TLS 인증서 시크릿 이름 지정
* 환경 사양에서 직접 TLS 인증서 및 개인 키 값 제공

TLS 인증서를 관리하는 여러 방법이 있습니다:

* Ingress 컨트롤러에 와일드카드 도메인(예: `*.mendix.example.com`)이 있는 기본 인증서를 가질 수 있습니다. [Let's Encrypt](https://letsencrypt.org/)를 지원하는 Ingress 컨트롤러의 경우 Ingress 컨트롤러가 TLS 인증서를 자동으로 요청하고 관리할 수도 있습니다.
* 각 환경에 TLS 인증서 시크릿을 제공합니다.
* Ingress 어노테이션을 사용하여 [cert-manager](https://cert-manager.io/) 또는 유사한 솔루션을 사용합니다. 이 서비스를 사용하여 자동으로 TLS 인증서를 요청하고 Ingress 컨트롤러에 대한 시크릿을 생성할 수 있습니다.

Mendix Operator v1.11.0부터 Mendix 앱 환경은 [Linkerd](https://linkerd.io/) Service Mesh를 사용할 수 있습니다. Linkerd를 사용하여 Ingress Controller와 Mendix 앱을 실행하는 Pod 간의 HTTP(또는 HTTPs) 트래픽을 모니터링하고 재암호화할 수 있습니다.

### 서비스만

Kubernetes 기반 Mendix는 Ingress 없이 서비스를 생성할 수 있습니다.
이렇게 하면 Ingress 객체를 Kubernetes 기반 Mendix와 별도로 관리할 수 있습니다.

Kubernetes 기반 Mendix는 다음과 호환되는 서비스를 생성할 수 있습니다:

* [AWS Network Load Balancer](https://docs.aws.amazon.com/eks/latest/userguide/network-load-balancing.html)
* AWS Classic Load Balancer

### Service Mesh 지원

Mendix Operator v2.5.0부터 다음 Service Mesh를 전체 Kubernetes 기반 Mendix 네임스페이스에 대해 활성화할 수 있습니다:

* [Istio](https://istio.io/)
* [Linkerd](https://linkerd.io)

Service Mesh 사이드카 삽입이 활성화된 경우 Kubernetes 기반 Mendix 네임스페이스의 Pod 간 모든 통신은 Service Mesh를 통해 이루어집니다.

Mendix Operator v1.11.0에서 Service Mesh 사이드카 삽입에 대한 지원이 추가되었지만 앱 환경 Pod에만 적용되었습니다.
