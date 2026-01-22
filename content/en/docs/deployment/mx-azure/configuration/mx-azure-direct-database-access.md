---
title: "Direct App Database Access"
url: /developerportal/deploy/mendix-on-azure/configuration/direct-database-access/
description: "Provides details about obtaining Direct Database Access using the read replica feature."
weight: 40
---

## Introduction

This document describes how you can achieve direct app database access by enabling a read replica for the PostgreSQL database hosting the Mendix app data in a Mendix on Azure cluster. It also provides examples on how to read data from the read replica. 

### What is a Read Replica and Why Is It Needed?

Read replicas are synchronized copies of the primary database. They are commonly used to serve read-only queries, reducing load on the primary database by separating reads from writes.

In the case of Mendix on Azure, read queries still go to the primary database, but the read replica is created specifically to give customers secure, read-only access to the data. This feature is particularly useful for data ingestion (data lake) purposes, and when the customer needs to have read-only access to Mendix app data in a secure manner that does not impact app performance.

## Prerequisites

Before you begin, make sure to fulfill the following prerequisites:

* Ensure that you have established working connectivity to the Mendix on Azure virtual network by enabling [virtual network peering]( /developerportal/deploy/mendix-on-azure/configuration/interconnecting-networks/#network-peering)
* Ensure that your Postgres database has the **General Purpose** or **Memory Optimized** compute tier settings.

{{% alert color="info" %}} Leveraging Direct Database Access is only possible in combination with virtual network peering, not with Azure Private Link / Private Endpoints. {{% /alert %}}

## Enabling the Read Replica in the Mendix on Azure Portal

By default, the read replica for Postgres database is disabled. To enable it, perform the following steps:

1. On the **Provision > Database Settings** section of the **Initialize Cluster** page, set the **Enable Read Replica** option to **Yes**.

    {{% alert color="info" %}} For existing clusters, you can also enable or disable the read replica in the **Edit Cluster** flow.{{% /alert %}}

2. Click **Next** to initialize the cluster.

    {{< figure src="/attachments/deployment/mx-azure/enableReadReplica.png" class="no-border" >}}

    After the cluster is initialized, the read replica for PostgreSQL database is enabled, and a read replica for the PostgreSQL database has been created automatically.

    {{< figure src="/attachments/deployment/mx-azure/readReplicaEnabled.png" class="no-border" >}}

3. Copy the address value from the record set within the private DNS zone created for your PostgreSQL database. You can find this private DNS zone in the [Managed Resource Group of your Mendix on Azure environment](/developerportal/deploy/mendix-on-azure/configuration/#mrg).

    {{< figure src="/attachments/deployment/mx-azure/copyAddressValue.png" class="no-border" >}}

4. Add Entra ID users who should be able to access the replica database by performing the following steps:

    1. In the Azure portal, go to the [Managed Resource Group of your Mendix on Azure environment](/developerportal/deploy/mendix-on-azure/configuration/#mrg).
    2. Select the PostgreSQL master database resou.rce (type: Azure Database for PostgreSQL Flexible Server).
    3. Go to **Security > Authentication**
    4. Add any user needing to access the read replica as an Microsoft Entra administrator.

    {{< figure src="/attachments/deployment/mx-azure/adduser.png" class="no-border" >}}  

{{% alert color="info" %}}Never delete the existing ServicePrincipal user.{{% /alert %}}

{{% alert color="info" %}}Users added here only have full Read access to the database, as network access is restricted to the read replica only using [Network Security Group](https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview) rules.{{% /alert %}}

## Enabling Virtual Network Peering and DNS Name Resolution

VNet peering to the Mendix on Azure vNet is required to access the database. It enables IP traffic to flow to the read replica instance from other networks using private IPs. If you have not already configured vNet peering, you should follow the [instructions](/developerportal/deploy/mendix-on-azure/configuration/interconnecting-networks/#network-peering) to do so.

After enabling IP traffic to flow by enabling vNet peering, you need to make sure the read replica instance can be resolved from the source network(s). This can be done by associating the Private DNS Zone hosting records for your read replica instance to the virtual networks where you want to access the read replica from:

1. Locate the Private DNS Zone containing the record pointing to the read replica. This Private DNS zone can be found in the [Managed Resource Group of your Mendix on Azure environment](/developerportal/deploy/mendix-on-azure/configuration/#mrg) and has a domain suffix ending in **database.azure.com**.
2. Create a [virtual network link](https://learn.microsoft.com/en-us/azure/dns/private-dns-virtual-network-links) to link the PostgreSQL database's private DNS zone with the virtual networks your read replica clients originate from. This enables seamless name resolution from your source network(s).

Users in the source network(s) can now connect to the read replica using any PostgreSQL clieny by [utilizing Microsoft Entra ID authentication](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/security-entra-configure#authenticate-with-microsoft-entra-id).

The following diagram illustrates the network connectivity made possible by combining vNet peering with Private DNS zone name resolution:

{{< figure src="/attachments/deployment/mx-azure/vnetpeeringreadReplicaEnabled.png" class="no-border" >}}
