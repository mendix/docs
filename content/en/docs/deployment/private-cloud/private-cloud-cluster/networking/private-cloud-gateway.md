---
title: "Gateway Routes in Mendix on Kubernetes"
linktitle: "Gateway Routes"
url: /developerportal/deploy/private-cloud-cluster/private-cloud-ingress-settings/gateway-route/
description: "Describes how to configure Gateway HTTPRoutes for Mendix on Kubernetes."
weight: 20
---

## Introduction

Gateway API is the successor to the Ingress API. Gateway API splits configuration across different roles:

* Cluster operators manage **Gateway** resources, configuring central rules and policies such as TLS and IP filtering.
* Application developers manage **HTTPRoute** resources, specifying configuration relevant for a specific destination, such as a Mendix app environment.

{{% alert color="info" %}}
Gateway API is supported by Mendix Operator version 2.27.0 and newer.
{{% /alert %}}

## What is Kubernetes Gateway?

In a Mendix environment, the Mendix Operator automatically creates both the Service and HTTPRoute resources based on the app environment's configuration. The Service defines how traffic is routed to application pods within the cluster, while the HTTPRoute links the app to a specific Gateway and configures relevant HTTP options.

The Gateway resource, and the Gateway controller (implementation) must be created and configured by the cluster admin. The Mendix Operator manages HTTPRoute resources and links them to a Gateway resource through the `parentRefs` field.

For each app environment, the URL is automatically generated based on the domain name. For example, if the domain name is set to `mendix.example.com`, the apps have URLs such as `myapp1-dev.mendix.example.com`, `myapp1-prod.mendix.example.com`, and so on.

To ensure proper routing, the DNS server must be configured to direct all subdomains (`*.mendix.example.com`) to the Gateway or Load Balancer. This option is easy to configure, and adding new apps or changing domain names works instantly. Alternatively, you can manage DNS records with Kubernetes External DNS.

## Basic Installation and Configuration

Refer to the installation and configuration guide of your Gateway implementation. Any Gateway [implementation](https://gateway-api.sigs.k8s.io/docs/implementations/list/) that supports HTTPRoute resources and Gateway API v1.4 should be compatible with the Mendix Operator.

### Configuring Gateway HTTPRoute in the Mxpc-cli Tool

To use the Gateway and configure how Mendix on Kubernetes should use HTTPRoutes, configure the following settings:

* **Enable TLS** - Enable if the Gateway supports TLS. This will use `https://` in the AppURL by default. TLS options such as HTTP-to-HTTPS redirection, HSTS and certificates must be configured on the Gateway level.
* **Domain** - Provide the default domain name which you want to use for new apps. For existing apps, the domain name and HTTP path can be configured on a per-app basis.
* In the **Gateway Route Parent Reference**, specify settings for the HTTPRoute's [parentRefs](https://gateway-api.sigs.k8s.io/reference/api-spec/1.4/spec/#parentreference). This is usually a Gateway resource configured by a cluster admin.

    * **Group** - Specifies the ParentReference `group` value (usually `gateway.networking.k8s.io`).
    * **Kind** - Specifies the ParentReference `kind` value (usually `Gateway`).
    * **Name** and **Namespace** - Specify the existing ParentReference's Kubernetes name and namespace.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/private-cloud-networking/configure-gateway-route.png" class="no-border" >}}

#### Additional Settings

You can configure additional settings in the **gatewayRoute** section of your OperatorConfiguration. The following section shows an example configuration. Adjust them as needed based on your specific requirements.

```text
apiVersion: privatecloud.mendix.com/v1alpha1
kind: OperatorConfiguration
# ...
# omitted lines for brevity
# ...
spec:
  # Endpoint (Network) configuration
  endpoint:
    type: gatewayRoute
    gatewayRoute:
      # The following parameters are already configured by mxpc-cli
      domain: mendix.example.com
      enableTLS: true
      gatewayParentReference:
        group: gateway.networking.k8s.io
        kind: Gateway
        name: example-gateway
        namespace: kube-ingress
      # Additional configuration
      # Modify response headers
      gatewayRouteResponseHeaderModifiers:
        # Specify configuration for a Gateway ResponseHeaderModifier
        # For more detauls, see https://gateway-api.sigs.k8s.io/guides/user-guides/http-header-modifier/#http-response-header-modifier
        add:
          # Add the following headers to all requests
          "X-response-header-1": "example-value-1"
          "X-response-header-2": "example-value-2"
        set:
          # Set the following headers to in all requests (overwriting existing values if present)
          # This is where security headers such as HSTS would typically be specified
          "X-response-header-3": "example-value-3"
          "X-response-header-4": "example-value-4"
        remove:
          # Remove the following headers
          - "X-response-header-5"
          - "X-response-header-6"
      # Modify request headers
      gatewayRouteRequestHeaderModifiers:
        # Specify configuration for a Gateway RequestHeaderModifier
        # For more detauls, see https://gateway-api.sigs.k8s.io/guides/user-guides/http-header-modifier/#http-request-header-modifier
        add:
          # Add the following headers to all requests
          "X-request-header-1": "example-value-1"
          "X-request-header-2": "example-value-2"
        set:
          # Set the following headers to in all requests (overwriting existing values if present)
          "X-request-header-3": "example-value-3"
          "X-request-header-4": "example-value-4"
        remove:
          # Remove the following headers
          - "X-request-header-5"
          - "X-request-header-6"
# ...
# omitted lines for brevity
# ...
```
