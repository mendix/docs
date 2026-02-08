---
title: "Mendix on Kubernetes의 네트워크 Ingress 설정"
linktitle: "네트워크 Ingress 설정"
url: /developerportal/deploy/private-cloud-cluster/private-cloud-ingress-settings/
description: "Mendix on Kubernetes에서 다양한 Ingress 옵션을 설정하고 구성하는 방법을 설명합니다."
weight: 10
---

## 소개

조직의 네트워킹 및 보안 요구 사항에 따라 Mendix 웹 애플리케이션의 사용 가능한 네트워킹 구성 요소를 구성하여 최종 사용자가 프라이빗 네트워크 또는 인터넷을 통해 접근할 수 있도록 해야 합니다. 이 문서에서는 Kubernetes Ingress, OpenShift Route, Service-Only의 세 가지 네트워크 구성을 설명합니다. 각 구성은 특정 사용 사례를 충족하도록 설계되었습니다.

## 사전 요구 사항

Kubernetes에 적용 가능한 네트워킹 개념에 익숙해야 합니다. 이 문서는 고객이 모범 사례를 준수하면서 특정 네트워킹 요구 사항을 충족하는 데 도움이 되는 참조 가이드 및 권장 사항을 제공합니다. 고급 기능을 이해하려면 항상 환경과 관련된 네트워킹 구성 요소의 공식 문서를 참조하십시오.

## 지원되는 네트워크 구성

Mendix on Kubernetes는 다음 Ingress 구성을 지원합니다:

* [Kubernetes Ingress](/developerportal/deploy/private-cloud-cluster/private-cloud-ingress-settings/controllers/) - 외부 트래픽을 관리하는 표준 Kubernetes 방식으로, 클라우드 공급자의 로드 밸런서와 원활하게 통합되며 애플리케이션 트래픽을 효과적으로 라우팅하고 보호하기 위한 풍부한 기능 세트를 제공합니다.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/private-cloud-networking/k8s-ingress.png" class="no-border" >}}

* [OpenShift Route](/developerportal/deploy/private-cloud-cluster/private-cloud-ingress-settings/openshift/) - 서비스를 외부에 노출하기 위한 OpenShift 기본 방식으로, 더 간소화된 설정을 제공하지만 Kubernetes Ingress에 비해 유연성이 떨어집니다.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/private-cloud-networking/openshift-routes.png" class="no-border" >}}

* [Service Only](/developerportal/deploy/private-cloud-cluster/private-cloud-ingress-settings/services-only/) - 이 방식은 Ingress나 OpenShift Route 없이 Kubernetes Service만 생성하여 업스트림 네트워킹 구성에 대한 더 큰 제어를 허용합니다. 이 옵션을 사용하면 Ingress Controller 없이 로드 밸런서를 사용하거나 Mendix on Kubernetes에서 관리하지 않는 Ingress 객체를 수동으로 생성 및 관리할 수 있습니다.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/private-cloud-networking/service-only.png" class="no-border" >}}

