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

{{% alert color="info" %}}  
Before proceeding, familiarize yourself with the general Mendix support policies available in [Mendix Support](/support/).  
{{% /alert %}}

## Shared Responsibility Model for Mendix on Azure

Mendix on Azure deployments follow a shared responsibility model where Mendix, Microsoft, and customers have distinct roles throughout deployment and ongoing operations. Below are the key responsibilities:

### Microsoft Responsibilities

Microsoft manages and secures the Azure services that underlie Mendix on Azure. This includes:

* Compute - Azure Kubernetes Service (AKS)  
* Storage - Azure Blob Storage, Azure Container Registry  
* Database - PostgreSQL Flexible Server  
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

## Available Customizations

During cluster initialization, all components needed to host Mendix apps are deployed automatically inside an Azure Resource Group you select. Mendix and Microsoft regularly apply mandatory automated updates to keep clusters compliant and secure.

Due to this automation, direct modification of these components in Azure or control over the upgrade process is not possible. Customizations are limited to options exposed via the Mendix on Azure, Microsoft Azure, and Mendix on Kubernetes portals. Current allowed customizations include those documented in the [Configuration section](/developerportal/deploy/mendix-on-azure/configuration/).

Any modifications outside this documented scope are not supported.

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

The following scenarios are supported:

* Cluster initialization fails despite passing pre-flight checks.
* Service availability issues are not resolvable through self-service recovery.

The following scenarios are not supported:

* Consultations on integrations with other Azure services outside the Mendix on Azure scope; consider Mendix Expert Services or partners for consultancy.
* Configuration changes to Azure services beyond self-service options; Mendix on Kubernetes may offer more flexibility.
* Customizations to Azure subscription resources beyond the supported scope.
* Manual fixes for security vulnerabilities beyond the automated update cycles.

## Customer Responsibilities for Mendix on Azure Resources

Customers must manage integration with internal networks by properly configuring VNet Peerings, routing, and DNS as documented.

Customers should report service availability issues to Mendix if self-service options do not resolve them.

## Issues and Bugs in Underlying Azure Services

Mendix on Azure depends on evolving Azure services (notably AKS). Some bugs may require upstream fixes beyond Mendix control.

Mendix mitigates these impacts by:

* Quarterly regression testing and workarounds where feasible  
* Collaboration with Microsoft Support and engineering for upstream fixes  
* Transparent communication and guidance on workarounds for affected customers  

## Compliance Frameworks

Mendix on Azure aligns with SOC 2 Azure Policy automated controls. For more information, see [SOC 2 Type 2 Compliance Exceptions](/developerportal/deploy/mendix-on-azure/security-and-compliance/#soc2).

## Known Limitations

* Only apps on Mendix version 10.10 or later are supported; deployment for earlier versions will fail.
* Certain Mendix on Kubernetes APIs (Create, Edit, or Delete cluster and namespace operations) are unavailable in Mendix on Azure due to managed architecture. Other APIs function normally.
* Downtime or issues with Mendix on Kubernetes may affect Mendix on Azure availability (for example, cluster creation may notbe  possible).
