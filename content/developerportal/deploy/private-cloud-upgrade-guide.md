---
title: "Upgrading Private Cloud to the latest version"
parent: "private-cloud"
description: "Describes how to manually upgrade to the latest version of the Mendix Operator"
menu_order: 90
tags: ["Upgrade", "Private Cloud", "Cluster", "Operator", "Deploy"]
---

## 1 Introduction

This document describes how an existing installation of Mendix for Private Cloud can be upgraded to the latest version.

Both the Mendix Operator and Mendix Agent should be upgraded at the same time.

## 2 Upgrading to Mendix Operator 1.7.0{#operator-latest}

### 2.1 Preparation

Open a Bash-compatible terminal and set the target namespace where the Operator is currently installed:

```shell
OPERATOR_NAMESPACE={namespace where the Mendix Operator is installed}
```

All the following commands require the `OPERATOR_NAMESPACE` variable to be set. When opening a new terminal, re-run this command again.

Check the current version of the Operator by running the following command:

```shell
kubectl -n $OPERATOR_NAMESPACE get deployment mendix-operator -o=jsonpath='{.spec.template.spec.containers[].image}' 
```

The image name will look similar to `private-cloud.registry.mendix.com/mendix-operator:{VERSION}` or `quay.io/digital_ecosystems/mendix-operator:{VERSION}`.

Only follow the steps applicable to your currently installed version of the Mendix Operator.

For example, if the image name is `quay.io/digital_ecosystems/mendix-operator:1.3.0`, follow only the steps for upgrading from Mendix Operator 1.3.\*.

This process will take:

* about 15 to 30 minutes when upgrading from Mendix Operator 1.0.\*
* about 10 minutes when upgrading from Mendix Operator 1.1.\*, 1.2.\* , 1.3.\*, 1.4.\*, 1.5.\*, and 1.6.\*

Some upgrade steps are only required when upgrading from older versions of the Mendix Operator. There is a notice on these steps indicating which upgrade paths they apply to and for which paths the step should be skipped.

During the upgrade process, the Mendix Operator will have to be stopped and will not process any changes.
Apps and Environments managed by the Operator will keep running during this process and will be restarted in the cleanup step.

#### 2.2.1 Stop the Operator

Stop the Operator, by running the following command:

```shell
kubectl -n $OPERATOR_NAMESPACE scale deployment mendix-operator --replicas=0
```

#### 2.2.2 Upgrading the Custom Resource Definitions

{{% alert type="info" %}}
Follow this step when upgrading from Mendix Operator versions 1.0.\*, 1.1.\*, 1.2.\*, 1.3.\*, 1.4.\*, 1.5.\* and 1.6.\*
{{% /alert %}}

Run the following command to upgrade to the latest version of the Custom Resource Definitions for the Mendix Operator:

```shell
kubectl apply -f https://installergen.private-cloud.api.mendix.com/privatecloud/crds/v1
```

[Custom Resource Definitions](https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/) allow Mendix applications to be managed with Kubernetes APIs and tools such as `kubectl` and `oc`.

#### 2.2.3 Upgrading the Mendix Operator Deployment

Run the following command to switch to Mendix Operator version 1.7.0:

```shell
kubectl -n $OPERATOR_NAMESPACE patch deployment mendix-operator -p \
  '{"spec":{"template":{"spec":{"containers":[{"name":"mendix-operator","image":"private-cloud.registry.mendix.com/mendix-operator:1.7.0"}]}}}}'
```

#### 2.2.4 Updating the Mendix Operator Configuration

##### 2.2.4.1 Updating the Mendix Operator Configuration (from version 1.0.\*)

{{% alert type="info" %}}
Follow this step when upgrading from Mendix Operator 1.0.\* only.
If you're running a later version of the Mendix Operator, proceed [to the next step](#update-configuration-1.1.0).
{{% /alert %}}

Run the following commands to switch to the latest component versions:

