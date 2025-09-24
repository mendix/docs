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

### Release date: September 11, 2025

* We have improved the translations by adding support for error messages in the **Cluster Overview** page.
* We have fixed a translation issue where **Logging and Monitoring** was displayed twice in Cluster Details page.
* We have fixed the issue where users in Admin and Contributor groups could not view the managed app in the **Cluster Overview**.

### Known issues:

 * Currently, the **updated** or **created** tags in the **Edit** screen of the cluster are not attached to the cluster resources.
 * Support ticket visibility is currently limited to tickets created by the individual user, rather than all tickets within their subscription.
 * Currently, it is not possible to create new environments in the Mendix on Azure cluster. We are working on releasing a fix for this issue soon.

### Release date: August 7, 2025

* Users with the Owner or Contributor roles can now view all uninitialized clusters within their subscription, ensuring better visibility and coordination.
* The cluster deployment progress status now more accurately reflects the actual deployment status.
* We have fixed an issue where new users had to first visit the Mendix on Kubernetes portal before initializing a cluster. They can now initialize a cluster directly in Mendix on Kubernetes.
* We have improved the accuracy and consistency of Japanese and Korean translations in the Mendix on Azure portal.
* Cluster initialization is now limited to users with the Owner role. This resolves a previous issue where users with the Contributor role were also able to initialize clusters.

### Release date: July 3, 2025

* Mendix on Azure users can now create and restore environment backups through Mendix on Kubernetes Portal. For more information, see [Backups in Mendix on Azure](/developerportal/deploy/mendix-on-azure/backups/).
* [Cloud tokens](/control-center/cloud-tokens/) are now required for cluster initialization and environment creation in Mendix on Azure, except when a trial is active. The preflight check now validates if you have sufficient valid cloud tokens.
* The Mendix on Azure portal is now available in Japanese and Korean, enhancing user experience for native speakers. Language preferences can be adjusted in the **Work environment** tab under **Preferences**.
* We have fixed a portal issue where error messages were incorrectly displayed despite successful resource provisioning.
* We have made improvements to the handling of cluster deployment retries.
* We have upgraded managed Grafana to version 11.0.
* We have added the option to enable managed Grafana with private access to the **Initialize** and **Edit** steps for the cluster.
* The preflight check can now validate that the Azure account used to initialize the cluster has an Owner role assigned on the target subscription.

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
* We have resolved an issue where a deleted cluster manager could still access the cluster in the Mendix on Azure portal after being removed from the Mendix on Kubernetes Portal for a specific cluster.
* The Postgress Compute SKU and Postgress Storage Performance Tier for IOPS can now be configured in the Initialization flow.

### Release date: March 3, 2025

The initial release of Mendix on Azure provides a simplified, integrated way to deploy Mendix applications to a Microsoft Azure environment. For more information about the available features, see [Mendix on Azure](/developerportal/deploy/mendix-on-azure/).
