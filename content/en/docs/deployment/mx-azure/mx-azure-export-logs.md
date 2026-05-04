---
title: "Export Logs to External Systems"
url: /developerportal/deploy/mendix-on-azure/export-logs/
description: "Configure Data Export Rules to send logs from Mendix on Azure to third-party observability tools"
weight: 15
---

## Introduction

Mendix on Azure provides integrated monitoring through Azure-Managed Grafana, which is the recommended way to monitor your applications. However, some organizations must send Platform logs to external systems for integration with existing SIEM, compliance tools, or centralized observability platforms.

This document explains how to configure data export rules for Azure Log Analytics to send logs from your Mendix on Azure environment to the following destinations:

* Azure Event Hubs - For real-time streaming to third-party tools
* Azure Storage Accounts - For long-term archival or batch processing

### Use Cases

Consider using Data Export Rules when you:

- Need to integrate Mendix logs with your organization's SIEM (e.g., Splunk, DataDog, Sentinel)
- Have compliance requirements for long-term log retention outside Log Analytics
- Want to centralize logs from multiple systems in a single observability platform
- Need to process logs with custom pipelines or analytics tools

**Note:** Grafana remains the primary supported monitoring solution for Mendix on Azure. Use Data Export Rules only when you have specific integration requirements that Grafana cannot fulfill.

## Responsibility Boundary

**It is critical to understand where Mendix's responsibility ends and yours begins.**

{{< figure src="/attachments/mx-azure-export-logs/responsibility-flow-diagram.png" alt="Responsibility boundary diagram showing Mendix manages workspace and permissions, customer manages export rules and downstream systems" >}}

### What Mendix Provides

✓ Managed Log Analytics Workspace with platform logs  
✓ Permissions to configure Data Export Rules  
✓ Documentation on how to enable this capability  

### What You Configure and Manage

✓ Data Export Rule configuration in Azure Portal  
✓ Destination resources (Event Hub or Storage Account)  
✓ All downstream integration (DataDog forwarder, SIEM connectors, etc.)  
✓ Troubleshooting destination-side ingestion issues  

### What Mendix Does NOT Support

✗ Configuring or troubleshooting Data Export Rules  
✗ Providing or managing destination Event Hubs or Storage Accounts  
✗ Any integrations downstream from Log Analytics (DataDog, Splunk, Sentinel, etc.)  
✗ Issues with third-party forwarders, connectors, or agents  

**If you encounter issues with destination systems or third-party tools, contact those vendors directly for support.**

### Data Sensitivity Warning

⚠️ **IMPORTANT:** The logs you export may contain sensitive data including personally identifiable information (PII), application data, and system metadata. You are fully responsible for:
- Ensuring compliance with data protection regulations (GDPR, CCPA, etc.)
- Implementing appropriate security controls for exported logs
- Managing access control to destination systems
- Data retention and deletion policies for exported logs

Mendix does not control or monitor where you send exported logs. Handle them according to your organization's data governance policies.

## Prerequisites

Before configuring Data Export Rules, ensure you have:

1. **Azure Subscription Permissions**
   - `Reader` role at the subscription level (to query Log Analytics Workspace and view available tables)
   - Owner or Contributor role on the resource group where you'll create destination resources

2. **Destination Resource**
   - An **Azure Event Hub** (in the same region as your Mendix on Azure environment), OR
   - An **Azure Storage Account** (StorageV1 or StorageV2, not Premium tier, same region)
   - The destination resource must be in your own resource group (not the managed Mendix resource group)

3. **Same Region Requirement**
   - Your destination Event Hub or Storage Account **must be in the same Azure region** as your Mendix on Azure Log Analytics Workspace
   - Cross-region export is not supported

## Step-by-Step: Export to Azure Storage Account

Follow these steps to configure log export to an Azure Storage Account for long-term archival or batch processing.

### Step 1: Create a Storage Account

1. In the Azure Portal, navigate to **Storage Accounts**
2. Click **+ Create**
3. Configure:
   - **Resource Group:** Choose a resource group you own (not the Mendix-managed resource group)
   - **Storage Account Name:** Choose a globally unique name
   - **Region:** **Must match** your Mendix on Azure environment region
   - **Performance:** Standard
   - **Redundancy:** LRS, ZRS, GRS, or RA-GRS (based on your retention requirements)
4. Under **Advanced** tab:
   - **Storage Account Kind:** StorageV2 (general purpose v2) or StorageV1
   - **Do NOT select** Premium or BlockBlobStorage
5. Click **Review + Create**, then **Create**

### Step 2: Configure Storage Account Firewall

{{% alert color="info" %}}
If your Storage Account has firewall rules enabled, you must allow Azure Monitor to write logs.
{{% /alert %}}

