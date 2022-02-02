---
title: "Mendix for Private Cloud"
category: "Deployment"
menu_order: 20
description: "Release notes for deployment using Mendix for Private Cloud"
tags: ["release notes", "deployment", "Mendix for Private Cloud", "Private Cloud"]
---

These release notes cover changes to deployment to [Mendix for Private Cloud](/developerportal/deploy/private-cloud). There are separate release notes for other deployment targets, see [Deployment](deployment) release notes page for further information.

For information on the current status of deployment to Mendix for Private Cloud and any planned releases see [Mendix Status](https://status.mendix.com/).

## 2022

### February 3rd, 2022

#### Portal Improvement

* We have improved the UX, also add a new button Save and Apply to directly apply changes made in an environment. The button will restart the environment.

### January 13th, 2022

#### Mendix Operator v2.3.0 and Mendix Gateway Agent v2.3.0

* We have added a new field to set the kubernetes ingress class as an annotation in the installer.
* We have added a new feature to customize your image names in the registry using a [custom imageNameTemplate](/developerportal/deploy/private-cloud-cluster#customize-registry-imagenametemplate).

#### Portal Improvements

* We have added a new field, **cluster owner**, on the cluster details page. A cluster owner is now also displayed as a cluster manager in the cluster managers tab.
* We have updated the UX in the create environment flow and added a **more info** button to the environment details page.

### January 12th, 2022

#### Prometheus Metrics

* We have updated the [Grafana dashboard](/developerportal/deploy/private-cloud-monitor#import-dashboard) to be compatible with version 2.5.1 of the `grafana/loki-stack` Helm chart. If you're planning to upgrade the `loki-stack` Helm chart in your cluster, you will need to use the updated dashboard.
* The monitoring solution is now compatible with Kubernetes version 1.22.

## 2021

### December 9th, 2021

#### Portal Improvements

* We have fixed an issue where the app URL is not editable when trying to deploy to an environment in a namespace with service-only ingress, type = ClusterIP.
* We have replaced the placeholder app in environment creation with a deployment package. A valid deployment package is required to create a new environment.

### December 6th, 2021

#### Mendix Operator v2.2.0 and Mendix Gateway Agent v2.2.0

* To improve the security score of all Mendix for Private Cloud images, we replaced a deprecated [operator-sdk v0.18.2](https://v0-18-x.sdk.operatorframework.io/docs/) dependency with a maintained version of [kubebuilder](https://book.kubebuilder.io/).
  * This update allows us to address [CVE-2020-8565](https://access.redhat.com/security/cve/cve-2020-8565), [CVE-2020-26160](https://access.redhat.com/security/cve/cve-2020-26160) and [CVE-2020-29652](https://access.redhat.com/security/cve/cve-2020-29652). These CVEs do not affect previously released versions of Mendix for Private Cloud.
  * This internal library change does not change the behavior of any Mendix for Private Cloud components.
* When switching to the *Review and Apply* screen in `mxpc-cli`, previous results will be cleared.
* We have fixed an issue where attempting to apply a custom TLS configuration in non-interactive mode with `mxpc-cli` failed with a panic error.

### November 18th, 2021

#### Portal Improvements

* We have increased the deployment package size limit from 200MB to 512MB.
* We have fixed an issue when the Runtime version was not visible on the transport package screen.
* We have removed the restriction on the use of the `kubernetes.io/ingress.class` ingress annotation.
* We have changed the left navigation panel to match the rest of the Developer Portal.

### November 15th, 2021

#### Supported Providers

* We have completed validation of Kubernetes 1.22 and Postgres versions 11, 12 and 13.

To see more details about supported databases and Kubernetes versions, see the [Supported Providers](/developerportal/deploy/private-cloud-supported-environments) document.

### October 27th, 2021

#### Prometheus Metrics

* We have documented how to collect logs and metrics in Mendix for Private Cloud.
* We have created a reference Grafana dashboard that offers a familiar experience for [Mendix Cloud V4 metrics](/developerportal/operate/trends-v4) users.

To use Prometheus metrics, upgrade to Mendix Operator v2.1.0 (or above) and follow the [instructions](/developerportal/deploy/private-cloud-monitor).

### October 25th, 2021

#### mxpc-cli v2.1.2 for Mendix Operator v2.1.0 and Mendix Gateway Agent v2.1.0

* We have added support for configuring Ceph Object Storage as a storage type.
* We have added an option to prevent data deletion when using one of the storage plan types minio, amazon-s3, azure blob, google cloud, or ceph.

    The new option prevents files being deleted from storage when an environment is removed.

### October 14th, 2021

#### Portal Improvements

* We have replaced the Mendix 8 placeholder app which is deployed when you add a new environment with a Mendix 9 app. Use the Mendix 7 placeholder app if you are planning to  deploy a Mendix 7 or Mendix 8 app.

### September 27th, 2021

#### Data migration tool (preview)

* We have added a data migration tool - that can be used to transfer data between Mendix for Private Cloud environments.
* This tool is compatible with Mendix Cloud V4 [backup files](/developerportal/operate/restore-backup#5-format-of-a-backup-file).

This tool is available as a technical preview. For documentation and download links, see the [documentation](/developerportal/deploy/private-cloud-data-transfer).

### September 9th, 2021

#### mxpc-cli v2.1.1 for Mendix Operator v2.1.0 and Mendix Gateway Agent v2.1.0{#2.1.1}

##### Fixes

* We have fixed the [known issue with the outdated apps deployment label after upgrading a namespace to Mendix Operator v2.1.0](#2.1.0). The workaround of deleting app deployments manually in the previous version mxpc-cli v2.1.0 is no longer required. (Ticket 129150)

#### Portal Improvements

* We have updated the environment details page to show the status of individual pods.
* We have added some validation when you configure Pod/Service/Ingress annotations in the portal.
* We have added the ability to select the default target environment for Studio deployment.
* We have fixed an issue where you get duplicate scheduled events and constants after renaming them in a mendix app.
* We have improved the page to configure annotations (ingress, service, and pod) from the Developer Portal for connected clusters.

### September 2nd, 2021{#20210902}

#### Mendix Operator v2.1.0 and Mendix Gateway Agent v2.1.0

* We have added support for Google Cloud Platform.
* We have added some new features to run our installer and configuration tools in a non-interactive way. [Install and Configure Mendix for Private Cloud Non-interactive Mode](/developerportal/deploy/private-cloud-cli-non-interactive)
* We have added more metrics in our sidecars.
* We have added additional details about the Runtime status for each replica, including the license status and errors that might be preventing the Runtime from starting.
* We have fixed an error `M2EE: An error occurred while executing action 'get_license_information'` that was sometimes logged while the Runtime was starting.

##### Known Issue{#2.1.0}

This issue is fixed in [version 2.1.1](#2.1.1) of `mxpc-cli`.

* Upgrading a namespace from operator v2.0.0 to v2.1.0 causes app deployments to have outdated labels or annotations that make your environments unreachable.  (Ticket 129150)

    To fix the issue, you must delete the app deployments using the following commands:

    ```
    kubectl delete deployment <app>-master -n <namespace>
    kubectl delete deployment <app>-worker -n <namespace>
    ```


### August 12th, 2021

#### Mendix Operator v2.0.0 and Mendix Gateway Agent v2.0.0

* We have switched all components to use the modern Kubernetes APIs: `networking.k8s.io/v1` and `apiextensions.k8s.io/v1`.
  This change allows us to continue supporting future versions of Kubernetes.
* This version of Mendix Operator and Gateway Agent only supports Kubernetes 1.19 and later versions.
* Mendix Operator v1.12.\* and Mendix Gateway Agent v1.11.\* will continue in Long Term Support (LTS) to support clusters running older versions of Kubernetes.

To upgrade an existing installation of Mendix for Private Cloud to Mendix Operator v2.0.0 and Mendix Gateway Agent v2.0.0, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide).

{{% alert type="warning" %}}Mendix for Private Cloud has not yet been fully validated to support Kubernetes 1.22, a [new release](https://kubernetes.io/blog/2021/08/04/kubernetes-1-22-release-announcement/) which removes support for several deprecated APIs and features.
{{% /alert %}}

### July 6th, 2021

#### Portal Improvements

* We added the ability to configure annotations (ingress, service, and pod) from the Developer Portal for connected clusters.

#### Portal Fixes

* We resolved an issue where environment variables were limited to 200 characters.
* We resolved an issue where changing the cluster name or description could remove other cluster managers from the cluster.

### June 29th, 2021

#### Mendix Operator v1.12.0 and Mendix Gateway Agent v1.11.0

* We have added more networking configuration options, allowing to use new Ingress and Service types. You can now:
  * use templates in Ingress and Service annotations.
  * use a Service without creating an Ingress – for example to use a load balancer service, or to manually create your own Ingress object.
  * customize the Ingress path and path type (required to support Ingress controllers such as AWS Application Load Balancer).
  * customize the Ingress class.
  * customize the Service type.
  * customize the Service port(s).
* We have added options to override the following Ingress and Service options per-environment (only supported in Standalone mode at the moment):
  * Ingress annotations
  * Service annotations
  * Ingress class
  * Ingress path and path type
* When a custom `ApplicationRootUrl` is specified in Custom Runtime Settings, it will be used instead of the automatically generated application URL.
* We have fixed a incorrect *Runtime has an empty (trial) license* log message which appeared when using a Subscription Secret license.
* We extended the Mendix Operator trial period from 30 days to 90 days. (Tickets 118172, 121775, 124921)

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide).

### May 4th, 2021

#### Mendix Operator v1.11.0 and Mendix Gateway Agent v1.10.0

* We have added features required to support Linkerd [Automatic Proxy Injection](https://linkerd.io/2.10/features/proxy-injection/). [Linkerd](https://linkerd.io/) is a Service Mesh which offers multiple features, such as encrypting HTTP requests between the Ingress Controller and Mendix app Pods.
  * You can now set the `automountServiceAccountToken` option for Mendix App containers.
  * You can now set Pod annotations for all Mendix app Pods in a namespace.
* We have fixed an issue with using additional Azure SQL Server arguments.
* We have fixed an issue when creating S3 buckets in the `us-east-1` region. (Ticket 119956)
* We have fixed an *unable to patch Agent with type proxy_agent_patch: resource may not be empty* error when trying to apply proxy settings. (Tickets 119955,120258)
* We have fixed an issue when updating a Storage Plan would fail with a *cloud portal returned invalid status code: 409* error message. (Ticket 119294)

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide).

### April 19th, 2021

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

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide).

### March 31st, 2021

#### Mendix Operator v1.9.1

* We have fixed a Pod crash when the Mendix Operator tries to create or delete a SQL Server or Azure SQL database.
* We have updated the default list of items to configure in the Configuration Tool; the **Proxy** and **Custom TLS** options are now unchecked by default.
* We have added support for additional authentication methods into the Configuration Tool, including the Azure auth provider. (Ticket 118790)
* We have fixed the output format of patches generated by the Configuration Tool's **Write YAML** button.

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide).

### March 18th, 2021

#### Mendix Operator v1.9.0 and Mendix Gateway Agent v1.8.0

* We have significantly improved the Configuration Tool:
  * Bash (or Git Bash) is no longer required to install and configure a cluster. This allows you to use the tool in most Windows terminals such as PowerShell and Windows Command prompt with no workarounds.
  * The installation process no longer needs to communicate with an external service to download installation resources, and only needs access to the Kubernetes cluster API.
  * Migration of Mendix components to a Private Cloud registry no longer requires downloading and patching the installation script.
  * The process for upgrading to the next version of Mendix for Private Cloud has been complely automated. Instead of a manual process using a Bash terminal, an upgrade can be done with a click of the mouse.
  * It's now possible to install or upgrade to a specific version of Mendix Operator (1.9.0 and later). Previously, it was only possible to install the latest version of the Operator.
* We have added reporting of the **Storage Provisioner Version** to the Private Cloud Portal.
* We have added dedicated sections to configure scheduled events and app constants when using the Operator in standalone mode.

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide).

### February 18th, 2021

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

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide).
After upgrading the Mendix Operator, we recommend downloading the latest version of the Configuration Tool.

### January 6th, 2021

#### Improvements

* We added the ability to export Mendix components from the Mendix registry and import them into your own registry. This allows you to use Mendix for Private Cloud behind a firewall. For more information see [Migrating to Your Own Registry](/developerportal/deploy/private-cloud-migrating).

## 2020

### December 29th, 2020

#### Fixes

* We fixed an error where opening the feedback widget on a Mendix for Private Cloud page in the Developer Portal resulted in an error.
* We upgraded the Mendix version used for Mendix for Private Cloud in the Developer Portal to apply the latest security fix.

### December 14th, 2020

#### Portal Improvements

* We have added support in the Developer Portal to configure custom Certificate Authorities which should be trusted by the Mendix Operator and app environments.
* We now add an environment UUID to environments deployed to Private Cloud namespaces so environment names no longer need to be unique.
* As part of a Developer Portal clean up, we removed the *Model* option from the *DEVELOP* section of the Developer Portal menu when you are looking at environments on Mendix for Private Cloud. The functions of this page are still available via the **Edit in Studio** and **Edit in Studio Pro** buttons on the environments page. 

#### Fixes

* We fixed the bug where you would be taken to a non-existent page and receive a *404 Not Found* message if you didn't select an Operating System when downloading the configuration tool.

### December 10th, 2020

#### Mendix for Private Cloud — Mendix Operator v1.7.0 and Mendix Gateway Agent v1.6.0

* We have added a configuration option to add custom Certificate Authorities which should be trusted by the Mendix Operator and app environments.
* We have added a Strict TLS mode to PostgreSQL, SQL Server, and Minio, which will only allow connections to the database and file storage if there is a valid and trusted TLS certificate. Together with the custom Certificate Authorities option, this will ensure that Mendix apps are connecting to the database and file storage over a secured connection. Strict TLS mode should only be used with apps created in Mendix 8.15.2 (or later versions), earlier Mendix versions will fail to start when validating the TLS certificate.
* We have added an option to specify TLS client certificates in Mendix apps. A Mendix app can use a TLS client certificate when communicating with external web services.

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide).

### November 16th, 2020

* We have introduced a new, interactive, installation and configuration tool for the Mendix Operator. The previous installation scripts are still available, and you can choose between the new and previous installation tools.
* We added access rules for namespaces to control access to the debugger and TLS.
* We added activity log entries for TLS, the debugger, changing log levels, and uploading an mda locally.
* We improved the stability of the Private Cloud Portal.
* We added a warning message when the operator license has expired

### October 30th, 2020

#### Mendix for Private Cloud — Mendix Operator v1.6.1

* We have fixed a bug where building and pushing an image into some registries (such as coding.net) would fail with an authentication error.
* If creating a database or file storage for a new environment fails, the Mendix Operator will now attempt to clean up (roll back) temporary resources. In this case, a manual cleanup is not required. In addition, log messages for such failed attempts will provide details on what what was created and rolled back.

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide).

### October 21st, 2020

#### Portal Improvements

* We added the ability to configure TLS on an environment level.
* We added the ability to link the Studio Pro debugger to an app running through Mendix for Private Cloud.
* We added the ability to upload an MDA to the Developer Portal.
* We split the **Edit App** button into two separate buttons, **Edit in Studio** and **Edit in Studio Pro** on some of the Developer Portal pages (Environments, App Services, Metrics, Alerts, Logs, Backups, and the Node Permissions tab of Security).
* We updated the drop down for the **View App** button.

#### Portal Fixes

* We fixed an issue where the cluster icon was only visible to members of a namespace.
* We fixed an issue where the **Next** button did not display correctly if no MDA branch was selected. (Ticket 108399)

### October 15th, 2020

#### Mendix Operator v1.6.0 and Mendix Gateway Agent v1.5.0

* We added support for debugging apps deployed to Mendix for Private Cloud.
* We fixed a memory leak in Agent which occurred when it was restarted and the cluster was deleted from the Developer Portal.
* We fixed an issue where the Operator pod was crashlooping until the Operator was fully configured.

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide).

