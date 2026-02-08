---
title: "Kubernetes 기반 Mendix"
url: /developerportal/deploy/private-cloud/
description: "Kubernetes 기반 Mendix에 배포하는 방법을 설명합니다."
weight: 48
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 소개

Kubernetes 기반 Mendix를 사용하면 Kubernetes 프라이빗 클러스터에서 Mendix 앱을 배포하고 관리할 수 있습니다. Mendix Docker 빌드팩을 사용할 때 수동으로 수행해야 하는 데이터베이스 프로비저닝과 같은 작업을 자동화합니다. 또한 서드파티 도구를 통한 모니터링 및 로깅 옵션도 제공합니다.

조직에서 멀티 클라우드 전략의 일환으로 프라이빗 클라우드를 사용해야 하는 요구 사항이 있을 수 있습니다. 이는 법적 요구 사항 또는 데이터에 대한 완전한 제어 욕구 때문일 수 있습니다. Kubernetes 기반 Mendix를 사용하면 Docker와 Kubernetes의 친숙한 구성 요소를 유지하면서 이를 수행할 수 있습니다.

Kubernetes 기반 Mendix를 *연결(connected)* 옵션으로 사용하여 Mendix Portal에서 원클릭 배포의 간편함을 유지하거나, *독립형(standalone)* Mendix Operator를 활용하여 자체 DevOps 프로세스를 통해 Mendix 앱을 배포할 수 있습니다. 독립형 옵션은 인터넷에서 격리된 *에어갭(air-gap)* 환경의 프라이빗 클라우드에 특히 유용합니다. 자세한 내용은 아래 [연결 및 독립형 클러스터](#connected-standalone)를 참조하십시오.

Kubernetes 기반 Mendix에서 지원하는 플랫폼 목록은 [지원 프로바이더](/developerportal/deploy/private-cloud-supported-environments/)를 참조하십시오.

이를 달성하기 위해 아래에 나열된 두 가지 단계가 필요합니다.

{{% alert color="info" %}}
Kubernetes 기반 Mendix는 Mendix의 프리미엄 서비스이며, 프로덕션 환경의 애플리케이션에 사용하려면 추가 라이선스 및 비용이 발생합니다. 자세한 내용은 아래 [Kubernetes 기반 Mendix 라이선스](#licensing)를 참조하십시오.
{{% /alert %}}

### 클러스터 및 네임스페이스 등록

첫 번째 단계는 Mendix Portal에 클러스터를 등록하는 것입니다. 자세한 내용은 [Kubernetes 기반 Mendix 클러스터 생성](/developerportal/deploy/private-cloud-cluster/)을 참조하십시오.

이 작업은 클러스터가 생성되는 플랫폼에 대한 관리 권한을 가진 시스템 관리자가 수행해야 합니다.

### 앱 배포

앱을 배포하려면 두 가지 옵션이 있습니다:

1. Mendix Portal 내에서 앱을 배포할 수 있습니다. 자세한 내용은 [Mendix Portal에서 Kubernetes 기반 Mendix 클러스터에 Mendix 앱 배포](/developerportal/deploy/private-cloud-deploy/)를 참조하십시오.
2. CI/CD 파이프라인을 생성하고 클러스터 내에서 앱을 배포할 수 있습니다. 자세한 내용은 [커맨드 라인을 사용하여 Kubernetes 기반 Mendix 클러스터에 Mendix 앱 배포](/developerportal/deploy/private-cloud-operator/)를 참조하십시오.

Mendix Portal을 통해 배포할 때, 등록된 클러스터에 적절한 권한이 부여된 모든 Mendix 사용자가 이를 수행할 수 있습니다.

## 연결 및 독립형 클러스터{#connected-standalone}

Red Hat OpenShift 및 Kubernetes에 앱 배포를 관리하려면 먼저 Mendix Portal에 클러스터를 등록해야 합니다. 이를 통해 클러스터에 **Mendix Operator**를 배포하는 데 필요한 정보가 제공됩니다.
*연결(connected)* 클러스터를 선택한 경우 **Mendix Gateway Agent**도 함께 배포됩니다.
Mendix Operator가 클러스터에 배포되면 이를 사용하여 앱에서 사용할 리소스를 구성할 수 있습니다.

그런 다음 *연결* 클러스터 또는 *독립형* 클러스터 중 어떤 것을 생성했는지에 따라 두 가지 옵션이 있습니다.

### 연결 아키텍처

연결 클러스터를 등록한 경우, Mendix Gateway Agent는 **Interactor**를 통해 Mendix 앱의 **환경** 페이지에 대한 링크를 생성합니다. 이것은 클러스터에서 실행되는 Mendix Gateway Agent에서 시작되는 안전한 양방향 통신 채널입니다.

이 채널을 사용하여 올바른 권한이 부여된 모든 Mendix 사용자는 Mendix Operator에 지시를 전달하고 클러스터에 대한 상태 정보를 받을 수 있습니다. 여기에는 앱을 배포하거나 환경을 구성하는 데 필요한 지시 사항이 포함됩니다.

{{< figure src="/attachments/deployment/private-cloud/mx4pc-architecture.png" class="no-border" >}}

### 독립형 아키텍처

독립형 클러스터를 등록한 경우, Mendix Operator와의 모든 통신은 Kubernetes API를 통해 직접 수행되는 지시를 통해 이루어집니다. 이러한 지시는 수동으로 수행할 수 있지만 일반적으로 CI/CD 파이프라인에서 수행됩니다. 이 경우 배포 프로세스에서 배포 패키지를 검색할 수 있도록 Mendix 앱 배포 패키지의 로컬 소스 제어도 필요합니다.

{{< figure src="/attachments/deployment/private-cloud/mx4pc-standalone-architecture.png" class="no-border" >}}

## 제품 기능 비교

아래 표는 Mendix Cloud, Kubernetes 기반 Mendix 연결, Kubernetes 기반 Mendix 독립형에 배포된 앱의 기능 차이를 보여줍니다.

| 기능 | Mendix Cloud | Kubernetes 기반 Mendix 연결 | Kubernetes 기반 Mendix 독립형 |
| --- | --- | --- | --- |
| 환경 프로비저닝 | 완전 자동화 | 고객이 제공하는 데이터베이스 및 블롭 스토리지로 프로비저닝 | 고객이 제공하는 데이터베이스 및 블롭 스토리지로 프로비저닝|
| 환경 구성<br/>*예: 상수 및 스케줄된 이벤트* | Mendix Portal | Mendix Portal | Mendix Operator를 통한 Custom Resources |
| Mendix 앱/배포 패키지 배포 | Mendix Portal 및 Studio Pro | Mendix Portal 및 Studio Pro | Mendix Operator를 통한 Custom Resources<br/>*일반적으로 CI/CD 파이프라인과 결합* |
| 백업 및 복원 | Mendix Portal | 사용된 데이터베이스 서버 및 파일 스토리지에서 제공하는 서비스¹ | 사용된 데이터베이스 서버 및 파일 스토리지에서 제공하는 서비스¹ |
| 모니터링 | Mendix Portal | Prometheus 호환 모니터링 도구로 앱 메트릭 전송 | Prometheus 호환 모니터링 도구로 앱 메트릭 전송 |
| 앱 로그 | Mendix Portal | 앱 로그를 `stdout`에 출력 | 앱 로그를 `stdout`에 출력 |
| 원격 디버깅 | Mendix Portal + Studio Pro | Mendix Portal + Studio Pro | 지원되지 않음 |

{{% alert color="info" %}}
¹ Kubernetes 기반 Mendix에는 백업 또는 복원 기능이 자동으로 설치되지 않습니다. 데이터베이스, 파일 스토리지 및 클라우드 플랫폼 선택에 따라 자체 솔루션을 선택하고 배포해야 합니다.
{{% /alert %}}

## 메모리 할당

각 Mendix 앱 또는 환경 Pod에는 다음과 같은 컨테이너가 있습니다:

* Mx Runtime 및 Mendix 앱 자체
* m2ee 사이드카 컨테이너
* 메트릭 사이드카 컨테이너 (호환 모드 메트릭이 활성화된 경우에만 사용)

사이드카 컨테이너를 포함한 모든 컨테이너에는 특정 리소스 요청 및 제한이 있으므로 각 Mendix 앱 Pod는 일정량의 CPU 코어와 메모리를 요청합니다.

Mendix 컨테이너는 포털에서 앱별로 지정됩니다. [Mendix App CR](/developerportal/deploy/private-cloud-operator/#edit-cr)에서 리소스 할당을 업데이트할 수 있습니다.
m2ee-sidecar 컨테이너의 리소스는 [OperatorConfiguration CR](/developerportal/deploy/private-cloud-cluster/#resource-definition-ocm)에서 지정됩니다.

{{% alert color="info" %}}
앱이 독립형 모드에서 실행 중이고 MendixApp CR에 MendixApp CR 사양 리소스에 할당된 리소스가 없는 경우, Mendix Operator는 *OperatorConfiguration* CR의 *spec.runtimeResources* 값을 대신 사용합니다.
{{% /alert %}}

고객이 [Vertical Pod 오토스케일러](/developerportal/deploy/private-cloud-cluster/#vertical-pod-autoscaling)를 사용하기로 결정한 경우, 오토스케일러가 모든 Pod 또는 컨테이너 리소스를 재정의할 수 있습니다.

사용자가 CPU 및 메모리 제한을 설정하면 JVM(JRE 8u191+)이 컨테이너 요청 및 제한을 자동으로 감지하고 컨테이너 세부 정보에 따라 Java 메모리 제한을 자동으로 설정합니다.
그러나 기본적으로 JVM은 힙 메모리를 컨테이너 메모리 제한의 25%로 제한합니다. Mx4PC는 컨테이너 제한만 설정하고 JVM 구성까지는 진행하지 않습니다.
이 비율은 Kubernetes 기반 Mendix Portal의 [Runtime 탭](/developerportal/deploy/private-cloud-deploy/#runtime-tab)에서 Custom JVM Options에 사용자 정의 값을 제공하여 조정할 수 있습니다. 예: *-XX:MaxRAMPercentage=75.0*.

## Kubernetes 기반 Mendix 라이선스{#licensing}

### Operator 라이선스

{{% alert color="info" %}}
Mendix Operator 버전 2.23.0 이전에는 Operator 라이선스가 필요했습니다. Operator 버전 2.23.0부터는 Operator 라이선스가 더 이상 필요하지 않습니다.

기술 지원을 받으려면 유효한 구독 및 지원 계약이 여전히 필요합니다.
{{% /alert %}}

Kubernetes 기반 Mendix는 Mendix의 프리미엄 서비스이며, 애플리케이션에 사용하려면 추가 라이선스가 필요합니다. 이 **Operator 라이선스**를 사용하면 Mendix Operator 및 선택적으로 Mendix Gateway Agent를 통해 클러스터에서 Mendix 앱을 관리할 수 있습니다.

관리하려는 각 네임스페이스에 대해 하나의 라이선스가 필요합니다.

다음 단계를 수행하여 Operator 라이선스를 요청할 수 있습니다:

1. [Request New App Node](https://newnode.mendix.com/) 앱을 여십시오.

2. 회사 이름 및 앱 이름과 같은 기본 정보를 입력하십시오.

3. **Hosting Type**에서 *Mendix on Kubernetes*를 선택하고 **Next**를 클릭하십시오.

4. 필요한 정보를 입력하십시오:

    * 회사 이름(고객을 대신하여 요청하는 경우 고객의 회사 이름을 입력하십시오).
    * License Type: Operator
    * Kubernetes 기반 Mendix 아키텍처 유형. 자세한 내용은 위의 [연결 및 독립형 클러스터](#connected-standalone)를 참조하십시오 — 선택적으로 **comment** 필드에 추가 정보를 남기십시오
    * Operator 라이선스를 요청하려는 네임스페이스(또는 네임스페이스들)

5. 요청을 저장하십시오.

Mendix Support로부터 Operator 라이선스(또는 라이선스들)와 구성 방법에 대한 지침을 받게 됩니다.

평가 목적으로 Mendix Operator를 체험 모드에서 실행할 수 있습니다. Operator가 체험 모드에서 실행 중인 경우 환경이 생성된 후 90일(Mendix Operator 버전 1.12.0 이전의 경우 30일)이 지나면 환경 관리를 중단합니다. 이 경우 앱을 중지하거나 시작하거나 이 환경에 앱을 배포할 수 없습니다. 취할 수 있는 유일한 조치는 환경을 삭제하는 것입니다.

### Runtime 라이선스

환경별 Runtime 라이선스가 필요합니다. 또한 Operator 라이선스는 Mendix Runtime 라이선스와 독립적입니다. Mendix Runtime 라이선스는 Mendix 앱 자체에서 [체험 제한](/developerportal/deploy/licensing-apps-outside-mxcloud/)을 제거합니다. Kubernetes 기반 Mendix를 통해 애플리케이션을 관리하고 실행하려면 두 가지 유형의 라이선스가 모두 필요합니다.

다음 단계를 수행하여 Runtime 라이선스를 요청할 수 있습니다:

1. [Request New App Node](https://newnode.mendix.com/) 앱을 여십시오.

2. 회사 이름 및 앱 이름과 같은 기본 정보를 입력하십시오.

3. **Hosting Type**에서 *Mendix on Kubernetes*를 선택하고 **Next**를 클릭하십시오.

4. 필요한 정보를 제공하십시오:

    * 회사 이름(고객을 대신하여 요청하는 경우 고객의 회사 이름을 입력하십시오).
    * License Type: Runtime
    * Kubernetes 기반 Mendix 아키텍처 유형. 자세한 내용은 위의 [연결 및 독립형 클러스터](#connected-standalone)를 참조하십시오 — 선택적으로 **comment** 필드에 추가 정보를 남기십시오
    * "Connected"인 경우 Runtime 라이선스(또는 라이선스들)를 요청하는 네임스페이스(또는 네임스페이스들)를 제공하십시오

5. 요청을 저장하십시오.

Mendix Support로부터 Runtime 라이선스(또는 라이선스들)를 받게 됩니다. 구성 방법에 대한 지침은 아래 [온라인 Kubernetes 기반 Mendix 앱](#activate-online) 및 [오프라인 Kubernetes 기반 Mendix 앱](#activate-offline)을 참조하십시오.

### Operator 및 Runtime 라이선스 동시 요청

아래 단계에 따라 동일한 요청 내에서 Operator 및 Runtime 라이선스를 모두 요청할 수도 있습니다:

1. [Request New App Node](https://newnode.mendix.com/) 앱을 여십시오.

2. 회사 이름 및 앱 이름과 같은 기본 정보를 입력하십시오.

3. **Hosting Type**에서 *Mendix on Kubernetes*를 선택하고 **Next**를 클릭하십시오

4. 필요한 정보를 입력하십시오:

    * 회사 이름(고객을 대신하여 요청하는 경우 고객의 회사 이름을 입력하십시오).
    * License Type: Operator and Runtime
    * Kubernetes 기반 Mendix 아키텍처 유형. 자세한 내용은 위의 [연결 및 독립형 클러스터](#connected-standalone)를 참조하십시오 — 선택적으로 **comment** 필드에 추가 정보를 남기십시오
    * Operator 라이선스를 요청하려는 네임스페이스(또는 네임스페이스들)

### 라이선스 활성화

#### 온라인 Kubernetes 기반 Mendix 앱{#activate-online}

앱이 인터넷에 연결하여 Mendix 라이선스 서버에 접근할 수 있는 경우, Mendix Support로부터 **Subscription Secret**을 받게 됩니다.

앱이 Mendix Portal에 **연결**되어 있는 경우, [Mendix Portal에서](/developerportal/deploy/private-cloud-deploy/#license-mendix) 구독 시크릿을 입력할 수 있습니다

#### 독립형 및 오프라인 Kubernetes 기반 Mendix 앱{#activate-offline}

앱이 **독립형**이거나 Mendix 라이선스 서버에 접근할 수 없는 경우, **LicenseId** 및 **LicenseKey**를 받게 됩니다. 클러스터에서 [CR을 편집](/developerportal/deploy/private-cloud-operator/#edit-cr)하여 이를 적용해야 합니다.

#### Private Cloud 라이선스 관리자

Mendix Operator 버전 2.11.0 이상에서는 Private Cloud 라이선스 관리자를 사용하여 Operator 및 Runtime 라이선스로 구성된 라이선스 번들을 가져올 수 있습니다. Private Cloud 라이선스 관리자는 라이선스 번들에서 자동으로 라이선스를 검색하므로 환경별로 라이선스를 적용할 필요가 없습니다. 자세한 내용은 [Private Cloud License Manager](/developerportal/deploy/private-cloud/private-cloud-license-manager/)를 참조하십시오.
