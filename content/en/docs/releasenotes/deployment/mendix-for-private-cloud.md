---
title: "Mendix for Private Cloud Release Notes"
linktitle: "Mendix for Private Cloud"
url: /releasenotes/developer-portal/mendix-for-private-cloud/
weight: 20
description: "Release notes for deployment using Mendix for Private Cloud"
---

These release notes cover changes to deployment to [Mendix for Private Cloud](/developerportal/deploy/private-cloud/). There are separate release notes for other deployment targets, see [Deployment](/releasenotes/developer-portal/deployment/) release notes page for further information.

For information on the current status of deployment to Mendix for Private Cloud and any planned releases see [Mendix Status](https://status.mendix.com/).

## 2024

### September 5th, 2024

#### Portal Improvements

* We have resolved an issue where updates to constant descriptions were not being reflected in the portal (Ticket [225562](https://mendixsupport.zendesk.com/agent/tickets/225562)).
* We have resolved an issue where updating the environment resulted in an invalid MxAdmin password error (Ticket [226829](https://mendixsupport.zendesk.com/agent/tickets/226829)).

#### Deploy API

* We have fixed an issue where new constants from Studio Pro were not propagated to the cluster by the **Update Environment** API call if they were not specifically mentioned in the manifest. Their default values will be the ones set in Studio Pro.
* We have addressed an issue in the **Update Namespace** API where updating a namespace also required providing **Additional Information** related to the namespace in the manifest. The field has now been marked as non-editable in the specification file and its validation has been removed (Ticket [163987](https://mendixsupport.zendesk.com/agent/tickets/163987)).
* We have added support for modifying ephemeral storage through the API (Ticket [226147](https://mendixsupport.zendesk.com/agent/tickets/226147)).

### August 15th, 2024

* We now allow rounding off model constants value with decimal type to 10 decimal digits.
* We have fixed an issue where the build status failed to be retrieved (Ticket [224896](https://mendixsupport.zendesk.com/agent/tickets/224896)).

#### Portal Enhancements

* We have resolved an issue where an environment was created without a database or storage when a custom core resource plan was selected.

### July 18th, 2024

#### License Manage CLI v0.8.0

* We have introduced a new feature in the PLCL CLI that enables users to upgrade their old PCLM server versions to the latest available version.

#### Portal Enhancements

* We have resolved an issue where an environment was created without a database or storage when a custom core resource plan was selected.
* We have resolved an issue that prevented users from setting the CPU core request below 1 while creating an environment (Ticket [222687](https://mendixsupport.zendesk.com/agent/tickets/222687)) and (Ticket [222284](https://mendixsupport.zendesk.com/agent/tickets/222284)).
* We have resolved an issue where users were unable to deselect the namespace in the **Convert Namespace** flow.
* We have resolved an issue where users were unable to close the **Convert Namespace** screen after navigating back to the namespace selection page.
* We have resolved an issue where a newly created standalone namespace was temporarily listed on the **Namespace Overview** page and only disappeared after refreshing the page.

### July 10th, 2024

#### Mendix Operator v2.18.0 {#2.18.0}

* We have updated components to the latest dependency versions, in order to improve security score ratings for all container images.
* We have resolved an issue where the Operator attempted to reload the runtime license when the PCLM server was down. With this fix, the Operator will no longer attempt to load the runtime license during PCLM server downtime, preventing application restarts.
* We have fixed an issue where the Operator would throw an error when no licenses were installed on the PCLM server.
* We have updated Operator images from ubi8 to ubi9. Mendix apps built with this version of the Operator will keep using ubi8 as the base image by default - this can be changed in the Operator Configuration.
* We have addressed an issue where ARM64 images were shipped with an x86-64 version of the base operating system.

#### Portal Enhancements

* You can now [convert](/developerportal/deploy/global-operator/#convert-standard-operator-to-global-operator) a Standard namespace to a Global Operator managed namespace using the **Convert Namespace** button available in Cluster details page. This feature is available from Operator v2.18.

### July 4th, 2024

#### Portal Enhancements

* We have renamed **Mendix for Private Cloud** to **Deployment** in the upper navigation bar.
* We have removed the **Uptime** field from the **Namespace overview** page.

#### Deploy API

* We have fixed the API specification for the Deploy API where the limit and offset were not specified when trying to retrieve all applications deployed in Private Cloud.

### June 13th, 2024

#### Mendix Operator v2.17.1 {#2.17.1}

* We have fixed a known issue from a previous release - memory usage when building an MDA is now back to normal.

### June 7th, 2024

#### Mendix Operator v2.17.0 {#2.17.0}

* We have added support for Azure Managed Identity authentication for environments using Key vault. Instead of a static password, a Mendix app can use its Managed Identity to authenticate with a Postgres (Flexible Server) database, Azure SQL database, and Azure Blob storage.
* We have added support for Azure Managed Identity authentication to the SQL Server and Postgres provisioners. With this mode, all authentication is handled through Managed Identities, and no static passwords are used.
* We have added an Azure Managed Identity authentication mode to the Azure Blob Storage provisioner. This provisioner isolates environments from each other - every environment can only access its own container, and use its Managed Identity to authenticate with Azure Blob Storage. With this mode, all authentication is handled through Managed Identities, and no static passwords are used.
* For Kubernetes liveness checks, the status of the `ping` calls will be ignored, and instead the app status will be checked with a [check_health](/refguide/monitoring-mendix-runtime/#check-health) command. If an app has a health check microflow, its status will be propagated back to Kubernetes. For apps without a health check microflow, Kubernetes will only receive the result of the [runtime_status](/refguide/monitoring-mendix-runtime/#runtime-status) call.
* If a storage provisioner fails to authenticate with a Postgres or SQL Server database, it will no longer assume it is a network communication issue, and avoid retrying incorrect credentials.
* We have fixed an issue where invalid images were built if the cluster used a custom registry air-gapped with the [Registry Migration](/developerportal/deploy/private-cloud-migrating/) tool.
* We have fixed an issue where running the `mxpc-cli` installation and configuration tool in a pod (container) would fail to authenticate.
* We have updated components to the latest dependency versions, in order to improve security score ratings for all container images.
* Upgrading to Mendix Operator v2.17.0 from a previous version will restart environments managed by that version of the Operator.

#### Known Issue

This issue has been fixed in Mendix Operator [version 2.17.1](#2.17.1).

* Building an MDA file larger than 100 MB fails with an `OOMKilled` pod status. The image builder has a regression where the entire MDA is loaded into memory, instead of reading it in blocks from a temporary file.

### May 30th, 2024

#### Portal Enhancements

* Standalone cluster members are now redirected directly to the mxpc-cli download page instead of the Installation page.
* An issue has been resolved where an incorrect notification email was sent when cluster/namespace membership was auto-accepted.
* A new field, License Provision Error, has been added to the Environment details page for cases where license provisioning fails.
* A problem preventing users with developer permissions from accessing the Model Option from the Environment Overview page has been fixed (Ticket [215150](https://mendixsupport.zendesk.com/agent/tickets/215150)).
* The error message that appears when a user tries to delete the environment after the namespace is deleted directly from the cluster has been corrected.

### May 9th, 2024

#### Deploy API

* We have enhanced support for the Global Operator, allowing for smoother operations in creating, updating, and deleting clusters and namespaces.
* We have resolved an issue where an incorrect error message appeared upon deletion of the default Studio Pro target environment.

#### Build API

* In case of a failed build, users can now access the build logs for debugging purposes by specifying the log query parameter to the `GetJob` endpoint.

#### Portal Enhancements

* Users now have the option to automatically accept invitations for cluster and namespace memberships.
* The **License** section of the **Environment Details** page now includes an additional field displaying the Runtime License ID applied in the environment. This feature is visible for applications deployed with Mendix Operator version 2.16 and later.
* We have added a button next to the mxpc-cli download screen, enabling users to easily copy the download URL for mxpc-cli.
* We have resolved an error related to incorrect email IDs for namespace member invitations.
* We have addressed an issue where the list of Claims was not displayed accurately when navigating back and forth between pages.

### April 25th, 2024

#### Deploy API

* We have added new endpoints for customers to retrieve their applications via API.

### April 24th, 2024

#### Mendix Operator v2.16.0 {#2.16.0}

* The `mendixRuntimeVersion` parameter no longer needs to specified in the MendixApp CR.
* When creating a new app environment in AWS, the IAM region is autodetected based on the bucket region. For AWS GovCloud and China, it is no longer necessary to manually specify the `--iam-region` argument.
* We have completed the integration between Global Operator and PCLM and addressed the remaining issues:
    * The MendixApp status will now correctly show if an environment is configured to use PCLM.
    * License claims will now be correctly refreshed to ensure that licenses from running apps are not reassigned to other environments.
    * License claims are now correctly reported.
* The Global Operator is now available for use and no longer hidden behind a feature flag.
* When upgrading the Global Operator, the `mxpc-cli` installation and configuration tool will now also update all of its managed namespaces as well. To upgrade an entire cluster, the upgrade procedure only needs to run once - for the Global Operator.
* We have updated components to use Go 1.22 and the latest dependency versions, in order to improve security score ratings for all container images.
* Upgrading to Mendix Operator v2.16.0 from a previous version will restart environments managed by that version of the Operator.

### April 18th, 2024

#### Documentation Updates

* We have updated the [CSI Secrets Storage](/developerportal/deploy/secret-store-credentials/) documentation to include instructions on storing credentials and configuration in Azure Key vault.

### April 4th, 2024

#### Portal Improvements

* We have resolved an issue where claimed licenses were occasionally not visible in the **License Claim** list under the **PCLM Statistics** tab.
* You can now export scheduled events to an Excel file.
* Kubernetes server information is now displayed in the **Additional Information** section of namespaces, providing more context for administrators.
* We have fixed an issue where users encountered errors when pressing the **Apply Changes** button multiple times, ensuring smoother operations.
* Users can now set the Studio Pro target in the **Environment Overview** page without encountering any issues. (Ticket [209652](https://mendixsupport.zendesk.com/agent/tickets/209652))
* Disabling the Debugger will no longer display an incorrect loader message, enhancing user experience.
* For Global Operator, a new UUID is now generated every time a main namespace is created in a cluster, ensuring uniqueness and consistency.
* We fixed an issue in the Global Operator where the status for the managed namespace was incorrect under certain conditions.
* We have removed the **Standalone** option when creating the main namespace in the Global Operator, streamlining the process for administrators.

#### Deploy API Improvements

* We have resolved an issue where users were unable to retrieve the environment manifest by using the Deploy API. (Ticket [210555](https://mendixsupport.zendesk.com/agent/tickets/210555))

### March 11th, 2024

#### Mendix Operator v2.15.1 {#2.15.1}

* We have fixed an issue where, in some scenarios, environments didn't restart automatically after deploying a new MDA package. (Ticket 211206)

### March 5th, 2024

#### Mendix Operator v2.15.0 {#2.15.0}

* The build process was refactored by decoupling the base OS image (containing the OS, Java and their dependencies) and Mendix Runtime layers.
    * This simplifies replacing the base OS and Java versions, and keeping them up to date.
    * The Operator will detect which version of Java is required by the app and use the same major Java version that was used to build the app.
* It is now possible to switch the image builder build app images based on `ubi9` instead of `ubi8`.
* Instead of checking if the app is responding to HTTP requests (which only happens after an app has completed its startup process), the liveness probe now calls a dedicated healthcheck endpoint.
    * This prevents Kubernetes from restarting an app if it's temporarily overwhelmed with requests or background tasks - instead, an app fails a liveness check only if it's not replying to healthcheck calls, or returning a failed healthcheck status.
    * It is no longer necessary to adjust startup or liveness probes, as the app will be detected as healthy a few seconds after it is started.
* For Standalone clusters, it is no longer necessary to specify all `microflowConstants` in the MendixApp CR.
    * The Operator will use default constant values for any constants that are not specified.
    * With this change, *Missing microflow constant definitions* errors will no longer cause deployments to fail.
    * In addition, the `mendixRuntimeVersion` parameter no longer needs to be updated.
* The MendixApp CR status will show more details about each of the app's replicas. In the future, the **More Info** button next to the Runtime status will show details such as number of restarts or the replica's pod phase.
* It is now possible to specify the Debugger password in the Kubernetes CSI Secrets Store, enabling secure storage of configurations in credential storage systems like Hashcorp Vault or AWS Secrets Manager.
* After closing the `mxpc-cli` installation and configuration tool, it is possible to resume a previous session and values of all filled in fields.
* The log collection feature of the `mxpc-cli` installation and configuration tool has been expanded to include the saving of operator configuration, storage plans, storage instances, Mendix App CRs, build, pods, endpoint and services.
* When upgrading to this version, configuration of managed namespaces (managed by Global Operator) will be upgraded to ensure that all managed namespaces use a configuration that is compatible with the Global Operator.
* When removing an ingress or service annotation in the Private Cloud Portal or MendixApp CR, the Operator will remove this annotation from the Kubernetes ingress, route or service resource.
* We have fixed ARN validation in the `mxpc-cli` installation and configuration tool, and no longer mark ARNs from custom [AWS partition](https://docs.aws.amazon.com/whitepapers/latest/aws-fault-isolation-boundaries/partitions.html) as invalid. This should improve support for AWS China and GovCloud.
* We fixed an issue where a StorageInstance from a deleted an environment would still show in the StoragePlan status.
* Kubernetes server information is now included in the Mendix operator version data, and in the near future will be available in the Additional Information tab in the Private Cloud Portal.
* We have updated components to use Go 1.21 and the latest dependency versions, in order to improve security score ratings for all container images.
* Upgrading to Mendix Operator v2.15.0 from a previous version will restart environments managed by that version of the Operator.

{{% alert color="warning" %}}
Mendix Operator 2.15.0 is compatible with app images built after December 20, 2023 or later.

Before upgrading to this Operator version, ensure that all apps managed by the Mendix Operator have been deployed after December 20, 2023; if not, rebuild and redeploy app MDAs before (or after) upgrading the Operator.

We recommend regularly updating apps to ensure that they contain the latest security updates.
{{% /alert %}}

### February 22, 2024

#### Portal Improvements

* You can now specify a custom value for the **jettyOptions** within the **Runtime** section.
* Deployment packages that have failed now have an expiry date set.
* We have addressed an issue where changes in the data type and value of the model constants were not reflected in the application. (Ticket [205850](https://mendixsupport.zendesk.com/agent/tickets/205850).)
* We have addressed an issue where **Calendar dates** in **datetime** constants were not visible correctly in dark mode.
* We have addressed an issue where only 10 namespaces were displayed in the **Cluster Overview** page (Ticket [208220](https://mendixsupport.zendesk.com/agent/tickets/208220).)
* The **Cluster Manager** button has been removed from the top menu bar of the Private Cloud portal. You can now navigate to the **Cluster Overview** page using the **Mendix for Private Cloud** button.
* You can now export the app constants to an Excel file.

#### Deploy API Improvements

* You can now configure the **product type** for the Runtime license on the **Namespace** and **Environment** level by using the Deploy API.

### February 1, 2024

#### Portal Improvements

* We have addressed an issue where changes in the data type and value of the model constants were not reflected in the application. (Ticket [205850](https://mendixsupport.zendesk.com/agent/tickets/205850).)

### January 14, 2024

#### New Global Operator Installation Method

* We have introduced a streamlined approach to installing the Operator within a namespace. With the [Global Operator installation](/developerportal/deploy/global-operator/), users only need to install a single Global Operator and Agent to efficiently manage applications across various namespaces. For more information, see the Global Operator installation documentation.

{{% alert color="info" %}}
This feature is currently in beta. For more information, see [Beta Releases](/releasenotes/beta-features/).

Some features, such as Private Cloud License Manager, are not fully supported yet. In addition, the Deploy API does not support the Global Operator yet.
{{% /alert %}}

#### Portal Improvements

* We have added a new option to configure the product type for the Runtime license on the **Namespace details** and **Environment details** page.
* We have addressed an issue on the PCLM statistics page where users encountered difficulty navigating to the license list if it contained more than 100 licenses.
* We have added a warning on the **Namespace Customization** page to let you know that the Ingress annotation will still be kept in the Ingress object even if it is removed from the Portal.
* We have implemented a feature to automatically remove deployment packages that have been inactive for more than two weeks.
* Applying the changes or refreshing the **Environment Details** page will now remember the tab on which the user was present and it will not redirect the user the **General** tab anymore.
* You can now invite multiple individuals as Cluster managers and namespace members by using a semicolon (;) as a separator.
* We addressed an issue in the Deploy API where the character limit for the **Operate** link was restricted to 200. This limitation has been removed, and the **Operate** link now supports unlimited characters, aligning with the Portal behavior (Ticket-202867).

## 2023

### December 8th, 2023

#### Mendix Operator v2.14.0 {#2.14.0}

* We have added the following validation checks to the `mxpc-cli` installation and configuration tool:
    * When configuring a namespace, check to see that the database and blob file storage plans do not use the same name.
    * The registry name is validated to match the [OCI registry spec](https://github.com/opencontainers/distribution-spec/blob/v1.0.1/spec.md#pulling-manifests).
* We have improved the authentication security of the Mendix Gateway Agent connection by switching to digest validation of the cluster ID and secret.
* We have updated our AWS implementation to detect if a custom [AWS partition](https://docs.aws.amazon.com/whitepapers/latest/aws-fault-isolation-boundaries/partitions.html) should be used, and use that partition's ARN format. This should improve support for AWS China and GovCloud.
* We have updated third-party component versions.
* We have improved the reliability of the code that processes statuses for resources such as Network, Build and Runtime. This reduces the number of retries for *the object has been modified, please apply your changes to the latest version and try again* errors, and ensures that status icons are updated as soon as possible.
* For standalone clusters, it is now possible to specify the Kubernetes [topologySpreadConstraints](https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/) field.
* Upgrading to Mendix Operator v2.14.0 from a previous version will restart environments managed by that version of the Operator.

### November 23, 2023

#### Prometheus Metrics

* We have updated the [Grafana dashboard](/developerportal/deploy/private-cloud-monitor/#import-dashboard) for native metrics to deduplicate labels in case the app is restarted. When the app restarts, it will no longer create a new set of metrics.
* We have rearranged JVM heap memory graphs for the G1 Garbage Collector so that *Eden Space* is always on top of other graphs, just like it was with the previous garbage collector.

### November 17, 2023

#### Data Migration Tool (Preview) v0.0.4

* We added support for backing up and restoring data in environments using [AWS IRSA](https://aws.amazon.com/blogs/opensource/introducing-fine-grained-iam-roles-service-accounts/) authentication.

{{% alert color="info" %}}
The data migration tool is available as a technical preview. For documentation and download links, see [Private Cloud Data Transfer](/developerportal/deploy/private-cloud-data-transfer/).
{{% /alert %}}

### November 3, 2023

#### Portal Fixes

* Resolved an issue where ephemeral storage requests and limits were always set to 1 GB. (Ticket [200491](https://mendixsupport.zendesk.com/agent/tickets/200491).)

#### Private Cloud License Manager (Beta- Release 2)

* Resolved an issue where the user was unable to import a large bundle of licenses at the same time.

### November 2, 2023

#### Portal Improvements

* We have introduced a feature within the **Plan** section that enables the deletion of plans from the portal.
* We have separated the **Modify MxAdmin Password** and **Manage Environment** permissions for cases where member permissions are customized. The **Modify MxAdmin Password** option must now be explicitly selected to enable the modification of the MxAdmin password. For existing users, if the **Manage Environment** option is already selected, the **Modify MxAdmin Password** option will be automatically enabled; otherwise, it will remain unselected.
* We have added a new option to search environments based on the namespace on the **Environments Overview** page.

#### Deploy API Improvements

* We have recently decoupled the **Modify MxAdmin Password** and **Manage Environment** permissions for cases where member permissions are customized.

### October 30, 2023

#### Data Migration Tool (Preview) v0.0.3

* We have fixed an issue that prevented backups from completing. Previously, if the database contained a *System.FileDocument* entity with a NULL filename, it would cause an exception during the backup process.

{{% alert color="info" %}}
The data migration tool is available as a technical preview. For documentation and download links, see [Private Cloud Data Transfer](/developerportal/deploy/private-cloud-data-transfer/).
{{% /alert %}}

### October 19, 2023

#### Portal Improvements

* We have added an option to specify additional custom pod labels for an environment from the portal.
* We have added an option to configure the ephemeral storage in the core resources selection flow.
* In order to be consistent with the Mendix Public Cloud portal, the number of constants visible per page has been increased from 5 to 10. A similar change has also been made for scheduled events, custom runtime settings, custom environment variables, and client certificates. For log levels, the number of items visible per page has been increased to 20. (Ticket 196963)
* We have fixed the issue where a user was able to select custom plans created for other namespaces.
* We have added an extra warning message when a user tries to switch from default to custom core resource plans.

### October 13, 2023

#### Data Migration Tool (Preview) v0.0.2

* We have updated the data transfer tool's error-handling code to provide more meaningful error messages.
* If the data transfer tool fails to access or export a file, it will return an error and continue with the process, instead of failing the process immediately.
* The data transfer tool will now only export files which are in use by the app (that is, which are referenced by a `System.FileDocument` entity).
* We have updated the data transfer tool's dependencies to the latest versions.

This tool is available as a technical preview. For documentation and download links, see [Private Cloud Data Transfer](/developerportal/deploy/private-cloud-data-transfer/).

### September 21, 2023

#### Portal Improvements

* We have improved the user experience for the Cluster Manager, Environment Overview and Environment details pages by revamping the UI and adding sorting, searching, and filtering.
* We have added a feature which will allow the creation of customized core resource plans in the Cluster Manager page.

#### Deploy API Improvements

* We have fixed a bug which occurred when providing an extra space in the URL for the API.
* We have improved the **Update Environment** and **Delete Environment** requests by adding the namespace parameter.

### September 19th, 2023

#### Mendix Operator v2.13.0 {#2.13.0}

* We have added support for Azure Workload Identity authentication when pushing images to Azure Container Registry. To use this option, the `mxpc-cli` installation and configuration tool now has a dedicated `microsoft-acr` registry type.
* We have added an option to specify additional custom pod labels for an environment (or all environments in the namespace).
* To improve security, ECR will use IRSA authentication by default instead of static credentials.
* We have updated documentation on configuring and using container registries.
* When pushing an image to a non-existing ECR repository, the Operator will attempt to create it by calling the ECR API.
* We have added support for Postgres 15.
* We refactored registry authentication code to use library authentication instead of binary plugins. This allows the dependencies to be kept up to date, improves reliability of builds and allows improved logging of the authentication process.
* When deploying an image to an environment, the Mendix Operator will now use the built image's sha256 digest to ensure that what was built will be deployed.
* We have updated the list of supported platforms to include Kubernetes 1.28 and OpenShift 4.13.
* Upgrading to Mendix Operator v2.13.0 from a previous version will restart environments managed by that version of the Operator.

### August 17, 2023

#### Portal Improvements

* We have improved the user experience for the Cluster Manager pages by revamping the UI and adding sorting and searching.
* We have changed the layout of the Environment pages in the Developer Portal to a full-width view with the navigation pane in a sidebar to the left.

#### Deploy API Improvements

* We have fixed the issue in the `Get Environments` API call, where the user was unable to retrieve all environments in an application when the same internal id was used for multiple environments. (Ticket: 190490)
* We have added a fix for the `Update Environment` API call, where the user was unable to update environments which are using a dedicated storage plan. (Ticket 189615)
* We have added the ability to automatically accept invitations for namespace and cluster membership.
* We have updated the mandatory fields (email, role) in the Update Namespace/Cluster API calls.
* We have made permissions mandatory if the role is set to CUSTOM.

### July 13, 2023

#### Portal Improvements

* We have now decoupled the scaling from *Start* and *Stop* in the members permission. This means that scaling does not come into effect until the application is started, and you have to click **Start application** in order for the changes to be sent to the cluster
* We have added a banner on the **Namespace details** page to display information about the new Operator release.

#### Deploy API Improvements

* We have now decoupled the scaling from start and stop in members permissions.
* We have added a new **runtimeVersion** field under **Runtime** in the **Manifest of the Environment** in DeployAPI.
* We have fixed a core resource decimal conversion issue in the environment manifest file (Ticket 189615).
* We have fixed an issue where upper-case letters in an email ID would prevent members invited to a cluster manager or namespace from accepting the invite. (Ticket 189975)

### July 6, 2023

#### Mendix Operator v2.12.0 {#2.12.0}

* We have added an option to use IAM-based authentication when connecting to an RDS database and S3 file storage, removing the need for static passwords. To use this feature, you must upgrade your apps to Mendix 9.22 or later. For a walkthrough guide on how to enable and use this feature, see the [walkthrough](/developerportal/deploy/private-cloud-storage-plans/#walkthrough-aws-irsa).
* We have removed the need to specify a namespace name when applying a custom TLS trust config in [non-interactive mode](/developerportal/deploy/private-cloud-cli-non-interactive/).
* We fixed an issue where Google Cloud and Ceph bucket configuration would not be saved or loaded in [non-interactive mode](/developerportal/deploy/private-cloud-cli-non-interactive/).
* We have updated components to use Go 1.20 and the latest dependency versions, in order to improve security score ratings for all container images.
* For apps based on Mendix 9.12 and above, scheduled events are now configured on all instances. This improves reliability in some scenarios where a restart or an update is required.
* We have updated the list of supported platforms to include Kubernetes 1.27.
* We fixed an issue where connections to Azure SQL would fail with a *TLS Handshake failed* error.
* The Mendix Operator will ensure that environments using licenses from the Private Cloud License Manager always have a non-expired license. When an environment's license reaches its expiration date, the Mendix Operator will replace it with a non-expired license from PCLM.

### June 15, 2023

#### Portal Enhancements

* The webhooks feature is now released for GA. Webhooks can trigger endpoints when changes are committed to a Team Server Git repository, or when a new deployment package is available for deployment to the Private Cloud. For more information, see [Webhooks](/developerportal/deploy/webhooks/).

### June 12, 2023

#### Private Cloud License Manager

* We have introduced [Private Cloud License Manager](/developerportal/deploy/private-cloud/private-cloud-license-manager/) which provides a repository of offline Mendix licenses. You can use Private Cloud License Manager to manage these licenses centrally, and to automatically configure the licenses for the Mendix Operator and its Runtime.

{{% alert color="info" %}}
This feature is currently in a [beta release](/releasenotes/beta-features/).
{{% /alert %}}

#### Portal Improvements

* On the **Installation** page of Private Cloud Portal, we have added a section where you can download the CLI for Private Cloud License Manager.
* On the **Namespace details** page of Private Cloud Portal, we have added a section which provides information on the Operator and Runtime Licenses and their usage claims. The section is only visible when Private Cloud License Manager is configured.

### June 5, 2023

#### Portal Improvements

* We have fixed the issue with the namespace or cluster invite, where a member was not able to accept the invite (Ticket 187296).

### June 1, 2023

#### Portal Improvements

* We have added a new **Source** field to the **Environment Details** and **Deployment Package Details** pages. The field shows if the deployment package or environment was created by using the API or the Portal.
* Deleting or uploading a deployment package is now logged in the activity logs.
* Creating or deleting an environment is now logged in the activity logs.

#### Deploy API Improvements

* We have improved the error message that is shown when the same cluster or namespace member is invited twice.
* It is now possible to create an environment without providing the plans when a secret store is enabled for the namespace.
* When creating an environment, the **secretsStoreEnabled** field is no longer mandatory. The field can be added for information purposes.
* We have fixed an issue where a user was not able to create an environment with same ID in same application but in a different namespace (Ticket 185165).

### May 17, 2023

#### Build API Improvements

* We have changed the top-level entity in the response for GetPackage request to Package.

#### Deploy API Improvements

* We have fixed an issue where adding the same cluster member to an update cluster request more than once was not resulting in an error.

### May 3, 2023

#### Mendix Operator v2.11.0 {#2.11.0}

* We have updated components to use Go 1.19 and the latest dependency versions, in order to improve security score ratings for all container images.
* We fixed an issue where applying a custom TLS trust config in [non-interactive mode](/developerportal/deploy/private-cloud-cli-non-interactive/) failed.
* We added a `runtimeLeaderSelection` option that allows you to run an environment without a leader replica - so that an app can be deployed into multiple regions.
* We refactored the way the Mendix Runtime is launched. This removes the need to use Bash and curl to start the Runtime.
* It is now possible to choose between plaintext and JSON formats for Mendix app logs.
* We have extended the options for configuring Ceph RADOS storage buckets. It is now possible to share a bucket between multiple environments.
* We have updated the list of supported platforms to include OpenShift 4.12.

### April 25, 2023

#### Portal Improvements

* We have improved the error message that displays when invalid values are provided in the custom core resources.
* We have added a message in the namespace plan section that displays when a namespace is configured with a secret store.
* We have improved the look and feel of the Private Cloud portal.
* We now allow the upload of deployment packages larger than 500 MB (up until 1024 MB) from the user interface. (Ticket 180884)

#### Deploy API

* We have fixed an issue where the environment list could not be retrieved successfully when the app internal ID was shorter than 8 characters.
* We have fixed an issue where upper-case letters in an email ID would prevent members invited to a cluster manager or namespace from retrieving the environments.

### April 13, 2023

#### Portal Enhancements

* We have added webhooks which can trigger endpoints when changes are committed to a Team Server Git repository, or when a new deployment package is available for deployment to the Private Cloud. For more information, see [Webhooks](/developerportal/deploy/webhooks/).

{{% alert color="info" %}}
This feature is currently in a beta release.
{{% /alert %}}

### March 17, 2023

#### Mendix Operator v2.10.2 {#2.10.2}

* We have updated components to use the latest dependency versions, in order to improve security score ratings for all container images.
* We have fixed an issue where the Operator would continuously create and delete pods after a container's memory, CPU or ephemeral storage had been adjusted by the cluster. (Tickets 175836, 177443)
* We have added an option to specify a custom limit of how many Mendix Runtime versions can be downloaded when using the [Registry Migration](/developerportal/deploy/private-cloud-migrating/) tool. (Ticket 178006)
* We have reduced the scope granted to the `mendix-operator` and `mendix-agent` roles in Kubernetes. Instead of an `*` verb that includes all permissions, the roles are now more fine-grained.
* We have fixed an issue where annotations would only apply to new OpenShift Routes. With this update, it is possible to add or modify annotations in existing OpenShift Routes.
* We have fixed an issue where enabling the **Add credentials to pull secrets** option would not work when the Push URL and Pull URL were different. With this update, credentials are now added for the push and pull registries.
* We have extended the options for configuring Google Cloud storage buckets. It is now possible to share a bucket between multiple environments.

### March 9, 2023

#### Deploy API Improvements

* We have added a new API endpoint for updating the namespaces. This will allow cluster managers to do the following tasks:
    * Add, edit or remove member permissions and members in a namespace.
    * Enable or disable the external secret store and development mode configurations.
    * Add, update, or clear the operational URLs.
    * Activate or deactivate database and storage plans.
* We have improved the Update Cluster API endpoint by allowing cluster managers to add new cluster managers.
* We have improved the responses for `Get Cluster`, `Get Namespace`, `Get Clusters`, and `Get Namespaces`. The responses now provide more information for the user.
* We have improved the Delete Cluster API endpoint by allowing the forced deletion of a cluster with namespaces, as long as the namespaces do not have any attached environments.
* We have modified the OpenAPI specification file. Please download or check the latest version.

#### Build API Release

* We have introduced a new Mendix for Private Cloud Build API, which allows users to build, upload, delete and retrieve deployment packages for an application deployed in the Private Cloud.

### February 16, 2023

#### Portal Improvements

* We have improved the validation message for the internal name in the environment creation flow.
* We have removed access to the old deployment packages repository. This means that active deployment packages which have not been deployed in the last 4 weeks might stop working. If that happens, simply recreate the deployment package with the same revision, and then redeploy it in your environment.

### February 9, 2023

#### Portal Improvements

* We have added a new info section on top of the **Environments Overview** page which will be used to improve the communication about upcoming features and deprecations in the Portal. If nothing needs to be communicated, the section will be hidden.
* We have fixed the known issue from previous release where the builds were failing when customer tried to deploy the same deployment package or scale the app.

### February 8, 2023

#### Mendix for Amazon EKS

As part of our [strategic partnership with AWS](/partners/aws/), we have added a way for you to streamline the deployment of your apps in your AWS account by automatically provisioning a private cloud environment, based on Amazon Elastic Kubernetes Service (EKS). By using the Mendix for Amazon EKS solution, you can deploy your apps in the AWS cloud in a simplified, automated way. For more information, see Mendix for [Amazon EKS—Terraform module](https://aws.amazon.com/solutions/partners/terraform-modules/mendix-eks/).

### February 7, 2023

#### Documentation Updates

* We have updated the [CSI Secrets Storage](/developerportal/deploy/secret-store-credentials/) documentation to clarify how database password rotation works, and how to use AWS RDS IAM authentication instead of passwords.

### February 2, 2023

#### Portal Improvements

* We have updated the registry for downloading MDA artifacts from `https://privatecloud.mendixcloud.com/` to `https://package-store-prod-2.s3-accelerate.amazonaws.com/`.
* We have removed the registry for downloading placeholder MDA artifacts (`https://cdn.mendix.com/`).
* We have added the **Package ID** field to display the ID of a deployment package in the deployment package details.
* We now provide the feature to lock or unlock the deployment package in the environment **Overview** page. Any existing deployment packages will remain in an unlocked state. New deployment packages deployed in the environment will be locked by default.

#### Known Issues

Your build may fail if you try to deploy the same deployment package more than once in the same environment. To fix this issue, recreate the deployment package, and then deploy it again. The same workaround is sometimes required when rescaling an application. A fix for this issue will be available in an upcoming release.

### January 26, 2023

#### Mendix Operator v2.10.1{#2.10.1}

* We have updated components to use the latest dependency versions, in order to improve security score ratings for all container images.
* We have switched from UBI 8 Minimal base images to [UBI 8 Micro](https://www.redhat.com/en/blog/introduction-ubi-micro).
* We have implemented a feature to use [IAM role authentication](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html) when connecting to RDS Postgres databases. This feature depends on an upcoming release of Mendix, and additional documentation will be provided later.

### January 19, 2023

#### Portal Improvements

* When using Mendix Operator version 2.10.0, it is now possible to load MxApp constants and custom runtime settings from the Kubernetes CSI Secrets Store. This allows you to store configuration in a secure credential storage system (such as Hashcorp Vault or AWS Secrets Manager) instead of the Cloud Portal and Kubernetes secrets.
* We have added a new status field indicating whether custom runtime setting and MxApp constants were loaded from CSI Secrets Storage.
* We have added a notification on top of the Model Options and Runtime Settings page to indicate whether CSI Secrets Storage is enabled for a namespace.
* We have removed the limit of eight characters for the MxAdmin password. You should set the password based on the policy set in Studio Pro.
* We have fixed an issue where users were unable to update the datatype of constants in the Private Cloud portal. (Ticket 173999)
* We have fixed a bug where sometimes the log levels were not editable.
* Unused deployment packages from your repository are now removed if they are older than two weeks.

#### Deploy API Improvements

* We have fixed a network error issue with the **Try it out** option in the [Private Cloud Deploy API documentation](/apidocs-mxsdk/apidocs/private-cloud-deploy-api/).

### January 5, 2023

#### Mendix Operator v2.10.0{#2.10.0}

* We have added an option to set app constants and custom Mendix Runtime settings when using CSI Secrets Store.
* It is now possible to use Azure Blob Storage instead of S3 when using CSI Secrets Store.
* We have improved status messages to indicate what data is used by CSI Secrets Store and if any additional configuration steps are required.
* If the CSI Secrets Store driver rotates credentials, Mendix Operator will detect this and apply changes.
* We upgraded all Go-based components to Go 1.18. (Ticket 163987)
* We fixed a bug where deleting an environment would not clean up its database and file storage users and data.
* We fixed a regression where collecting Prometheus metrics would return an error. This regression only affects Mendix Operator version 2.9.0.
* The `mxpc-cli` installation and configuration tool now has an option to collect and save logs and additional diagnostic data in a file. By using this option, collecting and sending diagnostic data to support becomes a lot easier.

## 2022

### December 1, 2022

#### Portal Improvements

* We have introduced an API which supports the creation, modification, and deletion, of clusters, namespaces, and environments. You can find more information in [Mendix for Private Cloud Deploy API](/apidocs-mxsdk/apidocs/private-cloud-deploy-api/).
* We now add the creator name in the activity logs when an app is autodeployed.

### November 17, 2022

#### Portal Improvements

* A new attribute `allowOverrideSecretsWithSecretStoreCSIDriver` has been added in the MendixApp CR. This allows the app to use credentials held in the secret store.
* When using Mendix Operator version 2.9.0, it is now possible to load database, file storage, and other configurations (such as MxAdmin password) from the Kubernetes CSI Secrets Store. This allows you to store configuration in a secure credential storage system (such as Hashcorp Vault or AWS Secrets Manager) instead of the Cloud Portal and Kubernetes secrets. In upcoming releases, it will be possible to store more configuration options in the CSI Secrets Store - such as app constants and runtime settings.
* We have added a new section to enable and disable the secret store on cluster manager page. When this switch is enabled by the Cluster Manager, you can create an environment using secret store credentials for database, storage, and MxAdmin password.
* We have added a new status field indicating whether database, file storage, and other configuration options were loaded from CSI Secrets Storage.
* We fixed an issue where deployment with spaces in the branch lines triggered an error. (Ticket 167448 and 167577)
* We have added a new status on the environment details page when environment is attached to a service account.
* The Cluster Manager can enable and disable development mode in cluster manager page. This will allow the developers to create app in development mode.
* We added activity log entries when development mode is enabled or disabled in a Namespace.

### November 14, 2022

#### Mendix Operator v2.9.0{#2.9.0}

* We now allow you to use pod identity webhook authentication for ECR registry authentication. With this, the image builder will use the service accounts for authentication. This is more secure than static credentials.
* We provide additional information for service account status showing whether the service account is successfully attached to an app.
* When using CSI secrets storage, we now indicate which parameters were loaded from the secret storage.
* We replaced an internal go-chi dependency with Go Fiber to ensure that Mendix for Private Cloud is using a well-maintained HTTP implementation.
* We also fixed an issue where mxpc-cli was not responding to the mouse inputs in a Linux terminal. (Ticket 168570)

### October 6, 2022

#### Portal Improvements

* We now allow sorting of namespaces in the namespace selection list of the Create environment flow.
* Newly-created environments will always run in Production mode (the DTAP mode is set to `P`) – you can no longer choose the purpose of your environment.
    * This means that all apps must have [app security](/refguide9/app-security/) set to `Production`.
* We have made the **Subscription Secret** field optional – if no subscription secret is provided the app will be considered a trial app.
* We now allow you to retrieve up to 100 branches for a project when creating a deployment package in the portal.

### September 29, 2022

#### Mendix Operator v2.8.0{#2.8.0}

* We have now reduced the security permissions required by Mendix for Private Cloud pods. This means that pods do not need elevated permissions on the Kubernetes cluster.
* We have limited the Mendix app emptyDir size to 4 MiB to prevent memory-backed emptyDirs from consuming more memory than required.
* You may see some other minor changes to the Mendix Operator. These do not add or change any functionality at present, but are in preparation for supporting external storage secrets in a future release.

### September 27, 2022{#tekton}

* We have added a number of Tekton pipelines that can be used to create a CI/CD (Continuous Integration and Delivery/Deployment) solution for your Mendix for Private Cloud apps. For more information, see [CI/CD for Mendix for Private Cloud using Tekton](/developerportal/deploy/private-cloud-tekton/).

### August 26, 2022

#### Mendix Operator v2.7.0{#2.7.0}

* We have changed how TLS trust is configured when building container images; this addresses an issue when OpenShift clusters in Connected mode need to trust custom CA certificates (for example, from a proxy)
* We have reduced temporary disk usage by about a third when an image is built. The MDA file is now converted directly into a .tar layer instead of being extracted first.
* The Mendix Operator now restores [ownerReferences](https://kubernetes.io/docs/concepts/overview/working-with-objects/owners-dependents/) for all managed resources if they are not set.
* The Mendix Operator now specifies the appProtocol in Kubernetes services to help middleware such as Istio know which [protocol](https://istio.io/latest/docs/ops/configuration/traffic-management/protocol-selection/#explicit-protocol-selection) the app is using and handle traffic as HTTP instead of TCP.
* We now allow the running of a Mendix environment using a [specific Kubernetes ServiceAccount](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/#use-the-default-service-account-to-access-the-api-server) instead of the default ServiceAccount.
* We have added an option to specify a custom, fixed S3 bucket prefix when using the S3 (existing bucket and account) Storage Plan.

### August 25, 2022

#### Portal Improvements

* We added activity log entries for Runtime Metrics Configurations.
* We fixed an issue where the runtime status indicator keeps spinning even after deployment is successful. (Ticket 153960)
* We added Save and Save and Apply functionality for all the annotations (Ingress, Service, and Pod) on the cluster manager page.
* We improved the error message displayed when no deployable environments are found due to missing permissions.

### July 12, 2022

#### Mendix Operator v2.6.0{#2.6.0}

* We improved the default health check configuration by allowing the use of Kubernetes startup probes. This feature improves the reliability of environments that need more time to initialize, for example when executing database migration startup microflows.
* We now allow you to customize the Kubernetes `terminationGracePeriodSeconds` attribute for apps, allowing an app to have more time to perform a clean shutdown — for example to close database connections and complete microflows and scheduled events that are already running.
* We fixed a build error which happened when an MDA included a data snapshot.
* We resolved an issue where the sidecar container didn’t process the shutdown signal, even when the app container was stopped (this meant that stopping an app took 30 seconds)
* We have disabled the `enableServiceLinks` Kubernetes feature — this prevents app pods from receiving a list of all services running in a namespace through environment variables.
* When connecting to the Development Portal, the Mendix Gateway Agent will now trust CAs specified through [Custom TLS](/developerportal/deploy/standard-operator/#custom-tls)
* We fixed an issue where the Operator was restarting the build pod when using AWS identity webhooks.

#### Portal Improvements

* We fixed an issue where users were unable to see all the environments on the environment details page. (Ticket 151698)

### June 2, 2022

#### Portal Improvements

* We now provide the `mxpc-cli` configuration tool (version 2.5.1 and above) in versions which run on ARM64 architectures.

### May 25, 2022

#### Mendix Operator v2.5.1{#2.5.1}

* We addressed a regression in Mendix Operator v2.5.0 where an error would show a spinner icon in the Developer Portal (instead of an error icon)
* We addressed an issue with deleting Minio storage from [Minio RELEASE.2021-11-05T09-16-26Z](https://github.com/minio/minio/releases/tag/RELEASE.2021-11-05T09-16-26Z) and later versions

### May 19, 2022

#### Portal Improvement

* We improved the experience of uploading a deployment package to your deployment package repository.
* We improved database performance.
* We now remove unused deployment packages from your repository if they are more than two months old.

#### Portal Fixes

* We resolved an issue where the wrong number of replicas was reported after a restart. (Ticket 148333)
* We resolved an issue where the refresh button did not always display all the environments.

### May 12, 2022

#### Mendix Operator v2.5.0 and Mendix Gateway Agent v2.5.0

* We improved support for injected sidecars - the Operator now works correctly with sidecars injected into any pod, not just app pods. It is now possible to install a service mesh such as [Istio](https://istio.io/) or [Linkerd](https://linkerd.io) for the whole namespace, and route all traffic between pods through the service mesh.
* We refactored our internal build process - images now share layers as much as possible, reducing download sizes and making it easier to patch CVEs from the base OS layers.
* A subset of Mendix for Private Cloud components are now available for the ARM64 architecture, allowing you to deploy Mendix apps to machines running Apple Silicon, Raspberry Pi 4, and server-grade ARM64 chips.

#### Known Issue

This issue is fixed in Mendix Operator [version 2.5.1](#2.5.1).

* If an error occurs in these scenarios, it will show a spinner icon in the Developer Portal (instead of an error icon):
    * Building an app image
    * Requesting a database or file storage for a new environment

### April 21, 2022

#### Portal Fixes

* We fixed an issue where dates set in an environment variable was malformed when passed to the Mendix Runtime. (Ticket 144314)

### March 22, 2022

#### Fixes

* We fixed an issue where the number of replicas was not correctly reported
* We fixed an issue where some users could not deploy MDAs (Tickets 144512 and 144908)

### March 10, 2022

#### Portal Improvement

* We have added support for Pod Autoscaling. If you are using this, the number of replicas will be displayed. To use autoscaling, see [Pod Autoscaling](/developerportal/deploy/private-cloud-cluster/#horizontal-autoscaling) in *Creating a Private Cloud Cluster*.
    * Note that we are aware that the maximum number of replicas is sometimes displayed as `0` for existing environments and are working on a fix.
* We now allow sorting of and searching in the following:
    * members invited for a namespace
    * members invited for a cluster
    * database and storage plans in a namespace
* We have added a tooltip to assist in using the **Purpose** field

### March 4, 2022

#### mxpc-cli v2.4.1 for Mendix Operator v2.3.0

* We have added an option to clear the local cache and check for updates to verify that the hash of your downloaded images matches with remote images.
* We have also fixed issue where users got an error while installing the Operator (Ticket 142583).

### February 10, 2022

#### Mendix Operator v2.4.0 and Mendix Gateway Agent v2.4.0

* We have added an option to use "native" or "compatibility" metrics. The native mode is only available for Mendix 9.7 and above, while compatibility mode is for Mendix 9.6 and below. See [Customize Runtime Metrics](/developerportal/deploy/private-cloud-cluster/#customize-runtime-metrics) in *Creating a Private Cloud Cluster* for more information.

#### Portal Improvement

* We have improved the UX, and added a new button, **Save and Apply** to directly apply changes made in an environment. This button restarts the environment.
* We have added the ability to add metrics configuration to an environment.

### January 13, 2022

#### Mendix Operator v2.3.0 and Mendix Gateway Agent v2.3.0

* We have added a new field to set the Kubernetes ingress class as an annotation in the installer.
* We have added a new feature to customize your image names in the registry using a [custom imageNameTemplate](/developerportal/deploy/private-cloud-registry/#customize-registry-imagenametemplate).

#### Portal Improvements

* We have added a new field, **cluster owner**, on the cluster details page. A cluster owner is now also displayed as a cluster manager in the cluster managers tab.
* We have updated the UX in the create environment flow and added a **more info** button to the environment details page.

### January 12, 2022

#### Prometheus Metrics

* We have updated the [Grafana dashboard](/developerportal/deploy/private-cloud-monitor/#import-dashboard) to be compatible with version 2.5.1 of the `grafana/loki-stack` Helm chart. If you're planning to upgrade the `loki-stack` Helm chart in your cluster, you will need to use the updated dashboard.
* The monitoring solution is now compatible with Kubernetes version 1.22.

## 2021

### December 9, 2021

#### Portal Improvements

* We have fixed an issue where the app URL is not editable when trying to deploy to an environment in a namespace with service-only ingress, type = ClusterIP.
* We have replaced the placeholder app in environment creation with a deployment package. A valid deployment package is required to create a new environment.

### December 6, 2021

#### Mendix Operator v2.2.0 and Mendix Gateway Agent v2.2.0

* To improve the security score of all Mendix for Private Cloud images, we replaced a deprecated [operator-sdk v0.18.2](https://v0-18-x.sdk.operatorframework.io/docs/) dependency with a maintained version of [kubebuilder](https://book.kubebuilder.io/).
    * This update allows us to address [CVE-2020-8565](https://access.redhat.com/security/cve/cve-2020-8565), [CVE-2020-26160](https://access.redhat.com/security/cve/cve-2020-26160) and [CVE-2020-29652](https://access.redhat.com/security/cve/cve-2020-29652). These CVEs do not affect previously released versions of Mendix for Private Cloud.
    * This internal library change does not change the behavior of any Mendix for Private Cloud components.
* When switching to the *Review and Apply* screen in `mxpc-cli`, previous results will be cleared.
* We have fixed an issue where attempting to apply a custom TLS configuration in non-interactive mode with `mxpc-cli` failed with a panic error.

### November 18, 2021

#### Portal Improvements

* We have increased the deployment package size limit from 200 MB to 512 MB.
* We have fixed an issue when the Runtime version was not visible on the transport package screen.
* We have removed the restriction on the use of the `kubernetes.io/ingress.class` ingress annotation.
* We have changed the navigation pane to match the rest of the Developer Portal.

### November 15, 2021

#### Supported Providers

* We have completed validation of Kubernetes 1.22 and Postgres versions 11, 12 and 13.

To see more details about supported databases and Kubernetes versions, see the [Supported Providers](/developerportal/deploy/private-cloud-supported-environments/) document.

### October 27, 2021

#### Prometheus Metrics

* We have documented how to collect logs and metrics in Mendix for Private Cloud.
* We have created a reference Grafana dashboard that offers a familiar experience for Mendix Cloud v4 [Metrics](/developerportal/operate/metrics/) users.

To use Prometheus metrics, upgrade to Mendix Operator v2.1.0 (or above) and follow the [instructions](/developerportal/deploy/private-cloud-monitor/).

### October 25, 2021

#### mxpc-cli v2.1.2 for Mendix Operator v2.1.0 and Mendix Gateway Agent v2.1.0

* We have added support for configuring Ceph Object Storage as a storage type.
* We have added an option to prevent data deletion when using one of the storage plan types minio, amazon-s3, azure blob, google cloud, or ceph.

    The new option prevents files being deleted from storage when an environment is removed.

### October 14, 2021

#### Portal Improvements

* We have replaced the Mendix 8 placeholder app which is deployed when you add a new environment with a Mendix 9 app. Use the Mendix 7 placeholder app if you are planning to deploy a Mendix 7 or Mendix 8 app.

### September 27, 2021

#### Data migration tool (preview)

* We have added a data migration tool - that can be used to transfer data between Mendix for Private Cloud environments.
* This tool is compatible with Mendix Cloud v4 [backup files](/developerportal/operate/restore-backup/#format-of-backup-file).

This tool is available as a technical preview. For documentation and download links, see the [documentation](/developerportal/deploy/private-cloud-data-transfer/).

### September 9, 2021

#### mxpc-cli v2.1.1 for Mendix Operator v2.1.0 and Mendix Gateway Agent v2.1.0{#2.1.1}

##### Fixes

* We have fixed the [known issue with the outdated apps deployment label after upgrading a namespace to Mendix Operator v2.1.0](#2.1.0). The workaround of deleting app deployments manually in the previous version mxpc-cli v2.1.0 is no longer required. (Ticket 129150)

#### Portal Improvements

* We have updated the environment details page to show the status of individual pods.
* We have added some validation when you configure Pod/Service/Ingress annotations in the portal.
* We have added the ability to select the default target environment for Studio deployment.
* We have fixed an issue where you get duplicate scheduled events and constants after renaming them in a mendix app.
* We have improved the page to configure annotations (ingress, service, and pod) from the Developer Portal for connected clusters.

### September 2, 2021{#20210902}

#### Mendix Operator v2.1.0 and Mendix Gateway Agent v2.1.0

* We have added support for Google Cloud Platform.
* We have added some new features to run our installer and configuration tools in a non-interactive way. [Install and Configure Mendix for Private Cloud Non-interactive Mode](/developerportal/deploy/private-cloud-cli-non-interactive/)
* We have added more metrics in our sidecars.
* We have added additional details about the Runtime status for each replica, including the license status and errors that might be preventing the Runtime from starting.
* We have fixed an error `M2EE: An error occurred while executing action 'get_license_information'` that was sometimes logged while the Runtime was starting.

##### Known Issue{#2.1.0}

This issue is fixed in [version 2.1.1](#2.1.1) of `mxpc-cli`.

* Upgrading a namespace from operator v2.0.0 to v2.1.0 causes app deployments to have outdated labels or annotations that make your environments unreachable.  (Ticket 129150)

    To fix the issue, you must delete the app deployments using the following commands:

    ```text
    kubectl delete deployment <app>-master -n <namespace>
    kubectl delete deployment <app>-worker -n <namespace>
    ```

### August 12, 2021

#### Mendix Operator v2.0.0 and Mendix Gateway Agent v2.0.0

* We have switched all components to use the modern Kubernetes APIs: `networking.k8s.io/v1` and `apiextensions.k8s.io/v1`.
    This change allows us to continue supporting future versions of Kubernetes.
* This version of Mendix Operator and Gateway Agent only supports Kubernetes 1.19 and later versions.
* Mendix Operator v1.12. and Mendix Gateway Agent v1.11. will continue in Long Term Support (LTS) to support clusters running older versions of Kubernetes.

To upgrade an existing installation of Mendix for Private Cloud to Mendix Operator v2.0.0 and Mendix Gateway Agent v2.0.0, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide/).

{{% alert color="warning" %}}Mendix for Private Cloud has not yet been fully validated to support Kubernetes 1.22, a [new release](https://kubernetes.io/blog/2021/08/04/kubernetes-1-22-release-announcement/) which removes support for several deprecated APIs and features.
{{% /alert %}}

### July 6, 2021

#### Portal Improvements

* We added the ability to configure annotations (ingress, service, and pod) from the Developer Portal for connected clusters.

#### Portal Fixes

* We resolved an issue where environment variables were limited to 200 characters.
* We resolved an issue where changing the cluster name or description could remove other cluster managers from the cluster.

### June 29, 2021

#### Mendix Operator v1.12.0 and Mendix Gateway Agent v1.11.0

* We have added more networking configuration options, allowing to use new Ingress and Service types. You can now:
    * use templates in Ingress and Service annotations.
    * use a Service without creating an Ingress – for example to use a load balancer service, or to manually create your own Ingress object.
    * customize the Ingress path and path type (required to support Ingress controllers such as AWS Application Load Balancer).
    * customize the Ingress class.
    * customize the Service type.
    * customize the Service port (or ports).
* We have added options to override the following Ingress and Service options per-environment (only supported in Standalone mode at the moment):
    * Ingress annotations
    * Service annotations
    * Ingress class
    * Ingress path and path type
* When a custom `ApplicationRootUrl` is specified in Custom Runtime Settings, it will be used instead of the automatically generated application URL.
* We have fixed an incorrect *Runtime has an empty (trial) license* log message which appeared when using a Subscription Secret license.
* We extended the Mendix Operator trial period from 30 days to 90 days. (Tickets 118172, 121775, 124921)

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide/).

### May 4, 2021

#### Mendix Operator v1.11.0 and Mendix Gateway Agent v1.10.0

* We have added features required to support Linkerd [Automatic Proxy Injection](https://linkerd.io/2.10/features/proxy-injection/). [Linkerd](https://linkerd.io/) is a Service Mesh which offers multiple features, such as encrypting HTTP requests between the Ingress Controller and Mendix app Pods.
    * You can now set the `automountServiceAccountToken` option for Mendix App containers.
    * You can now set Pod annotations for all Mendix app Pods in a namespace.
* We have fixed an issue with using additional Azure SQL Server arguments.
* We have fixed an issue when creating S3 buckets in the `us-east-1` region. (Ticket 119956)
* We have fixed an *unable to patch Agent with type proxy_agent_patch: resource may not be empty* error when trying to apply proxy settings. (Tickets 119955,120258)
* We have fixed an issue when updating a Storage Plan would fail with a *cloud portal returned invalid status code: 409* error message. (Ticket 119294)

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide/).

### April 19, 2021

#### Portal Improvements

* We have fixed an issue with downloading a custom Mendix Operator version if the Mendix Gateway Agent is disconnected.
* We have fixed an issue where a cluster admin would see activity logs from other clusters.
* We have fixed the autodeploy feature.
* We have resolved an issue where the *Run in cloud* button was sometimes disabled in Studio Pro.

#### Mendix Operator v1.10.0 and Mendix Gateway Agent v1.9.0

* We have updated all containers to set `allowPrivilegeEscalation=false`, so that containers will no longer be able to modify their user id.
* We have updated all base images to no longer modify `/etc/passwd` on startup.
* We have updated Mendix app containers to set `automountServiceAccountToken=false`, so that Mendix apps will no longer be able to call the Kubernetes API.
* We have added default resource requests and limits to the Mendix Operator and Gateway Agent. This will limit resource usage and improve support for cluster autoscaling.
* The Mendix Operator will now automatically set the `ApplicationRootUrl` runtime option based on the app URL.
* We have improved the reliability of detecting the correct container image versions when migrating to an air-gapped or private registry.

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide/).

### March 31, 2021

#### Mendix Operator v1.9.1

* We have fixed a Pod crash when the Mendix Operator tries to create or delete a SQL Server or Azure SQL database.
* We have updated the default list of items to configure in the Configuration Tool; the **Proxy** and **Custom TLS** options are now unchecked by default.
* We have added support for additional authentication methods into the Configuration Tool, including the Azure auth provider. (Ticket 118790)
* We have fixed the output format of patches generated by the Configuration Tool's **Write YAML** button.

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide/).

### March 18, 2021

#### Mendix Operator v1.9.0 and Mendix Gateway Agent v1.8.0

* We have significantly improved the Configuration Tool:
    * Bash (or Git Bash) is no longer required to install and configure a cluster. This allows you to use the tool in most Windows terminals such as PowerShell and Windows Command prompt with no workarounds.
    * The installation process no longer needs to communicate with an external service to download installation resources, and only needs access to the Kubernetes cluster API.
    * Migration of Mendix components to a Private Cloud registry no longer requires downloading and patching the installation script.
    * The process for upgrading to the next version of Mendix for Private Cloud has been completely automated. Instead of a manual process using a Bash terminal, an upgrade can be done with a click of the mouse.
    * It's now possible to install or upgrade to a specific version of Mendix Operator (1.9.0 and later). Previously, it was only possible to install the latest version of the Operator.
* We have added reporting of the **Storage Provisioner Version** to the Private Cloud Portal.
* We have added dedicated sections to configure scheduled events and app constants when using the Operator in standalone mode.

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide/).

### February 18, 2021

#### Portal Improvements

* We have improved instructions how to install Mendix for Private Cloud components from a Windows system.
* For Mendix Operator v1.8.0 and later versions, the Private Cloud Portal will display versions of components currently running in a cluster.
* The Private Cloud Portal now allows to download a version of the Configuration Tool that's compatible with the Mendix Operator installed in a cluster.
* We have fixed a UI layout issues that were sometimes visible when an environment failed to build a container image. (Ticket 114548)
* We have fixed an issue with the feedback widget duplicating itself.

#### Mendix Operator v1.8.0 and Mendix Gateway Agent v1.7.0

* We have improved dependency version management, so upgrading to future versions of the Mendix Operator will be easier.
* We have introduced versioning for all components, instead of using the "latest" version. All components are now tested for compatibility, and once the Mendix Operator is installed, its behavior will remain unchanged. Components can only be updated through a manual update process.
* We have added a feature to report installed component versions to the Private Cloud Portal. In the future, this will be used to indicate which Mendix for Private Cloud Operator version is installed and which features it supports.
* We have added a new S3 option, allowing the use of an existing IAM policy and S3 bucket. Each environment will still get its own account (AWS IAM user) and will not have access to files from other environments.
* We have improved the S3 storage configuration UI in the Configuration Tool.
* We have updated the Configuration Tool to run in fullscreen, so that it adapts better to smaller and larger screens.
* We have fixed an issue with misleading error messages in the container logs if Mendix Runtime is failing to start. If the MxAdmin user has an insecure password, a correct error message will be displayed.

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide/).
After upgrading the Mendix Operator, Mendix recommends downloading the latest version of the Configuration Tool.

### January 6, 2021

#### Improvements

* We added the ability to export Mendix components from the Mendix registry and import them into your own registry. This allows you to use Mendix for Private Cloud behind a firewall. For more information see [Migrating to Your Own Registry](/developerportal/deploy/private-cloud-migrating/).

## 2020

### December 29, 2020

#### Fixes

* We fixed an error where opening the feedback widget on a Mendix for Private Cloud page in the Developer Portal resulted in an error.
* We upgraded the Mendix version used for Mendix for Private Cloud in the Developer Portal to apply the latest security fix.

### December 14, 2020

#### Portal Improvements

* We have added support in the Developer Portal to configure custom Certificate Authorities which should be trusted by the Mendix Operator and app environments.
* We now add an environment UUID to environments deployed to Private Cloud namespaces so environment names no longer need to be unique.
* As part of a Developer Portal clean up, we removed the *Model* option from the *DEVELOP* section of the Developer Portal menu when you are looking at environments on Mendix for Private Cloud. The functions of this page are still available via the **Edit in Studio Pro** button on the environments page.

#### Fixes

* We fixed the bug where you would be taken to a non-existent page and receive a *404 Not Found* message if you didn't select an Operating System when downloading the configuration tool.

### December 10, 2020

#### Mendix for Private Cloud — Mendix Operator v1.7.0 and Mendix Gateway Agent v1.6.0

* We have added a configuration option to add custom Certificate Authorities which should be trusted by the Mendix Operator and app environments.
* We have added a Strict TLS mode to PostgreSQL, SQL Server, and Minio, which will only allow connections to the database and file storage if there is a valid and trusted TLS certificate. Together with the custom Certificate Authorities option, this will ensure that Mendix apps are connecting to the database and file storage over a secured connection. Strict TLS mode should only be used with apps created in Mendix 8.15.2 (or later versions), earlier Mendix versions will fail to start when validating the TLS certificate.
* We have added an option to specify TLS client certificates in Mendix apps. A Mendix app can use a TLS client certificate when communicating with external web services.

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide/).

### November 16, 2020

* We have introduced a new, interactive, installation and configuration tool for the Mendix Operator. The previous installation scripts are still available, and you can choose between the new and previous installation tools.
* We added access rules for namespaces to control access to the debugger and TLS.
* We added activity log entries for TLS, the debugger, changing log levels, and uploading an mda locally.
* We improved the stability of the Private Cloud Portal.
* We added a warning message when the operator license has expired

### October 30, 2020

#### Mendix for Private Cloud — Mendix Operator v1.6.1

* We have fixed a bug where building and pushing an image into some registries (such as coding.net) would fail with an authentication error.
* If creating a database or file storage for a new environment fails, the Mendix Operator will now attempt to clean up (roll back) temporary resources. In this case, a manual cleanup is not required. In addition, log messages for such failed attempts will provide details on what what was created and rolled back.

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide/).

### October 21, 2020

#### Portal Improvements

* We added the ability to configure TLS on an environment level.
* We added the ability to link the Studio Pro debugger to an app running through Mendix for Private Cloud.
* We added the ability to upload an MDA to the Developer Portal.
* We split the **Edit App** button into two separate buttons, **Edit in Studio** and **Edit in Studio Pro** on some of the Developer Portal pages (Environments, App Services, Metrics, Alerts, Logs, Backups, and the Node Permissions tab of Security).
* We updated the drop down for the **View App** button.

#### Portal Fixes

* We fixed an issue where the cluster icon was only visible to members of a namespace.
* We fixed an issue where the **Next** button did not display correctly if no MDA branch was selected. (Ticket 108399)

### October 15, 2020

#### Mendix Operator v1.6.0 and Mendix Gateway Agent v1.5.0

* We added support for debugging apps deployed to Mendix for Private Cloud.
* We fixed a memory leak in Agent which occurred when it was restarted and the cluster was deleted from the Developer Portal.
* We fixed an issue where the Operator pod was crashlooping until the Operator was fully configured.

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide/).

### September 14, 2020

#### Fixes

* We resolved an issue where deployment of a new MDA to an environment set the constant values to the defaults in the MDA rather than applying the values set through the environment's [Model Options](/developerportal/deploy/private-cloud-deploy/#environment-details). (Ticket 106933)

### September 9, 2020

#### Mendix Operator v1.5.0 and Mendix Gateway Agent v1.4.0

* We added an option to configure TLS options per environment, overriding the default namespace settings.
* OpenShift Routes now support all features which were previously only available in Ingress endpoints.
* We now only monitor the selected endpoint type (OpenShift Routes or Ingress), removing an error message which appeared when starting the operator in a non-OpenShift cluster.
* We have added several features which make it possible to use [cert-manager](https://cert-manager.io/) with Ingress — this allows you to have TLS certificates generated on-demand.
* We added an option to specify an environment's TLS certificate, or load it from a Kubernetes secret.
* When TLS is enabled, Mendix for Private Cloud Portal will now display the App URL with an https:// prefix.
* We have fixed an issue with connecting to PostgreSQL with TLS and will use encryption by default. (Ticket 106308)
* We have fixed an issue with an incorrect *failed to create role* error message for PostgreSQL databases, which in some cases was caused by connection issues.
* We have improved logging and status messages when the Mendix Operator is provisioning Minio storage or building images.
* We are introducing a new `private-cloud.registry.mendix.com` container registry which is intended to become the official Mendix for Private Cloud registry and eventually replace the `quay.io/digital_ecosystems` and the `mendix/runtime-base` Docker Hub repositories.

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide/).

### September 7, 2020

#### Portal Improvements

* We added a feature to add additional cluster managers to an existing cluster.
* We added [activity logs](/developerportal/deploy/private-cloud-cluster/#actvity-logs) at the cluster and namespace levels.
* Email notifications will now be sent when a user is added/removed as a cluster manager.
* We made changes to the [cluster overview](/developerportal/deploy/private-cloud-cluster/#overview) to accommodate the activity logs.
* We updated security in the Developer Portal. (Ticket 106263)

#### Fixes

* We fixed a bug where creating an environment with a name that had been used before showed the state of the old environment before it was removed.

### July 29, 2020

#### Portal Improvements

* We now allow you to delete a namespace which contains environments. For a connected namespace, this will also delete the environments.
* We now allow you to delete environment information from the Developer Portal when the portal is unable to connect to the cluster via the Mendix Gateway Agent.
* We now allow you to change log levels from the Developer Portal for your apps' log nodes.
* We now send an email to users when their permissions are changed, or when they are removed from a namespace.

#### Fixes

* We fixed an issue where you could not delete a deployment package if it was broken.

### July 27, 2020

#### Mendix Operator v1.4.0 and Mendix Gateway Agent v1.3.0

* We have improved compatibility with annotations and other attributes modified by ingress controllers. Mendix Operator will no longer delete annotations and attributes it doesn't recognize.
* We have added an option to specify log levels for every log node.

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide/).

### July 15, 2020

#### Mendix Operator v1.3.0 and Mendix Gateway Agent v1.2.0

* We introduced support for configuring environment variables and Java options for a Mendix application running in Private Cloud.
* We added support for using registry credentials from an existing .dockerconfigjson secret.
* We now provide an option to configure image pull secrets when using a Generic registry with authentication. When using an external generic registry, such as Azure Container Registry, Docker Hub or quay.io, you no longer need to configure image pull secrets manually – this will be done by the (re)configuration script.
* We have updated all images to be based on the latest ubi8 image so that they include the latest security patches.
* We have fixed an issue where changing the App URL in OpenShift resulted in an exception.

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide/).

#### Portal Improvements

* We have added support for configuring Custom Runtime Settings, Environment Variables and Java Options. This feature requires the Mendix Operator and Gateway Agent to be upgraded to the latest version.
* We have added support for customizing the App URL. This feature requires the Mendix Operator to be upgraded to the latest version.
* We have added support for dedicated storage plans which can only be used by one environment at a time. This feature requires the Mendix Operator and Gateway Agent to be upgraded to the latest version.
* It is now possible to deploy an MDA which was built more than one week ago.
* We improved the way that the Admin Password is updated.

#### Fixes

* We have fixed multiple issues where the UI was not showing information or was showing outdated information.

### June 22, 2020

#### Mendix Operator v1.2.0

We released a new version of the Mendix for Private Cloud Operator.

* We have added support for offline licenses.

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide/).

### June 19, 2020

#### Mendix Operator v1.1.1

We released a new version of the Mendix for Private Cloud Operator.

* We fixed an issue which incorrectly marked dedicated Storage Plans as being in use.
* We changed the way the Operator updates Kubernetes Deployments to prevent a situation where two different versions of a Mendix application are running at the same moment.
* We have added support for Azure PostgreSQL databases.
* We have added support for using an existing JDBC database schema. This database can only be used by one environment and cannot be shared between environments.
* We have added support for using an existing Azure Blob Storage Container or S3 bucket. Such a storage plan can be dedicated to one environment, or can be shared between multiple environments, with all environments using the same credentials.

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide/).

### June 18, 2020

#### Improvements

* We have separated the creation of the namespace and the cluster in order to align with Kubernetes concepts. As a consequence, there is now an additional namespace details page. The Mendix Operator and Mendix Gateway Agent will be deployed to each namespace.
* We now allow you to set Kubernetes resource *requirements* in addition to resource *limits*. Apps no longer require the maximum amount of CPU and memory, improving utilization of cluster resources.
* We have replaced the **Tiny** plan with a **Small** plan in the core resources.
* We have improved the reliability of updating the current environment status in the Developer Portal.

### June 10, 2020

#### Mendix Gateway Agent v1.1.1

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide/).

* We have fixed a regression which caused unusually high CPU usage.

### June 8, 2020

#### Mendix Operator v1.1.0

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide/).

* Mendix apps now run as Kubernetes Deployments instead of StatefulSets. This will allow you to use rolling updates, reducing downtime. In addition, this helps avoid situations where a StatefulSet might become stuck and stop processing any changes.
* We now allow you to set Kubernetes resource requirements in addition to resource limits. Apps no longer require the maximum amount of CPU and memory, improving utilization of cluster resources.
* We improved the default health check configuration by adjusting the default Kubernetes liveness and readiness probe configuration. Kubernetes will now be much quicker in detecting that an environment has started and is ready to serve requests. In addition, the Kubernetes liveness probe will start with a delay to give a Mendix app some time to start and perform migrations.
* We have added a port to enable monitoring of Mendix apps with Prometheus.
* We have added an option to make a storage plan dedicated so that it can be used by only one environment.
* We have added support for Microsoft SQL server and Azure SQL databases.
* We have fixed a regression which prevented Private Cloud installing when using kubectl version 1.18.

#### Mendix Gateway Agent v1.1.0

To upgrade an existing installation of Private Cloud to the latest version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide/).

* We have improved the reliability of event processing and cluster authentication.

### March 24, 2020

#### Mendix Operator v1.0.1

* We have added an additional field to the `MendixApp` CR which will allows the Developer Portal to display the latest state of environments.
* We have improved compatibility with popular container image registries (such as Azure Container Registry). The build process can now recognize that the container image already has the necessary base layers, and avoids downloading them again, saving time and network traffic.

#### Mendix Gateway Agent v1.0.1

* We have improved the reliability of sending environment statuses to the Developer Portal.

### March 23, 2020

#### Fixes

* We fixed an issue where users could not accept invitations to join a cluster.
* We fixed an issue were the first time an app was deployed no replicas were started, meaning that it was still in a stopped state. Now all apps will have one replica started when they are deployed for the first time.

### March 4, 2020

#### Improvements

* You can now deploy Mendix apps easily to Kubernetes-based platforms. We currently support Red Hat OpenShift, Amazon Web Services Elastic Kubernetes Service (AWS-EKS), and Azure Kubernetes Service (AKS). This involves deploying a Mendix Operator to your cluster to manage the Mendix requests. For more information see the [Private Cloud](/developerportal/deploy/private-cloud/) documentation.

## 2019

### December 5, 2019

#### Improvements

* On the **General** page of [App Buzz](/developerportal/general/buzz/), we added a **Private Cloud** target. This will currently take you to a closed beta test that allows you to connect your private cluster to Mendix. You can ask to join the beta program, but places are currently limited.
