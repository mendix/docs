---
title: "Install and Configure Mendix for Private Cloud Non-interactive Mode"
url: /developerportal/deploy/private-cloud-cli-non-interactive/
description: "Describes how to install and configure Mendix for Private Cloud in non-interactive mode"
weight: 5
tags: ["Create", "Private Cloud", "Cluster", "Namespace"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

To support automation namespace installation and configuration we provide a non-interactive mode in our configuration tool.

{{% alert color="info" %}} To use non-interactive mode, you need Mendix Operator version 2.1.0 or above.{{% /alert %}}

Please see [Download the Configuration Tool](/developerportal/deploy/private-cloud-cluster/#download-configuration-tool) for information on how to download the configuration tool.

{{% alert color="info" %}} Use "./mxpc-cli <command> --help" for more information about a given command. {{% /alert %}}

The following parameters may be used in the commands:
  
* `--namespace` – a cluster namespace.
* `--clusterType` – a cluster type *openshift* or *generic*.
* `--clusterMode` – a cluster mode *standalone* or *connected*.
* `-i` – the *cluster id* that is shown in the **Installation** tab of a namespace in the Private Cloud Portal.
* `-s` – the *cluster secret* that is shown in the **Installation** tab of a namespace in the Private Cloud Portal.
* `--file` – a file which contains the configuration for the namespace.

When using connected mode, you need to put cluster id and cluster secret as arguments. These parameters are used by the Mendix Gateway Agent to connect to the Private Cloud Portal. You can see these values in the installation command, as the -i and -s parameters, respectively.

{{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/private-cloud-cli-non-interactive/installation-command.png" >}}

## 2 Base Installation

To perform the [base installation](/developerportal/deploy/private-cloud-cluster/#base-installation), use the following command:

```shell
./mxpc-cli base-install --namespace <namespace> -i <cluster-id> -s <cluster-secret> --clusterMode <cluster-mode> --clusterType <cluster-type>
```
The cluster-id and cluster-secret are only required when using Mendix for Private Cloud in connected mode.

## 3 Apply Configuration

To [configure the namespace](/developerportal/deploy/private-cloud-cluster/#configure-namespace) with a configuration file, use the following command:

```shell
./mxpc-cli apply-config -i <cluster-id> -s <cluster-secret> --file <config-file>
```
The cluster-id and cluster-secret are only required when using Mendix for Private Cloud in connected mode.

The config file is the **mx_config_cli.yaml** file that you generate when you click the **Write YAML** in the [Review and Apply](/developerportal/deploy/private-cloud-cluster/#review-apply) phase of configuring your namespace interactively.

Below is an example of a config file:

```yaml
namespace: my-namespace
cluster_mode: connected
mask:
  database_plan: true
  storage_plan: true
  ingress: true
  registry: true
  proxy: false
  custom_tls: false
database_plan:
  name: ephemeral-database
  type: ephemeral
storage_plan:
  name: ephemeral-storage
  type: ephemeral
ingress:
  type: openshift-route
  enable_tls: false
  k8s_ingress: null
  service: null
registry:
  type: openshift4
```

## 4 Upgrade Mendix Operator and Mendix Gateway Agent

To [upgrade the versions of Mendix components in your namespace](/developerportal/deploy/private-cloud-upgrade-guide/#upgrade-cluster), use the following command:

```shell
./mxpc-cli upgrade-namespace --clusterType <cluster-type>
```
