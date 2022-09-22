---
title: "Business Event Services"
url: /refguide/business-event-services/
weight: 4
description: "Overview of business event services in Studio Pro"
tags: ["studio pro", "consumed business event", "published business event"]
---

## 1 Introduction

Studio Pro [9.18](/releasenotes/studio-pro/9.18/) and above integrates with Mendix Business Events module functionality. With the [Mendix Business Events](/appstore/modules/business-events/) module, applications can signal when something important happens, and can independently subscribe to these events if they want to be informed. Business events are like a mailing list to share event notifications between apps.

### Adding the Services in Studio Pro

To add a service, right-click on a module in your app and go to **Add other** > **Published Business Event Service** or **Consumed Business Event Service**.

{{% alert color="warning" %}}
You must have the Mendix Business Events module installed for it to work properly. If it is not installed, you will be prompted to download it and add it to your app.
{{% /alert %}}

### 2 Published Business Event Service

To learn about publishing business events, see the [Publishing Business Events](/appstore/modules/business-events/#publish-be) section of *Mendix Business Events*.

### 3 Consumed Business Event Service

To learn about consuming business events, see the [Consuming Business Events](/appstore/modules/business-events/#consume-be) section of *Mendix Business Events*.