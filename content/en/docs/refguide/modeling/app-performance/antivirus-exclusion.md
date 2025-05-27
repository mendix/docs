---
title: "Antivirus Exclusion"
url: /refguide/antivirus-exclusion/
description: "Describes how to configure antivirus exclusion in Studio Pro."
---

## Introduction

Antivirus software can sometimes impact the performance of Studio Pro. To mitigate these issues, you can configure antivirus exclusions for Studio Pro. For more information, see the [Antivirus Software](/refguide/performance-tips/#antivirus-software) section of the *Performance Tips*.

This document describes how to set up Microsoft Defender exclusions to ensure optimal performance.

## Antivirus Exclusion Overview

If you are using Microsoft Defender, it is recommended to add the app folder to the Microsoft Defender exclusions after loading an app:

{{< figure src="/attachments/refguide/modeling/app-performance/exclude-folder.png" class="no-border" width="300" >}}

### Excluding the App Folder

{{% alert color="info" %}}
This operation must be performed with administrator privileges.
{{% /alert %}}

To exclude the app folder, click **Exclude Folder** in the notification.

After completion, a confirmation pop-up appears. If the operation fails, a failure pop-up is displayed instead.

### Disabling the Antivirus Exclusion Notification

Studio Pro displays a notification when an app is loaded, prompting you to exclude the app folder. To disable the notification, follow the steps below:

1. Open the **Edit** menu.
2. Click **Preferences** > **Advanced**.
3. Check **Antivirus exclusion** > **Do not show antivirus exclusion notifications**.
