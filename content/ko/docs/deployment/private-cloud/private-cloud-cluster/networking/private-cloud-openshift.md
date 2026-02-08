---
title: "Mendix on Kubernetes의 OpenShift Route"
linktitle: "OpenShift Route"
url: /developerportal/deploy/private-cloud-cluster/private-cloud-ingress-settings/openshift/
description: "Mendix on Kubernetes에서 OpenShift Route를 구성하는 방법을 설명합니다."
weight: 20
---

## 소개

OpenShift는 Route와 Ingress를 모두 지원합니다. OpenShift IngressController는 Route와 Ingress 리소스를 모두 관리하는 브릿지 역할을 합니다. 이를 통해 특정 요구 사항이나 친숙도에 따라 어느 방식이든 유연하게 사용할 수 있습니다.

{{% alert color="info" %}}
OpenShift Route는 OpenShift에서만 지원되므로, OpenShift 내에서 전용으로 작업하며 내장 라우터 기능을 활용하는 경우에는 OpenShift Route를 사용하고, 이식성이나 특정 컨트롤러 기능이 필요한 경우에는 Kubernetes Ingress를 사용하는 것이 좋습니다.
{{% /alert %}}

## 기본 설치 및 구성

OpenShift에서 Ingress를 사용하려면 다음을 수행하십시오:

1. OpenShift IngressController가 배포되어 있는지 확인하십시오.
2. Kubernetes 표준에 따라 Ingress 리소스를 정의하십시오.
3. 필요한 경우 향상된 동작을 위해 OpenShift 전용 어노테이션을 구성하십시오.

    현재 지원되는 유일한 구성 옵션은 TLS를 활성화하거나 비활성화하는 것입니다. TLS가 활성화되면 엣지 종료가 사용됩니다. 즉, TLS 종료는 트래픽이 Pod로 라우팅되기 전에 라우터에서 발생하며, HTTP에서 HTTPS로 자동 리디렉션됩니다.

{{% alert color="info" %}}
경로 기반 라우팅은 Operator 버전 2.19.0 이상 및 Mendix 버전 10.3.0 이상에서 지원됩니다. 이 기능을 지원하기 위해 OpenShift Route는 `haproxy.router.openshift.io/rewrite-target=/` 어노테이션을 사용합니다.
{{% /alert %}}

##### Mxpc-cli 도구에서 OpenShift Route 구성

OpenShift에서 사용할 수 있는 구성 옵션은 다음과 같습니다:

* TLS 활성화 및 비활성화
* Route 어노테이션 추가
* 기본 라우터 인증서 대신 사용할 기존 TLS 인증서 시크릿 이름 제공
* 기본 OpenShift Route 도메인 대신 사용할 사용자 정의 도메인 이름 제공(예: `mendix.example.com`)

OperatorConfiguration에는 네트워크 엔드포인트를 위한 OpenShift Route에 대한 사용자 편집 가능한 옵션이 포함되어 있습니다. 다음은 네트워크 엔드포인트에 OpenShift Route를 사용하는 경우의 예시 yaml 파일입니다:

```text
apiVersion: privatecloud.mendix.com/v1alpha1
kind: OperatorConfiguration
spec:
  # ...
  # Other configuration options values
  # Endpoint (Network) configuration
  endpoint:
    # Endpoint type: ingress, openshiftRoute, or service
    type: openshiftRoute
    # OpenShift Route configuration: used only when type is set to openshiftRoute
    openshiftRoute:
      # Optional, can be omitted: annotations which should be applied to all Ingress Resources
      annotations:
        # Example: set HSTS headers
        haproxy.router.openshift.io/hsts_header: max-age=31536000;includeSubDomains;preload
        # This is automatically added by mxpc-cli to allow path-based routing
        haproxy.router.openshift.io/rewrite-target: "/""
      # Optional: App URLs will be generated for subdomains of this domain, unless an app is using a custom appURL
      domain: mendix.example.com
      # Enable or disable TLS
      enableTLS: true
      # Optional: name of a kubernetes.io/tls secret containing the TLS certificate
      tlsSecretName: 'mendixapps-tls'
# ...
# omitted lines for brevity
# ...
```

더 자세한 내용과 사용 가능한 옵션의 전체 목록은 [Route-specific annotations](https://docs.redhat.com/en/documentation/openshift_container_platform/4.17/html/networking/configuring-routes#nw-route-specific-annotations_route-configuration)를 참조하십시오.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/private-cloud-networking/configure-openshift.png" class="no-border" >}}
