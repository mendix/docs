---
title: "Deploy Mendix on Windows in Microsoft Azure"
parent: "deploy-mendix-on-microsoft-windows"
description: "How to install and configure Mendix in an HA setup on servers running Windows in Microsoft Azure"
menu_order: 10
tags: ["deploy", "Windows", "Azure", "HA", "High Availability", "Microsoft", "Mendix Service Console", "IIS"]
---

## 1 Introduction

This document has been created as an example for setting up a high available Mendix Runtime Server environment on Windows, using the Microsoft Azure cloud platform. This will probably require some adaptation to your situation, as this guide is meant to illustrate what Mendix system and settings to take into account, and not a complete guide or a supported 'best practice' for deploying a Mendix hosting environment.
It describes the installation and configuration of the Mendix software on multiple systems running Microsoft Windows on the Microsoft Azure cloud platform and covers:

* Setting up an Azure Load Balancer

* Deploying a Mendix app with master and slave nodes

* Configuring Azure Blob Storage as shared storage


## 2 Prerequisites {#Prerequisites}

* Basic knowledge of administering Microsoft Azure and Windows servers

* An active Azure subscription

* Two or more servers, configured as described in the [Deploy Mendix on Microsoft Windows](/developerportal/deploy/deploy-mendix-on-microsoft-windows) guide. Make sure these servers have an extra data disk added which you configure to use as the location of apps and server files in the Mendix Service Console preferences.

* An Azure admin account with sufficient permissions to create or modify:

  * Load balancers

  * Virtual machines

  * Storage accounts


## 3 Configure cluster slave nodes

In a clustered environment there are some tasks (for example, cleaning up expired user sessions from the database) that should only be handled by one of the cluster members. By default, each Mendix app server will execute these tasks, which can lead to issues. Disable executing these tasks on all servers **except one** by adding the Custom Mendix setting _com.mendix.core.isClusterSlave_ to _true_. So if you have a two server cluster, add this setting on one server and if you have five servers in your cluster, add it on four of them.

1. Select your app and click **Configuration**.

   ![](attachments/deploy-mendix-ha-on-windows-in-microsoft-azure/slave_click_configuration.png)

2. In the Configuration screen, click **Advanced...**.

   ![](attachments/deploy-mendix-ha-on-windows-in-microsoft-azure/slave_click_advanced.png)

3. In the Advanced screen add a line to Custom Mendix Settings with Name _com.mendix.core.isClusterSlave_ and value _true_.

   ![](attachments/deploy-mendix-ha-on-windows-in-microsoft-azure/slave_add_setting.png)

4. Click **Close** on both screens to return to the Service Console.

More information on the cluster leader and slave roles can be found in [this article](/refguide/clustered-mendix-runtime#4-cluster-leader-cluster-slaves).


## 4 Configuring the Azure Load Balancer

The exact configuration details of the load balancer will depend on your network environment and availability demands. The Mendix Runtime does not require sticky sessions. Make sure you have configured health probes for HTTP (port 80) and HTTPS (port 443), a back-end pool containing all your Mendix application servers and load balancing rules to forward ports 80 and 443 to the servers in the back-end pool using the corresponding health probe.
More information regarding the configuration of Azure Load Balancers is available in [the Microsoft Azure documentation](https://docs.microsoft.com/en-us/azure/load-balancer/quickstart-load-balancer-standard-public-portal?tabs=option-1-create-load-balancer-standard).


## 5 Configuring Azure Blob Storage as shared storage

Go to the Azure Portal to retrieve the Azure Storage account name and an access key:

![](attachments/deploy-mendix-ha-on-windows-in-microsoft-azure/azure_storage_keys.png)

Then select your application, click **Configuration** and then **Advanced...**. In the Advanced configuration screen, add the following settings:

1. Name: _com.mendix.core.StorageService_, value: _com.mendix.storage.azure_

2. Name: _com.mendix.storage.azure.AccountName_, value: `<your Azure Storage account name>`

3. Name: _com.mendix.storage.azure.AccountKey_, value: `<your Azure Storage access key>`

4. Name: _com.mendix.storage.azure.Container_, value: `<the Azure Storage blob container>`

   ![](attachments/deploy-mendix-ha-on-windows-in-microsoft-azure/application_storage_settings.png)

By default, the container will be created in the blob storage if it does not yet exist. More information about the configuration options for Azure Blob Storage in the Mendix Runtime is available here: [Microsoft Azure Blob Storage settings](/refguide/custom-settings#7-microsoft-azure-blob-storage-settings)

It's also strongly recommended to add the setting _com.mendix.storage.PerformDeleteFromStorage_ with value `False`. This prevents the runtime from deleting files from the underlying storage when it's deleted in the app, which can result in missing files when restoring a database back-up.
If you do not want to enable this setting, make sure have a restore strategy configured for your storage backend.

These settings have to be configured on _all servers in the cluster_.


## 6 Database

Please note that, when using an Azure SQL database for your deployment, it is recommended to use either Premium (DTU-based model) or Business Critical (vCore-based model). Otherwise, the latency of the database could result in subpar performance of your application.
Also, keep in mind that each published application needs its own database! More information on database requirements can be found here: [Databases](/refguide/system-requirements#databases)


## 7 Read More

* [Mendix deployment on Microsoft Windows](/developerportal/deploy/deploy-mendix-on-microsoft-windows)
* [Clustered Mendix Runtime](/refguide/clustered-mendix-runtime)
* [System requirements](/refguide/system-requirements)