### September 14th, 2020

#### Fixes

* We resolved an issue where deployment of a new MDA to an environment set the constant values to the defaults in the MDA rather than applying the values set through the environment's [Model Options](/developerportal/deploy/private-cloud-deploy#environment-details). (Ticket 106933)

### September 9th, 2020

#### Mendix Operator v1.5.0 and Mendix Gateway Agent v1.4.0

* We added an option to configure TLS options per environment, overriding the default namespace settings.
* OpenShift Routes now support all features which were previously only available in Ingress endpoints.
* We now only monitor the selected endpoint type (OpenShift Routes or Ingress), removing an error message which appeared when starting the operator in a non-OpenShift cluster.
* We have added several features which make it possible to use [cert-manager](https://cert-manager.io/) with Ingress — this allows you to have TLS certificates generated on-demand.
* We added an option to specify an environment's TLS certificate, or load it from a Kubernetes secret.
* When TLS is enabled, Mendix for Private Cloud Portal will now display the App URL with an https:// prefix.
* We have fixed an issue with connecting to PostgreSQL with TLS and will use encryption by default. (Ticket 106308)
* We have fixed an issue with an incorrect _failed to create role_ error message for PostgreSQL databases, which in some cases was caused by connection issues.
* We have improved logging and status messages when the Mendix Operator is provisioning Minio storage or building images.
* We are introducing a new `private-cloud.registry.mendix.com` container registry which is intended to become the official Mendix for Private Cloud registry and eventually replace the `quay.io/digital_ecosystems` and the `mendix/runtime-base` Docker Hub repositories.

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide).

