---
title: "Advanced Ingress Settings in Mendix on Kubernetes"
linktitle: "Advanced Settings"
url: /developerportal/deploy/private-cloud-cluster/private-cloud-ingress-settings/advanced/
description: "Describes how to configure advanced Ingress settings."
weight: 40
---

## Introduction

The following sections describe various advanced use cases for Ingress configuration.

## Methods for Managing TLS Certificates

There are multiple ways to handle TLS certificates in a Mendix deployment.

### Default TLS Certificate for the Ingress Controller

The Ingress Controller can use a wildcard certificate (for example, `*.mendix.example.com`).

If the Ingress Controller supports [Let's Encrypt](https://doc.traefik.io/traefik/https/acme/), it can automatically request and manage TLS certificates.

### Using Cert-manager for Automated TLS Management

By adding Ingress annotations, cert-manager (or similar tools) can automatically request and manage TLS certificates.

Cert-manager generates TLS certificates and stores them as Kubernetes secrets for the Ingress Controller to use.

To implement this solution, specify a cert-manager.io/cluster-issuer annotation to choose which cluster issuer will be used to maintain certificates, and set up the OperatorConfiguration as in the following example:

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

### Using Linkerd Service Mesh for TLS Management

Starting from Mendix Operator v1.11.0, Linkerd Service Mesh can be used to manage and secure HTTPS TLS traffic between the Ingress Controller and the Mendix app's pod. Linkerd can also re-encrypt traffic for enhanced security within the cluster.

### Providing a TLS Certificate Secret Per Environment

In Standalone Mendix Operator installations, it is possible to provide a custom TLS configuration for individual environments, overriding the default settings. 

In this way, you can configure the following settings:

* Enable or disable TLS.
* Specify the name of an existing TLS certificate secret.
* Provide TLS Certificate and Private Key values directly in the environment specification.

## Configuring HTTP Headers

You can configure HTTP headers for NGINX Ingress and for Mendix Runtime. For more information, refer to the following sections.

### Configuring Headers in NGINX Ingress

For NGINX Ingress, you can use a configuration snippet in the `OperatorConfiguration` object to set headers in a namespace. The headers that you set are then further propagated across all apps in that namespace. Alternatively, you can configure headers for individual app environments by adding the `nginx.ingress.kubernetes.io/configuration-snippet` annotation in the Mendix on Kubernetes Portal.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/private-cloud-networking/advanced-headers.png" class="no-border" >}}

Mendix only supports unencrypted HTTP between the Ingress controller and the app. However, there is no higher level of security with service-to-service encryption and policy controls. In such situations, integrating Ingress controllers with Istio Service Mesh or Linkerd can help you manage both external traffic entering your Kubernetes cluster (by using an Ingress Controller) and internal traffic between services (by using Istio or Linkerd).

Istio Service Mesh and Linkerd help manage service-to-service communication within a Kubernetes cluster. It provides the following features:

* Traffic management (for example, canary releases)
* Service discovery
* Load balancing
* Security (for example, mutual TLS)
* Observability (for example, metrics and tracing)

In an Istio- or Linkerd-enabled Kubernetes cluster, an Ingress controller can be used as the external entry point for HTTP and HTTPS traffic. Once the traffic reaches the Ingress controller, it can be forwarded to the Istio Ingress Gateway, which acts as the entry into the Istio Service Mesh. In case of Linkerd, if Linkerd is enabled, each service is sidecar-injected with a Linkerd proxy (a lightweight data plane proxy running alongside the application container in the pod).

{{% alert color="info" %}}
AWS Application Load Balancer and Azure Application Gateway Ingress Controller only work with Istio.
{{% /alert %}}

### Configuring Headers in the Mendix Runtime

Starting from Mendix 10.24.1, the Mendix Runtime can set headers natively, without relying on an external Ingress controller.

This allows specifying security headers such as `Content-Security-Policy` with any Ingress controller, not just NGINX Ingress.

To set headers, use the [Headers](/refguide/custom-settings/#Headers) Custom Runtime Setting on the [Runtime Tab](/developerportal/deploy/private-cloud-deploy/#runtime-tab) (for Connected environments) or in the [.spec.runtime.customConfiguration field](/developerportal/deploy/private-cloud-operator/#edit-cr) in the MendixApp CR.

The `Headers` Custom Runtime Setting accepts a JSON map where the keys are header names and values are header values.

The `Content-Security-Policy` header supports [additional custom handling](/refguide/configuration/#headers) to process `nonce` values.

The following is an example value of the `Headers` Custom Runtime Setting that can be used how to specify a few typical security headers:

```json
{
    "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
    "X-Frame-Options": "SAMEORIGIN",
    "Content-Security-Policy": "script-src 'nonce-{{ NONCE }}'"
}
```

## Istio Service Mesh Integration with Ingress Controller

To integrate the Istio Service Mesh with an Ingress Controller, perform the following steps:

1. Install Istio as described in [Install with Helm](https://istio.io/latest/docs/setup/install/helm/).
2. After the installation is done, enable Istio Ingress for the namespace where application is deployed.

    ```text
    kubectl label namespace <name> istio-injection=enabled --overwrite
    ```

3. After the Service mesh is installed, deploy the Ingress Controller of your choice.
4. Deploy the Istio Ingress Gateway. 

    The Istio Ingress Gateway handles incoming traffic and applies service mesh rules. You can enable the gateway by default during installation, or deploy it separately.

5. Configure the Ingress Controller to forward to the Istio Ingress Gateway.
6. In Istio, configure a [Gateway](https://istio.io/latest/docs/reference/config/networking/gateway/) resource to allow traffic through the ingress gateway.
7. Define a [VirtualService](https://istio.io/latest/docs/reference/config/networking/virtual-service/) to route traffic from the gateway to a service in the mesh.


To configure the Istio Service Mesh for Mendix on Kubernetes, set up the following settings:

* **Ingress Type** - Select **kubernetes-ingress**; this option configures the Ingress according to the additional domain name you supply. 
* **Ingress Domain Name** - Provide the domain name which was configured for Istio.
* **Ingress Path** - Set to `/*`. 
* **Enable TLS** - Enable or disable TLS for your app's Ingress.
* **Custom Ingress Class** - Set to **enabled**.
* **Ingress Class Name** - Enter **istio**. This setting requires Custom Ingress Class to be enabled.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/private-cloud-networking/advanced-istio.png" class="no-border" >}}

## Installing Linkerd

To install Linkerd, perform the following steps:

1. Install Linkerd as described in [Getting Started](https://linkerd.io/2.17/getting-started/).
2. Exclude the NGINX Ingress Controller namespace from Linkerd injection by labeling it in the following way:

    ```text
    kubectl label namespace ingress-nginx linkerd.io/inject=disabled
    ```

3. Annotate the namespace where your application is deployed with the following command:

    ```text
    kubectl annotate {namespace} linkerd.io/inject=enabled
    ```

### Configuring Linkerd Ingress in the Mxpc-cli Tool

To configure Linkerd for Mendix on Kubernetes, set up the following settings:

* **Ingress Type** - Select **kubernetes-ingress**; this option configures the Ingress according to the additional domain name you supply. 
* **Ingress Domain Name** - Provide the domain name which was configured for Linkerd.
* **Ingress Path** - Set to `/`. 
* **Enable TLS** - Enable or disable TLS for your app's Ingress.
* **Custom Ingress Class** - Set to **enabled**.
* **Ingress Class Name** - Enter **nginx**. This setting requires Custom Ingress Class to be enabled.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/private-cloud-networking/advanced-linkerd.png" class="no-border" >}}
