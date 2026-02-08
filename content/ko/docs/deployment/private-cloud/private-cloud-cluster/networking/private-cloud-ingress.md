---
title: "Mendix on Kubernetes의 Ingress Controller"
linktitle: "Ingress Controller"
url: /developerportal/deploy/private-cloud-cluster/private-cloud-ingress-settings/controllers/
description: "Mendix on Kubernetes에서 다양한 Ingress Controller를 구성하는 방법을 설명합니다."
weight: 10
---

## 소개

Ingress는 클러스터 내의 서비스로 외부 HTTP 및 HTTPS 트래픽을 라우팅하기 위한 규칙을 정의하는 Kubernetes 리소스입니다. 로드 밸런서나 NodePort를 사용하여 서비스를 개별적으로 노출하는 대신, Ingress는 외부 접근을 효율적으로 관리하는 중앙 집중식 방법을 제공합니다.

## Kubernetes Ingress란?

Mendix 환경에서 Mendix Operator는 앱 환경의 구성을 기반으로 Service와 Ingress 리소스를 모두 자동으로 생성합니다. Service는 클러스터 내에서 애플리케이션 Pod로 트래픽이 라우팅되는 방법을 정의하고, Ingress는 외부 접근을 관리합니다.

그러나 Ingress 리소스 자체는 규칙의 집합일 뿐이며, 작동하려면 Ingress Controller(예: NGINX)가 필요합니다. Ingress Controller는 Ingress 리소스를 지속적으로 모니터링하고 지정된 라우팅 규칙을 적용하기 위해 기본 리버스 프록시를 업데이트합니다.

각 앱 환경에 대해 URL은 도메인 이름을 기반으로 자동 생성됩니다. 예를 들어, 도메인 이름이 `mendix.example.com`으로 설정된 경우 앱의 URL은 `myapp1-dev.mendix.example.com`, `myapp1-prod.mendix.example.com` 등이 됩니다.

올바른 라우팅을 보장하려면 DNS 서버가 모든 하위 도메인(`*.mendix.example.com`)을 Ingress Controller 또는 로드 밸런서로 지정하도록 구성해야 합니다. 이 옵션은 구성이 쉬우며, 새 앱을 추가하거나 도메인 이름을 변경하면 즉시 작동합니다. 또는 Kubernetes External DNS로 DNS 레코드를 관리할 수 있습니다.

## 기본 설치 및 구성

다음 섹션에서는 지원되는 다양한 Ingress Controller의 설치 및 구성을 설명합니다.

### NGINX Ingress Controller (F5)