### September 7th, 2020

#### Portal Improvements

* We added a feature to add additional cluster managers to an existing cluster.
* We added [activity logs](/developerportal/deploy/private-cloud-cluster#actvity-logs) at the cluster and namespace levels.
* Email notifications will now be sent when a user is added/removed as a cluster manager.
* We made changes to the [cluster overview](/developerportal/deploy/private-cloud-cluster#overview) to accommodate the activity logs.
* We updated security in the Developer Portal. (Ticket 106263)

#### Fixes

* We fixed a bug where creating an environment with a name that had been used before showed the state of the old environment before it was removed.

### July 29th, 2020

#### Portal Improvements

* We now allow you to delete a namespace which contains environments. For a connected namespace, this will also delete the environments.
* We now allow you to delete environment information from the Developer Portal when the portal is unable to connect to the cluster via the Mendix Gateway Agent.
* We now allow you to change log levels from the Developer Portal for your apps' log nodes.
* We now send an email to users when their permissions are changed, or when they are removed from a namespace.

#### Fixes

* We fixed an issue where you could not delete a deployment package if it was broken.

### July 27th, 2020

#### Mendix Operator v1.4.0 and Mendix Gateway Agent v1.3.0

* We have improved compatibility with annotations and other attributes modified by ingress controllers. Mendix Operator will no longer delete annotations and attributes it doesn't recognize.
* We have added an option to specify log levels for every log node.

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide).

### July 15th, 2020

#### Mendix Operator v1.3.0 and Mendix Gateway Agent v1.2.0

* We introduced support for configuring environment variables and Java options for a Mendix application running in Private Cloud.
* We added support for using registry credentials from an existing .dockerconfigjson secret.
* We now provide an option to configure image pull secrets when using a Generic registry with authentication. When using an external generic registry, such as Azure Container Registry, Docker Hub or quay.io, you no longer need to configure image pull secrets manually – this will be done by the (re)configuration script.
* We have updated all images to be based on the latest ubi8 image so that they include the latest security patches.
* We have fixed an issue where changing the App URL in OpenShift resulted in an exception.

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide).

