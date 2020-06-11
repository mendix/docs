---
title: "Upgrading Private Cloud to the latest version"
parent: "private-cloud"
description: "Describes how to manually upgrade to the latest version of the Mendix Operator"
menu_order: 90
tags: ["Upgrade", "Private Cloud", "Cluster", "Operator", "Deploy"]
---

## 1 Introduction

This document describes how an existing installation of Mendix for Private Cloud can be upgraded to the latest version.

## 2 Upgrade steps

### 2.1 Upgrading to Mendix Operator v1.1.0{#operator-latest}

This process will take about 15 to 30 minutes.
During the upgrade process, the Mendix Operator will have to be stopped and will not process any changes.
Apps and Environments managed by the Operator will keep running during this process and will be restarted in the cleanup step.

#### 2.1.1 Preparation

Open a Bash-compatible terminal and set the target namespace where the Operator is currently installed:

```shell
OPERATOR_NAMESPACE={namespace where the Mendix Operator is installed}
```

All the following commands require the `OPERATOR_NAMESPACE` variable to be set. When opening a new terminal, re-run this command again.

#### 2.1.2 Stop the Operator

To stop the Operator, run the following command:

```shell
kubectl -n $OPERATOR_NAMESPACE scale deployment mendix-operator --replicas=0
```

#### 2.1.3 Upgrading the CRDs

Run the following command to upgrade to the latest version of CRDs:

```shell
kubectl apply -f https://installergen.private-cloud.api.mendix.com/privatecloud/crds/v1
```

#### 2.1.4 Upgrading the Mendix Operator Deployment

Run the following command to switch to Mendix Operator version 1.1.0:

```shell
kubectl -n $OPERATOR_NAMESPACE patch deployment mendix-operator -p \
  '{"spec":{"template":{"spec":{"containers":[{"name":"mendix-operator","image":"quay.io/digital_ecosystems/mendix-operator:1.1.0"}]}}}}'
```

#### 2.1.5 Updating the Mendix Operator Configuration

Run the following commands to switch to the latest component versions:

```shell
kubectl -n $OPERATOR_NAMESPACE patch operatorconfiguration mendix-operator-configuration --type merge -p \
'{"spec":{
    "sidecarImage":"quay.io/digital_ecosystems/mx-m2ee-sidecar:1.1.0",
    "builderImage":"quay.io/digital_ecosystems/image-builder:ingvar-rhel",
    "buildRuntimeBaseImage":"index.docker.io/mendix/runtime-base:{{.MxRuntimeVersion}}-rhel",
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

#### 2.1.6 Start the Mendix Operator

To start the updated version of the Mendix Operator, run:

```shell
kubectl -n $OPERATOR_NAMESPACE scale deployment mendix-operator --replicas=1
```

{{% alert type="warning" %}}

Starting the Operator will create deployments for all your apps.
All network traffic will be routed to the new deployments - causing a restart of all your apps managed by that Operator.
These deployments will be created in addition to StatefulSets created by the previous version of the Operator.

The StatefulSets should be cleaned up manually as documented in the [Cleanup phase](#cleanup-phase) section.

{{% /alert %}}

#### 2.1.7 Cleanup Phase{#cleanup-phase}

Delete StatefulSets from the Namespace where the Operator was installed:

```shell
kubectl -n $OPERATOR_NAMESPACE delete --all statefulsets
```

These StatefulSets were replaced with deployments when the new version of the Operator was started.

### 2.2 Upgrading to Mendix Gateway Agent v1.1.1{#agent-latest}

{{% alert type="info" %}}

If the cluster was installed in **Standalone** mode, the Mendix Gateway Agent is not included in the installation and doesn't need to be upgraded.

Upgrading the Mendix Gateway Agent is only possible if the cluster was originally installed in **Connected** mode.

{{% /alert %}}

Before upgrading to the Mendix Gateway Agent v1.1.1, first [upgrade](#operator-latest) the Mendix Operator to version v1.1.1
and set the `OPERATOR_NAMESPACE` variable in your Bash terminal as described above.

Run the following command to switch to the Mendix Agent version 1.1.1:
```shell
kubectl -n $OPERATOR_NAMESPACE patch deployment mendix-agent -p \
  '{"spec":{"template":{"spec":{"containers":[{"name":"mendix-agent","image":"quay.io/digital_ecosystems/kubernetes-agent:1.1.1"}]}}}}'
```