{{% alert color="info" %}}
이 섹션에서는 NGINX 프로젝트(F5 Networks)의 [NGINX Ingress Controller](https://github.com/nginx/kubernetes-ingress)를 사용하는 방법을 설명합니다.
{{% /alert %}}

{{% alert color="info" %}}
NGINX 경로 기반 라우팅은 Operator 버전 2.19.0 이상 및 Mendix 버전 10.3.0 이상에서 지원됩니다. 이 기능을 지원하기 위해 NGINX Ingress는 Ingress 경로에서 `(.*)` 정규식을 다시 작성하는 `nginx.org/rewrite-target=/$1` 어노테이션을 사용합니다.
{{% /alert %}}

#### NGINX Ingress Controller 설치

NGINX를 설치하는 권장 방법은 [Helm](https://docs.nginx.com/nginx-ingress-controller/installation/installing-nic/installation-with-helm/)입니다.

일부 클라우드 공급자는 NGINX Ingress를 관리형 서비스로 제공할 수 있습니다.

##### Mxpc-cli 도구에서 NGINX Ingress 구성

Mendix on Kubernetes용 NGINX를 구성하려면 다음 설정을 구성하십시오:

* **Ingress Type** - **kubernetes-ingress**를 선택하십시오. 이 옵션은 제공하는 추가 도메인 이름에 따라 Ingress를 구성합니다.
* **Ingress Domain Name** - Ingress 리소스 파일에 설정할 도메인 이름을 제공하십시오.
* **Ingress Path** - 선택 사항. 이 옵션을 사용하여 Ingress 경로를 지정할 수 있습니다. 기본값은 `/`입니다.
* **Enable TLS** - 앱의 Ingress에 대해 TLS를 활성화 또는 비활성화하십시오.
* **Custom Ingress Class** - **enabled**로 설정하십시오.
* **Ingress Class Name** - **nginx**를 입력하십시오. 이 설정에는 Custom Ingress Class가 활성화되어 있어야 합니다.
* **Set Ingress Class as Annotation** - **disabled**로 설정하십시오. 이 옵션은 Ingress 클래스 이름을 사용하는 대신 레거시 `kubernetes.io/ingress.class` 어노테이션을 추가하여 Ingress 클래스를 설정합니다.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/private-cloud-networking/configure-nginx.png" class="no-border" >}}

또한 구성의 **Ingress** 섹션에 NGINX 전용 어노테이션을 추가할 수 있습니다. 다음 섹션은 예시 어노테이션을 보여줍니다. 특정 요구 사항에 따라 조정하십시오.

```text
apiVersion: privatecloud.mendix.com/v1alpha1
kind: OperatorConfiguration
# ...
# omitted lines for brevity
# ...
spec:
  # Endpoint (Network) configuration
  endpoint:
    type: ingress
    ingress:
      annotations:
        # Example: allow uploads of files up to 500MB in size
        nginx.org/client-max-body-size: 500m
        # Example: rewrite path for path-based routing
        nginx.org/rewrite-target: /$1
        # Example: enable regular expressions for path-based routing
        nginx.org/path-regex: case_sensitive
      # The following parameters are already configured by mxpc-cli
      domain: mendix.example.com
      enableTLS: true
      ingressClassName: nginx
      # Set the path to "/(.*)" when using path-based routing
      # When not using path-based routing, set the path to "/"
      path: "/(.*)"
      pathType: ImplementationSpecific
# ...
# omitted lines for brevity
# ...
```

### HAProxy Ingress Controller

{{% alert color="info" %}}
이 섹션에서는 [HAProxy Kubernetes Ingress Controller](https://github.com/haproxytech/kubernetes-ingress)를 사용하는 방법을 설명합니다.
{{% /alert %}}

#### HAProxy Ingress Controller 설치

권장 설치 프로세스에 대한 자세한 내용은 [플랫폼별 설치 지침](https://www.haproxy.com/documentation/kubernetes-ingress/community/installation/)을 참조하십시오.

##### Mxpc-cli 도구에서 HAProxy Ingress 구성

Mendix on Kubernetes용 HAProxy Ingress를 구성하려면 다음 설정을 구성하십시오:

* **Ingress Type** - **kubernetes-ingress**를 선택하십시오. 이 옵션은 제공하는 추가 도메인 이름에 따라 Ingress를 구성합니다.
* **Ingress Domain Name** - Ingress 리소스 파일에 설정할 도메인 이름을 제공하십시오.
* **Ingress Path** - 드롭다운에서 `/`를 선택하십시오.
* **Enable TLS** - 앱의 Ingress에 대해 TLS를 활성화 또는 비활성화하십시오.
* **Custom Ingress Class** - **enabled**로 설정하십시오.
* **Ingress Class Name** - **haproxy**를 입력하십시오. 이 설정에는 Custom Ingress Class가 활성화되어 있어야 합니다.
* **Set Ingress Class as Annotation** - **disabled**로 설정하십시오. 이 옵션은 Ingress 클래스 이름을 사용하는 대신 레거시 `kubernetes.io/ingress.class` 어노테이션을 추가하여 Ingress 클래스를 설정합니다.

또한 구성의 **Ingress** 섹션에 HAProxy 전용 어노테이션을 추가할 수 있습니다. 다음 섹션은 예시 어노테이션을 보여줍니다. 특정 요구 사항에 따라 조정하십시오.

### AWS Load Balancer Ingress Controller

[AWS Load Balancer Controller](https://kubernetes-sigs.github.io/aws-load-balancer-controller/latest/)는 EKS에서 Ingress 기능을 제공하는 AWS 권장 방법입니다.

AWS Load Balancer Ingress Controller는 AWS Application Load Balancer(ALB) 또는 Network Load Balancer(NLB)와 통합하여 Ingress 기능을 제공합니다. AWS EKS용으로 특별히 설계되었지만 AWS에서 실행되는 모든 Kubernetes 클러스터에 구성할 수 있습니다.

{{% alert color="info" %}}
AWS Application Load Balancer Controller를 올바르게 구성하려면 OperatorConfiguration 객체를 수동으로 수정해야 합니다.

또한 ALB는 특정 기능(예: HTTP 헤더 추가 또는 수정)을 지원하지 않습니다. 이를 구현하려면 AWS Load Balancer 앞에 [Amazon CloudFront](https://aws.amazon.com/cloudfront/)를 구현해야 합니다.
{{% /alert %}}

#### AWS Load Balancer Ingress Controller 설치

AWS Load Balancer Ingress Controller는 EKS 클러스터에 배포되어야 하며 서로 다른 가용 영역의 최소 두 개의 서브넷이 필요합니다(자세한 내용은 여기를 참조하십시오). 자세한 내용은 [Route application and HTTP traffic with Application Load Balancers](https://docs.aws.amazon.com/eks/latest/userguide/alb-ingress.html#_prerequisites)를 참조하십시오.

권장 설치 프로세스에 대한 자세한 내용은 [Install AWS Load Balancer Controller with Helm](https://docs.aws.amazon.com/eks/latest/userguide/lbc-helm.html)을 참조하십시오.

##### Mxpc-cli 도구에서 AWS Load Balancer 구성

Mendix on Kubernetes용 AWS Load Balancer를 구성하려면 다음 단계를 수행하십시오:

1. 다음 설정을 구성하십시오:

    * **Ingress Type** - **kubernetes-ingress**를 선택하십시오. 이 옵션은 제공하는 추가 도메인 이름에 따라 Ingress를 구성합니다.
    * **Ingress Domain Name** - AWS Load Balancer에 등록된 도메인 이름을 제공하십시오.
    * **Ingress Path** - `/*`로 설정하십시오.
    * **Enable TLS** - **disabled**로 설정하십시오. AWS Load Balancer에서 TLS는 어노테이션을 통해 활성화됩니다.
    * **Custom Ingress Class** - **enabled**로 설정하십시오.
    * **Ingress Class Name** - **alb**를 입력하십시오. 이 설정에는 Custom Ingress Class가 활성화되어 있어야 합니다.
    * **Set Ingress Class as Annotation** - **disabled**로 설정하십시오. 이 옵션은 Ingress 클래스 이름을 사용하는 대신 레거시 `kubernetes.io/ingress.class` 어노테이션을 추가하여 Ingress 클래스를 설정합니다.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/private-cloud-networking/configure-alb.png" class="no-border" >}}

2. 다음 옵션 중 하나를 선택하여 Operator 구성을 업데이트하십시오:

    * 특정 앱 환경의 설정을 업데이트하려면 Mendix Platform GUI를 사용하십시오:

        1. **Global Navigation** 상단 바에서 **Deployment** > **Mendix on Kubernetes**를 클릭하십시오.
        2. 클러스터와 네임스페이스를 선택하십시오.
        3. **Apps** 섹션에서 **Configure App** 아이콘을 클릭하십시오.

    * 특정 네임스페이스에 호스팅된 모든 앱의 설정을 업데이트하려면 Kubectl 명령줄 도구를 사용하여 네임스페이스 수준에서 OperatorConfiguration 객체를 직접 편집하십시오.

3. 구성의 **Ingress** 섹션에 ALB 전용 어노테이션을 추가하십시오. 다음 섹션은 예시 어노테이션을 보여줍니다. 특정 요구 사항에 따라 조정하십시오.

    ```text
    apiVersion: privatecloud.mendix.com/v1alpha1
    kind: OperatorConfiguration
    # ...
    # omitted lines for brevity
    # ...
    spec:
      # Endpoint (Network) configuration
      endpoint:
        type: ingress
        ingress:
          annotations:
            # Allow access from the public internet
            alb.ingress.kubernetes.io/scheme: internet-facing
            # 'ip' mode will route traffic directly to the pod IP
            alb.ingress.kubernetes.io/target-type: ip
            # List all subnets which the EKS cluster is attached to
            alb.ingress.kubernetes.io/subnets: subnet-value1, subnet-value2
            # To enable TLS, specify the certificate ARN here
            alb.ingress.kubernetes.io/certificate-arn: arn:aws:acm:eu-west-1:1111111111:certificate/111aaaaa-1111-1aa1-11a1-111aaaa1b1a1
            # Add this to automatically redirect HTTP traffic to HTTPS
            alb.ingress.kubernetes.io/ssl-redirect: "443"
            # Listen on standard HTTP and HTTPS ports
            alb.ingress.kubernetes.io/listen-ports: '[{"HTTP": 80}, {"HTTPS": 443}]'
          # The following parameters are already configured by mxpc-cli
          domain: mendix.example.com
          enableTLS: false
          ingressClassName: alb
          path: "/*"
          pathType: ImplementationSpecific
    # ...
    # omitted lines for brevity
    # ...
    ```

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/private-cloud-networking/alb-annotations.png" class="no-border" >}}

자세한 내용은 [Ingress annotations](https://kubernetes-sigs.github.io/aws-load-balancer-controller/latest/guide/ingress/annotations/)를 참조하십시오.

### Azure Application Gateway Ingress Controller (AGIC)

Azure Application Gateway Ingress Controller(AGIC)는 Azure Kubernetes Service(AKS)용 특수 Ingress Controller로, Azure Application Gateway(Layer-7 로드 밸런서)를 사용하여 HTTP 및 HTTPS 트래픽을 관리합니다. Kubernetes 리소스를 지속적으로 모니터링하고 선택한 서비스를 인터넷에 노출하도록 Application Gateway를 업데이트합니다. AKS 클러스터 내에서 Pod로 실행되는 AGIC는 클러스터의 상태를 Application Gateway 구성으로 변환하고 Azure Resource Manager(ARM)를 사용하여 이를 적용하여 원활한 Azure 네이티브 Ingress 관리를 제공합니다.

{{% alert color="info" %}}
Azure Application Gateway Ingress Controller(AGIC)를 올바르게 구성하려면 OperatorConfiguration 객체를 수동으로 수정해야 합니다.
{{% /alert %}}

#### AGIC 설치

AKS Application Gateway Ingress Controller 설치에 대한 자세한 내용은 [Enable the AGIC add-on in existing AKS cluster through Azure CLI](https://learn.microsoft.com/en-us/azure/application-gateway/tutorial-ingress-controller-add-on-existing#enable-the-agic-add-on-in-existing-aks-cluster-through-azure-cli)를 참조하십시오.

{{% alert color="info" %}}
Azure Gateway Ingress Controller는 라우팅 테이블에서 Pod를 제거하는 데 최대 90초가 필요합니다. 앱 Pod를 즉시 중지하면 몇 분 동안 트래픽이 해당 Pod로 계속 전송되어 클라이언트 웹 브라우저에 임의의 502 오류가 나타날 수 있습니다. 따라서 OperatorConfiguration CR에 `runtimeTerminationDelaySeconds` 값을 추가하는 것이 좋습니다.
{{% /alert %}}

#### Mxpc-cli 도구에서 AGIC 구성

Mendix on Kubernetes용 AGIC를 구성하려면 다음 단계를 수행하십시오:

1. 다음 설정을 구성하십시오:

    * **Ingress Type** - **kubernetes-ingress**를 선택하십시오. 이 옵션은 제공하는 추가 도메인 이름에 따라 Ingress를 구성합니다.
    * **Ingress Domain Name** - AGIC에 등록된 도메인 이름을 제공하십시오.
    * **Ingress Path** - `/*`로 설정하십시오.
    * **Enable TLS** - 앱의 Ingress에 대해 TLS를 활성화 또는 비활성화하십시오.
    * **Custom Ingress Class** - **enabled**로 설정하십시오.
    * **Ingress Class Name** - **azure/application-gateway**를 입력하십시오. 이 설정에는 Custom Ingress Class가 활성화되어 있어야 합니다.
    * **Set Ingress Class as Annotation** - **disabled**로 설정하십시오. 이 옵션은 Ingress 클래스 이름을 사용하는 대신 레거시 `kubernetes.io/ingress.class` 어노테이션을 추가하여 Ingress 클래스를 설정합니다.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/private-cloud-networking/configure-agis.png" class="no-border" >}}

2. 다음 옵션 중 하나를 선택하여 Operator 구성을 업데이트하십시오:

    * 특정 앱 환경의 설정을 업데이트하려면 Mendix Platform GUI를 사용하십시오:

        1. **Global Navigation** 상단 바에서 **Deployment** > **Mendix on Kubernetes**를 클릭하십시오.
        2. 클러스터와 네임스페이스를 선택하십시오.
        3. **Apps** 섹션에서 **Configure App** 아이콘을 클릭하십시오.

    * 특정 네임스페이스에 호스팅된 모든 앱의 설정을 업데이트하려면 Kubectl 명령줄 도구를 사용하여 네임스페이스 수준에서 OperatorConfiguration 객체를 직접 편집하십시오.

3. 구성의 **Ingress** 섹션에 AGIC 전용 어노테이션을 추가하십시오. 다음 섹션은 예시 어노테이션을 보여줍니다. 특정 요구 사항에 따라 조정하십시오.

    ```text
    apiVersion: privatecloud.mendix.com/v1alpha1
    kind: OperatorConfiguration
    # ...
    # omitted lines for brevity
    # ...
    spec:
      # Endpoint (Network) configuration
      endpoint:
        type: ingress
        ingress:
          annotations:
            # Specify the name of a Listener TLS Certificate to use
            appgw.ingress.kubernetes.io/appgw-ssl-certificate: agic-tls
            # Add this to automatically redirect HTTP traffic to HTTPS
            appgw.ingress.kubernetes.io/ssl-redirect: true
            # Ingress class, this is automatically set by mxpc-cli
            kubernetes.io/ingress.class: azure/application-gateway
          # The following parameters are already configured by mxpc-cli
          domain: mendix.example.com
          enableTLS: true
          path: "/"
          pathType: ImplementationSpecific
    # ...
    # omitted lines for brevity
    # ...
    ```

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/private-cloud-networking/agis-annotations.png" class="no-border" >}}

4. 선택 사항: TLS 인증서를 설정하려면 [Appgw ssl certificate](https://azure.github.io/application-gateway-kubernetes-ingress/features/appgw-ssl-certificate/)를 참조하십시오.

### Traefik Ingress Controller

Traefik은 클라우드 네이티브 리버스 프록시이자 로드 밸런서입니다. Kubernetes에서 Ingress Controller로 배포되면 클러스터 내에서 실행되는 서비스로의 HTTP 및 HTTPS 트래픽을 관리합니다. Kubernetes Ingress 리소스 및 기타 구성을 기반으로 Kubernetes의 네이티브 API를 사용하여 서비스를 자동으로 검색합니다. Traefik 사용의 주요 장점 중 하나는 내장 [Let's Encrypt](https://doc.traefik.io/traefik/https/acme/) 지원입니다.

#### Traefik 설치

Traefik Ingress Controller 설치에 대한 자세한 내용은 [Traefik & Kubernetes](https://doc.traefik.io/traefik/providers/kubernetes-ingress/)를 참조하십시오.

{{% alert color="info" %}}
Traefik은 CRD 또는 Kubernetes Ingress의 두 가지 유형의 프로바이더를 사용합니다. Mendix on Kubernetes에서 지원하는 유일한 프로바이더인 Kubernetes Ingress를 설치하십시오.
{{% /alert %}}

#### Mxpc-cli 도구에서 Traefik 구성

Mendix on Kubernetes용 Traefik을 구성하려면 다음 설정을 구성하십시오:

* **Ingress Type** - **kubernetes-ingress**를 선택하십시오. 이 옵션은 제공하는 추가 도메인 이름에 따라 Ingress를 구성합니다.
* **Ingress Domain Name** - Traefik에 등록된 도메인 이름을 제공하십시오.
* **Ingress Path** - `/*`로 설정하십시오.
* **Enable TLS** - 앱의 Ingress에 대해 TLS를 활성화 또는 비활성화하십시오.
* **Custom Ingress Class** - **enabled**로 설정하십시오.
* **Ingress Class Name** - **traefik**을 입력하십시오. 이 설정에는 Custom Ingress Class가 활성화되어 있어야 합니다.
* **Set Ingress Class as Annotation** - **disabled**로 설정하십시오. 이 옵션은 Ingress 클래스 이름을 사용하는 대신 레거시 `kubernetes.io/ingress.class` 어노테이션을 추가하여 Ingress 클래스를 설정합니다.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/private-cloud-networking/configure-traefik.png" class="no-border" >}}

### Istio Ingress Controller

Istio는 간단한 [Ingress Controller](https://istio.io/latest/docs/tasks/traffic-management/ingress/kubernetes-ingress/)를 포함하는 서비스 메시입니다.

#### Istio 설치

Istio를 설치하려면 [설치 지침](https://istio.io/latest/docs/overview/quickstart/)을 따르십시오.

[Istio IngressClass](https://istio.io/latest/docs/tasks/traffic-management/ingress/kubernetes-ingress/)도 함께 설치하십시오.

{{% alert color="info" %}}
Istio는 많은 구성 옵션이 있는 기능이 풍부한 시스템입니다. Istio 구성을 검증하려면 구성을 검증하기 위해 간단한(Mendix가 아닌) 앱으로 테스트하는 것을 강력히 권장합니다.
{{% /alert %}}

#### Mxpc-cli 도구에서 Istio 구성

Mendix on Kubernetes용 Istio를 구성하려면 다음 설정을 구성하십시오:

* **Ingress Type** - **kubernetes-ingress**를 선택하십시오. 이 옵션은 제공하는 추가 도메인 이름에 따라 Ingress를 구성합니다.
* **Ingress Domain Name** - Istio에 등록된 도메인 이름을 제공하십시오.
* **Ingress Path** - `/*`로 설정하십시오.
* **Enable TLS** - 앱의 Ingress에 대해 TLS를 활성화 또는 비활성화하십시오.
* **Custom Ingress Class** - **enabled**로 설정하십시오.
* **Ingress Class Name** - **istio**를 입력하십시오. 이 설정에는 **Custom Ingress Class**가 활성화되어 있어야 합니다.
* **Set Ingress Class as Annotation** - **disabled**로 설정하십시오. 이 옵션은 Ingress 클래스 이름을 사용하는 대신 레거시 `kubernetes.io/ingress.class` 어노테이션을 추가하여 Ingress 클래스를 설정합니다.

### NGINX Ingress Controller (지원 중단)

{{% alert color="warning" %}}
[Kubernetes Ingress NGINX Controller](https://kubernetes.github.io/ingress-nginx/)는 [2026년 3월까지](https://kubernetes.io/blog/2025/11/11/ingress-nginx-retirement/) 지원됩니다.

다른 Ingress Controller로 전환하는 것을 권장합니다. NGINX 프로젝트(F5 Networks)의 [NGINX Ingress Controller](https://github.com/nginx/kubernetes-ingress)는 유사한 기능 세트를 가지고 있습니다. 대부분의 경우 지원 중단된 Kubernetes 컨트롤러에서 F5 Networks의 컨트롤러로 전환하려면 Ingress 어노테이션의 이름만 바꾸면 됩니다.
{{% /alert %}}

{{% alert color="info" %}}
NGINX 경로 기반 라우팅은 Operator 버전 2.19.0 이상 및 Mendix 버전 10.3.0 이상에서 지원됩니다. 이 기능을 지원하기 위해 NGINX Ingress는 Ingress 경로에서 `(.*)` 정규식을 다시 작성하는 `nginx.ingress.kubernetes.io/rewrite-target=/$1` 어노테이션을 사용합니다.
{{% /alert %}}

##### Mxpc-cli 도구에서 NGINX 구성

지원 중단된 NGINX Ingress Controller를 Mendix on Kubernetes와 함께 구성하려면 다음 설정을 구성하십시오:

* **Ingress Type** - **kubernetes-ingress**를 선택하십시오. 이 옵션은 제공하는 추가 도메인 이름에 따라 Ingress를 구성합니다.
* **Ingress Domain Name** - Ingress 리소스 파일에 설정할 도메인 이름을 제공하십시오.
* **Ingress Path** - 선택 사항. 이 옵션을 사용하여 Ingress 경로를 지정할 수 있습니다. 기본값은 `/`입니다.
* **Enable TLS** - 앱의 Ingress에 대해 TLS를 활성화 또는 비활성화하십시오.
* **Custom Ingress Class** - **enabled**로 설정하십시오.
* **Ingress Class Name** - **nginx**를 입력하십시오. 이 설정에는 **Custom Ingress Class**가 활성화되어 있어야 합니다.
* **Set Ingress Class as Annotation** - **disabled**로 설정하십시오. 이 옵션은 Ingress 클래스 이름을 사용하는 대신 레거시 `kubernetes.io/ingress.class` 어노테이션을 추가하여 Ingress 클래스를 설정합니다.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/private-cloud-networking/configure-nginx.png" class="no-border" >}}
