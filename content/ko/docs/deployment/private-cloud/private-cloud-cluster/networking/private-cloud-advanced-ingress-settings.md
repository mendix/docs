---
title: "Mendix on Kubernetes의 고급 Ingress 설정"
linktitle: "고급 설정"
url: /developerportal/deploy/private-cloud-cluster/private-cloud-ingress-settings/advanced/
description: "고급 Ingress 설정을 구성하는 방법을 설명합니다."
weight: 40
---

## 소개

다음 섹션에서는 Ingress 구성에 대한 다양한 고급 사용 사례를 설명합니다.

## TLS 인증서 관리 방법

Mendix 배포에서 TLS 인증서를 처리하는 방법에는 여러 가지가 있습니다.

### Ingress Controller의 기본 TLS 인증서

Ingress Controller는 와일드카드 인증서(예: `*.mendix.example.com`)를 사용할 수 있습니다.

Ingress Controller가 [Let's Encrypt](https://doc.traefik.io/traefik/https/acme/)를 지원하는 경우 TLS 인증서를 자동으로 요청하고 관리할 수 있습니다.

### Cert-manager를 사용한 자동 TLS 관리

Ingress 어노테이션을 추가하면 cert-manager(또는 유사한 도구)가 자동으로 TLS 인증서를 요청하고 관리할 수 있습니다.

Cert-manager는 TLS 인증서를 생성하고 Ingress Controller가 사용할 수 있도록 Kubernetes 시크릿으로 저장합니다.

이 솔루션을 구현하려면 인증서를 유지 관리할 클러스터 발급자를 선택하기 위한 cert-manager.io/cluster-issuer 어노테이션을 지정하고 다음 예시와 같이 OperatorConfiguration을 설정하십시오:

```text
apiVersion: privatecloud.mendix.com/v1alpha1
kind: OperatorConfiguration
# ...
# omitted lines for brevity
# ...
spec:
  # Endpoint (Network) configuration
  endpoint:
    # ...
    # omitted lines for brevity
    # ...
    ingress:
      # Optional, can be omitted: annotations which should be applied to all Ingress Resources
      annotations:
        # Use the "staging-issuer" cert-manager ClusterIssuer to generate TLS certificates with Let's Encrypt
        cert-manager.io/cluster-issuer: staging-issuer
      # ...
      # omitted lines for brevity
      # ...
      # When generating certificates with cert-manager, generate a unique name based on the MendixApp CR name
      tlsSecretName: '{{.Name}}-tls'
# ...
# omitted lines for brevity
# ...
```

### Linkerd Service Mesh를 사용한 TLS 관리

Mendix Operator v1.11.0부터 Linkerd Service Mesh를 사용하여 Ingress Controller와 Mendix 앱의 Pod 간의 HTTPS TLS 트래픽을 관리하고 보호할 수 있습니다. Linkerd는 클러스터 내에서 향상된 보안을 위해 트래픽을 재암호화할 수도 있습니다.

### 환경별 TLS 인증서 시크릿 제공

Standalone Mendix Operator 설치에서는 개별 환경에 대한 사용자 정의 TLS 구성을 제공하여 기본 설정을 재정의할 수 있습니다.

이 방법으로 다음 설정을 구성할 수 있습니다:

* TLS 활성화 또는 비활성화.
* 기존 TLS 인증서 시크릿의 이름 지정.
* 환경 사양에 TLS 인증서 및 개인 키 값을 직접 제공.

## HTTP 헤더 구성

NGINX Ingress 및 Mendix Runtime에 대해 HTTP 헤더를 구성할 수 있습니다. 자세한 내용은 다음 섹션을 참조하십시오.

### NGINX Ingress에서 헤더 구성

NGINX Ingress(F5 Networks)의 경우 `OperatorConfiguration` 객체에서 구성 스니펫을 사용하여 네임스페이스에 헤더를 설정할 수 있습니다. 설정한 헤더는 해당 네임스페이스의 모든 앱에 전파됩니다. 또는 Mendix on Kubernetes Portal에서 `nginx.org/location-snippets` 어노테이션을 추가하여 개별 앱 환경에 대한 헤더를 구성할 수 있습니다.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/private-cloud-networking/advanced-headers.png" class="no-border" >}}

Mendix는 Ingress Controller와 앱 간에 암호화되지 않은 HTTP만 지원합니다. 그러나 서비스 간 암호화 및 정책 제어를 통한 더 높은 수준의 보안은 없습니다. 이러한 상황에서는 Ingress Controller를 Istio Service Mesh 또는 Linkerd와 통합하면 Kubernetes 클러스터에 들어오는 외부 트래픽(Ingress Controller 사용)과 서비스 간 내부 트래픽(Istio 또는 Linkerd 사용)을 모두 관리하는 데 도움이 됩니다.

Istio Service Mesh 및 Linkerd는 Kubernetes 클러스터 내에서 서비스 간 통신을 관리하는 데 도움이 됩니다. 다음 기능을 제공합니다:

* 트래픽 관리(예: 카나리 릴리스)
* 서비스 디스커버리
* 로드 밸런싱
* 보안(예: 상호 TLS)
* 관찰 가능성(예: 메트릭 및 트레이싱)

Istio 또는 Linkerd가 활성화된 Kubernetes 클러스터에서 Ingress Controller는 HTTP 및 HTTPS 트래픽의 외부 진입점으로 사용할 수 있습니다. 트래픽이 Ingress Controller에 도달하면 Istio Ingress Gateway로 전달되어 Istio Service Mesh로 진입할 수 있습니다. Linkerd의 경우 Linkerd가 활성화되면 각 서비스는 Linkerd 프록시(Pod의 애플리케이션 컨테이너와 함께 실행되는 경량 데이터 플레인 프록시)로 사이드카 주입됩니다.

{{% alert color="info" %}}
AWS Application Load Balancer 및 Azure Application Gateway Ingress Controller는 Istio에서만 작동합니다.
{{% /alert %}}

### Mendix Runtime에서 헤더 구성

Mendix 10.24.1부터 Mendix Runtime은 외부 Ingress Controller에 의존하지 않고 기본적으로 헤더를 설정할 수 있습니다.

이를 통해 NGINX Ingress뿐만 아니라 모든 Ingress Controller에서 `Content-Security-Policy`와 같은 보안 헤더를 지정할 수 있습니다.

헤더를 설정하려면 [네트워크 탭](/developerportal/deploy/private-cloud-deploy/#network-tab)(Connected 환경의 경우) 또는 MendixApp CR의 [.spec.runtime.customConfiguration 필드](/developerportal/deploy/private-cloud-operator/#edit-cr)에서 [Headers](/refguide/custom-settings/#Headers) Custom Runtime Setting을 사용하십시오.

## Istio Service Mesh와 Ingress Controller 통합

Istio Service Mesh를 Ingress Controller와 통합하려면 다음 단계를 수행하십시오:

1. [Install with Helm](https://istio.io/latest/docs/setup/install/helm/)에 설명된 대로 Istio를 설치하십시오.
2. 설치가 완료되면 애플리케이션이 배포된 네임스페이스에서 Istio Ingress를 활성화하십시오.

    ```text
    kubectl label namespace <name> istio-injection=enabled --overwrite
    ```

3. Service Mesh가 설치된 후 원하는 Ingress Controller를 배포하십시오.
4. Istio Ingress Gateway를 배포하십시오.

    Istio Ingress Gateway는 들어오는 트래픽을 처리하고 서비스 메시 규칙을 적용합니다. 설치 중에 기본적으로 게이트웨이를 활성화하거나 별도로 배포할 수 있습니다.

5. Ingress Controller가 Istio Ingress Gateway로 전달하도록 구성하십시오.
6. Istio에서 [Gateway](https://istio.io/latest/docs/reference/config/networking/gateway/) 리소스를 구성하여 Ingress Gateway를 통한 트래픽을 허용하십시오.
7. [VirtualService](https://istio.io/latest/docs/reference/config/networking/virtual-service/)를 정의하여 게이트웨이에서 메시의 서비스로 트래픽을 라우팅하십시오.

Mendix on Kubernetes용 Istio Service Mesh를 구성하려면 다음 설정을 구성하십시오:

* **Ingress Type** - **kubernetes-ingress**를 선택하십시오. 이 옵션은 제공하는 추가 도메인 이름에 따라 Ingress를 구성합니다.
* **Ingress Domain Name** - Istio용으로 구성된 도메인 이름을 제공하십시오.
* **Ingress Path** - `/*`로 설정하십시오.
* **Enable TLS** - 앱의 Ingress에 대해 TLS를 활성화 또는 비활성화하십시오.
* **Custom Ingress Class** - **enabled**로 설정하십시오.
* **Ingress Class Name** - **istio**를 입력하십시오. 이 설정에는 Custom Ingress Class가 활성화되어 있어야 합니다.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/private-cloud-networking/advanced-istio.png" class="no-border" >}}

## Linkerd 설치

Linkerd를 설치하려면 다음 단계를 수행하십시오:

1. [Getting Started](https://linkerd.io/2.17/getting-started/)에 설명된 대로 Linkerd를 설치하십시오.
2. 다음과 같이 NGINX Ingress Controller 네임스페이스를 Linkerd 주입에서 제외하십시오:

    ```text
    kubectl label namespace ingress-nginx linkerd.io/inject=disabled
    ```

3. 애플리케이션이 배포된 네임스페이스에 다음 명령으로 어노테이션을 추가하십시오:

    ```text
    kubectl annotate {namespace} linkerd.io/inject=enabled
    ```

### Mxpc-cli 도구에서 Linkerd Ingress 구성

Mendix on Kubernetes용 Linkerd를 구성하려면 다음 설정을 구성하십시오:

* **Ingress Type** - **kubernetes-ingress**를 선택하십시오. 이 옵션은 제공하는 추가 도메인 이름에 따라 Ingress를 구성합니다.
* **Ingress Domain Name** - Linkerd용으로 구성된 도메인 이름을 제공하십시오.
* **Ingress Path** - `/`로 설정하십시오.
* **Enable TLS** - 앱의 Ingress에 대해 TLS를 활성화 또는 비활성화하십시오.
* **Custom Ingress Class** - **enabled**로 설정하십시오.
* **Ingress Class Name** - **nginx**를 입력하십시오. 이 설정에는 Custom Ingress Class가 활성화되어 있어야 합니다.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/private-cloud-networking/advanced-linkerd.png" class="no-border" >}}