#### Portal Improvements

* We have added support for configuring Custom Runtime Settings, Environment Variables and Java Options. This feature requires the Mendix Operator and Gateway Agent to be upgraded to the latest version.
* We have added support for customizing the App URL. This feature requires the Mendix Operator to be upgraded to the latest version.
* We have added support for dedicated storage plans which can only be used by one environment at a time. This feature requires the Mendix Operator and Gateway Agent to be upgraded to the latest version.
* It is now possible to deploy an MDA which was built more than one week ago.
* We improved the way that the Admin Password is updated.

#### Fixes

* We have fixed multiple issues where the UI was not showing information or was showing outdated information.

### June 22nd, 2020

#### Mendix Operator v1.2.0

We released a new version of the Mendix for Private Cloud Operator.

* We have added support for offline licenses.

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide).

### June 19th, 2020

#### Mendix Operator v1.1.1

We released a new version of the Mendix for Private Cloud Operator.

* We fixed an issue which incorrectly marked dedicated Storage Plans as being in use.
* We changed the way the Operator updates Kubernetes Deployments to prevent a situation where two different versions of a Mendix application are running at the same moment.
* We have added support for Azure PostgreSQL databases.
* We have added support for using an existing JDBC database schema. This database can only be used by one environment and cannot be shared between environments.
* We have added support for using an existing Azure Blob Storage Container or S3 bucket. Such a storage plan can be dedicated to one environment, or can be shared between multiple environments, with all environments using the same credentials.

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide).

