---
title: "Network Ingress Settings in Mendix on Kubernetes"
linktitle: "Network Ingress Settings"
url: /developerportal/deploy/private-cloud-cluster/private-cloud-ingress-settings/
description: "Describes how to set up and configure various ingress options in Mendix on Kubernetes."
weight: 10
---

## Introduction

Based on your organization's networking and security needs, you must configure the available networking components of your Mendix web applications to be accessible to end users, either over a private network or the Internet. This article describes three possible network configurations: Kubernetes Ingress, OpenShift Routes, and Service-Only. Each configuration is tailored to meet specific use cases.

## Prerequisites

Ensure that you are familiar with the networking concepts applicable to Kubernetes. This document serves as a reference guide and offers recommendations to help customers meet their specific networking requirements while adhering to best practices. To understand the advanced features, always consult the official documentation of the networking components related to your environment.

## Supported Network Configurations

Mendix on Kubernetes supports the following Ingress configurations:

* [Kubernetes Ingress](/developerportal/deploy/private-cloud-cluster/private-cloud-ingress-settings/controllers/) - The standard Kubernetes way of managing external traffic seamlessly integrates with a cloud provider's load balancer, offering a rich feature set to route and secure application traffic effectively.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/private-cloud-networking/k8s-ingress.png" class="no-border" >}}

* [OpenShift Routes](/developerportal/deploy/private-cloud-cluster/private-cloud-ingress-settings/openshift/) - The OpenShift-native method for exposing services externally provides a more streamlined setup, though it offers less flexibility compared to Kubernetes Ingress.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/private-cloud-networking/openshift-routes.png" class="no-border" >}}

* [Service Only](/developerportal/deploy/private-cloud-cluster/private-cloud-ingress-settings/services-only/) - This approach involves creating only a Kubernetes Service, without an Ingress or OpenShift Route, allowing for greater control over the upstream networking configuration. This option enables the use of a Load Balancer without an Ingress Controller, or the manual creation and management of an Ingress object that is not managed by Mendix on Kubernetes.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/private-cloud-networking/service-only.png" class="no-border" >}}

{{% alert color="info" %}}
For more information on how the Mendix Operator interacts with the Kubernetes API and an Ingress Controller, see [Using Kubernetes Ingress](/developerportal/deploy/private-cloud-technical-appendix-02/#using-kubernetes-ingress).
{{% /alert %}}

### Feature Comparison

The following table compares the functionality of the three supported options, in order to help you make an informed decision on the networking configuration that best aligns with your security, performance, and infrastructure requirements.

{{% alert color="info" %}}
When switching between Ingress, OpenShift Routes, and Service Only, you must restart the Mendix Operator for the changes to be fully applied.
{{% /alert %}}

| Feature | Kubernetes Ingress | Openshift Routes | Service Only |
| --- | --- | --- | --- |
| Ease of use | Requires setup, but offers more flexibility. | Simplest option for OpenShift users, built-in. | Fine-grained control over networking and security offers maximum flexibility, but requires significant effort and expertise to configure and maintain. Note that the networking setup beyond the Mendix Operator's scope, up to the service object, is not supported by Mendix. |
| Native cloud integration | Can integrate with cloud-native services like AWS Application Load Balancer. | No direct integration with cloud providers. | Full control over networking setup. |
| Performance and scalability | Scales with cloud load balancers, better supports horizontal scaling. | Limited to OpenShift Router performance. | Full flexibility - scales according to your load balancer and proxy setup. |
| Supported providers | [NGINX Ingress Controller](https://kubernetes.github.io/ingress-nginx/); [Traefik](https://traefik.io/traefik/); [AWS Application Load Balancer](https://docs.aws.amazon.com/eks/latest/userguide/alb-ingress.html); [Ingress for External Application Load Balancer](https://cloud.google.com/kubernetes-engine/docs/concepts/ingress-xlb); [Azure Application Gateway Ingress Controller](https://learn.microsoft.com/en-us/azure/application-gateway/ingress-controller-overview) | [OpenShift Router (HAProxy-based Ingress Controller)](https://docs.openshift.com/container-platform/4.17/networking/networking_operators/ingress-operator.html) | None |
| TLS/SSL termination | Can leverage cloud provider-managed TLS; supports Cert-Manager. | Supported with OpenShift's HAProxy router. | Fully flexible but requires manual setup; TLS can terminate at application load balancer, network load balancer, or app level |
| Security (WAF, ACLs, Auth) | More advanced security integrations (for example AWS Web Application Firewall, authentication). | Basic access control via OpenShift OAuth. | Full control - can integrate with AWS Web Application Firewall, API Gateway, authentication proxies with manual configuration. |
| Traffic splitting | Fully supported through ingress rules. | Supported through HAProxy-based Route annotations. | Depends on external networking setup. |
| External DNS support | Some ingress controllers (for example, application load balancers) support native DNS updates. | Requires ExternalDNS integration. | Fully configurable - can use ExternalDNS, Amazon Route 53, or others. |
| Custom annotations | Supports Kubernetes Ingress annotations, provider-specific features.| Supports OpenShift-specific annotations. | No restrictions - fully customizable in external networking. |

## Recommended Configuration

If possible, Mendix recommends using the NGINX Ingress Controller (Community Edition) over other options, including OpenShift Router. NGINX Ingress provides essential security and performance features, such as:

* Access control – Restrict access to sensitive URLs.
* HTTP enhancements – Add headers, enable compression, and cache static content.
* Automated TLS management – Fully compatible with cert-manager, eliminating manual certificate handling.
* Enhanced security – Integrates with Linkerd Service Mesh to encrypt network traffic between the Ingress Controller and Mendix app pods.

These capabilities are crucial for ensuring security, scalability, and reliability—especially as your application moves into production.

While OpenShift Routes are a viable option, we recommend NGINX Ingress Controller for the following reasons:

* Future-proofing - NGINX is actively developed and aligned with Kubernetes standards, ensuring long-term compatibility and feature updates.
* Advanced features - NGINX offers a broader range of functionalities, including URL blocking, security header management, and third-party authentication plugin integration.
* Consistency with Mendix Cloud - NGINX is used in Mendix Cloud and Free Cloud, allowing for easier configuration replication and support.

{{% alert color="info" %}}
OpenShift Routes remain a suitable choice if meet your current needs and you do not require advanced features.
{{% /alert %}}

## Known Issues

* AWS Application Load Balancers do not work correctly with HTTP2 WebSockets.

    As a workaround, you can use HTTP1 as the ingress backend protocol: `alb.ingress.kubernetes.io/backend-protocol-version: HTTP1`

* Some application load balancer firewall rules can block file uploads or other Mendix app features.
* Linkerd does not work correctly with AWS Application Load Balancer and Azure Gateway Ingress Controller.
