---
title: "Cluster Visibility and Permissions"
url: /developerportal/deploy/mendix-on-azure/cluster-visibility/
description: "Describes how cluster visibility and editing permissions work in Mendix for Private Cloud on Azure based on user roles and Azure RBAC permissions."
weight: 8
---

## Introduction

The **Cluster Overview** page in Mendix on Azure displays clusters based on your assigned role and Azure permissions. This document explains how cluster visibility and editing permissions work.

## Overview

Below is a short summary of the key aspects of cluster visibility. For more information, refer to the following sections.

* Visibility - All cluster namespace members can view initialized clusters to facilitate support and monitoring.
* Security - Only Cluster Managers with appropriate Azure RBAC roles (Owner or Contributor) can modify cluster settings.
* Separation of Concerns: 
    * Initialized clusters are visible to all namespace members regardless of Azure RBAC.
    * Editing capabilities require both Cluster Manager role or Azure Owner or Contributor permissions.

## Cluster Visibility

### All Users

All users who are members of a Mendix cluster namespace can see initialized clusters in the cluster overview page, regardless of their Azure RBAC permissions. This allows all users to view cluster details and submit support tickets.

Clusters that are ready to initialize (that is, not yet initialized) follow the standard Azure RBAC visibility rules.

### Cluster Manager Role

Users with the Cluster Manager role have the same visibility as other users for initialized clusters, as well as the following:

* Access to view and potentially edit cluster configuration (depending on Azure RBAC permissions)
* Ability to see clusters awaiting initialization (based on Azure RBAC permissions)

## Editing Cluster Settings

### Permission Requirements

To edit cluster settings, a user must have the following roles:

* In Mendix - Cluster Manager
* In Azure RBAC - Azure Owner or Azure Contributor

### Permission Scenarios

| User Type | Azure RBAC | Can View Initialized Clusters | Can Edit Clusters |
| --- | --- | --- | --- |
| Any cluster namespace member | Any | Yes | No |
| Cluster Manager | Reader | Yes | No |
| Cluster Manager | Owner/Contributor | Yes | Yes |

### Error Handling

If a Cluster Manager attempts to edit cluster settings without the required Azure Owner or Contributor role, an error message like the following is displayed, explaining that additional Azure permissions are required:

*The user must be cluster manager to edit the Azure environment.You are not cluster manager of this Azure environment.*

## Read More

* [Configuring Mendix on Azure](/developerportal/deploy/mendix-on-azure/configuration/) – Configuration options available through the Mendix on Azure Portal
* [Support for Mendix on Azure](/developerportal/deploy/mendix-on-azure/support/) – Support model and shared responsibility