### June 18th, 2020

#### Improvements

* We have separated the creation of the namespace and the cluster in order to align with Kubernetes concepts. As a consequence, there is now an additional namespace details page. The Mendix Operator and Mendix Gateway Agent will be deployed to each namespace.
* We now allow you to set Kubernetes resource *requirements* in addition to resource *limits*. Apps no longer require the maximum amount of CPU and memory, improving utilization of cluster resources.
* We have replaced the **Tiny** plan with a **Small** plan in the core resources.
* We have improved the reliability of updating the current environment status in the Developer Portal.

### June 10th, 2020

#### Mendix Gateway Agent v1.1.1

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide).

* We have fixed a regression which caused unusually high CPU usage.

### June 8th, 2020

#### Mendix Operator v1.1.0

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide).

* Mendix apps now run as Kubernetes Deployments instead of StatefulSets. This will allow you to use rolling updates, reducing downtime. In addition, this helps avoid situations where a StatefulSet might become stuck and stop processing any changes.
* We now allow you to set Kubernetes resource requirements in addition to resource limits. Apps no longer require the maximum amount of CPU and memory, improving utilization of cluster resources.
* We improved the default health check configuration by adjusting the default Kubernetes liveness and readiness probe configuration. Kubernetes will now be much quicker in detecting that an environment has started and is ready to serve requests. In addition, the Kubernetes liveness probe will start with a delay to give a Mendix app some time to start and perform migrations.
* We have added a port to enable monitoring of Mendix apps with Prometheus.
* We have added an option to make a storage plan dedicated so that it can be used by only one environment.
* We have added support for Microsoft SQL server and Azure SQL databases.
* We have fixed a regression which prevented Private Cloud installing when using kubectl version 1.18.

