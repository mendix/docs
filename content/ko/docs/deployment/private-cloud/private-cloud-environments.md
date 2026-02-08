---
title: "Kubernetes 기반 Mendix 환경의 환경 계획"
linktitle: "환경 계획"
url: /developerportal/deploy/private-cloud-environments/
description: "Kubernetes 기반 Mendix 환경의 모범 사례"
weight: 70
---

## 소개

Kubernetes 기반 Mendix를 사용하면 Mendix 앱에 필요한 환경이 생성되는 위치를 더 세밀하게 제어할 수 있습니다. 클러스터에 하나 또는 여러 개의 네임스페이스를 포함할지, 네임스페이스에 하나 또는 여러 개의 환경을 포함할지, 그리고 해당 환경이 모두 동일한 앱용인지 또는 여러 앱용인지를 결정할 수 있습니다.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-environments/mx4pc-environments-minimal.png" alt="Example of distributing environments in different clusters" class="no-border" >}}

이 문서에서는 Kubernetes 기반 Mendix 클러스터의 환경 구성 권장 방법과 라이선스 요구 사항에 대해 설명합니다.

## 라이선스 개요

Mendix 앱용 환경을 생성하려면 Kubernetes 기반 Mendix에서 생성하는 각 네임스페이스에 Mendix Operator와 (선택적으로) Mendix Gateway Agent의 사본이 필요합니다. 라이선스 없이 평가할 수 있지만 엄격한 제한이 있습니다.

Kubernetes 기반 Mendix를 사용하여 Mendix 앱을 실행하려면 Mendix Operator의 라이선스가 필요합니다. 관리하려는 각 네임스페이스에 대해 하나의 라이선스가 필요하며 이 라이선스는 네임스페이스에 바인딩됩니다. 이 라이선스는 Mendix Operator에만 적용됩니다. [Mendix Support](https://support.mendix.com)에서 이 라이선스를 받을 수 있습니다.

또한 다른 플랫폼에 배포하는 것과 마찬가지로 앱에 대한 Runtime 라이선스가 필요합니다.

이 주제에 대한 자세한 내용은 [Kubernetes 기반 Mendix 라이선스](/developerportal/deploy/private-cloud/#licensing)를 참조하십시오.

### 환경 수 제한

표준 또는 글로벌 Operator를 350개 이상의 앱 환경을 관리하도록 구성하면 성능 문제가 발생할 수 있으며 이는 지원되지 않습니다. 관리해야 하는 환경 수가 350개를 초과하는 경우 추가 Operator-Agent 조합을 배포하는 것이 좋습니다.

## 프로덕션 환경

프로덕션 환경은 항상 자체 네임스페이스에 있는 것이 좋습니다. 이는 다음과 같은 이점이 있습니다:

* 클라우드의 네임스페이스 또는 클러스터에 문제가 있는 경우 더 안전합니다
* 네임스페이스의 별도 모니터링이 가능합니다
* 클라우드 관리자의 보안을 별도로 구성할 수 있습니다

각 프로덕션 환경에 대해 별도의 네임스페이스뿐만 아니라 별도의 클러스터를 선호하는 경우가 있을 수 있습니다.

## 비프로덕션 환경

비프로덕션(예: 테스트 및 수락) 환경을 설정하는 두 가지 방법이 있습니다:

### 최소 구성

최소 구성에서는 모든 비프로덕션 환경이 단일 네임스페이스에 배치됩니다. 이는 단순성의 이점이 있습니다. 이러한 환경은 프로덕션 환경이 아니므로 대량의 데이터나 사용자가 없고 테스트 데이터에 특별한 보안이 필요하지 않을 것으로 예상됩니다.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-environments/mx4pc-environments-minimal.png" alt="Example of minimal configuration of environments where all non-production environments are created in a single namespace" class="no-border" >}}

앱에 대한 스트레스 테스트를 수행하는 경우 동일한 네임스페이스에서 실행되는 다른 앱에 영향을 받으므로 이 접근 방식은 권장되지 않습니다.

### 세분화

보다 세분화된 접근 방식은 비프로덕션 환경을 다른 네임스페이스 또는 다른 클러스터의 네임스페이스로 분리합니다.

요구 사항에 따라 여러 가지 방법으로 이를 수행할 수 있습니다. 예를 들면:

* 테스트 및 수락 환경을 위한 별도의 네임스페이스
* 부하 테스트와 같은 기타 비프로덕션 환경을 위한 별도의 네임스페이스
* 각 앱을 위한 별도의 네임스페이스
* 각 비즈니스 기능을 위한 별도의 네임스페이스

{{< figure src="/attachments/deployment/private-cloud/private-cloud-environments/mx4pc-environments-fine-grained.png" alt="Example of fine-grained configuration of environments" class="no-border" >}}

이 접근 방식의 장점은 다음과 같습니다:

* 각 네임스페이스에 대한 보안을 설정할 수 있으므로 다른 비즈니스 기능 또는 테스트 및 수락 네임스페이스에 대한 별도의 보안을 가질 수 있습니다
* 각 환경에서 사용하는 플랫폼 리소스에 대한 더 나은 모니터링이 가능합니다

단점은 다음과 같습니다:

* 모든 추가 네임스페이스 및 클러스터를 개별적으로 관리해야 합니다
