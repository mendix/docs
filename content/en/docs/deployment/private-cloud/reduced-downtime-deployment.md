---
title: "Reducing Deployment Downtime"
url: /developerportal/deploy/private-cloud-reduced-downtime/
description: "Describes how to reduce downtime when deploying apps in Private Cloud environments."
weight: 35
---
## Introduction

Kubernetes allows to update an app without downtime by [performing a rolling update](https://kubernetes.io/docs/tutorials/kubernetes-basics/update/update-intro/). Instead of stopping an app and then starting it with an updated version or configuration, Kubernetes can replace pods (replicas) one by one with an updated version. Existing pods handle requests until the newer version is fully started.

Any changes in the [domain model](/refguide/domain-model/) need a database (schema) update. While the update process runs, you cannot modify any persistent entities.

The Private Cloud Operator uses a [recreate](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#recreate-deployment) strategy by default. That is, the current version (configuration) of an app stops, and then the new version starts.

Alternatively, the Private Cloud Operator can use a **PreferRolling** strategy. That is, the Operator tries to perform a rolling update whenever possible. If the Operator detects that a database schema update is needed, it switches to a Recreate strategy to perform a full restart. 

If the new version of the app has model changes, deploying it requires a schema update. In this case, the Private Cloud Operator automatically stops all replicas of the app, causing downtime.

This feature works with Mendix for Private Cloud version 2.20 and later.

### How a PreferRolling Strategy Works

When the Operator is configured to use a **PreferRolling** strategy, it will try to do an optimistic update and use a **Rolling** strategy. If the app needs to perform a database schema update, it signals to the Operator that it is waiting for approval to perform the update. The Operator then switches the app to use a **Recreate** strategy (stop all current replicas and start an updated version) and wait until all replicas of the app are running the same MDA version. Then, the Operator lets the app know that it is safe to update the database schema, and approve the process.

As a **Rolling** strategy can run multiple versions of the app at the same time, requests from the browser must be routed to a matching app version (that is, an app that has the same microflow or nanoflow parameters). The Operator uses Kubernetes service labels to perform an atomic switch, and instantly switch all clients to the updated version. This is done automatically once the number of updated replicas reaches a certain threshold. By default the threshold is 50% of all replicas. The value is specified in the [switchoverThreshold](#prefer-rolling-in-standalone) parameter.

## Enabling Reduced Deployment Downtime

You can enable the `PreferRolling` deployment strategy if your environment fulfills the following requirements:

* The app must have two or more replicas specified in the MendixApp CR or Developer Portal.
* For Connected environments, the **Low Downtime Deployment Strategy** option must be enabled in the Cloud Portal.
* For Standalone environments, **deploymentStrategy** must be set to **PreferRolling** in the MendixApp CR.

If the app can be deployed without having to modify the database schema (model), it will now be deployed using a Rolling deployment strategy.

For example, the following changes can be done without downtime:

* Changing app constants, MxAdmin password or debugger settings
* Changing environment variables, Runtime or Java options
* Changing Runtime Metrics settings
* Upgrading the Mendix Operator version
* Rebuilding the same MDA version to get the latest CVE updates
* Changes in microflows or Java actions that do not affect the model
* Updating Java dependencies

The following changes in the UI can be done without downtime, but as soon as the new version becomes available, all clients must log in again:

* Page changes, including layout or CSS changes
* Changes in nanoflows or microflow parameters, if the microflow is used on a page
* Changes in Javascript actions

Thes following changes will be deployed with downtime, because the model must be updated:

* Adding Marketplace modules that have persistent entities
* Updating the object model in the app itself, or its Marketplace modules
* Updating to a newer Mendix version

#### Using the PreferRolling Strategy in Standalone Environments {#prefer-rolling-in-standalone}

To reduce deployment downtime, add the `deploymentStrategy` section to your `MendixApp` CR, as in the following example:

```yaml
apiVersion: privatecloud.mendix.com/v1alpha1
kind: MendixApp
metadata:
# ...
# omitted lines for brevity
# ...
spec:
  # ...
  # omitted lines for brevity
  # ...
  # Add or update this section:
  deploymentStrategy:
    type: PreferRolling
    switchoverThreshold: 50%
    rollingUpdate:
      maxSurge: 0
      maxUnavailable: 50%
```

For more information on the `MendixApp` CR, see [Editing CR](/developerportal/deploy/private-cloud-operator/#edit-cr).

If the `deploymentStrategy` is not specified, the Operator will use the Recreate strategy and perform a complete restart on any changes, causing downtime. This follows how updates were processed by Mendix for Private Cloud versions before 2.19 and earlier.

You can specify the following options:

* **type** – Specifies a type:
    * **Recreate** - The default setting
    * **PreferRolling** - Try to deploy without downtime when possible
* **switchoverThreshold** – Specifies a threshold of updated, ready replicas after which all clients should switch to the updated version. The threshold can be a percentage or an absolute value.
    For example, setting this to **50%** will switch all clients to the updated app version once 50% of all replicas are running the updated version. If not otherwise specified, 50% is used as the default value. This option is only used if the strategy **type** is set to **PreferRolling**.
* **rollingUpdate** - Specifies parameters for rolling updates if the Operator is able to perform the update without a restart. These parameters are used as Kubernetes [rollingUpdate](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-update-deployment) parameters:
    * **maxSurge** – Specifies an absolute or percentage value for how many additional replicas can be added during the deployment process. The default **0** value means that no additional replicas are added during the rollout process, and instead existing replicas are stopped to avoid using additional cluster resources.
    * **maxUnavailable** – Specifies an absolute or percentage value for how many replicas can be stopped to be replaced with updated versions during the rollout process. The default **50%** value means that half of the replicas would be stopped during the update process. Lowering this value slows down the rollout process, but ensures that less replicas are stopped during the update process.

## Preventing Kubernetes Disruptions

Kubernetes can stop an app's pods if needed to stop a node (to scale down and consolidate apps to run on fewer nodes), or perform a node update (for example, install CVE patches on the host OS). You can add a [PodDisruptionBudget](https://kubernetes.io/docs/tasks/run-application/configure-pdb/) to an app to ensure that Kubernetes only stops a limited number of an app's pods, and if necessary waits for replacement pods to become available.

To add a PodDisruptionBudget, create the following PodDisruptionBudget, replacing `<mendixapp-cr-name>` with your app's internal name (the MendixApp CR name):

```yaml
apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: <mendixapp-cr-name> # This should be updated to match the MenedixApp CR name
spec:
  maxUnavailable: 1 # Ensure that at most 1 replica is stopped by Kubernetes
  selector:
    matchLabels:
      privatecloud.mendix.com/app: <mendixapp-cr-name> # This should be updated to match the MenedixApp CR name
      privatecloud.mendix.com/component: mendix-app
```

## Limitations

* This feature is only supported by Mendix Operator version 2.20 (and later).
* If the new app version has UI changes, all clients are automatically logged out and will need to sign back into the app.
* Deploying a new version of the app will cause downtime if there are changes in the domain model, or the Mendix version.
* If an app is based on Mendix 9.12 or a later version, a Rolling update can run scheduled events on any replica. During an update, scheduled events might use a newer or older version of their associated microflows, which will be random. If there are major changes in a scheduled event microflow, consider temporarily disabling scheduled events during an update.
