---
title: "Configure the Advanced Settings for Private Mendix Platform"
linktitle: "Configure the Advanced Settings"
url: /private-mendix-platform-configuration/advanced/
description: "Documents the advanced configuration for the Private Mendix Platform."
weight: 90
tags: ["private mendix platform",  "private platform", "advanced configuration"]
---

## 1 Introduction

In this section, you can adjust the advanced configuration settings of your Private Mendix Platform.

## 2 MxAdmin Settings

By default, the platform has a default system administrator account called MxAdmin. You can disable the account by setting the **Disable MxAdmin** toggle to **Yes**.

{{% alert color="info" %}}
Ensure that you have at least one other user with the System Administrator role assigned before disabling MxAdmin.
{{% /alert %}}

## 3 MxAdmin Emails

To help ensure that any issues are promptly reported and resolved, you can specify one or more root email addressed that should be notified in case of system issues.

## 4 Scheduled Event

This tab shows a list of all the scheduled tasks and actions in the system, together with start time, end time, and status.

{{< figure src="/attachments/private-platform/pmp-wizard6.png" >}}
