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

## 2 Upgrading to Mendix Operator 1.8.0{#operator-latest}

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
* about 15 minutes when upgrading from Mendix Operator 1.1.\* to 1.7.\*.

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
Follow this step when upgrading from Mendix Operator versions 1.0.\* to 1.7.\*  only.
{{% /alert %}}

Run the following command to upgrade to the latest version of the Custom Resource Definitions for the Mendix Operator:

```shell
kubectl apply -f https://installergen.private-cloud.api.mendix.com/privatecloud/crds/v1
```

[Custom Resource Definitions](https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/) allow Mendix applications to be managed with Kubernetes APIs and tools such as `kubectl` and `oc`.

#### 2.2.3 Upgrading the dependency versions

{{% alert type="info" %}}
Follow this step when upgrading from Mendix Operator versions 1.0.\* to 1.7.\*  only.
{{% /alert %}}

Run the following command to upgrade to the latest version of the Custom Resource Definitions for the Mendix Operator:

```shell
kubectl -n $OPERATOR_NAMESPACE apply -f https://installergen.private-cloud.api.mendix.com/privatecloud/ocf/v1/versions
```

[Custom Resource Definitions](https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/) allow Mendix applications to be managed with Kubernetes APIs and tools such as `kubectl` and `oc`.

#### 2.2.4 Upgrading the Mendix Operator Deployment

Run the following command to switch to Mendix Operator version 1.8.0:

```shell
kubectl -n $OPERATOR_NAMESPACE patch deployment mendix-operator -p \
  '{"spec":{"template":{"spec":{"containers":[{"name":"mendix-operator","image":"private-cloud.registry.mendix.com/mendix-operator:1.8.0"}]}}}}'
```

#### 2.2.5 Updating the Mendix Operator Configuration

##### 2.2.5.1 Updating the Mendix Operator Configuration (from version 1.0.\*)

{{% alert type="info" %}}
Follow this step when upgrading from Mendix Operator version 1.0.\* only.
If you're running a later version of the Mendix Operator, proceed [to the next step](#update-configuration-1.1.0).
{{% /alert %}}

Run the following commands to switch to the latest component versions:

```shell
kubectl -n $OPERATOR_NAMESPACE patch operatorconfiguration mendix-operator-configuration --type merge -p \
'{"spec":{
    "sidecarImage":null,
    "metricsSidecarImage":null,
    "builderImage":null,
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

##### 2.2.5.2 Updating the Mendix Operator Configuration (from versions 1.1.\*, 1.2.\*, 1.3.\*, and 1.4.\*){#update-configuration-1.1.0}

{{% alert type="info" %}}
Follow this step only when upgrading from Mendix Operator 1.1.\*-1.7.\* only.
If you're running a later version of the Mendix Operator, proceed [to the next step](#update-configuration-1.5.0).
{{% /alert %}}

Run the following commands to switch to the latest component versions:

```shell
kubectl -n $OPERATOR_NAMESPACE patch operatorconfiguration mendix-operator-configuration --type merge -p \
'{"spec":{
    "sidecarImage":null,
    "metricsSidecarImage":null,
    "builderImage":null,
    "buildRuntimeBaseImage":"private-cloud.registry.mendix.com/runtime-base:{{.MxRuntimeVersion}}-rhel"
}}'
```

#### 2.2.6 Update the Kubernetes Role

#### 2.2.6.1 Update the Kubernetes Role for OpenShift routes

{{% alert type="info" %}}
Follow this step when upgrading from Mendix Operator versions 1.0.\*, 1.1.\*, and 1.2.\*.

It can be skipped if the Mendix Operator is not configured to use OpenShift Routes for incoming network traffic.
{{% /alert %}}

To allow you to change the App URL in OpenShift Routes, you need to perform this step to add the `update` permission to the `mendix-operator` role.

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

#### 2.2.6.2 Update the Kubernetes Role for OperatorVersions CRD

{{% alert type="info" %}}
Follow this step when upgrading from Mendix Operator versions 1.0.\* to 1.7.\*.
{{% /alert %}}

To allow the Operator to manage its dependency versions, add the `operatorversions` resource to the `mendix-operator` role.

Search for the `mendix-operator` Role in the OpenShift web console and open it for editing, or run the following command to start editing the `mendix-operator` Role:

```shell
kubectl -n $OPERATOR_NAMESPACE edit role mendix-operator
```

Find the following resource (containing `apiGroups`: `privatecloud.mendix.com`):
```yaml
- apiGroups:
  - privatecloud.mendix.com
  resources:
  - '*'
  - builds
  - runtimes
  - mendixapps
  - operatorconfigurations
  - endpoints
  - storageplans
  - storageinstances
  verbs:
  - '*'
