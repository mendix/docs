---
title: "기술 부록: 2. Operator 플로우"
linktitle: "2. Operator 플로우"
url: /developerportal/deploy/private-cloud-technical-appendix-02/
description: "Mendix on Kubernetes에서 지원하는 공급자를 설명합니다."
weight: 20
---

## 소개

이 문서에서는 Mendix on Kubernetes 구성 요소가 외부 서비스 및 서로 간에 어떻게 상호 작용하는지에 대한 개요를 제공합니다. 다음 경우에 발생하는 일을 설명합니다:

* Mendix Operator 설치 및 구성 시
* 환경 생성 시

{{% alert color="info" %}}
이 문서의 시퀀스 다이어그램은 명확성을 위해 단순화되었습니다. Kubernetes Operator는 논블로킹, 이벤트 기반, 비동기 방식입니다. 블로킹 메서드 호출에 의존하는 대신 Operator는 [Custom Resource(CR)](/developerportal/deploy/private-cloud-technical-appendix-01/#operators) 또는 다른 Kubernetes Resource의 상태가 변경될 때 이벤트를 수신하고, 변경이 필요한 경우 Kubernetes Resource를 생성, 업데이트 또는 삭제하는 요청을 보냅니다.

다이어그램은 Connected 모드와 Standalone 모드 모두에 적용되며, Connected 모드에서만 사용되는 것으로 식별되는 일부 추가 단계가 있습니다.
{{% /alert %}}

## 설치 사전 요구 사항

Operator 사전 요구 사항의 전체 목록은 Mendix on Kubernetes [지원 공급자](/developerportal/deploy/private-cloud-supported-environments/)를 참조하십시오.

Mendix on Kubernetes는 Kubernetes 클러스터에 Mendix 앱을 배포하기 위한 공식적으로 지원되는 Mendix 솔루션입니다.
기존 에코시스템과의 더 나은 통합을 제공하기 위해 Mendix on Kubernetes는 컴퓨팅, 스토리지 및 네트워킹 리소스를 위해 외부 서비스에 의존합니다. 예를 들어 AWS 에코시스템의 Mendix on Kubernetes를 사용하면 다음을 할 수 있습니다:

* AWS 하이퍼스케일링 기능 활용
* 관리형 데이터베이스 및 파일 스토리지 솔루션 사용
* 동일한 AWS 계정에서 이미 실행 중인 다른 워크로드와 통합

Mendix on Kubernetes는 일부 하이퍼스케일러와의 향상된 통합을 제공하지만 자체 호스팅 솔루션도 지원합니다. *microk8s*, *k3s/k3os* 또는 *minikube*와 같은 로컬 자체 포함 Kubernetes VM에서 Mendix on Kubernetes를 실행할 수 있습니다.

Mendix on Kubernetes Operator를 설치하기 전에 환경이 작동하는지 확인하는 것을 강력히 권장합니다. 예를 들어 "hello world" 테스트 컨테이너 앱을 배포하고 데이터베이스, 파일 스토리지 및 컨테이너 레지스트리에 Kubernetes 클러스터에서 접근할 수 있는지 테스트할 수 있습니다.

{{% alert color="info" %}}
Kubernetes 환경이 공용 인터넷에서 접근 가능한 경우 환경이 보안되고 최신 상태인지 확인하십시오.
{{% /alert %}}

### Kubernetes

Mendix Operator는 [Kubernetes API](https://kubernetes.io/docs/concepts/overview/kubernetes-api/)를 사용하여 Kubernetes 리소스를 관리하고 상태를 저장합니다. Mendix Operator에는 [Custom Resource Definition(CRD)](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/)이 포함되어 있어 Kubernetes API를 통해 Operator를 제어하고 상태를 쿼리할 수 있습니다. `kubectl`, `oc`, OpenShift Web Console, [Lens](https://k8slens.dev/) 등 모든 Kubernetes API 클라이언트를 사용하여 Operator를 제어할 수 있습니다. Mendix Portal도 환경을 관리하는 데 사용할 수 있습니다(Mendix Gateway Agent를 Kubernetes API 클라이언트로 사용).

Mendix on Kubernetes는 기본 운영 체제에 접근하지 않습니다. Kubernetes 서비스 계정은 Kubernetes API를 호출하는 데 사용되며 [Kubernetes RBAC](https://kubernetes.io/docs/reference/access-authn-authz/rbac/)는 각 서비스 계정이 최소한의 필수 권한만 얻도록 합니다. Mendix에서 제공하는 모든 컨테이너 이미지는 비루트 사용자/그룹으로 실행되며 권한 상승이 필요하지 않습니다. 컨테이너 이미지는 구성 없이 랜덤화된 UID를 사용하여 OpenShift에서 실행할 수 있습니다.

[`mxpc-cli`를 사용한 설치](#installation) 중에 현재 사용자의 Kubernetes 인증이 네임스페이스를 생성하고 CRD를 설치하는 데 사용됩니다.

### 데이터베이스

각 Mendix 환경에는 전용 데이터베이스가 필요합니다. 두 개의 다른 애플리케이션/환경이 데이터베이스를 공유할 수 없습니다.
Mendix on Kubernetes에는 데이터베이스 서버에 테넌트를 생성하고 삭제하는 내장 기능이 있어 단일 데이터베이스 서버를 여러 환경에서 공유할 수 있습니다. 이를 "온디맨드" 데이터베이스라고 합니다. 새 환경이 생성되면 Operator가 해당 환경에 대한 데이터베이스 테넌트를 자동으로 생성할 수 있습니다.

"전용" 데이터베이스를 수동으로 생성할 수도 있으며, Operator는 데이터베이스 자격 증명을 Mendix Runtime에 직접 전달합니다. 전용 데이터베이스는 환경 간에 공유할 수 없습니다.

Mendix on Kubernetes는 데이터베이스 서버를 설치, 생성 또는 유지 관리하지 않습니다. 데이터베이스 서버를 제공하고 유지 관리해야 합니다. Mendix on Kubernetes에서 공식적으로 지원하는 한 호환 가능한 모든 데이터베이스 서버를 사용할 수 있습니다(예: AWS RDS).

영속성이 필요하지 않은 앱(예: 데모 또는 프론트엔드 앱)의 경우 임시 데이터베이스를 사용할 수 있습니다. Mendix Runtime은 재시작 간에 데이터를 유지하지 않는 인메모리 데이터베이스를 사용합니다.

### 파일 스토리지

파일을 저장하기 위해 Mendix 환경은 AWS S3 또는 Minio와 같은 Blob(객체) 스토리지 서버에 접근해야 합니다. 특수 Blob 스토리지 서버는 블록 스토리지(CSI 또는 마운트된 볼륨)보다 유지 관리 및 관리가 훨씬 쉽습니다. 데이터베이스와 달리 단일 Blob 스토리지 버킷과 계정을 여러 환경에서 공유할 수 있습니다.
스토리지 공급자에 따라 Mendix on Kubernetes는 새 환경이 생성될 때 버킷과 IAM 사용자를 자동으로 프로비저닝하거나 환경이 사전 프로비저닝된 버킷과 IAM 계정을 사용하도록 할 수 있습니다.

Mendix on Kubernetes는 Blob 스토리지 서버(예: Minio)를 설치, 생성 또는 유지 관리하지 않습니다. Blob 스토리지 서버를 설치하고 유지 관리해야 합니다. AWS S3 또는 Azure Blob Storage와 같은 관리형 스토리지 솔루션을 사용하는 경우 Mendix Operator에서 사용할 스토리지 계정과 IAM 역할을 생성해야 합니다.

### 네트워크 엔드포인트

HTTP 클라이언트가 Mendix Runtime과 통신할 수 있도록 하려면 네트워크 인프라를 설정해야 합니다. 이는 일반적으로 DNS 와일드카드 도메인, 로드 밸런서 및 Ingress Controller를 포함합니다. 인프라는 네트워크가 정확히 어떻게 설정되어 있는지와 Mendix 앱에 어떻게 접근할 수 있어야 하는지에 따라 달라집니다. 예를 들어 Mendix 앱이 프라이빗 인트라넷에서만 접근 가능하고 프라이빗 DNS 영역의 도메인을 사용해야 하는 요구 사항이 있을 수 있습니다.

OpenShift와 같은 일부 Kubernetes 벤더는 전체 네트워크를 즉시 설치하고 구성합니다. AWS와 같은 다른 벤더는 여러 유형의 Ingress Controller와 로드 밸런서를 제공합니다.

Mendix on Kubernetes는 다음 중 하나를 생성할 수 있습니다:

* [Kubernetes Service](https://kubernetes.io/docs/concepts/services-networking/service/)
* [Kubernetes Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/) 및 관련 서비스
* [OpenShift Route](https://docs.openshift.com/container-platform/4.9/networking/routes/route-configuration.html) 및 관련 서비스

Mendix on Kubernetes를 사용하면 전역적으로(전체 네임스페이스) 또는 환경별로 일부 Ingress, Route 및 Service 속성을 사용자 정의할 수 있습니다.

### 컨테이너 레지스트리

Kubernetes는 컨테이너 이미지를 사용하여 소프트웨어를 배포합니다. Mendix 앱(.mda) 파일을 배포하기 전에 Mendix on Kubernetes는 .mda 파일을 컨테이너 이미지로 다시 패키징하고 이 이미지를 *ECR*, *quay.io* 또는 *Nexus*와 같은 컨테이너 이미지 레지스트리에 푸시합니다. 중앙 집중식 컨테이너 레지스트리를 사용하면 클러스터 확장이 간소화되고 클러스터에서 실행 중인 항목에 대한 인사이트를 제공합니다.
예를 들어 [Trivy scanner](https://github.com/aquasecurity/trivy)를 사용하여 클러스터에 배포된 모든 이미지를 CVE에 대해 스캔할 수 있습니다.

컨테이너 레지스트리를 생성하고 Mendix Operator에 자격 증명을 제공하여 레지스트리에 이미지를 푸시할 수 있도록 해야 합니다. 또한 Kubernetes 클러스터가 레지스트리에서 이미지를 풀하도록 인증되어야 합니다.

### 네트워크 연결

클러스터는 데이터베이스와 파일(Blob) 스토리지에 대한 네트워크 연결이 필요합니다.

*Connected* 클러스터의 경우 Mendix on Kubernetes는 [Mendix 서비스](/developerportal/deploy/private-cloud-cluster/#prerequisites-connected)에 연결할 수 있어야 합니다. 필요한 경우 통신은 HTTPS 프록시를 통해 수행할 수 있습니다. Mendix Operator는 Mendix 서비스와 통신하기 위해 인터넷 대면 오픈 포트(포트 포워딩)가 필요하지 않습니다. Mendix Portal과의 모든 통신은 HTTPS를 통해 이루어지며 Kubernetes 클러스터에서 시작됩니다. NAT(Network Address Translation) 장치 또는 일련의 NAT 장치 뒤에서도 Mendix on Kubernetes를 실행할 수 있습니다.

## 설치 {#installation}

아래 다이어그램은 네임스페이스에 Mendix on Kubernetes를 설치하기 위해 수행해야 하는 단계를 보여줍니다. 클러스터 관리자가 Mendix Portal이 클러스터에 대해 알 수 있도록 클러스터를 이미 설정했다고 가정합니다. 자세한 내용은 [Mendix on Kubernetes 클러스터 생성](/developerportal/deploy/private-cloud-cluster/#create-cluster)을 참조하십시오.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-technical-appendix/private-cloud-technical-appendix-02/mx4pc-installation.png" class="no-border" >}}

먼저 Mendix Portal에서 네임스페이스를 생성합니다.

그런 다음 Kubernetes 네임스페이스에 맞게 사용자 정의된 Mendix on Kubernetes 구성 요소를 설치하고 구성하는 데 사용되는 Configuration Tool인 `mxpc-cli`를 다운로드할 수 있습니다.

Configuration Tool은 Kubernetes 구성 객체(Deployment, Pod, Secret, Mendix Operator CR 등)를 준비하고 적용하기 위한 인터랙티브 터미널 기반 GUI를 제공합니다. Kubernetes API와 통신하고 인증하기 위해 기본 `KUBECONFIG`가 사용됩니다. `KUBECONFIG`에 여러 컨텍스트, 클러스터 또는 사용자가 있는 경우 `mxpc-cli` 도구를 실행하기 전에 올바른 대상 컨텍스트로 전환해야 합니다.

*Connected 모드*에서 `mxpc-cli` 도구는 Mendix Portal을 호출하여 Kubernetes에서 성공적으로 생성되거나 업데이트된 StoragePlan CR에 대한 레이블을 생성합니다. 적절한 역할을 가진 클러스터 구성원은 새 환경을 생성할 때 드롭다운에서 이 플랜을 선택할 수 있습니다. `mxpc-cli` 도구는 클러스터가 Standalone 모드로 설치된 경우 Mendix Portal과 상호 작용하지 않습니다.

{{% alert color="info" %}}
Configuration Tool은 Kubernetes API를 통해서만 구성 객체를 생성합니다. Mendix on Kubernetes 구성 요소(Mendix Operator 및 Mendix Gateway Agent)를 관리할 수 있습니다. AWS 계정, VM 또는 데이터베이스와 같은 인프라와 직접 통신하거나 관리하지 않습니다.
{{% /alert %}}

## 앱 배포

새 환경을 생성하려면 Kubernetes에서 `MendixApp` CR을 생성해야 합니다.

Connected 모드에서는 Mendix Portal에서 시작되며 `MendixApp` CR을 Mendix Gateway Agent로 보냅니다. Agent는 그런 다음 Kubernetes에서 `MendixApp` CR을 생성합니다.

Standalone 모드에서는 `mxpc-cli` 도구를 사용하여 Kubernetes 네임스페이스에 직접 MendixApp CR을 생성해야 합니다.

MendixApp CR을 찾으면 Operator는 아래 다이어그램에 표시된 대로 모든 `MendixApp` 의존성의 처리를 시작합니다.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-technical-appendix/private-cloud-technical-appendix-02/mx4pc-deployment.png" class="no-border" >}}

이러한 의존성 CR에는 `StorageInstance`, `Build` 및 `Endpoint` CR이 포함됩니다. 각 의존성 CR은 자체 Controller에 의해 처리됩니다.

모든 의존성이 처리되면(상태를 Ready로 보고) Operator는 `Runtime` CR을 처리합니다.

{{% alert color="info" %}}
Mendix Operator 버전 2.23.0부터 Operator는 더 이상 `Endpoint` CR을 기다리지 않습니다. 대신 `Endpoint`가 생성되기 전에 `Runtime` CR을 업데이트합니다.

또한 `Build` CR이 실패했거나 변경 사항을 처리 중인 경우 이전 빌드를 사용할 수 있는 한 Operator는 `Runtime` CR에서 일부 변경 사항을 처리합니다.
{{% /alert %}}

{{< figure src="/attachments/deployment/private-cloud/private-cloud-technical-appendix/private-cloud-technical-appendix-02/crd-controller-hierarchy.png" class="no-border" >}}

CR의 상태가 변경될 때마다 Operator는 이를 `MendixApp` CR로 전파합니다. Agent는 `MendixApp` CR의 상태가 변경될 때마다 이벤트를 수신합니다.

Connected 모드에서는 이 상태가 Mendix Portal로 다시 보고됩니다.
Mendix Portal에서 Mendix Gateway Agent가 보고한 최신 상태를 확인하려면 새로 고침 버튼을 누르십시오.

### 스토리지 프로비저닝

아래 다이어그램은 새 환경을 생성할 때 Mendix Operator가 `StorageInstance` Controller와 통신하는 방법에 대한 더 자세한 설명을 제공합니다.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-technical-appendix/private-cloud-technical-appendix-02/mx4pc-provision-storage.png" class="no-border" >}}

Operator는 데이터베이스나 파일 스토리지와 직접 통신하지 않습니다. 대신 `StorageInstance` Controller는 데이터베이스 또는 파일 서버에 새 스토리지 테넌트를 생성하기 위해 프로비저너 Pod("작업" Pod)를 실행합니다.
`StoragePlan` CR(이전에 Operator가 [`mxpc-cli` Configuration Tool로 구성](/developerportal/deploy/standard-operator/#configure-namespace)될 때 생성됨)에는 프로비저너 Pod에 대한 블루프린트가 포함되어 있습니다:

* 프로비저너 이미지 이름
* 관리 자격 증명이 포함된 Kubernetes Secret의 이름 - 예: PostgreSQL 관리자 사용자 이름/비밀번호 또는 AWS 자격 증명
* 명령줄 인수
* 메모리 및 CPU 요청 및 제한

Operator에게 모든 프로비저너 Pod는 동일하게 보이며 플러그인으로 작동합니다. `StorageInstance` Controller는 프로비저너 Pod를 생성하고 성공적으로 완료될 때까지 기다립니다. 프로비저너가 오류 없이 종료되고 Secret을 생성하면 `StorageInstance` Controller는 스토리지가 성공적으로 프로비저닝되어 사용할 준비가 되었다고 가정합니다.

각 스토리지 유형(PostgreSQL, JDBC, S3, Minio 등)에는 일반적으로 자체 프로비저너 이미지가 있습니다. 예를 들어 PostgreSQL 프로비저너 이미지는 PostgreSQL 서버에 연결하고 하나의 앱에서만 사용할 수 있는 새 데이터베이스와 역할을 생성합니다.

프로비저너 Pod가 환경에 대한 새 테넌트를 성공적으로 생성하면 해당 환경에서 사용할 수 있는 새 Kubernetes Secret에 해당 환경의 자격 증명을 저장합니다. 프로비저너 Pod에는 Secret을 읽거나 수정할 권한이 없으며 새 Secret을 생성할 수만 있습니다.

일부 프로비저너("기본" 프로비저너)는 스토리지 서버와 전혀 통신하지 않고 Kubernetes Secret만 생성합니다. 이 접근 방식은 예를 들어 *Dedicated JDBC* 데이터베이스 옵션과 *S3 (기존 버킷 및 계정)* 파일 스토리지 옵션에서 사용됩니다.

프로비저너 Pod가 오류로 실패하면 구성 문제 때문일 가능성이 높으며 `StorageInstance` Controller는 프로비저너 Pod를 다시 실행하지 않습니다. 실패한 Pod의 로그를 검토하고 근본 원인을 해결한 다음 프로비저너 Pod를 삭제해야 합니다. 그래야만 `StorageInstance` Controller가 스토리지를 다시 프로비저닝하려고 시도합니다.

### 앱 이미지 빌드

새 배포 패키지(MDA)가 Mendix Portal에서 환경으로 배포되면 Mendix Portal은 새 sourceURL(MDA를 다운로드할 수 있는 URL)을 생성하고 Mendix Gateway Agent로 보냅니다. Mendix Gateway Agent는 그런 다음 `MendixApp` CR의 `spec.sourceURL` 속성을 업데이트합니다.

Standalone 환경의 경우 `MendixApp` CR을 직접 생성하고 배포해야 하는 네임스페이스에 적용해야 합니다. [명령줄을 사용하여 Mendix on Kubernetes 클러스터에 Mendix 앱 배포](/developerportal/deploy/private-cloud-operator/)에서 추가 지침을 찾을 수 있습니다.

`MendixApp` CR의 처리는 아래 다이어그램에 나와 있습니다.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-technical-appendix/private-cloud-technical-appendix-02/mx4pc-build-image.png" class="no-border" >}}

`Build` Controller가 `Build` CR의 소스 URL(`spec.sourceURL`)이 변경된 것을 감지하면 빌드 Pod를 실행합니다.
빌드 Pod는 다음을 수행합니다:

* 지정된 `spec.sourceURL`에서 MDA 다운로드
* MDA를 OCI 이미지 레이어(앱 레이어)로 변환
* 앱 레이어를 `runtime-base` 이미지에 추가
    {{% alert color="info" %}}`runtime-base` 이미지는 특정 버전의 Mendix Runtime과 모든 의존성(JRE, 글꼴)을 포함하는 미리 빌드된 Mendix Runtime 이미지입니다.<br/>내부적으로 앱 레이어는 [crane append](https://github.com/google/go-containerregistry/blob/main/cmd/crane/doc/crane_append.md) 작업을 사용하여 추가됩니다.{{% /alert %}}
* 결과 이미지를 이미지 레지스트리에 푸시

빌드 Pod가 오류 없이 성공적으로 완료되면 컨테이너 레지스트리에 앱 이미지의 업데이트된 버전이 포함됩니다. `Build` Controller는 `MendixApp` CR에 앱의 새 버전이 있음을 알리고, 이 변경은 `Runtime` Controller가 환경을 재시작하도록 트리거합니다.

빌드 Pod가 오류로 실패하면 구성 문제 때문일 가능성이 높으며 `Build` Controller는 빌드 Pod를 다시 실행하지 않습니다. 실패한 Pod의 로그를 검토하고 근본 원인을 해결한 다음 빌드 Pod를 삭제해야 합니다. 그래야만 `Build` Controller가 스토리지를 다시 프로비저닝하려고 시도합니다.

### 엔드포인트 할당

Mendix on Kubernetes는 HTTP 리스너에서 Mendix Runtime으로 트래픽을 라우팅하는 세 가지 방법을 제공합니다:

* Kubernetes Ingress
* OpenShift Route
* Service Only

Ingress 및 Route 옵션을 사용하면 기존 Ingress Controller 또는 OpenShift Router를 사용하여 Kubernetes 서비스로 트래픽을 라우팅하기 시작할 수 있습니다. 두 옵션 모두 Kubernetes 서비스가 자동으로 생성됩니다. Kubernetes 서비스는 로드 밸런싱을 수행하여 Mendix 앱의 개별 레플리카(Pod)로 트래픽을 라우팅합니다.

*Service Only* 옵션을 선택하면 AWS CLB 또는 NLB와 같은 로드 밸런서에서 서비스로 트래픽을 직접 라우팅하거나 Ingress 리소스를 수동으로 생성하고 관리할 수 있습니다.

#### Kubernetes Ingress 사용

Ingress Controller를 사용하려면 먼저 설치해야 합니다:

1. 선택한 Ingress Controller를 설치하십시오.
    대부분의 Ingress Controller는 설치 시 Kubernetes 로드 밸런서 서비스도 생성합니다.
2. 다음 두 가지 방법 중 하나로 DNS를 설정하십시오:
    * 앱 도메인(또는 와일드카드 도메인)이 로드 밸런서의 외부 IP 주소로 확인되도록 하십시오. 예를 들어 Route 53 설정 방법을 설명하는 [Routing traffic to an ELB load balancer](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-elb-load-balancer.html) 문서를 참조하십시오.
    * DNS 서버를 자동으로 관리하기 위해 Kubernetes [External DNS](https://github.com/kubernetes-sigs/external-dns)를 설치하고 설정하십시오.
3. 테스트 Ingress 객체를 생성하고 테스트 앱을 배포하여 네트워크 설정이 작동하는지 확인하십시오.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-technical-appendix/private-cloud-technical-appendix-02/mx4pc-ingress-controller.png" class="no-border" >}}

#### OpenShift Route 사용

OpenShift Route를 사용하는 경우 OpenShift Router가 이미 구성되어 있으며 추가 구성이 필요하지 않습니다.

#### Endpoint Controller

Mendix Operator에서 새 환경이 생성되면 Operator는 서비스 객체(모든 엔드포인트 유형: Service Only, Ingress 또는 Route)와 필요한 경우 Ingress 또는 Route 객체를 함께 생성합니다.
`Endpoint` Controller가 필요한 모든 객체를 성공적으로 생성한 후 `MendixApp` Controller는 Mendix 앱이 항상 자신의 URL을 알 수 있도록 Runtime의 ApplicationRootUrl을 자동으로 설정합니다. [SAML](https://marketplace.mendix.com/link/component/1174)과 같은 일부 Marketplace 모듈은 이 정보가 올바르게 작동하는 데 필요합니다.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-technical-appendix/private-cloud-technical-appendix-02/mx4pc-applicationrooturl.png" class="no-border" >}}

Ingress 또는 Route를 통해 웹 브라우저에서 앱에 접근하는 경우 경로는 다음과 같습니다:

{{< figure src="/attachments/deployment/private-cloud/private-cloud-technical-appendix/private-cloud-technical-appendix-02/mx4pc-traffic-ingress.png" class="no-border" >}}

로드 밸런서 서비스를 통해 웹 브라우저에서 앱에 접근하는 경우 경로는 다음과 같습니다:

{{< figure src="/attachments/deployment/private-cloud/private-cloud-technical-appendix/private-cloud-technical-appendix-02/mx4pc-traffic-service.png" class="no-border" >}}

### 로깅 및 계량

로깅 및 계량을 위해 Mendix on Kubernetes는 개방형 산업 표준에 의존합니다:

* Prometheus 메트릭
* 컨테이너 로그에 대한 표준 출력

클러스터에 로깅 및 모니터링 솔루션이 아직 없는 경우 [Mendix on Kubernetes에서 환경 모니터링](/developerportal/deploy/private-cloud-monitor/)에서 Grafana를 설치하고 Mendix 앱에서 로그와 메트릭을 수집하는 방법에 대한 정보를 확인할 수 있습니다.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-technical-appendix/private-cloud-technical-appendix-02/mx4pc-logging-metering.png" class="no-border" >}}
