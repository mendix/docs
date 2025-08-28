---
title: "Support Policy for Mendix on Azure"
url: /developerportal/deploy/mendix-on-azure/support/
description: "Provides information about the support model for Mendix on Azure."
weight: 30
---

{{% alert color="info" %}} This feature is currently available to participating customers. For more information, contact your Customer Success Manager. {{% /alert %}}

## Introduction

This document describes the technical support policies and limitations for Mendix on Azure, based on the shared responsibility model underlying the offering.

{{% alert color="info" %}}Before you begin, familiarize yourself with the general Mendix support policies, as outlined in [Mendix Support](/support/).{{% /alert %}}

## Shared Responsibility Model for Mendix on Azure

Under the shared responsibility model for Mendix on Azure deployments, Mendix, Microsoft, and customer organizations all have their own responsibilities in the deployment process and business-as-usual operations. Familiarize yourself with the responsibilities listed below:

### Microsoft Responsibilities

Microsoft is responsible for operating and securing the Azure services underlying the Mendix on Azure service. This includes the following services:

* Compute
    * Azure Kubernetes service
* Storage
    * Azure Blob Storage
    * Azure Container Registry
* Database
    * PostgreSQL Flexible Server
* Networking
    * Virtual networks
    * Load balancer
    * Private endpoints
* Monitoring
    * Managed Grafana and Prometheus

### Mendix Responsibilities

Mendix is responsible for orchestrating, operating, maintaining, securing, and supporting the Mendix on Azure service. This includes the following tasks:

* Orchestrating - Ensure that the underlying Azure services function together as one cohesive offering.
* Operating - Resolve regressions in how the underlying Azure services come together as one service.
* Maintaining - Ensure that the service absorbs changes in the underlying Azure services without impact on customers.
* Securing - Ensure that the service remains compliant with relevant security best practices and frameworks.
* Supporting - Reactively address customer issues with using the service.

### Customer Responsibilities

Customers are responsible for developing, deploying, operating, integrating, and securing apps on top of the Mendix on Azure service. This includes the following tasks:

* Developing - Create apps that deliver business outcomes.
* Deploying - Deploy apps.
* Operating - Monitor app behavior and address deviations.
* Integrating - Securely integrate apps with backend services and IAM.
* Securing - Comply with Mendix best practices for secure apps.

## Available Customizations

When a Mendix on Azure cluster is initialized, all components that are required to host Mendix apps are automatically deployed inside an Azure Resource group of your choosing. Mendix and Microsoft regularly push all required updates to your cluster to ensure that it remains compliant and secure.

Because the updates are automated for all Mendix on Azure customers, you cannot modify any of these components directly in Azure. You also cannot influence the upgrade process. Because of that, you can only implement customizations that are offered in the Mendix on Azure and Mendix on Kubernetes portals. Currently this includes the following customizations:

* Adding custom tags to Azure resources
* Changing the Azure Kubernetes Service tier
* Changing the Azure Kubernetes agent node VM type
* Overriding the maximum AKS agent node pool (upper autoscaling limit)
* Changing the Azure for PostgreSQL Flexible server computing SKU and storage performance tier
* Switching to internal load balancer exposure to enable apps that can only be reached privately
* Changing IP address prefix of the subnet hosting AKS nodes (only at initial deployment)

Any customization beyond what is offered as self-service through the Mendix on Azure and Mendix on Kubernetes portal is not possible.

## Support Tickets

Since your Mendix on Azure resources contain private and sensitive data, Mendix Support cannot access your resources. To be able to troubleshoot incidents on your behalf, the Mendix on Azure portal allows you to raise a support ticket that includes recent logs for your environment, as well as provide consent to Mendix personnel for accessing your resources temporarily while processing your support ticket.

### Raising Support Tickets

To raise a support ticket, press **Support Center** on the **Cluster Overview** page, as shown in the following figure:

{{< figure src="/attachments/deployment/mx-azure/support-center-option.png" class="no-border" >}}

This opens the **Support Tickets** page, which shows your current and past support issues. To open a new ticket, click **Open a Ticket** and fill out the required information.

{{% alert color="info" %}}  
By opening a support ticket, you consent to sharing the relevant logs with the Mendix Support team for the purpose of troubleshooting the reported issue.
{{% /alert %}}

When you create a support ticket in the Mendix on Azure portal, a Zendesk ticket is automatically created for you. To view it, click **Go to ticket**. You can then add additional comments on the Zendesk ticket if required.

{{< figure src="/attachments/deployment/mx-azure/support-overview.png" class="no-border" >}}

Your tickets can have the following statuses:

