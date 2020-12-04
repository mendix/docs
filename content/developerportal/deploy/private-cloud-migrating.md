---
title: "Migrating to Your Own Registry"
parent: "private-cloud-cluster"
description: "Describes how to migrate Mendix images to a private cloud registry"
menu_order: 10
tags: ["Private Cloud", "Registry", "Migrate", "Image", "Export", "Import"]
---

## 1 Introduction

When you have an OpenShift or Kubernetes cluster which is firewalled, you will need to host Mendix components in your own registry.

This document explains how to export the components from the Mendix registry and import them into your own registry.

## 2 Prerequisites for Migrating to Your Registry

To export components from the Mendix registry, you will need access to the internet.
You will also need all the other prerequisites for creating a Mendix for Private Cloud cluster, as documented in the [Prerequisites for Creating a Cluster](private-cloud-cluster#prerequisites) section of *Creating a Private Cloud Cluster*.

## 3 Saving the Installer Shell Script

Follow the instructions in [Creating a Private Cloud Cluster](private-cloud-cluster) using the configuration tool as far as doing the [Base Installation](private-cloud-cluster#base-installation)

Follow the instructions for doing the base installation, including the instructions for saving the installer settings: "Click **Save Installer**. This step will save the *mx_installer* shell script on your local machine as `C:\Users\<User id>\.mx_config_cli`.

You will need to patch this installer later on to use your own registry.

## 4 Export Mendix Components

To export the Mendix components you want to migrate to your own registry, you need to run the Mendix Configuration Tool in registry migration mode.

Follow these steps to export the Mendix components and store them on your local machine. 

1. Start the Configuration Tool using the command `mx-config-cli registry-migration` to initiate registry migration mode.

2. Select **Migration Type** to be *Export*.

3. Select all the **Main Components** and **Storage Provisioners** you want to export.

    ![](attachments/private-cloud-migrating/export.png)

4. Click **Export components**.

    The components you selected will be extracted from the Mendix repository and saved on your local machine in the folder `C:\Users\<User id>\.mx_config_cli\registry-migration`.

## 5 Import Mendix Components Into Custom Registry

Once you have the Mendix components saved on your local machine, you can import them into your custom registry.

Perform the following steps.

1. Ensure that the Configuration Tool is started in registry migration mode. use the command `mx-config-cli registry-migration` if it is not already running.



## 6 Configure Installation Script to use Custom Registry

## 7 Create and Configure Mendix for Private Cloud Cluster and Namespace

You can now create a new Mendix for Private Cloud cluster and namespace using the configuration tool with the argument `--offline`.

### 7.1 Base Installation

### 7.2 Configure Namespace