---
title: "Ingress Controllers in Mendix on Kubernetes"
linktitle: "Ingress Controllers"
url: /developerportal/deploy/private-cloud-cluster/private-cloud-ingress-settings/controllers/
description: "Describes how to configure various ingress controllers for Mendix on Kubernetes."
weight: 10
---

## Introduction

Ingress is a Kubernetes resource that defines rules for routing external HTTP and HTTPS traffic to services within a cluster. Instead of exposing services individually using load balancers or NodePorts, Ingress provides a centralized way to manage external access efficiently.

## What is Kubernetes Ingress?

In a Mendix environment, the Mendix Operator automatically creates both the Service and Ingress resources based on the app environment's configuration. The Service defines how traffic is routed to application pods within the cluster, while the Ingress manages external access.

However, an Ingress resource alone is just a set of rules - it requires an Ingress Controller (for example, NGINX) to function. The Ingress Controller continuously monitors Ingress resources and updates the underlying reverse proxy to enforce the specified routing rules.

For each app environment, the URL is automatically generated based on the domain name. For example, if the domain name is set to `mendix.example.com`, the apps have URLs such as `myapp1-dev.mendix.example.com`, `myapp1-prod.mendix.example.com`, and so on.

To ensure proper routing, the DNS server must be configured to direct all subdomains (`*.mendix.example.com`) to the Ingress Controller or Load Balancer. This option is easy to configure, and adding new apps or changing domain names works instantly. Alternatively, you can manage DNS records with Kubernetes External DNS.

## Basic Installation and Configuration

The following sections describe the installation and configuration of various supported Ingress Controllers.

### NGINX Ingress Controller (F5)

