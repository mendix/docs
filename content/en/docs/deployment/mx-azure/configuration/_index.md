---
title: "Configuring Mendix on Azure"
url: /developerportal/deploy/mendix-on-azure/configuration/
description: "Describes Mendix on Azure configuration."
weight: 6
---
## Introduction

Mendix on Azure is delivered with default configuration settings optimized for evaluation and initial deployments, providing a seamless experience for trying out the solution.

For production environments or to meet specific organizational requirements, additional configuration is typically needed.

Mendix on Azure offers advanced configuration through the following methods:

* Self-service configuration in the Mendix on Azure Portal 
* Self-service configuration in the Microsoft Azure Portal 
* Self-service configuration in the Mendix on Kubernetes Portal 
* Configuration assistance upon request by submitting a support ticket through the Mendix on Azure Portal 

This document outlines the available configuration options and their functionalities.

## Self-service Configuration Available in the Mendix on Azure Portal

The [Mendix on Azure Portal](https://mendixonazure.mendix.com) provides a variety of self-service configuration options that can be modified anytime or specified once during initial cluster setup. The following sections categorize available options:

### Networking Settings {#networking-settings}

| Advanced Option | Description | Editable after initial creation |
| --- | --- | --- |
| Load Balancer Type | Controls whether your applications are reachable publicly or only privately via your own (Virtual) Network or Private Endpoints. | Yes |
| AKS Node CIDR IP Range | Defines the IP address range on the VNet hosting AKS cluster nodes. This can only be set during initial deployment and should align with your organization's IP plan if you plan to connect Mendix on Azure to other networks via peering. Default is acceptable when no interconnection is required. | No |
| AKS Network Isolated Cluster | When set to true will lead to a cluster without egress configuration, please carefully read the [documentation on cluster networking modes](/developerportal/deploy/mendix-on-azure/configuration/ingress-egress/) to understand the implications | No |

For more information, see [Configuring Ingress and Egress](/developerportal/deploy/mendix-on-azure/configuration/ingress-egress/).

### Application Cluster Settings

| Advanced Option    | Description    | Editable after Initial Creation |
| ---    | ---    | ---    |
| AKS Node VM Size | The VM size used on the AKS application cluster. Default should suffice in most circumstances. You can change the default size in case of performance issues (for example, using non-burstable instances can improve Mendix Runtime performance), or if your Mendix app environment instances require more RAM than available under current selection. In case a Mendix app environment instance is configured to require more RAM than available on the current VM size, switching to a larger VM size might be required to have the app instance start at all. | Yes |
| AKS Maximum Node Count | The number of available cluster nodes will be increased and decreased automatically based on the combined capacity requirement of all deployed Mendix apps. This setting controls the upper limit to the number of available nodes in order to avoid cost surprises.    | Yes    |
| AKS Service Tier    | The [AKS service tier](https://learn.microsoft.com/en-us/azure/aks/free-standard-pricing-tiers) determines the service level Microsoft provides on the Mendix on Azure Kubernetes cluster control plane. This does not impact application performance, only Microsoft's SLA. The Free tier is sufficient in most situations. Standard can be considered by organizations that value a financially backed SLA. For information about the associated costs, refer to Microsoft documentation. The Premium tier does not offer any additional value in combination with Mendix on Azure and is not recommended. | Yes |

### Redundancy

| Advanced Option | Description | Editable after Initial Creation |
| --- | --- | --- |
| Application Layer Redundancy | Defines Azure Availability Zones for AKS node pools to enhance resilience by distributing nodes across zones. | Yes |
| Database Layer Redundancy | Configures high availability (HA) for the PostgreSQL database by setting the Azure Availability Zone for the standby replica. **HA Modes**: **SameZone** (Primary and standby in the same zone, protects against instance failure); **ZoneRedundant** (Primary and standby in different zones protects against zone-wide failures). | Yes |
| Storage Layer Redundancy | Defines the data replication strategy for the application's storage account to ensure durability and availability. **Options**: **LRS** (Locally Redundant Storage, 3 copies in one datacenter in the same region); **ZRS** (Zone-Redundant Storage, 3 copies across 3 availability zones in the same region); **GRS** (Geo-Redundant Storage, 3 LRS copies in the primary region and 3 asynchronous copies in the paired secondary region);  **RA-GRS** (Read-Access Geo-Redundant Storage, GRS with read access to the secondary region); **GZRS** (Geo-Zone-Redundant Storage, ZRS in the primary region and 3 asynchronous copies in the paired secondary region); **RA-GZRS** (Read-Access Geo-Zone-Redundant Storage, GZRS with read access to the secondary region). **Upgrade Paths (No Recreation)**: - LRS → GRS → RA-GRS - ZRS → GZRS → RA-GZRS | Yes |
| Backup Storage Redundancy | Specifies the replication strategy for the backup storage account. **Options**: Same as application storage redundancy (LRS, ZRS, GRS, RA-GRS, GZRS, RA-GZRS). | Yes |

#### Restrictions and Limitations when Editing a Cluster

The following restrictions and limitations apply:

* You cannot change the database layer cannot change from Zone Redundant to Same Zone. You must first disable High Availability (HA), and then enable it with Same Zone.
* You cannot change the database layer to HA and the Postgres Compute tier to Burstable during same edit. You must first upgrade to GP/MO, and then enable HA in the next edit.
* You can only upgrade the storage layer and backup layer redundancy in the following ways:

    * LRS → GRS → RAGRS
    * ZRS → GZRS → RAGZRS

{{< figure src="/attachments/deployment/mx-azure/infraredundancy.png" class="no-border" >}}

### Database Settings

| Advanced Option | Description    | Editable after initial creation |
| ---    | ---    | ---    |
| Enable Read Replica    | Enables a read replica for direct app database access. For more information, see [Direct Database Access](/developerportal/deploy/mendix-on-azure/configuration/direct-database-access/). | Yes |
| Compute Tier and Size | Specifies the DB Compute Tier for the shared PostgreSQL database used by all Mendix app environments. You may need to increase it for better app performance. For more information, see [Compute options in Azure Database for PostgreSQL](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/concepts-compute) in Microsoft documentation.     | Yes     |
| Storage Performance Tier     | Specifies the Storage Performance Tier for the shared PostgreSQL database. Consider increasing if performance issues arise. For more information, see [Storage in Azure Database for PostgreSQL](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/concepts-storage) in Microsoft documentation. | Yes |

### Observability Settings

| Advanced Option | Description    | Editable after initial creation |
| ---    | ---    | ---    |
| Managed Grafana Accessibility     | Determines whether the Managed Grafana observability dashboard is accessible publicly or only via private endpoints. [Virtual network peering](/developerportal/deploy/mendix-on-azure/configuration/interconnecting-networks/#network-peering) is required for private access.    | Yes |

## Self-service configuration available via Microsoft Azure Portal

The following configurations can be modified directly through the [Microsoft Azure portal](https://portal.azure.com) on resources within the Managed Resource Group of your Mendix on Azure Managed Application:

| Configuration Option | Description |
| --- | --- |
| Configure virtual network peering on the vNet hosting Mendix on Azure | For more information, see [Implementing private connectivity using Azure Virtual Network Peering](/developerportal/deploy/mendix-on-azure/configuration/interconnecting-networks/#network-peering). |
| Deploy Private Link Service to expose Mendix apps in other Azure virtual networks | For more information, see [Using Private Link Service to expose Mendix apps in other Azure virtual networks](/developerportal/deploy/mendix-on-azure/configuration/interconnecting-networks/#pls). |
| Deploy Private Endpoints to establish connectivity between Mendix apps and other services | For more information, see [Accessing private services via Private Endpoints](/developerportal/deploy/mendix-on-azure/configuration/interconnecting-networks/#pe-internal). |
| Override DNS configuration on the vNet hosting Mendix on Azure | For more information, see [DNS name resolution towards resources in other networks](/developerportal/deploy/mendix-on-azure/configuration/interconnecting-networks/#name-resolution-dns-override). |

### The Mendix on Azure Managed Resource Group {#mrg}

Many Azure Portal configurations require modifying Azure resources located within the Managed Resource Group (MRG) of your Mendix on Azure environment. This resource group can be found through the Mendix on Azure Managed Application:

{{< figure src="/attachments/deployment/mx-azure/mrg.png" class="no-border" >}}

## Self-service Configuration Available in the Mendix on Kubernetes Portal

In addition to extensive individual app environment configuration options, the [Mendix on Kubernetes Portal](https://privatecloud.mendixcloud.com) also offers cluster-wide settings applicable to Mendix on Azure clusters:
 
### Adding Additional Cluster Managers {#cluster-manager}

The Mendix account that initializes the cluster automatically gains the Cluster Manager role.

The Mendix on Kubernetes portal lets you add additional cluster managers. These users can view and manage the cluster through both the Mendix on Azure and Mendix on Kubernetes portals, provided they have an Owner or Contributor role on the Azure Managed Application hosting the cluster.

Additional cluster managers have the same configuration privileges as the original initializer. They can also view and comment on support tickets related to the cluster via the Mendix on Azure portal but cannot access the full Zendesk ticket.

{{% alert color="info" %}} 
Before adding a cluster manager, ensure the invited user signs in to the Mendix on Azure portal prior to accepting the invitation. Otherwise, the invitation might show as accepted, but the user will not have access to any Mendix on Azure resources. 
{{% /alert %}}

## Configuration Assistance Available by Submitting a Support Ticket through the Mendix on Azure Portal

Certain configuration changes require Mendix intervention and can only be performed by submitting a support ticket through the Mendix on Azure portal:

| Configuration Change | Description |
| --- | --- |
| PostgreSQL Maintenance Window | Configure a dedicated maintenance window for the PostgreSQL database hosting your Mendix app databases. Since maintenance might cause temporary app downtime, you can request a custom schedule instead of the default system-managed one. For more information, see the [Microsoft documentation on PostgreSQL maintenance windows](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/concepts-maintenance). |

{{% alert color="info" %}} 
Please submit Mendix on Azure support tickets exclusively through the Mendix on Azure portal. Tickets created here automatically capture vital context such as cluster identifiers and logs, enabling faster, more accurate support.
{{% /alert %}}
