---
title: "Deploy Mendix on Windows in Microsoft Azure"
url: /developerportal/deploy/deploy-mendix-ha-on-windows-in-microsoft-azure/
description: "How to install and configure Mendix in an HA setup on servers running Windows in Microsoft Azure"
weight: 5
tags: ["deploy", "Windows", "Azure", "HA", "High Availability", "Microsoft", "Mendix Service Console", "IIS"]
---

## 1 Introduction

This document has been created as an example of setting up a high availability Mendix Runtime Server environment on Windows, using the Microsoft Azure cloud platform. You will probably need to adapt this to your situation, as this guide is meant to illustrate what Mendix system and settings to take into account, and is not a complete guide or a supported 'best practice' for deploying a Mendix hosting environment.
It describes the installation and configuration of the Mendix software on multiple systems running Microsoft Windows on the Microsoft Azure cloud platform and covers:

* Setting up an Azure Load Balancer

* Deploying a Mendix app with master and slave nodes

* Configuring Azure Blob Storage as shared storage


## 2 Prerequisites {#Prerequisites}

* Basic knowledge of administering Microsoft Azure and Windows servers

* An active Azure subscription

* Two or more servers, configured as described in the [Deploy Mendix on Microsoft Windows](/developerportal/deploy/deploy-mendix-on-microsoft-windows/) guide. Make sure these servers have an extra data disk added which you configure to use as the location of apps and server files in the Mendix Service Console preferences.

* An Azure admin account with sufficient permissions to create or modify:

  * Load balancers

  * Virtual machines

  * Storage accounts


## 3 Configure cluster slave nodes

In a clustered environment there are some tasks (for example, cleaning up expired user sessions from the database) that should only be handled by one of the cluster members. By default, each Mendix app server will execute these tasks, which can lead to issues. Ensure that only one server executes these tasks by adding the Custom Mendix setting _com.mendix.core.isClusterSlave_ and setting it to _true_ for all servers **except one**. So if you have a two server cluster, add this setting for one server and if you have five servers in your cluster, add it for four of them.

1. Select your app and click **Configuration**.

   {{< figure src="/attachments/developerportal/deploy/on-premises-design/deploy-mendix-on-microsoft-windows/deploy-mendix-ha-on-windows-in-microsoft-azure/slave_click_configuration.png" >}}

2. In the Configuration screen, click **Advanced...**.

   {{< figure src="/attachments/developerportal/deploy/on-premises-design/deploy-mendix-on-microsoft-windows/deploy-mendix-ha-on-windows-in-microsoft-azure/slave_click_advanced.png" >}}

3. In the Advanced screen add a line to Custom Mendix Settings with **Name** _com.mendix.core.isClusterSlave_ and **Value** _true_.

   {{< figure src="/attachments/developerportal/deploy/on-premises-design/deploy-mendix-on-microsoft-windows/deploy-mendix-ha-on-windows-in-microsoft-azure/slave_add_setting.png" >}}

4. Click **Close** on both screens to return to the Service Console.

More information on the cluster leader and slave roles can be found in the [Cluster Leader & Cluster Slaves](/refguide/clustered-mendix-runtime/#cluster-leader-follower) section of *Clustered Mendix Runtime*.


## 4 Configuring the Azure Load Balancer

The exact configuration details of the load balancer will depend on your network environment and availability demands. The Mendix Runtime does not require sticky sessions. Make sure you have configured health probes for HTTP (port 80) and HTTPS (port 443), a back-end pool containing all your Mendix application servers, and load balancing rules to forward ports 80 and 443 to the servers in the back-end pool using the corresponding health probe.
More information regarding the configuration of Azure Load Balancers is available in [the Microsoft Azure documentation](https://docs.microsoft.com/en-us/azure/load-balancer/quickstart-load-balancer-standard-public-portal?tabs=option-1-create-load-balancer-standard).


## 5 Configuring Azure Blob Storage as shared storage

Go to the Azure Portal to retrieve the Azure Storage account name and an access key:

{{< figure src="/attachments/developerportal/deploy/on-premises-design/deploy-mendix-on-microsoft-windows/deploy-mendix-ha-on-windows-in-microsoft-azure/azure_storage_keys.png" >}}

Then select your application, click **Configuration** and then **Advanced...**. In the **Advanced Settings** screen, add the following **Custom Mendix settings**:

* **Name**: _com.mendix.core.StorageService_, **Value**:`com.mendix.storage.azure`

* **Name**: _com.mendix.storage.azure.AccountName_, **Value**: `<your Azure Storage account name>`

* **Name**: _com.mendix.storage.azure.AccountKey_, **Value**: `<your Azure Storage access key>`

* **Name**: _com.mendix.storage.azure.Container_, **Value**: `<the Azure Storage blob container>`

   {{< figure src="/attachments/developerportal/deploy/on-premises-design/deploy-mendix-on-microsoft-windows/deploy-mendix-ha-on-windows-in-microsoft-azure/application_storage_settings.png" >}}

By default, the container will be created in the blob storage if it does not yet exist. More information about the configuration options for Azure Blob Storage in the Mendix Runtime is available in the [Microsoft Azure Blob Storage Settings](/refguide/custom-settings/#azure-blob) section of *Runtime Customization*.

It is also strongly recommended to add the setting _com.mendix.storage.PerformDeleteFromStorage_ with value `false`. This prevents the runtime from deleting files from the underlying storage when they are deleted in the app, which can result in missing files when restoring a database back-up.
If you do not want to enable this setting, make sure you have a restore strategy configured for your storage back end.

{{% alert color="info" %}}
These settings have to be configured on *all* servers in the cluster.
{{% /alert %}}

## 6 Database

Please note that, when using an Azure SQL database for your deployment, it is recommended you use either Premium (DTU-based model) or Business Critical (vCore-based model). Otherwise, the latency of the database affect the performance of your application.
Also, keep in mind that each published application needs its own database! More information on database requirements can be found here: [Databases](/refguide/system-requirements/#databases)


## 7 Read More

* [Mendix deployment on Microsoft Windows](/developerportal/deploy/deploy-mendix-on-microsoft-windows/)
* [Clustered Mendix Runtime](/refguide/clustered-mendix-runtime/)
* [System requirements](/refguide/system-requirements/)
