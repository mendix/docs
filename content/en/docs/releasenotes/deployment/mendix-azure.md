---
title: "Mendix on Azure Release Notes"
linktitle: "Mendix on Azure"
url: /releasenotes/developer-portal/mendix-on-azure/
description: "Release notes for Mendix on Azure"
weight: 25
---

These release notes cover changes to deployment to [Mendix on Azure](/developerportal/deploy/mendix-on-azure/). There are separate release notes for other deployment targets; for more information, see the [Deployment](/releasenotes/developer-portal/deployment/) release notes page.

For information on the current status of Mendix deployment, see [Mendix Status](https://status.mendix.com/).

## Release date: August 27, 2026

* Mendix on Azure now supports two Azure Marketplace plans: Standard Plan and Just-In-Time (JIT) Access. JIT Access provides enhanced security through time-limited access to resources with approval workflows for environment creation and configuration changes. Infrastructure upgrades can be scheduled and triggered for both JIT and regular environments.
* The cluster detail slider now displays your load balancer IP address.
* Support tickets now include a consent checkbox for log sharing and direct environment access.
* PostgreSQL is now fixed at version 17 to align with Mendix Cloud.
* The High Availability setting is now read-only for existing clusters to prevent PersistentVolume issues.
* AKS maintenance configuration actions are now available to customers.
* Default Grafana alert rules are now provided (disabled by default), matching Mendix Cloud standards.
* Fixed an issue where the Coastguard backup pod was evicted during backups due to storage limits.
* Fixed an issue preventing environment backup downloads.
* Added Terraform lifecycle protection for AKS maintenance configurations to prevent drift.

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
