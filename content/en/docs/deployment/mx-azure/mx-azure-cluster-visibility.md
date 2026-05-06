---
title: "Cluster Visibility and Permissions"
url: /developerportal/deploy/mendix-on-azure/cluster-visibility/
description: "Describes how cluster visibility and editing permissions work in Mendix for Private Cloud on Azure based on user roles and Azure RBAC permissions."
weight: 8
---

## Introduction

The Cluster Overview page in Mendix for Private Cloud on Azure displays clusters based on your assigned role and Azure permissions. This document explains how cluster visibility and editing permissions work.

## Cluster Visibility

### All Users

All users who are members of a Mendix cluster namespace can see **initialized clusters** in the cluster overview page, regardless of their Azure RBAC permissions.

* **Initialized clusters** are always visible to all cluster namespace members
* This allows users to view cluster details and submit support tickets
* Clusters that are **ready-to-initialize** (not yet initialized) follow the standard Azure RBAC visibility rules

### Cluster Manager Role

Users with the **Cluster Manager** role have the same visibility as other users for initialized clusters, plus:

* Access to view and potentially edit cluster configuration (depending on Azure RBAC permissions)
* Ability to see clusters awaiting initialization (based on Azure RBAC permissions)

## Editing Cluster Settings

### Permission Requirements

To edit cluster settings, a user must have **both**:

1. **Cluster Manager** role (Mendix role)
2. **Azure Owner** or **Azure Contributor** role (Azure RBAC)

### Permission Scenarios

| User Type | Azure RBAC | Can View Initialized Clusters | Can Edit Clusters |
|-----------|------------|------------------------------|-------------------|
| Any cluster namespace member | Any | Yes | No |
| Cluster Manager | Reader | Yes | No |
| Cluster Manager | Owner/Contributor | Yes | Yes |

### Error Handling

If a Cluster Manager attempts to edit cluster settings without the required Azure Owner or Contributor role, an error message is displayed explaining that additional Azure permissions are required.

**Example error message:**
> "The user must be cluster manager to edit the Azure environment.You are not cluster manager of this Azure environment."

## Key Takeaways

* **Visibility**: All cluster namespace members can view initialized clusters to facilitate support and monitoring
* **Security**: Only Cluster Managers with appropriate Azure RBAC (Owner/Contributor) can modify cluster settings
* **Separation of Concerns**: 
  * Initialized clusters are visible to all namespace members regardless of Azure RBAC
  * Editing capabilities require both Cluster Manager role AND Azure Owner/Contributor permissions

## Read More

* [Configuring Mendix on Azure](/developerportal/deploy/mendix-on-azure/configuration/) – Configuration options available through the Mendix on Azure Portal
* [Support for Mendix on Azure](/developerportal/deploy/mendix-on-azure/support/) – Support model and shared responsibility
