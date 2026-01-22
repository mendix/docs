---
title: "Reducing Deployment Downtime"
url: /developerportal/deploy/private-cloud-reduced-downtime/
description: "Describes how to reduce downtime when deploying apps in Mendix on Kubernetes environments."
weight: 35
---
## Introduction

Kubernetes allows you to update an app without downtime by [performing a rolling update](https://kubernetes.io/docs/tutorials/kubernetes-basics/update/update-intro/). Instead of stopping an app and then starting it with an updated configuration, Kubernetes can replace pods (replicas) one by one.

The Mendix on Kubernetes Operator uses a [recreate](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#recreate-deployment) strategy by default. That is, the current version (configuration) of an app stops, and then the new version starts.

Starting from version 2.25.0, the Operator will automatically perform a Rolling update for any environment that meets the [prerequisites](#prerequisites-2.25.0):

* The configuration update does not modify the app model (source code, MDA or container image).

{{% alert color="info" %}}
Versions 2.20.0 to 2.23.1 of the Operator had an option to manually enable a **PreferRolling** strategy. That is, the Operator tried to perform a rolling update whenever possible. If the Operator detected that a database schema update was needed, it switched to a Recreate strategy to perform a full restart. If the new version of the app had model (source code) changes, deploying it required a schema update. In that case, the Mendix on Kubernetes Operator automatically stopped all replicas of the app, causing downtime.
{{% /alert %}}

In addition Operator version 2.25.0 will automatically assign a `PodDisruptionBudget` to environments with 1 or more replicas:

* Any environment with two or more replicas will be configured with a `PodDisruptionBudget` to ensure that no more than 1 replica is stopped by Kubernetes when scaling down a cluster node or preparing an OS upgrade.
* Any environment with one replica will be configured with a `PodDisruptionBudget` to ensure that at least 1 replica is available when scaling down a cluster node or preparing an OS upgrade. This might cause some Kubernetes updates to be postponed, to prevent app downtime.

{{% alert color="info" %}}
Previous versions of the Operator did not manage `PodDisruptionBudgets`. Instead, any manually created `PodDisruptionBudget` would apply to a Mendix app.

If you have manually created a `PodDisruptionBudget` for an app, delete it and instead specify the `PodDisruptionBudget` parameters [in the MendixApp CR](#pod-disruption-budget-in-standalone).
{{% /alert %}}

## Prerequisites

## Prerequisites for Operator version 2.25.0 and Higher{#prerequisites-2.25.0}

The Operator automatically performs a Rolling update for any environment that meets the following condition:

* The configuration update does not modify the app model (source code, MDA or container image).

{{% alert color="warning" %}}
Mendix Operator versions 2.20.0 to 2.23.1 had an experimental feature that also performed database schema upgrades with a Rolling strategy. This feature was removed in Operator 2.24.0, as it does not work well with the latest Mendix Runtime security features.
{{% /alert %}}

## Prerequisites for Operator version 2.24{#prerequisites-2.24.0}

The Operator automatically performs a Rolling update for any environment that meets the following conditions:

* The environment has two or more replicas.
* The configuration update does not modify the app model (source code, MDA or container image).

{{% alert color="warning" %}}
Mendix Operator versions 2.20.0 to 2.23.1 had an experimental feature that also performed database schema upgrades with a Rolling strategy. This feature was removed in Operator 2.24.0, as it does not work well with the latest Mendix Runtime security features.
{{% /alert %}}

## How the Operator Chooses a Deployment Strategy

If any of the following conditions is true, the Operator always uses a **Recreate** strategy, performing a full stop of all of the app's replicas:

* There are app pods that are running a different (older) version of the app image: there are changes in the app MDA or base OS image.
* The app environment has no running replicas.

Otherwise, the Operator performs a **Rolling** update automatically.

As a **Rolling** strategy can run multiple versions of the app at the same time, requests from the browser must be routed to a matching app version (that is, an app that has the same microflow or nanoflow parameters). The Operator uses Kubernetes service labels to perform an atomic switch, and instantly switch all clients to the updated version. This is done automatically once the number of updated replicas reaches a certain threshold. By default the threshold is 50% of all replicas. The value is specified in the [switchoverThreshold](#deployment-strategy-in-standalone) parameter.

### Use Cases

Whether a change can be performed without downtime depends on the type of the change. For example, the following changes can be done without downtime:

* Changing app constants, MxAdmin password or debugger settings
* Changing environment variables, Runtime or Java options
* Changing Runtime Metrics settings
* Upgrading the Mendix Operator version

The following changes will cause a full restart and downtime:

* Any changes that cause a modified MDA file
* Rebuilding the same MDA version with a different base image version (e.g. switching to another Java version or installing the latest CVE patches)

## Configuring the Deployment Strategy parameters in Standalone Environments {#deployment-strategy-in-standalone}

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
    switchoverThreshold: 50%
    rollingUpdate:
      maxSurge: 0
      maxUnavailable: 50%
```

For more information on the `MendixApp` CR, see [Editing CR](/developerportal/deploy/private-cloud-operator/#edit-cr).

You can specify the following options:

* **switchoverThreshold** – Specifies a threshold of updated, ready replicas after which all clients should switch to the updated version. The threshold can be a percentage or an absolute value.
    For example, setting this to **50%** will switch all clients to the updated app version once 50% of all replicas are running the updated version. If not otherwise specified, 50% is used as the default value. This option is only used if the strategy **type** is set to **PreferRolling**.
* **rollingUpdate** - Specifies parameters for rolling updates if the Operator is able to perform the update without a restart. These parameters are used as Kubernetes [rollingUpdate](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-update-deployment) parameters:
    * **maxSurge** – Specifies an absolute or percentage value for how many additional replicas can be added during the deployment process.
      * For apps with 1 replica, the default value is **1**, to run an updated (replacement) replica in addition to the current replica, and prevent any downtime when possible.
      * For apps with 2 or more replicas, the default value is **0**, so that no additional replicas are added during the rollout process, and instead existing replicas are stopped to avoid using additional cluster resources.
    * **maxUnavailable** – Specifies an absolute or percentage value for how many replicas can be stopped to be replaced with updated versions during the rollout process. Increasing this value speeds up the rollout process, but can cause performance issues.
      * For apps with 1 replica, the default value is **0**, to ensure that at least one replica is running, and prevent downtime.
      * For apps with 2 or more replicas, the default value is **1**, so that at most one replicas would be stopped during the update process.

## Configuring Pod Disruption Budget parameters in Standalone Environments {#pod-disruption-budget-in-standalone}

Kubernetes can stop an app's pods if needed to stop a node (to scale down and consolidate apps to run on fewer nodes), or perform a node update (for example, install CVE patches on the host OS).
Starting from Mendix Operator version 2.24.0, you can specify parameters for a [PodDisruptionBudget](https://kubernetes.io/docs/tasks/run-application/configure-pdb/) of an app to ensure that Kubernetes only stops a limited number of an app's pods, and if necessary waits for replacement pods to become available.

To manually configure parameters for a PodDisruptionBudget, add the `podDisruptionBudget` section to your `MendixApp` CR, as in the following example:

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
  podDisruptionBudget:
    # Kubernetes doesn't allow specifying both maxUnavailable and minAvailable at the same time:
    # https://kubernetes.io/docs/tasks/run-application/configure-pdb/#specifying-a-poddisruptionbudget
    maxUnavailable: 1 # Example: do not disrupt more than 1 pod at the same time
    # minAvailable: 50% # Example: make sure that at least 50% of pods are available
```

You can specify the following options:

* **maxUnavailable** – Specifies an absolute or percentage value for how many replicas can be stopped if Kubernetes needs to evict them from a node.
  * For apps with 2 or more replicas, the default value is **1** and means that at most 1 replica can be stopped, and that Kubernetes needs to wait until a replacement replica becomes available. Increasing this value speeds up the rollout process, but can cause performance issues.
* **minAvailable** – Specifies an absolute or percentage value for how many replicas need to be remain available if Kubernetes needs to evict them from a node. Increasing this value slows down the rollout process, but ensures that less replicas can be disrupted.
  * For apps with 1 replica, the default value is **1** to ensure that at least one replica is always available, and prevent downtime.

{{% alert color="warning" %}}
Kubernetes doesn't allow specifying values for both `maxUnavailable` and `minAvailable`, and specifying values for both of them will [result in an error](https://kubernetes.io/docs/tasks/run-application/configure-pdb/#specifying-a-poddisruptionbudget).
{{% /alert %}}

## Allowing Downtime with Operator 2.25.0 and Newer {#allow-downtime-2.25}

By default, Mendix Operator 2.25.0 and higher versions will try to prevent downtime whenever possible, including apps with single replicas.

In some situations (for example, Kubernetes cluster autoscaling or node upgrades), single-replica apps would be disrupted. The default Pod Disruption Budget prevents this from happening until a developer manually restarts an app or scales it to two or more replicas.

To prevent downtime when updating an app with one replica, the Operator needs to temporarily run two or more replicas of an app. If the cluster does not have enough capacity to start an additional replica, this would block the app update (as this is the only way to process updates without downtime).

If your app or cluster changes are blocked by this policy, you must scale the app to 2 (or more) replicas, or manually allow the changes to be processed with downtime. The easiest option to do this is to manually stop the app, and then start it again.

Alternatively, you can set custom **Reduced Downtime Options** in the Cloud Portal:

* In the **Deployment Strategy Options**, set the following values:
    * **Max Surge** - set to **0%**
    * **Max Unavailable** - set to **100%**
* In the **Pod disruption budget options**, set the following values:
    * **Min Available** - set to **0%**
    * **Max Unavailable** - set to **100%**

{{< figure src="/attachments/deployment/private-cloud/allow-single-replica-downtime.png" alt="Allowing downtime in single-replica apps" class="no-border" >}}

For Standalone environments, specify the following in the MendixApp CR YAML:

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
  replicas: 1 # This is only necessary for apps with 1 replica
  # Add or update this section:
  deploymentStrategy:
    rollingUpdate:
      maxSurge: 0
      maxUnavailable: 1
  podDisruptionBudget:
    maxUnavailable: 1
```

## Limitations

* This feature is only supported by Mendix Operator version 2.24 (and later). Mendix Operator versions 2.20.0 to 2.23.1 used to have an experimental implementation of this feature; upgrading to 2.24.0 or later is highly recommended.
* Deploying a new version of the app will cause downtime if there are any changes in the app MDA or the base OS image.
* To ensure that scheduled events [are correctly synchronized at startup](/releasenotes/studio-pro/10.20/#improvements), it is recommended to use Mendix 10.20 or later.
