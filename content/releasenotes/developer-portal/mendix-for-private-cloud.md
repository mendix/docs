---
title: "Mendix for Private Cloud"
parent: "deployment"
menu_order: 20
description: "Release notes for deployment using Mendix for Private Cloud"
tags: ["release notes", "deployment", "Mendix for Private Cloud", "Private Cloud"]
---

These release notes cover changes to deployment to [Mendix for Private Cloud](/developerportal/deploy/private-cloud). There are separate release notes for other deployment targets, see [Deployment](deployment) release notes page for further information.

For information on the current status of deployment to Mendix for Private Cloud and any planned releases see [Mendix Status](https://status.mendix.com/).


## 2020

### October 30th, 2020

#### Mendix for Private Cloud — Mendix Operator v1.6.1

* We have fixed a bug where building and pushing an image into some registries (such as coding.net) would fail with an authentication error.
* If creating a database or file storage for a new environment fails, the Mendix Operator will now attempt to clean up (roll back) temporary resources. In this case, a manual cleanup is not required. In addition, log messages for such failed attempts will provide details on what what was created and rolled back.

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide#operator-latest).

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

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide#operator-latest).

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

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide#operator-latest).

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

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide#operator-latest).

### July 15th, 2020

#### Mendix Operator v1.3.0 and Mendix Gateway Agent v1.2.0

* We introduced support for configuring environment variables and Java options for a Mendix application running in Private Cloud.
* We added support for using registry credentials from an existing .dockerconfigjson secret.
* We now provide an option to configure image pull secrets when using a Generic registry with authentication. When using an external generic registry, such as Azure Container Registry, Docker Hub or quay.io, you no longer need to configure image pull secrets manually - this will be done by the (re)configuration script.
* We have updated all images to be based on the latest ubi8 image so that they include the latest security patches.
* We have fixed an issue where changing the App URL in OpenShift resulted in an exception.

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide#operator-latest).

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

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide#operator-latest).

### June 19th, 2020

#### Mendix Operator v1.1.1

We released a new version of the Mendix for Private Cloud Operator.

* We fixed an issue which incorrectly marked dedicated Storage Plans as being in use.
* We changed the way the Operator updates Kubernetes Deployments to prevent a situation where two different versions of a Mendix application are running at the same moment.
* We have added support for Azure PostgreSQL databases.
* We have added support for using an existing JDBC database schema. This database can only be used by one environment and cannot be shared between environments.
* We have added support for using an existing Azure Blob Storage Container or S3 bucket. Such a storage plan can be dedicated to one environment, or can be shared between multiple environments, with all environments using the same credentials.

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide#operator-latest).

### June 18th, 2020

#### Improvements

* We have separated the creation of the namespace and the cluster in order to align with Kubernetes concepts. As a consequence, there is now an additional namespace details page. The Mendix Operator and Mendix Gateway Agent will be deployed to each namespace.
* We now allow you to set Kubernetes resource *requirements* in addition to resource *limits*. Apps no longer require the maximum amount of CPU and memory, improving utilization of cluster resources.
* We have replaced the **Tiny** plan with a **Small** plan in the core resources.
* We have improved the reliability of updating the current environment status in the Developer Portal.

### June 10th, 2020

#### Mendix Gateway Agent v1.1.1

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide#agent-latest).

* We have fixed a regression which caused unusually high CPU usage.

### June 8th, 2020

#### Mendix Operator v1.1.0

To upgrade an existing installation of Private Cloud to this version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide#operator-latest).

* Mendix apps now run as Kubernetes Deployments instead of StatefulSets. This will allow you to use rolling updates, reducing downtime. In addition, this helps avoid situations where a StatefulSet might become stuck and stop processing any changes.
* We now allow you to set Kubernetes resource requirements in addition to resource limits. Apps no longer require the maximum amount of CPU and memory, improving utilization of cluster resources.
* We improved the default health check configuration by adjusting the default Kubernetes liveness and readiness probe configuration. Kubernetes will now be much quicker in detecting that an environment has started and is ready to serve requests. In addition, the Kubernetes liveness probe will start with a delay to give a Mendix app some time to start and perform migrations.
* We have added a port to enable monitoring of Mendix apps with Prometheus.
* We have added an option to make a storage plan dedicated so that it can be used by only one environment.
* We have added support for Microsoft SQL server and Azure SQL databases.
* We have fixed a regression which prevented Private Cloud installing when using kubectl version 1.18.

#### Mendix Gateway Agent v1.1.0

To upgrade an existing installation of Private Cloud to the latest version, follow the [Upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide#agent-latest).

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

* On the **General** page of [App Buzz](/developerportal/collaborate/buzz#app-buzz), we added a **Private Cloud** target. This will currently take you to a closed beta test that allows you to connect your private cluster to Mendix. You can ask to join the beta program, but places are currently limited.

