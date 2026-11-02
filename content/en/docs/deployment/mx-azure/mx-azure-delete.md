---
title: "Offboarding Mendix on Azure"
url: /developerportal/deploy/mendix-on-azure/offboarding/
description: "Provides information about offboarding Mendix on Azure."
weight: 99
---

## Introduction

Offboarding from Mendix on Azure is an automated procedure that permanently deletes all components of the service. This includes the database and storage accounts holding all Mendix application data. As a consequence, all Mendix application data and configuration will be permanently deleted through this offboarding process.

{{% alert color="warning" %}}
Offboarding Mendix on Azure following this process will permanently and irreversibly delete all Mendix application data and configuration. Data recovery is not possible. Proceed with extreme caution.
{{% /alert %}}

## Nature of the Offboarding Process

The Mendix on Azure offboarding process:

* Is an irreversible action that deletes all Mendix application data and configuration—**there is no way to recover deleted app data once the process completes**.
* May require several hours to fully finish.
* Can only be started by the customer via the Microsoft Azure Portal, using the procedure described below.

{{% alert color="warning" %}}
Offboarding Mendix on Azure following this process will permanently and irreversibly delete all Mendix application data and configuration. Data recovery is not possible. Proceed with extreme caution.
{{% /alert %}}

## Initiating the Offboarding Process

{{% alert color="warning" %}}
Offboarding Mendix on Azure following this process will permanently and irreversibly delete all Mendix application data and configuration. Data recovery is not possible. Proceed with extreme caution.
{{% /alert %}}

1. Sign into the [Microsoft Azure Portal](https://portal.azure.com) using an account assigned the Owner role on the Mendix on Azure Managed Application object. You can recognize the object in Azure Portal as shown below:

    {{< figure src="/attachments/deployment/mx-azure/initializable-clusters.png" class="no-border" >}}

2. Click **Delete** button, and then confirm deletion by clicking **Yes**.

    {{< figure src="/attachments/deployment/mx-azure/deletepopup.png" class="no-border" >}}

{{% alert color="warning" %}}
Offboarding Mendix on Azure following this process will permanently and irreversibly delete all Mendix application data and configuration. Data recovery is not possible. Proceed with extreme caution.
{{% /alert %}}

The deletion proceeds after confirmation, and may take several hours to complete. When the process is finished, as indicated by a notification in Microsoft Azure Portal, all related resources will have been permanently and automatically deleted.

## Suspending, Hibernating, or Stopping Mendix on Azure

Currently, Mendix on Azure does not offer functionality for temporarily suspending, hibernating, or stopping the service. All operations are limited to running or permanently deleting the service. A pause or temporary stop option is unavailable at this time.