* **On Hold**
* **Awaiting your reply**
* **Solved**

The status is updated based on the current status of the ticket in the Zendesk. To see the latest status of the ticket, click the **Refresh** button.

{{% alert color="info" %}}  
If you delete a cluster, all support tickets opened for that cluster are also deleted.
{{% /alert %}}

### Automatic Support Tickets {#tickets-automatic}

Mendix on Azure can also automatically create support tickets for you. If a cluster fails to initialize and rerunning it manually does not resolve the issue, a support request is automatically created in the Support Center. Mendix Support is notified about the issue through Zendesk. You can follow the link from the support ticket to Zendesk to view its status or add additional comments.

## Service Updates and Releases

All components in Mendix on Azure are managed and are upgraded to newly available versions on a quarterly basis by Mendix and Microsoft. Mendix conducts pro-active regression testing to ensure the updated set of components keep working well together.

All node-level OS components in Mendix on Azure receive weekly security patches (as per Microsoft's NodeImage auto-upgrade Node OS upgrade channel). In case critical security patches are found in the Mendix components running in your cluster (i.e. Operator and Agent) these will be patched as soon as possible (but at the end of the quarter latest). 

These quarterly and weekly upgrade cadences are fully automatic and cannot be influenced by the customer.

## Mendix Support Coverage

Mendix provides technical support for the following example scenarios:

* Cluster initialization fails despite passing pre-flight validation checks.
* The customer is impacted by issues with service availability and is unable to recover the situation using the self-service recovery option.

Mendix does not provide technical support in the following example scenarios:

* Requests about how to integrate with other Azure Services that are beyond the scope of the product. Such requests can be supported by Mendix Expert Services or Mendix (infra) partners as part of (paid) consultancy engagements.
* Requests to make configuration changes to underlying Azure services beyond what is offered as self-service in the Mendix on Azure and Mendix on Kubernetes Portal. Since such changes are not possible with this service, customer may consider to adopt Mendix on Kubernetes instead.
* Requests for any other type of customization on the resources deployed in customer's Azure subscription. Since such customization is not possible with this service, customer may consider to adopt Mendix on Kubernetes instead.
* Requests to fix security vulnerabilities in one of the managed components beyond what is automatically pushed during the weekly and quarterly update cycles. 

## Customer Responsibilities for Mendix on Azure Resources

The customer is responsible for optionally integrating the solution with the rest of their internal network (for example, to access backend services) by correctly configuring VNet Peerings, routing tables and DNS name resolution as per documentation.

The customer is responsible for reporting service availability issues to Mendix in the case these cannot be resolved using self-service options.

If the customer chooses to deploy the solution into a network that limits egress, it is the customer's responsibility that appropriate egress exceptions are made for the underlying Azure services (particularly AKS).

## Issues and Bugs in Underlying Azure Services

Because Mendix on Azure relies on several rapidly evolving underlying Azure services (especially AKS), bugs and issues may arise in those services. Some of these limitations and bugs cannot be worked around within Mendix on Azure itself, but must be fixed in the underlying Azure services.

Mendix strives to minimize the impact of such bugs and issues for our customers in the following ways:

* By conducting quarterly testing to detect regressions early and work around them to the degree that we can.
* By working with Microsoft Support and engineering teams in case a bug or issue needs to be resolved upstream.
* By communicating to our customers why an upstream bug or issue affects their Mendix on Azure cluster, and providing workarounds where possible.

## Compliance Frameworks

The solution is being benchmarked against SOC2 Azure Policy Compliance controls. Security highlights include the following:

* Deploys a managed Mendix environment within the customer's Azure subscription.
* Incorporates built-in security features and adheres to Azure Best Practices.
* Utilizes reporting tools to prove compliance.

There are some exceptions; for more information, see [SOC 2 Type 2 Compliance Exceptions](https://docs.mendix.com/developerportal/deploy/mendix-on-azure/#soc-2-type-2-compliance-exceptions).

## Known Limitations

* Mendix on Azure only supports hosting apps on Mendix versions 10.10 or later. Any app on an earlier version will fail to deploy successfully.
* Due to the managed nature of this product, the following Mendix on Kubernetes Deploy APIs are irrelevant and thus unavailable to customers: Create/Edit/Delete cluster and Create/Update/Delete namespace. All other build and deploy APIs are available and function as usual.
* Because Mendix on Azure is directly dependent on Mendix on Kubernetes, issues that affect the Mendix on Kubernetes may also affect Mendix on Azure deployments. For example, if the Mendix on Kubernetes is down, it is not possible to create new Mendix on Azure clusters.