```

and add an `operatorversions` resource to the list of resources:

```yaml
- apiGroups:
  - privatecloud.mendix.com
  resources:
  - '*'
  - builds
  - runtimes
  - mendixapps
  - operatorconfigurations
  - endpoints
  - storageplans
  - storageinstances
  - operatorversions # add this line
  verbs:
  - '*'
```

Save the role to apply the changes.

#### 2.2.7 Update the Storage Plan provisioners

{{% alert type="info" %}}
Only follow this step when upgrading from Mendix Operator versions 1.0.\* to 1.7.\*.
{{% /alert %}}

Run the following command:

```shell
for PROVISIONER in basic postgres96 minio s3 sqlserver2017 cos
do
   echo "Upgrading $PROVISIONER Storage Plans..."
   kubectl -n $OPERATOR_NAMESPACE get storageplan -o=jsonpath="{range .items[*]}{.metadata.name}{' '}{.spec.create.image}{'\n'}{end}" | \
       grep ":${PROVISIONER}-rhel" | while read -r STORAGEPLAN
   do
       UPGRADE_STORAGEPLAN=$(echo $STORAGEPLAN | cut -d " " -f1)
       echo "Upgrading $UPGRADE_STORAGEPLAN Storage Plan"
       kubectl -n $OPERATOR_NAMESPACE patch storageplan $UPGRADE_STORAGEPLAN --type=merge -p \
           "{\"spec\":{\"provisioner\":\"$PROVISIONER\",\"create\":{\"image\":\"\"},\"delete\":{\"image\":\"\"}}}"
   done
done
```

#### 2.2.8 Start the Mendix Operator

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

#### 2.2.9 Cleanup Phase{#cleanup-phase}

{{% alert type="info" %}}
Follow this step when upgrading from Mendix Operator version 1.0.\* only.
{{% /alert %}}

Delete StatefulSets from the Namespace where the Operator was installed:

```shell
kubectl -n $OPERATOR_NAMESPACE delete --all statefulsets
```

These StatefulSets were replaced with deployments when the new version of the Operator was started.

## 3 Upgrading to Mendix Gateway Agent 1.7.0{#agent-latest}

{{% alert type="info" %}}

If the cluster was installed in **Standalone** mode, the Mendix Gateway Agent is not included in the installation and doesn't need to be upgraded.

Upgrading the Mendix Gateway Agent is only possible if the cluster was originally installed in **Connected** mode.

{{% /alert %}}

### 3.1 Preparation

Before upgrading to Mendix Gateway Agent version 1.7.0, first [upgrade](#operator-latest) the Mendix Operator to the latest version
and set the `OPERATOR_NAMESPACE` variable in your Bash terminal as described above.

Check the current version of the Agent by running the following command:

```shell
kubectl -n $OPERATOR_NAMESPACE get deployment mendix-agent -o=jsonpath='{.spec.template.spec.containers[].image}' 
```

The image name will look similar to `private-cloud.registry.mendix.com/mendix-agent:{VERSION}` or `quay.io/digital_ecosystems/mendix-agent:{VERSION}`.

Only follow the steps applicable to your currently installed version of the Mendix Agent.

For example, if the image name is `quay.io/digital_ecosystems/mendix-agent:1.6.0`, follow only the steps for upgrading from Mendix Agent 1.6.\*.

Some upgrade steps are only required when upgrading from older versions of the Mendix Gateway Agent.
There is a notice on these steps indicating which upgrade paths they apply to and for which paths the step should be skipped.

#### 3.2 Update the Kubernetes Role

#### 3.2.1 Update the Kubernetes Role for OperatorVersions CRD

{{% alert type="info" %}}
Follow this step when upgrading from Mendix Gateway Agent versions 1.0.\* to 1.6.\* only.
{{% /alert %}}

To allow the Mendix Gateway Agent to report and manage dependency versions for the Mendix Operator, add the `operatorversions` resource to the `mendix-agent` role.

Search for the `mendix-agent` Role in the OpenShift web console and open if for editing, or run the following command to start editing the `mendix-agent` Role:

```shell
kubectl -n $OPERATOR_NAMESPACE edit role mendix-agent
```

Find the following resource (containing `apiGroups`: `privatecloud.mendix.com`):
```yaml
- apiGroups:
  - privatecloud.mendix.com
  resources:
  - mendixapps
  verbs:
  - '*'
```

and add an `operatorversions` resource to the list of resources:

```yaml
- apiGroups:
  - privatecloud.mendix.com
  resources:
  - mendixapps
  - operatorversions # add this line
  verbs:
  - '*'
```

Save the role to apply the changes.

#### 3.3 Upgrading the Mendix Gateway Agent Deployment

Run the following command to switch to the Mendix Agent version 1.7.0:
```shell
kubectl -n $OPERATOR_NAMESPACE patch deployment mendix-agent -p \
  '{"spec":{"template":{"spec":{"containers":[{"name":"mendix-agent","image":"private-cloud.registry.mendix.com/kubernetes-agent:1.7.0"}]}}}}'
```
