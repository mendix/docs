---
title: "Read Replicas for Postgres Databases"
url: /developerportal/deploy/mendix-on-azure/read-replica-database-access/
description: "Provides details about the read replica for Postgres databases."
weight: 30
---

## Introduction

This document describes how you can enable read replicas for the Postgres database and provides examples on how to read data from the read replica database. The read replica is the database instance holding the Mendix app databases.

### What is a Read Replica and Why Is It Needed?

Read replicas are synchronized copies of the primary database. They are commonly used to serve read-only queries, reducing load on the primary database by separating reads from writes.

In the case of Mendix on Azure, read queries still go to the primary database, but the read replica is created specifically to give customers secure, read-only access to the data. This feature is particularly useful for data ingestion (data lake) purposes, and when the customer needs to have read-only access to Mendix app data in a secure manner that does not impact app performance.

## Prerequisites

Before you begin, make sure to fulfill the following prerequisites:

* Refer to Postgres documentation to familiarize yourself concepts related to read replicas and VNet peering.
* Ensure that your Postgres database has the **General Purpose** or **Memory Optimized** compute tier settings.

## Enabling Read Replicas in the Mendix on Azure Portal

By default, the read replica for Postgres database is disabled. To enable it, perform the following steps:

1. On the **Provision > Database Settings** section of the **Initialize Cluster** page, set the **Enable Read Replica** option to **Yes**.

{{% alert color="info" %}}You can also update, enable, or disable the read replica in the **Edit Cluster** flow.{{% /alert %}}

2. Click **Next** to initialize the cluster.

    {{< figure src="/attachments/deployment/mx-azure/enableReadReplica.png" class="no-border" >}}

    After the cluster is initialized, the read replica for Postgres database is enabled, and a read replica for the Postgres database is created in the managed cluster. 

        {{< figure src="/attachments/deployment/mx-azure/readReplicaEnabled.png" class="no-border" >}}

3. Copy the address value from the record set within the private DNS zone created for your Postgres database.

    {{< figure src="/attachments/deployment/mx-azure/copyAddressValue.png" class="no-border" >}}

4. Add the users who should be able to access the replica database by performing the following steps:

    1. In the Azure portal, go to the resource group where you created the managed app.
    2. Under the resource group, go to the managed resource group and click on the Postgres master database resource.
    3. Go to **Security > Authentication**
    4. Add a Microsoft Entra administrator.

    {{< figure src="/attachments/deployment/mx-azure/adduser.png" class="no-border" >}}  

{{% alert color="info" %}}Do not delete the existing ServicePrincipal user.{{% /alert %}}

## Enabling Virtual Network Peering

VNet peering to the Mendix on Azure vNet is required to access the database. It enables connections between two virtual networks (VNets) so resources can talk to each other using private IPs. If you have not already configured VNet peering, you should do it now.

The following diagram shows one potential solution to the access issue. Bi-directional [virtual network peering](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview) has been configured between the two resource groups.

{{< figure src="/attachments/deployment/mx-azure/vnetpeeringreadReplicaEnabled.png" class="no-border" >}}

To enable virtual network peering for your Mendix on Azure app, perform the following steps:

1. In the Microsoft Azure portal, [add a new bi-directional virtual peering](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-peering?tabs=peering-portal) in the resource group where your Mendix app is deployed.

    {{< figure src="/attachments/deployment/mx-azure/virtual-network-peerings-add.png" class="no-border" >}}

2. Create a [Azure Private DNS zone](https://learn.microsoft.com/en-us/azure/dns/private-dns-privatednszone) in another resource group from where you need to connect to the replica database.  Private DNS zone resolves domain names in a Postgres read replica to a private IP addresses.
3. In the **Instance details** section, in the **Name** field, enter the domain of your Mendix app, for example, *azure.mendixapps.io*. 
4. Create a [DNS record](https://learn.microsoft.com/en-us/azure/dns/dns-operations-recordsets-portal) for the Mendix application. The record set maps a host name to a private IP.

    1. In the **Name** field, enter the name of our Mendix app, for example, *myapp*.
    2. In the **IP** field, enter the IP address of the read replica. Refer to the value of the record set in step 3 above.
    3. Create a [virtual network link](https://learn.microsoft.com/en-us/azure/dns/private-dns-virtual-network-links) to connect the Postgres database's private DNS zone with your custom virtual network. This enables seamless name resolution within your VNet.

Users in the other virtual network can now connect to your Mendix app.
