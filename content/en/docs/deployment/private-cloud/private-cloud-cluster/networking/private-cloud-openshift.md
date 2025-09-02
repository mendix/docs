---
title: "OpenShift Route in Mendix on Kubernetes"
linktitle: "OpenShift Route"
url: /developerportal/deploy/private-cloud-cluster/private-cloud-ingress-settings/openshift/
description: "Describes how to configure OpenShift routes for Mendix on Kubernetes."
weight: 20
---

## Introduction

OpenShift supports both Routes and Ingress. The OpenShift IngressController acts as a bridge, managing both Routes and Ingress resources. This gives flexibility for using either approach based on specific requirements or familiarity.

{{% alert color="info" %}}
OpenShift routes are only supported in OpenShift, so it is recommended to use OpenShift Routes when working exclusively within OpenShift and leveraging its built-in router features, and use Kubernetes Ingress when portability or specific controller features are required.
{{% /alert %}}

## Basic Installation and Configuration

To use Ingress on OpenShift:

1. Ensure that the OpenShift IngressController is deployed.
2. Define your Ingress resources as per Kubernetes standards.
3. If required, configure annotations specific to OpenShift for enhanced behavior.

    The only configuration option currently supported is enabling or disabling TLS. When TLS is enabled, edge termination is used. That is, TLS termination occurs at the router, before the traffic gets routed to the pods, with automatic redirection from HTTP to HTTPS.

{{% alert color="info" %}}
Path based routing is supported for Operator version 2.19.0 and newer, and Mendix version 10.3.0 and newer. To support this feature, OpenShift route uses a `haproxy.router.openshift.io/rewrite-target=/` annotation.
{{% /alert %}}

##### Configuring Openshift Route in the Mxpc-cli Tool

The following configuration options are available in OpenShift:

* Turning TLS on and off
* Adding route annotations
* Providing the name of an existing TLS certificate secret to use instead of the default router certificate
* Providing a custom domain name (for example, `mendix.example.com`) to use instead of the default OpenShift route domain

The OperatorConfiguration contains user-editable options for Openshift routes for network endpoints. The following is an example yaml file when using OpenShift Routes for network endpoints:

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

For more details and a complete list of available options, see [Route-specific annotations](https://docs.redhat.com/en/documentation/openshift_container_platform/4.17/html/networking/configuring-routes#nw-route-specific-annotations_route-configuration).

{{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/private-cloud-networking/configure-openshift.png" class="no-border" >}}
