---
title: "Getting Started with Mendix on Azure"
url: /developerportal/deploy/mendix-on-azure/quickstart/
description: "Documents the pre-implementation tasks for Mendix on Azure."
weight: 10
---

{{% alert color="info" %}} This feature is currently available to participating customers. For more information, contact your Customer Success Manager. {{% /alert %}}

## Introduction

Before you can deploy your Mendix app on Azure, you must plan and complete a number of pre-implementation tasks.

## Prerequisites

To adopt Mendix on Azure, you need to have the following:

* A Mendix account; Mendix Studio Pro 10.10 or newer is required
* As an optional best practice, add multiple cluster manager to your clusters
* An Azure account with the following permissions:
    * Permission to grant admin consent on the Mendix on Azure portal app registration
    * Owner role assigned on the target subscription

After you obtain an Azure subscription, you can [find your Subsciption ID](https://learn.microsoft.com/en-us/azure/azure-portal/get-subscription-tenant-id#find-your-azure-subscription) and provide this information to the Mendix representative.

## Next Steps

Once all the prerequisites are met, you will be granted access to the [Mendix on Azure](https://portal.azure.com/#create/mendixtechbv.mxonazure) offering in Azure Marketplace. You must use this listing to purchase and deploy to a resource group of your choice.

After purchasing the offering, you can initialize your first Mendix on Azure cluster by following the [installation instructions](https://docs.mendix.com/developerportal/deploy/mendix-on-azure/installation/).

## Licensing

Mendix on Azure is available for purchase from the the [Azure Marketplace](https://azuremarketplace.microsoft.com/). Connecting to Azure services may also include additional cost. For more information, refer to Azure documentation.

For production environments, you also need a runtime license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/). The Operator license is applied automatically when using Mendix on Azure.
