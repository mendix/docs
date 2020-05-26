---
title: "Upgrading Private Cloud to the latest version"
parent: "private-cloud"
description: "Describes how to manually upgrade to the latest version of the Mendix Operator"
menu_order: 90
tags: ["Upgrade", "Private Cloud", "Cluster", "Operator", "Deploy"]
---

# 1 Introduction

This document describes how an existing installation of Mendix for Private Cloud can be upgraded to the latest version.

# 2 Upgrade steps

## Upgrading to Mendix Operator v1.1.0{#operator-v1.1.0}

This process will take about 15 to 30 minutes.
During the upgrade process, the Mendix Operator will have to be stopped and will not process any changes.
Apps and Environments managed by the Operator will keep running during this process and will be restarted in the cleanup step.

### Preparation

Open a Bash-compatible terminal and set the target namespace where the Operator is currently installed:

```shell
OPERATOR_NAMESPACE={namespace where the Mendix Operator is installed}
```

All following commands require the `OPERATOR_NAMESPACE` variable to be set. When opening a new terminal, re-run this command again.

### Stop the Operator

To stop the Operator, run the following command:

```shell
kubectl -n $OPERATOR_NAMESPACE scale deployment mendix-operator --replicas=0
```

### Upgrading CRDs

```shell
# TODO: WRITE ME
```

### Upgrading the Mendix Operator Deployment

Run the following command to switch to the Mendix Operator version 1.1.0:
```shell
kubectl -n $OPERATOR_NAMESPACE patch deployment mendix-operator -p \
  '{"spec":{"template":{"spec":{"containers":[{"name":"mendix-operator","image":"quay.io/digital_ecosystems/mendix-operator:1.1.0"}]}}}}'
```

### Updating the Mendix Operator configuration

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

Set the default requests and limits for Mendix Runtime pods:

```shell
kubectl -n $OPERATOR_NAMESPACE patch operatorconfiguration mendix-operator-configuration --type merge -p \
'{"spec":{
    "runtimeResources":{"limits":{"cpu":"1000m","memory":"512Mi"},"requests":{"cpu":"100m","memory":"512Mi"}}
}}'
```

Set the configuration for readiness and liveness probes:

```shell
kubectl -n $OPERATOR_NAMESPACE patch operatorconfiguration mendix-operator-configuration --type merge -p \
'{"spec":{
    "runtimeLivenessProbe":{"initialDelaySeconds":60,"periodSeconds":15},
    "runtimeReadinessProbe":{"initialDelaySeconds":5,"periodSeconds":1}
}}'
```

Set the type to `on-demand` for all Storage Plans:

```shell
kubectl get storageplan --no-headers=true -o name | sed -e 's/.*\///g' | \
  xargs -I {} kubectl patch storageplan {} --type=merge -p '{"spec":{"type":"on-demand"}}'
```

### Start the Mendix Operator

To start the updated version of the Mendix Operator, run:

```shell
kubectl -n $OPERATOR_NAMESPACE scale deployment mendix-operator --replicas=1
```

### Cleanup steps

Delete StatefulSets from the Namespace where the Operator was installed:

```shell
kubectl -n $OPERATOR_NAMESPACE delete --all statefulsets
```

These StatefulSets will be replaced with Deploymens when the new version of the Operator is started.

## Upgrading to Mendix Gateway Agent v1.1.0{#agent-v1.1.0}

{{% alert type="info" %}}

If the cluster was installed in **Standalone** mode, the Mendix Agent is not included in the installation and doesn't need to be upgraded.

Upgrading the Mendix Gateway Agent is possible only if the cluster was originally installed in **Connected** mode.

{{% /alert %}}

Before upgrading to the Mendix Gateway Agent v1.1.0, first [upgrade](#operator-v1.1.0) the Mendix Operator to version v1.1.0
and set the `OPERATOR_NAMESPACE` variable in your Bash terminal.

Run the following command to switch to the Mendix Operator version 1.1.0:
```shell
kubectl -n $OPERATOR_NAMESPACE patch deployment mendix-agent -p \
  '{"spec":{"template":{"spec":{"containers":[{"name":"mendix-agent","image":"quay.io/digital_ecosystems/kubernetes-agent:1.1.0"}]}}}}'
```
