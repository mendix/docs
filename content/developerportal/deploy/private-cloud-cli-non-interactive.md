---
title: "Install and Configure Mendix for Private Cloud Non-interactive Mode"
parent: "private-cloud-cluster"
description: "Describes how to install and configure Mendix for Private Cloud in non-interactive mode"
menu_order: 10
tags: ["Create", "Private Cloud", "Cluster", "Namespace"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

To support automation namespace installation and configuration we provide non-interactive mode in our configuration tool.

{{% alert type="info" %}} In order to use non-interactive mode, you need to use Mendix Operator version 2.1.0 or above.{{% /alert %}}

Please see [Download the Configuration Tool](private-cloud-cluster#download-configuration-tool) to get information how to download the configuration tool.

{{% alert type="info" %}} Use "./mxpc-cli <command> --help" for more information about a given command. {{% /alert %}}

## 2 Base Installation

To run [base installation](private-cloud-cluster#base-installation) :

```shell
./mxpc-cli base-install --namespace <namespace> --clusterID <cluster-id> --clusterSecret <cluster-secret> --clusterMode <cluster-mode> --clusterType <cluster-type>
```
The cluster-id and cluster-secret are only required in connected mode.

## 3 Apply Configuration

To [configure namespace](private-cloud-cluster#configure-namespace) with a configuration file:

```shell
./mxpc-cli apply-config --namespace <namespace> --clusterID <cluster-id> --clusterSecret <cluster-secret> --file <config-file>
```
The cluster-id and cluster-secret are only required in connected mode.

The config file is the **mx_config_cli.yaml** file that you generate from [configure namespace](private-cloud-cluster#configure-namespace) in interactive mode 
when you click the Write YAML in [Review and Apply](private-cloud-cluster#review-apply) section.

Config file example:

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

## 4 Upgrade Namespace

To [upgrade namespace](private-cloud-upgrade-guide#upgrade-cluster):

```shell
./mxpc-cli upgrade-namespace --clusterType <cluster-type>
```