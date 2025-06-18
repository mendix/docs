---
title: "Mendix on Azure Release Notes"
linktitle: "Mendix on Azure"
url: /releasenotes/developer-portal/mendix-on-azure/
description: "Release notes for Mendix on Azure"
weight: 25
---

{{% alert color="info" %}} This feature is currently available to participating customers. For more information, contact your Customer Success Manager. {{% /alert %}}

These release notes cover changes to deployment to [Mendix on Azure](/developerportal/deploy/mendix-on-azure/). There are separate release notes for other deployment targets; for more information, see the [Deployment](/releasenotes/developer-portal/deployment/) release notes page.

For information on the current status of Mendix deployment, see [Mendix Status](https://status.mendix.com/).

### Release date: May 29, 2025

* We have strengthened the preflight check process to deliver a better user experience.

### Release date: April 24, 2025

* You can now update the **Additional Options** even after the clusters have been initialized.
* We have enhanced our preflight check process to deliver a better user experience.
* A back button has been added to the **Review and Initialize** screen, allowing users to return to the Provision screen.
* A new dropdown filter has been introduced on the **Cluster Overview** page to filter clusters by status.
* Users will now see a message indicating the deployment progress of provisioned resources within the cluster.
* A Creator column has been added to the **Support Overview** page to display who created each support ticket.
* We have resolved an issue by disabling the Zendesk ticket link for users who did not create the corresponding support ticket.

### Release date: March 20, 2025

* We have introduced a Custom Tags option in the Initialization flow.
* We have resolved an issue where a deleted cluster manager could still access the cluster in the Mendix on Azure portal after being removed from the Private Cloud portal for a specific cluster.
* The Postgress Compute SKU and Postgress Storage Performance Tier for IOPS can now be configured in the Initialization flow.

### Release date: March 3, 2025

The initial release of Mendix on Azure provides a simplified, integrated way to deploy Mendix applications to a Microsoft Azure environment. For more information about the available features, see [Mendix on Azure](/developerportal/deploy/mendix-on-azure/).
