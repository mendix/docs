---
title: "Mendix on Azure Release Notes"
linktitle: "Mendix on Azure"
url: /releasenotes/developer-portal/mendix-on-azure/
description: "Release notes for Mendix on Azure"
weight: 25
---

These release notes cover changes to deployment to [Mendix on Azure](/developerportal/deploy/mendix-on-azure/). There are separate release notes for other deployment targets; for more information, see the [Deployment](/releasenotes/developer-portal/deployment/) release notes page.

For information on the current status of Mendix deployment, see [Mendix Status](https://status.mendix.com/).

### Release date: January 8, 2026

* We have added an option to upload and enable custom CA certificates in the Mendix on Azure portal.
* A video guiding you through the next steps after cluster initialization, is now available on the **Cluster Overview** page in the Mendix on Azure portal.
* We have fixed an issue where the preflight check of the Platform account would fail. This fix prevents the creation of unnecessary support tickets.
* We have fixed an issue that sometimes prevented cluster managers from viewing the clusters which they had initialized.

### Known issues:

* Fields such as **Infrastructure Redundancy** and **Custom CA Certificates** do not have translations available yet.
* Custom CA certificates cannot be enabled during cluster initialisation setup and must be added after initialisation.
* Custom CA certificates cannot be removed once added. This issue will be fixed in a future release.

### Release date: November 27, 2025

* Operator, Agent, Build, Sidecars, and NGINX logs are now directly accessible within Grafana for monitoring and troubleshooting.
* We have introduced a new Infrastructure Redundancy configuration option, available during cluster initialization and cluster edit, to enhance resilience and provide clearer control over VM, Storage, and Database redundancy.
* We have fixed an issue where Terraform apply fails when Read replica is enabled. (Ticket 458)

### Known issues:

* In some scenarios, the initialized cluster may be visible to other users under the same subscription immediately after creation, depending on the logged-in account. We are actively working on a fix for this issue.

### Release date: November 6, 2025

* We have resolved an issue where the AKS Node VM Size field sometimes appeared empty if the corresponding Microsoft endpoint was unavailable. Now, in such cases, the field will not be available for selection, and the value chosen during the cluster's initialization will be automatically considered.
* You can now easily view both the AKS Node VM Size and Postgres Compute Size directly within the Cluster Details section, giving you more immediate insight into your cluster's configuration.
* We have resolved an issue where newly added Cluster Managers could not view clusters in Mendix on Azure Portal until after their initial visit to the portal.
* The AKS Network Isolation feature has been disabled within the Edit Cluster flow.
* For better clarity, we have updated the text from **Managed Grafana** to **Managed Grafana Accessibility** on both the **Initialize Cluster** and **Edit Cluster** pages.
* If your PostgreSQL quota is not available in a chosen region, you will now receive a clear error message, helping you understand and resolve the situation more quickly.
* In the **Initialize Cluster** flow, we have updated the labels for Preflight checks from **Provisioning** to **Checking** for more accurate status indication.
* We have resolved an issue that prevented cluster initialization from proceeding when two or more clusters were being initialized concurrently within the same subscription. You can now initialize multiple clusters without issue.

### Release date: October 23, 2025 - [General Availability (GA) Release](/releasenotes/release-status/#general-availability)

* In order to minimize the risk of security breaches and networking issues, we have added a new **Enable AKS Network Isolation** feature when creating new clusters. Please note that this feature can be enabled in the Initialize cluster and Edit cluster flow. However, once enabled in Initialize flow, it cannot be disabled in the Edit Cluster flow.
* We have improved the log level handling in the Grafana dashboard. The logs are now available in JSON format.
* We have fixed the issue where the cluster tags were not added to the read replicas database.
* We have added a new preflight check in Cluster Initialization flow to validate that only one platform account should be used to initialize the cluster.
* Mendix on Azure users can now upload and download environment backups through Mendix on Kubernetes Portal. For more information, see [Backups in Mendix on Azure](/developerportal/deploy/mendix-on-azure/backups/).
* We have added a new feature which performs automatic nightly, weekly, or monthly backups of the environment. For more information, see [Backups in Mendix on Azure](/developerportal/deploy/mendix-on-azure/backups/).
* [Cloud tokens](/control-center/cloud-tokens/) are now consumed by environments which have been created more than 120 days ago. This effectively means that after the first 120 days (4 months) after app environment creation, Mendix starts charging for the use of Mendix on Azure via Cloud Tokens. In case insufficient Cloud Tokens are available, the customer will be contacted by Mendix.

### Release date: October 16, 2025

* After being added to a [Mendix on Azure](/developerportal/deploy/mendix-on-azure/) cluster in the Mendix on Kubernetes Portal, a [cluster manager](/developerportal/deploy/mendix-on-azure/configuration/#cluster-manager) can now view and edit the cluster from the Mendix on Azure Portal.
* We have resolved the validation error for PostgreSQL tiers that occurred when enabling Read replicas on existing clusters. 

### Release date: September 25, 2025

* In order to ensure app availability during infrastructure upgrades, the number of default replicas for newly created Mendix apps is set to 2.
* To provide greater flexibility in data access, we have added a new feature that allows you to **Enable Read Replica Database access** when creating new clusters. Please note that this feature is set to **No** (disabled) by default. For details on how to enable it, see [Direct App Database Access](/developerportal/deploy/mendix-on-azure/configuration/direct-database-access/).
* We have improved the labels on the default Grafana dashboard to better reflect the metrics being displayed.
* We have fixed an issue where support tickets created by users were not visible to other users in the same subscription.
* We have rephrased some wording and updated the structure on the **Initialize Cluster** and **Edit Cluster** pages for better readability and understanding.
* We have resolved an issue from the previous release that caused database provisioning to fail when creating new environments.

### Known issues:

* Currently, the **updated** or **created** tags in the **Edit** screen of the cluster are not attached to the cluster resources.

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