```shell
kubectl -n $OPERATOR_NAMESPACE patch operatorconfiguration mendix-operator-configuration --type merge -p \
'{"spec":{
    "sidecarImage":"private-cloud.registry.mendix.com/mx-m2ee-sidecar:1.5.0",
    "metricsSidecarImage":"private-cloud.registry.mendix.com/mx-m2ee-metrics:1.1.0",
    "builderImage":"private-cloud.registry.mendix.com/image-builder:ingvar-rhel",
    "buildRuntimeBaseImage":"private-cloud.registry.mendix.com/runtime-base:{{.MxRuntimeVersion}}-rhel",
    "dockerfile":null
}}'
```

Set the default requests and limits for the Mendix Runtime pods:

```shell
kubectl -n $OPERATOR_NAMESPACE patch operatorconfiguration mendix-operator-configuration --type merge -p \
'{"spec":{
    "runtimeResources":{"limits":{"cpu":"1000m","memory":"512Mi"},"requests":{"cpu":"100m","memory":"512Mi"}}
}}'
```

Set the configuration for the readiness and liveness probes:

```shell
kubectl -n $OPERATOR_NAMESPACE patch operatorconfiguration mendix-operator-configuration --type merge -p \
'{"spec":{
    "runtimeLivenessProbe":{"initialDelaySeconds":60,"periodSeconds":15},
    "runtimeReadinessProbe":{"initialDelaySeconds":5,"periodSeconds":1}
}}'
```

Set the type for all Storage Plans to `on-demand`:

```shell
kubectl -n $OPERATOR_NAMESPACE get storageplan --no-headers=true -o name | sed -e 's/.*\///g' | \
  xargs -I {} kubectl -n $OPERATOR_NAMESPACE patch storageplan {} --type=merge -p '{"spec":{"type":"on-demand"}}'
```

##### 2.2.4.2 Updating the Mendix Operator Configuration (from versions 1.1.\*, 1.2.\*, 1.3.\* and 1.4.\*){#update-configuration-1.1.0}

{{% alert type="info" %}}
Follow this step only when upgrading from Mendix Operator 1.1.\*, 1.2.\*, 1.3.\* and 1.4.\*.

If you're running a later version of the Mendix Operator, proceed [to the next step](#update-configuration-1.5.0).
{{% /alert %}}

Run the following commands to switch to the latest component versions:

```shell
kubectl -n $OPERATOR_NAMESPACE patch operatorconfiguration mendix-operator-configuration --type merge -p \
'{"spec":{
    "sidecarImage":"private-cloud.registry.mendix.com/mx-m2ee-sidecar:1.5.0",
    "metricsSidecarImage":"private-cloud.registry.mendix.com/mx-m2ee-metrics:1.1.0",
    "builderImage":"private-cloud.registry.mendix.com/image-builder:ingvar-rhel",
    "buildRuntimeBaseImage":"private-cloud.registry.mendix.com/runtime-base:{{.MxRuntimeVersion}}-rhel"
}}'
```

##### 2.2.4.3 Updating the Mendix Operator Configuration (from versions 1.5.\* and 1.6.\*){#update-configuration-1.5.0}

{{% alert type="info" %}}
Follow this step only when upgrading from Mendix Operator 1.5.\* and 1.6.\*.
{{% /alert %}}

Run the following commands to switch to the latest component versions:

```shell
kubectl -n $OPERATOR_NAMESPACE patch operatorconfiguration mendix-operator-configuration --type merge -p \
'{"spec":{
    "sidecarImage":"private-cloud.registry.mendix.com/mx-m2ee-sidecar:1.5.0"
}}'
```

#### 2.2.5 Update the Kubernetes Role

{{% alert type="info" %}}
Follow this step when upgrading from Mendix Operator 1.2.\*, 1.1.\*, and 1.0.\*.

It can be skipped if the Mendix Operator is not configured to use OpenShift Routes for incoming network traffic.
{{% /alert %}}

