---
title: "Mendix on Azure"
url: /developerportal/deploy/mendix-on-azure/
description: "Presents documentation on deploying your Mendix app on Microsoft Azure."
weight: 42
no_list: false 
description_list: true
---

{{% alert color="info" %}} This feature is currently available to participating customers. For more information, contact your Customer Success Manager. {{% /alert %}}

## Introduction

Mendix on Azure provides a simplified, integrated way to deploy Mendix applications to a Microsoft Azure environment. With this solution, users are empowered to deploy their Mendix applications in Azure environments without the need for intricate infrastructure setup in cloud services. They can also seamlessly manage infrastructure services through an intuitive user interface. No matter their IT skills, users can realize their project value quickly and securely with Azure.

## Benefits of Mendix on Azure

By eliminating manual setup and maintenance, Mendix on Azure allows your teams to:

* Focus on developing business value instead of configuring infrastructure.
* Avoid delays caused by cross-team dependencies or architectural discussions.
* Accelerate time-to-market for critical applications.
* Address deployment and operational bottlenecks by automating the setup and management of Mendix applications on Azure. 
* Eliminate the need for specialized cloud engineers and reduce setup time to under 30 minutes. 
* Focus on innovation and deliver value faster, reduces labor costs, and ensure consistency, security, and compliance.

## Mendix on Azure and Mendix on Kubernetes

Mendix on Azure is a new deployment option that makes use of some of the features of Mendix on Kubernetes, but does so in an opinionated way. 

Mendix on Kubernetes offers its users flexibility coupled with the ability to keep their deployment within their enterprise firewall, but requires more effort to configure and more time to value than deployments on Mendix Cloud. 

Mendix on Azure builds on that by providing an automated, preconfigured solution with access to private customer networks, which can be deployed in 30 minutes by a user without IT skills at no extra operational costs. The architecture, its maintenance, updates, and security hardening are all fully managed by Mendix. This helps prevent issues with setting up the infrastructure, which can sometimes be very technical and complicated for citizen developers.

## Architecture

Mendix on Azure provides a managed service to host Mendix apps in an Azure subscription you own. The Mendix on Azure service is composed of several underlying Azure services combined with the following Mendix-specific components:

* [Mendix Runtime](/refguide/runtime/)
* [Mendix Operator](/developerportal/deploy/private-cloud-cluster/)
* [Mendix Agent](/developerportal/deploy/private-cloud-cluster/)

Mendix operates all services and components within the scope of the Mendix on Azure service for you. The service leverages several underlying Azure services that are preconfigured to optimally host your Mendix apps.

### Components

Mendix deploys, operates and is responsible for overall service functionality of the following components as part of Mendix on Azure:

* Azure Kubernetes Service with Managed NGINX Ingress Controller (app routing add-on)
* Azure PostgreSQL Flexible Server
* Azure Container Registry
* Azure Blob Storage
* Azure Managed Grafana
* Azure Managed Prometheus
* Azure Virtual Network with private endpoints and private DNS zones
* Mendix Runtime
* Mendix Operator
* Mendix Agent

You cannot alter these managed components yourself beyond what is offered in the Mendix on Azure and Mendix on Kubernetes self-service portals. Mendix limits customization to ensure a consistent, predictable, and scalable customer experience.

### Diagram

The diagram in this section presents the high-level architecture of the Mendix for Azure solution.

{{< figure src="/attachments/deployment/mx-azure/architecture.png" class="no-border" >}}

The architecture is assessed against the [Azure well-architected framework](https://learn.microsoft.com/en-us/azure/well-architected/) to ensure its reliability, accessibility, and performance.

## Security

Mendix accesses customer environments in a secure, auditable way:

* We use [cross-tenant access](https://learn.microsoft.com/en-us/entra/external-id/cross-tenant-access-overview), which is native to Azure and complies with Microsoft best practices.
* Most access is performed programmatically, that is, by the system rather than manually by normal users. There is usually no human intervention into the customer environments.
* In rare cases where human intervention is required, for example, because of a support request that requires access to the customer environment to resolve, the access is automated, auditable, and governed by Mendix support processes. The Mendix employee working on the support request receives temporary access which is then revoked.
* The network connectivity is done using a private Azure link service, not through the public internet.

### SOC 2 Type 2 Compliance Exceptions

The Azure Policy add-on is not enabled inside Mendix Azure clusters, because Mendix can control which workloads can access the cluster. Because of that, the following exceptions to the SOC 2 Type 2 policy are considered acceptable:

* Azure Container Registry:
    * [Container registries should be encrypted with a customer-managed key](https://www.azadvertizer.net/azpolicyadvertizer/5b9159ae-1701-4a6f-9a7a-aa9c8ddd0580.html) - The standard Microsoft key is used instead.
* AKS - cluster resource:
    * [Azure Policy Add-on for Kubernetes service (AKS) should be installed and enabled on your clusters](https://www.azadvertizer.net/azpolicyadvertizer/0a15ec92-a229-4763-bb14-0ea34a568f8d.html) - The cluster is deployed and managed by Mendix, so the policy is not needed.
    * [Azure Kubernetes Service clusters should have Defender profile enabled](https://www.azadvertizer.net/azpolicyadvertizer/a1840de2-8088-4ea8-b153-b4c723e9cb01.html) - This is not automated for cost-saving reasons.
* AKS - cluster VNET:
    * [All Internet traffic should be routed via your deployed Azure Firewall](https://www.azadvertizer.net/azpolicyadvertizer/fc5e4038-4584-4632-8c85-c0448d374b2c.html) - This is not automated, but the customer can deploy their own Firewall if required.
* Storage Account:
    * [Storage accounts should use customer-managed key for encryption](https://www.azadvertizer.net/azpolicyadvertizer/6fac406b-40ca-413b-bf8e-0bf964659c25.html) - The cluster is deployed and managed by Mendix, so this is not needed.

## Read More