1. Navigate to your Storage Account
2. Go to **Networking** → **Firewalls and virtual networks**
3. Ensure **"Allow trusted Microsoft services to access this storage account"** is checked
4. Save changes

### Step 3: Locate Your Log Analytics Workspace

1. In the Azure Portal, navigate to **Resource Groups**
2. Find the managed resource group for your Mendix on Azure environment (format: `mrg-<app-name>-*`)
3. Locate the **Log Analytics Workspace** (name format: `<prefix>-<env-id>-alog`)
4. Click on the workspace to open it

{{% alert color="info" %}}
The workspace is in the managed resource group, but Mendix has granted you permission to configure Data Export Rules on it.
{{% /alert %}}

### Step 4: Create a Data Export Rule

1. In your Log Analytics Workspace, navigate to **Settings** → **Data Export**
2. Click **+ New export rule**
3. Configure the export rule:
   - **Export rule name:** Choose a descriptive name (e.g., `export-containerlogs-to-storage`)
   - **Source table:** Select **ContainerLogV2** (this contains your application logs)
   - **Destination:** Select **Storage Account**
   - **Subscription:** Select the subscription containing your Storage Account
   - **Storage Account:** Select the Storage Account you created in Step 1
4. Click **Create**

{{% alert color="warning" %}}
**Important:** Data Export Rules have a provisioning delay of approximately **30 minutes** before logs begin flowing to the destination.
{{% /alert %}}

### Step 5: Verify Export is Working

After waiting 30 minutes:

1. Navigate to your Storage Account
2. Go to **Storage Browser** → **Blob containers**
3. Look for a container named `am-` followed by the workspace resource ID
4. Navigate into the container to see exported log files (JSON format, organized by date/time)

The log files are in JSON Lines format (one JSON object per line) and organized in a folder structure:
```
am-<workspace-id>/
└── ContainerLogV2/
    └── <year>/
        └── <month>/
            └── <day>/
                └── <hour>/
                    └── <minute>/
                        └── PT05M.json
```

## Step-by-Step: Export to Azure Event Hubs

Follow these steps to configure log export to Azure Event Hubs for real-time streaming to third-party observability tools.

### Step 1: Create an Event Hub Namespace

1. In the Azure Portal, navigate to **Event Hubs**
2. Click **+ Create**
3. Configure:
   - **Resource Group:** Choose a resource group you own
   - **Namespace Name:** Choose a globally unique name
   - **Location:** **Must match** your Mendix on Azure environment region
   - **Pricing Tier:** Standard or Premium (Basic tier with log compaction is not supported)
   - **Throughput Units:** Start with 1-2, scale as needed
4. Click **Review + Create**, then **Create**

### Step 2: Create an Event Hub

1. Navigate to your Event Hub Namespace
2. Go to **Entities** → **Event Hubs**
3. Click **+ Event Hub**
4. Configure:
   - **Name:** Choose a name (e.g., `mendix-logs`)
   - **Partition Count:** 2-4 (for parallel processing)
   - **Message Retention:** 1-7 days (based on your downstream processing latency)
5. Click **Create**

### Step 3: Create a Data Export Rule

1. Navigate to your Mendix on Azure Log Analytics Workspace (see Step 3 in Storage Account section above)
2. Go to **Settings** → **Data Export**
3. Click **+ New export rule**
4. Configure:
   - **Export rule name:** `export-containerlogs-to-eventhub`
   - **Source table:** **ContainerLogV2**
   - **Destination:** **Event Hubs**
   - **Subscription:** Select the subscription containing your Event Hub
   - **Event Hub Namespace:** Select your namespace
   - **Event Hub Name:** Select the Event Hub you created (or leave blank to use default)
5. Click **Create**

{{% alert color="warning" %}}
Provisioning delay: Approximately **30 minutes** before logs begin flowing.
{{% /alert %}}

### Step 4: Verify Export is Working

After waiting 30 minutes:

1. Navigate to your Event Hub Namespace
2. Go to **Monitoring** → **Metrics**
3. Select metric: **Incoming Messages**
4. You should see messages arriving (one message per log batch)

Alternatively, use the Event Hubs Data Explorer:
1. Navigate to your Event Hub
2. Go to **Features** → **Process data** → **Explore**
3. View incoming log messages in real-time

## Example Integration Pipelines

{{% alert color="danger" %}}
**The following examples are OUTSIDE Mendix's supported product scope.**

Mendix does not provide support for configuring, operating, or troubleshooting these downstream integrations. You are fully responsible for implementing and maintaining your own integration pipelines. Contact the respective vendors for support with their tools.
{{% /alert %}}

### Event Hub → DataDog (Customer Responsibility - Not Supported by Mendix)

DataDog provides an Azure integration that can consume logs from Event Hubs:

