---
title: "기술 부록: 1. Operator 소개"
linktitle: "1. Operator 소개"
url: /developerportal/deploy/private-cloud-technical-appendix-01/
description: "Mendix on Kubernetes에서 지원하는 공급자를 설명합니다."
weight: 10
---

## 소개

Mendix on Kubernetes에 대한 앱 배포는 Mendix Operator에 의해 제어됩니다. 이 문서에서는 Mendix Operator의 작동 방식과 Kubernetes와의 상호 작용 방법에 대한 정보를 제공합니다.

## Operator란?

### 수동 배포의 문제점

Kubernetes에 애플리케이션을 배포하는 가장 빠른 방법은 `kubectl create pod` 또는 `kubectl apply`와 같은 명령으로 리소스를 수동으로 생성하는 것입니다. 이 방법은 모든 컨테이너 이미지에서 작동하며 시작하기 쉽습니다. 하지만 기본이 아닌 구성 옵션을 사용하려면 애플리케이션과 해당 컨테이너 이미지가 내부적으로 어떻게 작동하는지에 대한 지식이 필요합니다. 예를 들어, 일부 애플리케이션은 환경 변수를 사용하고 다른 애플리케이션은 구성 파일이 필요합니다.

### Helm을 사용한 배포

[Helm](https://helm.sh) 및 [Kustomize](https://kustomize.io/)와 같은 도구를 사용하면 템플릿 라이브러리를 사용하고 애플리케이션 배포를 간소화할 수 있습니다. Pod나 Service와 같은 개별 리소스를 관리하는 대신 Helm을 사용하면 Postgres 데이터베이스 서버와 같은 전체 애플리케이션을 설치하고 Postgres 복제 설정과 같은 애플리케이션별 옵션을 구성할 수 있습니다.

Helm은 자주 수정하거나 재구성할 필요가 없는 애플리케이션에 적합할 수 있지만, Helm은 배포 후 애플리케이션을 모니터링하지 않습니다. 또한 Helm은 새 데이터베이스 사용자를 요청하거나 애플리케이션이 Ingress 도메인 이름을 알 수 있도록 하는 것과 같은 고급 처리를 수행할 수 없습니다.

### Kubernetes Operator{#operators}

Kubernetes는 애플리케이션 관리를 자동화하는 표준 방법인 [Operator 패턴](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/)을 제공합니다. Operator는 표준 Kubernetes [REST API](https://kubernetes.io/docs/reference/using-api/)와 자체 Kubernetes 서비스 계정을 사용하여 애플리케이션의 Kubernetes 리소스를 모니터링하고 관리합니다.

Kubernetes는 [Custom Resource](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/)(CR)라고 불리는 API에 대한 사용자 정의 확장을 지원합니다. CR은 표준 Kubernetes 리소스(예: Pod, Secret, Service)처럼 보이며 사용자 정의 객체 유형을 나타냅니다. CR은 Kubernetes 클러스터에 전역적으로 설치되는 [Custom Resource Definition](https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/)(CRD)을 통해 정의됩니다. CR은 텍스트 편집기를 사용하여 업데이트하고 Kubernetes API를 통해 관리할 수 있는 일반 텍스트 파일입니다.

Kubernetes Operator에는 제어 루프를 구현하는 하나 이상의 [Controller](https://kubernetes.io/docs/concepts/architecture/controller/)가 포함되어 있습니다. Controller는 CR을 지속적으로 모니터링하고 리소스를 원하는 상태(CR의 `spec` 필드에 표현됨)로 가져오는 데 필요한 작업을 수행합니다. 모든 상태 변경 및 업데이트는 CR의 `status` 필드를 통해 보고됩니다. Operator는 `kubectl`을 사용하여 수동으로, 또는 Kubernetes API와 통신할 수 있는 다른 Operator나 구성 요소에 의해 자동으로 CR을 통해 제어할 수 있습니다.

Red Hat의 OpenShift에 소프트웨어를 설치하는 주요 방법은 [operatorhub.io](https://operatorhub.io/)에서 호스팅되는 Operator를 사용합니다. 잘 알려진 Operator에는 다음이 포함됩니다:

* [PGO: The Postgres Operator from Crunchy Data](https://access.crunchydata.com/documentation/postgres-operator/latest/) - 클라우드 공급자에 의존하지 않고 완전 관리형 데이터베이스를 사용할 수 있게 해주는 Operator
* [MinIO](https://docs.min.io/minio/k8s/) - MinIO 클러스터를 관리하고 자체 호스팅 S3 호환 Blob Storage 서버를 관리할 수 있는 Operator
* [cert-manager](https://cert-manager.io/) - ACME 서버(Let's Encrypt) 또는 기타 인증서 발급자로부터 TLS 인증서를 요청하고 설정 후 잊어버리는 방식으로 작동하는 Operator
* [Strimzi](https://strimzi.io/) - Kafka 클러스터를 생성하고 관리하는 Operator

Kubernetes Operator에 대한 자세한 내용은 다음 링크를 참조하십시오:

* [Red Hat Operator 문서](https://cloud.redhat.com/learn/topics/operators)
* [Container Solutions 블로그 게시물](https://blog.container-solutions.com/kubernetes-operators-explained)
* [Ivan Velichko의 Kubernetes Operator Pattern 블로그](https://iximiuz.com/en/posts/kubernetes-operator-pattern/)

## Mendix on Kubernetes Operator

Mendix on Kubernetes에는 여러 구성 요소가 포함되어 있습니다. 다음 구성 요소는 Mendix Operator의 일부가 아니지만 Mendix CR을 통해 이를 관리하거나 제어할 수 있습니다:

* Mendix Gateway Agent는 Mendix on Kubernetes Portal이 환경을 관리할 수 있도록 합니다
* Configuration Tool은 Mendix Operator를 구성하는 데 사용되는 CR을 업데이트합니다

### Mendix Operator가 제공하는 것

설치 및 구성이 완료된 후 Mendix Operator는 Mendix 앱 환경을 관리합니다. 이러한 환경은 `MendixApp` CR을 생성, 업데이트 또는 삭제하여 구성할 수 있습니다. 이 CR은 환경의 원하는 상태를 표현하는 데 사용되며, 현재 상태가 원하는 상태와 일치하지 않으면 Mendix Operator가 환경을 원하는 상태로 가져오는 데 필요한 변경 사항을 적용합니다.

`MendixApp` CR은 모든 Kubernetes API 소비자: 다른 Operator, `kubectl`, 또는 Mendix Gateway Agent에 의해 수정될 수 있습니다.

Mendix Operator는 다음 작업을 수행할 수 있는 올인원 Operator입니다:

* 네트워크 관련 객체 관리: Service, Ingress 또는 OpenShift Route.
* 환경의 컴퓨팅 및 구성 리소스 관리: Deployment, [ConfigMap](https://kubernetes.io/docs/concepts/configuration/configmap/), Secret.
* 다음을 통한 데이터 스토리지(데이터베이스 및 Blob Storage) 관리:
    * 환경이 생성되거나 삭제될 때 새 데이터베이스 또는 스토리지 버킷 생성 또는 삭제
    * 안전하게 수행할 수 있는 경우 기존 데이터베이스 또는 스토리지 버킷을 환경에 연결(예: 데이터베이스 또는 전용 버킷이 애플리케이션 간에 공유되는 경우 안전하지 않음)
    * 각 환경이 자체 데이터에만 접근할 수 있도록 데이터베이스 또는 스토리지 버킷 파티셔닝
* MDA 파일에서 Mendix 앱 컨테이너 이미지를 빌드하고 컨테이너 레지스트리에 푸시.

### 의존성

클라우드 공급자 및 Kubernetes 벤더의 관리형 서비스와 통합하기 위해 Mendix Operator는 Kubernetes 클러스터에 일반적으로 포함되는 서비스를 실행하지 않습니다:

* 데이터베이스 및 Blob File Storage
* 컨테이너 레지스트리
* Ingress Controller 및 관련 네트워크 의존성: 로드 밸런서, IP 주소, DNS 도메인 이름, 구성
* Kubernetes 클러스터 자체

이러한 리소스를 직접 설정, 구성 및 관리해야 합니다. 이를 통해 조직의 정책을 준수하는 방식으로 인프라를 설정하고 구성할 수 있습니다.

또한 로그와 메트릭을 수집하고 시각화하기 위해 Grafana/Prometheus/Promtail/Loki와 같은 로깅/모니터링 스택을 사용하는 것을 강력히 권장합니다.

### 변경 사항 처리

Kubernetes Operator 모범 사례에 따라 Mendix Operator는 내부 상태를 갖지 않습니다. Operator의 제어 루프가 실행될 때마다 Operator는 관리하는 리소스가 원하는 상태와 일치하는지 또는 업데이트해야 하는지 확인합니다. 그런 다음 필요한 변경 사항을 적용합니다.
`mendix-operator` Deployment가 중지되고 일정 시간 후 다시 시작되면, 중지된 시점의 상태와 재시작된 시점의 상태 사이의 모든 변경 사항을 처리합니다. 즉, Operator는 개별 변경 사항(예: "디버그 모드 활성화")을 처리하지 않고 현재 원하는 상태와 일치하도록 리소스(예: Deployment)를 업데이트합니다.

대부분의 리소스는 Operator에 의해 관리(소유)되며, 이는 Operator가 예상하지 않는 속성을 롤백하여 작동하지 않는 구성을 자동으로 복구(치유)할 수 있음을 의미합니다.

Operator가 아직 변경 사항을 처리하는 동안 기존 `MendixApp` CR을 업데이트하는 것은 안전합니다. 예를 들어, 새 MDA를 배포하기로 결정했지만 일부 Microflow 상수를 업데이트하는 것을 잊은 경우, 올바른 구성으로 `MendixApp` CR을 즉시 편집(업데이트)할 수 있습니다. Mendix Operator는 아직 처리 중인 변경 사항을 취소하고 업데이트된 구성을 적용하기 시작합니다.

그러나 문서에서 다루지 않는 리소스(Deployment, Service 또는 ConfigMap)를 수정하지 마십시오. 이로 인해 Operator가 리소스를 업데이트해야 한다고 판단하고 원하는 상태에 도달하기 위한 변경 사항을 처리할 수 없거나 변경 사항을 롤백할 수 있습니다.

### Custom Resource

Mendix on Kubernetes에는 여러 Custom Resource(CR)가 포함되어 있습니다.

#### Operator를 제어하는 CR

이러한 CR은 Operator의 구성을 제공합니다:

* `OperatorConfiguration`은 네임스페이스의 모든 환경에 대한 공통 구성을 지정합니다. `OperatorConfiguration`의 대부분은 Mendix on Kubernetes Configuration Tool `mxpc-cli`로 관리할 수 있으며, 몇 가지 고급 옵션은 수동으로 업데이트할 수 있습니다.
* `OperatorVersion`은 Operator 버전과 보조 컨테이너 이미지가 포함된 레지스트리를 지정하는 데 사용됩니다. 이 CR은 수동으로 수정하면 안 됩니다. Operator가 설치되거나 업그레이드될 때 자동으로 업데이트됩니다.
* `StoragePlan`은 새 환경에 데이터베이스 또는 Blob File Storage 버킷을 제공하는 방법과 환경이 삭제된 후 스토리지를 정리하는 방법에 대한 지침을 Operator에 제공합니다. 수동으로 편집할 수 없으며, `mxpc-cli` Cloud Configuration Tool이 `StoragePlan` CR을 생성하고 업데이트하며 구성이 유효한지 확인합니다.

#### 앱 환경을 제어하는 CR

`MendixApp` CR은 Mendix 앱 환경의 구성을 제공하는 최상위 CR입니다. 이 CR은 환경을 업데이트하기 위해 수정해야 하는 유일한 CR입니다.

Mendix 앱 환경의 각 측면은 직접 수정해서는 안 되는 자체 CR과 Controller에 의해 관리됩니다:

* `Build`는 필요할 때 새 컨테이너 이미지를 빌드하고 레지스트리에 푸시하는 데 사용됩니다
* `Endpoint`는 HTTP 트래픽을 Mendix 앱으로 라우팅할 수 있게 하는 네트워크 관련 기능을 관리합니다
* `StorageInstance`는 `StoragePlan` CR의 구성과 지침을 사용하여 데이터베이스와 Blob File Storage를 요청하는 데 사용됩니다
* `Runtime`은 컴퓨팅 리소스(Deployment)와 환경 변수 및 Microflow 상수와 같은 기타 Mendix 앱 구성을 관리합니다

Mendix 앱 환경을 제어하는 데 사용되는 세 가지 수준의 CR이 있습니다:

1. `MendixApp` CR 자체로, 최상위 CR입니다
2. `Build`, `Endpoint`, `StorageInstance`, `Runtime`과 같은 의존성 CR - `MendixApp` CR이 소유합니다
3. 의존성 CR이 소유하는 Kubernetes 리소스 - 예를 들어, `Endpoint`가 소유하는 `Ingress`와 `Service`

각 수준의 CR에는 소유자 객체에 대한 소유자 참조가 설정되며, 리소스 이름은 소유자 객체를 기반으로 합니다. 이는 다음을 의미합니다:

* `MendixApp` CR을 삭제하면 관련된 모든 객체가 Kubernetes에 의해 [가비지 수집](https://kubernetes.io/docs/concepts/architecture/garbage-collection/)되어 해당 환경과 관련된 모든 객체가 효과적으로 삭제됩니다.
* `MendixApp` CR의 이름이 `my-app`인 경우, 해당 리소스는 `my-app`을 기반으로 한 이름을 사용합니다. 예를 들어 `my-app-database` 및 `my-app-build`.

각 Mendix CR에는 리소스의 상태와 이 CR이 변경 사항을 적용하지 못하게 하는 오류 또는 문제를 나타내는 `status` 필드가 있습니다. `status` 필드의 값은 의존성에서 최상위 `MendixApp` CR까지 전파됩니다. 또한 대부분의 Controller는 변경 사항이 성공적으로 처리되거나 실패했을 때 Kubernetes 이벤트를 보냅니다.

일부 CR은 다른 CR에 의존하며 구성을 위해 의존성의 `status`를 사용합니다. 예를 들어:

* `Runtime` CR은 해당 환경의 다른 모든 CR이 오류가 아닌 상태일 때만 업데이트됩니다.
* `Runtime` CR은 `Endpoint`의 상태 `appURL`을 사용하여 URL이 Ingress Controller나 로드 밸런서에 의해 자동 생성되더라도 Mendix 앱이 외부 URL을 알 수 있도록 합니다.

개발자가 Secret이나 기타 Kubernetes 객체에 접근하는 것을 방지하려면 [Kubernetes RBAC](https://kubernetes.io/docs/reference/access-authn-authz/rbac/)를 사용하여 개발자의 `MendixApp` CR에 대한 읽기/쓰기 접근을 제한할 수 있습니다. 이러한 방식으로 `MendixApp` CR은 기본 Kubernetes 객체에 대한 더 높은 수준의 추상화를 제공합니다.

### 범위

Mendix Operator는 하나의 네임스페이스로 범위가 제한됩니다. 여러 네임스페이스에서 Mendix Operator를 사용해야 하는 경우 각 네임스페이스에 설치하고 구성해야 합니다. 이를 통해 각 Operator가 자체 전용 네임스페이스에서 실행되는 한 동일한 클러스터에서 서로 다른 구성의 여러 버전의 Operator를 사용할 수 있습니다.
전체 클러스터에 대한 하나의 전역 Operator 인스턴스를 설치하는 것은 불가능합니다.

반면에 CRD는 클러스터 내에서 전역적입니다. 클러스터의 모든 Mendix Operator가 동일한 공유 CRD를 사용하므로 최신 버전의 CRD가 클러스터에 설치되어 있는 것이 중요합니다. 자세한 내용은 [Mendix on Kubernetes 업그레이드 지침](/developerportal/deploy/private-cloud-upgrade-guide/)을 참조하십시오.

클러스터에서 CRD를 삭제하면 해당 CR도 삭제됩니다. Mendix 앱 환경이 설치되지 않은 클러스터에서만 `kubectl delete crd`를 실행하십시오.

Operator와 관리하는 CR이 동일한 네임스페이스에 있으므로, 해당 네임스페이스에 환경이나 기타 CR이 남아 있지 않을 때만 네임스페이스를 삭제해야 합니다.
Operator Deployment/Pod 및 구성 CR(`OperatorConfiguration`, `StoragePlan`, `Secret`)은 Kubernetes 가비지 수집기가 환경과 관련된 데이터베이스 및 파일 스토리지를 정리하는 데 사용됩니다.
해당 네임스페이스에서 모든 환경이 삭제되기 전에 `kubectl delete namespace`를 실행하지 마십시오. 그렇지 않으면 Kubernetes가 가비지 수집을 수행할 수 없으며 네임스페이스가 `Terminating` 상태에 머물게 됩니다.

### 서비스 컨테이너

컨테이너 이미지 빌드나 Azure SQL 데이터베이스 관리와 같은 일부 작업에는 추가 의존성과 리소스가 필요합니다.
예를 들어, 컨테이너 이미지를 빌드하는 데 몇 분이 걸릴 수 있습니다. 결과 이미지를 레지스트리에 푸시하려면 추가 인증 헬퍼가 필요할 수 있습니다.
데이터베이스와 파일 스토리지 버킷에는 클라이언트 라이브러리와 경우에 따라 추가 패키지가 필요합니다.

일부 작업의 경우 Operator는 "작업" Pod를 사용합니다: 특정 작업을 실행한 다음 종료되는 Pod입니다. 이러한 Pod는 CI/CD 작업에 해당합니다. Operator는 모든 매개변수를 작업에 제공한 다음 Pod가 완료될 때까지 기다리고 최종 상태를 확인합니다.
이를 통해 Operator는 별도의 컨테이너로 제공되는 확장 및 공급자별 애드온을 지원하여 Operator 이미지를 컴팩트하게 유지하고 선택 사항인 코드와 의존성을 포함하지 않을 수 있습니다.
별도의 Pod를 실행하면 진행 중인 작업을 중단하지 않고 Operator를 재시작할 수 있습니다. 이 접근 방식은 또한 시간이 오래 걸리거나 리소스를 많이 소모하는 작업을 Operator와 별도로, 별도의 Pod에서 또는 다른 노드에서 실행하여 Operator의 리소스를 소모하지 않도록 합니다.

### 기타 참고 사항

Mendix Operator는 사용자 정의 도구(`mxpc-cli` Configuration Tool)를 사용하여 설치 및 업그레이드됩니다. 이 도구는 시스템에 `kubectl` 또는 `oc`만 설치되어 있으면 되며, 클러스터와 공급자에서 동일하게 작동합니다.
현재 [OLM](https://olm.operatorframework.io/)이나 Helm 차트와 같은 대체 설치 옵션은 제공하지 않습니다. 변경 사항이 적용되기 전에 감사하려면 `mxpc-cli` 도구가 yaml 파일과 `kubectl patch` 지침을 생성하여 수동으로 검토하고 적용할 수 있습니다.

Operator는 `StorageInstance`를 업데이트할 수 없으며, 생성하거나 삭제할 수만 있습니다. 현재 하나 또는 여러 `StorageInstance`(환경)에서 사용 중인 `StoragePlan`을 업데이트하면 이미 생성된 `StorageInstance`가 자동으로 업데이트되지 않습니다. 또한 다른 데이터베이스 서버로 전환하는 것과 같은 일부 변경 사항은 서버 간에 데이터를 마이그레이션합니다.

네임스페이스의 모든 환경에 대한 연쇄 재구성을 방지하기 위해 Operator는 `OperatorConfiguration` CR을 모니터링하지 않습니다. `OperatorConfiguration` CR을 변경한 경우 Operator를 수동으로 재시작해야 합니다. 이렇게 하면 관리하는 모든 리소스를 다시 확인하고 업데이트합니다.
