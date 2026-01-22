---
title: "Antivirus Exclusion"
url: /refguide/antivirus-exclusion/
description: "Describes how to configure antivirus exclusion in Studio Pro."
#If changing the URL of this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Antivirus software can sometimes impact the performance of Studio Pro. To mitigate these issues, you can configure antivirus exclusions for Studio Pro.

This document describes how to set up Microsoft Defender exclusions to ensure optimal performance.

## Antivirus Exclusion Overview

If you are using Microsoft Defender, it is recommended to add the app folder to the Microsoft Defender exclusions after loading an app:

{{< figure src="/attachments/refguide/installation/performance-tips/exclude-folder.png" class="no-border" width="300" >}}

If you are using a different antivirus solution, refer to your antivirus documentation for instructions on how to add exclusions. Make sure to exclude the app folder to prevent performance issues:

{{< figure src="/attachments/refguide/installation/performance-tips/antivirus-detected.png" class="no-border" width="300" >}}

### Excluding the App Folder

{{% alert color="info" %}}
This operation must be performed with administrator privileges.

Add your app folder, or the folder containing all your apps, to the list of exclusions for your antivirus software. Only do this with app directories you trust. Do not add *studiopro.exe* itself to the ignored processes.

Studio Pro uses different tools and subprocesses that are not covered if you only add Studio Pro to the list of exceptions for virus scanning, which is why it is best to mark the app directory for exclusion.
{{% /alert %}}

To exclude the app folder, click **Exclude Folder** in the notification.

After completion, a confirmation pop-up appears. If the operation fails, a failure pop-up is displayed instead.

### Disabling the Antivirus Exclusion Notification

Studio Pro displays a notification when an app is loaded, prompting you to exclude the app folder. To disable the notification, follow the steps below:

1. Open the **Edit** menu.
2. Click **Preferences** > **Advanced**.
3. Check **Antivirus exclusion** > **Do not show antivirus exclusion notifications**.