1. **Setup:** Follow [DataDog's Azure Automated Log Forwarding guide](https://docs.datadoghq.com/logs/guide/azure-automated-log-forwarding/)
2. **Components:** Azure Function with DataDog forwarder, triggered by Event Hub
3. **Configuration:** You manage the Function App, DataDog API keys, and log parsing rules
4. **Support:** Contact DataDog support for issues with their forwarder or ingestion

### Storage Account → Azure Sentinel (Customer Responsibility - Not Supported by Mendix)

Azure Sentinel can ingest logs from Storage Accounts:

1. **Setup:** Configure a Sentinel Data Connector for Log Analytics
2. **Alternative:** Use Logic Apps to process JSON files from storage and send to Sentinel
3. **Configuration:** You manage the connector, parsing rules, and Sentinel workspace
4. **Support:** Contact Microsoft support for Sentinel-specific issues

### Storage Account → Long-Term Archive (Customer Responsibility - Not Supported by Mendix)

For compliance or audit requirements:

1. **Lifecycle Policies:** Configure Azure Storage lifecycle management to move logs to Cool or Archive tier
2. **Retention:** Set retention policies according to your compliance requirements
3. **Access:** Implement access controls and audit logging on the Storage Account

## Limits and Constraints

Be aware of these Azure platform limits when configuring Data Export Rules:

| Limit | Value | Description |
|-------|-------|-------------|
| Maximum rules per workspace | 10 | You can create up to 10 active Data Export Rules on a single Log Analytics Workspace |
| Storage Account restrictions | No Premium | Premium Storage Accounts and BlockBlobStorage are not supported |
| Event Hub tier restrictions | No Basic with compaction | Event Hub Basic tier with log compaction is not supported |
| Region requirement | Same region | Destination must be in the same Azure region as the Log Analytics Workspace |
| Provisioning delay | ~30 minutes | Allow approximately 30 minutes after creating a rule before logs begin flowing |
| Export scope | Full table | Data Export Rules export the entire table (no filtering). Use Azure Monitor query-time filtering if needed |
| Cross-tenant support | Not supported (v1) | Exporting to Event Hubs in a different Azure tenant is not supported in this version |

## Troubleshooting

### I can't see the Log Analytics Workspace tables

**Cause:** You need `Reader` role at the subscription level to query the workspace.

**Solution:**
1. Ask your Azure subscription administrator to grant you `Reader` role
2. The role should be assigned at the subscription level (not just resource group)
3. Wait a few minutes for permissions to propagate

### Permission denied when creating Data Export Rule

**Cause:** The Mendix platform may not have updated your environment with the Data Export permission yet.

**Solution:**
1. Contact Mendix Support to verify the permission has been applied to your environment
2. Allow up to 4 hours for permission changes to propagate after Mendix applies them

### No logs flowing after 30 minutes

**Possible causes:**
- Destination resource firewall blocks Log Analytics
- Storage Account is Premium tier (not supported)
- Event Hub is Basic tier with compaction (not supported)
- Destination is in a different region than the workspace

**Solution:**
1. Verify destination resource is in the **same region** as Log Analytics Workspace
2. Check Storage Account firewall allows **trusted Microsoft services**
3. Verify Storage Account is StorageV1 or StorageV2 (not Premium)
4. Check Event Hub tier is Standard or Premium (not Basic)
5. Review Azure Activity Log for any errors related to the export rule

### My Data Export Rule disappeared

**Cause:** This is very unlikely. Data Export Rules you create are persistent and not modified by Mendix updates.

**Solution:**
1. Verify you're looking at the correct Log Analytics Workspace
2. Check Azure Activity Log to see if someone deleted the rule
3. Contact Mendix Support if you believe the rule was inadvertently removed (rare)

### Issues with DataDog / Splunk / other third-party tools

{{% alert color="warning" %}}
**Out of scope:** Mendix does not support troubleshooting third-party integrations.
{{% /alert %}}

**Solution:**
1. Verify logs are successfully reaching your Event Hub or Storage Account (see "Verify Export is Working" sections above)
2. If logs are reaching the destination, the issue is downstream:
   - Contact DataDog support for DataDog forwarder issues
   - Contact Splunk support for Splunk connector issues
   - Contact the appropriate vendor for their tooling
3. Review the vendor's documentation for Azure integration troubleshooting

## Related Content

- [Monitoring Mendix on Azure with Grafana](/developerportal/deploy/mendix-on-azure/monitor/) - The primary supported monitoring solution
- [Support for Mendix on Azure](/developerportal/deploy/mendix-on-azure/support/) - Understanding support boundaries
- [Azure Monitor Logs Overview](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/data-platform-logs) - Microsoft's documentation on Log Analytics
- [Azure Data Export Rules Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/logs-data-export) - Detailed Azure documentation
