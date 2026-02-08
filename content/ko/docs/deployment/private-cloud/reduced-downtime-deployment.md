---
title: "배포 다운타임 감소"
url: /developerportal/deploy/private-cloud-reduced-downtime/
description: "Kubernetes 기반 Mendix 환경에서 앱을 배포할 때 다운타임을 줄이는 방법을 설명합니다."
weight: 35
---
## 소개

Kubernetes는 [롤링 업데이트를 수행](https://kubernetes.io/docs/tutorials/kubernetes-basics/update/update-intro/)하여 다운타임 없이 앱을 업데이트할 수 있습니다. 앱을 중지한 후 업데이트된 구성으로 시작하는 대신, Kubernetes는 Pod(레플리카)를 하나씩 교체할 수 있습니다.

Kubernetes 기반 Mendix Operator는 기본적으로 [recreate](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#recreate-deployment) 전략을 사용합니다. 즉, 현재 버전(구성)의 앱이 중지되고 새 버전이 시작됩니다.

버전 2.25.0부터 Operator는 [사전 요구 사항](#prerequisites-2.25.0)을 충족하는 모든 환경에 대해 자동으로 롤링 업데이트를 수행합니다:

* 구성 업데이트가 앱 모델(소스 코드, MDA 또는 컨테이너 이미지)을 수정하지 않는 경우.

{{% alert color="info" %}}
Operator 버전 2.20.0부터 2.23.1까지는 **PreferRolling** 전략을 수동으로 활성화하는 옵션이 있었습니다. 즉, Operator는 가능할 때마다 롤링 업데이트를 수행하려고 했습니다. Operator가 데이터베이스 스키마 업데이트가 필요하다고 감지하면 Recreate 전략으로 전환하여 전체 재시작을 수행했습니다. 새 버전의 앱에 모델(소스 코드) 변경 사항이 있으면 배포 시 스키마 업데이트가 필요했습니다. 이 경우 Kubernetes 기반 Mendix Operator는 자동으로 앱의 모든 레플리카를 중지하여 다운타임이 발생했습니다.
{{% /alert %}}

또한 Operator 버전 2.25.0은 1개 이상의 레플리카를 가진 환경에 `PodDisruptionBudget`을 자동으로 할당합니다:

* 2개 이상의 레플리카가 있는 환경은 클러스터 노드를 축소하거나 OS 업그레이드를 준비할 때 1개 이상의 레플리카가 Kubernetes에 의해 중지되지 않도록 `PodDisruptionBudget`으로 구성됩니다.
* 1개의 레플리카가 있는 환경은 클러스터 노드를 축소하거나 OS 업그레이드를 준비할 때 최소 1개의 레플리카를 사용할 수 있도록 `PodDisruptionBudget`으로 구성됩니다. 이로 인해 앱 다운타임을 방지하기 위해 일부 Kubernetes 업데이트가 연기될 수 있습니다.

{{% alert color="info" %}}
이전 버전의 Operator는 `PodDisruptionBudgets`를 관리하지 않았습니다. 대신 수동으로 생성된 `PodDisruptionBudget`이 Mendix 앱에 적용되었습니다.

앱에 대해 수동으로 `PodDisruptionBudget`을 생성한 경우 이를 삭제하고 대신 [MendixApp CR에서](#pod-disruption-budget-in-standalone) `PodDisruptionBudget` 매개변수를 지정하십시오.
{{% /alert %}}

## 사전 요구 사항

## Operator 버전 2.25.0 이상의 사전 요구 사항{#prerequisites-2.25.0}

Operator는 다음 조건을 충족하는 모든 환경에 대해 자동으로 롤링 업데이트를 수행합니다:

* 구성 업데이트가 앱 모델(소스 코드, MDA 또는 컨테이너 이미지)을 수정하지 않는 경우.

{{% alert color="warning" %}}
Mendix Operator 버전 2.20.0부터 2.23.1까지는 롤링 전략으로 데이터베이스 스키마 업그레이드도 수행하는 실험적 기능이 있었습니다. 이 기능은 최신 Mendix Runtime 보안 기능과 잘 작동하지 않아 Operator 2.24.0에서 제거되었습니다.
{{% /alert %}}

## Operator 버전 2.24의 사전 요구 사항{#prerequisites-2.24.0}

Operator는 다음 조건을 충족하는 모든 환경에 대해 자동으로 롤링 업데이트를 수행합니다:

* 환경에 2개 이상의 레플리카가 있는 경우.
* 구성 업데이트가 앱 모델(소스 코드, MDA 또는 컨테이너 이미지)을 수정하지 않는 경우.

{{% alert color="warning" %}}
Mendix Operator 버전 2.20.0부터 2.23.1까지는 롤링 전략으로 데이터베이스 스키마 업그레이드도 수행하는 실험적 기능이 있었습니다. 이 기능은 최신 Mendix Runtime 보안 기능과 잘 작동하지 않아 Operator 2.24.0에서 제거되었습니다.
{{% /alert %}}

## Operator가 배포 전략을 선택하는 방법

다음 조건 중 하나라도 참이면 Operator는 항상 **Recreate** 전략을 사용하여 앱의 모든 레플리카를 완전히 중지합니다:

* 다른(이전) 버전의 앱 이미지를 실행하는 앱 Pod가 있는 경우: 앱 MDA 또는 기본 OS 이미지에 변경 사항이 있습니다.
* 앱 환경에 실행 중인 레플리카가 없는 경우.

그렇지 않으면 Operator는 자동으로 **Rolling** 업데이트를 수행합니다.

**Rolling** 전략은 동시에 여러 버전의 앱을 실행할 수 있으므로 브라우저의 요청은 일치하는 앱 버전(즉, 동일한 Microflow 또는 Nanoflow 매개변수를 가진 앱)으로 라우팅되어야 합니다. Operator는 Kubernetes 서비스 레이블을 사용하여 원자적 전환을 수행하고 모든 클라이언트를 업데이트된 버전으로 즉시 전환합니다. 이것은 업데이트된 레플리카 수가 특정 임계값에 도달하면 자동으로 수행됩니다. 기본적으로 임계값은 모든 레플리카의 50%입니다. 이 값은 [switchoverThreshold](#deployment-strategy-in-standalone) 매개변수에서 지정됩니다.

### 사용 사례

변경 사항이 다운타임 없이 수행될 수 있는지 여부는 변경 유형에 따라 다릅니다. 예를 들어, 다음 변경 사항은 다운타임 없이 수행할 수 있습니다:

* 앱 상수, MxAdmin 비밀번호 또는 디버거 설정 변경
* 환경 변수, Runtime 또는 Java 옵션 변경
* Runtime 메트릭 설정 변경
* Mendix Operator 버전 업그레이드

다음 변경 사항은 전체 재시작과 다운타임을 유발합니다:

* 수정된 MDA 파일을 유발하는 모든 변경 사항
* 다른 기본 이미지 버전으로 동일한 MDA 버전을 다시 빌드하는 경우 (예: 다른 Java 버전으로 전환 또는 최신 CVE 패치 설치)

## 독립형 환경에서 배포 전략 매개변수 구성 {#deployment-strategy-in-standalone}

배포 다운타임을 줄이려면 다음 예시와 같이 `MendixApp` CR에 `deploymentStrategy` 섹션을 추가하십시오:

```yaml
apiVersion: privatecloud.mendix.com/v1alpha1
kind: MendixApp
metadata:
# ...
# omitted lines for brevity
# ...
spec:
  # ...
  # omitted lines for brevity
  # ...
  # Add or update this section:
  deploymentStrategy:
    switchoverThreshold: 50%
    rollingUpdate:
      maxSurge: 0
      maxUnavailable: 50%
```

`MendixApp` CR에 대한 자세한 내용은 [CR 편집](/developerportal/deploy/private-cloud-operator/#edit-cr)을 참조하십시오.

다음 옵션을 지정할 수 있습니다:

* **switchoverThreshold** – 모든 클라이언트가 업데이트된 버전으로 전환해야 하는 업데이트된 준비 레플리카의 임계값을 지정합니다. 임계값은 백분율 또는 절대값일 수 있습니다.
    예를 들어, 이를 **50%**로 설정하면 모든 레플리카의 50%가 업데이트된 버전을 실행하면 모든 클라이언트가 업데이트된 앱 버전으로 전환됩니다. 달리 지정하지 않으면 기본값으로 50%가 사용됩니다. 이 옵션은 전략 **type**이 **PreferRolling**으로 설정된 경우에만 사용됩니다.
* **rollingUpdate** - Operator가 재시작 없이 업데이트를 수행할 수 있는 경우 롤링 업데이트의 매개변수를 지정합니다. 이러한 매개변수는 Kubernetes [rollingUpdate](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-update-deployment) 매개변수로 사용됩니다:
    * **maxSurge** – 배포 프로세스 중에 추가할 수 있는 추가 레플리카 수의 절대값 또는 백분율 값을 지정합니다.
        * 1개의 레플리카가 있는 앱의 경우 기본값은 **1**이며, 현재 레플리카 외에 업데이트된(교체) 레플리카를 실행하고 가능한 경우 다운타임을 방지합니다.
        * 2개 이상의 레플리카가 있는 앱의 경우 기본값은 **0**이므로 롤아웃 프로세스 중에 추가 레플리카가 추가되지 않으며, 대신 기존 레플리카가 중지되어 추가 클러스터 리소스 사용을 방지합니다.
    * **maxUnavailable** – 롤아웃 프로세스 중에 업데이트된 버전으로 교체하기 위해 중지할 수 있는 레플리카 수의 절대값 또는 백분율 값을 지정합니다. 이 값을 늘리면 롤아웃 프로세스가 빨라지지만 성능 문제가 발생할 수 있습니다.
        * 1개의 레플리카가 있는 앱의 경우 기본값은 **0**이며 최소한 하나의 레플리카가 실행되도록 보장하고 다운타임을 방지합니다.
        * 2개 이상의 레플리카가 있는 앱의 경우 기본값은 **1**이므로 업데이트 프로세스 중에 최대 하나의 레플리카가 중지됩니다.

## 독립형 환경에서 Pod Disruption Budget 매개변수 구성 {#pod-disruption-budget-in-standalone}

Kubernetes는 노드를 중지해야 하는 경우(축소하여 앱을 더 적은 수의 노드에서 실행하거나 노드 업데이트(예: 호스트 OS에 CVE 패치 설치)를 수행하기 위해) 앱의 Pod를 중지할 수 있습니다.
Mendix Operator 버전 2.24.0부터 Kubernetes가 앱의 Pod를 제한된 수만 중지하고 필요한 경우 교체 Pod가 사용 가능해질 때까지 기다리도록 앱의 [PodDisruptionBudget](https://kubernetes.io/docs/tasks/run-application/configure-pdb/) 매개변수를 지정할 수 있습니다.

PodDisruptionBudget의 매개변수를 수동으로 구성하려면 다음 예시와 같이 `MendixApp` CR에 `podDisruptionBudget` 섹션을 추가하십시오:

```yaml
apiVersion: privatecloud.mendix.com/v1alpha1
kind: MendixApp
metadata:
# ...
# omitted lines for brevity
# ...
spec:
  # ...
  # omitted lines for brevity
  # ...
  # Add or update this section:
  podDisruptionBudget:
    # Kubernetes doesn't allow specifying both maxUnavailable and minAvailable at the same time:
    # https://kubernetes.io/docs/tasks/run-application/configure-pdb/#specifying-a-poddisruptionbudget
    maxUnavailable: 1 # Example: do not disrupt more than 1 pod at the same time
    # minAvailable: 50% # Example: make sure that at least 50% of pods are available
```

다음 옵션을 지정할 수 있습니다:

* **maxUnavailable** – Kubernetes가 노드에서 제거해야 하는 경우 중지할 수 있는 레플리카 수의 절대값 또는 백분율 값을 지정합니다.
    * 2개 이상의 레플리카가 있는 앱의 경우 기본값은 **1**이며 최대 1개의 레플리카를 중지할 수 있고 교체 레플리카가 사용 가능해질 때까지 Kubernetes가 기다려야 함을 의미합니다. 이 값을 늘리면 롤아웃 프로세스가 빨라지지만 성능 문제가 발생할 수 있습니다.
* **minAvailable** – Kubernetes가 노드에서 제거해야 하는 경우 사용 가능한 상태로 유지해야 하는 레플리카 수의 절대값 또는 백분율 값을 지정합니다. 이 값을 늘리면 롤아웃 프로세스가 느려지지만 더 적은 수의 레플리카가 중단되도록 보장합니다.
    * 1개의 레플리카가 있는 앱의 경우 기본값은 **1**이며 최소한 하나의 레플리카가 항상 사용 가능하도록 보장하고 다운타임을 방지합니다.

{{% alert color="warning" %}}
Kubernetes는 `maxUnavailable`과 `minAvailable` 모두에 대한 값을 지정하는 것을 허용하지 않으며, 둘 다 값을 지정하면 [오류가 발생합니다](https://kubernetes.io/docs/tasks/run-application/configure-pdb/#specifying-a-poddisruptionbudget).
{{% /alert %}}

## Operator 2.25.0 이상에서 다운타임 허용 {#allow-downtime-2.25}

기본적으로 Mendix Operator 2.25.0 이상 버전은 단일 레플리카 앱을 포함하여 가능할 때마다 다운타임을 방지하려고 합니다.

일부 상황(예: Kubernetes 클러스터 오토스케일링 또는 노드 업그레이드)에서는 단일 레플리카 앱이 중단됩니다. 기본 Pod Disruption Budget은 개발자가 앱을 수동으로 다시 시작하거나 2개 이상의 레플리카로 확장할 때까지 이를 방지합니다.

하나의 레플리카로 앱을 업데이트할 때 다운타임을 방지하려면 Operator가 일시적으로 2개 이상의 앱 레플리카를 실행해야 합니다. 클러스터에 추가 레플리카를 시작할 충분한 용량이 없으면 앱 업데이트가 차단됩니다(다운타임 없이 업데이트를 처리하는 유일한 방법이므로).

앱 또는 클러스터 변경이 이 정책에 의해 차단된 경우 앱을 2개(또는 그 이상) 레플리카로 확장하거나 다운타임과 함께 변경이 처리되도록 수동으로 허용해야 합니다. 가장 쉬운 방법은 앱을 수동으로 중지한 다음 다시 시작하는 것입니다.

또는 Cloud Portal에서 사용자 정의 **Reduced Downtime Options**을 설정할 수 있습니다:

* **Deployment Strategy Options**에서 다음 값을 설정하십시오:
    * **Max Surge** - **0%**로 설정
    * **Max Unavailable** - **100%**로 설정
* **Pod disruption budget options**에서 다음 값을 설정하십시오:
    * **Min Available** - **0%**로 설정
    * **Max Unavailable** - **100%**로 설정

{{< figure src="/attachments/deployment/private-cloud/allow-single-replica-downtime.png" alt="Allowing downtime in single-replica apps" class="no-border" >}}

독립형 환경의 경우 MendixApp CR YAML에서 다음을 지정하십시오:

```yaml
apiVersion: privatecloud.mendix.com/v1alpha1
kind: MendixApp
metadata:
# ...
# omitted lines for brevity
# ...
spec:
  # ...
  # omitted lines for brevity
  # ...
  replicas: 1 # This is only necessary for apps with 1 replica
  # Add or update this section:
  deploymentStrategy:
    rollingUpdate:
      maxSurge: 0
      maxUnavailable: 1
  podDisruptionBudget:
    maxUnavailable: 1
```

## 제한 사항

* 이 기능은 Mendix Operator 버전 2.24(이상)에서만 지원됩니다. Mendix Operator 버전 2.20.0부터 2.23.1까지는 이 기능의 실험적 구현이 있었습니다. 2.24.0 이상으로 업그레이드하는 것을 강력히 권장합니다.
* 앱 MDA 또는 기본 OS 이미지에 변경 사항이 있으면 새 버전의 앱을 배포할 때 다운타임이 발생합니다.
* 스케줄된 이벤트가 [시작 시 올바르게 동기화](/releasenotes/studio-pro/10.20/#improvements)되도록 하려면 Mendix 10.20 이상을 사용하는 것이 좋습니다.
