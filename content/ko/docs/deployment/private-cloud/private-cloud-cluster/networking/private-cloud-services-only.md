---
title: "Mendix on Kubernetes에서 Ingress 없는 Service"
linktitle: "Service Only"
url: /developerportal/deploy/private-cloud-cluster/private-cloud-ingress-settings/services-only/
description: "Mendix on Kubernetes에서 Ingress 없이 서비스를 생성하도록 구성하는 방법을 설명합니다."
weight: 30
---

## 소개

Mendix on Kubernetes는 Ingress 없이 서비스를 생성하는 기능을 제공하며, Mendix on Kubernetes와 독립적으로 Ingress 객체를 관리할 수 있도록 합니다. Ingress Controller나 Service Mesh 없이 L4 로드 밸런서를 직접 사용하는 것도 기술적으로 가능하지만, 이 설정은 매우 제한적이며 특수한 경우에만 적합합니다.

이 시나리오는 Mendix 애플리케이션을 서비스 메시와 통합하여 Ingress Controller에서 애플리케이션 Pod까지의 트래픽 암호화 등의 기능을 보장하는 데 적합합니다.

이러한 Service는 [Istio](https://istio.io/)와 호환됩니다.

## 예시

OperatorConfiguration에는 네트워크 엔드포인트를 위한 서비스에 대한 사용자 편집 가능한 옵션이 포함되어 있습니다.

아래는 네트워크 엔드포인트에 서비스를 사용하는 경우의 예시 yaml 파일입니다:

```text
apiVersion: privatecloud.mendix.com/v1alpha1
kind: OperatorConfiguration
spec:
  # ...
  # Other configuration options values
  # Endpoint (Network) configuration
  endpoint:
    # Endpoint type: ingress, openshiftRoute, or service
    type: service
    # Optional, can be omitted: the Service type
    serviceType: LoadBalancer
    # Optional, can be omitted: Service annotations
    serviceAnnotations:
      # example: annotations required for AWS NLB
      service.beta.kubernetes.io/aws-load-balancer-type: external
      service.beta.kubernetes.io/aws-load-balancer-nlb-target-type: ip
      service.beta.kubernetes.io/aws-load-balancer-scheme: internet-facing
    # Optional, can be omitted: Service ports
    servicePorts:
      - 80
      - 443#
      ...
# ...      
# omitted lines for brevity
# ... 
```