To enable changing the App URL in OpenShift Routes, you need to perform this step to add the `update` permission to the `mendix-operator` role.

Search for the `mendix-operator` Role in the OpenShift web console and open if for editing, or run the following command to start editing the `mendix-operator` Role:

```shell
oc -n $OPERATOR_NAMESPACE edit role mendix-operator
```

Find the following resource (containing `apiGroups`: `route.openshift.io` and `resources`: `routes`):
```yaml
- apiGroups:
  - route.openshift.io
  resources:
  - routes
  verbs:
  - get
  - create
  - list
  - watch
```

and add an `update` verb to the list of verbs:

```yaml
- apiGroups:
  - route.openshift.io
  resources:
  - routes
  verbs:
  - get
  - create
  - list
  - watch
  - update # add this line
```

Save the role to apply the changes.

#### 2.2.6 Update the Storage Plan image repository

{{% alert type="info" %}}
Only follow this step when upgrading from Mendix Operator 1.1.\*, 1.2.\*, 1.3.\*, and 1.4.\*.
{{% /alert %}}

To switch from the `quay.io/digital_ecosystems` image repository to the new `private-cloud.registry.mendix.com` repository, run the following command:

```shell
kubectl -n $OPERATOR_NAMESPACE get storageplan -o yaml | \
    sed "s#image: quay.io/digital_ecosystems/storage-provisioner#image: private-cloud.registry.mendix.com/storage-provisioner#" | \
    kubectl -n $OPERATOR_NAMESPACE apply -f -
```

Alternatively, you can manually replace the image in all Storage Plans by running:

```shell
kubectl -n $OPERATOR_NAMESPACE edit storageplan
```

and replacing `quay.io/digital_ecosystems` with `private-cloud.registry.mendix.com`.

#### 2.2.7 Start the Mendix Operator

To start the updated version of the Mendix Operator, run:

```shell
kubectl -n $OPERATOR_NAMESPACE scale deployment mendix-operator --replicas=1
```

{{% alert type="warning" %}}

Starting the Operator will create or update deployments for all your apps.

All network traffic will be routed to the new deployments - causing a restart of all your apps managed by that Operator.

{{% /alert %}}

{{% alert type="warning" %}}

When upgrading from Mendix Operator 1.0.\* to the latest version, Deployments will be created in addition to StatefulSets created by the previous version of the Operator.

The StatefulSets should be cleaned up manually as documented in the [Cleanup phase](#cleanup-phase) section.

{{% /alert %}}

#### 2.2.8 Cleanup Phase{#cleanup-phase}

{{% alert type="info" %}}
Follow this step when upgrading from Mendix Operator 1.0.\* only.
{{% /alert %}}

Delete StatefulSets from the Namespace where the Operator was installed:

```shell
kubectl -n $OPERATOR_NAMESPACE delete --all statefulsets
```

These StatefulSets were replaced with deployments when the new version of the Operator was started.

## 3 Upgrading to Mendix Gateway Agent 1.6.0{#agent-latest}

{{% alert type="info" %}}

If the cluster was installed in **Standalone** mode, the Mendix Gateway Agent is not included in the installation and doesn't need to be upgraded.

Upgrading the Mendix Gateway Agent is only possible if the cluster was originally installed in **Connected** mode.

{{% /alert %}}

Before upgrading to the Mendix Gateway Agent 1.6.0, first [upgrade](#operator-latest) the Mendix Operator to the latest version
and set the `OPERATOR_NAMESPACE` variable in your Bash terminal as described above.

Run the following command to switch to the Mendix Agent version 1.6.0:
```shell
kubectl -n $OPERATOR_NAMESPACE patch deployment mendix-agent -p \
  '{"spec":{"template":{"spec":{"containers":[{"name":"mendix-agent","image":"private-cloud.registry.mendix.com/kubernetes-agent:1.6.0"}]}}}}'
```