{{% alert color="info" %}}
Mendix Operator가 Kubernetes API 및 Ingress Controller와 상호 작용하는 방법에 대한 자세한 내용은 [Kubernetes Ingress 사용](/developerportal/deploy/private-cloud-technical-appendix-02/#using-kubernetes-ingress)을 참조하십시오.
{{% /alert %}}

### 기능 비교

다음 표는 세 가지 지원 옵션의 기능을 비교하여 보안, 성능 및 인프라 요구 사항에 가장 적합한 네트워킹 구성을 결정하는 데 도움을 줍니다.

{{% alert color="info" %}}
Ingress, OpenShift Route, Service Only 간에 전환할 때는 변경 사항이 완전히 적용되도록 Mendix Operator를 재시작해야 합니다.
{{% /alert %}}

| 기능 | Kubernetes Ingress | OpenShift Route | Service Only |
| --- | --- | --- | --- |
| 사용 편의성 | 설정이 필요하지만 더 많은 유연성을 제공합니다. | OpenShift 사용자에게 가장 간단한 옵션이며, 내장되어 있습니다. | 네트워킹 및 보안에 대한 세밀한 제어로 최대한의 유연성을 제공하지만, 구성 및 유지 관리에 상당한 노력과 전문 지식이 필요합니다. Mendix Operator 범위를 벗어나는 Service 객체까지의 네트워킹 설정은 Mendix에서 지원하지 않습니다. |
| 네이티브 클라우드 통합 | AWS Application Load Balancer와 같은 클라우드 네이티브 서비스와 통합할 수 있습니다. | 클라우드 공급자와의 직접 통합이 없습니다. | 네트워킹 설정에 대한 완전한 제어. |
| 성능 및 확장성 | 클라우드 로드 밸런서와 함께 확장되며, 수평 확장을 더 잘 지원합니다. | OpenShift Router 성능으로 제한됩니다. | 완전한 유연성 - 로드 밸런서 및 프록시 설정에 따라 확장됩니다. |
| 지원 공급자 | [NGINX Ingress Controller](https://kubernetes.github.io/ingress-nginx/); [Traefik](https://traefik.io/traefik/); [AWS Application Load Balancer](https://docs.aws.amazon.com/eks/latest/userguide/alb-ingress.html); [Ingress for External Application Load Balancer](https://cloud.google.com/kubernetes-engine/docs/concepts/ingress-xlb); [Azure Application Gateway Ingress Controller](https://learn.microsoft.com/en-us/azure/application-gateway/ingress-controller-overview) | [OpenShift Router (HAProxy 기반 Ingress Controller)](https://docs.openshift.com/container-platform/4.17/networking/networking_operators/ingress-operator.html) | 없음 |
| TLS/SSL 종료 | 클라우드 공급자 관리 TLS를 활용할 수 있으며, Cert-Manager를 지원합니다. | OpenShift의 HAProxy 라우터로 지원됩니다. | 완전히 유연하지만 수동 설정이 필요합니다. TLS는 애플리케이션 로드 밸런서, 네트워크 로드 밸런서 또는 앱 수준에서 종료할 수 있습니다. |
| 보안 (WAF, ACL, Auth) | 더 고급 보안 통합(예: AWS Web Application Firewall, 인증). | OpenShift OAuth를 통한 기본 접근 제어. | 완전한 제어 - 수동 구성으로 AWS Web Application Firewall, API Gateway, 인증 프록시와 통합할 수 있습니다. |
| 트래픽 분할 | Ingress 규칙을 통해 완전히 지원됩니다. | HAProxy 기반 Route 어노테이션을 통해 지원됩니다. | 외부 네트워킹 설정에 따라 다릅니다. |
| External DNS 지원 | 일부 Ingress Controller(예: Application Load Balancer)는 네이티브 DNS 업데이트를 지원합니다. | ExternalDNS 통합이 필요합니다. | 완전히 구성 가능 - ExternalDNS, Amazon Route 53 등을 사용할 수 있습니다. |
| 사용자 정의 어노테이션 | Kubernetes Ingress 어노테이션, 공급자별 기능을 지원합니다. | OpenShift 전용 어노테이션을 지원합니다. | 제한 없음 - 외부 네트워킹에서 완전히 사용자 정의 가능합니다. |

## 권장 구성

가능한 경우 Mendix는 다른 옵션(OpenShift Router 포함)보다 NGINX Ingress Controller(Community Edition)를 사용할 것을 권장합니다. NGINX Ingress는 다음과 같은 필수 보안 및 성능 기능을 제공합니다:

* 접근 제어 - 민감한 URL에 대한 접근을 제한합니다.
* HTTP 향상 - 헤더 추가, 압축 활성화, 정적 콘텐츠 캐시.
* 자동화된 TLS 관리 - cert-manager와 완전히 호환되어 수동 인증서 처리를 제거합니다.
* 향상된 보안 - Linkerd Service Mesh와 통합하여 Ingress Controller와 Mendix 앱 Pod 간의 네트워크 트래픽을 암호화합니다.

이러한 기능은 특히 애플리케이션이 프로덕션에 들어갈 때 보안, 확장성 및 안정성을 보장하는 데 중요합니다.

OpenShift Route도 실행 가능한 옵션이지만, 다음과 같은 이유로 NGINX Ingress Controller를 권장합니다:

* 미래 대비 - NGINX는 활발하게 개발되고 있으며 Kubernetes 표준에 맞추어져 있어 장기적인 호환성과 기능 업데이트를 보장합니다.
* 고급 기능 - NGINX는 URL 차단, 보안 헤더 관리, 서드파티 인증 플러그인 통합 등 더 광범위한 기능을 제공합니다.
* Mendix Cloud와의 일관성 - NGINX는 Mendix Cloud 및 Free Cloud에서 사용되어 구성 복제와 지원이 더 쉽습니다.

{{% alert color="info" %}}
OpenShift Route가 현재 요구 사항을 충족하고 고급 기능이 필요하지 않은 경우 여전히 적합한 선택입니다.
{{% /alert %}}

## 알려진 문제

* AWS Application Load Balancer는 HTTP2 WebSocket과 올바르게 작동하지 않습니다.

    해결 방법으로 HTTP1을 Ingress 백엔드 프로토콜로 사용할 수 있습니다: `alb.ingress.kubernetes.io/backend-protocol-version: HTTP1`

* 일부 Application Load Balancer 방화벽 규칙이 파일 업로드 또는 기타 Mendix 앱 기능을 차단할 수 있습니다.
* Linkerd는 AWS Application Load Balancer 및 Azure Gateway Ingress Controller와 올바르게 작동하지 않습니다.