#### Mendix Gateway Agent v1.1.0

To upgrade an existing installation of Private Cloud to the latest version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide).

* We have improved the reliability of event processing and cluster authentication.

### March 24th, 2020

#### Mendix Operator v1.0.1

* We have added an additional field to the `MendixApp` CR which will allows the Developer Portal to display the latest state of environments.
* We have improved compatibility with popular container image registries (such as Azure Container Registry). The build process can now recognize that the container image already has the necessary base layers, and avoids downloading them again, saving time and network traffic.

#### Mendix Gateway Agent v1.0.1

* We have improved the reliability of sending environment statuses to the Developer Portal.

### March 23rd, 2020

#### Fixes

* We fixed an issue where users could not accept invitations to join a cluster.
* We fixed an issue were the first time an app was deployed no replicas were started, meaning that it was still in a stopped state. Now all apps will have one replica started when they are deployed for the first time.

### March 4th, 2020

#### Improvements

* You can now deploy Mendix apps easily to Kubernetes-based platforms. We currently support Red Hat OpenShift, Amazon Web Services Elastic Kubernetes Service (AWS-EKS), and Amazon Web Services Azure Kubernetes Service (AWS-AKS). This involves deploying a Mendix Operator to your cluster to manage the Mendix requests. For more information see the [Private Cloud](/developerportal/deploy/private-cloud) documentation.

## 2019

### December 5th, 2019

#### Improvements

* On the **General** page of [App Buzz](/developerportal/collaborate/buzz#app-buzz), we added a **Private Cloud** target. This will currently take you to a closed Beta test that allows you to connect your private cluster to Mendix. You can ask to join the Beta program, but places are currently limited.
