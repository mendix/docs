---
title: "Private Cloud"
category: "Developer Portal"
description: "Release notes for Mendix for Private Cloud components"
tags: ["deployment", "cloud environment", "Mendix Cloud", "kubernetes", "private cloud", "on-premises"]
---

These release notes cover changes to [Mendix for Private Cloud](/developerportal/deploy/private-cloud) components. For release notes of the Mendix for Private Cloud deployment portal, see [Deployment](deployment).

## Mendix Operator v1.0.1 {#operator_1_0_1}

**Release date: August 8, 2019**

### Improvements

* We have added an additional field to the `MendixApp` CR which will allows the Deployment Portal to display the latest state for environments.
* We have improved compatibility with popular container image registries (such as Azure Container Registry). The build process can now recognize that the container image already has the necessary base layers and avoid downloading them again, saving time and network traffic.

## Mendix Gateway Agent v1.0.1 {#agent_1_0_1}

**Release date: August 8, 2019**

### Improvements

* We have improved reliability for sending Environment statuses to the Deployment Portal.