{{% alert color="info" %}}
This section documents how to use the [NGINX Ingress Controller](https://github.com/nginx/kubernetes-ingress) from the NGINX project (F5 Networks).
{{% /alert %}}

{{% alert color="info" %}}
NGINX path based routing is supported for Operator version 2.19.0 and newer, and Mendix version 10.3.0 and newer. To support this feature, NGINX Ingress uses `nginx.org/rewrite-target=/$1` annotation that rewrites a `(.*)` regular expresion in the ingress path.
{{% /alert %}}

#### Installing NGINX Ingress Controller

The recommended way to install NGINX is [Helm](https://docs.nginx.com/nginx-ingress-controller/installation/installing-nic/installation-with-helm/).

Some cloud providers might offer NGINX Ingress as a managed service.

##### Configuring NGINX Ingress in the Mxpc-cli Tool

To configure NGINX for Mendix on Kubernetes, set up the following settings:

* **Ingress Type** - Select **kubernetes-ingress**; this option configures the Ingress according to the additional domain name you supply.
* **Ingress Domain Name** - Provide the domain name which you want to set for the Ingress resource file.
* **Ingress Path** - Optional. You can use this option to specify the Ingress path. The default value is `/`.
* **Enable TLS** - Enable or disable TLS for your app's Ingress.
* **Custom Ingress Class** - Set to **enabled**.
* **Ingress Class Name** - Enter **nginx**. This setting requires Custom Ingress Class to be enabled.
* **Set Ingress Class as Annotation** - Set to **disabled**. This option adds the legacy `kubernetes.io/ingress.class` annotation to set the Ingress class, instead of using the Ingress class name.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/private-cloud-networking/configure-nginx.png" class="no-border" >}}

Additionally, you can add NGINX-specific annotations to the **Ingress** section of your configuration. The following section shows example annotations. Adjust them as needed based on your specific requirements.

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
This section documents how to use the [HAProxy Kubernetes Ingress Controller](https://github.com/haproxytech/kubernetes-ingress).
{{% /alert %}}

#### Installing HAProxy Ingress Controller

For more information about the recommended installation process, see [installation instructions for your platform](https://www.haproxy.com/documentation/kubernetes-ingress/community/installation/).

##### Configuring HAProxy Ingress in the Mxpc-cli Tool

To configure HAProxy Ingress for Mendix on Kubernetes, set up the following settings:

* **Ingress Type** - Select **kubernetes-ingress**; this option configures the Ingress according to the additional domain name you supply.
* **Ingress Domain Name** - Provide the domain name which you want to set for the Ingress resource file.
* **Ingress Path** - Select `/` from the dropdown.
* **Enable TLS** - Enable or disable TLS for your app's Ingress.
* **Custom Ingress Class** - Set to **enabled**.
* **Ingress Class Name** - Enter **haproxy**. This setting requires Custom Ingress Class to be enabled.
* **Set Ingress Class as Annotation** - Set to **disabled**. This option adds the legacy `kubernetes.io/ingress.class` annotation to set the Ingress class, instead of using the Ingress class name.

Additionally, you can add HAProxy-specific annotations to the **Ingress** section of your configuration. The following section shows example annotations. Adjust them as needed based on your specific requirements.

### AWS Load Balancer Ingress Controller

[AWS Load Balancer Controller](https://kubernetes-sigs.github.io/aws-load-balancer-controller/latest/) is the AWS-recommended way to provide ingress capability on EKS.

The AWS Load Balancer Ingress Controller integrates with AWS Application Load Balancer (ALB) or Network Load Balancer (NLB) to provide ingress capabilities. It is designed specifically for AWS EKS but can be configured for any Kubernetes cluster running in AWS. 

{{% alert color="info" %}}
To properly configure the AWS Application Load Balancer Controller, you must manually modify the OperatorConfiguration object.

In addition, ALB does not support certain functionalities (such as adding or modifying HTTP headers). To implement them, you must implement [Amazon CloudFront](https://aws.amazon.com/cloudfront/) in front of AWS Load Balancer.
{{% /alert %}}

#### Installing AWS Load Balancer Ingress Controller

AWS Load Balancer Ingress Controller must be deployed on your EKS cluster and at least two subnets in different Availability Zones (more details here). For more information, see [Route application and HTTP traffic with Application Load Balancers](https://docs.aws.amazon.com/eks/latest/userguide/alb-ingress.html#_prerequisites). 

For more information about the recommended installation process, see [Install AWS Load Balancer Controller with Helm](https://docs.aws.amazon.com/eks/latest/userguide/lbc-helm.html).

##### Configuring AWS Load Balancer in the Mxpc-cli Tool

To configure the AWS Load Balancer for Mendix on Kubernetes, perform the following steps:

1. Set up the following settings:

    * **Ingress Type** - Select **kubernetes-ingress**; this option configures the Ingress according to the additional domain name you supply.
    * **Ingress Domain Name** - Provide the domain name which which was registered for AWS Load Balancer.
    * **Ingress Path** - Set to `/*`. 
    * **Enable TLS** -  Set to **disabled**. In AWS Load Balancer, TLS is enabled through annotations.
    * **Custom Ingress Class** - Set to **enabled**.
    * **Ingress Class Name** - Enter **alb**. This setting requires Custom Ingress Class to be enabled.
    * **Set Ingress Class as Annotation** - Set to **disabled**. This option adds the legacy `kubernetes.io/ingress.class` annotation to set the Ingress class, instead of using the Ingress class name.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/private-cloud-networking/configure-alb.png" class="no-border" >}}

2. Update the Operator configuration by choosing one of the following options:

    * To update the settings for a specific app environment, use the Mendix Platform GUI:

        1. In the **Global Navigation** top bar, click **Deployment** > **Mendix on Kubernetes**.
        2. Select your cluster and namespace.
        3. In the **Apps** section, click the **Configure App** icon.

    * To update the settings for all apps hosted within a specific namespace, directly edit the OperatorConfiguration object using the Kubectl command-line tool at the namespace level.

3. Add ALB-specific annotations to the **Ingress** section of your configuration. The following section shows example annotations. Adjust them as needed based on your specific requirements.

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

For more details, see [Ingress annotations](https://kubernetes-sigs.github.io/aws-load-balancer-controller/latest/guide/ingress/annotations/).

### Azure Application Gateway Ingress Controller (AGIC)

The Azure Application Gateway Ingress Controller (AGIC) is a specialized ingress controller for Azure Kubernetes Service (AKS) that uses Azure Application Gateway (a Layer-7 load balancer) to manage HTTP and HTTPS traffic. It continuously monitors Kubernetes resources and updates the Application Gateway to expose selected services to the Internet. Running as a pod within the AKS cluster, AGIC translates the cluster's state into Application Gateway configurations and applies them by using Azure Resource Manager (ARM), providing seamless Azure-native ingress management.

{{% alert color="info" %}}
To properly configure the Azure Application Gateway Ingress Controller (AGIC), you must manually modify the OperatorConfiguration object.
{{% /alert %}}

#### Installing AGIC

For information about installing the AKS Application Gateway Ingress Controller, see [Enable the AGIC add-on in existing AKS cluster through Azure CLI](https://learn.microsoft.com/en-us/azure/application-gateway/tutorial-ingress-controller-add-on-existing#enable-the-agic-add-on-in-existing-aks-cluster-through-azure-cli).

{{% alert color="info" %}}
Azure Gateway Ingress Controller needs up to 90 seconds to remove a pod from its routing table. Stopping an app pod immediately would still send traffic to the pod for a few minutes, causing random 502 errors to appear in the client web browser. Because of that, it is recommended to add the `runtimeTerminationDelaySeconds` value to the OperatorConfiguration CR.
{{% /alert %}}

#### Configuring AGIC in the Mxpc-cli Tool

To configure AGIC for Mendix on Kubernetes, perform the following steps:

1. Set up the following settings:

    * **Ingress Type** - Select **kubernetes-ingress**; this option configures the Ingress according to the additional domain name you supply.
    * **Ingress Domain Name** - Provide the domain name which which was registered for AGIS.
    * **Ingress Path** - Set to `/*`. 
    * **Enable TLS** -  Enable or disable TLS for your app's Ingress.
    * **Custom Ingress Class** - Set to **enabled**.
    * **Ingress Class Name** - Enter **azure/application-gateway**. This setting requires Custom Ingress Class to be enabled.
    * **Set Ingress Class as Annotation** - Set to **disabled**. This option adds the legacy `kubernetes.io/ingress.class` annotation to set the Ingress class, instead of using the Ingress class name.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/private-cloud-networking/configure-agis.png" class="no-border" >}}

2. Update the Operator configuration by choosing one of the following options:

    * To update the settings for a specific app environment, use the Mendix Platform GUI:

        1. In the **Global Navigation** top bar, click **Deployment** > **Mendix on Kubernetes**.
        2. Select your cluster and namespace.
        3. In the **Apps** section, click the **Configure App** icon.

    * To update the settings for all apps hosted within a specific namespace, directly edit the OperatorConfiguration object using the Kubectl command-line tool at the namespace level.

3. Add AGIC-specific annotations to the **Ingress** section of your configuration. The following section shows example annotations. Adjust them as needed based on your specific requirements.

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

4. Optional: To set up TLS certificates, see [Appgw ssl certificate](https://azure.github.io/application-gateway-kubernetes-ingress/features/appgw-ssl-certificate/).

### Traefik Ingress Controller

Traefik is a cloud-native reverse proxy and a load balancer. When deployed as an Ingress Controller in Kubernetes, it manages HTTP and HTTPS traffic to services running within the cluster. It automatically discovers services using Kubernetes' native APIs, based on Kubernetes Ingress resources and other configurations. One of the main advantages of using Traefik is its built-in [Let's Encrypt](https://doc.traefik.io/traefik/https/acme/) support.

#### Installing Traefik

For information about installing the Traefik Ingress Controller, see [Traefik & Kubernetes](https://doc.traefik.io/traefik/providers/kubernetes-ingress/).

{{% alert color="info" %}}
Traefik uses 2 types of providers: CRDs or Kubernetes Ingress. Ensure that you install Kubernetes Ingress one, as it is the only one supported by Mendix on Kubernetes.
{{% /alert %}}

#### Configuring Traefik in the Mxpc-cli Tool

To configure Traefik for Mendix on Kubernetes, set up the following settings:

* **Ingress Type** - Select **kubernetes-ingress**; this option configures the Ingress according to the additional domain name you supply.
* **Ingress Domain Name** - Provide the domain name which was registered for Traefik
* **Ingress Path** - Set to `/*`.
* **Enable TLS** - Enable or disable TLS for your app's Ingress.
* **Custom Ingress Class** - Set to **enabled**.
* **Ingress Class Name** - Enter **traefik**. This setting requires Custom Ingress Class to be enabled.
* **Set Ingress Class as Annotation** - Set to **disabled**. This option adds the legacy `kubernetes.io/ingress.class` annotation to set the Ingress class, instead of using the Ingress class name.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/private-cloud-networking/configure-traefik.png" class="no-border" >}}

### Istio Ingress Controller

Istio is a service mesh that includes a simple [ingress contoller](https://istio.io/latest/docs/tasks/traffic-management/ingress/kubernetes-ingress/).

#### Installing Istio

To install Istio, follow the [installation instructions](https://istio.io/latest/docs/overview/quickstart/).

Ensure that you also install an [Istio IngressClass](https://istio.io/latest/docs/tasks/traffic-management/ingress/kubernetes-ingress/).

{{% alert color="info" %}}
Istio is a feature-rich system with many configuration options. To validate an Istio configuration, it is highly recommended to test with a simple (non-Mendix) app to validate configuration.
{{% /alert %}}

#### Configuring Istio in the Mxpc-cli Tool

To configure Istio for Mendix on Kubernetes, configure the following settings:

* **Ingress Type** - Select **kubernetes-ingress**; this option configures the Ingress according to the additional domain name you supply.
* **Ingress Domain Name** - Provide the domain name which was registered for Istio
* **Ingress Path** - Set to `/*`.
* **Enable TLS** - Enable or disable TLS for your app's Ingress.
* **Custom Ingress Class** - Set to **enabled**.
* **Ingress Class Name** - Enter **istio**. This setting requires **Custom Ingress Class** to be enabled.
* **Set Ingress Class as Annotation** - Set to **disabled**. This option adds the legacy `kubernetes.io/ingress.class` annotation to set the Ingress class, instead of using the Ingress class name.

### NGINX Ingress Controller (Deprecated)

{{% alert color="warning" %}}
The [Kubernetes Ingress NGINX Controller](https://kubernetes.github.io/ingress-nginx/) will be supported [until March 2026](https://kubernetes.io/blog/2025/11/11/ingress-nginx-retirement/).

We recommend switching to another Ingress controller. The [NGINX Ingress Controller](https://github.com/nginx/kubernetes-ingress) from the NGINX project (F5 Networks) has a similar feature set. In most cases, switching from the deprecated Kubernetes controller to controller from F5 Networks only requires renaming Ingress annotations.
{{% /alert %}}

{{% alert color="info" %}}
NGINX path based routing is supported for Operator version 2.19.0 and newer, and Mendix version 10.3.0 and newer. To support this feature, NGINX Ingress uses `nginx.ingress.kubernetes.io/rewrite-target=/$1` annotation that rewrites a `(.*)` regular expresion in the ingress path.
{{% /alert %}}

##### Configuring the NGINX in the Mxpc-cli Tool

To configure the deprecated NGINX ingress controller with Mendix on Kubernetes, set up the following settings:

* **Ingress Type** - Select **kubernetes-ingress**; this option configures the Ingress according to the additional domain name you supply.
* **Ingress Domain Name** - Provide the domain name which you want to set for the Ingress resource file.
* **Ingress Path** - Optional. You can use this option to specify the Ingress path. The default value is `/`.
* **Enable TLS** - Enable or disable TLS for your app's Ingress.
* **Custom Ingress Class** - Set to **enabled**.
* **Ingress Class Name** - Enter **nginx**. This setting requires **Custom Ingress Class** to be enabled.
* **Set Ingress Class as Annotation** - Set to **disabled**. This option adds the legacy `kubernetes.io/ingress.class` annotation to set the Ingress class, instead of using the Ingress class name.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/private-cloud-networking/configure-nginx.png" class="no-border" >}}
