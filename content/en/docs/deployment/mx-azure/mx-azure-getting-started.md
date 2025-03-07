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
    * Owner or Contributor role assigned on the target subscription level

{{% alert color="info" %}} To comply with the principle of least privilege, you can also create a custom role for the Mendix Operator instead of assigning the Owner or Contributor role. For the required permissions, see below:

```text
{
    "properties": {
        "roleName": "Mendix on Azure Operator",
        "description": "",
        "assignableScopes": [
            "/subscriptions/<yoursubscriptionid>"
    ],
    "permissions": [
        {
            "actions": [
            "*/register/action",
            "Microsoft.Solutions/applications/*",
            "Microsoft.Solutions/locations/operationstatuses/*",
            "Microsoft.Resources/subscriptions/resourceGroups/*",
            "Microsoft.Resources/deployments/*",
            "Microsoft.Monitor/accounts/*",
            "Microsoft.Authorization/roleAssignments/write",
            "Microsoft.Authorization/roleAssignments/read"
        ],
        "notActions": [],
        "dataActions": [],
        "notDataActions": []
        }
    ]
     }
}
```

{{% /alert %}}

## Licensing

Mendix on Azure is available for purchase from the the [Azure Marketplace](https://azuremarketplace.microsoft.com/). Connecting to Azure services may also include additional cost. For more information, refer to Azure documentation.

For production environments, you also need a runtime license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/). The Operator license is applied automatically when using Mendix on Azure.
