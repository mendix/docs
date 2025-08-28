---
title: "Service without Ingress in Mendix on Kubernetes"
linktitle: "Service Only"
url: /developerportal/deploy/private-cloud-cluster/private-cloud-ingress-settings/services-only/
description: "Describes how to configure Mendix on Kubernetes to create services without an Ingress."
weight: 30
---

## Introduction

Mendix on Kubernetes has the capability to create services without an Ingress, allowing Ingress objects to be managed independently from Mendix on Kubernetes. It is also technically possible to directly use an L4 load balancer without an ingress controller or service mesh, although this setup is very limited and only suitable for edge cases.

This scenario is suitable for integrating Mendix applications with a service mesh, ensuring capabilities such as traffic encryption from the ingress controller to the application pods, among other benefits.

These Services are compatible with [Istio](https://istio.io/).

## Example

The OperatorConfiguration contains user-editable options for services for network endpoints.

Below is an example yaml file when using services for network endpoints:

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
