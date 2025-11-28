---
title: "Support for Mendix on Azure"
url: /developerportal/deploy/mendix-on-azure/support/
description: "Provides information about the support model for Mendix on Azure."
weight: 30
---

{{% alert color="info" %}}
To facilitate sharing this information with internal stakeholders, a downloadable PDF version is available [here](https://blob.mendix.technology/mxonazure/MXonAzure-Support-Policy-for-Mendix-on-Azure.pdf). If discrepancies arise between this document and the PDF, the PDF version takes precedence.  
{{% /alert %}}

## Introduction

This document outlines the technical support policies and limitations for Mendix on Azure, based on the shared responsibility model that underpins the offering.

## Managed Nature of Mendix on Azure

With Mendix on Azure, you get a managed service to host Mendix apps in an Azure subscription you own. The Mendix on Azure service is comprised of several underlying Azure services combined with three Mendix-specific components (the Mendix Runtime, Operator and Agent). Mendix deploys and operates all services and components within the scope of the Mendix on Azure service for you.

Hosting Mendix apps on underlying Azure services you deploy and operate yourself (as can be done by adopting our Mendix on Kubernetes offering) provides you with the most low-level choice, control, and customization options with regards to these underlying services. By contrast, Mendix on Azure only provides you a relatively limited set of customization options with regards to these underlying services.

In exchange, you do not need to worry about deploying or managing these underlying Azure services yourself. In this manner, Mendix onAzure provides you a turnkey solution for hosting Mendix apps on Azure.

Mendix deploys and manages the following components and services as part of Mendix on Azure:

* Azure Kubernetes Service with Managed NGINX Ingress Controller (app routing add-on)
* Azure PostgreSQL Flexible Server and Azure PostgreSQL Flexible Server replica (if enabled)
* Azure Container Registry
* Azure Blob Storage
* Azure Managed Grafana
* Azure Managed Prometheus
* Azure Virtual Network including Private Endpoints 
* Mendix Runtime 
* Mendix Operator
* Mendix Agent

{{% alert color="info" %}}  
These components are managed in the sense that Mendix deploys and operates them in such a manner that they work together to form a Mendix app hosting service. As a consequence, customers cannot alter these underlying components themselves beyond what is described in the next paragraphs.
{{% /alert %}}

## Shared Responsibility Model for Mendix on Azure

Mendix on Azure deployments follow a shared responsibility model where Mendix, Microsoft, and customers have distinct roles throughout deployment and ongoing operations. Below are the key responsibilities:

### Microsoft Responsibilities

Microsoft manages and secures the Azure services that underlie Mendix on Azure. This includes:

* Compute - Azure Kubernetes Service (AKS)  
* Storage - Azure Blob Storage, Azure Container Registry  
* Database - PostgreSQL Flexible Server, Postgres replica
* Networking - Virtual Networks, Load Balancer, Private Endpoints  
* Monitoring - Managed Grafana and Prometheus  

### Mendix Responsibilities

Mendix is responsible for orchestrating, operating, maintaining, securing, and supporting the Mendix on Azure service, including:

* Orchestrating - Ensuring Azure services work cohesively as a single offering
* Operating - Fixing regressions in service integration
* Maintaining - Adapting to Azure service changes without affecting customers
* Securing - Maintaining compliance with security best practices and frameworks
* Supporting - Reactively resolving customer issues with the service

### Customer Responsibilities

Customers are accountable for developing, deploying, operating, integrating, and securing Mendix applications running on Mendix on Azure, including:

* Developing - Building apps that achieve business goals
* Deploying - Deploying applications
* Operating - Monitoring app behavior and addressing issues
* Integrating - Securing integrations with backend services and IAM
* Securing - Following Mendix best practices for secure apps

## Limited Customizabilty

When a Mendix on Azure cluster is initialized, all components that are required to host Mendix apps are automatically deployed inside an Azure resource group in the subscription of your choosing. Regularly, Mendix and Microsoft will push all required updates to this resource group to ensure it remains compliant and secure. 

In order to be able to push these updates to all Mendix on Azure customers in an automated, predictable and consistent manner, you as a customer are not able to modify any of these components directly in Azure nor can you influence this upgrade process. As a consequence, any customization beyond what is described below is not possible. 

The following customizations are offered as self-service in the Mendix on Azure portal:

* Apply custom tags to deployed Azure resources.
* Set the Azure Kubernetes Service tier.
* Set the VM type for the Azure Kubernetes agent node. 
* Set the maximum node pool size (that is, the upper autoscaling limit) for the AKS agent.
* Set the Azure for PostgreSQL Flexible server computing SKU and storage performance tier. 
* Switch to internal load balancer exposure to enable apps that can only be reached privately.
* Switch to internal Grafana exposure to prevent exposure to the public internet.
* Change IP address prefix of the subnet hosting AKS nodes (only at initial deployment).

The following customizations are related to establishing connectivity to and from other networks and Azure services. They can be done by the customer directly in the Microsoft Azure Portal:

* Configure virtual network peerings with the subnet hosting AKS nodes.
* Override DNS configuration on the subnet hosting AKS nodes.
* Configure Private Link Service to expose Mendix apps in other Azure virtual networks.
* Configure Private Endpoints to establish connectivity between Mendix apps and other services.

Mendix limits customization to what is described above to ensure a consistent, predictable, and scalable customer experience.

## Access to your Environment by Mendix

By deploying Mendix on Azure from the Azure Marketplace, you provide consent for Mendix to deploy and operate the resources required for Mendix on Azure in the chosen resource group. The mechanism used by Mendix to fulfil this access is provided by Microsoft - that is, publisher access to a Managed Application - and by definition limits the access Mendix has to your Azure subscription to the resources deployed. 

Mendix will use this access for the following purposes:

* Initial initialisation of the cluster (as initiated by the customer from Mendix on Azure portal)
* Pushing regular service updates (automatically, see description in the next paragraph)
* Pushing ad-hoc emergency updates or configuration changes to avoid service disruptions (by exception and at discretion of Mendix) 
* Troubleshooting incidents on behalf of the customer (after raising of a support ticket by the customer)

## Support Tickets

Since Mendix on Azure resources contain sensitive data, Mendix Support does not have direct access. To enable effective troubleshooting, you can create support tickets through the Mendix on Azure portal, which automatically include recent logs.

### Raising Support Tickets

To raise a support ticket, perform the following steps:

1. Open the [Mendix on Azure Portal](https://mendixonazure.mendix.com)
2. On the **Cluster Overview** page, select **Support Center**

    {{< figure src="/attachments/deployment/mx-azure/support-center-option.png" class="no-border" >}}

3. On the **Support Tickets** page, click **Open a Ticket** and complete the form. The page also shows your existing tickets.

{{% alert color="info" %}}  
By submitting a support ticket, you consent to sharing the pertinent logs with the Mendix Support team to assist in issue resolution.  
{{% /alert %}}

After submitting, a Zendesk ticket is automatically created. Access it by clicking **Go to ticket** to add comments or check status.

{{< figure src="/attachments/deployment/mx-azure/support-overview.png" class="no-border" >}}

#### Ticket Statuses

Ticket statuses include:

* **On Hold**  
* **Awaiting your reply**  
* **Solved**

Status updates reflect the current Zendesk ticket state. Refresh the page to view the latest status.

{{% alert color="info" %}}  
If you offboard your Mendix on Azure cluster, all related support tickets will be deleted. For more information, see [offboarding](/developerportal/deploy/mendix-on-azure/offboarding/).
{{% /alert %}}

### Automatic Support Tickets {#tickets-automatic}

If cluster initialization fails and manual retries do not resolve the issue, Mendix on Azure automatically creates a support ticket. Mendix Support is notified and will reach out to you. You can follow ticket progress or add comments via Zendesk.

## Service Updates and Releases

Mendix and Microsoft manage all components, applying upgrades quarterly with proactive regression testing to ensure stability.

Node-level OS components receive weekly security patches through Microsoft's NodeImage auto-upgrade process. Critical security patches for Mendix components (e.g., Operator, Agent) are applied promptly but no later than quarter-end.

These automated upgrade cadences cannot be modified by customers.

## Mendix Support Coverage Examples

### Example Supported Scenarios

Mendix provides technical support for the following example scenarios:

* Cluster initialization fails despite passing pre-flight validation checks.
* The customer is experiencing service availability issues and is unable to recover the situation using the self-service recovery option.

### Example Unsupported Scenarios

Mendix does not provide technical support in the following example scenarios: 

* Requests about how to integrate with other Azure Services that are beyond the scope of the product. Such requests can be supported by Mendix Expert Services or Mendix (infra) partners as part of (paid) consultancy engagements. 
* Requests to make configuration changes to underlying Azure services beyond what is offered as self-service in the Mendix on Azure and Mendix on Kubernetes Portal. Since such changes are not possible with this service, customer may consider to adopt Mendix on Kubernetes (formerly Mendix for Private Cloud) instead.
* Requests for any other type of customization on the resources deployed in the customer's Azure subscription. Since such customization is not possible with this service, customer may consider to adopt Mendix for Kubernetes (formerly Mendix for Private Cloud) instead. 
* Requests to fix security vulnerabilities in one of the managed components beyond what is automatically pushed during the weekly and quarterly update cycles.

{{% alert color="warning" %}}  
The state of the resources in the customer subscription nor overall service availability are proactively monitored by Mendix. As a consequence, any degradation in service will only reactively be addressed by Mendix after customer has notified Mendix of such degradation by filing a support ticket.
{{% /alert %}}

## Customer Responsibilities for Mendix on Azure Resources

Customers must manage integration with internal networks by properly configuring VNet Peerings, routing, and DNS as documented.

Customers should report service availability issues to Mendix if self-service options do not resolve them.

## Issues and Bugs in Underlying Azure Services

Mendix on Azure depends on evolving Azure services (notably AKS). Some bugs may require upstream fixes beyond Mendix control.

Mendix mitigates these impacts by:

* Quarterly regression testing and workarounds where feasible  
* Collaboration with Microsoft Support and engineering for upstream fixes  
* Transparent communication and guidance on workarounds for affected customers  

## Backup, Restore, Data Migration and Disaster Recovery

Mendix on Azure provides the following features to allow customers to self-service their needs with regards to backup, restore, data migration, and disaster recovery: 

* Mendix on Azure provides per-app environment snapshotting capabilities that allow customers to backup and restore all relevant app data from/to an environment via selfservice on the Mendix on Kubernetes  Portal. 
* Mendix on Azure creates automated nightly backup snapshots for every Mendix app environment. 
* All backup snapshots are stored in an Azure Storage Account hosted on the customer's Azure subscription. Mendix has prepared an emergency procedure which can be performed in collaboration with the customer in case the Azure Storage Account holding the backup snapshots is accidentally deleted from Azure. 
* Individual backup snapshots can be downloaded and uploaded from and into a customer's Mendix on Azure environment by the customer under self-service through the Mendix on Kubernetes Portal. This provides the customer the ability to use such snapshots for disaster recovery scenarios as well as data migration scenarios to and from other deployment models. Mendix Expert Services is available to support customers in such scenarios, when desired.

## Compliance Frameworks

Mendix on Azure aligns with SOC 2 Azure Policy automated controls. For more information, see [SOC 2 Type 2 Compliance Exceptions](/developerportal/deploy/mendix-on-azure/security-and-compliance/#soc2).

| Service | Exception | Rationale |
| --- | --- | --- |
| Azure Kubernetes Service | [Azure Policy Addon for Kubernetes service (AKS) should be installed and enabled on your clusters](https://www.azadvertizer.net/azpolicyadvertizer 0a15ec92-a229-4763-bb14-0ea34a568f8d.html) | The cluster and all workloads are deployed and managed by Mendix so enforcing policy does not add any value. |
| Azure Kubernetes Service | [Azure Kubernetes Service clusters should have Defender profile enabled](https://www.azadvertizer.net/azpolicyadvertizer/a1840de2-8088-4ea8-b153-b4c723e9cb01.html) | Defender is not enabled for costsaving reasons. |
| Azure Kubernetes Service | [All Internet traffic should be routed via your deployed Azure Firewall](https://www.azadvertizer.net/azpolicyadvertizer/fc5e4038-4584-4632-8c85-c0448d374b2c.html) | This is not part of the product scope but can be added by the customer postdeployment. |
| Azure Container Registry | [Container registries should be encrypted with a customer-managed key](https://www.azadvertizer.net/azpolicyadvertizer/5b9159ae-1701-4a6f-9a7a-aa9c8ddd0580.html) | The standard Microsoft key is used to enable deployment without key creation in Azure. |
| Storage Account | [Storage accounts should use customer-managed key for encryption](https://www.azadvertizer.net/azpolicyadvertizer/6fac406b-40ca-413b-bf8e-0bf964659c25.html) | The standard Microsoft key is used to enable deployment without key creation in Azure. |

## Severity Baselines for Support Tickets

To ensure consistent and prioritised support, we classify issues based on the following severity levels:

| SeverityLevel | Response Time | Resolution Time | Examples |
| --- | --- | --- | --- |
| Critical | Less than 2 office hours | Best effort | Production environment is inaccessible or severely impaired, preventing critical changes. Core application functionality is completely unavailable. |
| High | Less than 8 office hours | Best effort | Inability to provision new clusters. Inability to modify existing clusters via the Mx on Azure portal. |
| Medium | Next business day | Best effort | Non-production environments (Test or Acceptance) experience significant disruption to operational functionality. Operational functionality in production is moderately impacted but not critical. |
| Low | Reasonable effort | Best effort | Minor issues with minimal impact on operational functionality. Cosmetic issues, minor performance degradation, or general inquiries. |

{{% alert color="warning" %}}  
The above SLA differs from the standard Mendix Platform Support SLA, as issues related to Mendix on Azure are resolved on a best-effort basis.
{{% /alert %}}

## Off-boarding from the Service

Customers can completely off-board from the service by deleting the Managed Application from their Azure subscription (for example by using the Azure Portal). This will immediately perform the following actions:

* Remove all resources related to Mendix on Azure from the customer's subscription. 
* Remove any access Mendix has to the customer's environment. 
* Delete the cluster registration from the Mendix on Azure and Mendix on Kubernetes Portals. 
* While Mendix does have an emergency procedure available to help revive an environment and restore data in case the Managed Application gets deleted by accident, it is a higheffort manual process requiring close collaboration between Mendix and the customer. Given this, we advise customers to exercise extreme caution when deleting the Managed Application from their Azure subscription to avoid the need of this emergency procedure to be executed.

## Known Limitations

* Only apps on Mendix version 10.10 or later are supported. Deployment for earlier versions will fail.
* Certain Mendix on Kubernetes APIs (Create, Edit, or Delete cluster and namespace operations) are unavailable in Mendix on Azure due to managed architecture. Other APIs function normally.
* Downtime or issues with Mendix on Kubernetes may affect Mendix on Azure availability (for example, cluster creation may not be  possible).
